var Il = Object.defineProperty;
var Nl = (e, t, n) => t in e ? Il(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var En = (e, t, n) => Nl(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as R, jsxs as ue, Fragment as Br } from "react/jsx-runtime";
import * as q from "react";
import Zt, { useState as Ve, useEffect as rn, useMemo as Lt, useRef as pr } from "react";
import _l from "@emotion/styled";
import { ThemeContext as Dl } from "@emotion/react";
import { Box as se, Button as $n, Radio as Ml, Typography as le, ToggleButtonGroup as $l, ToggleButton as _i, Tooltip as zt, IconButton as vt, Stack as Ll, Select as Di, MenuItem as Sn, TextField as zl, OutlinedInput as Bl, InputAdornment as Fl, Popper as jl, List as Ul, ListItem as Vl, ListItemButton as Wl, Dialog as Hl, DialogTitle as ql, DialogContent as Yl, Divider as Rt, Chip as gt, DialogActions as Gl } from "@mui/material";
import { Add as Mi, Close as fa } from "@mui/icons-material";
import * as Kl from "react-dom";
import wn from "react-dom";
function li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kn = { exports: {} }, Cn = { exports: {} }, pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $i;
function Xl() {
  if ($i) return pe;
  $i = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
  function w(k) {
    if (typeof k == "object" && k !== null) {
      var v = k.$$typeof;
      switch (v) {
        case t:
          switch (k = k.type, k) {
            case u:
            case s:
            case r:
            case o:
            case i:
            case f:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case l:
                case c:
                case x:
                case p:
                case a:
                  return k;
                default:
                  return v;
              }
          }
        case n:
          return v;
      }
    }
  }
  function O(k) {
    return w(k) === s;
  }
  return pe.AsyncMode = u, pe.ConcurrentMode = s, pe.ContextConsumer = l, pe.ContextProvider = a, pe.Element = t, pe.ForwardRef = c, pe.Fragment = r, pe.Lazy = x, pe.Memo = p, pe.Portal = n, pe.Profiler = o, pe.StrictMode = i, pe.Suspense = f, pe.isAsyncMode = function(k) {
    return O(k) || w(k) === u;
  }, pe.isConcurrentMode = O, pe.isContextConsumer = function(k) {
    return w(k) === l;
  }, pe.isContextProvider = function(k) {
    return w(k) === a;
  }, pe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, pe.isForwardRef = function(k) {
    return w(k) === c;
  }, pe.isFragment = function(k) {
    return w(k) === r;
  }, pe.isLazy = function(k) {
    return w(k) === x;
  }, pe.isMemo = function(k) {
    return w(k) === p;
  }, pe.isPortal = function(k) {
    return w(k) === n;
  }, pe.isProfiler = function(k) {
    return w(k) === o;
  }, pe.isStrictMode = function(k) {
    return w(k) === i;
  }, pe.isSuspense = function(k) {
    return w(k) === f;
  }, pe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === s || k === o || k === i || k === f || k === d || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === p || k.$$typeof === a || k.$$typeof === l || k.$$typeof === c || k.$$typeof === E || k.$$typeof === S || k.$$typeof === N || k.$$typeof === h);
  }, pe.typeOf = w, pe;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Li;
