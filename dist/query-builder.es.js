import { jsxs as ce, jsx as C, Fragment as Lr } from "react/jsx-runtime";
import * as K from "react";
import Xt, { useState as Me, useEffect as bt, useMemo as Mt, useRef as In } from "react";
import Ra from "@emotion/styled";
import { ThemeContext as Aa } from "@emotion/react";
import { Add as Ia, CreateNewFolderOutlined as Pa, DeleteOutline as Na, Close as cl, RestartAlt as _a, Search as Da } from "@mui/icons-material";
import { Box as oe, FormControlLabel as Ma, Switch as $a, Button as xt, Tooltip as an, IconButton as vt, Select as Di, MenuItem as xn, TextField as za, OutlinedInput as La, InputAdornment as Ba, Popper as Fa, List as ja, ListItem as Ua, ListItemButton as Va, Typography as ue, Dialog as Wa, DialogTitle as Ha, DialogContent as qa, Divider as Tt, Chip as ht, DialogActions as Ya } from "@mui/material";
import * as Ga from "react-dom";
import Sn from "react-dom";
function oi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vn = { exports: {} }, En = { exports: {} }, ae = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mi;
function Ka() {
  if (Mi) return ae;
  Mi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
  function w(k) {
    if (typeof k == "object" && k !== null) {
      var S = k.$$typeof;
      switch (S) {
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
                case a:
                case c:
                case x:
                case p:
                case l:
                  return k;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function O(k) {
    return w(k) === s;
  }
  return ae.AsyncMode = u, ae.ConcurrentMode = s, ae.ContextConsumer = a, ae.ContextProvider = l, ae.Element = t, ae.ForwardRef = c, ae.Fragment = r, ae.Lazy = x, ae.Memo = p, ae.Portal = n, ae.Profiler = o, ae.StrictMode = i, ae.Suspense = f, ae.isAsyncMode = function(k) {
    return O(k) || w(k) === u;
  }, ae.isConcurrentMode = O, ae.isContextConsumer = function(k) {
    return w(k) === a;
  }, ae.isContextProvider = function(k) {
    return w(k) === l;
  }, ae.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, ae.isForwardRef = function(k) {
    return w(k) === c;
  }, ae.isFragment = function(k) {
    return w(k) === r;
  }, ae.isLazy = function(k) {
    return w(k) === x;
  }, ae.isMemo = function(k) {
    return w(k) === p;
  }, ae.isPortal = function(k) {
    return w(k) === n;
  }, ae.isProfiler = function(k) {
    return w(k) === o;
  }, ae.isStrictMode = function(k) {
    return w(k) === i;
  }, ae.isSuspense = function(k) {
    return w(k) === f;
  }, ae.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === s || k === o || k === i || k === f || k === d || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === p || k.$$typeof === l || k.$$typeof === a || k.$$typeof === c || k.$$typeof === E || k.$$typeof === v || k.$$typeof === P || k.$$typeof === h);
  }, ae.typeOf = w, ae;
}
var se = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $i;
function Xa() {
  return $i || ($i = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, v = e ? Symbol.for("react.responder") : 60118, P = e ? Symbol.for("react.scope") : 60119;
    function w(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === r || B === s || B === o || B === i || B === f || B === d || typeof B == "object" && B !== null && (B.$$typeof === x || B.$$typeof === p || B.$$typeof === l || B.$$typeof === a || B.$$typeof === c || B.$$typeof === E || B.$$typeof === v || B.$$typeof === P || B.$$typeof === h);
    }
    function O(B) {
      if (typeof B == "object" && B !== null) {
        var we = B.$$typeof;
        switch (we) {
          case t:
            var Re = B.type;
            switch (Re) {
              case u:
              case s:
              case r:
              case o:
              case i:
              case f:
                return Re;
              default:
                var at = Re && Re.$$typeof;
                switch (at) {
                  case a:
                  case c:
                  case x:
                  case p:
                  case l:
                    return at;
                  default:
                    return we;
                }
            }
          case n:
            return we;
        }
      }
    }
    var k = u, S = s, $ = a, j = l, H = t, g = c, T = r, N = x, V = p, _ = n, R = o, L = i, J = f, de = !1;
    function Se(B) {
      return de || (de = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(B) || O(B) === u;
    }
    function m(B) {
      return O(B) === s;
    }
    function z(B) {
      return O(B) === a;
    }
    function G(B) {
      return O(B) === l;
    }
    function y(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function U(B) {
      return O(B) === c;
    }
    function X(B) {
      return O(B) === r;
    }
    function W(B) {
      return O(B) === x;
    }
    function ee(B) {
      return O(B) === p;
    }
    function q(B) {
      return O(B) === n;
    }
    function ne(B) {
      return O(B) === o;
    }
    function Z(B) {
      return O(B) === i;
    }
    function be(B) {
      return O(B) === f;
    }
    se.AsyncMode = k, se.ConcurrentMode = S, se.ContextConsumer = $, se.ContextProvider = j, se.Element = H, se.ForwardRef = g, se.Fragment = T, se.Lazy = N, se.Memo = V, se.Portal = _, se.Profiler = R, se.StrictMode = L, se.Suspense = J, se.isAsyncMode = Se, se.isConcurrentMode = m, se.isContextConsumer = z, se.isContextProvider = G, se.isElement = y, se.isForwardRef = U, se.isFragment = X, se.isLazy = W, se.isMemo = ee, se.isPortal = q, se.isProfiler = ne, se.isStrictMode = Z, se.isSuspense = be, se.isValidElementType = w, se.typeOf = O;
  }()), se;
}
var zi;
function fl() {
  return zi || (zi = 1, process.env.NODE_ENV === "production" ? En.exports = Ka() : En.exports = Xa()), En.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pr, Li;
function Qa() {
  if (Li) return pr;
  Li = 1;
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
  return pr = i() ? Object.assign : function(o, l) {
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
  }, pr;
}
var dr, Bi;
function li() {
  if (Bi) return dr;
  Bi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return dr = e, dr;
}
var hr, Fi;
function pl() {
  return Fi || (Fi = 1, hr = Function.call.bind(Object.prototype.hasOwnProperty)), hr;
}
var mr, ji;
function Ja() {
  if (ji) return mr;
  ji = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ li(), n = {}, r = /* @__PURE__ */ pl();
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
  }, mr = i, mr;
}
var gr, Ui;
function Za() {
  if (Ui) return gr;
  Ui = 1;
  var e = fl(), t = Qa(), n = /* @__PURE__ */ li(), r = /* @__PURE__ */ pl(), i = /* @__PURE__ */ Ja(), o = function() {
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
  return gr = function(a, u) {
    var s = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function f(m) {
      var z = m && (s && m[s] || m[c]);
      if (typeof z == "function")
        return z;
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
      any: P(),
      arrayOf: w,
      element: O(),
      elementType: k(),
      instanceOf: S,
      node: g(),
      objectOf: j,
      oneOf: $,
      oneOfType: H,
      shape: N,
      exact: V
    };
    function x(m, z) {
      return m === z ? m !== 0 || 1 / m === 1 / z : m !== m && z !== z;
    }
    function h(m, z) {
      this.message = m, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function E(m) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, G = 0;
      function y(X, W, ee, q, ne, Z, be) {
        if (q = q || d, Z = Z || ee, be !== n) {
          if (u) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = q + ":" + ee;
            !z[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[we] = !0, G++);
          }
        }
        return W[ee] == null ? X ? W[ee] === null ? new h("The " + ne + " `" + Z + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new h("The " + ne + " `" + Z + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : m(W, ee, q, ne, Z);
      }
      var U = y.bind(null, !1);
      return U.isRequired = y.bind(null, !0), U;
    }
    function v(m) {
      function z(G, y, U, X, W, ee) {
        var q = G[y], ne = L(q);
        if (ne !== m) {
          var Z = J(q);
          return new h(
            "Invalid " + X + " `" + W + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return E(z);
    }
    function P() {
      return E(l);
    }
    function w(m) {
      function z(G, y, U, X, W) {
        if (typeof m != "function")
          return new h("Property `" + W + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var ee = G[y];
        if (!Array.isArray(ee)) {
          var q = L(ee);
          return new h("Invalid " + X + " `" + W + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected an array."));
        }
        for (var ne = 0; ne < ee.length; ne++) {
          var Z = m(ee, ne, U, X, W + "[" + ne + "]", n);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return E(z);
    }
    function O() {
      function m(z, G, y, U, X) {
        var W = z[G];
        if (!a(W)) {
          var ee = L(W);
          return new h("Invalid " + U + " `" + X + "` of type " + ("`" + ee + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(m);
    }
    function k() {
      function m(z, G, y, U, X) {
        var W = z[G];
        if (!e.isValidElementType(W)) {
          var ee = L(W);
          return new h("Invalid " + U + " `" + X + "` of type " + ("`" + ee + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(m);
    }
    function S(m) {
      function z(G, y, U, X, W) {
        if (!(G[y] instanceof m)) {
          var ee = m.name || d, q = Se(G[y]);
          return new h("Invalid " + X + " `" + W + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected ") + ("instance of `" + ee + "`."));
        }
        return null;
      }
      return E(z);
    }
    function $(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), l;
      function z(G, y, U, X, W) {
        for (var ee = G[y], q = 0; q < m.length; q++)
          if (x(ee, m[q]))
            return null;
        var ne = JSON.stringify(m, function(be, B) {
          var we = J(B);
          return we === "symbol" ? String(B) : B;
        });
        return new h("Invalid " + X + " `" + W + "` of value `" + String(ee) + "` " + ("supplied to `" + U + "`, expected one of " + ne + "."));
      }
      return E(z);
    }
    function j(m) {
      function z(G, y, U, X, W) {
        if (typeof m != "function")
          return new h("Property `" + W + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var ee = G[y], q = L(ee);
        if (q !== "object")
          return new h("Invalid " + X + " `" + W + "` of type " + ("`" + q + "` supplied to `" + U + "`, expected an object."));
        for (var ne in ee)
          if (r(ee, ne)) {
            var Z = m(ee, ne, U, X, W + "." + ne, n);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return E(z);
    }
    function H(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), l;
      for (var z = 0; z < m.length; z++) {
        var G = m[z];
        if (typeof G != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + de(G) + " at index " + z + "."
          ), l;
      }
      function y(U, X, W, ee, q) {
        for (var ne = [], Z = 0; Z < m.length; Z++) {
          var be = m[Z], B = be(U, X, W, ee, q, n);
          if (B == null)
            return null;
          B.data && r(B.data, "expectedType") && ne.push(B.data.expectedType);
        }
        var we = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new h("Invalid " + ee + " `" + q + "` supplied to " + ("`" + W + "`" + we + "."));
      }
      return E(y);
    }
    function g() {
      function m(z, G, y, U, X) {
        return _(z[G]) ? null : new h("Invalid " + U + " `" + X + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return E(m);
    }
    function T(m, z, G, y, U) {
      return new h(
        (m || "React class") + ": " + z + " type `" + G + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function N(m) {
      function z(G, y, U, X, W) {
        var ee = G[y], q = L(ee);
        if (q !== "object")
          return new h("Invalid " + X + " `" + W + "` of type `" + q + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var ne in m) {
          var Z = m[ne];
          if (typeof Z != "function")
            return T(U, X, W, ne, J(Z));
          var be = Z(ee, ne, U, X, W + "." + ne, n);
          if (be)
            return be;
        }
        return null;
      }
      return E(z);
    }
    function V(m) {
      function z(G, y, U, X, W) {
        var ee = G[y], q = L(ee);
        if (q !== "object")
          return new h("Invalid " + X + " `" + W + "` of type `" + q + "` " + ("supplied to `" + U + "`, expected `object`."));
        var ne = t({}, G[y], m);
        for (var Z in ne) {
          var be = m[Z];
          if (r(m, Z) && typeof be != "function")
            return T(U, X, W, Z, J(be));
          if (!be)
            return new h(
              "Invalid " + X + " `" + W + "` key `" + Z + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(G[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var B = be(ee, Z, U, X, W + "." + Z, n);
          if (B)
            return B;
        }
        return null;
      }
      return E(z);
    }
    function _(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(_);
          if (m === null || a(m))
            return !0;
          var z = f(m);
          if (z) {
            var G = z.call(m), y;
            if (z !== m.entries) {
              for (; !(y = G.next()).done; )
                if (!_(y.value))
                  return !1;
            } else
              for (; !(y = G.next()).done; ) {
                var U = y.value;
                if (U && !_(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function R(m, z) {
      return m === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function L(m) {
      var z = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : R(z, m) ? "symbol" : z;
    }
    function J(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var z = L(m);
      if (z === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function de(m) {
      var z = J(m);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function Se(m) {
      return !m.constructor || !m.constructor.name ? d : m.constructor.name;
    }
    return p.checkPropTypes = i, p.resetWarningCache = i.resetWarningCache, p.PropTypes = p, p;
  }, gr;
}
var yr, Vi;
function es() {
  if (Vi) return yr;
  Vi = 1;
  var e = /* @__PURE__ */ li();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, yr = function() {
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
  }, yr;
}
var Wi;
function ts() {
  if (Wi) return vn.exports;
  if (Wi = 1, process.env.NODE_ENV !== "production") {
    var e = fl(), t = !0;
    vn.exports = /* @__PURE__ */ Za()(e.isElement, t);
  } else
    vn.exports = /* @__PURE__ */ es()();
  return vn.exports;
}
var ns = /* @__PURE__ */ ts();
const b = /* @__PURE__ */ oi(ns);
function dl(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = dl(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Qe() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = dl(e)) && (r && (r += " "), r += t);
  return r;
}
function cn(e, t, n = void 0) {
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
let Hi = 0;
function rs(e) {
  const [t, n] = K.useState(e), r = e || t;
  return K.useEffect(() => {
    t == null && (Hi += 1, n(`mui-${Hi}`));
  }, [t]), r;
}
const is = {
  ...K
}, qi = is.useId;
function os(e) {
  if (qi !== void 0) {
    const t = qi();
    return e ?? t;
  }
  return rs(e);
}
function ct(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
function Le(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ct(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function ai(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
var wn = { exports: {} }, fe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function ls() {
  if (Yi) return fe;
  Yi = 1;
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
  return fe.ContextConsumer = o, fe.ContextProvider = l, fe.Element = e, fe.ForwardRef = a, fe.Fragment = n, fe.Lazy = f, fe.Memo = c, fe.Portal = t, fe.Profiler = i, fe.StrictMode = r, fe.Suspense = u, fe.SuspenseList = s, fe.isContextConsumer = function(h) {
    return x(h) === o;
  }, fe.isContextProvider = function(h) {
    return x(h) === l;
  }, fe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, fe.isForwardRef = function(h) {
    return x(h) === a;
  }, fe.isFragment = function(h) {
    return x(h) === n;
  }, fe.isLazy = function(h) {
    return x(h) === f;
  }, fe.isMemo = function(h) {
    return x(h) === c;
  }, fe.isPortal = function(h) {
    return x(h) === t;
  }, fe.isProfiler = function(h) {
    return x(h) === i;
  }, fe.isStrictMode = function(h) {
    return x(h) === r;
  }, fe.isSuspense = function(h) {
    return x(h) === u;
  }, fe.isSuspenseList = function(h) {
    return x(h) === s;
  }, fe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === i || h === r || h === u || h === s || h === d || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === c || h.$$typeof === l || h.$$typeof === o || h.$$typeof === a || h.$$typeof === p || h.getModuleId !== void 0);
  }, fe.typeOf = x, fe;
}
var pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi;
function as() {
  return Gi || (Gi = 1, process.env.NODE_ENV !== "production" && function() {
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
    pe.ContextConsumer = l, pe.ContextProvider = a, pe.Element = t, pe.ForwardRef = u, pe.Fragment = r, pe.Lazy = d, pe.Memo = f, pe.Portal = n, pe.Profiler = o, pe.StrictMode = i, pe.Suspense = s, pe.SuspenseList = c, pe.isContextConsumer = function(h) {
      return e(h) === l;
    }, pe.isContextProvider = function(h) {
      return e(h) === a;
    }, pe.isElement = function(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }, pe.isForwardRef = function(h) {
      return e(h) === u;
    }, pe.isFragment = function(h) {
      return e(h) === r;
    }, pe.isLazy = function(h) {
      return e(h) === d;
    }, pe.isMemo = function(h) {
      return e(h) === f;
    }, pe.isPortal = function(h) {
      return e(h) === n;
    }, pe.isProfiler = function(h) {
      return e(h) === o;
    }, pe.isStrictMode = function(h) {
      return e(h) === i;
    }, pe.isSuspense = function(h) {
      return e(h) === s;
    }, pe.isSuspenseList = function(h) {
      return e(h) === c;
    }, pe.isValidElementType = function(h) {
      return typeof h == "string" || typeof h == "function" || h === r || h === o || h === i || h === s || h === c || h === p || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === a || h.$$typeof === l || h.$$typeof === u || h.$$typeof === x || h.getModuleId !== void 0);
    }, pe.typeOf = e;
  }()), pe;
}
var Ki;
function ss() {
  return Ki || (Ki = 1, process.env.NODE_ENV === "production" ? wn.exports = /* @__PURE__ */ ls() : wn.exports = /* @__PURE__ */ as()), wn.exports;
}
var _n = /* @__PURE__ */ ss();
function nt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function hl(e) {
  if (/* @__PURE__ */ K.isValidElement(e) || _n.isValidElementType(e) || !nt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = hl(e[n]);
  }), t;
}
function Be(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return nt(e) && nt(t) && Object.keys(t).forEach((i) => {
    /* @__PURE__ */ K.isValidElement(t[i]) || _n.isValidElementType(t[i]) ? r[i] = t[i] : nt(t[i]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, i) && nt(e[i]) ? r[i] = Be(e[i], t[i], n) : n.clone ? r[i] = nt(t[i]) ? hl(t[i]) : t[i] : r[i] = t[i];
  }), r;
}
function us(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function ml(e, t, n, r, i) {
  const o = e[t], l = i || t;
  if (o == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  const u = o.type;
  return typeof u == "function" && !us(u) && (a = "Did you accidentally use a plain function component for an element instead?"), a !== void 0 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Vn = ai(b.element, ml);
Vn.isRequired = ai(b.element.isRequired, ml);
const cs = "exact-prop: ​";
function gl(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [cs]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
function yl(e, t = "") {
  return e.displayName || e.name || t;
}
function Xi(e, t, n) {
  const r = yl(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function fs(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return yl(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case _n.ForwardRef:
          return Xi(e, e.render, "ForwardRef");
        case _n.Memo:
          return Xi(e, e.type, "memo");
        default:
          return;
      }
  }
}
function bl(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const o = e[t], l = i || t;
  return o == null ? null : o && o.nodeType !== 1 ? new Error(`Invalid ${r} \`${l}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
function Qi(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Et(e) {
  return e && e.ownerDocument || document;
}
function Dn(e) {
  return Et(e).defaultView || window;
}
function Br(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Fr = typeof window < "u" ? K.useLayoutEffect : K.useEffect;
function Ji(e) {
  const t = K.useRef(e);
  return Fr(() => {
    t.current = e;
  }), K.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function Ft(...e) {
  return K.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Br(n, t);
    });
  }, e);
}
function ps(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function ds(e) {
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
function xl(e, t, n, r) {
  const i = e[t];
  if (i == null || !Number.isInteger(i)) {
    const o = ds(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${o}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Sl(e, t, ...n) {
  return e[t] === void 0 ? null : xl(e, t, ...n);
}
function jr() {
  return null;
}
Sl.isRequired = xl;
jr.isRequired = jr;
const hs = process.env.NODE_ENV === "production" ? jr : Sl;
function Ur(e, t) {
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
              n[i][u] = Ur(o[u], l[u]);
            }
        }
      } else n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Zi = (e) => e, ms = () => {
  let e = Zi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Zi;
    }
  };
}, gs = ms(), ys = {
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
  const r = ys[t];
  return r ? `${n}-${r}` : `${gs.generate(e)}-${t}`;
}
function fn(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = wt(e, i, n);
  }), r;
}
function bs(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function xs(e) {
  return typeof e == "string";
}
function Ss(e, t, n) {
  return e === void 0 || xs(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function vl(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function eo(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function vs(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: o
  } = e;
  if (!t) {
    const p = Qe(n == null ? void 0 : n.className, o, i == null ? void 0 : i.className, r == null ? void 0 : r.className), x = {
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
  const l = vl({
    ...i,
    ...r
  }), a = eo(r), u = eo(i), s = t(l), c = Qe(s == null ? void 0 : s.className, n == null ? void 0 : n.className, o, i == null ? void 0 : i.className, r == null ? void 0 : r.className), f = {
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
function Es(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function si(e) {
  var t;
  return parseInt(K.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function ws(e) {
  const t = Et(e);
  return t.body === e ? Dn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function en(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function to(e) {
  return parseInt(Dn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function ks(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function no(e, t, n, r, i) {
  const o = [t, n, ...r];
  [].forEach.call(e.children, (l) => {
    const a = !o.includes(l), u = !ks(l);
    a && u && en(l, i);
  });
}
function br(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Cs(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (ws(r)) {
      const l = ps(Dn(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${to(r) + l}px`;
      const a = Et(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (u) => {
        n.push({
          value: u.style.paddingRight,
          property: "padding-right",
          el: u
        }), u.style.paddingRight = `${to(u) + l}px`;
      });
    }
    let o;
    if (r.parentNode instanceof DocumentFragment)
      o = Et(r).body;
    else {
      const l = r.parentElement, a = Dn(r);
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
function Ts(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Os {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && en(t.modalRef, !1);
    const i = Ts(n);
    no(n, t.mount, t.modalRef, i, !0);
    const o = br(this.containers, (l) => l.container === n);
    return o !== -1 ? (this.containers[o].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = br(this.containers, (o) => o.modals.includes(t)), i = this.containers[r];
    i.restore || (i.restore = Cs(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = br(this.containers, (l) => l.modals.includes(t)), o = this.containers[i];
    if (o.modals.splice(o.modals.indexOf(t), 1), this.modals.splice(r, 1), o.modals.length === 0)
      o.restore && o.restore(), t.modalRef && en(t.modalRef, n), no(o.container, t.mount, t.modalRef, o.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const l = o.modals[o.modals.length - 1];
      l.modalRef && en(l.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Rs = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function As(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Is(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Ps(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Is(e));
}
function Ns(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(Rs)).forEach((r, i) => {
    const o = As(r);
    o === -1 || !Ps(r) || (o === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: o,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function _s() {
  return !0;
}
function Mn(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: o = Ns,
    isEnabled: l = _s,
    open: a
  } = e, u = K.useRef(!1), s = K.useRef(null), c = K.useRef(null), f = K.useRef(null), d = K.useRef(null), p = K.useRef(!1), x = K.useRef(null), h = Ft(si(t), x), E = K.useRef(null);
  K.useEffect(() => {
    !a || !x.current || (p.current = !n);
  }, [n, a]), K.useEffect(() => {
    if (!a || !x.current)
      return;
    const w = Et(x.current);
    return x.current.contains(w.activeElement) || (x.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), x.current.setAttribute("tabIndex", "-1")), p.current && x.current.focus()), () => {
      i || (f.current && f.current.focus && (u.current = !0, f.current.focus()), f.current = null);
    };
  }, [a]), K.useEffect(() => {
    if (!a || !x.current)
      return;
    const w = Et(x.current), O = ($) => {
      E.current = $, !(r || !l() || $.key !== "Tab") && w.activeElement === x.current && $.shiftKey && (u.current = !0, c.current && c.current.focus());
    }, k = () => {
      var H, g;
      const $ = x.current;
      if ($ === null)
        return;
      if (!w.hasFocus() || !l() || u.current) {
        u.current = !1;
        return;
      }
      if ($.contains(w.activeElement) || r && w.activeElement !== s.current && w.activeElement !== c.current)
        return;
      if (w.activeElement !== d.current)
        d.current = null;
      else if (d.current !== null)
        return;
      if (!p.current)
        return;
      let j = [];
      if ((w.activeElement === s.current || w.activeElement === c.current) && (j = o(x.current)), j.length > 0) {
        const T = !!((H = E.current) != null && H.shiftKey && ((g = E.current) == null ? void 0 : g.key) === "Tab"), N = j[0], V = j[j.length - 1];
        typeof N != "string" && typeof V != "string" && (T ? V.focus() : N.focus());
      } else
        $.focus();
    };
    w.addEventListener("focusin", k), w.addEventListener("keydown", O, !0);
    const S = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && k();
    }, 50);
    return () => {
      clearInterval(S), w.removeEventListener("focusin", k), w.removeEventListener("keydown", O, !0);
    };
  }, [n, r, i, l, a, o]);
  const v = (w) => {
    f.current === null && (f.current = w.relatedTarget), p.current = !0, d.current = w.target;
    const O = t.props.onFocus;
    O && O(w);
  }, P = (w) => {
    f.current === null && (f.current = w.relatedTarget), p.current = !0;
  };
  return /* @__PURE__ */ ce(K.Fragment, {
    children: [/* @__PURE__ */ C("div", {
      tabIndex: a ? 0 : -1,
      onFocus: P,
      ref: s,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ K.cloneElement(t, {
      ref: h,
      onFocus: v
    }), /* @__PURE__ */ C("div", {
      tabIndex: a ? 0 : -1,
      onFocus: P,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Vn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: b.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: b.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: b.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: b.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: b.func,
  /**
   * If `true`, focus is locked.
   */
  open: b.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Mn.propTypes = gl(Mn.propTypes));
function Ds(e) {
  return typeof e == "function" ? e() : e;
}
const $n = /* @__PURE__ */ K.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: o = !1
  } = t, [l, a] = K.useState(null), u = Ft(/* @__PURE__ */ K.isValidElement(r) ? si(r) : null, n);
  if (Fr(() => {
    o || a(Ds(i) || document.body);
  }, [i, o]), Fr(() => {
    if (l && !o)
      return Br(n, l), () => {
        Br(n, null);
      };
  }, [n, l, o]), o) {
    if (/* @__PURE__ */ K.isValidElement(r)) {
      const s = {
        ref: u
      };
      return /* @__PURE__ */ K.cloneElement(r, s);
    }
    return r;
  }
  return l && /* @__PURE__ */ Ga.createPortal(r, l);
});
process.env.NODE_ENV !== "production" && ($n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: b.node,
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
  container: b.oneOfType([bl, b.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: b.bool
});
process.env.NODE_ENV !== "production" && ($n.propTypes = gl($n.propTypes));
function tn(e, t) {
  return t ? Be(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const pt = process.env.NODE_ENV !== "production" ? b.oneOfType([b.number, b.string, b.object, b.array]) : {};
function Ms(e, t) {
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
function $s(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function zs(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : ct(18, `(${t})`));
    return null;
  }
  const [, r, i] = n, o = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(i).up(o);
}
function Ls(e) {
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
const Wn = {
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
}, ro = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Wn[e]}px)`
}, Bs = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Wn[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function it(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || ro;
    return t.reduce((l, a, u) => (l[o.up(o.keys[u])] = n(t[u]), l), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || ro;
    return Object.keys(t).reduce((l, a) => {
      if ($s(o.keys, a)) {
        const u = zs(r.containerQueries ? r : Bs, a);
        u && (l[u] = n(t[a], a));
      } else if (Object.keys(o.values || Wn).includes(a)) {
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
function Fs(e = {}) {
  var n;
  return ((n = e.keys) == null ? void 0 : n.reduce((r, i) => {
    const o = e.up(i);
    return r[o] = {}, r;
  }, {})) || {};
}
function js(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function Hn(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, o) => i && i[o] ? i[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function zn(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = Hn(e, n) || r, t && (i = t(i, r, e)), i;
}
function ke(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, o = (l) => {
    if (l[t] == null)
      return null;
    const a = l[t], u = l.theme, s = Hn(u, r) || {};
    return it(l, a, (f) => {
      let d = zn(s, i, f);
      return f === d && typeof f == "string" && (d = zn(s, i, `${t}${f === "default" ? "" : Le(f)}`, f)), n === !1 ? d : {
        [n]: d
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: pt
  } : {}, o.filterProps = [t], o;
}
function Us(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Vs = {
  m: "margin",
  p: "padding"
}, Ws = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, io = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Hs = Us((e) => {
  if (e.length > 2)
    if (io[e])
      e = io[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Vs[t], i = Ws[n] || "";
  return Array.isArray(i) ? i.map((o) => r + o) : [r + i];
}), qn = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Yn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], qs = [...qn, ...Yn];
function pn(e, t, n, r) {
  const i = Hn(e, t, !0) ?? n;
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
function ui(e) {
  return pn(e, "spacing", 8, "spacing");
}
function dn(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Ys(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = dn(t, n), r), {});
}
function Gs(e, t, n, r) {
  if (!t.includes(n))
    return null;
  const i = Hs(n), o = Ys(i, r), l = e[n];
  return it(e, l, o);
}
function El(e, t) {
  const n = ui(e.theme);
  return Object.keys(e).map((r) => Gs(e, t, r, n)).reduce(tn, {});
}
function ve(e) {
  return El(e, qn);
}
ve.propTypes = process.env.NODE_ENV !== "production" ? qn.reduce((e, t) => (e[t] = pt, e), {}) : {};
ve.filterProps = qn;
function Ee(e) {
  return El(e, Yn);
}
Ee.propTypes = process.env.NODE_ENV !== "production" ? Yn.reduce((e, t) => (e[t] = pt, e), {}) : {};
Ee.filterProps = Yn;
process.env.NODE_ENV !== "production" && qs.reduce((e, t) => (e[t] = pt, e), {});
function Gn(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((o) => {
    r[o] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, o) => t[o] ? tn(i, t[o](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function je(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ve(e, t) {
  return ke({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Ks = Ve("border", je), Xs = Ve("borderTop", je), Qs = Ve("borderRight", je), Js = Ve("borderBottom", je), Zs = Ve("borderLeft", je), eu = Ve("borderColor"), tu = Ve("borderTopColor"), nu = Ve("borderRightColor"), ru = Ve("borderBottomColor"), iu = Ve("borderLeftColor"), ou = Ve("outline", je), lu = Ve("outlineColor"), Kn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = pn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: dn(t, r)
    });
    return it(e, e.borderRadius, n);
  }
  return null;
};
Kn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: pt
} : {};
Kn.filterProps = ["borderRadius"];
Gn(Ks, Xs, Qs, Js, Zs, eu, tu, nu, ru, iu, Kn, ou, lu);
const Xn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = pn(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: dn(t, r)
    });
    return it(e, e.gap, n);
  }
  return null;
};
Xn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: pt
} : {};
Xn.filterProps = ["gap"];
const Qn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = pn(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: dn(t, r)
    });
    return it(e, e.columnGap, n);
  }
  return null;
};
Qn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: pt
} : {};
Qn.filterProps = ["columnGap"];
const Jn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = pn(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: dn(t, r)
    });
    return it(e, e.rowGap, n);
  }
  return null;
};
Jn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: pt
} : {};
Jn.filterProps = ["rowGap"];
const au = ke({
  prop: "gridColumn"
}), su = ke({
  prop: "gridRow"
}), uu = ke({
  prop: "gridAutoFlow"
}), cu = ke({
  prop: "gridAutoColumns"
}), fu = ke({
  prop: "gridAutoRows"
}), pu = ke({
  prop: "gridTemplateColumns"
}), du = ke({
  prop: "gridTemplateRows"
}), hu = ke({
  prop: "gridTemplateAreas"
}), mu = ke({
  prop: "gridArea"
});
Gn(Xn, Qn, Jn, au, su, uu, cu, fu, pu, du, hu, mu);
function $t(e, t) {
  return t === "grey" ? t : e;
}
const gu = ke({
  prop: "color",
  themeKey: "palette",
  transform: $t
}), yu = ke({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: $t
}), bu = ke({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: $t
});
Gn(gu, yu, bu);
function $e(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xu = ke({
  prop: "width",
  transform: $e
}), ci = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, o, l, a, u;
      const r = ((l = (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : o.values) == null ? void 0 : l[n]) || Wn[n];
      return r ? ((u = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: $e(n)
      };
    };
    return it(e, e.maxWidth, t);
  }
  return null;
};
ci.filterProps = ["maxWidth"];
const Su = ke({
  prop: "minWidth",
  transform: $e
}), vu = ke({
  prop: "height",
  transform: $e
}), Eu = ke({
  prop: "maxHeight",
  transform: $e
}), wu = ke({
  prop: "minHeight",
  transform: $e
});
ke({
  prop: "size",
  cssProperty: "width",
  transform: $e
});
ke({
  prop: "size",
  cssProperty: "height",
  transform: $e
});
const ku = ke({
  prop: "boxSizing"
});
Gn(xu, ci, Su, vu, Eu, wu, ku);
const Zn = {
  // borders
  border: {
    themeKey: "borders",
    transform: je
  },
  borderTop: {
    themeKey: "borders",
    transform: je
  },
  borderRight: {
    themeKey: "borders",
    transform: je
  },
  borderBottom: {
    themeKey: "borders",
    transform: je
  },
  borderLeft: {
    themeKey: "borders",
    transform: je
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
    transform: je
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Kn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: $t
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: $t
  },
  backgroundColor: {
    themeKey: "palette",
    transform: $t
  },
  // spacing
  p: {
    style: Ee
  },
  pt: {
    style: Ee
  },
  pr: {
    style: Ee
  },
  pb: {
    style: Ee
  },
  pl: {
    style: Ee
  },
  px: {
    style: Ee
  },
  py: {
    style: Ee
  },
  padding: {
    style: Ee
  },
  paddingTop: {
    style: Ee
  },
  paddingRight: {
    style: Ee
  },
  paddingBottom: {
    style: Ee
  },
  paddingLeft: {
    style: Ee
  },
  paddingX: {
    style: Ee
  },
  paddingY: {
    style: Ee
  },
  paddingInline: {
    style: Ee
  },
  paddingInlineStart: {
    style: Ee
  },
  paddingInlineEnd: {
    style: Ee
  },
  paddingBlock: {
    style: Ee
  },
  paddingBlockStart: {
    style: Ee
  },
  paddingBlockEnd: {
    style: Ee
  },
  m: {
    style: ve
  },
  mt: {
    style: ve
  },
  mr: {
    style: ve
  },
  mb: {
    style: ve
  },
  ml: {
    style: ve
  },
  mx: {
    style: ve
  },
  my: {
    style: ve
  },
  margin: {
    style: ve
  },
  marginTop: {
    style: ve
  },
  marginRight: {
    style: ve
  },
  marginBottom: {
    style: ve
  },
  marginLeft: {
    style: ve
  },
  marginX: {
    style: ve
  },
  marginY: {
    style: ve
  },
  marginInline: {
    style: ve
  },
  marginInlineStart: {
    style: ve
  },
  marginInlineEnd: {
    style: ve
  },
  marginBlock: {
    style: ve
  },
  marginBlockStart: {
    style: ve
  },
  marginBlockEnd: {
    style: ve
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
    style: Xn
  },
  rowGap: {
    style: Jn
  },
  columnGap: {
    style: Qn
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
    transform: $e
  },
  maxWidth: {
    style: ci
  },
  minWidth: {
    transform: $e
  },
  height: {
    transform: $e
  },
  maxHeight: {
    transform: $e
  },
  minHeight: {
    transform: $e
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
function Cu(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Tu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ou() {
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
    const d = Hn(i, s) || {};
    return f ? f(l) : it(l, r, (x) => {
      let h = zn(d, c, x);
      return x === h && typeof x == "string" && (h = zn(d, c, `${n}${x === "default" ? "" : Le(x)}`, x)), u === !1 ? h : {
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
    const o = i.unstable_sxConfig ?? Zn;
    function l(a) {
      let u = a;
      if (typeof a == "function")
        u = a(i);
      else if (typeof a != "object")
        return a;
      if (!u)
        return null;
      const s = Fs(i.breakpoints), c = Object.keys(s);
      let f = s;
      return Object.keys(u).forEach((d) => {
        const p = Tu(u[d], i);
        if (p != null)
          if (typeof p == "object")
            if (o[d])
              f = tn(f, e(d, p, i, o));
            else {
              const x = it({
                theme: i
              }, p, (h) => ({
                [d]: h
              }));
              Cu(x, p) ? f[d] = t({
                sx: p,
                theme: i
              }) : f = tn(f, x);
            }
          else
            f = tn(f, e(d, p, i, o));
      }), Ms(i, js(c, f));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return t;
}
const Lt = Ou();
Lt.filterProps = ["sx"];
function Ru(e) {
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
var Au = {
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
function Iu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Pu = /[A-Z]|^ms/g, Nu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, wl = function(t) {
  return t.charCodeAt(1) === 45;
}, oo = function(t) {
  return t != null && typeof t != "boolean";
}, xr = /* @__PURE__ */ Iu(function(e) {
  return wl(e) ? e : e.replace(Pu, "-$&").toLowerCase();
}), lo = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Nu, function(r, i, o) {
          return ut = {
            name: i,
            styles: o,
            next: ut
          }, i;
        });
  }
  return Au[t] !== 1 && !wl(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Ln(e, t, n) {
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
        return ut = {
          name: i.name,
          styles: i.styles,
          next: ut
        }, i.name;
      var o = n;
      if (o.styles !== void 0) {
        var l = o.next;
        if (l !== void 0)
          for (; l !== void 0; )
            ut = {
              name: l.name,
              styles: l.styles,
              next: ut
            }, l = l.next;
        var a = o.styles + ";";
        return a;
      }
      return _u(e, t, n);
    }
  }
  var u = n;
  return u;
}
function _u(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Ln(e, t, n[i]) + ";";
  else
    for (var o in n) {
      var l = n[o];
      if (typeof l != "object") {
        var a = l;
        oo(a) && (r += xr(o) + ":" + lo(o, a) + ";");
      } else if (Array.isArray(l) && typeof l[0] == "string" && t == null)
        for (var u = 0; u < l.length; u++)
          oo(l[u]) && (r += xr(o) + ":" + lo(o, l[u]) + ";");
      else {
        var s = Ln(e, t, l);
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
var ao = /label:\s*([^\s;{]+)\s*(;|$)/g, ut;
function Du(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, i = "";
  ut = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, i += Ln(n, t, o);
  else {
    var l = o;
    i += l[0];
  }
  for (var a = 1; a < e.length; a++)
    if (i += Ln(n, t, e[a]), r) {
      var u = o;
      i += u[a];
    }
  ao.lastIndex = 0;
  for (var s = "", c; (c = ao.exec(i)) !== null; )
    s += "-" + c[1];
  var f = Ru(i) + s;
  return {
    name: f,
    styles: i,
    next: ut
  };
}
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Mu(e, t) {
  const n = Ra(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((o) => o === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function $u(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const so = [];
function uo(e) {
  return so[0] = e, Du(so);
}
const zu = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Lu(e) {
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
  } = e, o = zu(t), l = Object.keys(o);
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
const Bu = {
  borderRadius: 4
};
function kl(e = 8, t = ui({
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
function Fu(e, t) {
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
    ...l
  } = e, a = Lu(n), u = kl(i);
  let s = Be({
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
      ...Bu,
      ...o
    }
  }, l);
  return s = Ls(s), s.applyStyles = Fu, s = t.reduce((c, f) => Be(c, f), s), s.unstable_sxConfig = {
    ...Zn,
    ...l == null ? void 0 : l.unstable_sxConfig
  }, s.unstable_sx = function(f) {
    return Lt({
      sx: f,
      theme: this
    });
  }, s;
}
function ju(e) {
  return Object.keys(e).length === 0;
}
function Uu(e = null) {
  const t = K.useContext(Aa);
  return !t || ju(t) ? e : t;
}
const Vu = fi();
function Wu(e = Vu) {
  return Uu(e);
}
function Cl(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: uo(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((i) => {
    typeof i.style != "function" && (i.style = uo(i.style));
  }), r;
}
const Hu = fi();
function Sr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function qu(e) {
  return e ? (t, n) => n[e] : null;
}
function Yu(e, t, n) {
  e.theme = Qu(e.theme) ? n : e.theme[t] || e.theme;
}
function Pn(e, t) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((r) => Pn(e, r));
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
    return Tl(e, n.variants, [r]);
  }
  return n != null && n.isProcessed ? n.style : n;
}
function Tl(e, t, n = []) {
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
function Gu(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Hu,
    rootShouldForwardProp: r = Sr,
    slotShouldForwardProp: i = Sr
  } = e;
  function o(a) {
    Yu(a, t, n);
  }
  return (a, u = {}) => {
    $u(a, (k) => k.filter((S) => S !== Lt));
    const {
      name: s,
      slot: c,
      skipVariantsResolver: f,
      skipSx: d,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = qu(Ol(c)),
      ...x
    } = u, h = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      c && c !== "Root" && c !== "root" || !1
    ), E = d || !1;
    let v = Sr;
    c === "Root" || c === "root" ? v = r : c ? v = i : Ju(a) && (v = void 0);
    const P = Mu(a, {
      shouldForwardProp: v,
      label: Xu(s, c),
      ...x
    }), w = (k) => {
      if (typeof k == "function" && k.__emotion_real !== k)
        return function($) {
          return Pn($, k);
        };
      if (nt(k)) {
        const S = Cl(k);
        return S.variants ? function(j) {
          return Pn(j, S);
        } : S.style;
      }
      return k;
    }, O = (...k) => {
      const S = [], $ = k.map(w), j = [];
      if (S.push(o), s && p && j.push(function(N) {
        var L, J;
        const _ = (J = (L = N.theme.components) == null ? void 0 : L[s]) == null ? void 0 : J.styleOverrides;
        if (!_)
          return null;
        const R = {};
        for (const de in _)
          R[de] = Pn(N, _[de]);
        return p(N, R);
      }), s && !h && j.push(function(N) {
        var R, L;
        const V = N.theme, _ = (L = (R = V == null ? void 0 : V.components) == null ? void 0 : R[s]) == null ? void 0 : L.variants;
        return _ ? Tl(N, _) : null;
      }), E || j.push(Lt), Array.isArray($[0])) {
        const T = $.shift(), N = new Array(S.length).fill(""), V = new Array(j.length).fill("");
        let _;
        _ = [...N, ...T, ...V], _.raw = [...N, ...T.raw, ...V], S.unshift(_);
      }
      const H = [...S, ...$, ...j], g = P(...H);
      return a.muiName && (g.muiName = a.muiName), process.env.NODE_ENV !== "production" && (g.displayName = Ku(s, c, a)), g;
    };
    return P.withConfig && (O.withConfig = P.withConfig), O;
  };
}
function Ku(e, t, n) {
  return e ? `${e}${Le(t || "")}` : `Styled(${fs(n)})`;
}
function Xu(e, t) {
  let n;
  return process.env.NODE_ENV !== "production" && e && (n = `${e}-${Ol(t || "Root")}`), n;
}
function Qu(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ju(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ol(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function pi(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), bs(e, t, n);
}
function Zu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ft(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ft(Zu(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ct(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(i))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ct(10, i));
  } else
    r = r.split(",");
  return r = r.map((o) => parseFloat(o)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
const ec = (e) => {
  const t = ft(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, Qt = (e, t) => {
  try {
    return ec(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function er(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((i, o) => o < 3 ? parseInt(i, 10) : i) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Rl(e) {
  e = ft(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, o = r * Math.min(i, 1 - i), l = (s, c = (s + n / 30) % 12) => i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const u = [Math.round(l(0) * 255), Math.round(l(8) * 255), Math.round(l(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), er({
    type: a,
    values: u
  });
}
function Vr(e) {
  e = ft(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ft(Rl(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function co(e, t) {
  const n = Vr(e), r = Vr(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Wr(e, t) {
  return e = ft(e), t = pi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, er(e);
}
function kn(e, t, n) {
  try {
    return Wr(e, t);
  } catch {
    return e;
  }
}
function di(e, t) {
  if (e = ft(e), t = pi(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return er(e);
}
function he(e, t, n) {
  try {
    return di(e, t);
  } catch {
    return e;
  }
}
function hi(e, t) {
  if (e = ft(e), t = pi(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return er(e);
}
function me(e, t, n) {
  try {
    return hi(e, t);
  } catch {
    return e;
  }
}
function tc(e, t = 0.15) {
  return Vr(e) > 0.5 ? di(e, t) : hi(e, t);
}
function Cn(e, t, n) {
  try {
    return tc(e, t);
  } catch {
    return e;
  }
}
const nc = /* @__PURE__ */ K.createContext(void 0);
process.env.NODE_ENV !== "production" && (b.node, b.object);
function rc(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const i = t.components[n];
  return i.defaultProps ? Ur(i.defaultProps, r) : !i.styleOverrides && !i.variants ? Ur(i, r) : r;
}
function ic({
  props: e,
  name: t
}) {
  const n = K.useContext(nc);
  return rc({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
const fo = {
  theme: void 0
};
function oc(e) {
  let t, n;
  return function(i) {
    let o = t;
    return (o === void 0 || i.theme !== n) && (fo.theme = i.theme, o = Cl(e(fo)), t = o, n = i.theme), o;
  };
}
function lc(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const i = r[0];
    return typeof i == "string" && !i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${i}${t(...r.slice(1))})` : `, ${i}`;
  }
  return (r, ...i) => `var(--${e ? `${e}-` : ""}${r}${t(...i)})`;
}
const po = (e, t, n, r = []) => {
  let i = e;
  t.forEach((o, l) => {
    l === t.length - 1 ? Array.isArray(i) ? i[Number(o)] = n : i && typeof i == "object" && (i[o] = n) : i && typeof i == "object" && (i[o] || (i[o] = r.includes(o) ? [] : {}), i = i[o]);
  });
}, ac = (e, t, n) => {
  function r(i, o = [], l = []) {
    Object.entries(i).forEach(([a, u]) => {
      (!n || n && !n([...o, a])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? r(u, [...o, a], Array.isArray(u) ? [...l, a] : l) : t([...o, a], u, l));
    });
  }
  r(e);
}, sc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function vr(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, i = {}, o = {}, l = {};
  return ac(
    e,
    (a, u, s) => {
      if ((typeof u == "string" || typeof u == "number") && (!r || !r(a, u))) {
        const c = `--${n ? `${n}-` : ""}${a.join("-")}`, f = sc(a, u);
        Object.assign(i, {
          [c]: f
        }), po(o, a, `var(${c})`, s), po(l, a, `var(${c}, ${f})`, s);
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
function uc(e, t = {}) {
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
  } = vr(u, t);
  let d = f;
  const p = {}, {
    [a]: x,
    ...h
  } = o;
  if (Object.entries(h || {}).forEach(([w, O]) => {
    const {
      vars: k,
      css: S,
      varsWithDefaults: $
    } = vr(O, t);
    d = Be(d, $), p[w] = {
      css: S,
      vars: k
    };
  }), x) {
    const {
      css: w,
      vars: O,
      varsWithDefaults: k
    } = vr(x, t);
    d = Be(d, k), p[a] = {
      css: w,
      vars: O
    };
  }
  function E(w, O) {
    var S, $;
    let k = i;
    if (i === "class" && (k = ".%s"), i === "data" && (k = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (k = `[${i}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${(($ = (S = o[w]) == null ? void 0 : S.palette) == null ? void 0 : $.mode) || w})`]: {
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
        w = Be(w, O);
      }), w;
    },
    generateStyleSheets: () => {
      var j, H;
      const w = [], O = e.defaultColorScheme || "light";
      function k(g, T) {
        Object.keys(T).length && w.push(typeof g == "string" ? {
          [g]: {
            ...T
          }
        } : g);
      }
      k(n(void 0, {
        ...c
      }), c);
      const {
        [O]: S,
        ...$
      } = p;
      if (S) {
        const {
          css: g
        } = S, T = (H = (j = o[O]) == null ? void 0 : j.palette) == null ? void 0 : H.mode, N = !r && T ? {
          colorScheme: T,
          ...g
        } : {
          ...g
        };
        k(n(O, {
          ...N
        }), N);
      }
      return Object.entries($).forEach(([g, {
        css: T
      }]) => {
        var _, R;
        const N = (R = (_ = o[g]) == null ? void 0 : _.palette) == null ? void 0 : R.mode, V = !r && N ? {
          colorScheme: N,
          ...T
        } : {
          ...T
        };
        k(n(g, {
          ...V
        }), V);
      }), w;
    }
  };
}
function cc(e) {
  return function(n) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && n !== "light" && n !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${n}'.`), `@media (prefers-color-scheme: ${n})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
const sn = {
  black: "#000",
  white: "#fff"
}, fc = {
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
}, Ot = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Rt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ht = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, At = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, It = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Pt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Al() {
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
      paper: sn.white,
      default: sn.white
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
const pc = Al();
function Il() {
  return {
    text: {
      primary: sn.white,
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
      active: sn.white,
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
const ho = Il();
function mo(e, t, n, r) {
  const i = r.light || r, o = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = hi(e.main, i) : t === "dark" && (e.dark = di(e.main, o)));
}
function dc(e = "light") {
  return e === "dark" ? {
    main: At[200],
    light: At[50],
    dark: At[400]
  } : {
    main: At[700],
    light: At[400],
    dark: At[800]
  };
}
function hc(e = "light") {
  return e === "dark" ? {
    main: Ot[200],
    light: Ot[50],
    dark: Ot[400]
  } : {
    main: Ot[500],
    light: Ot[300],
    dark: Ot[700]
  };
}
function mc(e = "light") {
  return e === "dark" ? {
    main: Rt[500],
    light: Rt[300],
    dark: Rt[700]
  } : {
    main: Rt[700],
    light: Rt[400],
    dark: Rt[800]
  };
}
function gc(e = "light") {
  return e === "dark" ? {
    main: It[400],
    light: It[300],
    dark: It[700]
  } : {
    main: It[700],
    light: It[500],
    dark: It[900]
  };
}
function yc(e = "light") {
  return e === "dark" ? {
    main: Pt[400],
    light: Pt[300],
    dark: Pt[700]
  } : {
    main: Pt[800],
    light: Pt[500],
    dark: Pt[900]
  };
}
function bc(e = "light") {
  return e === "dark" ? {
    main: Ht[400],
    light: Ht[300],
    dark: Ht[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ht[500],
    dark: Ht[900]
  };
}
function mi(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    ...i
  } = e, o = e.primary || dc(t), l = e.secondary || hc(t), a = e.error || mc(t), u = e.info || gc(t), s = e.success || yc(t), c = e.warning || bc(t);
  function f(h) {
    const E = co(h, ho.text.primary) >= n ? ho.text.primary : pc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const v = co(h, E);
      v < 3 && console.error([`MUI: The contrast ratio of ${v}:1 for ${E} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const d = ({
    color: h,
    name: E,
    mainShade: v = 500,
    lightShade: P = 300,
    darkShade: w = 700
  }) => {
    if (h = {
      ...h
    }, !h.main && h[v] && (h.main = h[v]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${v}\` property.` : ct(11, E ? ` (${E})` : "", v));
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
} });` : ct(12, E ? ` (${E})` : "", JSON.stringify(h.main)));
    return mo(h, "light", P, r), mo(h, "dark", w, r), h.contrastText || (h.contrastText = f(h.main)), h;
  };
  let p;
  return t === "light" ? p = Al() : t === "dark" && (p = Il()), process.env.NODE_ENV !== "production" && (p || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Be({
    // A collection of common colors.
    common: {
      ...sn
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
    grey: fc,
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
function xc(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [i, o] = r;
    typeof o == "object" && (t[i] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
  }), t;
}
function Sc(e, t) {
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
function vc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const go = {
  textTransform: "uppercase"
}, yo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ec(e, t) {
  const {
    fontFamily: n = yo,
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
  const d = r / 14, p = c || ((E) => `${E / u * d}rem`), x = (E, v, P, w, O) => ({
    fontFamily: n,
    fontWeight: E,
    fontSize: p(v),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: P,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === yo ? {
      letterSpacing: `${vc(w / v)}em`
    } : {},
    ...O,
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
    button: x(l, 14, 1.75, 0.4, go),
    caption: x(o, 12, 1.66, 0.4),
    overline: x(o, 12, 2.66, 1, go),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Be({
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
const wc = 0.2, kc = 0.14, Cc = 0.12;
function xe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${wc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${kc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Cc})`].join(",");
}
const Tc = ["none", xe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), xe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), xe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), xe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), xe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), xe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), xe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), xe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), xe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), xe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), xe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), xe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), xe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), xe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), xe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), xe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), xe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), xe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), xe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), xe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), xe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), xe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), xe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), xe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Oc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Rc = {
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
function bo(e) {
  return `${Math.round(e)}ms`;
}
function Ac(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Ic(e) {
  const t = {
    ...Oc,
    ...e.easing
  }, n = {
    ...Rc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Ac,
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
      return (Array.isArray(i) ? i : [i]).map((c) => `${c} ${typeof l == "string" ? l : bo(l)} ${a} ${typeof u == "string" ? u : bo(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: n
  };
}
const Pc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Nc(e) {
  return nt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Pl(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const i = Object.entries(r);
    for (let o = 0; o < i.length; o++) {
      const [l, a] = i[o];
      !Nc(a) || l.startsWith("unstable_") ? delete r[l] : nt(a) && (r[l] = {
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
function Hr(e = {}, ...t) {
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
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ct(20));
  const c = mi(o), f = fi(e);
  let d = Be(f, {
    mixins: Sc(f.breakpoints, r),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Tc.slice(),
    typography: Ec(c, a),
    transitions: Ic(l),
    zIndex: {
      ...Pc
    }
  });
  if (d = Be(d, s), d = t.reduce((p, x) => Be(p, x), d), process.env.NODE_ENV !== "production") {
    const p = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], x = (h, E) => {
      let v;
      for (v in h) {
        const P = h[v];
        if (p.includes(v) && Object.keys(P).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const w = wt("", v);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${w}' syntax:`, JSON.stringify({
              root: {
                [`&.${w}`]: P
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
    ...Zn,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(x) {
    return Lt({
      sx: x,
      theme: this
    });
  }, d.toRuntimeSource = Pl, d;
}
function qr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const _c = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = qr(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function Nl(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function _l(e) {
  return e === "dark" ? _c : [];
}
function Dc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    ...i
  } = e, o = mi(t);
  return {
    palette: o,
    opacity: {
      ...Nl(o.mode),
      ...n
    },
    overlays: r || _l(o.mode),
    ...i
  };
}
function Mc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const $c = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], zc = (e) => (t, n) => {
  const r = e.rootSelector || ":root", i = e.colorSchemeSelector;
  let o = i;
  if (i === "class" && (o = ".%s"), i === "data" && (o = "[data-%s]"), i != null && i.startsWith("data-") && !i.includes("%s") && (o = `[${i}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const l = {};
      return $c(e.cssVarPrefix).forEach((a) => {
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
function Lc(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function A(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Jt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Rl(e);
}
function tt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Qt(Jt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Bc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ge = (e) => {
  try {
    return e();
  } catch {
  }
}, Fc = (e = "mui") => lc(e);
function Er(e, t, n, r) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const i = r === "dark" ? "dark" : "light";
  if (!n) {
    e[r] = Dc({
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
  } = Hr({
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
      ...Nl(i),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || _l(i)
  }, l;
}
function jc(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: i = !1,
    cssVarPrefix: o = "mui",
    shouldSkipGeneratingVar: l = Mc,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...s
  } = e, c = Object.keys(n)[0], f = r || (n.light && c !== "light" ? "light" : c), d = Fc(o), {
    [f]: p,
    light: x,
    dark: h,
    ...E
  } = n, v = {
    ...E
  };
  let P = p;
  if ((f === "dark" && !("dark" in n) || f === "light" && !("light" in n)) && (P = !0), !P)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${f}\` option is either missing or invalid.` : ct(21, f));
  const w = Er(v, P, s, f);
  x && !v.light && Er(v, x, void 0, "light"), h && !v.dark && Er(v, h, void 0, "dark");
  let O = {
    defaultColorScheme: f,
    ...w,
    cssVarPrefix: o,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: d,
    colorSchemes: v,
    font: {
      ...xc(w.typography),
      ...w.font
    },
    spacing: Bc(s.spacing)
  };
  Object.keys(O.colorSchemes).forEach((H) => {
    const g = O.colorSchemes[H].palette, T = (N) => {
      const V = N.split("-"), _ = V[1], R = V[2];
      return d(N, g[_][R]);
    };
    if (g.mode === "light" && (A(g.common, "background", "#fff"), A(g.common, "onBackground", "#000")), g.mode === "dark" && (A(g.common, "background", "#000"), A(g.common, "onBackground", "#fff")), Lc(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      A(g.Alert, "errorColor", he(g.error.light, 0.6)), A(g.Alert, "infoColor", he(g.info.light, 0.6)), A(g.Alert, "successColor", he(g.success.light, 0.6)), A(g.Alert, "warningColor", he(g.warning.light, 0.6)), A(g.Alert, "errorFilledBg", T("palette-error-main")), A(g.Alert, "infoFilledBg", T("palette-info-main")), A(g.Alert, "successFilledBg", T("palette-success-main")), A(g.Alert, "warningFilledBg", T("palette-warning-main")), A(g.Alert, "errorFilledColor", Ge(() => g.getContrastText(g.error.main))), A(g.Alert, "infoFilledColor", Ge(() => g.getContrastText(g.info.main))), A(g.Alert, "successFilledColor", Ge(() => g.getContrastText(g.success.main))), A(g.Alert, "warningFilledColor", Ge(() => g.getContrastText(g.warning.main))), A(g.Alert, "errorStandardBg", me(g.error.light, 0.9)), A(g.Alert, "infoStandardBg", me(g.info.light, 0.9)), A(g.Alert, "successStandardBg", me(g.success.light, 0.9)), A(g.Alert, "warningStandardBg", me(g.warning.light, 0.9)), A(g.Alert, "errorIconColor", T("palette-error-main")), A(g.Alert, "infoIconColor", T("palette-info-main")), A(g.Alert, "successIconColor", T("palette-success-main")), A(g.Alert, "warningIconColor", T("palette-warning-main")), A(g.AppBar, "defaultBg", T("palette-grey-100")), A(g.Avatar, "defaultBg", T("palette-grey-400")), A(g.Button, "inheritContainedBg", T("palette-grey-300")), A(g.Button, "inheritContainedHoverBg", T("palette-grey-A100")), A(g.Chip, "defaultBorder", T("palette-grey-400")), A(g.Chip, "defaultAvatarColor", T("palette-grey-700")), A(g.Chip, "defaultIconColor", T("palette-grey-700")), A(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), A(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), A(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), A(g.LinearProgress, "primaryBg", me(g.primary.main, 0.62)), A(g.LinearProgress, "secondaryBg", me(g.secondary.main, 0.62)), A(g.LinearProgress, "errorBg", me(g.error.main, 0.62)), A(g.LinearProgress, "infoBg", me(g.info.main, 0.62)), A(g.LinearProgress, "successBg", me(g.success.main, 0.62)), A(g.LinearProgress, "warningBg", me(g.warning.main, 0.62)), A(g.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.11)`), A(g.Slider, "primaryTrack", me(g.primary.main, 0.62)), A(g.Slider, "secondaryTrack", me(g.secondary.main, 0.62)), A(g.Slider, "errorTrack", me(g.error.main, 0.62)), A(g.Slider, "infoTrack", me(g.info.main, 0.62)), A(g.Slider, "successTrack", me(g.success.main, 0.62)), A(g.Slider, "warningTrack", me(g.warning.main, 0.62));
      const N = Cn(g.background.default, 0.8);
      A(g.SnackbarContent, "bg", N), A(g.SnackbarContent, "color", Ge(() => g.getContrastText(N))), A(g.SpeedDialAction, "fabHoverBg", Cn(g.background.paper, 0.15)), A(g.StepConnector, "border", T("palette-grey-400")), A(g.StepContent, "border", T("palette-grey-400")), A(g.Switch, "defaultColor", T("palette-common-white")), A(g.Switch, "defaultDisabledColor", T("palette-grey-100")), A(g.Switch, "primaryDisabledColor", me(g.primary.main, 0.62)), A(g.Switch, "secondaryDisabledColor", me(g.secondary.main, 0.62)), A(g.Switch, "errorDisabledColor", me(g.error.main, 0.62)), A(g.Switch, "infoDisabledColor", me(g.info.main, 0.62)), A(g.Switch, "successDisabledColor", me(g.success.main, 0.62)), A(g.Switch, "warningDisabledColor", me(g.warning.main, 0.62)), A(g.TableCell, "border", me(kn(g.divider, 1), 0.88)), A(g.Tooltip, "bg", kn(g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      A(g.Alert, "errorColor", me(g.error.light, 0.6)), A(g.Alert, "infoColor", me(g.info.light, 0.6)), A(g.Alert, "successColor", me(g.success.light, 0.6)), A(g.Alert, "warningColor", me(g.warning.light, 0.6)), A(g.Alert, "errorFilledBg", T("palette-error-dark")), A(g.Alert, "infoFilledBg", T("palette-info-dark")), A(g.Alert, "successFilledBg", T("palette-success-dark")), A(g.Alert, "warningFilledBg", T("palette-warning-dark")), A(g.Alert, "errorFilledColor", Ge(() => g.getContrastText(g.error.dark))), A(g.Alert, "infoFilledColor", Ge(() => g.getContrastText(g.info.dark))), A(g.Alert, "successFilledColor", Ge(() => g.getContrastText(g.success.dark))), A(g.Alert, "warningFilledColor", Ge(() => g.getContrastText(g.warning.dark))), A(g.Alert, "errorStandardBg", he(g.error.light, 0.9)), A(g.Alert, "infoStandardBg", he(g.info.light, 0.9)), A(g.Alert, "successStandardBg", he(g.success.light, 0.9)), A(g.Alert, "warningStandardBg", he(g.warning.light, 0.9)), A(g.Alert, "errorIconColor", T("palette-error-main")), A(g.Alert, "infoIconColor", T("palette-info-main")), A(g.Alert, "successIconColor", T("palette-success-main")), A(g.Alert, "warningIconColor", T("palette-warning-main")), A(g.AppBar, "defaultBg", T("palette-grey-900")), A(g.AppBar, "darkBg", T("palette-background-paper")), A(g.AppBar, "darkColor", T("palette-text-primary")), A(g.Avatar, "defaultBg", T("palette-grey-600")), A(g.Button, "inheritContainedBg", T("palette-grey-800")), A(g.Button, "inheritContainedHoverBg", T("palette-grey-700")), A(g.Chip, "defaultBorder", T("palette-grey-700")), A(g.Chip, "defaultAvatarColor", T("palette-grey-300")), A(g.Chip, "defaultIconColor", T("palette-grey-300")), A(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), A(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), A(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), A(g.LinearProgress, "primaryBg", he(g.primary.main, 0.5)), A(g.LinearProgress, "secondaryBg", he(g.secondary.main, 0.5)), A(g.LinearProgress, "errorBg", he(g.error.main, 0.5)), A(g.LinearProgress, "infoBg", he(g.info.main, 0.5)), A(g.LinearProgress, "successBg", he(g.success.main, 0.5)), A(g.LinearProgress, "warningBg", he(g.warning.main, 0.5)), A(g.Skeleton, "bg", `rgba(${T("palette-text-primaryChannel")} / 0.13)`), A(g.Slider, "primaryTrack", he(g.primary.main, 0.5)), A(g.Slider, "secondaryTrack", he(g.secondary.main, 0.5)), A(g.Slider, "errorTrack", he(g.error.main, 0.5)), A(g.Slider, "infoTrack", he(g.info.main, 0.5)), A(g.Slider, "successTrack", he(g.success.main, 0.5)), A(g.Slider, "warningTrack", he(g.warning.main, 0.5));
      const N = Cn(g.background.default, 0.98);
      A(g.SnackbarContent, "bg", N), A(g.SnackbarContent, "color", Ge(() => g.getContrastText(N))), A(g.SpeedDialAction, "fabHoverBg", Cn(g.background.paper, 0.15)), A(g.StepConnector, "border", T("palette-grey-600")), A(g.StepContent, "border", T("palette-grey-600")), A(g.Switch, "defaultColor", T("palette-grey-300")), A(g.Switch, "defaultDisabledColor", T("palette-grey-600")), A(g.Switch, "primaryDisabledColor", he(g.primary.main, 0.55)), A(g.Switch, "secondaryDisabledColor", he(g.secondary.main, 0.55)), A(g.Switch, "errorDisabledColor", he(g.error.main, 0.55)), A(g.Switch, "infoDisabledColor", he(g.info.main, 0.55)), A(g.Switch, "successDisabledColor", he(g.success.main, 0.55)), A(g.Switch, "warningDisabledColor", he(g.warning.main, 0.55)), A(g.TableCell, "border", he(kn(g.divider, 1), 0.68)), A(g.Tooltip, "bg", kn(g.grey[700], 0.92));
    }
    tt(g.background, "default"), tt(g.background, "paper"), tt(g.common, "background"), tt(g.common, "onBackground"), tt(g, "divider"), Object.keys(g).forEach((N) => {
      const V = g[N];
      N !== "tonalOffset" && V && typeof V == "object" && (V.main && A(g[N], "mainChannel", Qt(Jt(V.main))), V.light && A(g[N], "lightChannel", Qt(Jt(V.light))), V.dark && A(g[N], "darkChannel", Qt(Jt(V.dark))), V.contrastText && A(g[N], "contrastTextChannel", Qt(Jt(V.contrastText))), N === "text" && (tt(g[N], "primary"), tt(g[N], "secondary")), N === "action" && (V.active && tt(g[N], "active"), V.selected && tt(g[N], "selected")));
    });
  }), O = t.reduce((H, g) => Be(H, g), O);
  const k = {
    prefix: o,
    disableCssColorScheme: i,
    shouldSkipGeneratingVar: l,
    getSelector: zc(O)
  }, {
    vars: S,
    generateThemeVars: $,
    generateStyleSheets: j
  } = uc(O, k);
  return O.vars = S, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([H, g]) => {
    O[H] = g;
  }), O.generateThemeVars = $, O.generateStyleSheets = j, O.generateSpacing = function() {
    return kl(s.spacing, ui(this));
  }, O.getColorSchemeSelector = cc(a), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = l, O.unstable_sxConfig = {
    ...Zn,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, O.unstable_sx = function(g) {
    return Lt({
      sx: g,
      theme: this
    });
  }, O.toRuntimeSource = Pl, O;
}
function xo(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: mi({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Uc(e = {}, ...t) {
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
      return Hr(e, ...t);
    let c = n;
    "palette" in e || s[a] && (s[a] !== !0 ? c = s[a].palette : a === "dark" && (c = {
      mode: "dark"
    }));
    const f = Hr({
      ...e,
      palette: c
    }, ...t);
    return f.defaultColorScheme = a, f.colorSchemes = s, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...s.light !== !0 && s.light,
      palette: f.palette
    }, xo(f, "dark", s.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...s.dark !== !0 && s.dark,
      palette: f.palette
    }, xo(f, "light", s.light)), f;
  }
  return !n && !("light" in s) && a === "light" && (s.light = !0), jc({
    ...l,
    colorSchemes: s,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Dl = Uc(), Ml = "$$material";
function tr() {
  const e = Wu(Dl);
  return process.env.NODE_ENV !== "production" && K.useDebugValue(e), e[Ml] || e;
}
function Vc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Wc = (e) => Vc(e) && e !== "classes", ot = Gu({
  themeId: Ml,
  defaultTheme: Dl,
  rootShouldForwardProp: Wc
}), nr = oc;
process.env.NODE_ENV !== "production" && (b.node, b.object.isRequired);
function hn(e) {
  return ic(e);
}
function rt(e, t) {
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
  } = o, p = c[e] || r, x = Es(f[e], i), {
    props: {
      component: h,
      ...E
    },
    internalRef: v
  } = vs({
    className: n,
    ...u,
    externalForwardedProps: e === "root" ? d : void 0,
    externalSlotProps: x
  }), P = Ft(v, x == null ? void 0 : x.ref, t.ref), w = e === "root" ? h || s : h, O = Ss(p, {
    ...e === "root" && !s && !c[e] && l,
    ...e !== "root" && !c[e] && l,
    ...E,
    ...w && !a && {
      as: w
    },
    ...w && a && {
      component: w
    },
    ref: P
  }, i);
  return [p, O];
}
function Hc(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Yr(e, t) {
  return Yr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Yr(e, t);
}
function qc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Yr(e, t);
}
const So = {
  disabled: !1
};
var Yc = process.env.NODE_ENV !== "production" ? b.oneOfType([b.number, b.shape({
  enter: b.number,
  exit: b.number,
  appear: b.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && b.oneOfType([b.string, b.shape({
  enter: b.string,
  exit: b.string,
  active: b.string
}), b.shape({
  enter: b.string,
  enterDone: b.string,
  enterActive: b.string,
  exit: b.string,
  exitDone: b.string,
  exitActive: b.string
})]);
const $l = Xt.createContext(null);
var Gc = function(t) {
  return t.scrollTop;
}, Zt = "unmounted", mt = "exited", gt = "entering", Dt = "entered", Gr = "exiting", lt = /* @__PURE__ */ function(e) {
  qc(t, e);
  function t(r, i) {
    var o;
    o = e.call(this, r, i) || this;
    var l = i, a = l && !l.isMounting ? r.enter : r.appear, u;
    return o.appearStatus = null, r.in ? a ? (u = mt, o.appearStatus = gt) : u = Dt : r.unmountOnExit || r.mountOnEnter ? u = Zt : u = mt, o.state = {
      status: u
    }, o.nextCallback = null, o;
  }
  t.getDerivedStateFromProps = function(i, o) {
    var l = i.in;
    return l && o.status === Zt ? {
      status: mt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var o = null;
    if (i !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== gt && l !== Dt && (o = gt) : (l === gt || l === Dt) && (o = Gr);
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
      if (this.cancelNextCallback(), o === gt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Sn.findDOMNode(this);
          l && Gc(l);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === mt && this.setState({
      status: Zt
    });
  }, n.performEnter = function(i) {
    var o = this, l = this.props.enter, a = this.context ? this.context.isMounting : i, u = this.props.nodeRef ? [a] : [Sn.findDOMNode(this), a], s = u[0], c = u[1], f = this.getTimeouts(), d = a ? f.appear : f.enter;
    if (!i && !l || So.disabled) {
      this.safeSetState({
        status: Dt
      }, function() {
        o.props.onEntered(s);
      });
      return;
    }
    this.props.onEnter(s, c), this.safeSetState({
      status: gt
    }, function() {
      o.props.onEntering(s, c), o.onTransitionEnd(d, function() {
        o.safeSetState({
          status: Dt
        }, function() {
          o.props.onEntered(s, c);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, o = this.props.exit, l = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Sn.findDOMNode(this);
    if (!o || So.disabled) {
      this.safeSetState({
        status: mt
      }, function() {
        i.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: Gr
    }, function() {
      i.props.onExiting(a), i.onTransitionEnd(l.exit, function() {
        i.safeSetState({
          status: mt
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
    var l = this.props.nodeRef ? this.props.nodeRef.current : Sn.findDOMNode(this), a = i == null && !this.props.addEndListener;
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
    if (i === Zt)
      return null;
    var o = this.props, l = o.children;
    o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
    var a = Hc(o, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Xt.createElement($l.Provider, {
        value: null
      }, typeof l == "function" ? l(i, a) : Xt.cloneElement(Xt.Children.only(l), a))
    );
  }, t;
}(Xt.Component);
lt.contextType = $l;
lt.propTypes = process.env.NODE_ENV !== "production" ? {
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
  nodeRef: b.shape({
    current: typeof Element > "u" ? b.any : function(e, t, n, r, i, o) {
      var l = e[t];
      return b.instanceOf(l && "ownerDocument" in l ? l.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, o);
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
  children: b.oneOfType([b.func.isRequired, b.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: b.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: b.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: b.bool,
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
  appear: b.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: b.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: b.bool,
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
    var n = Yc;
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
  addEndListener: b.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: b.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: b.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: b.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: b.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: b.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: b.func
} : {};
function Nt() {
}
lt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nt,
  onEntering: Nt,
  onEntered: Nt,
  onExit: Nt,
  onExiting: Nt,
  onExited: Nt
};
lt.UNMOUNTED = Zt;
lt.EXITED = mt;
lt.ENTERING = gt;
lt.ENTERED = Dt;
lt.EXITING = Gr;
const Kc = (e) => e.scrollTop;
function vo(e, t) {
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
const Xc = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Bn = /* @__PURE__ */ K.forwardRef(function(t, n) {
  const r = tr(), i = {
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
    TransitionComponent: P = lt,
    ...w
  } = t, O = K.useRef(null), k = Ft(O, si(a), n), S = (_) => (R) => {
    if (_) {
      const L = O.current;
      R === void 0 ? _(L) : _(L, R);
    }
  }, $ = S(d), j = S((_, R) => {
    Kc(_);
    const L = vo({
      style: E,
      timeout: v,
      easing: u
    }, {
      mode: "enter"
    });
    _.style.webkitTransition = r.transitions.create("opacity", L), _.style.transition = r.transitions.create("opacity", L), c && c(_, R);
  }), H = S(f), g = S(h), T = S((_) => {
    const R = vo({
      style: E,
      timeout: v,
      easing: u
    }, {
      mode: "exit"
    });
    _.style.webkitTransition = r.transitions.create("opacity", R), _.style.transition = r.transitions.create("opacity", R), p && p(_);
  }), N = S(x);
  return /* @__PURE__ */ C(P, {
    appear: l,
    in: s,
    nodeRef: O,
    onEnter: j,
    onEntered: H,
    onEntering: $,
    onExit: T,
    onExited: N,
    onExiting: g,
    addEndListener: (_) => {
      o && o(O.current, _);
    },
    timeout: v,
    ...w,
    children: (_, {
      ownerState: R,
      ...L
    }) => /* @__PURE__ */ K.cloneElement(a, {
      style: {
        opacity: 0,
        visibility: _ === "exited" && !s ? "hidden" : void 0,
        ...Xc[_],
        ...E,
        ...a.props.style
      },
      ref: k,
      ...L
    })
  });
});
process.env.NODE_ENV !== "production" && (Bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: b.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: b.bool,
  /**
   * A single child content element.
   */
  children: Vn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: b.oneOfType([b.shape({
    enter: b.string,
    exit: b.string
  }), b.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: b.bool,
  /**
   * @ignore
   */
  onEnter: b.func,
  /**
   * @ignore
   */
  onEntered: b.func,
  /**
   * @ignore
   */
  onEntering: b.func,
  /**
   * @ignore
   */
  onExit: b.func,
  /**
   * @ignore
   */
  onExited: b.func,
  /**
   * @ignore
   */
  onExiting: b.func,
  /**
   * @ignore
   */
  style: b.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: b.oneOfType([b.number, b.shape({
    appear: b.number,
    enter: b.number,
    exit: b.number
  })])
});
function Qc(e) {
  return wt("MuiBackdrop", e);
}
fn("MuiBackdrop", ["root", "invisible"]);
const Jc = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return cn({
    root: ["root", n && "invisible"]
  }, Qc, t);
}, Zc = ot("div", {
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
}), gi = /* @__PURE__ */ K.forwardRef(function(t, n) {
  const r = hn({
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
  }, v = Jc(E), P = {
    transition: p,
    root: s.Root,
    ...d
  }, w = {
    ...c,
    ...f
  }, O = {
    slots: P,
    slotProps: w
  }, [k, S] = rt("root", {
    elementType: Zc,
    externalForwardedProps: O,
    className: Qe(v.root, o),
    ownerState: E
  }), [$, j] = rt("transition", {
    elementType: Bn,
    externalForwardedProps: O,
    ownerState: E
  });
  return /* @__PURE__ */ C($, {
    in: u,
    timeout: x,
    ...h,
    ...j,
    children: /* @__PURE__ */ C(k, {
      "aria-hidden": !0,
      ...S,
      classes: v,
      ref: n,
      children: i
    })
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
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: b.shape({
    Root: b.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: b.shape({
    root: b.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: b.bool,
  /**
   * If `true`, the component is shown.
   */
  open: b.bool.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: b.shape({
    root: b.oneOfType([b.func, b.object]),
    transition: b.oneOfType([b.func, b.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: b.shape({
    root: b.elementType,
    transition: b.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: b.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: b.oneOfType([b.number, b.shape({
    appear: b.number,
    enter: b.number,
    exit: b.number
  })])
});
function ef(e) {
  return typeof e == "function" ? e() : e;
}
function tf(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Eo = () => {
}, Tn = new Os();
function nf(e) {
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
  } = e, f = K.useRef({}), d = K.useRef(null), p = K.useRef(null), x = Ft(p, c), [h, E] = K.useState(!s), v = tf(a);
  let P = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (P = !1);
  const w = () => Et(d.current), O = () => (f.current.modalRef = p.current, f.current.mount = d.current, f.current), k = () => {
    Tn.mount(O(), {
      disableScrollLock: r
    }), p.current && (p.current.scrollTop = 0);
  }, S = Ji(() => {
    const R = ef(t) || w().body;
    Tn.add(O(), R), p.current && k();
  }), $ = () => Tn.isTopModal(O()), j = Ji((R) => {
    d.current = R, R && (s && $() ? k() : p.current && en(p.current, P));
  }), H = K.useCallback(() => {
    Tn.remove(O(), P);
  }, [P]);
  K.useEffect(() => () => {
    H();
  }, [H]), K.useEffect(() => {
    s ? S() : (!v || !i) && H();
  }, [s, H, v, i, S]);
  const g = (R) => (L) => {
    var J;
    (J = R.onKeyDown) == null || J.call(R, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !$()) && (n || (L.stopPropagation(), u && u(L, "escapeKeyDown")));
  }, T = (R) => (L) => {
    var J;
    (J = R.onClick) == null || J.call(R, L), L.target === L.currentTarget && u && u(L, "backdropClick");
  };
  return {
    getRootProps: (R = {}) => {
      const L = vl(e);
      delete L.onTransitionEnter, delete L.onTransitionExited;
      const J = {
        ...L,
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
        ...J,
        onKeyDown: g(J),
        ref: x
      };
    },
    getBackdropProps: (R = {}) => {
      const L = R;
      return {
        "aria-hidden": !0,
        ...L,
        onClick: T(L),
        open: s
      };
    },
    getTransitionProps: () => {
      const R = () => {
        E(!1), o && o();
      }, L = () => {
        E(!0), l && l(), i && H();
      };
      return {
        onEnter: Qi(R, (a == null ? void 0 : a.props.onEnter) ?? Eo),
        onExited: Qi(L, (a == null ? void 0 : a.props.onExited) ?? Eo)
      };
    },
    rootRef: x,
    portalRef: j,
    isTopModal: $,
    exited: h,
    hasTransition: v
  };
}
function rf(e) {
  return wt("MuiModal", e);
}
fn("MuiModal", ["root", "hidden", "backdrop"]);
function of(e) {
  return wt("MuiSvgIcon", e);
}
fn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const lf = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${Le(t)}`, `fontSize${Le(n)}`]
  };
  return cn(i, of, r);
}, af = ot("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${Le(n.color)}`], t[`fontSize${Le(n.fontSize)}`]];
  }
})(nr(({
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
})), Fn = /* @__PURE__ */ K.forwardRef(function(t, n) {
  const r = hn({
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
  } = r, x = /* @__PURE__ */ K.isValidElement(i) && i.type === "svg", h = {
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
  const v = lf(h);
  return /* @__PURE__ */ ce(af, {
    as: a,
    className: Qe(v.root, o),
    focusable: "false",
    color: s,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...E,
    ...p,
    ...x && i.props,
    ownerState: h,
    children: [x ? i.props.children : i, f ? /* @__PURE__ */ C("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Fn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: b.oneOfType([b.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), b.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: b.oneOfType([b.oneOf(["inherit", "large", "medium", "small"]), b.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: b.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: b.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: b.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: b.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: b.string
});
Fn.muiName = "SvgIcon";
function yi(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ C(Fn, {
      "data-testid": `${t}Icon`,
      ref: i,
      ...r,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Fn.muiName, /* @__PURE__ */ K.memo(/* @__PURE__ */ K.forwardRef(n));
}
const sf = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return cn({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, rf, r);
}, uf = ot("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(nr(({
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
}))), cf = ot(gi, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), zl = /* @__PURE__ */ K.forwardRef(function(t, n) {
  const r = hn({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = cf,
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
    disableRestoreFocus: P = !1,
    disableScrollLock: w = !1,
    hideBackdrop: O = !1,
    keepMounted: k = !1,
    onBackdropClick: S,
    onClose: $,
    onTransitionEnter: j,
    onTransitionExited: H,
    open: g,
    slotProps: T = {},
    slots: N = {},
    // eslint-disable-next-line react/prop-types
    theme: V,
    ..._
  } = r, R = {
    ...r,
    closeAfterTransition: u,
    disableAutoFocus: x,
    disableEnforceFocus: h,
    disableEscapeKeyDown: E,
    disablePortal: v,
    disableRestoreFocus: P,
    disableScrollLock: w,
    hideBackdrop: O,
    keepMounted: k
  }, {
    getRootProps: L,
    getBackdropProps: J,
    getTransitionProps: de,
    portalRef: Se,
    isTopModal: m,
    exited: z,
    hasTransition: G
  } = nf({
    ...R,
    rootRef: n
  }), y = {
    ...R,
    exited: z
  }, U = sf(y), X = {};
  if (s.props.tabIndex === void 0 && (X.tabIndex = "-1"), G) {
    const {
      onEnter: B,
      onExited: we
    } = de();
    X.onEnter = B, X.onExited = we;
  }
  const W = {
    ..._,
    slots: {
      root: d.Root,
      backdrop: d.Backdrop,
      ...N
    },
    slotProps: {
      ...p,
      ...T
    }
  }, [ee, q] = rt("root", {
    elementType: uf,
    externalForwardedProps: W,
    getSlotProps: L,
    additionalProps: {
      ref: n,
      as: f
    },
    ownerState: y,
    className: Qe(a, U == null ? void 0 : U.root, !y.open && y.exited && (U == null ? void 0 : U.hidden))
  }), [ne, Z] = rt("backdrop", {
    elementType: i,
    externalForwardedProps: W,
    additionalProps: o,
    getSlotProps: (B) => J({
      ...B,
      onClick: (we) => {
        S && S(we), B != null && B.onClick && B.onClick(we);
      }
    }),
    className: Qe(o == null ? void 0 : o.className, U == null ? void 0 : U.backdrop),
    ownerState: y
  }), be = Ft(o == null ? void 0 : o.ref, Z.ref);
  return !k && !g && (!G || z) ? null : /* @__PURE__ */ C($n, {
    ref: Se,
    container: c,
    disablePortal: v,
    children: /* @__PURE__ */ ce(ee, {
      ...q,
      children: [!O && i ? /* @__PURE__ */ C(ne, {
        ...Z,
        ref: be
      }) : null, /* @__PURE__ */ C(Mn, {
        disableEnforceFocus: h,
        disableAutoFocus: x,
        disableRestoreFocus: P,
        isEnabled: m,
        open: g,
        children: /* @__PURE__ */ K.cloneElement(s, X)
      })]
    })
  });
});
process.env.NODE_ENV !== "production" && (zl.propTypes = {
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
  BackdropComponent: b.elementType,
  /**
   * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: b.object,
  /**
   * A single child content element.
   */
  children: Vn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: b.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * The components used for each slot inside.
   *
   * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  components: b.shape({
    Backdrop: b.elementType,
    Root: b.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   *
   * @default {}
   */
  componentsProps: b.shape({
    backdrop: b.oneOfType([b.func, b.object]),
    root: b.oneOfType([b.func, b.object])
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
  container: b.oneOfType([bl, b.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: b.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: b.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: b.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: b.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: b.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: b.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: b.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: b.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: b.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: b.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: b.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: b.func,
  /**
   * If `true`, the component is shown.
   */
  open: b.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: b.shape({
    backdrop: b.oneOfType([b.func, b.object]),
    root: b.oneOfType([b.func, b.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: b.shape({
    backdrop: b.elementType,
    root: b.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object])
});
function ff(e) {
  return wt("MuiPaper", e);
}
fn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const pf = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, o = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return cn(o, ff, i);
}, df = ot("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(nr(({
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
}))), bi = /* @__PURE__ */ K.forwardRef(function(t, n) {
  var p;
  const r = hn({
    props: t,
    name: "MuiPaper"
  }), i = tr(), {
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
  }, d = pf(f);
  return process.env.NODE_ENV !== "production" && i.shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ C(df, {
    as: l,
    ownerState: f,
    className: Qe(d.root, o),
    ref: n,
    ...c,
    style: {
      ...s === "elevation" && {
        "--Paper-shadow": (i.vars || i).shadows[a],
        ...i.vars && {
          "--Paper-overlay": (p = i.vars.overlays) == null ? void 0 : p[a]
        },
        ...!i.vars && i.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Wr("#fff", qr(a))}, ${Wr("#fff", qr(a))})`
        }
      },
      ...c.style
    }
  });
});
process.env.NODE_ENV !== "production" && (bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: b.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: ai(hs, (e) => {
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
  square: b.bool,
  /**
   * @ignore
   */
  style: b.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: b.oneOfType([b.oneOf(["elevation", "outlined"]), b.string])
});
function hf(e) {
  return wt("MuiDialog", e);
}
const wr = fn("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Ll = /* @__PURE__ */ K.createContext({});
process.env.NODE_ENV !== "production" && (Ll.displayName = "DialogContext");
const mf = ot(gi, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), gf = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: i,
    fullScreen: o
  } = e, l = {
    root: ["root"],
    container: ["container", `scroll${Le(n)}`],
    paper: ["paper", `paperScroll${Le(n)}`, `paperWidth${Le(String(r))}`, i && "paperFullWidth", o && "paperFullScreen"]
  };
  return cn(l, hf, t);
}, yf = ot(zl, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), bf = ot("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${Le(n.scroll)}`]];
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
}), xf = ot(bi, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`scrollPaper${Le(n.scroll)}`], t[`paperWidth${Le(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(nr(({
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
      [`&.${wr.paperScrollBody}`]: {
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
      [`&.${wr.paperScrollBody}`]: {
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
      [`&.${wr.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), Bl = /* @__PURE__ */ K.forwardRef(function(t, n) {
  const r = hn({
    props: t,
    name: "MuiDialog"
  }), i = tr(), o = {
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
    onClick: P,
    onClose: w,
    open: O,
    PaperComponent: k = bi,
    PaperProps: S = {},
    scroll: $ = "paper",
    slots: j = {},
    slotProps: H = {},
    TransitionComponent: g = Bn,
    transitionDuration: T = o,
    TransitionProps: N,
    ...V
  } = r, _ = {
    ...r,
    disableEscapeKeyDown: p,
    fullScreen: x,
    fullWidth: h,
    maxWidth: E,
    scroll: $
  }, R = gf(_), L = K.useRef(), J = (Re) => {
    L.current = Re.target === Re.currentTarget;
  }, de = (Re) => {
    P && P(Re), L.current && (L.current = null, v && v(Re), w && w(Re, "backdropClick"));
  }, Se = os(a), m = K.useMemo(() => ({
    titleId: Se
  }), [Se]), z = {
    transition: g,
    ...j
  }, G = {
    transition: N,
    paper: S,
    backdrop: c,
    ...H
  }, y = {
    slots: z,
    slotProps: G
  }, [U, X] = rt("root", {
    elementType: yf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: y,
    ownerState: _,
    className: Qe(R.root, d),
    ref: n
  }), [W, ee] = rt("backdrop", {
    elementType: mf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: y,
    ownerState: _
  }), [q, ne] = rt("paper", {
    elementType: xf,
    shouldForwardComponentProp: !0,
    externalForwardedProps: y,
    ownerState: _,
    className: Qe(R.paper, S.className)
  }), [Z, be] = rt("container", {
    elementType: bf,
    externalForwardedProps: y,
    ownerState: _,
    className: Qe(R.container)
  }), [B, we] = rt("transition", {
    elementType: Bn,
    externalForwardedProps: y,
    ownerState: _,
    additionalProps: {
      appear: !0,
      in: O,
      timeout: T,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ C(U, {
    closeAfterTransition: !0,
    slots: {
      backdrop: W
    },
    slotProps: {
      backdrop: {
        transitionDuration: T,
        as: s,
        ...ee
      }
    },
    disableEscapeKeyDown: p,
    onClose: w,
    open: O,
    onClick: de,
    ...X,
    ...V,
    children: /* @__PURE__ */ C(B, {
      ...we,
      children: /* @__PURE__ */ C(Z, {
        onMouseDown: J,
        ...be,
        children: /* @__PURE__ */ C(q, {
          as: k,
          elevation: 24,
          role: "dialog",
          "aria-describedby": l,
          "aria-labelledby": Se,
          "aria-modal": u,
          ...ne,
          children: /* @__PURE__ */ C(Ll.Provider, {
            value: m,
            children: f
          })
        })
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (Bl.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": b.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": b.string,
  /**
   * Informs assistive technologies that the element is modal.
   * It's added on the element with role="dialog".
   * @default true
   */
  "aria-modal": b.oneOfType([b.oneOf(["false", "true"]), b.bool]),
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
  BackdropComponent: b.elementType,
  /**
   * @ignore
   */
  BackdropProps: b.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: b.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: b.object,
  /**
   * @ignore
   */
  className: b.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: b.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: b.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: b.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: b.oneOfType([b.oneOf(["xs", "sm", "md", "lg", "xl", !1]), b.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: b.func,
  /**
   * @ignore
   */
  onClick: b.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: b.func,
  /**
   * If `true`, the component is shown.
   */
  open: b.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: b.elementType,
  /**
   * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
   * @default {}
   * @deprecated Use `slotProps.paper` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  PaperProps: b.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: b.oneOf(["body", "paper"]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: b.shape({
    backdrop: b.oneOfType([b.func, b.object]),
    container: b.oneOfType([b.func, b.object]),
    paper: b.oneOfType([b.func, b.object]),
    root: b.oneOfType([b.func, b.object]),
    transition: b.oneOfType([b.func, b.object])
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: b.shape({
    backdrop: b.elementType,
    container: b.elementType,
    paper: b.elementType,
    root: b.elementType,
    transition: b.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: b.oneOfType([b.arrayOf(b.oneOfType([b.func, b.object, b.bool])), b.func, b.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionComponent: b.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: b.oneOfType([b.number, b.shape({
    appear: b.number,
    enter: b.number,
    exit: b.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @deprecated Use `slotProps.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  TransitionProps: b.object
});
const Sf = yi(/* @__PURE__ */ C("path", {
  d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
}), "Tune"), wo = ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"], vf = [
  "IS NOT NULL",
  "IS NULL",
  "NOT IN",
  "starts with",
  "ends with"
];
function Ef(e, t, n) {
  return [...t].sort((i, o) => o.length - i.length), wf(e);
}
function wf(e, t, n) {
  if (e = (e || "").trim(), !e) return { type: "group", combinator: "AND", not: !1, rules: [] };
  const r = kf(e);
  return Cf(r);
}
function kf(e) {
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
function Cf(e, t, n) {
  let r = 0;
  function i() {
    for (const s of vf) {
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
    if (Bt(d))
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
function Bt(e) {
  return wo.includes(e) || wo.includes(e.toUpperCase());
}
function Tf(e, t) {
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
function Of(e, t, n, r) {
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
        let P = d, w = !0;
        const O = [];
        for (const k of v) {
          for (; P < o.length && /^\s+$/.test(o[P]); )
            O.push(o[P]), P++;
          if (P >= o.length || o[P].toUpperCase() !== k.toUpperCase()) {
            w = !1;
            break;
          }
          O.push(o[P]), P++;
        }
        if (w) {
          h = { text: O.join(""), endIdx: P, op: E };
          break;
        }
      }
      if (h) {
        for (let E = d; E < h.endIdx; E++)
          /^\s+$/.test(o[E]) ? c.push({ type: "whitespace", text: o[E] }) : c.push({ type: "operator", text: o[E] });
        d = h.endIdx, Bt(h.op) ? f = "logical" : f = "value";
        continue;
      }
    }
    let x;
    f === "column" ? u.includes(p.toUpperCase()) ? (x = "logical", f = "column") : (x = l.includes(p) ? "column" : "customColumn", f = "operator") : f === "operator" ? (x = a.includes(p) ? "operator" : "unknownOperator", Bt(p) ? f = "logical" : f = "value") : f === "value" ? (x = "value", f = "logical") : f === "listValue" ? x = "value" : u.includes(p.toUpperCase()) ? (x = "logical", f = "column") : x = "value", c.push({ type: x, text: p }), d++;
  }
  return c;
}
function Fl(e) {
  if (!e || e.type !== "group") return [];
  const t = [];
  for (const n of e.rules || [])
    n.type === "rule" ? t.push({
      column: n.column,
      operator: n.operator,
      value: n.value
    }) : n.type === "group" && t.push(...Fl(n));
  return t;
}
function jl(e) {
  if (!e || e.type !== "group") return "";
  const t = [];
  for (const r of e.rules || [])
    if (r.type === "rule" && r.column && r.operator)
      Bt(r.operator) ? t.push(`${r.column} ${r.operator}`) : t.push(`${r.column} ${r.operator} ${r.value}`);
    else if (r.type === "group") {
      const i = jl(r);
      i && t.push(`(${i})`);
    }
  const n = t.join(` ${e.combinator} `);
  return e.not ? `NOT (${n})` : n;
}
const nn = "#007aff", kr = {
  borderRadius: "4px",
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "divider" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: nn,
    borderWidth: "1px"
  },
  "& .MuiSelect-select, & .MuiOutlinedInput-input": {
    py: "7px",
    fontSize: 13.5
  }
};
function Ul() {
  return { type: "rule", column: "", operator: "", value: "" };
}
function Vl(e = "AND") {
  return {
    type: "group",
    combinator: e,
    not: !1,
    rules: [Ul()]
  };
}
const Rf = ({ value: e, onChange: t }) => /* @__PURE__ */ C(
  oe,
  {
    role: "group",
    "aria-label": "Combine conditions with",
    sx: {
      display: "inline-flex",
      border: "1px solid",
      borderColor: nn,
      borderRadius: "4px",
      overflow: "hidden"
    },
    children: ["AND", "OR"].map((n) => /* @__PURE__ */ C(
      oe,
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
          bgcolor: e === n ? nn : "transparent",
          color: e === n ? "#fff" : nn
        },
        children: n
      },
      n
    ))
  }
), Af = ({
  rule: e,
  index: t,
  columnsOperator: n,
  onChange: r,
  onDelete: i,
  sx: o = {}
}) => {
  var c;
  const { columnSelectSx: l, operatorSelectSx: a, valueInputSx: u, deleteButtonSx: s } = o;
  return /* @__PURE__ */ ce(
    oe,
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
        /* @__PURE__ */ ce(
          Di,
          {
            size: "small",
            value: e.column,
            onChange: (f) => r(t, "column", f.target.value),
            displayEmpty: !0,
            fullWidth: !0,
            sx: { ...kr, ...l },
            children: [
              /* @__PURE__ */ C(xn, { value: "", disabled: !0, sx: { fontSize: 13.5 }, children: "Select Column" }),
              Object.keys(n).map((f) => /* @__PURE__ */ C(xn, { value: f, sx: { fontSize: 13.5 }, children: f }, f))
            ]
          }
        ),
        /* @__PURE__ */ ce(
          Di,
          {
            size: "small",
            value: e.operator,
            onChange: (f) => r(t, "operator", f.target.value),
            displayEmpty: !0,
            disabled: !e.column,
            fullWidth: !0,
            sx: { ...kr, ...a },
            children: [
              /* @__PURE__ */ C(xn, { value: "", disabled: !0, sx: { fontSize: 13.5 }, children: "Select Operator" }),
              e.column && ((c = n[e.column]) == null ? void 0 : c.operators.map((f) => /* @__PURE__ */ C(xn, { value: f, sx: { fontSize: 13.5 }, children: f }, f)))
            ]
          }
        ),
        Bt(e.operator) ? /* @__PURE__ */ C(oe, {}) : /* @__PURE__ */ C(
          za,
          {
            size: "small",
            value: e.value,
            onChange: (f) => r(t, "value", f.target.value),
            placeholder: "Enter value",
            fullWidth: !0,
            sx: { ...kr, ...u }
          }
        ),
        /* @__PURE__ */ C(an, { title: "Remove condition", children: /* @__PURE__ */ C(
          vt,
          {
            onClick: () => i(t),
            size: "small",
            sx: {
              alignSelf: "center",
              ...s
            },
            children: /* @__PURE__ */ C(cl, { sx: { fontSize: 15 } })
          }
        ) })
      ]
    }
  );
}, Wl = ({
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
    r(t, { ...e, rules: [...e.rules, Ul()] });
  }, f = () => {
    r(t, { ...e, rules: [...e.rules, Vl()] });
  }, d = (E, v, P) => {
    const w = e.rules.map((O, k) => {
      if (k !== E) return O;
      const S = { ...O, [v]: P };
      return v === "operator" && Bt(P) && (S.value = ""), S;
    });
    r(t, { ...e, rules: w });
  }, p = (E) => {
    const v = e.rules.filter((P, w) => w !== E);
    r(t, { ...e, rules: v });
  }, x = (E, v) => {
    const P = E[E.length - 1], w = e.rules.map(
      (O, k) => k === P ? v : O
    );
    r(t, { ...e, rules: w });
  }, h = (E) => {
    const v = e.rules.filter((P, w) => w !== E);
    r(t, { ...e, rules: v });
  };
  return /* @__PURE__ */ ce(
    oe,
    {
      role: "group",
      "aria-label": `${e.not ? "NOT " : ""}${e.combinator} group`,
      sx: {
        border: "1px solid",
        borderColor: "divider",
        borderLeft: "3px solid",
        borderLeftColor: e.not ? "error.main" : l > 0 ? "primary.light" : nn,
        borderRadius: "6px",
        bgcolor: "background.paper",
        mb: l > 0 ? 1 : 0
      },
      children: [
        /* @__PURE__ */ ce(
          oe,
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
              /* @__PURE__ */ C(
                Ma,
                {
                  sx: { m: 0, gap: 0.5 },
                  control: /* @__PURE__ */ C(
                    $a,
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
              /* @__PURE__ */ C(
                Rf,
                {
                  value: e.combinator,
                  onChange: u
                }
              ),
              /* @__PURE__ */ C(oe, { sx: { flex: 1 } }),
              /* @__PURE__ */ C(
                xt,
                {
                  size: "small",
                  startIcon: /* @__PURE__ */ C(Ia, { sx: { fontSize: 15 } }),
                  onClick: c,
                  sx: { textTransform: "none", fontSize: 12.5, minWidth: 0 },
                  children: "Condition"
                }
              ),
              /* @__PURE__ */ C(
                xt,
                {
                  size: "small",
                  startIcon: /* @__PURE__ */ C(Pa, { sx: { fontSize: 15 } }),
                  onClick: f,
                  sx: { textTransform: "none", fontSize: 12.5, minWidth: 0 },
                  children: "Group"
                }
              ),
              !o && /* @__PURE__ */ C(an, { title: "Remove group", children: /* @__PURE__ */ C(
                vt,
                {
                  onClick: () => i(),
                  size: "small",
                  "aria-label": "Remove group",
                  children: /* @__PURE__ */ C(Na, { sx: { fontSize: 16 } })
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ C(oe, { sx: { px: 1.25, pb: 1.25 }, children: e.rules.map(
          (E, v) => E.type === "group" ? /* @__PURE__ */ C(
            Wl,
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
          ) : /* @__PURE__ */ C(
            Af,
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
}, If = ({
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
  } = a, [p, x] = Me(
    () => l && l.type === "group" ? l : Vl("AND")
  );
  bt(() => {
    l && l.type === "group" && x(l);
  }, [l]), bt(() => {
    i && (i.current = () => t(p));
  });
  const h = (E, v) => {
    x(v), r == null || r(v);
  };
  return /* @__PURE__ */ C(
    oe,
    {
      sx: {
        width: "100%",
        boxSizing: "border-box",
        ...u
      },
      children: /* @__PURE__ */ C(
        Wl,
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
}, Pf = yi(/* @__PURE__ */ C("path", {
  d: "M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"
}), "HelpOutline"), Hl = yi(/* @__PURE__ */ C("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function Nf(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const _f = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Df = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Mf = {};
function ko(e, t) {
  return (Mf.jsx ? Df : _f).test(e);
}
const $f = /[ \t\n\f\r]/g;
function zf(e) {
  return typeof e == "object" ? e.type === "text" ? Co(e.value) : !1 : Co(e);
}
function Co(e) {
  return e.replace($f, "") === "";
}
class mn {
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
mn.prototype.normal = {};
mn.prototype.property = {};
mn.prototype.space = void 0;
function ql(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new mn(n, r, t);
}
function Kr(e) {
  return e.toLowerCase();
}
class _e {
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
_e.prototype.attribute = "";
_e.prototype.booleanish = !1;
_e.prototype.boolean = !1;
_e.prototype.commaOrSpaceSeparated = !1;
_e.prototype.commaSeparated = !1;
_e.prototype.defined = !1;
_e.prototype.mustUseProperty = !1;
_e.prototype.number = !1;
_e.prototype.overloadedBoolean = !1;
_e.prototype.property = "";
_e.prototype.spaceSeparated = !1;
_e.prototype.space = void 0;
let Lf = 0;
const ie = kt(), Ce = kt(), Xr = kt(), D = kt(), ge = kt(), St = kt(), De = kt();
function kt() {
  return 2 ** ++Lf;
}
const Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ie,
  booleanish: Ce,
  commaOrSpaceSeparated: De,
  commaSeparated: St,
  number: D,
  overloadedBoolean: Xr,
  spaceSeparated: ge
}, Symbol.toStringTag, { value: "Module" })), Cr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Qr)
);
class xi extends _e {
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
    if (super(t, n), To(this, "space", i), typeof r == "number")
      for (; ++o < Cr.length; ) {
        const l = Cr[o];
        To(this, Cr[o], (r & Qr[l]) === Qr[l]);
      }
  }
}
xi.prototype.defined = !0;
function To(e, t, n) {
  n && (e[t] = n);
}
function jt(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new xi(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Kr(r)] = r, n[Kr(o.attribute)] = r;
  }
  return new mn(t, n, e.space);
}
const Yl = jt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ce,
    ariaAutoComplete: null,
    ariaBusy: Ce,
    ariaChecked: Ce,
    ariaColCount: D,
    ariaColIndex: D,
    ariaColSpan: D,
    ariaControls: ge,
    ariaCurrent: null,
    ariaDescribedBy: ge,
    ariaDetails: null,
    ariaDisabled: Ce,
    ariaDropEffect: ge,
    ariaErrorMessage: null,
    ariaExpanded: Ce,
    ariaFlowTo: ge,
    ariaGrabbed: Ce,
    ariaHasPopup: null,
    ariaHidden: Ce,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ge,
    ariaLevel: D,
    ariaLive: null,
    ariaModal: Ce,
    ariaMultiLine: Ce,
    ariaMultiSelectable: Ce,
    ariaOrientation: null,
    ariaOwns: ge,
    ariaPlaceholder: null,
    ariaPosInSet: D,
    ariaPressed: Ce,
    ariaReadOnly: Ce,
    ariaRelevant: null,
    ariaRequired: Ce,
    ariaRoleDescription: ge,
    ariaRowCount: D,
    ariaRowIndex: D,
    ariaRowSpan: D,
    ariaSelected: Ce,
    ariaSetSize: D,
    ariaSort: null,
    ariaValueMax: D,
    ariaValueMin: D,
    ariaValueNow: D,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Gl(e, t) {
  return t in e ? e[t] : t;
}
function Kl(e, t) {
  return Gl(e, t.toLowerCase());
}
const Bf = jt({
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
    accept: St,
    acceptCharset: ge,
    accessKey: ge,
    action: null,
    allow: null,
    allowFullScreen: ie,
    allowPaymentRequest: ie,
    allowUserMedia: ie,
    alpha: ie,
    alt: null,
    as: null,
    async: ie,
    autoCapitalize: null,
    autoComplete: ge,
    autoFocus: ie,
    autoPlay: ie,
    blocking: ge,
    capture: null,
    charSet: null,
    checked: ie,
    cite: null,
    className: ge,
    closedBy: null,
    colorSpace: null,
    cols: D,
    colSpan: D,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: Ce,
    controls: ie,
    controlsList: ge,
    coords: D | St,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ie,
    defer: ie,
    dir: null,
    dirName: null,
    disabled: ie,
    download: Xr,
    draggable: Ce,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ie,
    formTarget: null,
    headers: ge,
    height: D,
    hidden: Xr,
    high: D,
    href: null,
    hrefLang: null,
    htmlFor: ge,
    httpEquiv: ge,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ie,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ie,
    itemId: null,
    itemProp: ge,
    itemRef: ge,
    itemScope: ie,
    itemType: ge,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ie,
    low: D,
    manifest: null,
    max: null,
    maxLength: D,
    media: null,
    method: null,
    min: null,
    minLength: D,
    multiple: ie,
    muted: ie,
    name: null,
    nonce: null,
    noModule: ie,
    noValidate: ie,
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
    open: ie,
    optimum: D,
    pattern: null,
    ping: ge,
    placeholder: null,
    playsInline: ie,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ie,
    referrerPolicy: null,
    rel: ge,
    required: ie,
    reversed: ie,
    rows: D,
    rowSpan: D,
    sandbox: ge,
    scope: null,
    scoped: ie,
    seamless: ie,
    selected: ie,
    shadowRootClonable: ie,
    shadowRootCustomElementRegistry: ie,
    shadowRootDelegatesFocus: ie,
    shadowRootMode: null,
    shadowRootSerializable: ie,
    shape: null,
    size: D,
    sizes: null,
    slot: null,
    span: D,
    spellCheck: Ce,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: D,
    step: null,
    style: null,
    tabIndex: D,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ie,
    useMap: null,
    value: Ce,
    width: D,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ge,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: D,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: D,
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
    compact: ie,
    // Lists. Use CSS to reduce space between items instead
    declare: ie,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: D,
    // `<img>` and `<object>`
    leftMargin: D,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: D,
    // `<body>`
    marginWidth: D,
    // `<body>`
    noResize: ie,
    // `<frame>`
    noHref: ie,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ie,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ie,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: D,
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
    topMargin: D,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: D,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: ie,
    disablePictureInPicture: ie,
    disableRemotePlayback: ie,
    exportParts: St,
    part: ge,
    prefix: null,
    property: null,
    results: D,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Kl
}), Ff = jt({
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
    about: De,
    accentHeight: D,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: D,
    amplitude: D,
    arabicForm: null,
    ascent: D,
    attributeName: null,
    attributeType: null,
    azimuth: D,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: D,
    by: null,
    calcMode: null,
    capHeight: D,
    className: ge,
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
    descent: D,
    diffuseConstant: D,
    direction: null,
    display: null,
    dur: null,
    divisor: D,
    dominantBaseline: null,
    download: ie,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: D,
    enableBackground: null,
    end: null,
    event: null,
    exponent: D,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: D,
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
    g1: St,
    g2: St,
    glyphName: St,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: D,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: D,
    horizOriginX: D,
    horizOriginY: D,
    id: null,
    ideographic: D,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: D,
    k: D,
    k1: D,
    k2: D,
    k3: D,
    k4: D,
    kernelMatrix: De,
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
    limitingConeAngle: D,
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
    mediaSize: D,
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
    overlinePosition: D,
    overlineThickness: D,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: D,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ge,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: D,
    pointsAtY: D,
    pointsAtZ: D,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: De,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: De,
    rev: De,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: De,
    requiredFeatures: De,
    requiredFonts: De,
    requiredFormats: De,
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
    specularConstant: D,
    specularExponent: D,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: D,
    strikethroughThickness: D,
    string: null,
    stroke: null,
    strokeDashArray: De,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: D,
    strokeOpacity: D,
    strokeWidth: null,
    style: null,
    surfaceScale: D,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: De,
    tabIndex: D,
    tableValues: null,
    target: null,
    targetX: D,
    targetY: D,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: De,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: D,
    underlineThickness: D,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: D,
    values: null,
    vAlphabetic: D,
    vMathematical: D,
    vectorEffect: null,
    vHanging: D,
    vIdeographic: D,
    version: null,
    vertAdvY: D,
    vertOriginX: D,
    vertOriginY: D,
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
    xHeight: D,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Gl
}), Xl = jt({
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
}), Ql = jt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Kl
}), Jl = jt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), jf = {
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
}, Uf = /[A-Z]/g, Oo = /-[a-z]/g, Vf = /^data[-\w.:]+$/i;
function Wf(e, t) {
  const n = Kr(t);
  let r = t, i = _e;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && Vf.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(Oo, qf);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Oo.test(o)) {
        let l = o.replace(Uf, Hf);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    i = xi;
  }
  return new i(r, t);
}
function Hf(e) {
  return "-" + e.toLowerCase();
}
function qf(e) {
  return e.charAt(1).toUpperCase();
}
const Yf = ql([Yl, Bf, Xl, Ql, Jl], "html"), Si = ql([Yl, Ff, Xl, Ql, Jl], "svg");
function Gf(e) {
  return e.join(" ").trim();
}
var _t = {}, Tr, Ro;
function Kf() {
  if (Ro) return Tr;
  Ro = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, l = /^[;\s]*/, a = /^\s+|\s+$/g, u = `
`, s = "/", c = "*", f = "", d = "comment", p = "declaration";
  function x(E, v) {
    if (typeof E != "string")
      throw new TypeError("First argument must be a string");
    if (!E) return [];
    v = v || {};
    var P = 1, w = 1;
    function O(_) {
      var R = _.match(t);
      R && (P += R.length);
      var L = _.lastIndexOf(u);
      w = ~L ? _.length - L : w + _.length;
    }
    function k() {
      var _ = { line: P, column: w };
      return function(R) {
        return R.position = new S(_), H(), R;
      };
    }
    function S(_) {
      this.start = _, this.end = { line: P, column: w }, this.source = v.source;
    }
    S.prototype.content = E;
    function $(_) {
      var R = new Error(
        v.source + ":" + P + ":" + w + ": " + _
      );
      if (R.reason = _, R.filename = v.source, R.line = P, R.column = w, R.source = E, !v.silent) throw R;
    }
    function j(_) {
      var R = _.exec(E);
      if (R) {
        var L = R[0];
        return O(L), E = E.slice(L.length), R;
      }
    }
    function H() {
      j(n);
    }
    function g(_) {
      var R;
      for (_ = _ || []; R = T(); )
        R !== !1 && _.push(R);
      return _;
    }
    function T() {
      var _ = k();
      if (!(s != E.charAt(0) || c != E.charAt(1))) {
        for (var R = 2; f != E.charAt(R) && (c != E.charAt(R) || s != E.charAt(R + 1)); )
          ++R;
        if (R += 2, f === E.charAt(R - 1))
          return $("End of comment missing");
        var L = E.slice(2, R - 2);
        return w += 2, O(L), E = E.slice(R), w += 2, _({
          type: d,
          comment: L
        });
      }
    }
    function N() {
      var _ = k(), R = j(r);
      if (R) {
        if (T(), !j(i)) return $("property missing ':'");
        var L = j(o), J = _({
          type: p,
          property: h(R[0].replace(e, f)),
          value: L ? h(L[0].replace(e, f)) : f
        });
        return j(l), J;
      }
    }
    function V() {
      var _ = [];
      g(_);
      for (var R; R = N(); )
        R !== !1 && (_.push(R), g(_));
      return _;
    }
    return H(), V();
  }
  function h(E) {
    return E ? E.replace(a, f) : f;
  }
  return Tr = x, Tr;
}
var Ao;
function Xf() {
  if (Ao) return _t;
  Ao = 1;
  var e = _t && _t.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(_t, "__esModule", { value: !0 }), _t.default = n;
  const t = e(Kf());
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
  return _t;
}
var qt = {}, Io;
function Qf() {
  if (Io) return qt;
  Io = 1, Object.defineProperty(qt, "__esModule", { value: !0 }), qt.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, o = function(s) {
    return !s || n.test(s) || e.test(s);
  }, l = function(s, c) {
    return c.toUpperCase();
  }, a = function(s, c) {
    return "".concat(c, "-");
  }, u = function(s, c) {
    return c === void 0 && (c = {}), o(s) ? s : (s = s.toLowerCase(), c.reactCompat ? s = s.replace(i, a) : s = s.replace(r, a), s.replace(t, l));
  };
  return qt.camelCase = u, qt;
}
var Yt, Po;
function Jf() {
  if (Po) return Yt;
  Po = 1;
  var e = Yt && Yt.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(Xf()), n = Qf();
  function r(i, o) {
    var l = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(a, u) {
      a && u && (l[(0, n.camelCase)(a, o)] = u);
    }), l;
  }
  return r.default = r, Yt = r, Yt;
}
var Zf = Jf();
const ep = /* @__PURE__ */ oi(Zf), Zl = ea("end"), vi = ea("start");
function ea(e) {
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
function tp(e) {
  const t = vi(e), n = Zl(e);
  if (t && n)
    return { start: t, end: n };
}
function rn(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? No(e.position) : "start" in e || "end" in e ? No(e) : "line" in e || "column" in e ? Jr(e) : "";
}
function Jr(e) {
  return _o(e && e.line) + ":" + _o(e && e.column);
}
function No(e) {
  return Jr(e && e.start) + "-" + Jr(e && e.end);
}
function _o(e) {
  return e && typeof e == "number" ? e : 1;
}
class Oe extends Error {
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
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = rn(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Oe.prototype.file = "";
Oe.prototype.name = "";
Oe.prototype.reason = "";
Oe.prototype.message = "";
Oe.prototype.stack = "";
Oe.prototype.column = void 0;
Oe.prototype.line = void 0;
Oe.prototype.ancestors = void 0;
Oe.prototype.cause = void 0;
Oe.prototype.fatal = void 0;
Oe.prototype.place = void 0;
Oe.prototype.ruleId = void 0;
Oe.prototype.source = void 0;
const Ei = {}.hasOwnProperty, np = /* @__PURE__ */ new Map(), rp = /[A-Z]/g, ip = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), op = /* @__PURE__ */ new Set(["td", "th"]), ta = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function lp(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = hp(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = dp(n, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? Si : Yf,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = na(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function na(e, t, n) {
  if (t.type === "element")
    return ap(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return sp(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return cp(e, t, n);
  if (t.type === "mdxjsEsm")
    return up(e, t);
  if (t.type === "root")
    return fp(e, t, n);
  if (t.type === "text")
    return pp(e, t);
}
function ap(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Si, e.schema = i), e.ancestors.push(t);
  const o = ia(e, t.tagName, !1), l = mp(e, t);
  let a = ki(e, t);
  return ip.has(t.tagName) && (a = a.filter(function(u) {
    return typeof u == "string" ? !zf(u) : !0;
  })), ra(e, l, o, t), wi(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function sp(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  un(e, t.position);
}
function up(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  un(e, t.position);
}
function cp(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = Si, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : ia(e, t.name, !0), l = gp(e, t), a = ki(e, t);
  return ra(e, l, o, t), wi(l, a), e.ancestors.pop(), e.schema = r, e.create(t, o, l, n);
}
function fp(e, t, n) {
  const r = {};
  return wi(r, ki(e, t)), e.create(t, e.Fragment, r, n);
}
function pp(e, t) {
  return t.value;
}
function ra(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function wi(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function dp(e, t, n) {
  return r;
  function r(i, o, l, a) {
    const s = Array.isArray(l.children) ? n : t;
    return a ? s(o, l, a) : s(o, l);
  }
}
function hp(e, t) {
  return n;
  function n(r, i, o, l) {
    const a = Array.isArray(o.children), u = vi(r);
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
function mp(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && Ei.call(t.properties, i)) {
      const o = yp(e, i, t.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && op.has(t.tagName) ? r = a : n[l] = a;
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
function gp(e, t) {
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
        un(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, o = e.evaluater.evaluateExpression(a.expression);
        } else
          un(e, t.position);
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
  const i = e.passKeys ? /* @__PURE__ */ new Map() : np;
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
    const a = na(e, o, l);
    a !== void 0 && n.push(a);
  }
  return n;
}
function yp(e, t, n) {
  const r = Wf(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? Nf(n) : Gf(n)), r.property === "style") {
      let i = typeof n == "object" ? n : bp(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = xp(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? jf[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function bp(e, t) {
  try {
    return ep(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new Oe("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = ta + "#cannot-parse-style-attribute", i;
  }
}
function ia(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const a = ko(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
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
    r = ko(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Ei.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  un(e);
}
function un(e, t) {
  const n = new Oe(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = ta + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function xp(e) {
  const t = {};
  let n;
  for (n in e)
    Ei.call(e, n) && (t[Sp(n)] = e[n]);
  return t;
}
function Sp(e) {
  let t = e.replace(rp, vp);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function vp(e) {
  return "-" + e.toLowerCase();
}
const Or = {
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
}, Ep = {};
function wp(e, t) {
  const n = Ep, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return oa(e, r, i);
}
function oa(e, t, n) {
  if (kp(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return Do(e.children, t, n);
  }
  return Array.isArray(e) ? Do(e, t, n) : "";
}
function Do(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = oa(e[i], t, n);
  return r.join("");
}
function kp(e) {
  return !!(e && typeof e == "object");
}
const Mo = document.createElement("i");
function Ci(e) {
  const t = "&" + e + ";";
  Mo.innerHTML = t;
  const n = Mo.textContent;
  return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
function Je(e, t, n, r) {
  const i = e.length;
  let o = 0, l;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    l = Array.from(r), l.unshift(t, n), e.splice(...l);
  else
    for (n && e.splice(t, n); o < r.length; )
      l = r.slice(o, o + 1e4), l.unshift(t, 0), e.splice(...l), o += 1e4, t += 1e4;
}
function Ue(e, t) {
  return e.length > 0 ? (Je(e, e.length, 0, t), e) : t;
}
const $o = {}.hasOwnProperty;
function Cp(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Tp(t, e[n]);
  return t;
}
function Tp(e, t) {
  let n;
  for (n in t) {
    const i = ($o.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let l;
    if (o)
      for (l in o) {
        $o.call(i, l) || (i[l] = []);
        const a = o[l];
        Op(
          // @ts-expect-error Looks like a list.
          i[l],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function Op(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  Je(e, 0, 0, r);
}
function la(e, t) {
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
function zt(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Xe = dt(/[A-Za-z]/), ze = dt(/[\dA-Za-z]/), Rp = dt(/[#-'*+\--9=?A-Z^-~]/);
function Zr(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const ei = dt(/\d/), Ap = dt(/[\dA-Fa-f]/), Ip = dt(/[!-/:-@[-`{-~]/);
function te(e) {
  return e !== null && e < -2;
}
function Ne(e) {
  return e !== null && (e < 0 || e === 32);
}
function le(e) {
  return e === -2 || e === -1 || e === 32;
}
const Pp = dt(new RegExp("\\p{P}|\\p{S}", "u")), Np = dt(/\s/);
function dt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Ut(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let l = "";
    if (o === 37 && ze(e.charCodeAt(n + 1)) && ze(e.charCodeAt(n + 2)))
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
function ye(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(u) {
    return le(u) ? (e.enter(n), a(u)) : t(u);
  }
  function a(u) {
    return le(u) && o++ < i ? (e.consume(u), a) : (e.exit(n), t(u));
  }
}
const _p = {
  tokenize: Dp
};
function Dp(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), ye(e, t, "linePrefix");
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
    return te(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
  }
}
const Mp = {
  tokenize: $p
}, zo = {
  tokenize: zp
};
function $p(e) {
  const t = this, n = [];
  let r = 0, i, o, l;
  return a;
  function a(w) {
    if (r < n.length) {
      const O = n[r];
      return t.containerState = O[1], e.attempt(O[0].continuation, u, s)(w);
    }
    return s(w);
  }
  function u(w) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && P();
      const O = t.events.length;
      let k = O, S;
      for (; k--; )
        if (t.events[k][0] === "exit" && t.events[k][1].type === "chunkFlow") {
          S = t.events[k][1].end;
          break;
        }
      v(r);
      let $ = O;
      for (; $ < t.events.length; )
        t.events[$][1].end = {
          ...S
        }, $++;
      return Je(t.events, k + 1, 0, t.events.slice(O)), t.events.length = $, s(w);
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
    return t.containerState = {}, e.check(zo, c, f)(w);
  }
  function c(w) {
    return i && P(), v(r), d(w);
  }
  function f(w) {
    return t.parser.lazy[t.now().line] = r !== n.length, l = t.now().offset, x(w);
  }
  function d(w) {
    return t.containerState = {}, e.attempt(zo, p, x)(w);
  }
  function p(w) {
    return r++, n.push([t.currentConstruct, t.containerState]), d(w);
  }
  function x(w) {
    if (w === null) {
      i && P(), v(0), e.consume(w);
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
    return te(w) ? (e.consume(w), E(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(w), h);
  }
  function E(w, O) {
    const k = t.sliceStream(w);
    if (O && k.push(null), w.previous = o, o && (o.next = w), o = w, i.defineSkip(w.start), i.write(k), t.parser.lazy[w.start.line]) {
      let S = i.events.length;
      for (; S--; )
        if (
          // The token starts before the line ending…
          i.events[S][1].start.offset < l && // …and either is not ended yet…
          (!i.events[S][1].end || // …or ends after it.
          i.events[S][1].end.offset > l)
        )
          return;
      const $ = t.events.length;
      let j = $, H, g;
      for (; j--; )
        if (t.events[j][0] === "exit" && t.events[j][1].type === "chunkFlow") {
          if (H) {
            g = t.events[j][1].end;
            break;
          }
          H = !0;
        }
      for (v(r), S = $; S < t.events.length; )
        t.events[S][1].end = {
          ...g
        }, S++;
      Je(t.events, j + 1, 0, t.events.slice($)), t.events.length = S;
    }
  }
  function v(w) {
    let O = n.length;
    for (; O-- > w; ) {
      const k = n[O];
      t.containerState = k[1], k[0].exit.call(t, e);
    }
    n.length = w;
  }
  function P() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function zp(e, t, n) {
  return ye(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Lo(e) {
  if (e === null || Ne(e) || Np(e))
    return 1;
  if (Pp(e))
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
const ti = {
  name: "attention",
  resolveAll: Lp,
  tokenize: Bp
};
function Lp(e, t) {
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
          Bo(f, -u), Bo(d, u), l = {
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
          }, s = [], e[r][1].end.offset - e[r][1].start.offset && (s = Ue(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])), s = Ue(s, [["enter", i, t], ["enter", l, t], ["exit", l, t], ["enter", o, t]]), s = Ue(s, Ti(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), s = Ue(s, [["exit", o, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, s = Ue(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, Je(e, r - 1, n - r + 3, s), n = r + s.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Bp(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Lo(r);
  let o;
  return l;
  function l(u) {
    return o = u, e.enter("attentionSequence"), a(u);
  }
  function a(u) {
    if (u === o)
      return e.consume(u), a;
    const s = e.exit("attentionSequence"), c = Lo(u), f = !c || c === 2 && i || n.includes(u), d = !i || i === 2 && c || n.includes(r);
    return s._open = !!(o === 42 ? f : f && (i || !d)), s._close = !!(o === 42 ? d : d && (c || !f)), t(u);
  }
}
function Bo(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Fp = {
  name: "autolink",
  tokenize: jp
};
function jp(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return Xe(p) ? (e.consume(p), l) : p === 64 ? n(p) : s(p);
  }
  function l(p) {
    return p === 43 || p === 45 || p === 46 || ze(p) ? (r = 1, a(p)) : s(p);
  }
  function a(p) {
    return p === 58 ? (e.consume(p), r = 0, u) : (p === 43 || p === 45 || p === 46 || ze(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, s(p));
  }
  function u(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || Zr(p) ? n(p) : (e.consume(p), u);
  }
  function s(p) {
    return p === 64 ? (e.consume(p), c) : Rp(p) ? (e.consume(p), s) : n(p);
  }
  function c(p) {
    return ze(p) ? f(p) : n(p);
  }
  function f(p) {
    return p === 46 ? (e.consume(p), r = 0, c) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
  }
  function d(p) {
    if ((p === 45 || ze(p)) && r++ < 63) {
      const x = p === 45 ? d : f;
      return e.consume(p), x;
    }
    return n(p);
  }
}
const rr = {
  partial: !0,
  tokenize: Up
};
function Up(e, t, n) {
  return r;
  function r(o) {
    return le(o) ? ye(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || te(o) ? t(o) : n(o);
  }
}
const aa = {
  continuation: {
    tokenize: Wp
  },
  exit: Hp,
  name: "blockQuote",
  tokenize: Vp
};
function Vp(e, t, n) {
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
    return le(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Wp(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return le(l) ? ye(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e.attempt(aa, t, n)(l);
  }
}
function Hp(e) {
  e.exit("blockQuote");
}
const sa = {
  name: "characterEscape",
  tokenize: qp
};
function qp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Ip(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const ua = {
  name: "characterReference",
  tokenize: Yp
};
function Yp(e, t, n) {
  const r = this;
  let i = 0, o, l;
  return a;
  function a(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), u;
  }
  function u(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), s) : (e.enter("characterReferenceValue"), o = 31, l = ze, c(f));
  }
  function s(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Ap, c) : (e.enter("characterReferenceValue"), o = 7, l = ei, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const d = e.exit("characterReferenceValue");
      return l === ze && !Ci(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(f) && i++ < o ? (e.consume(f), c) : n(f);
  }
}
const Fo = {
  partial: !0,
  tokenize: Kp
}, jo = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Gp
};
function Gp(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: k
  };
  let o = 0, l = 0, a;
  return u;
  function u(S) {
    return s(S);
  }
  function s(S) {
    const $ = r.events[r.events.length - 1];
    return o = $ && $[1].type === "linePrefix" ? $[2].sliceSerialize($[1], !0).length : 0, a = S, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(S);
  }
  function c(S) {
    return S === a ? (l++, e.consume(S), c) : l < 3 ? n(S) : (e.exit("codeFencedFenceSequence"), le(S) ? ye(e, f, "whitespace")(S) : f(S));
  }
  function f(S) {
    return S === null || te(S) ? (e.exit("codeFencedFence"), r.interrupt ? t(S) : e.check(Fo, h, O)(S)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), d(S));
  }
  function d(S) {
    return S === null || te(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(S)) : le(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ye(e, p, "whitespace")(S)) : S === 96 && S === a ? n(S) : (e.consume(S), d);
  }
  function p(S) {
    return S === null || te(S) ? f(S) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), x(S));
  }
  function x(S) {
    return S === null || te(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(S)) : S === 96 && S === a ? n(S) : (e.consume(S), x);
  }
  function h(S) {
    return e.attempt(i, O, E)(S);
  }
  function E(S) {
    return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), v;
  }
  function v(S) {
    return o > 0 && le(S) ? ye(e, P, "linePrefix", o + 1)(S) : P(S);
  }
  function P(S) {
    return S === null || te(S) ? e.check(Fo, h, O)(S) : (e.enter("codeFlowValue"), w(S));
  }
  function w(S) {
    return S === null || te(S) ? (e.exit("codeFlowValue"), P(S)) : (e.consume(S), w);
  }
  function O(S) {
    return e.exit("codeFenced"), t(S);
  }
  function k(S, $, j) {
    let H = 0;
    return g;
    function g(R) {
      return S.enter("lineEnding"), S.consume(R), S.exit("lineEnding"), T;
    }
    function T(R) {
      return S.enter("codeFencedFence"), le(R) ? ye(S, N, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(R) : N(R);
    }
    function N(R) {
      return R === a ? (S.enter("codeFencedFenceSequence"), V(R)) : j(R);
    }
    function V(R) {
      return R === a ? (H++, S.consume(R), V) : H >= l ? (S.exit("codeFencedFenceSequence"), le(R) ? ye(S, _, "whitespace")(R) : _(R)) : j(R);
    }
    function _(R) {
      return R === null || te(R) ? (S.exit("codeFencedFence"), $(R)) : j(R);
    }
  }
}
function Kp(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? n(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
const Rr = {
  name: "codeIndented",
  tokenize: Qp
}, Xp = {
  partial: !0,
  tokenize: Jp
};
function Qp(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("codeIndented"), ye(e, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? l(s) : n(s);
  }
  function l(s) {
    return s === null ? u(s) : te(s) ? e.attempt(Xp, l, u)(s) : (e.enter("codeFlowValue"), a(s));
  }
  function a(s) {
    return s === null || te(s) ? (e.exit("codeFlowValue"), l(s)) : (e.consume(s), a);
  }
  function u(s) {
    return e.exit("codeIndented"), t(s);
  }
}
function Jp(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? n(l) : te(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : ye(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : te(l) ? i(l) : n(l);
  }
}
const Zp = {
  name: "codeText",
  previous: td,
  resolve: ed,
  tokenize: nd
};
function ed(e) {
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
function td(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function nd(e, t, n) {
  let r = 0, i, o;
  return l;
  function l(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
  }
  function a(f) {
    return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), u(f));
  }
  function u(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), u) : f === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(f)) : te(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), u) : (e.enter("codeTextData"), s(f));
  }
  function s(f) {
    return f === null || f === 32 || f === 96 || te(f) ? (e.exit("codeTextData"), u(f)) : (e.consume(f), s);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (o.type = "codeTextData", s(f));
  }
}
class rd {
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
    return r && Gt(this.left, r), o.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), Gt(this.left, t);
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
    this.setCursor(0), Gt(this.right, t.reverse());
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
        Gt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Gt(this.left, n.reverse());
      }
  }
}
function Gt(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function ca(e) {
  const t = {};
  let n = -1, r, i, o, l, a, u, s;
  const c = new rd(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
      for (; ++o < u.length && u[o][1].type !== "content"; )
        u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, id(c, n)), n = t[n], s = !0);
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
  return Je(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !s;
}
function id(e, t) {
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
    const v = a.slice(E[d], E[d + 1]), P = o.pop();
    u.push([P, P + v.length - 1]), e.splice(P, 2, v);
  }
  for (u.reverse(), d = -1; ++d < u.length; )
    s[x + u[d][0]] = x + u[d][1], x += u[d][1] - u[d][0] - 1;
  return s;
}
const od = {
  resolve: ad,
  tokenize: sd
}, ld = {
  partial: !0,
  tokenize: ud
};
function ad(e) {
  return ca(e), e;
}
function sd(e, t) {
  let n;
  return r;
  function r(a) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? o(a) : te(a) ? e.check(ld, l, o)(a) : (e.consume(a), i);
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
function ud(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ye(e, o, "linePrefix");
  }
  function o(l) {
    if (l === null || te(l))
      return n(l);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(l) : e.interrupt(r.parser.constructs.flow, n, t)(l);
  }
}
function fa(e, t, n, r, i, o, l, a, u) {
  const s = u || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(v) {
    return v === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(v), e.exit(o), d) : v === null || v === 32 || v === 41 || Zr(v) ? n(v) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), h(v));
  }
  function d(v) {
    return v === 62 ? (e.enter(o), e.consume(v), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
      contentType: "string"
    }), p(v));
  }
  function p(v) {
    return v === 62 ? (e.exit("chunkString"), e.exit(a), d(v)) : v === null || v === 60 || te(v) ? n(v) : (e.consume(v), v === 92 ? x : p);
  }
  function x(v) {
    return v === 60 || v === 62 || v === 92 ? (e.consume(v), p) : p(v);
  }
  function h(v) {
    return !c && (v === null || v === 41 || Ne(v)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), t(v)) : c < s && v === 40 ? (e.consume(v), c++, h) : v === 41 ? (e.consume(v), c--, h) : v === null || v === 32 || v === 40 || Zr(v) ? n(v) : (e.consume(v), v === 92 ? E : h);
  }
  function E(v) {
    return v === 40 || v === 41 || v === 92 ? (e.consume(v), h) : h(v);
  }
}
function pa(e, t, n, r, i, o) {
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
    p === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : te(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(p));
  }
  function f(p) {
    return p === null || p === 91 || p === 93 || te(p) || a++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), u || (u = !le(p)), p === 92 ? d : f);
  }
  function d(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
  }
}
function da(e, t, n, r, i, o) {
  let l;
  return a;
  function a(d) {
    return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), l = d === 40 ? 41 : d, u) : n(d);
  }
  function u(d) {
    return d === l ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(o), s(d));
  }
  function s(d) {
    return d === l ? (e.exit(o), u(l)) : d === null ? n(d) : te(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), ye(e, s, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === l || d === null || te(d) ? (e.exit("chunkString"), s(d)) : (e.consume(d), d === 92 ? f : c);
  }
  function f(d) {
    return d === l || d === 92 ? (e.consume(d), c) : c(d);
  }
}
function on(e, t) {
  let n;
  return r;
  function r(i) {
    return te(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : le(i) ? ye(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const cd = {
  name: "definition",
  tokenize: pd
}, fd = {
  partial: !0,
  tokenize: dd
};
function pd(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), l(p);
  }
  function l(p) {
    return pa.call(
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
    return i = zt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), u) : n(p);
  }
  function u(p) {
    return Ne(p) ? on(e, s)(p) : s(p);
  }
  function s(p) {
    return fa(
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
    return e.attempt(fd, f, f)(p);
  }
  function f(p) {
    return le(p) ? ye(e, d, "whitespace")(p) : d(p);
  }
  function d(p) {
    return p === null || te(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function dd(e, t, n) {
  return r;
  function r(a) {
    return Ne(a) ? on(e, i)(a) : n(a);
  }
  function i(a) {
    return da(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function o(a) {
    return le(a) ? ye(e, l, "whitespace")(a) : l(a);
  }
  function l(a) {
    return a === null || te(a) ? t(a) : n(a);
  }
}
const hd = {
  name: "hardBreakEscape",
  tokenize: md
};
function md(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return te(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const gd = {
  name: "headingAtx",
  resolve: yd,
  tokenize: bd
};
function yd(e, t) {
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
  }, Je(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function bd(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), o(c);
  }
  function o(c) {
    return e.enter("atxHeadingSequence"), l(c);
  }
  function l(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), l) : c === null || Ne(c) ? (e.exit("atxHeadingSequence"), a(c)) : n(c);
  }
  function a(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || te(c) ? (e.exit("atxHeading"), t(c)) : le(c) ? ye(e, a, "whitespace")(c) : (e.enter("atxHeadingText"), s(c));
  }
  function u(c) {
    return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), a(c));
  }
  function s(c) {
    return c === null || c === 35 || Ne(c) ? (e.exit("atxHeadingText"), a(c)) : (e.consume(c), s);
  }
}
const xd = [
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
], Uo = ["pre", "script", "style", "textarea"], Sd = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: wd,
  tokenize: kd
}, vd = {
  partial: !0,
  tokenize: Td
}, Ed = {
  partial: !0,
  tokenize: Cd
};
function wd(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function kd(e, t, n) {
  const r = this;
  let i, o, l, a, u;
  return s;
  function s(y) {
    return c(y);
  }
  function c(y) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(y), f;
  }
  function f(y) {
    return y === 33 ? (e.consume(y), d) : y === 47 ? (e.consume(y), o = !0, h) : y === 63 ? (e.consume(y), i = 3, r.interrupt ? t : m) : Xe(y) ? (e.consume(y), l = String.fromCharCode(y), E) : n(y);
  }
  function d(y) {
    return y === 45 ? (e.consume(y), i = 2, p) : y === 91 ? (e.consume(y), i = 5, a = 0, x) : Xe(y) ? (e.consume(y), i = 4, r.interrupt ? t : m) : n(y);
  }
  function p(y) {
    return y === 45 ? (e.consume(y), r.interrupt ? t : m) : n(y);
  }
  function x(y) {
    const U = "CDATA[";
    return y === U.charCodeAt(a++) ? (e.consume(y), a === U.length ? r.interrupt ? t : N : x) : n(y);
  }
  function h(y) {
    return Xe(y) ? (e.consume(y), l = String.fromCharCode(y), E) : n(y);
  }
  function E(y) {
    if (y === null || y === 47 || y === 62 || Ne(y)) {
      const U = y === 47, X = l.toLowerCase();
      return !U && !o && Uo.includes(X) ? (i = 1, r.interrupt ? t(y) : N(y)) : xd.includes(l.toLowerCase()) ? (i = 6, U ? (e.consume(y), v) : r.interrupt ? t(y) : N(y)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(y) : o ? P(y) : w(y));
    }
    return y === 45 || ze(y) ? (e.consume(y), l += String.fromCharCode(y), E) : n(y);
  }
  function v(y) {
    return y === 62 ? (e.consume(y), r.interrupt ? t : N) : n(y);
  }
  function P(y) {
    return le(y) ? (e.consume(y), P) : g(y);
  }
  function w(y) {
    return y === 47 ? (e.consume(y), g) : y === 58 || y === 95 || Xe(y) ? (e.consume(y), O) : le(y) ? (e.consume(y), w) : g(y);
  }
  function O(y) {
    return y === 45 || y === 46 || y === 58 || y === 95 || ze(y) ? (e.consume(y), O) : k(y);
  }
  function k(y) {
    return y === 61 ? (e.consume(y), S) : le(y) ? (e.consume(y), k) : w(y);
  }
  function S(y) {
    return y === null || y === 60 || y === 61 || y === 62 || y === 96 ? n(y) : y === 34 || y === 39 ? (e.consume(y), u = y, $) : le(y) ? (e.consume(y), S) : j(y);
  }
  function $(y) {
    return y === u ? (e.consume(y), u = null, H) : y === null || te(y) ? n(y) : (e.consume(y), $);
  }
  function j(y) {
    return y === null || y === 34 || y === 39 || y === 47 || y === 60 || y === 61 || y === 62 || y === 96 || Ne(y) ? k(y) : (e.consume(y), j);
  }
  function H(y) {
    return y === 47 || y === 62 || le(y) ? w(y) : n(y);
  }
  function g(y) {
    return y === 62 ? (e.consume(y), T) : n(y);
  }
  function T(y) {
    return y === null || te(y) ? N(y) : le(y) ? (e.consume(y), T) : n(y);
  }
  function N(y) {
    return y === 45 && i === 2 ? (e.consume(y), L) : y === 60 && i === 1 ? (e.consume(y), J) : y === 62 && i === 4 ? (e.consume(y), z) : y === 63 && i === 3 ? (e.consume(y), m) : y === 93 && i === 5 ? (e.consume(y), Se) : te(y) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(vd, G, V)(y)) : y === null || te(y) ? (e.exit("htmlFlowData"), V(y)) : (e.consume(y), N);
  }
  function V(y) {
    return e.check(Ed, _, G)(y);
  }
  function _(y) {
    return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), R;
  }
  function R(y) {
    return y === null || te(y) ? V(y) : (e.enter("htmlFlowData"), N(y));
  }
  function L(y) {
    return y === 45 ? (e.consume(y), m) : N(y);
  }
  function J(y) {
    return y === 47 ? (e.consume(y), l = "", de) : N(y);
  }
  function de(y) {
    if (y === 62) {
      const U = l.toLowerCase();
      return Uo.includes(U) ? (e.consume(y), z) : N(y);
    }
    return Xe(y) && l.length < 8 ? (e.consume(y), l += String.fromCharCode(y), de) : N(y);
  }
  function Se(y) {
    return y === 93 ? (e.consume(y), m) : N(y);
  }
  function m(y) {
    return y === 62 ? (e.consume(y), z) : y === 45 && i === 2 ? (e.consume(y), m) : N(y);
  }
  function z(y) {
    return y === null || te(y) ? (e.exit("htmlFlowData"), G(y)) : (e.consume(y), z);
  }
  function G(y) {
    return e.exit("htmlFlow"), t(y);
  }
}
function Cd(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return te(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : n(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? n(l) : t(l);
  }
}
function Td(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(rr, t, n);
  }
}
const Od = {
  name: "htmlText",
  tokenize: Rd
};
function Rd(e, t, n) {
  const r = this;
  let i, o, l;
  return a;
  function a(m) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), u;
  }
  function u(m) {
    return m === 33 ? (e.consume(m), s) : m === 47 ? (e.consume(m), k) : m === 63 ? (e.consume(m), w) : Xe(m) ? (e.consume(m), j) : n(m);
  }
  function s(m) {
    return m === 45 ? (e.consume(m), c) : m === 91 ? (e.consume(m), o = 0, x) : Xe(m) ? (e.consume(m), P) : n(m);
  }
  function c(m) {
    return m === 45 ? (e.consume(m), p) : n(m);
  }
  function f(m) {
    return m === null ? n(m) : m === 45 ? (e.consume(m), d) : te(m) ? (l = f, J(m)) : (e.consume(m), f);
  }
  function d(m) {
    return m === 45 ? (e.consume(m), p) : f(m);
  }
  function p(m) {
    return m === 62 ? L(m) : m === 45 ? d(m) : f(m);
  }
  function x(m) {
    const z = "CDATA[";
    return m === z.charCodeAt(o++) ? (e.consume(m), o === z.length ? h : x) : n(m);
  }
  function h(m) {
    return m === null ? n(m) : m === 93 ? (e.consume(m), E) : te(m) ? (l = h, J(m)) : (e.consume(m), h);
  }
  function E(m) {
    return m === 93 ? (e.consume(m), v) : h(m);
  }
  function v(m) {
    return m === 62 ? L(m) : m === 93 ? (e.consume(m), v) : h(m);
  }
  function P(m) {
    return m === null || m === 62 ? L(m) : te(m) ? (l = P, J(m)) : (e.consume(m), P);
  }
  function w(m) {
    return m === null ? n(m) : m === 63 ? (e.consume(m), O) : te(m) ? (l = w, J(m)) : (e.consume(m), w);
  }
  function O(m) {
    return m === 62 ? L(m) : w(m);
  }
  function k(m) {
    return Xe(m) ? (e.consume(m), S) : n(m);
  }
  function S(m) {
    return m === 45 || ze(m) ? (e.consume(m), S) : $(m);
  }
  function $(m) {
    return te(m) ? (l = $, J(m)) : le(m) ? (e.consume(m), $) : L(m);
  }
  function j(m) {
    return m === 45 || ze(m) ? (e.consume(m), j) : m === 47 || m === 62 || Ne(m) ? H(m) : n(m);
  }
  function H(m) {
    return m === 47 ? (e.consume(m), L) : m === 58 || m === 95 || Xe(m) ? (e.consume(m), g) : te(m) ? (l = H, J(m)) : le(m) ? (e.consume(m), H) : L(m);
  }
  function g(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || ze(m) ? (e.consume(m), g) : T(m);
  }
  function T(m) {
    return m === 61 ? (e.consume(m), N) : te(m) ? (l = T, J(m)) : le(m) ? (e.consume(m), T) : H(m);
  }
  function N(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (e.consume(m), i = m, V) : te(m) ? (l = N, J(m)) : le(m) ? (e.consume(m), N) : (e.consume(m), _);
  }
  function V(m) {
    return m === i ? (e.consume(m), i = void 0, R) : m === null ? n(m) : te(m) ? (l = V, J(m)) : (e.consume(m), V);
  }
  function _(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? n(m) : m === 47 || m === 62 || Ne(m) ? H(m) : (e.consume(m), _);
  }
  function R(m) {
    return m === 47 || m === 62 || Ne(m) ? H(m) : n(m);
  }
  function L(m) {
    return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(m);
  }
  function J(m) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), de;
  }
  function de(m) {
    return le(m) ? ye(e, Se, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : Se(m);
  }
  function Se(m) {
    return e.enter("htmlTextData"), l(m);
  }
}
const Oi = {
  name: "labelEnd",
  resolveAll: Nd,
  resolveTo: _d,
  tokenize: Dd
}, Ad = {
  tokenize: Md
}, Id = {
  tokenize: $d
}, Pd = {
  tokenize: zd
};
function Nd(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && Je(e, 0, e.length, n), e;
}
function _d(e, t) {
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
  return a = [["enter", u, t], ["enter", s, t]], a = Ue(a, e.slice(o + 1, o + r + 3)), a = Ue(a, [["enter", c, t]]), a = Ue(a, Ti(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), t)), a = Ue(a, [["exit", c, t], e[l - 2], e[l - 1], ["exit", s, t]]), a = Ue(a, e.slice(l + 1)), a = Ue(a, [["exit", u, t]]), Je(e, o, e.length, a), e;
}
function Dd(e, t, n) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return a;
  function a(d) {
    return o ? o._inactive ? f(d) : (l = r.parser.defined.includes(zt(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(d);
  }
  function u(d) {
    return d === 40 ? e.attempt(Ad, c, l ? c : f)(d) : d === 91 ? e.attempt(Id, c, l ? s : f)(d) : l ? c(d) : f(d);
  }
  function s(d) {
    return e.attempt(Pd, c, f)(d);
  }
  function c(d) {
    return t(d);
  }
  function f(d) {
    return o._balanced = !0, n(d);
  }
}
function Md(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return Ne(f) ? on(e, o)(f) : o(f);
  }
  function o(f) {
    return f === 41 ? c(f) : fa(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function l(f) {
    return Ne(f) ? on(e, u)(f) : c(f);
  }
  function a(f) {
    return n(f);
  }
  function u(f) {
    return f === 34 || f === 39 || f === 40 ? da(e, s, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function s(f) {
    return Ne(f) ? on(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function $d(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return pa.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
  }
  function o(a) {
    return r.parser.defined.includes(zt(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
  }
  function l(a) {
    return n(a);
  }
}
function zd(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Ld = {
  name: "labelStartImage",
  resolveAll: Oi.resolveAll,
  tokenize: Bd
};
function Bd(e, t, n) {
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
const Fd = {
  name: "labelStartLink",
  resolveAll: Oi.resolveAll,
  tokenize: jd
};
function jd(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(l) : t(l);
  }
}
const Ar = {
  name: "lineEnding",
  tokenize: Ud
};
function Ud(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), ye(e, t, "linePrefix");
  }
}
const Nn = {
  name: "thematicBreak",
  tokenize: Vd
};
function Vd(e, t, n) {
  let r = 0, i;
  return o;
  function o(s) {
    return e.enter("thematicBreak"), l(s);
  }
  function l(s) {
    return i = s, a(s);
  }
  function a(s) {
    return s === i ? (e.enter("thematicBreakSequence"), u(s)) : r >= 3 && (s === null || te(s)) ? (e.exit("thematicBreak"), t(s)) : n(s);
  }
  function u(s) {
    return s === i ? (e.consume(s), r++, u) : (e.exit("thematicBreakSequence"), le(s) ? ye(e, a, "whitespace")(s) : a(s));
  }
}
const Pe = {
  continuation: {
    tokenize: Yd
  },
  exit: Kd,
  name: "list",
  tokenize: qd
}, Wd = {
  partial: !0,
  tokenize: Xd
}, Hd = {
  partial: !0,
  tokenize: Gd
};
function qd(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, l = 0;
  return a;
  function a(p) {
    const x = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (x === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : ei(p)) {
      if (r.containerState.type || (r.containerState.type = x, e.enter(x, {
        _container: !0
      })), x === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(Nn, n, s)(p) : s(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(p);
    }
    return n(p);
  }
  function u(p) {
    return ei(p) && ++l < 10 ? (e.consume(p), u) : (!r.interrupt || l < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), s(p)) : n(p);
  }
  function s(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      rr,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(Wd, d, f)
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, o++, d(p);
  }
  function f(p) {
    return le(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : n(p);
  }
  function d(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Yd(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(rr, i, o);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, ye(e, t, "listItemIndent", r.containerState.size + 1)(a);
  }
  function o(a) {
    return r.containerState.furtherBlankLines || !le(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Hd, t, l)(a));
  }
  function l(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, ye(e, e.attempt(Pe, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Gd(e, t, n) {
  const r = this;
  return ye(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function Kd(e) {
  e.exit(this.containerState.type);
}
function Xd(e, t, n) {
  const r = this;
  return ye(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !le(o) && l && l[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const Vo = {
  name: "setextUnderline",
  resolveTo: Qd,
  tokenize: Jd
};
function Qd(e, t) {
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
function Jd(e, t, n) {
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
    return s === i ? (e.consume(s), a) : (e.exit("setextHeadingLineSequence"), le(s) ? ye(e, u, "lineSuffix")(s) : u(s));
  }
  function u(s) {
    return s === null || te(s) ? (e.exit("setextHeadingLine"), t(s)) : n(s);
  }
}
const Zd = {
  tokenize: eh
};
function eh(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    rr,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, ye(e, e.attempt(this.parser.constructs.flow, i, e.attempt(od, i)), "linePrefix"))
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
const th = {
  resolveAll: ma()
}, nh = ha("string"), rh = ha("text");
function ha(e) {
  return {
    resolveAll: ma(e === "text" ? ih : void 0),
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
function ma(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function ih(e, t) {
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
const oh = {
  42: Pe,
  43: Pe,
  45: Pe,
  48: Pe,
  49: Pe,
  50: Pe,
  51: Pe,
  52: Pe,
  53: Pe,
  54: Pe,
  55: Pe,
  56: Pe,
  57: Pe,
  62: aa
}, lh = {
  91: cd
}, ah = {
  [-2]: Rr,
  [-1]: Rr,
  32: Rr
}, sh = {
  35: gd,
  42: Nn,
  45: [Vo, Nn],
  60: Sd,
  61: Vo,
  95: Nn,
  96: jo,
  126: jo
}, uh = {
  38: ua,
  92: sa
}, ch = {
  [-5]: Ar,
  [-4]: Ar,
  [-3]: Ar,
  33: Ld,
  38: ua,
  42: ti,
  60: [Fp, Od],
  91: Fd,
  92: [hd, sa],
  93: Oi,
  95: ti,
  96: Zp
}, fh = {
  null: [ti, th]
}, ph = {
  null: [42, 95]
}, dh = {
  null: []
}, hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: ph,
  contentInitial: lh,
  disable: dh,
  document: oh,
  flow: sh,
  flowInitial: ah,
  insideSpan: fh,
  string: uh,
  text: ch
}, Symbol.toStringTag, { value: "Module" }));
function mh(e, t, n) {
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
    attempt: $(k),
    check: $(S),
    consume: P,
    enter: w,
    exit: O,
    interrupt: $(S, {
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
  function f(T) {
    return l = Ue(l, T), E(), l[l.length - 1] !== null ? [] : (j(t, 0), s.events = Ti(o, s.events, s), s.events);
  }
  function d(T, N) {
    return yh(p(T), N);
  }
  function p(T) {
    return gh(l, T);
  }
  function x() {
    const {
      _bufferIndex: T,
      _index: N,
      line: V,
      column: _,
      offset: R
    } = r;
    return {
      _bufferIndex: T,
      _index: N,
      line: V,
      column: _,
      offset: R
    };
  }
  function h(T) {
    i[T.line] = T.column, g();
  }
  function E() {
    let T;
    for (; r._index < l.length; ) {
      const N = l[r._index];
      if (typeof N == "string")
        for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < N.length; )
          v(N.charCodeAt(r._bufferIndex));
      else
        v(N);
    }
  }
  function v(T) {
    c = c(T);
  }
  function P(T) {
    te(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, g()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = T;
  }
  function w(T, N) {
    const V = N || {};
    return V.type = T, V.start = x(), s.events.push(["enter", V, s]), a.push(V), V;
  }
  function O(T) {
    const N = a.pop();
    return N.end = x(), s.events.push(["exit", N, s]), N;
  }
  function k(T, N) {
    j(T, N.from);
  }
  function S(T, N) {
    N.restore();
  }
  function $(T, N) {
    return V;
    function V(_, R, L) {
      let J, de, Se, m;
      return Array.isArray(_) ? (
        /* c8 ignore next 1 */
        G(_)
      ) : "tokenize" in _ ? (
        // Looks like a construct.
        G([
          /** @type {Construct} */
          _
        ])
      ) : z(_);
      function z(W) {
        return ee;
        function ee(q) {
          const ne = q !== null && W[q], Z = q !== null && W.null, be = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(ne) ? ne : ne ? [ne] : [],
            ...Array.isArray(Z) ? Z : Z ? [Z] : []
          ];
          return G(be)(q);
        }
      }
      function G(W) {
        return J = W, de = 0, W.length === 0 ? L : y(W[de]);
      }
      function y(W) {
        return ee;
        function ee(q) {
          return m = H(), Se = W, W.partial || (s.currentConstruct = W), W.name && s.parser.constructs.disable.null.includes(W.name) ? X() : W.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            N ? Object.assign(Object.create(s), N) : s,
            u,
            U,
            X
          )(q);
        }
      }
      function U(W) {
        return T(Se, m), R;
      }
      function X(W) {
        return m.restore(), ++de < J.length ? y(J[de]) : L;
      }
    }
  }
  function j(T, N) {
    T.resolveAll && !o.includes(T) && o.push(T), T.resolve && Je(s.events, N, s.events.length - N, T.resolve(s.events.slice(N), s)), T.resolveTo && (s.events = T.resolveTo(s.events, s));
  }
  function H() {
    const T = x(), N = s.previous, V = s.currentConstruct, _ = s.events.length, R = Array.from(a);
    return {
      from: _,
      restore: L
    };
    function L() {
      r = T, s.previous = N, s.currentConstruct = V, s.events.length = _, a = R, g();
    }
  }
  function g() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function gh(e, t) {
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
function yh(e, t) {
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
function bh(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Cp([hh, ...(e || {}).extensions || []])
    ),
    content: i(_p),
    defined: [],
    document: i(Mp),
    flow: i(Zd),
    lazy: {},
    string: i(nh),
    text: i(rh)
  };
  return r;
  function i(o) {
    return l;
    function l(a) {
      return mh(r, o, a);
    }
  }
}
function xh(e) {
  for (; !ca(e); )
    ;
  return e;
}
const Wo = /[\0\t\n\r]/g;
function Sh() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, l, a) {
    const u = [];
    let s, c, f, d, p;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), f = 0, t = "", n && (o.charCodeAt(0) === 65279 && f++, n = void 0); f < o.length; ) {
      if (Wo.lastIndex = f, s = Wo.exec(o), d = s && s.index !== void 0 ? s.index : o.length, p = o.charCodeAt(d), !s) {
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
const vh = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Eh(e) {
  return e.replace(vh, wh);
}
function wh(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return la(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Ci(n) || e;
}
const ga = {}.hasOwnProperty;
function kh(e, t, n) {
  return t && typeof t == "object" && (n = t, t = void 0), Ch(n)(xh(bh(n).document().write(Sh()(e, t, !0))));
}
function Ch(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(Ct),
      autolinkProtocol: H,
      autolinkEmail: H,
      atxHeading: o(at),
      blockQuote: o(Z),
      characterEscape: H,
      characterReference: H,
      codeFenced: o(be),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: o(be, l),
      codeText: o(B, l),
      codeTextData: H,
      data: H,
      codeFlowValue: H,
      definition: o(we),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: o(Re),
      hardBreakEscape: o(yn),
      hardBreakTrailing: o(yn),
      htmlFlow: o(bn, l),
      htmlFlowData: H,
      htmlText: o(bn, l),
      htmlTextData: H,
      image: o(Ze),
      label: l,
      link: o(Ct),
      listItem: o(lr),
      listItemValue: d,
      listOrdered: o(Vt, f),
      listUnordered: o(Vt),
      paragraph: o(ar),
      reference: y,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: o(at),
      strong: o(sr),
      thematicBreak: o(cr)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: k,
      autolink: u(),
      autolinkEmail: ne,
      autolinkProtocol: q,
      blockQuote: u(),
      characterEscapeValue: g,
      characterReferenceMarkerHexadecimal: X,
      characterReferenceMarkerNumeric: X,
      characterReferenceValue: W,
      characterReference: ee,
      codeFenced: u(E),
      codeFencedFence: h,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: x,
      codeFlowValue: g,
      codeIndented: u(v),
      codeText: u(R),
      codeTextData: g,
      data: g,
      definition: u(),
      definitionDestinationString: O,
      definitionLabelString: P,
      definitionTitleString: w,
      emphasis: u(),
      hardBreakEscape: u(N),
      hardBreakTrailing: u(N),
      htmlFlow: u(V),
      htmlFlowData: g,
      htmlText: u(_),
      htmlTextData: g,
      image: u(J),
      label: Se,
      labelText: de,
      lineEnding: T,
      link: u(L),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: U,
      resourceDestinationString: m,
      resourceTitleString: z,
      resource: G,
      setextHeading: u(j),
      setextHeadingLineSequence: $,
      setextHeadingText: S,
      strong: u(),
      thematicBreak: u()
    }
  };
  ya(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(I) {
    let F = {
      type: "root",
      children: []
    };
    const re = {
      stack: [F],
      tokenStack: [],
      config: t,
      enter: a,
      exit: s,
      buffer: l,
      resume: c,
      data: n
    }, M = [];
    let Y = -1;
    for (; ++Y < I.length; )
      if (I[Y][1].type === "listOrdered" || I[Y][1].type === "listUnordered")
        if (I[Y][0] === "enter")
          M.push(Y);
        else {
          const Q = M.pop();
          Y = i(I, Q, Y);
        }
    for (Y = -1; ++Y < I.length; ) {
      const Q = t[I[Y][0]];
      ga.call(Q, I[Y][1].type) && Q[I[Y][1].type].call(Object.assign({
        sliceSerialize: I[Y][2].sliceSerialize
      }, re), I[Y][1]);
    }
    if (re.tokenStack.length > 0) {
      const Q = re.tokenStack[re.tokenStack.length - 1];
      (Q[1] || Ho).call(re, void 0, Q[0]);
    }
    for (F.position = {
      start: st(I.length > 0 ? I[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: st(I.length > 0 ? I[I.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Y = -1; ++Y < t.transforms.length; )
      F = t.transforms[Y](F) || F;
    return F;
  }
  function i(I, F, re) {
    let M = F - 1, Y = -1, Q = !1, Te, Ie, qe, Ye;
    for (; ++M <= re; ) {
      const Ae = I[M];
      switch (Ae[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ae[0] === "enter" ? Y++ : Y--, Ye = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ae[0] === "enter" && (Te && !Ye && !Y && !qe && (qe = M), Ye = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ye = void 0;
      }
      if (!Y && Ae[0] === "enter" && Ae[1].type === "listItemPrefix" || Y === -1 && Ae[0] === "exit" && (Ae[1].type === "listUnordered" || Ae[1].type === "listOrdered")) {
        if (Te) {
          let et = M;
          for (Ie = void 0; et--; ) {
            const We = I[et];
            if (We[1].type === "lineEnding" || We[1].type === "lineEndingBlank") {
              if (We[0] === "exit") continue;
              Ie && (I[Ie][1].type = "lineEndingBlank", Q = !0), We[1].type = "lineEnding", Ie = et;
            } else if (!(We[1].type === "linePrefix" || We[1].type === "blockQuotePrefix" || We[1].type === "blockQuotePrefixWhitespace" || We[1].type === "blockQuoteMarker" || We[1].type === "listItemIndent")) break;
          }
          qe && (!Ie || qe < Ie) && (Te._spread = !0), Te.end = Object.assign({}, Ie ? I[Ie][1].start : Ae[1].end), I.splice(Ie || M, 0, ["exit", Te, Ae[2]]), M++, re++;
        }
        if (Ae[1].type === "listItemPrefix") {
          const et = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ae[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Te = et, I.splice(M, 0, ["enter", et, Ae[2]]), M++, re++, qe = void 0, Ye = !0;
        }
      }
    }
    return I[F][1]._spread = Q, re;
  }
  function o(I, F) {
    return re;
    function re(M) {
      a.call(this, I(M), M), F && F.call(this, M);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(I, F, re) {
    this.stack[this.stack.length - 1].children.push(I), this.stack.push(I), this.tokenStack.push([F, re || void 0]), I.position = {
      start: st(F.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(I) {
    return F;
    function F(re) {
      I && I.call(this, re), s.call(this, re);
    }
  }
  function s(I, F) {
    const re = this.stack.pop(), M = this.tokenStack.pop();
    if (M)
      M[0].type !== I.type && (F ? F.call(this, I, M[0]) : (M[1] || Ho).call(this, I, M[0]));
    else throw new Error("Cannot close `" + I.type + "` (" + rn({
      start: I.start,
      end: I.end
    }) + "): it’s not open");
    re.position.end = st(I.end);
  }
  function c() {
    return wp(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function d(I) {
    if (this.data.expectingFirstListItemValue) {
      const F = this.stack[this.stack.length - 2];
      F.start = Number.parseInt(this.sliceSerialize(I), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.lang = I;
  }
  function x() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.meta = I;
  }
  function h() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function E() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = I.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function v() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = I.replace(/(\r?\n|\r)$/g, "");
  }
  function P(I) {
    const F = this.resume(), re = this.stack[this.stack.length - 1];
    re.label = F, re.identifier = zt(this.sliceSerialize(I)).toLowerCase();
  }
  function w() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.title = I;
  }
  function O() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.url = I;
  }
  function k(I) {
    const F = this.stack[this.stack.length - 1];
    if (!F.depth) {
      const re = this.sliceSerialize(I).length;
      F.depth = re;
    }
  }
  function S() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function $(I) {
    const F = this.stack[this.stack.length - 1];
    F.depth = this.sliceSerialize(I).codePointAt(0) === 61 ? 1 : 2;
  }
  function j() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function H(I) {
    const re = this.stack[this.stack.length - 1].children;
    let M = re[re.length - 1];
    (!M || M.type !== "text") && (M = ur(), M.position = {
      start: st(I.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, re.push(M)), this.stack.push(M);
  }
  function g(I) {
    const F = this.stack.pop();
    F.value += this.sliceSerialize(I), F.position.end = st(I.end);
  }
  function T(I) {
    const F = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const re = F.children[F.children.length - 1];
      re.position.end = st(I.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(F.type) && (H.call(this, I), g.call(this, I));
  }
  function N() {
    this.data.atHardBreak = !0;
  }
  function V() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = I;
  }
  function _() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = I;
  }
  function R() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.value = I;
  }
  function L() {
    const I = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const F = this.data.referenceType || "shortcut";
      I.type += "Reference", I.referenceType = F, delete I.url, delete I.title;
    } else
      delete I.identifier, delete I.label;
    this.data.referenceType = void 0;
  }
  function J() {
    const I = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const F = this.data.referenceType || "shortcut";
      I.type += "Reference", I.referenceType = F, delete I.url, delete I.title;
    } else
      delete I.identifier, delete I.label;
    this.data.referenceType = void 0;
  }
  function de(I) {
    const F = this.sliceSerialize(I), re = this.stack[this.stack.length - 2];
    re.label = Eh(F), re.identifier = zt(F).toLowerCase();
  }
  function Se() {
    const I = this.stack[this.stack.length - 1], F = this.resume(), re = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, re.type === "link") {
      const M = I.children;
      re.children = M;
    } else
      re.alt = F;
  }
  function m() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.url = I;
  }
  function z() {
    const I = this.resume(), F = this.stack[this.stack.length - 1];
    F.title = I;
  }
  function G() {
    this.data.inReference = void 0;
  }
  function y() {
    this.data.referenceType = "collapsed";
  }
  function U(I) {
    const F = this.resume(), re = this.stack[this.stack.length - 1];
    re.label = F, re.identifier = zt(this.sliceSerialize(I)).toLowerCase(), this.data.referenceType = "full";
  }
  function X(I) {
    this.data.characterReferenceType = I.type;
  }
  function W(I) {
    const F = this.sliceSerialize(I), re = this.data.characterReferenceType;
    let M;
    re ? (M = la(F, re === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : M = Ci(F);
    const Y = this.stack[this.stack.length - 1];
    Y.value += M;
  }
  function ee(I) {
    const F = this.stack.pop();
    F.position.end = st(I.end);
  }
  function q(I) {
    g.call(this, I);
    const F = this.stack[this.stack.length - 1];
    F.url = this.sliceSerialize(I);
  }
  function ne(I) {
    g.call(this, I);
    const F = this.stack[this.stack.length - 1];
    F.url = "mailto:" + this.sliceSerialize(I);
  }
  function Z() {
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
  function B() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function we() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Re() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function at() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function yn() {
    return {
      type: "break"
    };
  }
  function bn() {
    return {
      type: "html",
      value: ""
    };
  }
  function Ze() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Ct() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function Vt(I) {
    return {
      type: "list",
      ordered: I.type === "listOrdered",
      start: null,
      spread: I._spread,
      children: []
    };
  }
  function lr(I) {
    return {
      type: "listItem",
      spread: I._spread,
      checked: null,
      children: []
    };
  }
  function ar() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function sr() {
    return {
      type: "strong",
      children: []
    };
  }
  function ur() {
    return {
      type: "text",
      value: ""
    };
  }
  function cr() {
    return {
      type: "thematicBreak"
    };
  }
}
function st(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function ya(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? ya(e, r) : Th(e, r);
  }
}
function Th(e, t) {
  let n;
  for (n in t)
    if (ga.call(t, n))
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
function Ho(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + rn({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + rn({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + rn({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Oh(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return kh(r, {
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
function Rh(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ah(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Ih(e, t) {
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
function Ph(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Nh(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function _h(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Ut(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
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
function Dh(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Mh(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function ba(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function $h(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ba(e, t);
  const i = { src: Ut(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function zh(e, t) {
  const n = { src: Ut(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Lh(e, t) {
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
function Bh(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return ba(e, t);
  const i = { href: Ut(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Fh(e, t) {
  const n = { href: Ut(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function jh(e, t, n) {
  const r = e.all(t), i = n ? Uh(n) : xa(t), o = {}, l = [];
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
function Uh(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = xa(n[r]);
  }
  return t;
}
function xa(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Vh(e, t) {
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
function Wh(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Hh(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function qh(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Yh(e, t) {
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
    }, a = vi(t.children[1]), u = Zl(t.children[t.children.length - 1]);
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
function Gh(e, t, n) {
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
function Kh(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const qo = 9, Yo = 32;
function Xh(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      Go(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(Go(t.slice(i), i > 0, !1)), o.join("");
}
function Go(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === qo || o === Yo; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === qo || o === Yo; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function Qh(e, t) {
  const n = { type: "text", value: Xh(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Jh(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Zh = {
  blockquote: Rh,
  break: Ah,
  code: Ih,
  delete: Ph,
  emphasis: Nh,
  footnoteReference: _h,
  heading: Dh,
  html: Mh,
  imageReference: $h,
  image: zh,
  inlineCode: Lh,
  linkReference: Bh,
  link: Fh,
  listItem: jh,
  list: Vh,
  paragraph: Wh,
  // @ts-expect-error: root is different, but hard to type.
  root: Hh,
  strong: qh,
  table: Yh,
  tableCell: Kh,
  tableRow: Gh,
  text: Qh,
  thematicBreak: Jh,
  toml: On,
  yaml: On,
  definition: On,
  footnoteDefinition: On
};
function On() {
}
const Sa = -1, ir = 0, ln = 1, jn = 2, Ri = 3, Ai = 4, Ii = 5, Pi = 6, va = 7, Ea = 8, wa = typeof self == "object" ? self : globalThis, Ko = (e, t) => {
  switch (e) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + e);
  }
  return new wa[e](t);
}, em = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, l] = t[i];
    switch (o) {
      case ir:
      case Sa:
        return n(l, i);
      case ln: {
        const a = n([], i);
        for (const u of l)
          a.push(r(u));
        return a;
      }
      case jn: {
        const a = n({}, i);
        for (const [u, s] of l)
          a[r(u)] = r(s);
        return a;
      }
      case Ri:
        return n(new Date(l), i);
      case Ai: {
        const { source: a, flags: u } = l;
        return n(new RegExp(a, u), i);
      }
      case Ii: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [u, s] of l)
          a.set(r(u), r(s));
        return a;
      }
      case Pi: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const u of l)
          a.add(r(u));
        return a;
      }
      case va: {
        const { name: a, message: u } = l;
        return n(
          typeof wa[a] == "function" ? Ko(a, u) : new Error(u),
          i
        );
      }
      case Ea:
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
    return n(Ko(o, l), i);
  };
  return r;
}, Xo = (e) => em(/* @__PURE__ */ new Map(), e)(0), yt = "", { toString: tm } = {}, { keys: nm } = Object, Kt = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [ir, t];
  const n = tm.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [ln, yt];
    case "Object":
      return [jn, yt];
    case "Date":
      return [Ri, yt];
    case "RegExp":
      return [Ai, yt];
    case "Map":
      return [Ii, yt];
    case "Set":
      return [Pi, yt];
    case "DataView":
      return [ln, n];
  }
  return n.includes("Array") ? [ln, n] : e instanceof Error ? [va, e.name || "Error"] : [jn, n];
}, Rn = ([e, t]) => e === ir && (t === "function" || t === "symbol"), rm = (e, t, n, r) => {
  const i = (l, a) => {
    const u = r.push(l) - 1;
    return n.set(a, u), u;
  }, o = (l) => {
    if (n.has(l))
      return n.get(l);
    let [a, u] = Kt(l);
    switch (a) {
      case ir: {
        let c = l;
        switch (u) {
          case "bigint":
            a = Ea, c = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            c = null;
            break;
          case "undefined":
            return i([Sa], l);
        }
        return i([a, c], l);
      }
      case ln: {
        if (u) {
          let d = l;
          return u === "DataView" ? d = new Uint8Array(l.buffer) : u === "ArrayBuffer" && (d = new Uint8Array(l)), i([u, [...d]], l);
        }
        const c = [], f = i([a, c], l);
        for (const d of l)
          c.push(o(d));
        return f;
      }
      case jn: {
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
        for (const d of nm(l))
          (e || !Rn(Kt(l[d]))) && c.push([o(d), o(l[d])]);
        return f;
      }
      case Ri:
        return i([a, isNaN(l.getTime()) ? yt : l.toISOString()], l);
      case Ai: {
        const { source: c, flags: f } = l;
        return i([a, { source: c, flags: f }], l);
      }
      case Ii: {
        const c = [], f = i([a, c], l);
        for (const [d, p] of l)
          (e || !(Rn(Kt(d)) || Rn(Kt(p)))) && c.push([o(d), o(p)]);
        return f;
      }
      case Pi: {
        const c = [], f = i([a, c], l);
        for (const d of l)
          (e || !Rn(Kt(d))) && c.push(o(d));
        return f;
      }
    }
    const { message: s } = l;
    return i([a, { name: u, message: s }], l);
  };
  return o;
}, Qo = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return rm(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Un = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Xo(Qo(e, t)) : structuredClone(e)
) : (e, t) => Xo(Qo(e, t));
function im(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function om(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function lm(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || im, r = e.options.footnoteBackLabel || om, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const s = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!s)
      continue;
    const c = e.all(s), f = String(s.identifier).toUpperCase(), d = Ut(f.toLowerCase());
    let p = 0;
    const x = [], h = e.footnoteCounts.get(f);
    for (; h !== void 0 && ++p <= h; ) {
      x.length > 0 && x.push({ type: "text", value: " " });
      let P = typeof n == "string" ? n : n(u, p);
      typeof P == "string" && (P = { type: "text", value: P }), x.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + d + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(P) ? P : [P]
      });
    }
    const E = c[c.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const P = E.children[E.children.length - 1];
      P && P.type === "text" ? P.value += " " : E.children.push({ type: "text", value: " " }), E.children.push(...x);
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
            ...Un(l),
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
const ka = (
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
      return cm;
    if (typeof e == "function")
      return or(e);
    if (typeof e == "object")
      return Array.isArray(e) ? am(e) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        sm(
          /** @type {Props} */
          e
        )
      );
    if (typeof e == "string")
      return um(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function am(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = ka(e[n]);
  return or(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function sm(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return or(n);
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
function um(e) {
  return or(t);
  function t(n) {
    return n && n.type === e;
  }
}
function or(e) {
  return t;
  function t(n, r, i) {
    return !!(fm(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function cm() {
  return !0;
}
function fm(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Ca = [], pm = !0, Jo = !1, dm = "skip";
function hm(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = ka(i), l = r ? -1 : 1;
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
      let p = Ca, x, h, E;
      if ((!t || o(u, s, c[c.length - 1] || void 0)) && (p = mm(n(u, c)), p[0] === Jo))
        return p;
      if ("children" in u && u.children) {
        const v = (
          /** @type {UnistParent} */
          u
        );
        if (v.children && p[0] !== dm)
          for (h = (r ? v.children.length : -1) + l, E = c.concat(v); h > -1 && h < v.children.length; ) {
            const P = v.children[h];
            if (x = a(P, h, E)(), x[0] === Jo)
              return x;
            h = typeof x[1] == "number" ? x[1] : h + l;
          }
      }
      return p;
    }
  }
}
function mm(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [pm, e] : e == null ? Ca : [e];
}
function Ta(e, t, n, r) {
  let i, o, l;
  typeof t == "function" ? (o = void 0, l = t, i = n) : (o = t, l = n, i = r), hm(e, o, a, i);
  function a(u, s) {
    const c = s[s.length - 1], f = c ? c.children.indexOf(u) : void 0;
    return l(u, f, c);
  }
}
const ni = {}.hasOwnProperty, gm = {};
function ym(e, t) {
  const n = t || gm, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...Zh, ...n.handlers }, a = {
    all: s,
    applyData: xm,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: l,
    one: u,
    options: n,
    patch: bm,
    wrap: vm
  };
  return Ta(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : i, d = String(c.identifier).toUpperCase();
      f.has(d) || f.set(d, c);
    }
  }), a;
  function u(c, f) {
    const d = c.type, p = a.handlers[d];
    if (ni.call(a.handlers, d) && p)
      return p(a, c, f);
    if (a.options.passThrough && a.options.passThrough.includes(d)) {
      if ("children" in c) {
        const { children: h, ...E } = c, v = Un(E);
        return v.children = a.all(c), v;
      }
      return Un(c);
    }
    return (a.options.unknownHandler || Sm)(a, c, f);
  }
  function s(c) {
    const f = [];
    if ("children" in c) {
      const d = c.children;
      let p = -1;
      for (; ++p < d.length; ) {
        const x = a.one(d[p], c);
        if (x) {
          if (p && d[p - 1].type === "break" && (!Array.isArray(x) && x.type === "text" && (x.value = Zo(x.value)), !Array.isArray(x) && x.type === "element")) {
            const h = x.children[0];
            h && h.type === "text" && (h.value = Zo(h.value));
          }
          Array.isArray(x) ? f.push(...x) : f.push(x);
        }
      }
    }
    return f;
  }
}
function bm(e, t) {
  e.position && (t.position = tp(e));
}
function xm(e, t) {
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
    n.type === "element" && o && Object.assign(n.properties, Un(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Sm(e, t) {
  const n = t.data || {}, r = "value" in t && !(ni.call(n, "hProperties") || ni.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function vm(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Zo(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function el(e, t) {
  const n = ym(e, t), r = n.one(e, void 0), i = lm(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Em(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      el(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      el(n, { file: r, ...e || t })
    );
  };
}
function tl(e) {
  if (e)
    throw e;
}
var Ir, nl;
function wm() {
  if (nl) return Ir;
  nl = 1;
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
  return Ir = function u() {
    var s, c, f, d, p, x, h = arguments[0], E = 1, v = arguments.length, P = !1;
    for (typeof h == "boolean" && (P = h, h = arguments[1] || {}, E = 2), (h == null || typeof h != "object" && typeof h != "function") && (h = {}); E < v; ++E)
      if (s = arguments[E], s != null)
        for (c in s)
          f = a(h, c), d = a(s, c), h !== d && (P && d && (o(d) || (p = i(d))) ? (p ? (p = !1, x = f && i(f) ? f : []) : x = f && o(f) ? f : {}, l(h, { name: c, newValue: u(P, x, d) })) : typeof d < "u" && l(h, { name: c, newValue: d }));
    return h;
  }, Ir;
}
var km = wm();
const Pr = /* @__PURE__ */ oi(km);
function ri(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Cm() {
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
      i = s, c ? Tm(c, a)(...s) : l(null, ...s);
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
function Tm(e, t) {
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
const Ke = { basename: Om, dirname: Rm, extname: Am, join: Im, sep: "/" };
function Om(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  gn(e);
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
function Rm(e) {
  if (gn(e), e.length === 0)
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
function Am(e) {
  gn(e);
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
function Im(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    gn(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Pm(n);
}
function Pm(e) {
  gn(e);
  const t = e.codePointAt(0) === 47;
  let n = Nm(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Nm(e, t) {
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
function gn(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const _m = { cwd: Dm };
function Dm() {
  return "/";
}
function ii(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Mm(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ii(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return $m(e);
}
function $m(e) {
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
const Nr = (
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
class Oa {
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
    t ? ii(t) ? n = { path: t } : typeof t == "string" || zm(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : _m.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Nr.length; ) {
      const o = Nr[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      Nr.includes(i) || (this[i] = n[i]);
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
    Dr(t, "basename"), _r(t, "basename"), this.path = Ke.join(this.dirname || "", t);
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
    rl(this.basename, "dirname"), this.path = Ke.join(t || "", this.basename);
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
    if (_r(t, "extname"), rl(this.dirname, "extname"), t) {
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
    ii(t) && (t = Mm(t)), Dr(t, "path"), this.path !== t && this.history.push(t);
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
    Dr(t, "stem"), _r(t, "stem"), this.path = Ke.join(this.dirname || "", t + (this.extname || ""));
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
    const i = new Oe(
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
function _r(e, t) {
  if (e && e.includes(Ke.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ke.sep + "`"
    );
}
function Dr(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function rl(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function zm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Lm = (
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
), Bm = {}.hasOwnProperty;
class Ni extends Lm {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Cm();
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
    return t.data(Pr(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (zr("data", this.frozen), this.namespace[t] = n, this) : Bm.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (zr("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const n = An(t), r = this.parser || this.Parser;
    return Mr("parse", r), r(String(n), n);
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
    return this.freeze(), Mr("process", this.parser || this.Parser), $r("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, l) {
      const a = An(t), u = (
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
        Um(x) ? d.value = x : d.result = x, s(
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
    return this.freeze(), Mr("processSync", this.parser || this.Parser), $r("processSync", this.compiler || this.Compiler), this.process(t, i), ol("processSync", "process", n), r;
    function i(o, l) {
      n = !0, tl(o), r = l;
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
    il(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, a) {
      const u = An(n);
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
    return this.run(t, n, o), ol("runSync", "run", r), i;
    function o(l, a) {
      tl(l), i = a, r = !0;
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
    const r = An(n), i = this.compiler || this.Compiler;
    return $r("stringify", i), il(t), i(t, r);
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
      a(s.plugins), s.settings && (i.settings = Pr(!0, i.settings, s.settings));
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
        ri(h) && ri(p) && (p = Pr(!0, h, p)), r[d] = [s, p, ...x];
      }
    }
  }
}
const Fm = new Ni().freeze();
function Mr(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function $r(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function zr(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function il(e) {
  if (!ri(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function ol(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function An(e) {
  return jm(e) ? e : new Oa(e);
}
function jm(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Um(e) {
  return typeof e == "string" || Vm(e);
}
function Vm(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Wm = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", ll = [], al = { allowDangerousHtml: !0 }, Hm = /^(https?|ircs?|mailto|xmpp)$/i, qm = [
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
function Ym(e) {
  const t = Gm(e), n = Km(e);
  return Xm(t.runSync(t.parse(n), n), e);
}
function Gm(e) {
  const t = e.rehypePlugins || ll, n = e.remarkPlugins || ll, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...al } : al;
  return Fm().use(Oh).use(n).use(Em, r).use(t);
}
function Km(e) {
  const t = e.children || "", n = new Oa();
  return typeof t == "string" && (n.value = t), n;
}
function Xm(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, l = t.skipHtml, a = t.unwrapDisallowed, u = t.urlTransform || Qm;
  for (const c of qm)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + Wm + c.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), Ta(e, s), lp(e, {
    Fragment: Lr,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: C,
    jsxs: ce,
    passKeys: !0,
    passNode: !0
  });
  function s(c, f, d) {
    if (c.type === "raw" && d && typeof f == "number")
      return l ? d.children.splice(f, 1) : d.children[f] = { type: "text", value: c.value }, f;
    if (c.type === "element") {
      let p;
      for (p in Or)
        if (Object.hasOwn(Or, p) && Object.hasOwn(c.properties, p)) {
          const x = c.properties[p], h = Or[p];
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
function Qm(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Hm.test(e.slice(0, t)) ? e : ""
  );
}
const Jm = {
  column: "primary.main",
  customColumn: "info.main",
  operator: "error.main",
  unknownOperator: "text.disabled",
  logical: "secondary.main",
  paren: "warning.main",
  value: "text.primary"
}, sl = {
  column: 400,
  customColumn: 400,
  operator: 400,
  unknownOperator: 400,
  logical: 400,
  paren: 400,
  value: 400
}, Zm = 'Type a query like: column operator value — e.g. name == "John"', eg = ({ open: e, onClose: t, helpContent: n, sx: r = {} }) => {
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
    gotItButton: P,
    colorLegendItem: w,
    colorSwatch: O,
    warningText: k
  } = r;
  return /* @__PURE__ */ ce(
    Wa,
    {
      open: e,
      onClose: t,
      maxWidth: "md",
      fullWidth: !0,
      scroll: "paper",
      sx: i,
      children: [
        /* @__PURE__ */ ce(Ha, { sx: { pr: 6, ...o }, children: [
          "How to Use the Query Search",
          /* @__PURE__ */ C(
            vt,
            {
              onClick: t,
              size: "small",
              sx: { position: "absolute", right: 12, top: 12, ...l },
              "aria-label": "close",
              children: /* @__PURE__ */ C(Hl, { fontSize: "small" })
            }
          )
        ] }),
        /* @__PURE__ */ C(qa, { dividers: !0, sx: a, children: n ? typeof n == "string" ? /* @__PURE__ */ C(
          Ym,
          {
            components: {
              h1: ({ children: S }) => /* @__PURE__ */ C(ue, { variant: "h5", gutterBottom: !0, sx: u, children: S }),
              h2: ({ children: S }) => /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: S }),
              h3: ({ children: S }) => /* @__PURE__ */ C(
                ue,
                {
                  variant: "subtitle1",
                  gutterBottom: !0,
                  sx: { fontWeight: 600, ...u },
                  children: S
                }
              ),
              p: ({ children: S }) => /* @__PURE__ */ C(ue, { variant: "body2", paragraph: !0, sx: s, children: S }),
              ul: ({ children: S }) => /* @__PURE__ */ C(oe, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: S }),
              ol: ({ children: S }) => /* @__PURE__ */ C(oe, { component: "ol", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: S }),
              li: ({ children: S }) => /* @__PURE__ */ C(
                ue,
                {
                  component: "li",
                  variant: "body2",
                  gutterBottom: !0,
                  sx: x,
                  children: S
                }
              ),
              code: ({ inline: S, children: $ }) => S ? /* @__PURE__ */ C(
                ht,
                {
                  label: $,
                  size: "small",
                  sx: { fontFamily: "monospace", ...h }
                }
              ) : /* @__PURE__ */ C(
                oe,
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
                  children: $
                }
              ),
              pre: ({ children: S }) => /* @__PURE__ */ C(Lr, { children: S }),
              hr: () => /* @__PURE__ */ C(Tt, { sx: { my: 2, ...E } }),
              strong: ({ children: S }) => /* @__PURE__ */ C("strong", { children: S }),
              a: ({ href: S, children: $ }) => /* @__PURE__ */ C(
                ue,
                {
                  component: "a",
                  href: S,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  variant: "body2",
                  sx: { color: "primary.main" },
                  children: $
                }
              ),
              blockquote: ({ children: S }) => /* @__PURE__ */ C(
                oe,
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
        ) : n : /* @__PURE__ */ ce(Lr, { children: [
          /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: "Overview" }),
          /* @__PURE__ */ ce(ue, { variant: "body2", paragraph: !0, sx: s, children: [
            "The query search box lets you filter data using a simple, readable query language. Type your conditions directly into the search field and press ",
            /* @__PURE__ */ C("strong", { children: "Apply" }),
            " to run the query. Suggestions will appear as you type to guide you through valid columns, operators, and logical connectors."
          ] }),
          /* @__PURE__ */ C(Tt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: "Basic Syntax" }),
          /* @__PURE__ */ C(ue, { variant: "body2", paragraph: !0, sx: s, children: "Every condition follows this pattern:" }),
          /* @__PURE__ */ C(
            oe,
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
          /* @__PURE__ */ C(ue, { variant: "body2", paragraph: !0, sx: s, children: "Each part is separated by a single space:" }),
          /* @__PURE__ */ ce(oe, { component: "ul", sx: { mt: 0, mb: 2, pl: 3, ...p }, children: [
            /* @__PURE__ */ ce(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ C("strong", { children: "column" }),
                  " — the field you want to filter on (e.g.",
                  " ",
                  /* @__PURE__ */ C(
                    ht,
                    {
                      label: "name",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ C(
                    ht,
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
            /* @__PURE__ */ ce(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ C("strong", { children: "operator" }),
                  " — the comparison to apply (e.g.",
                  " ",
                  /* @__PURE__ */ C(
                    ht,
                    {
                      label: "==",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ C(
                    ht,
                    {
                      label: "contains",
                      size: "small",
                      sx: { fontFamily: "monospace", ...h }
                    }
                  ),
                  ",",
                  " ",
                  /* @__PURE__ */ C(
                    ht,
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
            /* @__PURE__ */ ce(
              ue,
              {
                component: "li",
                variant: "body2",
                gutterBottom: !0,
                sx: x,
                children: [
                  /* @__PURE__ */ C("strong", { children: "value" }),
                  " — what you are comparing against. Wrap values that contain spaces in double quotes:",
                  " ",
                  /* @__PURE__ */ C(
                    ht,
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
          /* @__PURE__ */ C(Tt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: "Combining Conditions" }),
          /* @__PURE__ */ ce(ue, { variant: "body2", paragraph: !0, sx: s, children: [
            "Use ",
            /* @__PURE__ */ C("strong", { children: "AND" }),
            " or ",
            /* @__PURE__ */ C("strong", { children: "OR" }),
            " (uppercase) to join multiple conditions:"
          ] }),
          /* @__PURE__ */ C(
            oe,
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
          /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: "Grouping with Parentheses" }),
          /* @__PURE__ */ ce(ue, { variant: "body2", paragraph: !0, sx: s, children: [
            "You can mix ",
            /* @__PURE__ */ C("strong", { children: "AND" }),
            " and ",
            /* @__PURE__ */ C("strong", { children: "OR" }),
            " in the same query by using parentheses ",
            /* @__PURE__ */ C("strong", { children: "( )" }),
            " to group conditions:"
          ] }),
          /* @__PURE__ */ C(
            oe,
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
          /* @__PURE__ */ ce(ue, { variant: "body2", paragraph: !0, sx: s, children: [
            "Without parentheses, ",
            /* @__PURE__ */ C("strong", { children: "AND" }),
            " binds tighter than",
            " ",
            /* @__PURE__ */ C("strong", { children: "OR" }),
            ":"
          ] }),
          /* @__PURE__ */ C(
            oe,
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
          /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: "NOT (Negation)" }),
          /* @__PURE__ */ ce(ue, { variant: "body2", paragraph: !0, sx: s, children: [
            "Prefix a group with ",
            /* @__PURE__ */ C("strong", { children: "NOT" }),
            " to negate it:"
          ] }),
          /* @__PURE__ */ C(
            oe,
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
          /* @__PURE__ */ C(Tt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: "Examples" }),
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
          ].map(({ label: S, code: $ }) => /* @__PURE__ */ ce(oe, { mb: 1.5, children: [
            /* @__PURE__ */ C(
              ue,
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
            /* @__PURE__ */ C(
              oe,
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
                children: $
              }
            )
          ] }, S)),
          /* @__PURE__ */ C(Tt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: "Tips" }),
          /* @__PURE__ */ C(oe, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...p }, children: [
            "Start typing a column name and select it from the suggestion list.",
            "After picking a column, the suggestion list will show valid operators for that column.",
            "After entering a value, AND / OR will appear in the suggestion list.",
            "Use parentheses ( ) to group conditions when mixing AND and OR.",
            "Prefix a group with NOT to negate it — e.g. NOT (status == deleted).",
            'Wrap multi-word values in double quotes — e.g. "John Doe".',
            "AND has higher precedence than OR. Use parentheses to override.",
            "Syntax errors are highlighted in the text box. Hover the input to see the specific error.",
            "You can also build queries visually using the filter panel (click the tune icon)."
          ].map((S) => /* @__PURE__ */ C(
            ue,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: x,
              children: S
            },
            S
          )) }),
          /* @__PURE__ */ C(Tt, { sx: { my: 2, ...E } }),
          /* @__PURE__ */ C(ue, { variant: "h6", gutterBottom: !0, sx: u, children: "Syntax Highlighting" }),
          /* @__PURE__ */ C(ue, { variant: "body2", paragraph: !0, sx: s, children: "As you type, each part of the query is colorized to help you spot mistakes at a glance:" }),
          /* @__PURE__ */ C(oe, { component: "ul", sx: { mt: 0, mb: 1, pl: 3, ...p }, children: [
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
          ].map(({ color: S, label: $, desc: j }) => /* @__PURE__ */ ce(
            ue,
            {
              component: "li",
              variant: "body2",
              gutterBottom: !0,
              sx: w,
              children: [
                /* @__PURE__ */ C(
                  oe,
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
                      ...O
                    }
                  }
                ),
                /* @__PURE__ */ C(oe, { component: "strong", sx: { color: S }, children: $ }),
                " ",
                "— ",
                j
              ]
            },
            $
          )) })
        ] }) }),
        /* @__PURE__ */ C(Ya, { sx: v, children: /* @__PURE__ */ C(
          xt,
          {
            onClick: t,
            variant: "contained",
            disableElevation: !0,
            sx: P,
            children: "Got it"
          }
        ) })
      ]
    }
  );
}, tg = ({
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
  maxLength: c,
  externalInputRef: f,
  sx: d = {},
  ...p
}) => {
  const {
    root: x,
    inputRow: h,
    inputWrapper: E,
    highlightOverlay: v,
    input: P,
    applyButton: w,
    helpButton: O,
    helpTooltip: k,
    adornmentBox: S,
    errorTooltip: $,
    hintTooltip: j,
    popper: H,
    suggestionsBox: g,
    suggestionsList: T,
    suggestionItem: N,
    suggestionText: V,
    tokenColors: _,
    tokenFontWeights: R,
    helpModal: L
  } = d, J = Mt(
    () => ({ ...Jm, ..._ || {} }),
    [_]
  ), de = Mt(
    () => ({
      ...sl,
      ...R || {}
    }),
    [R]
  ), Se = tr(), m = (M) => {
    if (!M || M === "inherit") return "inherit";
    const Y = M.split(".");
    let Q = Se.palette;
    for (const Te of Y)
      if (Q = Q == null ? void 0 : Q[Te], Q === void 0) return M;
    return typeof Q == "string" ? Q : M;
  }, z = Mt(() => {
    const M = {};
    for (const Y of Object.keys(J))
      M[Y] = m(J[Y]);
    return M;
  }, [J, Se]), [G, y] = Me(null), [U, X] = Me([]), [W, ee] = Me([]), [q, ne] = Me(""), [Z, be] = Me(!0), [B, we] = Me(null), [Re, at] = Me(!1), [yn, bn] = Me(0), Ze = In(), Ct = In(null), Vt = In(null);
  bt(() => {
    f && (typeof f == "function" ? f(Ze.current) : f.current = Ze.current);
  }), bt(() => {
    o != null && ne(o);
  }, [o]), bt(() => {
    const M = Object.keys(e), Y = Array.from(
      /* @__PURE__ */ new Set([
        ...M.flatMap((Fe) => {
          var fr;
          return ((fr = e[Fe]) == null ? void 0 : fr.operators) || [];
        }),
        ...l || []
      ])
    ), Q = q.trim().split(/\s+/).filter(Boolean), Te = Q[Q.length - 1] || "", Ie = Q[Q.length - 2] || "", qe = Q.length >= 2 ? `${Q[Q.length - 2]} ${Q[Q.length - 1]}` : "", Ye = Q.length >= 3 ? `${Q[Q.length - 3]} ${Q[Q.length - 2]} ${Q[Q.length - 1]}` : "", Ae = Y.some(
      (Fe) => Fe.toUpperCase() === Ye.toUpperCase()
    ) || Y.some(
      (Fe) => Fe.toUpperCase() === qe.toUpperCase()
    ), et = Ye && Y.some(
      (Fe) => Fe.toUpperCase() === Ye.toUpperCase()
    ) ? Q[Q.length - 4] || "" : qe && Y.some(
      (Fe) => Fe.toUpperCase() === qe.toUpperCase()
    ) && Q[Q.length - 3] || "", We = !Ie || n.includes(Ie);
    let He;
    if (!q.trim() || n.includes(Te) || Te === "(")
      He = M;
    else if (Ae) {
      const Fe = Y.find(
        (Wt) => Wt.toUpperCase() === Ye.toUpperCase()
      ) || Y.find(
        (Wt) => Wt.toUpperCase() === qe.toUpperCase()
      );
      Fe && ["IS NULL", "IS NOT NULL", "is_null", "is_not_null"].some((Wt) => Wt.toUpperCase() === Fe.toUpperCase()) ? He = n : He = [];
    } else M.includes(Te) ? He = e[Te].operators : We ? He = Y : M.includes(Ie) && e[Ie].operators.includes(Te) ? He = [] : Y.includes(Te) ? He = [] : (et && M.includes(et), He = n);
    X(He), ee(He);
    const _i = Tf(q);
    be(_i.isValid), we(_i.error);
  }, [q, e, n, l]), bt(() => {
    const M = Vt.current;
    if (!M || typeof ResizeObserver > "u") return;
    const Y = () => bn(M.offsetWidth || 0);
    Y();
    const Q = new ResizeObserver(Y);
    return Q.observe(M), () => Q.disconnect();
  }, [u, q, Z]);
  const lr = (M) => {
    let Y = M.target.value;
    c && Y.length > c && (Y = Y.slice(0, c)), ne(Y), ee(
      U.filter(
        (Q) => Q.toLowerCase().includes(Y.toLowerCase())
      )
    ), y(Ze.current);
  }, ar = (M) => {
    M.key === "Enter" && q && Z && (M.preventDefault(), y(null), r(q));
  }, sr = (M) => {
    Ct.current && (Ct.current.scrollLeft = M.target.scrollLeft);
  }, ur = Mt(
    () => Of(
      q,
      Object.keys(e || {}),
      Array.from(
        /* @__PURE__ */ new Set([
          ...Object.values(e || {}).flatMap(
            (M) => (M == null ? void 0 : M.operators) || []
          ),
          ...l || []
        ])
      ),
      n || []
    ),
    [q, e, l, n]
  ), cr = (M) => {
    ne((Y) => {
      const Q = Y.trimEnd();
      return Q ? `${Q} ${M} ` : `${M} `;
    }), t == null || t(M), setTimeout(() => {
      const Y = Ze.current;
      if (Y) {
        const Q = Y.value.length;
        Y.setSelectionRange(Q, Q), Y.focus();
      }
    }, 0);
  }, I = !!q && !Z && !!B, F = I ? B : q ? "" : Zm, re = I ? void 0 : q ? !1 : void 0;
  return /* @__PURE__ */ ce(oe, { width: "100%", sx: x, children: [
    /* @__PURE__ */ C(oe, { display: "flex", sx: h, children: /* @__PURE__ */ ce(
      oe,
      {
        sx: { position: "relative", flex: 1, minWidth: 0, ...E },
        children: [
          /* @__PURE__ */ C(
            oe,
            {
              ref: Ct,
              "aria-hidden": "true",
              sx: {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                // Stop short of the endAdornment block (help icon + Apply button
                // + any caller-provided adornment) so colored tokens never paint
                // behind the buttons when the query overflows horizontally.
                right: `${yn}px`,
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
                ...v
              },
              children: ur.map(
                (M, Y) => M.type === "whitespace" ? /* @__PURE__ */ C("span", { children: M.text }, Y) : /* @__PURE__ */ C(
                  "span",
                  {
                    style: {
                      color: z[M.type] || "inherit",
                      fontWeight: de[M.type] ?? sl[M.type] ?? 400
                    },
                    children: M.text
                  },
                  Y
                )
              )
            }
          ),
          /* @__PURE__ */ C(
            an,
            {
              title: F,
              open: re,
              placement: "top-start",
              arrow: !0,
              componentsProps: {
                tooltip: {
                  sx: I ? {
                    bgcolor: "error.main",
                    color: "error.contrastText",
                    fontSize: "0.75rem",
                    maxWidth: 360,
                    ...$
                  } : {
                    bgcolor: "info.dark",
                    color: "common.white",
                    fontSize: "0.75rem",
                    maxWidth: 360,
                    ...j
                  }
                },
                arrow: {
                  sx: I ? {
                    color: "error.main",
                    ...($ == null ? void 0 : $.bgcolor) && {
                      color: $.bgcolor
                    }
                  } : {
                    color: "info.dark",
                    ...(j == null ? void 0 : j.bgcolor) && {
                      color: j.bgcolor
                    }
                  }
                }
              },
              children: /* @__PURE__ */ C(
                La,
                {
                  ...p,
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
                      caretColor: (M) => M.palette.text.primary,
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
                    ...P
                  },
                  inputRef: Ze,
                  inputProps: { onScroll: sr, onKeyDown: ar },
                  value: q,
                  onChange: lr,
                  onFocus: () => y(Ze.current),
                  onBlur: () => setTimeout(() => y(null), 100),
                  error: q ? !Z : !1,
                  endAdornment: /* @__PURE__ */ C(Ba, { position: "end", children: /* @__PURE__ */ ce(
                    oe,
                    {
                      ref: Vt,
                      sx: {
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        ...S
                      },
                      children: [
                        /* @__PURE__ */ C(
                          vt,
                          {
                            onClick: () => {
                              var M;
                              ne(""), i == null || i(), (M = Ze.current) == null || M.focus();
                            },
                            "aria-label": "Clear query",
                            size: "small",
                            onMouseDown: (M) => M.preventDefault(),
                            sx: { visibility: q ? "visible" : "hidden" },
                            children: /* @__PURE__ */ C(Hl, { fontSize: "small" })
                          }
                        ),
                        /* @__PURE__ */ C(
                          an,
                          {
                            title: "Query syntax help",
                            placement: "top",
                            sx: k,
                            children: /* @__PURE__ */ C(
                              vt,
                              {
                                onClick: () => at(!0),
                                "aria-label": "Query syntax help",
                                size: "small",
                                edge: u ? !1 : "end",
                                onMouseDown: (M) => M.preventDefault(),
                                sx: O,
                                children: /* @__PURE__ */ C(Pf, { fontSize: "small" })
                              }
                            )
                          }
                        ),
                        u,
                        /* @__PURE__ */ C(
                          xt,
                          {
                            disabled: !q || !Z,
                            onClick: () => r(q),
                            onMouseDown: (M) => M.preventDefault(),
                            size: "small",
                            sx: w,
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
    /* @__PURE__ */ C(
      Fa,
      {
        open: !!G,
        anchorEl: G,
        placement: "bottom-start",
        sx: { zIndex: 1300, ...H },
        children: /* @__PURE__ */ C(
          oe,
          {
            sx: {
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              width: "300px",
              zIndex: 1300,
              ...g
            },
            children: /* @__PURE__ */ C(ja, { dense: !0, sx: T, children: W.map((M, Y) => /* @__PURE__ */ C(Ua, { disablePadding: !0, children: /* @__PURE__ */ C(
              Va,
              {
                onMouseDown: (Q) => Q.preventDefault(),
                onClick: () => cr(M),
                sx: N,
                children: /* @__PURE__ */ C(ue, { variant: "body2", sx: V, children: M })
              }
            ) }, Y)) })
          }
        )
      }
    ),
    /* @__PURE__ */ C(
      eg,
      {
        open: Re,
        onClose: () => at(!1),
        helpContent: s,
        sx: L
      }
    )
  ] });
}, ul = "#007aff";
function ug({
  columnsOperator: e = {},
  defaultOperators: t = [],
  relatedOperators: n = [],
  handleApply: r,
  placeholder: i = "",
  helpContent: o,
  maxLength: l,
  inputRef: a,
  sx: u = {}
}) {
  const {
    root: s,
    textBoxContainer: c,
    textBox: f,
    iconButton: d,
    dialog: p,
    dialogPaper: x,
    header: h,
    body: E,
    title: v,
    queryForm: P,
    // Legacy aliases from when this was a Popover
    popover: w,
    popoverPaper: O,
    popoverContent: k
  } = u, [S, $] = Me(!1), [j, H] = Me(null), [g, T] = Me(e);
  bt(() => {
    T(e);
  }, [e]);
  const N = Mt(
    () => Array.from(
      /* @__PURE__ */ new Set([
        ...Object.values(e).flatMap((y) => (y == null ? void 0 : y.operators) || []),
        ...n || []
      ])
    ),
    [e, n]
  ), V = () => {
    $(!0);
  }, _ = () => {
    $(!1);
  }, R = (y) => {
    const U = Fl(y), X = {};
    U.forEach((W) => {
      W.column && !g[W.column] && !X[W.column] && (X[W.column] = { operators: N });
    }), Object.keys(X).length && T((W) => ({ ...W, ...X }));
  }, L = (y) => {
    const U = Ef(y, N);
    R(U), H(U), r && r(U);
  }, J = (y) => {
    R(y), H(y), _(), r && r(y);
  }, de = () => {
    H(null), r && r(null);
  }, [Se, m] = Me(null), z = In(null), G = Mt(
    () => j ? jl(j) : "",
    [j]
  );
  return /* @__PURE__ */ ce(oe, { sx: s, children: [
    /* @__PURE__ */ C(
      oe,
      {
        display: "flex",
        alignItems: "center",
        marginBottom: "16px",
        width: "100%",
        sx: c,
        children: /* @__PURE__ */ C(
          tg,
          {
            columnsOperator: g,
            defaultOperators: t,
            onApplyClicked: L,
            onClear: de,
            queryText: G,
            relatedOperators: n,
            placeholder: i,
            helpContent: o,
            maxLength: l,
            externalInputRef: a,
            sx: f,
            endAdornment: /* @__PURE__ */ C(
              vt,
              {
                onClick: V,
                size: "small",
                onMouseDown: (y) => y.preventDefault(),
                sx: d,
                children: /* @__PURE__ */ C(Sf, { fontSize: "small" })
              }
            )
          }
        )
      }
    ),
    /* @__PURE__ */ ce(
      Bl,
      {
        open: S,
        onClose: _,
        maxWidth: "lg",
        fullWidth: !0,
        slotProps: {
          paper: {
            sx: {
              borderRadius: "10px",
              overflow: "hidden",
              ...x,
              ...O
            }
          }
        },
        sx: { ...p, ...w },
        children: [
          /* @__PURE__ */ ce(
            oe,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1,
                height: 52,
                pl: 2.5,
                pr: 1.5,
                bgcolor: ul,
                color: "#fff",
                ...h
              },
              children: [
                /* @__PURE__ */ C(
                  ue,
                  {
                    component: "h2",
                    fontSize: 17,
                    fontWeight: 500,
                    flex: 1,
                    sx: v,
                    children: "Query Builder"
                  }
                ),
                /* @__PURE__ */ C(an, { title: "Close", children: /* @__PURE__ */ C(
                  vt,
                  {
                    size: "small",
                    "aria-label": "Close",
                    onClick: _,
                    sx: { color: "#fff" },
                    children: /* @__PURE__ */ C(cl, { sx: { fontSize: 18 } })
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ C(
            oe,
            {
              sx: {
                p: 2,
                overflow: "auto",
                bgcolor: "background.default",
                maxHeight: "min(60vh, 560px)",
                ...E,
                ...k
              },
              children: /* @__PURE__ */ C(
                If,
                {
                  columnsOperator: g,
                  handleApplyFilters: J,
                  onCancel: _,
                  onGroupChange: m,
                  applyRef: z,
                  defaultOperators: t,
                  groupTree: j,
                  sx: P
                }
              )
            }
          ),
          /* @__PURE__ */ ce(
            oe,
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
                /* @__PURE__ */ C(
                  xt,
                  {
                    size: "small",
                    startIcon: /* @__PURE__ */ C(_a, { sx: { fontSize: 16 } }),
                    onClick: () => J(null),
                    sx: { textTransform: "none", fontSize: 13 },
                    children: "Reset"
                  }
                ),
                /* @__PURE__ */ C(oe, { sx: { flex: 1 } }),
                /* @__PURE__ */ C(
                  xt,
                  {
                    variant: "outlined",
                    size: "small",
                    onClick: _,
                    sx: { textTransform: "none", fontSize: 13 },
                    children: "Cancel"
                  }
                ),
                /* @__PURE__ */ C(
                  xt,
                  {
                    variant: "contained",
                    size: "small",
                    startIcon: /* @__PURE__ */ C(Da, { sx: { fontSize: 16 } }),
                    onClick: () => {
                      z.current && z.current();
                    },
                    sx: {
                      textTransform: "none",
                      fontSize: 13,
                      bgcolor: ul,
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
  ug as default
};
