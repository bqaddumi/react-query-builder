import { jsxs as ue, jsx as T, Fragment as $r } from "react/jsx-runtime";
import * as Y from "react";
import Gt, { useState as De, useEffect as Dt, useMemo as _t, useRef as An } from "react";
import Ca from "@emotion/styled";
import { ThemeContext as Ta } from "@emotion/react";
import { Add as Oa, CreateNewFolderOutlined as Ra, DeleteOutline as Aa, Close as al, RestartAlt as Ia, Search as Pa } from "@mui/icons-material";
import { Box as re, FormControlLabel as Na, Switch as _a, Button as gt, Tooltip as on, IconButton as bt, Select as Pi, MenuItem as bn, TextField as Da, OutlinedInput as Ma, InputAdornment as $a, Popper as za, List as La, ListItem as Ba, ListItemButton as Fa, Typography as se, Dialog as ja, DialogTitle as Ua, DialogContent as Va, Divider as kt, Chip as pt, DialogActions as Wa } from "@mui/material";
import * as Ha from "react-dom";
import xn from "react-dom";
function ri(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sn = { exports: {} }, vn = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni;
function qa() {
  if (Ni) return le;
  Ni = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function w(C) {
    if (typeof C == "object" && C !== null) {
      var S = C.$$typeof;
      switch (S) {
        case t:
          switch (C = C.type, C) {
            case u:
            case s:
            case r:
            case o:
            case i:
            case f:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case a:
                case c:
                case x:
                case p:
                case l:
                  return C;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function R(C) {
    return w(C) === s;
  }
  return le.AsyncMode = u, le.ConcurrentMode = s, le.ContextConsumer = a, le.ContextProvider = l, le.Element = t, le.ForwardRef = c, le.Fragment = r, le.Lazy = x, le.Memo = p, le.Portal = n, le.Profiler = o, le.StrictMode = i, le.Suspense = f, le.isAsyncMode = function(C) {
    return R(C) || w(C) === u;
  }, le.isConcurrentMode = R, le.isContextConsumer = function(C) {
    return w(C) === a;
  }, le.isContextProvider = function(C) {
    return w(C) === l;
  }, le.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }, le.isForwardRef = function(C) {
    return w(C) === c;
  }, le.isFragment = function(C) {
    return w(C) === r;
  }, le.isLazy = function(C) {
    return w(C) === x;
  }, le.isMemo = function(C) {
    return w(C) === p;
  }, le.isPortal = function(C) {
    return w(C) === n;
  }, le.isProfiler = function(C) {
    return w(C) === o;
  }, le.isStrictMode = function(C) {
    return w(C) === i;
  }, le.isSuspense = function(C) {
    return w(C) === f;
  }, le.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === r || C === s || C === o || C === i || C === f || C === d || typeof C == "object" && C !== null && (C.$$typeof === x || C.$$typeof === p || C.$$typeof === l || C.$$typeof === a || C.$$typeof === c || C.$$typeof === E || C.$$typeof === v || C.$$typeof === _ || C.$$typeof === h);
  }, le.typeOf = w, le;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i;
function Ya() {
  return _i || (_i = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function w(F) {
      return typeof F == "string" || typeof F == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      F === r || F === s || F === o || F === i || F === f || F === d || typeof F == "object" && F !== null && (F.$$typeof === x || F.$$typeof === p || F.$$typeof === l || F.$$typeof === a || F.$$typeof === c || F.$$typeof === E || F.$$typeof === v || F.$$typeof === _ || F.$$typeof === h);
    }
    function R(F) {
      if (typeof F == "object" && F !== null) {
        var ve = F.$$typeof;
        switch (ve) {
          case t:
            var Ae = F.type;
            switch (Ae) {
              case u:
              case s:
              case r:
              case o:
              case i:
              case f:
                return Ae;
              default:
                var ct = Ae && Ae.$$typeof;
                switch (ct) {
                  case a:
                  case c:
                  case x:
                  case p:
                  case l:
                    return ct;
                  default:
                    return ve;
                }
            }
          case n:
            return ve;
        }
      }
    }
    var C = u, S = s, z = a, W = l, H = t, g = c, O = r, P = x, V = p, D = n, A = o, B = i, Q = f, pe = !1;
    function ye(F) {
      return pe || (pe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(F) || R(F) === u;
    }
    function m(F) {
      return R(F) === s;
    }
    function M(F) {
      return R(F) === a;
    }
    function q(F) {
      return R(F) === l;
    }
    function b(F) {
      return typeof F == "object" && F !== null && F.$$typeof === t;
    }
    function U(F) {
      return R(F) === c;
    }
    function K(F) {
      return R(F) === r;
    }
    function j(F) {
      return R(F) === x;
    }
    function G(F) {
      return R(F) === p;
    }
    function X(F) {
      return R(F) === n;
    }
    function ne(F) {
      return R(F) === o;
    }
    function J(F) {
      return R(F) === i;
    }
    function be(F) {
      return R(F) === f;
    }
    ae.AsyncMode = C, ae.ConcurrentMode = S, ae.ContextConsumer = z, ae.ContextProvider = W, ae.Element = H, ae.ForwardRef = g, ae.Fragment = O, ae.Lazy = P, ae.Memo = V, ae.Portal = D, ae.Profiler = A, ae.StrictMode = B, ae.Suspense = Q, ae.isAsyncMode = ye, ae.isConcurrentMode = m, ae.isContextConsumer = M, ae.isContextProvider = q, ae.isElement = b, ae.isForwardRef = U, ae.isFragment = K, ae.isLazy = j, ae.isMemo = G, ae.isPortal = X, ae.isProfiler = ne, ae.isStrictMode = J, ae.isSuspense = be, ae.isValidElementType = w, ae.typeOf = R;
  }()), ae;
}
var Di;
function sl() {
  return Di || (Di = 1, process.env.NODE_ENV === "production" ? vn.exports = qa() : vn.exports = Ya()), vn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cr, Mi;
function Ga() {
  if (Mi) return cr;
  Mi = 1;
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
      for (var l = {}, a = 0; a < 10; a++)
        l["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(l).map(function(c) {
        return l[c];
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
  return cr = i() ? Object.assign : function(o, l) {
    for (var a, u = r(o), s, c = 1; c < arguments.length; c++) {
      a = Object(arguments[c]);
      for (var f in a)
        t.call(a, f) && (u[f] = a[f]);
      if (e) {
        s = e(a);
        for (var d = 0; d < s.length; d++)
          n.call(a, s[d]) && (u[s[d]] = a[s[d]]);
      }
    }
    return u;
  }, cr;
}
var fr, $i;
function ii() {
  if ($i) return fr;
  $i = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fr = e, fr;
}
var pr, zi;
function ul() {
  return zi || (zi = 1, pr = Function.call.bind(Object.prototype.hasOwnProperty)), pr;
}
var dr, Li;
function Ka() {
  if (Li) return dr;
  Li = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ ii(), n = {}, r = /* @__PURE__ */ ul();
    e = function(o) {
      var l = "Warning: " + o;
      typeof console < "u" && console.error(l);
      try {
        throw new Error(l);
      } catch {
      }
    };
  }
  function i(o, l, a, u, s) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (r(o, c)) {
          var f;
          try {
            if (typeof o[c] != "function") {
              var d = Error(
                (u || "React class") + ": " + a + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            f = o[c](l, c, u, a, null, t);
          } catch (x) {
            f = x;
          }
          if (f && !(f instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in n)) {
            n[f.message] = !0;
            var p = s ? s() : "";
            e(
              "Failed " + a + " type: " + f.message + (p ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, dr = i, dr;
}
var hr, Bi;
function Xa() {
  if (Bi) return hr;
  Bi = 1;
  var e = sl(), t = Ga(), n = /* @__PURE__ */ ii(), r = /* @__PURE__ */ ul(), i = /* @__PURE__ */ Ka(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function l() {
    return null;
  }
  return hr = function(a, u) {
    var s = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(m) {
      var M = m && (s && m[s] || m[c]);
      if (typeof M == "function")
        return M;
    }
    var d = "<<anonymous>>", p = {
      array: v("array"),
      bigint: v("bigint"),
      bool: v("boolean"),
      func: v("function"),
      number: v("number"),
      object: v("object"),
      string: v("string"),
      symbol: v("symbol"),
      any: _(),
      arrayOf: w,
      element: R(),
      elementType: C(),
      instanceOf: S,
      node: g(),
      objectOf: W,
      oneOf: z,
      oneOfType: H,
      shape: P,
      exact: V
    };
    function x(m, M) {
      return m === M ? m !== 0 || 1 / m === 1 / M : m !== m && M !== M;
    }
    function h(m, M) {
      this.message = m, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function E(m) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, q = 0;
      function b(K, j, G, X, ne, J, be) {
        if (X = X || d, J = J || G, be !== n) {
          if (u) {
            var F = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw F.name = "Invariant Violation", F;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ve = X + ":" + G;
            !M[ve] && // Avoid spamming the console because they are often not actionable except for lib authors
            q < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[ve] = !0, q++);
          }
        }
        return j[G] == null ? K ? j[G] === null ? new h("The " + ne + " `" + J + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new h("The " + ne + " `" + J + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : m(j, G, X, ne, J);
      }
      var U = b.bind(null, !1);
      return U.isRequired = b.bind(null, !0), U;
    }
    function v(m) {
      function M(q, b, U, K, j, G) {
        var X = q[b], ne = B(X);
        if (ne !== m) {
          var J = Q(X);
          return new h(
            "Invalid " + K + " `" + j + "` of type " + ("`" + J + "` supplied to `" + U + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return E(M);
    }
    function _() {
      return E(l);
    }
    function w(m) {
      function M(q, b, U, K, j) {
        if (typeof m != "function")
          return new h("Property `" + j + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var G = q[b];
        if (!Array.isArray(G)) {
          var X = B(G);
          return new h("Invalid " + K + " `" + j + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected an array."));
        }
        for (var ne = 0; ne < G.length; ne++) {
          var J = m(G, ne, U, K, j + "[" + ne + "]", n);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return E(M);
    }
    function R() {
      function m(M, q, b, U, K) {
        var j = M[q];
        if (!a(j)) {
          var G = B(j);
          return new h("Invalid " + U + " `" + K + "` of type " + ("`" + G + "` supplied to `" + b + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(m);
    }
    function C() {
      function m(M, q, b, U, K) {
        var j = M[q];
        if (!e.isValidElementType(j)) {
          var G = B(j);
          return new h("Invalid " + U + " `" + K + "` of type " + ("`" + G + "` supplied to `" + b + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(m);
    }
    function S(m) {
      function M(q, b, U, K, j) {
        if (!(q[b] instanceof m)) {
          var G = m.name || d, X = ye(q[b]);
          return new h("Invalid " + K + " `" + j + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return E(M);
    }
    function z(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function M(q, b, U, K, j) {
        for (var G = q[b], X = 0; X < m.length; X++)
          if (x(G, m[X]))
            return null;
        var ne = JSON.stringify(m, function(be, F) {
          var ve = Q(F);
          return ve === "symbol" ? String(F) : F;
        });
        return new h("Invalid " + K + " `" + j + "` of value `" + String(G) + "` " + ("supplied to `" + U + "`, expected one of " + ne + "."));
      }
      return E(M);
    }
    function W(m) {
      function M(q, b, U, K, j) {
        if (typeof m != "function")
          return new h("Property `" + j + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var G = q[b], X = B(G);
        if (X !== "object")
          return new h("Invalid " + K + " `" + j + "` of type " + ("`" + X + "` supplied to `" + U + "`, expected an object."));
        for (var ne in G)
          if (r(G, ne)) {
            var J = m(G, ne, U, K, j + "." + ne, n);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return E(M);
    }
    function H(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var M = 0; M < m.length; M++) {
        var q = m[M];
        if (typeof q != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pe(q) + " at index " + M + "."
          ), l;
      }
      function b(U, K, j, G, X) {
        for (var ne = [], J = 0; J < m.length; J++) {
          var be = m[J], F = be(U, K, j, G, X, n);
          if (F == null)
            return null;
          F.data && r(F.data, "expectedType") && ne.push(F.data.expectedType);
        }
        var ve = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new h("Invalid " + G + " `" + X + "` supplied to " + ("`" + j + "`" + ve + "."));
      }
      return E(b);
    }
    function g() {
      function m(M, q, b, U, K) {
        return D(M[q]) ? null : new h("Invalid " + U + " `" + K + "` supplied to " + ("`" + b + "`, expected a ReactNode."));
      }
      return E(m);
    }
    function O(m, M, q, b, U) {
      return new h(
        (m || "React class") + ": " + M + " type `" + q + "." + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function P(m) {
      function M(q, b, U, K, j) {
        var G = q[b], X = B(G);
        if (X !== "object")
          return new h("Invalid " + K + " `" + j + "` of type `" + X + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var ne in m) {
          var J = m[ne];
          if (typeof J != "function")
            return O(U, K, j, ne, Q(J));
          var be = J(G, ne, U, K, j + "." + ne, n);
          if (be)
            return be;
        }
        return null;
      }
      return E(M);
    }
    function V(m) {
      function M(q, b, U, K, j) {
        var G = q[b], X = B(G);
        if (X !== "object")
          return new h("Invalid " + K + " `" + j + "` of type `" + X + "` " + ("supplied to `" + U + "`, expected `object`."));
        var ne = t({}, q[b], m);
        for (var J in ne) {
          var be = m[J];
          if (r(m, J) && typeof be != "function")
            return O(U, K, j, J, Q(be));
          if (!be)
            return new h(
              "Invalid " + K + " `" + j + "` key `" + J + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(q[b], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var F = be(G, J, U, K, j + "." + J, n);
          if (F)
            return F;
        }
        return null;
      }
      return E(M);
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
          if (m === null || a(m))
            return !0;
          var M = f(m);
          if (M) {
            var q = M.call(m), b;
            if (M !== m.entries) {
              for (; !(b = q.next()).done; )
                if (!D(b.value))
                  return !1;
            } else
              for (; !(b = q.next()).done; ) {
                var U = b.value;
                if (U && !D(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(m, M) {
      return m === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function B(m) {
      var M = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : A(M, m) ? "symbol" : M;
    }
    function Q(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var M = B(m);
      if (M === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function pe(m) {
      var M = Q(m);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function ye(m) {
      return !m.constructor || !m.constructor.name ? d : m.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, hr;
}
var mr, Fi;
function Qa() {
  if (Fi) return mr;
  Fi = 1;
  var e = /* @__PURE__ */ ii();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, mr = function() {
    function r(l, a, u, s, c, f) {
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
  }, mr;
}
var ji;
function Ja() {
  if (ji) return Sn.exports;
  if (ji = 1, process.env.NODE_ENV !== "production") {
    var e = sl(), t = !0;
    Sn.exports = /* @__PURE__ */ Xa()(e.isElement, t);
  } else
    Sn.exports = /* @__PURE__ */ Qa()();
  return Sn.exports;
}
var Za = /* @__PURE__ */ Ja();
const y = /* @__PURE__ */ ri(Za);
function cl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = cl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ye() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = cl(e)) && (r && (r += " "), r += t);
  return r;
}
function sn(e, t, n = void 0) {
  const r = {};
  for (const i in e) {
    const o = e[i];
    let l = "", a = !0;
    for (let u = 0; u < o.length; u += 1) {
      const s = o[u];
      s && (l += (a === !0 ? "" : " ") + t(s), a = !1, n && n[s] && (l += " " + n[s]));
    }
    r[i] = l;
  }
  return r;
}
let Ui = 0;
function es(e) {
  const [t, n] = Y.useState(e), r = e || t;
  return Y.useEffect(() => {
    t == null && (Ui += 1, n(`mui-${Ui}`));
  }, [t]), r;
}
const ts = {
  ...Y
}, Vi = ts.useId;
function ns(e) {
  if (Vi !== void 0) {
    const t = Vi();
    return e ?? t;
  }
  return es(e);
}
function lt(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function ze(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : lt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function oi(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
var En = { exports: {} }, ce = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function rs() {
  if (Wi) return ce;
  Wi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), l = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), p = Symbol.for("react.client.reference");
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
                case l:
                case a:
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
  return ce.ContextConsumer = o, ce.ContextProvider = l, ce.Element = e, ce.ForwardRef = a, ce.Fragment = n, ce.Lazy = f, ce.Memo = c, ce.Portal = t, ce.Profiler = i, ce.StrictMode = r, ce.Suspense = u, ce.SuspenseList = s, ce.isContextConsumer = function(h) {
    return x(h) === o;
  }, ce.isContextProvider = function(h) {
    return x(h) === l;
  }, ce.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ce.isForwardRef = function(h) {
    return x(h) === a;
  }, ce.isFragment = function(h) {
    return x(h) === n;
  }, ce.isLazy = function(h) {
    return x(h) === f;
  }, ce.isMemo = function(h) {
    return x(h) === c;
  }, ce.isPortal = function(h) {
    return x(h) === t;
  }, ce.isProfiler = function(h) {
    return x(h) === i;
  }, ce.isStrictMode = function(h) {
    return x(h) === r;
  }, ce.isSuspense = function(h) {
    return x(h) === u;
  }, ce.isSuspenseList = function(h) {
    return x(h) === s;
  }, ce.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === i || h === r || h === u || h === s || h === d || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === c || h.$$typeof === l || h.$$typeof === o || h.$$typeof === a || h.$$typeof === p || h.getModuleId !== void 0);
  }, ce.typeOf = x, ce;
}
var fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hi;
function is() {
  return Hi || (Hi = 1, process.env.NODE_ENV !== "production" && function() {
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
                  case a:
                  case u:
                  case d:
                  case f:
                    return h;
                  case l:
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
    var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
    fe.ContextConsumer = l, fe.ContextProvider = a, fe.Element = t, fe.ForwardRef = u, fe.Fragment = r, fe.Lazy = d, fe.Memo = f, fe.Portal = n, fe.Profiler = o, fe.StrictMode = i, fe.Suspense = s, fe.SuspenseList = c, fe.isContextConsumer = function(h) {
      return e(h) === l;
    }, fe.isContextProvider = function(h) {
      return e(h) === a;
    }, fe.isElement = function(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }, fe.isForwardRef = function(h) {
      return e(h) === u;
    }, fe.isFragment = function(h) {
      return e(h) === r;
    }, fe.isLazy = function(h) {
      return e(h) === d;
    }, fe.isMemo = function(h) {
      return e(h) === f;
    }, fe.isPortal = function(h) {
      return e(h) === n;
    }, fe.isProfiler = function(h) {
      return e(h) === o;
    }, fe.isStrictMode = function(h) {
      return e(h) === i;
    }, fe.isSuspense = function(h) {
      return e(h) === s;
    }, fe.isSuspenseList = function(h) {
      return e(h) === c;
    }, fe.isValidElementType = function(h) {
      return typeof h == "string" || typeof h == "function" || h === r || h === o || h === i || h === s || h === c || h === p || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === a || h.$$typeof === l || h.$$typeof === u || h.$$typeof === x || h.getModuleId !== void 0);
    }, fe.typeOf = e;
  }()), fe;
}
var qi;
function os() {
  return qi || (qi = 1, process.env.NODE_ENV === "production" ? En.exports = /* @__PURE__ */ rs() : En.exports = /* @__PURE__ */ is()), En.exports;
}
var Nn = /* @__PURE__ */ os();
function Qe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function fl(e) {
  if (/* @__PURE__ */ Y.isValidElement(e) || Nn.isValidElementType(e) || !Qe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = fl(e[n]);
  }), t;
}
function Le(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Qe(e) && Qe(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ Y.isValidElement(t[i]) || Nn.isValidElementType(t[i]) ? r[i] = t[i] : Qe(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && Qe(e[i]) ? r[i] = Le(e[i], t[i], n) : n.clone ? r[i] = Qe(t[i]) ? fl(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
function ls(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function pl(e, t, n, r, i) {
  const o = e[t], l = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const u = o.type;
  return typeof u == "function" && !ls(u) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Un = oi(y.element, pl);
Un.isRequired = oi(y.element.isRequired, pl);
const as = "exact-prop: ​";
function dl(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [as]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function hl(e, t = "") {
  return e.displayName || e.name || t;
}
function Yi(e, t, n) {
  const r = hl(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function ss(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return hl(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Nn.ForwardRef:
          return Yi(e, e.render, "ForwardRef");
        case Nn.Memo:
          return Yi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ml(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const o = e[t], l = i || t;
  return o == null ? null : o && o.nodeType !== 1 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function Gi(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function xt(e) {
  return e && e.ownerDocument || document;
}
function _n(e) {
  return xt(e).defaultView || window;
}
function zr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Lr = typeof window < "u" ? Y.useLayoutEffect : Y.useEffect;
function Ki(e) {
  const t = Y.useRef(e);
  return Lr(() => {
    t.current = e;
  }), Y.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Bt(...e) {
  return Y.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      zr(n, t);
    });
  }, e);
}
function us(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function cs(e) {
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
function gl(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const o = cs(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${o}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function yl(e, t, ...n) {
  return e[t] === void 0 ? null : gl(e, t, ...n);
}
function Br() {
  return null;
}
yl.isRequired = gl;
Br.isRequired = Br;
const fs = process.env.NODE_ENV === "production" ? Br : yl;
function Fr(e, t) {
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
        const o = e[i], l = t[i];
        if (!l)
          n[i] = o || {};
        else if (!o)
          n[i] = l;
        else {
          n[i] = {
            ...l
          };
          for (const a in o)
            if (Object.prototype.hasOwnProperty.call(o, a)) {
              const u = a;
              n[i][u] = Fr(o[u], l[u]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Xi = (e) => e, ps = () => {
  let e = Xi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Xi;
    }
  };
}, ds = ps(), hs = {
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
function St(e, t, n = "Mui") {
  const r = hs[t];
  return r ? `${n}-${r}` : `${ds.generate(e)}-${t}`;
}
function un(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = St(e, i, n);
  }), r;
}
function ms(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function gs(e) {
  return typeof e == "string";
}
function ys(e, t, n) {
  return e === void 0 || gs(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function bl(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function Qi(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function bs(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o
  } = e;
  if (!t) {
    const p = Ye(n == null ? void 0 : n.className, o, i == null ? void 0 : i.className, r == null ? void 0 : r.className), x = {
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
  const l = bl({
    ...i,
    ...r
  }), a = Qi(r), u = Qi(i), s = t(l), c = Ye(s == null ? void 0 : s.className, n == null ? void 0 : n.className, o, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = {
    ...s == null ? void 0 : s.style,
    ...n == null ? void 0 : n.style,
    ...i == null ? void 0 : i.style,
    ...r == null ? void 0 : r.style
  }, d = {
    ...s,
    ...n,
    ...u,
    ...a
  };
  return c.length > 0 && (d.className = c), Object.keys(f).length > 0 && (d.style = f), {
    props: d,
    internalRef: s.ref
  };
}
function xs(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function li(e) {
  var t;
  return parseInt(Y.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function Ss(e) {
  const t = xt(e);
  return t.body === e ? _n(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Jt(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Ji(e) {
  return parseInt(_n(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function vs(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Zi(e, t, n, r, i) {
  const o = [t, n, ...r];
  [].forEach.call(e.children, (l) => {
    const a = !o.includes(l), u = !vs(l);
    a && u && Jt(l, i);
  });
}
function gr(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Es(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Ss(r)) {
      const l = us(_n(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Ji(r) + l}px`;
      const a = xt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (u) => {
        n.push({
          value: u.style.paddingRight,
          property: "padding-right",
          el: u
        }), u.style.paddingRight = `${Ji(u) + l}px`;
      });
    }
    let o;
    if (r.parentNode instanceof DocumentFragment)
      o = xt(r).body;
    else {
      const l = r.parentElement, a = _n(r);
      o = (l == null ? void 0 : l.nodeName) === "HTML" && a.getComputedStyle(l).overflowY === "scroll" ? l : r;
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
      el: l,
      property: a
    }) => {
      o ? l.style.setProperty(a, o) : l.style.removeProperty(a);
    });
  };
}
function ws(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class ks {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Jt(t.modalRef, !1);
    const i = ws(n);
    Zi(n, t.mount, t.modalRef, i, !0);
    const o = gr(this.containers, (l) => l.container === n);
    return o !== -1 ? (this.containers[o].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = gr(this.containers, (o) => o.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Es(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = gr(this.containers, (l) => l.modals.includes(t)), o = this.containers[i];
    if (o.modals.splice(o.modals.indexOf(t), 1), this.modals.splice(r, 1), o.modals.length === 0)
      o.restore && o.restore(), t.modalRef && Jt(t.modalRef, n), Zi(o.container, t.mount, t.modalRef, o.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const l = o.modals[o.modals.length - 1];
      l.modalRef && Jt(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Cs = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Ts(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Os(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Rs(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Os(e));
}
function As(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Cs)).forEach((r, i) => {
    const o = Ts(r);
    o === -1 || !Rs(r) || (o === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: o,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function Is() {
  return !0;
}
function Dn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: o = As,
    isEnabled: l = Is,
    open: a
  } = e, u = Y.useRef(!1), s = Y.useRef(null), c = Y.useRef(null), f = Y.useRef(null), d = Y.useRef(null), p = Y.useRef(!1), x = Y.useRef(null), h = Bt(li(t), x), E = Y.useRef(null);
  Y.useEffect(() => {
    !a || !x.current || (p.current = !n);
  }, [n, a]), Y.useEffect(() => {
    if (!a || !x.current)
      return;
    const w = xt(x.current);
    return x.current.contains(w.activeElement) || (x.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), x.current.setAttribute("tabIndex", "-1")), p.current && x.current.focus()), () => {
      i || (f.current && f.current.focus && (u.current = !0, f.current.focus()), f.current = null);
    };
  }, [a]), Y.useEffect(() => {
    if (!a || !x.current)
      return;
    const w = xt(x.current), R = (z) => {
      E.current = z, !(r || !l() || z.key !== "Tab") && w.activeElement === x.current && z.shiftKey && (u.current = !0, c.current && c.current.focus());
    }, C = () => {
      var H, g;
      const z = x.current;
      if (z === null)
        return;
      if (!w.hasFocus() || !l() || u.current) {
        u.current = !1;
        return;
      }
      if (z.contains(w.activeElement) || r && w.activeElement !== s.current && w.activeElement !== c.current)
        return;
      if (w.activeElement !== d.current)
        d.current = null;
      else if (d.current !== null)
        return;
      if (!p.current)
        return;
      let W = [];
      if ((w.activeElement === s.current || w.activeElement === c.current) && (W = o(x.current)), W.length > 0) {
        const O = !!((H = E.current) != null && H.shiftKey && ((g = E.current) == null ? void 0 : g.key) === "Tab"), P = W[0], V = W[W.length - 1];
        typeof P != "string" && typeof V != "string" && (O ? V.focus() : P.focus());
      } else
        z.focus();
    };
    w.addEventListener("focusin", C), w.addEventListener("keydown", R, !0);
    const S = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && C();
    }, 50);
    return () => {
      clearInterval(S), w.removeEventListener("focusin", C), w.removeEventListener("keydown", R, !0);
    };
  }, [n, r, i, l, a, o]);
  const v = (w) => {
    f.current === null && (f.current = w.relatedTarget), p.current = !0, d.current = w.target;
    const R = t.props.onFocus;
    R && R(w);
  }, _ = (w) => {
    f.current === null && (f.current = w.relatedTarget), p.current = !0;
  };
  return /* @__PURE__ */ ue(Y.Fragment, {
    children: [/* @__PURE__ */ T("div", {
      tabIndex: a ? 0 : -1,
      onFocus: _,
      ref: s,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ Y.cloneElement(t, {
      ref: h,
      onFocus: v
    }), /* @__PURE__ */ T("div", {
      tabIndex: a ? 0 : -1,
      onFocus: _,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Dn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Un,
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
process.env.NODE_ENV !== "production" && (Dn.propTypes = dl(Dn.propTypes));
function Ps(e) {
  return typeof e == "function" ? e() : e;
}
const Mn = /* @__PURE__ */ Y.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: o = !1
  } = t, [l, a] = Y.useState(null), u = Bt(/* @__PURE__ */ Y.isValidElement(r) ? li(r) : null, n);
  if (Lr(() => {
    o || a(Ps(i) || document.body);
  }, [i, o]), Lr(() => {
    if (l && !o)
      return zr(n, l), () => {
        zr(n, null);
      };
  }, [n, l, o]), o) {
    if (/* @__PURE__ */ Y.isValidElement(r)) {
      const s = {
        ref: u
      };
      return /* @__PURE__ */ Y.cloneElement(r, s);
    }
    return r;
  }
  return l && /* @__PURE__ */ Ha.createPortal(r, l);
});
process.env.NODE_ENV !== "production" && (Mn.propTypes = {
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
  container: y.oneOfType([ml, y.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: y.bool
});
process.env.NODE_ENV !== "production" && (Mn.propTypes = dl(Mn.propTypes));
function Zt(e, t) {
  return t ? Le(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const st = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.string, y.object, y.array]) : {};
function Ns(e, t) {
  if (!e.containerQueries)
    return t;
  const n = Object.keys(t).filter((r) => r.startsWith("@container")).sort((r, i) => {
    var l, a;
    const o = /min-width:\s*([0-9.]+)/;
    return +(((l = r.match(o)) == null ? void 0 : l[1]) || 0) - +(((a = i.match(o)) == null ? void 0 : a[1]) || 0);
  });
  return n.length ? n.reduce((r, i) => {
    const o = t[i];
    return delete r[i], r[i] = o, r;
  }, {
    ...t
  }) : t;
}
function _s(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Ds(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : lt(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, o = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(o);
}
function Ms(e) {
  const t = (o, l) => o.replace("@media", l ? `@container ${l}` : "@container");
  function n(o, l) {
    o.up = (...a) => t(e.breakpoints.up(...a), l), o.down = (...a) => t(e.breakpoints.down(...a), l), o.between = (...a) => t(e.breakpoints.between(...a), l), o.only = (...a) => t(e.breakpoints.only(...a), l), o.not = (...a) => {
      const u = t(e.breakpoints.not(...a), l);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const r = {}, i = (o) => (n(r, o), r);
  return n(i), {
    ...e,
    containerQueries: i
  };
}
const Vn = {
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
}, eo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Vn[e]}px)`
}, $s = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Vn[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Ze(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || eo;
    return t.reduce((l, a, u) => (l[o.up(o.keys[u])] = n(t[u]), l), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || eo;
    return Object.keys(t).reduce((l, a) => {
      if (_s(o.keys, a)) {
        const u = Ds(r.containerQueries ? r : $s, a);
        u && (l[u] = n(t[a], a));
      } else if (Object.keys(o.values || Vn).includes(a)) {
        const u = o.up(a);
        l[u] = n(t[a], a);
      } else {
        const u = a;
        l[u] = t[u];
      }
      return l;
    }, {});
  }
  return n(t);
}
function zs(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function Ls(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Wn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function $n(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Wn(e, n) || r, t && (i = t(i, r, e)), i;
}
function Ce(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (l) => {
    if (l[t] == null)
      return null;
    const a = l[t], u = l.theme, s = Wn(u, r) || {};
    return Ze(l, a, (f) => {
      let d = $n(s, i, f);
      return f === d && typeof f == "string" && (d = $n(s, i, `${t}${f === "default" ? "" : ze(f)}`, f)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: st
  } : {}, o.filterProps = [t], o;
}
function Bs(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Fs = {
  m: "margin",
  p: "padding"
}, js = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, to = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Us = Bs((e) => {
  if (e.length > 2)
    if (to[e])
      e = to[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Fs[t], i = js[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), Hn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], qn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Vs = [...Hn, ...qn];
function cn(e, t, n, r) {
  const i = Wn(e, t, !0) ?? n;
  return typeof i == "number" || typeof i == "string" ? (o) => typeof o == "string" ? o : (process.env.NODE_ENV !== "production" && typeof o != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${o}.`), typeof i == "string" ? `calc(${o} * ${i})` : i * o) : Array.isArray(i) ? (o) => {
    if (typeof o == "string")
      return o;
    const l = Math.abs(o);
    process.env.NODE_ENV !== "production" && (Number.isInteger(l) ? l > i.length - 1 && console.error([`MUI: The value provided (${l}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${l} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const a = i[l];
    return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
  } : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ai(e) {
  return cn(e, "spacing", 8, "spacing");
}
function fn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ws(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = fn(t, n), r), {});
}
function Hs(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = Us(n), o = Ws(i, r), l = e[n];
  return Ze(e, l, o);
}
function xl(e, t) {
  const n = ai(e.theme);
  return Object.keys(e).map((r) => Hs(e, t, r, n)).reduce(Zt, {});
}
function we(e) {
  return xl(e, Hn);
}
we.propTypes = process.env.NODE_ENV !== "production" ? Hn.reduce((e, t) => (e[t] = st, e), {}) : {};
we.filterProps = Hn;
function ke(e) {
  return xl(e, qn);
}
ke.propTypes = process.env.NODE_ENV !== "production" ? qn.reduce((e, t) => (e[t] = st, e), {}) : {};
ke.filterProps = qn;
process.env.NODE_ENV !== "production" && Vs.reduce((e, t) => (e[t] = st, e), {});
function Yn(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? Zt(i, t[o](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Fe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ue(e, t) {
  return Ce({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const qs = Ue("border", Fe), Ys = Ue("borderTop", Fe), Gs = Ue("borderRight", Fe), Ks = Ue("borderBottom", Fe), Xs = Ue("borderLeft", Fe), Qs = Ue("borderColor"), Js = Ue("borderTopColor"), Zs = Ue("borderRightColor"), eu = Ue("borderBottomColor"), tu = Ue("borderLeftColor"), nu = Ue("outline", Fe), ru = Ue("outlineColor"), Gn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = cn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: fn(t, r)
    });
    return Ze(e, e.borderRadius, n);
  }
  return null;
};
Gn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: st
} : {};
Gn.filterProps = ["borderRadius"];
Yn(qs, Ys, Gs, Ks, Xs, Qs, Js, Zs, eu, tu, Gn, nu, ru);
const Kn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = cn(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: fn(t, r)
    });
    return Ze(e, e.gap, n);
  }
  return null;
};
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: st
} : {};
Kn.filterProps = ["gap"];
const Xn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = cn(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: fn(t, r)
    });
    return Ze(e, e.columnGap, n);
  }
  return null;
};
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: st
} : {};
Xn.filterProps = ["columnGap"];
const Qn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = cn(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: fn(t, r)
    });
    return Ze(e, e.rowGap, n);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: st
} : {};
Qn.filterProps = ["rowGap"];
const iu = Ce({
  prop: "gridColumn"
}), ou = Ce({
  prop: "gridRow"
}), lu = Ce({
  prop: "gridAutoFlow"
}), au = Ce({
  prop: "gridAutoColumns"
}), su = Ce({
  prop: "gridAutoRows"
}), uu = Ce({
  prop: "gridTemplateColumns"
}), cu = Ce({
  prop: "gridTemplateRows"
}), fu = Ce({
  prop: "gridTemplateAreas"
}), pu = Ce({
  prop: "gridArea"
});
Yn(Kn, Xn, Qn, iu, ou, lu, au, su, uu, cu, fu, pu);
function Mt(e, t) {
  return t === "grey" ? t : e;
}
const du = Ce({
  prop: "color",
  themeKey: "palette",
  transform: Mt
}), hu = Ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Mt
}), mu = Ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Mt
});
Yn(du, hu, mu);
function Me(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const gu = Ce({
  prop: "width",
  transform: Me
}), si = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, o, l, a, u;
      const r = ((l = (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : o.values) == null ? void 0 : l[n]) || Vn[n];
      return r ? ((u = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Me(n)
      };
    };
    return Ze(e, e.maxWidth, t);
  }
  return null;
};
si.filterProps = ["maxWidth"];
const yu = Ce({
  prop: "minWidth",
  transform: Me
}), bu = Ce({
  prop: "height",
  transform: Me
}), xu = Ce({
  prop: "maxHeight",
  transform: Me
}), Su = Ce({
  prop: "minHeight",
  transform: Me
});
Ce({
  prop: "size",
  cssProperty: "width",
  transform: Me
});
Ce({
  prop: "size",
  cssProperty: "height",
  transform: Me
});
const vu = Ce({
  prop: "boxSizing"
});
Yn(gu, si, yu, bu, xu, Su, vu);
const Jn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Fe
  },
  borderTop: {
    themeKey: "borders",
    transform: Fe
  },
  borderRight: {
    themeKey: "borders",
    transform: Fe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Fe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Fe
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
    transform: Fe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Gn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Mt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Mt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Mt
  },
  // spacing
  p: {
    style: ke
  },
  pt: {
    style: ke
  },
  pr: {
    style: ke
  },
  pb: {
    style: ke
  },
  pl: {
    style: ke
  },
  px: {
    style: ke
  },
  py: {
    style: ke
  },
  padding: {
    style: ke
  },
  paddingTop: {
    style: ke
  },
  paddingRight: {
    style: ke
  },
  paddingBottom: {
    style: ke
  },
  paddingLeft: {
    style: ke
  },
  paddingX: {
    style: ke
  },
  paddingY: {
    style: ke
  },
  paddingInline: {
    style: ke
  },
  paddingInlineStart: {
    style: ke
  },
  paddingInlineEnd: {
    style: ke
  },
  paddingBlock: {
    style: ke
  },
  paddingBlockStart: {
    style: ke
  },
  paddingBlockEnd: {
    style: ke
  },
  m: {
    style: we
  },
  mt: {
    style: we
  },
  mr: {
    style: we
  },
  mb: {
    style: we
  },
  ml: {
    style: we
  },
  mx: {
    style: we
  },
  my: {
    style: we
  },
  margin: {
    style: we
  },
  marginTop: {
    style: we
  },
  marginRight: {
    style: we
  },
  marginBottom: {
    style: we
  },
  marginLeft: {
    style: we
  },
  marginX: {
    style: we
  },
  marginY: {
    style: we
  },
  marginInline: {
    style: we
  },
  marginInlineStart: {
    style: we
  },
  marginInlineEnd: {
    style: we
  },
  marginBlock: {
    style: we
  },
  marginBlockStart: {
    style: we
  },
  marginBlockEnd: {
    style: we
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
    style: Kn
  },
  rowGap: {
    style: Qn
  },
  columnGap: {
    style: Xn
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
    transform: Me
  },
  maxWidth: {
    style: si
  },
  minWidth: {
    transform: Me
  },
  height: {
    transform: Me
  },
  maxHeight: {
    transform: Me
  },
  minHeight: {
    transform: Me
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
function Eu(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function wu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ku() {
  function e(n, r, i, o) {
    const l = {
      [n]: r,
      theme: i
    }, a = o[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: u = n,
      themeKey: s,
      transform: c,
      style: f
    } = a;
    if (r == null)
      return null;
    if (s === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const d = Wn(i, s) || {};
    return f ? f(l) : Ze(l, r, (x) => {
      let h = $n(d, c, x);
      return x === h && typeof x == "string" && (h = $n(d, c, `${n}${x === "default" ? "" : ze(x)}`, x)), u === !1 ? h : {
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
    const o = i.unstable_sxConfig ?? Jn;
    function l(a) {
      let u = a;
      if (typeof a == "function")
        u = a(i);
      else if (typeof a != "object")
        return a;
      if (!u)
        return null;
      const s = zs(i.breakpoints), c = Object.keys(s);
      let f = s;
      return Object.keys(u).forEach((d) => {
        const p = wu(u[d], i);
        if (p != null)
          if (typeof p == "object")
            if (o[d])
              f = Zt(f, e(d, p, i, o));
            else {
              const x = Ze({
                theme: i
              }, p, (h) => ({
                [d]: h
              }));
              Eu(x, p) ? f[d] = t({
                sx: p,
                theme: i
              }) : f = Zt(f, x);
            }
          else
            f = Zt(f, e(d, p, i, o));
      }), Ns(i, Ls(c, f));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const zt = ku();
zt.filterProps = ["sx"];
function Cu(e) {
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
var Tu = {
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
function Ou(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ru = /[A-Z]|^ms/g, Au = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Sl = function(t) {
  return t.charCodeAt(1) === 45;
}, no = function(t) {
  return t != null && typeof t != "boolean";
}, yr = /* @__PURE__ */ Ou(function(e) {
  return Sl(e) ? e : e.replace(Ru, "-$&").toLowerCase();
}), ro = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Au, function(r, i, o) {
          return ot = {
            name: i,
            styles: o,
            next: ot
          }, i;
        });
  }
  return Tu[t] !== 1 && !Sl(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function zn(e, t, n) {
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
        return ot = {
          name: i.name,
          styles: i.styles,
          next: ot
        }, i.name;
      var o = n;
      if (o.styles !== void 0) {
        var l = o.next;
        if (l !== void 0)
          for (; l !== void 0; )
            ot = {
              name: l.name,
              styles: l.styles,
              next: ot
            }, l = l.next;
        var a = o.styles + ";";
        return a;
      }
      return Iu(e, t, n);
    }
  }
  var u = n;
  return u;
}
function Iu(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += zn(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var l = n[o];
      if (typeof l != "object") {
        var a = l;
        no(a) && (r += yr(o) + ":" + ro(o, a) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && t == null)
        for (var u = 0; u < l.length; u++)
          no(l[u]) && (r += yr(o) + ":" + ro(o, l[u]) + ";");
      else {
        var s = zn(e, t, l);
        switch (o) {
          case "animation":
          case "animationName": {
            r += yr(o) + ":" + s + ";";
            break;
          }
          default:
            r += o + "{" + s + "}";
        }
      }
    }
  return r;
}
var io = /label:\s*([^\s;{]+)\s*(;|$)/g, ot;
function Pu(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  ot = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += zn(n, t, o);
  else {
    var l = o;
    i += l[0];
  }
  for (var a = 1; a < e.length; a++)
    if (i += zn(n, t, e[a]), r) {
      var u = o;
      i += u[a];
    }
  io.lastIndex = 0;
  for (var s = "", c; (c = io.exec(i)) !== null; )
    s += "-" + c[1];
  var f = Cu(i) + s;
  return {
    name: f,
    styles: i,
    next: ot
  };
}
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Nu(e, t) {
  const n = Ca(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function _u(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const oo = [];
function lo(e) {
  return oo[0] = e, Pu(oo);
}
const Du = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Mu(e) {
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
  } = e, o = Du(t), l = Object.keys(o);
  function a(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function s(d, p) {
    const x = l.indexOf(p);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(x !== -1 && typeof t[l[x]] == "number" ? t[l[x]] : p) - r / 100}${n})`;
  }
  function c(d) {
    return l.indexOf(d) + 1 < l.length ? s(d, l[l.indexOf(d) + 1]) : a(d);
  }
  function f(d) {
    const p = l.indexOf(d);
    return p === 0 ? a(l[1]) : p === l.length - 1 ? u(l[p]) : s(d, l[l.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: l,
    values: o,
    up: a,
    down: u,
    between: s,
    only: c,
    not: f,
    unit: n,
    ...i
  };
}
const $u = {
  borderRadius: 4
};
function vl(e = 8, t = ai({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((o) => {
    const l = t(o);
    return typeof l == "number" ? `${l}px` : l;
  }).join(" "));
  return n.mui = !0, n;
}
function zu(e, t) {
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
function ui(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: o = {},
    ...l
  } = e, a = Mu(n), u = vl(i);
  let s = Le({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: u,
    shape: {
      ...$u,
      ...o
    }
  }, l);
  return s = Ms(s), s.applyStyles = zu, s = t.reduce((c, f) => Le(c, f), s), s.unstable_sxConfig = {
    ...Jn,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, s.unstable_sx = function(f) {
    return zt({
      sx: f,
      theme: this
    });
  }, s;
}
function Lu(e) {
  return Object.keys(e).length === 0;
}
function Bu(e = null) {
  const t = Y.useContext(Ta);
  return !t || Lu(t) ? e : t;
}
const Fu = ui();
function ju(e = Fu) {
  return Bu(e);
}
function El(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: lo(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = lo(i.style));
  }), r;
}
const Uu = ui();
function br(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Vu(e) {
  return e ? (t, n) => n[e] : null;
}
function Wu(e, t, n) {
  e.theme = Gu(e.theme) ? n : e.theme[t] || e.theme;
}
function In(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => In(e, r));
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
    return wl(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function wl(e, t, n = []) {
  var i;
  let r;
  e: for (let o = 0; o < t.length; o += 1) {
    const l = t[o];
    if (typeof l.props == "function") {
      if (r ?? (r = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(r))
        continue;
    } else
      for (const a in l.props)
        if (e[a] !== l.props[a] && ((i = e.ownerState) == null ? void 0 : i[a]) !== l.props[a])
          continue e;
    typeof l.style == "function" ? (r ?? (r = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(l.style(r))) : n.push(l.style);
  }
  return n;
}
function Hu(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Uu,
    rootShouldForwardProp: r = br,
    slotShouldForwardProp: i = br
  } = e;
  function o(a) {
    Wu(a, t, n);
  }
  return (a, u = {}) => {
    _u(a, (C) => C.filter((S) => S !== zt));
    const {
      name: s,
      slot: c,
      skipVariantsResolver: f,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Vu(kl(c)),
      ...x
    } = u, h = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), E = d || !1;
    let v = br;
    c === "Root" || c === "root" ? v = r : c ? v = i : Ku(a) && (v = void 0);
    const _ = Nu(a, {
      shouldForwardProp: v,
      label: Yu(s, c),
      ...x
    }), w = (C) => {
      if (typeof C == "function" && C.__emotion_real !== C)
        return function(z) {
          return In(z, C);
        };
      if (Qe(C)) {
        const S = El(C);
        return S.variants ? function(W) {
          return In(W, S);
        } : S.style;
      }
      return C;
    }, R = (...C) => {
      const S = [], z = C.map(w), W = [];
      if (S.push(o), s && p && W.push(function(P) {
        var B, Q;
        const D = (Q = (B = P.theme.components) == null ? void 0 : B[s]) == null ? void 0 : Q.styleOverrides;
        if (!D)
          return null;
        const A = {};
        for (const pe in D)
          A[pe] = In(P, D[pe]);
        return p(P, A);
      }), s && !h && W.push(function(P) {
        var A, B;
        const V = P.theme, D = (B = (A = V == null ? void 0 : V.components) == null ? void 0 : A[s]) == null ? void 0 : B.variants;
        return D ? wl(P, D) : null;
      }), E || W.push(zt), Array.isArray(z[0])) {
        const O = z.shift(), P = new Array(S.length).fill(""), V = new Array(W.length).fill("");
        let D;
        D = [...P, ...O, ...V], D.raw = [...P, ...O.raw, ...V], S.unshift(D);
      }
      const H = [...S, ...z, ...W], g = _(...H);
      return a.muiName && (g.muiName = a.muiName), process.env.NODE_ENV !== "production" && (g.displayName = qu(s, c, a)), g;
    };
    return _.withConfig && (R.withConfig = _.withConfig), R;
  };
}
function qu(e, t, n) {
  return e ? `${e}${ze(t || "")}` : `Styled(${ss(n)})`;
}
function Yu(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${kl(t || "Root")}`), n;
}
function Gu(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ku(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function kl(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function ci(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), ms(e, t, n);
}
function Xu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function at(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return at(Xu(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : lt(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : lt(10, i));
  } else
    r = r.split(",");
  return r = r.map((o) => parseFloat(o)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const Qu = (e) => {
  const t = at(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Kt = (e, t) => {
  try {
    return Qu(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Zn(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Cl(e) {
  e = at(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, o = r * Math.min(i, 1 - i), l = (s, c = (s + n / 30) % 12) => i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const u = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), Zn({
    type: a,
    values: u
  });
}
function jr(e) {
  e = at(e);
  let t = e.type === "hsl" || e.type === "hsla" ? at(Cl(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ao(e, t) {
  const n = jr(e), r = jr(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ur(e, t) {
  return e = at(e), t = ci(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Zn(e);
}
function wn(e, t, n) {
  try {
    return Ur(e, t);
  } catch {
    return e;
  }
}
function fi(e, t) {
  if (e = at(e), t = ci(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Zn(e);
}
function de(e, t, n) {
  try {
    return fi(e, t);
  } catch {
    return e;
  }
}
function pi(e, t) {
  if (e = at(e), t = ci(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Zn(e);
}
function he(e, t, n) {
  try {
    return pi(e, t);
  } catch {
    return e;
  }
}
function Ju(e, t = 0.15) {
  return jr(e) > 0.5 ? fi(e, t) : pi(e, t);
}
function kn(e, t, n) {
  try {
    return Ju(e, t);
  } catch {
    return e;
  }
}
const Zu = /* @__PURE__ */ Y.createContext(void 0);
process.env.NODE_ENV !== "production" && (y.node, y.object);
function ec(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? Fr(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Fr(i, r) : r;
}
function tc({
  props: e,
  name: t
}) {
  const n = Y.useContext(Zu);
  return ec({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const so = {
  theme: void 0
};
function nc(e) {
  let t, n;
  return function(i) {
    let o = t;
    return (o === void 0 || i.theme !== n) && (so.theme = i.theme, o = El(e(so)), t = o, n = i.theme), o;
  };
}
function rc(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const uo = (e, t, n, r = []) => {
  let i = e;
  t.forEach((o, l) => {
    l === t.length - 1 ? Array.isArray(i) ? i[Number(o)] = n : i && typeof i == "object" && (i[o] = n) : i && typeof i == "object" && (i[o] || (i[o] = r.includes(o) ? [] : {}), i = i[o]);
  });
}, ic = (e, t, n) => {
  function r(i, o = [], l = []) {
    Object.entries(i).forEach(([a, u]) => {
      (!n || n && !n([...o, a])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? r(u, [...o, a], Array.isArray(u) ? [...l, a] : l) : t([...o, a], u, l));
    });
  }
  r(e);
}, oc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function xr(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, o = {}, l = {};
  return ic(
    e,
    (a, u, s) => {
      if ((typeof u == "string" || typeof u == "number") && (!r || !r(a, u))) {
        const c = `--${n ? `${n}-` : ""}${a.join("-")}`, f = oc(a, u);
        Object.assign(i, {
          [c]: f
        }), uo(o, a, `var(${c})`, s), uo(l, a, `var(${c}, ${f})`, s);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: i,
    vars: o,
    varsWithDefaults: l
  };
}
function lc(e, t = {}) {
  const {
    getSelector: n = E,
    disableCssColorScheme: r,
    colorSchemeSelector: i
  } = t, {
    colorSchemes: o = {},
    components: l,
    defaultColorScheme: a = "light",
    ...u
  } = e, {
    vars: s,
    css: c,
    varsWithDefaults: f
  } = xr(u, t);
  let d = f;
  const p = {}, {
    [a]: x,
    ...h
  } = o;
  if (Object.entries(h || {}).forEach(([w, R]) => {
    const {
      vars: C,
      css: S,
      varsWithDefaults: z
    } = xr(R, t);
    d = Le(d, z), p[w] = {
      css: S,
      vars: C
    };
  }), x) {
    const {
      css: w,
      vars: R,
      varsWithDefaults: C
    } = xr(x, t);
    d = Le(d, C), p[a] = {
      css: w,
      vars: R
    };
  }
  function E(w, R) {
    var S, z;
    let C = i;
    if (i === "class" && (C = ".%s"), i === "data" && (C = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (C = `[${i}="%s"]`), w) {
      if (C === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((z = (S = o[w]) == null ? void 0 : S.palette) == null ? void 0 : z.mode) || w})`]: {
            ":root": R
          }
        };
      if (C)
        return e.defaultColorScheme === w ? `:root, ${C.replace("%s", String(w))}` : C.replace("%s", String(w));
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
        vars: R
      }]) => {
        w = Le(w, R);
      }), w;
    },
    generateStyleSheets: () => {
      var W, H;
      const w = [], R = e.defaultColorScheme || "light";
      function C(g, O) {
        Object.keys(O).length && w.push(typeof g == "string" ? {
          [g]: {
            ...O
          }
        } : g);
      }
      C(n(void 0, {
        ...c
      }), c);
      const {
        [R]: S,
        ...z
      } = p;
      if (S) {
        const {
          css: g
        } = S, O = (H = (W = o[R]) == null ? void 0 : W.palette) == null ? void 0 : H.mode, P = !r && O ? {
          colorScheme: O,
          ...g
        } : {
          ...g
        };
        C(n(R, {
          ...P
        }), P);
      }
      return Object.entries(z).forEach(([g, {
        css: O
      }]) => {
        var D, A;
        const P = (A = (D = o[g]) == null ? void 0 : D.palette) == null ? void 0 : A.mode, V = !r && P ? {
          colorScheme: P,
          ...O
        } : {
          ...O
        };
        C(n(g, {
          ...V
        }), V);
      }), w;
    }
  };
}
function ac(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const ln = {
  black: "#000",
  white: "#fff"
}, sc = {
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
}, Ct = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Tt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Vt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Ot = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Rt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, At = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Tl() {
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
      paper: ln.white,
      default: ln.white
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
const uc = Tl();
function Ol() {
  return {
    text: {
      primary: ln.white,
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
      active: ln.white,
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
const co = Ol();
function fo(e, t, n, r) {
  const i = r.light || r, o = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = pi(e.main, i) : t === "dark" && (e.dark = fi(e.main, o)));
}
function cc(e = "light") {
  return e === "dark" ? {
    main: Ot[200],
    light: Ot[50],
    dark: Ot[400]
  } : {
    main: Ot[700],
    light: Ot[400],
    dark: Ot[800]
  };
}
function fc(e = "light") {
  return e === "dark" ? {
    main: Ct[200],
    light: Ct[50],
    dark: Ct[400]
  } : {
    main: Ct[500],
    light: Ct[300],
    dark: Ct[700]
  };
}
function pc(e = "light") {
  return e === "dark" ? {
    main: Tt[500],
    light: Tt[300],
    dark: Tt[700]
  } : {
    main: Tt[700],
    light: Tt[400],
    dark: Tt[800]
  };
}
function dc(e = "light") {
  return e === "dark" ? {
    main: Rt[400],
    light: Rt[300],
    dark: Rt[700]
  } : {
    main: Rt[700],
    light: Rt[500],
    dark: Rt[900]
  };
}
function hc(e = "light") {
  return e === "dark" ? {
    main: At[400],
    light: At[300],
    dark: At[700]
  } : {
    main: At[800],
    light: At[500],
    dark: At[900]
  };
}
function mc(e = "light") {
  return e === "dark" ? {
    main: Vt[400],
    light: Vt[300],
    dark: Vt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Vt[500],
    dark: Vt[900]
  };
}
function di(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, o = e.primary || cc(t), l = e.secondary || fc(t), a = e.error || pc(t), u = e.info || dc(t), s = e.success || hc(t), c = e.warning || mc(t);
  function f(h) {
    const E = ao(h, co.text.primary) >= n ? co.text.primary : uc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const v = ao(h, E);
      v < 3 && console.error([`MUI: The contrast ratio of ${v}:1 for ${E} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const d = ({
    color: h,
    name: E,
    mainShade: v = 500,
    lightShade: _ = 300,
    darkShade: w = 700
  }) => {
    if (h = {
      ...h
    }, !h.main && h[v] && (h.main = h[v]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${v}\` property.` : lt(11, E ? ` (${E})` : "", v));
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
} });` : lt(12, E ? ` (${E})` : "", JSON.stringify(h.main)));
    return fo(h, "light", _, r), fo(h, "dark", w, r), h.contrastText || (h.contrastText = f(h.main)), h;
  };
  let p;
  return t === "light" ? p = Tl() : t === "dark" && (p = Ol()), process.env.NODE_ENV !== "production" && (p || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Le({
    // A collection of common colors.
    common: {
      ...ln
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
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: a,
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
    grey: sc,
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
function gc(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, o] = r;
    typeof o == "object" && (t[i] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
  }), t;
}
function yc(e, t) {
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
function bc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const po = {
  textTransform: "uppercase"
}, ho = '"Roboto", "Helvetica", "Arial", sans-serif';
function xc(e, t) {
  const {
    fontFamily: n = ho,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: o = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: s,
    pxToRem: c,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof r != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const d = r / 14, p = c || ((E) => `${E / u * d}rem`), x = (E, v, _, w, R) => ({
    fontFamily: n,
    fontWeight: E,
    fontSize: p(v),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === ho ? {
      letterSpacing: `${bc(w / v)}em`
    } : {},
    ...R,
    ...s
  }), h = {
    h1: x(i, 96, 1.167, -1.5),
    h2: x(i, 60, 1.2, -0.5),
    h3: x(o, 48, 1.167, 0),
    h4: x(o, 34, 1.235, 0.25),
    h5: x(o, 24, 1.334, 0),
    h6: x(l, 20, 1.6, 0.15),
    subtitle1: x(o, 16, 1.75, 0.15),
    subtitle2: x(l, 14, 1.57, 0.1),
    body1: x(o, 16, 1.5, 0.15),
    body2: x(o, 14, 1.43, 0.15),
    button: x(l, 14, 1.75, 0.4, po),
    caption: x(o, 12, 1.66, 0.4),
    overline: x(o, 12, 2.66, 1, po),
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
    htmlFontSize: u,
    pxToRem: p,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: i,
    fontWeightRegular: o,
    fontWeightMedium: l,
    fontWeightBold: a,
    ...h
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const Sc = 0.2, vc = 0.14, Ec = 0.12;
function Se(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Sc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${vc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ec})`].join(",");
}
const wc = ["none", Se(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Se(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Se(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Se(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Se(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Se(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Se(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Se(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Se(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Se(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Se(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Se(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Se(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Se(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Se(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Se(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Se(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Se(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Se(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Se(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Se(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Se(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Se(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Se(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], kc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Cc = {
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
function mo(e) {
  return `${Math.round(e)}ms`;
}
function Tc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Oc(e) {
  const t = {
    ...kc,
    ...e.easing
  }, n = {
    ...Cc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Tc,
    create: (i = ["all"], o = {}) => {
      const {
        duration: l = n.standard,
        easing: a = t.easeInOut,
        delay: u = 0,
        ...s
      } = o;
      if (process.env.NODE_ENV !== "production") {
        const c = (d) => typeof d == "string", f = (d) => !Number.isNaN(parseFloat(d));
        !c(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !f(l) && !c(l) && console.error(`MUI: Argument "duration" must be a number or a string but found ${l}.`), c(a) || console.error('MUI: Argument "easing" must be a string.'), !f(u) && !c(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof o != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(s).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(s).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((c) => `${c} ${typeof l == "string" ? l : mo(l)} ${a} ${typeof u == "string" ? u : mo(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Rc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Ac(e) {
  return Qe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Rl(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let o = 0; o < i.length; o++) {
      const [l, a] = i[o];
      !Ac(a) || l.startsWith("unstable_") ? delete r[l] : Qe(a) && (r[l] = {
        ...a
      }, n(r[l]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Vr(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: i,
    palette: o = {},
    transitions: l = {},
    typography: a = {},
    shape: u,
    ...s
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : lt(20));
  const c = di(o), f = ui(e);
  let d = Le(f, {
    mixins: yc(f.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: wc.slice(),
    typography: xc(c, a),
    transitions: Oc(l),
    zIndex: {
      ...Rc
    }
  });
  if (d = Le(d, s), d = t.reduce((p, x) => Le(p, x), d), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], x = (h, E) => {
      let v;
      for (v in h) {
        const _ = h[v];
        if (p.includes(v) && Object.keys(_).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = St("", v);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: _
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[v] = {};
        }
      }
    };
    Object.keys(d.components).forEach((h) => {
      const E = d.components[h].styleOverrides;
      E && h.startsWith("Mui") && x(E, h);
    });
  }
  return d.unstable_sxConfig = {
    ...Jn,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(x) {
    return zt({
      sx: x,
      theme: this
    });
  }, d.toRuntimeSource = Rl, d;
}
function Wr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Ic = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Wr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Al(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Il(e) {
  return e === "dark" ? Ic : [];
}
function Pc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, o = di(t);
  return {
    palette: o,
    opacity: {
      ...Al(o.mode),
      ...n
    },
    overlays: r || Il(o.mode),
    ...i
  };
}
function Nc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const _c = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Dc = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let o = i;
  if (i === "class" && (o = ".%s"), i === "data" && (o = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (o = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const l = {};
      return _c(e.cssVarPrefix).forEach((a) => {
        l[a] = n[a], delete n[a];
      }), o === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: l
        }
      } : o ? {
        [o.replace("%s", t)]: l,
        [`${r}, ${o.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...l
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
function Mc(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function I(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Xt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Cl(e);
}
function Xe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Kt(Xt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function $c(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const We = (e) => {
  try {
    return e();
  } catch {
  }
}, zc = (e = "mui") => rc(e);
function Sr(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Pc({
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
    ...l
  } = Vr({
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
      ...Al(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Il(i)
  }, l;
}
function Lc(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: o = "mui",
    shouldSkipGeneratingVar: l = Nc,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...s
  } = e, c = Object.keys(n)[0], f = r || (n.light && c !== "light" ? "light" : c), d = zc(o), {
    [f]: p,
    light: x,
    dark: h,
    ...E
  } = n, v = {
    ...E
  };
  let _ = p;
  if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (_ = !0), !_)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : lt(21, f));
  const w = Sr(v, _, s, f);
  x && !v.light && Sr(v, x, void 0, "light"), h && !v.dark && Sr(v, h, void 0, "dark");
  let R = {
    defaultColorScheme: f,
    ...w,
    cssVarPrefix: o,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: d,
    colorSchemes: v,
    font: {
      ...gc(w.typography),
      ...w.font
    },
    spacing: $c(s.spacing)
  };
  Object.keys(R.colorSchemes).forEach((H) => {
    const g = R.colorSchemes[H].palette, O = (P) => {
      const V = P.split("-"), D = V[1], A = V[2];
      return d(P, g[D][A]);
    };
    if (g.mode === "light" && (I(g.common, "background", "#fff"), I(g.common, "onBackground", "#000")), g.mode === "dark" && (I(g.common, "background", "#000"), I(g.common, "onBackground", "#fff")), Mc(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      I(g.Alert, "errorColor", de(g.error.light, 0.6)), I(g.Alert, "infoColor", de(g.info.light, 0.6)), I(g.Alert, "successColor", de(g.success.light, 0.6)), I(g.Alert, "warningColor", de(g.warning.light, 0.6)), I(g.Alert, "errorFilledBg", O("palette-error-main")), I(g.Alert, "infoFilledBg", O("palette-info-main")), I(g.Alert, "successFilledBg", O("palette-success-main")), I(g.Alert, "warningFilledBg", O("palette-warning-main")), I(g.Alert, "errorFilledColor", We(() => g.getContrastText(g.error.main))), I(g.Alert, "infoFilledColor", We(() => g.getContrastText(g.info.main))), I(g.Alert, "successFilledColor", We(() => g.getContrastText(g.success.main))), I(g.Alert, "warningFilledColor", We(() => g.getContrastText(g.warning.main))), I(g.Alert, "errorStandardBg", he(g.error.light, 0.9)), I(g.Alert, "infoStandardBg", he(g.info.light, 0.9)), I(g.Alert, "successStandardBg", he(g.success.light, 0.9)), I(g.Alert, "warningStandardBg", he(g.warning.light, 0.9)), I(g.Alert, "errorIconColor", O("palette-error-main")), I(g.Alert, "infoIconColor", O("palette-info-main")), I(g.Alert, "successIconColor", O("palette-success-main")), I(g.Alert, "warningIconColor", O("palette-warning-main")), I(g.AppBar, "defaultBg", O("palette-grey-100")), I(g.Avatar, "defaultBg", O("palette-grey-400")), I(g.Button, "inheritContainedBg", O("palette-grey-300")), I(g.Button, "inheritContainedHoverBg", O("palette-grey-A100")), I(g.Chip, "defaultBorder", O("palette-grey-400")), I(g.Chip, "defaultAvatarColor", O("palette-grey-700")), I(g.Chip, "defaultIconColor", O("palette-grey-700")), I(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), I(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), I(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), I(g.LinearProgress, "primaryBg", he(g.primary.main, 0.62)), I(g.LinearProgress, "secondaryBg", he(g.secondary.main, 0.62)), I(g.LinearProgress, "errorBg", he(g.error.main, 0.62)), I(g.LinearProgress, "infoBg", he(g.info.main, 0.62)), I(g.LinearProgress, "successBg", he(g.success.main, 0.62)), I(g.LinearProgress, "warningBg", he(g.warning.main, 0.62)), I(g.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), I(g.Slider, "primaryTrack", he(g.primary.main, 0.62)), I(g.Slider, "secondaryTrack", he(g.secondary.main, 0.62)), I(g.Slider, "errorTrack", he(g.error.main, 0.62)), I(g.Slider, "infoTrack", he(g.info.main, 0.62)), I(g.Slider, "successTrack", he(g.success.main, 0.62)), I(g.Slider, "warningTrack", he(g.warning.main, 0.62));
      const P = kn(g.background.default, 0.8);
      I(g.SnackbarContent, "bg", P), I(g.SnackbarContent, "color", We(() => g.getContrastText(P))), I(g.SpeedDialAction, "fabHoverBg", kn(g.background.paper, 0.15)), I(g.StepConnector, "border", O("palette-grey-400")), I(g.StepContent, "border", O("palette-grey-400")), I(g.Switch, "defaultColor", O("palette-common-white")), I(g.Switch, "defaultDisabledColor", O("palette-grey-100")), I(g.Switch, "primaryDisabledColor", he(g.primary.main, 0.62)), I(g.Switch, "secondaryDisabledColor", he(g.secondary.main, 0.62)), I(g.Switch, "errorDisabledColor", he(g.error.main, 0.62)), I(g.Switch, "infoDisabledColor", he(g.info.main, 0.62)), I(g.Switch, "successDisabledColor", he(g.success.main, 0.62)), I(g.Switch, "warningDisabledColor", he(g.warning.main, 0.62)), I(g.TableCell, "border", he(wn(g.divider, 1), 0.88)), I(g.Tooltip, "bg", wn(g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      I(g.Alert, "errorColor", he(g.error.light, 0.6)), I(g.Alert, "infoColor", he(g.info.light, 0.6)), I(g.Alert, "successColor", he(g.success.light, 0.6)), I(g.Alert, "warningColor", he(g.warning.light, 0.6)), I(g.Alert, "errorFilledBg", O("palette-error-dark")), I(g.Alert, "infoFilledBg", O("palette-info-dark")), I(g.Alert, "successFilledBg", O("palette-success-dark")), I(g.Alert, "warningFilledBg", O("palette-warning-dark")), I(g.Alert, "errorFilledColor", We(() => g.getContrastText(g.error.dark))), I(g.Alert, "infoFilledColor", We(() => g.getContrastText(g.info.dark))), I(g.Alert, "successFilledColor", We(() => g.getContrastText(g.success.dark))), I(g.Alert, "warningFilledColor", We(() => g.getContrastText(g.warning.dark))), I(g.Alert, "errorStandardBg", de(g.error.light, 0.9)), I(g.Alert, "infoStandardBg", de(g.info.light, 0.9)), I(g.Alert, "successStandardBg", de(g.success.light, 0.9)), I(g.Alert, "warningStandardBg", de(g.warning.light, 0.9)), I(g.Alert, "errorIconColor", O("palette-error-main")), I(g.Alert, "infoIconColor", O("palette-info-main")), I(g.Alert, "successIconColor", O("palette-success-main")), I(g.Alert, "warningIconColor", O("palette-warning-main")), I(g.AppBar, "defaultBg", O("palette-grey-900")), I(g.AppBar, "darkBg", O("palette-background-paper")), I(g.AppBar, "darkColor", O("palette-text-primary")), I(g.Avatar, "defaultBg", O("palette-grey-600")), I(g.Button, "inheritContainedBg", O("palette-grey-800")), I(g.Button, "inheritContainedHoverBg", O("palette-grey-700")), I(g.Chip, "defaultBorder", O("palette-grey-700")), I(g.Chip, "defaultAvatarColor", O("palette-grey-300")), I(g.Chip, "defaultIconColor", O("palette-grey-300")), I(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), I(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), I(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), I(g.LinearProgress, "primaryBg", de(g.primary.main, 0.5)), I(g.LinearProgress, "secondaryBg", de(g.secondary.main, 0.5)), I(g.LinearProgress, "errorBg", de(g.error.main, 0.5)), I(g.LinearProgress, "infoBg", de(g.info.main, 0.5)), I(g.LinearProgress, "successBg", de(g.success.main, 0.5)), I(g.LinearProgress, "warningBg", de(g.warning.main, 0.5)), I(g.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), I(g.Slider, "primaryTrack", de(g.primary.main, 0.5)), I(g.Slider, "secondaryTrack", de(g.secondary.main, 0.5)), I(g.Slider, "errorTrack", de(g.error.main, 0.5)), I(g.Slider, "infoTrack", de(g.info.main, 0.5)), I(g.Slider, "successTrack", de(g.success.main, 0.5)), I(g.Slider, "warningTrack", de(g.warning.main, 0.5));
      const P = kn(g.background.default, 0.98);
      I(g.SnackbarContent, "bg", P), I(g.SnackbarContent, "color", We(() => g.getContrastText(P))), I(g.SpeedDialAction, "fabHoverBg", kn(g.background.paper, 0.15)), I(g.StepConnector, "border", O("palette-grey-600")), I(g.StepContent, "border", O("palette-grey-600")), I(g.Switch, "defaultColor", O("palette-grey-300")), I(g.Switch, "defaultDisabledColor", O("palette-grey-600")), I(g.Switch, "primaryDisabledColor", de(g.primary.main, 0.55)), I(g.Switch, "secondaryDisabledColor", de(g.secondary.main, 0.55)), I(g.Switch, "errorDisabledColor", de(g.error.main, 0.55)), I(g.Switch, "infoDisabledColor", de(g.info.main, 0.55)), I(g.Switch, "successDisabledColor", de(g.success.main, 0.55)), I(g.Switch, "warningDisabledColor", de(g.warning.main, 0.55)), I(g.TableCell, "border", de(wn(g.divider, 1), 0.68)), I(g.Tooltip, "bg", wn(g.grey[700], 0.92));
    }
    Xe(g.background, "default"), Xe(g.background, "paper"), Xe(g.common, "background"), Xe(g.common, "onBackground"), Xe(g, "divider"), Object.keys(g).forEach((P) => {
      const V = g[P];
      P !== "tonalOffset" && V && typeof V == "object" && (V.main && I(g[P], "mainChannel", Kt(Xt(V.main))), V.light && I(g[P], "lightChannel", Kt(Xt(V.light))), V.dark && I(g[P], "darkChannel", Kt(Xt(V.dark))), V.contrastText && I(g[P], "contrastTextChannel", Kt(Xt(V.contrastText))), P === "text" && (Xe(g[P], "primary"), Xe(g[P], "secondary")), P === "action" && (V.active && Xe(g[P], "active"), V.selected && Xe(g[P], "selected")));
    });
  }), R = t.reduce((H, g) => Le(H, g), R);
  const C = {
    prefix: o,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: Dc(R)
  }, {
    vars: S,
    generateThemeVars: z,
    generateStyleSheets: W
  } = lc(R, C);
  return R.vars = S, Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([H, g]) => {
    R[H] = g;
  }), R.generateThemeVars = z, R.generateStyleSheets = W, R.generateSpacing = function() {
    return vl(s.spacing, ai(this));
  }, R.getColorSchemeSelector = ac(a), R.spacing = R.generateSpacing(), R.shouldSkipGeneratingVar = l, R.unstable_sxConfig = {
    ...Jn,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, R.unstable_sx = function(g) {
    return zt({
      sx: g,
      theme: this
    });
  }, R.toRuntimeSource = Rl, R;
}
function go(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: di({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Bc(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: i = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: o = n == null ? void 0 : n.mode,
    ...l
  } = e, a = o || "light", u = i == null ? void 0 : i[a], s = {
    ...i,
    ...n ? {
      [a]: {
        ...typeof u != "boolean" && u,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Vr(e, ...t);
    let c = n;
    "palette" in e || s[a] && (s[a] !== !0 ? c = s[a].palette : a === "dark" && (c = {
      mode: "dark"
    }));
    const f = Vr({
      ...e,
      palette: c
    }, ...t);
    return f.defaultColorScheme = a, f.colorSchemes = s, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...s.light !== !0 && s.light,
      palette: f.palette
    }, go(f, "dark", s.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...s.dark !== !0 && s.dark,
      palette: f.palette
    }, go(f, "light", s.light)), f;
  }
  return !n && !("light" in s) && a === "light" && (s.light = !0), Lc({
    ...l,
    colorSchemes: s,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Pl = Bc(), Nl = "$$material";
function er() {
  const e = ju(Pl);
  return process.env.NODE_ENV !== "production" && Y.useDebugValue(e), e[Nl] || e;
}
function Fc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const jc = (e) => Fc(e) && e !== "classes", et = Hu({
  themeId: Nl,
  defaultTheme: Pl,
  rootShouldForwardProp: jc
}), tr = nc;
process.env.NODE_ENV !== "production" && (y.node, y.object.isRequired);
function pn(e) {
  return tc(e);
}
function Je(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: i,
    externalForwardedProps: o,
    internalForwardedProps: l,
    shouldForwardComponentProp: a = !1,
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
  } = o, p = c[e] || r, x = xs(f[e], i), {
    props: {
      component: h,
      ...E
    },
    internalRef: v
  } = bs({
    className: n,
    ...u,
    externalForwardedProps: e === "root" ? d : void 0,
    externalSlotProps: x
  }), _ = Bt(v, x == null ? void 0 : x.ref, t.ref), w = e === "root" ? h || s : h, R = ys(p, {
    ...e === "root" && !s && !c[e] && l,
    ...e !== "root" && !c[e] && l,
    ...E,
    ...w && !a && {
      as: w
    },
    ...w && a && {
      component: w
    },
    ref: _
  }, i);
  return [p, R];
}
function Uc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Hr(e, t) {
  return Hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Hr(e, t);
}
function Vc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Hr(e, t);
}
const yo = {
  disabled: !1
};
var Wc = process.env.NODE_ENV !== "production" ? y.oneOfType([y.number, y.shape({
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
const _l = Gt.createContext(null);
var Hc = function(t) {
  return t.scrollTop;
}, Qt = "unmounted", dt = "exited", ht = "entering", Nt = "entered", qr = "exiting", tt = /* @__PURE__ */ function(e) {
  Vc(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var l = i, a = l && !l.isMounting ? r.enter : r.appear, u;
    return o.appearStatus = null, r.in ? a ? (u = dt, o.appearStatus = ht) : u = Nt : r.unmountOnExit || r.mountOnEnter ? u = Qt : u = dt, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var l = i.in;
    return l && o.status === Qt ? {
      status: dt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== ht && l !== Nt && (o = ht) : (l === ht || l === Nt) && (o = qr);
    }
    this.updateStatus(!1, o);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, o, l, a;
    return o = l = a = i, i != null && typeof i != "number" && (o = i.exit, l = i.enter, a = i.appear !== void 0 ? i.appear : l), {
      exit: o,
      enter: l,
      appear: a
    };
  }, n.updateStatus = function(i, o) {
    if (i === void 0 && (i = !1), o !== null)
      if (this.cancelNextCallback(), o === ht) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : xn.findDOMNode(this);
          l && Hc(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === dt && this.setState({
      status: Qt
    });
  }, n.performEnter = function(i) {
    var o = this, l = this.props.enter, a = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [a] : [xn.findDOMNode(this), a], s = u[0], c = u[1], f = this.getTimeouts(), d = a ? f.appear : f.enter;
    if (!i && !l || yo.disabled) {
      this.safeSetState({
        status: Nt
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, c), this.safeSetState({
      status: ht
    }, function() {
      o.props.onEntering(s, c), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: Nt
        }, function() {
          o.props.onEntered(s, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, o = this.props.exit, l = this.getTimeouts(), a = this.props.nodeRef ? void 0 : xn.findDOMNode(this);
    if (!o || yo.disabled) {
      this.safeSetState({
        status: dt
      }, function() {
        i.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: qr
    }, function() {
      i.props.onExiting(a), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: dt
        }, function() {
          i.props.onExited(a);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, o) {
    o = this.setNextCallback(o), this.setState(i, o);
  }, n.setNextCallback = function(i) {
    var o = this, l = !0;
    return this.nextCallback = function(a) {
      l && (l = !1, o.nextCallback = null, i(a));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, o) {
    this.setNextCallback(o);
    var l = this.props.nodeRef ? this.props.nodeRef.current : xn.findDOMNode(this), a = i == null && !this.props.addEndListener;
    if (!l || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var u = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], s = u[0], c = u[1];
      this.props.addEndListener(s, c);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Qt)
      return null;
    var o = this.props, l = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var a = Uc(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Gt.createElement(_l.Provider, {
        value: null
      }, typeof l == "function" ? l(i, a) : Gt.cloneElement(Gt.Children.only(l), a))
    );
  }, t;
}(Gt.Component);
tt.contextType = _l;
tt.propTypes = process.env.NODE_ENV !== "production" ? {
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
      var l = e[t];
      return y.instanceOf(l && "ownerDocument" in l ? l.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, o);
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
    var n = Wc;
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
function It() {
}
tt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: It,
  onEntering: It,
  onEntered: It,
  onExit: It,
  onExiting: It,
  onExited: It
};
tt.UNMOUNTED = Qt;
tt.EXITED = dt;
tt.ENTERING = ht;
tt.ENTERED = Nt;
tt.EXITING = qr;
const qc = (e) => e.scrollTop;
function bo(e, t) {
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
const Yc = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ln = /* @__PURE__ */ Y.forwardRef(function(t, n) {
  const r = er(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: o,
    appear: l = !0,
    children: a,
    easing: u,
    in: s,
    onEnter: c,
    onEntered: f,
    onEntering: d,
    onExit: p,
    onExited: x,
    onExiting: h,
    style: E,
    timeout: v = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: _ = tt,
    ...w
  } = t, R = Y.useRef(null), C = Bt(R, li(a), n), S = (D) => (A) => {
    if (D) {
      const B = R.current;
      A === void 0 ? D(B) : D(B, A);
    }
  }, z = S(d), W = S((D, A) => {
    qc(D);
    const B = bo({
      style: E,
      timeout: v,
      easing: u
    }, {
      mode: "enter"
    });
    D.style.webkitTransition = r.transitions.create("opacity", B), D.style.transition = r.transitions.create("opacity", B), c && c(D, A);
  }), H = S(f), g = S(h), O = S((D) => {
    const A = bo({
      style: E,
      timeout: v,
      easing: u
    }, {
      mode: "exit"
    });
    D.style.webkitTransition = r.transitions.create("opacity", A), D.style.transition = r.transitions.create("opacity", A), p && p(D);
  }), P = S(x);
  return /* @__PURE__ */ T(_, {
    appear: l,
    in: s,
    nodeRef: R,
    onEnter: W,
    onEntered: H,
    onEntering: z,
    onExit: O,
    onExited: P,
    onExiting: g,
    addEndListener: (D) => {
      o && o(R.current, D);
    },
    timeout: v,
    ...w,
    children: (D, {
      ownerState: A,
      ...B
    }) => /* @__PURE__ */ Y.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: D === "exited" && !s ? "hidden" : void 0,
        ...Yc[D],
        ...E,
        ...a.props.style
      },
      ref: C,
      ...B
    })
  });
});
process.env.NODE_ENV !== "production" && (Ln.propTypes = {
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
  children: Un.isRequired,
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
function Gc(e) {
  return St("MuiBackdrop", e);
}
un("MuiBackdrop", ["root", "invisible"]);
const Kc = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return sn({
    root: ["root", n && "invisible"]
  }, Gc, t);
}, Xc = et("div", {
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
}), hi = /* @__PURE__ */ Y.forwardRef(function(t, n) {
  const r = pn({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: o,
    component: l = "div",
    invisible: a = !1,
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
    component: l,
    invisible: a
  }, v = Kc(E), _ = {
    transition: p,
    root: s.Root,
    ...d
  }, w = {
    ...c,
    ...f
  }, R = {
    slots: _,
    slotProps: w
  }, [C, S] = Je("root", {
    elementType: Xc,
    externalForwardedProps: R,
    className: Ye(v.root, o),
    ownerState: E
  }), [z, W] = Je("transition", {
    elementType: Ln,
    externalForwardedProps: R,
    ownerState: E
  });
  return /* @__PURE__ */ T(z, {
    in: u,
    timeout: x,
    ...h,
    ...W,
    children: /* @__PURE__ */ T(C, {
      "aria-hidden": !0,
      ...S,
      classes: v,
      ref: n,
      children: i
    })
  });
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
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
function Qc(e) {
  return typeof e == "function" ? e() : e;
}
function Jc(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const xo = () => {
}, Cn = new ks();
function Zc(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: o,
    onTransitionExited: l,
    children: a,
    onClose: u,
    open: s,
    rootRef: c
  } = e, f = Y.useRef({}), d = Y.useRef(null), p = Y.useRef(null), x = Bt(p, c), [h, E] = Y.useState(!s), v = Jc(a);
  let _ = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (_ = !1);
  const w = () => xt(d.current), R = () => (f.current.modalRef = p.current, f.current.mount = d.current, f.current), C = () => {
    Cn.mount(R(), {
      disableScrollLock: r
    }), p.current && (p.current.scrollTop = 0);
  }, S = Ki(() => {
    const A = Qc(t) || w().body;
    Cn.add(R(), A), p.current && C();
  }), z = () => Cn.isTopModal(R()), W = Ki((A) => {
    d.current = A, A && (s && z() ? C() : p.current && Jt(p.current, _));
  }), H = Y.useCallback(() => {
    Cn.remove(R(), _);
  }, [_]);
  Y.useEffect(() => () => {
    H();
  }, [H]), Y.useEffect(() => {
    s ? S() : (!v || !i) && H();
  }, [s, H, v, i, S]);
  const g = (A) => (B) => {
    var Q;
    (Q = A.onKeyDown) == null || Q.call(A, B), !(B.key !== "Escape" || B.which === 229 || // Wait until IME is settled.
    !z()) && (n || (B.stopPropagation(), u && u(B, "escapeKeyDown")));
  }, O = (A) => (B) => {
    var Q;
    (Q = A.onClick) == null || Q.call(A, B), B.target === B.currentTarget && u && u(B, "backdropClick");
  };
  return {
    getRootProps: (A = {}) => {
      const B = bl(e);
      delete B.onTransitionEnter, delete B.onTransitionExited;
      const Q = {
        ...B,
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
        ...Q,
        onKeyDown: g(Q),
        ref: x
      };
    },
    getBackdropProps: (A = {}) => {
      const B = A;
      return {
        "aria-hidden": !0,
        ...B,
        onClick: O(B),
        open: s
      };
    },
    getTransitionProps: () => {
      const A = () => {
        E(!1), o && o();
      }, B = () => {
        E(!0), l && l(), i && H();
      };
      return {
        onEnter: Gi(A, (a == null ? void 0 : a.props.onEnter) ?? xo),
        onExited: Gi(B, (a == null ? void 0 : a.props.onExited) ?? xo)
      };
    },
    rootRef: x,
    portalRef: W,
    isTopModal: z,
    exited: h,
    hasTransition: v
  };
}
function ef(e) {
  return St("MuiModal", e);
}
un("MuiModal", ["root", "hidden", "backdrop"]);
function tf(e) {
  return St("MuiSvgIcon", e);
}
un("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const nf = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${ze(t)}`, `fontSize${ze(n)}`]
  };
  return sn(i, tf, r);
}, rf = et("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ze(n.color)}`], t[`fontSize${ze(n.fontSize)}`]];
  }
})(tr(({
  theme: e
}) => {
  var t, n, r, i, o, l, a, u, s, c, f, d, p, x;
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
          fontSize: ((l = (o = e.typography) == null ? void 0 : o.pxToRem) == null ? void 0 : l.call(o, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((u = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : u.call(a, 24)) || "1.5rem"
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
        var E, v;
        return {
          props: {
            color: h
          },
          style: {
            color: (v = (E = (e.vars ?? e).palette) == null ? void 0 : E[h]) == null ? void 0 : v.main
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
})), Bn = /* @__PURE__ */ Y.forwardRef(function(t, n) {
  const r = pn({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: o,
    color: l = "inherit",
    component: a = "svg",
    fontSize: u = "medium",
    htmlColor: s,
    inheritViewBox: c = !1,
    titleAccess: f,
    viewBox: d = "0 0 24 24",
    ...p
  } = r, x = /* @__PURE__ */ Y.isValidElement(i) && i.type === "svg", h = {
    ...r,
    color: l,
    component: a,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: c,
    viewBox: d,
    hasSvgAsChild: x
  }, E = {};
  c || (E.viewBox = d);
  const v = nf(h);
  return /* @__PURE__ */ ue(rf, {
    as: a,
    className: Ye(v.root, o),
    focusable: "false",
    color: s,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...E,
    ...p,
    ...x && i.props,
    ownerState: h,
    children: [x ? i.props.children : i, f ? /* @__PURE__ */ T("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Bn.propTypes = {
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
Bn.muiName = "SvgIcon";
function mi(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ T(Bn, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Bn.muiName, /* @__PURE__ */ Y.memo(/* @__PURE__ */ Y.forwardRef(n));
}
const of = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return sn({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, ef, r);
}, lf = et("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(tr(({
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
}))), af = et(hi, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Dl = /* @__PURE__ */ Y.forwardRef(function(t, n) {
  const r = pn({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = af,
    BackdropProps: o,
    classes: l,
    className: a,
    closeAfterTransition: u = !1,
    children: s,
    container: c,
    component: f,
    components: d = {},
    componentsProps: p = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: h = !1,
    disableEscapeKeyDown: E = !1,
    disablePortal: v = !1,
    disableRestoreFocus: _ = !1,
    disableScrollLock: w = !1,
    hideBackdrop: R = !1,
    keepMounted: C = !1,
    onBackdropClick: S,
    onClose: z,
    onTransitionEnter: W,
    onTransitionExited: H,
    open: g,
    slotProps: O = {},
    slots: P = {},
    // eslint-disable-next-line react/prop-types
    theme: V,
    ...D
  } = r, A = {
    ...r,
    closeAfterTransition: u,
    disableAutoFocus: x,
    disableEnforceFocus: h,
    disableEscapeKeyDown: E,
    disablePortal: v,
    disableRestoreFocus: _,
    disableScrollLock: w,
    hideBackdrop: R,
    keepMounted: C
  }, {
    getRootProps: B,
    getBackdropProps: Q,
    getTransitionProps: pe,
    portalRef: ye,
    isTopModal: m,
    exited: M,
    hasTransition: q
  } = Zc({
    ...A,
    rootRef: n
  }), b = {
    ...A,
    exited: M
  }, U = of(b), K = {};
  if (s.props.tabIndex === void 0 && (K.tabIndex = "-1"), q) {
    const {
      onEnter: F,
      onExited: ve
    } = pe();
    K.onEnter = F, K.onExited = ve;
  }
  const j = {
    ...D,
    slots: {
      root: d.Root,
      backdrop: d.Backdrop,
      ...P
    },
    slotProps: {
      ...p,
      ...O
    }
  }, [G, X] = Je("root", {
    elementType: lf,
    externalForwardedProps: j,
    getSlotProps: B,
    additionalProps: {
      ref: n,
      as: f
    },
    ownerState: b,
    className: Ye(a, U == null ? void 0 : U.root, !b.open && b.exited && (U == null ? void 0 : U.hidden))
  }), [ne, J] = Je("backdrop", {
    elementType: i,
    externalForwardedProps: j,
    additionalProps: o,
    getSlotProps: (F) => Q({
      ...F,
      onClick: (ve) => {
        S && S(ve), F != null && F.onClick && F.onClick(ve);
      }
    }),
    className: Ye(o == null ? void 0 : o.className, U == null ? void 0 : U.backdrop),
    ownerState: b
  }), be = Bt(o == null ? void 0 : o.ref, J.ref);
  return !C && !g && (!q || M) ? null : /* @__PURE__ */ T(Mn, {
    ref: ye,
    container: c,
    disablePortal: v,
    children: /* @__PURE__ */ ue(G, {
      ...X,
      children: [!R && i ? /* @__PURE__ */ T(ne, {
        ...J,
        ref: be
      }) : null, /* @__PURE__ */ T(Dn, {
        disableEnforceFocus: h,
        disableAutoFocus: x,
        disableRestoreFocus: _,
        isEnabled: m,
        open: g,
        children: /* @__PURE__ */ Y.cloneElement(s, K)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (Dl.propTypes = {
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
  children: Un.isRequired,
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
  container: y.oneOfType([ml, y.func]),
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
function sf(e) {
  return St("MuiPaper", e);
}
un("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const uf = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, o = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return sn(o, sf, i);
}, cf = et("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(tr(({
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
}))), gi = /* @__PURE__ */ Y.forwardRef(function(t, n) {
  var p;
  const r = pn({
    props: t,
    name: "MuiPaper"
  }), i = er(), {
    className: o,
    component: l = "div",
    elevation: a = 1,
    square: u = !1,
    variant: s = "elevation",
    ...c
  } = r, f = {
    ...r,
    component: l,
    elevation: a,
    square: u,
    variant: s
  }, d = uf(f);
  return process.env.NODE_ENV !== "production" && i.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ T(cf, {
    as: l,
    ownerState: f,
    className: Ye(d.root, o),
    ref: n,
    ...c,
    style: {
      ...s === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[a],
        ...i.vars && {
          "--Paper-overlay": (p = i.vars.overlays) == null ? void 0 : p[a]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ur("#fff", Wr(a))}, ${Ur("#fff", Wr(a))})`
        }
      },
      ...c.style
    }
  });
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
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
  elevation: oi(fs, (e) => {
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
function ff(e) {
  return St("MuiDialog", e);
}
const vr = un("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Ml = /* @__PURE__ */ Y.createContext({});
process.env.NODE_ENV !== "production" && (Ml.displayName = "DialogContext");
const pf = et(hi, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), df = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: i,
    fullScreen: o
  } = e, l = {
    root: ["root"],
    container: ["container", `scroll${ze(n)}`],
    paper: ["paper", `paperScroll${ze(n)}`, `paperWidth${ze(String(r))}`, i && "paperFullWidth", o && "paperFullScreen"]
  };
  return sn(l, ff, t);
}, hf = et(Dl, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), mf = et("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${ze(n.scroll)}`]];
  }
})({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      overflowY: "auto",
      overflowX: "hidden",
      textAlign: "center",
      "&::after": {
        content: '""',
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0"
      }
    }
  }]
}), gf = et(gi, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${ze(n.scroll)}`], t[`paperWidth${ze(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(tr(({
  theme: e
}) => ({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  },
  variants: [{
    props: {
      scroll: "paper"
    },
    style: {
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100% - 64px)"
    }
  }, {
    props: {
      scroll: "body"
    },
    style: {
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "initial"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.maxWidth,
    style: {
      maxWidth: "calc(100% - 64px)"
    }
  }, {
    props: {
      maxWidth: "xs"
    },
    style: {
      maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
      [`&.${vr.paperScrollBody}`]: {
        [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  }, ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
    props: {
      maxWidth: t
    },
    style: {
      maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
      [`&.${vr.paperScrollBody}`]: {
        [e.breakpoints.down(e.breakpoints.values[t] + 32 * 2)]: {
          maxWidth: "calc(100% - 64px)"
        }
      }
    }
  })), {
    props: ({
      ownerState: t
    }) => t.fullWidth,
    style: {
      width: "calc(100% - 64px)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.fullScreen,
    style: {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      height: "100%",
      maxHeight: "none",
      borderRadius: 0,
      [`&.${vr.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), $l = /* @__PURE__ */ Y.forwardRef(function(t, n) {
  const r = pn({
    props: t,
    name: "MuiDialog"
  }), i = er(), o = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": l,
    "aria-labelledby": a,
    "aria-modal": u = !0,
    BackdropComponent: s,
    BackdropProps: c,
    children: f,
    className: d,
    disableEscapeKeyDown: p = !1,
    fullScreen: x = !1,
    fullWidth: h = !1,
    maxWidth: E = "sm",
    onBackdropClick: v,
    onClick: _,
    onClose: w,
    open: R,
    PaperComponent: C = gi,
    PaperProps: S = {},
    scroll: z = "paper",
    slots: W = {},
    slotProps: H = {},
    TransitionComponent: g = Ln,
    transitionDuration: O = o,
    TransitionProps: P,
    ...V
  } = r, D = {
    ...r,
    disableEscapeKeyDown: p,
    fullScreen: x,
    fullWidth: h,
    maxWidth: E,
    scroll: z
  }, A = df(D), B = Y.useRef(), Q = (Ae) => {
    B.current = Ae.target === Ae.currentTarget;
  }, pe = (Ae) => {
    _ && _(Ae), B.current && (B.current = null, v && v(Ae), w && w(Ae, "backdropClick"));
  }, ye = ns(a), m = Y.useMemo(() => ({
    titleId: ye
  }), [ye]), M = {
    transition: g,
    ...W
  }, q = {
    transition: P,
    paper: S,
    backdrop: c,
    ...H
  }, b = {
    slots: M,
    slotProps: q
  }, [U, K] = Je("root", {
    elementType: hf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: b,
    ownerState: D,
    className: Ye(A.root, d),
    ref: n
  }), [j, G] = Je("backdrop", {
    elementType: pf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: b,
    ownerState: D
  }), [X, ne] = Je("paper", {
    elementType: gf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: b,
    ownerState: D,
    className: Ye(A.paper, S.className)
  }), [J, be] = Je("container", {
    elementType: mf,
    externalForwardedProps: b,
    ownerState: D,
    className: Ye(A.container)
  }), [F, ve] = Je("transition", {
    elementType: Ln,
    externalForwardedProps: b,
    ownerState: D,
    additionalProps: {
      appear: !0,
      in: R,
      timeout: O,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ T(U, {
    closeAfterTransition: !0,
    slots: {
      backdrop: j
    },
    slotProps: {
      backdrop: {
        transitionDuration: O,
        as: s,
        ...G
      }
    },
    disableEscapeKeyDown: p,
    onClose: w,
    open: R,
    onClick: pe,
    ...K,
    ...V,
    children: /* @__PURE__ */ T(F, {
      ...ve,
      children: /* @__PURE__ */ T(J, {
        onMouseDown: Q,
        ...be,
        children: /* @__PURE__ */ T(X, {
          as: C,
          elevation: 24,
          role: "dialog",
          "aria-describedby": l,
          "aria-labelledby": ye,
          "aria-modal": u,
          ...ne,
          children: /* @__PURE__ */ T(Ml.Provider, {
            value: m,
            children: f
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && ($l.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": y.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": y.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": y.oneOfType([y.oneOf(["false", "true"]), y.bool]),
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
   * @ignore
   */
  BackdropProps: y.object,
  /**
   * Dialog children, usually the included sub-components.
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
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: y.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: y.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: y.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: y.oneOfType([y.oneOf(["xs", "sm", "md", "lg", "xl", !1]), y.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: y.func,
  /**
   * @ignore
   */
  onClick: y.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: y.func,
  /**
   * If `true`, the component is shown.
   */
  open: y.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: y.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: y.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: y.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: y.shape({
    backdrop: y.oneOfType([y.func, y.object]),
    container: y.oneOfType([y.func, y.object]),
    paper: y.oneOfType([y.func, y.object]),
    root: y.oneOfType([y.func, y.object]),
    transition: y.oneOfType([y.func, y.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: y.shape({
    backdrop: y.elementType,
    container: y.elementType,
    paper: y.elementType,
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
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: y.oneOfType([y.number, y.shape({
    appear: y.number,
    enter: y.number,
    exit: y.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: y.object
});
const yf = mi(/* @__PURE__ */ T("path", {
  d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
}), "Tune"), So = ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"], bf = [
  "IS NOT NULL",
  "IS NULL",
  "NOT IN",
  "starts with",
  "ends with"
];
function xf(e, t, n) {
  return [...t].sort((i, o) => o.length - i.length), Sf(e);
}
function Sf(e, t, n) {
  if (e = (e || "").trim(), !e) return { type: "group", combinator: "AND", not: !1, rules: [] };
  const r = vf(e);
  return Ef(r);
}
function vf(e) {
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
function Ef(e, t, n) {
  let r = 0;
  function i() {
    for (const s of bf) {
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
    for (s.push(a()); r < e.length; ) {
      const p = e[r];
      if (p && p.type === "word" && (p.value.toUpperCase() === "AND" || p.value.toUpperCase() === "OR"))
        c.push(p.value.toUpperCase()), r++, s.push(a());
      else
        break;
    }
    if (s.length === 1) return s[0];
    const f = c[0] || "AND";
    return c.every((p) => p === f) ? { type: "group", combinator: f, not: !1, rules: s } : l(s, c);
  }
  function l(s, c) {
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
  function a() {
    if (r >= e.length)
      return { type: "rule", column: "", operator: "", value: "" };
    const s = e[r];
    if (s.type === "word" && s.value.toUpperCase() === "NOT") {
      const h = e[r + 1];
      if (!(h && h.type === "word" && h.value.toUpperCase() === "IN")) {
        r++;
        const E = a();
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
    if (Lt(d))
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
function Lt(e) {
  return So.includes(e) || So.includes(e.toUpperCase());
}
function wf(e, t) {
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
  const l = e.replace(/^\s*\(\s*/, "");
  if (/^\s*(AND|OR)\b/i.test(l))
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
function kf(e, t, n, r) {
  if (!e) return [];
  const i = /"[^"]*"?|\[[^\]]*\]?|[()]|\s+|[^\s()]+/g, o = e.match(i) || [], l = t || [], a = n || [], u = (r || []).map((p) => p.toUpperCase()), s = a.filter((p) => p.includes(" ")), c = [];
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
        const v = E.split(" ");
        let _ = d, w = !0;
        const R = [];
        for (const C of v) {
          for (; _ < o.length && /^\s+$/.test(o[_]); )
            R.push(o[_]), _++;
          if (_ >= o.length || o[_].toUpperCase() !== C.toUpperCase()) {
            w = !1;
            break;
          }
          R.push(o[_]), _++;
        }
        if (w) {
          h = { text: R.join(""), endIdx: _, op: E };
          break;
        }
      }
      if (h) {
        for (let E = d; E < h.endIdx; E++)
          /^\s+$/.test(o[E]) ? c.push({ type: "whitespace", text: o[E] }) : c.push({ type: "operator", text: o[E] });
        d = h.endIdx, Lt(h.op) ? f = "logical" : f = "value";
        continue;
      }
    }
    let x;
    f === "column" ? u.includes(p.toUpperCase()) ? (x = "logical", f = "column") : (x = l.includes(p) ? "column" : "customColumn", f = "operator") : f === "operator" ? (x = a.includes(p) ? "operator" : "unknownOperator", Lt(p) ? f = "logical" : f = "value") : f === "value" ? (x = "value", f = "logical") : f === "listValue" ? x = "value" : u.includes(p.toUpperCase()) ? (x = "logical", f = "column") : x = "value", c.push({ type: x, text: p }), d++;
  }
  return c;
}
function zl(e) {
  if (!e || e.type !== "group") return [];
  const t = [];
  for (const n of e.rules || [])
    n.type === "rule" ? t.push({
      column: n.column,
      operator: n.operator,
      value: n.value
    }) : n.type === "group" && t.push(...zl(n));
  return t;
}
function Ll(e) {
  if (!e || e.type !== "group") return "";
  const t = [];
  for (const r of e.rules || [])
    if (r.type === "rule" && r.column && r.operator)
      Lt(r.operator) ? t.push(`${r.column} ${r.operator}`) : t.push(`${r.column} ${r.operator} ${r.value}`);
    else if (r.type === "group") {
      const i = Ll(r);
      i && t.push(`(${i})`);
    }
  const n = t.join(` ${e.combinator} `);
  return e.not ? `NOT (${n})` : n;
}
const en = "#007aff", Er = {
  borderRadius: "4px",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "divider" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: en,
    borderWidth: "1px"
  },
  "& .MuiSelect-select, & .MuiOutlinedInput-input": {
    py: "7px",
    fontSize: 13.5
  }
};
function Bl() {
  return { type: "rule", column: "", operator: "", value: "" };
}
function Fl(e = "AND") {
  return {
    type: "group",
    combinator: e,
    not: !1,
    rules: [Bl()]
  };
}
const Cf = ({ value: e, onChange: t }) => /* @__PURE__ */ T(
  re,
  {
    role: "group",
    "aria-label": "Combine conditions with",
    sx: {
      display: "inline-flex",
      border: "1px solid",
      borderColor: en,
      borderRadius: "4px",
      overflow: "hidden"
    },
    children: ["AND", "OR"].map((n) => /* @__PURE__ */ T(
      re,
      {
        component: "button",
        type: "button",
        "aria-pressed": e === n,
        onClick: () => t(n),
        sx: {
          cursor: "pointer",
          border: 0,
          px: 1.5,
          py: "3px",
          fontFamily: "inherit",
          fontSize: 11.5,
          fontWeight: 700,
          letterSpacing: ".05em",
          bgcolor: e === n ? en : "transparent",
          color: e === n ? "#fff" : en
        },
        children: n
      },
      n
    ))
  }
), Tf = ({
  rule: e,
  index: t,
  columnsOperator: n,
  onChange: r,
  onDelete: i,
  sx: o = {}
}) => {
  var c;
  const { columnSelectSx: l, operatorSelectSx: a, valueInputSx: u, deleteButtonSx: s } = o;
  return /* @__PURE__ */ ue(
    re,
    {
      sx: {
        display: "grid",
        gap: 1,
        alignItems: "center",
        gridTemplateColumns: {
          xs: "1fr 1fr",
          sm: "1fr 150px 1.4fr 32px"
        },
        mb: 1
      },
      children: [
        /* @__PURE__ */ ue(
          Pi,
          {
            size: "small",
            value: e.column,
            onChange: (f) => r(t, "column", f.target.value),
            displayEmpty: !0,
            fullWidth: !0,
            sx: { ...Er, ...l },
            children: [
              /* @__PURE__ */ T(bn, { value: "", disabled: !0, sx: { fontSize: 13.5 }, children: "Select Column" }),
              Object.keys(n).map((f) => /* @__PURE__ */ T(bn, { value: f, sx: { fontSize: 13.5 }, children: f }, f))
            ]
          }
        ),
        /* @__PURE__ */ ue(
          Pi,
          {
            size: "small",
            value: e.operator,
            onChange: (f) => r(t, "operator", f.target.value),
            displayEmpty: !0,
            disabled: !e.column,
            fullWidth: !0,
            sx: { ...Er, ...a },
            children: [
              /* @__PURE__ */ T(bn, { value: "", disabled: !0, sx: { fontSize: 13.5 }, children: "Select Operator" }),
              e.column && ((c = n[e.column]) == null ? void 0 : c.operators.map((f) => /* @__PURE__ */ T(bn, { value: f, sx: { fontSize: 13.5 }, children: f }, f)))
            ]
          }
        ),
        Lt(e.operator) ? /* @__PURE__ */ T(re, {}) : /* @__PURE__ */ T(
          Da,
          {
            size: "small",
            value: e.value,
            onChange: (f) => r(t, "value", f.target.value),
            placeholder: "Enter value",
            fullWidth: !0,
            sx: { ...Er, ...u }
          }
        ),
        /* @__PURE__ */ T(on, { title: "Remove condition", children: /* @__PURE__ */ T(
          bt,
          {
            onClick: () => i(t),
            size: "small",
            sx: {
              alignSelf: "center",
              ...s
            },
            children: /* @__PURE__ */ T(al, { sx: { fontSize: 15 } })
          }
        ) })
      ]
    }
  );
}, jl = ({
  group: e,
  path: t,
  columnsOperator: n,
  onChange: r,
  onDelete: i,
  isRoot: o,
  depth: l = 0,
  sx: a = {}
}) => {
  const u = (E) => {
    r(t, { ...e, combinator: E });
  }, s = () => {
    r(t, { ...e, not: !e.not });
  }, c = () => {
    r(t, { ...e, rules: [...e.rules, Bl()] });
  }, f = () => {
    r(t, { ...e, rules: [...e.rules, Fl()] });
  }, d = (E, v, _) => {
    const w = e.rules.map((R, C) => {
      if (C !== E) return R;
      const S = { ...R, [v]: _ };
      return v === "operator" && Lt(_) && (S.value = ""), S;
    });
    r(t, { ...e, rules: w });
  }, p = (E) => {
    const v = e.rules.filter((_, w) => w !== E);
    r(t, { ...e, rules: v });
  }, x = (E, v) => {
    const _ = E[E.length - 1], w = e.rules.map(
      (R, C) => C === _ ? v : R
    );
    r(t, { ...e, rules: w });
  }, h = (E) => {
    const v = e.rules.filter((_, w) => w !== E);
    r(t, { ...e, rules: v });
  };
  return /* @__PURE__ */ ue(
    re,
    {
      role: "group",
      "aria-label": `${e.not ? "NOT " : ""}${e.combinator} group`,
      sx: {
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "3px solid",
        borderLeftColor: e.not ? "error.main" : l > 0 ? "primary.light" : en,
        borderRadius: "6px",
        bgcolor: "background.paper",
        mb: l > 0 ? 1 : 0
      },
      children: [
        /* @__PURE__ */ ue(
          re,
          {
            sx: {
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 1,
              px: 1.25,
              py: 1
            },
            children: [
              /* @__PURE__ */ T(
                Na,
                {
                  sx: { m: 0, gap: 0.5 },
                  control: /* @__PURE__ */ T(
                    _a,
                    {
                      size: "small",
                      color: "error",
                      checked: e.not,
                      onChange: s
                    }
                  ),
                  label: "NOT",
                  slotProps: {
                    typography: {
                      sx: {
                        fontSize: 12.5,
                        letterSpacing: ".04em",
                        fontWeight: e.not ? 700 : 500,
                        color: e.not ? "error.main" : "text.secondary"
                      }
                    }
                  }
                }
              ),
              /* @__PURE__ */ T(
                Cf,
                {
                  value: e.combinator,
                  onChange: u
                }
              ),
              /* @__PURE__ */ T(re, { sx: { flex: 1 } }),
              /* @__PURE__ */ T(
                gt,
                {
                  size: "small",
                  startIcon: /* @__PURE__ */ T(Oa, { sx: { fontSize: 15 } }),
                  onClick: c,
                  sx: { textTransform: "none", fontSize: 12.5, minWidth: 0 },
                  children: "Condition"
                }
              ),
              /* @__PURE__ */ T(
                gt,
                {
                  size: "small",
                  startIcon: /* @__PURE__ */ T(Ra, { sx: { fontSize: 15 } }),
                  onClick: f,
                  sx: { textTransform: "none", fontSize: 12.5, minWidth: 0 },
                  children: "Group"
                }
              ),
              !o && /* @__PURE__ */ T(on, { title: "Remove group", children: /* @__PURE__ */ T(
                bt,
                {
                  onClick: () => i(),
                  size: "small",
                  "aria-label": "Remove group",
                  children: /* @__PURE__ */ T(Aa, { sx: { fontSize: 16 } })
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ T(re, { sx: { px: 1.25, pb: 1.25 }, children: e.rules.map(
          (E, v) => E.type === "group" ? /* @__PURE__ */ T(
            jl,
            {
              group: E,
              path: [...t, v],
              columnsOperator: n,
              onChange: x,
              onDelete: () => h(v),
              isRoot: !1,
              depth: l + 1,
              sx: a
            },
            v
          ) : /* @__PURE__ */ T(
            Tf,
            {
              rule: E,
              index: v,
              columnsOperator: n,
              onChange: d,
              onDelete: p,
              sx: a
            },
            v
          )
        ) })
      ]
    }
  );
}, Of = ({
  columnsOperator: e,
  handleApplyFilters: t,
  onCancel: n,
  onGroupChange: r,
  applyRef: i,
  defaultOperators: o,
  groupTree: l,
  sx: a = {}
}) => {
  const {
    root: u,
    actions: s,
    applyButton: c,
    cancelButton: f,
    ...d
  } = a, [p, x] = De(
    () => l && l.type === "group" ? l : Fl("AND")
  );
  Dt(() => {
    l && l.type === "group" && x(l);
  }, [l]), Dt(() => {
    i && (i.current = () => t(p));
  });
  const h = (E, v) => {
    x(v), r == null || r(v);
  };
  return /* @__PURE__ */ T(
    re,
    {
      sx: {
        width: "100%",
        boxSizing: "border-box",
        ...u
      },
      children: /* @__PURE__ */ T(
        jl,
        {
          group: p,
          path: [],
          columnsOperator: e,
          onChange: h,
          onDelete: () => {
          },
          isRoot: !0,
          depth: 0,
          sx: d
        }
      )
    }
  );
}, Rf = mi(/* @__PURE__ */ T("path", {
  d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
}), "HelpOutline"), Ul = mi(/* @__PURE__ */ T("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Af(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const If = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Pf = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Nf = {};
function vo(e, t) {
  return (Nf.jsx ? Pf : If).test(e);
}
const _f = /[ \t\n\f\r]/g;
function Df(e) {
  return typeof e == "object" ? e.type === "text" ? Eo(e.value) : !1 : Eo(e);
}
function Eo(e) {
  return e.replace(_f, "") === "";
}
class dn {
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
dn.prototype.normal = {};
dn.prototype.property = {};
dn.prototype.space = void 0;
function Vl(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new dn(n, r, t);
}
function Yr(e) {
  return e.toLowerCase();
}
class Ne {
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
Ne.prototype.attribute = "";
Ne.prototype.booleanish = !1;
Ne.prototype.boolean = !1;
Ne.prototype.commaOrSpaceSeparated = !1;
Ne.prototype.commaSeparated = !1;
Ne.prototype.defined = !1;
Ne.prototype.mustUseProperty = !1;
Ne.prototype.number = !1;
Ne.prototype.overloadedBoolean = !1;
Ne.prototype.property = "";
Ne.prototype.spaceSeparated = !1;
Ne.prototype.space = void 0;
let Mf = 0;
const ee = vt(), Te = vt(), Gr = vt(), $ = vt(), me = vt(), yt = vt(), _e = vt();
function vt() {
  return 2 ** ++Mf;
}
const Kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ee,
  booleanish: Te,
  commaOrSpaceSeparated: _e,
  commaSeparated: yt,
  number: $,
  overloadedBoolean: Gr,
  spaceSeparated: me
}, Symbol.toStringTag, { value: "Module" })), wr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Kr)
);
class yi extends Ne {
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
    if (super(t, n), wo(this, "space", i), typeof r == "number")
      for (; ++o < wr.length; ) {
        const l = wr[o];
        wo(this, wr[o], (r & Kr[l]) === Kr[l]);
      }
  }
}
yi.prototype.defined = !0;
function wo(e, t, n) {
  n && (e[t] = n);
}
function Ft(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new yi(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Yr(r)] = r, n[Yr(o.attribute)] = r;
  }
  return new dn(t, n, e.space);
}
const Wl = Ft({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Te,
    ariaAutoComplete: null,
    ariaBusy: Te,
    ariaChecked: Te,
    ariaColCount: $,
    ariaColIndex: $,
    ariaColSpan: $,
    ariaControls: me,
    ariaCurrent: null,
    ariaDescribedBy: me,
    ariaDetails: null,
    ariaDisabled: Te,
    ariaDropEffect: me,
    ariaErrorMessage: null,
    ariaExpanded: Te,
    ariaFlowTo: me,
    ariaGrabbed: Te,
    ariaHasPopup: null,
    ariaHidden: Te,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: me,
    ariaLevel: $,
    ariaLive: null,
    ariaModal: Te,
    ariaMultiLine: Te,
    ariaMultiSelectable: Te,
    ariaOrientation: null,
    ariaOwns: me,
    ariaPlaceholder: null,
    ariaPosInSet: $,
    ariaPressed: Te,
    ariaReadOnly: Te,
    ariaRelevant: null,
    ariaRequired: Te,
    ariaRoleDescription: me,
    ariaRowCount: $,
    ariaRowIndex: $,
    ariaRowSpan: $,
    ariaSelected: Te,
    ariaSetSize: $,
    ariaSort: null,
    ariaValueMax: $,
    ariaValueMin: $,
    ariaValueNow: $,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Hl(e, t) {
  return t in e ? e[t] : t;
}
function ql(e, t) {
  return Hl(e, t.toLowerCase());
}
const $f = Ft({
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
    accept: yt,
    acceptCharset: me,
    accessKey: me,
    action: null,
    allow: null,
    allowFullScreen: ee,
    allowPaymentRequest: ee,
    allowUserMedia: ee,
    alpha: ee,
    alt: null,
    as: null,
    async: ee,
    autoCapitalize: null,
    autoComplete: me,
    autoFocus: ee,
    autoPlay: ee,
    blocking: me,
    capture: null,
    charSet: null,
    checked: ee,
    cite: null,
    className: me,
    closedBy: null,
    colorSpace: null,
    cols: $,
    colSpan: $,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: Te,
    controls: ee,
    controlsList: me,
    coords: $ | yt,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ee,
    defer: ee,
    dir: null,
    dirName: null,
    disabled: ee,
    download: Gr,
    draggable: Te,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ee,
    formTarget: null,
    headers: me,
    height: $,
    hidden: Gr,
    high: $,
    href: null,
    hrefLang: null,
    htmlFor: me,
    httpEquiv: me,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ee,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ee,
    itemId: null,
    itemProp: me,
    itemRef: me,
    itemScope: ee,
    itemType: me,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ee,
    low: $,
    manifest: null,
    max: null,
    maxLength: $,
    media: null,
    method: null,
    min: null,
    minLength: $,
    multiple: ee,
    muted: ee,
    name: null,
    nonce: null,
    noModule: ee,
    noValidate: ee,
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
    open: ee,
    optimum: $,
    pattern: null,
    ping: me,
    placeholder: null,
    playsInline: ee,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ee,
    referrerPolicy: null,
    rel: me,
    required: ee,
    reversed: ee,
    rows: $,
    rowSpan: $,
    sandbox: me,
    scope: null,
    scoped: ee,
    seamless: ee,
    selected: ee,
    shadowRootClonable: ee,
    shadowRootCustomElementRegistry: ee,
    shadowRootDelegatesFocus: ee,
    shadowRootMode: null,
    shadowRootSerializable: ee,
    shape: null,
    size: $,
    sizes: null,
    slot: null,
    span: $,
    spellCheck: Te,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: $,
    step: null,
    style: null,
    tabIndex: $,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ee,
    useMap: null,
    value: Te,
    width: $,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: me,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: $,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: $,
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
    compact: ee,
    // Lists. Use CSS to reduce space between items instead
    declare: ee,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: $,
    // `<img>` and `<object>`
    leftMargin: $,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: $,
    // `<body>`
    marginWidth: $,
    // `<body>`
    noResize: ee,
    // `<frame>`
    noHref: ee,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ee,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ee,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: $,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Te,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: $,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: $,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: ee,
    disablePictureInPicture: ee,
    disableRemotePlayback: ee,
    exportParts: yt,
    part: me,
    prefix: null,
    property: null,
    results: $,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: ql
}), zf = Ft({
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
    about: _e,
    accentHeight: $,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: $,
    amplitude: $,
    arabicForm: null,
    ascent: $,
    attributeName: null,
    attributeType: null,
    azimuth: $,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: $,
    by: null,
    calcMode: null,
    capHeight: $,
    className: me,
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
    descent: $,
    diffuseConstant: $,
    direction: null,
    display: null,
    dur: null,
    divisor: $,
    dominantBaseline: null,
    download: ee,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: $,
    enableBackground: null,
    end: null,
    event: null,
    exponent: $,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: $,
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
    g1: yt,
    g2: yt,
    glyphName: yt,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: $,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: $,
    horizOriginX: $,
    horizOriginY: $,
    id: null,
    ideographic: $,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: $,
    k: $,
    k1: $,
    k2: $,
    k3: $,
    k4: $,
    kernelMatrix: _e,
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
    limitingConeAngle: $,
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
    mediaSize: $,
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
    overlinePosition: $,
    overlineThickness: $,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: $,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: me,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: $,
    pointsAtY: $,
    pointsAtZ: $,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: _e,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: _e,
    rev: _e,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: _e,
    requiredFeatures: _e,
    requiredFonts: _e,
    requiredFormats: _e,
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
    specularConstant: $,
    specularExponent: $,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: $,
    strikethroughThickness: $,
    string: null,
    stroke: null,
    strokeDashArray: _e,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: $,
    strokeOpacity: $,
    strokeWidth: null,
    style: null,
    surfaceScale: $,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: _e,
    tabIndex: $,
    tableValues: null,
    target: null,
    targetX: $,
    targetY: $,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: _e,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: $,
    underlineThickness: $,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: $,
    values: null,
    vAlphabetic: $,
    vMathematical: $,
    vectorEffect: null,
    vHanging: $,
    vIdeographic: $,
    version: null,
    vertAdvY: $,
    vertOriginX: $,
    vertOriginY: $,
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
    xHeight: $,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Hl
}), Yl = Ft({
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
}), Gl = Ft({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: ql
}), Kl = Ft({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), Lf = {
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
}, Bf = /[A-Z]/g, ko = /-[a-z]/g, Ff = /^data[-\w.:]+$/i;
function jf(e, t) {
  const n = Yr(t);
  let r = t, i = Ne;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Ff.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(ko, Vf);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!ko.test(o)) {
        let l = o.replace(Bf, Uf);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = yi;
  }
  return new i(r, t);
}
function Uf(e) {
  return "-" + e.toLowerCase();
}
function Vf(e) {
  return e.charAt(1).toUpperCase();
}
const Wf = Vl([Wl, $f, Yl, Gl, Kl], "html"), bi = Vl([Wl, zf, Yl, Gl, Kl], "svg");
function Hf(e) {
  return e.join(" ").trim();
}
var Pt = {}, kr, Co;
function qf() {
  if (Co) return kr;
  Co = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, l = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, s = "/", c = "*", f = "", d = "comment", p = "declaration";
  function x(E, v) {
    if (typeof E != "string")
      throw new TypeError("First argument must be a string");
    if (!E) return [];
    v = v || {};
    var _ = 1, w = 1;
    function R(D) {
      var A = D.match(t);
      A && (_ += A.length);
      var B = D.lastIndexOf(u);
      w = ~B ? D.length - B : w + D.length;
    }
    function C() {
      var D = { line: _, column: w };
      return function(A) {
        return A.position = new S(D), H(), A;
      };
    }
    function S(D) {
      this.start = D, this.end = { line: _, column: w }, this.source = v.source;
    }
    S.prototype.content = E;
    function z(D) {
      var A = new Error(
        v.source + ":" + _ + ":" + w + ": " + D
      );
      if (A.reason = D, A.filename = v.source, A.line = _, A.column = w, A.source = E, !v.silent) throw A;
    }
    function W(D) {
      var A = D.exec(E);
      if (A) {
        var B = A[0];
        return R(B), E = E.slice(B.length), A;
      }
    }
    function H() {
      W(n);
    }
    function g(D) {
      var A;
      for (D = D || []; A = O(); )
        A !== !1 && D.push(A);
      return D;
    }
    function O() {
      var D = C();
      if (!(s != E.charAt(0) || c != E.charAt(1))) {
        for (var A = 2; f != E.charAt(A) && (c != E.charAt(A) || s != E.charAt(A + 1)); )
          ++A;
        if (A += 2, f === E.charAt(A - 1))
          return z("End of comment missing");
        var B = E.slice(2, A - 2);
        return w += 2, R(B), E = E.slice(A), w += 2, D({
          type: d,
          comment: B
        });
      }
    }
    function P() {
      var D = C(), A = W(r);
      if (A) {
        if (O(), !W(i)) return z("property missing ':'");
        var B = W(o), Q = D({
          type: p,
          property: h(A[0].replace(e, f)),
          value: B ? h(B[0].replace(e, f)) : f
        });
        return W(l), Q;
      }
    }
    function V() {
      var D = [];
      g(D);
      for (var A; A = P(); )
        A !== !1 && (D.push(A), g(D));
      return D;
    }
    return H(), V();
  }
  function h(E) {
    return E ? E.replace(a, f) : f;
  }
  return kr = x, kr;
}
var To;
function Yf() {
  if (To) return Pt;
  To = 1;
  var e = Pt && Pt.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.default = n;
  const t = e(qf());
  function n(r, i) {
    let o = null;
    if (!r || typeof r != "string")
      return o;
    const l = (0, t.default)(r), a = typeof i == "function";
    return l.forEach((u) => {
      if (u.type !== "declaration")
        return;
      const { property: s, value: c } = u;
      a ? i(s, c, u) : c && (o = o || {}, o[s] = c);
    }), o;
  }
  return Pt;
}
var Wt = {}, Oo;
function Gf() {
  if (Oo) return Wt;
  Oo = 1, Object.defineProperty(Wt, "__esModule", { value: !0 }), Wt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, o = function(s) {
    return !s || n.test(s) || e.test(s);
  }, l = function(s, c) {
    return c.toUpperCase();
  }, a = function(s, c) {
    return "".concat(c, "-");
  }, u = function(s, c) {
    return c === void 0 && (c = {}), o(s) ? s : (s = s.toLowerCase(), c.reactCompat ? s = s.replace(i, a) : s = s.replace(r, a), s.replace(t, l));
  };
  return Wt.camelCase = u, Wt;
}
var Ht, Ro;
function Kf() {
  if (Ro) return Ht;
  Ro = 1;
  var e = Ht && Ht.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Yf()), n = Gf();
  function r(i, o) {
    var l = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (l[(0, n.camelCase)(a, o)] = u);
    }), l;
  }
  return r.default = r, Ht = r, Ht;
}
var Xf = Kf();
const Qf = /* @__PURE__ */ ri(Xf), Xl = Ql("end"), xi = Ql("start");
function Ql(e) {
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
function Jf(e) {
  const t = xi(e), n = Xl(e);
  if (t && n)
    return { start: t, end: n };
}
function tn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Ao(e.position) : "start" in e || "end" in e ? Ao(e) : "line" in e || "column" in e ? Xr(e) : "";
}
function Xr(e) {
  return Io(e && e.line) + ":" + Io(e && e.column);
}
function Ao(e) {
  return Xr(e && e.start) + "-" + Xr(e && e.end);
}
function Io(e) {
  return e && typeof e == "number" ? e : 1;
}
class Re extends Error {
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
    let i = "", o = {}, l = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (l = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const u = r.indexOf(":");
      u === -1 ? o.ruleId = r : (o.source = r.slice(0, u), o.ruleId = r.slice(u + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const u = o.ancestors[o.ancestors.length - 1];
      u && (o.place = u.position);
    }
    const a = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = tn(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Re.prototype.file = "";
Re.prototype.name = "";
Re.prototype.reason = "";
Re.prototype.message = "";
Re.prototype.stack = "";
Re.prototype.column = void 0;
Re.prototype.line = void 0;
Re.prototype.ancestors = void 0;
Re.prototype.cause = void 0;
Re.prototype.fatal = void 0;
Re.prototype.place = void 0;
Re.prototype.ruleId = void 0;
Re.prototype.source = void 0;
const Si = {}.hasOwnProperty, Zf = /* @__PURE__ */ new Map(), ep = /[A-Z]/g, tp = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), np = /* @__PURE__ */ new Set(["td", "th"]), Jl = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function rp(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = fp(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = cp(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? bi : Wf,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = Zl(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function Zl(e, t, n) {
  if (t.type === "element")
    return ip(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return op(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return ap(e, t, n);
  if (t.type === "mdxjsEsm")
    return lp(e, t);
  if (t.type === "root")
    return sp(e, t, n);
  if (t.type === "text")
    return up(e, t);
}
function ip(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = bi, e.schema = i), e.ancestors.push(t);
  const o = ta(e, t.tagName, !1), l = pp(e, t);
  let a = Ei(e, t);
  return tp.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !Df(u) : !0;
  })), ea(e, l, o, t), vi(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function op(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  an(e, t.position);
}
function lp(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  an(e, t.position);
}
function ap(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = bi, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : ta(e, t.name, !0), l = dp(e, t), a = Ei(e, t);
  return ea(e, l, o, t), vi(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function sp(e, t, n) {
  const r = {};
  return vi(r, Ei(e, t)), e.create(t, e.Fragment, r, n);
}
function up(e, t) {
  return t.value;
}
function ea(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function vi(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function cp(e, t, n) {
  return r;
  function r(i, o, l, a) {
    const s = Array.isArray(l.children) ? n : t;
    return a ? s(o, l, a) : s(o, l);
  }
}
function fp(e, t) {
  return n;
  function n(r, i, o, l) {
    const a = Array.isArray(o.children), u = xi(r);
    return t(
      i,
      o,
      l,
      a,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0
      },
      void 0
    );
  }
}
function pp(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Si.call(t.properties, i)) {
      const o = hp(e, i, t.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && np.has(t.tagName) ? r = a : n[l] = a;
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
function dp(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const l = o.expression;
        l.type;
        const a = l.properties[0];
        a.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(a.argument)
        );
      } else
        an(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          an(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function Ei(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : Zf;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let l;
    if (e.passKeys) {
      const u = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (u) {
        const s = i.get(u) || 0;
        l = u + "-" + s, i.set(u, s + 1);
      }
    }
    const a = Zl(e, o, l);
    a !== void 0 && n.push(a);
  }
  return n;
}
function hp(e, t, n) {
  const r = jf(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Af(n) : Hf(n)), r.property === "style") {
      let i = typeof n == "object" ? n : mp(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = gp(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? Lf[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function mp(e, t) {
  try {
    return Qf(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new Re("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Jl + "#cannot-parse-style-attribute", i;
  }
}
function ta(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const a = vo(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: a,
        computed: !!(o && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = l;
  } else
    r = vo(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Si.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  an(e);
}
function an(e, t) {
  const n = new Re(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Jl + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function gp(e) {
  const t = {};
  let n;
  for (n in e)
    Si.call(e, n) && (t[yp(n)] = e[n]);
  return t;
}
function yp(e) {
  let t = e.replace(ep, bp);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function bp(e) {
  return "-" + e.toLowerCase();
}
const Cr = {
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
}, xp = {};
function Sp(e, t) {
  const n = xp, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return na(e, r, i);
}
function na(e, t, n) {
  if (vp(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Po(e.children, t, n);
  }
  return Array.isArray(e) ? Po(e, t, n) : "";
}
function Po(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = na(e[i], t, n);
  return r.join("");
}
function vp(e) {
  return !!(e && typeof e == "object");
}
const No = document.createElement("i");
function wi(e) {
  const t = "&" + e + ";";
  No.innerHTML = t;
  const n = No.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Ge(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
function je(e, t) {
  return e.length > 0 ? (Ge(e, e.length, 0, t), e) : t;
}
const _o = {}.hasOwnProperty;
function Ep(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    wp(t, e[n]);
  return t;
}
function wp(e, t) {
  let n;
  for (n in t) {
    const i = (_o.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        _o.call(i, l) || (i[l] = []);
        const a = o[l];
        kp(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function kp(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Ge(e, 0, 0, r);
}
function ra(e, t) {
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
function $t(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const qe = ut(/[A-Za-z]/), $e = ut(/[\dA-Za-z]/), Cp = ut(/[#-'*+\--9=?A-Z^-~]/);
function Qr(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Jr = ut(/\d/), Tp = ut(/[\dA-Fa-f]/), Op = ut(/[!-/:-@[-`{-~]/);
function Z(e) {
  return e !== null && e < -2;
}
function Pe(e) {
  return e !== null && (e < 0 || e === 32);
}
function oe(e) {
  return e === -2 || e === -1 || e === 32;
}
const Rp = ut(new RegExp("\\p{P}|\\p{S}", "u")), Ap = ut(/\s/);
function ut(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function jt(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && $e(e.charCodeAt(n + 1)) && $e(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const a = e.charCodeAt(n + 1);
      o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "�";
    } else
      l = String.fromCharCode(o);
    l && (t.push(e.slice(r, n), encodeURIComponent(l)), r = n + i + 1, l = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function ge(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(u) {
    return oe(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return oe(u) && o++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const Ip = {
  tokenize: Pp
};
function Pp(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
  function i(a) {
    return e.enter("paragraph"), o(a);
  }
  function o(a) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, l(a);
  }
  function l(a) {
    if (a === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
      return;
    }
    return Z(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const Np = {
  tokenize: _p
}, Do = {
  tokenize: Dp
};
function _p(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return a;
  function a(w) {
    if (r < n.length) {
      const R = n[r];
      return t.containerState = R[1], e.attempt(R[0].continuation, u, s)(w);
    }
    return s(w);
  }
  function u(w) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && _();
      const R = t.events.length;
      let C = R, S;
      for (; C--; )
        if (t.events[C][0] === "exit" && t.events[C][1].type === "chunkFlow") {
          S = t.events[C][1].end;
          break;
        }
      v(r);
      let z = R;
      for (; z < t.events.length; )
        t.events[z][1].end = {
          ...S
        }, z++;
      return Ge(t.events, C + 1, 0, t.events.slice(R)), t.events.length = z, s(w);
    }
    return a(w);
  }
  function s(w) {
    if (r === n.length) {
      if (!i)
        return d(w);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return x(w);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(Do, c, f)(w);
  }
  function c(w) {
    return i && _(), v(r), d(w);
  }
  function f(w) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, x(w);
  }
  function d(w) {
    return t.containerState = {}, e.attempt(Do, p, x)(w);
  }
  function p(w) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(w);
  }
  function x(w) {
    if (w === null) {
      i && _(), v(0), e.consume(w);
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
      E(e.exit("chunkFlow"), !0), v(0), e.consume(w);
      return;
    }
    return Z(w) ? (e.consume(w), E(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(w), h);
  }
  function E(w, R) {
    const C = t.sliceStream(w);
    if (R && C.push(null), w.previous = o, o && (o.next = w), o = w, i.defineSkip(w.start), i.write(C), t.parser.lazy[w.start.line]) {
      let S = i.events.length;
      for (; S--; )
        if (
          // The token starts before the line ending…
          i.events[S][1].start.offset < l && // …and either is not ended yet…
          (!i.events[S][1].end || // …or ends after it.
          i.events[S][1].end.offset > l)
        )
          return;
      const z = t.events.length;
      let W = z, H, g;
      for (; W--; )
        if (t.events[W][0] === "exit" && t.events[W][1].type === "chunkFlow") {
          if (H) {
            g = t.events[W][1].end;
            break;
          }
          H = !0;
        }
      for (v(r), S = z; S < t.events.length; )
        t.events[S][1].end = {
          ...g
        }, S++;
      Ge(t.events, W + 1, 0, t.events.slice(z)), t.events.length = S;
    }
  }
  function v(w) {
    let R = n.length;
    for (; R-- > w; ) {
      const C = n[R];
      t.containerState = C[1], C[0].exit.call(t, e);
    }
    n.length = w;
  }
  function _() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Dp(e, t, n) {
  return ge(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Mo(e) {
  if (e === null || Pe(e) || Ap(e))
    return 1;
  if (Rp(e))
    return 2;
}
function ki(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const Zr = {
  name: "attention",
  resolveAll: Mp,
  tokenize: $p
};
function Mp(e, t) {
  let n = -1, r, i, o, l, a, u, s, c;
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
          $o(f, -u), $o(d, u), l = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, a = {
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
              ...l.start
            },
            end: {
              ...a.end
            }
          }, e[r][1].end = {
            ...l.start
          }, e[n][1].start = {
            ...a.end
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = je(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = je(s, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", o, t]]), s = je(s, ki(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = je(s, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, s = je(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, Ge(e, r - 1, n - r + 3, s), n = r + s.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function $p(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Mo(r);
  let o;
  return l;
  function l(u) {
    return o = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === o)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), c = Mo(u), f = !c || c === 2 && i || n.includes(u), d = !i || i === 2 && c || n.includes(r);
    return s._open = !!(o === 42 ? f : f && (i || !d)), s._close = !!(o === 42 ? d : d && (c || !f)), t(u);
  }
}
function $o(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const zp = {
  name: "autolink",
  tokenize: Lp
};
function Lp(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return qe(p) ? (e.consume(p), l) : p === 64 ? n(p) : s(p);
  }
  function l(p) {
    return p === 43 || p === 45 || p === 46 || $e(p) ? (r = 1, a(p)) : s(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, u) : (p === 43 || p === 45 || p === 46 || $e(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, s(p));
  }
  function u(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || Qr(p) ? n(p) : (e.consume(p), u);
  }
  function s(p) {
    return p === 64 ? (e.consume(p), c) : Cp(p) ? (e.consume(p), s) : n(p);
  }
  function c(p) {
    return $e(p) ? f(p) : n(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, c) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
  }
  function d(p) {
    if ((p === 45 || $e(p)) && r++ < 63) {
      const x = p === 45 ? d : f;
      return e.consume(p), x;
    }
    return n(p);
  }
}
const nr = {
  partial: !0,
  tokenize: Bp
};
function Bp(e, t, n) {
  return r;
  function r(o) {
    return oe(o) ? ge(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || Z(o) ? t(o) : n(o);
  }
}
const ia = {
  continuation: {
    tokenize: jp
  },
  exit: Up,
  name: "blockQuote",
  tokenize: Fp
};
function Fp(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const a = r.containerState;
      return a.open || (e.enter("blockQuote", {
        _container: !0
      }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
    }
    return n(l);
  }
  function o(l) {
    return oe(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function jp(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return oe(l) ? ge(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(ia, t, n)(l);
  }
}
function Up(e) {
  e.exit("blockQuote");
}
const oa = {
  name: "characterEscape",
  tokenize: Vp
};
function Vp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Op(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const la = {
  name: "characterReference",
  tokenize: Wp
};
function Wp(e, t, n) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), u;
  }
  function u(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, l = $e, c(f));
  }
  function s(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Tp, c) : (e.enter("characterReferenceValue"), o = 7, l = Jr, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return l === $e && !wi(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(f) && i++ < o ? (e.consume(f), c) : n(f);
  }
}
const zo = {
  partial: !0,
  tokenize: qp
}, Lo = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Hp
};
function Hp(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: C
  };
  let o = 0, l = 0, a;
  return u;
  function u(S) {
    return s(S);
  }
  function s(S) {
    const z = r.events[r.events.length - 1];
    return o = z && z[1].type === "linePrefix" ? z[2].sliceSerialize(z[1], !0).length : 0, a = S, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(S);
  }
  function c(S) {
    return S === a ? (l++, e.consume(S), c) : l < 3 ? n(S) : (e.exit("codeFencedFenceSequence"), oe(S) ? ge(e, f, "whitespace")(S) : f(S));
  }
  function f(S) {
    return S === null || Z(S) ? (e.exit("codeFencedFence"), r.interrupt ? t(S) : e.check(zo, h, R)(S)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(S));
  }
  function d(S) {
    return S === null || Z(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(S)) : oe(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ge(e, p, "whitespace")(S)) : S === 96 && S === a ? n(S) : (e.consume(S), d);
  }
  function p(S) {
    return S === null || Z(S) ? f(S) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), x(S));
  }
  function x(S) {
    return S === null || Z(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(S)) : S === 96 && S === a ? n(S) : (e.consume(S), x);
  }
  function h(S) {
    return e.attempt(i, R, E)(S);
  }
  function E(S) {
    return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), v;
  }
  function v(S) {
    return o > 0 && oe(S) ? ge(e, _, "linePrefix", o + 1)(S) : _(S);
  }
  function _(S) {
    return S === null || Z(S) ? e.check(zo, h, R)(S) : (e.enter("codeFlowValue"), w(S));
  }
  function w(S) {
    return S === null || Z(S) ? (e.exit("codeFlowValue"), _(S)) : (e.consume(S), w);
  }
  function R(S) {
    return e.exit("codeFenced"), t(S);
  }
  function C(S, z, W) {
    let H = 0;
    return g;
    function g(A) {
      return S.enter("lineEnding"), S.consume(A), S.exit("lineEnding"), O;
    }
    function O(A) {
      return S.enter("codeFencedFence"), oe(A) ? ge(S, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(A) : P(A);
    }
    function P(A) {
      return A === a ? (S.enter("codeFencedFenceSequence"), V(A)) : W(A);
    }
    function V(A) {
      return A === a ? (H++, S.consume(A), V) : H >= l ? (S.exit("codeFencedFenceSequence"), oe(A) ? ge(S, D, "whitespace")(A) : D(A)) : W(A);
    }
    function D(A) {
      return A === null || Z(A) ? (S.exit("codeFencedFence"), z(A)) : W(A);
    }
  }
}
function qp(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const Tr = {
  name: "codeIndented",
  tokenize: Gp
}, Yp = {
  partial: !0,
  tokenize: Kp
};
function Gp(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), ge(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(s) : n(s);
  }
  function l(s) {
    return s === null ? u(s) : Z(s) ? e.attempt(Yp, l, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || Z(s) ? (e.exit("codeFlowValue"), l(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function Kp(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : Z(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : ge(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : Z(l) ? i(l) : n(l);
  }
}
const Xp = {
  name: "codeText",
  previous: Jp,
  resolve: Qp,
  tokenize: Zp
};
function Qp(e) {
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
function Jp(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Zp(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), u(f));
  }
  function u(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), u) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(f)) : Z(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(f));
  }
  function s(f) {
    return f === null || f === 32 || f === 96 || Z(f) ? (e.exit("codeTextData"), u(f)) : (e.consume(f), s);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", s(f));
  }
}
class ed {
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
    return r && qt(this.left, r), o.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), qt(this.left, t);
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
    this.setCursor(0), qt(this.right, t.reverse());
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
        qt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        qt(this.left, n.reverse());
      }
  }
}
function qt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function aa(e) {
  const t = {};
  let n = -1, r, i, o, l, a, u, s;
  const c = new ed(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
      for (; ++o < u.length && u[o][1].type !== "content"; )
        u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, td(c, n)), n = t[n], s = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (l = c.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, a = c.slice(i, n), a.unshift(r), c.splice(i, n - i + 1, a));
    }
  }
  return Ge(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !s;
}
function td(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let l = n._tokenizer;
  l || (l = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const a = l.events, u = [], s = {};
  let c, f, d = -1, p = n, x = 0, h = 0;
  const E = [h];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    o.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), f && l.defineSkip(p.start), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(c), p._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
  }
  for (p = n; ++d < a.length; )
    // Find a void token that includes a break.
    a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (h = d + 1, E.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (l.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : E.pop(), d = E.length; d--; ) {
    const v = a.slice(E[d], E[d + 1]), _ = o.pop();
    u.push([_, _ + v.length - 1]), e.splice(_, 2, v);
  }
  for (u.reverse(), d = -1; ++d < u.length; )
    s[x + u[d][0]] = x + u[d][1], x += u[d][1] - u[d][0] - 1;
  return s;
}
const nd = {
  resolve: id,
  tokenize: od
}, rd = {
  partial: !0,
  tokenize: ld
};
function id(e) {
  return aa(e), e;
}
function od(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : Z(a) ? e.check(rd, l, o)(a) : (e.consume(a), i);
  }
  function o(a) {
    return e.exit("chunkContent"), e.exit("content"), t(a);
  }
  function l(a) {
    return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function ld(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ge(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || Z(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function sa(e, t, n, r, i, o, l, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(v) {
    return v === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(v), e.exit(o), d) : v === null || v === 32 || v === 41 || Qr(v) ? n(v) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(v));
  }
  function d(v) {
    return v === 62 ? (e.enter(o), e.consume(v), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(v));
  }
  function p(v) {
    return v === 62 ? (e.exit("chunkString"), e.exit(a), d(v)) : v === null || v === 60 || Z(v) ? n(v) : (e.consume(v), v === 92 ? x : p);
  }
  function x(v) {
    return v === 60 || v === 62 || v === 92 ? (e.consume(v), p) : p(v);
  }
  function h(v) {
    return !c && (v === null || v === 41 || Pe(v)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(v)) : c < s && v === 40 ? (e.consume(v), c++, h) : v === 41 ? (e.consume(v), c--, h) : v === null || v === 32 || v === 40 || Qr(v) ? n(v) : (e.consume(v), v === 92 ? E : h);
  }
  function E(v) {
    return v === 40 || v === 41 || v === 92 ? (e.consume(v), h) : h(v);
  }
}
function ua(e, t, n, r, i, o) {
  const l = this;
  let a = 0, u;
  return s;
  function s(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), c;
  }
  function c(p) {
    return a > 999 || p === null || p === 91 || p === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : Z(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || Z(p) || a++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), u || (u = !oe(p)), p === 92 ? d : f);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
  }
}
function ca(e, t, n, r, i, o) {
  let l;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), l = d === 40 ? 41 : d, u) : n(d);
  }
  function u(d) {
    return d === l ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(o), s(d));
  }
  function s(d) {
    return d === l ? (e.exit(o), u(l)) : d === null ? n(d) : Z(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ge(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === l || d === null || Z(d) ? (e.exit("chunkString"), s(d)) : (e.consume(d), d === 92 ? f : c);
  }
  function f(d) {
    return d === l || d === 92 ? (e.consume(d), c) : c(d);
  }
}
function nn(e, t) {
  let n;
  return r;
  function r(i) {
    return Z(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : oe(i) ? ge(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const ad = {
  name: "definition",
  tokenize: ud
}, sd = {
  partial: !0,
  tokenize: cd
};
function ud(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), l(p);
  }
  function l(p) {
    return ua.call(
      r,
      e,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function a(p) {
    return i = $t(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), u) : n(p);
  }
  function u(p) {
    return Pe(p) ? nn(e, s)(p) : s(p);
  }
  function s(p) {
    return sa(
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
    return e.attempt(sd, f, f)(p);
  }
  function f(p) {
    return oe(p) ? ge(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || Z(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function cd(e, t, n) {
  return r;
  function r(a) {
    return Pe(a) ? nn(e, i)(a) : n(a);
  }
  function i(a) {
    return ca(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return oe(a) ? ge(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || Z(a) ? t(a) : n(a);
  }
}
const fd = {
  name: "hardBreakEscape",
  tokenize: pd
};
function pd(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return Z(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const dd = {
  name: "headingAtx",
  resolve: hd,
  tokenize: md
};
function hd(e, t) {
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
  }, Ge(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function md(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), o(c);
  }
  function o(c) {
    return e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), l) : c === null || Pe(c) ? (e.exit("atxHeadingSequence"), a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || Z(c) ? (e.exit("atxHeading"), t(c)) : oe(c) ? ge(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), s(c));
  }
  function u(c) {
    return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), a(c));
  }
  function s(c) {
    return c === null || c === 35 || Pe(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), s);
  }
}
const gd = [
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
], Bo = ["pre", "script", "style", "textarea"], yd = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Sd,
  tokenize: vd
}, bd = {
  partial: !0,
  tokenize: wd
}, xd = {
  partial: !0,
  tokenize: Ed
};
function Sd(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function vd(e, t, n) {
  const r = this;
  let i, o, l, a, u;
  return s;
  function s(b) {
    return c(b);
  }
  function c(b) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(b), f;
  }
  function f(b) {
    return b === 33 ? (e.consume(b), d) : b === 47 ? (e.consume(b), o = !0, h) : b === 63 ? (e.consume(b), i = 3, r.interrupt ? t : m) : qe(b) ? (e.consume(b), l = String.fromCharCode(b), E) : n(b);
  }
  function d(b) {
    return b === 45 ? (e.consume(b), i = 2, p) : b === 91 ? (e.consume(b), i = 5, a = 0, x) : qe(b) ? (e.consume(b), i = 4, r.interrupt ? t : m) : n(b);
  }
  function p(b) {
    return b === 45 ? (e.consume(b), r.interrupt ? t : m) : n(b);
  }
  function x(b) {
    const U = "CDATA[";
    return b === U.charCodeAt(a++) ? (e.consume(b), a === U.length ? r.interrupt ? t : P : x) : n(b);
  }
  function h(b) {
    return qe(b) ? (e.consume(b), l = String.fromCharCode(b), E) : n(b);
  }
  function E(b) {
    if (b === null || b === 47 || b === 62 || Pe(b)) {
      const U = b === 47, K = l.toLowerCase();
      return !U && !o && Bo.includes(K) ? (i = 1, r.interrupt ? t(b) : P(b)) : gd.includes(l.toLowerCase()) ? (i = 6, U ? (e.consume(b), v) : r.interrupt ? t(b) : P(b)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(b) : o ? _(b) : w(b));
    }
    return b === 45 || $e(b) ? (e.consume(b), l += String.fromCharCode(b), E) : n(b);
  }
  function v(b) {
    return b === 62 ? (e.consume(b), r.interrupt ? t : P) : n(b);
  }
  function _(b) {
    return oe(b) ? (e.consume(b), _) : g(b);
  }
  function w(b) {
    return b === 47 ? (e.consume(b), g) : b === 58 || b === 95 || qe(b) ? (e.consume(b), R) : oe(b) ? (e.consume(b), w) : g(b);
  }
  function R(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || $e(b) ? (e.consume(b), R) : C(b);
  }
  function C(b) {
    return b === 61 ? (e.consume(b), S) : oe(b) ? (e.consume(b), C) : w(b);
  }
  function S(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), u = b, z) : oe(b) ? (e.consume(b), S) : W(b);
  }
  function z(b) {
    return b === u ? (e.consume(b), u = null, H) : b === null || Z(b) ? n(b) : (e.consume(b), z);
  }
  function W(b) {
    return b === null || b === 34 || b === 39 || b === 47 || b === 60 || b === 61 || b === 62 || b === 96 || Pe(b) ? C(b) : (e.consume(b), W);
  }
  function H(b) {
    return b === 47 || b === 62 || oe(b) ? w(b) : n(b);
  }
  function g(b) {
    return b === 62 ? (e.consume(b), O) : n(b);
  }
  function O(b) {
    return b === null || Z(b) ? P(b) : oe(b) ? (e.consume(b), O) : n(b);
  }
  function P(b) {
    return b === 45 && i === 2 ? (e.consume(b), B) : b === 60 && i === 1 ? (e.consume(b), Q) : b === 62 && i === 4 ? (e.consume(b), M) : b === 63 && i === 3 ? (e.consume(b), m) : b === 93 && i === 5 ? (e.consume(b), ye) : Z(b) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(bd, q, V)(b)) : b === null || Z(b) ? (e.exit("htmlFlowData"), V(b)) : (e.consume(b), P);
  }
  function V(b) {
    return e.check(xd, D, q)(b);
  }
  function D(b) {
    return e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), A;
  }
  function A(b) {
    return b === null || Z(b) ? V(b) : (e.enter("htmlFlowData"), P(b));
  }
  function B(b) {
    return b === 45 ? (e.consume(b), m) : P(b);
  }
  function Q(b) {
    return b === 47 ? (e.consume(b), l = "", pe) : P(b);
  }
  function pe(b) {
    if (b === 62) {
      const U = l.toLowerCase();
      return Bo.includes(U) ? (e.consume(b), M) : P(b);
    }
    return qe(b) && l.length < 8 ? (e.consume(b), l += String.fromCharCode(b), pe) : P(b);
  }
  function ye(b) {
    return b === 93 ? (e.consume(b), m) : P(b);
  }
  function m(b) {
    return b === 62 ? (e.consume(b), M) : b === 45 && i === 2 ? (e.consume(b), m) : P(b);
  }
  function M(b) {
    return b === null || Z(b) ? (e.exit("htmlFlowData"), q(b)) : (e.consume(b), M);
  }
  function q(b) {
    return e.exit("htmlFlow"), t(b);
  }
}
function Ed(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return Z(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function wd(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(nr, t, n);
  }
}
const kd = {
  name: "htmlText",
  tokenize: Cd
};
function Cd(e, t, n) {
  const r = this;
  let i, o, l;
  return a;
  function a(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), u;
  }
  function u(m) {
    return m === 33 ? (e.consume(m), s) : m === 47 ? (e.consume(m), C) : m === 63 ? (e.consume(m), w) : qe(m) ? (e.consume(m), W) : n(m);
  }
  function s(m) {
    return m === 45 ? (e.consume(m), c) : m === 91 ? (e.consume(m), o = 0, x) : qe(m) ? (e.consume(m), _) : n(m);
  }
  function c(m) {
    return m === 45 ? (e.consume(m), p) : n(m);
  }
  function f(m) {
    return m === null ? n(m) : m === 45 ? (e.consume(m), d) : Z(m) ? (l = f, Q(m)) : (e.consume(m), f);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), p) : f(m);
  }
  function p(m) {
    return m === 62 ? B(m) : m === 45 ? d(m) : f(m);
  }
  function x(m) {
    const M = "CDATA[";
    return m === M.charCodeAt(o++) ? (e.consume(m), o === M.length ? h : x) : n(m);
  }
  function h(m) {
    return m === null ? n(m) : m === 93 ? (e.consume(m), E) : Z(m) ? (l = h, Q(m)) : (e.consume(m), h);
  }
  function E(m) {
    return m === 93 ? (e.consume(m), v) : h(m);
  }
  function v(m) {
    return m === 62 ? B(m) : m === 93 ? (e.consume(m), v) : h(m);
  }
  function _(m) {
    return m === null || m === 62 ? B(m) : Z(m) ? (l = _, Q(m)) : (e.consume(m), _);
  }
  function w(m) {
    return m === null ? n(m) : m === 63 ? (e.consume(m), R) : Z(m) ? (l = w, Q(m)) : (e.consume(m), w);
  }
  function R(m) {
    return m === 62 ? B(m) : w(m);
  }
  function C(m) {
    return qe(m) ? (e.consume(m), S) : n(m);
  }
  function S(m) {
    return m === 45 || $e(m) ? (e.consume(m), S) : z(m);
  }
  function z(m) {
    return Z(m) ? (l = z, Q(m)) : oe(m) ? (e.consume(m), z) : B(m);
  }
  function W(m) {
    return m === 45 || $e(m) ? (e.consume(m), W) : m === 47 || m === 62 || Pe(m) ? H(m) : n(m);
  }
  function H(m) {
    return m === 47 ? (e.consume(m), B) : m === 58 || m === 95 || qe(m) ? (e.consume(m), g) : Z(m) ? (l = H, Q(m)) : oe(m) ? (e.consume(m), H) : B(m);
  }
  function g(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || $e(m) ? (e.consume(m), g) : O(m);
  }
  function O(m) {
    return m === 61 ? (e.consume(m), P) : Z(m) ? (l = O, Q(m)) : oe(m) ? (e.consume(m), O) : H(m);
  }
  function P(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), i = m, V) : Z(m) ? (l = P, Q(m)) : oe(m) ? (e.consume(m), P) : (e.consume(m), D);
  }
  function V(m) {
    return m === i ? (e.consume(m), i = void 0, A) : m === null ? n(m) : Z(m) ? (l = V, Q(m)) : (e.consume(m), V);
  }
  function D(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? n(m) : m === 47 || m === 62 || Pe(m) ? H(m) : (e.consume(m), D);
  }
  function A(m) {
    return m === 47 || m === 62 || Pe(m) ? H(m) : n(m);
  }
  function B(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(m);
  }
  function Q(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), pe;
  }
  function pe(m) {
    return oe(m) ? ge(e, ye, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : ye(m);
  }
  function ye(m) {
    return e.enter("htmlTextData"), l(m);
  }
}
const Ci = {
  name: "labelEnd",
  resolveAll: Ad,
  resolveTo: Id,
  tokenize: Pd
}, Td = {
  tokenize: Nd
}, Od = {
  tokenize: _d
}, Rd = {
  tokenize: Dd
};
function Ad(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Ge(e, 0, e.length, n), e;
}
function Id(e, t) {
  let n = e.length, r = 0, i, o, l, a;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (l) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = n);
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
      ...e[l][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return a = [["enter", u, t], ["enter", s, t]], a = je(a, e.slice(o + 1, o + r + 3)), a = je(a, [["enter", c, t]]), a = je(a, ki(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), a = je(a, [["exit", c, t], e[l - 2], e[l - 1], ["exit", s, t]]), a = je(a, e.slice(l + 1)), a = je(a, [["exit", u, t]]), Ge(e, o, e.length, a), e;
}
function Pd(e, t, n) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return o ? o._inactive ? f(d) : (l = r.parser.defined.includes($t(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(d);
  }
  function u(d) {
    return d === 40 ? e.attempt(Td, c, l ? c : f)(d) : d === 91 ? e.attempt(Od, c, l ? s : f)(d) : l ? c(d) : f(d);
  }
  function s(d) {
    return e.attempt(Rd, c, f)(d);
  }
  function c(d) {
    return t(d);
  }
  function f(d) {
    return o._balanced = !0, n(d);
  }
}
function Nd(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return Pe(f) ? nn(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41 ? c(f) : sa(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function l(f) {
    return Pe(f) ? nn(e, u)(f) : c(f);
  }
  function a(f) {
    return n(f);
  }
  function u(f) {
    return f === 34 || f === 39 || f === 40 ? ca(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function s(f) {
    return Pe(f) ? nn(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function _d(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return ua.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes($t(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function Dd(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Md = {
  name: "labelStartImage",
  resolveAll: Ci.resolveAll,
  tokenize: $d
};
function $d(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
  }
  function o(a) {
    return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : n(a);
  }
  function l(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const zd = {
  name: "labelStartLink",
  resolveAll: Ci.resolveAll,
  tokenize: Ld
};
function Ld(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Or = {
  name: "lineEnding",
  tokenize: Bd
};
function Bd(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ge(e, t, "linePrefix");
  }
}
const Pn = {
  name: "thematicBreak",
  tokenize: Fd
};
function Fd(e, t, n) {
  let r = 0, i;
  return o;
  function o(s) {
    return e.enter("thematicBreak"), l(s);
  }
  function l(s) {
    return i = s, a(s);
  }
  function a(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || Z(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), oe(s) ? ge(e, a, "whitespace")(s) : a(s));
  }
}
const Ie = {
  continuation: {
    tokenize: Wd
  },
  exit: qd,
  name: "list",
  tokenize: Vd
}, jd = {
  partial: !0,
  tokenize: Yd
}, Ud = {
  partial: !0,
  tokenize: Hd
};
function Vd(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(p) {
    const x = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (x === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : Jr(p)) {
      if (r.containerState.type || (r.containerState.type = x, e.enter(x, {
        _container: !0
      })), x === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(Pn, n, s)(p) : s(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(p);
    }
    return n(p);
  }
  function u(p) {
    return Jr(p) && ++l < 10 ? (e.consume(p), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), s(p)) : n(p);
  }
  function s(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      nr,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(jd, d, f)
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, o++, d(p);
  }
  function f(p) {
    return oe(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : n(p);
  }
  function d(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Wd(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(nr, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ge(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !oe(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Ud, t, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ge(e, e.attempt(Ie, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Hd(e, t, n) {
  const r = this;
  return ge(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function qd(e) {
  e.exit(this.containerState.type);
}
function Yd(e, t, n) {
  const r = this;
  return ge(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !oe(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Fo = {
  name: "setextUnderline",
  resolveTo: Gd,
  tokenize: Kd
};
function Gd(e, t) {
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
  const l = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", l, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = l, e.push(["exit", l, t]), e;
}
function Kd(e, t, n) {
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
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = s, l(s)) : n(s);
  }
  function l(s) {
    return e.enter("setextHeadingLineSequence"), a(s);
  }
  function a(s) {
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), oe(s) ? ge(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || Z(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Xd = {
  tokenize: Qd
};
function Qd(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    nr,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ge(e, e.attempt(this.parser.constructs.flow, i, e.attempt(nd, i)), "linePrefix"))
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
const Jd = {
  resolveAll: pa()
}, Zd = fa("string"), eh = fa("text");
function fa(e) {
  return {
    resolveAll: pa(e === "text" ? th : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, l, a);
    return l;
    function l(c) {
      return s(c) ? o(c) : a(c);
    }
    function a(c) {
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
function pa(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function th(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, l = -1, a = 0, u;
      for (; o--; ) {
        const s = i[o];
        if (typeof s == "string") {
          for (l = s.length; s.charCodeAt(l - 1) === 32; )
            a++, l--;
          if (l) break;
          l = -1;
        } else if (s === -2)
          u = !0, a++;
        else if (s !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const s = {
          type: n === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? l : r.start._bufferIndex + l,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
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
const nh = {
  42: Ie,
  43: Ie,
  45: Ie,
  48: Ie,
  49: Ie,
  50: Ie,
  51: Ie,
  52: Ie,
  53: Ie,
  54: Ie,
  55: Ie,
  56: Ie,
  57: Ie,
  62: ia
}, rh = {
  91: ad
}, ih = {
  [-2]: Tr,
  [-1]: Tr,
  32: Tr
}, oh = {
  35: dd,
  42: Pn,
  45: [Fo, Pn],
  60: yd,
  61: Fo,
  95: Pn,
  96: Lo,
  126: Lo
}, lh = {
  38: la,
  92: oa
}, ah = {
  [-5]: Or,
  [-4]: Or,
  [-3]: Or,
  33: Md,
  38: la,
  42: Zr,
  60: [zp, kd],
  91: zd,
  92: [fd, oa],
  93: Ci,
  95: Zr,
  96: Xp
}, sh = {
  null: [Zr, Jd]
}, uh = {
  null: [42, 95]
}, ch = {
  null: []
}, fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: uh,
  contentInitial: rh,
  disable: ch,
  document: nh,
  flow: oh,
  flowInitial: ih,
  insideSpan: sh,
  string: lh,
  text: ah
}, Symbol.toStringTag, { value: "Module" }));
function ph(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let l = [], a = [];
  const u = {
    attempt: z(C),
    check: z(S),
    consume: _,
    enter: w,
    exit: R,
    interrupt: z(S, {
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
  function f(O) {
    return l = je(l, O), E(), l[l.length - 1] !== null ? [] : (W(t, 0), s.events = ki(o, s.events, s), s.events);
  }
  function d(O, P) {
    return hh(p(O), P);
  }
  function p(O) {
    return dh(l, O);
  }
  function x() {
    const {
      _bufferIndex: O,
      _index: P,
      line: V,
      column: D,
      offset: A
    } = r;
    return {
      _bufferIndex: O,
      _index: P,
      line: V,
      column: D,
      offset: A
    };
  }
  function h(O) {
    i[O.line] = O.column, g();
  }
  function E() {
    let O;
    for (; r._index < l.length; ) {
      const P = l[r._index];
      if (typeof P == "string")
        for (O = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === O && r._bufferIndex < P.length; )
          v(P.charCodeAt(r._bufferIndex));
      else
        v(P);
    }
  }
  function v(O) {
    c = c(O);
  }
  function _(O) {
    Z(O) ? (r.line++, r.column = 1, r.offset += O === -3 ? 2 : 1, g()) : O !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = O;
  }
  function w(O, P) {
    const V = P || {};
    return V.type = O, V.start = x(), s.events.push(["enter", V, s]), a.push(V), V;
  }
  function R(O) {
    const P = a.pop();
    return P.end = x(), s.events.push(["exit", P, s]), P;
  }
  function C(O, P) {
    W(O, P.from);
  }
  function S(O, P) {
    P.restore();
  }
  function z(O, P) {
    return V;
    function V(D, A, B) {
      let Q, pe, ye, m;
      return Array.isArray(D) ? (
        /* c8 ignore next 1 */
        q(D)
      ) : "tokenize" in D ? (
        // Looks like a construct.
        q([
          /** @type {Construct} */
          D
        ])
      ) : M(D);
      function M(j) {
        return G;
        function G(X) {
          const ne = X !== null && j[X], J = X !== null && j.null, be = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ne) ? ne : ne ? [ne] : [],
            ...Array.isArray(J) ? J : J ? [J] : []
          ];
          return q(be)(X);
        }
      }
      function q(j) {
        return Q = j, pe = 0, j.length === 0 ? B : b(j[pe]);
      }
      function b(j) {
        return G;
        function G(X) {
          return m = H(), ye = j, j.partial || (s.currentConstruct = j), j.name && s.parser.constructs.disable.null.includes(j.name) ? K() : j.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            P ? Object.assign(Object.create(s), P) : s,
            u,
            U,
            K
          )(X);
        }
      }
      function U(j) {
        return O(ye, m), A;
      }
      function K(j) {
        return m.restore(), ++pe < Q.length ? b(Q[pe]) : B;
      }
    }
  }
  function W(O, P) {
    O.resolveAll && !o.includes(O) && o.push(O), O.resolve && Ge(s.events, P, s.events.length - P, O.resolve(s.events.slice(P), s)), O.resolveTo && (s.events = O.resolveTo(s.events, s));
  }
  function H() {
    const O = x(), P = s.previous, V = s.currentConstruct, D = s.events.length, A = Array.from(a);
    return {
      from: D,
      restore: B
    };
    function B() {
      r = O, s.previous = P, s.currentConstruct = V, s.events.length = D, a = A, g();
    }
  }
  function g() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function dh(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let l;
  if (n === i)
    l = [e[n].slice(r, o)];
  else {
    if (l = e.slice(n, i), r > -1) {
      const a = l[0];
      typeof a == "string" ? l[0] = a.slice(r) : l.shift();
    }
    o > 0 && l.push(e[i].slice(0, o));
  }
  return l;
}
function hh(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let l;
    if (typeof o == "string")
      l = o;
    else switch (o) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(o);
    }
    i = o === -2, r.push(l);
  }
  return r.join("");
}
function mh(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Ep([fh, ...(e || {}).extensions || []])
    ),
    content: i(Ip),
    defined: [],
    document: i(Np),
    flow: i(Xd),
    lazy: {},
    string: i(Zd),
    text: i(eh)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return ph(r, o, a);
    }
  }
}
function gh(e) {
  for (; !aa(e); )
    ;
  return e;
}
const jo = /[\0\t\n\r]/g;
function yh() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, a) {
    const u = [];
    let s, c, f, d, p;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length; ) {
      if (jo.lastIndex = f, s = jo.exec(o), d = s && s.index !== void 0 ? s.index : o.length, p = o.charCodeAt(d), !s) {
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
    return a && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const bh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function xh(e) {
  return e.replace(bh, Sh);
}
function Sh(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return ra(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return wi(n) || e;
}
const da = {}.hasOwnProperty;
function vh(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Eh(n)(gh(mh(n).document().write(yh()(e, t, !0))));
}
function Eh(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(gn),
      autolinkProtocol: H,
      autolinkEmail: H,
      atxHeading: o(ct),
      blockQuote: o(J),
      characterEscape: H,
      characterReference: H,
      codeFenced: o(be),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(be, l),
      codeText: o(F, l),
      codeTextData: H,
      data: H,
      codeFlowValue: H,
      definition: o(ve),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Ae),
      hardBreakEscape: o(nt),
      hardBreakTrailing: o(nt),
      htmlFlow: o(Et, l),
      htmlFlowData: H,
      htmlText: o(Et, l),
      htmlTextData: H,
      image: o(mn),
      label: l,
      link: o(gn),
      listItem: o(or),
      listItemValue: d,
      listOrdered: o(yn, f),
      listUnordered: o(yn),
      paragraph: o(lr),
      reference: b,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(ct),
      strong: o(wt),
      thematicBreak: o(sr)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: C,
      autolink: u(),
      autolinkEmail: ne,
      autolinkProtocol: X,
      blockQuote: u(),
      characterEscapeValue: g,
      characterReferenceMarkerHexadecimal: K,
      characterReferenceMarkerNumeric: K,
      characterReferenceValue: j,
      characterReference: G,
      codeFenced: u(E),
      codeFencedFence: h,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: x,
      codeFlowValue: g,
      codeIndented: u(v),
      codeText: u(A),
      codeTextData: g,
      data: g,
      definition: u(),
      definitionDestinationString: R,
      definitionLabelString: _,
      definitionTitleString: w,
      emphasis: u(),
      hardBreakEscape: u(P),
      hardBreakTrailing: u(P),
      htmlFlow: u(V),
      htmlFlowData: g,
      htmlText: u(D),
      htmlTextData: g,
      image: u(Q),
      label: ye,
      labelText: pe,
      lineEnding: O,
      link: u(B),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: U,
      resourceDestinationString: m,
      resourceTitleString: M,
      resource: q,
      setextHeading: u(W),
      setextHeadingLineSequence: z,
      setextHeadingText: S,
      strong: u(),
      thematicBreak: u()
    }
  };
  ha(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(k) {
    let N = {
      type: "root",
      children: []
    };
    const L = {
      stack: [N],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: l,
      resume: c,
      data: n
    }, te = [];
    let ie = -1;
    for (; ++ie < k.length; )
      if (k[ie][1].type === "listOrdered" || k[ie][1].type === "listUnordered")
        if (k[ie][0] === "enter")
          te.push(ie);
        else {
          const Oe = te.pop();
          ie = i(k, Oe, ie);
        }
    for (ie = -1; ++ie < k.length; ) {
      const Oe = t[k[ie][0]];
      da.call(Oe, k[ie][1].type) && Oe[k[ie][1].type].call(Object.assign({
        sliceSerialize: k[ie][2].sliceSerialize
      }, L), k[ie][1]);
    }
    if (L.tokenStack.length > 0) {
      const Oe = L.tokenStack[L.tokenStack.length - 1];
      (Oe[1] || Uo).call(L, void 0, Oe[0]);
    }
    for (N.position = {
      start: it(k.length > 0 ? k[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: it(k.length > 0 ? k[k.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ie = -1; ++ie < t.transforms.length; )
      N = t.transforms[ie](N) || N;
    return N;
  }
  function i(k, N, L) {
    let te = N - 1, ie = -1, Oe = !1, Be, Ve, rt, ft;
    for (; ++te <= L; ) {
      const xe = k[te];
      switch (xe[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          xe[0] === "enter" ? ie++ : ie--, ft = void 0;
          break;
        }
        case "lineEndingBlank": {
          xe[0] === "enter" && (Be && !ft && !ie && !rt && (rt = te), ft = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ft = void 0;
      }
      if (!ie && xe[0] === "enter" && xe[1].type === "listItemPrefix" || ie === -1 && xe[0] === "exit" && (xe[1].type === "listUnordered" || xe[1].type === "listOrdered")) {
        if (Be) {
          let Ke = te;
          for (Ve = void 0; Ke--; ) {
            const Ee = k[Ke];
            if (Ee[1].type === "lineEnding" || Ee[1].type === "lineEndingBlank") {
              if (Ee[0] === "exit") continue;
              Ve && (k[Ve][1].type = "lineEndingBlank", Oe = !0), Ee[1].type = "lineEnding", Ve = Ke;
            } else if (!(Ee[1].type === "linePrefix" || Ee[1].type === "blockQuotePrefix" || Ee[1].type === "blockQuotePrefixWhitespace" || Ee[1].type === "blockQuoteMarker" || Ee[1].type === "listItemIndent")) break;
          }
          rt && (!Ve || rt < Ve) && (Be._spread = !0), Be.end = Object.assign({}, Ve ? k[Ve][1].start : xe[1].end), k.splice(Ve || te, 0, ["exit", Be, xe[2]]), te++, L++;
        }
        if (xe[1].type === "listItemPrefix") {
          const Ke = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, xe[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Be = Ke, k.splice(te, 0, ["enter", Ke, xe[2]]), te++, L++, rt = void 0, ft = !0;
        }
      }
    }
    return k[N][1]._spread = Oe, L;
  }
  function o(k, N) {
    return L;
    function L(te) {
      a.call(this, k(te), te), N && N.call(this, te);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(k, N, L) {
    this.stack[this.stack.length - 1].children.push(k), this.stack.push(k), this.tokenStack.push([N, L || void 0]), k.position = {
      start: it(N.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(k) {
    return N;
    function N(L) {
      k && k.call(this, L), s.call(this, L);
    }
  }
  function s(k, N) {
    const L = this.stack.pop(), te = this.tokenStack.pop();
    if (te)
      te[0].type !== k.type && (N ? N.call(this, k, te[0]) : (te[1] || Uo).call(this, k, te[0]));
    else throw new Error("Cannot close `" + k.type + "` (" + tn({
      start: k.start,
      end: k.end
    }) + "): it’s not open");
    L.position.end = it(k.end);
  }
  function c() {
    return Sp(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(k) {
    if (this.data.expectingFirstListItemValue) {
      const N = this.stack[this.stack.length - 2];
      N.start = Number.parseInt(this.sliceSerialize(k), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.lang = k;
  }
  function x() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.meta = k;
  }
  function h() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function E() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function v() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = k.replace(/(\r?\n|\r)$/g, "");
  }
  function _(k) {
    const N = this.resume(), L = this.stack[this.stack.length - 1];
    L.label = N, L.identifier = $t(this.sliceSerialize(k)).toLowerCase();
  }
  function w() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.title = k;
  }
  function R() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.url = k;
  }
  function C(k) {
    const N = this.stack[this.stack.length - 1];
    if (!N.depth) {
      const L = this.sliceSerialize(k).length;
      N.depth = L;
    }
  }
  function S() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function z(k) {
    const N = this.stack[this.stack.length - 1];
    N.depth = this.sliceSerialize(k).codePointAt(0) === 61 ? 1 : 2;
  }
  function W() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function H(k) {
    const L = this.stack[this.stack.length - 1].children;
    let te = L[L.length - 1];
    (!te || te.type !== "text") && (te = ar(), te.position = {
      start: it(k.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, L.push(te)), this.stack.push(te);
  }
  function g(k) {
    const N = this.stack.pop();
    N.value += this.sliceSerialize(k), N.position.end = it(k.end);
  }
  function O(k) {
    const N = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const L = N.children[N.children.length - 1];
      L.position.end = it(k.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(N.type) && (H.call(this, k), g.call(this, k));
  }
  function P() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = k;
  }
  function D() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = k;
  }
  function A() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = k;
  }
  function B() {
    const k = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      k.type += "Reference", k.referenceType = N, delete k.url, delete k.title;
    } else
      delete k.identifier, delete k.label;
    this.data.referenceType = void 0;
  }
  function Q() {
    const k = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      k.type += "Reference", k.referenceType = N, delete k.url, delete k.title;
    } else
      delete k.identifier, delete k.label;
    this.data.referenceType = void 0;
  }
  function pe(k) {
    const N = this.sliceSerialize(k), L = this.stack[this.stack.length - 2];
    L.label = xh(N), L.identifier = $t(N).toLowerCase();
  }
  function ye() {
    const k = this.stack[this.stack.length - 1], N = this.resume(), L = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, L.type === "link") {
      const te = k.children;
      L.children = te;
    } else
      L.alt = N;
  }
  function m() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.url = k;
  }
  function M() {
    const k = this.resume(), N = this.stack[this.stack.length - 1];
    N.title = k;
  }
  function q() {
    this.data.inReference = void 0;
  }
  function b() {
    this.data.referenceType = "collapsed";
  }
  function U(k) {
    const N = this.resume(), L = this.stack[this.stack.length - 1];
    L.label = N, L.identifier = $t(this.sliceSerialize(k)).toLowerCase(), this.data.referenceType = "full";
  }
  function K(k) {
    this.data.characterReferenceType = k.type;
  }
  function j(k) {
    const N = this.sliceSerialize(k), L = this.data.characterReferenceType;
    let te;
    L ? (te = ra(N, L === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : te = wi(N);
    const ie = this.stack[this.stack.length - 1];
    ie.value += te;
  }
  function G(k) {
    const N = this.stack.pop();
    N.position.end = it(k.end);
  }
  function X(k) {
    g.call(this, k);
    const N = this.stack[this.stack.length - 1];
    N.url = this.sliceSerialize(k);
  }
  function ne(k) {
    g.call(this, k);
    const N = this.stack[this.stack.length - 1];
    N.url = "mailto:" + this.sliceSerialize(k);
  }
  function J() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function be() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function F() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function ve() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ae() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function ct() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function nt() {
    return {
      type: "break"
    };
  }
  function Et() {
    return {
      type: "html",
      value: ""
    };
  }
  function mn() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function gn() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function yn(k) {
    return {
      type: "list",
      ordered: k.type === "listOrdered",
      start: null,
      spread: k._spread,
      children: []
    };
  }
  function or(k) {
    return {
      type: "listItem",
      spread: k._spread,
      checked: null,
      children: []
    };
  }
  function lr() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function wt() {
    return {
      type: "strong",
      children: []
    };
  }
  function ar() {
    return {
      type: "text",
      value: ""
    };
  }
  function sr() {
    return {
      type: "thematicBreak"
    };
  }
}
function it(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function ha(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? ha(e, r) : wh(e, r);
  }
}
function wh(e, t) {
  let n;
  for (n in t)
    if (da.call(t, n))
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
function Uo(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + tn({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + tn({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + tn({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function kh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return vh(r, {
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
function Ch(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Th(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Oh(e, t) {
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
function Rh(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ah(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ih(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = jt(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let l, a = e.footnoteCounts.get(r);
  a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
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
function Ph(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Nh(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function ma(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function _h(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ma(e, t);
  const i = { src: jt(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Dh(e, t) {
  const n = { src: jt(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Mh(e, t) {
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
function $h(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ma(e, t);
  const i = { href: jt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function zh(e, t) {
  const n = { href: jt(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Lh(e, t, n) {
  const r = e.all(t), i = n ? Bh(n) : ga(t), o = {}, l = [];
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
  let a = -1;
  for (; ++a < r.length; ) {
    const c = r[a];
    (i || a !== 0 || c.type !== "element" || c.tagName !== "p") && l.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? l.push(...c.children) : l.push(c);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && l.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: o, children: l };
  return e.patch(t, s), e.applyData(t, s);
}
function Bh(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = ga(n[r]);
  }
  return t;
}
function ga(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Fh(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
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
function jh(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Uh(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Vh(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Wh(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], l), i.push(l);
  }
  if (n.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, a = xi(t.children[1]), u = Xl(t.children[t.children.length - 1]);
    a && u && (l.position = { start: a, end: u }), i.push(l);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Hh(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", l = n && n.type === "table" ? n.align : void 0, a = l ? l.length : t.children.length;
  let u = -1;
  const s = [];
  for (; ++u < a; ) {
    const f = t.children[u], d = {}, p = l ? l[u] : void 0;
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
function qh(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Vo = 9, Wo = 32;
function Yh(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Ho(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Ho(t.slice(i), i > 0, !1)), o.join("");
}
function Ho(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === Vo || o === Wo; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === Vo || o === Wo; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Gh(e, t) {
  const n = { type: "text", value: Yh(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Kh(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Xh = {
  blockquote: Ch,
  break: Th,
  code: Oh,
  delete: Rh,
  emphasis: Ah,
  footnoteReference: Ih,
  heading: Ph,
  html: Nh,
  imageReference: _h,
  image: Dh,
  inlineCode: Mh,
  linkReference: $h,
  link: zh,
  listItem: Lh,
  list: Fh,
  paragraph: jh,
  // @ts-expect-error: root is different, but hard to type.
  root: Uh,
  strong: Vh,
  table: Wh,
  tableCell: qh,
  tableRow: Hh,
  text: Gh,
  thematicBreak: Kh,
  toml: Tn,
  yaml: Tn,
  definition: Tn,
  footnoteDefinition: Tn
};
function Tn() {
}
const ya = -1, rr = 0, rn = 1, Fn = 2, Ti = 3, Oi = 4, Ri = 5, Ai = 6, ba = 7, xa = 8, Sa = typeof self == "object" ? self : globalThis, qo = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new Sa[e](t);
}, Qh = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = t[i];
    switch (o) {
      case rr:
      case ya:
        return n(l, i);
      case rn: {
        const a = n([], i);
        for (const u of l)
          a.push(r(u));
        return a;
      }
      case Fn: {
        const a = n({}, i);
        for (const [u, s] of l)
          a[r(u)] = r(s);
        return a;
      }
      case Ti:
        return n(new Date(l), i);
      case Oi: {
        const { source: a, flags: u } = l;
        return n(new RegExp(a, u), i);
      }
      case Ri: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of l)
          a.set(r(u), r(s));
        return a;
      }
      case Ai: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of l)
          a.add(r(u));
        return a;
      }
      case ba: {
        const { name: a, message: u } = l;
        return n(
          typeof Sa[a] == "function" ? qo(a, u) : new Error(u),
          i
        );
      }
      case xa:
        return n(BigInt(l), i);
      case "BigInt":
        return n(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: a } = new Uint8Array(l);
        return n(new DataView(a), l);
      }
    }
    return n(qo(o, l), i);
  };
  return r;
}, Yo = (e) => Qh(/* @__PURE__ */ new Map(), e)(0), mt = "", { toString: Jh } = {}, { keys: Zh } = Object, Yt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [rr, t];
  const n = Jh.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [rn, mt];
    case "Object":
      return [Fn, mt];
    case "Date":
      return [Ti, mt];
    case "RegExp":
      return [Oi, mt];
    case "Map":
      return [Ri, mt];
    case "Set":
      return [Ai, mt];
    case "DataView":
      return [rn, n];
  }
  return n.includes("Array") ? [rn, n] : e instanceof Error ? [ba, e.name || "Error"] : [Fn, n];
}, On = ([e, t]) => e === rr && (t === "function" || t === "symbol"), em = (e, t, n, r) => {
  const i = (l, a) => {
    const u = r.push(l) - 1;
    return n.set(a, u), u;
  }, o = (l) => {
    if (n.has(l))
      return n.get(l);
    let [a, u] = Yt(l);
    switch (a) {
      case rr: {
        let c = l;
        switch (u) {
          case "bigint":
            a = xa, c = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            c = null;
            break;
          case "undefined":
            return i([ya], l);
        }
        return i([a, c], l);
      }
      case rn: {
        if (u) {
          let d = l;
          return u === "DataView" ? d = new Uint8Array(l.buffer) : u === "ArrayBuffer" && (d = new Uint8Array(l)), i([u, [...d]], l);
        }
        const c = [], f = i([a, c], l);
        for (const d of l)
          c.push(o(d));
        return f;
      }
      case Fn: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return o(l.toJSON());
        const c = [], f = i([a, c], l);
        for (const d of Zh(l))
          (e || !On(Yt(l[d]))) && c.push([o(d), o(l[d])]);
        return f;
      }
      case Ti:
        return i([a, isNaN(l.getTime()) ? mt : l.toISOString()], l);
      case Oi: {
        const { source: c, flags: f } = l;
        return i([a, { source: c, flags: f }], l);
      }
      case Ri: {
        const c = [], f = i([a, c], l);
        for (const [d, p] of l)
          (e || !(On(Yt(d)) || On(Yt(p)))) && c.push([o(d), o(p)]);
        return f;
      }
      case Ai: {
        const c = [], f = i([a, c], l);
        for (const d of l)
          (e || !On(Yt(d))) && c.push(o(d));
        return f;
      }
    }
    const { message: s } = l;
    return i([a, { name: u, message: s }], l);
  };
  return o;
}, Go = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return em(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, jn = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Yo(Go(e, t)) : structuredClone(e)
) : (e, t) => Yo(Go(e, t));
function tm(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function nm(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function rm(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || tm, r = e.options.footnoteBackLabel || nm, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const c = e.all(s), f = String(s.identifier).toUpperCase(), d = jt(f.toLowerCase());
    let p = 0;
    const x = [], h = e.footnoteCounts.get(f);
    for (; h !== void 0 && ++p <= h; ) {
      x.length > 0 && x.push({ type: "text", value: " " });
      let _ = typeof n == "string" ? n : n(u, p);
      typeof _ == "string" && (_ = { type: "text", value: _ }), x.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(_) ? _ : [_]
      });
    }
    const E = c[c.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const _ = E.children[E.children.length - 1];
      _ && _.type === "text" ? _.value += " " : E.children.push({ type: "text", value: " " }), E.children.push(...x);
    } else
      c.push(...x);
    const v = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + d },
      children: e.wrap(c, !0)
    };
    e.patch(s, v), a.push(v);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...jn(l),
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
          children: e.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const va = (
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
      return am;
    if (typeof e == "function")
      return ir(e);
    if (typeof e == "object")
      return Array.isArray(e) ? im(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        om(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return lm(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function im(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = va(e[n]);
  return ir(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function om(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return ir(n);
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
function lm(e) {
  return ir(t);
  function t(n) {
    return n && n.type === e;
  }
}
function ir(e) {
  return t;
  function t(n, r, i) {
    return !!(sm(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function am() {
  return !0;
}
function sm(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ea = [], um = !0, Ko = !1, cm = "skip";
function fm(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = va(i), l = r ? -1 : 1;
  a(e, void 0, [])();
  function a(u, s, c) {
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
      let p = Ea, x, h, E;
      if ((!t || o(u, s, c[c.length - 1] || void 0)) && (p = pm(n(u, c)), p[0] === Ko))
        return p;
      if ("children" in u && u.children) {
        const v = (
          /** @type {UnistParent} */
          u
        );
        if (v.children && p[0] !== cm)
          for (h = (r ? v.children.length : -1) + l, E = c.concat(v); h > -1 && h < v.children.length; ) {
            const _ = v.children[h];
            if (x = a(_, h, E)(), x[0] === Ko)
              return x;
            h = typeof x[1] == "number" ? x[1] : h + l;
          }
      }
      return p;
    }
  }
}
function pm(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [um, e] : e == null ? Ea : [e];
}
function wa(e, t, n, r) {
  let i, o, l;
  typeof t == "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), fm(e, o, a, i);
  function a(u, s) {
    const c = s[s.length - 1], f = c ? c.children.indexOf(u) : void 0;
    return l(u, f, c);
  }
}
const ei = {}.hasOwnProperty, dm = {};
function hm(e, t) {
  const n = t || dm, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...Xh, ...n.handlers }, a = {
    all: s,
    applyData: gm,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: u,
    options: n,
    patch: mm,
    wrap: bm
  };
  return wa(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : i, d = String(c.identifier).toUpperCase();
      f.has(d) || f.set(d, c);
    }
  }), a;
  function u(c, f) {
    const d = c.type, p = a.handlers[d];
    if (ei.call(a.handlers, d) && p)
      return p(a, c, f);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in c) {
        const { children: h, ...E } = c, v = jn(E);
        return v.children = a.all(c), v;
      }
      return jn(c);
    }
    return (a.options.unknownHandler || ym)(a, c, f);
  }
  function s(c) {
    const f = [];
    if ("children" in c) {
      const d = c.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const x = a.one(d[p], c);
        if (x) {
          if (p && d[p - 1].type === "break" && (!Array.isArray(x) && x.type === "text" && (x.value = Xo(x.value)), !Array.isArray(x) && x.type === "element")) {
            const h = x.children[0];
            h && h.type === "text" && (h.value = Xo(h.value));
          }
          Array.isArray(x) ? f.push(...x) : f.push(x);
        }
      }
    }
    return f;
  }
}
function mm(e, t) {
  e.position && (t.position = Jf(e));
}
function gm(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const l = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: l };
      }
    n.type === "element" && o && Object.assign(n.properties, jn(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function ym(e, t) {
  const n = t.data || {}, r = "value" in t && !(ei.call(n, "hProperties") || ei.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function bm(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Xo(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Qo(e, t) {
  const n = hm(e, t), r = n.one(e, void 0), i = rm(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function xm(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Qo(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Qo(n, { file: r, ...e || t })
    );
  };
}
function Jo(e) {
  if (e)
    throw e;
}
var Rr, Zo;
function Sm() {
  if (Zo) return Rr;
  Zo = 1;
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
  }, l = function(s, c) {
    n && c.name === "__proto__" ? n(s, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : s[c.name] = c.newValue;
  }, a = function(s, c) {
    if (c === "__proto__")
      if (e.call(s, c)) {
        if (r)
          return r(s, c).value;
      } else return;
    return s[c];
  };
  return Rr = function u() {
    var s, c, f, d, p, x, h = arguments[0], E = 1, v = arguments.length, _ = !1;
    for (typeof h == "boolean" && (_ = h, h = arguments[1] || {}, E = 2), (h == null || typeof h != "object" && typeof h != "function") && (h = {}); E < v; ++E)
      if (s = arguments[E], s != null)
        for (c in s)
          f = a(h, c), d = a(s, c), h !== d && (_ && d && (o(d) || (p = i(d))) ? (p ? (p = !1, x = f && i(f) ? f : []) : x = f && o(f) ? f : {}, l(h, { name: c, newValue: u(_, x, d) })) : typeof d < "u" && l(h, { name: c, newValue: d }));
    return h;
  }, Rr;
}
var vm = Sm();
const Ar = /* @__PURE__ */ ri(vm);
function ti(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Em() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    a(null, ...i);
    function a(u, ...s) {
      const c = e[++o];
      let f = -1;
      if (u) {
        l(u);
        return;
      }
      for (; ++f < i.length; )
        (s[f] === null || s[f] === void 0) && (s[f] = i[f]);
      i = s, c ? wm(c, a)(...s) : l(null, ...s);
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
function wm(e, t) {
  let n;
  return r;
  function r(...l) {
    const a = e.length > l.length;
    let u;
    a && l.push(i);
    try {
      u = e.apply(this, l);
    } catch (s) {
      const c = (
        /** @type {Error} */
        s
      );
      if (a && n)
        throw c;
      return i(c);
    }
    a || (u && u.then && typeof u.then == "function" ? u.then(o, i) : u instanceof Error ? i(u) : o(u));
  }
  function i(l, ...a) {
    n || (n = !0, t(l, ...a));
  }
  function o(l) {
    i(null, l);
  }
}
const He = { basename: km, dirname: Cm, extname: Tm, join: Om, sep: "/" };
function km(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  hn(e);
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
  let l = -1, a = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      l < 0 && (o = !0, l = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
  return n === r ? r = l : r < 0 && (r = e.length), e.slice(n, r);
}
function Cm(e) {
  if (hn(e), e.length === 0)
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
function Tm(e) {
  hn(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, l;
  for (; t--; ) {
    const a = e.codePointAt(t);
    if (a === 47) {
      if (l) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (l = !0, n = t + 1), a === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Om(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    hn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Rm(n);
}
function Rm(e) {
  hn(e);
  const t = e.codePointAt(0) === 47;
  let n = Am(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Am(e, t) {
  let n = "", r = 0, i = -1, o = 0, l = -1, a, u;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      a = e.codePointAt(l);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
              u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, l) : n = e.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else a === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function hn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Im = { cwd: Pm };
function Pm() {
  return "/";
}
function ni(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Nm(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ni(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return _m(e);
}
function _m(e) {
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
const Ir = (
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
class ka {
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
    t ? ni(t) ? n = { path: t } : typeof t == "string" || Dm(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Im.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Ir.length; ) {
      const o = Ir[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Ir.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? He.basename(this.path) : void 0;
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
    Nr(t, "basename"), Pr(t, "basename"), this.path = He.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? He.dirname(this.path) : void 0;
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
    el(this.basename, "dirname"), this.path = He.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? He.extname(this.path) : void 0;
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
    if (Pr(t, "extname"), el(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = He.join(this.dirname, this.stem + (t || ""));
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
    ni(t) && (t = Nm(t)), Nr(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? He.basename(this.path, this.extname) : void 0;
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
    Nr(t, "stem"), Pr(t, "stem"), this.path = He.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new Re(
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
function Pr(e, t) {
  if (e && e.includes(He.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + He.sep + "`"
    );
}
function Nr(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function el(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Dm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Mm = (
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
), $m = {}.hasOwnProperty;
class Ii extends Mm {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Em();
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
      new Ii()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Ar(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Mr("data", this.frozen), this.namespace[t] = n, this) : $m.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Mr("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = Rn(t), r = this.parser || this.Parser;
    return _r("parse", r), r(String(n), n);
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
    return this.freeze(), _r("process", this.parser || this.Parser), Dr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, l) {
      const a = Rn(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(u, a, function(c, f, d) {
        if (c || !f || !d)
          return s(c);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), x = r.stringify(p, d);
        Bm(x) ? d.value = x : d.result = x, s(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          d
        );
      });
      function s(c, f) {
        c || !f ? l(c) : o ? o(f) : n(void 0, f);
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
    return this.freeze(), _r("processSync", this.parser || this.Parser), Dr("processSync", this.compiler || this.Compiler), this.process(t, i), nl("processSync", "process", n), r;
    function i(o, l) {
      n = !0, Jo(o), r = l;
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
    tl(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, a) {
      const u = Rn(n);
      i.run(t, u, s);
      function s(c, f, d) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        c ? a(c) : l ? l(p) : r(void 0, p, d);
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
    return this.run(t, n, o), nl("runSync", "run", r), i;
    function o(l, a) {
      Jo(l), i = a, r = !0;
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
    const r = Rn(n), i = this.compiler || this.Compiler;
    return Dr("stringify", i), tl(t), i(t, r);
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
    if (Mr("use", this.frozen), t != null) if (typeof t == "function")
      u(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? a(t) : l(t);
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
          l(s);
      else
        throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function l(s) {
      if (!("plugins" in s) && !("settings" in s))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(s.plugins), s.settings && (i.settings = Ar(!0, i.settings, s.settings));
    }
    function a(s) {
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
        ti(h) && ti(p) && (p = Ar(!0, h, p)), r[d] = [s, p, ...x];
      }
    }
  }
}
const zm = new Ii().freeze();
function _r(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Dr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Mr(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function tl(e) {
  if (!ti(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function nl(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Rn(e) {
  return Lm(e) ? e : new ka(e);
}
function Lm(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Bm(e) {
  return typeof e == "string" || Fm(e);
}
function Fm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const jm = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", rl = [], il = { allowDangerousHtml: !0 }, Um = /^(https?|ircs?|mailto|xmpp)$/i, Vm = [
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
function Wm(e) {
  const t = Hm(e), n = qm(e);
  return Ym(t.runSync(t.parse(n), n), e);
}
function Hm(e) {
  const t = e.rehypePlugins || rl, n = e.remarkPlugins || rl, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...il } : il;
  return zm().use(kh).use(n).use(xm, r).use(t);
}
function qm(e) {
  const t = e.children || "", n = new ka();
  return typeof t == "string" && (n.value = t), n;
}
function Ym(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, l = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || Gm;
  for (const c of Vm)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + jm + c.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), wa(e, s), rp(e, {
    Fragment: $r,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: T,
    jsxs: ue,
    passKeys: !0,
    passNode: !0
  });
  function s(c, f, d) {
    if (c.type === "raw" && d && typeof f == "number")
      return l ? d.children.splice(f, 1) : d.children[f] = { type: "text", value: c.value }, f;
    if (c.type === "element") {
      let p;
      for (p in Cr)
        if (Object.hasOwn(Cr, p) && Object.hasOwn(c.properties, p)) {
          const x = c.properties[p], h = Cr[p];
          (h === null || h.includes(c.tagName)) && (c.properties[p] = u(String(x || ""), p, c));
        }
    }
    if (c.type === "element") {
      let p = n ? !n.includes(c.tagName) : o ? o.includes(c.tagName) : !1;
      if (!p && r && typeof f == "number" && (p = !r(c, f, d)), p && d && typeof f == "number")
        return a && c.children ? d.children.splice(f, 1, ...c.children) : d.children.splice(f, 1), f;
    }
  }
}
function Gm(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Um.test(e.slice(0, t)) ? e : ""
  );
}
const Km = {
  column: "primary.main",
  customColumn: "info.main",
  operator: "error.main",
  unknownOperator: "text.disabled",
  logical: "secondary.main",
  paren: "warning.main",
  value: "text.primary"
}, ol = {
  column: 400,
  customColumn: 400,
  operator: 600,
  unknownOperator: 400,
  logical: 600,
  paren: 700,
  value: 400
}, Xm = 'Type a query like: column operator value — e.g. name == "John"', Qm = ({ open: e, onClose: t, helpContent: n, sx: r = {} }) => {
  const {
    dialog: i,
    title: o,
    closeButton: l,
    content: a,
    sectionTitle: u,
    body: s,
    codeBlock: c,
    exampleBlock: f,
    exampleLabel: d,
    list: p,
    listItem: x,
    chip: h,
    divider: E,
    actions: v,
    gotItButton: _,
    colorLegendItem: w,
    colorSwatch: R,
    warningText: C
  } = r;
  return /* @__PURE__ */ ue(
    ja,
    {
      open: e,
      onClose: t,
      maxWidth: "md",
      fullWidth: !0,
      scroll: "paper",
      sx: i,
      children: [
        /* @__PURE__ */ ue(Ua, { sx: { pr: 6, ...o }, children: [
          "How to Use the Query Search",
          /* @__PURE__ */ T(
            bt,
            {
              onClick: t,
              size: "small",
              sx: { position: "absolute", right: 12, top: 12, ...l },
              "aria-label": "close",
              children: /* @__PURE__ */ T(Ul, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ T(Va, { dividers: !0, sx: a, children: n ? typeof n == "string" ? /* @__PURE__ */ T(
          Wm,
          {
            components: {
              h1: ({ children: S }) => /* @__PURE__ */ T(se, { variant: "h5", gutterBottom: !0, sx: u, children: S }),
              h2: ({ children: S }) => /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: S }),
              h3: ({ children: S }) => /* @__PURE__ */ T(
                se,
                {
                  variant: "subtitle1",
                  gutterBottom: !0,
                  sx: { fontWeight: 600, ...u },
                  children: S
                }
              ),
              p: ({ children: S }) => /* @__PURE__ */ T(se, { variant: "body2", paragraph: !0, sx: s, children: S }),
              ul: ({ children: S }) => /* @__PURE__ */ T(re, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: S }),
              ol: ({ children: S }) => /* @__PURE__ */ T(re, { component: "ol", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: S }),
              li: ({ children: S }) => /* @__PURE__ */ T(
                se,
                {
                  component: "li",
                  variant: "body2",
                  gutterBottom: !0,
                  sx: x,
                  children: S
                }
              ),
              code: ({ inline: S, children: z }) => S ? /* @__PURE__ */ T(
                pt,
                {
                  label: z,
                  size: "small",
                  sx: { fontFamily: "monospace", ...h }
                }
              ) : /* @__PURE__ */ T(
                re,
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
                  children: z
                }
              ),
              pre: ({ children: S }) => /* @__PURE__ */ T($r, { children: S }),
              hr: () => /* @__PURE__ */ T(kt, { sx: { my: 2, ...E } }),
              strong: ({ children: S }) => /* @__PURE__ */ T("strong", { children: S }),
              a: ({ href: S, children: z }) => /* @__PURE__ */ T(
                se,
                {
                  component: "a",
                  href: S,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  variant: "body2",
                  sx: { color: "primary.main" },
                  children: z
                }
              ),
              blockquote: ({ children: S }) => /* @__PURE__ */ T(
                re,
                {
                  sx: {
                    borderLeft: 4,
                    borderColor: "grey.300",
                    pl: 2,
                    my: 1,
                    color: "text.secondary"
                  },
                  children: S
                }
              )
            },
            children: n
          }
        ) : n : /* @__PURE__ */ ue($r, { children: [
          /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: "Overview" }),
          /* @__PURE__ */ ue(se, { variant: "body2", paragraph: !0, sx: s, children: [
            "The query search box lets you filter data using a simple, readable query language. Type your conditions directly into the search field and press ",
            /* @__PURE__ */ T("strong", { children: "Apply" }),
            " to run the query. Suggestions will appear as you type to guide you through valid columns, operators, and logical connectors."
          ] }),
          /* @__PURE__ */ T(kt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: "Basic Syntax" }),
          /* @__PURE__ */ T(se, { variant: "body2", paragraph: !0, sx: s, children: "Every condition follows this pattern:" }),
          /* @__PURE__ */ T(
            re,
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
          /* @__PURE__ */ T(se, { variant: "body2", paragraph: !0, sx: s, children: "Each part is separated by a single space:" }),
          /* @__PURE__ */ ue(re, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: [
            /* @__PURE__ */ ue(
              se,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ T("strong", { children: "column" }),
                  " — the field you want to filter on (e.g.",
                  " ",
                  /* @__PURE__ */ T(
                    pt,
                    {
                      label: "name",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ T(
                    pt,
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
              se,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ T("strong", { children: "operator" }),
                  " — the comparison to apply (e.g.",
                  " ",
                  /* @__PURE__ */ T(
                    pt,
                    {
                      label: "==",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ T(
                    pt,
                    {
                      label: "contains",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ T(
                    pt,
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
              se,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ T("strong", { children: "value" }),
                  " — what you are comparing against. Wrap values that contain spaces in double quotes:",
                  " ",
                  /* @__PURE__ */ T(
                    pt,
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
          /* @__PURE__ */ T(kt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: "Combining Conditions" }),
          /* @__PURE__ */ ue(se, { variant: "body2", paragraph: !0, sx: s, children: [
            "Use ",
            /* @__PURE__ */ T("strong", { children: "AND" }),
            " or ",
            /* @__PURE__ */ T("strong", { children: "OR" }),
            " (uppercase) to join multiple conditions:"
          ] }),
          /* @__PURE__ */ T(
            re,
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
          /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: "Grouping with Parentheses" }),
          /* @__PURE__ */ ue(se, { variant: "body2", paragraph: !0, sx: s, children: [
            "You can mix ",
            /* @__PURE__ */ T("strong", { children: "AND" }),
            " and ",
            /* @__PURE__ */ T("strong", { children: "OR" }),
            " in the same query by using parentheses ",
            /* @__PURE__ */ T("strong", { children: "( )" }),
            " to group conditions:"
          ] }),
          /* @__PURE__ */ T(
            re,
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
          /* @__PURE__ */ ue(se, { variant: "body2", paragraph: !0, sx: s, children: [
            "Without parentheses, ",
            /* @__PURE__ */ T("strong", { children: "AND" }),
            " binds tighter than",
            " ",
            /* @__PURE__ */ T("strong", { children: "OR" }),
            ":"
          ] }),
          /* @__PURE__ */ T(
            re,
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
          /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: "NOT (Negation)" }),
          /* @__PURE__ */ ue(se, { variant: "body2", paragraph: !0, sx: s, children: [
            "Prefix a group with ",
            /* @__PURE__ */ T("strong", { children: "NOT" }),
            " to negate it:"
          ] }),
          /* @__PURE__ */ T(
            re,
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
          /* @__PURE__ */ T(kt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: "Examples" }),
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
          ].map(({ label: S, code: z }) => /* @__PURE__ */ ue(re, { mb: 1.5, children: [
            /* @__PURE__ */ T(
              se,
              {
                variant: "caption",
                sx: {
                  color: "text.secondary",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  ...d
                },
                children: S
              }
            ),
            /* @__PURE__ */ T(
              re,
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
                children: z
              }
            )
          ] }, S)),
          /* @__PURE__ */ T(kt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: "Tips" }),
          /* @__PURE__ */ T(re, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...p }, children: [
            "Start typing a column name and select it from the suggestion list.",
            "After picking a column, the suggestion list will show valid operators for that column.",
            "After entering a value, AND / OR will appear in the suggestion list.",
            "Use parentheses ( ) to group conditions when mixing AND and OR.",
            "Prefix a group with NOT to negate it — e.g. NOT (status == deleted).",
            'Wrap multi-word values in double quotes — e.g. "John Doe".',
            "AND has higher precedence than OR. Use parentheses to override.",
            "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
            "You can also build queries visually using the filter panel (click the tune icon)."
          ].map((S) => /* @__PURE__ */ T(
            se,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: x,
              children: S
            },
            S
          )) }),
          /* @__PURE__ */ T(kt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ T(se, { variant: "h6", gutterBottom: !0, sx: u, children: "Syntax Highlighting" }),
          /* @__PURE__ */ T(se, { variant: "body2", paragraph: !0, sx: s, children: "As you type, each part of the query is colorized to help you spot mistakes at a glance:" }),
          /* @__PURE__ */ T(re, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...p }, children: [
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
          ].map(({ color: S, label: z, desc: W }) => /* @__PURE__ */ ue(
            se,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: w,
              children: [
                /* @__PURE__ */ T(
                  re,
                  {
                    component: "span",
                    sx: {
                      display: "inline-block",
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: S,
                      mr: 1,
                      verticalAlign: "middle",
                      ...R
                    }
                  }
                ),
                /* @__PURE__ */ T(re, { component: "strong", sx: { color: S }, children: z }),
                " ",
                "— ",
                W
              ]
            },
            z
          )) })
        ] }) }),
        /* @__PURE__ */ T(Wa, { sx: v, children: /* @__PURE__ */ T(
          gt,
          {
            onClick: t,
            variant: "contained",
            disableElevation: !0,
            sx: _,
            children: "Got it"
          }
        ) })
      ]
    }
  );
}, Jm = ({
  columnsOperator: e,
  onSuggestionClick: t,
  defaultOperators: n,
  onApplyClicked: r,
  onClear: i,
  queryText: o,
  relatedOperators: l,
  placeholder: a = "",
  endAdornment: u,
  helpContent: s,
  sx: c = {},
  ...f
}) => {
  const {
    root: d,
    inputRow: p,
    inputWrapper: x,
    highlightOverlay: h,
    input: E,
    applyButton: v,
    helpButton: _,
    helpTooltip: w,
    adornmentBox: R,
    errorTooltip: C,
    hintTooltip: S,
    popper: z,
    suggestionsBox: W,
    suggestionsList: H,
    suggestionItem: g,
    suggestionText: O,
    tokenColors: P,
    tokenFontWeights: V,
    helpModal: D
  } = c, A = _t(
    () => ({ ...Km, ...P || {} }),
    [P]
  ), B = _t(
    () => ({
      ...ol,
      ...V || {}
    }),
    [V]
  ), Q = er(), pe = (k) => {
    if (!k || k === "inherit") return "inherit";
    const N = k.split(".");
    let L = Q.palette;
    for (const te of N)
      if (L = L == null ? void 0 : L[te], L === void 0) return k;
    return typeof L == "string" ? L : k;
  }, ye = _t(() => {
    const k = {};
    for (const N of Object.keys(A))
      k[N] = pe(A[N]);
    return k;
  }, [A, Q]), [m, M] = De(null), [q, b] = De([]), [U, K] = De([]), [j, G] = De(""), [X, ne] = De(!0), [J, be] = De(null), [F, ve] = De(!1), [Ae, ct] = De(0), nt = An(), Et = An(null), mn = An(null);
  Dt(() => {
    o != null && G(o);
  }, [o]), Dt(() => {
    const k = Object.keys(e), N = Array.from(
      /* @__PURE__ */ new Set([
        ...k.flatMap((Ee) => {
          var ur;
          return ((ur = e[Ee]) == null ? void 0 : ur.operators) || [];
        }),
        ...l || []
      ])
    ), L = j.trim().split(/\s+/).filter(Boolean), te = L[L.length - 1] || "", ie = L[L.length - 2] || "", Oe = L.length >= 2 ? `${L[L.length - 2]} ${L[L.length - 1]}` : "", Be = L.length >= 3 ? `${L[L.length - 3]} ${L[L.length - 2]} ${L[L.length - 1]}` : "", Ve = N.some(
      (Ee) => Ee.toUpperCase() === Be.toUpperCase()
    ) || N.some(
      (Ee) => Ee.toUpperCase() === Oe.toUpperCase()
    ), rt = Be && N.some(
      (Ee) => Ee.toUpperCase() === Be.toUpperCase()
    ) ? L[L.length - 4] || "" : Oe && N.some(
      (Ee) => Ee.toUpperCase() === Oe.toUpperCase()
    ) && L[L.length - 3] || "", ft = !ie || n.includes(ie);
    let xe;
    if (!j.trim() || n.includes(te) || te === "(")
      xe = k;
    else if (Ve) {
      const Ee = N.find(
        (Ut) => Ut.toUpperCase() === Be.toUpperCase()
      ) || N.find(
        (Ut) => Ut.toUpperCase() === Oe.toUpperCase()
      );
      Ee && ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"].some((Ut) => Ut.toUpperCase() === Ee.toUpperCase()), xe = n;
    } else k.includes(te) ? xe = e[te].operators : ft ? xe = N : (k.includes(ie) && e[ie].operators.includes(te) || N.includes(te) || rt && k.includes(rt), xe = n);
    b(xe), K(xe);
    const Ke = wf(j);
    ne(Ke.isValid), be(Ke.error);
  }, [j, e, n, l]), Dt(() => {
    const k = mn.current;
    if (!k || typeof ResizeObserver > "u") return;
    const N = () => ct(k.offsetWidth || 0);
    N();
    const L = new ResizeObserver(N);
    return L.observe(k), () => L.disconnect();
  }, [u, j, X]);
  const gn = (k) => {
    const N = k.target.value;
    G(N), K(
      q.filter(
        (L) => L.toLowerCase().includes(N.toLowerCase())
      )
    ), M(nt.current);
  }, yn = (k) => {
    Et.current && (Et.current.scrollLeft = k.target.scrollLeft);
  }, or = _t(
    () => kf(
      j,
      Object.keys(e || {}),
      Array.from(
        /* @__PURE__ */ new Set([
          ...Object.values(e || {}).flatMap(
            (k) => (k == null ? void 0 : k.operators) || []
          ),
          ...l || []
        ])
      ),
      n || []
    ),
    [j, e, l, n]
  ), lr = (k) => {
    G((N) => {
      const L = N.trimEnd();
      return L ? `${L} ${k} ` : `${k} `;
    }), t == null || t(k), setTimeout(() => {
      const N = nt.current;
      if (N) {
        const L = N.value.length;
        N.setSelectionRange(L, L), N.focus();
      }
    }, 0);
  }, wt = !!j && !X && !!J, ar = wt ? J : j ? "" : Xm, sr = wt ? void 0 : j ? !1 : void 0;
  return /* @__PURE__ */ ue(re, { width: "100%", sx: d, children: [
    /* @__PURE__ */ T(re, { display: "flex", sx: p, children: /* @__PURE__ */ ue(
      re,
      {
        sx: { position: "relative", flex: 1, minWidth: 0, ...x },
        children: [
          /* @__PURE__ */ T(
            re,
            {
              ref: Et,
              "aria-hidden": "true",
              sx: {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                // Stop short of the endAdornment block (help icon + Apply button
                // + any caller-provided adornment) so colored tokens never paint
                // behind the buttons when the query overflows horizontally.
                right: `${Ae}px`,
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
                ...h
              },
              children: or.map(
                (k, N) => k.type === "whitespace" ? /* @__PURE__ */ T("span", { children: k.text }, N) : /* @__PURE__ */ T(
                  "span",
                  {
                    style: {
                      color: ye[k.type] || "inherit",
                      fontWeight: B[k.type] ?? ol[k.type] ?? 400
                    },
                    children: k.text
                  },
                  N
                )
              )
            }
          ),
          /* @__PURE__ */ T(
            on,
            {
              title: ar,
              open: sr,
              placement: "top-start",
              arrow: !0,
              componentsProps: {
                tooltip: {
                  sx: wt ? {
                    bgcolor: "error.main",
                    color: "error.contrastText",
                    fontSize: "0.75rem",
                    maxWidth: 360,
                    ...C
                  } : {
                    bgcolor: "info.dark",
                    color: "common.white",
                    fontSize: "0.75rem",
                    maxWidth: 360,
                    ...S
                  }
                },
                arrow: {
                  sx: wt ? {
                    color: "error.main",
                    ...(C == null ? void 0 : C.bgcolor) && {
                      color: C.bgcolor
                    }
                  } : {
                    color: "info.dark",
                    ...(S == null ? void 0 : S.bgcolor) && {
                      color: S.bgcolor
                    }
                  }
                }
              },
              children: /* @__PURE__ */ T(
                Ma,
                {
                  ...f,
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
                      caretColor: (k) => k.palette.text.primary,
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
                    ...E
                  },
                  inputRef: nt,
                  inputProps: { onScroll: yn },
                  value: j,
                  onChange: gn,
                  onFocus: () => M(nt.current),
                  onBlur: () => setTimeout(() => M(null), 100),
                  error: j ? !X : !1,
                  endAdornment: /* @__PURE__ */ T($a, { position: "end", children: /* @__PURE__ */ ue(
                    re,
                    {
                      ref: mn,
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        ...R
                      },
                      children: [
                        j && /* @__PURE__ */ T(
                          bt,
                          {
                            onClick: () => {
                              var k;
                              G(""), i == null || i(), (k = nt.current) == null || k.focus();
                            },
                            "aria-label": "Clear query",
                            size: "small",
                            onMouseDown: (k) => k.preventDefault(),
                            children: /* @__PURE__ */ T(Ul, { fontSize: "small" })
                          }
                        ),
                        /* @__PURE__ */ T(
                          on,
                          {
                            title: "Query syntax help",
                            placement: "top",
                            sx: w,
                            children: /* @__PURE__ */ T(
                              bt,
                              {
                                onClick: () => ve(!0),
                                "aria-label": "Query syntax help",
                                size: "small",
                                edge: u ? !1 : "end",
                                onMouseDown: (k) => k.preventDefault(),
                                sx: _,
                                children: /* @__PURE__ */ T(Rf, { fontSize: "small" })
                              }
                            )
                          }
                        ),
                        u,
                        /* @__PURE__ */ T(
                          gt,
                          {
                            disabled: !j || !X,
                            onClick: () => r(j),
                            onMouseDown: (k) => k.preventDefault(),
                            size: "small",
                            sx: v,
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
    /* @__PURE__ */ T(
      za,
      {
        open: !!m,
        anchorEl: m,
        placement: "bottom-start",
        sx: { zIndex: 1300, ...z },
        children: /* @__PURE__ */ T(
          re,
          {
            sx: {
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              width: "300px",
              zIndex: 1300,
              ...W
            },
            children: /* @__PURE__ */ T(La, { dense: !0, sx: H, children: U.map((k, N) => /* @__PURE__ */ T(Ba, { disablePadding: !0, children: /* @__PURE__ */ T(
              Fa,
              {
                onMouseDown: (L) => L.preventDefault(),
                onClick: () => lr(k),
                sx: g,
                children: /* @__PURE__ */ T(se, { variant: "body2", sx: O, children: k })
              }
            ) }, N)) })
          }
        )
      }
    ),
    /* @__PURE__ */ T(
      Qm,
      {
        open: F,
        onClose: () => ve(!1),
        helpContent: s,
        sx: D
      }
    )
  ] });
}, ll = "#007aff";
function lg({
  columnsOperator: e = {},
  defaultOperators: t = [],
  relatedOperators: n = [],
  handleApply: r,
  placeholder: i = "",
  helpContent: o,
  sx: l = {}
}) {
  const {
    root: a,
    textBoxContainer: u,
    textBox: s,
    iconButton: c,
    dialog: f,
    dialogPaper: d,
    header: p,
    body: x,
    title: h,
    queryForm: E,
    // Legacy aliases from when this was a Popover
    popover: v,
    popoverPaper: _,
    popoverContent: w
  } = l, [R, C] = De(!1), [S, z] = De(null), [W, H] = De(e);
  Dt(() => {
    H(e);
  }, [e]);
  const g = _t(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...Object.values(e).flatMap((M) => (M == null ? void 0 : M.operators) || []),
        ...n || []
      ])
    ),
    [e, n]
  ), O = () => {
    C(!0);
  }, P = () => {
    C(!1);
  }, V = (M) => {
    const q = zl(M), b = {};
    q.forEach((U) => {
      U.column && !W[U.column] && !b[U.column] && (b[U.column] = { operators: g });
    }), Object.keys(b).length && H((U) => ({ ...U, ...b }));
  }, D = (M) => {
    const q = xf(M, g);
    V(q), z(q), r && r(q);
  }, A = (M) => {
    V(M), z(M), P(), r && r(M);
  }, B = () => {
    z(null), r && r(null);
  }, [Q, pe] = De(null), ye = An(null), m = _t(
    () => S ? Ll(S) : "",
    [S]
  );
  return /* @__PURE__ */ ue(re, { sx: a, children: [
    /* @__PURE__ */ T(
      re,
      {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        width: "100%",
        sx: u,
        children: /* @__PURE__ */ T(
          Jm,
          {
            columnsOperator: W,
            defaultOperators: t,
            onApplyClicked: D,
            onClear: B,
            queryText: m,
            relatedOperators: n,
            placeholder: i,
            helpContent: o,
            sx: s,
            endAdornment: /* @__PURE__ */ T(
              bt,
              {
                onClick: O,
                size: "small",
                onMouseDown: (M) => M.preventDefault(),
                sx: c,
                children: /* @__PURE__ */ T(yf, { fontSize: "small" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ ue(
      $l,
      {
        open: R,
        onClose: P,
        maxWidth: "lg",
        fullWidth: !0,
        slotProps: {
          paper: {
            sx: {
              borderRadius: "10px",
              overflow: "hidden",
              ...d,
              ..._
            }
          }
        },
        sx: { ...f, ...v },
        children: [
          /* @__PURE__ */ ue(
            re,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                height: 52,
                pl: 2.5,
                pr: 1.5,
                bgcolor: ll,
                color: "#fff",
                ...p
              },
              children: [
                /* @__PURE__ */ T(
                  se,
                  {
                    component: "h2",
                    fontSize: 17,
                    fontWeight: 500,
                    flex: 1,
                    sx: h,
                    children: "Query Builder"
                  }
                ),
                /* @__PURE__ */ T(on, { title: "Close", children: /* @__PURE__ */ T(
                  bt,
                  {
                    size: "small",
                    "aria-label": "Close",
                    onClick: P,
                    sx: { color: "#fff" },
                    children: /* @__PURE__ */ T(al, { sx: { fontSize: 18 } })
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ T(
            re,
            {
              sx: {
                p: 2,
                overflow: "auto",
                bgcolor: "background.default",
                maxHeight: "min(60vh, 560px)",
                ...x,
                ...w
              },
              children: /* @__PURE__ */ T(
                Of,
                {
                  columnsOperator: W,
                  handleApplyFilters: A,
                  onCancel: P,
                  onGroupChange: pe,
                  applyRef: ye,
                  defaultOperators: t,
                  groupTree: S,
                  sx: E
                }
              )
            }
          ),
          /* @__PURE__ */ ue(
            re,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: "wrap",
                px: 2.5,
                py: 1.5,
                borderTop: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper"
              },
              children: [
                /* @__PURE__ */ T(
                  gt,
                  {
                    size: "small",
                    startIcon: /* @__PURE__ */ T(Ia, { sx: { fontSize: 16 } }),
                    onClick: () => A(null),
                    sx: { textTransform: "none", fontSize: 13 },
                    children: "Reset"
                  }
                ),
                /* @__PURE__ */ T(re, { sx: { flex: 1 } }),
                /* @__PURE__ */ T(
                  gt,
                  {
                    variant: "outlined",
                    size: "small",
                    onClick: P,
                    sx: { textTransform: "none", fontSize: 13 },
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ T(
                  gt,
                  {
                    variant: "contained",
                    size: "small",
                    startIcon: /* @__PURE__ */ T(Pa, { sx: { fontSize: 16 } }),
                    onClick: () => {
                      ye.current && ye.current();
                    },
                    sx: {
                      textTransform: "none",
                      fontSize: 13,
                      bgcolor: ll,
                      "&:hover": { bgcolor: "#0062cc" }
                    },
                    children: "Apply filter"
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  lg as default
};
