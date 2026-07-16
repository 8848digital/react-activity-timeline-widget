import * as a from "react";
import Ge, { createContext as Ce, useState as H, useRef as ee, useEffect as te, useCallback as Q, useContext as Je, useMemo as I } from "react";
import Ke from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './index.css';var re = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Xe() {
  if (xe) return ae;
  xe = 1;
  var t = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function s(i, r, n) {
    var m = null;
    if (n !== void 0 && (m = "" + n), r.key !== void 0 && (m = "" + r.key), "key" in r) {
      n = {};
      for (var o in r)
        o !== "key" && (n[o] = r[o]);
    } else n = r;
    return r = n.ref, {
      $$typeof: t,
      type: i,
      key: m,
      ref: r !== void 0 ? r : null,
      props: n
    };
  }
  return ae.Fragment = l, ae.jsx = s, ae.jsxs = s, ae;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function Qe() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === T ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case x:
          return "Fragment";
        case U:
          return "Profiler";
        case _:
          return "StrictMode";
        case E:
          return "Suspense";
        case W:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case j:
            return "Portal";
          case P:
            return c.displayName || "Context";
          case Y:
            return (c._context.displayName || "Context") + ".Consumer";
          case $:
            var f = c.render;
            return c = c.displayName, c || (c = f.displayName || f.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case G:
            return f = c.displayName || null, f !== null ? f : t(c.type) || "Memo";
          case B:
            f = c._payload, c = c._init;
            try {
              return t(c(f));
            } catch {
            }
        }
      return null;
    }
    function l(c) {
      return "" + c;
    }
    function s(c) {
      try {
        l(c);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var w = f.error, M = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return w.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), l(c);
      }
    }
    function i(c) {
      if (c === x) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === B)
        return "<...>";
      try {
        var f = t(c);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var c = Z.A;
      return c === null ? null : c.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function m(c) {
      if (A.call(c, "key")) {
        var f = Object.getOwnPropertyDescriptor(c, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function o(c, f) {
      function w() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      w.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: w,
        configurable: !0
      });
    }
    function d() {
      var c = t(this.type);
      return N[c] || (N[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function h(c, f, w, M, ne, de) {
      var C = w.ref;
      return c = {
        $$typeof: u,
        type: c,
        key: f,
        props: w,
        _owner: M
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function p(c, f, w, M, ne, de) {
      var C = f.children;
      if (C !== void 0)
        if (M)
          if (R(C)) {
            for (M = 0; M < C.length; M++)
              g(C[M]);
            Object.freeze && Object.freeze(C);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else g(C);
      if (A.call(f, "key")) {
        C = t(c);
        var X = Object.keys(f).filter(function(qe) {
          return qe !== "key";
        });
        M = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", D[C + M] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          C,
          X,
          C
        ), D[C + M] = !0);
      }
      if (C = null, w !== void 0 && (s(w), C = "" + w), m(f) && (s(f.key), C = "" + f.key), "key" in f) {
        w = {};
        for (var me in f)
          me !== "key" && (w[me] = f[me]);
      } else w = f;
      return C && o(
        w,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), h(
        c,
        C,
        w,
        r(),
        ne,
        de
      );
    }
    function g(c) {
      v(c) ? c._store && (c._store.validated = 1) : typeof c == "object" && c !== null && c.$$typeof === B && (c._payload.status === "fulfilled" ? v(c._payload.value) && c._payload.value._store && (c._payload.value._store.validated = 1) : c._store && (c._store.validated = 1));
    }
    function v(c) {
      return typeof c == "object" && c !== null && c.$$typeof === u;
    }
    var y = Ge, u = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), Y = Symbol.for("react.consumer"), P = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), Z = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, R = Array.isArray, b = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(c) {
        return c();
      }
    };
    var F, N = {}, K = y.react_stack_bottom_frame.bind(
      y,
      n
    )(), se = b(i(n)), D = {};
    le.Fragment = x, le.jsx = function(c, f, w) {
      var M = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return p(
        c,
        f,
        w,
        !1,
        M ? Error("react-stack-top-frame") : K,
        M ? b(i(c)) : se
      );
    }, le.jsxs = function(c, f, w) {
      var M = 1e4 > Z.recentlyCreatedOwnerStacks++;
      return p(
        c,
        f,
        w,
        !0,
        M ? Error("react-stack-top-frame") : K,
        M ? b(i(c)) : se
      );
    };
  })()), le;
}
var ge;
function et() {
  return ge || (ge = 1, process.env.NODE_ENV === "production" ? re.exports = Xe() : re.exports = Qe()), re.exports;
}
var e = et();
const tt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z" }))
  ]
]), at = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm60-80v56a12,12,0,0,1-24,0V143.32a12,12,0,0,1-9.37-22l16-8A12,12,0,0,1,112,124Zm61.49,33.88L163.9,168H168a12,12,0,0,1,0,24H136a12,12,0,0,1-8.71-20.25L155.45,142a4,4,0,0,0,.55-2,4,4,0,0,0-7.47-2,12,12,0,0,1-20.78-12A28,28,0,0,1,180,140a27.77,27.77,0,0,1-5.64,16.86A10.63,10.63,0,0,1,173.49,157.88Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,184a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm56-8a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136a23.76,23.76,0,0,1-4.84,14.45L152,176ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-98-90v64a6,6,0,0,1-12,0V129.71l-7.32,3.66a6,6,0,1,1-5.36-10.74l16-8A6,6,0,0,1,110,120Zm59.57,29.25L148,178h20a6,6,0,0,1,0,12H136a6,6,0,0,1-4.8-9.6L160,142a10,10,0,1,0-16.65-11A6,6,0,1,1,133,125a22,22,0,1,1,36.62,24.26Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212ZM108,120v64a4,4,0,0,1-8,0V126.47l-10.21,5.11a4,4,0,0,1-3.58-7.16l16-8A4,4,0,0,1,108,120Zm60,28-24,32h24a4,4,0,0,1,0,8H136a4,4,0,0,1-3.2-6.4l28.78-38.37A11.88,11.88,0,0,0,164,136a12,12,0,0,0-22.4-6,4,4,0,0,1-6.92-4A20,20,0,0,1,172,136,19.79,19.79,0,0,1,168,148Z" }))
  ]
]), lt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,44H40A20,20,0,0,0,20,64V224A19.82,19.82,0,0,0,31.56,242.1a20.14,20.14,0,0,0,8.49,1.9,19.91,19.91,0,0,0,12.82-4.72l.12-.11L84.47,212H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44Zm-4,144H80a11.93,11.93,0,0,0-7.84,2.92L44,215.23V68H212Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M224,64V192a8,8,0,0,1-8,8H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78l.09-.07L83,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H80a8,8,0,0,0-5.23,1.95L40,224V64H216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232,64V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.05,16.05,0,0,1-6.79-1.52A15.84,15.84,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,50H40A14,14,0,0,0,26,64V224a13.88,13.88,0,0,0,8.09,12.69A14.11,14.11,0,0,0,40,238a13.87,13.87,0,0,0,9-3.31l.06-.05L82.23,206H216a14,14,0,0,0,14-14V64A14,14,0,0,0,216,50Zm2,142a2,2,0,0,1-2,2H80a6,6,0,0,0-3.92,1.46L41.26,225.53A2,2,0,0,1,38,224V64a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78l.09-.07L83,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H80a8,8,0,0,0-5.23,1.95L40,224V64H216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,52H40A12,12,0,0,0,28,64V224a11.89,11.89,0,0,0,6.93,10.88A12.17,12.17,0,0,0,40,236a11.89,11.89,0,0,0,7.69-2.83l0,0L81.49,204H216a12,12,0,0,0,12-12V64A12,12,0,0,0,216,52Zm4,140a4,4,0,0,1-4,4H80a4,4,0,0,0-2.62,1L42.56,227.06A4,4,0,0,1,36,224V64a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z" }))
  ]
]), st = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }))
  ]
]), nt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152.41,88.56l-89.6,88a12,12,0,0,1-16.82,0L7.59,138.85a12,12,0,0,1,16.82-17.13l30,29.46,81.19-79.74a12,12,0,0,1,16.82,17.12Zm96.15-17a12,12,0,0,0-17-.15L150.4,151.18l-7.88-7.74a12,12,0,0,0-16.82,17.12l16.29,16a12,12,0,0,0,16.82,0l89.6-88A12,12,0,0,0,248.56,71.59Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M240,64V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H224A16,16,0,0,1,240,64Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM72,168a8,8,0,0,1-5.66-2.34l-24-24a8,8,0,0,1,11.32-11.32L72,148.69l58.34-58.35a8,8,0,0,1,11.32,11.32l-64,64A8,8,0,0,1,72,168Zm141.66-66.34-64,64a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L144,148.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M148.2,84.28l-89.6,88a6,6,0,0,1-8.4,0L11.8,134.57A6,6,0,1,1,20.2,126l34.2,33.58,85.4-83.87a6,6,0,1,1,8.4,8.56Zm96.08-8.48a6,6,0,0,0-8.48-.08l-85.4,83.87-20.23-19.87a6,6,0,1,0-8.41,8.56l24.44,24a6,6,0,0,0,8.4,0l89.6-88A6,6,0,0,0,244.28,75.8Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M149.61,85.71l-89.6,88a8,8,0,0,1-11.22,0L10.39,136a8,8,0,1,1,11.22-11.41L54.4,156.79l84-82.5a8,8,0,1,1,11.22,11.42Zm96.1-11.32a8,8,0,0,0-11.32-.1l-84,82.5-18.83-18.5a8,8,0,0,0-11.21,11.42l24.43,24a8,8,0,0,0,11.22,0l89.6-88A8,8,0,0,0,245.71,74.39Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M146.8,82.85l-89.6,88a4,4,0,0,1-5.6,0L13.2,133.14a4,4,0,0,1,5.6-5.71l35.6,35,86.8-85.24a4,4,0,0,1,5.6,5.7Zm96-5.65a4,4,0,0,0-5.65,0l-86.8,85.24-21.63-21.24a4,4,0,1,0-5.61,5.7l24.44,24a4,4,0,0,0,5.6,0l89.6-88A4,4,0,0,0,242.85,77.2Z" }))
  ]
]), rt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,56l-96,88L32,56Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z" }))
  ]
]), ct = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,88H152V32Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z" }))
  ]
]), it = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M234.29,47.91A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.1,16.64l32-21.33A20,20,0,0,0,164,194.66V140.75l66.67-71.16.12-.14A20,20,0,0,0,234.29,47.91Zm-91,79.89A12,12,0,0,0,140,136v56.52l-24,16V136a12,12,0,0,0-3.25-8.2L49.23,60H206.77Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M221.9,61.38,152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136L34.1,61.38A8,8,0,0,1,40,48H216A8,8,0,0,1,221.9,61.38Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M227.81,66.76l-.08.09L160,139.17v55.49A16,16,0,0,1,152.87,208l-32,21.34A16,16,0,0,1,96,216V139.17L28.27,66.85l-.08-.09A16,16,0,0,1,40,40H216a16,16,0,0,1,11.84,26.76Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M228.77,50.34A13.8,13.8,0,0,0,216,42H40A14,14,0,0,0,29.67,65.42l.06.07L98,138.38V216a14,14,0,0,0,21.77,11.64l32-21.33A14,14,0,0,0,158,194.66V138.38l68.33-73A13.82,13.82,0,0,0,228.77,50.34Zm-11.26,6.94L147.62,131.9A6,6,0,0,0,146,136v58.66a2,2,0,0,1-.89,1.67l-32,21.33A2,2,0,0,1,110,216V136a6,6,0,0,0-1.62-4.1L38.53,57.32A2,2,0,0,1,40,54H216a1.9,1.9,0,0,1,1.83,1.19A1.86,1.86,0,0,1,217.51,57.28Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M227,51.15A11.85,11.85,0,0,0,216,44H40a12,12,0,0,0-8.88,20.07l.05.05L100,137.59V216a12,12,0,0,0,18.66,10l32-21.33a12,12,0,0,0,5.35-10V137.59l68.86-73.52A11.85,11.85,0,0,0,227,51.15Zm-8,7.5-69.9,74.62A4,4,0,0,0,148,136v58.65a4,4,0,0,1-1.78,3.33l-32,21.33A4,4,0,0,1,108,216V136a4,4,0,0,0-1.08-2.74L37.05,58.67A4,4,0,0,1,40,52H216a4,4,0,0,1,3,6.65Z" }))
  ]
]), ot = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M84,108A12,12,0,0,1,96,96h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,108Zm32,28H96a12,12,0,0,0,0,24h20a12,12,0,0,0,0-24ZM228,48V156.69a19.86,19.86,0,0,1-5.86,14.14l-51.31,51.31A19.86,19.86,0,0,1,156.69,228H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204h92V156a12,12,0,0,1,12-12h48V52H52Zm139-36H168v23Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M216,160l-56,56V160Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.69A15.92,15.92,0,0,0,168,219.31L219.31,168A15.92,15.92,0,0,0,224,156.69V48A16,16,0,0,0,208,32ZM96,88h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm32,80H96a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16ZM96,136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm64,68.69V160h44.7Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M90,96a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,96Zm6,38h64a6,6,0,0,0,0-12H96a6,6,0,0,0,0,12Zm32,20H96a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12ZM222,48V156.69a13.94,13.94,0,0,1-4.1,9.9L166.59,217.9a13.94,13.94,0,0,1-9.9,4.1H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H154V160a6,6,0,0,1,6-6h50V48a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210Zm153.52-44H166v35.52Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M92,96a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,96Zm4,36h64a4,4,0,0,0,0-8H96a4,4,0,0,0,0,8Zm32,24H96a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8ZM220,48V156.69a11.9,11.9,0,0,1-3.52,8.48l-51.31,51.32a11.93,11.93,0,0,1-8.48,3.51H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H156V160a4,4,0,0,1,4-4h52V48a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212Zm158.35-48H164v42.35Z" }))
  ]
]), dt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M212.48,136.49l-82.06,82a60,60,0,0,1-84.85-84.88l98.16-97.89a40,40,0,0,1,56.56,56.59l-.17.16-95.8,92.22a12,12,0,1,1-16.64-17.3l95.71-92.12a16,16,0,0,0-22.7-22.56L62.53,150.57a36,36,0,0,0,50.93,50.91l82.06-82a12,12,0,0,1,17,17Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M180.75,104.75,204,128l-82.06,81.94a48,48,0,0,1-67.88-67.88L153.37,41.37a32,32,0,0,1,45.26,45.26Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,50.34a8,8,0,0,0-11.32,0L87.09,143A24,24,0,1,0,121,177l49.32-50.32a8,8,0,1,1,11.42,11.2l-49.37,50.38a40,40,0,1,1-56.62-56.51L143,63.09A24,24,0,1,1,177,97L109.71,165.6a8,8,0,1,1-11.42-11.2L165.6,85.71a8,8,0,0,0,.06-11.37Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M208.25,123.76a6,6,0,0,1,0,8.49l-82.06,82a54,54,0,0,1-76.36-76.39L149.1,37.14a38,38,0,1,1,53.77,53.72L103.59,191.54a22,22,0,1,1-31.15-31.09l83.28-84.67a6,6,0,0,1,8.56,8.42L81,168.91a10,10,0,1,0,14.11,14.18L194.35,82.4a26,26,0,1,0-36.74-36.8L58.33,146.28a42,42,0,1,0,59.37,59.44l82.06-82A6,6,0,0,1,208.25,123.76Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M206.83,125.17a4,4,0,0,1,0,5.66l-82.06,82a52,52,0,0,1-73.54-73.55L150.52,38.55a36,36,0,1,1,50.94,50.9l-99.3,100.69a20,20,0,1,1-28.3-28.27l83.29-84.68a4,4,0,1,1,5.7,5.61L79.54,167.5a12,12,0,1,0,16.95,17L195.78,83.81A28,28,0,1,0,156.2,44.18L56.91,144.87a44,44,0,1,0,62.21,62.26l82-82A4,4,0,0,1,206.83,125.17Z" }))
  ]
]), mt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z" }))
  ]
]), ht = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z", opacity: "0.2" }), /* @__PURE__ */ a.createElement("path", { d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z" }))
  ]
]), ut = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z" }))
  ]
]), pt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M187.3,159.06A36.09,36.09,0,0,1,152,188a84.09,84.09,0,0,1-84-84A36.09,36.09,0,0,1,96.94,68.7,12,12,0,0,1,110,75.1l11.48,23a12,12,0,0,1-.75,12l-8.52,12.78a44.56,44.56,0,0,0,20.91,20.91l12.78-8.52a12,12,0,0,1,12-.75l23,11.48A12,12,0,0,1,187.3,159.06ZM236,128A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.06a12,12,0,0,1,1,9.81l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(
      "path",
      {
        d: "M128,32A96,96,0,0,0,44.89,176.07L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47A96,96,0,1,0,128,32Zm24,152a80,80,0,0,1-80-80,32,32,0,0,1,32-32l16,32-12.32,18.47a48.19,48.19,0,0,0,25.85,25.85L152,136l32,16A32,32,0,0,1,152,184Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ a.createElement("path", { d: "M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.62-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M152.58,145.23l23,11.48A24,24,0,0,1,152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-40,24a8,8,0,0,0-4.42-7.16l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88A40,40,0,0,0,192,152Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M186.68,146.63l-32-16a6,6,0,0,0-6,.38L133,141.46A42.49,42.49,0,0,1,114.54,123L125,107.33a6,6,0,0,0,.38-6l-16-32A6,6,0,0,0,104,66a38,38,0,0,0-38,38,86.1,86.1,0,0,0,86,86,38,38,0,0,0,38-38A6,6,0,0,0,186.68,146.63ZM152,178a74.09,74.09,0,0,1-74-74,26,26,0,0,1,22.42-25.75l12.66,25.32-10.39,15.58a6,6,0,0,0-.54,5.63,54.43,54.43,0,0,0,29.07,29.07,6,6,0,0,0,5.63-.54l15.58-10.39,25.32,12.66A26,26,0,0,1,152,178ZM128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("path", { d: "M185.79,148.42l-32-16a4,4,0,0,0-4,.25l-16.64,11.1a44.56,44.56,0,0,1-20.91-20.91l11.1-16.64a4,4,0,0,0,.25-4l-16-32A4,4,0,0,0,104,68a36,36,0,0,0-36,36,84.09,84.09,0,0,0,84,84,36,36,0,0,0,36-36A4,4,0,0,0,185.79,148.42ZM152,180a76.08,76.08,0,0,1-76-76,28,28,0,0,1,25.58-27.9l13.8,27.61-11,16.54A4,4,0,0,0,104,124a52.43,52.43,0,0,0,28,28,4,4,0,0,0,3.76-.37l16.54-11,27.61,13.8A28,28,0,0,1,152,180ZM128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z" }))
  ]
]), vt = Ce({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), L = a.forwardRef(
  (t, l) => {
    const {
      alt: s,
      color: i,
      size: r,
      weight: n,
      mirrored: m,
      children: o,
      weights: d,
      ...h
    } = t, {
      color: p = "currentColor",
      size: g,
      weight: v = "regular",
      mirrored: y = !1,
      ...u
    } = a.useContext(vt);
    return /* @__PURE__ */ a.createElement(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        width: r ?? g,
        height: r ?? g,
        fill: i ?? p,
        viewBox: "0 0 256 256",
        transform: m || y ? "scale(-1, 1)" : void 0,
        ...u,
        ...h
      },
      !!s && /* @__PURE__ */ a.createElement("title", null, s),
      o,
      d.get(n ?? v)
    );
  }
);
L.displayName = "IconBase";
const He = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: tt }));
He.displayName = "BellIcon";
const xt = He, Fe = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: at }));
Fe.displayName = "CalendarIcon";
const ft = Fe, Ve = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: lt }));
Ve.displayName = "ChatIcon";
const gt = Ve, Le = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: st }));
Le.displayName = "CheckIcon";
const yt = Le, Te = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: nt }));
Te.displayName = "ChecksIcon";
const jt = Te, Re = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: rt }));
Re.displayName = "EnvelopeIcon";
const At = Re, Se = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: ct }));
Se.displayName = "FileTextIcon";
const bt = Se, Ie = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: it }));
Ie.displayName = "FunnelIcon";
const Nt = Ie, ke = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: ot }));
ke.displayName = "NoteIcon";
const Et = ke, $e = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: dt }));
$e.displayName = "PaperclipIcon";
const wt = $e, De = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: mt }));
De.displayName = "PhoneIcon";
const _t = De, Oe = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: ht }));
Oe.displayName = "UserIcon";
const Zt = Oe, Pe = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: ut }));
Pe.displayName = "WarningIcon";
const Mt = Pe, Be = a.forwardRef((t, l) => /* @__PURE__ */ a.createElement(L, { ref: l, ...t, weights: pt }));
Be.displayName = "WhatsappLogoIcon";
const Ct = Be, Ht = (t) => /* @__PURE__ */ e.jsx(_t, { ...t }), Ft = (t) => /* @__PURE__ */ e.jsx(At, { ...t }), ze = (t) => /* @__PURE__ */ e.jsx(Et, { ...t }), Ue = (t) => /* @__PURE__ */ e.jsx(ft, { ...t }), Vt = (t) => /* @__PURE__ */ e.jsx(xt, { ...t }), Lt = (t) => /* @__PURE__ */ e.jsx(gt, { ...t }), Tt = (t) => /* @__PURE__ */ e.jsx(Ct, { ...t }), pe = (t) => /* @__PURE__ */ e.jsx(Zt, { ...t }), ye = (t) => /* @__PURE__ */ e.jsx(wt, { ...t }), Rt = (t) => /* @__PURE__ */ e.jsx(Nt, { ...t }), je = (t) => /* @__PURE__ */ e.jsx(yt, { ...t }), Ae = (t) => /* @__PURE__ */ e.jsx(jt, { ...t }), St = (t) => /* @__PURE__ */ e.jsx(Mt, { ...t }), It = (t) => /* @__PURE__ */ e.jsx(bt, { ...t });
function q(t) {
  if (!t || typeof t != "string") return "";
  if (typeof document > "u") return t;
  const l = document.createElement("div");
  return l.innerHTML = t, ["style", "script", "link", "iframe"].forEach((i) => {
    l.querySelectorAll(i).forEach((n) => n.remove());
  }), l.innerHTML;
}
const kt = 164;
function ie(t, l = kt) {
  const [s, i] = H(!1), [r, n] = H(null), m = ee(null);
  te(() => {
    const p = m.current;
    if (!p) return;
    const g = () => n(p.scrollHeight > l), v = requestAnimationFrame(() => {
      requestAnimationFrame(g);
    });
    return () => cancelAnimationFrame(v);
  }, [l, ...t]);
  const o = r === !0, d = r !== null && (s || !r), h = Q(() => {
    i((p) => !p);
  }, []);
  return {
    isExpanded: s,
    toggleExpanded: h,
    hasOverflow: r,
    showOverflow: o,
    shouldShowExpanded: d,
    wrapperRef: m
  };
}
const oe = ({
  isExpanded: t,
  onToggle: l,
  label: s = "View More",
  expandedLabel: i,
  className: r = ""
}) => {
  const n = t ? i || "View Less" : s;
  return /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: `atw-view-more-btn ${r}`,
      onClick: l,
      children: n
    }
  );
}, $t = 20, he = ({ label: t, value: l }) => {
  const { isExpanded: s, toggleExpanded: i, shouldShowExpanded: r, showOverflow: n, wrapperRef: m } = ie(
    [l],
    $t
  );
  return l ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: m,
        className: `email-activity-recipients-wrapper ${r ? "email-activity-recipients-wrapper--expanded" : ""}`,
        children: /* @__PURE__ */ e.jsxs("h5", { className: "atw-email-from-label", children: [
          t,
          ": ",
          /* @__PURE__ */ e.jsx("span", { className: "atw-email-from-value", children: l })
        ] })
      }
    ),
    n && /* @__PURE__ */ e.jsx(
      oe,
      {
        isExpanded: s,
        onToggle: i,
        label: `View more (${t})`,
        expandedLabel: `View less (${t})`
      }
    )
  ] }) : null;
}, k = ({ content: t, children: l, align: s = "center" }) => {
  const [i, r] = H(!1), [n, m] = H({ top: 0, left: 0 }), o = ee(null), d = () => {
    if (o.current) {
      const p = o.current.getBoundingClientRect();
      m({
        top: p.top - 6,
        left: s === "left" ? p.left : s === "right" ? p.right : p.left + p.width / 2
      });
    }
    r(!0);
  }, h = () => s === "left" ? "translateY(-100%)" : s === "right" ? "translate(-100%, -100%)" : "translate(-50%, -100%)";
  return /* @__PURE__ */ e.jsxs("div", { ref: o, className: "atw-tooltip-wrapper", onMouseEnter: d, onMouseLeave: () => r(!1), children: [
    l,
    i && /* @__PURE__ */ e.jsx("div", { className: "atw-tooltip-content", style: { top: n.top, left: n.left, transform: h() }, children: t })
  ] });
}, Dt = {
  // Priority
  Low: { label: "Low", bgColor: "#E8F5E9", textColor: "#2E7D32", borderColor: "#A5D6A7" },
  Medium: { label: "Medium", bgColor: "#FFF3E0", textColor: "#E65100", borderColor: "#FFCC80" },
  High: { label: "High", bgColor: "#FFEBEE", textColor: "#C62828", borderColor: "#EF9A9A" },
  Urgent: { label: "Urgent", bgColor: "#F3E5F5", textColor: "#6A1B9A", borderColor: "#CE93D8" },
  // Status
  Open: { label: "Open", bgColor: "#E3F2FD", textColor: "#1565C0", borderColor: "#90CAF9" },
  Closed: { label: "Closed", bgColor: "#ECEFF1", textColor: "#455A64", borderColor: "#B0BEC5" },
  Completed: { label: "Completed", bgColor: "#E8F5E9", textColor: "#2E7D32", borderColor: "#A5D6A7" },
  Cancelled: { label: "Cancelled", bgColor: "#FFEBEE", textColor: "#C62828", borderColor: "#EF9A9A" },
  Skipped: { label: "Skipped", bgColor: "#FFF8E1", textColor: "#F57F17", borderColor: "#FFE082" },
  "In Progress": { label: "In Progress", bgColor: "#E3F2FD", textColor: "#1565C0", borderColor: "#90CAF9" },
  // Email direction
  email_sent: { label: "Sent", bgColor: "#E8F5E9", textColor: "#2E7D32", borderColor: "#A5D6A7" },
  email_received: { label: "Received", bgColor: "#E3F2FD", textColor: "#1565C0", borderColor: "#90CAF9" },
  // Lead
  active_lead: { label: "Active", bgColor: "#E8F5E9", textColor: "#2E7D32", borderColor: "#A5D6A7" }
}, S = ({
  statusKey: t,
  label: l,
  bgColor: s,
  textColor: i,
  borderColor: r,
  shape: n = "pill",
  style: m = {},
  className: o = ""
}) => {
  const d = t ? Dt[t] : void 0, h = l || (d == null ? void 0 : d.label) || t || "", p = s || (d == null ? void 0 : d.bgColor) || "#F3F4F6", g = i || (d == null ? void 0 : d.textColor) || "#374151", v = r || (d == null ? void 0 : d.borderColor) || "#D1D5DB";
  return h ? /* @__PURE__ */ e.jsx(
    "span",
    {
      className: `atw-status-badge ${n === "pill" ? "atw-status-badge--pill" : "atw-status-badge--square"} ${o}`,
      style: {
        backgroundColor: p,
        color: g,
        border: `1px solid ${v}`,
        ...m
      },
      children: h
    }
  ) : null;
}, Ye = Ce(null);
function J() {
  const t = Je(Ye);
  if (!t)
    throw new Error("useActivityConfig must be used within an <ActivityProvider>");
  return t;
}
const Ot = ({ children: t, ...l }) => /* @__PURE__ */ e.jsx(Ye.Provider, { value: l, children: t });
function V(t) {
  const l = new Date(t), s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], i = l.getDate().toString().padStart(2, "0"), r = s[l.getMonth()], n = l.getFullYear(), m = `${i} ${r} ${n}`;
  let o = l.getHours();
  const d = l.getMinutes().toString().padStart(2, "0"), h = o >= 12 ? "PM" : "AM";
  o = o % 12, o = o || 12;
  const p = `${o.toString().padStart(2, "0")}:${d} ${h}`;
  return { date: m, time: p };
}
function Pt(t) {
  try {
    const l = new Date(t);
    if (Number.isNaN(l.getTime())) return "";
    const s = l.getFullYear(), i = String(l.getMonth() + 1).padStart(2, "0"), r = String(l.getDate()).padStart(2, "0");
    return `${s}-${i}-${r}`;
  } catch {
    return "";
  }
}
function be(t) {
  const l = t.creation ?? "";
  return Pt(l);
}
const O = ({ activity: t }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
  t.is_lead && /* @__PURE__ */ e.jsx(
    S,
    {
      label: "Lead",
      bgColor: "#F0F9FF",
      textColor: "#0284C7",
      borderColor: "#BAE6FD",
      shape: "pill",
      style: { fontSize: "10px", padding: "0 8px", height: "18px", lineHeight: "16px", fontWeight: "600" }
    }
  ),
  t.is_pd && /* @__PURE__ */ e.jsx(
    S,
    {
      label: "PDA",
      bgColor: "#FDF2F8",
      textColor: "#DB2777",
      borderColor: "#FBCFE8",
      shape: "pill",
      style: { fontSize: "10px", padding: "0 8px", height: "18px", lineHeight: "16px", fontWeight: "600" }
    }
  ),
  t.is_dc && /* @__PURE__ */ e.jsx(
    S,
    {
      label: "DC",
      bgColor: "#FFF7ED",
      textColor: "#EA580C",
      borderColor: "#FFEDD5",
      shape: "pill",
      style: { fontSize: "10px", padding: "0 8px", height: "18px", lineHeight: "16px", fontWeight: "600" }
    }
  )
] }), Ne = "#FB2828", Bt = ({ activity: t }) => {
  const { apiBaseUrl: l, onEmailReply: s, onEmailReplyAll: i } = J(), n = t.data && typeof t.data == "object" ? t.data : t, m = t.communication_date || "", o = t.creation || "", d = m || o, { date: h, time: p } = V(d), g = n.sender_full_name || n.sender || "", v = n.recipients || "", y = n.cc || null, u = n.bcc || null, j = n.subject || "", x = n.content || "", _ = n.attachments || [], U = (n.sent_or_received || "").toLowerCase(), Y = U === "received" ? "email_received" : "email_sent", P = 110, { isExpanded: $, toggleExpanded: E, shouldShowExpanded: W, showOverflow: G, wrapperRef: B } = ie(
    [x, _],
    P
  ), z = (A) => A.startsWith("http://") || A.startsWith("https://") ? A : `${l || ""}${A}`, T = () => {
    s == null || s({
      name: t.name,
      subject: j,
      content: x,
      recipients: n.sender || "",
      cc: null,
      bcc: null,
      sender: n.sender || "",
      senderFullName: g
    });
  }, Z = () => {
    i == null || i({
      name: t.name,
      subject: j,
      content: x,
      recipients: v,
      cc: y,
      bcc: u,
      sender: n.sender || "",
      senderFullName: g,
      isReplyAll: !0
    });
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item email-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: "Email", align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(Ft, { size: 20, color: Ne }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          h,
          " - ",
          p
        ] }),
        /* @__PURE__ */ e.jsx(
          S,
          {
            statusKey: Y,
            shape: "pill",
            showIcon: !1,
            style: { fontSize: "11px", padding: "1px 8px", lineHeight: "16px" }
          }
        ),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "email-activity-card",
        style: U === "received" ? { borderLeft: "3px solid #1565C0" } : void 0,
        children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsxs("h5", { className: "atw-email-from-label", children: [
                "From: ",
                /* @__PURE__ */ e.jsx("span", { className: "atw-email-from-value", children: g && `${g}` })
              ] }),
              /* @__PURE__ */ e.jsx(he, { label: "To", value: v }),
              /* @__PURE__ */ e.jsx(he, { label: "Cc", value: y }),
              /* @__PURE__ */ e.jsx(he, { label: "Bcc", value: u })
            ] }),
            (s || i) && /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
              s && /* @__PURE__ */ e.jsx("button", { type: "button", onClick: T, className: "atw-email-reply-btn", children: "Reply" }),
              i && /* @__PURE__ */ e.jsx("button", { type: "button", onClick: Z, className: "atw-email-reply-btn", children: "Reply All" })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("hr", { className: "atw-email-divider" }),
          /* @__PURE__ */ e.jsxs("h4", { children: [
            "Subject: ",
            j && /* @__PURE__ */ e.jsx("span", { className: "email-activity-subject", children: j })
          ] }),
          (x || _.length > 0) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsxs(
              "div",
              {
                ref: B,
                className: `email-activity-body-wrapper ${W ? "email-activity-body-wrapper--expanded" : ""}`,
                children: [
                  x && /* @__PURE__ */ e.jsx("div", { className: "email-activity-body rich-html-content", dangerouslySetInnerHTML: { __html: q(x) } }),
                  _.length > 0 && /* @__PURE__ */ e.jsxs("div", { className: "email-activity-attachments", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "email-activity-attachments-header", children: [
                      /* @__PURE__ */ e.jsx(ye, { size: 16, color: "#666" }),
                      /* @__PURE__ */ e.jsxs("span", { children: [
                        "Attachments (",
                        _.length,
                        ")"
                      ] })
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "email-activity-attachments-list", children: _.map((A, R) => /* @__PURE__ */ e.jsxs(
                      "a",
                      {
                        href: z(A.file_url),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "email-activity-attachment-item",
                        children: [
                          /* @__PURE__ */ e.jsx(ye, { size: 14, color: Ne }),
                          /* @__PURE__ */ e.jsx("span", { children: A.file_name || A.file_url.split("/").pop() || "Attachment" }),
                          A.file_size && /* @__PURE__ */ e.jsxs("span", { className: "email-activity-attachment-size", children: [
                            "(",
                            (A.file_size / 1024).toFixed(2),
                            " KB)"
                          ] })
                        ]
                      },
                      A.name || R
                    )) })
                  ] })
                ]
              }
            ),
            G && /* @__PURE__ */ e.jsx("div", { style: { textAlign: "right", marginTop: "4px" }, children: /* @__PURE__ */ e.jsx(oe, { isExpanded: $, onToggle: E, label: "View More" }) })
          ] })
        ]
      }
    ) })
  ] });
}, zt = "#1C73E7", Ee = ({ activity: t }) => {
  let l, s, i, r;
  if (t.activity_type === "notes") {
    const p = t.creation ?? "", g = V(p);
    l = g.date, s = g.time, i = t.content, r = t.title || "Note";
  } else {
    const p = V(t.creation || "");
    l = p.date, s = p.time, i = typeof t.data == "string" ? t.data : void 0, r = "Creation";
  }
  const { isExpanded: n, toggleExpanded: m, shouldShowExpanded: o, showOverflow: d, wrapperRef: h } = ie([i]);
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item notes-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: `${t.activity_type === "notes" ? "Note" : "Creation"}`, align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(ze, { size: 20, color: zt }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          l,
          " - ",
          s
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsxs("div", { className: "notes-activity-card", children: [
      /* @__PURE__ */ e.jsx("div", { className: "notes-activity-card-header", children: /* @__PURE__ */ e.jsx("h3", { className: "notes-activity-title", children: r }) }),
      i && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: h,
            className: `notes-activity-body-wrapper ${o ? "notes-activity-body-wrapper--expanded" : ""}`,
            children: /* @__PURE__ */ e.jsx("div", { className: "notes-item rich-html-content", dangerouslySetInnerHTML: { __html: q(i) } })
          }
        ),
        d && /* @__PURE__ */ e.jsx("div", { style: { textAlign: "right", marginTop: "4px" }, children: /* @__PURE__ */ e.jsx(oe, { isExpanded: n, onToggle: m, label: "View More" }) })
      ] })
    ] }) })
  ] });
}, Ut = ({ activity: t }) => {
  const l = V(t.creation), s = t.due_date ? V(t.due_date) : null, i = t.title || "Schedule", r = t.description || "", n = t.priority || "", m = t.task_type || t.activity_type || "", o = t.type || "";
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item schedule-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: "Schedule", align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(Ue, { size: 20, color: "#0DBFFF" }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          l.date,
          " - ",
          l.time
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-card", children: [
      /* @__PURE__ */ e.jsx("div", { className: "schedule-activity-card-header", children: /* @__PURE__ */ e.jsx("h4", { className: "schedule-activity-title", children: i }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-card-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta", children: [
          o && /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Type" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-value", children: o })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Due date" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-value", children: s ? `${s.date} - ${s.time}` : "—" })
          ] }),
          n && /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Priority" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx(S, { statusKey: n, showIcon: !1, shape: "square" })
          ] }),
          m && /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Task type" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-value", children: m })
          ] })
        ] }),
        r && /* @__PURE__ */ e.jsx("div", { className: "schedule-activity-description-wrapper", children: /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Description" }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "schedule-activity-description rich-html-content",
              dangerouslySetInnerHTML: { __html: q(r) }
            }
          )
        ] }) })
      ] })
    ] }) })
  ] });
}, Yt = ({ activity: t }) => {
  const l = V(t.creation), s = t.due_date ? V(t.due_date) : null, i = t.title || "Task", r = t.description || "", n = t.priority || "", m = t.task_type || t.activity_type || "", o = t.type || "", d = t.status || "", h = t.skip_reason || "";
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item schedule-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: "Task", align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(Ue, { size: 20, color: "#0DBFFF" }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          l.date,
          " - ",
          l.time
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-card", children: [
      /* @__PURE__ */ e.jsx("div", { className: "schedule-activity-card-header", children: /* @__PURE__ */ e.jsx("h4", { className: "schedule-activity-title", children: i }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-card-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta", children: [
          o && /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Type" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-value", children: o })
          ] }),
          s && /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Due date" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-value", children: `${s.date} - ${s.time}` })
          ] }),
          n && /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Priority" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx(S, { statusKey: n, showIcon: !1, shape: "square" })
          ] }),
          m && /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Task type" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-value", children: m })
          ] }),
          d && /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Status" }),
              /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx(S, { statusKey: d, showIcon: !1, shape: "square" })
          ] })
        ] }),
        d === "Skipped" && h && /* @__PURE__ */ e.jsx("div", { className: "schedule-activity-description-wrapper", children: /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Skip Reason" }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "schedule-activity-description rich-html-content",
              dangerouslySetInnerHTML: { __html: q(h) }
            }
          )
        ] }) }),
        r && /* @__PURE__ */ e.jsx("div", { className: "schedule-activity-description-wrapper", children: /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "schedule-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-label", children: "Description" }),
            /* @__PURE__ */ e.jsx("span", { className: "schedule-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "schedule-activity-description rich-html-content",
              dangerouslySetInnerHTML: { __html: q(r) }
            }
          )
        ] }) })
      ] })
    ] }) })
  ] });
}, Wt = ({ activity: t }) => {
  const l = V(t.creation), s = t.due_date ? V(t.due_date) : null, i = t.title || "Reminder", r = t.description || "", n = t.priority || "", m = t.task_type || t.activity_type || "", o = t.type || "";
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item reminder-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: "Reminder", align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(Vt, { size: 20, color: "#FF3434" }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          l.date,
          " - ",
          l.time
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-card", children: [
      /* @__PURE__ */ e.jsx("div", { className: "reminder-activity-card-header", children: /* @__PURE__ */ e.jsx("h4", { className: "reminder-activity-title", children: i }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-card-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-meta", children: [
          o && /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-label", children: "Type" }),
              /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-value", children: o })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-label", children: "Due date" }),
              /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-value", children: s ? `${s.date} - ${s.time}` : "—" })
          ] }),
          n && /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-label", children: "Priority" }),
              /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx(S, { statusKey: n, showIcon: !1, shape: "square" })
          ] }),
          m && /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-label", children: "Task type" }),
              /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-value", children: m })
          ] })
        ] }),
        r && /* @__PURE__ */ e.jsx("div", { className: "reminder-activity-description-wrapper", children: /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "reminder-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-label", children: "Description" }),
            /* @__PURE__ */ e.jsx("span", { className: "reminder-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "reminder-activity-description rich-html-content",
              dangerouslySetInnerHTML: { __html: q(r) }
            }
          )
        ] }) })
      ] })
    ] }) })
  ] });
}, qt = ({ activity: t }) => {
  const { renderChatMessageList: l } = J(), { date: s, time: i } = V(t.creation || ""), r = t.type === "Outgoing" || t.is_outbound === 1, n = /* @__PURE__ */ e.jsx(k, { content: "Chat", align: r ? "right" : "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(Tt, { size: 20, color: r ? "#175353" : "#666" }) }) });
  return /* @__PURE__ */ e.jsxs("div", { className: `activity-item chat-activity mt-3 ${r ? "chat-outbound" : "chat-incoming"}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: `activity-header chat-activity-header ${r ? "chat-header-outbound" : "chat-header-incoming"}`, children: [
      !r && n,
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          s,
          " - ",
          i
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] }),
      r && n
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `activity-content ${r ? "chat-content-outbound" : "chat-content-incoming"}`, children: l ? l({ activity: t, icon: n, showIcon: !1 }) : /* @__PURE__ */ e.jsx("div", { className: "chat-activity-bubble", children: /* @__PURE__ */ e.jsx("span", { className: "chat-message-text", children: t.message || "" }) }) })
  ] });
};
function Gt(t) {
  const { fetchCallRecording: l, fetchCallRecordingBlob: s } = J(), [i, r] = H(null), [n, m] = H(!1), [o, d] = H(null);
  return te(() => {
    if (r(null), d(null), !t || !l) {
      m(!1);
      return;
    }
    let h = !1, p = null;
    return m(!0), (async () => {
      try {
        const v = await l(t);
        if (h) return;
        if (!v) {
          m(!1);
          return;
        }
        if (s) {
          const y = await s(v);
          if (h) return;
          p = URL.createObjectURL(y), r(p);
        } else
          r(v);
        m(!1);
      } catch (v) {
        h || (d(v instanceof Error ? v : new Error("Failed to fetch recording")), m(!1));
      }
    })(), () => {
      h = !0, p && URL.revokeObjectURL(p);
    };
  }, [t, l, s]), { audioUrl: i, isLoading: n, error: o };
}
function Jt(t) {
  if (!t) return "";
  if (typeof t == "string") return t;
  if (typeof t == "number") {
    const l = Math.floor(t / 60), s = t % 60;
    return s > 0 ? `${l}m ${s}s` : `${l}m`;
  }
  return "";
}
function Kt(t) {
  if (!t)
    return { bgColor: "#F3F4F6", textColor: "#374151", borderColor: "#D1D5DB" };
  switch (t.toLowerCase()) {
    case "completed":
      return { bgColor: "#179D51", textColor: "#FFFFFF", borderColor: "#179D51" };
    case "in-progress":
    case "ringing":
      return { bgColor: "#2196F3", textColor: "#FFFFFF", borderColor: "#2196F3" };
    case "failed":
    case "busy":
    case "no-answer":
    case "canceled":
    case "incomplete":
      return { bgColor: "#F44336", textColor: "#FFFFFF", borderColor: "#F44336" };
    default:
      return { bgColor: "#F3F4F6", textColor: "#374151", borderColor: "#D1D5DB" };
  }
}
const ue = "#175353", we = ({ activity: t }) => {
  var x, _;
  const s = t.activity_type === "out-going" || t.activity_type === "outgoing_call" ? "Outbound Call" : "Inbound Call", { date: i, time: r } = V(t.creation || ""), n = ((x = t._caller) == null ? void 0 : x.label) ?? t.caller ?? "Unknown", m = ((_ = t._receiver) == null ? void 0 : _.label) ?? null, {
    audioUrl: o,
    isLoading: d,
    error: h
  } = Gt(t.recording_url ? t.name : void 0), [p, g] = H(!1), v = t._duration, y = typeof v == "number" ? Jt(v) : v, u = v === 0 || v === "0" || v === "0s" || v === "0m" || y === "0s" || y === "0m", j = Kt(t.status);
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item call-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: "Call", align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(Ht, { size: 20, color: ue }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          i,
          " - ",
          r
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsxs("div", { className: "call-activity-card", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "call-activity-header-row", children: [
        /* @__PURE__ */ e.jsx("div", { className: "call-activity-label", children: s }),
        t.status && /* @__PURE__ */ e.jsx(
          S,
          {
            label: t.status,
            bgColor: j.bgColor,
            textColor: j.textColor,
            borderColor: j.borderColor,
            shape: "pill",
            showIcon: !1
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "call-activity-details", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "call-activity-details-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "call-activity-person", children: [
            /* @__PURE__ */ e.jsx("div", { className: "call-activity-avatar", children: /* @__PURE__ */ e.jsx(pe, { size: 16, color: ue }) }),
            /* @__PURE__ */ e.jsx("span", { className: "call-activity-name", children: n })
          ] }),
          m != null && m !== "" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx("span", { className: "call-activity-to-label", children: "To" }),
            /* @__PURE__ */ e.jsx("span", { className: "call-activity-arrow", children: "→" }),
            /* @__PURE__ */ e.jsxs("div", { className: "call-activity-to-contact", children: [
              /* @__PURE__ */ e.jsx("div", { className: "call-activity-avatar", children: /* @__PURE__ */ e.jsx(pe, { size: 16, color: ue }) }),
              /* @__PURE__ */ e.jsx("span", { className: "call-activity-to-name", children: m })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "call-activity-actions", children: d ? /* @__PURE__ */ e.jsx("span", { className: "call-activity-loading", children: "Loading recording…" }) : h || p ? /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ e.jsx("span", { className: "call-activity-loading", style: { color: "#f44336" }, children: "Recording unavailable" }),
          y && !u && /* @__PURE__ */ e.jsxs("span", { className: "call-activity-duration", children: [
            "Duration ",
            y
          ] })
        ] }) : o ? /* @__PURE__ */ e.jsxs("div", { className: "call-activity-player-wrapper", children: [
          /* @__PURE__ */ e.jsx(
            Ke,
            {
              src: o,
              showJumpControls: !1,
              showDownloadProgress: !1,
              customAdditionalControls: [],
              customVolumeControls: [],
              layout: "horizontal-reverse",
              className: "call-activity-audio-player",
              onError: () => g(!0)
            },
            o
          ),
          y && !u && /* @__PURE__ */ e.jsxs("span", { className: "call-activity-duration", children: [
            "Duration ",
            y
          ] })
        ] }) : y && !u && /* @__PURE__ */ e.jsxs("span", { className: "call-activity-duration", style: { marginLeft: 0 }, children: [
          "Duration ",
          y
        ] }) })
      ] })
    ] }) })
  ] });
}, Xt = ({ activity: t }) => {
  const { date: l, time: s } = V(t.creation);
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item lead-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: "Lead Created", align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(pe, { size: 20, color: "darkgreen" }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          l,
          " - ",
          s
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-card", children: [
      /* @__PURE__ */ e.jsx("div", { className: "lead-activity-card-header", children: /* @__PURE__ */ e.jsxs("h4", { className: "lead-activity-title", children: [
        "Lead ID: ",
        t.name
      ] }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-card-content", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-meta", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-label", children: "Title" }),
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "lead-activity-value", children: t.title })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-label", children: "Initiator" }),
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "lead-activity-value", children: t.initiator })
          ] }),
          t.priority && /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-label", children: "Priority" }),
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx(S, { statusKey: t.priority, showIcon: !1, shape: "square" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-label", children: "Status" }),
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx(S, { statusKey: t.status, showIcon: !1, shape: "square" })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-meta-row", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-label-cell", children: [
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-label", children: "Lead Owner" }),
              /* @__PURE__ */ e.jsx("span", { className: "lead-activity-colon", children: ":" })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "lead-activity-value", children: t.lead_owner || t.owner })
          ] })
        ] }),
        t.description && /* @__PURE__ */ e.jsx("div", { className: "lead-activity-description-wrapper", children: /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "lead-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "lead-activity-label", children: "Description" }),
            /* @__PURE__ */ e.jsx("span", { className: "lead-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: "lead-activity-description rich-html-content",
              dangerouslySetInnerHTML: { __html: q(t.description) }
            }
          )
        ] }) })
      ] })
    ] }) })
  ] });
}, Qt = ({ activity: t }) => {
  const l = V(t.creation), s = t.title || "Brief", i = t.status || "", r = t.assigned_to || "", n = t.customer_code || "";
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item brief-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: "Brief", align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(It, { size: 20, color: "#7C3AED" }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          l.date,
          " - ",
          l.time
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-card", children: [
      /* @__PURE__ */ e.jsx("div", { className: "brief-activity-card-header", children: /* @__PURE__ */ e.jsx("h4", { className: "brief-activity-title", children: /* @__PURE__ */ e.jsx("a", { href: t.href, target: "_blank", rel: "noopener noreferrer", children: s }) }) }),
      /* @__PURE__ */ e.jsx("div", { className: "brief-activity-card-content", children: /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-meta", children: [
        i && /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "brief-activity-label", children: "Status" }),
            /* @__PURE__ */ e.jsx("span", { className: "brief-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx(S, { statusKey: i, showIcon: !1, shape: "square" })
        ] }),
        r && /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "brief-activity-label", children: "Assigned to" }),
            /* @__PURE__ */ e.jsx("span", { className: "brief-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "brief-activity-value", children: r })
        ] }),
        n && /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "brief-activity-label", children: "Customer code" }),
            /* @__PURE__ */ e.jsx("span", { className: "brief-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "brief-activity-value", children: n })
        ] }),
        t.href && /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-meta-row", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "brief-activity-label-cell", children: [
            /* @__PURE__ */ e.jsx("span", { className: "brief-activity-label", children: "Link" }),
            /* @__PURE__ */ e.jsx("span", { className: "brief-activity-colon", children: ":" })
          ] }),
          /* @__PURE__ */ e.jsx("a", { href: t.href, target: "_blank", rel: "noopener noreferrer", className: "brief-activity-value brief-activity-link", children: "View Brief" })
        ] })
      ] }) })
    ] }) })
  ] });
}, e0 = ({ activity: t }) => {
  const { currentUserEmail: l, apiBaseUrl: s } = J(), { date: i, time: r } = V(t.creation || ""), n = l && t.from === l, m = t.text || t.content || "", o = t.message_type === "Image", d = t.file ? t.file.startsWith("http") ? t.file : `${s}${t.file}` : null, h = /* @__PURE__ */ e.jsx(k, { content: "Raven Chat", align: n ? "right" : "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(Lt, { size: 20, color: n ? "#175353" : "#666" }) }) });
  return /* @__PURE__ */ e.jsxs("div", { className: `activity-item chat-activity mt-3 ${n ? "chat-outbound" : "chat-incoming"}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: `activity-header chat-activity-header ${n ? "chat-header-outbound" : "chat-header-incoming"}`, children: [
      !n && h,
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
        /* @__PURE__ */ e.jsxs("span", { children: [
          i,
          " - ",
          r
        ] }),
        /* @__PURE__ */ e.jsx(O, { activity: t })
      ] }),
      n && h
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: `activity-content ${n ? "chat-content-outbound" : "chat-content-incoming"}`, children: /* @__PURE__ */ e.jsxs("div", { className: "chat-activity-bubble", children: [
      o && d ? /* @__PURE__ */ e.jsx("div", { className: "chat-image-preview", style: { marginBottom: "8px" }, children: /* @__PURE__ */ e.jsx("a", { href: d, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ e.jsx(
        "img",
        {
          src: d,
          alt: "Attachment",
          className: "message-attachment-image",
          style: {
            maxWidth: "100%",
            borderRadius: "8px",
            display: "block",
            cursor: "pointer"
          }
        }
      ) }) }) : null,
      m && (!o || t.text) && /* @__PURE__ */ e.jsx("div", { className: "chat-message-text", dangerouslySetInnerHTML: { __html: q(m) } }),
      t.file && !o && /* @__PURE__ */ e.jsx("div", { className: "chat-attachment", style: { marginTop: "4px" }, children: /* @__PURE__ */ e.jsx(
        "a",
        {
          href: d || "#",
          target: "_blank",
          rel: "noopener noreferrer",
          style: { fontSize: "12px", color: n ? "white" : "#175353", textDecoration: "underline" },
          children: "View Attachment"
        }
      ) })
    ] }) })
  ] });
}, ce = ({ activity: t }) => t.activity_type === "whatsapp" ? /* @__PURE__ */ e.jsx(qt, { activity: t }) : t.activity_type === "communication" ? /* @__PURE__ */ e.jsx(Bt, { activity: t }) : t.activity_type === "notes" ? /* @__PURE__ */ e.jsx(Ee, { activity: t }) : t.activity_type === "creation" ? /* @__PURE__ */ e.jsx(Ee, { activity: t }) : t.activity_type === "Schedule" ? /* @__PURE__ */ e.jsx(Ut, { activity: t }) : t.activity_type === "Task" ? /* @__PURE__ */ e.jsx(Yt, { activity: t }) : t.activity_type === "Reminder" ? /* @__PURE__ */ e.jsx(Wt, { activity: t }) : t.activity_type === "outgoing_call" ? /* @__PURE__ */ e.jsx(we, { activity: t }) : t.activity_type === "incoming_call" ? /* @__PURE__ */ e.jsx(we, { activity: t }) : t.activity_type === "lead" ? /* @__PURE__ */ e.jsx(Xt, { activity: t }) : t.activity_type === "brief" ? /* @__PURE__ */ e.jsx(Qt, { activity: t }) : t.activity_type === "raven" ? /* @__PURE__ */ e.jsx(e0, { activity: t }) : null, t0 = 0;
function a0(t) {
  const l = t.activity_type ?? "";
  return {
    whatsapp: "Chats",
    communication: "Emails",
    notes: "Notes",
    creation: "Notes",
    Schedule: "Schedules",
    Task: "Tasks",
    Reminder: "Reminders",
    outgoing_call: "Calls",
    incoming_call: "Calls",
    lead: "Leads",
    brief: "Briefs",
    raven: "Raven Chats"
  }[l] ?? "Items";
}
const l0 = ({ activities: t }) => {
  const l = t[0], s = I(() => t.slice(1), [t]), i = s.length > 0, { isExpanded: r, toggleExpanded: n, shouldShowExpanded: m, wrapperRef: o } = ie(
    [t.length],
    t0
  );
  return t.length === 0 ? null : t.length === 1 ? /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ce, { activity: l }) }) : /* @__PURE__ */ e.jsxs("div", { className: "activity-date-group", children: [
    /* @__PURE__ */ e.jsx(ce, { activity: l }),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: o,
        className: `activity-date-group-rest ${m ? "activity-date-group-rest--expanded" : ""}`,
        "aria-hidden": !r,
        children: s.map((d, h) => /* @__PURE__ */ e.jsx(ce, { activity: d }, `${d.name ?? "activity"}-${h}`))
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "activity-date-group-view-more-wrapper", children: i && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("span", { className: "activity-date-group-view-more-line", "aria-hidden": "true" }),
      /* @__PURE__ */ e.jsx(
        oe,
        {
          isExpanded: r,
          onToggle: n,
          label: `View ${s.length} ${a0(l)}`,
          className: "activity-date-group-view-more-btn"
        }
      )
    ] }) })
  ] });
}, _e = () => /* @__PURE__ */ e.jsx("div", { className: "atw-loader", children: /* @__PURE__ */ e.jsx("div", { className: "atw-loader-spinner" }) }), s0 = ({
  initialFilters: t,
  onApply: l,
  onClear: s,
  valueOptions: i
}) => {
  const [r, n] = H(!1), m = ee(null), [o, d] = H(
    () => t.filter((u) => u.field === "activity_type").map((u) => u.value)
  ), h = i.activity_type || [];
  te(() => {
    const u = (j) => {
      m.current && !m.current.contains(j.target) && n(!1);
    };
    return r && document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, [r]);
  const p = () => n((u) => !u), g = (u, j) => {
    d(j ? (x) => [...x, u] : (x) => x.filter((_) => _ !== u));
  }, v = () => {
    const u = t.filter((_) => _.field !== "activity_type"), j = o.map((_) => ({
      field: "activity_type",
      value: _
    })), x = [...u, ...j];
    l(x), n(!1);
  }, y = () => {
    d([]), s(), n(!1);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "atw-filter-wrapper", ref: m, children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        onClick: p,
        className: "atw-filter-trigger",
        children: /* @__PURE__ */ e.jsx(Rt, { size: 22, color: "#175353" })
      }
    ),
    r && /* @__PURE__ */ e.jsxs("div", { className: "atw-filter-panel", children: [
      /* @__PURE__ */ e.jsx("div", { className: "atw-filter-options", children: h.map((u) => /* @__PURE__ */ e.jsxs("label", { className: "atw-filter-option", children: [
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "checkbox",
            checked: o.includes(u.value),
            onChange: (j) => g(u.value, j.target.checked)
          }
        ),
        /* @__PURE__ */ e.jsx("span", { children: u.label })
      ] }, u.value)) }),
      /* @__PURE__ */ e.jsxs("div", { className: "atw-filter-actions", children: [
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: y, className: "atw-filter-clear-btn", children: "Clear" }),
        /* @__PURE__ */ e.jsx("button", { type: "button", onClick: v, className: "atw-filter-apply-btn", children: "Apply" })
      ] })
    ] })
  ] });
};
function ve(t) {
  if ("communication_date" in t && typeof t.communication_date == "string")
    return t.communication_date;
  if ("creation" in t && typeof t.creation == "string")
    return t.creation;
  if ("modified" in t && typeof t.modified == "string")
    return t.modified;
  if ("date" in t && typeof t.date == "string") {
    const l = "time" in t && typeof t.time == "string" ? ` ${t.time}` : "";
    return `${t.date}${l}`;
  }
  return (/* @__PURE__ */ new Date(0)).toISOString();
}
function Ze(t) {
  return new Date(ve(t)).getTime() || 0;
}
const n0 = 20, r0 = (t, l) => {
  if (!l || typeof l != "object") return null;
  const s = l;
  switch (t) {
    case "whatsapp_message":
      return { ...s, activity_type: "whatsapp" };
    case "communication":
      return { ...s, activity_type: "communication" };
    case "fcrm_note":
      return { ...s, activity_type: "notes" };
    case "crm_task": {
      const r = (s.task_type || s.type || "Schedule") === "Reminder" ? "Reminder" : "Schedule";
      return { ...s, activity_type: r };
    }
    case "crm_lead":
      return { ...s, activity_type: "lead" };
    case "crm_call_log": {
      const i = s.type === "Incoming";
      return { ...s, activity_type: i ? "incoming_call" : "outgoing_call" };
    }
    case "raven_message":
      return { ...s, activity_type: "raven" };
    case "activity":
      return { ...s, activity_type: "brief" };
    default:
      return null;
  }
};
function c0(t, l) {
  const { fetchActivities: s, onSocketMessage: i } = J(), [r, n] = H([]), [m, o] = H([]), [d, h] = H(!1), [p, g] = H(null), [v, y] = H(!1), [u, j] = H(!1), [x, _] = H(!1), [U, Y] = H(!1), P = ee(null), $ = ee(0), E = Q(async (z, T) => {
    if (t) {
      T ? h(!0) : y(!0);
      try {
        const Z = {};
        l && Object.entries(l).forEach(([F, N]) => {
          Array.isArray(N) ? N.length > 0 && (Z[F] = N) : N && (Z[F] = [N]);
        });
        const A = await s({
          contactName: t,
          limit_start: z,
          limit_page_length: n0,
          filters: Object.keys(Z).length > 0 ? Z : void 0
        });
        n((F) => T ? [A] : [...F, A]);
        const R = A.message;
        T && (_(!!R.includes_pd), Y(!!R.includes_dc));
        const b = R.page + 1;
        j(b * R.page_size < R.total_count), $.current = b, g(null);
      } catch (Z) {
        g(Z instanceof Error ? Z : new Error("Failed to fetch activities"));
      } finally {
        h(!1), y(!1);
      }
    }
  }, [t, l, s]);
  te(() => {
    P.current !== t && (P.current = t, o([])), n([]), $.current = 0, E(0, !0);
  }, [t, l, E]);
  const W = Q(() => {
    !v && u && E($.current, !1);
  }, [v, u, E]), G = Q(() => {
    n([]), $.current = 0, E(0, !0);
  }, [E]);
  return te(() => i ? i((T) => {
    const Z = T.event;
    if (["whatsapp_message", "communication", "fcrm_note", "crm_task", "crm_lead", "crm_call_log", "raven_message", "activity"].includes(Z)) {
      const A = r0(Z, T.message);
      A && o((R) => {
        const b = "name" in A ? A.name : ve(A), F = R.findIndex((N) => ("name" in N ? N.name : ve(N)) === b);
        if (F >= 0) {
          const N = [...R];
          return N[F] = A, N;
        }
        return [...R, A];
      });
    }
  }) : void 0, [i]), {
    activities: I(() => {
      const z = r.flatMap((b) => b.message.activities);
      let T = m;
      if (l) {
        const b = l.activity_type && Array.isArray(l.activity_type) ? l.activity_type : [], F = l.sources && Array.isArray(l.sources) ? l.sources : [];
        if (b.length > 0 || F.length > 0) {
          const N = new Set(b), K = new Set(F);
          T = m.filter((se) => {
            const D = se, c = D.activity_type;
            return K.has("pd") && D.is_pd || K.has("dc") && D.is_dc ? !0 : c ? !!(N.has(c) || N.has("call") && (c === "outgoing_call" || c === "incoming_call") || N.has("brief") && c === "brief" || N.has("raven") && c === "raven" || N.has("pd") && D.is_pd || N.has("dc") && D.is_dc) : !!(N.has("pd") && D.is_pd || N.has("dc") && D.is_dc);
          });
        }
      }
      const Z = new Set(
        T.map((b) => "name" in b && b.name != null ? String(b.name) : null).filter((b) => b != null)
      ), A = Z.size > 0 ? z.filter((b) => !("name" in b && b.name != null && Z.has(String(b.name)))) : z;
      return [...[...T, ...A]].sort((b, F) => Ze(F) - Ze(b));
    }, [r, m, l]),
    isLoading: d,
    error: p,
    isFetchingNextPage: v,
    hasNextPage: u,
    fetchNextPage: W,
    refetch: G,
    includes_pd: x,
    includes_dc: U
  };
}
function i0(t, l) {
  const s = t, i = s.name ?? s.creation;
  return i != null ? String(i) : `i-${l}`;
}
function Me(t) {
  return t.activity_type ?? "";
}
const o0 = /* @__PURE__ */ new Set(["whatsapp", "raven"]);
function d0(t) {
  const l = [];
  let s = 0;
  for (; s < t.length; ) {
    const i = t[s], r = be(i), n = Me(i), m = [i];
    for (s += 1; s < t.length; ) {
      const d = t[s];
      if (be(d) !== r || Me(d) !== n) break;
      m.push(d), s += 1;
    }
    const o = o0.has(n) ? [...m].reverse() : m;
    o.length === 1 ? l.push({ type: "single", activity: o[0], index: s - 1 }) : l.push({ type: "date-group", activities: o, firstIndex: s - o.length });
  }
  return l;
}
function m0(t) {
  const l = {};
  for (const { field: s, value: i } of t) {
    if (!i) continue;
    const r = l[s];
    r ? Array.isArray(r) ? r.includes(i) || (l[s] = [...r, i]) : r !== i && (l[s] = [r, i]) : l[s] = i;
  }
  return l;
}
const We = {
  "WhatsApp Chat": ["whatsapp"],
  Emails: ["communication"],
  Notes: ["note"],
  Schedules: ["schedule"],
  Reminders: ["reminder"],
  Calls: ["call"],
  Leads: ["lead"],
  Brief: ["brief"],
  "Raven Message": ["raven"]
}, h0 = We, u0 = Object.keys(We).map((t) => ({
  label: t,
  value: t
}));
function p0({
  initialParameters: t = {}
} = {}) {
  const [l, s] = H(t), i = Q((o) => {
    const d = m0(o);
    s(Object.keys(d).length === 0 ? {} : d);
  }, []), r = Q(() => {
    s({});
  }, []), n = I(() => {
    const o = l, d = {};
    if (o.activity_type) {
      const h = Array.isArray(o.activity_type) ? o.activity_type : [o.activity_type], p = [];
      h.forEach((g) => {
        const v = h0[g];
        v && p.push(...v);
      }), p.length > 0 && (d.activity_type = Array.from(new Set(p)));
    }
    if (o.sources && (d.sources = Array.isArray(o.sources) ? o.sources : [o.sources]), o.lead_id) {
      const h = Array.isArray(o.lead_id) ? o.lead_id : [o.lead_id];
      d.lead = h;
    }
    return d;
  }, [l]), m = I(() => {
    const o = [];
    return Object.entries(l).forEach(([d, h]) => {
      Array.isArray(h) ? h.forEach((p) => {
        o.push({ field: d, value: p });
      }) : h && o.push({ field: d, value: h });
    }), o;
  }, [l]);
  return {
    filtersPayload: n,
    initialFilters: m,
    handleApplyFilters: i,
    handleClearFilters: r
  };
}
function v0() {
  const { contactName: t, searchParams: l, fetchLeads: s } = J();
  l == null || l.activityId;
  const i = I(() => ((l == null ? void 0 : l.comm_type) ?? null) === "communication" ? { activity_type: "Emails" } : {}, [l]), { filtersPayload: r, initialFilters: n, handleApplyFilters: m, handleClearFilters: o } = p0({
    initialParameters: i
  }), { activities: d, isLoading: h, error: p, fetchNextPage: g, hasNextPage: v, isFetchingNextPage: y, refetch: u, includes_pd: j, includes_dc: x } = c0(t, r), _ = d.filter((E) => E.activity_type !== "attachment_log"), U = I(() => d0(_), [_]), Y = ee(null);
  te(() => {
    const E = Y.current;
    if (!E || !v || y) return;
    const W = new IntersectionObserver(
      (G) => {
        var B;
        (B = G[0]) != null && B.isIntersecting && g();
      },
      { root: null, rootMargin: "100px", threshold: 0 }
    );
    return W.observe(E), () => W.disconnect();
  }, [v, y, g, d]);
  const P = (s == null ? void 0 : s()) ?? { leads: [] }, $ = I(
    () => ({
      activity_type: u0.map((E) => ({ label: E.label, value: E.label })),
      lead_id: P.leads.map((E) => ({ label: E.name, value: E.name }))
    }),
    [P.leads]
  );
  return {
    activityNodes: U,
    initialFilters: n,
    isLoading: h,
    error: p,
    isFetchingNextPage: y,
    valueOptions: $,
    refetch: u,
    handleApplyFilters: m,
    handleClearFilters: o,
    getActivityElementId: i0,
    loadMoreRef: Y,
    includes_pd: j,
    includes_dc: x
  };
}
const x0 = () => {
  const { title: t = "Activity" } = J(), {
    activityNodes: l,
    initialFilters: s,
    isLoading: i,
    error: r,
    isFetchingNextPage: n,
    valueOptions: m,
    refetch: o,
    handleApplyFilters: d,
    handleClearFilters: h,
    getActivityElementId: p,
    loadMoreRef: g,
    includes_pd: v,
    includes_dc: y
  } = v0();
  return i ? /* @__PURE__ */ e.jsxs("div", { className: "activity-tab", children: [
    /* @__PURE__ */ e.jsx("div", { className: "atw-sticky-header", children: /* @__PURE__ */ e.jsx("h2", { className: "activity-tab-title", children: t }) }),
    /* @__PURE__ */ e.jsx(_e, {})
  ] }) : r ? /* @__PURE__ */ e.jsxs("div", { className: "activity-tab", children: [
    /* @__PURE__ */ e.jsx("h2", { className: "activity-tab-title", children: t }),
    /* @__PURE__ */ e.jsxs("div", { className: "atw-error-fallback", children: [
      /* @__PURE__ */ e.jsxs("p", { children: [
        "Failed to load ",
        t,
        "."
      ] }),
      /* @__PURE__ */ e.jsx("button", { type: "button", onClick: o, className: "atw-retry-btn", children: "Retry" })
    ] })
  ] }) : /* @__PURE__ */ e.jsxs("div", { className: "activity-tab", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "atw-sticky-header", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "atw-header-left", children: [
        /* @__PURE__ */ e.jsx("span", { className: "activity-tab-title", children: "Total Activity" }),
        /* @__PURE__ */ e.jsx("span", { className: "atw-activity-count-badge", children: l.reduce((u, j) => u + (j.type === "single" ? 1 : j.activities.length), 0) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "atw-header-right", children: [
        v && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: `atw-special-filter-btn ${s.some((u) => u.field === "sources" && u.value === "pd") ? "active" : ""}`,
            onClick: () => {
              const u = s.some((x) => x.field === "sources" && x.value === "pd"), j = s.filter((x) => !(x.field === "sources" && x.value === "pd"));
              d(u ? j : [...j, { field: "sources", value: "pd" }]);
            },
            children: "PDA"
          }
        ),
        y && /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            className: `atw-special-filter-btn ${s.some((u) => u.field === "sources" && u.value === "dc") ? "active" : ""}`,
            onClick: () => {
              const u = s.some((x) => x.field === "sources" && x.value === "dc"), j = s.filter((x) => !(x.field === "sources" && x.value === "dc"));
              d(u ? j : [...j, { field: "sources", value: "dc" }]);
            },
            children: "DC"
          }
        ),
        /* @__PURE__ */ e.jsx(
          s0,
          {
            initialFilters: s,
            onApply: d,
            onClear: h,
            valueOptions: m
          },
          JSON.stringify(s)
        )
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-timeline", children: l.length === 0 ? /* @__PURE__ */ e.jsx("div", { style: { padding: "20px", textAlign: "center", color: "#666" }, children: "No activities found for this contact." }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      l.map((u) => {
        if (u.type === "single") {
          const x = p(u.activity, u.index);
          return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(ce, { activity: u.activity }) }, x);
        }
        const j = p(u.activities[0], u.firstIndex);
        return /* @__PURE__ */ e.jsx(l0, { activities: u.activities }, j);
      }),
      /* @__PURE__ */ e.jsx("div", { ref: g, className: "activity-load-more-sentinel", "aria-hidden": "true" }),
      n && /* @__PURE__ */ e.jsx("div", { className: "activity-load-more", style: { padding: "12px", textAlign: "center", color: "#666" }, children: /* @__PURE__ */ e.jsx(_e, {}) })
    ] }) })
  ] });
}, f0 = (t = "/", l) => {
  const s = {};
  l && (s.Authorization = `token ${l}`);
  const i = async (n, m = {}) => {
    const o = { ...s };
    if (m.headers) {
      const p = new Headers(m.headers);
      Object.assign(o, Object.fromEntries(p.entries()));
    }
    const d = n.startsWith("http") ? n : `${t}${n}`, h = await fetch(d, {
      ...m,
      headers: o
    });
    if (!h.ok)
      throw new Error(`API Error: ${h.status} ${h.statusText}`);
    return h.json();
  }, r = async (n, m = {}) => {
    const o = { ...s };
    if (m.headers) {
      const p = new Headers(m.headers);
      Object.assign(o, Object.fromEntries(p.entries()));
    }
    const d = n.startsWith("http") ? n : `${t}${n}`, h = await fetch(d, {
      ...m,
      headers: o
    });
    if (!h.ok)
      throw new Error(`API Error: ${h.status} ${h.statusText}`);
    return h.blob();
  };
  return {
    get: (n) => i(n, { method: "GET" }),
    getBlob: (n) => r(n, { method: "GET" })
  };
}, g0 = (t) => ({
  /**
   * Get activities for a contact (paginated).
   */
  getActivities: async (l) => {
    const s = {
      name: l.contactName,
      limit_start: String(l.limit_start ?? 0),
      limit_page_length: String(l.limit_page_length ?? 20)
    };
    l.filters && (s.filters = JSON.stringify(l.filters));
    const r = `/api/method/crm_integration.crm_integration.api.activities.get_activities?${new URLSearchParams(s).toString()}`;
    return t.get(r);
  },
  /**
   * Fetch the call recording stream URL for a given call_log_id.
   */
  getCallRecording: async (l) => {
    var s;
    try {
      const i = await t.get(
        `/api/method/crm_integration.crm_exotel.api.call_log.get_call_recording?call_log_id=${encodeURIComponent(l)}`
      );
      return ((s = i == null ? void 0 : i.message) == null ? void 0 : s.url) || null;
    } catch {
      return null;
    }
  },
  /**
   * Fetch the recording from the stream URL with Authorization and return a Blob.
   */
  fetchBlob: async (l) => {
    let s = l;
    return t.getBlob(s);
  }
});
function y0({
  baseURL: t = "/",
  token: l,
  contactName: s,
  apiBaseUrl: i,
  type: r,
  title: n,
  onSocketMessage: m,
  searchParams: o,
  renderChatMessageList: d,
  onEmailReply: h,
  onEmailReplyAll: p,
  fetchLeads: g,
  currentUserEmail: v
}) {
  const y = I(() => f0(t, l), [t, l]), u = I(() => g0(y), [y]);
  return I(
    () => ({
      contactName: s,
      apiBaseUrl: i || t,
      type: r,
      title: n,
      onSocketMessage: m,
      searchParams: o,
      renderChatMessageList: d,
      onEmailReply: h,
      onEmailReplyAll: p,
      fetchLeads: g,
      currentUserEmail: v,
      // API adapters (wired to Frappe backend)
      fetchActivities: async (x) => u.getActivities(x),
      fetchCallRecording: async (x) => u.getCallRecording(x),
      fetchCallRecordingBlob: async (x) => u.fetchBlob(x)
    }),
    [
      s,
      i,
      t,
      r,
      n,
      m,
      o,
      d,
      h,
      p,
      g,
      v,
      u
    ]
  );
}
function j0(t) {
  if (!t) return "";
  try {
    const l = new Date(t);
    return isNaN(l.getTime()) ? "" : l.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: !0 });
  } catch {
    return "";
  }
}
function A0(t) {
  if (!t) return null;
  const l = /(https?:\/\/[^\s]+)/g;
  return t.split(l).map((i, r) => i.match(l) ? /* @__PURE__ */ e.jsx("a", { href: i, target: "_blank", rel: "noopener noreferrer", className: "message-url", children: i }, r) : i);
}
function b0(t, l) {
  if (l !== 1) return null;
  switch (typeof t == "number" ? t : parseInt(t || "0", 10)) {
    case 1:
      return /* @__PURE__ */ e.jsx(je, { size: 14, color: "#8696a0" });
    case 2:
      return /* @__PURE__ */ e.jsx(St, { size: 14, color: "#f44336" });
    case 3:
      return /* @__PURE__ */ e.jsx(Ae, { size: 14, color: "#8696a0" });
    case 4:
      return /* @__PURE__ */ e.jsx(Ae, { size: 14, color: "#53bdeb" });
    case 5:
      return /* @__PURE__ */ e.jsx(je, { size: 14, color: "#8696a0", style: { opacity: 0.6 } });
    default:
      return null;
  }
}
const N0 = ({ activity: t, icon: l, showIcon: s = !1, apiBaseUrl: i = "" }) => {
  const r = I(() => {
    if (!t) return null;
    const o = t.creation || (/* @__PURE__ */ new Date()).toISOString(), d = t.type === "Outgoing" || t.is_outbound === 1;
    return {
      name: t.name || `activity-${o}`,
      message: t.message || "",
      sender: d ? "You" : "Customer",
      creation: o,
      is_outbound: d ? 1 : 0,
      attach: t.attach,
      content_type: t.content_type,
      status: t.status,
      message_type: t.message_type
    };
  }, [t]);
  if (!r) return null;
  const n = r, m = n.is_outbound === 1;
  return /* @__PURE__ */ e.jsx("div", { className: "whatsapp-message-list", children: /* @__PURE__ */ e.jsxs("div", { className: `message-bubble ${m ? "sent" : "received"}`, children: [
    s && l && /* @__PURE__ */ e.jsx("div", { className: "message-icon-wrapper", children: l }),
    /* @__PURE__ */ e.jsxs("div", { className: "message-content", children: [
      A0(n.message) || n.message,
      n.attach && /* @__PURE__ */ e.jsx("div", { className: "message-attachment", children: n.content_type === "image" ? /* @__PURE__ */ e.jsx(
        "img",
        {
          src: n.attach.startsWith("http") ? n.attach : `${i}/${n.attach}`,
          alt: "attachment",
          style: { maxWidth: "200px", borderRadius: "4px", marginTop: "8px" }
        }
      ) : /* @__PURE__ */ e.jsx(
        "a",
        {
          href: n.attach.startsWith("http") ? n.attach : `${i}/${n.attach}`,
          target: "_blank",
          rel: "noreferrer",
          className: "message-attachment-link",
          children: n.attach.split("/").pop() || "Attachment"
        }
      ) }),
      /* @__PURE__ */ e.jsxs("div", { className: "message-time", children: [
        j0(n.creation),
        m ? b0(n.status, 1) : null
      ] })
    ] })
  ] }) });
}, Z0 = (t) => {
  const l = y0(t), s = t.renderChatMessageList || (({ activity: i, icon: r, showIcon: n }) => /* @__PURE__ */ e.jsx(
    N0,
    {
      activity: i,
      icon: r,
      showIcon: n,
      apiBaseUrl: t.apiBaseUrl || t.baseURL
    }
  ));
  return /* @__PURE__ */ e.jsx(Ot, { ...l, renderChatMessageList: s, currentUserEmail: t.currentUserEmail, children: /* @__PURE__ */ e.jsx(x0, {}) });
}, M0 = ({ activity: t }) => {
  const l = t.creation, s = l ? V(l) : { date: "Unknown", time: "" }, i = t.personName || "Unknown", r = t.notes || [];
  return /* @__PURE__ */ e.jsxs("div", { className: "activity-item call-notes-activity", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "activity-header", children: [
      /* @__PURE__ */ e.jsx(k, { content: "Call Notes", align: "left", children: /* @__PURE__ */ e.jsx("div", { className: "activity-icon-wrapper", children: /* @__PURE__ */ e.jsx(ze, { size: 20, color: "#175353" }) }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "activity-date-time", children: [
        s.date,
        " - ",
        s.time,
        ", ",
        i
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "activity-content", children: /* @__PURE__ */ e.jsx("div", { className: "call-notes-activity-card", children: r.map((n, m) => /* @__PURE__ */ e.jsx("div", { className: "call-notes-item", children: n }, m)) }) })
  ] });
};
export {
  u0 as ACTIVITY_TYPE_LABELS,
  ce as Activity,
  l0 as ActivityDateGroup,
  s0 as ActivityFilter,
  Ot as ActivityProvider,
  x0 as ActivityTab,
  Z0 as ActivityWidget,
  we as CallActivity,
  M0 as CallNotesActivity,
  qt as ChatActivity,
  Bt as EmailActivity,
  he as EmailRecipientRow,
  Xt as LeadActivity,
  Ee as NotesActivity,
  Wt as ReminderActivity,
  Ut as ScheduleActivity,
  Yt as TaskActivity,
  g0 as activityApi,
  d0 as buildActivityNodes,
  f0 as createDefaultApiClient,
  Jt as formatDuration,
  j0 as formatTimeLocale,
  ve as getActivityDate,
  Pt as getActivityDateKey,
  i0 as getActivityElementId,
  Ze as getActivityTimestamp,
  Kt as getBadgeColor,
  be as getDateKeyFromActivity,
  V as parseDateTime,
  A0 as parseMessageWithLinks,
  b0 as renderMessageStatusIcon,
  q as sanitizeHtmlLight,
  c0 as useActivities,
  J as useActivityConfig,
  v0 as useActivityTabLogic,
  Gt as useCallRecording,
  y0 as useDefaultActivityAdapter,
  ie as useExpandableContent,
  p0 as useFilterState
};