function Ql() {
  return Li || (Li = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, N = e ? Symbol.for("react.scope") : 60119;
    function w(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === r || M === s || M === o || M === i || M === f || M === d || typeof M == "object" && M !== null && (M.$$typeof === x || M.$$typeof === p || M.$$typeof === a || M.$$typeof === l || M.$$typeof === c || M.$$typeof === E || M.$$typeof === S || M.$$typeof === N || M.$$typeof === h);
    }
    function O(M) {
      if (typeof M == "object" && M !== null) {
        var ge = M.$$typeof;
        switch (ge) {
          case t:
            var Ne = M.type;
            switch (Ne) {
              case u:
              case s:
              case r:
              case o:
              case i:
              case f:
                return Ne;
              default:
                var Oe = Ne && Ne.$$typeof;
                switch (Oe) {
                  case l:
                  case c:
                  case x:
                  case p:
                  case a:
                    return Oe;
                  default:
                    return ge;
                }
            }
          case n:
            return ge;
        }
      }
    }
    var k = u, v = s, L = l, U = a, F = t, g = c, A = r, _ = x, j = p, D = n, C = o, $ = i, G = f, te = !1;
    function fe(M) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(M) || O(M) === u;
    }
    function m(M) {
      return O(M) === s;
    }
    function B(M) {
      return O(M) === l;
    }
    function K(M) {
      return O(M) === a;
    }
    function b(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function V(M) {
      return O(M) === c;
    }
    function Y(M) {
      return O(M) === r;
    }
    function H(M) {
      return O(M) === x;
    }
    function Q(M) {
      return O(M) === p;
    }
    function Z(M) {
      return O(M) === n;
    }
    function ie(M) {
      return O(M) === o;
    }
    function W(M) {
      return O(M) === i;
    }
    function re(M) {
      return O(M) === f;
    }
    de.AsyncMode = k, de.ConcurrentMode = v, de.ContextConsumer = L, de.ContextProvider = U, de.Element = F, de.ForwardRef = g, de.Fragment = A, de.Lazy = _, de.Memo = j, de.Portal = D, de.Profiler = C, de.StrictMode = $, de.Suspense = G, de.isAsyncMode = fe, de.isConcurrentMode = m, de.isContextConsumer = B, de.isContextProvider = K, de.isElement = b, de.isForwardRef = V, de.isFragment = Y, de.isLazy = H, de.isMemo = Q, de.isPortal = Z, de.isProfiler = ie, de.isStrictMode = W, de.isSuspense = re, de.isValidElementType = w, de.typeOf = O;
  }()), de;
}
var zi;
function pa() {
  return zi || (zi = 1, process.env.NODE_ENV === "production" ? Cn.exports = Xl() : Cn.exports = Ql()), Cn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var dr, Bi;
function Jl() {
  if (Bi) return dr;
  Bi = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, l = 0; l < 10; l++)
        a["_" + String.fromCharCode(l)] = l;
      var u = Object.getOwnPropertyNames(a).map(function(c) {
        return a[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var s = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        s[c] = c;
      }), Object.keys(Object.assign({}, s)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return dr = i() ? Object.assign : function(o, a) {
    for (var l, u = r(o), s, c = 1; c < arguments.length; c++) {
      l = Object(arguments[c]);
      for (var f in l)
        t.call(l, f) && (u[f] = l[f]);
      if (e) {
        s = e(l);
        for (var d = 0; d < s.length; d++)
          n.call(l, s[d]) && (u[s[d]] = l[s[d]]);
      }
    }
    return u;
  }, dr;
}
var hr, Fi;
function si() {
  if (Fi) return hr;
  Fi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return hr = e, hr;
}
var mr, ji;
function da() {
  return ji || (ji = 1, mr = Function.call.bind(Object.prototype.hasOwnProperty)), mr;
}
var gr, Ui;
function Zl() {
  if (Ui) return gr;
  Ui = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ si(), n = {}, r = /* @__PURE__ */ da();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, l, u, s) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (r(o, c)) {
          var f;
          try {
            if (typeof o[c] != "function") {
              var d = Error(
                (u || "React class") + ": " + l + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = o[c](a, c, u, l, null, t);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + l + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var p = s ? s() : "";
            e(
              "Failed " + l + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, gr = i, gr;
}
var yr, Vi;
function es() {
  if (Vi) return yr;
  Vi = 1;
  var e = pa(), t = Jl(), n = /* @__PURE__ */ si(), r = /* @__PURE__ */ da(), i = /* @__PURE__ */ Zl(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var u = "Warning: " + l;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return yr = function(l, u) {
    var s = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(m) {
      var B = m && (s && m[s] || m[c]);
      if (typeof B == "function")
        return B;
    }
    var d = "<<anonymous>>", p = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: N(),
      arrayOf: w,
      element: O(),
      elementType: k(),
      instanceOf: v,
      node: g(),
      objectOf: U,
      oneOf: L,
      oneOfType: F,
      shape: _,
      exact: j
    };
    function x(m, B) {
      return m === B ? m !== 0 || 1 / m === 1 / B : m !== m && B !== B;
    }
    function h(m, B) {
      this.message = m, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function E(m) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, K = 0;
      function b(Y, H, Q, Z, ie, W, re) {
        if (Z = Z || d, W = W || Q, re !== n) {
          if (u) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ge = Z + ":" + Q;
            !B[ge] && // Avoid spamming the console because they are often not actionable except for lib authors
            K < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + W + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[ge] = !0, K++);
          }
        }
        return H[Q] == null ? Y ? H[Q] === null ? new h("The " + ie + " `" + W + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new h("The " + ie + " `" + W + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : m(H, Q, Z, ie, W);
      }
      var V = b.bind(null, !1);
      return V.isRequired = b.bind(null, !0), V;
    }
    function S(m) {
      function B(K, b, V, Y, H, Q) {
        var Z = K[b], ie = $(Z);
        if (ie !== m) {
          var W = G(Z);
          return new h(
            "Invalid " + Y + " `" + H + "` of type " + ("`" + W + "` supplied to `" + V + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return E(B);
    }
    function N() {
      return E(a);
    }
    function w(m) {
      function B(K, b, V, Y, H) {
        if (typeof m != "function")
          return new h("Property `" + H + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var Q = K[b];
        if (!Array.isArray(Q)) {
          var Z = $(Q);
          return new h("Invalid " + Y + " `" + H + "` of type " + ("`" + Z + "` supplied to `" + V + "`, expected an array."));
        }
        for (var ie = 0; ie < Q.length; ie++) {
          var W = m(Q, ie, V, Y, H + "[" + ie + "]", n);
          if (W instanceof Error)
            return W;
        }
        return null;
      }
      return E(B);
    }
    function O() {
      function m(B, K, b, V, Y) {
        var H = B[K];
        if (!l(H)) {
          var Q = $(H);
          return new h("Invalid " + V + " `" + Y + "` of type " + ("`" + Q + "` supplied to `" + b + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(m);
    }
    function k() {
      function m(B, K, b, V, Y) {
        var H = B[K];
        if (!e.isValidElementType(H)) {
          var Q = $(H);
          return new h("Invalid " + V + " `" + Y + "` of type " + ("`" + Q + "` supplied to `" + b + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(m);
    }
    function v(m) {
      function B(K, b, V, Y, H) {
        if (!(K[b] instanceof m)) {
          var Q = m.name || d, Z = fe(K[b]);
          return new h("Invalid " + Y + " `" + H + "` of type " + ("`" + Z + "` supplied to `" + V + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return E(B);
    }
    function L(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function B(K, b, V, Y, H) {
        for (var Q = K[b], Z = 0; Z < m.length; Z++)
          if (x(Q, m[Z]))
            return null;
        var ie = JSON.stringify(m, function(re, M) {
          var ge = G(M);
          return ge === "symbol" ? String(M) : M;
        });
        return new h("Invalid " + Y + " `" + H + "` of value `" + String(Q) + "` " + ("supplied to `" + V + "`, expected one of " + ie + "."));
      }
      return E(B);
    }
    function U(m) {
      function B(K, b, V, Y, H) {
        if (typeof m != "function")
          return new h("Property `" + H + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var Q = K[b], Z = $(Q);
        if (Z !== "object")
          return new h("Invalid " + Y + " `" + H + "` of type " + ("`" + Z + "` supplied to `" + V + "`, expected an object."));
        for (var ie in Q)
          if (r(Q, ie)) {
            var W = m(Q, ie, V, Y, H + "." + ie, n);
            if (W instanceof Error)
              return W;
          }
        return null;
      }
      return E(B);
    }
    function F(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var B = 0; B < m.length; B++) {
        var K = m[B];
        if (typeof K != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(K) + " at index " + B + "."
          ), a;
      }
      function b(V, Y, H, Q, Z) {
        for (var ie = [], W = 0; W < m.length; W++) {
          var re = m[W], M = re(V, Y, H, Q, Z, n);
          if (M == null)
            return null;
          M.data && r(M.data, "expectedType") && ie.push(M.data.expectedType);
        }
        var ge = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
        return new h("Invalid " + Q + " `" + Z + "` supplied to " + ("`" + H + "`" + ge + "."));
      }
      return E(b);
    }
    function g() {
      function m(B, K, b, V, Y) {
        return D(B[K]) ? null : new h("Invalid " + V + " `" + Y + "` supplied to " + ("`" + b + "`, expected a ReactNode."));
      }
      return E(m);
    }
    function A(m, B, K, b, V) {
      return new h(
        (m || "React class") + ": " + B + " type `" + K + "." + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function _(m) {
      function B(K, b, V, Y, H) {
        var Q = K[b], Z = $(Q);
        if (Z !== "object")
          return new h("Invalid " + Y + " `" + H + "` of type `" + Z + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var ie in m) {
          var W = m[ie];
          if (typeof W != "function")
            return A(V, Y, H, ie, G(W));
          var re = W(Q, ie, V, Y, H + "." + ie, n);
          if (re)
            return re;
        }
        return null;
      }
      return E(B);
    }
    function j(m) {
      function B(K, b, V, Y, H) {
        var Q = K[b], Z = $(Q);
        if (Z !== "object")
          return new h("Invalid " + Y + " `" + H + "` of type `" + Z + "` " + ("supplied to `" + V + "`, expected `object`."));
        var ie = t({}, K[b], m);
        for (var W in ie) {
          var re = m[W];
          if (r(m, W) && typeof re != "function")
            return A(V, Y, H, W, G(re));
          if (!re)
            return new h(
              "Invalid " + Y + " `" + H + "` key `" + W + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(K[b], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var M = re(Q, W, V, Y, H + "." + W, n);
          if (M)
            return M;
        }
        return null;
      }
      return E(B);
    }
    function D(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(D);
          if (m === null || l(m))
            return !0;
          var B = f(m);
          if (B) {
            var K = B.call(m), b;
            if (B !== m.entries) {
              for (; !(b = K.next()).done; )
                if (!D(b.value))
                  return !1;
            } else
              for (; !(b = K.next()).done; ) {
                var V = b.value;
                if (V && !D(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function C(m, B) {
      return m === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function $(m) {
      var B = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : C(B, m) ? "symbol" : B;
    }
    function G(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var B = $(m);
      if (B === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function te(m) {
      var B = G(m);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function fe(m) {
      return !m.constructor || !m.constructor.name ? d : m.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, yr;
}
var br, Wi;
function ts() {
  if (Wi) return br;
  Wi = 1;
  var e = /* @__PURE__ */ si();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, br = function() {
    function r(a, l, u, s, c, f) {
      if (f !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, br;
}
var Hi;
function ns() {
  if (Hi) return kn.exports;
  if (Hi = 1, process.env.NODE_ENV !== "production") {
    var e = pa(), t = !0;
    kn.exports = /* @__PURE__ */ es()(e.isElement, t);
  } else
    kn.exports = /* @__PURE__ */ ts()();
  return kn.exports;
}
var rs = /* @__PURE__ */ ns();
const y = /* @__PURE__ */ li(rs);
function ha(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = ha(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function rt() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = ha(e)) && (r && (r += " "), r += t);
  return r;
}
function pn(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const o = e[i];
    let a = "", l = !0;
    for (let u = 0; u < o.length; u += 1) {
      const s = o[u];
      s && (a += (l === !0 ? "" : " ") + t(s), l = !1, n && n[s] && (a += " " + n[s]));
    }
    r[i] = a;
  }
  return r;
}
function Ln(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const o = e[t], a = i || t;
  return o == null ? null : o && o.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const is = y.oneOfType([y.func, y.object]);
function dn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function os(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function as(e, t, n, r, i) {
  const o = e[t], a = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof o == "function" && !os(o) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ls = dn(y.elementType, as);
function ss(e) {
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
function ma(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const o = ss(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${o}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function ga(e, t, ...n) {
  return e[t] === void 0 ? null : ma(e, t, ...n);
}
function Fr() {
  return null;
}
ga.isRequired = ma;
Fr.isRequired = Fr;
const ya = process.env.NODE_ENV === "production" ? Fr : ga;
function us(e) {
  return typeof e == "string";
}
function ut(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function St(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ut(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Tn = { exports: {} }, he = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qi;
function cs() {
  if (qi) return he;
  qi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), p = Symbol.for("react.client.reference");
  function x(h) {
    if (typeof h == "object" && h !== null) {
      var E = h.$$typeof;
      switch (E) {
        case e:
          switch (h = h.type, h) {
            case n:
            case i:
            case r:
            case u:
            case s:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case a:
                case l:
                case f:
                case c:
                  return h;
                case o:
                  return h;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return he.ContextConsumer = o, he.ContextProvider = a, he.Element = e, he.ForwardRef = l, he.Fragment = n, he.Lazy = f, he.Memo = c, he.Portal = t, he.Profiler = i, he.StrictMode = r, he.Suspense = u, he.SuspenseList = s, he.isContextConsumer = function(h) {
    return x(h) === o;
  }, he.isContextProvider = function(h) {
    return x(h) === a;
  }, he.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, he.isForwardRef = function(h) {
    return x(h) === l;
  }, he.isFragment = function(h) {
    return x(h) === n;
  }, he.isLazy = function(h) {
    return x(h) === f;
  }, he.isMemo = function(h) {
    return x(h) === c;
  }, he.isPortal = function(h) {
    return x(h) === t;
  }, he.isProfiler = function(h) {
    return x(h) === i;
  }, he.isStrictMode = function(h) {
    return x(h) === r;
  }, he.isSuspense = function(h) {
    return x(h) === u;
  }, he.isSuspenseList = function(h) {
    return x(h) === s;
  }, he.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === i || h === r || h === u || h === s || h === d || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === c || h.$$typeof === a || h.$$typeof === o || h.$$typeof === l || h.$$typeof === p || h.getModuleId !== void 0);
  }, he.typeOf = x, he;
}
var me = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function fs() {
  return Yi || (Yi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h) {
      if (typeof h == "object" && h !== null) {
        var E = h.$$typeof;
        switch (E) {
          case t:
            switch (h = h.type, h) {
              case r:
              case o:
              case i:
              case s:
              case c:
                return h;
              default:
                switch (h = h && h.$$typeof, h) {
                  case l:
                  case u:
                  case d:
                  case f:
                    return h;
                  case a:
                    return h;
                  default:
                    return E;
                }
            }
          case n:
            return E;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
    me.ContextConsumer = a, me.ContextProvider = l, me.Element = t, me.ForwardRef = u, me.Fragment = r, me.Lazy = d, me.Memo = f, me.Portal = n, me.Profiler = o, me.StrictMode = i, me.Suspense = s, me.SuspenseList = c, me.isContextConsumer = function(h) {
      return e(h) === a;
    }, me.isContextProvider = function(h) {
      return e(h) === l;
    }, me.isElement = function(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }, me.isForwardRef = function(h) {
      return e(h) === u;
    }, me.isFragment = function(h) {
      return e(h) === r;
    }, me.isLazy = function(h) {
      return e(h) === d;
    }, me.isMemo = function(h) {
      return e(h) === f;
    }, me.isPortal = function(h) {
      return e(h) === n;
    }, me.isProfiler = function(h) {
      return e(h) === o;
    }, me.isStrictMode = function(h) {
      return e(h) === i;
    }, me.isSuspense = function(h) {
      return e(h) === s;
    }, me.isSuspenseList = function(h) {
      return e(h) === c;
    }, me.isValidElementType = function(h) {
      return typeof h == "string" || typeof h == "function" || h === r || h === o || h === i || h === s || h === c || h === p || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === l || h.$$typeof === a || h.$$typeof === u || h.$$typeof === x || h.getModuleId !== void 0);
    }, me.typeOf = e;
  }()), me;
}
var Gi;
function ps() {
  return Gi || (Gi = 1, process.env.NODE_ENV === "production" ? Tn.exports = /* @__PURE__ */ cs() : Tn.exports = /* @__PURE__ */ fs()), Tn.exports;
}
var zn = /* @__PURE__ */ ps();
function nt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ba(e) {
  if (/* @__PURE__ */ q.isValidElement(e) || zn.isValidElementType(e) || !nt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ba(e[n]);
  }), t;
}
function je(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return nt(e) && nt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ q.isValidElement(t[i]) || zn.isValidElementType(t[i]) ? r[i] = t[i] : nt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && nt(e[i]) ? r[i] = je(e[i], t[i], n) : n.clone ? r[i] = nt(t[i]) ? ba(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
function on(e, t) {
  return t ? je(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ft = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.string, y.object, y.array]) : {};
function ds(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    var a, l;
    const o = /min-width:\s*([0-9.]+)/;
    return +(((a = r.match(o)) == null ? void 0 : a[1]) || 0) - +(((l = i.match(o)) == null ? void 0 : l[1]) || 0);
  });
  return n.length ? n.reduce((r, i) => {
    const o = t[i];
    return delete r[i], r[i] = o, r;
  }, {
    ...t
  }) : t;
}
function hs(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function ms(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ut(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, o = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(o);
}
function gs(e) {
  const t = (o, a) => o.replace("@media", a ? `@container ${a}` : "@container");
  function n(o, a) {
    o.up = (...l) => t(e.breakpoints.up(...l), a), o.down = (...l) => t(e.breakpoints.down(...l), a), o.between = (...l) => t(e.breakpoints.between(...l), a), o.only = (...l) => t(e.breakpoints.only(...l), a), o.not = (...l) => {
      const u = t(e.breakpoints.not(...l), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const r = {}, i = (o) => (n(r, o), r);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const Gn = {
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
}, Ki = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Gn[e]}px)`
}, ys = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Gn[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function it(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || Ki;
    return t.reduce((a, l, u) => (a[o.up(o.keys[u])] = n(t[u]), a), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || Ki;
    return Object.keys(t).reduce((a, l) => {
      if (hs(o.keys, l)) {
        const u = ms(r.containerQueries ? r : ys, l);
        u && (a[u] = n(t[l], l));
      } else if (Object.keys(o.values || Gn).includes(l)) {
        const u = o.up(l);
        a[u] = n(t[l], l);
      } else {
        const u = l;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return n(t);
}
function bs(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function xs(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Kn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Bn(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Kn(e, n) || r, t && (i = t(i, r, e)), i;
}
function ke(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (a) => {
    if (a[t] == null)
      return null;
    const l = a[t], u = a.theme, s = Kn(u, r) || {};
    return it(a, l, (f) => {
      let d = Bn(s, i, f);
      return f === d && typeof f == "string" && (d = Bn(s, i, `${t}${f === "default" ? "" : St(f)}`, f)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ft
  } : {}, o.filterProps = [t], o;
}
function vs(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Es = {
  m: "margin",
  p: "padding"
}, Ss = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Xi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ws = vs((e) => {
  if (e.length > 2)
    if (Xi[e])
      e = Xi[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Es[t], i = Ss[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), Xn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Qn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ks = [...Xn, ...Qn];
function hn(e, t, n, r) {
  const i = Kn(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && typeof o != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${o}.`), typeof i == "string" ? `calc(${o} * ${i})` : i * o) : Array.isArray(i) ? (o) => {
    if (typeof o == "string")
      return o;
    const a = Math.abs(o);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = i[a];
    return o >= 0 ? l : typeof l == "number" ? -l : `-${l}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ui(e) {
  return hn(e, "spacing", 8, "spacing");
}
function mn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Cs(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = mn(t, n), r), {});
}
function Ts(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = ws(n), o = Cs(i, r), a = e[n];
  return it(e, a, o);
}
function xa(e, t) {
  const n = ui(e.theme);
  return Object.keys(e).map((r) => Ts(e, t, r, n)).reduce(on, {});
}
function Se(e) {
  return xa(e, Xn);
}
Se.propTypes = process.env.NODE_ENV !== "production" ? Xn.reduce((e, t) => (e[t] = ft, e), {}) : {};
Se.filterProps = Xn;
function we(e) {
  return xa(e, Qn);
}
we.propTypes = process.env.NODE_ENV !== "production" ? Qn.reduce((e, t) => (e[t] = ft, e), {}) : {};
we.filterProps = Qn;
process.env.NODE_ENV !== "production" && ks.reduce((e, t) => (e[t] = ft, e), {});
function Jn(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? on(i, t[o](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function We(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function qe(e, t) {
  return ke({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Os = qe("border", We), Rs = qe("borderTop", We), As = qe("borderRight", We), Ps = qe("borderBottom", We), Is = qe("borderLeft", We), Ns = qe("borderColor"), _s = qe("borderTopColor"), Ds = qe("borderRightColor"), Ms = qe("borderBottomColor"), $s = qe("borderLeftColor"), Ls = qe("outline", We), zs = qe("outlineColor"), Zn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = hn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: mn(t, r)
    });
    return it(e, e.borderRadius, n);
  }
  return null;
};
Zn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ft
} : {};
Zn.filterProps = ["borderRadius"];
Jn(Os, Rs, As, Ps, Is, Ns, _s, Ds, Ms, $s, Zn, Ls, zs);
const er = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = hn(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: mn(t, r)
    });
    return it(e, e.gap, n);
  }
  return null;
};
er.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ft
} : {};
er.filterProps = ["gap"];
const tr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = hn(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: mn(t, r)
    });
    return it(e, e.columnGap, n);
  }
  return null;
};
tr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ft
} : {};
tr.filterProps = ["columnGap"];
const nr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = hn(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: mn(t, r)
    });
    return it(e, e.rowGap, n);
  }
  return null;
};
nr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ft
} : {};
nr.filterProps = ["rowGap"];
const Bs = ke({
  prop: "gridColumn"
}), Fs = ke({
  prop: "gridRow"
}), js = ke({
  prop: "gridAutoFlow"
}), Us = ke({
  prop: "gridAutoColumns"
}), Vs = ke({
  prop: "gridAutoRows"
}), Ws = ke({
  prop: "gridTemplateColumns"
}), Hs = ke({
  prop: "gridTemplateRows"
}), qs = ke({
  prop: "gridTemplateAreas"
}), Ys = ke({
  prop: "gridArea"
});
Jn(er, tr, nr, Bs, Fs, js, Us, Vs, Ws, Hs, qs, Ys);
function Bt(e, t) {
  return t === "grey" ? t : e;
}
const Gs = ke({
  prop: "color",
  themeKey: "palette",
  transform: Bt
}), Ks = ke({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Bt
}), Xs = ke({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Bt
});
Jn(Gs, Ks, Xs);
function Be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Qs = ke({
  prop: "width",
  transform: Be
}), ci = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, o, a, l, u;
      const r = ((a = (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : o.values) == null ? void 0 : a[n]) || Gn[n];
      return r ? ((u = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Be(n)
      };
    };
    return it(e, e.maxWidth, t);
  }
  return null;
};
ci.filterProps = ["maxWidth"];
const Js = ke({
  prop: "minWidth",
  transform: Be
}), Zs = ke({
  prop: "height",
  transform: Be
}), eu = ke({
  prop: "maxHeight",
  transform: Be
}), tu = ke({
  prop: "minHeight",
  transform: Be
});
ke({
  prop: "size",
  cssProperty: "width",
  transform: Be
});
ke({
  prop: "size",
  cssProperty: "height",
  transform: Be
});
const nu = ke({
  prop: "boxSizing"
});
Jn(Qs, ci, Js, Zs, eu, tu, nu);
const rr = {
  // borders
  border: {
    themeKey: "borders",
    transform: We
  },
  borderTop: {
    themeKey: "borders",
    transform: We
  },
  borderRight: {
    themeKey: "borders",
    transform: We
  },
  borderBottom: {
    themeKey: "borders",
    transform: We
  },
  borderLeft: {
    themeKey: "borders",
    transform: We
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
    transform: We
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Zn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Bt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Bt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Bt
  },
  // spacing
  p: {
    style: we
  },
  pt: {
    style: we
  },
  pr: {
    style: we
  },
  pb: {
    style: we
  },
  pl: {
    style: we
  },
  px: {
    style: we
  },
  py: {
    style: we
  },
  padding: {
    style: we
  },
  paddingTop: {
    style: we
  },
  paddingRight: {
    style: we
  },
  paddingBottom: {
    style: we
  },
  paddingLeft: {
    style: we
  },
  paddingX: {
    style: we
  },
  paddingY: {
    style: we
  },
  paddingInline: {
    style: we
  },
  paddingInlineStart: {
    style: we
  },
  paddingInlineEnd: {
    style: we
  },
  paddingBlock: {
    style: we
  },
  paddingBlockStart: {
    style: we
  },
  paddingBlockEnd: {
    style: we
  },
  m: {
    style: Se
  },
  mt: {
    style: Se
  },
  mr: {
    style: Se
  },
  mb: {
    style: Se
  },
  ml: {
    style: Se
  },
  mx: {
    style: Se
  },
  my: {
    style: Se
  },
  margin: {
    style: Se
  },
  marginTop: {
    style: Se
  },
  marginRight: {
    style: Se
  },
  marginBottom: {
    style: Se
  },
  marginLeft: {
    style: Se
  },
  marginX: {
    style: Se
  },
  marginY: {
    style: Se
  },
  marginInline: {
    style: Se
  },
  marginInlineStart: {
    style: Se
  },
  marginInlineEnd: {
    style: Se
  },
  marginBlock: {
    style: Se
  },
  marginBlockStart: {
    style: Se
  },
  marginBlockEnd: {
    style: Se
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
    style: er
  },
  rowGap: {
    style: nr
  },
  columnGap: {
    style: tr
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
    transform: Be
  },
  maxWidth: {
    style: ci
  },
  minWidth: {
    transform: Be
  },
  height: {
    transform: Be
  },
  maxHeight: {
    transform: Be
  },
  minHeight: {
    transform: Be
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
function ru(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function iu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ou() {
  function e(n, r, i, o) {
    const a = {
      [n]: r,
      theme: i
    }, l = o[n];
    if (!l)
      return {
        [n]: r
      };
    const {
      cssProperty: u = n,
      themeKey: s,
      transform: c,
      style: f
    } = l;
    if (r == null)
      return null;
    if (s === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = Kn(i, s) || {};
    return f ? f(a) : it(a, r, (x) => {
      let h = Bn(d, c, x);
      return x === h && typeof x == "string" && (h = Bn(d, c, `${n}${x === "default" ? "" : St(x)}`, x)), u === !1 ? h : {
        [u]: h
      };
    });
  }
  function t(n) {
    const {
      sx: r,
      theme: i = {}
    } = n || {};
    if (!r)
      return null;
    const o = i.unstable_sxConfig ?? rr;
    function a(l) {
      let u = l;
      if (typeof l == "function")
        u = l(i);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const s = bs(i.breakpoints), c = Object.keys(s);
      let f = s;
      return Object.keys(u).forEach((d) => {
        const p = iu(u[d], i);
        if (p != null)
          if (typeof p == "object")
            if (o[d])
              f = on(f, e(d, p, i, o));
            else {
              const x = it({
                theme: i
              }, p, (h) => ({
                [d]: h
              }));
              ru(x, p) ? f[d] = t({
                sx: p,
                theme: i
              }) : f = on(f, x);
            }
          else
            f = on(f, e(d, p, i, o));
      }), ds(i, xs(c, f));
    }
    return Array.isArray(r) ? r.map(a) : a(r);
  }
  return t;
}
const jt = ou();
jt.filterProps = ["sx"];
function au(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
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
var lu = {
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
function su(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var uu = /[A-Z]|^ms/g, cu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, va = function(t) {
  return t.charCodeAt(1) === 45;
}, Qi = function(t) {
  return t != null && typeof t != "boolean";
}, xr = /* @__PURE__ */ su(function(e) {
  return va(e) ? e : e.replace(uu, "-$&").toLowerCase();
}), Ji = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(cu, function(r, i, o) {
          return st = {
            name: i,
            styles: o,
            next: st
          }, i;
        });
  }
  return lu[t] !== 1 && !va(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Fn(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1)
        return st = {
          name: i.name,
          styles: i.styles,
          next: st
        }, i.name;
      var o = n;
      if (o.styles !== void 0) {
        var a = o.next;
        if (a !== void 0)
          for (; a !== void 0; )
            st = {
              name: a.name,
              styles: a.styles,
              next: st
            }, a = a.next;
        var l = o.styles + ";";
        return l;
      }
      return fu(e, t, n);
    }
  }
  var u = n;
  return u;
}
function fu(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Fn(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var a = n[o];
      if (typeof a != "object") {
        var l = a;
        Qi(l) && (r += xr(o) + ":" + Ji(o, l) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var u = 0; u < a.length; u++)
          Qi(a[u]) && (r += xr(o) + ":" + Ji(o, a[u]) + ";");
      else {
        var s = Fn(e, t, a);
        switch (o) {
          case "animation":
          case "animationName": {
            r += xr(o) + ":" + s + ";";
            break;
          }
          default:
            r += o + "{" + s + "}";
        }
      }
    }
  return r;
}
var Zi = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function pu(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  st = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += Fn(n, t, o);
  else {
    var a = o;
    i += a[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += Fn(n, t, e[l]), r) {
      var u = o;
      i += u[l];
    }
  Zi.lastIndex = 0;
  for (var s = "", c; (c = Zi.exec(i)) !== null; )
    s += "-" + c[1];
  var f = au(i) + s;
  return {
    name: f,
    styles: i,
    next: st
  };
}
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function du(e, t) {
  const n = _l(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function hu(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const eo = [];
function to(e) {
  return eo[0] = e, pu(eo);
}
const mu = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function gu(e) {
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
    ...i
  } = e, o = mu(t), a = Object.keys(o);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function s(d, p) {
    const x = a.indexOf(p);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(x !== -1 && typeof t[a[x]] == "number" ? t[a[x]] : p) - r / 100}${n})`;
  }
  function c(d) {
    return a.indexOf(d) + 1 < a.length ? s(d, a[a.indexOf(d) + 1]) : l(d);
  }
  function f(d) {
    const p = a.indexOf(d);
    return p === 0 ? l(a[1]) : p === a.length - 1 ? u(a[p]) : s(d, a[a.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: o,
    up: l,
    down: u,
    between: s,
    only: c,
    not: f,
    unit: n,
    ...i
  };
}
const yu = {
  borderRadius: 4
};
function Ea(e = 8, t = ui({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((o) => {
    const a = t(o);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function bu(e, t) {
  var r;
  const n = this;
  if (n.vars) {
    if (!((r = n.colorSchemes) != null && r[e]) || typeof n.getColorSchemeSelector != "function")
      return {};
    let i = n.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return n.palette.mode === e ? t : {};
}
function fi(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {},
    ...a
  } = e, l = gu(n), u = Ea(i);
  let s = je({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: u,
    shape: {
      ...yu,
      ...o
    }
  }, a);
  return s = gs(s), s.applyStyles = bu, s = t.reduce((c, f) => je(c, f), s), s.unstable_sxConfig = {
    ...rr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, s.unstable_sx = function(f) {
    return jt({
      sx: f,
      theme: this
    });
  }, s;
}
function xu(e) {
  return Object.keys(e).length === 0;
}
function vu(e = null) {
  const t = q.useContext(Dl);
  return !t || xu(t) ? e : t;
}
const Eu = fi();
function Su(e = Eu) {
  return vu(e);
}
const no = (e) => e, wu = () => {
  let e = no;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = no;
    }
  };
}, ku = wu(), Cu = {
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
function wt(e, t, n = "Mui") {
  const r = Cu[t];
  return r ? `${n}-${r}` : `${ku.generate(e)}-${t}`;
}
function gn(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = wt(e, i, n);
  }), r;
}
function Sa(e, t = "") {
  return e.displayName || e.name || t;
}
function ro(e, t, n) {
  const r = Sa(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Tu(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Sa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case zn.ForwardRef:
          return ro(e, e.render, "ForwardRef");
        case zn.Memo:
          return ro(e, e.type, "memo");
        default:
          return;
      }
  }
}
function wa(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: to(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = to(i.style));
  }), r;
}
const Ou = fi();
function vr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ru(e) {
  return e ? (t, n) => n[e] : null;
}
function Au(e, t, n) {
  e.theme = _u(e.theme) ? n : e.theme[t] || e.theme;
}
function _n(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => _n(e, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let r;
    if (n.isProcessed)
      r = n.style;
    else {
      const {
        variants: i,
        ...o
      } = n;
      r = o;
    }
    return ka(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function ka(e, t, n = []) {
  var i;
  let r;
  e: for (let o = 0; o < t.length; o += 1) {
    const a = t[o];
    if (typeof a.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(r))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== a.props[l])
          continue e;
    typeof a.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(a.style(r))) : n.push(a.style);
  }
  return n;
}
function Pu(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ou,
    rootShouldForwardProp: r = vr,
    slotShouldForwardProp: i = vr
  } = e;
  function o(l) {
    Au(l, t, n);
  }
  return (l, u = {}) => {
    hu(l, (k) => k.filter((v) => v !== jt));
    const {
      name: s,
      slot: c,
      skipVariantsResolver: f,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Ru(Ca(c)),
      ...x
    } = u, h = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), E = d || !1;
    let S = vr;
    c === "Root" || c === "root" ? S = r : c ? S = i : Du(l) && (S = void 0);
    const N = du(l, {
      shouldForwardProp: S,
      label: Nu(s, c),
      ...x
    }), w = (k) => {
      if (typeof k == "function" && k.__emotion_real !== k)
        return function(L) {
          return _n(L, k);
        };
      if (nt(k)) {
        const v = wa(k);
        return v.variants ? function(U) {
          return _n(U, v);
        } : v.style;
      }
      return k;
    }, O = (...k) => {
      const v = [], L = k.map(w), U = [];
      if (v.push(o), s && p && U.push(function(_) {
        var $, G;
        const D = (G = ($ = _.theme.components) == null ? void 0 : $[s]) == null ? void 0 : G.styleOverrides;
        if (!D)
          return null;
        const C = {};
        for (const te in D)
          C[te] = _n(_, D[te]);
        return p(_, C);
      }), s && !h && U.push(function(_) {
        var C, $;
        const j = _.theme, D = ($ = (C = j == null ? void 0 : j.components) == null ? void 0 : C[s]) == null ? void 0 : $.variants;
        return D ? ka(_, D) : null;
      }), E || U.push(jt), Array.isArray(L[0])) {
        const A = L.shift(), _ = new Array(v.length).fill(""), j = new Array(U.length).fill("");
        let D;
        D = [..._, ...A, ...j], D.raw = [..._, ...A.raw, ...j], v.unshift(D);
      }
      const F = [...v, ...L, ...U], g = N(...F);
      return l.muiName && (g.muiName = l.muiName), process.env.NODE_ENV !== "production" && (g.displayName = Iu(s, c, l)), g;
    };
    return N.withConfig && (O.withConfig = N.withConfig), O;
  };
}
function Iu(e, t, n) {
  return e ? `${e}${St(t || "")}` : `Styled(${Tu(n)})`;
}
function Nu(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Ca(t || "Root")}`), n;
}
function _u(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Du(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ca(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function jr(e, t) {
  const n = {
    ...t
  };
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      const i = r;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const o = e[i], a = t[i];
        if (!a)
          n[i] = o || {};
        else if (!o)
          n[i] = a;
        else {
          n[i] = {
            ...a
          };
          for (const l in o)
            if (Object.prototype.hasOwnProperty.call(o, l)) {
              const u = l;
              n[i][u] = jr(o[u], a[u]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Ur = typeof window < "u" ? q.useLayoutEffect : q.useEffect;
function Mu(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function pi(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Mu(e, t, n);
}
function $u(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ct(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ct($u(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ut(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ut(10, i));
  } else
    r = r.split(",");
  return r = r.map((o) => parseFloat(o)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Lu = (e) => {
  const t = ct(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, en = (e, t) => {
  try {
    return Lu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function ir(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Ta(e) {
  e = ct(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, o = r * Math.min(i, 1 - i), a = (s, c = (s + n / 30) % 12) => i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (l += "a", u.push(t[3])), ir({
    type: l,
    values: u
  });
}
function Vr(e) {
  e = ct(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ct(Ta(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function io(e, t) {
  const n = Vr(e), r = Vr(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Wr(e, t) {
  return e = ct(e), t = pi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ir(e);
}
function On(e, t, n) {
  try {
    return Wr(e, t);
  } catch {
    return e;
  }
}
function di(e, t) {
  if (e = ct(e), t = pi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ir(e);
}
function ye(e, t, n) {
  try {
    return di(e, t);
  } catch {
    return e;
  }
}
function hi(e, t) {
  if (e = ct(e), t = pi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ir(e);
}
function be(e, t, n) {
  try {
    return hi(e, t);
  } catch {
    return e;
  }
}
function zu(e, t = 0.15) {
  return Vr(e) > 0.5 ? di(e, t) : hi(e, t);
}
function Rn(e, t, n) {
  try {
    return zu(e, t);
  } catch {
    return e;
  }
}
function Bu(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Oa(e, t, n, r, i) {
  const o = e[t], a = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const u = o.type;
  return typeof u == "function" && !Bu(u) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const yn = dn(y.element, Oa);
yn.isRequired = dn(y.element.isRequired, Oa);
const Fu = "exact-prop: ​";
function Ra(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Fu]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function oo(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function ju(e, t = 166) {
  let n;
  function r(...i) {
    const o = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(o, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function ot(e) {
  return e && e.ownerDocument || document;
}
function Ut(e) {
  return ot(e).defaultView || window;
}
function Hr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ao(e) {
  const t = q.useRef(e);
  return Ur(() => {
    t.current = e;
  }), q.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function pt(...e) {
  return q.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Hr(n, t);
    });
  }, e);
}
const lo = {};
function Uu(e, t) {
  const n = q.useRef(lo);
  return n.current === lo && (n.current = e(t)), n;
}
const Vu = [];
function Wu(e) {
  q.useEffect(e, Vu);
}
class mi {
  constructor() {
    En(this, "currentId", null);
    En(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    En(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new mi();
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
function Hu() {
  const e = Uu(mi.create).current;
  return Wu(e.disposeEffect), e;
}
function qu(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function Yu(e) {
  return typeof e == "string";
}
function Gu(e, t, n) {
  return e === void 0 || Yu(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Aa(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function so(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Ku(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o
  } = e;
  if (!t) {
    const p = rt(n == null ? void 0 : n.className, o, i == null ? void 0 : i.className, r == null ? void 0 : r.className), x = {
      ...n == null ? void 0 : n.style,
      ...i == null ? void 0 : i.style,
      ...r == null ? void 0 : r.style
    }, h = {
      ...n,
      ...i,
      ...r
    };
    return p.length > 0 && (h.className = p), Object.keys(x).length > 0 && (h.style = x), {
      props: h,
      internalRef: void 0
    };
  }
  const a = Aa({
    ...i,
    ...r
  }), l = so(r), u = so(i), s = t(a), c = rt(s == null ? void 0 : s.className, n == null ? void 0 : n.className, o, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = {
    ...s == null ? void 0 : s.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, d = {
    ...s,
    ...n,
    ...u,
    ...l
  };
  return c.length > 0 && (d.className = c), Object.keys(f).length > 0 && (d.style = f), {
    props: d,
    internalRef: s.ref
  };
}
function Xu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function or(e) {
  var t;
  return parseInt(q.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const Qu = /* @__PURE__ */ q.createContext(void 0);
process.env.NODE_ENV !== "production" && (y.node, y.object);
function Ju(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? jr(i.defaultProps, r) : !i.styleOverrides && !i.variants ? jr(i, r) : r;
}
function Zu({
  props: e,
  name: t
}) {
  const n = q.useContext(Qu);
  return Ju({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const uo = {
  theme: void 0
};
function ec(e) {
  let t, n;
  return function(i) {
    let o = t;
    return (o === void 0 || i.theme !== n) && (uo.theme = i.theme, o = wa(e(uo)), t = o, n = i.theme), o;
  };
}
function tc(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const co = (e, t, n, r = []) => {
  let i = e;
  t.forEach((o, a) => {
    a === t.length - 1 ? Array.isArray(i) ? i[Number(o)] = n : i && typeof i == "object" && (i[o] = n) : i && typeof i == "object" && (i[o] || (i[o] = r.includes(o) ? [] : {}), i = i[o]);
  });
}, nc = (e, t, n) => {
  function r(i, o = [], a = []) {
    Object.entries(i).forEach(([l, u]) => {
      (!n || n && !n([...o, l])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? r(u, [...o, l], Array.isArray(u) ? [...a, l] : a) : t([...o, l], u, a));
    });
  }
  r(e);
}, rc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Er(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, o = {}, a = {};
  return nc(
    e,
    (l, u, s) => {
      if ((typeof u == "string" || typeof u == "number") && (!r || !r(l, u))) {
        const c = `--${n ? `${n}-` : ""}${l.join("-")}`, f = rc(l, u);
        Object.assign(i, {
          [c]: f
        }), co(o, l, `var(${c})`, s), co(a, l, `var(${c}, ${f})`, s);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: o,
    varsWithDefaults: a
  };
}
function ic(e, t = {}) {
  const {
    getSelector: n = E,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: o = {},
    components: a,
    defaultColorScheme: l = "light",
    ...u
  } = e, {
    vars: s,
    css: c,
    varsWithDefaults: f
  } = Er(u, t);
  let d = f;
  const p = {}, {
    [l]: x,
    ...h
  } = o;
  if (Object.entries(h || {}).forEach(([w, O]) => {
    const {
      vars: k,
      css: v,
      varsWithDefaults: L
    } = Er(O, t);
    d = je(d, L), p[w] = {
      css: v,
      vars: k
    };
  }), x) {
    const {
      css: w,
      vars: O,
      varsWithDefaults: k
    } = Er(x, t);
    d = je(d, k), p[l] = {
      css: w,
      vars: O
    };
  }
  function E(w, O) {
    var v, L;
    let k = i;
    if (i === "class" && (k = ".%s"), i === "data" && (k = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (k = `[${i}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((L = (v = o[w]) == null ? void 0 : v.palette) == null ? void 0 : L.mode) || w})`]: {
            ":root": O
          }
        };
      if (k)
        return e.defaultColorScheme === w ? `:root, ${k.replace("%s", String(w))}` : k.replace("%s", String(w));
    }
    return ":root";
  }
  return {
    vars: d,
    generateThemeVars: () => {
      let w = {
        ...s
      };
      return Object.entries(p).forEach(([, {
        vars: O
      }]) => {
        w = je(w, O);
      }), w;
    },
    generateStyleSheets: () => {
      var U, F;
      const w = [], O = e.defaultColorScheme || "light";
      function k(g, A) {
        Object.keys(A).length && w.push(typeof g == "string" ? {
          [g]: {
            ...A
          }
        } : g);
      }
      k(n(void 0, {
        ...c
      }), c);
      const {
        [O]: v,
        ...L
      } = p;
      if (v) {
        const {
          css: g
        } = v, A = (F = (U = o[O]) == null ? void 0 : U.palette) == null ? void 0 : F.mode, _ = !r && A ? {
          colorScheme: A,
          ...g
        } : {
          ...g
        };
        k(n(O, {
          ..._
        }), _);
      }
      return Object.entries(L).forEach(([g, {
        css: A
      }]) => {
        var D, C;
        const _ = (C = (D = o[g]) == null ? void 0 : D.palette) == null ? void 0 : C.mode, j = !r && _ ? {
          colorScheme: _,
          ...A
        } : {
          ...A
        };
        k(n(g, {
          ...j
        }), j);
      }), w;
    }
  };
}
function oc(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const cn = {
  black: "#000",
  white: "#fff"
}, ac = {
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
}, At = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Pt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Gt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, It = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Nt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, _t = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Pa() {
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
      paper: cn.white,
      default: cn.white
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
const lc = Pa();
function Ia() {
  return {
    text: {
      primary: cn.white,
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
      active: cn.white,
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
const fo = Ia();
function po(e, t, n, r) {
  const i = r.light || r, o = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = hi(e.main, i) : t === "dark" && (e.dark = di(e.main, o)));
}
function sc(e = "light") {
  return e === "dark" ? {
    main: It[200],
    light: It[50],
    dark: It[400]
  } : {
    main: It[700],
    light: It[400],
    dark: It[800]
  };
}
function uc(e = "light") {
  return e === "dark" ? {
    main: At[200],
    light: At[50],
    dark: At[400]
  } : {
    main: At[500],
    light: At[300],
    dark: At[700]
  };
}
function cc(e = "light") {
  return e === "dark" ? {
    main: Pt[500],
    light: Pt[300],
    dark: Pt[700]
  } : {
    main: Pt[700],
    light: Pt[400],
    dark: Pt[800]
  };
}
function fc(e = "light") {
  return e === "dark" ? {
    main: Nt[400],
    light: Nt[300],
    dark: Nt[700]
  } : {
    main: Nt[700],
    light: Nt[500],
    dark: Nt[900]
  };
}
function pc(e = "light") {
  return e === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: _t[800],
    light: _t[500],
    dark: _t[900]
  };
}
function dc(e = "light") {
  return e === "dark" ? {
    main: Gt[400],
    light: Gt[300],
    dark: Gt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Gt[500],
    dark: Gt[900]
  };
}
function gi(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, o = e.primary || sc(t), a = e.secondary || uc(t), l = e.error || cc(t), u = e.info || fc(t), s = e.success || pc(t), c = e.warning || dc(t);
  function f(h) {
    const E = io(h, fo.text.primary) >= n ? fo.text.primary : lc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = io(h, E);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${E} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const d = ({
    color: h,
    name: E,
    mainShade: S = 500,
    lightShade: N = 300,
    darkShade: w = 700
  }) => {
    if (h = {
      ...h
    }, !h.main && h[S] && (h.main = h[S]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : ut(11, E ? ` (${E})` : "", S));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ut(12, E ? ` (${E})` : "", JSON.stringify(h.main)));
    return po(h, "light", N, r), po(h, "dark", w, r), h.contrastText || (h.contrastText = f(h.main)), h;
  };
  let p;
  return t === "light" ? p = Pa() : t === "dark" && (p = Ia()), process.env.NODE_ENV !== "production" && (p || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), je({
    // A collection of common colors.
    common: {
      ...cn
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: o,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: s,
      name: "success"
    }),
    // The grey colors.
    grey: ac,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: f,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...p
  }, i);
}
function hc(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, o] = r;
    typeof o == "object" && (t[i] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
  }), t;
}
function mc(e, t) {
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
function gc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ho = {
  textTransform: "uppercase"
}, mo = '"Roboto", "Helvetica", "Arial", sans-serif';
function yc(e, t) {
  const {
    fontFamily: n = mo,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: o = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: s,
    pxToRem: c,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const d = r / 14, p = c || ((E) => `${E / u * d}rem`), x = (E, S, N, w, O) => ({
    fontFamily: n,
    fontWeight: E,
    fontSize: p(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === mo ? {
      letterSpacing: `${gc(w / S)}em`
    } : {},
    ...O,
    ...s
  }), h = {
    h1: x(i, 96, 1.167, -1.5),
    h2: x(i, 60, 1.2, -0.5),
    h3: x(o, 48, 1.167, 0),
    h4: x(o, 34, 1.235, 0.25),
    h5: x(o, 24, 1.334, 0),
    h6: x(a, 20, 1.6, 0.15),
    subtitle1: x(o, 16, 1.75, 0.15),
    subtitle2: x(a, 14, 1.57, 0.1),
    body1: x(o, 16, 1.5, 0.15),
    body2: x(o, 14, 1.43, 0.15),
    button: x(a, 14, 1.75, 0.4, ho),
    caption: x(o, 12, 1.66, 0.4),
    overline: x(o, 12, 2.66, 1, ho),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return je({
    htmlFontSize: u,
    pxToRem: p,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: o,
    fontWeightMedium: a,
    fontWeightBold: l,
    ...h
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const bc = 0.2, xc = 0.14, vc = 0.12;
function Ee(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${bc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${xc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${vc})`].join(",");
}
const Ec = ["none", Ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Sc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, wc = {
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
function go(e) {
  return `${Math.round(e)}ms`;
}
function kc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Cc(e) {
  const t = {
    ...Sc,
    ...e.easing
  }, n = {
    ...wc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: kc,
    create: (i = ["all"], o = {}) => {
      const {
        duration: a = n.standard,
        easing: l = t.easeInOut,
        delay: u = 0,
        ...s
      } = o;
      if (process.env.NODE_ENV !== "production") {
        const c = (d) => typeof d == "string", f = (d) => !Number.isNaN(parseFloat(d));
        !c(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(a) && !c(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), c(l) || console.error('MUI: Argument "easing" must be a string.'), !f(u) && !c(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof o != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(s).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(s).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((c) => `${c} ${typeof a == "string" ? a : go(a)} ${l} ${typeof u == "string" ? u : go(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Tc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Oc(e) {
  return nt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Na(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let o = 0; o < i.length; o++) {
      const [a, l] = i[o];
      !Oc(l) || a.startsWith("unstable_") ? delete r[a] : nt(l) && (r[a] = {
        ...l
      }, n(r[a]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function qr(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: o = {},
    transitions: a = {},
    typography: l = {},
    shape: u,
    ...s
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ut(20));
  const c = gi(o), f = fi(e);
  let d = je(f, {
    mixins: mc(f.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ec.slice(),
    typography: yc(c, l),
    transitions: Cc(a),
    zIndex: {
      ...Tc
    }
  });
  if (d = je(d, s), d = t.reduce((p, x) => je(p, x), d), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], x = (h, E) => {
      let S;
      for (S in h) {
        const N = h[S];
        if (p.includes(S) && Object.keys(N).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = wt("", S);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${S}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: N
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[S] = {};
        }
      }
    };
    Object.keys(d.components).forEach((h) => {
      const E = d.components[h].styleOverrides;
      E && h.startsWith("Mui") && x(E, h);
    });
  }
  return d.unstable_sxConfig = {
    ...rr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(x) {
    return jt({
      sx: x,
      theme: this
    });
  }, d.toRuntimeSource = Na, d;
}
function Yr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Rc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Yr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function _a(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Da(e) {
  return e === "dark" ? Rc : [];
}
function Ac(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, o = gi(t);
  return {
    palette: o,
    opacity: {
      ..._a(o.mode),
      ...n
    },
    overlays: r || Da(o.mode),
    ...i
  };
}
function Pc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ic = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Nc = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let o = i;
  if (i === "class" && (o = ".%s"), i === "data" && (o = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (o = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ic(e.cssVarPrefix).forEach((l) => {
        a[l] = n[l], delete n[l];
      }), o === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: a
        }
      } : o ? {
        [o.replace("%s", t)]: a,
        [`${r}, ${o.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...a
        }
      };
    }
    if (o && o !== "media")
      return `${r}, ${o.replace("%s", String(t))}`;
  } else if (t) {
    if (o === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (o)
      return o.replace("%s", String(t));
  }
  return r;
};
function _c(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function P(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function tn(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ta(e);
}
function tt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = en(tn(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Dc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ge = (e) => {
  try {
    return e();
  } catch {
  }
}, Mc = (e = "mui") => tc(e);
function Sr(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Ac({
      ...t,
      palette: {
        mode: i,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: o,
    ...a
  } = qr({
    ...n,
    palette: {
      mode: i,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[r] = {
    ...t,
    palette: o,
    opacity: {
      ..._a(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Da(i)
  }, a;
}
function $c(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: o = "mui",
    shouldSkipGeneratingVar: a = Pc,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...s
  } = e, c = Object.keys(n)[0], f = r || (n.light && c !== "light" ? "light" : c), d = Mc(o), {
    [f]: p,
    light: x,
    dark: h,
    ...E
  } = n, S = {
    ...E
  };
  let N = p;
  if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (N = !0), !N)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : ut(21, f));
  const w = Sr(S, N, s, f);
  x && !S.light && Sr(S, x, void 0, "light"), h && !S.dark && Sr(S, h, void 0, "dark");
  let O = {
    defaultColorScheme: f,
    ...w,
    cssVarPrefix: o,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: d,
    colorSchemes: S,
    font: {
      ...hc(w.typography),
      ...w.font
    },
    spacing: Dc(s.spacing)
  };
  Object.keys(O.colorSchemes).forEach((F) => {
    const g = O.colorSchemes[F].palette, A = (_) => {
      const j = _.split("-"), D = j[1], C = j[2];
      return d(_, g[D][C]);
    };
    if (g.mode === "light" && (P(g.common, "background", "#fff"), P(g.common, "onBackground", "#000")), g.mode === "dark" && (P(g.common, "background", "#000"), P(g.common, "onBackground", "#fff")), _c(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      P(g.Alert, "errorColor", ye(g.error.light, 0.6)), P(g.Alert, "infoColor", ye(g.info.light, 0.6)), P(g.Alert, "successColor", ye(g.success.light, 0.6)), P(g.Alert, "warningColor", ye(g.warning.light, 0.6)), P(g.Alert, "errorFilledBg", A("palette-error-main")), P(g.Alert, "infoFilledBg", A("palette-info-main")), P(g.Alert, "successFilledBg", A("palette-success-main")), P(g.Alert, "warningFilledBg", A("palette-warning-main")), P(g.Alert, "errorFilledColor", Ge(() => g.getContrastText(g.error.main))), P(g.Alert, "infoFilledColor", Ge(() => g.getContrastText(g.info.main))), P(g.Alert, "successFilledColor", Ge(() => g.getContrastText(g.success.main))), P(g.Alert, "warningFilledColor", Ge(() => g.getContrastText(g.warning.main))), P(g.Alert, "errorStandardBg", be(g.error.light, 0.9)), P(g.Alert, "infoStandardBg", be(g.info.light, 0.9)), P(g.Alert, "successStandardBg", be(g.success.light, 0.9)), P(g.Alert, "warningStandardBg", be(g.warning.light, 0.9)), P(g.Alert, "errorIconColor", A("palette-error-main")), P(g.Alert, "infoIconColor", A("palette-info-main")), P(g.Alert, "successIconColor", A("palette-success-main")), P(g.Alert, "warningIconColor", A("palette-warning-main")), P(g.AppBar, "defaultBg", A("palette-grey-100")), P(g.Avatar, "defaultBg", A("palette-grey-400")), P(g.Button, "inheritContainedBg", A("palette-grey-300")), P(g.Button, "inheritContainedHoverBg", A("palette-grey-A100")), P(g.Chip, "defaultBorder", A("palette-grey-400")), P(g.Chip, "defaultAvatarColor", A("palette-grey-700")), P(g.Chip, "defaultIconColor", A("palette-grey-700")), P(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), P(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), P(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), P(g.LinearProgress, "primaryBg", be(g.primary.main, 0.62)), P(g.LinearProgress, "secondaryBg", be(g.secondary.main, 0.62)), P(g.LinearProgress, "errorBg", be(g.error.main, 0.62)), P(g.LinearProgress, "infoBg", be(g.info.main, 0.62)), P(g.LinearProgress, "successBg", be(g.success.main, 0.62)), P(g.LinearProgress, "warningBg", be(g.warning.main, 0.62)), P(g.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), P(g.Slider, "primaryTrack", be(g.primary.main, 0.62)), P(g.Slider, "secondaryTrack", be(g.secondary.main, 0.62)), P(g.Slider, "errorTrack", be(g.error.main, 0.62)), P(g.Slider, "infoTrack", be(g.info.main, 0.62)), P(g.Slider, "successTrack", be(g.success.main, 0.62)), P(g.Slider, "warningTrack", be(g.warning.main, 0.62));
      const _ = Rn(g.background.default, 0.8);
      P(g.SnackbarContent, "bg", _), P(g.SnackbarContent, "color", Ge(() => g.getContrastText(_))), P(g.SpeedDialAction, "fabHoverBg", Rn(g.background.paper, 0.15)), P(g.StepConnector, "border", A("palette-grey-400")), P(g.StepContent, "border", A("palette-grey-400")), P(g.Switch, "defaultColor", A("palette-common-white")), P(g.Switch, "defaultDisabledColor", A("palette-grey-100")), P(g.Switch, "primaryDisabledColor", be(g.primary.main, 0.62)), P(g.Switch, "secondaryDisabledColor", be(g.secondary.main, 0.62)), P(g.Switch, "errorDisabledColor", be(g.error.main, 0.62)), P(g.Switch, "infoDisabledColor", be(g.info.main, 0.62)), P(g.Switch, "successDisabledColor", be(g.success.main, 0.62)), P(g.Switch, "warningDisabledColor", be(g.warning.main, 0.62)), P(g.TableCell, "border", be(On(g.divider, 1), 0.88)), P(g.Tooltip, "bg", On(g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      P(g.Alert, "errorColor", be(g.error.light, 0.6)), P(g.Alert, "infoColor", be(g.info.light, 0.6)), P(g.Alert, "successColor", be(g.success.light, 0.6)), P(g.Alert, "warningColor", be(g.warning.light, 0.6)), P(g.Alert, "errorFilledBg", A("palette-error-dark")), P(g.Alert, "infoFilledBg", A("palette-info-dark")), P(g.Alert, "successFilledBg", A("palette-success-dark")), P(g.Alert, "warningFilledBg", A("palette-warning-dark")), P(g.Alert, "errorFilledColor", Ge(() => g.getContrastText(g.error.dark))), P(g.Alert, "infoFilledColor", Ge(() => g.getContrastText(g.info.dark))), P(g.Alert, "successFilledColor", Ge(() => g.getContrastText(g.success.dark))), P(g.Alert, "warningFilledColor", Ge(() => g.getContrastText(g.warning.dark))), P(g.Alert, "errorStandardBg", ye(g.error.light, 0.9)), P(g.Alert, "infoStandardBg", ye(g.info.light, 0.9)), P(g.Alert, "successStandardBg", ye(g.success.light, 0.9)), P(g.Alert, "warningStandardBg", ye(g.warning.light, 0.9)), P(g.Alert, "errorIconColor", A("palette-error-main")), P(g.Alert, "infoIconColor", A("palette-info-main")), P(g.Alert, "successIconColor", A("palette-success-main")), P(g.Alert, "warningIconColor", A("palette-warning-main")), P(g.AppBar, "defaultBg", A("palette-grey-900")), P(g.AppBar, "darkBg", A("palette-background-paper")), P(g.AppBar, "darkColor", A("palette-text-primary")), P(g.Avatar, "defaultBg", A("palette-grey-600")), P(g.Button, "inheritContainedBg", A("palette-grey-800")), P(g.Button, "inheritContainedHoverBg", A("palette-grey-700")), P(g.Chip, "defaultBorder", A("palette-grey-700")), P(g.Chip, "defaultAvatarColor", A("palette-grey-300")), P(g.Chip, "defaultIconColor", A("palette-grey-300")), P(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), P(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), P(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), P(g.LinearProgress, "primaryBg", ye(g.primary.main, 0.5)), P(g.LinearProgress, "secondaryBg", ye(g.secondary.main, 0.5)), P(g.LinearProgress, "errorBg", ye(g.error.main, 0.5)), P(g.LinearProgress, "infoBg", ye(g.info.main, 0.5)), P(g.LinearProgress, "successBg", ye(g.success.main, 0.5)), P(g.LinearProgress, "warningBg", ye(g.warning.main, 0.5)), P(g.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), P(g.Slider, "primaryTrack", ye(g.primary.main, 0.5)), P(g.Slider, "secondaryTrack", ye(g.secondary.main, 0.5)), P(g.Slider, "errorTrack", ye(g.error.main, 0.5)), P(g.Slider, "infoTrack", ye(g.info.main, 0.5)), P(g.Slider, "successTrack", ye(g.success.main, 0.5)), P(g.Slider, "warningTrack", ye(g.warning.main, 0.5));
      const _ = Rn(g.background.default, 0.98);
      P(g.SnackbarContent, "bg", _), P(g.SnackbarContent, "color", Ge(() => g.getContrastText(_))), P(g.SpeedDialAction, "fabHoverBg", Rn(g.background.paper, 0.15)), P(g.StepConnector, "border", A("palette-grey-600")), P(g.StepContent, "border", A("palette-grey-600")), P(g.Switch, "defaultColor", A("palette-grey-300")), P(g.Switch, "defaultDisabledColor", A("palette-grey-600")), P(g.Switch, "primaryDisabledColor", ye(g.primary.main, 0.55)), P(g.Switch, "secondaryDisabledColor", ye(g.secondary.main, 0.55)), P(g.Switch, "errorDisabledColor", ye(g.error.main, 0.55)), P(g.Switch, "infoDisabledColor", ye(g.info.main, 0.55)), P(g.Switch, "successDisabledColor", ye(g.success.main, 0.55)), P(g.Switch, "warningDisabledColor", ye(g.warning.main, 0.55)), P(g.TableCell, "border", ye(On(g.divider, 1), 0.68)), P(g.Tooltip, "bg", On(g.grey[700], 0.92));
    }
    tt(g.background, "default"), tt(g.background, "paper"), tt(g.common, "background"), tt(g.common, "onBackground"), tt(g, "divider"), Object.keys(g).forEach((_) => {
      const j = g[_];
      _ !== "tonalOffset" && j && typeof j == "object" && (j.main && P(g[_], "mainChannel", en(tn(j.main))), j.light && P(g[_], "lightChannel", en(tn(j.light))), j.dark && P(g[_], "darkChannel", en(tn(j.dark))), j.contrastText && P(g[_], "contrastTextChannel", en(tn(j.contrastText))), _ === "text" && (tt(g[_], "primary"), tt(g[_], "secondary")), _ === "action" && (j.active && tt(g[_], "active"), j.selected && tt(g[_], "selected")));
    });
  }), O = t.reduce((F, g) => je(F, g), O);
  const k = {
    prefix: o,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: a,
    getSelector: Nc(O)
  }, {
    vars: v,
    generateThemeVars: L,
    generateStyleSheets: U
  } = ic(O, k);
  return O.vars = v, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([F, g]) => {
    O[F] = g;
  }), O.generateThemeVars = L, O.generateStyleSheets = U, O.generateSpacing = function() {
    return Ea(s.spacing, ui(this));
  }, O.getColorSchemeSelector = oc(l), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = a, O.unstable_sxConfig = {
    ...rr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, O.unstable_sx = function(g) {
    return jt({
      sx: g,
      theme: this
    });
  }, O.toRuntimeSource = Na, O;
}
function yo(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: gi({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Lc(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: o = n == null ? void 0 : n.mode,
    ...a
  } = e, l = o || "light", u = i == null ? void 0 : i[l], s = {
    ...i,
    ...n ? {
      [l]: {
        ...typeof u != "boolean" && u,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return qr(e, ...t);
    let c = n;
    "palette" in e || s[l] && (s[l] !== !0 ? c = s[l].palette : l === "dark" && (c = {
      mode: "dark"
    }));
    const f = qr({
      ...e,
      palette: c
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = s, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...s.light !== !0 && s.light,
      palette: f.palette
    }, yo(f, "dark", s.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...s.dark !== !0 && s.dark,
      palette: f.palette
    }, yo(f, "light", s.light)), f;
  }
  return !n && !("light" in s) && l === "light" && (s.light = !0), $c({
    ...a,
    colorSchemes: s,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Ma = Lc(), $a = "$$material";
function ar() {
  const e = Su(Ma);
  return process.env.NODE_ENV !== "production" && q.useDebugValue(e), e[$a] || e;
}
function zc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Bc = (e) => zc(e) && e !== "classes", kt = Pu({
  themeId: $a,
  defaultTheme: Ma,
  rootShouldForwardProp: Bc
});
process.env.NODE_ENV !== "production" && (y.node, y.object.isRequired);
function bn(e) {
  return Zu(e);
}
function Fc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Gr(e, t) {
  return Gr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Gr(e, t);
}
function jc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Gr(e, t);
}
const bo = {
  disabled: !1
};
var Uc = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.shape({
  enter: y.number,
  exit: y.number,
  appear: y.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && y.oneOfType([y.string, y.shape({
  enter: y.string,
  exit: y.string,
  active: y.string
}), y.shape({
  enter: y.string,
  enterDone: y.string,
  enterActive: y.string,
  exit: y.string,
  exitDone: y.string,
  exitActive: y.string
})]);
const La = Zt.createContext(null);
var Vc = function(t) {
  return t.scrollTop;
}, nn = "unmounted", yt = "exited", bt = "entering", $t = "entered", Kr = "exiting", Je = /* @__PURE__ */ function(e) {
  jc(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var a = i, l = a && !a.isMounting ? r.enter : r.appear, u;
    return o.appearStatus = null, r.in ? l ? (u = yt, o.appearStatus = bt) : u = $t : r.unmountOnExit || r.mountOnEnter ? u = nn : u = yt, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var a = i.in;
    return a && o.status === nn ? {
      status: yt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== bt && a !== $t && (o = bt) : (a === bt || a === $t) && (o = Kr);
    }
    this.updateStatus(!1, o);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, o, a, l;
    return o = a = l = i, i != null && typeof i != "number" && (o = i.exit, a = i.enter, l = i.appear !== void 0 ? i.appear : a), {
      exit: o,
      enter: a,
      appear: l
    };
  }, n.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === bt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : wn.findDOMNode(this);
          a && Vc(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === yt && this.setState({
      status: nn
    });
  }, n.performEnter = function(i) {
    var o = this, a = this.props.enter, l = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [l] : [wn.findDOMNode(this), l], s = u[0], c = u[1], f = this.getTimeouts(), d = l ? f.appear : f.enter;
    if (!i && !a || bo.disabled) {
      this.safeSetState({
        status: $t
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, c), this.safeSetState({
      status: bt
    }, function() {
      o.props.onEntering(s, c), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: $t
        }, function() {
          o.props.onEntered(s, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, o = this.props.exit, a = this.getTimeouts(), l = this.props.nodeRef ? void 0 : wn.findDOMNode(this);
    if (!o || bo.disabled) {
      this.safeSetState({
        status: yt
      }, function() {
        i.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Kr
    }, function() {
      i.props.onExiting(l), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: yt
        }, function() {
          i.props.onExited(l);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, n.setNextCallback = function(i) {
    var o = this, a = !0;
    return this.nextCallback = function(l) {
      a && (a = !1, o.nextCallback = null, i(l));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var a = this.props.nodeRef ? this.props.nodeRef.current : wn.findDOMNode(this), l = i == null && !this.props.addEndListener;
    if (!a || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], s = u[0], c = u[1];
      this.props.addEndListener(s, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === nn)
      return null;
    var o = this.props, a = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var l = Fc(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Zt.createElement(La.Provider, {
        value: null
      }, typeof a == "function" ? a(i, l) : Zt.cloneElement(Zt.Children.only(a), l))
    );
  }, t;
}(Zt.Component);
Je.contextType = La;
Je.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: y.shape({
    current: typeof Element > "u" ? y.any : function(e, t, n, r, i, o) {
      var a = e[t];
      return y.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, o);
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
  children: y.oneOfType([y.func.isRequired, y.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: y.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: y.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: y.bool,
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
  appear: y.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: y.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: y.bool,
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
    var n = Uc;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      i[o - 1] = arguments[o];
    return n.apply(void 0, [t].concat(i));
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
  addEndListener: y.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: y.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: y.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: y.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: y.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: y.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: y.func
} : {};
function Dt() {
}
Je.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Dt,
  onEntering: Dt,
  onEntered: Dt,
  onExit: Dt,
  onExiting: Dt,
  onExited: Dt
};
Je.UNMOUNTED = nn;
Je.EXITED = yt;
Je.ENTERING = bt;
Je.ENTERED = $t;
Je.EXITING = Kr;
const za = (e) => e.scrollTop;
function jn(e, t) {
  const {
    timeout: n,
    easing: r,
    style: i = {}
  } = e;
  return {
    duration: i.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: i.transitionDelay
  };
}
function Xr(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Wc = {
  entering: {
    opacity: 1,
    transform: Xr(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, wr = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Un = /* @__PURE__ */ q.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: o,
    easing: a,
    in: l,
    onEnter: u,
    onEntered: s,
    onEntering: c,
    onExit: f,
    onExited: d,
    onExiting: p,
    style: x,
    timeout: h = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = Je,
    ...S
  } = t, N = Hu(), w = q.useRef(), O = ar(), k = q.useRef(null), v = pt(k, or(o), n), L = (C) => ($) => {
    if (C) {
      const G = k.current;
      $ === void 0 ? C(G) : C(G, $);
    }
  }, U = L(c), F = L((C, $) => {
    za(C);
    const {
      duration: G,
      delay: te,
      easing: fe
    } = jn({
      style: x,
      timeout: h,
      easing: a
    }, {
      mode: "enter"
    });
    let m;
    h === "auto" ? (m = O.transitions.getAutoHeightDuration(C.clientHeight), w.current = m) : m = G, C.style.transition = [O.transitions.create("opacity", {
      duration: m,
      delay: te
    }), O.transitions.create("transform", {
      duration: wr ? m : m * 0.666,
      delay: te,
      easing: fe
    })].join(","), u && u(C, $);
  }), g = L(s), A = L(p), _ = L((C) => {
    const {
      duration: $,
      delay: G,
      easing: te
    } = jn({
      style: x,
      timeout: h,
      easing: a
    }, {
      mode: "exit"
    });
    let fe;
    h === "auto" ? (fe = O.transitions.getAutoHeightDuration(C.clientHeight), w.current = fe) : fe = $, C.style.transition = [O.transitions.create("opacity", {
      duration: fe,
      delay: G
    }), O.transitions.create("transform", {
      duration: wr ? fe : fe * 0.666,
      delay: wr ? G : G || fe * 0.333,
      easing: te
    })].join(","), C.style.opacity = 0, C.style.transform = Xr(0.75), f && f(C);
  }), j = L(d);
  return /* @__PURE__ */ R(E, {
    appear: i,
    in: l,
    nodeRef: k,
    onEnter: F,
    onEntered: g,
    onEntering: U,
    onExit: _,
    onExited: j,
    onExiting: A,
    addEndListener: (C) => {
      h === "auto" && N.start(w.current || 0, C), r && r(k.current, C);
    },
    timeout: h === "auto" ? null : h,
    ...S,
    children: (C, {
      ownerState: $,
      ...G
    }) => /* @__PURE__ */ q.cloneElement(o, {
      style: {
        opacity: 0,
        transform: Xr(0.75),
        visibility: C === "exited" && !l ? "hidden" : void 0,
        ...Wc[C],
        ...x,
        ...o.props.style
      },
      ref: v,
      ...G
    })
  });
});
process.env.NODE_ENV !== "production" && (Un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: y.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: y.bool,
  /**
   * A single child content element.
   */
  children: yn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: y.oneOfType([y.shape({
    enter: y.string,
    exit: y.string
  }), y.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: y.bool,
  /**
   * @ignore
   */
  onEnter: y.func,
  /**
   * @ignore
   */
  onEntered: y.func,
  /**
   * @ignore
   */
  onEntering: y.func,
  /**
   * @ignore
   */
  onExit: y.func,
  /**
   * @ignore
   */
  onExited: y.func,
  /**
   * @ignore
   */
  onExiting: y.func,
  /**
   * @ignore
   */
  style: y.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: y.oneOfType([y.oneOf(["auto"]), y.number, y.shape({
    appear: y.number,
    enter: y.number,
    exit: y.number
  })])
});
Un && (Un.muiSupportAuto = !0);
function Hc(e) {
  const t = ot(e);
  return t.body === e ? Ut(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function an(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function xo(e) {
  return parseInt(Ut(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function qc(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function vo(e, t, n, r, i) {
  const o = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const l = !o.includes(a), u = !qc(a);
    l && u && an(a, i);
  });
}
function kr(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Yc(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Hc(r)) {
      const a = qu(Ut(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${xo(r) + a}px`;
      const l = ot(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (u) => {
        n.push({
          value: u.style.paddingRight,
          property: "padding-right",
          el: u
        }), u.style.paddingRight = `${xo(u) + a}px`;
      });
    }
    let o;
    if (r.parentNode instanceof DocumentFragment)
      o = ot(r).body;
    else {
      const a = r.parentElement, l = Ut(r);
      o = (a == null ? void 0 : a.nodeName) === "HTML" && l.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: o.style.overflow,
      property: "overflow",
      el: o
    }, {
      value: o.style.overflowX,
      property: "overflow-x",
      el: o
    }, {
      value: o.style.overflowY,
      property: "overflow-y",
      el: o
    }), o.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: o,
      el: a,
      property: l
    }) => {
      o ? a.style.setProperty(l, o) : a.style.removeProperty(l);
    });
  };
}
function Gc(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Kc {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && an(t.modalRef, !1);
    const i = Gc(n);
    vo(n, t.mount, t.modalRef, i, !0);
    const o = kr(this.containers, (a) => a.container === n);
    return o !== -1 ? (this.containers[o].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = kr(this.containers, (o) => o.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Yc(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = kr(this.containers, (a) => a.modals.includes(t)), o = this.containers[i];
    if (o.modals.splice(o.modals.indexOf(t), 1), this.modals.splice(r, 1), o.modals.length === 0)
      o.restore && o.restore(), t.modalRef && an(t.modalRef, n), vo(o.container, t.mount, t.modalRef, o.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = o.modals[o.modals.length - 1];
      a.modalRef && an(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Xc = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Qc(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Jc(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Zc(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Jc(e));
}
function ef(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Xc)).forEach((r, i) => {
    const o = Qc(r);
    o === -1 || !Zc(r) || (o === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: o,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function tf() {
  return !0;
}
function Vn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: o = ef,
    isEnabled: a = tf,
    open: l
  } = e, u = q.useRef(!1), s = q.useRef(null), c = q.useRef(null), f = q.useRef(null), d = q.useRef(null), p = q.useRef(!1), x = q.useRef(null), h = pt(or(t), x), E = q.useRef(null);
  q.useEffect(() => {
    !l || !x.current || (p.current = !n);
  }, [n, l]), q.useEffect(() => {
    if (!l || !x.current)
      return;
    const w = ot(x.current);
    return x.current.contains(w.activeElement) || (x.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), x.current.setAttribute("tabIndex", "-1")), p.current && x.current.focus()), () => {
      i || (f.current && f.current.focus && (u.current = !0, f.current.focus()), f.current = null);
    };
  }, [l]), q.useEffect(() => {
    if (!l || !x.current)
      return;
    const w = ot(x.current), O = (L) => {
      E.current = L, !(r || !a() || L.key !== "Tab") && w.activeElement === x.current && L.shiftKey && (u.current = !0, c.current && c.current.focus());
    }, k = () => {
      var F, g;
      const L = x.current;
      if (L === null)
        return;
      if (!w.hasFocus() || !a() || u.current) {
        u.current = !1;
        return;
      }
      if (L.contains(w.activeElement) || r && w.activeElement !== s.current && w.activeElement !== c.current)
        return;
      if (w.activeElement !== d.current)
        d.current = null;
      else if (d.current !== null)
        return;
      if (!p.current)
        return;
      let U = [];
      if ((w.activeElement === s.current || w.activeElement === c.current) && (U = o(x.current)), U.length > 0) {
        const A = !!((F = E.current) != null && F.shiftKey && ((g = E.current) == null ? void 0 : g.key) === "Tab"), _ = U[0], j = U[U.length - 1];
        typeof _ != "string" && typeof j != "string" && (A ? j.focus() : _.focus());
      } else
        L.focus();
    };
    w.addEventListener("focusin", k), w.addEventListener("keydown", O, !0);
    const v = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && k();
    }, 50);
    return () => {
      clearInterval(v), w.removeEventListener("focusin", k), w.removeEventListener("keydown", O, !0);
    };
  }, [n, r, i, a, l, o]);
  const S = (w) => {
    f.current === null && (f.current = w.relatedTarget), p.current = !0, d.current = w.target;
    const O = t.props.onFocus;
    O && O(w);
  }, N = (w) => {
    f.current === null && (f.current = w.relatedTarget), p.current = !0;
  };
  return /* @__PURE__ */ ue(q.Fragment, {
    children: [/* @__PURE__ */ R("div", {
      tabIndex: l ? 0 : -1,
      onFocus: N,
      ref: s,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ q.cloneElement(t, {
      ref: h,
      onFocus: S
    }), /* @__PURE__ */ R("div", {
      tabIndex: l ? 0 : -1,
      onFocus: N,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Vn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: yn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: y.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: y.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: y.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: y.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: y.func,
  /**
   * If `true`, focus is locked.
   */
  open: y.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Vn.propTypes = Ra(Vn.propTypes));
function nf(e) {
  return typeof e == "function" ? e() : e;
}
const Wn = /* @__PURE__ */ q.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: o = !1
  } = t, [a, l] = q.useState(null), u = pt(/* @__PURE__ */ q.isValidElement(r) ? or(r) : null, n);
  if (Ur(() => {
    o || l(nf(i) || document.body);
  }, [i, o]), Ur(() => {
    if (a && !o)
      return Hr(n, a), () => {
        Hr(n, null);
      };
  }, [n, a, o]), o) {
    if (/* @__PURE__ */ q.isValidElement(r)) {
      const s = {
        ref: u
      };
      return /* @__PURE__ */ q.cloneElement(r, s);
    }
    return r;
  }
  return a && /* @__PURE__ */ Kl.createPortal(r, a);
});
process.env.NODE_ENV !== "production" && (Wn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: y.node,
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
  container: y.oneOfType([Ln, y.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: y.bool
});
process.env.NODE_ENV !== "production" && (Wn.propTypes = Ra(Wn.propTypes));
const yi = ec;
function Vt(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: i,
    externalForwardedProps: o,
    internalForwardedProps: a,
    shouldForwardComponentProp: l = !1,
    ...u
  } = t, {
    component: s,
    slots: c = {
      [e]: void 0
    },
    slotProps: f = {
      [e]: void 0
    },
    ...d
  } = o, p = c[e] || r, x = Xu(f[e], i), {
    props: {
      component: h,
      ...E
    },
    internalRef: S
  } = Ku({
    className: n,
    ...u,
    externalForwardedProps: e === "root" ? d : void 0,
    externalSlotProps: x
  }), N = pt(S, x == null ? void 0 : x.ref, t.ref), w = e === "root" ? h || s : h, O = Gu(p, {
    ...e === "root" && !s && !c[e] && a,
    ...e !== "root" && !c[e] && a,
    ...E,
    ...w && !l && {
      as: w
    },
    ...w && l && {
      component: w
    },
    ref: N
  }, i);
  return [p, O];
}
const rf = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ba = /* @__PURE__ */ q.forwardRef(function(t, n) {
  const r = ar(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: o,
    appear: a = !0,
    children: l,
    easing: u,
    in: s,
    onEnter: c,
    onEntered: f,
    onEntering: d,
    onExit: p,
    onExited: x,
    onExiting: h,
    style: E,
    timeout: S = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: N = Je,
    ...w
  } = t, O = q.useRef(null), k = pt(O, or(l), n), v = (D) => (C) => {
    if (D) {
      const $ = O.current;
      C === void 0 ? D($) : D($, C);
    }
  }, L = v(d), U = v((D, C) => {
    za(D);
    const $ = jn({
      style: E,
      timeout: S,
      easing: u
    }, {
      mode: "enter"
    });
    D.style.webkitTransition = r.transitions.create("opacity", $), D.style.transition = r.transitions.create("opacity", $), c && c(D, C);
  }), F = v(f), g = v(h), A = v((D) => {
    const C = jn({
      style: E,
      timeout: S,
      easing: u
    }, {
      mode: "exit"
    });
    D.style.webkitTransition = r.transitions.create("opacity", C), D.style.transition = r.transitions.create("opacity", C), p && p(D);
  }), _ = v(x);
  return /* @__PURE__ */ R(N, {
    appear: a,
    in: s,
    nodeRef: O,
    onEnter: U,
    onEntered: F,
    onEntering: L,
    onExit: A,
    onExited: _,
    onExiting: g,
    addEndListener: (D) => {
      o && o(O.current, D);
    },
    timeout: S,
    ...w,
    children: (D, {
      ownerState: C,
      ...$
    }) => /* @__PURE__ */ q.cloneElement(l, {
      style: {
        opacity: 0,
        visibility: D === "exited" && !s ? "hidden" : void 0,
        ...rf[D],
        ...E,
        ...l.props.style
      },
      ref: k,
      ...$
    })
  });
});
process.env.NODE_ENV !== "production" && (Ba.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: y.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: y.bool,
  /**
   * A single child content element.
   */
  children: yn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: y.oneOfType([y.shape({
    enter: y.string,
    exit: y.string
  }), y.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: y.bool,
  /**
   * @ignore
   */
  onEnter: y.func,
  /**
   * @ignore
   */
  onEntered: y.func,
  /**
   * @ignore
   */
  onEntering: y.func,
  /**
   * @ignore
   */
  onExit: y.func,
  /**
   * @ignore
   */
  onExited: y.func,
  /**
   * @ignore
   */
  onExiting: y.func,
  /**
   * @ignore
   */
  style: y.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: y.oneOfType([y.number, y.shape({
    appear: y.number,
    enter: y.number,
    exit: y.number
  })])
});
function of(e) {
  return wt("MuiBackdrop", e);
}
gn("MuiBackdrop", ["root", "invisible"]);
const af = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return pn({
    root: ["root", n && "invisible"]
  }, of, t);
}, lf = kt("div", {
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
}), Fa = /* @__PURE__ */ q.forwardRef(function(t, n) {
  const r = bn({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: o,
    component: a = "div",
    invisible: l = !1,
    open: u,
    components: s = {},
    componentsProps: c = {},
    slotProps: f = {},
    slots: d = {},
    TransitionComponent: p,
    transitionDuration: x,
    ...h
  } = r, E = {
    ...r,
    component: a,
    invisible: l
  }, S = af(E), N = {
    transition: p,
    root: s.Root,
    ...d
  }, w = {
    ...c,
    ...f
  }, O = {
    slots: N,
    slotProps: w
  }, [k, v] = Vt("root", {
    elementType: lf,
    externalForwardedProps: O,
    className: rt(S.root, o),
    ownerState: E
  }), [L, U] = Vt("transition", {
    elementType: Ba,
    externalForwardedProps: O,
    ownerState: E
  });
  return /* @__PURE__ */ R(L, {
    in: u,
    timeout: x,
    ...h,
    ...U,
    children: /* @__PURE__ */ R(k, {
      "aria-hidden": !0,
      ...v,
      classes: S,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (Fa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: y.shape({
    Root: y.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: y.shape({
    root: y.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: y.bool,
  /**
   * If `true`, the component is shown.
   */
  open: y.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: y.shape({
    root: y.oneOfType([y.func, y.object]),
    transition: y.oneOfType([y.func, y.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: y.shape({
    root: y.elementType,
    transition: y.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: y.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: y.oneOfType([y.number, y.shape({
    appear: y.number,
    enter: y.number,
    exit: y.number
  })])
});
function sf(e) {
  return typeof e == "function" ? e() : e;
}
function uf(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Eo = () => {
}, An = new Kc();
function cf(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: o,
    onTransitionExited: a,
    children: l,
    onClose: u,
    open: s,
    rootRef: c
  } = e, f = q.useRef({}), d = q.useRef(null), p = q.useRef(null), x = pt(p, c), [h, E] = q.useState(!s), S = uf(l);
  let N = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (N = !1);
  const w = () => ot(d.current), O = () => (f.current.modalRef = p.current, f.current.mount = d.current, f.current), k = () => {
    An.mount(O(), {
      disableScrollLock: r
    }), p.current && (p.current.scrollTop = 0);
  }, v = ao(() => {
    const C = sf(t) || w().body;
    An.add(O(), C), p.current && k();
  }), L = () => An.isTopModal(O()), U = ao((C) => {
    d.current = C, C && (s && L() ? k() : p.current && an(p.current, N));
  }), F = q.useCallback(() => {
    An.remove(O(), N);
  }, [N]);
  q.useEffect(() => () => {
    F();
  }, [F]), q.useEffect(() => {
    s ? v() : (!S || !i) && F();
  }, [s, F, S, i, v]);
  const g = (C) => ($) => {
    var G;
    (G = C.onKeyDown) == null || G.call(C, $), !($.key !== "Escape" || $.which === 229 || // Wait until IME is settled.
    !L()) && (n || ($.stopPropagation(), u && u($, "escapeKeyDown")));
  }, A = (C) => ($) => {
    var G;
    (G = C.onClick) == null || G.call(C, $), $.target === $.currentTarget && u && u($, "backdropClick");
  };
  return {
    getRootProps: (C = {}) => {
      const $ = Aa(e);
      delete $.onTransitionEnter, delete $.onTransitionExited;
      const G = {
        ...$,
        ...C
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...G,
        onKeyDown: g(G),
        ref: x
      };
    },
    getBackdropProps: (C = {}) => {
      const $ = C;
      return {
        "aria-hidden": !0,
        ...$,
        onClick: A($),
        open: s
      };
    },
    getTransitionProps: () => {
      const C = () => {
        E(!1), o && o();
      }, $ = () => {
        E(!0), a && a(), i && F();
      };
      return {
        onEnter: oo(C, (l == null ? void 0 : l.props.onEnter) ?? Eo),
        onExited: oo($, (l == null ? void 0 : l.props.onExited) ?? Eo)
      };
    },
    rootRef: x,
    portalRef: U,
    isTopModal: L,
    exited: h,
    hasTransition: S
  };
}
function ff(e) {
  return wt("MuiModal", e);
}
gn("MuiModal", ["root", "hidden", "backdrop"]);
function pf(e) {
  return wt("MuiSvgIcon", e);
}
gn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const df = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${St(t)}`, `fontSize${St(n)}`]
  };
  return pn(i, pf, r);
}, hf = kt("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${St(n.color)}`], t[`fontSize${St(n.fontSize)}`]];
  }
})(yi(({
  theme: e
}) => {
  var t, n, r, i, o, a, l, u, s, c, f, d, p, x;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (i = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : i.call(t, "fill", {
      duration: (r = (n = (e.vars ?? e).transitions) == null ? void 0 : n.duration) == null ? void 0 : r.shorter
    }),
    variants: [
      {
        props: (h) => !h.hasSvgAsChild,
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
          fontSize: ((a = (o = e.typography) == null ? void 0 : o.pxToRem) == null ? void 0 : a.call(o, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((u = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : u.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((c = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : c.call(s, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, h]) => h && h.main).map(([h]) => {
        var E, S;
        return {
          props: {
            color: h
          },
          style: {
            color: (S = (E = (e.vars ?? e).palette) == null ? void 0 : E[h]) == null ? void 0 : S.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (d = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : d.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (x = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : x.disabled
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
})), Hn = /* @__PURE__ */ q.forwardRef(function(t, n) {
  const r = bn({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: o,
    color: a = "inherit",
    component: l = "svg",
    fontSize: u = "medium",
    htmlColor: s,
    inheritViewBox: c = !1,
    titleAccess: f,
    viewBox: d = "0 0 24 24",
    ...p
  } = r, x = /* @__PURE__ */ q.isValidElement(i) && i.type === "svg", h = {
    ...r,
    color: a,
    component: l,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: d,
    hasSvgAsChild: x
  }, E = {};
  c || (E.viewBox = d);
  const S = df(h);
  return /* @__PURE__ */ ue(hf, {
    as: l,
    className: rt(S.root, o),
    focusable: "false",
    color: s,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...E,
    ...p,
    ...x && i.props,
    ownerState: h,
    children: [x ? i.props.children : i, f ? /* @__PURE__ */ R("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Hn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: y.oneOfType([y.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), y.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: y.oneOfType([y.oneOf(["inherit", "large", "medium", "small"]), y.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: y.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: y.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: y.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: y.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: y.string
});
Hn.muiName = "SvgIcon";
function bi(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ R(Hn, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Hn.muiName, /* @__PURE__ */ q.memo(/* @__PURE__ */ q.forwardRef(n));
}
const mf = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return pn({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, ff, r);
}, gf = kt("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(yi(({
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
}))), yf = kt(Fa, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), ja = /* @__PURE__ */ q.forwardRef(function(t, n) {
  const r = bn({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = yf,
    BackdropProps: o,
    classes: a,
    className: l,
    closeAfterTransition: u = !1,
    children: s,
    container: c,
    component: f,
    components: d = {},
    componentsProps: p = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: h = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: S = !1,
    disableRestoreFocus: N = !1,
    disableScrollLock: w = !1,
    hideBackdrop: O = !1,
    keepMounted: k = !1,
    onBackdropClick: v,
    onClose: L,
    onTransitionEnter: U,
    onTransitionExited: F,
    open: g,
    slotProps: A = {},
    slots: _ = {},
    // eslint-disable-next-line react/prop-types
    theme: j,
    ...D
  } = r, C = {
    ...r,
    closeAfterTransition: u,
    disableAutoFocus: x,
    disableEnforceFocus: h,
    disableEscapeKeyDown: E,
    disablePortal: S,
    disableRestoreFocus: N,
    disableScrollLock: w,
    hideBackdrop: O,
    keepMounted: k
  }, {
    getRootProps: $,
    getBackdropProps: G,
    getTransitionProps: te,
    portalRef: fe,
    isTopModal: m,
    exited: B,
    hasTransition: K
  } = cf({
    ...C,
    rootRef: n
  }), b = {
    ...C,
    exited: B
  }, V = mf(b), Y = {};
  if (s.props.tabIndex === void 0 && (Y.tabIndex = "-1"), K) {
    const {
      onEnter: M,
      onExited: ge
    } = te();
    Y.onEnter = M, Y.onExited = ge;
  }
  const H = {
    ...D,
    slots: {
      root: d.Root,
      backdrop: d.Backdrop,
      ..._
    },
    slotProps: {
      ...p,
      ...A
    }
  }, [Q, Z] = Vt("root", {
    elementType: gf,
    externalForwardedProps: H,
    getSlotProps: $,
    additionalProps: {
      ref: n,
      as: f
    },
    ownerState: b,
    className: rt(l, V == null ? void 0 : V.root, !b.open && b.exited && (V == null ? void 0 : V.hidden))
  }), [ie, W] = Vt("backdrop", {
    elementType: i,
    externalForwardedProps: H,
    additionalProps: o,
    getSlotProps: (M) => G({
      ...M,
      onClick: (ge) => {
        v && v(ge), M != null && M.onClick && M.onClick(ge);
      }
    }),
    className: rt(o == null ? void 0 : o.className, V == null ? void 0 : V.backdrop),
    ownerState: b
  }), re = pt(o == null ? void 0 : o.ref, W.ref);
  return !k && !g && (!K || B) ? null : /* @__PURE__ */ R(Wn, {
    ref: fe,
    container: c,
    disablePortal: S,
    children: /* @__PURE__ */ ue(Q, {
      ...Z,
      children: [!O && i ? /* @__PURE__ */ R(ie, {
        ...W,
        ref: re
      }) : null, /* @__PURE__ */ R(Vn, {
        disableEnforceFocus: h,
        disableAutoFocus: x,
        disableRestoreFocus: N,
        isEnabled: m,
        open: g,
        children: /* @__PURE__ */ q.cloneElement(s, Y)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (ja.propTypes = {
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
  BackdropComponent: y.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: y.object,
  /**
   * A single child content element.
   */
  children: yn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: y.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: y.shape({
    Backdrop: y.elementType,
    Root: y.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: y.shape({
    backdrop: y.oneOfType([y.func, y.object]),
    root: y.oneOfType([y.func, y.object])
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
  container: y.oneOfType([Ln, y.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: y.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: y.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: y.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: y.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: y.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: y.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: y.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: y.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: y.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: y.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: y.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: y.func,
  /**
   * If `true`, the component is shown.
   */
  open: y.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: y.shape({
    backdrop: y.oneOfType([y.func, y.object]),
    root: y.oneOfType([y.func, y.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: y.shape({
    backdrop: y.elementType,
    root: y.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object])
});
function bf(e) {
  return wt("MuiPaper", e);
}
gn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const xf = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, o = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return pn(o, bf, i);
}, vf = kt("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(yi(({
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
}))), Ua = /* @__PURE__ */ q.forwardRef(function(t, n) {
  var p;
  const r = bn({
    props: t,
    name: "MuiPaper"
  }), i = ar(), {
    className: o,
    component: a = "div",
    elevation: l = 1,
    square: u = !1,
    variant: s = "elevation",
    ...c
  } = r, f = {
    ...r,
    component: a,
    elevation: l,
    square: u,
    variant: s
  }, d = xf(f);
  return process.env.NODE_ENV !== "production" && i.shadows[l] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${l}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${l}]\` is defined.`].join(`
`)), /* @__PURE__ */ R(vf, {
    as: a,
    ownerState: f,
    className: rt(d.root, o),
    ref: n,
    ...c,
    style: {
      ...s === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[l],
        ...i.vars && {
          "--Paper-overlay": (p = i.vars.overlays) == null ? void 0 : p[l]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Wr("#fff", Yr(l))}, ${Wr("#fff", Yr(l))})`
        }
      },
      ...c.style
    }
  });
});
process.env.NODE_ENV !== "production" && (Ua.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: y.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: dn(ya, (e) => {
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
  square: y.bool,
  /**
   * @ignore
   */
  style: y.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: y.oneOfType([y.oneOf(["elevation", "outlined"]), y.string])
});
function Ef(e) {
  return wt("MuiPopover", e);
}
gn("MuiPopover", ["root", "paper"]);
function So(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function wo(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ko(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Dn(e) {
  return typeof e == "function" ? e() : e;
}
const Sf = (e) => {
  const {
    classes: t
  } = e;
  return pn({
    root: ["root"],
    paper: ["paper"]
  }, Ef, t);
}, wf = kt(ja, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), kf = kt(Ua, {
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
}), Va = /* @__PURE__ */ q.forwardRef(function(t, n) {
  const r = bn({
    props: t,
    name: "MuiPopover"
  }), {
    action: i,
    anchorEl: o,
    anchorOrigin: a = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: u = "anchorEl",
    children: s,
    className: c,
    container: f,
    elevation: d = 8,
    marginThreshold: p = 16,
    open: x,
    PaperProps: h = {},
    slots: E = {},
    slotProps: S = {},
    transformOrigin: N = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: w = Un,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: k,
      ...v
    } = {},
    disableScrollLock: L = !1,
    ...U
  } = r, F = (S == null ? void 0 : S.paper) ?? h, g = q.useRef(), A = {
    ...r,
    anchorOrigin: a,
    anchorReference: u,
    elevation: d,
    marginThreshold: p,
    externalPaperSlotProps: F,
    transformOrigin: N,
    TransitionComponent: w,
    transitionDuration: O,
    TransitionProps: v
  }, _ = Sf(A), j = q.useCallback(() => {
    if (u === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (l || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), l;
    const W = Dn(o), re = W && W.nodeType === 1 ? W : ot(g.current).body, M = re.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ge = re.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ge.top === 0 && ge.left === 0 && ge.right === 0 && ge.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: M.top + So(M, a.vertical),
      left: M.left + wo(M, a.horizontal)
    };
  }, [o, a.horizontal, a.vertical, l, u]), D = q.useCallback((W) => ({
    vertical: So(W, N.vertical),
    horizontal: wo(W, N.horizontal)
  }), [N.horizontal, N.vertical]), C = q.useCallback((W) => {
    const re = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, M = D(re);
    if (u === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ko(M)
      };
    const ge = j();
    let Ne = ge.top - M.vertical, Oe = ge.left - M.horizontal;
    const Ze = Ne + re.height, at = Oe + re.width, Tt = Ut(Dn(o)), Ye = Tt.innerHeight - p, ht = Tt.innerWidth - p;
    if (p !== null && Ne < p) {
      const _e = Ne - p;
      Ne -= _e, M.vertical += _e;
    } else if (p !== null && Ze > Ye) {
      const _e = Ze - Ye;
      Ne -= _e, M.vertical += _e;
    }
    if (process.env.NODE_ENV !== "production" && re.height > Ye && re.height && Ye && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${re.height - Ye}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), p !== null && Oe < p) {
      const _e = Oe - p;
      Oe -= _e, M.horizontal += _e;
    } else if (at > ht) {
      const _e = at - ht;
      Oe -= _e, M.horizontal += _e;
    }
    return {
      top: `${Math.round(Ne)}px`,
      left: `${Math.round(Oe)}px`,
      transformOrigin: ko(M)
    };
  }, [o, u, j, D, p]), [$, G] = q.useState(x), te = q.useCallback(() => {
    const W = g.current;
    if (!W)
      return;
    const re = C(W);
    re.top !== null && W.style.setProperty("top", re.top), re.left !== null && (W.style.left = re.left), W.style.transformOrigin = re.transformOrigin, G(!0);
  }, [C]);
  q.useEffect(() => (L && window.addEventListener("scroll", te), () => window.removeEventListener("scroll", te)), [o, L, te]);
  const fe = (W, re) => {
    k && k(W, re), te();
  }, m = () => {
    G(!1);
  };
  q.useEffect(() => {
    x && te();
  }), q.useImperativeHandle(i, () => x ? {
    updatePosition: () => {
      te();
    }
  } : null, [x, te]), q.useEffect(() => {
    if (!x)
      return;
    const W = ju(() => {
      te();
    }), re = Ut(o);
    return re.addEventListener("resize", W), () => {
      W.clear(), re.removeEventListener("resize", W);
    };
  }, [o, x, te]);
  let B = O;
  O === "auto" && !w.muiSupportAuto && (B = void 0);
  const K = f || (o ? ot(Dn(o)).body : void 0), b = {
    slots: E,
    slotProps: {
      ...S,
      paper: F
    }
  }, [V, Y] = Vt("paper", {
    elementType: kf,
    externalForwardedProps: b,
    additionalProps: {
      elevation: d,
      className: rt(_.paper, F == null ? void 0 : F.className),
      style: $ ? F.style : {
        ...F.style,
        opacity: 0
      }
    },
    ownerState: A
  }), [H, {
    slotProps: Q,
    ...Z
  }] = Vt("root", {
    elementType: wf,
    externalForwardedProps: b,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: K,
      open: x
    },
    ownerState: A,
    className: rt(_.root, c)
  }), ie = pt(g, Y.ref);
  return /* @__PURE__ */ R(H, {
    ...Z,
    ...!us(H) && {
      slotProps: Q,
      disableScrollLock: L
    },
    ...U,
    ref: n,
    children: /* @__PURE__ */ R(w, {
      appear: !0,
      in: x,
      onEntering: fe,
      onExited: m,
      timeout: B,
      ...v,
      children: /* @__PURE__ */ R(V, {
        ...Y,
        ref: ie,
        children: s
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Va.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: is,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: dn(y.oneOfType([Ln, y.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Dn(e.anchorEl);
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
  anchorOrigin: y.shape({
    horizontal: y.oneOfType([y.oneOf(["center", "left", "right"]), y.number]).isRequired,
    vertical: y.oneOfType([y.oneOf(["bottom", "center", "top"]), y.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: y.shape({
    left: y.number.isRequired,
    top: y.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: y.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: y.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: y.object,
  /**
   * The content of the component.
   */
  children: y.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: y.object,
  /**
   * @ignore
   */
  className: y.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: y.oneOfType([Ln, y.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: y.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: ya,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: y.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: y.func,
  /**
   * If `true`, the component is shown.
   */
  open: y.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: y.shape({
    component: ls
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: y.shape({
    paper: y.oneOfType([y.func, y.object]),
    root: y.oneOfType([y.func, y.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: y.shape({
    paper: y.elementType,
    root: y.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: y.oneOfType([y.arrayOf(y.oneOfType([y.func, y.object, y.bool])), y.func, y.object]),
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
  transformOrigin: y.shape({
    horizontal: y.oneOfType([y.oneOf(["center", "left", "right"]), y.number]).isRequired,
    vertical: y.oneOfType([y.oneOf(["bottom", "center", "top"]), y.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: y.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: y.oneOfType([y.oneOf(["auto"]), y.number, y.shape({
    appear: y.number,
    enter: y.number,
    exit: y.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: y.object
});
const Cf = bi(/* @__PURE__ */ R("path", {
  d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
}), "Tune"), Co = ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"], Tf = [
  "IS NOT NULL",
  "IS NULL",
  "NOT IN",
  "starts with",
  "ends with"
];
function Of(e, t, n) {
  return [...t].sort((i, o) => o.length - i.length), Rf(e);
}
function Rf(e, t, n) {
  if (e = (e || "").trim(), !e) return { type: "group", combinator: "AND", not: !1, rules: [] };
  const r = Af(e);
  return Pf(r);
}
function Af(e) {
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
      let r = n + 1, i = 1;
      for (; r < e.length && i > 0; )
        e[r] === "[" ? i++ : e[r] === "]" && i--, i > 0 && r++;
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
function Pf(e, t, n) {
  let r = 0;
  function i() {
    for (const s of Tf) {
      const c = s.split(" ");
      let f = !0;
      for (let d = 0; d < c.length; d++) {
        const p = r + d;
        if (p >= e.length || e[p].type !== "word" || e[p].value.toUpperCase() !== c[d].toUpperCase()) {
          f = !1;
          break;
        }
      }
      if (f) return { op: s, wordCount: c.length };
    }
    return null;
  }
  function o() {
    const s = [], c = [];
    for (s.push(l()); r < e.length; ) {
      const p = e[r];
      if (p && p.type === "word" && (p.value.toUpperCase() === "AND" || p.value.toUpperCase() === "OR"))
        c.push(p.value.toUpperCase()), r++, s.push(l());
      else
        break;
    }
    if (s.length === 1) return s[0];
    const f = c[0] || "AND";
    return c.every((p) => p === f) ? { type: "group", combinator: f, not: !1, rules: s } : a(s, c);
  }
  function a(s, c) {
    const f = [];
    let d = [s[0]];
    for (let p = 0; p < c.length; p++)
      c[p] === "AND" ? d.push(s[p + 1]) : (d.length === 1 ? f.push(d[0]) : f.push({
        type: "group",
        combinator: "AND",
        not: !1,
        rules: d
      }), d = [s[p + 1]]);
    return d.length === 1 ? f.push(d[0]) : f.push({
      type: "group",
      combinator: "AND",
      not: !1,
      rules: d
    }), { type: "group", combinator: "OR", not: !1, rules: f };
  }
  function l() {
    if (r >= e.length)
      return { type: "rule", column: "", operator: "", value: "" };
    const s = e[r];
    if (s.type === "word" && s.value.toUpperCase() === "NOT") {
      const h = e[r + 1];
      if (!(h && h.type === "word" && h.value.toUpperCase() === "IN")) {
        r++;
        const E = l();
        return E.type === "group" ? { ...E, not: !0 } : { type: "group", combinator: "AND", not: !0, rules: [E] };
      }
    }
    if (s.type === "paren" && s.value === "(") {
      r++;
      const h = o();
      return r < e.length && e[r].type === "paren" && e[r].value === ")" && r++, h.type === "group" ? h : { type: "group", combinator: "AND", not: !1, rules: [h] };
    }
    const c = s.value;
    if (r++, r >= e.length)
      return { type: "rule", column: c, operator: "", value: "" };
    const f = i();
    let d;
    if (f)
      d = f.op, r += f.wordCount;
    else {
      const h = e[r];
      d = h ? h.value : "", r++;
    }
    if (Wt(d))
      return { type: "rule", column: c, operator: d, value: "" };
    if (r >= e.length)
      return { type: "rule", column: c, operator: d, value: "" };
    let p = "";
    const x = e[r];
    if (x && x.type === "word" && x.value.toUpperCase() !== "AND" && x.value.toUpperCase() !== "OR")
      p = x.value, r++;
    else if (x && x.type === "paren" && (d.toUpperCase() === "IN" || d.toUpperCase() === "NOT IN" || d === "in" || d === "not_in") && x.value === "(") {
      let h = "(";
      for (r++; r < e.length; ) {
        if (e[r].type === "paren" && e[r].value === ")") {
          h += ")", r++;
          break;
        }
        h += e[r].value, r++;
      }
      p = h;
    }
    return { type: "rule", column: c, operator: d, value: p };
  }
  const u = o();
  return u.type === "rule" ? { type: "group", combinator: "AND", not: !1, rules: [u] } : u;
}
function Wt(e) {
  return Co.includes(e) || Co.includes(e.toUpperCase());
}
function If(e, t) {
  if (e = (e || "").trim(), !e)
    return { isValid: !0, error: null };
  let n = 0;
  for (const s of e)
    if (s === "(" && n++, s === ")" && n--, n < 0)
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
  for (const s of e)
    if (s === "[" && r++, s === "]" && r--, r < 0)
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
  const a = e.replace(/^\s*\(\s*/, "");
  if (/^\s*(AND|OR)\b/i.test(a))
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
  const u = e.replace(/[()[\]]/g, " ").split(/\s+(?:AND|OR)\s+/i);
  for (const s of u) {
    const c = s.trim();
    if (!c) continue;
    if (c.split(/\s+/).length < 2)
      return {
        isValid: !1,
        error: 'Incomplete condition. Expected: <column> <operator> <value> (e.g. name == "John").'
      };
  }
  return { isValid: !0, error: null };
}
function Nf(e, t, n, r) {
  if (!e) return [];
  const i = /"[^"]*"?|\[[^\]]*\]?|[()]|\s+|[^\s()]+/g, o = e.match(i) || [], a = t || [], l = n || [], u = (r || []).map((p) => p.toUpperCase()), s = l.filter((p) => p.includes(" ")), c = [];
  let f = "column", d = 0;
  for (; d < o.length; ) {
    const p = o[d];
    if (/^\s+$/.test(p)) {
      c.push({ type: "whitespace", text: p }), d++;
      continue;
    }
    if (p === "(" || p === ")") {
      c.push({ type: "paren", text: p }), p === "(" ? f === "value" ? f = "listValue" : f = "column" : p === ")" && f === "listValue" && (f = "logical"), d++;
      continue;
    }
    if (p.toUpperCase() === "NOT" && f === "column") {
      c.push({ type: "logical", text: p }), d++;
      continue;
    }
    if (f === "operator") {
      let h = null;
      for (const E of s) {
        const S = E.split(" ");
        let N = d, w = !0;
        const O = [];
        for (const k of S) {
          for (; N < o.length && /^\s+$/.test(o[N]); )
            O.push(o[N]), N++;
          if (N >= o.length || o[N].toUpperCase() !== k.toUpperCase()) {
            w = !1;
            break;
          }
          O.push(o[N]), N++;
        }
        if (w) {
          h = { text: O.join(""), endIdx: N, op: E };
          break;
        }
      }
      if (h) {
        for (let E = d; E < h.endIdx; E++)
          /^\s+$/.test(o[E]) ? c.push({ type: "whitespace", text: o[E] }) : c.push({ type: "operator", text: o[E] });
        d = h.endIdx, Wt(h.op) ? f = "logical" : f = "value";
        continue;
      }
    }
    let x;
    f === "column" ? u.includes(p.toUpperCase()) ? (x = "logical", f = "column") : (x = a.includes(p) ? "column" : "customColumn", f = "operator") : f === "operator" ? (x = l.includes(p) ? "operator" : "unknownOperator", Wt(p) ? f = "logical" : f = "value") : f === "value" ? (x = "value", f = "logical") : f === "listValue" ? x = "value" : u.includes(p.toUpperCase()) ? (x = "logical", f = "column") : x = "value", c.push({ type: x, text: p }), d++;
  }
  return c;
}
function Wa(e) {
  if (!e || e.type !== "group") return [];
  const t = [];
  for (const n of e.rules || [])
    n.type === "rule" ? t.push({
      column: n.column,
      operator: n.operator,
      value: n.value
    }) : n.type === "group" && t.push(...Wa(n));
  return t;
}
function Ha(e) {
  if (!e || e.type !== "group") return "";
  const t = [];
  for (const r of e.rules || [])
    if (r.type === "rule" && r.column && r.operator)
      Wt(r.operator) ? t.push(`${r.column} ${r.operator}`) : t.push(`${r.column} ${r.operator} ${r.value}`);
    else if (r.type === "group") {
      const i = Ha(r);
      i && t.push(`(${i})`);
    }
  const n = t.join(` ${e.combinator} `);
  return e.not ? `NOT (${n})` : n;
}
const Cr = {
  flex: { xs: "1 1 100%", sm: 1 },
  minWidth: 0
};
function qa() {
  return { type: "rule", column: "", operator: "", value: "" };
}
function Ya(e = "AND") {
  return {
    type: "group",
    combinator: e,
    not: !1,
    rules: [qa()]
  };
}
const _f = ({
  rule: e,
  index: t,
  columnsOperator: n,
  onChange: r,
  onDelete: i,
  sx: o = {}
}) => {
  var c;
  const { columnSelectSx: a, operatorSelectSx: l, valueInputSx: u, deleteButtonSx: s } = o;
  return /* @__PURE__ */ ue(
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
        /* @__PURE__ */ ue(
          Di,
          {
            size: "small",
            value: e.column,
            onChange: (f) => r(t, "column", f.target.value),
            displayEmpty: !0,
            fullWidth: !0,
            sx: { ...Cr, ...a },
            children: [
              /* @__PURE__ */ R(Sn, { value: "", disabled: !0, children: "Select Column" }),
              Object.keys(n).map((f) => /* @__PURE__ */ R(Sn, { value: f, children: f }, f))
            ]
          }
        ),
        /* @__PURE__ */ ue(
          Di,
          {
            size: "small",
            value: e.operator,
            onChange: (f) => r(t, "operator", f.target.value),
            displayEmpty: !0,
            disabled: !e.column,
            fullWidth: !0,
            sx: { ...Cr, ...l },
            children: [
              /* @__PURE__ */ R(Sn, { value: "", disabled: !0, children: "Select Operator" }),
              e.column && ((c = n[e.column]) == null ? void 0 : c.operators.map((f) => /* @__PURE__ */ R(Sn, { value: f, children: f }, f)))
            ]
          }
        ),
        !Wt(e.operator) && /* @__PURE__ */ R(
          zl,
          {
            size: "small",
            value: e.value,
            onChange: (f) => r(t, "value", f.target.value),
            placeholder: "Enter value",
            fullWidth: !0,
            sx: { ...Cr, ...u }
          }
        ),
        /* @__PURE__ */ R(zt, { title: "Delete Rule", children: /* @__PURE__ */ R(
          vt,
          {
            onClick: () => i(t),
            color: "error",
            size: "small",
            sx: {
              alignSelf: { xs: "flex-end", sm: "center" },
              flex: { sm: "0 0 auto" },
              ...s
            },
            children: /* @__PURE__ */ R(fa, { fontSize: "small" })
          }
        ) })
      ]
    }
  );
}, Ga = ({
  group: e,
  path: t,
  columnsOperator: n,
  onChange: r,
  onDelete: i,
  isRoot: o,
  sx: a = {}
}) => {
  const l = (h, E) => {
    E !== null && r(t, { ...e, combinator: E });
  }, u = () => {
    r(t, { ...e, not: !e.not });
  }, s = () => {
    r(t, { ...e, rules: [...e.rules, qa()] });
  }, c = () => {
    r(t, { ...e, rules: [...e.rules, Ya()] });
  }, f = (h, E, S) => {
    const N = e.rules.map((w, O) => {
      if (O !== h) return w;
      const k = { ...w, [E]: S };
      return E === "operator" && Wt(S) && (k.value = ""), k;
    });
    r(t, { ...e, rules: N });
  }, d = (h) => {
    const E = e.rules.filter((S, N) => N !== h);
    r(t, { ...e, rules: E });
  }, p = (h, E) => {
    const S = h[h.length - 1], N = e.rules.map(
      (w, O) => O === S ? E : w
    );
    r(t, { ...e, rules: N });
  }, x = (h) => {
    const E = e.rules.filter((S, N) => N !== h);
    r(t, { ...e, rules: E });
  };
  return /* @__PURE__ */ ue(
    se,
    {
      sx: {
        border: o ? "none" : "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        p: o ? 0 : 1.5,
        ml: o ? 0 : 2,
        mb: 1,
        bgcolor: o ? "transparent" : "action.hover"
      },
      children: [
        /* @__PURE__ */ ue(
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
              /* @__PURE__ */ R(
                Ml,
                {
                  checked: e.not,
                  onClick: u,
                  size: "small",
                  sx: { p: 0.5 }
                }
              ),
              /* @__PURE__ */ R(le, { variant: "body2", sx: { fontWeight: 500, mr: 0.5 }, children: "NOT" }),
              /* @__PURE__ */ ue(
                $l,
                {
                  value: e.combinator,
                  exclusive: !0,
                  onChange: l,
                  size: "small",
                  sx: { height: 28 },
                  children: [
                    /* @__PURE__ */ R(
                      _i,
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
                    /* @__PURE__ */ R(
                      _i,
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
              /* @__PURE__ */ R(se, { sx: { flex: 1 } }),
              /* @__PURE__ */ R(zt, { title: "Add Rule", children: /* @__PURE__ */ R(vt, { onClick: s, size: "small", color: "primary", children: /* @__PURE__ */ R(Mi, { fontSize: "small" }) }) }),
              /* @__PURE__ */ R(zt, { title: "Add Group", children: /* @__PURE__ */ R(
                vt,
                {
                  onClick: c,
                  size: "small",
                  color: "primary",
                  sx: {
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderRadius: "50%",
                    width: 28,
                    height: 28
                  },
                  children: /* @__PURE__ */ R(Mi, { fontSize: "small" })
                }
              ) }),
              !o && /* @__PURE__ */ R(zt, { title: "Delete Group", children: /* @__PURE__ */ R(vt, { onClick: () => i(), color: "error", size: "small", children: /* @__PURE__ */ R(fa, { fontSize: "small" }) }) })
            ]
          }
        ),
        /* @__PURE__ */ R(Ll, { spacing: 1, children: e.rules.map(
          (h, E) => h.type === "group" ? /* @__PURE__ */ R(
            Ga,
            {
              group: h,
              path: [...t, E],
              columnsOperator: n,
              onChange: p,
              onDelete: () => x(E),
              isRoot: !1,
              sx: a
            },
            E
          ) : /* @__PURE__ */ R(
            _f,
            {
              rule: h,
              index: E,
              columnsOperator: n,
              onChange: f,
              onDelete: d,
              sx: a
            },
            E
          )
        ) })
      ]
    }
  );
}, Df = ({
  columnsOperator: e,
  handleApplyFilters: t,
  defaultOperators: n,
  groupTree: r,
  sx: i = {}
}) => {
  const {
    root: o,
    actions: a,
    applyButton: l,
    cancelButton: u,
    ...s
  } = i, [c, f] = Ve(
    () => r && r.type === "group" ? r : Ya("AND")
  );
  rn(() => {
    r && r.type === "group" && f(r);
  }, [r]);
  const d = (p, x) => {
    f(x);
  };
  return /* @__PURE__ */ ue(
    se,
    {
      sx: {
        width: "100%",
        padding: { xs: 1, sm: 2 },
        boxSizing: "border-box",
        ...o
      },
      children: [
        /* @__PURE__ */ R(
          Ga,
          {
            group: c,
            path: [],
            columnsOperator: e,
            onChange: d,
            onDelete: () => {
            },
            isRoot: !0,
            sx: s
          }
        ),
        /* @__PURE__ */ ue(
          se,
          {
            sx: {
              display: "flex",
              justifyContent: "flex-end",
              gap: 1,
              mt: 2.5,
              ...a
            },
            children: [
              /* @__PURE__ */ R(
                $n,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: () => t(c),
                  sx: l,
                  children: "Search"
                }
              ),
              /* @__PURE__ */ R($n, { variant: "outlined", sx: u, children: "Cancel" })
            ]
          }
        )
      ]
    }
  );
}, Mf = bi(/* @__PURE__ */ R("path", {
  d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
}), "HelpOutline"), $f = bi(/* @__PURE__ */ R("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Lf(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const zf = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Bf = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ff = {};
function To(e, t) {
  return (Ff.jsx ? Bf : zf).test(e);
}
const jf = /[ \t\n\f\r]/g;
function Uf(e) {
  return typeof e == "object" ? e.type === "text" ? Oo(e.value) : !1 : Oo(e);
}
function Oo(e) {
  return e.replace(jf, "") === "";
}
class xn {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
xn.prototype.normal = {};
xn.prototype.property = {};
xn.prototype.space = void 0;
function Ka(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new xn(n, r, t);
}
function Qr(e) {
  return e.toLowerCase();
}
class $e {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
$e.prototype.attribute = "";
$e.prototype.booleanish = !1;
$e.prototype.boolean = !1;
$e.prototype.commaOrSpaceSeparated = !1;
$e.prototype.commaSeparated = !1;
$e.prototype.defined = !1;
$e.prototype.mustUseProperty = !1;
$e.prototype.number = !1;
$e.prototype.overloadedBoolean = !1;
$e.prototype.property = "";
$e.prototype.spaceSeparated = !1;
$e.prototype.space = void 0;
let Vf = 0;
const ne = Ct(), Ce = Ct(), Jr = Ct(), z = Ct(), xe = Ct(), Et = Ct(), ze = Ct();
function Ct() {
  return 2 ** ++Vf;
}
const Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ne,
  booleanish: Ce,
  commaOrSpaceSeparated: ze,
  commaSeparated: Et,
  number: z,
  overloadedBoolean: Jr,
  spaceSeparated: xe
}, Symbol.toStringTag, { value: "Module" })), Tr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Zr)
);
class xi extends $e {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), Ro(this, "space", i), typeof r == "number")
      for (; ++o < Tr.length; ) {
        const a = Tr[o];
        Ro(this, Tr[o], (r & Zr[a]) === Zr[a]);
      }
  }
}
xi.prototype.defined = !0;
function Ro(e, t, n) {
  n && (e[t] = n);
}
function Ht(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new xi(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Qr(r)] = r, n[Qr(o.attribute)] = r;
  }
  return new xn(t, n, e.space);
}
const Xa = Ht({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ce,
    ariaAutoComplete: null,
    ariaBusy: Ce,
    ariaChecked: Ce,
    ariaColCount: z,
    ariaColIndex: z,
    ariaColSpan: z,
    ariaControls: xe,
    ariaCurrent: null,
    ariaDescribedBy: xe,
    ariaDetails: null,
    ariaDisabled: Ce,
    ariaDropEffect: xe,
    ariaErrorMessage: null,
    ariaExpanded: Ce,
    ariaFlowTo: xe,
    ariaGrabbed: Ce,
    ariaHasPopup: null,
    ariaHidden: Ce,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: xe,
    ariaLevel: z,
    ariaLive: null,
    ariaModal: Ce,
    ariaMultiLine: Ce,
    ariaMultiSelectable: Ce,
    ariaOrientation: null,
    ariaOwns: xe,
    ariaPlaceholder: null,
    ariaPosInSet: z,
    ariaPressed: Ce,
    ariaReadOnly: Ce,
    ariaRelevant: null,
    ariaRequired: Ce,
    ariaRoleDescription: xe,
    ariaRowCount: z,
    ariaRowIndex: z,
    ariaRowSpan: z,
    ariaSelected: Ce,
    ariaSetSize: z,
    ariaSort: null,
    ariaValueMax: z,
    ariaValueMin: z,
    ariaValueNow: z,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Qa(e, t) {
  return t in e ? e[t] : t;
}
function Ja(e, t) {
  return Qa(e, t.toLowerCase());
}
const Wf = Ht({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: Et,
    acceptCharset: xe,
    accessKey: xe,
    action: null,
    allow: null,
    allowFullScreen: ne,
    allowPaymentRequest: ne,
    allowUserMedia: ne,
    alpha: ne,
    alt: null,
    as: null,
    async: ne,
    autoCapitalize: null,
    autoComplete: xe,
    autoFocus: ne,
    autoPlay: ne,
    blocking: xe,
    capture: null,
    charSet: null,
    checked: ne,
    cite: null,
    className: xe,
    closedBy: null,
    colorSpace: null,
    cols: z,
    colSpan: z,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: Ce,
    controls: ne,
    controlsList: xe,
    coords: z | Et,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ne,
    defer: ne,
    dir: null,
    dirName: null,
    disabled: ne,
    download: Jr,
    draggable: Ce,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ne,
    formTarget: null,
    headers: xe,
    height: z,
    hidden: Jr,
    high: z,
    href: null,
    hrefLang: null,
    htmlFor: xe,
    httpEquiv: xe,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ne,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ne,
    itemId: null,
    itemProp: xe,
    itemRef: xe,
    itemScope: ne,
    itemType: xe,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ne,
    low: z,
    manifest: null,
    max: null,
    maxLength: z,
    media: null,
    method: null,
    min: null,
    minLength: z,
    multiple: ne,
    muted: ne,
    name: null,
    nonce: null,
    noModule: ne,
    noValidate: ne,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: ne,
    optimum: z,
    pattern: null,
    ping: xe,
    placeholder: null,
    playsInline: ne,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ne,
    referrerPolicy: null,
    rel: xe,
    required: ne,
    reversed: ne,
    rows: z,
    rowSpan: z,
    sandbox: xe,
    scope: null,
    scoped: ne,
    seamless: ne,
    selected: ne,
    shadowRootClonable: ne,
    shadowRootCustomElementRegistry: ne,
    shadowRootDelegatesFocus: ne,
    shadowRootMode: null,
    shadowRootSerializable: ne,
    shape: null,
    size: z,
    sizes: null,
    slot: null,
    span: z,
    spellCheck: Ce,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: z,
    step: null,
    style: null,
    tabIndex: z,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ne,
    useMap: null,
    value: Ce,
    width: z,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: xe,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: z,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: z,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: ne,
    // Lists. Use CSS to reduce space between items instead
    declare: ne,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: z,
    // `<img>` and `<object>`
    leftMargin: z,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: z,
    // `<body>`
    marginWidth: z,
    // `<body>`
    noResize: ne,
    // `<frame>`
    noHref: ne,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ne,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ne,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: z,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ce,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: z,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: z,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: ne,
    disablePictureInPicture: ne,
    disableRemotePlayback: ne,
    exportParts: Et,
    part: xe,
    prefix: null,
    property: null,
    results: z,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Ja
}), Hf = Ht({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: ze,
    accentHeight: z,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: z,
    amplitude: z,
    arabicForm: null,
    ascent: z,
    attributeName: null,
    attributeType: null,
    azimuth: z,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: z,
    by: null,
    calcMode: null,
    capHeight: z,
    className: xe,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: z,
    diffuseConstant: z,
    direction: null,
    display: null,
    dur: null,
    divisor: z,
    dominantBaseline: null,
    download: ne,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: z,
    enableBackground: null,
    end: null,
    event: null,
    exponent: z,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: z,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: Et,
    g2: Et,
    glyphName: Et,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: z,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: z,
    horizOriginX: z,
    horizOriginY: z,
    id: null,
    ideographic: z,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: z,
    k: z,
    k1: z,
    k2: z,
    k3: z,
    k4: z,
    kernelMatrix: ze,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: z,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: z,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: z,
    overlineThickness: z,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: z,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: xe,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: z,
    pointsAtY: z,
    pointsAtZ: z,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: ze,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: ze,
    rev: ze,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: ze,
    requiredFeatures: ze,
    requiredFonts: ze,
    requiredFormats: ze,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: z,
    specularExponent: z,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: z,
    strikethroughThickness: z,
    string: null,
    stroke: null,
    strokeDashArray: ze,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: z,
    strokeOpacity: z,
    strokeWidth: null,
    style: null,
    surfaceScale: z,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: ze,
    tabIndex: z,
    tableValues: null,
    target: null,
    targetX: z,
    targetY: z,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: ze,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: z,
    underlineThickness: z,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: z,
    values: null,
    vAlphabetic: z,
    vMathematical: z,
    vectorEffect: null,
    vHanging: z,
    vIdeographic: z,
    version: null,
    vertAdvY: z,
    vertOriginX: z,
    vertOriginY: z,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: z,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Qa
}), Za = Ht({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), el = Ht({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Ja
}), tl = Ht({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), qf = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Yf = /[A-Z]/g, Ao = /-[a-z]/g, Gf = /^data[-\w.:]+$/i;
function Kf(e, t) {
  const n = Qr(t);
  let r = t, i = $e;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Gf.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(Ao, Qf);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Ao.test(o)) {
        let a = o.replace(Yf, Xf);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    i = xi;
  }
  return new i(r, t);
}
function Xf(e) {
  return "-" + e.toLowerCase();
}
function Qf(e) {
  return e.charAt(1).toUpperCase();
}
const Jf = Ka([Xa, Wf, Za, el, tl], "html"), vi = Ka([Xa, Hf, Za, el, tl], "svg");
function Zf(e) {
  return e.join(" ").trim();
}
var Mt = {}, Or, Po;
function ep() {
  if (Po) return Or;
  Po = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, a = /^[;\s]*/, l = /^\s+|\s+$/g, u = `
`, s = "/", c = "*", f = "", d = "comment", p = "declaration";
  function x(E, S) {
    if (typeof E != "string")
      throw new TypeError("First argument must be a string");
    if (!E) return [];
    S = S || {};
    var N = 1, w = 1;
    function O(D) {
      var C = D.match(t);
      C && (N += C.length);
      var $ = D.lastIndexOf(u);
      w = ~$ ? D.length - $ : w + D.length;
    }
    function k() {
      var D = { line: N, column: w };
      return function(C) {
        return C.position = new v(D), F(), C;
      };
    }
    function v(D) {
      this.start = D, this.end = { line: N, column: w }, this.source = S.source;
    }
    v.prototype.content = E;
    function L(D) {
      var C = new Error(
        S.source + ":" + N + ":" + w + ": " + D
      );
      if (C.reason = D, C.filename = S.source, C.line = N, C.column = w, C.source = E, !S.silent) throw C;
    }
    function U(D) {
      var C = D.exec(E);
      if (C) {
        var $ = C[0];
        return O($), E = E.slice($.length), C;
      }
    }
    function F() {
      U(n);
    }
    function g(D) {
      var C;
      for (D = D || []; C = A(); )
        C !== !1 && D.push(C);
      return D;
    }
    function A() {
      var D = k();
      if (!(s != E.charAt(0) || c != E.charAt(1))) {
        for (var C = 2; f != E.charAt(C) && (c != E.charAt(C) || s != E.charAt(C + 1)); )
          ++C;
        if (C += 2, f === E.charAt(C - 1))
          return L("End of comment missing");
        var $ = E.slice(2, C - 2);
        return w += 2, O($), E = E.slice(C), w += 2, D({
          type: d,
          comment: $
        });
      }
    }
    function _() {
      var D = k(), C = U(r);
      if (C) {
        if (A(), !U(i)) return L("property missing ':'");
        var $ = U(o), G = D({
          type: p,
          property: h(C[0].replace(e, f)),
          value: $ ? h($[0].replace(e, f)) : f
        });
        return U(a), G;
      }
    }
    function j() {
      var D = [];
      g(D);
      for (var C; C = _(); )
        C !== !1 && (D.push(C), g(D));
      return D;
    }
    return F(), j();
  }
  function h(E) {
    return E ? E.replace(l, f) : f;
  }
  return Or = x, Or;
}
var Io;
function tp() {
  if (Io) return Mt;
  Io = 1;
  var e = Mt && Mt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.default = n;
  const t = e(ep());
  function n(r, i) {
    let o = null;
    if (!r || typeof r != "string")
      return o;
    const a = (0, t.default)(r), l = typeof i == "function";
    return a.forEach((u) => {
      if (u.type !== "declaration")
        return;
      const { property: s, value: c } = u;
      l ? i(s, c, u) : c && (o = o || {}, o[s] = c);
    }), o;
  }
  return Mt;
}
var Kt = {}, No;
function np() {
  if (No) return Kt;
  No = 1, Object.defineProperty(Kt, "__esModule", { value: !0 }), Kt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, o = function(s) {
    return !s || n.test(s) || e.test(s);
  }, a = function(s, c) {
    return c.toUpperCase();
  }, l = function(s, c) {
    return "".concat(c, "-");
  }, u = function(s, c) {
    return c === void 0 && (c = {}), o(s) ? s : (s = s.toLowerCase(), c.reactCompat ? s = s.replace(i, l) : s = s.replace(r, l), s.replace(t, a));
  };
  return Kt.camelCase = u, Kt;
}
var Xt, _o;
function rp() {
  if (_o) return Xt;
  _o = 1;
  var e = Xt && Xt.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(tp()), n = np();
  function r(i, o) {
    var a = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(l, u) {
      l && u && (a[(0, n.camelCase)(l, o)] = u);
    }), a;
  }
  return r.default = r, Xt = r, Xt;
}
var ip = rp();
const op = /* @__PURE__ */ li(ip), nl = rl("end"), Ei = rl("start");
function rl(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function ap(e) {
  const t = Ei(e), n = nl(e);
  if (t && n)
    return { start: t, end: n };
}
function ln(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Do(e.position) : "start" in e || "end" in e ? Do(e) : "line" in e || "column" in e ? ei(e) : "";
}
function ei(e) {
  return Mo(e && e.line) + ":" + Mo(e && e.column);
}
function Do(e) {
  return ei(e && e.start) + "-" + ei(e && e.end);
}
function Mo(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ie extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, a = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (a = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const u = r.indexOf(":");
      u === -1 ? o.ruleId = r : (o.source = r.slice(0, u), o.ruleId = r.slice(u + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const u = o.ancestors[o.ancestors.length - 1];
      u && (o.place = u.position);
    }
    const l = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = l ? l.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = l ? l.line : void 0, this.name = ln(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = a && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Ie.prototype.file = "";
Ie.prototype.name = "";
Ie.prototype.reason = "";
Ie.prototype.message = "";
Ie.prototype.stack = "";
Ie.prototype.column = void 0;
Ie.prototype.line = void 0;
Ie.prototype.ancestors = void 0;
Ie.prototype.cause = void 0;
Ie.prototype.fatal = void 0;
Ie.prototype.place = void 0;
Ie.prototype.ruleId = void 0;
Ie.prototype.source = void 0;
const Si = {}.hasOwnProperty, lp = /* @__PURE__ */ new Map(), sp = /[A-Z]/g, up = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), cp = /* @__PURE__ */ new Set(["td", "th"]), il = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function fp(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = xp(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = bp(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? vi : Jf,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = ol(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function ol(e, t, n) {
  if (t.type === "element")
    return pp(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return dp(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return mp(e, t, n);
  if (t.type === "mdxjsEsm")
    return hp(e, t);
  if (t.type === "root")
    return gp(e, t, n);
  if (t.type === "text")
    return yp(e, t);
}
function pp(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = vi, e.schema = i), e.ancestors.push(t);
  const o = ll(e, t.tagName, !1), a = vp(e, t);
  let l = ki(e, t);
  return up.has(t.tagName) && (l = l.filter(function(u) {
    return typeof u == "string" ? !Uf(u) : !0;
  })), al(e, a, o, t), wi(a, l), e.ancestors.pop(), e.schema = r, e.create(t, o, a, n);
}
function dp(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  fn(e, t.position);
}
function hp(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  fn(e, t.position);
}
function mp(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = vi, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : ll(e, t.name, !0), a = Ep(e, t), l = ki(e, t);
  return al(e, a, o, t), wi(a, l), e.ancestors.pop(), e.schema = r, e.create(t, o, a, n);
}
function gp(e, t, n) {
  const r = {};
  return wi(r, ki(e, t)), e.create(t, e.Fragment, r, n);
}
function yp(e, t) {
  return t.value;
}
function al(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function wi(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function bp(e, t, n) {
  return r;
  function r(i, o, a, l) {
    const s = Array.isArray(a.children) ? n : t;
    return l ? s(o, a, l) : s(o, a);
  }
}
function xp(e, t) {
  return n;
  function n(r, i, o, a) {
    const l = Array.isArray(o.children), u = Ei(r);
    return t(
      i,
      o,
      a,
      l,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0
      },
      void 0
    );
  }
}
function vp(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Si.call(t.properties, i)) {
      const o = Sp(e, i, t.properties[i]);
      if (o) {
        const [a, l] = o;
        e.tableCellAlignToStyle && a === "align" && typeof l == "string" && cp.has(t.tagName) ? r = l : n[a] = l;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Ep(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const a = o.expression;
        a.type;
        const l = a.properties[0];
        l.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(l.argument)
        );
      } else
        fn(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const l = r.value.data.estree.body[0];
          l.type, o = e.evaluater.evaluateExpression(l.expression);
        } else
          fn(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function ki(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : lp;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let a;
    if (e.passKeys) {
      const u = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (u) {
        const s = i.get(u) || 0;
        a = u + "-" + s, i.set(u, s + 1);
      }
    }
    const l = ol(e, o, a);
    l !== void 0 && n.push(l);
  }
  return n;
}
function Sp(e, t, n) {
  const r = Kf(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Lf(n) : Zf(n)), r.property === "style") {
      let i = typeof n == "object" ? n : wp(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = kp(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? qf[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function wp(e, t) {
  try {
    return op(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new Ie("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = il + "#cannot-parse-style-attribute", i;
  }
}
function ll(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, a;
    for (; ++o < i.length; ) {
      const l = To(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      a = a ? {
        type: "MemberExpression",
        object: a,
        property: l,
        computed: !!(o && l.type === "Literal"),
        optional: !1
      } : l;
    }
    r = a;
  } else
    r = To(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Si.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  fn(e);
}
function fn(e, t) {
  const n = new Ie(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = il + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function kp(e) {
  const t = {};
  let n;
  for (n in e)
    Si.call(e, n) && (t[Cp(n)] = e[n]);
  return t;
}
function Cp(e) {
  let t = e.replace(sp, Tp);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Tp(e) {
  return "-" + e.toLowerCase();
}
const Rr = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, Op = {};
function Rp(e, t) {
  const n = Op, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return sl(e, r, i);
}
function sl(e, t, n) {
  if (Ap(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return $o(e.children, t, n);
  }
  return Array.isArray(e) ? $o(e, t, n) : "";
}
function $o(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = sl(e[i], t, n);
  return r.join("");
}
function Ap(e) {
  return !!(e && typeof e == "object");
}
const Lo = document.createElement("i");
function Ci(e) {
  const t = "&" + e + ";";
  Lo.innerHTML = t;
  const n = Lo.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Qe(e, t, n, r) {
  const i = e.length;
  let o = 0, a;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); o < r.length; )
      a = r.slice(o, o + 1e4), a.unshift(t, 0), e.splice(...a), o += 1e4, t += 1e4;
}
function He(e, t) {
  return e.length > 0 ? (Qe(e, e.length, 0, t), e) : t;
}
const zo = {}.hasOwnProperty;
function Pp(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Ip(t, e[n]);
  return t;
}
function Ip(e, t) {
  let n;
  for (n in t) {
    const i = (zo.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let a;
    if (o)
      for (a in o) {
        zo.call(i, a) || (i[a] = []);
        const l = o[a];
        Np(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(l) ? l : l ? [l] : []
        );
      }
  }
}
function Np(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Qe(e, 0, 0, r);
}
function ul(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Ft(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Xe = dt(/[A-Za-z]/), Fe = dt(/[\dA-Za-z]/), _p = dt(/[#-'*+\--9=?A-Z^-~]/);
function ti(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const ni = dt(/\d/), Dp = dt(/[\dA-Fa-f]/), Mp = dt(/[!-/:-@[-`{-~]/);
function ee(e) {
  return e !== null && e < -2;
}
function Me(e) {
  return e !== null && (e < 0 || e === 32);
}
function ce(e) {
  return e === -2 || e === -1 || e === 32;
}
const $p = dt(new RegExp("\\p{P}|\\p{S}", "u")), Lp = dt(/\s/);
function dt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function qt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = "";
    if (o === 37 && Fe(e.charCodeAt(n + 1)) && Fe(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const l = e.charCodeAt(n + 1);
      o < 56320 && l > 56319 && l < 57344 ? (a = String.fromCharCode(o, l), i = 1) : a = "�";
    } else
      a = String.fromCharCode(o);
    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function ve(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(u) {
    return ce(u) ? (e.enter(n), l(u)) : t(u);
  }
  function l(u) {
    return ce(u) && o++ < i ? (e.consume(u), l) : (e.exit(n), t(u));
  }
}
const zp = {
  tokenize: Bp
};
function Bp(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(l) {
    if (l === null) {
      e.consume(l);
      return;
    }
    return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ve(e, t, "linePrefix");
  }
  function i(l) {
    return e.enter("paragraph"), o(l);
  }
  function o(l) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, a(l);
  }
  function a(l) {
    if (l === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
      return;
    }
    return ee(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), a);
  }
}
const Fp = {
  tokenize: jp
}, Bo = {
  tokenize: Up
};
function jp(e) {
  const t = this, n = [];
  let r = 0, i, o, a;
  return l;
  function l(w) {
    if (r < n.length) {
      const O = n[r];
      return t.containerState = O[1], e.attempt(O[0].continuation, u, s)(w);
    }
    return s(w);
  }
  function u(w) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && N();
      const O = t.events.length;
      let k = O, v;
      for (; k--; )
        if (t.events[k][0] === "exit" && t.events[k][1].type === "chunkFlow") {
          v = t.events[k][1].end;
          break;
        }
      S(r);
      let L = O;
      for (; L < t.events.length; )
        t.events[L][1].end = {
          ...v
        }, L++;
      return Qe(t.events, k + 1, 0, t.events.slice(O)), t.events.length = L, s(w);
    }
    return l(w);
  }
  function s(w) {
    if (r === n.length) {
      if (!i)
        return d(w);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return x(w);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Bo, c, f)(w);
  }
  function c(w) {
    return i && N(), S(r), d(w);
  }
  function f(w) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, x(w);
  }
  function d(w) {
    return t.containerState = {}, e.attempt(Bo, p, x)(w);
  }
  function p(w) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(w);
  }
  function x(w) {
    if (w === null) {
      i && N(), S(0), e.consume(w);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), h(w);
  }
  function h(w) {
    if (w === null) {
      E(e.exit("chunkFlow"), !0), S(0), e.consume(w);
      return;
    }
    return ee(w) ? (e.consume(w), E(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, l) : (e.consume(w), h);
  }
  function E(w, O) {
    const k = t.sliceStream(w);
    if (O && k.push(null), w.previous = o, o && (o.next = w), o = w, i.defineSkip(w.start), i.write(k), t.parser.lazy[w.start.line]) {
      let v = i.events.length;
      for (; v--; )
        if (
          // The token starts before the line ending…
          i.events[v][1].start.offset < a && // …and either is not ended yet…
          (!i.events[v][1].end || // …or ends after it.
          i.events[v][1].end.offset > a)
        )
          return;
      const L = t.events.length;
      let U = L, F, g;
      for (; U--; )
        if (t.events[U][0] === "exit" && t.events[U][1].type === "chunkFlow") {
          if (F) {
            g = t.events[U][1].end;
            break;
          }
          F = !0;
        }
      for (S(r), v = L; v < t.events.length; )
        t.events[v][1].end = {
          ...g
        }, v++;
      Qe(t.events, U + 1, 0, t.events.slice(L)), t.events.length = v;
    }
  }
  function S(w) {
    let O = n.length;
    for (; O-- > w; ) {
      const k = n[O];
      t.containerState = k[1], k[0].exit.call(t, e);
    }
    n.length = w;
  }
  function N() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Up(e, t, n) {
  return ve(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Fo(e) {
  if (e === null || Me(e) || Lp(e))
    return 1;
  if ($p(e))
    return 2;
}
function Ti(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const ri = {
  name: "attention",
  resolveAll: Vp,
  tokenize: Wp
};
function Vp(e, t) {
  let n = -1, r, i, o, a, l, u, s, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, d = {
            ...e[n][1].start
          };
          jo(f, -u), jo(d, u), a = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, l = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: d
          }, o = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
            start: {
              ...a.start
            },
            end: {
              ...l.end
            }
          }, e[r][1].end = {
            ...a.start
          }, e[n][1].start = {
            ...l.end
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = He(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = He(s, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["enter", o, t]]), s = He(s, Ti(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = He(s, [["exit", o, t], ["enter", l, t], ["exit", l, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, s = He(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, Qe(e, r - 1, n - r + 3, s), n = r + s.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Wp(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Fo(r);
  let o;
  return a;
  function a(u) {
    return o = u, e.enter("attentionSequence"), l(u);
  }
  function l(u) {
    if (u === o)
      return e.consume(u), l;
    const s = e.exit("attentionSequence"), c = Fo(u), f = !c || c === 2 && i || n.includes(u), d = !i || i === 2 && c || n.includes(r);
    return s._open = !!(o === 42 ? f : f && (i || !d)), s._close = !!(o === 42 ? d : d && (c || !f)), t(u);
  }
}
function jo(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Hp = {
  name: "autolink",
  tokenize: qp
};
function qp(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Xe(p) ? (e.consume(p), a) : p === 64 ? n(p) : s(p);
  }
  function a(p) {
    return p === 43 || p === 45 || p === 46 || Fe(p) ? (r = 1, l(p)) : s(p);
  }
  function l(p) {
    return p === 58 ? (e.consume(p), r = 0, u) : (p === 43 || p === 45 || p === 46 || Fe(p)) && r++ < 32 ? (e.consume(p), l) : (r = 0, s(p));
  }
  function u(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || ti(p) ? n(p) : (e.consume(p), u);
  }
  function s(p) {
    return p === 64 ? (e.consume(p), c) : _p(p) ? (e.consume(p), s) : n(p);
  }
  function c(p) {
    return Fe(p) ? f(p) : n(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, c) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
  }
  function d(p) {
    if ((p === 45 || Fe(p)) && r++ < 63) {
      const x = p === 45 ? d : f;
      return e.consume(p), x;
    }
    return n(p);
  }
}
const lr = {
  partial: !0,
  tokenize: Yp
};
function Yp(e, t, n) {
  return r;
  function r(o) {
    return ce(o) ? ve(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || ee(o) ? t(o) : n(o);
  }
}
const cl = {
  continuation: {
    tokenize: Kp
  },
  exit: Xp,
  name: "blockQuote",
  tokenize: Gp
};
function Gp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const l = r.containerState;
      return l.open || (e.enter("blockQuote", {
        _container: !0
      }), l.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), o;
    }
    return n(a);
  }
  function o(a) {
    return ce(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function Kp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ce(a) ? ve(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : o(a);
  }
  function o(a) {
    return e.attempt(cl, t, n)(a);
  }
}
function Xp(e) {
  e.exit("blockQuote");
}
const fl = {
  name: "characterEscape",
  tokenize: Qp
};
function Qp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Mp(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const pl = {
  name: "characterReference",
  tokenize: Jp
};
function Jp(e, t, n) {
  const r = this;
  let i = 0, o, a;
  return l;
  function l(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), u;
  }
  function u(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, a = Fe, c(f));
  }
  function s(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = Dp, c) : (e.enter("characterReferenceValue"), o = 7, a = ni, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return a === Fe && !Ci(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(f) && i++ < o ? (e.consume(f), c) : n(f);
  }
}
const Uo = {
  partial: !0,
  tokenize: ed
}, Vo = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Zp
};
function Zp(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: k
  };
  let o = 0, a = 0, l;
  return u;
  function u(v) {
    return s(v);
  }
  function s(v) {
    const L = r.events[r.events.length - 1];
    return o = L && L[1].type === "linePrefix" ? L[2].sliceSerialize(L[1], !0).length : 0, l = v, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(v);
  }
  function c(v) {
    return v === l ? (a++, e.consume(v), c) : a < 3 ? n(v) : (e.exit("codeFencedFenceSequence"), ce(v) ? ve(e, f, "whitespace")(v) : f(v));
  }
  function f(v) {
    return v === null || ee(v) ? (e.exit("codeFencedFence"), r.interrupt ? t(v) : e.check(Uo, h, O)(v)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(v));
  }
  function d(v) {
    return v === null || ee(v) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(v)) : ce(v) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ve(e, p, "whitespace")(v)) : v === 96 && v === l ? n(v) : (e.consume(v), d);
  }
  function p(v) {
    return v === null || ee(v) ? f(v) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), x(v));
  }
  function x(v) {
    return v === null || ee(v) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(v)) : v === 96 && v === l ? n(v) : (e.consume(v), x);
  }
  function h(v) {
    return e.attempt(i, O, E)(v);
  }
  function E(v) {
    return e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), S;
  }
  function S(v) {
    return o > 0 && ce(v) ? ve(e, N, "linePrefix", o + 1)(v) : N(v);
  }
  function N(v) {
    return v === null || ee(v) ? e.check(Uo, h, O)(v) : (e.enter("codeFlowValue"), w(v));
  }
  function w(v) {
    return v === null || ee(v) ? (e.exit("codeFlowValue"), N(v)) : (e.consume(v), w);
  }
  function O(v) {
    return e.exit("codeFenced"), t(v);
  }
  function k(v, L, U) {
    let F = 0;
    return g;
    function g(C) {
      return v.enter("lineEnding"), v.consume(C), v.exit("lineEnding"), A;
    }
    function A(C) {
      return v.enter("codeFencedFence"), ce(C) ? ve(v, _, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(C) : _(C);
    }
    function _(C) {
      return C === l ? (v.enter("codeFencedFenceSequence"), j(C)) : U(C);
    }
    function j(C) {
      return C === l ? (F++, v.consume(C), j) : F >= a ? (v.exit("codeFencedFenceSequence"), ce(C) ? ve(v, D, "whitespace")(C) : D(C)) : U(C);
    }
    function D(C) {
      return C === null || ee(C) ? (v.exit("codeFencedFence"), L(C)) : U(C);
    }
  }
}
function ed(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const Ar = {
  name: "codeIndented",
  tokenize: nd
}, td = {
  partial: !0,
  tokenize: rd
};
function nd(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), ve(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? a(s) : n(s);
  }
  function a(s) {
    return s === null ? u(s) : ee(s) ? e.attempt(td, a, u)(s) : (e.enter("codeFlowValue"), l(s));
  }
  function l(s) {
    return s === null || ee(s) ? (e.exit("codeFlowValue"), a(s)) : (e.consume(s), l);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function rd(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : ee(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : ve(e, o, "linePrefix", 5)(a);
  }
  function o(a) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : ee(a) ? i(a) : n(a);
  }
}
const id = {
  name: "codeText",
  previous: ad,
  resolve: od,
  tokenize: ld
};
function od(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function ad(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ld(e, t, n) {
  let r = 0, i, o;
  return a;
  function a(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), l(f);
  }
  function l(f) {
    return f === 96 ? (e.consume(f), r++, l) : (e.exit("codeTextSequence"), u(f));
  }
  function u(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), u) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(f)) : ee(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(f));
  }
  function s(f) {
    return f === null || f === 32 || f === 96 || ee(f) ? (e.exit("codeTextData"), u(f)) : (e.consume(f), s);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", s(f));
  }
}
class sd {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Qt(this.left, r), o.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), Qt(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), Qt(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Qt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Qt(this.left, n.reverse());
      }
  }
}
function Qt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function dl(e) {
  const t = {};
  let n = -1, r, i, o, a, l, u, s;
  const c = new sd(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
      for (; ++o < u.length && u[o][1].type !== "content"; )
        u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, ud(c, n)), n = t[n], s = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (a = c.get(o), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = o);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, l = c.slice(i, n), l.unshift(r), c.splice(i, n - i + 1, l));
    }
  }
  return Qe(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !s;
}
function ud(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const l = a.events, u = [], s = {};
  let c, f, d = -1, p = n, x = 0, h = 0;
  const E = [h];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    o.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), f && a.defineSkip(p.start), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(c), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = n; ++d < l.length; )
    // Find a void token that includes a break.
    l[d][0] === "exit" && l[d - 1][0] === "enter" && l[d][1].type === l[d - 1][1].type && l[d][1].start.line !== l[d][1].end.line && (h = d + 1, E.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (a.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : E.pop(), d = E.length; d--; ) {
    const S = l.slice(E[d], E[d + 1]), N = o.pop();
    u.push([N, N + S.length - 1]), e.splice(N, 2, S);
  }
  for (u.reverse(), d = -1; ++d < u.length; )
    s[x + u[d][0]] = x + u[d][1], x += u[d][1] - u[d][0] - 1;
  return s;
}
const cd = {
  resolve: pd,
  tokenize: dd
}, fd = {
  partial: !0,
  tokenize: hd
};
function pd(e) {
  return dl(e), e;
}
function dd(e, t) {
  let n;
  return r;
  function r(l) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(l);
  }
  function i(l) {
    return l === null ? o(l) : ee(l) ? e.check(fd, a, o)(l) : (e.consume(l), i);
  }
  function o(l) {
    return e.exit("chunkContent"), e.exit("content"), t(l);
  }
  function a(l) {
    return e.consume(l), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function hd(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ve(e, o, "linePrefix");
  }
  function o(a) {
    if (a === null || ee(a))
      return n(a);
    const l = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && l && l[1].type === "linePrefix" && l[2].sliceSerialize(l[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function hl(e, t, n, r, i, o, a, l, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(S) {
    return S === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(S), e.exit(o), d) : S === null || S === 32 || S === 41 || ti(S) ? n(S) : (e.enter(r), e.enter(a), e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), h(S));
  }
  function d(S) {
    return S === 62 ? (e.enter(o), e.consume(S), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(l), e.enter("chunkString", {
      contentType: "string"
    }), p(S));
  }
  function p(S) {
    return S === 62 ? (e.exit("chunkString"), e.exit(l), d(S)) : S === null || S === 60 || ee(S) ? n(S) : (e.consume(S), S === 92 ? x : p);
  }
  function x(S) {
    return S === 60 || S === 62 || S === 92 ? (e.consume(S), p) : p(S);
  }
  function h(S) {
    return !c && (S === null || S === 41 || Me(S)) ? (e.exit("chunkString"), e.exit(l), e.exit(a), e.exit(r), t(S)) : c < s && S === 40 ? (e.consume(S), c++, h) : S === 41 ? (e.consume(S), c--, h) : S === null || S === 32 || S === 40 || ti(S) ? n(S) : (e.consume(S), S === 92 ? E : h);
  }
  function E(S) {
    return S === 40 || S === 41 || S === 92 ? (e.consume(S), h) : h(S);
  }
}
function ml(e, t, n, r, i, o) {
  const a = this;
  let l = 0, u;
  return s;
  function s(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), c;
  }
  function c(p) {
    return l > 999 || p === null || p === 91 || p === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !l && "_hiddenFootnoteSupport" in a.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : ee(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || ee(p) || l++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), u || (u = !ce(p)), p === 92 ? d : f);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), l++, f) : f(p);
  }
}
function gl(e, t, n, r, i, o) {
  let a;
  return l;
  function l(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), a = d === 40 ? 41 : d, u) : n(d);
  }
  function u(d) {
    return d === a ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(o), s(d));
  }
  function s(d) {
    return d === a ? (e.exit(o), u(a)) : d === null ? n(d) : ee(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ve(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === a || d === null || ee(d) ? (e.exit("chunkString"), s(d)) : (e.consume(d), d === 92 ? f : c);
  }
  function f(d) {
    return d === a || d === 92 ? (e.consume(d), c) : c(d);
  }
}
function sn(e, t) {
  let n;
  return r;
  function r(i) {
    return ee(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : ce(i) ? ve(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const md = {
  name: "definition",
  tokenize: yd
}, gd = {
  partial: !0,
  tokenize: bd
};
function yd(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), a(p);
  }
  function a(p) {
    return ml.call(
      r,
      e,
      l,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function l(p) {
    return i = Ft(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), u) : n(p);
  }
  function u(p) {
    return Me(p) ? sn(e, s)(p) : s(p);
  }
  function s(p) {
    return hl(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function c(p) {
    return e.attempt(gd, f, f)(p);
  }
  function f(p) {
    return ce(p) ? ve(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || ee(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function bd(e, t, n) {
  return r;
  function r(l) {
    return Me(l) ? sn(e, i)(l) : n(l);
  }
  function i(l) {
    return gl(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(l);
  }
  function o(l) {
    return ce(l) ? ve(e, a, "whitespace")(l) : a(l);
  }
  function a(l) {
    return l === null || ee(l) ? t(l) : n(l);
  }
}
const xd = {
  name: "hardBreakEscape",
  tokenize: vd
};
function vd(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return ee(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const Ed = {
  name: "headingAtx",
  resolve: Sd,
  tokenize: wd
};
function Sd(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, Qe(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function wd(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), o(c);
  }
  function o(c) {
    return e.enter("atxHeadingSequence"), a(c);
  }
  function a(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), a) : c === null || Me(c) ? (e.exit("atxHeadingSequence"), l(c)) : n(c);
  }
  function l(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || ee(c) ? (e.exit("atxHeading"), t(c)) : ce(c) ? ve(e, l, "whitespace")(c) : (e.enter("atxHeadingText"), s(c));
  }
  function u(c) {
    return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), l(c));
  }
  function s(c) {
    return c === null || c === 35 || Me(c) ? (e.exit("atxHeadingText"), l(c)) : (e.consume(c), s);
  }
}
const kd = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Wo = ["pre", "script", "style", "textarea"], Cd = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Rd,
  tokenize: Ad
}, Td = {
  partial: !0,
  tokenize: Id
}, Od = {
  partial: !0,
  tokenize: Pd
};
function Rd(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Ad(e, t, n) {
  const r = this;
  let i, o, a, l, u;
  return s;
  function s(b) {
    return c(b);
  }
  function c(b) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(b), f;
  }
  function f(b) {
    return b === 33 ? (e.consume(b), d) : b === 47 ? (e.consume(b), o = !0, h) : b === 63 ? (e.consume(b), i = 3, r.interrupt ? t : m) : Xe(b) ? (e.consume(b), a = String.fromCharCode(b), E) : n(b);
  }
  function d(b) {
    return b === 45 ? (e.consume(b), i = 2, p) : b === 91 ? (e.consume(b), i = 5, l = 0, x) : Xe(b) ? (e.consume(b), i = 4, r.interrupt ? t : m) : n(b);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), r.interrupt ? t : m) : n(b);
  }
  function x(b) {
    const V = "CDATA[";
    return b === V.charCodeAt(l++) ? (e.consume(b), l === V.length ? r.interrupt ? t : _ : x) : n(b);
  }
  function h(b) {
    return Xe(b) ? (e.consume(b), a = String.fromCharCode(b), E) : n(b);
  }
  function E(b) {
    if (b === null || b === 47 || b === 62 || Me(b)) {
      const V = b === 47, Y = a.toLowerCase();
      return !V && !o && Wo.includes(Y) ? (i = 1, r.interrupt ? t(b) : _(b)) : kd.includes(a.toLowerCase()) ? (i = 6, V ? (e.consume(b), S) : r.interrupt ? t(b) : _(b)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(b) : o ? N(b) : w(b));
    }
    return b === 45 || Fe(b) ? (e.consume(b), a += String.fromCharCode(b), E) : n(b);
  }
  function S(b) {
    return b === 62 ? (e.consume(b), r.interrupt ? t : _) : n(b);
  }
  function N(b) {
    return ce(b) ? (e.consume(b), N) : g(b);
  }
  function w(b) {
    return b === 47 ? (e.consume(b), g) : b === 58 || b === 95 || Xe(b) ? (e.consume(b), O) : ce(b) ? (e.consume(b), w) : g(b);
  }
  function O(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || Fe(b) ? (e.consume(b), O) : k(b);
  }
  function k(b) {
    return b === 61 ? (e.consume(b), v) : ce(b) ? (e.consume(b), k) : w(b);
  }
  function v(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), u = b, L) : ce(b) ? (e.consume(b), v) : U(b);
  }
  function L(b) {
    return b === u ? (e.consume(b), u = null, F) : b === null || ee(b) ? n(b) : (e.consume(b), L);
  }
  function U(b) {
    return b === null || b === 34 || b === 39 || b === 47 || b === 60 || b === 61 || b === 62 || b === 96 || Me(b) ? k(b) : (e.consume(b), U);
  }
  function F(b) {
    return b === 47 || b === 62 || ce(b) ? w(b) : n(b);
  }
  function g(b) {
    return b === 62 ? (e.consume(b), A) : n(b);
  }
  function A(b) {
    return b === null || ee(b) ? _(b) : ce(b) ? (e.consume(b), A) : n(b);
  }
  function _(b) {
    return b === 45 && i === 2 ? (e.consume(b), $) : b === 60 && i === 1 ? (e.consume(b), G) : b === 62 && i === 4 ? (e.consume(b), B) : b === 63 && i === 3 ? (e.consume(b), m) : b === 93 && i === 5 ? (e.consume(b), fe) : ee(b) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Td, K, j)(b)) : b === null || ee(b) ? (e.exit("htmlFlowData"), j(b)) : (e.consume(b), _);
  }
  function j(b) {
    return e.check(Od, D, K)(b);
  }
  function D(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), C;
  }
  function C(b) {
    return b === null || ee(b) ? j(b) : (e.enter("htmlFlowData"), _(b));
  }
  function $(b) {
    return b === 45 ? (e.consume(b), m) : _(b);
  }
  function G(b) {
    return b === 47 ? (e.consume(b), a = "", te) : _(b);
  }
  function te(b) {
    if (b === 62) {
      const V = a.toLowerCase();
      return Wo.includes(V) ? (e.consume(b), B) : _(b);
    }
    return Xe(b) && a.length < 8 ? (e.consume(b), a += String.fromCharCode(b), te) : _(b);
  }
  function fe(b) {
    return b === 93 ? (e.consume(b), m) : _(b);
  }
  function m(b) {
    return b === 62 ? (e.consume(b), B) : b === 45 && i === 2 ? (e.consume(b), m) : _(b);
  }
  function B(b) {
    return b === null || ee(b) ? (e.exit("htmlFlowData"), K(b)) : (e.consume(b), B);
  }
  function K(b) {
    return e.exit("htmlFlow"), t(b);
  }
}
function Pd(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ee(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function Id(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(lr, t, n);
  }
}
const Nd = {
  name: "htmlText",
  tokenize: _d
};
function _d(e, t, n) {
  const r = this;
  let i, o, a;
  return l;
  function l(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), u;
  }
  function u(m) {
    return m === 33 ? (e.consume(m), s) : m === 47 ? (e.consume(m), k) : m === 63 ? (e.consume(m), w) : Xe(m) ? (e.consume(m), U) : n(m);
  }
  function s(m) {
    return m === 45 ? (e.consume(m), c) : m === 91 ? (e.consume(m), o = 0, x) : Xe(m) ? (e.consume(m), N) : n(m);
  }
  function c(m) {
    return m === 45 ? (e.consume(m), p) : n(m);
  }
  function f(m) {
    return m === null ? n(m) : m === 45 ? (e.consume(m), d) : ee(m) ? (a = f, G(m)) : (e.consume(m), f);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), p) : f(m);
  }
  function p(m) {
    return m === 62 ? $(m) : m === 45 ? d(m) : f(m);
  }
  function x(m) {
    const B = "CDATA[";
    return m === B.charCodeAt(o++) ? (e.consume(m), o === B.length ? h : x) : n(m);
  }
  function h(m) {
    return m === null ? n(m) : m === 93 ? (e.consume(m), E) : ee(m) ? (a = h, G(m)) : (e.consume(m), h);
  }
  function E(m) {
    return m === 93 ? (e.consume(m), S) : h(m);
  }
  function S(m) {
    return m === 62 ? $(m) : m === 93 ? (e.consume(m), S) : h(m);
  }
  function N(m) {
    return m === null || m === 62 ? $(m) : ee(m) ? (a = N, G(m)) : (e.consume(m), N);
  }
  function w(m) {
    return m === null ? n(m) : m === 63 ? (e.consume(m), O) : ee(m) ? (a = w, G(m)) : (e.consume(m), w);
  }
  function O(m) {
    return m === 62 ? $(m) : w(m);
  }
  function k(m) {
    return Xe(m) ? (e.consume(m), v) : n(m);
  }
  function v(m) {
    return m === 45 || Fe(m) ? (e.consume(m), v) : L(m);
  }
  function L(m) {
    return ee(m) ? (a = L, G(m)) : ce(m) ? (e.consume(m), L) : $(m);
  }
  function U(m) {
    return m === 45 || Fe(m) ? (e.consume(m), U) : m === 47 || m === 62 || Me(m) ? F(m) : n(m);
  }
  function F(m) {
    return m === 47 ? (e.consume(m), $) : m === 58 || m === 95 || Xe(m) ? (e.consume(m), g) : ee(m) ? (a = F, G(m)) : ce(m) ? (e.consume(m), F) : $(m);
  }
  function g(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || Fe(m) ? (e.consume(m), g) : A(m);
  }
  function A(m) {
    return m === 61 ? (e.consume(m), _) : ee(m) ? (a = A, G(m)) : ce(m) ? (e.consume(m), A) : F(m);
  }
  function _(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), i = m, j) : ee(m) ? (a = _, G(m)) : ce(m) ? (e.consume(m), _) : (e.consume(m), D);
  }
  function j(m) {
    return m === i ? (e.consume(m), i = void 0, C) : m === null ? n(m) : ee(m) ? (a = j, G(m)) : (e.consume(m), j);
  }
  function D(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? n(m) : m === 47 || m === 62 || Me(m) ? F(m) : (e.consume(m), D);
  }
  function C(m) {
    return m === 47 || m === 62 || Me(m) ? F(m) : n(m);
  }
  function $(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(m);
  }
  function G(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), te;
  }
  function te(m) {
    return ce(m) ? ve(e, fe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : fe(m);
  }
  function fe(m) {
    return e.enter("htmlTextData"), a(m);
  }
}
const Oi = {
  name: "labelEnd",
  resolveAll: Ld,
  resolveTo: zd,
  tokenize: Bd
}, Dd = {
  tokenize: Fd
}, Md = {
  tokenize: jd
}, $d = {
  tokenize: Ud
};
function Ld(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Qe(e, 0, e.length, n), e;
}
function zd(e, t) {
  let n = e.length, r = 0, i, o, a, l;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = n);
  const u = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, s = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[a][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[a - 2][1].start
    }
  };
  return l = [["enter", u, t], ["enter", s, t]], l = He(l, e.slice(o + 1, o + r + 3)), l = He(l, [["enter", c, t]]), l = He(l, Ti(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t)), l = He(l, [["exit", c, t], e[a - 2], e[a - 1], ["exit", s, t]]), l = He(l, e.slice(a + 1)), l = He(l, [["exit", u, t]]), Qe(e, o, e.length, l), e;
}
function Bd(e, t, n) {
  const r = this;
  let i = r.events.length, o, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return l;
  function l(d) {
    return o ? o._inactive ? f(d) : (a = r.parser.defined.includes(Ft(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(d);
  }
  function u(d) {
    return d === 40 ? e.attempt(Dd, c, a ? c : f)(d) : d === 91 ? e.attempt(Md, c, a ? s : f)(d) : a ? c(d) : f(d);
  }
  function s(d) {
    return e.attempt($d, c, f)(d);
  }
  function c(d) {
    return t(d);
  }
  function f(d) {
    return o._balanced = !0, n(d);
  }
}
function Fd(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return Me(f) ? sn(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41 ? c(f) : hl(e, a, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function a(f) {
    return Me(f) ? sn(e, u)(f) : c(f);
  }
  function l(f) {
    return n(f);
  }
  function u(f) {
    return f === 34 || f === 39 || f === 40 ? gl(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function s(f) {
    return Me(f) ? sn(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function jd(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return ml.call(r, e, o, a, "reference", "referenceMarker", "referenceString")(l);
  }
  function o(l) {
    return r.parser.defined.includes(Ft(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(l) : n(l);
  }
  function a(l) {
    return n(l);
  }
}
function Ud(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Vd = {
  name: "labelStartImage",
  resolveAll: Oi.resolveAll,
  tokenize: Wd
};
function Wd(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(l), e.exit("labelImageMarker"), o;
  }
  function o(l) {
    return l === 91 ? (e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelImage"), a) : n(l);
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Hd = {
  name: "labelStartLink",
  resolveAll: Oi.resolveAll,
  tokenize: qd
};
function qd(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const Pr = {
  name: "lineEnding",
  tokenize: Yd
};
function Yd(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ve(e, t, "linePrefix");
  }
}
const Mn = {
  name: "thematicBreak",
  tokenize: Gd
};
function Gd(e, t, n) {
  let r = 0, i;
  return o;
  function o(s) {
    return e.enter("thematicBreak"), a(s);
  }
  function a(s) {
    return i = s, l(s);
  }
  function l(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || ee(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), ce(s) ? ve(e, l, "whitespace")(s) : l(s));
  }
}
const De = {
  continuation: {
    tokenize: Jd
  },
  exit: eh,
  name: "list",
  tokenize: Qd
}, Kd = {
  partial: !0,
  tokenize: th
}, Xd = {
  partial: !0,
  tokenize: Zd
};
function Qd(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return l;
  function l(p) {
    const x = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (x === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : ni(p)) {
      if (r.containerState.type || (r.containerState.type = x, e.enter(x, {
        _container: !0
      })), x === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(Mn, n, s)(p) : s(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(p);
    }
    return n(p);
  }
  function u(p) {
    return ni(p) && ++a < 10 ? (e.consume(p), u) : (!r.interrupt || a < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), s(p)) : n(p);
  }
  function s(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      lr,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(Kd, d, f)
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, o++, d(p);
  }
  function f(p) {
    return ce(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : n(p);
  }
  function d(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Jd(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(lr, i, o);
  function i(l) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ve(e, t, "listItemIndent", r.containerState.size + 1)(l);
  }
  function o(l) {
    return r.containerState.furtherBlankLines || !ce(l) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(l)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Xd, t, a)(l));
  }
  function a(l) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ve(e, e.attempt(De, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l);
  }
}
function Zd(e, t, n) {
  const r = this;
  return ve(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function eh(e) {
  e.exit(this.containerState.type);
}
function th(e, t, n) {
  const r = this;
  return ve(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !ce(o) && a && a[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Ho = {
  name: "setextUnderline",
  resolveTo: nh,
  tokenize: rh
};
function nh(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const a = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", a, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = a, e.push(["exit", a, t]), e;
}
function rh(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(s) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = s, a(s)) : n(s);
  }
  function a(s) {
    return e.enter("setextHeadingLineSequence"), l(s);
  }
  function l(s) {
    return s === i ? (e.consume(s), l) : (e.exit("setextHeadingLineSequence"), ce(s) ? ve(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || ee(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const ih = {
  tokenize: oh
};
function oh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    lr,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ve(e, e.attempt(this.parser.constructs.flow, i, e.attempt(cd, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const ah = {
  resolveAll: bl()
}, lh = yl("string"), sh = yl("text");
function yl(e) {
  return {
    resolveAll: bl(e === "text" ? uh : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, a, l);
    return a;
    function a(c) {
      return s(c) ? o(c) : l(c);
    }
    function l(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), u;
    }
    function u(c) {
      return s(c) ? (n.exit("data"), o(c)) : (n.consume(c), u);
    }
    function s(c) {
      if (c === null)
        return !0;
      const f = i[c];
      let d = -1;
      if (f)
        for (; ++d < f.length; ) {
          const p = f[d];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function bl(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function uh(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, a = -1, l = 0, u;
      for (; o--; ) {
        const s = i[o];
        if (typeof s == "string") {
          for (a = s.length; s.charCodeAt(a - 1) === 32; )
            l++, a--;
          if (a) break;
          a = -1;
        } else if (s === -2)
          u = !0, l++;
        else if (s !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (l = 0), l) {
        const s = {
          type: n === e.length || u || l < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? a : r.start._bufferIndex + a,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - l,
            offset: r.end.offset - l
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...s.start
        }, r.start.offset === r.end.offset ? Object.assign(r, s) : (e.splice(n, 0, ["enter", s, t], ["exit", s, t]), n += 2);
      }
      n++;
    }
  return e;
}
const ch = {
  42: De,
  43: De,
  45: De,
  48: De,
  49: De,
  50: De,
  51: De,
  52: De,
  53: De,
  54: De,
  55: De,
  56: De,
  57: De,
  62: cl
}, fh = {
  91: md
}, ph = {
  [-2]: Ar,
  [-1]: Ar,
  32: Ar
}, dh = {
  35: Ed,
  42: Mn,
  45: [Ho, Mn],
  60: Cd,
  61: Ho,
  95: Mn,
  96: Vo,
  126: Vo
}, hh = {
  38: pl,
  92: fl
}, mh = {
  [-5]: Pr,
  [-4]: Pr,
  [-3]: Pr,
  33: Vd,
  38: pl,
  42: ri,
  60: [Hp, Nd],
  91: Hd,
  92: [xd, fl],
  93: Oi,
  95: ri,
  96: id
}, gh = {
  null: [ri, ah]
}, yh = {
  null: [42, 95]
}, bh = {
  null: []
}, xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: yh,
  contentInitial: fh,
  disable: bh,
  document: ch,
  flow: dh,
  flowInitial: ph,
  insideSpan: gh,
  string: hh,
  text: mh
}, Symbol.toStringTag, { value: "Module" }));
function vh(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let a = [], l = [];
  const u = {
    attempt: L(k),
    check: L(v),
    consume: N,
    enter: w,
    exit: O,
    interrupt: L(v, {
      interrupt: !0
    })
  }, s = {
    code: null,
    containerState: {},
    defineSkip: h,
    events: [],
    now: x,
    parser: e,
    previous: null,
    sliceSerialize: d,
    sliceStream: p,
    write: f
  };
  let c = t.tokenize.call(s, u);
  return t.resolveAll && o.push(t), s;
  function f(A) {
    return a = He(a, A), E(), a[a.length - 1] !== null ? [] : (U(t, 0), s.events = Ti(o, s.events, s), s.events);
  }
  function d(A, _) {
    return Sh(p(A), _);
  }
  function p(A) {
    return Eh(a, A);
  }
  function x() {
    const {
      _bufferIndex: A,
      _index: _,
      line: j,
      column: D,
      offset: C
    } = r;
    return {
      _bufferIndex: A,
      _index: _,
      line: j,
      column: D,
      offset: C
    };
  }
  function h(A) {
    i[A.line] = A.column, g();
  }
  function E() {
    let A;
    for (; r._index < a.length; ) {
      const _ = a[r._index];
      if (typeof _ == "string")
        for (A = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === A && r._bufferIndex < _.length; )
          S(_.charCodeAt(r._bufferIndex));
      else
        S(_);
    }
  }
  function S(A) {
    c = c(A);
  }
  function N(A) {
    ee(A) ? (r.line++, r.column = 1, r.offset += A === -3 ? 2 : 1, g()) : A !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = A;
  }
  function w(A, _) {
    const j = _ || {};
    return j.type = A, j.start = x(), s.events.push(["enter", j, s]), l.push(j), j;
  }
  function O(A) {
    const _ = l.pop();
    return _.end = x(), s.events.push(["exit", _, s]), _;
  }
  function k(A, _) {
    U(A, _.from);
  }
  function v(A, _) {
    _.restore();
  }
  function L(A, _) {
    return j;
    function j(D, C, $) {
      let G, te, fe, m;
      return Array.isArray(D) ? (
        /* c8 ignore next 1 */
        K(D)
      ) : "tokenize" in D ? (
        // Looks like a construct.
        K([
          /** @type {Construct} */
          D
        ])
      ) : B(D);
      function B(H) {
        return Q;
        function Q(Z) {
          const ie = Z !== null && H[Z], W = Z !== null && H.null, re = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ie) ? ie : ie ? [ie] : [],
            ...Array.isArray(W) ? W : W ? [W] : []
          ];
          return K(re)(Z);
        }
      }
      function K(H) {
        return G = H, te = 0, H.length === 0 ? $ : b(H[te]);
      }
      function b(H) {
        return Q;
        function Q(Z) {
          return m = F(), fe = H, H.partial || (s.currentConstruct = H), H.name && s.parser.constructs.disable.null.includes(H.name) ? Y() : H.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            _ ? Object.assign(Object.create(s), _) : s,
            u,
            V,
            Y
          )(Z);
        }
      }
      function V(H) {
        return A(fe, m), C;
      }
      function Y(H) {
        return m.restore(), ++te < G.length ? b(G[te]) : $;
      }
    }
  }
  function U(A, _) {
    A.resolveAll && !o.includes(A) && o.push(A), A.resolve && Qe(s.events, _, s.events.length - _, A.resolve(s.events.slice(_), s)), A.resolveTo && (s.events = A.resolveTo(s.events, s));
  }
  function F() {
    const A = x(), _ = s.previous, j = s.currentConstruct, D = s.events.length, C = Array.from(l);
    return {
      from: D,
      restore: $
    };
    function $() {
      r = A, s.previous = _, s.currentConstruct = j, s.events.length = D, l = C, g();
    }
  }
  function g() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Eh(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let a;
  if (n === i)
    a = [e[n].slice(r, o)];
  else {
    if (a = e.slice(n, i), r > -1) {
      const l = a[0];
      typeof l == "string" ? a[0] = l.slice(r) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function Sh(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let a;
    if (typeof o == "string")
      a = o;
    else switch (o) {
      case -5: {
        a = "\r";
        break;
      }
      case -4: {
        a = `
`;
        break;
      }
      case -3: {
        a = `\r
`;
        break;
      }
      case -2: {
        a = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        a = " ";
        break;
      }
      default:
        a = String.fromCharCode(o);
    }
    i = o === -2, r.push(a);
  }
  return r.join("");
}
function wh(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Pp([xh, ...(e || {}).extensions || []])
    ),
    content: i(zp),
    defined: [],
    document: i(Fp),
    flow: i(ih),
    lazy: {},
    string: i(lh),
    text: i(sh)
  };
  return r;
  function i(o) {
    return a;
    function a(l) {
      return vh(r, o, l);
    }
  }
}
function kh(e) {
  for (; !dl(e); )
    ;
  return e;
}
const qo = /[\0\t\n\r]/g;
function Ch() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, a, l) {
    const u = [];
    let s, c, f, d, p;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(a || void 0).decode(o)), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length; ) {
      if (qo.lastIndex = f, s = qo.exec(o), d = s && s.index !== void 0 ? s.index : o.length, p = o.charCodeAt(d), !s) {
        t = o.slice(f);
        break;
      }
      if (p === 10 && f === d && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), f < d && (u.push(o.slice(f, d)), e += d - f), p) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, u.push(-2); e++ < c; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = d + 1;
    }
    return l && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const Th = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Oh(e) {
  return e.replace(Th, Rh);
}
function Rh(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return ul(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Ci(n) || e;
}
const xl = {}.hasOwnProperty;
function Ah(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Ph(n)(kh(wh(n).document().write(Ch()(e, t, !0))));
}
function Ph(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(Ye),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: o(Oe),
      blockQuote: o(W),
      characterEscape: F,
      characterReference: F,
      codeFenced: o(re),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(re, a),
      codeText: o(M, a),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: o(ge),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o(Ne),
      hardBreakEscape: o(Ze),
      hardBreakTrailing: o(Ze),
      htmlFlow: o(at, a),
      htmlFlowData: F,
      htmlText: o(at, a),
      htmlTextData: F,
      image: o(Tt),
      label: a,
      link: o(Ye),
      listItem: o(_e),
      listItemValue: d,
      listOrdered: o(ht, f),
      listUnordered: o(ht),
      paragraph: o(Ot),
      reference: b,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o(Oe),
      strong: o(cr),
      thematicBreak: o(J)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: k,
      autolink: u(),
      autolinkEmail: ie,
      autolinkProtocol: Z,
      blockQuote: u(),
      characterEscapeValue: g,
      characterReferenceMarkerHexadecimal: Y,
      characterReferenceMarkerNumeric: Y,
      characterReferenceValue: H,
      characterReference: Q,
      codeFenced: u(E),
      codeFencedFence: h,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: x,
      codeFlowValue: g,
      codeIndented: u(S),
      codeText: u(C),
      codeTextData: g,
      data: g,
      definition: u(),
      definitionDestinationString: O,
      definitionLabelString: N,
      definitionTitleString: w,
      emphasis: u(),
      hardBreakEscape: u(_),
      hardBreakTrailing: u(_),
      htmlFlow: u(j),
      htmlFlowData: g,
      htmlText: u(D),
      htmlTextData: g,
      image: u(G),
      label: fe,
      labelText: te,
      lineEnding: A,
      link: u($),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: V,
      resourceDestinationString: m,
      resourceTitleString: B,
      resource: K,
      setextHeading: u(U),
      setextHeadingLineSequence: L,
      setextHeadingText: v,
      strong: u(),
      thematicBreak: u()
    }
  };
  vl(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(T) {
    let I = {
      type: "root",
      children: []
    };
    const X = {
      stack: [I],
      tokenStack: [],
      config: t,
      enter: l,
      exit: s,
      buffer: a,
      resume: c,
      data: n
    }, oe = [];
    let ae = -1;
    for (; ++ae < T.length; )
      if (T[ae][1].type === "listOrdered" || T[ae][1].type === "listUnordered")
        if (T[ae][0] === "enter")
          oe.push(ae);
        else {
          const Ae = oe.pop();
          ae = i(T, Ae, ae);
        }
    for (ae = -1; ++ae < T.length; ) {
      const Ae = t[T[ae][0]];
      xl.call(Ae, T[ae][1].type) && Ae[T[ae][1].type].call(Object.assign({
        sliceSerialize: T[ae][2].sliceSerialize
      }, X), T[ae][1]);
    }
    if (X.tokenStack.length > 0) {
      const Ae = X.tokenStack[X.tokenStack.length - 1];
      (Ae[1] || Yo).call(X, void 0, Ae[0]);
    }
    for (I.position = {
      start: lt(T.length > 0 ? T[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: lt(T.length > 0 ? T[T.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ae = -1; ++ae < t.transforms.length; )
      I = t.transforms[ae](I) || I;
    return I;
  }
  function i(T, I, X) {
    let oe = I - 1, ae = -1, Ae = !1, et, Ue, mt, Re;
    for (; ++oe <= X; ) {
      const Pe = T[oe];
      switch (Pe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Pe[0] === "enter" ? ae++ : ae--, Re = void 0;
          break;
        }
        case "lineEndingBlank": {
          Pe[0] === "enter" && (et && !Re && !ae && !mt && (mt = oe), Re = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Re = void 0;
      }
      if (!ae && Pe[0] === "enter" && Pe[1].type === "listItemPrefix" || ae === -1 && Pe[0] === "exit" && (Pe[1].type === "listUnordered" || Pe[1].type === "listOrdered")) {
        if (et) {
          let Te = oe;
          for (Ue = void 0; Te--; ) {
            const Le = T[Te];
            if (Le[1].type === "lineEnding" || Le[1].type === "lineEndingBlank") {
              if (Le[0] === "exit") continue;
              Ue && (T[Ue][1].type = "lineEndingBlank", Ae = !0), Le[1].type = "lineEnding", Ue = Te;
            } else if (!(Le[1].type === "linePrefix" || Le[1].type === "blockQuotePrefix" || Le[1].type === "blockQuotePrefixWhitespace" || Le[1].type === "blockQuoteMarker" || Le[1].type === "listItemIndent")) break;
          }
          mt && (!Ue || mt < Ue) && (et._spread = !0), et.end = Object.assign({}, Ue ? T[Ue][1].start : Pe[1].end), T.splice(Ue || oe, 0, ["exit", et, Pe[2]]), oe++, X++;
        }
        if (Pe[1].type === "listItemPrefix") {
          const Te = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Pe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          et = Te, T.splice(oe, 0, ["enter", Te, Pe[2]]), oe++, X++, mt = void 0, Re = !0;
        }
      }
    }
    return T[I][1]._spread = Ae, X;
  }
  function o(T, I) {
    return X;
    function X(oe) {
      l.call(this, T(oe), oe), I && I.call(this, oe);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function l(T, I, X) {
    this.stack[this.stack.length - 1].children.push(T), this.stack.push(T), this.tokenStack.push([I, X || void 0]), T.position = {
      start: lt(I.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(T) {
    return I;
    function I(X) {
      T && T.call(this, X), s.call(this, X);
    }
  }
  function s(T, I) {
    const X = this.stack.pop(), oe = this.tokenStack.pop();
    if (oe)
      oe[0].type !== T.type && (I ? I.call(this, T, oe[0]) : (oe[1] || Yo).call(this, T, oe[0]));
    else throw new Error("Cannot close `" + T.type + "` (" + ln({
      start: T.start,
      end: T.end
    }) + "): it’s not open");
    X.position.end = lt(T.end);
  }
  function c() {
    return Rp(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(T) {
    if (this.data.expectingFirstListItemValue) {
      const I = this.stack[this.stack.length - 2];
      I.start = Number.parseInt(this.sliceSerialize(T), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.lang = T;
  }
  function x() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.meta = T;
  }
  function h() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function E() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = T.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function S() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = T.replace(/(\r?\n|\r)$/g, "");
  }
  function N(T) {
    const I = this.resume(), X = this.stack[this.stack.length - 1];
    X.label = I, X.identifier = Ft(this.sliceSerialize(T)).toLowerCase();
  }
  function w() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = T;
  }
  function O() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = T;
  }
  function k(T) {
    const I = this.stack[this.stack.length - 1];
    if (!I.depth) {
      const X = this.sliceSerialize(T).length;
      I.depth = X;
    }
  }
  function v() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function L(T) {
    const I = this.stack[this.stack.length - 1];
    I.depth = this.sliceSerialize(T).codePointAt(0) === 61 ? 1 : 2;
  }
  function U() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function F(T) {
    const X = this.stack[this.stack.length - 1].children;
    let oe = X[X.length - 1];
    (!oe || oe.type !== "text") && (oe = fr(), oe.position = {
      start: lt(T.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, X.push(oe)), this.stack.push(oe);
  }
  function g(T) {
    const I = this.stack.pop();
    I.value += this.sliceSerialize(T), I.position.end = lt(T.end);
  }
  function A(T) {
    const I = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const X = I.children[I.children.length - 1];
      X.position.end = lt(T.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(I.type) && (F.call(this, T), g.call(this, T));
  }
  function _() {
    this.data.atHardBreak = !0;
  }
  function j() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = T;
  }
  function D() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = T;
  }
  function C() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.value = T;
  }
  function $() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = I, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function G() {
    const T = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const I = this.data.referenceType || "shortcut";
      T.type += "Reference", T.referenceType = I, delete T.url, delete T.title;
    } else
      delete T.identifier, delete T.label;
    this.data.referenceType = void 0;
  }
  function te(T) {
    const I = this.sliceSerialize(T), X = this.stack[this.stack.length - 2];
    X.label = Oh(I), X.identifier = Ft(I).toLowerCase();
  }
  function fe() {
    const T = this.stack[this.stack.length - 1], I = this.resume(), X = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, X.type === "link") {
      const oe = T.children;
      X.children = oe;
    } else
      X.alt = I;
  }
  function m() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.url = T;
  }
  function B() {
    const T = this.resume(), I = this.stack[this.stack.length - 1];
    I.title = T;
  }
  function K() {
    this.data.inReference = void 0;
  }
  function b() {
    this.data.referenceType = "collapsed";
  }
  function V(T) {
    const I = this.resume(), X = this.stack[this.stack.length - 1];
    X.label = I, X.identifier = Ft(this.sliceSerialize(T)).toLowerCase(), this.data.referenceType = "full";
  }
  function Y(T) {
    this.data.characterReferenceType = T.type;
  }
  function H(T) {
    const I = this.sliceSerialize(T), X = this.data.characterReferenceType;
    let oe;
    X ? (oe = ul(I, X === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : oe = Ci(I);
    const ae = this.stack[this.stack.length - 1];
    ae.value += oe;
  }
  function Q(T) {
    const I = this.stack.pop();
    I.position.end = lt(T.end);
  }
  function Z(T) {
    g.call(this, T);
    const I = this.stack[this.stack.length - 1];
    I.url = this.sliceSerialize(T);
  }
  function ie(T) {
    g.call(this, T);
    const I = this.stack[this.stack.length - 1];
    I.url = "mailto:" + this.sliceSerialize(T);
  }
  function W() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function re() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function M() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ge() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ne() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Oe() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Ze() {
    return {
      type: "break"
    };
  }
  function at() {
    return {
      type: "html",
      value: ""
    };
  }
  function Tt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Ye() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function ht(T) {
    return {
      type: "list",
      ordered: T.type === "listOrdered",
      start: null,
      spread: T._spread,
      children: []
    };
  }
  function _e(T) {
    return {
      type: "listItem",
      spread: T._spread,
      checked: null,
      children: []
    };
  }
  function Ot() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function cr() {
    return {
      type: "strong",
      children: []
    };
  }
  function fr() {
    return {
      type: "text",
      value: ""
    };
  }
  function J() {
    return {
      type: "thematicBreak"
    };
  }
}
function lt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function vl(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? vl(e, r) : Ih(e, r);
  }
}
function Ih(e, t) {
  let n;
  for (n in t)
    if (xl.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function Yo(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + ln({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + ln({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + ln({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Nh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Ah(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function _h(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Dh(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Mh(e, t) {
  const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function $h(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Lh(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function zh(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = qt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let a, l = e.footnoteCounts.get(r);
  l === void 0 ? (l = 0, e.footnoteOrder.push(r), a = e.footnoteOrder.length) : a = o + 1, l += 1, e.footnoteCounts.set(r, l);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (l > 1 ? "-" + l : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(a) }]
  };
  e.patch(t, u);
  const s = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [u]
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Bh(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Fh(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function El(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return a && a.type === "text" ? a.value += r : i.push({ type: "text", value: r }), i;
}
function jh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return El(e, t);
  const i = { src: qt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Uh(e, t) {
  const n = { src: qt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Vh(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Wh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return El(e, t);
  const i = { href: qt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Hh(e, t) {
  const n = { href: qt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function qh(e, t, n) {
  const r = e.all(t), i = n ? Yh(n) : Sl(t), o = {}, a = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let l = -1;
  for (; ++l < r.length; ) {
    const c = r[l];
    (i || l !== 0 || c.type !== "element" || c.tagName !== "p") && a.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? a.push(...c.children) : a.push(c);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && a.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: o, children: a };
  return e.patch(t, s), e.applyData(t, s);
}
function Yh(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Sl(n[r]);
  }
  return t;
}
function Sl(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Gh(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const a = r[i];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Kh(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Xh(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Qh(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Jh(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], a), i.push(a);
  }
  if (n.length > 0) {
    const a = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, l = Ei(t.children[1]), u = nl(t.children[t.children.length - 1]);
    l && u && (a.position = { start: l, end: u }), i.push(a);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Zh(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, l = a ? a.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < l; ) {
    const f = t.children[u], d = {}, p = a ? a[u] : void 0;
    p && (d.align = p);
    let x = { type: "element", tagName: o, properties: d, children: [] };
    f && (x.children = e.all(f), e.patch(f, x), x = e.applyData(f, x)), s.push(x);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(s, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function em(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Go = 9, Ko = 32;
function tm(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Xo(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Xo(t.slice(i), i > 0, !1)), o.join("");
}
function Xo(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Go || o === Ko; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Go || o === Ko; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function nm(e, t) {
  const n = { type: "text", value: tm(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function rm(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const im = {
  blockquote: _h,
  break: Dh,
  code: Mh,
  delete: $h,
  emphasis: Lh,
  footnoteReference: zh,
  heading: Bh,
  html: Fh,
  imageReference: jh,
  image: Uh,
  inlineCode: Vh,
  linkReference: Wh,
  link: Hh,
  listItem: qh,
  list: Gh,
  paragraph: Kh,
  // @ts-expect-error: root is different, but hard to type.
  root: Xh,
  strong: Qh,
  table: Jh,
  tableCell: em,
  tableRow: Zh,
  text: nm,
  thematicBreak: rm,
  toml: Pn,
  yaml: Pn,
  definition: Pn,
  footnoteDefinition: Pn
};
function Pn() {
}
const wl = -1, sr = 0, un = 1, qn = 2, Ri = 3, Ai = 4, Pi = 5, Ii = 6, kl = 7, Cl = 8, Tl = typeof self == "object" ? self : globalThis, Qo = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new Tl[e](t);
}, om = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, a] = t[i];
    switch (o) {
      case sr:
      case wl:
        return n(a, i);
      case un: {
        const l = n([], i);
        for (const u of a)
          l.push(r(u));
        return l;
      }
      case qn: {
        const l = n({}, i);
        for (const [u, s] of a)
          l[r(u)] = r(s);
        return l;
      }
      case Ri:
        return n(new Date(a), i);
      case Ai: {
        const { source: l, flags: u } = a;
        return n(new RegExp(l, u), i);
      }
      case Pi: {
        const l = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of a)
          l.set(r(u), r(s));
        return l;
      }
      case Ii: {
        const l = n(/* @__PURE__ */ new Set(), i);
        for (const u of a)
          l.add(r(u));
        return l;
      }
      case kl: {
        const { name: l, message: u } = a;
        return n(
          typeof Tl[l] == "function" ? Qo(l, u) : new Error(u),
          i
        );
      }
      case Cl:
        return n(BigInt(a), i);
      case "BigInt":
        return n(Object(BigInt(a)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(a).buffer, a);
      case "DataView": {
        const { buffer: l } = new Uint8Array(a);
        return n(new DataView(l), a);
      }
    }
    return n(Qo(o, a), i);
  };
  return r;
}, Jo = (e) => om(/* @__PURE__ */ new Map(), e)(0), xt = "", { toString: am } = {}, { keys: lm } = Object, Jt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [sr, t];
  const n = am.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [un, xt];
    case "Object":
      return [qn, xt];
    case "Date":
      return [Ri, xt];
    case "RegExp":
      return [Ai, xt];
    case "Map":
      return [Pi, xt];
    case "Set":
      return [Ii, xt];
    case "DataView":
      return [un, n];
  }
  return n.includes("Array") ? [un, n] : e instanceof Error ? [kl, e.name || "Error"] : [qn, n];
}, In = ([e, t]) => e === sr && (t === "function" || t === "symbol"), sm = (e, t, n, r) => {
  const i = (a, l) => {
    const u = r.push(a) - 1;
    return n.set(l, u), u;
  }, o = (a) => {
    if (n.has(a))
      return n.get(a);
    let [l, u] = Jt(a);
    switch (l) {
      case sr: {
        let c = a;
        switch (u) {
          case "bigint":
            l = Cl, c = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            c = null;
            break;
          case "undefined":
            return i([wl], a);
        }
        return i([l, c], a);
      }
      case un: {
        if (u) {
          let d = a;
          return u === "DataView" ? d = new Uint8Array(a.buffer) : u === "ArrayBuffer" && (d = new Uint8Array(a)), i([u, [...d]], a);
        }
        const c = [], f = i([l, c], a);
        for (const d of a)
          c.push(o(d));
        return f;
      }
      case qn: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, a.toString()], a);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, a.valueOf()], a);
          }
        if (t && "toJSON" in a)
          return o(a.toJSON());
        const c = [], f = i([l, c], a);
        for (const d of lm(a))
          (e || !In(Jt(a[d]))) && c.push([o(d), o(a[d])]);
        return f;
      }
      case Ri:
        return i([l, isNaN(a.getTime()) ? xt : a.toISOString()], a);
      case Ai: {
        const { source: c, flags: f } = a;
        return i([l, { source: c, flags: f }], a);
      }
      case Pi: {
        const c = [], f = i([l, c], a);
        for (const [d, p] of a)
          (e || !(In(Jt(d)) || In(Jt(p)))) && c.push([o(d), o(p)]);
        return f;
      }
      case Ii: {
        const c = [], f = i([l, c], a);
        for (const d of a)
          (e || !In(Jt(d))) && c.push(o(d));
        return f;
      }
    }
    const { message: s } = a;
    return i([l, { name: u, message: s }], a);
  };
  return o;
}, Zo = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return sm(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Yn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Jo(Zo(e, t)) : structuredClone(e)
) : (e, t) => Jo(Zo(e, t));
function um(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function cm(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function fm(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || um, r = e.options.footnoteBackLabel || cm, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, l = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const c = e.all(s), f = String(s.identifier).toUpperCase(), d = qt(f.toLowerCase());
    let p = 0;
    const x = [], h = e.footnoteCounts.get(f);
    for (; h !== void 0 && ++p <= h; ) {
      x.length > 0 && x.push({ type: "text", value: " " });
      let N = typeof n == "string" ? n : n(u, p);
      typeof N == "string" && (N = { type: "text", value: N }), x.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(N) ? N : [N]
      });
    }
    const E = c[c.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const N = E.children[E.children.length - 1];
      N && N.type === "text" ? N.value += " " : E.children.push({ type: "text", value: " " }), E.children.push(...x);
    } else
      c.push(...x);
    const S = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(c, !0)
    };
    e.patch(s, S), l.push(S);
  }
  if (l.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Yn(a),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(l, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Ol = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return mm;
    if (typeof e == "function")
      return ur(e);
    if (typeof e == "object")
      return Array.isArray(e) ? pm(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        dm(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return hm(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function pm(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = Ol(e[n]);
  return ur(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function dm(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return ur(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function hm(e) {
  return ur(t);
  function t(n) {
    return n && n.type === e;
  }
}
function ur(e) {
  return t;
  function t(n, r, i) {
    return !!(gm(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function mm() {
  return !0;
}
function gm(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Rl = [], ym = !0, ea = !1, bm = "skip";
function xm(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = Ol(i), a = r ? -1 : 1;
  l(e, void 0, [])();
  function l(u, s, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof f.type == "string") {
      const p = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(d, "name", {
        value: "node (" + (u.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return d;
    function d() {
      let p = Rl, x, h, E;
      if ((!t || o(u, s, c[c.length - 1] || void 0)) && (p = vm(n(u, c)), p[0] === ea))
        return p;
      if ("children" in u && u.children) {
        const S = (
          /** @type {UnistParent} */
          u
        );
        if (S.children && p[0] !== bm)
          for (h = (r ? S.children.length : -1) + a, E = c.concat(S); h > -1 && h < S.children.length; ) {
            const N = S.children[h];
            if (x = l(N, h, E)(), x[0] === ea)
              return x;
            h = typeof x[1] == "number" ? x[1] : h + a;
          }
      }
      return p;
    }
  }
}
function vm(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [ym, e] : e == null ? Rl : [e];
}
function Al(e, t, n, r) {
  let i, o, a;
  typeof t == "function" ? (o = void 0, a = t, i = n) : (o = t, a = n, i = r), xm(e, o, l, i);
  function l(u, s) {
    const c = s[s.length - 1], f = c ? c.children.indexOf(u) : void 0;
    return a(u, f, c);
  }
}
const ii = {}.hasOwnProperty, Em = {};
function Sm(e, t) {
  const n = t || Em, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = { ...im, ...n.handlers }, l = {
    all: s,
    applyData: km,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: a,
    one: u,
    options: n,
    patch: wm,
    wrap: Tm
  };
  return Al(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : i, d = String(c.identifier).toUpperCase();
      f.has(d) || f.set(d, c);
    }
  }), l;
  function u(c, f) {
    const d = c.type, p = l.handlers[d];
    if (ii.call(l.handlers, d) && p)
      return p(l, c, f);
    if (l.options.passThrough && l.options.passThrough.includes(d)) {
      if ("children" in c) {
        const { children: h, ...E } = c, S = Yn(E);
        return S.children = l.all(c), S;
      }
      return Yn(c);
    }
    return (l.options.unknownHandler || Cm)(l, c, f);
  }
  function s(c) {
    const f = [];
    if ("children" in c) {
      const d = c.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const x = l.one(d[p], c);
        if (x) {
          if (p && d[p - 1].type === "break" && (!Array.isArray(x) && x.type === "text" && (x.value = ta(x.value)), !Array.isArray(x) && x.type === "element")) {
            const h = x.children[0];
            h && h.type === "text" && (h.value = ta(h.value));
          }
          Array.isArray(x) ? f.push(...x) : f.push(x);
        }
      }
    }
    return f;
  }
}
function wm(e, t) {
  e.position && (t.position = ap(e));
}
function km(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const a = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: a };
      }
    n.type === "element" && o && Object.assign(n.properties, Yn(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Cm(e, t) {
  const n = t.data || {}, r = "value" in t && !(ii.call(n, "hProperties") || ii.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Tm(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function ta(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function na(e, t) {
  const n = Sm(e, t), r = n.one(e, void 0), i = fm(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Om(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      na(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      na(n, { file: r, ...e || t })
    );
  };
}
function ra(e) {
  if (e)
    throw e;
}
var Ir, ia;
function Rm() {
  if (ia) return Ir;
  ia = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(s) {
    return typeof Array.isArray == "function" ? Array.isArray(s) : t.call(s) === "[object Array]";
  }, o = function(s) {
    if (!s || t.call(s) !== "[object Object]")
      return !1;
    var c = e.call(s, "constructor"), f = s.constructor && s.constructor.prototype && e.call(s.constructor.prototype, "isPrototypeOf");
    if (s.constructor && !c && !f)
      return !1;
    var d;
    for (d in s)
      ;
    return typeof d > "u" || e.call(s, d);
  }, a = function(s, c) {
    n && c.name === "__proto__" ? n(s, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : s[c.name] = c.newValue;
  }, l = function(s, c) {
    if (c === "__proto__")
      if (e.call(s, c)) {
        if (r)
          return r(s, c).value;
      } else return;
    return s[c];
  };
  return Ir = function u() {
    var s, c, f, d, p, x, h = arguments[0], E = 1, S = arguments.length, N = !1;
    for (typeof h == "boolean" && (N = h, h = arguments[1] || {}, E = 2), (h == null || typeof h != "object" && typeof h != "function") && (h = {}); E < S; ++E)
      if (s = arguments[E], s != null)
        for (c in s)
          f = l(h, c), d = l(s, c), h !== d && (N && d && (o(d) || (p = i(d))) ? (p ? (p = !1, x = f && i(f) ? f : []) : x = f && o(f) ? f : {}, a(h, { name: c, newValue: u(N, x, d) })) : typeof d < "u" && a(h, { name: c, newValue: d }));
    return h;
  }, Ir;
}
var Am = Rm();
const Nr = /* @__PURE__ */ li(Am);
function oi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pm() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    l(null, ...i);
    function l(u, ...s) {
      const c = e[++o];
      let f = -1;
      if (u) {
        a(u);
        return;
      }
      for (; ++f < i.length; )
        (s[f] === null || s[f] === void 0) && (s[f] = i[f]);
      i = s, c ? Im(c, l)(...s) : a(null, ...s);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function Im(e, t) {
  let n;
  return r;
  function r(...a) {
    const l = e.length > a.length;
    let u;
    l && a.push(i);
    try {
      u = e.apply(this, a);
    } catch (s) {
      const c = (
        /** @type {Error} */
        s
      );
      if (l && n)
        throw c;
      return i(c);
    }
    l || (u && u.then && typeof u.then == "function" ? u.then(o, i) : u instanceof Error ? i(u) : o(u));
  }
  function i(a, ...l) {
    n || (n = !0, t(a, ...l));
  }
  function o(a) {
    i(null, a);
  }
}
const Ke = { basename: Nm, dirname: _m, extname: Dm, join: Mm, sep: "/" };
function Nm(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  vn(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let a = -1, l = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      a < 0 && (o = !0, a = i + 1), l > -1 && (e.codePointAt(i) === t.codePointAt(l--) ? l < 0 && (r = i) : (l = -1, r = a));
  return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r);
}
function _m(e) {
  if (vn(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Dm(e) {
  vn(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, a;
  for (; t--; ) {
    const l = e.codePointAt(t);
    if (l === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (a = !0, n = t + 1), l === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Mm(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    vn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : $m(n);
}
function $m(e) {
  vn(e);
  const t = e.codePointAt(0) === 47;
  let n = Lm(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Lm(e, t) {
  let n = "", r = 0, i = -1, o = 0, a = -1, l, u;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      l = e.codePointAt(a);
    else {
      if (l === 47)
        break;
      l = 47;
    }
    if (l === 47) {
      if (!(i === a - 1 || o === 1)) if (i !== a - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
              u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = a, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = a, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, a) : n = e.slice(i + 1, a), r = a - i - 1;
      i = a, o = 0;
    } else l === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function vn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const zm = { cwd: Bm };
function Bm() {
  return "/";
}
function ai(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Fm(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ai(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return jm(e);
}
function jm(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const _r = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class Pl {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? ai(t) ? n = { path: t } : typeof t == "string" || Um(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : zm.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < _r.length; ) {
      const o = _r[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      _r.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ke.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Mr(t, "basename"), Dr(t, "basename"), this.path = Ke.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ke.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    oa(this.basename, "dirname"), this.path = Ke.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ke.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Dr(t, "extname"), oa(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ke.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    ai(t) && (t = Fm(t)), Mr(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ke.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Mr(t, "stem"), Dr(t, "stem"), this.path = Ke.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Ie(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Dr(e, t) {
  if (e && e.includes(Ke.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ke.sep + "`"
    );
}
function Mr(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function oa(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Um(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Vm = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), Wm = {}.hasOwnProperty;
class Ni extends Vm {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Pm();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Ni()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Nr(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (zr("data", this.frozen), this.namespace[t] = n, this) : Wm.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (zr("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = Nn(t), r = this.parser || this.Parser;
    return $r("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), $r("process", this.parser || this.Parser), Lr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, a) {
      const l = Nn(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(l)
      );
      r.run(u, l, function(c, f, d) {
        if (c || !f || !d)
          return s(c);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), x = r.stringify(p, d);
        Ym(x) ? d.value = x : d.result = x, s(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function s(c, f) {
        c || !f ? a(c) : o ? o(f) : n(void 0, f);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), $r("processSync", this.parser || this.Parser), Lr("processSync", this.compiler || this.Compiler), this.process(t, i), la("processSync", "process", n), r;
    function i(o, a) {
      n = !0, ra(o), r = a;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    aa(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(a, l) {
      const u = Nn(n);
      i.run(t, u, s);
      function s(c, f, d) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        c ? l(c) : a ? a(p) : r(void 0, p, d);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), la("runSync", "run", r), i;
    function o(a, l) {
      ra(a), i = l, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = Nn(n), i = this.compiler || this.Compiler;
    return Lr("stringify", i), aa(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (zr("use", this.frozen), t != null) if (typeof t == "function")
      u(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? l(t) : a(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(s) {
      if (typeof s == "function")
        u(s, []);
      else if (typeof s == "object")
        if (Array.isArray(s)) {
          const [c, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            s
          );
          u(c, f);
        } else
          a(s);
      else
        throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function a(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      l(s.plugins), s.settings && (i.settings = Nr(!0, i.settings, s.settings));
    }
    function l(s) {
      let c = -1;
      if (s != null) if (Array.isArray(s))
        for (; ++c < s.length; ) {
          const f = s[c];
          o(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function u(s, c) {
      let f = -1, d = -1;
      for (; ++f < r.length; )
        if (r[f][0] === s) {
          d = f;
          break;
        }
      if (d === -1)
        r.push([s, ...c]);
      else if (c.length > 0) {
        let [p, ...x] = c;
        const h = r[d][1];
        oi(h) && oi(p) && (p = Nr(!0, h, p)), r[d] = [s, p, ...x];
      }
    }
  }
}
const Hm = new Ni().freeze();
function $r(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Lr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function zr(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function aa(e) {
  if (!oi(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function la(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Nn(e) {
  return qm(e) ? e : new Pl(e);
}
function qm(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Ym(e) {
  return typeof e == "string" || Gm(e);
}
function Gm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Km = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", sa = [], ua = { allowDangerousHtml: !0 }, Xm = /^(https?|ircs?|mailto|xmpp)$/i, Qm = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Jm(e) {
  const t = Zm(e), n = eg(e);
  return tg(t.runSync(t.parse(n), n), e);
}
function Zm(e) {
  const t = e.rehypePlugins || sa, n = e.remarkPlugins || sa, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...ua } : ua;
  return Hm().use(Nh).use(n).use(Om, r).use(t);
}
function eg(e) {
  const t = e.children || "", n = new Pl();
  return typeof t == "string" && (n.value = t), n;
}
function tg(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, a = t.skipHtml, l = t.unwrapDisallowed, u = t.urlTransform || ng;
  for (const c of Qm)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + Km + c.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), Al(e, s), fp(e, {
    Fragment: Br,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: R,
    jsxs: ue,
    passKeys: !0,
    passNode: !0
  });
  function s(c, f, d) {
    if (c.type === "raw" && d && typeof f == "number")
      return a ? d.children.splice(f, 1) : d.children[f] = { type: "text", value: c.value }, f;
    if (c.type === "element") {
      let p;
      for (p in Rr)
        if (Object.hasOwn(Rr, p) && Object.hasOwn(c.properties, p)) {
          const x = c.properties[p], h = Rr[p];
          (h === null || h.includes(c.tagName)) && (c.properties[p] = u(String(x || ""), p, c));
        }
    }
    if (c.type === "element") {
      let p = n ? !n.includes(c.tagName) : o ? o.includes(c.tagName) : !1;
      if (!p && r && typeof f == "number" && (p = !r(c, f, d)), p && d && typeof f == "number")
        return l && c.children ? d.children.splice(f, 1, ...c.children) : d.children.splice(f, 1), f;
    }
  }
}
function ng(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Xm.test(e.slice(0, t)) ? e : ""
  );
}
const rg = {
  column: "primary.main",
  customColumn: "info.main",
  operator: "error.main",
  unknownOperator: "text.disabled",
  logical: "secondary.main",
  paren: "warning.main",
  value: "text.primary"
}, ca = {
  column: 400,
  customColumn: 400,
  operator: 600,
  unknownOperator: 400,
  logical: 600,
  paren: 700,
  value: 400
}, ig = 'Type a query like: column operator value — e.g. name == "John"', og = ({ open: e, onClose: t, helpContent: n, sx: r = {} }) => {
  const {
    dialog: i,
    title: o,
    closeButton: a,
    content: l,
    sectionTitle: u,
    body: s,
    codeBlock: c,
    exampleBlock: f,
    exampleLabel: d,
    list: p,
    listItem: x,
    chip: h,
    divider: E,
    actions: S,
    gotItButton: N,
    colorLegendItem: w,
    colorSwatch: O,
    warningText: k
  } = r;
  return /* @__PURE__ */ ue(
    Hl,
    {
      open: e,
      onClose: t,
      maxWidth: "md",
      fullWidth: !0,
      scroll: "paper",
      sx: i,
      children: [
        /* @__PURE__ */ ue(ql, { sx: { pr: 6, ...o }, children: [
          "How to Use the Query Search",
          /* @__PURE__ */ R(
            vt,
            {
              onClick: t,
              size: "small",
              sx: { position: "absolute", right: 12, top: 12, ...a },
              "aria-label": "close",
              children: /* @__PURE__ */ R($f, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ R(Yl, { dividers: !0, sx: l, children: n ? typeof n == "string" ? /* @__PURE__ */ R(
          Jm,
          {
            components: {
              h1: ({ children: v }) => /* @__PURE__ */ R(le, { variant: "h5", gutterBottom: !0, sx: u, children: v }),
              h2: ({ children: v }) => /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: v }),
              h3: ({ children: v }) => /* @__PURE__ */ R(
                le,
                {
                  variant: "subtitle1",
                  gutterBottom: !0,
                  sx: { fontWeight: 600, ...u },
                  children: v
                }
              ),
              p: ({ children: v }) => /* @__PURE__ */ R(le, { variant: "body2", paragraph: !0, sx: s, children: v }),
              ul: ({ children: v }) => /* @__PURE__ */ R(se, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: v }),
              ol: ({ children: v }) => /* @__PURE__ */ R(se, { component: "ol", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: v }),
              li: ({ children: v }) => /* @__PURE__ */ R(
                le,
                {
                  component: "li",
                  variant: "body2",
                  gutterBottom: !0,
                  sx: x,
                  children: v
                }
              ),
              code: ({ inline: v, children: L }) => v ? /* @__PURE__ */ R(
                gt,
                {
                  label: L,
                  size: "small",
                  sx: { fontFamily: "monospace", ...h }
                }
              ) : /* @__PURE__ */ R(
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
                    ...c
                  },
                  children: L
                }
              ),
              pre: ({ children: v }) => /* @__PURE__ */ R(Br, { children: v }),
              hr: () => /* @__PURE__ */ R(Rt, { sx: { my: 2, ...E } }),
              strong: ({ children: v }) => /* @__PURE__ */ R("strong", { children: v }),
              a: ({ href: v, children: L }) => /* @__PURE__ */ R(
                le,
                {
                  component: "a",
                  href: v,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  variant: "body2",
                  sx: { color: "primary.main" },
                  children: L
                }
              ),
              blockquote: ({ children: v }) => /* @__PURE__ */ R(
                se,
                {
                  sx: {
                    borderLeft: 4,
                    borderColor: "grey.300",
                    pl: 2,
                    my: 1,
                    color: "text.secondary"
                  },
                  children: v
                }
              )
            },
            children: n
          }
        ) : n : /* @__PURE__ */ ue(Br, { children: [
          /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: "Overview" }),
          /* @__PURE__ */ ue(le, { variant: "body2", paragraph: !0, sx: s, children: [
            "The query search box lets you filter data using a simple, readable query language. Type your conditions directly into the search field and press ",
            /* @__PURE__ */ R("strong", { children: "Apply" }),
            " to run the query. Suggestions will appear as you type to guide you through valid columns, operators, and logical connectors."
          ] }),
          /* @__PURE__ */ R(Rt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: "Basic Syntax" }),
          /* @__PURE__ */ R(le, { variant: "body2", paragraph: !0, sx: s, children: "Every condition follows this pattern:" }),
          /* @__PURE__ */ R(
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
                ...c
              },
              children: "column  operator  value"
            }
          ),
          /* @__PURE__ */ R(le, { variant: "body2", paragraph: !0, sx: s, children: "Each part is separated by a single space:" }),
          /* @__PURE__ */ ue(se, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: [
            /* @__PURE__ */ ue(
              le,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ R("strong", { children: "column" }),
                  " — the field you want to filter on (e.g.",
                  " ",
                  /* @__PURE__ */ R(
                    gt,
                    {
                      label: "name",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ R(
                    gt,
                    {
                      label: "duration",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ")."
                ]
              }
            ),
            /* @__PURE__ */ ue(
              le,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ R("strong", { children: "operator" }),
                  " — the comparison to apply (e.g.",
                  " ",
                  /* @__PURE__ */ R(
                    gt,
                    {
                      label: "==",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ R(
                    gt,
                    {
                      label: "contains",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ R(
                    gt,
                    {
                      label: ">",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ")."
                ]
              }
            ),
            /* @__PURE__ */ ue(
              le,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ R("strong", { children: "value" }),
                  " — what you are comparing against. Wrap values that contain spaces in double quotes:",
                  " ",
                  /* @__PURE__ */ R(
                    gt,
                    {
                      label: '"John Doe"',
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  "."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ R(Rt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: "Combining Conditions" }),
          /* @__PURE__ */ ue(le, { variant: "body2", paragraph: !0, sx: s, children: [
            "Use ",
            /* @__PURE__ */ R("strong", { children: "AND" }),
            " or ",
            /* @__PURE__ */ R("strong", { children: "OR" }),
            " (uppercase) to join multiple conditions:"
          ] }),
          /* @__PURE__ */ R(
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
                ...c
              },
              children: `condition1 AND condition2 AND condition3
condition1 OR  condition2`
            }
          ),
          /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: "Grouping with Parentheses" }),
          /* @__PURE__ */ ue(le, { variant: "body2", paragraph: !0, sx: s, children: [
            "You can mix ",
            /* @__PURE__ */ R("strong", { children: "AND" }),
            " and ",
            /* @__PURE__ */ R("strong", { children: "OR" }),
            " in the same query by using parentheses ",
            /* @__PURE__ */ R("strong", { children: "( )" }),
            " to group conditions:"
          ] }),
          /* @__PURE__ */ R(
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
                ...c
              },
              children: `name == "John" AND (status == active OR status == pending)
(price > 100 AND price < 500) OR category == sale`
            }
          ),
          /* @__PURE__ */ ue(le, { variant: "body2", paragraph: !0, sx: s, children: [
            "Without parentheses, ",
            /* @__PURE__ */ R("strong", { children: "AND" }),
            " binds tighter than",
            " ",
            /* @__PURE__ */ R("strong", { children: "OR" }),
            ":"
          ] }),
          /* @__PURE__ */ R(
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
                ...c
              },
              children: `a = 1 OR b = 2 AND c = 3
// is the same as: a = 1 OR (b = 2 AND c = 3)`
            }
          ),
          /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: "NOT (Negation)" }),
          /* @__PURE__ */ ue(le, { variant: "body2", paragraph: !0, sx: s, children: [
            "Prefix a group with ",
            /* @__PURE__ */ R("strong", { children: "NOT" }),
            " to negate it:"
          ] }),
          /* @__PURE__ */ R(
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
                ...c
              },
              children: "NOT (status == inactive OR status == deleted)"
            }
          ),
          /* @__PURE__ */ R(Rt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: "Examples" }),
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
          ].map(({ label: v, code: L }) => /* @__PURE__ */ ue(se, { mb: 1.5, children: [
            /* @__PURE__ */ R(
              le,
              {
                variant: "caption",
                sx: {
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  ...d
                },
                children: v
              }
            ),
            /* @__PURE__ */ R(
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
                  ...f
                },
                children: L
              }
            )
          ] }, v)),
          /* @__PURE__ */ R(Rt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: "Tips" }),
          /* @__PURE__ */ R(se, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...p }, children: [
            "Start typing a column name and select it from the suggestion list.",
            "After picking a column, the suggestion list will show valid operators for that column.",
            "After entering a value, AND / OR will appear in the suggestion list.",
            "Use parentheses ( ) to group conditions when mixing AND and OR.",
            "Prefix a group with NOT to negate it — e.g. NOT (status == deleted).",
            'Wrap multi-word values in double quotes — e.g. "John Doe".',
            "AND has higher precedence than OR. Use parentheses to override.",
            "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
            "You can also build queries visually using the filter panel (click the tune icon)."
          ].map((v) => /* @__PURE__ */ R(
            le,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: x,
              children: v
            },
            v
          )) }),
          /* @__PURE__ */ R(Rt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ R(le, { variant: "h6", gutterBottom: !0, sx: u, children: "Syntax Highlighting" }),
          /* @__PURE__ */ R(le, { variant: "body2", paragraph: !0, sx: s, children: "As you type, each part of the query is colorized to help you spot mistakes at a glance:" }),
          /* @__PURE__ */ R(se, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...p }, children: [
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
          ].map(({ color: v, label: L, desc: U }) => /* @__PURE__ */ ue(
            le,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: w,
              children: [
                /* @__PURE__ */ R(
                  se,
                  {
                    component: "span",
                    sx: {
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: v,
                      mr: 1,
                      verticalAlign: "middle",
                      ...O
                    }
                  }
                ),
                /* @__PURE__ */ R(se, { component: "strong", sx: { color: v }, children: L }),
                " ",
                "— ",
                U
              ]
            },
            L
          )) })
        ] }) }),
        /* @__PURE__ */ R(Gl, { sx: S, children: /* @__PURE__ */ R(
          $n,
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
}, ag = ({
  columnsOperator: e,
  onSuggestionClick: t,
  defaultOperators: n,
  onApplyClicked: r,
  queryText: i,
  relatedOperators: o,
  placeholder: a = "",
  endAdornment: l,
  helpContent: u,
  sx: s = {},
  ...c
}) => {
  const {
    root: f,
    inputRow: d,
    inputWrapper: p,
    highlightOverlay: x,
    input: h,
    applyButton: E,
    helpButton: S,
    helpTooltip: N,
    adornmentBox: w,
    errorTooltip: O,
    hintTooltip: k,
    popper: v,
    suggestionsBox: L,
    suggestionsList: U,
    suggestionItem: F,
    suggestionText: g,
    tokenColors: A,
    tokenFontWeights: _,
    helpModal: j
  } = s, D = Lt(
    () => ({ ...rg, ...A || {} }),
    [A]
  ), C = Lt(
    () => ({
      ...ca,
      ..._ || {}
    }),
    [_]
  ), $ = ar(), G = (J) => {
    if (!J || J === "inherit") return "inherit";
    const T = J.split(".");
    let I = $.palette;
    for (const X of T)
      if (I = I == null ? void 0 : I[X], I === void 0) return J;
    return typeof I == "string" ? I : J;
  }, te = Lt(() => {
    const J = {};
    for (const T of Object.keys(D))
      J[T] = G(D[T]);
    return J;
  }, [D, $]), [fe, m] = Ve(null), [B, K] = Ve([]), [b, V] = Ve([]), [Y, H] = Ve(""), [Q, Z] = Ve(!0), [ie, W] = Ve(null), [re, M] = Ve(!1), [ge, Ne] = Ve(0), Oe = pr(), Ze = pr(null), at = pr(null);
  rn(() => {
    i != null && H(i);
  }, [i]), rn(() => {
    const J = Object.keys(e), T = Array.from(
      /* @__PURE__ */ new Set([
        ...J.flatMap((Te) => {
          var Le;
          return ((Le = e[Te]) == null ? void 0 : Le.operators) || [];
        }),
        ...o || []
      ])
    ), I = Y.trim().split(/\s+/).filter(Boolean), X = I[I.length - 1] || "", oe = I[I.length - 2] || "", ae = I.length >= 2 ? `${I[I.length - 2]} ${I[I.length - 1]}` : "", Ae = I.length >= 3 ? `${I[I.length - 3]} ${I[I.length - 2]} ${I[I.length - 1]}` : "", et = T.some(
      (Te) => Te.toUpperCase() === Ae.toUpperCase()
    ) || T.some(
      (Te) => Te.toUpperCase() === ae.toUpperCase()
    ), Ue = Ae && T.some(
      (Te) => Te.toUpperCase() === Ae.toUpperCase()
    ) ? I[I.length - 4] || "" : ae && T.some(
      (Te) => Te.toUpperCase() === ae.toUpperCase()
    ) && I[I.length - 3] || "", mt = !oe || n.includes(oe);
    let Re;
    if (!Y.trim() || n.includes(X) || X === "(")
      Re = J;
    else if (et) {
      const Te = T.find(
        (Yt) => Yt.toUpperCase() === Ae.toUpperCase()
      ) || T.find(
        (Yt) => Yt.toUpperCase() === ae.toUpperCase()
      );
      Te && ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"].some((Yt) => Yt.toUpperCase() === Te.toUpperCase()), Re = n;
    } else J.includes(X) ? Re = e[X].operators : mt ? Re = T : (J.includes(oe) && e[oe].operators.includes(X) || T.includes(X) || Ue && J.includes(Ue), Re = n);
    K(Re), V(Re);
    const Pe = If(Y);
    Z(Pe.isValid), W(Pe.error);
  }, [Y, e, n, o]), rn(() => {
    const J = at.current;
    if (!J || typeof ResizeObserver > "u") return;
    const T = () => Ne(J.offsetWidth || 0);
    T();
    const I = new ResizeObserver(T);
    return I.observe(J), () => I.disconnect();
  }, [l, Y, Q]);
  const Tt = (J) => {
    const T = J.target.value;
    H(T), V(
      B.filter(
        (I) => I.toLowerCase().includes(T.toLowerCase())
      )
    ), m(Oe.current);
  }, Ye = (J) => {
    Ze.current && (Ze.current.scrollLeft = J.target.scrollLeft);
  }, ht = Lt(
    () => Nf(
      Y,
      Object.keys(e || {}),
      Array.from(
        /* @__PURE__ */ new Set([
          ...Object.values(e || {}).flatMap(
            (J) => (J == null ? void 0 : J.operators) || []
          ),
          ...o || []
        ])
      ),
      n || []
    ),
    [Y, e, o, n]
  ), _e = (J) => {
    H((T) => {
      const I = T.trimEnd();
      return I ? `${I} ${J} ` : `${J} `;
    }), t == null || t(J), setTimeout(() => {
      const T = Oe.current;
      if (T) {
        const I = T.value.length;
        T.setSelectionRange(I, I), T.focus();
      }
    }, 0);
  }, Ot = !!Y && !Q && !!ie, cr = Ot ? ie : Y ? "" : ig, fr = Ot ? void 0 : Y ? !1 : void 0;
  return /* @__PURE__ */ ue(se, { width: "100%", sx: f, children: [
    /* @__PURE__ */ R(se, { display: "flex", sx: d, children: /* @__PURE__ */ ue(
      se,
      {
        sx: { position: "relative", flex: 1, minWidth: 0, ...p },
        children: [
          /* @__PURE__ */ R(
            se,
            {
              ref: Ze,
              "aria-hidden": "true",
              sx: {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                // Stop short of the endAdornment block (help icon + Apply button
                // + any caller-provided adornment) so colored tokens never paint
                // behind the buttons when the query overflows horizontally.
                right: `${ge}px`,
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
                ...x
              },
              children: ht.map(
                (J, T) => J.type === "whitespace" ? /* @__PURE__ */ R("span", { children: J.text }, T) : /* @__PURE__ */ R(
                  "span",
                  {
                    style: {
                      color: te[J.type] || "inherit",
                      fontWeight: C[J.type] ?? ca[J.type] ?? 400
                    },
                    children: J.text
                  },
                  T
                )
              )
            }
          ),
          /* @__PURE__ */ R(
            zt,
            {
              title: cr,
              open: fr,
              placement: "top-start",
              arrow: !0,
              componentsProps: {
                tooltip: {
                  sx: Ot ? {
                    bgcolor: "error.main",
                    color: "error.contrastText",
                    fontSize: "0.75rem",
                    maxWidth: 360,
                    ...O
                  } : {
                    bgcolor: "info.dark",
                    color: "common.white",
                    fontSize: "0.75rem",
                    maxWidth: 360,
                    ...k
                  }
                },
                arrow: {
                  sx: Ot ? {
                    color: "error.main",
                    ...(O == null ? void 0 : O.bgcolor) && {
                      color: O.bgcolor
                    }
                  } : {
                    color: "info.dark",
                    ...(k == null ? void 0 : k.bgcolor) && {
                      color: k.bgcolor
                    }
                  }
                }
              },
              children: /* @__PURE__ */ R(
                Bl,
                {
                  ...c,
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
                      caretColor: (J) => J.palette.text.primary,
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
                    ...h
                  },
                  inputRef: Oe,
                  inputProps: { onScroll: Ye },
                  value: Y,
                  onChange: Tt,
                  onFocus: () => m(Oe.current),
                  onBlur: () => setTimeout(() => m(null), 100),
                  error: Y ? !Q : !1,
                  endAdornment: /* @__PURE__ */ R(Fl, { position: "end", children: /* @__PURE__ */ ue(
                    se,
                    {
                      ref: at,
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        ...w
                      },
                      children: [
                        /* @__PURE__ */ R(
                          zt,
                          {
                            title: "Query syntax help",
                            placement: "top",
                            sx: N,
                            children: /* @__PURE__ */ R(
                              vt,
                              {
                                onClick: () => M(!0),
                                "aria-label": "Query syntax help",
                                size: "small",
                                edge: l ? !1 : "end",
                                onMouseDown: (J) => J.preventDefault(),
                                sx: S,
                                children: /* @__PURE__ */ R(Mf, { fontSize: "small" })
                              }
                            )
                          }
                        ),
                        l,
                        /* @__PURE__ */ R(
                          $n,
                          {
                            disabled: !Y || !Q,
                            onClick: () => r(Y),
                            onMouseDown: (J) => J.preventDefault(),
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
    /* @__PURE__ */ R(
      jl,
      {
        open: !!fe,
        anchorEl: fe,
        placement: "bottom-start",
        sx: { zIndex: 1300, ...v },
        children: /* @__PURE__ */ R(
          se,
          {
            sx: {
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              width: "300px",
              zIndex: 1300,
              ...L
            },
            children: /* @__PURE__ */ R(Ul, { dense: !0, sx: U, children: b.map((J, T) => /* @__PURE__ */ R(Vl, { disablePadding: !0, children: /* @__PURE__ */ R(
              Wl,
              {
                onMouseDown: (I) => I.preventDefault(),
                onClick: () => _e(J),
                sx: F,
                children: /* @__PURE__ */ R(le, { variant: "body2", sx: g, children: J })
              }
            ) }, T)) })
          }
        )
      }
    ),
    /* @__PURE__ */ R(
      og,
      {
        open: re,
        onClose: () => M(!1),
        helpContent: u,
        sx: j
      }
    )
  ] });
};
function mg({
  columnsOperator: e = {},
  defaultOperators: t = [],
  relatedOperators: n = [],
  handleApply: r,
  placeholder: i = "",
  helpContent: o,
  sx: a = {}
}) {
  const {
    root: l,
    textBoxContainer: u,
    textBox: s,
    iconButton: c,
    popover: f,
    popoverPaper: d,
    popoverContent: p,
    title: x,
    queryForm: h
  } = a, [E, S] = Ve(null), [N, w] = Ve(null), [O, k] = Ve(e);
  rn(() => {
    k(e);
  }, [e]);
  const v = Lt(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...Object.values(e).flatMap((C) => (C == null ? void 0 : C.operators) || []),
        ...n || []
      ])
    ),
    [e, n]
  ), L = (C) => {
    S(C.currentTarget);
  }, U = () => {
    S(null);
  }, F = (C) => {
    const $ = Wa(C), G = {};
    $.forEach((te) => {
      te.column && !O[te.column] && !G[te.column] && (G[te.column] = { operators: v });
    }), Object.keys(G).length && k((te) => ({ ...te, ...G }));
  }, g = (C) => {
    const $ = Of(C, v);
    F($), w($), r && r($);
  }, A = (C) => {
    F(C), w(C), U(), r && r(C);
  }, _ = Lt(
    () => N ? Ha(N) : "",
    [N]
  ), j = !!E, D = j ? "simple-popover" : void 0;
  return /* @__PURE__ */ ue(se, { sx: l, children: [
    /* @__PURE__ */ R(
      se,
      {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        width: "100%",
        sx: u,
        children: /* @__PURE__ */ R(
          ag,
          {
            columnsOperator: O,
            defaultOperators: t,
            onApplyClicked: g,
            queryText: _,
            relatedOperators: n,
            placeholder: i,
            helpContent: o,
            sx: s,
            endAdornment: /* @__PURE__ */ R(
              vt,
              {
                "aria-describedby": D,
                onClick: L,
                size: "small",
                onMouseDown: (C) => C.preventDefault(),
                sx: c,
                children: /* @__PURE__ */ R(Cf, { fontSize: "small" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ R(
      Va,
      {
        id: D,
        open: j,
        anchorEl: E,
        onClose: U,
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
              ...d
            }
          }
        },
        sx: { ...f },
        children: /* @__PURE__ */ ue(se, { sx: { padding: { xs: 1.5, sm: 2 }, ...p }, children: [
          /* @__PURE__ */ R(le, { variant: "h6", sx: x, children: "Query Builder" }),
          /* @__PURE__ */ R(
            Df,
            {
              columnsOperator: O,
              handleApplyFilters: A,
              defaultOperators: t,
              groupTree: N,
              sx: h
            }
          )
        ] })
      }
    )
  ] });
}
export {
  mg as default
};
