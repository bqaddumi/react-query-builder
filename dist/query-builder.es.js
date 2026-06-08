var ao = Object.defineProperty;
var co = (e, t, n) => t in e ? ao(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var vt = (e, t, n) => co(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as S, jsxs as se } from "react/jsx-runtime";
import * as N from "react";
import rt, { useState as ge, useEffect as Ke, useMemo as mn, useRef as Jt } from "react";
import lo from "@emotion/styled";
import { ThemeContext as uo } from "@emotion/react";
import { Box as fe, Typography as ue, Select as Zt, MenuItem as et, Stack as fo, TextField as po, Tooltip as hn, IconButton as Ft, Button as At, OutlinedInput as mo, InputAdornment as ho, Popper as go, List as yo, ListItem as bo, ListItemButton as vo, Dialog as Eo, DialogTitle as xo, DialogContent as To, Divider as tt, Chip as Ve, DialogActions as So } from "@mui/material";
import { Delete as Co, Add as wo } from "@mui/icons-material";
import * as Oo from "react-dom";
import Et from "react-dom";
function Ro(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xt = { exports: {} }, Tt = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ln;
function Po() {
  if (Ln) return J;
  Ln = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
  function x(E) {
    if (typeof E == "object" && E !== null) {
      var I = E.$$typeof;
      switch (I) {
        case t:
          switch (E = E.type, E) {
            case f:
            case d:
            case r:
            case i:
            case o:
            case p:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case c:
                case h:
                case g:
                case y:
                case s:
                  return E;
                default:
                  return I;
              }
          }
        case n:
          return I;
      }
    }
  }
  function C(E) {
    return x(E) === d;
  }
  return J.AsyncMode = f, J.ConcurrentMode = d, J.ContextConsumer = c, J.ContextProvider = s, J.Element = t, J.ForwardRef = h, J.Fragment = r, J.Lazy = g, J.Memo = y, J.Portal = n, J.Profiler = i, J.StrictMode = o, J.Suspense = p, J.isAsyncMode = function(E) {
    return C(E) || x(E) === f;
  }, J.isConcurrentMode = C, J.isContextConsumer = function(E) {
    return x(E) === c;
  }, J.isContextProvider = function(E) {
    return x(E) === s;
  }, J.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, J.isForwardRef = function(E) {
    return x(E) === h;
  }, J.isFragment = function(E) {
    return x(E) === r;
  }, J.isLazy = function(E) {
    return x(E) === g;
  }, J.isMemo = function(E) {
    return x(E) === y;
  }, J.isPortal = function(E) {
    return x(E) === n;
  }, J.isProfiler = function(E) {
    return x(E) === i;
  }, J.isStrictMode = function(E) {
    return x(E) === o;
  }, J.isSuspense = function(E) {
    return x(E) === p;
  }, J.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === d || E === i || E === o || E === p || E === m || typeof E == "object" && E !== null && (E.$$typeof === g || E.$$typeof === y || E.$$typeof === s || E.$$typeof === c || E.$$typeof === h || E.$$typeof === w || E.$$typeof === P || E.$$typeof === j || E.$$typeof === u);
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
var Vn;
function Ao() {
  return Vn || (Vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, j = e ? Symbol.for("react.scope") : 60119;
    function x(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === r || b === d || b === i || b === o || b === p || b === m || typeof b == "object" && b !== null && (b.$$typeof === g || b.$$typeof === y || b.$$typeof === s || b.$$typeof === c || b.$$typeof === h || b.$$typeof === w || b.$$typeof === P || b.$$typeof === j || b.$$typeof === u);
    }
    function C(b) {
      if (typeof b == "object" && b !== null) {
        var U = b.$$typeof;
        switch (U) {
          case t:
            var ee = b.type;
            switch (ee) {
              case f:
              case d:
              case r:
              case i:
              case o:
              case p:
                return ee;
              default:
                var me = ee && ee.$$typeof;
                switch (me) {
                  case c:
                  case h:
                  case g:
                  case y:
                  case s:
                    return me;
                  default:
                    return U;
                }
            }
          case n:
            return U;
        }
      }
    }
    var E = f, I = d, B = c, K = s, q = t, l = h, R = r, O = g, F = y, D = n, A = i, k = o, V = p, ie = !1;
    function pe(b) {
      return ie || (ie = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(b) || C(b) === f;
    }
    function T(b) {
      return C(b) === d;
    }
    function $(b) {
      return C(b) === c;
    }
    function z(b) {
      return C(b) === s;
    }
    function L(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function M(b) {
      return C(b) === h;
    }
    function Y(b) {
      return C(b) === r;
    }
    function W(b) {
      return C(b) === g;
    }
    function H(b) {
      return C(b) === y;
    }
    function Q(b) {
      return C(b) === n;
    }
    function X(b) {
      return C(b) === i;
    }
    function _(b) {
      return C(b) === o;
    }
    function G(b) {
      return C(b) === p;
    }
    Z.AsyncMode = E, Z.ConcurrentMode = I, Z.ContextConsumer = B, Z.ContextProvider = K, Z.Element = q, Z.ForwardRef = l, Z.Fragment = R, Z.Lazy = O, Z.Memo = F, Z.Portal = D, Z.Profiler = A, Z.StrictMode = k, Z.Suspense = V, Z.isAsyncMode = pe, Z.isConcurrentMode = T, Z.isContextConsumer = $, Z.isContextProvider = z, Z.isElement = L, Z.isForwardRef = M, Z.isFragment = Y, Z.isLazy = W, Z.isMemo = H, Z.isPortal = Q, Z.isProfiler = X, Z.isStrictMode = _, Z.isSuspense = G, Z.isValidElementType = x, Z.typeOf = C;
  }()), Z;
}
var zn;
function Pr() {
  return zn || (zn = 1, process.env.NODE_ENV === "production" ? Tt.exports = Po() : Tt.exports = Ao()), Tt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var en, Wn;
function $o() {
  if (Wn) return en;
  Wn = 1;
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
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var f = Object.getOwnPropertyNames(s).map(function(h) {
        return s[h];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        d[h] = h;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return en = o() ? Object.assign : function(i, s) {
    for (var c, f = r(i), d, h = 1; h < arguments.length; h++) {
      c = Object(arguments[h]);
      for (var p in c)
        t.call(c, p) && (f[p] = c[p]);
      if (e) {
        d = e(c);
        for (var m = 0; m < d.length; m++)
          n.call(c, d[m]) && (f[d[m]] = c[d[m]]);
      }
    }
    return f;
  }, en;
}
var tn, Un;
function Rn() {
  if (Un) return tn;
  Un = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tn = e, tn;
}
var nn, qn;
function Ar() {
  return qn || (qn = 1, nn = Function.call.bind(Object.prototype.hasOwnProperty)), nn;
}
var rn, Yn;
function No() {
  if (Yn) return rn;
  Yn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Rn(), n = {}, r = /* @__PURE__ */ Ar();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (r(i, h)) {
          var p;
          try {
            if (typeof i[h] != "function") {
              var m = Error(
                (f || "React class") + ": " + c + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = i[h](s, h, f, c, null, t);
          } catch (g) {
            p = g;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var y = d ? d() : "";
            e(
              "Failed " + c + " type: " + p.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, rn = o, rn;
}
var on, Hn;
function ko() {
  if (Hn) return on;
  Hn = 1;
  var e = Pr(), t = $o(), n = /* @__PURE__ */ Rn(), r = /* @__PURE__ */ Ar(), o = /* @__PURE__ */ No(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return on = function(c, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function p(T) {
      var $ = T && (d && T[d] || T[h]);
      if (typeof $ == "function")
        return $;
    }
    var m = "<<anonymous>>", y = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: j(),
      arrayOf: x,
      element: C(),
      elementType: E(),
      instanceOf: I,
      node: l(),
      objectOf: K,
      oneOf: B,
      oneOfType: q,
      shape: O,
      exact: F
    };
    function g(T, $) {
      return T === $ ? T !== 0 || 1 / T === 1 / $ : T !== T && $ !== $;
    }
    function u(T, $) {
      this.message = T, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function w(T) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, z = 0;
      function L(Y, W, H, Q, X, _, G) {
        if (Q = Q || m, _ = _ || H, G !== n) {
          if (f) {
            var b = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw b.name = "Invariant Violation", b;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var U = Q + ":" + H;
            !$[U] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + _ + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[U] = !0, z++);
          }
        }
        return W[H] == null ? Y ? W[H] === null ? new u("The " + X + " `" + _ + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new u("The " + X + " `" + _ + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : T(W, H, Q, X, _);
      }
      var M = L.bind(null, !1);
      return M.isRequired = L.bind(null, !0), M;
    }
    function P(T) {
      function $(z, L, M, Y, W, H) {
        var Q = z[L], X = k(Q);
        if (X !== T) {
          var _ = V(Q);
          return new u(
            "Invalid " + Y + " `" + W + "` of type " + ("`" + _ + "` supplied to `" + M + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return w($);
    }
    function j() {
      return w(s);
    }
    function x(T) {
      function $(z, L, M, Y, W) {
        if (typeof T != "function")
          return new u("Property `" + W + "` of component `" + M + "` has invalid PropType notation inside arrayOf.");
        var H = z[L];
        if (!Array.isArray(H)) {
          var Q = k(H);
          return new u("Invalid " + Y + " `" + W + "` of type " + ("`" + Q + "` supplied to `" + M + "`, expected an array."));
        }
        for (var X = 0; X < H.length; X++) {
          var _ = T(H, X, M, Y, W + "[" + X + "]", n);
          if (_ instanceof Error)
            return _;
        }
        return null;
      }
      return w($);
    }
    function C() {
      function T($, z, L, M, Y) {
        var W = $[z];
        if (!c(W)) {
          var H = k(W);
          return new u("Invalid " + M + " `" + Y + "` of type " + ("`" + H + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(T);
    }
    function E() {
      function T($, z, L, M, Y) {
        var W = $[z];
        if (!e.isValidElementType(W)) {
          var H = k(W);
          return new u("Invalid " + M + " `" + Y + "` of type " + ("`" + H + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(T);
    }
    function I(T) {
      function $(z, L, M, Y, W) {
        if (!(z[L] instanceof T)) {
          var H = T.name || m, Q = pe(z[L]);
          return new u("Invalid " + Y + " `" + W + "` of type " + ("`" + Q + "` supplied to `" + M + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return w($);
    }
    function B(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function $(z, L, M, Y, W) {
        for (var H = z[L], Q = 0; Q < T.length; Q++)
          if (g(H, T[Q]))
            return null;
        var X = JSON.stringify(T, function(G, b) {
          var U = V(b);
          return U === "symbol" ? String(b) : b;
        });
        return new u("Invalid " + Y + " `" + W + "` of value `" + String(H) + "` " + ("supplied to `" + M + "`, expected one of " + X + "."));
      }
      return w($);
    }
    function K(T) {
      function $(z, L, M, Y, W) {
        if (typeof T != "function")
          return new u("Property `" + W + "` of component `" + M + "` has invalid PropType notation inside objectOf.");
        var H = z[L], Q = k(H);
        if (Q !== "object")
          return new u("Invalid " + Y + " `" + W + "` of type " + ("`" + Q + "` supplied to `" + M + "`, expected an object."));
        for (var X in H)
          if (r(H, X)) {
            var _ = T(H, X, M, Y, W + "." + X, n);
            if (_ instanceof Error)
              return _;
          }
        return null;
      }
      return w($);
    }
    function q(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var $ = 0; $ < T.length; $++) {
        var z = T[$];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ie(z) + " at index " + $ + "."
          ), s;
      }
      function L(M, Y, W, H, Q) {
        for (var X = [], _ = 0; _ < T.length; _++) {
          var G = T[_], b = G(M, Y, W, H, Q, n);
          if (b == null)
            return null;
          b.data && r(b.data, "expectedType") && X.push(b.data.expectedType);
        }
        var U = X.length > 0 ? ", expected one of type [" + X.join(", ") + "]" : "";
        return new u("Invalid " + H + " `" + Q + "` supplied to " + ("`" + W + "`" + U + "."));
      }
      return w(L);
    }
    function l() {
      function T($, z, L, M, Y) {
        return D($[z]) ? null : new u("Invalid " + M + " `" + Y + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return w(T);
    }
    function R(T, $, z, L, M) {
      return new u(
        (T || "React class") + ": " + $ + " type `" + z + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + M + "`."
      );
    }
    function O(T) {
      function $(z, L, M, Y, W) {
        var H = z[L], Q = k(H);
        if (Q !== "object")
          return new u("Invalid " + Y + " `" + W + "` of type `" + Q + "` " + ("supplied to `" + M + "`, expected `object`."));
        for (var X in T) {
          var _ = T[X];
          if (typeof _ != "function")
            return R(M, Y, W, X, V(_));
          var G = _(H, X, M, Y, W + "." + X, n);
          if (G)
            return G;
        }
        return null;
      }
      return w($);
    }
    function F(T) {
      function $(z, L, M, Y, W) {
        var H = z[L], Q = k(H);
        if (Q !== "object")
          return new u("Invalid " + Y + " `" + W + "` of type `" + Q + "` " + ("supplied to `" + M + "`, expected `object`."));
        var X = t({}, z[L], T);
        for (var _ in X) {
          var G = T[_];
          if (r(T, _) && typeof G != "function")
            return R(M, Y, W, _, V(G));
          if (!G)
            return new u(
              "Invalid " + Y + " `" + W + "` key `" + _ + "` supplied to `" + M + "`.\nBad object: " + JSON.stringify(z[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var b = G(H, _, M, Y, W + "." + _, n);
          if (b)
            return b;
        }
        return null;
      }
      return w($);
    }
    function D(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(D);
          if (T === null || c(T))
            return !0;
          var $ = p(T);
          if ($) {
            var z = $.call(T), L;
            if ($ !== T.entries) {
              for (; !(L = z.next()).done; )
                if (!D(L.value))
                  return !1;
            } else
              for (; !(L = z.next()).done; ) {
                var M = L.value;
                if (M && !D(M[1]))
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
    function k(T) {
      var $ = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : A($, T) ? "symbol" : $;
    }
    function V(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var $ = k(T);
      if ($ === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function ie(T) {
      var $ = V(T);
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
    function pe(T) {
      return !T.constructor || !T.constructor.name ? m : T.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, on;
}
var sn, Gn;
function _o() {
  if (Gn) return sn;
  Gn = 1;
  var e = /* @__PURE__ */ Rn();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, sn = function() {
    function r(s, c, f, d, h, p) {
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
  }, sn;
}
var Kn;
function Io() {
  if (Kn) return xt.exports;
  if (Kn = 1, process.env.NODE_ENV !== "production") {
    var e = Pr(), t = !0;
    xt.exports = /* @__PURE__ */ ko()(e.isElement, t);
  } else
    xt.exports = /* @__PURE__ */ _o()();
  return xt.exports;
}
var Do = /* @__PURE__ */ Io();
const a = /* @__PURE__ */ Ro(Do);
function $r(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = $r(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Oe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = $r(e)) && (r && (r += " "), r += t);
  return r;
}
function ut(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", c = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (s += (c === !0 ? "" : " ") + t(d), c = !1, n && n[d] && (s += " " + n[d]));
    }
    r[o] = s;
  }
  return r;
}
function $t(e, t, n, r, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = o || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Mo = a.oneOfType([a.func, a.object]);
function ft(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Bo(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function jo(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Bo(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Fo = ft(a.elementType, jo);
function Lo(e) {
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
function Nr(e, t, n, r) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = Lo(o);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function kr(e, t, ...n) {
  return e[t] === void 0 ? null : Nr(e, t, ...n);
}
function gn() {
  return null;
}
kr.isRequired = Nr;
gn.isRequired = gn;
const _r = process.env.NODE_ENV === "production" ? gn : kr;
function Vo(e) {
  return typeof e == "string";
}
function Ne(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function je(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ne(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var St = { exports: {} }, te = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qn;
function zo() {
  if (Qn) return te;
  Qn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
  function g(u) {
    if (typeof u == "object" && u !== null) {
      var w = u.$$typeof;
      switch (w) {
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
                case c:
                case p:
                case h:
                  return u;
                case i:
                  return u;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return te.ContextConsumer = i, te.ContextProvider = s, te.Element = e, te.ForwardRef = c, te.Fragment = n, te.Lazy = p, te.Memo = h, te.Portal = t, te.Profiler = o, te.StrictMode = r, te.Suspense = f, te.SuspenseList = d, te.isContextConsumer = function(u) {
    return g(u) === i;
  }, te.isContextProvider = function(u) {
    return g(u) === s;
  }, te.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, te.isForwardRef = function(u) {
    return g(u) === c;
  }, te.isFragment = function(u) {
    return g(u) === n;
  }, te.isLazy = function(u) {
    return g(u) === p;
  }, te.isMemo = function(u) {
    return g(u) === h;
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
    return typeof u == "string" || typeof u == "function" || u === n || u === o || u === r || u === f || u === d || u === m || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === h || u.$$typeof === s || u.$$typeof === i || u.$$typeof === c || u.$$typeof === y || u.getModuleId !== void 0);
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
var Xn;
function Wo() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var w = u.$$typeof;
        switch (w) {
          case t:
            switch (u = u.type, u) {
              case r:
              case i:
              case o:
              case d:
              case h:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case c:
                  case f:
                  case m:
                  case p:
                    return u;
                  case s:
                    return u;
                  default:
                    return w;
                }
            }
          case n:
            return w;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.for("react.client.reference");
    ne.ContextConsumer = s, ne.ContextProvider = c, ne.Element = t, ne.ForwardRef = f, ne.Fragment = r, ne.Lazy = m, ne.Memo = p, ne.Portal = n, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = d, ne.SuspenseList = h, ne.isContextConsumer = function(u) {
      return e(u) === s;
    }, ne.isContextProvider = function(u) {
      return e(u) === c;
    }, ne.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, ne.isForwardRef = function(u) {
      return e(u) === f;
    }, ne.isFragment = function(u) {
      return e(u) === r;
    }, ne.isLazy = function(u) {
      return e(u) === m;
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
      return e(u) === h;
    }, ne.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === r || u === i || u === o || u === d || u === h || u === y || typeof u == "object" && u !== null && (u.$$typeof === m || u.$$typeof === p || u.$$typeof === c || u.$$typeof === s || u.$$typeof === f || u.$$typeof === g || u.getModuleId !== void 0);
    }, ne.typeOf = e;
  }()), ne;
}
var Jn;
function Uo() {
  return Jn || (Jn = 1, process.env.NODE_ENV === "production" ? St.exports = /* @__PURE__ */ zo() : St.exports = /* @__PURE__ */ Wo()), St.exports;
}
var Nt = /* @__PURE__ */ Uo();
function we(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ir(e) {
  if (/* @__PURE__ */ N.isValidElement(e) || Nt.isValidElementType(e) || !we(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ir(e[n]);
  }), t;
}
function be(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return we(e) && we(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ N.isValidElement(t[o]) || Nt.isValidElementType(t[o]) ? r[o] = t[o] : we(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && we(e[o]) ? r[o] = be(e[o], t[o], n) : n.clone ? r[o] = we(t[o]) ? Ir(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
function at(e, t) {
  return t ? be(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const _e = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.string, a.object, a.array]) : {};
function qo(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, o) => {
    var s, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((s = r.match(i)) == null ? void 0 : s[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return n.length ? n.reduce((r, o) => {
    const i = t[o];
    return delete r[o], r[o] = i, r;
  }, {
    ...t
  }) : t;
}
function Yo(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Ho(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ne(18, `(${t})`));
    return null;
  }
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Go(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function n(i, s) {
    i.up = (...c) => t(e.breakpoints.up(...c), s), i.down = (...c) => t(e.breakpoints.down(...c), s), i.between = (...c) => t(e.breakpoints.between(...c), s), i.only = (...c) => t(e.breakpoints.only(...c), s), i.not = (...c) => {
      const f = t(e.breakpoints.not(...c), s);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const r = {}, o = (i) => (n(r, i), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const Lt = {
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
}, Zn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Lt[e]}px)`
}, Ko = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Lt[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Re(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Zn;
    return t.reduce((s, c, f) => (s[i.up(i.keys[f])] = n(t[f]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Zn;
    return Object.keys(t).reduce((s, c) => {
      if (Yo(i.keys, c)) {
        const f = Ho(r.containerQueries ? r : Ko, c);
        f && (s[f] = n(t[c], c));
      } else if (Object.keys(i.values || Lt).includes(c)) {
        const f = i.up(c);
        s[f] = n(t[c], c);
      } else {
        const f = c;
        s[f] = t[f];
      }
      return s;
    }, {});
  }
  return n(t);
}
function Qo(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r;
  }, {})) || {};
}
function Xo(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Vt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e);
}
function kt(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = Vt(e, n) || r, t && (o = t(o, r, e)), o;
}
function de(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], f = s.theme, d = Vt(f, r) || {};
    return Re(s, c, (p) => {
      let m = kt(d, o, p);
      return p === m && typeof p == "string" && (m = kt(d, o, `${t}${p === "default" ? "" : je(p)}`, p)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: _e
  } : {}, i.filterProps = [t], i;
}
function Jo(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Zo = {
  m: "margin",
  p: "padding"
}, ei = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, er = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ti = Jo((e) => {
  if (e.length > 2)
    if (er[e])
      e = er[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Zo[t], o = ei[n] || "";
  return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
}), zt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Wt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ni = [...zt, ...Wt];
function dt(e, t, n, r) {
  const o = Vt(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[s];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Pn(e) {
  return dt(e, "spacing", 8, "spacing");
}
function pt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ri(e, t) {
  return (n) => e.reduce((r, o) => (r[o] = pt(t, n), r), {});
}
function oi(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const o = ti(n), i = ri(o, r), s = e[n];
  return Re(e, s, i);
}
function Dr(e, t) {
  const n = Pn(e.theme);
  return Object.keys(e).map((r) => oi(e, t, r, n)).reduce(at, {});
}
function ce(e) {
  return Dr(e, zt);
}
ce.propTypes = process.env.NODE_ENV !== "production" ? zt.reduce((e, t) => (e[t] = _e, e), {}) : {};
ce.filterProps = zt;
function le(e) {
  return Dr(e, Wt);
}
le.propTypes = process.env.NODE_ENV !== "production" ? Wt.reduce((e, t) => (e[t] = _e, e), {}) : {};
le.filterProps = Wt;
process.env.NODE_ENV !== "production" && ni.reduce((e, t) => (e[t] = _e, e), {});
function Ut(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => Object.keys(r).reduce((o, i) => t[i] ? at(o, t[i](r)) : o, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, o) => Object.assign(r, o.propTypes), {}) : {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function ve(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ee(e, t) {
  return de({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ii = Ee("border", ve), si = Ee("borderTop", ve), ai = Ee("borderRight", ve), ci = Ee("borderBottom", ve), li = Ee("borderLeft", ve), ui = Ee("borderColor"), fi = Ee("borderTopColor"), di = Ee("borderRightColor"), pi = Ee("borderBottomColor"), mi = Ee("borderLeftColor"), hi = Ee("outline", ve), gi = Ee("outlineColor"), qt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = dt(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: pt(t, r)
    });
    return Re(e, e.borderRadius, n);
  }
  return null;
};
qt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: _e
} : {};
qt.filterProps = ["borderRadius"];
Ut(ii, si, ai, ci, li, ui, fi, di, pi, mi, qt, hi, gi);
const Yt = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = dt(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: pt(t, r)
    });
    return Re(e, e.gap, n);
  }
  return null;
};
Yt.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: _e
} : {};
Yt.filterProps = ["gap"];
const Ht = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = dt(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: pt(t, r)
    });
    return Re(e, e.columnGap, n);
  }
  return null;
};
Ht.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: _e
} : {};
Ht.filterProps = ["columnGap"];
const Gt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = dt(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: pt(t, r)
    });
    return Re(e, e.rowGap, n);
  }
  return null;
};
Gt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: _e
} : {};
Gt.filterProps = ["rowGap"];
const yi = de({
  prop: "gridColumn"
}), bi = de({
  prop: "gridRow"
}), vi = de({
  prop: "gridAutoFlow"
}), Ei = de({
  prop: "gridAutoColumns"
}), xi = de({
  prop: "gridAutoRows"
}), Ti = de({
  prop: "gridTemplateColumns"
}), Si = de({
  prop: "gridTemplateRows"
}), Ci = de({
  prop: "gridTemplateAreas"
}), wi = de({
  prop: "gridArea"
});
Ut(Yt, Ht, Gt, yi, bi, vi, Ei, xi, Ti, Si, Ci, wi);
function Qe(e, t) {
  return t === "grey" ? t : e;
}
const Oi = de({
  prop: "color",
  themeKey: "palette",
  transform: Qe
}), Ri = de({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Qe
}), Pi = de({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Qe
});
Ut(Oi, Ri, Pi);
function ye(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ai = de({
  prop: "width",
  transform: ye
}), An = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, c, f;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || Lt[n];
      return r ? ((f = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: ye(n)
      };
    };
    return Re(e, e.maxWidth, t);
  }
  return null;
};
An.filterProps = ["maxWidth"];
const $i = de({
  prop: "minWidth",
  transform: ye
}), Ni = de({
  prop: "height",
  transform: ye
}), ki = de({
  prop: "maxHeight",
  transform: ye
}), _i = de({
  prop: "minHeight",
  transform: ye
});
de({
  prop: "size",
  cssProperty: "width",
  transform: ye
});
de({
  prop: "size",
  cssProperty: "height",
  transform: ye
});
const Ii = de({
  prop: "boxSizing"
});
Ut(Ai, An, $i, Ni, ki, _i, Ii);
const Kt = {
  // borders
  border: {
    themeKey: "borders",
    transform: ve
  },
  borderTop: {
    themeKey: "borders",
    transform: ve
  },
  borderRight: {
    themeKey: "borders",
    transform: ve
  },
  borderBottom: {
    themeKey: "borders",
    transform: ve
  },
  borderLeft: {
    themeKey: "borders",
    transform: ve
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
    transform: ve
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: qt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Qe
  },
  // spacing
  p: {
    style: le
  },
  pt: {
    style: le
  },
  pr: {
    style: le
  },
  pb: {
    style: le
  },
  pl: {
    style: le
  },
  px: {
    style: le
  },
  py: {
    style: le
  },
  padding: {
    style: le
  },
  paddingTop: {
    style: le
  },
  paddingRight: {
    style: le
  },
  paddingBottom: {
    style: le
  },
  paddingLeft: {
    style: le
  },
  paddingX: {
    style: le
  },
  paddingY: {
    style: le
  },
  paddingInline: {
    style: le
  },
  paddingInlineStart: {
    style: le
  },
  paddingInlineEnd: {
    style: le
  },
  paddingBlock: {
    style: le
  },
  paddingBlockStart: {
    style: le
  },
  paddingBlockEnd: {
    style: le
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
    style: Yt
  },
  rowGap: {
    style: Gt
  },
  columnGap: {
    style: Ht
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
    transform: ye
  },
  maxWidth: {
    style: An
  },
  minWidth: {
    transform: ye
  },
  height: {
    transform: ye
  },
  maxHeight: {
    transform: ye
  },
  minHeight: {
    transform: ye
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
function Di(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Mi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bi() {
  function e(n, r, o, i) {
    const s = {
      [n]: r,
      theme: o
    }, c = i[n];
    if (!c)
      return {
        [n]: r
      };
    const {
      cssProperty: f = n,
      themeKey: d,
      transform: h,
      style: p
    } = c;
    if (r == null)
      return null;
    if (d === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const m = Vt(o, d) || {};
    return p ? p(s) : Re(s, r, (g) => {
      let u = kt(m, h, g);
      return g === u && typeof g == "string" && (u = kt(m, h, `${n}${g === "default" ? "" : je(g)}`, g)), f === !1 ? u : {
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
    const i = o.unstable_sxConfig ?? Kt;
    function s(c) {
      let f = c;
      if (typeof c == "function")
        f = c(o);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const d = Qo(o.breakpoints), h = Object.keys(d);
      let p = d;
      return Object.keys(f).forEach((m) => {
        const y = Mi(f[m], o);
        if (y != null)
          if (typeof y == "object")
            if (i[m])
              p = at(p, e(m, y, o, i));
            else {
              const g = Re({
                theme: o
              }, y, (u) => ({
                [m]: u
              }));
              Di(g, y) ? p[m] = t({
                sx: y,
                theme: o
              }) : p = at(p, g);
            }
          else
            p = at(p, e(m, y, o, i));
      }), qo(o, Xo(h, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return t;
}
const Xe = Bi();
Xe.filterProps = ["sx"];
function ji(e) {
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
var Fi = {
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
function Li(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Vi = /[A-Z]|^ms/g, zi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Mr = function(t) {
  return t.charCodeAt(1) === 45;
}, tr = function(t) {
  return t != null && typeof t != "boolean";
}, an = /* @__PURE__ */ Li(function(e) {
  return Mr(e) ? e : e.replace(Vi, "-$&").toLowerCase();
}), nr = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(zi, function(r, o, i) {
          return $e = {
            name: o,
            styles: i,
            next: $e
          }, o;
        });
  }
  return Fi[t] !== 1 && !Mr(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function _t(e, t, n) {
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
        return $e = {
          name: o.name,
          styles: o.styles,
          next: $e
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            $e = {
              name: s.name,
              styles: s.styles,
              next: $e
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return Wi(e, t, n);
    }
  }
  var f = n;
  return f;
}
function Wi(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += _t(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var c = s;
        tr(c) && (r += an(i) + ":" + nr(i, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var f = 0; f < s.length; f++)
          tr(s[f]) && (r += an(i) + ":" + nr(i, s[f]) + ";");
      else {
        var d = _t(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += an(i) + ":" + d + ";";
            break;
          }
          default:
            r += i + "{" + d + "}";
        }
      }
    }
  return r;
}
var rr = /label:\s*([^\s;{]+)\s*(;|$)/g, $e;
function Ui(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  $e = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += _t(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += _t(n, t, e[c]), r) {
      var f = i;
      o += f[c];
    }
  rr.lastIndex = 0;
  for (var d = "", h; (h = rr.exec(o)) !== null; )
    d += "-" + h[1];
  var p = ji(o) + d;
  return {
    name: p,
    styles: o,
    next: $e
  };
}
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function qi(e, t) {
  const n = lo(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function Yi(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const or = [];
function ir(e) {
  return or[0] = e, Ui(or);
}
const Hi = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Gi(e) {
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
  } = e, i = Hi(t), s = Object.keys(i);
  function c(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function f(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function d(m, y) {
    const g = s.indexOf(y);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : y) - r / 100}${n})`;
  }
  function h(m) {
    return s.indexOf(m) + 1 < s.length ? d(m, s[s.indexOf(m) + 1]) : c(m);
  }
  function p(m) {
    const y = s.indexOf(m);
    return y === 0 ? c(s[1]) : y === s.length - 1 ? f(s[y]) : d(m, s[s.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: s,
    values: i,
    up: c,
    down: f,
    between: d,
    only: h,
    not: p,
    unit: n,
    ...o
  };
}
const Ki = {
  borderRadius: 4
};
function Br(e = 8, t = Pn({
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
function Qi(e, t) {
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
function $n(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = Gi(n), f = Br(o);
  let d = be({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: f,
    shape: {
      ...Ki,
      ...i
    }
  }, s);
  return d = Go(d), d.applyStyles = Qi, d = t.reduce((h, p) => be(h, p), d), d.unstable_sxConfig = {
    ...Kt,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return Xe({
      sx: p,
      theme: this
    });
  }, d;
}
function Xi(e) {
  return Object.keys(e).length === 0;
}
function Ji(e = null) {
  const t = N.useContext(uo);
  return !t || Xi(t) ? e : t;
}
const Zi = $n();
function es(e = Zi) {
  return Ji(e);
}
const sr = (e) => e, ts = () => {
  let e = sr;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = sr;
    }
  };
}, ns = ts(), rs = {
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
function Fe(e, t, n = "Mui") {
  const r = rs[t];
  return r ? `${n}-${r}` : `${ns.generate(e)}-${t}`;
}
function mt(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = Fe(e, o, n);
  }), r;
}
function jr(e, t = "") {
  return e.displayName || e.name || t;
}
function ar(e, t, n) {
  const r = jr(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function os(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return jr(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Nt.ForwardRef:
          return ar(e, e.render, "ForwardRef");
        case Nt.Memo:
          return ar(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Fr(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: ir(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = ir(o.style));
  }), r;
}
const is = $n();
function cn(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ss(e) {
  return e ? (t, n) => n[e] : null;
}
function as(e, t, n) {
  e.theme = fs(e.theme) ? n : e.theme[t] || e.theme;
}
function Rt(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Rt(e, r));
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
    return Lr(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Lr(e, t, n = []) {
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
      for (const c in s.props)
        if (e[c] !== s.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== s.props[c])
          continue e;
    typeof s.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(s.style(r))) : n.push(s.style);
  }
  return n;
}
function cs(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = is,
    rootShouldForwardProp: r = cn,
    slotShouldForwardProp: o = cn
  } = e;
  function i(c) {
    as(c, t, n);
  }
  return (c, f = {}) => {
    Yi(c, (E) => E.filter((I) => I !== Xe));
    const {
      name: d,
      slot: h,
      skipVariantsResolver: p,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: y = ss(Vr(h)),
      ...g
    } = f, u = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), w = m || !1;
    let P = cn;
    h === "Root" || h === "root" ? P = r : h ? P = o : ds(c) && (P = void 0);
    const j = qi(c, {
      shouldForwardProp: P,
      label: us(d, h),
      ...g
    }), x = (E) => {
      if (typeof E == "function" && E.__emotion_real !== E)
        return function(B) {
          return Rt(B, E);
        };
      if (we(E)) {
        const I = Fr(E);
        return I.variants ? function(K) {
          return Rt(K, I);
        } : I.style;
      }
      return E;
    }, C = (...E) => {
      const I = [], B = E.map(x), K = [];
      if (I.push(i), d && y && K.push(function(O) {
        var k, V;
        const D = (V = (k = O.theme.components) == null ? void 0 : k[d]) == null ? void 0 : V.styleOverrides;
        if (!D)
          return null;
        const A = {};
        for (const ie in D)
          A[ie] = Rt(O, D[ie]);
        return y(O, A);
      }), d && !u && K.push(function(O) {
        var A, k;
        const F = O.theme, D = (k = (A = F == null ? void 0 : F.components) == null ? void 0 : A[d]) == null ? void 0 : k.variants;
        return D ? Lr(O, D) : null;
      }), w || K.push(Xe), Array.isArray(B[0])) {
        const R = B.shift(), O = new Array(I.length).fill(""), F = new Array(K.length).fill("");
        let D;
        D = [...O, ...R, ...F], D.raw = [...O, ...R.raw, ...F], I.unshift(D);
      }
      const q = [...I, ...B, ...K], l = j(...q);
      return c.muiName && (l.muiName = c.muiName), process.env.NODE_ENV !== "production" && (l.displayName = ls(d, h, c)), l;
    };
    return j.withConfig && (C.withConfig = j.withConfig), C;
  };
}
function ls(e, t, n) {
  return e ? `${e}${je(t || "")}` : `Styled(${os(n)})`;
}
function us(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Vr(t || "Root")}`), n;
}
function fs(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ds(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Vr(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function yn(e, t) {
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
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const f = c;
              n[o][f] = yn(i[f], s[f]);
            }
        }
      } else n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
const bn = typeof window < "u" ? N.useLayoutEffect : N.useEffect;
function ps(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Nn(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), ps(e, t, n);
}
function ms(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ke(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ke(ms(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ne(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ne(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const hs = (e) => {
  const t = ke(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ot = (e, t) => {
  try {
    return hs(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Qt(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function zr(e) {
  e = ke(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (d, h = (d + n / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let c = "rgb";
  const f = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", f.push(t[3])), Qt({
    type: c,
    values: f
  });
}
function vn(e) {
  e = ke(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ke(zr(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function cr(e, t) {
  const n = vn(e), r = vn(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function En(e, t) {
  return e = ke(e), t = Nn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qt(e);
}
function Ct(e, t, n) {
  try {
    return En(e, t);
  } catch {
    return e;
  }
}
function kn(e, t) {
  if (e = ke(e), t = Nn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Qt(e);
}
function re(e, t, n) {
  try {
    return kn(e, t);
  } catch {
    return e;
  }
}
function _n(e, t) {
  if (e = ke(e), t = Nn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Qt(e);
}
function oe(e, t, n) {
  try {
    return _n(e, t);
  } catch {
    return e;
  }
}
function gs(e, t = 0.15) {
  return vn(e) > 0.5 ? kn(e, t) : _n(e, t);
}
function wt(e, t, n) {
  try {
    return gs(e, t);
  } catch {
    return e;
  }
}
function ys(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Wr(e, t, n, r, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const f = i.type;
  return typeof f == "function" && !ys(f) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ht = ft(a.element, Wr);
ht.isRequired = ft(a.element.isRequired, Wr);
const bs = "exact-prop: ​";
function Ur(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [bs]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function lr(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function vs(e, t = 166) {
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
function Je(e) {
  return Pe(e).defaultView || window;
}
function xn(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function ur(e) {
  const t = N.useRef(e);
  return bn(() => {
    t.current = e;
  }), N.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ie(...e) {
  return N.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      xn(n, t);
    });
  }, e);
}
const fr = {};
function Es(e, t) {
  const n = N.useRef(fr);
  return n.current === fr && (n.current = e(t)), n;
}
const xs = [];
function Ts(e) {
  N.useEffect(e, xs);
}
class In {
  constructor() {
    vt(this, "currentId", null);
    vt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    vt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new In();
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
function Ss() {
  const e = Es(In.create).current;
  return Ts(e.disposeEffect), e;
}
function Cs(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function ws(e) {
  return typeof e == "string";
}
function Os(e, t, n) {
  return e === void 0 || ws(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function qr(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function dr(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Rs(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const y = Oe(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), g = {
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
  const s = qr({
    ...o,
    ...r
  }), c = dr(r), f = dr(o), d = t(s), h = Oe(d == null ? void 0 : d.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
    ...d == null ? void 0 : d.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, m = {
    ...d,
    ...n,
    ...f,
    ...c
  };
  return h.length > 0 && (m.className = h), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: d.ref
  };
}
function Ps(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Xt(e) {
  var t;
  return parseInt(N.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
const As = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (a.node, a.object);
function $s(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? yn(o.defaultProps, r) : !o.styleOverrides && !o.variants ? yn(o, r) : r;
}
function Ns({
  props: e,
  name: t
}) {
  const n = N.useContext(As);
  return $s({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const pr = {
  theme: void 0
};
function ks(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (pr.theme = o.theme, i = Fr(e(pr)), t = i, n = o.theme), i;
  };
}
function _s(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const mr = (e, t, n, r = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  });
}, Is = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([c, f]) => {
      (!n || n && !n([...i, c])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? r(f, [...i, c], Array.isArray(f) ? [...s, c] : s) : t([...i, c], f, s));
    });
  }
  r(e);
}, Ds = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function ln(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Is(
    e,
    (c, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!r || !r(c, f))) {
        const h = `--${n ? `${n}-` : ""}${c.join("-")}`, p = Ds(c, f);
        Object.assign(o, {
          [h]: p
        }), mr(i, c, `var(${h})`, d), mr(s, c, `var(${h}, ${p})`, d);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function Ms(e, t = {}) {
  const {
    getSelector: n = w,
    disableCssColorScheme: r,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: s,
    defaultColorScheme: c = "light",
    ...f
  } = e, {
    vars: d,
    css: h,
    varsWithDefaults: p
  } = ln(f, t);
  let m = p;
  const y = {}, {
    [c]: g,
    ...u
  } = i;
  if (Object.entries(u || {}).forEach(([x, C]) => {
    const {
      vars: E,
      css: I,
      varsWithDefaults: B
    } = ln(C, t);
    m = be(m, B), y[x] = {
      css: I,
      vars: E
    };
  }), g) {
    const {
      css: x,
      vars: C,
      varsWithDefaults: E
    } = ln(g, t);
    m = be(m, E), y[c] = {
      css: x,
      vars: C
    };
  }
  function w(x, C) {
    var I, B;
    let E = o;
    if (o === "class" && (E = ".%s"), o === "data" && (E = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (E = `[${o}="%s"]`), x) {
      if (E === "media")
        return e.defaultColorScheme === x ? ":root" : {
          [`@media (prefers-color-scheme: ${((B = (I = i[x]) == null ? void 0 : I.palette) == null ? void 0 : B.mode) || x})`]: {
            ":root": C
          }
        };
      if (E)
        return e.defaultColorScheme === x ? `:root, ${E.replace("%s", String(x))}` : E.replace("%s", String(x));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let x = {
        ...d
      };
      return Object.entries(y).forEach(([, {
        vars: C
      }]) => {
        x = be(x, C);
      }), x;
    },
    generateStyleSheets: () => {
      var K, q;
      const x = [], C = e.defaultColorScheme || "light";
      function E(l, R) {
        Object.keys(R).length && x.push(typeof l == "string" ? {
          [l]: {
            ...R
          }
        } : l);
      }
      E(n(void 0, {
        ...h
      }), h);
      const {
        [C]: I,
        ...B
      } = y;
      if (I) {
        const {
          css: l
        } = I, R = (q = (K = i[C]) == null ? void 0 : K.palette) == null ? void 0 : q.mode, O = !r && R ? {
          colorScheme: R,
          ...l
        } : {
          ...l
        };
        E(n(C, {
          ...O
        }), O);
      }
      return Object.entries(B).forEach(([l, {
        css: R
      }]) => {
        var D, A;
        const O = (A = (D = i[l]) == null ? void 0 : D.palette) == null ? void 0 : A.mode, F = !r && O ? {
          colorScheme: O,
          ...R
        } : {
          ...R
        };
        E(n(l, {
          ...F
        }), F);
      }), x;
    }
  };
}
function Bs(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const lt = {
  black: "#000",
  white: "#fff"
}, js = {
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
}, ze = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, We = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, nt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ue = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, qe = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ye = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Yr() {
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
      paper: lt.white,
      default: lt.white
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
const Fs = Yr();
function Hr() {
  return {
    text: {
      primary: lt.white,
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
      active: lt.white,
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
const hr = Hr();
function gr(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = _n(e.main, o) : t === "dark" && (e.dark = kn(e.main, i)));
}
function Ls(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[700],
    light: Ue[400],
    dark: Ue[800]
  };
}
function Vs(e = "light") {
  return e === "dark" ? {
    main: ze[200],
    light: ze[50],
    dark: ze[400]
  } : {
    main: ze[500],
    light: ze[300],
    dark: ze[700]
  };
}
function zs(e = "light") {
  return e === "dark" ? {
    main: We[500],
    light: We[300],
    dark: We[700]
  } : {
    main: We[700],
    light: We[400],
    dark: We[800]
  };
}
function Ws(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: qe[700],
    light: qe[500],
    dark: qe[900]
  };
}
function Us(e = "light") {
  return e === "dark" ? {
    main: Ye[400],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: Ye[800],
    light: Ye[500],
    dark: Ye[900]
  };
}
function qs(e = "light") {
  return e === "dark" ? {
    main: nt[400],
    light: nt[300],
    dark: nt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: nt[500],
    dark: nt[900]
  };
}
function Dn(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...o
  } = e, i = e.primary || Ls(t), s = e.secondary || Vs(t), c = e.error || zs(t), f = e.info || Ws(t), d = e.success || Us(t), h = e.warning || qs(t);
  function p(u) {
    const w = cr(u, hr.text.primary) >= n ? hr.text.primary : Fs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const P = cr(u, w);
      P < 3 && console.error([`MUI: The contrast ratio of ${P}:1 for ${w} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const m = ({
    color: u,
    name: w,
    mainShade: P = 500,
    lightShade: j = 300,
    darkShade: x = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[P] && (u.main = u[P]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${P}\` property.` : Ne(11, w ? ` (${w})` : "", P));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ne(12, w ? ` (${w})` : "", JSON.stringify(u.main)));
    return gr(u, "light", j, r), gr(u, "dark", x, r), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let y;
  return t === "light" ? y = Yr() : t === "dark" && (y = Hr()), process.env.NODE_ENV !== "production" && (y || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), be({
    // A collection of common colors.
    common: {
      ...lt
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
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: js,
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
    ...y
  }, o);
}
function Ys(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Hs(e, t) {
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
function Gs(e) {
  return Math.round(e * 1e5) / 1e5;
}
const yr = {
  textTransform: "uppercase"
}, br = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ks(e, t) {
  const {
    fontFamily: n = br,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = r / 14, y = h || ((w) => `${w / f * m}rem`), g = (w, P, j, x, C) => ({
    fontFamily: n,
    fontWeight: w,
    fontSize: y(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: j,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === br ? {
      letterSpacing: `${Gs(x / P)}em`
    } : {},
    ...C,
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
    button: g(s, 14, 1.75, 0.4, yr),
    caption: g(i, 12, 1.66, 0.4),
    overline: g(i, 12, 2.66, 1, yr),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return be({
    htmlFontSize: f,
    pxToRem: y,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Qs = 0.2, Xs = 0.14, Js = 0.12;
function ae(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Qs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Xs})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Js})`].join(",");
}
const Zs = ["none", ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ea = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ta = {
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
function vr(e) {
  return `${Math.round(e)}ms`;
}
function na(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ra(e) {
  const t = {
    ...ea,
    ...e.easing
  }, n = {
    ...ta,
    ...e.duration
  };
  return {
    getAutoHeightDuration: na,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: c = t.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const h = (m) => typeof m == "string", p = (m) => !Number.isNaN(parseFloat(m));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !h(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), h(c) || console.error('MUI: Argument "easing" must be a string.'), !p(f) && !h(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof s == "string" ? s : vr(s)} ${c} ${typeof f == "string" ? f : vr(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const oa = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ia(e) {
  return we(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Gr(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !ia(c) || s.startsWith("unstable_") ? delete r[s] : we(c) && (r[s] = {
        ...c
      }, n(r[s]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Tn(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: c = {},
    shape: f,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ne(20));
  const h = Dn(i), p = $n(e);
  let m = be(p, {
    mixins: Hs(p.breakpoints, r),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Zs.slice(),
    typography: Ks(h, c),
    transitions: ra(s),
    zIndex: {
      ...oa
    }
  });
  if (m = be(m, d), m = t.reduce((y, g) => be(y, g), m), process.env.NODE_ENV !== "production") {
    const y = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (u, w) => {
      let P;
      for (P in u) {
        const j = u[P];
        if (y.includes(P) && Object.keys(j).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = Fe("", P);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${P}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: j
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[P] = {};
        }
      }
    };
    Object.keys(m.components).forEach((u) => {
      const w = m.components[u].styleOverrides;
      w && u.startsWith("Mui") && g(w, u);
    });
  }
  return m.unstable_sxConfig = {
    ...Kt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, m.unstable_sx = function(g) {
    return Xe({
      sx: g,
      theme: this
    });
  }, m.toRuntimeSource = Gr, m;
}
function Sn(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const sa = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Sn(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Kr(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Qr(e) {
  return e === "dark" ? sa : [];
}
function aa(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...o
  } = e, i = Dn(t);
  return {
    palette: i,
    opacity: {
      ...Kr(i.mode),
      ...n
    },
    overlays: r || Qr(i.mode),
    ...o
  };
}
function ca(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const la = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ua = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return la(e.cssVarPrefix).forEach((c) => {
        s[c] = n[c], delete n[c];
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
function fa(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function v(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function it(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : zr(e);
}
function Ce(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ot(it(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function da(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Te = (e) => {
  try {
    return e();
  } catch {
  }
}, pa = (e = "mui") => _s(e);
function un(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = aa({
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
  } = Tn({
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
      ...Kr(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Qr(o)
  }, s;
}
function ma(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: s = ca,
    colorSchemeSelector: c = n.light && n.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, h = Object.keys(n)[0], p = r || (n.light && h !== "light" ? "light" : h), m = pa(i), {
    [p]: y,
    light: g,
    dark: u,
    ...w
  } = n, P = {
    ...w
  };
  let j = y;
  if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (j = !0), !j)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : Ne(21, p));
  const x = un(P, j, d, p);
  g && !P.light && un(P, g, void 0, "light"), u && !P.dark && un(P, u, void 0, "dark");
  let C = {
    defaultColorScheme: p,
    ...x,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: f,
    getCssVar: m,
    colorSchemes: P,
    font: {
      ...Ys(x.typography),
      ...x.font
    },
    spacing: da(d.spacing)
  };
  Object.keys(C.colorSchemes).forEach((q) => {
    const l = C.colorSchemes[q].palette, R = (O) => {
      const F = O.split("-"), D = F[1], A = F[2];
      return m(O, l[D][A]);
    };
    if (l.mode === "light" && (v(l.common, "background", "#fff"), v(l.common, "onBackground", "#000")), l.mode === "dark" && (v(l.common, "background", "#000"), v(l.common, "onBackground", "#fff")), fa(l, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), l.mode === "light") {
      v(l.Alert, "errorColor", re(l.error.light, 0.6)), v(l.Alert, "infoColor", re(l.info.light, 0.6)), v(l.Alert, "successColor", re(l.success.light, 0.6)), v(l.Alert, "warningColor", re(l.warning.light, 0.6)), v(l.Alert, "errorFilledBg", R("palette-error-main")), v(l.Alert, "infoFilledBg", R("palette-info-main")), v(l.Alert, "successFilledBg", R("palette-success-main")), v(l.Alert, "warningFilledBg", R("palette-warning-main")), v(l.Alert, "errorFilledColor", Te(() => l.getContrastText(l.error.main))), v(l.Alert, "infoFilledColor", Te(() => l.getContrastText(l.info.main))), v(l.Alert, "successFilledColor", Te(() => l.getContrastText(l.success.main))), v(l.Alert, "warningFilledColor", Te(() => l.getContrastText(l.warning.main))), v(l.Alert, "errorStandardBg", oe(l.error.light, 0.9)), v(l.Alert, "infoStandardBg", oe(l.info.light, 0.9)), v(l.Alert, "successStandardBg", oe(l.success.light, 0.9)), v(l.Alert, "warningStandardBg", oe(l.warning.light, 0.9)), v(l.Alert, "errorIconColor", R("palette-error-main")), v(l.Alert, "infoIconColor", R("palette-info-main")), v(l.Alert, "successIconColor", R("palette-success-main")), v(l.Alert, "warningIconColor", R("palette-warning-main")), v(l.AppBar, "defaultBg", R("palette-grey-100")), v(l.Avatar, "defaultBg", R("palette-grey-400")), v(l.Button, "inheritContainedBg", R("palette-grey-300")), v(l.Button, "inheritContainedHoverBg", R("palette-grey-A100")), v(l.Chip, "defaultBorder", R("palette-grey-400")), v(l.Chip, "defaultAvatarColor", R("palette-grey-700")), v(l.Chip, "defaultIconColor", R("palette-grey-700")), v(l.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(l.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(l.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(l.LinearProgress, "primaryBg", oe(l.primary.main, 0.62)), v(l.LinearProgress, "secondaryBg", oe(l.secondary.main, 0.62)), v(l.LinearProgress, "errorBg", oe(l.error.main, 0.62)), v(l.LinearProgress, "infoBg", oe(l.info.main, 0.62)), v(l.LinearProgress, "successBg", oe(l.success.main, 0.62)), v(l.LinearProgress, "warningBg", oe(l.warning.main, 0.62)), v(l.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), v(l.Slider, "primaryTrack", oe(l.primary.main, 0.62)), v(l.Slider, "secondaryTrack", oe(l.secondary.main, 0.62)), v(l.Slider, "errorTrack", oe(l.error.main, 0.62)), v(l.Slider, "infoTrack", oe(l.info.main, 0.62)), v(l.Slider, "successTrack", oe(l.success.main, 0.62)), v(l.Slider, "warningTrack", oe(l.warning.main, 0.62));
      const O = wt(l.background.default, 0.8);
      v(l.SnackbarContent, "bg", O), v(l.SnackbarContent, "color", Te(() => l.getContrastText(O))), v(l.SpeedDialAction, "fabHoverBg", wt(l.background.paper, 0.15)), v(l.StepConnector, "border", R("palette-grey-400")), v(l.StepContent, "border", R("palette-grey-400")), v(l.Switch, "defaultColor", R("palette-common-white")), v(l.Switch, "defaultDisabledColor", R("palette-grey-100")), v(l.Switch, "primaryDisabledColor", oe(l.primary.main, 0.62)), v(l.Switch, "secondaryDisabledColor", oe(l.secondary.main, 0.62)), v(l.Switch, "errorDisabledColor", oe(l.error.main, 0.62)), v(l.Switch, "infoDisabledColor", oe(l.info.main, 0.62)), v(l.Switch, "successDisabledColor", oe(l.success.main, 0.62)), v(l.Switch, "warningDisabledColor", oe(l.warning.main, 0.62)), v(l.TableCell, "border", oe(Ct(l.divider, 1), 0.88)), v(l.Tooltip, "bg", Ct(l.grey[700], 0.92));
    }
    if (l.mode === "dark") {
      v(l.Alert, "errorColor", oe(l.error.light, 0.6)), v(l.Alert, "infoColor", oe(l.info.light, 0.6)), v(l.Alert, "successColor", oe(l.success.light, 0.6)), v(l.Alert, "warningColor", oe(l.warning.light, 0.6)), v(l.Alert, "errorFilledBg", R("palette-error-dark")), v(l.Alert, "infoFilledBg", R("palette-info-dark")), v(l.Alert, "successFilledBg", R("palette-success-dark")), v(l.Alert, "warningFilledBg", R("palette-warning-dark")), v(l.Alert, "errorFilledColor", Te(() => l.getContrastText(l.error.dark))), v(l.Alert, "infoFilledColor", Te(() => l.getContrastText(l.info.dark))), v(l.Alert, "successFilledColor", Te(() => l.getContrastText(l.success.dark))), v(l.Alert, "warningFilledColor", Te(() => l.getContrastText(l.warning.dark))), v(l.Alert, "errorStandardBg", re(l.error.light, 0.9)), v(l.Alert, "infoStandardBg", re(l.info.light, 0.9)), v(l.Alert, "successStandardBg", re(l.success.light, 0.9)), v(l.Alert, "warningStandardBg", re(l.warning.light, 0.9)), v(l.Alert, "errorIconColor", R("palette-error-main")), v(l.Alert, "infoIconColor", R("palette-info-main")), v(l.Alert, "successIconColor", R("palette-success-main")), v(l.Alert, "warningIconColor", R("palette-warning-main")), v(l.AppBar, "defaultBg", R("palette-grey-900")), v(l.AppBar, "darkBg", R("palette-background-paper")), v(l.AppBar, "darkColor", R("palette-text-primary")), v(l.Avatar, "defaultBg", R("palette-grey-600")), v(l.Button, "inheritContainedBg", R("palette-grey-800")), v(l.Button, "inheritContainedHoverBg", R("palette-grey-700")), v(l.Chip, "defaultBorder", R("palette-grey-700")), v(l.Chip, "defaultAvatarColor", R("palette-grey-300")), v(l.Chip, "defaultIconColor", R("palette-grey-300")), v(l.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(l.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(l.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(l.LinearProgress, "primaryBg", re(l.primary.main, 0.5)), v(l.LinearProgress, "secondaryBg", re(l.secondary.main, 0.5)), v(l.LinearProgress, "errorBg", re(l.error.main, 0.5)), v(l.LinearProgress, "infoBg", re(l.info.main, 0.5)), v(l.LinearProgress, "successBg", re(l.success.main, 0.5)), v(l.LinearProgress, "warningBg", re(l.warning.main, 0.5)), v(l.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), v(l.Slider, "primaryTrack", re(l.primary.main, 0.5)), v(l.Slider, "secondaryTrack", re(l.secondary.main, 0.5)), v(l.Slider, "errorTrack", re(l.error.main, 0.5)), v(l.Slider, "infoTrack", re(l.info.main, 0.5)), v(l.Slider, "successTrack", re(l.success.main, 0.5)), v(l.Slider, "warningTrack", re(l.warning.main, 0.5));
      const O = wt(l.background.default, 0.98);
      v(l.SnackbarContent, "bg", O), v(l.SnackbarContent, "color", Te(() => l.getContrastText(O))), v(l.SpeedDialAction, "fabHoverBg", wt(l.background.paper, 0.15)), v(l.StepConnector, "border", R("palette-grey-600")), v(l.StepContent, "border", R("palette-grey-600")), v(l.Switch, "defaultColor", R("palette-grey-300")), v(l.Switch, "defaultDisabledColor", R("palette-grey-600")), v(l.Switch, "primaryDisabledColor", re(l.primary.main, 0.55)), v(l.Switch, "secondaryDisabledColor", re(l.secondary.main, 0.55)), v(l.Switch, "errorDisabledColor", re(l.error.main, 0.55)), v(l.Switch, "infoDisabledColor", re(l.info.main, 0.55)), v(l.Switch, "successDisabledColor", re(l.success.main, 0.55)), v(l.Switch, "warningDisabledColor", re(l.warning.main, 0.55)), v(l.TableCell, "border", re(Ct(l.divider, 1), 0.68)), v(l.Tooltip, "bg", Ct(l.grey[700], 0.92));
    }
    Ce(l.background, "default"), Ce(l.background, "paper"), Ce(l.common, "background"), Ce(l.common, "onBackground"), Ce(l, "divider"), Object.keys(l).forEach((O) => {
      const F = l[O];
      O !== "tonalOffset" && F && typeof F == "object" && (F.main && v(l[O], "mainChannel", ot(it(F.main))), F.light && v(l[O], "lightChannel", ot(it(F.light))), F.dark && v(l[O], "darkChannel", ot(it(F.dark))), F.contrastText && v(l[O], "contrastTextChannel", ot(it(F.contrastText))), O === "text" && (Ce(l[O], "primary"), Ce(l[O], "secondary")), O === "action" && (F.active && Ce(l[O], "active"), F.selected && Ce(l[O], "selected")));
    });
  }), C = t.reduce((q, l) => be(q, l), C);
  const E = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: ua(C)
  }, {
    vars: I,
    generateThemeVars: B,
    generateStyleSheets: K
  } = Ms(C, E);
  return C.vars = I, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([q, l]) => {
    C[q] = l;
  }), C.generateThemeVars = B, C.generateStyleSheets = K, C.generateSpacing = function() {
    return Br(d.spacing, Pn(this));
  }, C.getColorSchemeSelector = Bs(c), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = s, C.unstable_sxConfig = {
    ...Kt,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, C.unstable_sx = function(l) {
    return Xe({
      sx: l,
      theme: this
    });
  }, C.toRuntimeSource = Gr, C;
}
function Er(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Dn({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ha(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, c = i || "light", f = o == null ? void 0 : o[c], d = {
    ...o,
    ...n ? {
      [c]: {
        ...typeof f != "boolean" && f,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Tn(e, ...t);
    let h = n;
    "palette" in e || d[c] && (d[c] !== !0 ? h = d[c].palette : c === "dark" && (h = {
      mode: "dark"
    }));
    const p = Tn({
      ...e,
      palette: h
    }, ...t);
    return p.defaultColorScheme = c, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, Er(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, Er(p, "light", d.light)), p;
  }
  return !n && !("light" in d) && c === "light" && (d.light = !0), ma({
    ...s,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Xr = ha(), Jr = "$$material";
function Mn() {
  const e = es(Xr);
  return process.env.NODE_ENV !== "production" && N.useDebugValue(e), e[Jr] || e;
}
function ga(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ya = (e) => ga(e) && e !== "classes", Le = cs({
  themeId: Jr,
  defaultTheme: Xr,
  rootShouldForwardProp: ya
});
process.env.NODE_ENV !== "production" && (a.node, a.object.isRequired);
function gt(e) {
  return Ns(e);
}
function ba(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Cn(e, t) {
  return Cn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Cn(e, t);
}
function va(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Cn(e, t);
}
const xr = {
  disabled: !1
};
var Ea = process.env.NODE_ENV !== "production" ? a.oneOfType([a.number, a.shape({
  enter: a.number,
  exit: a.number,
  appear: a.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && a.oneOfType([a.string, a.shape({
  enter: a.string,
  exit: a.string,
  active: a.string
}), a.shape({
  enter: a.string,
  enterDone: a.string,
  enterActive: a.string,
  exit: a.string,
  exitDone: a.string,
  exitActive: a.string
})]);
const Zr = rt.createContext(null);
var xa = function(t) {
  return t.scrollTop;
}, st = "unmounted", Me = "exited", Be = "entering", Ge = "entered", wn = "exiting", Se = /* @__PURE__ */ function(e) {
  va(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var s = o, c = s && !s.isMounting ? r.enter : r.appear, f;
    return i.appearStatus = null, r.in ? c ? (f = Me, i.appearStatus = Be) : f = Ge : r.unmountOnExit || r.mountOnEnter ? f = st : f = Me, i.state = {
      status: f
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === st ? {
      status: Me
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Be && s !== Ge && (i = Be) : (s === Be || s === Ge) && (i = wn);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, s, c;
    return i = s = c = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, c = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: c
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Be) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : Et.findDOMNode(this);
          s && xa(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Me && this.setState({
      status: st
    });
  }, n.performEnter = function(o) {
    var i = this, s = this.props.enter, c = this.context ? this.context.isMounting : o, f = this.props.nodeRef ? [c] : [Et.findDOMNode(this), c], d = f[0], h = f[1], p = this.getTimeouts(), m = c ? p.appear : p.enter;
    if (!o && !s || xr.disabled) {
      this.safeSetState({
        status: Ge
      }, function() {
        i.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, h), this.safeSetState({
      status: Be
    }, function() {
      i.props.onEntering(d, h), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: Ge
        }, function() {
          i.props.onEntered(d, h);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Et.findDOMNode(this);
    if (!i || xr.disabled) {
      this.safeSetState({
        status: Me
      }, function() {
        o.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: wn
    }, function() {
      o.props.onExiting(c), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: Me
        }, function() {
          o.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(c) {
      s && (s = !1, i.nextCallback = null, o(c));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : Et.findDOMNode(this), c = o == null && !this.props.addEndListener;
    if (!s || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var f = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], d = f[0], h = f[1];
      this.props.addEndListener(d, h);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === st)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var c = ba(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ rt.createElement(Zr.Provider, {
        value: null
      }, typeof s == "function" ? s(o, c) : rt.cloneElement(rt.Children.only(s), c))
    );
  }, t;
}(rt.Component);
Se.contextType = Zr;
Se.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: a.shape({
    current: typeof Element > "u" ? a.any : function(e, t, n, r, o, i) {
      var s = e[t];
      return a.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, n, r, o, i);
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
  children: a.oneOfType([a.func.isRequired, a.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: a.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: a.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: a.bool,
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
  appear: a.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: a.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: a.bool,
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
    var n = Ea;
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
  addEndListener: a.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: a.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: a.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: a.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: a.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: a.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: a.func
} : {};
function He() {
}
Se.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: He,
  onEntering: He,
  onEntered: He,
  onExit: He,
  onExiting: He,
  onExited: He
};
Se.UNMOUNTED = st;
Se.EXITED = Me;
Se.ENTERING = Be;
Se.ENTERED = Ge;
Se.EXITING = wn;
const eo = (e) => e.scrollTop;
function It(e, t) {
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
function On(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Ta = {
  entering: {
    opacity: 1,
    transform: On(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, fn = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Dt = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    easing: s,
    in: c,
    onEnter: f,
    onEntered: d,
    onEntering: h,
    onExit: p,
    onExited: m,
    onExiting: y,
    style: g,
    timeout: u = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: w = Se,
    ...P
  } = t, j = Ss(), x = N.useRef(), C = Mn(), E = N.useRef(null), I = Ie(E, Xt(i), n), B = (A) => (k) => {
    if (A) {
      const V = E.current;
      k === void 0 ? A(V) : A(V, k);
    }
  }, K = B(h), q = B((A, k) => {
    eo(A);
    const {
      duration: V,
      delay: ie,
      easing: pe
    } = It({
      style: g,
      timeout: u,
      easing: s
    }, {
      mode: "enter"
    });
    let T;
    u === "auto" ? (T = C.transitions.getAutoHeightDuration(A.clientHeight), x.current = T) : T = V, A.style.transition = [C.transitions.create("opacity", {
      duration: T,
      delay: ie
    }), C.transitions.create("transform", {
      duration: fn ? T : T * 0.666,
      delay: ie,
      easing: pe
    })].join(","), f && f(A, k);
  }), l = B(d), R = B(y), O = B((A) => {
    const {
      duration: k,
      delay: V,
      easing: ie
    } = It({
      style: g,
      timeout: u,
      easing: s
    }, {
      mode: "exit"
    });
    let pe;
    u === "auto" ? (pe = C.transitions.getAutoHeightDuration(A.clientHeight), x.current = pe) : pe = k, A.style.transition = [C.transitions.create("opacity", {
      duration: pe,
      delay: V
    }), C.transitions.create("transform", {
      duration: fn ? pe : pe * 0.666,
      delay: fn ? V : V || pe * 0.333,
      easing: ie
    })].join(","), A.style.opacity = 0, A.style.transform = On(0.75), p && p(A);
  }), F = B(m);
  return /* @__PURE__ */ S(w, {
    appear: o,
    in: c,
    nodeRef: E,
    onEnter: q,
    onEntered: l,
    onEntering: K,
    onExit: O,
    onExited: F,
    onExiting: R,
    addEndListener: (A) => {
      u === "auto" && j.start(x.current || 0, A), r && r(E.current, A);
    },
    timeout: u === "auto" ? null : u,
    ...P,
    children: (A, {
      ownerState: k,
      ...V
    }) => /* @__PURE__ */ N.cloneElement(i, {
      style: {
        opacity: 0,
        transform: On(0.75),
        visibility: A === "exited" && !c ? "hidden" : void 0,
        ...Ta[A],
        ...g,
        ...i.props.style
      },
      ref: I,
      ...V
    })
  });
});
process.env.NODE_ENV !== "production" && (Dt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: ht.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: a.oneOfType([a.oneOf(["auto"]), a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
Dt && (Dt.muiSupportAuto = !0);
function Sa(e) {
  const t = Pe(e);
  return t.body === e ? Je(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ct(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Tr(e) {
  return parseInt(Je(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ca(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Sr(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const c = !i.includes(s), f = !Ca(s);
    c && f && ct(s, o);
  });
}
function dn(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n;
}
function wa(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Sa(r)) {
      const s = Cs(Je(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Tr(r) + s}px`;
      const c = Pe(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (f) => {
        n.push({
          value: f.style.paddingRight,
          property: "padding-right",
          el: f
        }), f.style.paddingRight = `${Tr(f) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Pe(r).body;
    else {
      const s = r.parentElement, c = Je(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && c.getComputedStyle(s).overflowY === "scroll" ? s : r;
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
      property: c
    }) => {
      i ? s.style.setProperty(c, i) : s.style.removeProperty(c);
    });
  };
}
function Oa(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Ra {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ct(t.modalRef, !1);
    const o = Oa(n);
    Sr(n, t.mount, t.modalRef, o, !0);
    const i = dn(this.containers, (s) => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = dn(this.containers, (i) => i.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = wa(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = dn(this.containers, (s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ct(t.modalRef, n), Sr(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ct(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Pa = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Aa(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function $a(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Na(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || $a(e));
}
function ka(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Pa)).forEach((r, o) => {
    const i = Aa(r);
    i === -1 || !Na(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function _a() {
  return !0;
}
function Mt(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = ka,
    isEnabled: s = _a,
    open: c
  } = e, f = N.useRef(!1), d = N.useRef(null), h = N.useRef(null), p = N.useRef(null), m = N.useRef(null), y = N.useRef(!1), g = N.useRef(null), u = Ie(Xt(t), g), w = N.useRef(null);
  N.useEffect(() => {
    !c || !g.current || (y.current = !n);
  }, [n, c]), N.useEffect(() => {
    if (!c || !g.current)
      return;
    const x = Pe(g.current);
    return g.current.contains(x.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), y.current && g.current.focus()), () => {
      o || (p.current && p.current.focus && (f.current = !0, p.current.focus()), p.current = null);
    };
  }, [c]), N.useEffect(() => {
    if (!c || !g.current)
      return;
    const x = Pe(g.current), C = (B) => {
      w.current = B, !(r || !s() || B.key !== "Tab") && x.activeElement === g.current && B.shiftKey && (f.current = !0, h.current && h.current.focus());
    }, E = () => {
      var q, l;
      const B = g.current;
      if (B === null)
        return;
      if (!x.hasFocus() || !s() || f.current) {
        f.current = !1;
        return;
      }
      if (B.contains(x.activeElement) || r && x.activeElement !== d.current && x.activeElement !== h.current)
        return;
      if (x.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!y.current)
        return;
      let K = [];
      if ((x.activeElement === d.current || x.activeElement === h.current) && (K = i(g.current)), K.length > 0) {
        const R = !!((q = w.current) != null && q.shiftKey && ((l = w.current) == null ? void 0 : l.key) === "Tab"), O = K[0], F = K[K.length - 1];
        typeof O != "string" && typeof F != "string" && (R ? F.focus() : O.focus());
      } else
        B.focus();
    };
    x.addEventListener("focusin", E), x.addEventListener("keydown", C, !0);
    const I = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(I), x.removeEventListener("focusin", E), x.removeEventListener("keydown", C, !0);
    };
  }, [n, r, o, s, c, i]);
  const P = (x) => {
    p.current === null && (p.current = x.relatedTarget), y.current = !0, m.current = x.target;
    const C = t.props.onFocus;
    C && C(x);
  }, j = (x) => {
    p.current === null && (p.current = x.relatedTarget), y.current = !0;
  };
  return /* @__PURE__ */ se(N.Fragment, {
    children: [/* @__PURE__ */ S("div", {
      tabIndex: c ? 0 : -1,
      onFocus: j,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ N.cloneElement(t, {
      ref: u,
      onFocus: P
    }), /* @__PURE__ */ S("div", {
      tabIndex: c ? 0 : -1,
      onFocus: j,
      ref: h,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: ht,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: a.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: a.func,
  /**
   * If `true`, focus is locked.
   */
  open: a.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Mt.propTypes = Ur(Mt.propTypes));
function Ia(e) {
  return typeof e == "function" ? e() : e;
}
const Bt = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, c] = N.useState(null), f = Ie(/* @__PURE__ */ N.isValidElement(r) ? Xt(r) : null, n);
  if (bn(() => {
    i || c(Ia(o) || document.body);
  }, [o, i]), bn(() => {
    if (s && !i)
      return xn(n, s), () => {
        xn(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ N.isValidElement(r)) {
      const d = {
        ref: f
      };
      return /* @__PURE__ */ N.cloneElement(r, d);
    }
    return r;
  }
  return s && /* @__PURE__ */ Oo.createPortal(r, s);
});
process.env.NODE_ENV !== "production" && (Bt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: a.node,
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
  container: a.oneOfType([$t, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool
});
process.env.NODE_ENV !== "production" && (Bt.propTypes = Ur(Bt.propTypes));
const Bn = ks;
function Ze(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: c = !1,
    ...f
  } = t, {
    component: d,
    slots: h = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...m
  } = i, y = h[e] || r, g = Ps(p[e], o), {
    props: {
      component: u,
      ...w
    },
    internalRef: P
  } = Rs({
    className: n,
    ...f,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: g
  }), j = Ie(P, g == null ? void 0 : g.ref, t.ref), x = e === "root" ? u || d : u, C = Os(y, {
    ...e === "root" && !d && !h[e] && s,
    ...e !== "root" && !h[e] && s,
    ...w,
    ...x && !c && {
      as: x
    },
    ...x && c && {
      component: x
    },
    ref: j
  }, o);
  return [y, C];
}
const Da = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, to = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = Mn(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: c,
    easing: f,
    in: d,
    onEnter: h,
    onEntered: p,
    onEntering: m,
    onExit: y,
    onExited: g,
    onExiting: u,
    style: w,
    timeout: P = o,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: j = Se,
    ...x
  } = t, C = N.useRef(null), E = Ie(C, Xt(c), n), I = (D) => (A) => {
    if (D) {
      const k = C.current;
      A === void 0 ? D(k) : D(k, A);
    }
  }, B = I(m), K = I((D, A) => {
    eo(D);
    const k = It({
      style: w,
      timeout: P,
      easing: f
    }, {
      mode: "enter"
    });
    D.style.webkitTransition = r.transitions.create("opacity", k), D.style.transition = r.transitions.create("opacity", k), h && h(D, A);
  }), q = I(p), l = I(u), R = I((D) => {
    const A = It({
      style: w,
      timeout: P,
      easing: f
    }, {
      mode: "exit"
    });
    D.style.webkitTransition = r.transitions.create("opacity", A), D.style.transition = r.transitions.create("opacity", A), y && y(D);
  }), O = I(g);
  return /* @__PURE__ */ S(j, {
    appear: s,
    in: d,
    nodeRef: C,
    onEnter: K,
    onEntered: q,
    onEntering: B,
    onExit: R,
    onExited: O,
    onExiting: l,
    addEndListener: (D) => {
      i && i(C.current, D);
    },
    timeout: P,
    ...x,
    children: (D, {
      ownerState: A,
      ...k
    }) => /* @__PURE__ */ N.cloneElement(c, {
      style: {
        opacity: 0,
        visibility: D === "exited" && !d ? "hidden" : void 0,
        ...Da[D],
        ...w,
        ...c.props.style
      },
      ref: E,
      ...k
    })
  });
});
process.env.NODE_ENV !== "production" && (to.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: a.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: a.bool,
  /**
   * A single child content element.
   */
  children: ht.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: a.oneOfType([a.shape({
    enter: a.string,
    exit: a.string
  }), a.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: a.bool,
  /**
   * @ignore
   */
  onEnter: a.func,
  /**
   * @ignore
   */
  onEntered: a.func,
  /**
   * @ignore
   */
  onEntering: a.func,
  /**
   * @ignore
   */
  onExit: a.func,
  /**
   * @ignore
   */
  onExited: a.func,
  /**
   * @ignore
   */
  onExiting: a.func,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
function Ma(e) {
  return Fe("MuiBackdrop", e);
}
mt("MuiBackdrop", ["root", "invisible"]);
const Ba = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ut({
    root: ["root", n && "invisible"]
  }, Ma, t);
}, ja = Le("div", {
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
}), no = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = gt({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: c = !1,
    open: f,
    components: d = {},
    componentsProps: h = {},
    slotProps: p = {},
    slots: m = {},
    TransitionComponent: y,
    transitionDuration: g,
    ...u
  } = r, w = {
    ...r,
    component: s,
    invisible: c
  }, P = Ba(w), j = {
    transition: y,
    root: d.Root,
    ...m
  }, x = {
    ...h,
    ...p
  }, C = {
    slots: j,
    slotProps: x
  }, [E, I] = Ze("root", {
    elementType: ja,
    externalForwardedProps: C,
    className: Oe(P.root, i),
    ownerState: w
  }), [B, K] = Ze("transition", {
    elementType: to,
    externalForwardedProps: C,
    ownerState: w
  });
  return /* @__PURE__ */ S(B, {
    in: f,
    timeout: g,
    ...u,
    ...K,
    children: /* @__PURE__ */ S(E, {
      "aria-hidden": !0,
      ...I,
      classes: P,
      ref: n,
      children: o
    })
  });
});
process.env.NODE_ENV !== "production" && (no.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: a.shape({
    root: a.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: a.bool,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object]),
    transition: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType,
    transition: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: a.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: a.oneOfType([a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })])
});
function Fa(e) {
  return typeof e == "function" ? e() : e;
}
function La(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Cr = () => {
}, Ot = new Ra();
function Va(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: o = !1,
    onTransitionEnter: i,
    onTransitionExited: s,
    children: c,
    onClose: f,
    open: d,
    rootRef: h
  } = e, p = N.useRef({}), m = N.useRef(null), y = N.useRef(null), g = Ie(y, h), [u, w] = N.useState(!d), P = La(c);
  let j = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (j = !1);
  const x = () => Pe(m.current), C = () => (p.current.modalRef = y.current, p.current.mount = m.current, p.current), E = () => {
    Ot.mount(C(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, I = ur(() => {
    const A = Fa(t) || x().body;
    Ot.add(C(), A), y.current && E();
  }), B = () => Ot.isTopModal(C()), K = ur((A) => {
    m.current = A, A && (d && B() ? E() : y.current && ct(y.current, j));
  }), q = N.useCallback(() => {
    Ot.remove(C(), j);
  }, [j]);
  N.useEffect(() => () => {
    q();
  }, [q]), N.useEffect(() => {
    d ? I() : (!P || !o) && q();
  }, [d, q, P, o, I]);
  const l = (A) => (k) => {
    var V;
    (V = A.onKeyDown) == null || V.call(A, k), !(k.key !== "Escape" || k.which === 229 || // Wait until IME is settled.
    !B()) && (n || (k.stopPropagation(), f && f(k, "escapeKeyDown")));
  }, R = (A) => (k) => {
    var V;
    (V = A.onClick) == null || V.call(A, k), k.target === k.currentTarget && f && f(k, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const k = qr(e);
      delete k.onTransitionEnter, delete k.onTransitionExited;
      const V = {
        ...k,
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
        ...V,
        onKeyDown: l(V),
        ref: g
      };
    },
    getBackdropProps: (A = {}) => {
      const k = A;
      return {
        "aria-hidden": !0,
        ...k,
        onClick: R(k),
        open: d
      };
    },
    getTransitionProps: () => {
      const A = () => {
        w(!1), i && i();
      }, k = () => {
        w(!0), s && s(), o && q();
      };
      return {
        onEnter: lr(A, (c == null ? void 0 : c.props.onEnter) ?? Cr),
        onExited: lr(k, (c == null ? void 0 : c.props.onExited) ?? Cr)
      };
    },
    rootRef: g,
    portalRef: K,
    isTopModal: B,
    exited: u,
    hasTransition: P
  };
}
function za(e) {
  return Fe("MuiModal", e);
}
mt("MuiModal", ["root", "hidden", "backdrop"]);
function Wa(e) {
  return Fe("MuiSvgIcon", e);
}
mt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Ua = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${je(t)}`, `fontSize${je(n)}`]
  };
  return ut(o, Wa, r);
}, qa = Le("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${je(n.color)}`], t[`fontSize${je(n.fontSize)}`]];
  }
})(Bn(({
  theme: e
}) => {
  var t, n, r, o, i, s, c, f, d, h, p, m, y, g;
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
          fontSize: ((f = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : f.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((h = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : h.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var w, P;
        return {
          props: {
            color: u
          },
          style: {
            color: (P = (w = (e.vars ?? e).palette) == null ? void 0 : w[u]) == null ? void 0 : P.main
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
})), jt = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = gt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: c = "svg",
    fontSize: f = "medium",
    htmlColor: d,
    inheritViewBox: h = !1,
    titleAccess: p,
    viewBox: m = "0 0 24 24",
    ...y
  } = r, g = /* @__PURE__ */ N.isValidElement(o) && o.type === "svg", u = {
    ...r,
    color: s,
    component: c,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: h,
    viewBox: m,
    hasSvgAsChild: g
  }, w = {};
  h || (w.viewBox = m);
  const P = Ua(u);
  return /* @__PURE__ */ se(qa, {
    as: c,
    className: Oe(P.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...w,
    ...y,
    ...g && o.props,
    ownerState: u,
    children: [g ? o.props.children : o, p ? /* @__PURE__ */ S("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (jt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: a.oneOfType([a.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: a.oneOfType([a.oneOf(["inherit", "large", "medium", "small"]), a.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: a.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: a.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: a.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: a.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: a.string
});
jt.muiName = "SvgIcon";
function jn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ S(jt, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = jt.muiName, /* @__PURE__ */ N.memo(/* @__PURE__ */ N.forwardRef(n));
}
const Ya = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ut({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, za, r);
}, Ha = Le("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(Bn(({
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
}))), Ga = Le(no, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), ro = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = gt({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: o = Ga,
    BackdropProps: i,
    classes: s,
    className: c,
    closeAfterTransition: f = !1,
    children: d,
    container: h,
    component: p,
    components: m = {},
    componentsProps: y = {},
    disableAutoFocus: g = !1,
    disableEnforceFocus: u = !1,
    disableEscapeKeyDown: w = !1,
    disablePortal: P = !1,
    disableRestoreFocus: j = !1,
    disableScrollLock: x = !1,
    hideBackdrop: C = !1,
    keepMounted: E = !1,
    onBackdropClick: I,
    onClose: B,
    onTransitionEnter: K,
    onTransitionExited: q,
    open: l,
    slotProps: R = {},
    slots: O = {},
    // eslint-disable-next-line react/prop-types
    theme: F,
    ...D
  } = r, A = {
    ...r,
    closeAfterTransition: f,
    disableAutoFocus: g,
    disableEnforceFocus: u,
    disableEscapeKeyDown: w,
    disablePortal: P,
    disableRestoreFocus: j,
    disableScrollLock: x,
    hideBackdrop: C,
    keepMounted: E
  }, {
    getRootProps: k,
    getBackdropProps: V,
    getTransitionProps: ie,
    portalRef: pe,
    isTopModal: T,
    exited: $,
    hasTransition: z
  } = Va({
    ...A,
    rootRef: n
  }), L = {
    ...A,
    exited: $
  }, M = Ya(L), Y = {};
  if (d.props.tabIndex === void 0 && (Y.tabIndex = "-1"), z) {
    const {
      onEnter: b,
      onExited: U
    } = ie();
    Y.onEnter = b, Y.onExited = U;
  }
  const W = {
    ...D,
    slots: {
      root: m.Root,
      backdrop: m.Backdrop,
      ...O
    },
    slotProps: {
      ...y,
      ...R
    }
  }, [H, Q] = Ze("root", {
    elementType: Ha,
    externalForwardedProps: W,
    getSlotProps: k,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: L,
    className: Oe(c, M == null ? void 0 : M.root, !L.open && L.exited && (M == null ? void 0 : M.hidden))
  }), [X, _] = Ze("backdrop", {
    elementType: o,
    externalForwardedProps: W,
    additionalProps: i,
    getSlotProps: (b) => V({
      ...b,
      onClick: (U) => {
        I && I(U), b != null && b.onClick && b.onClick(U);
      }
    }),
    className: Oe(i == null ? void 0 : i.className, M == null ? void 0 : M.backdrop),
    ownerState: L
  }), G = Ie(i == null ? void 0 : i.ref, _.ref);
  return !E && !l && (!z || $) ? null : /* @__PURE__ */ S(Bt, {
    ref: pe,
    container: h,
    disablePortal: P,
    children: /* @__PURE__ */ se(H, {
      ...Q,
      children: [!C && o ? /* @__PURE__ */ S(X, {
        ..._,
        ref: G
      }) : null, /* @__PURE__ */ S(Mt, {
        disableEnforceFocus: u,
        disableAutoFocus: g,
        disableRestoreFocus: j,
        isEnabled: T,
        open: l,
        children: /* @__PURE__ */ N.cloneElement(d, Y)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (ro.propTypes = {
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
  BackdropComponent: a.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: a.object,
  /**
   * A single child content element.
   */
  children: ht.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: a.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: a.shape({
    Backdrop: a.elementType,
    Root: a.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
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
  container: a.oneOfType([$t, a.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: a.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: a.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: a.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: a.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: a.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: a.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: a.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: a.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: a.shape({
    backdrop: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    backdrop: a.elementType,
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object])
});
function Ka(e) {
  return Fe("MuiPaper", e);
}
mt("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Qa = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ut(i, Ka, o);
}, Xa = Le("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(Bn(({
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
}))), oo = /* @__PURE__ */ N.forwardRef(function(t, n) {
  var y;
  const r = gt({
    props: t,
    name: "MuiPaper"
  }), o = Mn(), {
    className: i,
    component: s = "div",
    elevation: c = 1,
    square: f = !1,
    variant: d = "elevation",
    ...h
  } = r, p = {
    ...r,
    component: s,
    elevation: c,
    square: f,
    variant: d
  }, m = Qa(p);
  return process.env.NODE_ENV !== "production" && o.shadows[c] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${c}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${c}]\` is defined.`].join(`
`)), /* @__PURE__ */ S(Xa, {
    as: s,
    ownerState: p,
    className: Oe(m.root, i),
    ref: n,
    ...h,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[c],
        ...o.vars && {
          "--Paper-overlay": (y = o.vars.overlays) == null ? void 0 : y[c]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${En("#fff", Sn(c))}, ${En("#fff", Sn(c))})`
        }
      },
      ...h.style
    }
  });
});
process.env.NODE_ENV !== "production" && (oo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: ft(_r, (e) => {
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
  square: a.bool,
  /**
   * @ignore
   */
  style: a.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: a.oneOfType([a.oneOf(["elevation", "outlined"]), a.string])
});
function Ja(e) {
  return Fe("MuiPopover", e);
}
mt("MuiPopover", ["root", "paper"]);
function wr(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Or(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Rr(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Pt(e) {
  return typeof e == "function" ? e() : e;
}
const Za = (e) => {
  const {
    classes: t
  } = e;
  return ut({
    root: ["root"],
    paper: ["paper"]
  }, Ja, t);
}, ec = Le(ro, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), tc = Le(oo, {
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
}), io = /* @__PURE__ */ N.forwardRef(function(t, n) {
  const r = gt({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: c,
    anchorReference: f = "anchorEl",
    children: d,
    className: h,
    container: p,
    elevation: m = 8,
    marginThreshold: y = 16,
    open: g,
    PaperProps: u = {},
    slots: w = {},
    slotProps: P = {},
    transformOrigin: j = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: x = Dt,
    transitionDuration: C = "auto",
    TransitionProps: {
      onEntering: E,
      ...I
    } = {},
    disableScrollLock: B = !1,
    ...K
  } = r, q = (P == null ? void 0 : P.paper) ?? u, l = N.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: f,
    elevation: m,
    marginThreshold: y,
    externalPaperSlotProps: q,
    transformOrigin: j,
    TransitionComponent: x,
    transitionDuration: C,
    TransitionProps: I
  }, O = Za(R), F = N.useCallback(() => {
    if (f === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (c || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), c;
    const _ = Pt(i), G = _ && _.nodeType === 1 ? _ : Pe(l.current).body, b = G.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const U = G.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && U.top === 0 && U.left === 0 && U.right === 0 && U.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: b.top + wr(b, s.vertical),
      left: b.left + Or(b, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, c, f]), D = N.useCallback((_) => ({
    vertical: wr(_, j.vertical),
    horizontal: Or(_, j.horizontal)
  }), [j.horizontal, j.vertical]), A = N.useCallback((_) => {
    const G = {
      width: _.offsetWidth,
      height: _.offsetHeight
    }, b = D(G);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Rr(b)
      };
    const U = F();
    let ee = U.top - b.vertical, me = U.left - b.horizontal;
    const De = ee + G.height, yt = me + G.width, xe = Je(Pt(i)), Ae = xe.innerHeight - y, bt = xe.innerWidth - y;
    if (y !== null && ee < y) {
      const he = ee - y;
      ee -= he, b.vertical += he;
    } else if (y !== null && De > Ae) {
      const he = De - Ae;
      ee -= he, b.vertical += he;
    }
    if (process.env.NODE_ENV !== "production" && G.height > Ae && G.height && Ae && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${G.height - Ae}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), y !== null && me < y) {
      const he = me - y;
      me -= he, b.horizontal += he;
    } else if (yt > bt) {
      const he = yt - bt;
      me -= he, b.horizontal += he;
    }
    return {
      top: `${Math.round(ee)}px`,
      left: `${Math.round(me)}px`,
      transformOrigin: Rr(b)
    };
  }, [i, f, F, D, y]), [k, V] = N.useState(g), ie = N.useCallback(() => {
    const _ = l.current;
    if (!_)
      return;
    const G = A(_);
    G.top !== null && _.style.setProperty("top", G.top), G.left !== null && (_.style.left = G.left), _.style.transformOrigin = G.transformOrigin, V(!0);
  }, [A]);
  N.useEffect(() => (B && window.addEventListener("scroll", ie), () => window.removeEventListener("scroll", ie)), [i, B, ie]);
  const pe = (_, G) => {
    E && E(_, G), ie();
  }, T = () => {
    V(!1);
  };
  N.useEffect(() => {
    g && ie();
  }), N.useImperativeHandle(o, () => g ? {
    updatePosition: () => {
      ie();
    }
  } : null, [g, ie]), N.useEffect(() => {
    if (!g)
      return;
    const _ = vs(() => {
      ie();
    }), G = Je(i);
    return G.addEventListener("resize", _), () => {
      _.clear(), G.removeEventListener("resize", _);
    };
  }, [i, g, ie]);
  let $ = C;
  C === "auto" && !x.muiSupportAuto && ($ = void 0);
  const z = p || (i ? Pe(Pt(i)).body : void 0), L = {
    slots: w,
    slotProps: {
      ...P,
      paper: q
    }
  }, [M, Y] = Ze("paper", {
    elementType: tc,
    externalForwardedProps: L,
    additionalProps: {
      elevation: m,
      className: Oe(O.paper, q == null ? void 0 : q.className),
      style: k ? q.style : {
        ...q.style,
        opacity: 0
      }
    },
    ownerState: R
  }), [W, {
    slotProps: H,
    ...Q
  }] = Ze("root", {
    elementType: ec,
    externalForwardedProps: L,
    additionalProps: {
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: z,
      open: g
    },
    ownerState: R,
    className: Oe(O.root, h)
  }), X = Ie(l, Y.ref);
  return /* @__PURE__ */ S(W, {
    ...Q,
    ...!Vo(W) && {
      slotProps: H,
      disableScrollLock: B
    },
    ...K,
    ref: n,
    children: /* @__PURE__ */ S(x, {
      appear: !0,
      in: g,
      onEntering: pe,
      onExited: T,
      timeout: $,
      ...I,
      children: /* @__PURE__ */ S(M, {
        ...Y,
        ref: X,
        children: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (io.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Mo,
  /**
   * An HTML element, [PopoverVirtualElement](https://mui.com/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: ft(a.oneOfType([$t, a.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Pt(e.anchorEl);
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
  anchorOrigin: a.shape({
    horizontal: a.oneOfType([a.oneOf(["center", "left", "right"]), a.number]).isRequired,
    vertical: a.oneOfType([a.oneOf(["bottom", "center", "top"]), a.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: a.shape({
    left: a.number.isRequired,
    top: a.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: a.oneOf(["anchorEl", "anchorPosition", "none"]),
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
  BackdropComponent: a.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.root.slotProps.backdrop` instead.
   */
  BackdropProps: a.object,
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([$t, a.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: a.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: _r,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: a.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: a.func,
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: a.shape({
    component: Fo
  }),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: a.shape({
    paper: a.oneOfType([a.func, a.object]),
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: a.shape({
    paper: a.elementType,
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
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
  transformOrigin: a.shape({
    horizontal: a.oneOfType([a.oneOf(["center", "left", "right"]), a.number]).isRequired,
    vertical: a.oneOfType([a.oneOf(["bottom", "center", "top"]), a.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: a.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: a.oneOfType([a.oneOf(["auto"]), a.number, a.shape({
    appear: a.number,
    enter: a.number,
    exit: a.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: a.object
});
const nc = jn(/* @__PURE__ */ S("path", {
  d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
}), "Tune"), pn = {
  flex: { xs: "1 1 100%", sm: 1 },
  minWidth: 0
}, rc = ({
  columnsOperator: e,
  handleApplyFilters: t,
  defaultOperators: n,
  defaultValues: r,
  defaultOperator: o
}) => {
  const [i, s] = ge([
    { column: "", operator: "", value: "" }
  ]), [c, f] = ge("AND"), d = () => {
    s((m) => [...m, { column: "", operator: "", value: "" }]);
  }, h = (m) => {
    s((y) => y.filter((g, u) => u !== m));
  }, p = (m, y, g) => {
    s(
      (u) => u.map(
        (w, P) => P === m ? { ...w, [y]: g } : w
      )
    );
  };
  return Ke(() => {
    r && Array.isArray(r) && r.length && s(r);
  }, [r]), Ke(() => {
    f(o);
  }, [o]), /* @__PURE__ */ se(
    fe,
    {
      sx: {
        // Fill whatever width the parent popover paper gives us. The paper
        // itself enforces sensible mobile/desktop caps in index.jsx, so we
        // don't add a second cap here — that's what was previously squeezing
        // the fields to ~200px each on wide screens.
        width: "100%",
        padding: { xs: 1, sm: 2 },
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ se(
          fe,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
              mb: 2
            },
            children: [
              /* @__PURE__ */ S(ue, { variant: "body1", children: "Combine queries with:" }),
              /* @__PURE__ */ S(
                Zt,
                {
                  size: "small",
                  value: c,
                  onChange: (m) => f(m.target.value),
                  sx: { minWidth: 120 },
                  children: n.map((m) => /* @__PURE__ */ S(et, { value: m, children: m }, m))
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ S(fo, { spacing: 1.5, children: i.map((m, y) => {
          var g;
          return /* @__PURE__ */ se(
            fe,
            {
              sx: {
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 1, sm: 1.5 },
                alignItems: { xs: "stretch", sm: "center" },
                py: 0.5,
                borderBottom: { xs: 1, sm: 0 },
                borderColor: "divider"
              },
              children: [
                /* @__PURE__ */ se(
                  Zt,
                  {
                    size: "small",
                    value: m.column,
                    onChange: (u) => p(y, "column", u.target.value),
                    displayEmpty: !0,
                    fullWidth: !0,
                    sx: pn,
                    children: [
                      /* @__PURE__ */ S(et, { value: "", disabled: !0, children: "Select Column" }),
                      Object.keys(e).map((u) => /* @__PURE__ */ S(et, { value: u, children: u }, u))
                    ]
                  }
                ),
                /* @__PURE__ */ se(
                  Zt,
                  {
                    size: "small",
                    value: m.operator,
                    onChange: (u) => p(y, "operator", u.target.value),
                    displayEmpty: !0,
                    disabled: !m.column,
                    fullWidth: !0,
                    sx: pn,
                    children: [
                      /* @__PURE__ */ S(et, { value: "", disabled: !0, children: "Select Operator" }),
                      m.column && ((g = e[m.column]) == null ? void 0 : g.operators.map((u) => /* @__PURE__ */ S(et, { value: u, children: u }, u)))
                    ]
                  }
                ),
                /* @__PURE__ */ S(
                  po,
                  {
                    size: "small",
                    value: m.value,
                    onChange: (u) => p(y, "value", u.target.value),
                    placeholder: "Enter value",
                    fullWidth: !0,
                    sx: pn
                  }
                ),
                /* @__PURE__ */ S(hn, { title: "Delete Query", children: /* @__PURE__ */ S(
                  Ft,
                  {
                    onClick: () => h(y),
                    color: "error",
                    size: "small",
                    sx: {
                      // On mobile, anchor the trash icon to the right of the
                      // stacked column so it doesn't take a full row of its own.
                      alignSelf: { xs: "flex-end", sm: "center" },
                      flex: { sm: "0 0 auto" }
                    },
                    children: /* @__PURE__ */ S(Co, {})
                  }
                ) })
              ]
            },
            y
          );
        }) }),
        /* @__PURE__ */ se(
          fe,
          {
            sx: {
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mt: 2.5
            },
            children: [
              /* @__PURE__ */ S(
                At,
                {
                  startIcon: /* @__PURE__ */ S(wo, {}),
                  onClick: d,
                  sx: { flex: { xs: "1 1 100%", sm: "0 0 auto" } },
                  children: "Add Query"
                }
              ),
              /* @__PURE__ */ S(
                At,
                {
                  variant: "contained",
                  color: "primary",
                  onClick: () => t(c, i),
                  sx: { flex: { xs: "1 1 100%", sm: "0 0 auto" } },
                  children: "Apply Filters"
                }
              )
            ]
          }
        )
      ]
    }
  );
}, oc = jn(/* @__PURE__ */ S("path", {
  d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
}), "HelpOutline"), ic = jn(/* @__PURE__ */ S("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function sc(e, t, n) {
  const r = [], o = e.split(/\s+AND\s+|\s+OR\s+/i), i = [...t].sort((s, c) => c.length - s.length);
  return o.forEach((s) => {
    const c = s.trim();
    if (!c) return;
    let f = n.find((p) => c.startsWith(p + " ")), d, h;
    if (f)
      d = i.find(
        (p) => c.slice(f.length).trim().startsWith(p)
      ), d && (h = c.slice(f.length).trim().slice(d.length).trim());
    else {
      const p = c.indexOf(" ");
      if (p === -1) return;
      f = c.slice(0, p);
      const m = c.slice(p + 1).trim();
      d = i.find((y) => m.startsWith(y)), d && (h = m.slice(d.length).trim());
    }
    f && d && h !== void 0 && r.push({ column: f, operator: d, value: h });
  }), r;
}
function ac(e, t) {
  return e.map((n) => `${n.column} ${n.operator} ${n.value}`).join(` ${t} `);
}
const cc = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function lc(e, t) {
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
function uc(e, t, n, r) {
  if (!e) return [];
  const o = /"[^"]*"?|\s+|\S+/g, i = e.match(o) || [], s = t || [], c = n || [], f = (r || []).map((p) => p.toUpperCase()), d = [];
  let h = "column";
  for (const p of i) {
    if (/^\s+$/.test(p)) {
      d.push({ type: "whitespace", text: p });
      continue;
    }
    let m;
    h === "column" ? (m = s.includes(p) ? "column" : "customColumn", h = "operator") : h === "operator" ? (m = c.includes(p) ? "operator" : "unknownOperator", h = "value") : h === "value" ? (m = "value", h = "logical") : f.includes(p.toUpperCase()) ? (m = "logical", h = "column") : m = "value", d.push({ type: m, text: p });
  }
  return d;
}
const fc = {
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
}, dc = 'Type a query like: column operator value — e.g. name == "John"', pc = ({ open: e, onClose: t }) => /* @__PURE__ */ se(Eo, { open: e, onClose: t, maxWidth: "md", fullWidth: !0, scroll: "paper", children: [
  /* @__PURE__ */ se(xo, { sx: { pr: 6 }, children: [
    "How to Use the Query Search",
    /* @__PURE__ */ S(
      Ft,
      {
        onClick: t,
        size: "small",
        sx: { position: "absolute", right: 12, top: 12 },
        "aria-label": "close",
        children: /* @__PURE__ */ S(ic, { fontSize: "small" })
      }
    )
  ] }),
  /* @__PURE__ */ se(To, { dividers: !0, children: [
    /* @__PURE__ */ S(ue, { variant: "h6", gutterBottom: !0, children: "Overview" }),
    /* @__PURE__ */ se(ue, { variant: "body2", paragraph: !0, children: [
      "The query search box lets you filter data using a simple, readable query language. Type your conditions directly into the search field and press ",
      /* @__PURE__ */ S("strong", { children: "Apply" }),
      " to run the query. Suggestions will appear as you type to guide you through valid columns, operators, and logical connectors."
    ] }),
    /* @__PURE__ */ S(tt, { sx: { my: 2 } }),
    /* @__PURE__ */ S(ue, { variant: "h6", gutterBottom: !0, children: "Basic Syntax" }),
    /* @__PURE__ */ S(ue, { variant: "body2", paragraph: !0, children: "Every condition follows this pattern:" }),
    /* @__PURE__ */ S(
      fe,
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
          fontSize: "0.875rem"
        },
        children: "column  operator  value"
      }
    ),
    /* @__PURE__ */ S(ue, { variant: "body2", paragraph: !0, children: "Each part is separated by a single space:" }),
    /* @__PURE__ */ se(fe, { component: "ul", sx: { mt: 0, mb: 2, pl: 3 }, children: [
      /* @__PURE__ */ se(ue, { component: "li", variant: "body2", gutterBottom: !0, children: [
        /* @__PURE__ */ S("strong", { children: "column" }),
        " — the field you want to filter on (e.g.",
        " ",
        /* @__PURE__ */ S(Ve, { label: "name", size: "small", sx: { fontFamily: "monospace" } }),
        ",",
        " ",
        /* @__PURE__ */ S(Ve, { label: "duration", size: "small", sx: { fontFamily: "monospace" } }),
        ")."
      ] }),
      /* @__PURE__ */ se(ue, { component: "li", variant: "body2", gutterBottom: !0, children: [
        /* @__PURE__ */ S("strong", { children: "operator" }),
        " — the comparison to apply (e.g.",
        " ",
        /* @__PURE__ */ S(Ve, { label: "==", size: "small", sx: { fontFamily: "monospace" } }),
        ",",
        " ",
        /* @__PURE__ */ S(
          Ve,
          {
            label: "contains",
            size: "small",
            sx: { fontFamily: "monospace" }
          }
        ),
        ",",
        " ",
        /* @__PURE__ */ S(Ve, { label: ">", size: "small", sx: { fontFamily: "monospace" } }),
        ")."
      ] }),
      /* @__PURE__ */ se(ue, { component: "li", variant: "body2", gutterBottom: !0, children: [
        /* @__PURE__ */ S("strong", { children: "value" }),
        " — what you are comparing against. Wrap values that contain spaces in double quotes:",
        " ",
        /* @__PURE__ */ S(
          Ve,
          {
            label: '"John Doe"',
            size: "small",
            sx: { fontFamily: "monospace" }
          }
        ),
        "."
      ] })
    ] }),
    /* @__PURE__ */ S(tt, { sx: { my: 2 } }),
    /* @__PURE__ */ S(ue, { variant: "h6", gutterBottom: !0, children: "Combining Conditions" }),
    /* @__PURE__ */ se(ue, { variant: "body2", paragraph: !0, children: [
      "Use ",
      /* @__PURE__ */ S("strong", { children: "AND" }),
      " or ",
      /* @__PURE__ */ S("strong", { children: "OR" }),
      " (uppercase) to join multiple conditions:"
    ] }),
    /* @__PURE__ */ S(
      fe,
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
          fontSize: "0.875rem"
        },
        children: `condition1 AND condition2 AND condition3
condition1 OR  condition2`
      }
    ),
    /* @__PURE__ */ se(ue, { variant: "body2", sx: { color: "error.main" }, paragraph: !0, children: [
      "⚠ You cannot mix ",
      /* @__PURE__ */ S("strong", { children: "AND" }),
      " and ",
      /* @__PURE__ */ S("strong", { children: "OR" }),
      " in the same query. Pick one logical operator and use it consistently."
    ] }),
    /* @__PURE__ */ S(tt, { sx: { my: 2 } }),
    /* @__PURE__ */ S(ue, { variant: "h6", gutterBottom: !0, children: "Examples" }),
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
    ].map(({ label: n, code: r }) => /* @__PURE__ */ se(fe, { mb: 1.5, children: [
      /* @__PURE__ */ S(
        ue,
        {
          variant: "caption",
          sx: { color: "text.secondary", textTransform: "uppercase", letterSpacing: 0.5 },
          children: n
        }
      ),
      /* @__PURE__ */ S(
        fe,
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
            fontSize: "0.875rem"
          },
          children: r
        }
      )
    ] }, n)),
    /* @__PURE__ */ S(tt, { sx: { my: 2 } }),
    /* @__PURE__ */ S(ue, { variant: "h6", gutterBottom: !0, children: "Tips" }),
    /* @__PURE__ */ S(fe, { component: "ul", sx: { mt: 0, mb: 1, pl: 3 }, children: [
      "Start typing a column name and select it from the suggestion list.",
      "After picking a column, the suggestion list will show valid operators for that column.",
      "After entering a value, AND / OR will appear in the suggestion list.",
      'Wrap multi-word values in double quotes — e.g. "John Doe".',
      "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
      "You can also build queries using the advanced filter panel (click the ⊟ icon)."
    ].map((n) => /* @__PURE__ */ S(ue, { component: "li", variant: "body2", gutterBottom: !0, children: n }, n)) }),
    /* @__PURE__ */ S(tt, { sx: { my: 2 } }),
    /* @__PURE__ */ S(ue, { variant: "h6", gutterBottom: !0, children: "Syntax Highlighting" }),
    /* @__PURE__ */ S(ue, { variant: "body2", paragraph: !0, children: "As you type, each part of the query is colorized to help you spot mistakes at a glance:" }),
    /* @__PURE__ */ S(fe, { component: "ul", sx: { mt: 0, mb: 1, pl: 3 }, children: [
      { color: "#1976d2", label: "Blue", desc: "Known column" },
      { color: "#0288d1", label: "Light blue", desc: "Custom / unknown column" },
      { color: "#d32f2f", label: "Red", desc: "Valid operator" },
      { color: "#9e9e9e", label: "Grey", desc: "Unrecognized operator (still typing)" },
      { color: "#7b1fa2", label: "Purple", desc: "Logical connector — AND / OR" },
      { color: "inherit", label: "Default", desc: "Value" }
    ].map(({ color: n, label: r, desc: o }) => /* @__PURE__ */ se(ue, { component: "li", variant: "body2", gutterBottom: !0, children: [
      /* @__PURE__ */ S(
        fe,
        {
          component: "span",
          sx: {
            display: "inline-block",
            width: 12,
            height: 12,
            borderRadius: "50%",
            bgcolor: n === "inherit" ? "text.primary" : n,
            mr: 1,
            verticalAlign: "middle"
          }
        }
      ),
      /* @__PURE__ */ S("strong", { style: { color: n === "inherit" ? void 0 : n }, children: r }),
      " ",
      "— ",
      o
    ] }, r)) })
  ] }),
  /* @__PURE__ */ S(So, { children: /* @__PURE__ */ S(At, { onClick: t, variant: "contained", disableElevation: !0, children: "Got it" }) })
] }), mc = ({
  columnsOperator: e,
  onSuggestionClick: t,
  defaultOperators: n,
  onApplyClicked: r,
  defaultValues: o,
  defaultOperator: i,
  relatedOperators: s,
  placeholder: c = "",
  endAdornment: f,
  sx: d = {},
  ...h
}) => {
  const {
    root: p,
    inputRow: m,
    input: y,
    applyButton: g,
    helpButton: u,
    popper: w,
    suggestionsBox: P,
    suggestionsList: j,
    suggestionItem: x,
    tokenColors: C
  } = d, E = mn(
    () => ({ ...fc, ...C || {} }),
    [C]
  ), [I, B] = ge(null), [K, q] = ge([]), [l, R] = ge([]), [O, F] = ge(""), [D, A] = ge(!0), [k, V] = ge(null), [ie, pe] = ge(!1), [T, $] = ge(0), z = Jt(), L = Jt(null), M = Jt(null);
  Ke(() => {
    if (o && Array.isArray(o) && o.length && i) {
      const b = ac(o, i);
      F(b);
    }
  }, [i, o]), Ke(() => {
    const b = Object.keys(e), U = Array.from(
      /* @__PURE__ */ new Set([
        ...b.flatMap((so) => {
          var Fn;
          return ((Fn = e[so]) == null ? void 0 : Fn.operators) || [];
        }),
        ...s || []
      ])
    ), ee = O.trim().split(/\s+/).filter(Boolean), me = ee[ee.length - 1] || "", De = ee[ee.length - 2] || "", yt = !De || n.includes(De);
    let xe;
    !O.trim() || n.includes(me) ? xe = b : b.includes(me) ? xe = e[me].operators : yt ? xe = U : (b.includes(De) && e[De].operators.includes(me) || U.includes(me), xe = n), q(xe), R(xe);
    const Ae = U.map(cc).join("|"), bt = new RegExp(
      `^(\\S+)\\s+(${Ae})\\s+(".+?"|\\S+)(?:\\s+(AND|OR)\\s+(\\S+)\\s+(${Ae})\\s+(".+?"|\\S+))*$`,
      "i"
    ), he = lc(O, bt);
    A(he.isValid), V(he.error);
  }, [O, e, n, s]), Ke(() => {
    const b = M.current;
    if (!b || typeof ResizeObserver > "u") return;
    const U = () => $(b.offsetWidth || 0);
    U();
    const ee = new ResizeObserver(U);
    return ee.observe(b), () => ee.disconnect();
  }, [f, O, D]);
  const Y = (b) => {
    const U = b.target.value;
    F(U), R(
      K.filter(
        (ee) => ee.toLowerCase().includes(U.toLowerCase())
      )
    ), B(z.current);
  }, W = (b) => {
    L.current && (L.current.scrollLeft = b.target.scrollLeft);
  }, H = mn(
    () => uc(
      O,
      Object.keys(e || {}),
      Array.from(
        /* @__PURE__ */ new Set([
          ...Object.values(e || {}).flatMap(
            (b) => (b == null ? void 0 : b.operators) || []
          ),
          ...s || []
        ])
      ),
      n || []
    ),
    [O, e, s, n]
  ), Q = (b) => {
    F((U) => {
      const ee = U.trimEnd();
      return ee ? `${ee} ${b} ` : `${b} `;
    }), t == null || t(b), setTimeout(() => {
      const U = z.current;
      if (U) {
        const ee = U.value.length;
        U.setSelectionRange(ee, ee), U.focus();
      }
    }, 0);
  }, X = !!O && !D && !!k, _ = X ? k : O ? "" : dc, G = X ? void 0 : O ? !1 : void 0;
  return /* @__PURE__ */ se(fe, { width: "100%", sx: p, children: [
    /* @__PURE__ */ S(fe, { display: "flex", sx: m, children: /* @__PURE__ */ se(fe, { sx: { position: "relative", flex: 1, minWidth: 0 }, children: [
      /* @__PURE__ */ S(
        fe,
        {
          ref: L,
          "aria-hidden": "true",
          sx: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            // Stop short of the endAdornment block (help icon + Apply button
            // + any caller-provided adornment) so colored tokens never paint
            // behind the buttons when the query overflows horizontally.
            right: `${T}px`,
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
            borderRadius: "4px"
          },
          children: H.map(
            (b, U) => b.type === "whitespace" ? /* @__PURE__ */ S("span", { children: b.text }, U) : /* @__PURE__ */ S(
              "span",
              {
                style: {
                  color: E[b.type] || "inherit",
                  fontWeight: b.type === "logical" || b.type === "operator" ? 600 : 400
                },
                children: b.text
              },
              U
            )
          )
        }
      ),
      /* @__PURE__ */ S(
        hn,
        {
          title: _,
          open: G,
          placement: "top-start",
          arrow: !0,
          componentsProps: {
            tooltip: {
              sx: X ? {
                bgcolor: "error.main",
                color: "error.contrastText",
                fontSize: "0.75rem",
                maxWidth: 360
              } : {
                bgcolor: "info.dark",
                color: "common.white",
                fontSize: "0.75rem",
                maxWidth: 360
              }
            },
            arrow: {
              sx: { color: X ? "error.main" : "info.dark" }
            }
          },
          children: /* @__PURE__ */ S(
            mo,
            {
              ...h,
              placeholder: c,
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
                  caretColor: (b) => b.palette.text.primary,
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
              inputRef: z,
              inputProps: { onScroll: W },
              value: O,
              onChange: Y,
              onFocus: () => B(z.current),
              onBlur: () => setTimeout(() => B(null), 100),
              error: O ? !D : !1,
              endAdornment: /* @__PURE__ */ S(ho, { position: "end", children: /* @__PURE__ */ se(
                fe,
                {
                  ref: M,
                  sx: { display: "flex", alignItems: "center", gap: 0.5 },
                  children: [
                    /* @__PURE__ */ S(hn, { title: "Query syntax help", placement: "top", children: /* @__PURE__ */ S(
                      Ft,
                      {
                        onClick: () => pe(!0),
                        "aria-label": "Query syntax help",
                        size: "small",
                        edge: f ? !1 : "end",
                        onMouseDown: (b) => b.preventDefault(),
                        sx: u,
                        children: /* @__PURE__ */ S(oc, { fontSize: "small" })
                      }
                    ) }),
                    f,
                    /* @__PURE__ */ S(
                      At,
                      {
                        disabled: !O || !D,
                        onClick: () => r(O),
                        onMouseDown: (b) => b.preventDefault(),
                        size: "small",
                        sx: g,
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
    /* @__PURE__ */ S(
      go,
      {
        open: !!I,
        anchorEl: I,
        placement: "bottom-start",
        sx: { zIndex: 1300, ...w },
        children: /* @__PURE__ */ S(
          fe,
          {
            sx: {
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              width: "300px",
              zIndex: 1300,
              ...P
            },
            children: /* @__PURE__ */ S(yo, { dense: !0, sx: j, children: l.map((b, U) => /* @__PURE__ */ S(bo, { disablePadding: !0, children: /* @__PURE__ */ S(
              vo,
              {
                onMouseDown: (ee) => ee.preventDefault(),
                onClick: () => Q(b),
                sx: x,
                children: /* @__PURE__ */ S(ue, { variant: "body2", children: b })
              }
            ) }, U)) })
          }
        )
      }
    ),
    /* @__PURE__ */ S(pc, { open: ie, onClose: () => pe(!1) })
  ] });
};
function Sc({
  columnsOperator: e = {},
  defaultOperators: t = [],
  relatedOperators: n = [],
  handleApply: r,
  placeholder: o = "",
  sx: i = {}
}) {
  const {
    root: s,
    textBoxContainer: c,
    textBox: f,
    iconButton: d,
    popover: h,
    popoverContent: p,
    title: m
  } = i, [y, g] = ge(null), [u, w] = ge([]), [P, j] = ge("AND"), [x, C] = ge(
    e
  );
  Ke(() => {
    C(e);
  }, [e]);
  const E = mn(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...Object.values(e).flatMap(
          (O) => (O == null ? void 0 : O.operators) || []
        ),
        ...n || []
      ])
    ),
    [e, n]
  ), I = (O) => {
    g(O.currentTarget);
  }, B = () => {
    g(null);
  }, K = (O) => {
    const F = Object.keys(x), D = sc(O, E, F), A = {};
    D.forEach((V) => {
      V.column && !x[V.column] && !A[V.column] && (A[V.column] = { operators: E });
    }), Object.keys(A).length && C((V) => ({ ...V, ...A }));
    const k = t.find((V) => O.includes(` ${V} `)) || null;
    w(D), r && r(D, k);
  }, q = (O, F) => {
    j(O), w(F), r && r(F, O);
  }, l = !!y, R = l ? "simple-popover" : void 0;
  return /* @__PURE__ */ se(fe, { sx: s, children: [
    /* @__PURE__ */ S(
      fe,
      {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        width: "100%",
        sx: c,
        children: /* @__PURE__ */ S(
          mc,
          {
            columnsOperator: x,
            defaultOperators: t,
            onApplyClicked: K,
            defaultValues: u,
            defaultOperator: P,
            relatedOperators: n,
            placeholder: o,
            sx: f,
            endAdornment: /* @__PURE__ */ S(
              Ft,
              {
                "aria-describedby": R,
                onClick: I,
                size: "small",
                onMouseDown: (O) => O.preventDefault(),
                sx: d,
                children: /* @__PURE__ */ S(nc, { fontSize: "small" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ S(
      io,
      {
        id: R,
        open: l,
        anchorEl: y,
        onClose: B,
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
              boxSizing: "border-box"
            }
          }
        },
        sx: { ...h },
        children: /* @__PURE__ */ se(fe, { sx: { padding: { xs: 1.5, sm: 2 }, ...p }, children: [
          /* @__PURE__ */ S(ue, { variant: "h6", sx: m, children: "Query Builder" }),
          /* @__PURE__ */ S(
            rc,
            {
              columnsOperator: x,
              handleApplyFilters: q,
              defaultOperators: t,
              defaultValues: u,
              defaultOperator: P
            }
          )
        ] })
      }
    )
  ] });
}
export {
  Sc as default
};
