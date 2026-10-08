import { D as I1, n as xe, r as R, o as ld, p as to, j as E, g as er, a as tr, s as Te, u as rr, q as kt, c as Q, e as nr, t as $1, v as l0, d as be, w as k1, x as R1, B as D1, m as Et, h as ro, y as $n, z as Ji, P as fd, T as Pe, A as bn, F as N1, G as yp, H as Qi, b as q1, I as f0, C as ea, J as d0, M as Mi, R as j, N as L1, l as Kl, E as p0, L as h0, K as zo, i as B1, O as F1, Q as Ii, S as z1, U as W1 } from "./remote-B9Lk1QPt.js";
import { o as mt, T as U1, g as v0, r as H1, a as gp, P as K1, u as G1, b as Gt, K as $i, c as V1 } from "./KpiCard-BvnDg0JL.js";
import { C as ta, a as ra, T as y0, b as g0, c as m0, d as kn, e as ke, f as b0, u as X1 } from "./useAsync-abeeagki.js";
const jr = {
  idleThresholdMinutes: { min: 5, max: 60 },
  analysisDays: { min: 7, max: I1 },
  equipmentEfficiencyPct: { min: 50, max: 100 }
};
var Wo = { exports: {} }, Uo, mp;
function Y1() {
  if (mp) return Uo;
  mp = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Uo = e, Uo;
}
var Ho, bp;
function Z1() {
  if (bp) return Ho;
  bp = 1;
  var e = /* @__PURE__ */ Y1();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ho = function() {
    function n(o, u, s, c, f, l) {
      if (l !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Ho;
}
var xp;
function J1() {
  return xp || (xp = 1, Wo.exports = /* @__PURE__ */ Z1()()), Wo.exports;
}
var Q1 = /* @__PURE__ */ J1();
const de = /* @__PURE__ */ xe(Q1);
function wp(...e) {
  return e.reduce((t, r) => r == null ? t : function(...i) {
    t.apply(this, i), r.apply(this, i);
  }, () => {
  });
}
function na(e) {
  return mt(e).defaultView || window;
}
const eS = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Gl = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = ld(), i = {
    enter: n.transitions.duration.enteringScreen,
    exit: n.transitions.duration.leavingScreen
  }, {
    addEndListener: a,
    appear: o = !0,
    children: u,
    easing: s,
    in: c,
    onEnter: f,
    onEntered: l,
    onEntering: d,
    onExit: h,
    onExited: y,
    onExiting: v,
    style: p,
    timeout: b = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: x = U1,
    ...w
  } = t, S = R.useRef(null), g = to(S, v0(u), r), m = (C) => (I) => {
    if (C) {
      const $ = S.current;
      I === void 0 ? C($) : C($, I);
    }
  }, O = m(d), _ = m((C, I) => {
    H1(C);
    const $ = gp({
      style: p,
      timeout: b,
      easing: s
    }, {
      mode: "enter"
    });
    C.style.webkitTransition = n.transitions.create("opacity", $), C.style.transition = n.transitions.create("opacity", $), f && f(C, I);
  }), P = m(l), k = m(v), T = m((C) => {
    const I = gp({
      style: p,
      timeout: b,
      easing: s
    }, {
      mode: "exit"
    });
    C.style.webkitTransition = n.transitions.create("opacity", I), C.style.transition = n.transitions.create("opacity", I), h && h(C);
  }), A = m(y), M = (C) => {
    a && a(S.current, C);
  };
  return /* @__PURE__ */ E.jsx(x, {
    appear: o,
    in: c,
    nodeRef: S,
    onEnter: _,
    onEntered: P,
    onEntering: O,
    onExit: T,
    onExited: A,
    onExiting: k,
    addEndListener: M,
    timeout: b,
    ...w,
    children: (C, {
      ownerState: I,
      ...$
    }) => /* @__PURE__ */ R.cloneElement(u, {
      style: {
        opacity: 0,
        visibility: C === "exited" && !c ? "hidden" : void 0,
        ...eS[C],
        ...p,
        ...u.props.style
      },
      ref: g,
      ...$
    })
  });
});
function tS(e) {
  return er("MuiBackdrop", e);
}
tr("MuiBackdrop", ["root", "invisible"]);
const rS = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return nr({
    root: ["root", r && "invisible"]
  }, tS, t);
}, nS = Te("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
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
}), x0 = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: i,
    className: a,
    component: o = "div",
    invisible: u = !1,
    open: s,
    components: c = {},
    componentsProps: f = {},
    slotProps: l = {},
    slots: d = {},
    TransitionComponent: h,
    transitionDuration: y,
    ...v
  } = n, p = {
    ...n,
    component: o,
    invisible: u
  }, b = rS(p), x = {
    transition: h,
    root: c.Root,
    ...d
  }, w = {
    ...f,
    ...l
  }, S = {
    component: o,
    slots: x,
    slotProps: w
  }, [g, m] = kt("root", {
    elementType: nS,
    externalForwardedProps: S,
    className: Q(b.root, a),
    ownerState: p
  }), [O, _] = kt("transition", {
    elementType: Gl,
    externalForwardedProps: S,
    ownerState: p
  });
  return /* @__PURE__ */ E.jsx(O, {
    in: s,
    timeout: y,
    ...v,
    ..._,
    children: /* @__PURE__ */ E.jsx(g, {
      "aria-hidden": !0,
      ...m,
      classes: b,
      ref: r,
      children: i
    })
  });
});
function iS(e) {
  return er("MuiButton", e);
}
const lr = tr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), aS = /* @__PURE__ */ R.createContext({}), oS = /* @__PURE__ */ R.createContext(void 0), uS = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: i,
    variant: a,
    loading: o,
    loadingPosition: u,
    classes: s
  } = e, c = {
    root: ["root", o && "loading", a, `${a}${be(t)}`, `size${be(i)}`, `${a}Size${be(i)}`, `color${be(t)}`, r && "disableElevation", n && "fullWidth", o && `loadingPosition${be(u)}`],
    startIcon: ["icon", "startIcon", `iconSize${be(i)}`],
    endIcon: ["icon", "endIcon", `iconSize${be(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = nr(c, iS, s);
  return {
    ...s,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, w0 = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], sS = Te(D1, {
  shouldForwardProp: (e) => R1(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${be(r.color)}`], t[`size${be(r.size)}`], t[`${r.variant}Size${be(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Et(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${lr.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${lr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${lr.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${lr.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(ro()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.alpha((e.vars || e).palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity),
            "--variant-outlinedBg": e.alpha((e.vars || e).palette.text.primary, (e.vars || e).palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${lr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${lr.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${lr.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), cS = Te("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${be(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...w0]
})), lS = Te("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${be(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...w0]
})), fS = Te("span", {
  name: "MuiButton",
  slot: "LoadingIndicator"
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Sp = Te("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ko = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = R.useContext(aS), i = R.useContext(oS), a = $1(n, t), o = rr({
    props: a,
    name: "MuiButton"
  }), {
    children: u,
    color: s = "primary",
    component: c = "button",
    className: f,
    disabled: l = !1,
    disableElevation: d = !1,
    disableFocusRipple: h = !1,
    endIcon: y,
    focusVisibleClassName: v,
    fullWidth: p = !1,
    id: b,
    loading: x = null,
    loadingIndicator: w,
    loadingPosition: S = "center",
    size: g = "medium",
    startIcon: m,
    type: O,
    variant: _ = "text",
    ...P
  } = o, k = l0(b), T = w ?? /* @__PURE__ */ E.jsx(k1, {
    "aria-labelledby": k,
    color: "inherit",
    size: 16
  }), A = {
    ...o,
    color: s,
    component: c,
    disabled: l,
    disableElevation: d,
    disableFocusRipple: h,
    fullWidth: p,
    loading: x,
    loadingIndicator: T,
    loadingPosition: S,
    size: g,
    type: O,
    variant: _
  }, M = uS(A), C = (m || x && S === "start") && /* @__PURE__ */ E.jsx(cS, {
    className: M.startIcon,
    ownerState: A,
    children: m || /* @__PURE__ */ E.jsx(Sp, {
      className: M.loadingIconPlaceholder,
      ownerState: A
    })
  }), I = (y || x && S === "end") && /* @__PURE__ */ E.jsx(lS, {
    className: M.endIcon,
    ownerState: A,
    children: y || /* @__PURE__ */ E.jsx(Sp, {
      className: M.loadingIconPlaceholder,
      ownerState: A
    })
  }), $ = i || "", N = typeof x == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ E.jsx("span", {
      className: M.loadingWrapper,
      style: {
        display: "contents"
      },
      children: x && /* @__PURE__ */ E.jsx(fS, {
        className: M.loadingIndicator,
        ownerState: A,
        children: T
      })
    })
  ) : null;
  return /* @__PURE__ */ E.jsxs(sS, {
    ownerState: A,
    className: Q(n.className, M.root, f, $),
    component: c,
    disabled: l || x,
    focusRipple: !h,
    focusVisibleClassName: Q(M.focusVisible, v),
    ref: r,
    type: O,
    id: x ? k : b,
    ...P,
    classes: M,
    children: [C, S !== "end" && N, u, S === "end" && N, I]
  });
});
function dS(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function pS(e) {
  const t = mt(e);
  return t.body === e ? na(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Rn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Op(e) {
  return parseInt(na(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function hS(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), n = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || n;
}
function _p(e, t, r, n, i) {
  const a = [t, r, ...n];
  [].forEach.call(e.children, (o) => {
    const u = !a.includes(o), s = !hS(o);
    u && s && Rn(o, i);
  });
}
function Go(e, t) {
  let r = -1;
  return e.some((n, i) => t(n) ? (r = i, !0) : !1), r;
}
function vS(e, t) {
  const r = [], n = e.container;
  if (!t.disableScrollLock) {
    if (pS(n)) {
      const o = dS(na(n));
      r.push({
        value: n.style.paddingRight,
        property: "padding-right",
        el: n
      }), n.style.paddingRight = `${Op(n) + o}px`;
      const u = mt(n).querySelectorAll(".mui-fixed");
      [].forEach.call(u, (s) => {
        r.push({
          value: s.style.paddingRight,
          property: "padding-right",
          el: s
        }), s.style.paddingRight = `${Op(s) + o}px`;
      });
    }
    let a;
    if (n.parentNode instanceof DocumentFragment)
      a = mt(n).body;
    else {
      const o = n.parentElement, u = na(n);
      a = o?.nodeName === "HTML" && u.getComputedStyle(o).overflowY === "scroll" ? o : n;
    }
    r.push({
      value: a.style.overflow,
      property: "overflow",
      el: a
    }, {
      value: a.style.overflowX,
      property: "overflow-x",
      el: a
    }, {
      value: a.style.overflowY,
      property: "overflow-y",
      el: a
    }), a.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: a,
      el: o,
      property: u
    }) => {
      a ? o.style.setProperty(u, a) : o.style.removeProperty(u);
    });
  };
}
function yS(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class gS {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let n = this.modals.indexOf(t);
    if (n !== -1)
      return n;
    n = this.modals.length, this.modals.push(t), t.modalRef && Rn(t.modalRef, !1);
    const i = yS(r);
    _p(r, t.mount, t.modalRef, i, !0);
    const a = Go(this.containers, (o) => o.container === r);
    return a !== -1 ? (this.containers[a].modals.push(t), n) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: i
    }), n);
  }
  mount(t, r) {
    const n = Go(this.containers, (a) => a.modals.includes(t)), i = this.containers[n];
    i.restore || (i.restore = vS(i, r));
  }
  remove(t, r = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1)
      return n;
    const i = Go(this.containers, (o) => o.modals.includes(t)), a = this.containers[i];
    if (a.modals.splice(a.modals.indexOf(t), 1), this.modals.splice(n, 1), a.modals.length === 0)
      a.restore && a.restore(), t.modalRef && Rn(t.modalRef, r), _p(a.container, t.mount, t.modalRef, a.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const o = a.modals[a.modals.length - 1];
      o.modalRef && Rn(o.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const mS = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function bS(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function xS(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function wS(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || xS(e));
}
function SS(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(mS)).forEach((n, i) => {
    const a = bS(n);
    a === -1 || !wS(n) || (a === 0 ? t.push(n) : r.push({
      documentOrder: i,
      tabIndex: a,
      node: n
    }));
  }), r.sort((n, i) => n.tabIndex === i.tabIndex ? n.documentOrder - i.documentOrder : n.tabIndex - i.tabIndex).map((n) => n.node).concat(t);
}
function OS() {
  return !0;
}
function _S(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: n = !1,
    disableRestoreFocus: i = !1,
    getTabbable: a = SS,
    isEnabled: o = OS,
    open: u
  } = e, s = R.useRef(!1), c = R.useRef(null), f = R.useRef(null), l = R.useRef(null), d = R.useRef(null), h = R.useRef(!1), y = R.useRef(null), v = to(v0(t), y), p = R.useRef(null);
  R.useEffect(() => {
    !u || !y.current || (h.current = !r);
  }, [r, u]), R.useEffect(() => {
    if (!u || !y.current)
      return;
    const w = mt(y.current);
    return y.current.contains(w.activeElement) || (y.current.hasAttribute("tabIndex") || y.current.setAttribute("tabIndex", "-1"), h.current && y.current.focus()), () => {
      i || (l.current && l.current.focus && (s.current = !0, l.current.focus()), l.current = null);
    };
  }, [u]), R.useEffect(() => {
    if (!u || !y.current)
      return;
    const w = mt(y.current), S = (O) => {
      p.current = O, !(n || !o() || O.key !== "Tab") && w.activeElement === y.current && O.shiftKey && (s.current = !0, f.current && f.current.focus());
    }, g = () => {
      const O = y.current;
      if (O === null)
        return;
      if (!w.hasFocus() || !o() || s.current) {
        s.current = !1;
        return;
      }
      if (O.contains(w.activeElement) || n && w.activeElement !== c.current && w.activeElement !== f.current)
        return;
      if (w.activeElement !== d.current)
        d.current = null;
      else if (d.current !== null)
        return;
      if (!h.current)
        return;
      let _ = [];
      if ((w.activeElement === c.current || w.activeElement === f.current) && (_ = a(y.current)), _.length > 0) {
        const P = !!(p.current?.shiftKey && p.current?.key === "Tab"), k = _[0], T = _[_.length - 1];
        typeof k != "string" && typeof T != "string" && (P ? T.focus() : k.focus());
      } else
        O.focus();
    };
    w.addEventListener("focusin", g), w.addEventListener("keydown", S, !0);
    const m = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && g();
    }, 50);
    return () => {
      clearInterval(m), w.removeEventListener("focusin", g), w.removeEventListener("keydown", S, !0);
    };
  }, [r, n, i, o, u, a]);
  const b = (w) => {
    l.current === null && (l.current = w.relatedTarget), h.current = !0, d.current = w.target;
    const S = t.props.onFocus;
    S && S(w);
  }, x = (w) => {
    l.current === null && (l.current = w.relatedTarget), h.current = !0;
  };
  return /* @__PURE__ */ E.jsxs(R.Fragment, {
    children: [/* @__PURE__ */ E.jsx("div", {
      tabIndex: u ? 0 : -1,
      onFocus: x,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ R.cloneElement(t, {
      ref: v,
      onFocus: b
    }), /* @__PURE__ */ E.jsx("div", {
      tabIndex: u ? 0 : -1,
      onFocus: x,
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
function PS(e) {
  return typeof e == "function" ? e() : e;
}
function AS(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Pp = () => {
}, ki = new gS();
function TS(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: n = !1,
    closeAfterTransition: i = !1,
    onTransitionEnter: a,
    onTransitionExited: o,
    children: u,
    onClose: s,
    open: c,
    rootRef: f
  } = e, l = R.useRef({}), d = R.useRef(null), h = R.useRef(null), y = to(h, f), [v, p] = R.useState(!c), b = AS(u);
  let x = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (x = !1);
  const w = () => mt(d.current), S = () => (l.current.modalRef = h.current, l.current.mount = d.current, l.current), g = () => {
    ki.mount(S(), {
      disableScrollLock: n
    }), h.current && (h.current.scrollTop = 0);
  }, m = $n(() => {
    const I = PS(t) || w().body;
    ki.add(S(), I), h.current && g();
  }), O = () => ki.isTopModal(S()), _ = $n((I) => {
    d.current = I, I && (c && O() ? g() : h.current && Rn(h.current, x));
  }), P = R.useCallback(() => {
    ki.remove(S(), x);
  }, [x]);
  R.useEffect(() => () => {
    P();
  }, [P]), R.useEffect(() => {
    c ? m() : (!b || !i) && P();
  }, [c, P, b, i, m]);
  const k = (I) => ($) => {
    I.onKeyDown?.($), !($.key !== "Escape" || $.which === 229 || // Wait until IME is settled.
    !O()) && (r || ($.stopPropagation(), s && s($, "escapeKeyDown")));
  }, T = (I) => ($) => {
    I.onClick?.($), $.target === $.currentTarget && s && s($, "backdropClick");
  };
  return {
    getRootProps: (I = {}) => {
      const $ = Ji(e);
      delete $.onTransitionEnter, delete $.onTransitionExited;
      const N = {
        ...$,
        ...I
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...N,
        onKeyDown: k(N),
        ref: y
      };
    },
    getBackdropProps: (I = {}) => {
      const $ = I;
      return {
        "aria-hidden": !0,
        ...$,
        onClick: T($),
        open: c
      };
    },
    getTransitionProps: () => {
      const I = () => {
        p(!1), a && a();
      }, $ = () => {
        p(!0), o && o(), i && P();
      };
      return {
        onEnter: wp(I, u?.props.onEnter ?? Pp),
        onExited: wp($, u?.props.onExited ?? Pp)
      };
    },
    rootRef: y,
    portalRef: _,
    isTopModal: O,
    exited: v,
    hasTransition: b
  };
}
function ES(e) {
  return er("MuiModal", e);
}
tr("MuiModal", ["root", "hidden", "backdrop"]);
const jS = (e) => {
  const {
    open: t,
    exited: r,
    classes: n
  } = e;
  return nr({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, ES, n);
}, CS = Te("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(Et(({
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
}))), MS = Te(x0, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), IS = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = rr({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: i = MS,
    BackdropProps: a,
    classes: o,
    className: u,
    closeAfterTransition: s = !1,
    children: c,
    container: f,
    component: l,
    components: d = {},
    componentsProps: h = {},
    disableAutoFocus: y = !1,
    disableEnforceFocus: v = !1,
    disableEscapeKeyDown: p = !1,
    disablePortal: b = !1,
    disableRestoreFocus: x = !1,
    disableScrollLock: w = !1,
    hideBackdrop: S = !1,
    keepMounted: g = !1,
    onClose: m,
    onTransitionEnter: O,
    onTransitionExited: _,
    open: P,
    slotProps: k = {},
    slots: T = {},
    // eslint-disable-next-line react/prop-types
    theme: A,
    ...M
  } = n, C = {
    ...n,
    closeAfterTransition: s,
    disableAutoFocus: y,
    disableEnforceFocus: v,
    disableEscapeKeyDown: p,
    disablePortal: b,
    disableRestoreFocus: x,
    disableScrollLock: w,
    hideBackdrop: S,
    keepMounted: g
  }, {
    getRootProps: I,
    getBackdropProps: $,
    getTransitionProps: N,
    portalRef: L,
    isTopModal: F,
    exited: H,
    hasTransition: W
  } = TS({
    ...C,
    rootRef: r
  }), B = {
    ...C,
    exited: H
  }, X = jS(B), ie = {};
  if (c.props.tabIndex === void 0 && (ie.tabIndex = "-1"), W) {
    const {
      onEnter: Y,
      onExited: Z
    } = N();
    ie.onEnter = Y, ie.onExited = Z;
  }
  const le = {
    slots: {
      root: d.Root,
      backdrop: d.Backdrop,
      ...T
    },
    slotProps: {
      ...h,
      ...k
    }
  }, [Ee, We] = kt("root", {
    ref: r,
    elementType: CS,
    externalForwardedProps: {
      ...le,
      ...M,
      component: l
    },
    getSlotProps: I,
    ownerState: B,
    className: Q(u, X?.root, !B.open && B.exited && X?.hidden)
  }), [ge, z] = kt("backdrop", {
    ref: a?.ref,
    elementType: i,
    externalForwardedProps: le,
    shouldForwardComponentProp: !0,
    additionalProps: a,
    getSlotProps: (Y) => $({
      ...Y,
      onClick: (Z) => {
        Y?.onClick && Y.onClick(Z);
      }
    }),
    className: Q(a?.className, X?.backdrop),
    ownerState: B
  });
  return !g && !P && (!W || H) ? null : /* @__PURE__ */ E.jsx(K1, {
    ref: L,
    container: f,
    disablePortal: b,
    children: /* @__PURE__ */ E.jsxs(Ee, {
      ...We,
      children: [!S && i ? /* @__PURE__ */ E.jsx(ge, {
        ...z
      }) : null, /* @__PURE__ */ E.jsx(_S, {
        disableEnforceFocus: v,
        disableAutoFocus: y,
        disableRestoreFocus: x,
        isEnabled: F,
        open: P,
        children: /* @__PURE__ */ R.cloneElement(c, ie)
      })]
    })
  });
});
function $S(e) {
  return er("MuiDialog", e);
}
const Vo = tr("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), S0 = /* @__PURE__ */ R.createContext({}), kS = Te(x0, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), RS = (e) => {
  const {
    classes: t,
    scroll: r,
    maxWidth: n,
    fullWidth: i,
    fullScreen: a
  } = e, o = {
    root: ["root"],
    container: ["container", `scroll${be(r)}`],
    paper: ["paper", `paperScroll${be(r)}`, `paperWidth${be(String(n))}`, i && "paperFullWidth", a && "paperFullScreen"]
  };
  return nr(o, $S, t);
}, DS = Te(IS, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), NS = Te("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.container, t[`scroll${be(r.scroll)}`]];
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
}), qS = Te(fd, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.paper, t[`scrollPaper${be(r.scroll)}`], t[`paperWidth${be(String(r.maxWidth))}`], r.fullWidth && t.paperFullWidth, r.fullScreen && t.paperFullScreen];
  }
})(Et(({
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
      [`&.${Vo.paperScrollBody}`]: {
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
      [`&.${Vo.paperScrollBody}`]: {
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
      [`&.${Vo.paperScrollBody}`]: {
        margin: 0,
        maxWidth: "100%"
      }
    }
  }]
}))), LS = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiDialog"
  }), i = ld(), a = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    "aria-describedby": o,
    "aria-labelledby": u,
    "aria-modal": s = !0,
    BackdropComponent: c,
    BackdropProps: f,
    children: l,
    className: d,
    disableEscapeKeyDown: h = !1,
    fullScreen: y = !1,
    fullWidth: v = !1,
    maxWidth: p = "sm",
    onClick: b,
    onClose: x,
    open: w,
    PaperComponent: S = fd,
    PaperProps: g = {},
    scroll: m = "paper",
    slots: O = {},
    slotProps: _ = {},
    TransitionComponent: P = Gl,
    transitionDuration: k = a,
    TransitionProps: T,
    ...A
  } = n, M = {
    ...n,
    disableEscapeKeyDown: h,
    fullScreen: y,
    fullWidth: v,
    maxWidth: p,
    scroll: m
  }, C = RS(M), I = R.useRef(), $ = (ee) => {
    I.current = ee.target === ee.currentTarget;
  }, N = (ee) => {
    b && b(ee), I.current && (I.current = null, x && x(ee, "backdropClick"));
  }, L = l0(u), F = R.useMemo(() => ({
    titleId: L
  }), [L]), H = {
    transition: P,
    ...O
  }, W = {
    transition: T,
    paper: g,
    backdrop: f,
    ..._
  }, B = {
    slots: H,
    slotProps: W
  }, [X, ie] = kt("root", {
    elementType: DS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: B,
    ownerState: M,
    className: Q(C.root, d),
    ref: r
  }), [le, Ee] = kt("backdrop", {
    elementType: kS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: B,
    ownerState: M
  }), [We, ge] = kt("paper", {
    elementType: qS,
    shouldForwardComponentProp: !0,
    externalForwardedProps: B,
    ownerState: M,
    className: Q(C.paper, g.className)
  }), [z, Y] = kt("container", {
    elementType: NS,
    externalForwardedProps: B,
    ownerState: M,
    className: C.container
  }), [Z, q] = kt("transition", {
    elementType: Gl,
    externalForwardedProps: B,
    ownerState: M,
    additionalProps: {
      appear: !0,
      in: w,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ E.jsx(X, {
    closeAfterTransition: !0,
    slots: {
      backdrop: le
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        as: c,
        ...Ee
      }
    },
    disableEscapeKeyDown: h,
    onClose: x,
    open: w,
    onClick: N,
    ...ie,
    ...A,
    children: /* @__PURE__ */ E.jsx(Z, {
      ...q,
      children: /* @__PURE__ */ E.jsx(z, {
        onMouseDown: $,
        ...Y,
        children: /* @__PURE__ */ E.jsx(We, {
          as: S,
          elevation: 24,
          role: "dialog",
          "aria-describedby": o,
          "aria-labelledby": L,
          "aria-modal": s,
          ...ge,
          children: /* @__PURE__ */ E.jsx(S0.Provider, {
            value: F,
            children: l
          })
        })
      })
    })
  });
});
function BS(e) {
  return er("MuiDialogActions", e);
}
tr("MuiDialogActions", ["root", "spacing"]);
const FS = (e) => {
  const {
    classes: t,
    disableSpacing: r
  } = e;
  return nr({
    root: ["root", !r && "spacing"]
  }, BS, t);
}, zS = Te("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disableSpacing && t.spacing];
  }
})({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableSpacing,
    style: {
      "& > :not(style) ~ :not(style)": {
        marginLeft: 8
      }
    }
  }]
}), WS = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: i,
    disableSpacing: a = !1,
    ...o
  } = n, u = {
    ...n,
    disableSpacing: a
  }, s = FS(u);
  return /* @__PURE__ */ E.jsx(zS, {
    className: Q(s.root, i),
    ownerState: u,
    ref: r,
    ...o
  });
});
function US(e) {
  return er("MuiDialogContent", e);
}
tr("MuiDialogContent", ["root", "dividers"]);
function HS(e) {
  return er("MuiDialogTitle", e);
}
const KS = tr("MuiDialogTitle", ["root"]), GS = (e) => {
  const {
    classes: t,
    dividers: r
  } = e;
  return nr({
    root: ["root", r && "dividers"]
  }, US, t);
}, VS = Te("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.dividers && t.dividers];
  }
})(Et(({
  theme: e
}) => ({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px",
  variants: [{
    props: ({
      ownerState: t
    }) => t.dividers,
    style: {
      padding: "16px 24px",
      borderTop: `1px solid ${(e.vars || e).palette.divider}`,
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dividers,
    style: {
      [`.${KS.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), XS = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: i,
    dividers: a = !1,
    ...o
  } = n, u = {
    ...n,
    dividers: a
  }, s = GS(u);
  return /* @__PURE__ */ E.jsx(VS, {
    className: Q(s.root, i),
    ownerState: u,
    ref: r,
    ...o
  });
}), YS = (e) => {
  const {
    classes: t
  } = e;
  return nr({
    root: ["root"]
  }, HS, t);
}, ZS = Te(Pe, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), JS = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: i,
    id: a,
    ...o
  } = n, u = n, s = YS(u), {
    titleId: c = a
  } = R.useContext(S0);
  return /* @__PURE__ */ E.jsx(ZS, {
    component: "h2",
    className: Q(s.root, i),
    ownerState: u,
    ref: r,
    variant: "h6",
    id: a ?? c,
    ...o
  });
}), QS = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
function eO(e, t, r = (n, i) => n === i) {
  return e.length === t.length && e.every((n, i) => r(n, t[i]));
}
const tO = 2;
function Cr(e, t, r, n, i) {
  return r === 1 ? Math.min(e + t, i) : Math.max(e - t, n);
}
function O0(e, t) {
  return e - t;
}
function Ap(e, t) {
  const {
    index: r
  } = e.reduce((n, i, a) => {
    const o = Math.abs(t - i);
    return n === null || o < n.distance || o === n.distance ? {
      distance: o,
      index: a
    } : n;
  }, null) ?? {};
  return r;
}
function Ri(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const r = e;
    for (let n = 0; n < r.changedTouches.length; n += 1) {
      const i = r.changedTouches[n];
      if (i.identifier === t.current)
        return {
          x: i.clientX,
          y: i.clientY
        };
    }
    return !1;
  }
  return {
    x: e.clientX,
    y: e.clientY
  };
}
function ia(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function rO(e, t, r) {
  return (r - t) * e + t;
}
function nO(e) {
  if (Math.abs(e) < 1) {
    const r = e.toExponential().split("e-"), n = r[0].split(".")[1];
    return (n ? n.length : 0) + parseInt(r[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function iO(e, t, r) {
  const n = Math.round((e - r) / t) * t + r;
  return Number(n.toFixed(nO(t)));
}
function Tp({
  values: e,
  newValue: t,
  index: r
}) {
  const n = e.slice();
  return n[r] = t, n.sort(O0);
}
function Di({
  sliderRef: e,
  activeIndex: t,
  setActive: r
}) {
  const n = mt(e.current);
  (!e.current?.contains(n.activeElement) || Number(n?.activeElement?.getAttribute("data-index")) !== t) && e.current?.querySelector(`[type="range"][data-index="${t}"]`).focus(), r && r(t);
}
function Ni(e, t) {
  return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? eO(e, t) : !1;
}
const aO = {
  horizontal: {
    offset: (e) => ({
      left: `${e}%`
    }),
    leap: (e) => ({
      width: `${e}%`
    })
  },
  "horizontal-reverse": {
    offset: (e) => ({
      right: `${e}%`
    }),
    leap: (e) => ({
      width: `${e}%`
    })
  },
  vertical: {
    offset: (e) => ({
      bottom: `${e}%`
    }),
    leap: (e) => ({
      height: `${e}%`
    })
  }
}, oO = (e) => e;
let qi;
function Ep() {
  return qi === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? qi = CSS.supports("touch-action", "none") : qi = !0), qi;
}
function uO(e) {
  const {
    "aria-labelledby": t,
    defaultValue: r,
    disabled: n = !1,
    disableSwap: i = !1,
    isRtl: a = !1,
    marks: o = !1,
    max: u = 100,
    min: s = 0,
    name: c,
    onChange: f,
    onChangeCommitted: l,
    orientation: d = "horizontal",
    rootRef: h,
    scale: y = oO,
    step: v = 1,
    shiftStep: p = 10,
    tabIndex: b,
    value: x
  } = e, w = R.useRef(void 0), [S, g] = R.useState(-1), [m, O] = R.useState(-1), [_, P] = R.useState(!1), k = R.useRef(0), T = R.useRef(null), [A, M] = G1({
    controlled: x,
    default: r ?? s,
    name: "Slider"
  }), C = f && ((K, G, re) => {
    const ue = K.nativeEvent || K, oe = new ue.constructor(ue.type, ue);
    Object.defineProperty(oe, "target", {
      writable: !0,
      value: {
        value: G,
        name: c
      }
    }), T.current = G, f(oe, G, re);
  }), I = Array.isArray(A);
  let $ = I ? A.slice().sort(O0) : [A];
  $ = $.map((K) => K == null ? s : bn(K, s, u));
  const N = o === !0 && v !== null ? [...Array(Math.floor((u - s) / v) + 1)].map((K, G) => ({
    value: s + v * G
  })) : o || [], L = N.map((K) => K.value), [F, H] = R.useState(-1), W = R.useRef(null), B = to(h, W), X = (K) => (G) => {
    const re = Number(G.currentTarget.getAttribute("data-index"));
    yp(G.target) && H(re), O(re), K?.onFocus?.(G);
  }, ie = (K) => (G) => {
    yp(G.target) || H(-1), O(-1), K?.onBlur?.(G);
  }, le = (K, G) => {
    const re = Number(K.currentTarget.getAttribute("data-index")), ue = $[re], oe = L.indexOf(ue);
    let ae = G;
    if (N && v == null) {
      const Je = L[L.length - 1];
      ae >= Je ? ae = Je : ae <= L[0] ? ae = L[0] : ae = ae < ue ? L[oe - 1] : L[oe + 1];
    }
    if (ae = bn(ae, s, u), I) {
      i && (ae = bn(ae, $[re - 1] || -1 / 0, $[re + 1] || 1 / 0));
      const Je = ae;
      ae = Tp({
        values: $,
        newValue: ae,
        index: re
      });
      let it = re;
      i || (it = ae.indexOf(Je)), Di({
        sliderRef: W,
        activeIndex: it
      });
    }
    M(ae), H(re), C && !Ni(ae, A) && C(K, ae, re), l && l(K, T.current ?? ae);
  }, Ee = (K) => (G) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(G.key)) {
      G.preventDefault();
      const re = Number(G.currentTarget.getAttribute("data-index")), ue = $[re];
      let oe = null;
      if (v != null) {
        const ae = G.shiftKey ? p : v;
        switch (G.key) {
          case "ArrowUp":
            oe = Cr(ue, ae, 1, s, u);
            break;
          case "ArrowRight":
            oe = Cr(ue, ae, a ? -1 : 1, s, u);
            break;
          case "ArrowDown":
            oe = Cr(ue, ae, -1, s, u);
            break;
          case "ArrowLeft":
            oe = Cr(ue, ae, a ? 1 : -1, s, u);
            break;
          case "PageUp":
            oe = Cr(ue, p, 1, s, u);
            break;
          case "PageDown":
            oe = Cr(ue, p, -1, s, u);
            break;
          case "Home":
            oe = s;
            break;
          case "End":
            oe = u;
            break;
        }
      } else if (N) {
        const ae = L[L.length - 1], Je = L.indexOf(ue), it = [a ? "ArrowRight" : "ArrowLeft", "ArrowDown", "PageDown", "Home"], Ie = [a ? "ArrowLeft" : "ArrowRight", "ArrowUp", "PageUp", "End"];
        it.includes(G.key) ? Je === 0 ? oe = L[0] : oe = L[Je - 1] : Ie.includes(G.key) && (Je === L.length - 1 ? oe = ae : oe = L[Je + 1]);
      }
      oe != null && le(G, oe);
    }
    K?.onKeyDown?.(G);
  };
  N1(() => {
    n && W.current.contains(document.activeElement) && document.activeElement?.blur();
  }, [n]), n && S !== -1 && g(-1), n && F !== -1 && H(-1);
  const We = (K) => (G) => {
    K.onChange?.(G), le(G, G.target.valueAsNumber);
  }, ge = R.useRef(void 0);
  let z = d;
  a && d === "horizontal" && (z += "-reverse");
  const Y = ({
    finger: K,
    move: G = !1
  }) => {
    const {
      current: re
    } = W, {
      width: ue,
      height: oe,
      bottom: ae,
      left: Je
    } = re.getBoundingClientRect();
    let it;
    z.startsWith("vertical") ? it = (ae - K.y) / oe : it = (K.x - Je) / ue, z.includes("-reverse") && (it = 1 - it);
    let Ie;
    if (Ie = rO(it, s, u), v)
      Ie = iO(Ie, v, s);
    else {
      const mn = Ap(L, Ie);
      Ie = L[mn];
    }
    Ie = bn(Ie, s, u);
    let St = 0;
    if (I) {
      G ? St = ge.current : St = Ap($, Ie), i && (Ie = bn(Ie, $[St - 1] || -1 / 0, $[St + 1] || 1 / 0));
      const mn = Ie;
      Ie = Tp({
        values: $,
        newValue: Ie,
        index: St
      }), i && G || (St = Ie.indexOf(mn), ge.current = St);
    }
    return {
      newValue: Ie,
      activeIndex: St
    };
  }, Z = $n((K) => {
    const G = Ri(K, w);
    if (!G)
      return;
    if (k.current += 1, K.type === "mousemove" && K.buttons === 0) {
      q(K);
      return;
    }
    const {
      newValue: re,
      activeIndex: ue
    } = Y({
      finger: G,
      move: !0
    });
    Di({
      sliderRef: W,
      activeIndex: ue,
      setActive: g
    }), M(re), !_ && k.current > tO && P(!0), C && !Ni(re, A) && C(K, re, ue);
  }), q = $n((K) => {
    const G = Ri(K, w);
    if (P(!1), !G)
      return;
    const {
      newValue: re
    } = Y({
      finger: G,
      move: !0
    });
    g(-1), K.type === "touchend" && O(-1), l && l(K, T.current ?? re), w.current = void 0, te();
  }), ee = $n((K) => {
    if (n)
      return;
    Ep() || K.preventDefault();
    const G = K.changedTouches[0];
    G != null && (w.current = G.identifier);
    const re = Ri(K, w);
    if (re !== !1) {
      const {
        newValue: oe,
        activeIndex: ae
      } = Y({
        finger: re
      });
      Di({
        sliderRef: W,
        activeIndex: ae,
        setActive: g
      }), M(oe), C && !Ni(oe, A) && C(K, oe, ae);
    }
    k.current = 0;
    const ue = mt(W.current);
    ue.addEventListener("touchmove", Z, {
      passive: !0
    }), ue.addEventListener("touchend", q, {
      passive: !0
    });
  }), te = R.useCallback(() => {
    const K = mt(W.current);
    K.removeEventListener("mousemove", Z), K.removeEventListener("mouseup", q), K.removeEventListener("touchmove", Z), K.removeEventListener("touchend", q);
  }, [q, Z]);
  R.useEffect(() => {
    const {
      current: K
    } = W;
    return K.addEventListener("touchstart", ee, {
      passive: Ep()
    }), () => {
      K.removeEventListener("touchstart", ee), te();
    };
  }, [te, ee]), R.useEffect(() => {
    n && te();
  }, [n, te]);
  const _e = (K) => (G) => {
    if (K.onMouseDown?.(G), n || G.defaultPrevented || G.button !== 0)
      return;
    G.preventDefault();
    const re = Ri(G, w);
    if (re !== !1) {
      const {
        newValue: oe,
        activeIndex: ae
      } = Y({
        finger: re
      });
      Di({
        sliderRef: W,
        activeIndex: ae,
        setActive: g
      }), M(oe), C && !Ni(oe, A) && C(G, oe, ae);
    }
    k.current = 0;
    const ue = mt(W.current);
    ue.addEventListener("mousemove", Z, {
      passive: !0
    }), ue.addEventListener("mouseup", q);
  }, Se = ia(I ? $[0] : s, s, u), fe = ia($[$.length - 1], s, u) - Se, Xe = (K = {}) => {
    const G = Ji(K), re = {
      onMouseDown: _e(G || {})
    }, ue = {
      ...G,
      ...re
    };
    return {
      ...K,
      ref: B,
      ...ue
    };
  }, pt = (K) => (G) => {
    K.onMouseOver?.(G);
    const re = Number(G.currentTarget.getAttribute("data-index"));
    O(re);
  }, Ct = (K) => (G) => {
    K.onMouseLeave?.(G), O(-1);
  }, rt = (K = {}) => {
    const G = Ji(K), re = {
      onMouseOver: pt(G || {}),
      onMouseLeave: Ct(G || {})
    };
    return {
      ...K,
      ...G,
      ...re
    };
  }, nt = (K) => ({
    // So the non active thumb doesn't show its label on hover.
    pointerEvents: S !== -1 && S !== K ? "none" : void 0
  });
  let wt;
  return d === "vertical" && (wt = a ? "vertical-rl" : "vertical-lr"), {
    active: S,
    axis: z,
    axisProps: aO,
    dragging: _,
    focusedThumbIndex: F,
    getHiddenInputProps: (K = {}) => {
      const G = Ji(K), re = {
        onChange: We(G || {}),
        onFocus: X(G || {}),
        onBlur: ie(G || {}),
        onKeyDown: Ee(G || {})
      }, ue = {
        ...G,
        ...re
      };
      return {
        tabIndex: b,
        "aria-labelledby": t,
        "aria-orientation": d,
        "aria-valuemax": y(u),
        "aria-valuemin": y(s),
        name: c,
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step === null && e.marks ? "any" : e.step ?? void 0,
        disabled: n,
        ...K,
        ...ue,
        style: {
          ...QS,
          direction: a ? "rtl" : "ltr",
          // So that VoiceOver's focus indicator matches the thumb's dimensions
          width: "100%",
          height: "100%",
          writingMode: wt
        }
      };
    },
    getRootProps: Xe,
    getThumbProps: rt,
    marks: N,
    open: m,
    range: I,
    rootRef: B,
    trackLeap: fe,
    trackOffset: Se,
    values: $,
    getThumbStyle: nt
  };
}
const sO = (e) => !e || !Qi(e);
function cO(e) {
  return er("MuiSlider", e);
}
const st = tr("MuiSlider", ["root", "active", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "disabled", "dragging", "focusVisible", "mark", "markActive", "marked", "markLabel", "markLabelActive", "rail", "sizeSmall", "thumb", "thumbColorPrimary", "thumbColorSecondary", "thumbColorError", "thumbColorSuccess", "thumbColorInfo", "thumbColorWarning", "track", "trackInverted", "trackFalse", "thumbSizeSmall", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel", "vertical"]), lO = (e) => {
  const {
    open: t
  } = e;
  return {
    offset: Q(t && st.valueLabelOpen),
    circle: st.valueLabelCircle,
    label: st.valueLabelLabel
  };
};
function fO(e) {
  const {
    children: t,
    className: r,
    value: n
  } = e, i = lO(e);
  return t ? /* @__PURE__ */ R.cloneElement(t, {
    className: t.props.className
  }, /* @__PURE__ */ E.jsxs(R.Fragment, {
    children: [t.props.children, /* @__PURE__ */ E.jsx("span", {
      className: Q(i.offset, r),
      "aria-hidden": !0,
      children: /* @__PURE__ */ E.jsx("span", {
        className: i.circle,
        children: /* @__PURE__ */ E.jsx("span", {
          className: i.label,
          children: n
        })
      })
    })]
  })) : null;
}
function jp(e) {
  return e;
}
const dO = Te("span", {
  name: "MuiSlider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`color${be(r.color)}`], r.size !== "medium" && t[`size${be(r.size)}`], r.marked && t.marked, r.orientation === "vertical" && t.vertical, r.track === "inverted" && t.trackInverted, r.track === !1 && t.trackFalse];
  }
})(Et(({
  theme: e
}) => ({
  borderRadius: 12,
  boxSizing: "content-box",
  display: "inline-block",
  position: "relative",
  cursor: "pointer",
  touchAction: "none",
  WebkitTapHighlightColor: "transparent",
  "@media print": {
    colorAdjust: "exact"
  },
  [`&.${st.disabled}`]: {
    pointerEvents: "none",
    cursor: "default",
    color: (e.vars || e).palette.grey[400]
  },
  [`&.${st.dragging}`]: {
    [`& .${st.thumb}, & .${st.track}`]: {
      transition: "none"
    }
  },
  variants: [...Object.entries(e.palette).filter(ro()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), {
    props: {
      orientation: "horizontal"
    },
    style: {
      height: 4,
      width: "100%",
      padding: "13px 0",
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      "@media (pointer: coarse)": {
        // Reach 42px touch target, about ~8mm on screen.
        padding: "20px 0"
      }
    }
  }, {
    props: {
      orientation: "horizontal",
      size: "small"
    },
    style: {
      height: 2
    }
  }, {
    props: {
      orientation: "horizontal",
      marked: !0
    },
    style: {
      marginBottom: 20
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      width: 4,
      padding: "0 13px",
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      "@media (pointer: coarse)": {
        // Reach 42px touch target, about ~8mm on screen.
        padding: "0 20px"
      }
    }
  }, {
    props: {
      orientation: "vertical",
      size: "small"
    },
    style: {
      width: 2
    }
  }, {
    props: {
      orientation: "vertical",
      marked: !0
    },
    style: {
      marginRight: 44
    }
  }]
}))), pO = Te("span", {
  name: "MuiSlider",
  slot: "Rail"
})({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  backgroundColor: "currentColor",
  opacity: 0.38,
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      width: "100%",
      height: "inherit",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      height: "100%",
      width: "inherit",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, {
    props: {
      track: "inverted"
    },
    style: {
      opacity: 1
    }
  }]
}), hO = Te("span", {
  name: "MuiSlider",
  slot: "Track"
})(Et(({
  theme: e
}) => ({
  display: "block",
  position: "absolute",
  borderRadius: "inherit",
  border: "1px solid currentColor",
  backgroundColor: "currentColor",
  transition: e.transitions.create(["left", "width", "bottom", "height"], {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      size: "small"
    },
    style: {
      border: "none"
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      height: "inherit",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      width: "inherit",
      left: "50%",
      transform: "translateX(-50%)"
    }
  }, {
    props: {
      track: !1
    },
    style: {
      display: "none"
    }
  }, ...Object.entries(e.palette).filter(ro()).map(([t]) => ({
    props: {
      color: t,
      track: "inverted"
    },
    style: {
      ...e.vars ? {
        backgroundColor: e.vars.palette.Slider[`${t}Track`],
        borderColor: e.vars.palette.Slider[`${t}Track`]
      } : {
        backgroundColor: e.lighten(e.palette[t].main, 0.62),
        borderColor: e.lighten(e.palette[t].main, 0.62),
        ...e.applyStyles("dark", {
          backgroundColor: e.darken(e.palette[t].main, 0.5)
        }),
        ...e.applyStyles("dark", {
          borderColor: e.darken(e.palette[t].main, 0.5)
        })
      }
    }
  }))]
}))), vO = Te("span", {
  name: "MuiSlider",
  slot: "Thumb",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.thumb, t[`thumbColor${be(r.color)}`], r.size !== "medium" && t[`thumbSize${be(r.size)}`]];
  }
})(Et(({
  theme: e
}) => ({
  position: "absolute",
  width: 20,
  height: 20,
  boxSizing: "border-box",
  borderRadius: "50%",
  outline: 0,
  backgroundColor: "currentColor",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: e.transitions.create(["box-shadow", "left", "bottom"], {
    duration: e.transitions.duration.shortest
  }),
  "&::before": {
    position: "absolute",
    content: '""',
    borderRadius: "inherit",
    width: "100%",
    height: "100%",
    boxShadow: (e.vars || e).shadows[2]
  },
  "&::after": {
    position: "absolute",
    content: '""',
    borderRadius: "50%",
    // 42px is the hit target
    width: 42,
    height: 42,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  [`&.${st.disabled}`]: {
    "&:hover": {
      boxShadow: "none"
    }
  },
  variants: [{
    props: {
      size: "small"
    },
    style: {
      width: 12,
      height: 12,
      "&::before": {
        boxShadow: "none"
      }
    }
  }, {
    props: {
      orientation: "horizontal"
    },
    style: {
      top: "50%",
      transform: "translate(-50%, -50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: "50%",
      transform: "translate(-50%, 50%)"
    }
  }, ...Object.entries(e.palette).filter(ro()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&:hover, &.${st.focusVisible}`]: {
        boxShadow: `0px 0px 0px 8px ${e.alpha((e.vars || e).palette[t].main, 0.16)}`,
        "@media (hover: none)": {
          boxShadow: "none"
        }
      },
      [`&.${st.active}`]: {
        boxShadow: `0px 0px 0px 14px ${e.alpha((e.vars || e).palette[t].main, 0.16)}`
      }
    }
  }))]
}))), yO = Te(fO, {
  name: "MuiSlider",
  slot: "ValueLabel"
})(Et(({
  theme: e
}) => ({
  zIndex: 1,
  whiteSpace: "nowrap",
  ...e.typography.body2,
  fontWeight: 500,
  transition: e.transitions.create(["transform"], {
    duration: e.transitions.duration.shortest
  }),
  position: "absolute",
  backgroundColor: (e.vars || e).palette.grey[600],
  borderRadius: 2,
  color: (e.vars || e).palette.common.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem 0.75rem",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      transform: "translateY(-100%) scale(0)",
      top: "-10px",
      transformOrigin: "bottom center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, 50%) rotate(45deg)",
        backgroundColor: "inherit",
        bottom: 0,
        left: "50%"
      },
      [`&.${st.valueLabelOpen}`]: {
        transform: "translateY(-100%) scale(1)"
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      transform: "translateY(-50%) scale(0)",
      right: "30px",
      top: "50%",
      transformOrigin: "right center",
      "&::before": {
        position: "absolute",
        content: '""',
        width: 8,
        height: 8,
        transform: "translate(-50%, -50%) rotate(45deg)",
        backgroundColor: "inherit",
        right: -8,
        top: "50%"
      },
      [`&.${st.valueLabelOpen}`]: {
        transform: "translateY(-50%) scale(1)"
      }
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      fontSize: e.typography.pxToRem(12),
      padding: "0.25rem 0.5rem"
    }
  }, {
    props: {
      orientation: "vertical",
      size: "small"
    },
    style: {
      right: "20px"
    }
  }]
}))), gO = Te("span", {
  name: "MuiSlider",
  slot: "Mark",
  shouldForwardProp: (e) => f0(e) && e !== "markActive",
  overridesResolver: (e, t) => {
    const {
      markActive: r
    } = e;
    return [t.mark, r && t.markActive];
  }
})(Et(({
  theme: e
}) => ({
  position: "absolute",
  width: 2,
  height: 2,
  borderRadius: 1,
  backgroundColor: "currentColor",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: "50%",
      transform: "translate(-1px, -50%)"
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: "50%",
      transform: "translate(-50%, 1px)"
    }
  }, {
    props: {
      markActive: !0
    },
    style: {
      backgroundColor: (e.vars || e).palette.background.paper,
      opacity: 0.8
    }
  }]
}))), mO = Te("span", {
  name: "MuiSlider",
  slot: "MarkLabel",
  shouldForwardProp: (e) => f0(e) && e !== "markLabelActive"
})(Et(({
  theme: e
}) => ({
  ...e.typography.body2,
  color: (e.vars || e).palette.text.secondary,
  position: "absolute",
  whiteSpace: "nowrap",
  variants: [{
    props: {
      orientation: "horizontal"
    },
    style: {
      top: 30,
      transform: "translateX(-50%)",
      "@media (pointer: coarse)": {
        top: 40
      }
    }
  }, {
    props: {
      orientation: "vertical"
    },
    style: {
      left: 36,
      transform: "translateY(50%)",
      "@media (pointer: coarse)": {
        left: 44
      }
    }
  }, {
    props: {
      markLabelActive: !0
    },
    style: {
      color: (e.vars || e).palette.text.primary
    }
  }]
}))), bO = (e) => {
  const {
    disabled: t,
    dragging: r,
    marked: n,
    orientation: i,
    track: a,
    classes: o,
    color: u,
    size: s
  } = e, c = {
    root: ["root", t && "disabled", r && "dragging", n && "marked", i === "vertical" && "vertical", a === "inverted" && "trackInverted", a === !1 && "trackFalse", u && `color${be(u)}`, s && `size${be(s)}`],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", t && "disabled", s && `thumbSize${be(s)}`, u && `thumbColor${be(u)}`],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return nr(c, cO, o);
}, xO = ({
  children: e
}) => e, wO = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = rr({
    props: t,
    name: "MuiSlider"
  }), i = q1(), {
    "aria-label": a,
    "aria-valuetext": o,
    "aria-labelledby": u,
    // eslint-disable-next-line react/prop-types
    component: s = "span",
    components: c = {},
    componentsProps: f = {},
    color: l = "primary",
    classes: d,
    className: h,
    disableSwap: y = !1,
    disabled: v = !1,
    getAriaLabel: p,
    getAriaValueText: b,
    marks: x = !1,
    max: w = 100,
    min: S = 0,
    name: g,
    onChange: m,
    onChangeCommitted: O,
    orientation: _ = "horizontal",
    shiftStep: P = 10,
    size: k = "medium",
    step: T = 1,
    scale: A = jp,
    slotProps: M,
    slots: C,
    tabIndex: I,
    track: $ = "normal",
    value: N,
    valueLabelDisplay: L = "off",
    valueLabelFormat: F = jp,
    ...H
  } = n, W = {
    ...n,
    isRtl: i,
    max: w,
    min: S,
    classes: d,
    disabled: v,
    disableSwap: y,
    orientation: _,
    marks: x,
    color: l,
    size: k,
    step: T,
    shiftStep: P,
    scale: A,
    track: $,
    valueLabelDisplay: L,
    valueLabelFormat: F
  }, {
    axisProps: B,
    getRootProps: X,
    getHiddenInputProps: ie,
    getThumbProps: le,
    open: Ee,
    active: We,
    axis: ge,
    focusedThumbIndex: z,
    range: Y,
    dragging: Z,
    marks: q,
    values: ee,
    trackOffset: te,
    trackLeap: _e,
    getThumbStyle: Se
  } = uO({
    ...W,
    rootRef: r
  });
  W.marked = q.length > 0 && q.some((je) => je.label), W.dragging = Z, W.focusedThumbIndex = z;
  const fe = bO(W), Xe = C?.root ?? c.Root ?? dO, pt = C?.rail ?? c.Rail ?? pO, Ct = C?.track ?? c.Track ?? hO, rt = C?.thumb ?? c.Thumb ?? vO, nt = C?.valueLabel ?? c.ValueLabel ?? yO, wt = C?.mark ?? c.Mark ?? gO, cr = C?.markLabel ?? c.MarkLabel ?? mO, K = C?.input ?? c.Input ?? "input", G = M?.root ?? f.root, re = M?.rail ?? f.rail, ue = M?.track ?? f.track, oe = M?.thumb ?? f.thumb, ae = M?.valueLabel ?? f.valueLabel, Je = M?.mark ?? f.mark, it = M?.markLabel ?? f.markLabel, Ie = M?.input ?? f.input, St = Gt({
    elementType: Xe,
    getSlotProps: X,
    externalSlotProps: G,
    externalForwardedProps: H,
    additionalProps: {
      ...sO(Xe) && {
        as: s
      }
    },
    ownerState: {
      ...W,
      ...G?.ownerState
    },
    className: [fe.root, h]
  }), mn = Gt({
    elementType: pt,
    externalSlotProps: re,
    ownerState: W,
    className: fe.rail
  }), j1 = Gt({
    elementType: Ct,
    externalSlotProps: ue,
    additionalProps: {
      style: {
        ...B[ge].offset(te),
        ...B[ge].leap(_e)
      }
    },
    ownerState: {
      ...W,
      ...ue?.ownerState
    },
    className: fe.track
  }), qo = Gt({
    elementType: rt,
    getSlotProps: le,
    externalSlotProps: oe,
    ownerState: {
      ...W,
      ...oe?.ownerState
    },
    className: fe.thumb
  }), C1 = Gt({
    elementType: nt,
    externalSlotProps: ae,
    ownerState: {
      ...W,
      ...ae?.ownerState
    },
    className: fe.valueLabel
  }), Lo = Gt({
    elementType: wt,
    externalSlotProps: Je,
    ownerState: W,
    className: fe.mark
  }), Bo = Gt({
    elementType: cr,
    externalSlotProps: it,
    ownerState: W,
    className: fe.markLabel
  }), M1 = Gt({
    elementType: K,
    getSlotProps: ie,
    externalSlotProps: Ie,
    ownerState: W
  });
  return /* @__PURE__ */ E.jsxs(Xe, {
    ...St,
    children: [/* @__PURE__ */ E.jsx(pt, {
      ...mn
    }), /* @__PURE__ */ E.jsx(Ct, {
      ...j1
    }), q.filter((je) => je.value >= S && je.value <= w).map((je, Be) => {
      const Fo = ia(je.value, S, w), Ci = B[ge].offset(Fo);
      let Mt;
      return $ === !1 ? Mt = ee.includes(je.value) : Mt = $ === "normal" && (Y ? je.value >= ee[0] && je.value <= ee[ee.length - 1] : je.value <= ee[0]) || $ === "inverted" && (Y ? je.value <= ee[0] || je.value >= ee[ee.length - 1] : je.value >= ee[0]), /* @__PURE__ */ E.jsxs(R.Fragment, {
        children: [/* @__PURE__ */ E.jsx(wt, {
          "data-index": Be,
          ...Lo,
          ...!Qi(wt) && {
            markActive: Mt
          },
          style: {
            ...Ci,
            ...Lo.style
          },
          className: Q(Lo.className, Mt && fe.markActive)
        }), je.label != null ? /* @__PURE__ */ E.jsx(cr, {
          "aria-hidden": !0,
          "data-index": Be,
          ...Bo,
          ...!Qi(cr) && {
            markLabelActive: Mt
          },
          style: {
            ...Ci,
            ...Bo.style
          },
          className: Q(fe.markLabel, Bo.className, Mt && fe.markLabelActive),
          children: je.label
        }) : null]
      }, Be);
    }), ee.map((je, Be) => {
      const Fo = ia(je, S, w), Ci = B[ge].offset(Fo), Mt = L === "off" ? xO : nt;
      return (
        /* TODO v6: Change component structure. It will help in avoiding the complicated React.cloneElement API added in SliderValueLabel component. Should be: Thumb -> Input, ValueLabel. Follow Joy UI's Slider structure. */
        /* @__PURE__ */ E.jsx(Mt, {
          ...!Qi(Mt) && {
            valueLabelFormat: F,
            valueLabelDisplay: L,
            value: typeof F == "function" ? F(A(je), Be) : F,
            index: Be,
            open: Ee === Be || We === Be || L === "on",
            disabled: v
          },
          ...C1,
          children: /* @__PURE__ */ E.jsx(rt, {
            "data-index": Be,
            ...qo,
            className: Q(fe.thumb, qo.className, We === Be && fe.active, z === Be && fe.focusVisible),
            style: {
              ...Ci,
              ...Se(Be),
              ...qo.style
            },
            children: /* @__PURE__ */ E.jsx(K, {
              "data-index": Be,
              "aria-label": p ? p(Be) : a,
              "aria-valuenow": A(je),
              "aria-labelledby": u,
              "aria-valuetext": b ? b(A(je), Be) : o,
              value: ee[Be],
              ...M1
            })
          })
        }, Be)
      );
    })]
  });
}), Xo = ({ title: e, items: t }) => /* @__PURE__ */ E.jsxs("section", { children: [
  /* @__PURE__ */ E.jsx(Pe, { variant: "h6", component: "h4", fontWeight: 600, children: e }),
  /* @__PURE__ */ E.jsx("ul", { style: { marginTop: 4 }, children: t.map((r) => /* @__PURE__ */ E.jsx("li", { children: r }, r)) })
] });
function SO({ recommendation: e, onSelect: t }) {
  const [r, n] = R.useState(!1), [i, a] = R.useState(!1);
  return /* @__PURE__ */ E.jsx(ta, { "aria-labelledby": "rec-title", children: /* @__PURE__ */ E.jsxs(ra, { sx: { display: "grid", gap: 1.5 }, children: [
    /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ E.jsx(Pe, { id: "rec-title", variant: "h5", component: "h3", fontWeight: 600, children: "Recommended operational intervention" }),
      /* @__PURE__ */ E.jsx(ea, { color: "warning", label: "Advisory only" }),
      /* @__PURE__ */ E.jsx(ea, { variant: "outlined", label: "Human review required" })
    ] }),
    /* @__PURE__ */ E.jsx(Pe, { component: "p", children: e.action }),
    /* @__PURE__ */ E.jsxs(Pe, { component: "p", children: [
      /* @__PURE__ */ E.jsx("strong", { children: "Rationale: " }),
      e.rationale
    ] }),
    /* @__PURE__ */ E.jsxs(Pe, { component: "p", children: [
      /* @__PURE__ */ E.jsx("strong", { children: "Expected reduction (simulated estimate): " }),
      e.expectedReductionKgCO2e.toLocaleString("en-US"),
      " kgCO2e"
    ] }),
    /* @__PURE__ */ E.jsxs(Pe, { component: "p", children: [
      /* @__PURE__ */ E.jsx("strong", { children: "Effort / cost: " }),
      e.effort,
      " (",
      e.costCategory,
      ")"
    ] }),
    /* @__PURE__ */ E.jsx(Xo, { title: "Assumptions", items: e.assumptions }),
    /* @__PURE__ */ E.jsx(Xo, { title: "Dependencies", items: e.dependencies }),
    /* @__PURE__ */ E.jsx(Xo, { title: "Operational limitations", items: e.limitations }),
    /* @__PURE__ */ E.jsxs(Pe, { component: "p", children: [
      /* @__PURE__ */ E.jsx("strong", { children: "Reversibility: " }),
      e.reversibility
    ] }),
    /* @__PURE__ */ E.jsxs(Pe, { component: "p", children: [
      /* @__PURE__ */ E.jsx("strong", { children: "Human review: " }),
      e.humanReview
    ] }),
    /* @__PURE__ */ E.jsx(d0, { text: e.disclaimer }),
    /* @__PURE__ */ E.jsx(Ko, { variant: "contained", disabled: i, onClick: () => n(!0), children: i ? "Marked for review" : "Mark for operational review" }),
    /* @__PURE__ */ E.jsxs(LS, { open: r, onClose: () => n(!1), "aria-labelledby": "review-dialog-title", children: [
      /* @__PURE__ */ E.jsx(JS, { id: "review-dialog-title", children: "Mark for operational review?" }),
      /* @__PURE__ */ E.jsx(XS, { children: "This only flags the recommendation for review by authorised operations and safety personnel. It does not change, schedule or control any airport equipment or procedure." }),
      /* @__PURE__ */ E.jsxs(WS, { children: [
        /* @__PURE__ */ E.jsx(Ko, { onClick: () => n(!1), children: "Cancel" }),
        /* @__PURE__ */ E.jsx(Ko, { variant: "contained", onClick: () => {
          a(!0), n(!1), t();
        }, children: "Confirm" })
      ] })
    ] })
  ] }) });
}
var Yo, Cp;
function Ze() {
  if (Cp) return Yo;
  Cp = 1;
  var e = Array.isArray;
  return Yo = e, Yo;
}
var Zo, Mp;
function _0() {
  if (Mp) return Zo;
  Mp = 1;
  var e = typeof Mi == "object" && Mi && Mi.Object === Object && Mi;
  return Zo = e, Zo;
}
var Jo, Ip;
function jt() {
  if (Ip) return Jo;
  Ip = 1;
  var e = _0(), t = typeof self == "object" && self && self.Object === Object && self, r = e || t || Function("return this")();
  return Jo = r, Jo;
}
var Qo, $p;
function wi() {
  if ($p) return Qo;
  $p = 1;
  var e = jt(), t = e.Symbol;
  return Qo = t, Qo;
}
var eu, kp;
function OO() {
  if (kp) return eu;
  kp = 1;
  var e = wi(), t = Object.prototype, r = t.hasOwnProperty, n = t.toString, i = e ? e.toStringTag : void 0;
  function a(o) {
    var u = r.call(o, i), s = o[i];
    try {
      o[i] = void 0;
      var c = !0;
    } catch {
    }
    var f = n.call(o);
    return c && (u ? o[i] = s : delete o[i]), f;
  }
  return eu = a, eu;
}
var tu, Rp;
function _O() {
  if (Rp) return tu;
  Rp = 1;
  var e = Object.prototype, t = e.toString;
  function r(n) {
    return t.call(n);
  }
  return tu = r, tu;
}
var ru, Dp;
function Ut() {
  if (Dp) return ru;
  Dp = 1;
  var e = wi(), t = OO(), r = _O(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function o(u) {
    return u == null ? u === void 0 ? i : n : a && a in Object(u) ? t(u) : r(u);
  }
  return ru = o, ru;
}
var nu, Np;
function Ht() {
  if (Np) return nu;
  Np = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return nu = e, nu;
}
var iu, qp;
function fn() {
  if (qp) return iu;
  qp = 1;
  var e = Ut(), t = Ht(), r = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || t(i) && e(i) == r;
  }
  return iu = n, iu;
}
var au, Lp;
function dd() {
  if (Lp) return au;
  Lp = 1;
  var e = Ze(), t = fn(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    if (e(a))
      return !1;
    var u = typeof a;
    return u == "number" || u == "symbol" || u == "boolean" || a == null || t(a) ? !0 : n.test(a) || !r.test(a) || o != null && a in Object(o);
  }
  return au = i, au;
}
var ou, Bp;
function ir() {
  if (Bp) return ou;
  Bp = 1;
  function e(t) {
    var r = typeof t;
    return t != null && (r == "object" || r == "function");
  }
  return ou = e, ou;
}
var uu, Fp;
function pd() {
  if (Fp) return uu;
  Fp = 1;
  var e = Ut(), t = ir(), r = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function o(u) {
    if (!t(u))
      return !1;
    var s = e(u);
    return s == n || s == i || s == r || s == a;
  }
  return uu = o, uu;
}
var su, zp;
function PO() {
  if (zp) return su;
  zp = 1;
  var e = jt(), t = e["__core-js_shared__"];
  return su = t, su;
}
var cu, Wp;
function AO() {
  if (Wp) return cu;
  Wp = 1;
  var e = PO(), t = function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  }();
  function r(n) {
    return !!t && t in n;
  }
  return cu = r, cu;
}
var lu, Up;
function P0() {
  if (Up) return lu;
  Up = 1;
  var e = Function.prototype, t = e.toString;
  function r(n) {
    if (n != null) {
      try {
        return t.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return lu = r, lu;
}
var fu, Hp;
function TO() {
  if (Hp) return fu;
  Hp = 1;
  var e = pd(), t = AO(), r = ir(), n = P0(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, o = Function.prototype, u = Object.prototype, s = o.toString, c = u.hasOwnProperty, f = RegExp(
    "^" + s.call(c).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(d) {
    if (!r(d) || t(d))
      return !1;
    var h = e(d) ? f : a;
    return h.test(n(d));
  }
  return fu = l, fu;
}
var du, Kp;
function EO() {
  if (Kp) return du;
  Kp = 1;
  function e(t, r) {
    return t?.[r];
  }
  return du = e, du;
}
var pu, Gp;
function _r() {
  if (Gp) return pu;
  Gp = 1;
  var e = TO(), t = EO();
  function r(n, i) {
    var a = t(n, i);
    return e(a) ? a : void 0;
  }
  return pu = r, pu;
}
var hu, Vp;
function no() {
  if (Vp) return hu;
  Vp = 1;
  var e = _r(), t = e(Object, "create");
  return hu = t, hu;
}
var vu, Xp;
function jO() {
  if (Xp) return vu;
  Xp = 1;
  var e = no();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return vu = t, vu;
}
var yu, Yp;
function CO() {
  if (Yp) return yu;
  Yp = 1;
  function e(t) {
    var r = this.has(t) && delete this.__data__[t];
    return this.size -= r ? 1 : 0, r;
  }
  return yu = e, yu;
}
var gu, Zp;
function MO() {
  if (Zp) return gu;
  Zp = 1;
  var e = no(), t = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    var o = this.__data__;
    if (e) {
      var u = o[a];
      return u === t ? void 0 : u;
    }
    return n.call(o, a) ? o[a] : void 0;
  }
  return gu = i, gu;
}
var mu, Jp;
function IO() {
  if (Jp) return mu;
  Jp = 1;
  var e = no(), t = Object.prototype, r = t.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : r.call(a, i);
  }
  return mu = n, mu;
}
var bu, Qp;
function $O() {
  if (Qp) return bu;
  Qp = 1;
  var e = no(), t = "__lodash_hash_undefined__";
  function r(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? t : i, this;
  }
  return bu = r, bu;
}
var xu, eh;
function kO() {
  if (eh) return xu;
  eh = 1;
  var e = jO(), t = CO(), r = MO(), n = IO(), i = $O();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, xu = a, xu;
}
var wu, th;
function RO() {
  if (th) return wu;
  th = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return wu = e, wu;
}
var Su, rh;
function hd() {
  if (rh) return Su;
  rh = 1;
  function e(t, r) {
    return t === r || t !== t && r !== r;
  }
  return Su = e, Su;
}
var Ou, nh;
function io() {
  if (nh) return Ou;
  nh = 1;
  var e = hd();
  function t(r, n) {
    for (var i = r.length; i--; )
      if (e(r[i][0], n))
        return i;
    return -1;
  }
  return Ou = t, Ou;
}
var _u, ih;
function DO() {
  if (ih) return _u;
  ih = 1;
  var e = io(), t = Array.prototype, r = t.splice;
  function n(i) {
    var a = this.__data__, o = e(a, i);
    if (o < 0)
      return !1;
    var u = a.length - 1;
    return o == u ? a.pop() : r.call(a, o, 1), --this.size, !0;
  }
  return _u = n, _u;
}
var Pu, ah;
function NO() {
  if (ah) return Pu;
  ah = 1;
  var e = io();
  function t(r) {
    var n = this.__data__, i = e(n, r);
    return i < 0 ? void 0 : n[i][1];
  }
  return Pu = t, Pu;
}
var Au, oh;
function qO() {
  if (oh) return Au;
  oh = 1;
  var e = io();
  function t(r) {
    return e(this.__data__, r) > -1;
  }
  return Au = t, Au;
}
var Tu, uh;
function LO() {
  if (uh) return Tu;
  uh = 1;
  var e = io();
  function t(r, n) {
    var i = this.__data__, a = e(i, r);
    return a < 0 ? (++this.size, i.push([r, n])) : i[a][1] = n, this;
  }
  return Tu = t, Tu;
}
var Eu, sh;
function ao() {
  if (sh) return Eu;
  sh = 1;
  var e = RO(), t = DO(), r = NO(), n = qO(), i = LO();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Eu = a, Eu;
}
var ju, ch;
function vd() {
  if (ch) return ju;
  ch = 1;
  var e = _r(), t = jt(), r = e(t, "Map");
  return ju = r, ju;
}
var Cu, lh;
function BO() {
  if (lh) return Cu;
  lh = 1;
  var e = kO(), t = ao(), r = vd();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (r || t)(),
      string: new e()
    };
  }
  return Cu = n, Cu;
}
var Mu, fh;
function FO() {
  if (fh) return Mu;
  fh = 1;
  function e(t) {
    var r = typeof t;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
  }
  return Mu = e, Mu;
}
var Iu, dh;
function oo() {
  if (dh) return Iu;
  dh = 1;
  var e = FO();
  function t(r, n) {
    var i = r.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return Iu = t, Iu;
}
var $u, ph;
function zO() {
  if (ph) return $u;
  ph = 1;
  var e = oo();
  function t(r) {
    var n = e(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return $u = t, $u;
}
var ku, hh;
function WO() {
  if (hh) return ku;
  hh = 1;
  var e = oo();
  function t(r) {
    return e(this, r).get(r);
  }
  return ku = t, ku;
}
var Ru, vh;
function UO() {
  if (vh) return Ru;
  vh = 1;
  var e = oo();
  function t(r) {
    return e(this, r).has(r);
  }
  return Ru = t, Ru;
}
var Du, yh;
function HO() {
  if (yh) return Du;
  yh = 1;
  var e = oo();
  function t(r, n) {
    var i = e(this, r), a = i.size;
    return i.set(r, n), this.size += i.size == a ? 0 : 1, this;
  }
  return Du = t, Du;
}
var Nu, gh;
function yd() {
  if (gh) return Nu;
  gh = 1;
  var e = BO(), t = zO(), r = WO(), n = UO(), i = HO();
  function a(o) {
    var u = -1, s = o == null ? 0 : o.length;
    for (this.clear(); ++u < s; ) {
      var c = o[u];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = t, a.prototype.get = r, a.prototype.has = n, a.prototype.set = i, Nu = a, Nu;
}
var qu, mh;
function A0() {
  if (mh) return qu;
  mh = 1;
  var e = yd(), t = "Expected a function";
  function r(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(t);
    var a = function() {
      var o = arguments, u = i ? i.apply(this, o) : o[0], s = a.cache;
      if (s.has(u))
        return s.get(u);
      var c = n.apply(this, o);
      return a.cache = s.set(u, c) || s, c;
    };
    return a.cache = new (r.Cache || e)(), a;
  }
  return r.Cache = e, qu = r, qu;
}
var Lu, bh;
function KO() {
  if (bh) return Lu;
  bh = 1;
  var e = A0(), t = 500;
  function r(n) {
    var i = e(n, function(o) {
      return a.size === t && a.clear(), o;
    }), a = i.cache;
    return i;
  }
  return Lu = r, Lu;
}
var Bu, xh;
function GO() {
  if (xh) return Bu;
  xh = 1;
  var e = KO(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(t, function(o, u, s, c) {
      a.push(s ? c.replace(r, "$1") : u || o);
    }), a;
  });
  return Bu = n, Bu;
}
var Fu, wh;
function gd() {
  if (wh) return Fu;
  wh = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
      a[n] = r(t[n], n, t);
    return a;
  }
  return Fu = e, Fu;
}
var zu, Sh;
function VO() {
  if (Sh) return zu;
  Sh = 1;
  var e = wi(), t = gd(), r = Ze(), n = fn(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function o(u) {
    if (typeof u == "string")
      return u;
    if (r(u))
      return t(u, o) + "";
    if (n(u))
      return a ? a.call(u) : "";
    var s = u + "";
    return s == "0" && 1 / u == -1 / 0 ? "-0" : s;
  }
  return zu = o, zu;
}
var Wu, Oh;
function T0() {
  if (Oh) return Wu;
  Oh = 1;
  var e = VO();
  function t(r) {
    return r == null ? "" : e(r);
  }
  return Wu = t, Wu;
}
var Uu, _h;
function E0() {
  if (_h) return Uu;
  _h = 1;
  var e = Ze(), t = dd(), r = GO(), n = T0();
  function i(a, o) {
    return e(a) ? a : t(a, o) ? [a] : r(n(a));
  }
  return Uu = i, Uu;
}
var Hu, Ph;
function uo() {
  if (Ph) return Hu;
  Ph = 1;
  var e = fn();
  function t(r) {
    if (typeof r == "string" || e(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return Hu = t, Hu;
}
var Ku, Ah;
function md() {
  if (Ah) return Ku;
  Ah = 1;
  var e = E0(), t = uo();
  function r(n, i) {
    i = e(i, n);
    for (var a = 0, o = i.length; n != null && a < o; )
      n = n[t(i[a++])];
    return a && a == o ? n : void 0;
  }
  return Ku = r, Ku;
}
var Gu, Th;
function j0() {
  if (Th) return Gu;
  Th = 1;
  var e = md();
  function t(r, n, i) {
    var a = r == null ? void 0 : e(r, n);
    return a === void 0 ? i : a;
  }
  return Gu = t, Gu;
}
var XO = j0();
const lt = /* @__PURE__ */ xe(XO);
var Vu, Eh;
function YO() {
  if (Eh) return Vu;
  Eh = 1;
  function e(t) {
    return t == null;
  }
  return Vu = e, Vu;
}
var ZO = YO();
const he = /* @__PURE__ */ xe(ZO);
var Xu, jh;
function JO() {
  if (jh) return Xu;
  jh = 1;
  var e = Ut(), t = Ze(), r = Ht(), n = "[object String]";
  function i(a) {
    return typeof a == "string" || !t(a) && r(a) && e(a) == n;
  }
  return Xu = i, Xu;
}
var QO = JO();
const Si = /* @__PURE__ */ xe(QO);
var e_ = pd();
const ne = /* @__PURE__ */ xe(e_);
var t_ = ir();
const dn = /* @__PURE__ */ xe(t_);
var Yu = { exports: {} }, pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ch;
function r_() {
  if (Ch) return pe;
  Ch = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function v(p) {
    if (typeof p == "object" && p !== null) {
      var b = p.$$typeof;
      switch (b) {
        case e:
          switch (p = p.type, p) {
            case r:
            case i:
            case n:
            case c:
            case f:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case u:
                case o:
                case s:
                case d:
                case l:
                case a:
                  return p;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return pe.ContextConsumer = o, pe.ContextProvider = a, pe.Element = e, pe.ForwardRef = s, pe.Fragment = r, pe.Lazy = d, pe.Memo = l, pe.Portal = t, pe.Profiler = i, pe.StrictMode = n, pe.Suspense = c, pe.SuspenseList = f, pe.isAsyncMode = function() {
    return !1;
  }, pe.isConcurrentMode = function() {
    return !1;
  }, pe.isContextConsumer = function(p) {
    return v(p) === o;
  }, pe.isContextProvider = function(p) {
    return v(p) === a;
  }, pe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, pe.isForwardRef = function(p) {
    return v(p) === s;
  }, pe.isFragment = function(p) {
    return v(p) === r;
  }, pe.isLazy = function(p) {
    return v(p) === d;
  }, pe.isMemo = function(p) {
    return v(p) === l;
  }, pe.isPortal = function(p) {
    return v(p) === t;
  }, pe.isProfiler = function(p) {
    return v(p) === i;
  }, pe.isStrictMode = function(p) {
    return v(p) === n;
  }, pe.isSuspense = function(p) {
    return v(p) === c;
  }, pe.isSuspenseList = function(p) {
    return v(p) === f;
  }, pe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === i || p === n || p === c || p === f || p === h || typeof p == "object" && p !== null && (p.$$typeof === d || p.$$typeof === l || p.$$typeof === a || p.$$typeof === o || p.$$typeof === s || p.$$typeof === y || p.getModuleId !== void 0);
  }, pe.typeOf = v, pe;
}
var Mh;
function n_() {
  return Mh || (Mh = 1, Yu.exports = r_()), Yu.exports;
}
var i_ = n_(), Zu, Ih;
function C0() {
  if (Ih) return Zu;
  Ih = 1;
  var e = Ut(), t = Ht(), r = "[object Number]";
  function n(i) {
    return typeof i == "number" || t(i) && e(i) == r;
  }
  return Zu = n, Zu;
}
var Ju, $h;
function a_() {
  if ($h) return Ju;
  $h = 1;
  var e = C0();
  function t(r) {
    return e(r) && r != +r;
  }
  return Ju = t, Ju;
}
var o_ = a_();
const Oi = /* @__PURE__ */ xe(o_);
var u_ = C0();
const s_ = /* @__PURE__ */ xe(u_);
var gt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, hr = function(t) {
  return Si(t) && t.indexOf("%") === t.length - 1;
}, U = function(t) {
  return s_(t) && !Oi(t);
}, Re = function(t) {
  return U(t) || Si(t);
}, c_ = 0, so = function(t) {
  var r = ++c_;
  return "".concat(t || "").concat(r);
}, xr = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!U(t) && !Si(t))
    return n;
  var a;
  if (hr(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return Oi(a) && (a = n), i && a > r && (a = r), a;
}, Xt = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, l_ = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, Mr = function(t, r) {
  return U(t) && U(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Vl(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : lt(n, t)) === r;
  });
}
function Lr(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Xl(e) {
  "@babel/helpers - typeof";
  return Xl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xl(e);
}
var f_ = ["viewBox", "children"], d_ = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], kh = ["points", "pathLength"], Qu = {
  svg: f_,
  polygon: kh,
  polyline: kh
}, bd = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], aa = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ R.isValidElement(t) && (n = t.props), !dn(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    bd.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, p_ = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, oa = function(t, r, n) {
  if (!dn(t) || Xl(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    bd.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = p_(o, r, n));
  }), i;
}, h_ = ["children"], v_ = ["children"];
function Rh(e, t) {
  if (e == null) return {};
  var r = y_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function y_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var Dh = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart",
  contextmenu: "onContextMenu",
  dblclick: "onDoubleClick"
}, qt = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Nh = null, es = null, xd = function e(t) {
  if (t === Nh && Array.isArray(es))
    return es;
  var r = [];
  return R.Children.forEach(t, function(n) {
    he(n) || (i_.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), es = r, Nh = t, r;
};
function bt(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return qt(i);
  }) : n = [qt(t)], xd(e).forEach(function(i) {
    var a = lt(i, "type.displayName") || lt(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function et(e, t) {
  var r = bt(e, t);
  return r && r[0];
}
var qh = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!U(n) || n <= 0 || !U(i) || i <= 0);
}, g_ = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], m_ = function(t) {
  return t && t.type && Si(t.type) && g_.indexOf(t.type) >= 0;
}, b_ = function(t, r, n, i) {
  var a, o = (a = Qu?.[i]) !== null && a !== void 0 ? a : [];
  return !ne(t) && (i && o.includes(r) || d_.includes(r)) || n && bd.includes(r);
}, ce = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ R.isValidElement(t) && (i = t.props), !dn(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var u;
    b_((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Yl = function e(t, r) {
  if (t === r)
    return !0;
  var n = R.Children.count(t);
  if (n !== R.Children.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Lh(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!Lh(a, o))
      return !1;
  }
  return !0;
}, Lh = function(t, r) {
  if (he(t) && he(r))
    return !0;
  if (!he(t) && !he(r)) {
    var n = t.props || {}, i = n.children, a = Rh(n, h_), o = r.props || {}, u = o.children, s = Rh(o, v_);
    return i && u ? Lr(a, s) && Yl(i, u) : !i && !u ? Lr(a, s) : !1;
  }
  return !1;
}, Bh = function(t, r) {
  var n = [], i = {};
  return xd(t).forEach(function(a, o) {
    if (m_(a))
      n.push(a);
    else if (a) {
      var u = qt(a.type), s = r[u] || {}, c = s.handler, f = s.once;
      if (c && (!f || !i[u])) {
        var l = c(a, u, o);
        n.push(l), i[u] = !0;
      }
    }
  }), n;
}, x_ = function(t) {
  var r = t && t.type;
  return r && Dh[r] ? Dh[r] : null;
}, w_ = function(t, r) {
  return xd(r).indexOf(t);
}, S_ = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Zl() {
  return Zl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zl.apply(this, arguments);
}
function O_(e, t) {
  if (e == null) return {};
  var r = __(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function __(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Jl(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, u = e.title, s = e.desc, c = O_(e, S_), f = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = Q("recharts-surface", a);
  return /* @__PURE__ */ j.createElement("svg", Zl({}, ce(c, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ j.createElement("title", null, u), /* @__PURE__ */ j.createElement("desc", null, s), t);
}
var P_ = ["children", "className"];
function Ql() {
  return Ql = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ql.apply(this, arguments);
}
function A_(e, t) {
  if (e == null) return {};
  var r = T_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function T_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var qe = /* @__PURE__ */ j.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = A_(e, P_), a = Q("recharts-layer", n);
  return /* @__PURE__ */ j.createElement("g", Ql({
    className: a
  }, ce(i, !0), {
    ref: t
  }), r);
}), Lt = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
}, ts, Fh;
function E_() {
  if (Fh) return ts;
  Fh = 1;
  function e(t, r, n) {
    var i = -1, a = t.length;
    r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
    for (var o = Array(a); ++i < a; )
      o[i] = t[i + r];
    return o;
  }
  return ts = e, ts;
}
var rs, zh;
function j_() {
  if (zh) return rs;
  zh = 1;
  var e = E_();
  function t(r, n, i) {
    var a = r.length;
    return i = i === void 0 ? a : i, !n && i >= a ? r : e(r, n, i);
  }
  return rs = t, rs;
}
var ns, Wh;
function M0() {
  if (Wh) return ns;
  Wh = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "\\u200d", u = RegExp("[" + o + e + i + a + "]");
  function s(c) {
    return u.test(c);
  }
  return ns = s, ns;
}
var is, Uh;
function C_() {
  if (Uh) return is;
  Uh = 1;
  function e(t) {
    return t.split("");
  }
  return is = e, is;
}
var as, Hh;
function M_() {
  if (Hh) return as;
  Hh = 1;
  var e = "\\ud800-\\udfff", t = "\\u0300-\\u036f", r = "\\ufe20-\\ufe2f", n = "\\u20d0-\\u20ff", i = t + r + n, a = "\\ufe0e\\ufe0f", o = "[" + e + "]", u = "[" + i + "]", s = "\\ud83c[\\udffb-\\udfff]", c = "(?:" + u + "|" + s + ")", f = "[^" + e + "]", l = "(?:\\ud83c[\\udde6-\\uddff]){2}", d = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "\\u200d", y = c + "?", v = "[" + a + "]?", p = "(?:" + h + "(?:" + [f, l, d].join("|") + ")" + v + y + ")*", b = v + y + p, x = "(?:" + [f + u + "?", u, l, d, o].join("|") + ")", w = RegExp(s + "(?=" + s + ")|" + x + b, "g");
  function S(g) {
    return g.match(w) || [];
  }
  return as = S, as;
}
var os, Kh;
function I_() {
  if (Kh) return os;
  Kh = 1;
  var e = C_(), t = M0(), r = M_();
  function n(i) {
    return t(i) ? r(i) : e(i);
  }
  return os = n, os;
}
var us, Gh;
function $_() {
  if (Gh) return us;
  Gh = 1;
  var e = j_(), t = M0(), r = I_(), n = T0();
  function i(a) {
    return function(o) {
      o = n(o);
      var u = t(o) ? r(o) : void 0, s = u ? u[0] : o.charAt(0), c = u ? e(u, 1).join("") : o.slice(1);
      return s[a]() + c;
    };
  }
  return us = i, us;
}
var ss, Vh;
function k_() {
  if (Vh) return ss;
  Vh = 1;
  var e = $_(), t = e("toUpperCase");
  return ss = t, ss;
}
var R_ = k_();
const co = /* @__PURE__ */ xe(R_);
function me(e) {
  return function() {
    return e;
  };
}
const I0 = Math.cos, ua = Math.sin, xt = Math.sqrt, sa = Math.PI, lo = 2 * sa, ef = Math.PI, tf = 2 * ef, dr = 1e-6, D_ = tf - dr;
function $0(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function N_(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return $0;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class q_ {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? $0 : N_(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, s = n - t, c = i - r, f = o - t, l = u - r, d = f * f + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > dr) if (!(Math.abs(l * s - c * f) > dr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, y = i - u, v = s * s + c * c, p = h * h + y * y, b = Math.sqrt(v), x = Math.sqrt(d), w = a * Math.tan((ef - Math.acos((v + d - p) / (2 * b * x))) / 2), S = w / x, g = w / b;
      Math.abs(S - 1) > dr && this._append`L${t + S * f},${r + S * l}`, this._append`A${a},${a},0,0,${+(l * h > f * y)},${this._x1 = t + g * s},${this._y1 = r + g * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), s = n * Math.sin(i), c = t + u, f = r + s, l = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > dr || Math.abs(this._y1 - f) > dr) && this._append`L${c},${f}`, n && (d < 0 && (d = d % tf + tf), d > D_ ? this._append`A${n},${n},0,1,${l},${t - u},${r - s}A${n},${n},0,1,${l},${this._x1 = c},${this._y1 = f}` : d > dr && this._append`A${n},${n},0,${+(d >= ef)},${l},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function wd(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new q_(t);
}
function Sd(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function k0(e) {
  this._context = e;
}
k0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function fo(e) {
  return new k0(e);
}
function R0(e) {
  return e[0];
}
function D0(e) {
  return e[1];
}
function N0(e, t) {
  var r = me(!0), n = null, i = fo, a = null, o = wd(u);
  e = typeof e == "function" ? e : e === void 0 ? R0 : me(e), t = typeof t == "function" ? t : t === void 0 ? D0 : me(t);
  function u(s) {
    var c, f = (s = Sd(s)).length, l, d = !1, h;
    for (n == null && (a = i(h = o())), c = 0; c <= f; ++c)
      !(c < f && r(l = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(l, c, s), +t(l, c, s));
    if (h) return a = null, h + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : me(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : me(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : me(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), u) : i;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), u) : n;
  }, u;
}
function Li(e, t, r) {
  var n = null, i = me(!0), a = null, o = fo, u = null, s = wd(c);
  e = typeof e == "function" ? e : e === void 0 ? R0 : me(+e), t = typeof t == "function" ? t : me(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? D0 : me(+r);
  function c(l) {
    var d, h, y, v = (l = Sd(l)).length, p, b = !1, x, w = new Array(v), S = new Array(v);
    for (a == null && (u = o(x = s())), d = 0; d <= v; ++d) {
      if (!(d < v && i(p = l[d], d, l)) === b)
        if (b = !b)
          h = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), y = d - 1; y >= h; --y)
            u.point(w[y], S[y]);
          u.lineEnd(), u.areaEnd();
        }
      b && (w[d] = +e(p, d, l), S[d] = +t(p, d, l), u.point(n ? +n(p, d, l) : w[d], r ? +r(p, d, l) : S[d]));
    }
    if (x) return u = null, x + "" || null;
  }
  function f() {
    return N0().defined(i).curve(o).context(a);
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : me(+l), n = null, c) : e;
  }, c.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : me(+l), c) : e;
  }, c.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : me(+l), c) : n;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : me(+l), r = null, c) : t;
  }, c.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : me(+l), c) : t;
  }, c.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : me(+l), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(n).y(t);
  }, c.defined = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : me(!!l), c) : i;
  }, c.curve = function(l) {
    return arguments.length ? (o = l, a != null && (u = o(a)), c) : o;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? a = u = null : u = o(a = l), c) : a;
  }, c;
}
class q0 {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function L_(e) {
  return new q0(e, !0);
}
function B_(e) {
  return new q0(e, !1);
}
const Od = {
  draw(e, t) {
    const r = xt(t / sa);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, lo);
  }
}, F_ = {
  draw(e, t) {
    const r = xt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, L0 = xt(1 / 3), z_ = L0 * 2, W_ = {
  draw(e, t) {
    const r = xt(t / z_), n = r * L0;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, U_ = {
  draw(e, t) {
    const r = xt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, H_ = 0.8908130915292852, B0 = ua(sa / 10) / ua(7 * sa / 10), K_ = ua(lo / 10) * B0, G_ = -I0(lo / 10) * B0, V_ = {
  draw(e, t) {
    const r = xt(t * H_), n = K_ * r, i = G_ * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = lo * a / 5, u = I0(o), s = ua(o);
      e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i);
    }
    e.closePath();
  }
}, cs = xt(3), X_ = {
  draw(e, t) {
    const r = -xt(t / (cs * 3));
    e.moveTo(0, r * 2), e.lineTo(-cs * r, -r), e.lineTo(cs * r, -r), e.closePath();
  }
}, at = -0.5, ot = xt(3) / 2, rf = 1 / xt(12), Y_ = (rf / 2 + 1) * 3, Z_ = {
  draw(e, t) {
    const r = xt(t / Y_), n = r / 2, i = r * rf, a = n, o = r * rf + r, u = -a, s = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, s), e.lineTo(at * n - ot * i, ot * n + at * i), e.lineTo(at * a - ot * o, ot * a + at * o), e.lineTo(at * u - ot * s, ot * u + at * s), e.lineTo(at * n + ot * i, at * i - ot * n), e.lineTo(at * a + ot * o, at * o - ot * a), e.lineTo(at * u + ot * s, at * s - ot * u), e.closePath();
  }
};
function J_(e, t) {
  let r = null, n = wd(i);
  e = typeof e == "function" ? e : me(e || Od), t = typeof t == "function" ? t : me(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : me(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : me(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function ca() {
}
function la(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function F0(e) {
  this._context = e;
}
F0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        la(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        la(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Q_(e) {
  return new F0(e);
}
function z0(e) {
  this._context = e;
}
z0.prototype = {
  areaStart: ca,
  areaEnd: ca,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        la(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function eP(e) {
  return new z0(e);
}
function W0(e) {
  this._context = e;
}
W0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        la(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function tP(e) {
  return new W0(e);
}
function U0(e) {
  this._context = e;
}
U0.prototype = {
  areaStart: ca,
  areaEnd: ca,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function rP(e) {
  return new U0(e);
}
function Xh(e) {
  return e < 0 ? -1 : 1;
}
function Yh(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (Xh(a) + Xh(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Zh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ls(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function fa(e) {
  this._context = e;
}
fa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        ls(this, this._t0, Zh(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ls(this, Zh(this, r = Yh(this, e, t)), r);
          break;
        default:
          ls(this, this._t0, r = Yh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function H0(e) {
  this._context = new K0(e);
}
(H0.prototype = Object.create(fa.prototype)).point = function(e, t) {
  fa.prototype.point.call(this, t, e);
};
function K0(e) {
  this._context = e;
}
K0.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function nP(e) {
  return new fa(e);
}
function iP(e) {
  return new H0(e);
}
function G0(e) {
  this._context = e;
}
G0.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Jh(e), i = Jh(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Jh(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function aP(e) {
  return new G0(e);
}
function po(e, t) {
  this._context = e, this._t = t;
}
po.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function oP(e) {
  return new po(e, 0.5);
}
function uP(e) {
  return new po(e, 0);
}
function sP(e) {
  return new po(e, 1);
}
function Wr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function nf(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function cP(e, t) {
  return e[t];
}
function lP(e) {
  const t = [];
  return t.key = e, t;
}
function fP() {
  var e = me([]), t = nf, r = Wr, n = cP;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), lP), u, s = o.length, c = -1, f;
    for (const l of a)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(l, o[u].key, c, a)]).data = l;
    for (u = 0, f = Sd(t(o)); u < s; ++u)
      o[f[u]].index = u;
    return r(o, f), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : me(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : me(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? nf : typeof a == "function" ? a : me(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Wr, i) : r;
  }, i;
}
function dP(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Wr(e, t);
  }
}
function pP(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Wr(e, t);
  }
}
function hP(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var f = e[t[u]], l = f[n][1] || 0, d = f[n - 1][1] || 0, h = (l - d) / 2, y = 0; y < u; ++y) {
          var v = e[t[y]], p = v[n][1] || 0, b = v[n - 1][1] || 0;
          h += p - b;
        }
        s += l, c += h * l;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, Wr(e, t);
  }
}
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
}
var vP = ["type", "size", "sizeType"];
function af() {
  return af = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, af.apply(this, arguments);
}
function Qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ev(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qh(Object(r), !0).forEach(function(n) {
      yP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yP(e, t, r) {
  return t = gP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function gP(e) {
  var t = mP(e, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function mP(e, t) {
  if (Bn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bP(e, t) {
  if (e == null) return {};
  var r = xP(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function xP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var V0 = {
  symbolCircle: Od,
  symbolCross: F_,
  symbolDiamond: W_,
  symbolSquare: U_,
  symbolStar: V_,
  symbolTriangle: X_,
  symbolWye: Z_
}, wP = Math.PI / 180, SP = function(t) {
  var r = "symbol".concat(co(t));
  return V0[r] || Od;
}, OP = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * wP;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, _P = function(t, r) {
  V0["symbol".concat(co(t))] = r;
}, _d = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, u = o === void 0 ? "area" : o, s = bP(t, vP), c = ev(ev({}, s), {}, {
    type: n,
    size: a,
    sizeType: u
  }), f = function() {
    var p = SP(n), b = J_().type(p).size(OP(a, u, n));
    return b();
  }, l = c.className, d = c.cx, h = c.cy, y = ce(c, !0);
  return d === +d && h === +h && a === +a ? /* @__PURE__ */ j.createElement("path", af({}, y, {
    className: Q("recharts-symbols", l),
    transform: "translate(".concat(d, ", ").concat(h, ")"),
    d: f()
  })) : null;
};
_d.registerSymbol = _P;
function Ur(e) {
  "@babel/helpers - typeof";
  return Ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ur(e);
}
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, of.apply(this, arguments);
}
function tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function PP(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tv(Object(r), !0).forEach(function(n) {
      Fn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TP(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Y0(n.key), n);
  }
}
function EP(e, t, r) {
  return t && TP(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function jP(e, t, r) {
  return t = da(t), CP(e, X0() ? Reflect.construct(t, r || [], da(e).constructor) : t.apply(e, r));
}
function CP(e, t) {
  if (t && (Ur(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return MP(e);
}
function MP(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function X0() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (X0 = function() {
    return !!e;
  })();
}
function da(e) {
  return da = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, da(e);
}
function IP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && uf(e, t);
}
function uf(e, t) {
  return uf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, uf(e, t);
}
function Fn(e, t, r) {
  return t = Y0(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Y0(e) {
  var t = $P(e, "string");
  return Ur(t) == "symbol" ? t : t + "";
}
function $P(e, t) {
  if (Ur(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ur(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var ut = 32, Pd = /* @__PURE__ */ function(e) {
  function t() {
    return AP(this, t), jP(this, t, arguments);
  }
  return IP(t, e), EP(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = ut / 2, o = ut / 6, u = ut / 3, s = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ j.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: ut,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ j.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: s,
            d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(ut, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ j.createElement("path", {
            stroke: "none",
            fill: s,
            d: "M0,".concat(ut / 8, "h").concat(ut, "v").concat(ut * 3 / 4, "h").concat(-ut, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ j.isValidElement(n.legendIcon)) {
          var c = PP({}, n);
          return delete c.legendIcon, /* @__PURE__ */ j.cloneElement(n.legendIcon, c);
        }
        return /* @__PURE__ */ j.createElement(_d, {
          fill: s,
          cx: a,
          cy: a,
          size: ut,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, o = i.iconSize, u = i.layout, s = i.formatter, c = i.inactiveColor, f = {
        x: 0,
        y: 0,
        width: ut,
        height: ut
      }, l = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(h, y) {
        var v = h.formatter || s, p = Q(Fn(Fn({
          "recharts-legend-item": !0
        }, "legend-item-".concat(y), !0), "inactive", h.inactive));
        if (h.type === "none")
          return null;
        var b = ne(h.value) ? null : h.value;
        Lt(
          !ne(h.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var x = h.inactive ? c : h.color;
        return /* @__PURE__ */ j.createElement("li", of({
          className: p,
          style: l,
          key: "legend-item-".concat(y)
        }, oa(n.props, h, y)), /* @__PURE__ */ j.createElement(Jl, {
          width: o,
          height: o,
          viewBox: f,
          style: d
        }, n.renderIcon(h)), /* @__PURE__ */ j.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: x
          }
        }, v ? v(b, h, y) : b));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ j.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]);
}(R.PureComponent);
Fn(Pd, "displayName", "Legend");
Fn(Pd, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var fs, rv;
function kP() {
  if (rv) return fs;
  rv = 1;
  var e = ao();
  function t() {
    this.__data__ = new e(), this.size = 0;
  }
  return fs = t, fs;
}
var ds, nv;
function RP() {
  if (nv) return ds;
  nv = 1;
  function e(t) {
    var r = this.__data__, n = r.delete(t);
    return this.size = r.size, n;
  }
  return ds = e, ds;
}
var ps, iv;
function DP() {
  if (iv) return ps;
  iv = 1;
  function e(t) {
    return this.__data__.get(t);
  }
  return ps = e, ps;
}
var hs, av;
function NP() {
  if (av) return hs;
  av = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return hs = e, hs;
}
var vs, ov;
function qP() {
  if (ov) return vs;
  ov = 1;
  var e = ao(), t = vd(), r = yd(), n = 200;
  function i(a, o) {
    var u = this.__data__;
    if (u instanceof e) {
      var s = u.__data__;
      if (!t || s.length < n - 1)
        return s.push([a, o]), this.size = ++u.size, this;
      u = this.__data__ = new r(s);
    }
    return u.set(a, o), this.size = u.size, this;
  }
  return vs = i, vs;
}
var ys, uv;
function Z0() {
  if (uv) return ys;
  uv = 1;
  var e = ao(), t = kP(), r = RP(), n = DP(), i = NP(), a = qP();
  function o(u) {
    var s = this.__data__ = new e(u);
    this.size = s.size;
  }
  return o.prototype.clear = t, o.prototype.delete = r, o.prototype.get = n, o.prototype.has = i, o.prototype.set = a, ys = o, ys;
}
var gs, sv;
function LP() {
  if (sv) return gs;
  sv = 1;
  var e = "__lodash_hash_undefined__";
  function t(r) {
    return this.__data__.set(r, e), this;
  }
  return gs = t, gs;
}
var ms, cv;
function BP() {
  if (cv) return ms;
  cv = 1;
  function e(t) {
    return this.__data__.has(t);
  }
  return ms = e, ms;
}
var bs, lv;
function J0() {
  if (lv) return bs;
  lv = 1;
  var e = yd(), t = LP(), r = BP();
  function n(i) {
    var a = -1, o = i == null ? 0 : i.length;
    for (this.__data__ = new e(); ++a < o; )
      this.add(i[a]);
  }
  return n.prototype.add = n.prototype.push = t, n.prototype.has = r, bs = n, bs;
}
var xs, fv;
function Q0() {
  if (fv) return xs;
  fv = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (r(t[n], n, t))
        return !0;
    return !1;
  }
  return xs = e, xs;
}
var ws, dv;
function ex() {
  if (dv) return ws;
  dv = 1;
  function e(t, r) {
    return t.has(r);
  }
  return ws = e, ws;
}
var Ss, pv;
function tx() {
  if (pv) return Ss;
  pv = 1;
  var e = J0(), t = Q0(), r = ex(), n = 1, i = 2;
  function a(o, u, s, c, f, l) {
    var d = s & n, h = o.length, y = u.length;
    if (h != y && !(d && y > h))
      return !1;
    var v = l.get(o), p = l.get(u);
    if (v && p)
      return v == u && p == o;
    var b = -1, x = !0, w = s & i ? new e() : void 0;
    for (l.set(o, u), l.set(u, o); ++b < h; ) {
      var S = o[b], g = u[b];
      if (c)
        var m = d ? c(g, S, b, u, o, l) : c(S, g, b, o, u, l);
      if (m !== void 0) {
        if (m)
          continue;
        x = !1;
        break;
      }
      if (w) {
        if (!t(u, function(O, _) {
          if (!r(w, _) && (S === O || f(S, O, s, c, l)))
            return w.push(_);
        })) {
          x = !1;
          break;
        }
      } else if (!(S === g || f(S, g, s, c, l))) {
        x = !1;
        break;
      }
    }
    return l.delete(o), l.delete(u), x;
  }
  return Ss = a, Ss;
}
var Os, hv;
function FP() {
  if (hv) return Os;
  hv = 1;
  var e = jt(), t = e.Uint8Array;
  return Os = t, Os;
}
var _s, vv;
function zP() {
  if (vv) return _s;
  vv = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i, a) {
      n[++r] = [a, i];
    }), n;
  }
  return _s = e, _s;
}
var Ps, yv;
function Ad() {
  if (yv) return Ps;
  yv = 1;
  function e(t) {
    var r = -1, n = Array(t.size);
    return t.forEach(function(i) {
      n[++r] = i;
    }), n;
  }
  return Ps = e, Ps;
}
var As, gv;
function WP() {
  if (gv) return As;
  gv = 1;
  var e = wi(), t = FP(), r = hd(), n = tx(), i = zP(), a = Ad(), o = 1, u = 2, s = "[object Boolean]", c = "[object Date]", f = "[object Error]", l = "[object Map]", d = "[object Number]", h = "[object RegExp]", y = "[object Set]", v = "[object String]", p = "[object Symbol]", b = "[object ArrayBuffer]", x = "[object DataView]", w = e ? e.prototype : void 0, S = w ? w.valueOf : void 0;
  function g(m, O, _, P, k, T, A) {
    switch (_) {
      case x:
        if (m.byteLength != O.byteLength || m.byteOffset != O.byteOffset)
          return !1;
        m = m.buffer, O = O.buffer;
      case b:
        return !(m.byteLength != O.byteLength || !T(new t(m), new t(O)));
      case s:
      case c:
      case d:
        return r(+m, +O);
      case f:
        return m.name == O.name && m.message == O.message;
      case h:
      case v:
        return m == O + "";
      case l:
        var M = i;
      case y:
        var C = P & o;
        if (M || (M = a), m.size != O.size && !C)
          return !1;
        var I = A.get(m);
        if (I)
          return I == O;
        P |= u, A.set(m, O);
        var $ = n(M(m), M(O), P, k, T, A);
        return A.delete(m), $;
      case p:
        if (S)
          return S.call(m) == S.call(O);
    }
    return !1;
  }
  return As = g, As;
}
var Ts, mv;
function rx() {
  if (mv) return Ts;
  mv = 1;
  function e(t, r) {
    for (var n = -1, i = r.length, a = t.length; ++n < i; )
      t[a + n] = r[n];
    return t;
  }
  return Ts = e, Ts;
}
var Es, bv;
function UP() {
  if (bv) return Es;
  bv = 1;
  var e = rx(), t = Ze();
  function r(n, i, a) {
    var o = i(n);
    return t(n) ? o : e(o, a(n));
  }
  return Es = r, Es;
}
var js, xv;
function HP() {
  if (xv) return js;
  xv = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
      var u = t[n];
      r(u, n, t) && (o[a++] = u);
    }
    return o;
  }
  return js = e, js;
}
var Cs, wv;
function KP() {
  if (wv) return Cs;
  wv = 1;
  function e() {
    return [];
  }
  return Cs = e, Cs;
}
var Ms, Sv;
function GP() {
  if (Sv) return Ms;
  Sv = 1;
  var e = HP(), t = KP(), r = Object.prototype, n = r.propertyIsEnumerable, i = Object.getOwnPropertySymbols, a = i ? function(o) {
    return o == null ? [] : (o = Object(o), e(i(o), function(u) {
      return n.call(o, u);
    }));
  } : t;
  return Ms = a, Ms;
}
var Is, Ov;
function VP() {
  if (Ov) return Is;
  Ov = 1;
  function e(t, r) {
    for (var n = -1, i = Array(t); ++n < t; )
      i[n] = r(n);
    return i;
  }
  return Is = e, Is;
}
var $s, _v;
function XP() {
  if (_v) return $s;
  _v = 1;
  var e = Ut(), t = Ht(), r = "[object Arguments]";
  function n(i) {
    return t(i) && e(i) == r;
  }
  return $s = n, $s;
}
var ks, Pv;
function Td() {
  if (Pv) return ks;
  Pv = 1;
  var e = XP(), t = Ht(), r = Object.prototype, n = r.hasOwnProperty, i = r.propertyIsEnumerable, a = e(/* @__PURE__ */ function() {
    return arguments;
  }()) ? e : function(o) {
    return t(o) && n.call(o, "callee") && !i.call(o, "callee");
  };
  return ks = a, ks;
}
var Cn = { exports: {} }, Rs, Av;
function YP() {
  if (Av) return Rs;
  Av = 1;
  function e() {
    return !1;
  }
  return Rs = e, Rs;
}
Cn.exports;
var Tv;
function nx() {
  return Tv || (Tv = 1, function(e, t) {
    var r = jt(), n = YP(), i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, u = o ? r.Buffer : void 0, s = u ? u.isBuffer : void 0, c = s || n;
    e.exports = c;
  }(Cn, Cn.exports)), Cn.exports;
}
var Ds, Ev;
function Ed() {
  if (Ev) return Ds;
  Ev = 1;
  var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;
  function r(n, i) {
    var a = typeof n;
    return i = i ?? e, !!i && (a == "number" || a != "symbol" && t.test(n)) && n > -1 && n % 1 == 0 && n < i;
  }
  return Ds = r, Ds;
}
var Ns, jv;
function jd() {
  if (jv) return Ns;
  jv = 1;
  var e = 9007199254740991;
  function t(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= e;
  }
  return Ns = t, Ns;
}
var qs, Cv;
function ZP() {
  if (Cv) return qs;
  Cv = 1;
  var e = Ut(), t = jd(), r = Ht(), n = "[object Arguments]", i = "[object Array]", a = "[object Boolean]", o = "[object Date]", u = "[object Error]", s = "[object Function]", c = "[object Map]", f = "[object Number]", l = "[object Object]", d = "[object RegExp]", h = "[object Set]", y = "[object String]", v = "[object WeakMap]", p = "[object ArrayBuffer]", b = "[object DataView]", x = "[object Float32Array]", w = "[object Float64Array]", S = "[object Int8Array]", g = "[object Int16Array]", m = "[object Int32Array]", O = "[object Uint8Array]", _ = "[object Uint8ClampedArray]", P = "[object Uint16Array]", k = "[object Uint32Array]", T = {};
  T[x] = T[w] = T[S] = T[g] = T[m] = T[O] = T[_] = T[P] = T[k] = !0, T[n] = T[i] = T[p] = T[a] = T[b] = T[o] = T[u] = T[s] = T[c] = T[f] = T[l] = T[d] = T[h] = T[y] = T[v] = !1;
  function A(M) {
    return r(M) && t(M.length) && !!T[e(M)];
  }
  return qs = A, qs;
}
var Ls, Mv;
function ix() {
  if (Mv) return Ls;
  Mv = 1;
  function e(t) {
    return function(r) {
      return t(r);
    };
  }
  return Ls = e, Ls;
}
var Mn = { exports: {} };
Mn.exports;
var Iv;
function JP() {
  return Iv || (Iv = 1, function(e, t) {
    var r = _0(), n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, u = function() {
      try {
        var s = i && i.require && i.require("util").types;
        return s || o && o.binding && o.binding("util");
      } catch {
      }
    }();
    e.exports = u;
  }(Mn, Mn.exports)), Mn.exports;
}
var Bs, $v;
function ax() {
  if ($v) return Bs;
  $v = 1;
  var e = ZP(), t = ix(), r = JP(), n = r && r.isTypedArray, i = n ? t(n) : e;
  return Bs = i, Bs;
}
var Fs, kv;
function QP() {
  if (kv) return Fs;
  kv = 1;
  var e = VP(), t = Td(), r = Ze(), n = nx(), i = Ed(), a = ax(), o = Object.prototype, u = o.hasOwnProperty;
  function s(c, f) {
    var l = r(c), d = !l && t(c), h = !l && !d && n(c), y = !l && !d && !h && a(c), v = l || d || h || y, p = v ? e(c.length, String) : [], b = p.length;
    for (var x in c)
      (f || u.call(c, x)) && !(v && // Safari 9 has enumerable `arguments.length` in strict mode.
      (x == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      h && (x == "offset" || x == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      y && (x == "buffer" || x == "byteLength" || x == "byteOffset") || // Skip index properties.
      i(x, b))) && p.push(x);
    return p;
  }
  return Fs = s, Fs;
}
var zs, Rv;
function eA() {
  if (Rv) return zs;
  Rv = 1;
  var e = Object.prototype;
  function t(r) {
    var n = r && r.constructor, i = typeof n == "function" && n.prototype || e;
    return r === i;
  }
  return zs = t, zs;
}
var Ws, Dv;
function ox() {
  if (Dv) return Ws;
  Dv = 1;
  function e(t, r) {
    return function(n) {
      return t(r(n));
    };
  }
  return Ws = e, Ws;
}
var Us, Nv;
function tA() {
  if (Nv) return Us;
  Nv = 1;
  var e = ox(), t = e(Object.keys, Object);
  return Us = t, Us;
}
var Hs, qv;
function rA() {
  if (qv) return Hs;
  qv = 1;
  var e = eA(), t = tA(), r = Object.prototype, n = r.hasOwnProperty;
  function i(a) {
    if (!e(a))
      return t(a);
    var o = [];
    for (var u in Object(a))
      n.call(a, u) && u != "constructor" && o.push(u);
    return o;
  }
  return Hs = i, Hs;
}
var Ks, Lv;
function _i() {
  if (Lv) return Ks;
  Lv = 1;
  var e = pd(), t = jd();
  function r(n) {
    return n != null && t(n.length) && !e(n);
  }
  return Ks = r, Ks;
}
var Gs, Bv;
function ho() {
  if (Bv) return Gs;
  Bv = 1;
  var e = QP(), t = rA(), r = _i();
  function n(i) {
    return r(i) ? e(i) : t(i);
  }
  return Gs = n, Gs;
}
var Vs, Fv;
function nA() {
  if (Fv) return Vs;
  Fv = 1;
  var e = UP(), t = GP(), r = ho();
  function n(i) {
    return e(i, r, t);
  }
  return Vs = n, Vs;
}
var Xs, zv;
function iA() {
  if (zv) return Xs;
  zv = 1;
  var e = nA(), t = 1, r = Object.prototype, n = r.hasOwnProperty;
  function i(a, o, u, s, c, f) {
    var l = u & t, d = e(a), h = d.length, y = e(o), v = y.length;
    if (h != v && !l)
      return !1;
    for (var p = h; p--; ) {
      var b = d[p];
      if (!(l ? b in o : n.call(o, b)))
        return !1;
    }
    var x = f.get(a), w = f.get(o);
    if (x && w)
      return x == o && w == a;
    var S = !0;
    f.set(a, o), f.set(o, a);
    for (var g = l; ++p < h; ) {
      b = d[p];
      var m = a[b], O = o[b];
      if (s)
        var _ = l ? s(O, m, b, o, a, f) : s(m, O, b, a, o, f);
      if (!(_ === void 0 ? m === O || c(m, O, u, s, f) : _)) {
        S = !1;
        break;
      }
      g || (g = b == "constructor");
    }
    if (S && !g) {
      var P = a.constructor, k = o.constructor;
      P != k && "constructor" in a && "constructor" in o && !(typeof P == "function" && P instanceof P && typeof k == "function" && k instanceof k) && (S = !1);
    }
    return f.delete(a), f.delete(o), S;
  }
  return Xs = i, Xs;
}
var Ys, Wv;
function aA() {
  if (Wv) return Ys;
  Wv = 1;
  var e = _r(), t = jt(), r = e(t, "DataView");
  return Ys = r, Ys;
}
var Zs, Uv;
function oA() {
  if (Uv) return Zs;
  Uv = 1;
  var e = _r(), t = jt(), r = e(t, "Promise");
  return Zs = r, Zs;
}
var Js, Hv;
function ux() {
  if (Hv) return Js;
  Hv = 1;
  var e = _r(), t = jt(), r = e(t, "Set");
  return Js = r, Js;
}
var Qs, Kv;
function uA() {
  if (Kv) return Qs;
  Kv = 1;
  var e = _r(), t = jt(), r = e(t, "WeakMap");
  return Qs = r, Qs;
}
var ec, Gv;
function sA() {
  if (Gv) return ec;
  Gv = 1;
  var e = aA(), t = vd(), r = oA(), n = ux(), i = uA(), a = Ut(), o = P0(), u = "[object Map]", s = "[object Object]", c = "[object Promise]", f = "[object Set]", l = "[object WeakMap]", d = "[object DataView]", h = o(e), y = o(t), v = o(r), p = o(n), b = o(i), x = a;
  return (e && x(new e(new ArrayBuffer(1))) != d || t && x(new t()) != u || r && x(r.resolve()) != c || n && x(new n()) != f || i && x(new i()) != l) && (x = function(w) {
    var S = a(w), g = S == s ? w.constructor : void 0, m = g ? o(g) : "";
    if (m)
      switch (m) {
        case h:
          return d;
        case y:
          return u;
        case v:
          return c;
        case p:
          return f;
        case b:
          return l;
      }
    return S;
  }), ec = x, ec;
}
var tc, Vv;
function cA() {
  if (Vv) return tc;
  Vv = 1;
  var e = Z0(), t = tx(), r = WP(), n = iA(), i = sA(), a = Ze(), o = nx(), u = ax(), s = 1, c = "[object Arguments]", f = "[object Array]", l = "[object Object]", d = Object.prototype, h = d.hasOwnProperty;
  function y(v, p, b, x, w, S) {
    var g = a(v), m = a(p), O = g ? f : i(v), _ = m ? f : i(p);
    O = O == c ? l : O, _ = _ == c ? l : _;
    var P = O == l, k = _ == l, T = O == _;
    if (T && o(v)) {
      if (!o(p))
        return !1;
      g = !0, P = !1;
    }
    if (T && !P)
      return S || (S = new e()), g || u(v) ? t(v, p, b, x, w, S) : r(v, p, O, b, x, w, S);
    if (!(b & s)) {
      var A = P && h.call(v, "__wrapped__"), M = k && h.call(p, "__wrapped__");
      if (A || M) {
        var C = A ? v.value() : v, I = M ? p.value() : p;
        return S || (S = new e()), w(C, I, b, x, S);
      }
    }
    return T ? (S || (S = new e()), n(v, p, b, x, w, S)) : !1;
  }
  return tc = y, tc;
}
var rc, Xv;
function Cd() {
  if (Xv) return rc;
  Xv = 1;
  var e = cA(), t = Ht();
  function r(n, i, a, o, u) {
    return n === i ? !0 : n == null || i == null || !t(n) && !t(i) ? n !== n && i !== i : e(n, i, a, o, r, u);
  }
  return rc = r, rc;
}
var nc, Yv;
function lA() {
  if (Yv) return nc;
  Yv = 1;
  var e = Z0(), t = Cd(), r = 1, n = 2;
  function i(a, o, u, s) {
    var c = u.length, f = c, l = !s;
    if (a == null)
      return !f;
    for (a = Object(a); c--; ) {
      var d = u[c];
      if (l && d[2] ? d[1] !== a[d[0]] : !(d[0] in a))
        return !1;
    }
    for (; ++c < f; ) {
      d = u[c];
      var h = d[0], y = a[h], v = d[1];
      if (l && d[2]) {
        if (y === void 0 && !(h in a))
          return !1;
      } else {
        var p = new e();
        if (s)
          var b = s(y, v, h, a, o, p);
        if (!(b === void 0 ? t(v, y, r | n, s, p) : b))
          return !1;
      }
    }
    return !0;
  }
  return nc = i, nc;
}
var ic, Zv;
function sx() {
  if (Zv) return ic;
  Zv = 1;
  var e = ir();
  function t(r) {
    return r === r && !e(r);
  }
  return ic = t, ic;
}
var ac, Jv;
function fA() {
  if (Jv) return ac;
  Jv = 1;
  var e = sx(), t = ho();
  function r(n) {
    for (var i = t(n), a = i.length; a--; ) {
      var o = i[a], u = n[o];
      i[a] = [o, u, e(u)];
    }
    return i;
  }
  return ac = r, ac;
}
var oc, Qv;
function cx() {
  if (Qv) return oc;
  Qv = 1;
  function e(t, r) {
    return function(n) {
      return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
    };
  }
  return oc = e, oc;
}
var uc, ey;
function dA() {
  if (ey) return uc;
  ey = 1;
  var e = lA(), t = fA(), r = cx();
  function n(i) {
    var a = t(i);
    return a.length == 1 && a[0][2] ? r(a[0][0], a[0][1]) : function(o) {
      return o === i || e(o, i, a);
    };
  }
  return uc = n, uc;
}
var sc, ty;
function pA() {
  if (ty) return sc;
  ty = 1;
  function e(t, r) {
    return t != null && r in Object(t);
  }
  return sc = e, sc;
}
var cc, ry;
function hA() {
  if (ry) return cc;
  ry = 1;
  var e = E0(), t = Td(), r = Ze(), n = Ed(), i = jd(), a = uo();
  function o(u, s, c) {
    s = e(s, u);
    for (var f = -1, l = s.length, d = !1; ++f < l; ) {
      var h = a(s[f]);
      if (!(d = u != null && c(u, h)))
        break;
      u = u[h];
    }
    return d || ++f != l ? d : (l = u == null ? 0 : u.length, !!l && i(l) && n(h, l) && (r(u) || t(u)));
  }
  return cc = o, cc;
}
var lc, ny;
function vA() {
  if (ny) return lc;
  ny = 1;
  var e = pA(), t = hA();
  function r(n, i) {
    return n != null && t(n, i, e);
  }
  return lc = r, lc;
}
var fc, iy;
function yA() {
  if (iy) return fc;
  iy = 1;
  var e = Cd(), t = j0(), r = vA(), n = dd(), i = sx(), a = cx(), o = uo(), u = 1, s = 2;
  function c(f, l) {
    return n(f) && i(l) ? a(o(f), l) : function(d) {
      var h = t(d, f);
      return h === void 0 && h === l ? r(d, f) : e(l, h, u | s);
    };
  }
  return fc = c, fc;
}
var dc, ay;
function pn() {
  if (ay) return dc;
  ay = 1;
  function e(t) {
    return t;
  }
  return dc = e, dc;
}
var pc, oy;
function gA() {
  if (oy) return pc;
  oy = 1;
  function e(t) {
    return function(r) {
      return r?.[t];
    };
  }
  return pc = e, pc;
}
var hc, uy;
function mA() {
  if (uy) return hc;
  uy = 1;
  var e = md();
  function t(r) {
    return function(n) {
      return e(n, r);
    };
  }
  return hc = t, hc;
}
var vc, sy;
function bA() {
  if (sy) return vc;
  sy = 1;
  var e = gA(), t = mA(), r = dd(), n = uo();
  function i(a) {
    return r(a) ? e(n(a)) : t(a);
  }
  return vc = i, vc;
}
var yc, cy;
function ar() {
  if (cy) return yc;
  cy = 1;
  var e = dA(), t = yA(), r = pn(), n = Ze(), i = bA();
  function a(o) {
    return typeof o == "function" ? o : o == null ? r : typeof o == "object" ? n(o) ? t(o[0], o[1]) : e(o) : i(o);
  }
  return yc = a, yc;
}
var gc, ly;
function lx() {
  if (ly) return gc;
  ly = 1;
  function e(t, r, n, i) {
    for (var a = t.length, o = n + (i ? 1 : -1); i ? o-- : ++o < a; )
      if (r(t[o], o, t))
        return o;
    return -1;
  }
  return gc = e, gc;
}
var mc, fy;
function xA() {
  if (fy) return mc;
  fy = 1;
  function e(t) {
    return t !== t;
  }
  return mc = e, mc;
}
var bc, dy;
function wA() {
  if (dy) return bc;
  dy = 1;
  function e(t, r, n) {
    for (var i = n - 1, a = t.length; ++i < a; )
      if (t[i] === r)
        return i;
    return -1;
  }
  return bc = e, bc;
}
var xc, py;
function SA() {
  if (py) return xc;
  py = 1;
  var e = lx(), t = xA(), r = wA();
  function n(i, a, o) {
    return a === a ? r(i, a, o) : e(i, t, o);
  }
  return xc = n, xc;
}
var wc, hy;
function OA() {
  if (hy) return wc;
  hy = 1;
  var e = SA();
  function t(r, n) {
    var i = r == null ? 0 : r.length;
    return !!i && e(r, n, 0) > -1;
  }
  return wc = t, wc;
}
var Sc, vy;
function _A() {
  if (vy) return Sc;
  vy = 1;
  function e(t, r, n) {
    for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
      if (n(r, t[i]))
        return !0;
    return !1;
  }
  return Sc = e, Sc;
}
var Oc, yy;
function PA() {
  if (yy) return Oc;
  yy = 1;
  function e() {
  }
  return Oc = e, Oc;
}
var _c, gy;
function AA() {
  if (gy) return _c;
  gy = 1;
  var e = ux(), t = PA(), r = Ad(), n = 1 / 0, i = e && 1 / r(new e([, -0]))[1] == n ? function(a) {
    return new e(a);
  } : t;
  return _c = i, _c;
}
var Pc, my;
function TA() {
  if (my) return Pc;
  my = 1;
  var e = J0(), t = OA(), r = _A(), n = ex(), i = AA(), a = Ad(), o = 200;
  function u(s, c, f) {
    var l = -1, d = t, h = s.length, y = !0, v = [], p = v;
    if (f)
      y = !1, d = r;
    else if (h >= o) {
      var b = c ? null : i(s);
      if (b)
        return a(b);
      y = !1, d = n, p = new e();
    } else
      p = c ? [] : v;
    e:
      for (; ++l < h; ) {
        var x = s[l], w = c ? c(x) : x;
        if (x = f || x !== 0 ? x : 0, y && w === w) {
          for (var S = p.length; S--; )
            if (p[S] === w)
              continue e;
          c && p.push(w), v.push(x);
        } else d(p, w, f) || (p !== v && p.push(w), v.push(x));
      }
    return v;
  }
  return Pc = u, Pc;
}
var Ac, by;
function EA() {
  if (by) return Ac;
  by = 1;
  var e = ar(), t = TA();
  function r(n, i) {
    return n && n.length ? t(n, e(i, 2)) : [];
  }
  return Ac = r, Ac;
}
var jA = EA();
const xy = /* @__PURE__ */ xe(jA);
function fx(e, t, r) {
  return t === !0 ? xy(e, r) : ne(t) ? xy(e, t) : e;
}
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hr(e);
}
var CA = ["ref"];
function wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function It(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wy(Object(r), !0).forEach(function(n) {
      vo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MA(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, px(n.key), n);
  }
}
function IA(e, t, r) {
  return t && Sy(e.prototype, t), r && Sy(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $A(e, t, r) {
  return t = pa(t), kA(e, dx() ? Reflect.construct(t, r || [], pa(e).constructor) : t.apply(e, r));
}
function kA(e, t) {
  if (t && (Hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return RA(e);
}
function RA(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function dx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (dx = function() {
    return !!e;
  })();
}
function pa(e) {
  return pa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pa(e);
}
function DA(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sf(e, t);
}
function sf(e, t) {
  return sf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, sf(e, t);
}
function vo(e, t, r) {
  return t = px(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function px(e) {
  var t = NA(e, "string");
  return Hr(t) == "symbol" ? t : t + "";
}
function NA(e, t) {
  if (Hr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function qA(e, t) {
  if (e == null) return {};
  var r = LA(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function LA(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function BA(e) {
  return e.value;
}
function FA(e, t) {
  if (/* @__PURE__ */ j.isValidElement(e))
    return /* @__PURE__ */ j.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ j.createElement(e, t);
  t.ref;
  var r = qA(t, CA);
  return /* @__PURE__ */ j.createElement(Pd, r);
}
var Oy = 1, Br = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    MA(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = $A(this, t, [].concat(i)), vo(r, "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return DA(t, e), IA(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > Oy || Math.abs(i.height - this.lastBoundingBox.height) > Oy) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? It({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, u = i.verticalAlign, s = i.margin, c = i.chartWidth, f = i.chartHeight, l, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var h = this.getBBoxSnapshot();
          l = {
            left: ((c || 0) - h.width) / 2
          };
        } else
          l = o === "right" ? {
            right: s && s.right || 0
          } : {
            left: s && s.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var y = this.getBBoxSnapshot();
          d = {
            top: ((f || 0) - y.height) / 2
          };
        } else
          d = u === "bottom" ? {
            bottom: s && s.bottom || 0
          } : {
            top: s && s.top || 0
          };
      return It(It({}, l), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, u = i.height, s = i.wrapperStyle, c = i.payloadUniqBy, f = i.payload, l = It(It({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(s)), s);
      return /* @__PURE__ */ j.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(h) {
          n.wrapperNode = h;
        }
      }, FA(a, It(It({}, this.props), {}, {
        payload: fx(f, c, BA)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = It(It({}, this.defaultProps), n.props), o = a.layout;
      return o === "vertical" && U(n.props.height) ? {
        height: n.props.height
      } : o === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]);
}(R.PureComponent);
vo(Br, "displayName", "Legend");
vo(Br, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Tc, _y;
function zA() {
  if (_y) return Tc;
  _y = 1;
  var e = wi(), t = Td(), r = Ze(), n = e ? e.isConcatSpreadable : void 0;
  function i(a) {
    return r(a) || t(a) || !!(n && a && a[n]);
  }
  return Tc = i, Tc;
}
var Ec, Py;
function hx() {
  if (Py) return Ec;
  Py = 1;
  var e = rx(), t = zA();
  function r(n, i, a, o, u) {
    var s = -1, c = n.length;
    for (a || (a = t), u || (u = []); ++s < c; ) {
      var f = n[s];
      i > 0 && a(f) ? i > 1 ? r(f, i - 1, a, o, u) : e(u, f) : o || (u[u.length] = f);
    }
    return u;
  }
  return Ec = r, Ec;
}
var jc, Ay;
function WA() {
  if (Ay) return jc;
  Ay = 1;
  function e(t) {
    return function(r, n, i) {
      for (var a = -1, o = Object(r), u = i(r), s = u.length; s--; ) {
        var c = u[t ? s : ++a];
        if (n(o[c], c, o) === !1)
          break;
      }
      return r;
    };
  }
  return jc = e, jc;
}
var Cc, Ty;
function UA() {
  if (Ty) return Cc;
  Ty = 1;
  var e = WA(), t = e();
  return Cc = t, Cc;
}
var Mc, Ey;
function vx() {
  if (Ey) return Mc;
  Ey = 1;
  var e = UA(), t = ho();
  function r(n, i) {
    return n && e(n, i, t);
  }
  return Mc = r, Mc;
}
var Ic, jy;
function HA() {
  if (jy) return Ic;
  jy = 1;
  var e = _i();
  function t(r, n) {
    return function(i, a) {
      if (i == null)
        return i;
      if (!e(i))
        return r(i, a);
      for (var o = i.length, u = n ? o : -1, s = Object(i); (n ? u-- : ++u < o) && a(s[u], u, s) !== !1; )
        ;
      return i;
    };
  }
  return Ic = t, Ic;
}
var $c, Cy;
function Md() {
  if (Cy) return $c;
  Cy = 1;
  var e = vx(), t = HA(), r = t(e);
  return $c = r, $c;
}
var kc, My;
function yx() {
  if (My) return kc;
  My = 1;
  var e = Md(), t = _i();
  function r(n, i) {
    var a = -1, o = t(n) ? Array(n.length) : [];
    return e(n, function(u, s, c) {
      o[++a] = i(u, s, c);
    }), o;
  }
  return kc = r, kc;
}
var Rc, Iy;
function KA() {
  if (Iy) return Rc;
  Iy = 1;
  function e(t, r) {
    var n = t.length;
    for (t.sort(r); n--; )
      t[n] = t[n].value;
    return t;
  }
  return Rc = e, Rc;
}
var Dc, $y;
function GA() {
  if ($y) return Dc;
  $y = 1;
  var e = fn();
  function t(r, n) {
    if (r !== n) {
      var i = r !== void 0, a = r === null, o = r === r, u = e(r), s = n !== void 0, c = n === null, f = n === n, l = e(n);
      if (!c && !l && !u && r > n || u && s && f && !c && !l || a && s && f || !i && f || !o)
        return 1;
      if (!a && !u && !l && r < n || l && i && o && !a && !u || c && i && o || !s && o || !f)
        return -1;
    }
    return 0;
  }
  return Dc = t, Dc;
}
var Nc, ky;
function VA() {
  if (ky) return Nc;
  ky = 1;
  var e = GA();
  function t(r, n, i) {
    for (var a = -1, o = r.criteria, u = n.criteria, s = o.length, c = i.length; ++a < s; ) {
      var f = e(o[a], u[a]);
      if (f) {
        if (a >= c)
          return f;
        var l = i[a];
        return f * (l == "desc" ? -1 : 1);
      }
    }
    return r.index - n.index;
  }
  return Nc = t, Nc;
}
var qc, Ry;
function XA() {
  if (Ry) return qc;
  Ry = 1;
  var e = gd(), t = md(), r = ar(), n = yx(), i = KA(), a = ix(), o = VA(), u = pn(), s = Ze();
  function c(f, l, d) {
    l.length ? l = e(l, function(v) {
      return s(v) ? function(p) {
        return t(p, v.length === 1 ? v[0] : v);
      } : v;
    }) : l = [u];
    var h = -1;
    l = e(l, a(r));
    var y = n(f, function(v, p, b) {
      var x = e(l, function(w) {
        return w(v);
      });
      return { criteria: x, index: ++h, value: v };
    });
    return i(y, function(v, p) {
      return o(v, p, d);
    });
  }
  return qc = c, qc;
}
var Lc, Dy;
function YA() {
  if (Dy) return Lc;
  Dy = 1;
  function e(t, r, n) {
    switch (n.length) {
      case 0:
        return t.call(r);
      case 1:
        return t.call(r, n[0]);
      case 2:
        return t.call(r, n[0], n[1]);
      case 3:
        return t.call(r, n[0], n[1], n[2]);
    }
    return t.apply(r, n);
  }
  return Lc = e, Lc;
}
var Bc, Ny;
function ZA() {
  if (Ny) return Bc;
  Ny = 1;
  var e = YA(), t = Math.max;
  function r(n, i, a) {
    return i = t(i === void 0 ? n.length - 1 : i, 0), function() {
      for (var o = arguments, u = -1, s = t(o.length - i, 0), c = Array(s); ++u < s; )
        c[u] = o[i + u];
      u = -1;
      for (var f = Array(i + 1); ++u < i; )
        f[u] = o[u];
      return f[i] = a(c), e(n, this, f);
    };
  }
  return Bc = r, Bc;
}
var Fc, qy;
function JA() {
  if (qy) return Fc;
  qy = 1;
  function e(t) {
    return function() {
      return t;
    };
  }
  return Fc = e, Fc;
}
var zc, Ly;
function gx() {
  if (Ly) return zc;
  Ly = 1;
  var e = _r(), t = function() {
    try {
      var r = e(Object, "defineProperty");
      return r({}, "", {}), r;
    } catch {
    }
  }();
  return zc = t, zc;
}
var Wc, By;
function QA() {
  if (By) return Wc;
  By = 1;
  var e = JA(), t = gx(), r = pn(), n = t ? function(i, a) {
    return t(i, "toString", {
      configurable: !0,
      enumerable: !1,
      value: e(a),
      writable: !0
    });
  } : r;
  return Wc = n, Wc;
}
var Uc, Fy;
function eT() {
  if (Fy) return Uc;
  Fy = 1;
  var e = 800, t = 16, r = Date.now;
  function n(i) {
    var a = 0, o = 0;
    return function() {
      var u = r(), s = t - (u - o);
      if (o = u, s > 0) {
        if (++a >= e)
          return arguments[0];
      } else
        a = 0;
      return i.apply(void 0, arguments);
    };
  }
  return Uc = n, Uc;
}
var Hc, zy;
function tT() {
  if (zy) return Hc;
  zy = 1;
  var e = QA(), t = eT(), r = t(e);
  return Hc = r, Hc;
}
var Kc, Wy;
function rT() {
  if (Wy) return Kc;
  Wy = 1;
  var e = pn(), t = ZA(), r = tT();
  function n(i, a) {
    return r(t(i, a, e), i + "");
  }
  return Kc = n, Kc;
}
var Gc, Uy;
function yo() {
  if (Uy) return Gc;
  Uy = 1;
  var e = hd(), t = _i(), r = Ed(), n = ir();
  function i(a, o, u) {
    if (!n(u))
      return !1;
    var s = typeof o;
    return (s == "number" ? t(u) && r(o, u.length) : s == "string" && o in u) ? e(u[o], a) : !1;
  }
  return Gc = i, Gc;
}
var Vc, Hy;
function nT() {
  if (Hy) return Vc;
  Hy = 1;
  var e = hx(), t = XA(), r = rT(), n = yo(), i = r(function(a, o) {
    if (a == null)
      return [];
    var u = o.length;
    return u > 1 && n(a, o[0], o[1]) ? o = [] : u > 2 && n(o[0], o[1], o[2]) && (o = [o[0]]), t(a, e(o, 1), []);
  });
  return Vc = i, Vc;
}
var iT = nT();
const Id = /* @__PURE__ */ xe(iT);
function zn(e) {
  "@babel/helpers - typeof";
  return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zn(e);
}
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cf.apply(this, arguments);
}
function aT(e, t) {
  return cT(e) || sT(e, t) || uT(e, t) || oT();
}
function oT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uT(e, t) {
  if (e) {
    if (typeof e == "string") return Ky(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ky(e, t);
  }
}
function Ky(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function sT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function cT(e) {
  if (Array.isArray(e)) return e;
}
function Gy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gy(Object(r), !0).forEach(function(n) {
      lT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lT(e, t, r) {
  return t = fT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fT(e) {
  var t = dT(e, "string");
  return zn(t) == "symbol" ? t : t + "";
}
function dT(e, t) {
  if (zn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pT(e) {
  return Array.isArray(e) && Re(e[0]) && Re(e[1]) ? e.join(" ~ ") : e;
}
var hT = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, u = o === void 0 ? {} : o, s = t.labelStyle, c = s === void 0 ? {} : s, f = t.payload, l = t.formatter, d = t.itemSorter, h = t.wrapperClassName, y = t.labelClassName, v = t.label, p = t.labelFormatter, b = t.accessibilityLayer, x = b === void 0 ? !1 : b, w = function() {
    if (f && f.length) {
      var A = {
        padding: 0,
        margin: 0
      }, M = (d ? Id(f, d) : f).map(function(C, I) {
        if (C.type === "none")
          return null;
        var $ = Xc({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: C.color || "#000"
        }, u), N = C.formatter || l || pT, L = C.value, F = C.name, H = L, W = F;
        if (N && H != null && W != null) {
          var B = N(L, F, C, I, f);
          if (Array.isArray(B)) {
            var X = aT(B, 2);
            H = X[0], W = X[1];
          } else
            H = B;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ j.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(I),
            style: $
          }, Re(W) ? /* @__PURE__ */ j.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, W) : null, Re(W) ? /* @__PURE__ */ j.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ j.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, H), /* @__PURE__ */ j.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, C.unit || ""))
        );
      });
      return /* @__PURE__ */ j.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: A
      }, M);
    }
    return null;
  }, S = Xc({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), g = Xc({
    margin: 0
  }, c), m = !he(v), O = m ? v : "", _ = Q("recharts-default-tooltip", h), P = Q("recharts-tooltip-label", y);
  m && p && f !== void 0 && f !== null && (O = p(v, f));
  var k = x ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ j.createElement("div", cf({
    className: _,
    style: S
  }, k), /* @__PURE__ */ j.createElement("p", {
    className: P,
    style: g
  }, /* @__PURE__ */ j.isValidElement(O) ? O : "".concat(O)), w());
};
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wn(e);
}
function Bi(e, t, r) {
  return t = vT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vT(e) {
  var t = yT(e, "string");
  return Wn(t) == "symbol" ? t : t + "";
}
function yT(e, t) {
  if (Wn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xn = "recharts-tooltip-wrapper", gT = {
  visibility: "hidden"
};
function mT(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Q(xn, Bi(Bi(Bi(Bi({}, "".concat(xn, "-right"), U(r) && t && U(t.x) && r >= t.x), "".concat(xn, "-left"), U(r) && t && U(t.x) && r < t.x), "".concat(xn, "-bottom"), U(n) && t && U(t.y) && n >= t.y), "".concat(xn, "-top"), U(n) && t && U(t.y) && n < t.y));
}
function Vy(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, u = e.tooltipDimension, s = e.viewBox, c = e.viewBoxDimension;
  if (a && U(a[n]))
    return a[n];
  var f = r[n] - u - i, l = r[n] + i;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var d = f, h = s[n];
    return d < h ? Math.max(l, s[n]) : Math.max(f, s[n]);
  }
  var y = l + u, v = s[n] + c;
  return y > v ? Math.max(f, s[n]) : Math.max(l, s[n]);
}
function bT(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function xT(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, s = e.viewBox, c, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = Vy({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), l = Vy({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = bT({
    translateX: f,
    translateY: l,
    useTranslate3d: u
  })) : c = gT, {
    cssProperties: c,
    cssClasses: mT({
      translateX: f,
      translateY: l,
      coordinate: r
    })
  };
}
function Kr(e) {
  "@babel/helpers - typeof";
  return Kr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kr(e);
}
function Xy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xy(Object(r), !0).forEach(function(n) {
      ff(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ST(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bx(n.key), n);
  }
}
function OT(e, t, r) {
  return t && ST(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _T(e, t, r) {
  return t = ha(t), PT(e, mx() ? Reflect.construct(t, r || [], ha(e).constructor) : t.apply(e, r));
}
function PT(e, t) {
  if (t && (Kr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AT(e);
}
function AT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mx = function() {
    return !!e;
  })();
}
function ha(e) {
  return ha = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ha(e);
}
function TT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && lf(e, t);
}
function lf(e, t) {
  return lf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, lf(e, t);
}
function ff(e, t, r) {
  return t = bx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bx(e) {
  var t = ET(e, "string");
  return Kr(t) == "symbol" ? t : t + "";
}
function ET(e, t) {
  if (Kr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Zy = 1, jT = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    wT(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = _T(this, t, [].concat(i)), ff(r, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), ff(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, s, c, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (s = r.props.coordinate) === null || s === void 0 ? void 0 : s.x) !== null && u !== void 0 ? u : 0,
            y: (c = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && c !== void 0 ? c : 0
          }
        });
      }
    }), r;
  }
  return TT(t, e), OT(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > Zy || Math.abs(n.height - this.state.lastBoundingBox.height) > Zy) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, s = i.animationEasing, c = i.children, f = i.coordinate, l = i.hasPayload, d = i.isAnimationActive, h = i.offset, y = i.position, v = i.reverseDirection, p = i.useTranslate3d, b = i.viewBox, x = i.wrapperStyle, w = xT({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: h,
        position: y,
        reverseDirection: v,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: p,
        viewBox: b
      }), S = w.cssClasses, g = w.cssProperties, m = Yy(Yy({
        transition: d && a ? "transform ".concat(u, "ms ").concat(s) : void 0
      }, g), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, x);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ j.createElement("div", {
          tabIndex: -1,
          className: S,
          style: m,
          ref: function(_) {
            n.wrapperNode = _;
          }
        }, c)
      );
    }
  }]);
}(R.PureComponent), CT = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Pi = {
  isSsr: CT()
};
function Gr(e) {
  "@babel/helpers - typeof";
  return Gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function Jy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jy(Object(r), !0).forEach(function(n) {
      $d(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function IT(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, wx(n.key), n);
  }
}
function $T(e, t, r) {
  return t && IT(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kT(e, t, r) {
  return t = va(t), RT(e, xx() ? Reflect.construct(t, r || [], va(e).constructor) : t.apply(e, r));
}
function RT(e, t) {
  if (t && (Gr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return DT(e);
}
function DT(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xx() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xx = function() {
    return !!e;
  })();
}
function va(e) {
  return va = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, va(e);
}
function NT(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && df(e, t);
}
function df(e, t) {
  return df = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, df(e, t);
}
function $d(e, t, r) {
  return t = wx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wx(e) {
  var t = qT(e, "string");
  return Gr(t) == "symbol" ? t : t + "";
}
function qT(e, t) {
  if (Gr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Gr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function LT(e) {
  return e.dataKey;
}
function BT(e, t) {
  return /* @__PURE__ */ j.isValidElement(e) ? /* @__PURE__ */ j.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ j.createElement(e, t) : /* @__PURE__ */ j.createElement(hT, t);
}
var $t = /* @__PURE__ */ function(e) {
  function t() {
    return MT(this, t), kT(this, t, arguments);
  }
  return NT(t, e), $T(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, s = i.animationEasing, c = i.content, f = i.coordinate, l = i.filterNull, d = i.isAnimationActive, h = i.offset, y = i.payload, v = i.payloadUniqBy, p = i.position, b = i.reverseDirection, x = i.useTranslate3d, w = i.viewBox, S = i.wrapperStyle, g = y ?? [];
      l && g.length && (g = fx(y.filter(function(O) {
        return O.value != null && (O.hide !== !0 || n.props.includeHidden);
      }), v, LT));
      var m = g.length > 0;
      return /* @__PURE__ */ j.createElement(jT, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: s,
        isAnimationActive: d,
        active: a,
        coordinate: f,
        hasPayload: m,
        offset: h,
        position: p,
        reverseDirection: b,
        useTranslate3d: x,
        viewBox: w,
        wrapperStyle: S
      }, BT(c, Qy(Qy({}, this.props), {}, {
        payload: g
      })));
    }
  }]);
}(R.PureComponent);
$d($t, "displayName", "Tooltip");
$d($t, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Pi.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var Yc, eg;
function FT() {
  if (eg) return Yc;
  eg = 1;
  var e = jt(), t = function() {
    return e.Date.now();
  };
  return Yc = t, Yc;
}
var Zc, tg;
function zT() {
  if (tg) return Zc;
  tg = 1;
  var e = /\s/;
  function t(r) {
    for (var n = r.length; n-- && e.test(r.charAt(n)); )
      ;
    return n;
  }
  return Zc = t, Zc;
}
var Jc, rg;
function WT() {
  if (rg) return Jc;
  rg = 1;
  var e = zT(), t = /^\s+/;
  function r(n) {
    return n && n.slice(0, e(n) + 1).replace(t, "");
  }
  return Jc = r, Jc;
}
var Qc, ng;
function Sx() {
  if (ng) return Qc;
  ng = 1;
  var e = WT(), t = ir(), r = fn(), n = NaN, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, u = parseInt;
  function s(c) {
    if (typeof c == "number")
      return c;
    if (r(c))
      return n;
    if (t(c)) {
      var f = typeof c.valueOf == "function" ? c.valueOf() : c;
      c = t(f) ? f + "" : f;
    }
    if (typeof c != "string")
      return c === 0 ? c : +c;
    c = e(c);
    var l = a.test(c);
    return l || o.test(c) ? u(c.slice(2), l ? 2 : 8) : i.test(c) ? n : +c;
  }
  return Qc = s, Qc;
}
var el, ig;
function UT() {
  if (ig) return el;
  ig = 1;
  var e = ir(), t = FT(), r = Sx(), n = "Expected a function", i = Math.max, a = Math.min;
  function o(u, s, c) {
    var f, l, d, h, y, v, p = 0, b = !1, x = !1, w = !0;
    if (typeof u != "function")
      throw new TypeError(n);
    s = r(s) || 0, e(c) && (b = !!c.leading, x = "maxWait" in c, d = x ? i(r(c.maxWait) || 0, s) : d, w = "trailing" in c ? !!c.trailing : w);
    function S(M) {
      var C = f, I = l;
      return f = l = void 0, p = M, h = u.apply(I, C), h;
    }
    function g(M) {
      return p = M, y = setTimeout(_, s), b ? S(M) : h;
    }
    function m(M) {
      var C = M - v, I = M - p, $ = s - C;
      return x ? a($, d - I) : $;
    }
    function O(M) {
      var C = M - v, I = M - p;
      return v === void 0 || C >= s || C < 0 || x && I >= d;
    }
    function _() {
      var M = t();
      if (O(M))
        return P(M);
      y = setTimeout(_, m(M));
    }
    function P(M) {
      return y = void 0, w && f ? S(M) : (f = l = void 0, h);
    }
    function k() {
      y !== void 0 && clearTimeout(y), p = 0, f = v = l = y = void 0;
    }
    function T() {
      return y === void 0 ? h : P(t());
    }
    function A() {
      var M = t(), C = O(M);
      if (f = arguments, l = this, v = M, C) {
        if (y === void 0)
          return g(v);
        if (x)
          return clearTimeout(y), y = setTimeout(_, s), S(v);
      }
      return y === void 0 && (y = setTimeout(_, s)), h;
    }
    return A.cancel = k, A.flush = T, A;
  }
  return el = o, el;
}
var tl, ag;
function HT() {
  if (ag) return tl;
  ag = 1;
  var e = UT(), t = ir(), r = "Expected a function";
  function n(i, a, o) {
    var u = !0, s = !0;
    if (typeof i != "function")
      throw new TypeError(r);
    return t(o) && (u = "leading" in o ? !!o.leading : u, s = "trailing" in o ? !!o.trailing : s), e(i, a, {
      leading: u,
      maxWait: a,
      trailing: s
    });
  }
  return tl = n, tl;
}
var KT = HT();
const Ox = /* @__PURE__ */ xe(KT);
function Un(e) {
  "@babel/helpers - typeof";
  return Un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Un(e);
}
function og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? og(Object(r), !0).forEach(function(n) {
      GT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GT(e, t, r) {
  return t = VT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VT(e) {
  var t = XT(e, "string");
  return Un(t) == "symbol" ? t : t + "";
}
function XT(e, t) {
  if (Un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function YT(e, t) {
  return eE(e) || QT(e, t) || JT(e, t) || ZT();
}
function ZT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JT(e, t) {
  if (e) {
    if (typeof e == "string") return ug(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ug(e, t);
  }
}
function ug(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function QT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function eE(e) {
  if (Array.isArray(e)) return e;
}
var tE = /* @__PURE__ */ R.forwardRef(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, u = e.height, s = u === void 0 ? "100%" : u, c = e.minWidth, f = c === void 0 ? 0 : c, l = e.minHeight, d = e.maxHeight, h = e.children, y = e.debounce, v = y === void 0 ? 0 : y, p = e.id, b = e.className, x = e.onResize, w = e.style, S = w === void 0 ? {} : w, g = R.useRef(null), m = R.useRef();
  m.current = x, R.useImperativeHandle(t, function() {
    return Object.defineProperty(g.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), g.current;
      },
      configurable: !0
    });
  });
  var O = R.useState({
    containerWidth: i.width,
    containerHeight: i.height
  }), _ = YT(O, 2), P = _[0], k = _[1], T = R.useCallback(function(M, C) {
    k(function(I) {
      var $ = Math.round(M), N = Math.round(C);
      return I.containerWidth === $ && I.containerHeight === N ? I : {
        containerWidth: $,
        containerHeight: N
      };
    });
  }, []);
  R.useEffect(function() {
    var M = function(F) {
      var H, W = F[0].contentRect, B = W.width, X = W.height;
      T(B, X), (H = m.current) === null || H === void 0 || H.call(m, B, X);
    };
    v > 0 && (M = Ox(M, v, {
      trailing: !0,
      leading: !1
    }));
    var C = new ResizeObserver(M), I = g.current.getBoundingClientRect(), $ = I.width, N = I.height;
    return T($, N), C.observe(g.current), function() {
      C.disconnect();
    };
  }, [T, v]);
  var A = R.useMemo(function() {
    var M = P.containerWidth, C = P.containerHeight;
    if (M < 0 || C < 0)
      return null;
    Lt(hr(o) || hr(s), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, s), Lt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var I = hr(o) ? M : o, $ = hr(s) ? C : s;
    r && r > 0 && (I ? $ = I / r : $ && (I = $ * r), d && $ > d && ($ = d)), Lt(I > 0 || $ > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, I, $, o, s, f, l, r);
    var N = !Array.isArray(h) && qt(h.type).endsWith("Chart");
    return j.Children.map(h, function(L) {
      return /* @__PURE__ */ j.isValidElement(L) ? /* @__PURE__ */ R.cloneElement(L, Fi({
        width: I,
        height: $
      }, N ? {
        style: Fi({
          height: "100%",
          width: "100%",
          maxHeight: $,
          maxWidth: I
        }, L.props.style)
      } : {})) : L;
    });
  }, [r, h, s, d, l, f, P, o]);
  return /* @__PURE__ */ j.createElement("div", {
    id: p ? "".concat(p) : void 0,
    className: Q("recharts-responsive-container", b),
    style: Fi(Fi({}, S), {}, {
      width: o,
      height: s,
      minWidth: f,
      minHeight: l,
      maxHeight: d
    }),
    ref: g
  }, A);
}), _x = function(t) {
  return null;
};
_x.displayName = "Cell";
function Hn(e) {
  "@babel/helpers - typeof";
  return Hn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hn(e);
}
function sg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sg(Object(r), !0).forEach(function(n) {
      rE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rE(e, t, r) {
  return t = nE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nE(e) {
  var t = iE(e, "string");
  return Hn(t) == "symbol" ? t : t + "";
}
function iE(e, t) {
  if (Hn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Hn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ir = {
  widthCache: {},
  cacheCount: 0
}, aE = 2e3, oE = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, cg = "recharts_measurement_span";
function uE(e) {
  var t = pf({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Dn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Pi.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = uE(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Ir.widthCache[i])
    return Ir.widthCache[i];
  try {
    var a = document.getElementById(cg);
    a || (a = document.createElement("span"), a.setAttribute("id", cg), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = pf(pf({}, oE), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), s = {
      width: u.width,
      height: u.height
    };
    return Ir.widthCache[i] = s, ++Ir.cacheCount > aE && (Ir.cacheCount = 0, Ir.widthCache = {}), s;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, sE = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function Kn(e) {
  "@babel/helpers - typeof";
  return Kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kn(e);
}
function ya(e, t) {
  return dE(e) || fE(e, t) || lE(e, t) || cE();
}
function cE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lE(e, t) {
  if (e) {
    if (typeof e == "string") return lg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lg(e, t);
  }
}
function lg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function dE(e) {
  if (Array.isArray(e)) return e;
}
function pE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, vE(n.key), n);
  }
}
function hE(e, t, r) {
  return t && fg(e.prototype, t), r && fg(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function vE(e) {
  var t = yE(e, "string");
  return Kn(t) == "symbol" ? t : t + "";
}
function yE(e, t) {
  if (Kn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var dg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, pg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, gE = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, mE = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Px = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, bE = Object.keys(Px), Dr = "NaN";
function xE(e, t) {
  return e * Px[t];
}
var zi = /* @__PURE__ */ function() {
  function e(t, r) {
    pE(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !gE.test(r) && (this.num = NaN, this.unit = ""), bE.includes(r) && (this.num = xE(t, r), this.unit = "px");
  }
  return hE(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = mE.exec(r)) !== null && n !== void 0 ? n : [], a = ya(i, 3), o = a[1], u = a[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]);
}();
function Ax(e) {
  if (e.includes(Dr))
    return Dr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = dg.exec(t)) !== null && r !== void 0 ? r : [], i = ya(n, 4), a = i[1], o = i[2], u = i[3], s = zi.parse(a ?? ""), c = zi.parse(u ?? ""), f = o === "*" ? s.multiply(c) : s.divide(c);
    if (f.isNaN())
      return Dr;
    t = t.replace(dg, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, d = (l = pg.exec(t)) !== null && l !== void 0 ? l : [], h = ya(d, 4), y = h[1], v = h[2], p = h[3], b = zi.parse(y ?? ""), x = zi.parse(p ?? ""), w = v === "+" ? b.add(x) : b.subtract(x);
    if (w.isNaN())
      return Dr;
    t = t.replace(pg, w.toString());
  }
  return t;
}
var hg = /\(([^()]*)\)/;
function wE(e) {
  for (var t = e; t.includes("("); ) {
    var r = hg.exec(t), n = ya(r, 2), i = n[1];
    t = t.replace(hg, Ax(i));
  }
  return t;
}
function SE(e) {
  var t = e.replace(/\s+/g, "");
  return t = wE(t), t = Ax(t), t;
}
function OE(e) {
  try {
    return SE(e);
  } catch {
    return Dr;
  }
}
function rl(e) {
  var t = OE(e.slice(5, -1));
  return t === Dr ? "" : t;
}
var _E = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], PE = ["dx", "dy", "angle", "className", "breakAll"];
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function vg(e, t) {
  if (e == null) return {};
  var r = AE(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function AE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function yg(e, t) {
  return CE(e) || jE(e, t) || EE(e, t) || TE();
}
function TE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EE(e, t) {
  if (e) {
    if (typeof e == "string") return gg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gg(e, t);
  }
}
function gg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function jE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function CE(e) {
  if (Array.isArray(e)) return e;
}
var Tx = /[ \f\n\r\t\v\u2028\u2029]+/, Ex = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    he(r) || (n ? a = r.toString().split("") : a = r.toString().split(Tx));
    var o = a.map(function(s) {
      return {
        word: s,
        width: Dn(s, i).width
      };
    }), u = n ? 0 : Dn(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, ME = function(t, r, n, i, a) {
  var o = t.maxLines, u = t.children, s = t.style, c = t.breakAll, f = U(o), l = u, d = function() {
    var I = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return I.reduce(function($, N) {
      var L = N.word, F = N.width, H = $[$.length - 1];
      if (H && (i == null || a || H.width + F + n < Number(i)))
        H.words.push(L), H.width += F + n;
      else {
        var W = {
          words: [L],
          width: F
        };
        $.push(W);
      }
      return $;
    }, []);
  }, h = d(r), y = function(I) {
    return I.reduce(function($, N) {
      return $.width > N.width ? $ : N;
    });
  };
  if (!f)
    return h;
  for (var v = "…", p = function(I) {
    var $ = l.slice(0, I), N = Ex({
      breakAll: c,
      style: s,
      children: $ + v
    }).wordsWithComputedWidth, L = d(N), F = L.length > o || y(L).width > Number(i);
    return [F, L];
  }, b = 0, x = l.length - 1, w = 0, S; b <= x && w <= l.length - 1; ) {
    var g = Math.floor((b + x) / 2), m = g - 1, O = p(m), _ = yg(O, 2), P = _[0], k = _[1], T = p(g), A = yg(T, 1), M = A[0];
    if (!P && !M && (b = g + 1), P && M && (x = g - 1), !P && M) {
      S = k;
      break;
    }
    w++;
  }
  return S || h;
}, mg = function(t) {
  var r = he(t) ? [] : t.toString().split(Tx);
  return [{
    words: r
  }];
}, IE = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !Pi.isSsr) {
    var s, c, f = Ex({
      breakAll: o,
      children: i,
      style: a
    });
    if (f) {
      var l = f.wordsWithComputedWidth, d = f.spaceWidth;
      s = l, c = d;
    } else
      return mg(i);
    return ME({
      breakAll: o,
      children: i,
      maxLines: u,
      style: a
    }, s, c, r, n);
  }
  return mg(i);
}, bg = "#808080", ga = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, u = o === void 0 ? "1em" : o, s = t.capHeight, c = s === void 0 ? "0.71em" : s, f = t.scaleToFit, l = f === void 0 ? !1 : f, d = t.textAnchor, h = d === void 0 ? "start" : d, y = t.verticalAnchor, v = y === void 0 ? "end" : y, p = t.fill, b = p === void 0 ? bg : p, x = vg(t, _E), w = R.useMemo(function() {
    return IE({
      breakAll: x.breakAll,
      children: x.children,
      maxLines: x.maxLines,
      scaleToFit: l,
      style: x.style,
      width: x.width
    });
  }, [x.breakAll, x.children, x.maxLines, l, x.style, x.width]), S = x.dx, g = x.dy, m = x.angle, O = x.className, _ = x.breakAll, P = vg(x, PE);
  if (!Re(n) || !Re(a))
    return null;
  var k = n + (U(S) ? S : 0), T = a + (U(g) ? g : 0), A;
  switch (v) {
    case "start":
      A = rl("calc(".concat(c, ")"));
      break;
    case "middle":
      A = rl("calc(".concat((w.length - 1) / 2, " * -").concat(u, " + (").concat(c, " / 2))"));
      break;
    default:
      A = rl("calc(".concat(w.length - 1, " * -").concat(u, ")"));
      break;
  }
  var M = [];
  if (l) {
    var C = w[0].width, I = x.width;
    M.push("scale(".concat((U(I) ? I / C : 1) / C, ")"));
  }
  return m && M.push("rotate(".concat(m, ", ").concat(k, ", ").concat(T, ")")), M.length && (P.transform = M.join(" ")), /* @__PURE__ */ j.createElement("text", hf({}, ce(P, !0), {
    x: k,
    y: T,
    className: Q("recharts-text", O),
    textAnchor: h,
    fill: b.includes("url") ? bg : b
  }), w.map(function($, N) {
    var L = $.words.join(_ ? "" : " ");
    return (
      // duplicate words will cause duplicate keys
      // eslint-disable-next-line react/no-array-index-key
      /* @__PURE__ */ j.createElement("tspan", {
        x: k,
        dy: N === 0 ? A : u,
        key: "".concat(L, "-").concat(N)
      }, L)
    );
  }));
};
function Zt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function $E(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function kd(e) {
  let t, r, n;
  e.length !== 2 ? (t = Zt, r = (u, s) => Zt(e(u), s), n = (u, s) => e(u) - s) : (t = e === Zt || e === $E ? e : kE, r = e, n = e);
  function i(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) < 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function a(u, s, c = 0, f = u.length) {
    if (c < f) {
      if (t(s, s) !== 0) return f;
      do {
        const l = c + f >>> 1;
        r(u[l], s) <= 0 ? c = l + 1 : f = l;
      } while (c < f);
    }
    return c;
  }
  function o(u, s, c = 0, f = u.length) {
    const l = i(u, s, c, f - 1);
    return l > c && n(u[l - 1], s) > -n(u[l], s) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function kE() {
  return 0;
}
function jx(e) {
  return e === null ? NaN : +e;
}
function* RE(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const DE = kd(Zt), Ai = DE.right;
kd(jx).center;
class xg extends Map {
  constructor(t, r = LE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(wg(this, t));
  }
  has(t) {
    return super.has(wg(this, t));
  }
  set(t, r) {
    return super.set(NE(this, t), r);
  }
  delete(t) {
    return super.delete(qE(this, t));
  }
}
function wg({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function NE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function qE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function LE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function BE(e = Zt) {
  if (e === Zt) return Cx;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Cx(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const FE = Math.sqrt(50), zE = Math.sqrt(10), WE = Math.sqrt(2);
function ma(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= FE ? 10 : a >= zE ? 5 : a >= WE ? 2 : 1;
  let u, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? ma(e, t, r * 2) : [u, s, c];
}
function vf(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? ma(t, e, r) : ma(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function yf(e, t, r) {
  return t = +t, e = +e, r = +r, ma(e, t, r)[2];
}
function gf(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? yf(t, e, r) : yf(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Sg(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Og(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Mx(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? Cx : BE(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, f = Math.log(s), l = 0.5 * Math.exp(2 * f / 3), d = 0.5 * Math.sqrt(f * l * (s - l) / s) * (c - s / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - c * l / s + d)), y = Math.min(n, Math.floor(t + (s - c) * l / s + d));
      Mx(e, t, h, y, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (wn(e, r, t), i(e[n], a) > 0 && wn(e, r, n); o < u; ) {
      for (wn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? wn(e, r, u) : (++u, wn(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function wn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function UE(e, t, r) {
  if (e = Float64Array.from(RE(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Og(e);
    if (t >= 1) return Sg(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Sg(Mx(e, a).subarray(0, a + 1)), u = Og(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function HE(e, t, r = jx) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function KE(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function dt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Kt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const mf = Symbol("implicit");
function Rd() {
  var e = new xg(), t = [], r = [], n = mf;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== mf) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new xg();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Rd(t, r).unknown(n);
  }, dt.apply(i, arguments), i;
}
function Gn() {
  var e = Rd().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, s = 0, c = 0, f = 0.5;
  delete e.unknown;
  function l() {
    var d = t().length, h = i < n, y = h ? i : n, v = h ? n : i;
    a = (v - y) / Math.max(1, d - s + c * 2), u && (a = Math.floor(a)), y += (v - y - a * (d - s)) * f, o = a * (1 - s), u && (y = Math.round(y), o = Math.round(o));
    var p = KE(d).map(function(b) {
      return y + a * b;
    });
    return r(h ? p.reverse() : p);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), l()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, l()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, l();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, l()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (s = Math.min(1, c = +d), l()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), l()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, l()) : c;
  }, e.align = function(d) {
    return arguments.length ? (f = Math.max(0, Math.min(1, d)), l()) : f;
  }, e.copy = function() {
    return Gn(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(f);
  }, dt.apply(l(), arguments);
}
function Ix(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Ix(t());
  }, e;
}
function Nn() {
  return Ix(Gn.apply(null, arguments).paddingInner(1));
}
function Dd(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function $x(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Ti() {
}
var Vn = 0.7, ba = 1 / Vn, Fr = "\\s*([+-]?\\d+)\\s*", Xn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", _t = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", GE = /^#([0-9a-f]{3,8})$/, VE = new RegExp(`^rgb\\(${Fr},${Fr},${Fr}\\)$`), XE = new RegExp(`^rgb\\(${_t},${_t},${_t}\\)$`), YE = new RegExp(`^rgba\\(${Fr},${Fr},${Fr},${Xn}\\)$`), ZE = new RegExp(`^rgba\\(${_t},${_t},${_t},${Xn}\\)$`), JE = new RegExp(`^hsl\\(${Xn},${_t},${_t}\\)$`), QE = new RegExp(`^hsla\\(${Xn},${_t},${_t},${Xn}\\)$`), _g = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Dd(Ti, Yn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Pg,
  // Deprecated! Use color.formatHex.
  formatHex: Pg,
  formatHex8: ej,
  formatHsl: tj,
  formatRgb: Ag,
  toString: Ag
});
function Pg() {
  return this.rgb().formatHex();
}
function ej() {
  return this.rgb().formatHex8();
}
function tj() {
  return kx(this).formatHsl();
}
function Ag() {
  return this.rgb().formatRgb();
}
function Yn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = GE.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Tg(t) : r === 3 ? new Ye(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Wi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Wi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = VE.exec(e)) ? new Ye(t[1], t[2], t[3], 1) : (t = XE.exec(e)) ? new Ye(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = YE.exec(e)) ? Wi(t[1], t[2], t[3], t[4]) : (t = ZE.exec(e)) ? Wi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = JE.exec(e)) ? Cg(t[1], t[2] / 100, t[3] / 100, 1) : (t = QE.exec(e)) ? Cg(t[1], t[2] / 100, t[3] / 100, t[4]) : _g.hasOwnProperty(e) ? Tg(_g[e]) : e === "transparent" ? new Ye(NaN, NaN, NaN, 0) : null;
}
function Tg(e) {
  return new Ye(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Wi(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Ye(e, t, r, n);
}
function rj(e) {
  return e instanceof Ti || (e = Yn(e)), e ? (e = e.rgb(), new Ye(e.r, e.g, e.b, e.opacity)) : new Ye();
}
function bf(e, t, r, n) {
  return arguments.length === 1 ? rj(e) : new Ye(e, t, r, n ?? 1);
}
function Ye(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Dd(Ye, bf, $x(Ti, {
  brighter(e) {
    return e = e == null ? ba : Math.pow(ba, e), new Ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vn : Math.pow(Vn, e), new Ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ye(mr(this.r), mr(this.g), mr(this.b), xa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Eg,
  // Deprecated! Use color.formatHex.
  formatHex: Eg,
  formatHex8: nj,
  formatRgb: jg,
  toString: jg
}));
function Eg() {
  return `#${vr(this.r)}${vr(this.g)}${vr(this.b)}`;
}
function nj() {
  return `#${vr(this.r)}${vr(this.g)}${vr(this.b)}${vr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function jg() {
  const e = xa(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${mr(this.r)}, ${mr(this.g)}, ${mr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function xa(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function mr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function vr(e) {
  return e = mr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Cg(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new yt(e, t, r, n);
}
function kx(e) {
  if (e instanceof yt) return new yt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ti || (e = Yn(e)), !e) return new yt();
  if (e instanceof yt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new yt(o, u, s, e.opacity);
}
function ij(e, t, r, n) {
  return arguments.length === 1 ? kx(e) : new yt(e, t, r, n ?? 1);
}
function yt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Dd(yt, ij, $x(Ti, {
  brighter(e) {
    return e = e == null ? ba : Math.pow(ba, e), new yt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Vn : Math.pow(Vn, e), new yt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Ye(
      nl(e >= 240 ? e - 240 : e + 120, i, n),
      nl(e, i, n),
      nl(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new yt(Mg(this.h), Ui(this.s), Ui(this.l), xa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = xa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Mg(this.h)}, ${Ui(this.s) * 100}%, ${Ui(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Mg(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ui(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function nl(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Nd = (e) => () => e;
function aj(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function oj(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function uj(e) {
  return (e = +e) == 1 ? Rx : function(t, r) {
    return r - t ? oj(t, r, e) : Nd(isNaN(t) ? r : t);
  };
}
function Rx(e, t) {
  var r = t - e;
  return r ? aj(e, r) : Nd(isNaN(e) ? t : e);
}
const Ig = function e(t) {
  var r = uj(t);
  function n(i, a) {
    var o = r((i = bf(i)).r, (a = bf(a)).r), u = r(i.g, a.g), s = r(i.b, a.b), c = Rx(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = u(f), i.b = s(f), i.opacity = c(f), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function sj(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function cj(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function lj(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = hn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function fj(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function wa(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function dj(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = hn(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var xf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, il = new RegExp(xf.source, "g");
function pj(e) {
  return function() {
    return e;
  };
}
function hj(e) {
  return function(t) {
    return e(t) + "";
  };
}
function vj(e, t) {
  var r = xf.lastIndex = il.lastIndex = 0, n, i, a, o = -1, u = [], s = [];
  for (e = e + "", t = t + ""; (n = xf.exec(e)) && (i = il.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: wa(n, i) })), r = il.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? hj(s[0].x) : pj(t) : (t = s.length, function(c) {
    for (var f = 0, l; f < t; ++f) u[(l = s[f]).i] = l.x(c);
    return u.join("");
  });
}
function hn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Nd(t) : (r === "number" ? wa : r === "string" ? (n = Yn(t)) ? (t = n, Ig) : vj : t instanceof Yn ? Ig : t instanceof Date ? fj : cj(t) ? sj : Array.isArray(t) ? lj : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? dj : wa)(e, t);
}
function qd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function yj(e, t) {
  t === void 0 && (t = e, e = hn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function gj(e) {
  return function() {
    return e;
  };
}
function Sa(e) {
  return +e;
}
var $g = [0, 1];
function Ve(e) {
  return e;
}
function wf(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : gj(isNaN(t) ? NaN : 0.5);
}
function mj(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function bj(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = wf(i, n), a = r(o, a)) : (n = wf(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function xj(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = wf(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = Ai(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function Ei(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function go() {
  var e = $g, t = $g, r = hn, n, i, a, o = Ve, u, s, c;
  function f() {
    var d = Math.min(e.length, t.length);
    return o !== Ve && (o = mj(e[0], e[d - 1])), u = d > 2 ? xj : bj, s = c = null, l;
  }
  function l(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return l.invert = function(d) {
    return o(i((c || (c = u(t, e.map(n), wa)))(d)));
  }, l.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Sa), f()) : e.slice();
  }, l.range = function(d) {
    return arguments.length ? (t = Array.from(d), f()) : t.slice();
  }, l.rangeRound = function(d) {
    return t = Array.from(d), r = qd, f();
  }, l.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Ve, f()) : o !== Ve;
  }, l.interpolate = function(d) {
    return arguments.length ? (r = d, f()) : r;
  }, l.unknown = function(d) {
    return arguments.length ? (a = d, l) : a;
  }, function(d, h) {
    return n = d, i = h, f();
  };
}
function Ld() {
  return go()(Ve, Ve);
}
function wj(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Oa(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Vr(e) {
  return e = Oa(Math.abs(e)), e ? e[1] : NaN;
}
function Sj(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring(i -= u, i + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function Oj(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var _j = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Zn(e) {
  if (!(t = _j.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Bd({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Zn.prototype = Bd.prototype;
function Bd(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Bd.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Pj(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var _a;
function Aj(e, t) {
  var r = Oa(e, t);
  if (!r) return _a = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], a = i - (_a = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Oa(e, Math.max(0, t + a - 1))[0];
}
function kg(e, t) {
  var r = Oa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Rg = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: wj,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => kg(e * 100, t),
  r: kg,
  s: Aj,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Dg(e) {
  return e;
}
var Ng = Array.prototype.map, qg = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Tj(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Dg : Sj(Ng.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Dg : Oj(Ng.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(l, d) {
    l = Zn(l);
    var h = l.fill, y = l.align, v = l.sign, p = l.symbol, b = l.zero, x = l.width, w = l.comma, S = l.precision, g = l.trim, m = l.type;
    m === "n" ? (w = !0, m = "g") : Rg[m] || (S === void 0 && (S = 12), g = !0, m = "g"), (b || h === "0" && y === "=") && (b = !0, h = "0", y = "=");
    var O = (d && d.prefix !== void 0 ? d.prefix : "") + (p === "$" ? r : p === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : ""), _ = (p === "$" ? n : /[%p]/.test(m) ? o : "") + (d && d.suffix !== void 0 ? d.suffix : ""), P = Rg[m], k = /[defgprs%]/.test(m);
    S = S === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function T(A) {
      var M = O, C = _, I, $, N;
      if (m === "c")
        C = P(A) + C, A = "";
      else {
        A = +A;
        var L = A < 0 || 1 / A < 0;
        if (A = isNaN(A) ? s : P(Math.abs(A), S), g && (A = Pj(A)), L && +A == 0 && v !== "+" && (L = !1), M = (L ? v === "(" ? v : u : v === "-" || v === "(" ? "" : v) + M, C = (m === "s" && !isNaN(A) && _a !== void 0 ? qg[8 + _a / 3] : "") + C + (L && v === "(" ? ")" : ""), k) {
          for (I = -1, $ = A.length; ++I < $; )
            if (N = A.charCodeAt(I), 48 > N || N > 57) {
              C = (N === 46 ? i + A.slice(I + 1) : A.slice(I)) + C, A = A.slice(0, I);
              break;
            }
        }
      }
      w && !b && (A = t(A, 1 / 0));
      var F = M.length + A.length + C.length, H = F < x ? new Array(x - F + 1).join(h) : "";
      switch (w && b && (A = t(H + A, H.length ? x - C.length : 1 / 0), H = ""), y) {
        case "<":
          A = M + A + C + H;
          break;
        case "=":
          A = M + H + A + C;
          break;
        case "^":
          A = H.slice(0, F = H.length >> 1) + M + A + C + H.slice(F);
          break;
        default:
          A = H + M + A + C;
          break;
      }
      return a(A);
    }
    return T.toString = function() {
      return l + "";
    }, T;
  }
  function f(l, d) {
    var h = Math.max(-8, Math.min(8, Math.floor(Vr(d) / 3))) * 3, y = Math.pow(10, -h), v = c((l = Zn(l), l.type = "f", l), { suffix: qg[8 + h / 3] });
    return function(p) {
      return v(y * p);
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var Hi, Fd, Dx;
Ej({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ej(e) {
  return Hi = Tj(e), Fd = Hi.format, Dx = Hi.formatPrefix, Hi;
}
function jj(e) {
  return Math.max(0, -Vr(Math.abs(e)));
}
function Cj(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vr(t) / 3))) * 3 - Vr(Math.abs(e)));
}
function Mj(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Vr(t) - Vr(e)) + 1;
}
function Nx(e, t, r, n) {
  var i = gf(e, t, r), a;
  switch (n = Zn(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = Cj(i, o)) && (n.precision = a), Dx(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = Mj(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = jj(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Fd(n);
}
function or(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return vf(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Nx(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], s, c, f = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); f-- > 0; ) {
      if (c = yf(o, u, r), c === s)
        return n[i] = o, n[a] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function Pa() {
  var e = Ld();
  return e.copy = function() {
    return Ei(e, Pa());
  }, dt.apply(e, arguments), or(e);
}
function qx(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Sa), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return qx(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Sa) : [0, 1], or(r);
}
function Lx(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function Lg(e) {
  return Math.log(e);
}
function Bg(e) {
  return Math.exp(e);
}
function Ij(e) {
  return -Math.log(-e);
}
function $j(e) {
  return -Math.exp(-e);
}
function kj(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function Rj(e) {
  return e === 10 ? kj : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Dj(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Fg(e) {
  return (t, r) => -e(-t, r);
}
function zd(e) {
  const t = e(Lg, Bg), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = Dj(n), a = Rj(n), r()[0] < 0 ? (i = Fg(i), a = Fg(a), e(Ij, $j)) : e(Lg, Bg), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], f = s[s.length - 1];
    const l = f < c;
    l && ([c, f] = [f, c]);
    let d = i(c), h = i(f), y, v;
    const p = u == null ? 10 : +u;
    let b = [];
    if (!(n % 1) && h - d < p) {
      if (d = Math.floor(d), h = Math.ceil(h), c > 0) {
        for (; d <= h; ++d)
          for (y = 1; y < n; ++y)
            if (v = d < 0 ? y / a(-d) : y * a(d), !(v < c)) {
              if (v > f) break;
              b.push(v);
            }
      } else for (; d <= h; ++d)
        for (y = n - 1; y >= 1; --y)
          if (v = d > 0 ? y / a(-d) : y * a(d), !(v < c)) {
            if (v > f) break;
            b.push(v);
          }
      b.length * 2 < p && (b = vf(c, f, p));
    } else
      b = vf(d, h, Math.min(h - d, p)).map(a);
    return l ? b.reverse() : b;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Zn(s)).precision == null && (s.trim = !0), s = Fd(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (f) => {
      let l = f / a(Math.round(i(f)));
      return l * n < n - 0.5 && (l *= n), l <= c ? s(f) : "";
    };
  }, t.nice = () => r(Lx(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function Bx() {
  const e = zd(go()).domain([1, 10]);
  return e.copy = () => Ei(e, Bx()).base(e.base()), dt.apply(e, arguments), e;
}
function zg(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Wg(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Wd(e) {
  var t = 1, r = e(zg(t), Wg(t));
  return r.constant = function(n) {
    return arguments.length ? e(zg(t = +n), Wg(t)) : t;
  }, or(r);
}
function Fx() {
  var e = Wd(go());
  return e.copy = function() {
    return Ei(e, Fx()).constant(e.constant());
  }, dt.apply(e, arguments);
}
function Ug(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Nj(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function qj(e) {
  return e < 0 ? -e * e : e * e;
}
function Ud(e) {
  var t = e(Ve, Ve), r = 1;
  function n() {
    return r === 1 ? e(Ve, Ve) : r === 0.5 ? e(Nj, qj) : e(Ug(r), Ug(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, or(t);
}
function Hd() {
  var e = Ud(go());
  return e.copy = function() {
    return Ei(e, Hd()).exponent(e.exponent());
  }, dt.apply(e, arguments), e;
}
function Lj() {
  return Hd.apply(null, arguments).exponent(0.5);
}
function Hg(e) {
  return Math.sign(e) * e * e;
}
function Bj(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function zx() {
  var e = Ld(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = Bj(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Hg(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Sa)).map(Hg)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return zx(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, dt.apply(i, arguments), or(i);
}
function Wx() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = HE(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Ai(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(Zt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Wx().domain(e).range(t).unknown(n);
  }, dt.apply(a, arguments);
}
function Ux() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(s) {
    return s != null && s <= s ? i[Ai(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(s) {
    var c = i.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (a = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Ux().domain([e, t]).range(i).unknown(a);
  }, dt.apply(or(o), arguments);
}
function Hx() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Ai(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Hx().domain(e).range(t).unknown(r);
  }, dt.apply(i, arguments);
}
const al = /* @__PURE__ */ new Date(), ol = /* @__PURE__ */ new Date();
function De(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const s = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return s;
  }, i.filter = (a) => De((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (al.setTime(+a), ol.setTime(+o), e(al), e(ol), Math.floor(r(al, ol))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Aa = De(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Aa.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? De((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Aa);
Aa.range;
const Rt = 1e3, ct = Rt * 60, Dt = ct * 60, Ft = Dt * 24, Kd = Ft * 7, Kg = Ft * 30, ul = Ft * 365, yr = De((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getUTCSeconds());
yr.range;
const Gd = De((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Rt);
}, (e, t) => {
  e.setTime(+e + t * ct);
}, (e, t) => (t - e) / ct, (e) => e.getMinutes());
Gd.range;
const Vd = De((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ct);
}, (e, t) => (t - e) / ct, (e) => e.getUTCMinutes());
Vd.range;
const Xd = De((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Rt - e.getMinutes() * ct);
}, (e, t) => {
  e.setTime(+e + t * Dt);
}, (e, t) => (t - e) / Dt, (e) => e.getHours());
Xd.range;
const Yd = De((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Dt);
}, (e, t) => (t - e) / Dt, (e) => e.getUTCHours());
Yd.range;
const ji = De(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ct) / Ft,
  (e) => e.getDate() - 1
);
ji.range;
const mo = De((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ft, (e) => e.getUTCDate() - 1);
mo.range;
const Kx = De((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ft, (e) => Math.floor(e / Ft));
Kx.range;
function Pr(e) {
  return De((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ct) / Kd);
}
const bo = Pr(0), Ta = Pr(1), Fj = Pr(2), zj = Pr(3), Xr = Pr(4), Wj = Pr(5), Uj = Pr(6);
bo.range;
Ta.range;
Fj.range;
zj.range;
Xr.range;
Wj.range;
Uj.range;
function Ar(e) {
  return De((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Kd);
}
const xo = Ar(0), Ea = Ar(1), Hj = Ar(2), Kj = Ar(3), Yr = Ar(4), Gj = Ar(5), Vj = Ar(6);
xo.range;
Ea.range;
Hj.range;
Kj.range;
Yr.range;
Gj.range;
Vj.range;
const Zd = De((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Zd.range;
const Jd = De((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Jd.range;
const zt = De((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
zt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : De((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
zt.range;
const Wt = De((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Wt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : De((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Wt.range;
function Gx(e, t, r, n, i, a) {
  const o = [
    [yr, 1, Rt],
    [yr, 5, 5 * Rt],
    [yr, 15, 15 * Rt],
    [yr, 30, 30 * Rt],
    [a, 1, ct],
    [a, 5, 5 * ct],
    [a, 15, 15 * ct],
    [a, 30, 30 * ct],
    [i, 1, Dt],
    [i, 3, 3 * Dt],
    [i, 6, 6 * Dt],
    [i, 12, 12 * Dt],
    [n, 1, Ft],
    [n, 2, 2 * Ft],
    [r, 1, Kd],
    [t, 1, Kg],
    [t, 3, 3 * Kg],
    [e, 1, ul]
  ];
  function u(c, f, l) {
    const d = f < c;
    d && ([c, f] = [f, c]);
    const h = l && typeof l.range == "function" ? l : s(c, f, l), y = h ? h.range(c, +f + 1) : [];
    return d ? y.reverse() : y;
  }
  function s(c, f, l) {
    const d = Math.abs(f - c) / l, h = kd(([, , p]) => p).right(o, d);
    if (h === o.length) return e.every(gf(c / ul, f / ul, l));
    if (h === 0) return Aa.every(Math.max(gf(c, f, l), 1));
    const [y, v] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return y.every(v);
  }
  return [u, s];
}
const [Xj, Yj] = Gx(Wt, Jd, xo, Kx, Yd, Vd), [Zj, Jj] = Gx(zt, Zd, bo, ji, Xd, Gd);
function sl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function cl(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Sn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Qj(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = On(i), f = _n(i), l = On(a), d = _n(a), h = On(o), y = _n(o), v = On(u), p = _n(u), b = On(s), x = _n(s), w = {
    a: N,
    A: L,
    b: F,
    B: H,
    c: null,
    d: Jg,
    e: Jg,
    f: SC,
    g: IC,
    G: kC,
    H: bC,
    I: xC,
    j: wC,
    L: Vx,
    m: OC,
    M: _C,
    p: W,
    q: B,
    Q: tm,
    s: rm,
    S: PC,
    u: AC,
    U: TC,
    V: EC,
    w: jC,
    W: CC,
    x: null,
    X: null,
    y: MC,
    Y: $C,
    Z: RC,
    "%": em
  }, S = {
    a: X,
    A: ie,
    b: le,
    B: Ee,
    c: null,
    d: Qg,
    e: Qg,
    f: LC,
    g: XC,
    G: ZC,
    H: DC,
    I: NC,
    j: qC,
    L: Yx,
    m: BC,
    M: FC,
    p: We,
    q: ge,
    Q: tm,
    s: rm,
    S: zC,
    u: WC,
    U: UC,
    V: HC,
    w: KC,
    W: GC,
    x: null,
    X: null,
    y: VC,
    Y: YC,
    Z: JC,
    "%": em
  }, g = {
    a: k,
    A: T,
    b: A,
    B: M,
    c: C,
    d: Yg,
    e: Yg,
    f: vC,
    g: Xg,
    G: Vg,
    H: Zg,
    I: Zg,
    j: fC,
    L: hC,
    m: lC,
    M: dC,
    p: P,
    q: cC,
    Q: gC,
    s: mC,
    S: pC,
    u: iC,
    U: aC,
    V: oC,
    w: nC,
    W: uC,
    x: I,
    X: $,
    y: Xg,
    Y: Vg,
    Z: sC,
    "%": yC
  };
  w.x = m(r, w), w.X = m(n, w), w.c = m(t, w), S.x = m(r, S), S.X = m(n, S), S.c = m(t, S);
  function m(z, Y) {
    return function(Z) {
      var q = [], ee = -1, te = 0, _e = z.length, Se, fe, Xe;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++ee < _e; )
        z.charCodeAt(ee) === 37 && (q.push(z.slice(te, ee)), (fe = Gg[Se = z.charAt(++ee)]) != null ? Se = z.charAt(++ee) : fe = Se === "e" ? " " : "0", (Xe = Y[Se]) && (Se = Xe(Z, fe)), q.push(Se), te = ee + 1);
      return q.push(z.slice(te, ee)), q.join("");
    };
  }
  function O(z, Y) {
    return function(Z) {
      var q = Sn(1900, void 0, 1), ee = _(q, z, Z += "", 0), te, _e;
      if (ee != Z.length) return null;
      if ("Q" in q) return new Date(q.Q);
      if ("s" in q) return new Date(q.s * 1e3 + ("L" in q ? q.L : 0));
      if (Y && !("Z" in q) && (q.Z = 0), "p" in q && (q.H = q.H % 12 + q.p * 12), q.m === void 0 && (q.m = "q" in q ? q.q : 0), "V" in q) {
        if (q.V < 1 || q.V > 53) return null;
        "w" in q || (q.w = 1), "Z" in q ? (te = cl(Sn(q.y, 0, 1)), _e = te.getUTCDay(), te = _e > 4 || _e === 0 ? Ea.ceil(te) : Ea(te), te = mo.offset(te, (q.V - 1) * 7), q.y = te.getUTCFullYear(), q.m = te.getUTCMonth(), q.d = te.getUTCDate() + (q.w + 6) % 7) : (te = sl(Sn(q.y, 0, 1)), _e = te.getDay(), te = _e > 4 || _e === 0 ? Ta.ceil(te) : Ta(te), te = ji.offset(te, (q.V - 1) * 7), q.y = te.getFullYear(), q.m = te.getMonth(), q.d = te.getDate() + (q.w + 6) % 7);
      } else ("W" in q || "U" in q) && ("w" in q || (q.w = "u" in q ? q.u % 7 : "W" in q ? 1 : 0), _e = "Z" in q ? cl(Sn(q.y, 0, 1)).getUTCDay() : sl(Sn(q.y, 0, 1)).getDay(), q.m = 0, q.d = "W" in q ? (q.w + 6) % 7 + q.W * 7 - (_e + 5) % 7 : q.w + q.U * 7 - (_e + 6) % 7);
      return "Z" in q ? (q.H += q.Z / 100 | 0, q.M += q.Z % 100, cl(q)) : sl(q);
    };
  }
  function _(z, Y, Z, q) {
    for (var ee = 0, te = Y.length, _e = Z.length, Se, fe; ee < te; ) {
      if (q >= _e) return -1;
      if (Se = Y.charCodeAt(ee++), Se === 37) {
        if (Se = Y.charAt(ee++), fe = g[Se in Gg ? Y.charAt(ee++) : Se], !fe || (q = fe(z, Z, q)) < 0) return -1;
      } else if (Se != Z.charCodeAt(q++))
        return -1;
    }
    return q;
  }
  function P(z, Y, Z) {
    var q = c.exec(Y.slice(Z));
    return q ? (z.p = f.get(q[0].toLowerCase()), Z + q[0].length) : -1;
  }
  function k(z, Y, Z) {
    var q = h.exec(Y.slice(Z));
    return q ? (z.w = y.get(q[0].toLowerCase()), Z + q[0].length) : -1;
  }
  function T(z, Y, Z) {
    var q = l.exec(Y.slice(Z));
    return q ? (z.w = d.get(q[0].toLowerCase()), Z + q[0].length) : -1;
  }
  function A(z, Y, Z) {
    var q = b.exec(Y.slice(Z));
    return q ? (z.m = x.get(q[0].toLowerCase()), Z + q[0].length) : -1;
  }
  function M(z, Y, Z) {
    var q = v.exec(Y.slice(Z));
    return q ? (z.m = p.get(q[0].toLowerCase()), Z + q[0].length) : -1;
  }
  function C(z, Y, Z) {
    return _(z, t, Y, Z);
  }
  function I(z, Y, Z) {
    return _(z, r, Y, Z);
  }
  function $(z, Y, Z) {
    return _(z, n, Y, Z);
  }
  function N(z) {
    return o[z.getDay()];
  }
  function L(z) {
    return a[z.getDay()];
  }
  function F(z) {
    return s[z.getMonth()];
  }
  function H(z) {
    return u[z.getMonth()];
  }
  function W(z) {
    return i[+(z.getHours() >= 12)];
  }
  function B(z) {
    return 1 + ~~(z.getMonth() / 3);
  }
  function X(z) {
    return o[z.getUTCDay()];
  }
  function ie(z) {
    return a[z.getUTCDay()];
  }
  function le(z) {
    return s[z.getUTCMonth()];
  }
  function Ee(z) {
    return u[z.getUTCMonth()];
  }
  function We(z) {
    return i[+(z.getUTCHours() >= 12)];
  }
  function ge(z) {
    return 1 + ~~(z.getUTCMonth() / 3);
  }
  return {
    format: function(z) {
      var Y = m(z += "", w);
      return Y.toString = function() {
        return z;
      }, Y;
    },
    parse: function(z) {
      var Y = O(z += "", !1);
      return Y.toString = function() {
        return z;
      }, Y;
    },
    utcFormat: function(z) {
      var Y = m(z += "", S);
      return Y.toString = function() {
        return z;
      }, Y;
    },
    utcParse: function(z) {
      var Y = O(z += "", !0);
      return Y.toString = function() {
        return z;
      }, Y;
    }
  };
}
var Gg = { "-": "", _: " ", 0: "0" }, Le = /^\s*\d+/, eC = /^%/, tC = /[\\^$*+?|[\]().{}]/g;
function se(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function rC(e) {
  return e.replace(tC, "\\$&");
}
function On(e) {
  return new RegExp("^(?:" + e.map(rC).join("|") + ")", "i");
}
function _n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function nC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function iC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function aC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function oC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function uC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Vg(e, t, r) {
  var n = Le.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Xg(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function sC(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function cC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function lC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Yg(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function fC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Zg(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function dC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function pC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function hC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function vC(e, t, r) {
  var n = Le.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function yC(e, t, r) {
  var n = eC.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function gC(e, t, r) {
  var n = Le.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function mC(e, t, r) {
  var n = Le.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Jg(e, t) {
  return se(e.getDate(), t, 2);
}
function bC(e, t) {
  return se(e.getHours(), t, 2);
}
function xC(e, t) {
  return se(e.getHours() % 12 || 12, t, 2);
}
function wC(e, t) {
  return se(1 + ji.count(zt(e), e), t, 3);
}
function Vx(e, t) {
  return se(e.getMilliseconds(), t, 3);
}
function SC(e, t) {
  return Vx(e, t) + "000";
}
function OC(e, t) {
  return se(e.getMonth() + 1, t, 2);
}
function _C(e, t) {
  return se(e.getMinutes(), t, 2);
}
function PC(e, t) {
  return se(e.getSeconds(), t, 2);
}
function AC(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function TC(e, t) {
  return se(bo.count(zt(e) - 1, e), t, 2);
}
function Xx(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Xr(e) : Xr.ceil(e);
}
function EC(e, t) {
  return e = Xx(e), se(Xr.count(zt(e), e) + (zt(e).getDay() === 4), t, 2);
}
function jC(e) {
  return e.getDay();
}
function CC(e, t) {
  return se(Ta.count(zt(e) - 1, e), t, 2);
}
function MC(e, t) {
  return se(e.getFullYear() % 100, t, 2);
}
function IC(e, t) {
  return e = Xx(e), se(e.getFullYear() % 100, t, 2);
}
function $C(e, t) {
  return se(e.getFullYear() % 1e4, t, 4);
}
function kC(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Xr(e) : Xr.ceil(e), se(e.getFullYear() % 1e4, t, 4);
}
function RC(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + se(t / 60 | 0, "0", 2) + se(t % 60, "0", 2);
}
function Qg(e, t) {
  return se(e.getUTCDate(), t, 2);
}
function DC(e, t) {
  return se(e.getUTCHours(), t, 2);
}
function NC(e, t) {
  return se(e.getUTCHours() % 12 || 12, t, 2);
}
function qC(e, t) {
  return se(1 + mo.count(Wt(e), e), t, 3);
}
function Yx(e, t) {
  return se(e.getUTCMilliseconds(), t, 3);
}
function LC(e, t) {
  return Yx(e, t) + "000";
}
function BC(e, t) {
  return se(e.getUTCMonth() + 1, t, 2);
}
function FC(e, t) {
  return se(e.getUTCMinutes(), t, 2);
}
function zC(e, t) {
  return se(e.getUTCSeconds(), t, 2);
}
function WC(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function UC(e, t) {
  return se(xo.count(Wt(e) - 1, e), t, 2);
}
function Zx(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Yr(e) : Yr.ceil(e);
}
function HC(e, t) {
  return e = Zx(e), se(Yr.count(Wt(e), e) + (Wt(e).getUTCDay() === 4), t, 2);
}
function KC(e) {
  return e.getUTCDay();
}
function GC(e, t) {
  return se(Ea.count(Wt(e) - 1, e), t, 2);
}
function VC(e, t) {
  return se(e.getUTCFullYear() % 100, t, 2);
}
function XC(e, t) {
  return e = Zx(e), se(e.getUTCFullYear() % 100, t, 2);
}
function YC(e, t) {
  return se(e.getUTCFullYear() % 1e4, t, 4);
}
function ZC(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Yr(e) : Yr.ceil(e), se(e.getUTCFullYear() % 1e4, t, 4);
}
function JC() {
  return "+0000";
}
function em() {
  return "%";
}
function tm(e) {
  return +e;
}
function rm(e) {
  return Math.floor(+e / 1e3);
}
var $r, Jx, Qx;
QC({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function QC(e) {
  return $r = Qj(e), Jx = $r.format, $r.parse, Qx = $r.utcFormat, $r.utcParse, $r;
}
function eM(e) {
  return new Date(e);
}
function tM(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Qd(e, t, r, n, i, a, o, u, s, c) {
  var f = Ld(), l = f.invert, d = f.domain, h = c(".%L"), y = c(":%S"), v = c("%I:%M"), p = c("%I %p"), b = c("%a %d"), x = c("%b %d"), w = c("%B"), S = c("%Y");
  function g(m) {
    return (s(m) < m ? h : u(m) < m ? y : o(m) < m ? v : a(m) < m ? p : n(m) < m ? i(m) < m ? b : x : r(m) < m ? w : S)(m);
  }
  return f.invert = function(m) {
    return new Date(l(m));
  }, f.domain = function(m) {
    return arguments.length ? d(Array.from(m, tM)) : d().map(eM);
  }, f.ticks = function(m) {
    var O = d();
    return e(O[0], O[O.length - 1], m ?? 10);
  }, f.tickFormat = function(m, O) {
    return O == null ? g : c(O);
  }, f.nice = function(m) {
    var O = d();
    return (!m || typeof m.range != "function") && (m = t(O[0], O[O.length - 1], m ?? 10)), m ? d(Lx(O, m)) : f;
  }, f.copy = function() {
    return Ei(f, Qd(e, t, r, n, i, a, o, u, s, c));
  }, f;
}
function rM() {
  return dt.apply(Qd(Zj, Jj, zt, Zd, bo, ji, Xd, Gd, yr, Jx).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function nM() {
  return dt.apply(Qd(Xj, Yj, Wt, Jd, xo, mo, Yd, Vd, yr, Qx).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function wo() {
  var e = 0, t = 1, r, n, i, a, o = Ve, u = !1, s;
  function c(l) {
    return l == null || isNaN(l = +l) ? s : o(i === 0 ? 0.5 : (l = (a(l) - r) * i, u ? Math.max(0, Math.min(1, l)) : l));
  }
  c.domain = function(l) {
    return arguments.length ? ([e, t] = l, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(l) {
    return arguments.length ? (u = !!l, c) : u;
  }, c.interpolator = function(l) {
    return arguments.length ? (o = l, c) : o;
  };
  function f(l) {
    return function(d) {
      var h, y;
      return arguments.length ? ([h, y] = d, o = l(h, y), c) : [o(0), o(1)];
    };
  }
  return c.range = f(hn), c.rangeRound = f(qd), c.unknown = function(l) {
    return arguments.length ? (s = l, c) : s;
  }, function(l) {
    return a = l, r = l(e), n = l(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function ur(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function ew() {
  var e = or(wo()(Ve));
  return e.copy = function() {
    return ur(e, ew());
  }, Kt.apply(e, arguments);
}
function tw() {
  var e = zd(wo()).domain([1, 10]);
  return e.copy = function() {
    return ur(e, tw()).base(e.base());
  }, Kt.apply(e, arguments);
}
function rw() {
  var e = Wd(wo());
  return e.copy = function() {
    return ur(e, rw()).constant(e.constant());
  }, Kt.apply(e, arguments);
}
function ep() {
  var e = Ud(wo());
  return e.copy = function() {
    return ur(e, ep()).exponent(e.exponent());
  }, Kt.apply(e, arguments);
}
function iM() {
  return ep.apply(null, arguments).exponent(0.5);
}
function nw() {
  var e = [], t = Ve;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Ai(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Zt), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => UE(e, a / n));
  }, r.copy = function() {
    return nw(t).domain(e);
  }, Kt.apply(r, arguments);
}
function So() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, s, c = Ve, f, l = !1, d;
  function h(v) {
    return isNaN(v = +v) ? d : (v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? u : s), c(l ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = f(e = +e), a = f(t = +t), o = f(r = +r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (l = !!v, h) : l;
  }, h.interpolator = function(v) {
    return arguments.length ? (c = v, h) : c;
  };
  function y(v) {
    return function(p) {
      var b, x, w;
      return arguments.length ? ([b, x, w] = p, c = yj(v, [b, x, w]), h) : [c(0), c(0.5), c(1)];
    };
  }
  return h.range = y(hn), h.rangeRound = y(qd), h.unknown = function(v) {
    return arguments.length ? (d = v, h) : d;
  }, function(v) {
    return f = v, i = v(e), a = v(t), o = v(r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h;
  };
}
function iw() {
  var e = or(So()(Ve));
  return e.copy = function() {
    return ur(e, iw());
  }, Kt.apply(e, arguments);
}
function aw() {
  var e = zd(So()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return ur(e, aw()).base(e.base());
  }, Kt.apply(e, arguments);
}
function ow() {
  var e = Wd(So());
  return e.copy = function() {
    return ur(e, ow()).constant(e.constant());
  }, Kt.apply(e, arguments);
}
function tp() {
  var e = Ud(So());
  return e.copy = function() {
    return ur(e, tp()).exponent(e.exponent());
  }, Kt.apply(e, arguments);
}
function aM() {
  return tp.apply(null, arguments).exponent(0.5);
}
const nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Gn,
  scaleDiverging: iw,
  scaleDivergingLog: aw,
  scaleDivergingPow: tp,
  scaleDivergingSqrt: aM,
  scaleDivergingSymlog: ow,
  scaleIdentity: qx,
  scaleImplicit: mf,
  scaleLinear: Pa,
  scaleLog: Bx,
  scaleOrdinal: Rd,
  scalePoint: Nn,
  scalePow: Hd,
  scaleQuantile: Wx,
  scaleQuantize: Ux,
  scaleRadial: zx,
  scaleSequential: ew,
  scaleSequentialLog: tw,
  scaleSequentialPow: ep,
  scaleSequentialQuantile: nw,
  scaleSequentialSqrt: iM,
  scaleSequentialSymlog: rw,
  scaleSqrt: Lj,
  scaleSymlog: Fx,
  scaleThreshold: Hx,
  scaleTime: rM,
  scaleUtc: nM,
  tickFormat: Nx
}, Symbol.toStringTag, { value: "Module" }));
var ll, im;
function uw() {
  if (im) return ll;
  im = 1;
  var e = fn();
  function t(r, n, i) {
    for (var a = -1, o = r.length; ++a < o; ) {
      var u = r[a], s = n(u);
      if (s != null && (c === void 0 ? s === s && !e(s) : i(s, c)))
        var c = s, f = u;
    }
    return f;
  }
  return ll = t, ll;
}
var fl, am;
function oM() {
  if (am) return fl;
  am = 1;
  function e(t, r) {
    return t > r;
  }
  return fl = e, fl;
}
var dl, om;
function uM() {
  if (om) return dl;
  om = 1;
  var e = uw(), t = oM(), r = pn();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return dl = n, dl;
}
var sM = uM();
const Oo = /* @__PURE__ */ xe(sM);
var pl, um;
function cM() {
  if (um) return pl;
  um = 1;
  function e(t, r) {
    return t < r;
  }
  return pl = e, pl;
}
var hl, sm;
function lM() {
  if (sm) return hl;
  sm = 1;
  var e = uw(), t = cM(), r = pn();
  function n(i) {
    return i && i.length ? e(i, r, t) : void 0;
  }
  return hl = n, hl;
}
var fM = lM();
const _o = /* @__PURE__ */ xe(fM);
var vl, cm;
function dM() {
  if (cm) return vl;
  cm = 1;
  var e = gd(), t = ar(), r = yx(), n = Ze();
  function i(a, o) {
    var u = n(a) ? e : r;
    return u(a, t(o, 3));
  }
  return vl = i, vl;
}
var yl, lm;
function pM() {
  if (lm) return yl;
  lm = 1;
  var e = hx(), t = dM();
  function r(n, i) {
    return e(t(n, i), 1);
  }
  return yl = r, yl;
}
var hM = pM();
const vM = /* @__PURE__ */ xe(hM);
var gl, fm;
function yM() {
  if (fm) return gl;
  fm = 1;
  var e = Cd();
  function t(r, n) {
    return e(r, n);
  }
  return gl = t, gl;
}
var gM = yM();
const rp = /* @__PURE__ */ xe(gM);
var vn = 1e9, mM = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, ip, Oe = !0, ft = "[DecimalError] ", br = ft + "Invalid argument: ", np = ft + "Exponent out of range: ", yn = Math.floor, pr = Math.pow, bM = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, tt, Ne = 1e7, we = 7, sw = 9007199254740991, ja = yn(sw / we), V = {};
V.absoluteValue = V.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
V.comparedTo = V.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
V.decimalPlaces = V.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * we;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
V.dividedBy = V.div = function(e) {
  return Bt(this, new this.constructor(e));
};
V.dividedToIntegerBy = V.idiv = function(e) {
  var t = this, r = t.constructor;
  return ye(Bt(t, new r(e), 0, 1), r.precision);
};
V.equals = V.eq = function(e) {
  return !this.cmp(e);
};
V.exponent = function() {
  return Me(this);
};
V.greaterThan = V.gt = function(e) {
  return this.cmp(e) > 0;
};
V.greaterThanOrEqualTo = V.gte = function(e) {
  return this.cmp(e) >= 0;
};
V.isInteger = V.isint = function() {
  return this.e > this.d.length - 2;
};
V.isNegative = V.isneg = function() {
  return this.s < 0;
};
V.isPositive = V.ispos = function() {
  return this.s > 0;
};
V.isZero = function() {
  return this.s === 0;
};
V.lessThan = V.lt = function(e) {
  return this.cmp(e) < 0;
};
V.lessThanOrEqualTo = V.lte = function(e) {
  return this.cmp(e) < 1;
};
V.logarithm = V.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(tt)) throw Error(ft + "NaN");
  if (r.s < 1) throw Error(ft + (r.s ? "NaN" : "-Infinity"));
  return r.eq(tt) ? new n(0) : (Oe = !1, t = Bt(Jn(r, a), Jn(e, a), a), Oe = !0, ye(t, i));
};
V.minus = V.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? fw(t, e) : cw(t, (e.s = -e.s, e));
};
V.modulo = V.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(ft + "NaN");
  return r.s ? (Oe = !1, t = Bt(r, e, 0, 1).times(e), Oe = !0, r.minus(t)) : ye(new n(r), i);
};
V.naturalExponential = V.exp = function() {
  return lw(this);
};
V.naturalLogarithm = V.ln = function() {
  return Jn(this);
};
V.negated = V.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
V.plus = V.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? cw(t, e) : fw(t, (e.s = -e.s, e));
};
V.precision = V.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(br + e);
  if (t = Me(i) + 1, n = i.d.length - 1, r = n * we + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
V.squareRoot = V.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(ft + "NaN");
  }
  for (e = Me(u), Oe = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = Ot(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = yn((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(Bt(u, a, o + 2)).times(0.5), Ot(a.d).slice(0, o) === (t = Ot(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (ye(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return Oe = !0, ye(n, r);
};
V.times = V.mul = function(e) {
  var t, r, n, i, a, o, u, s, c, f = this, l = f.constructor, d = f.d, h = (e = new l(e)).d;
  if (!f.s || !e.s) return new l(0);
  for (e.s *= f.s, r = f.e + e.e, s = d.length, c = h.length, s < c && (a = d, d = h, h = a, o = s, s = c, c = o), a = [], o = s + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      u = a[i] + h[n] * d[i - n - 1] + t, a[i--] = u % Ne | 0, t = u / Ne | 0;
    a[i] = (a[i] + t) % Ne | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, Oe ? ye(e, l.precision) : e;
};
V.toDecimalPlaces = V.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (At(e, 0, vn), t === void 0 ? t = n.rounding : At(t, 0, 8), ye(r, e + Me(r) + 1, t));
};
V.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = wr(n, !0) : (At(e, 0, vn), t === void 0 ? t = i.rounding : At(t, 0, 8), n = ye(new i(n), e + 1, t), r = wr(n, !0, e + 1)), r;
};
V.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? wr(i) : (At(e, 0, vn), t === void 0 ? t = a.rounding : At(t, 0, 8), n = ye(new a(i), e + Me(i) + 1, t), r = wr(n.abs(), !1, e + Me(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
V.toInteger = V.toint = function() {
  var e = this, t = e.constructor;
  return ye(new t(e), Me(e) + 1, t.rounding);
};
V.toNumber = function() {
  return +this;
};
V.toPower = V.pow = function(e) {
  var t, r, n, i, a, o, u = this, s = u.constructor, c = 12, f = +(e = new s(e));
  if (!e.s) return new s(tt);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(ft + "Infinity");
    return u;
  }
  if (u.eq(tt)) return u;
  if (n = s.precision, e.eq(tt)) return ye(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = f < 0 ? -f : f) <= sw) {
      for (i = new s(tt), t = Math.ceil(n / we + 4), Oe = !1; r % 2 && (i = i.times(u), pm(i.d, t)), r = yn(r / 2), r !== 0; )
        u = u.times(u), pm(u.d, t);
      return Oe = !0, e.s < 0 ? new s(tt).div(i) : ye(i, n);
    }
  } else if (a < 0) throw Error(ft + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, Oe = !1, i = e.times(Jn(u, n + c)), Oe = !0, i = lw(i), i.s = a, i;
};
V.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = Me(i), n = wr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (At(e, 1, vn), t === void 0 ? t = a.rounding : At(t, 0, 8), i = ye(new a(i), e, t), r = Me(i), n = wr(i, e <= r || r <= a.toExpNeg, e)), n;
};
V.toSignificantDigits = V.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (At(e, 1, vn), t === void 0 ? t = n.rounding : At(t, 0, 8)), ye(new n(r), e, t);
};
V.toString = V.valueOf = V.val = V.toJSON = V[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Me(e), r = e.constructor;
  return wr(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function cw(e, t) {
  var r, n, i, a, o, u, s, c, f = e.constructor, l = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), Oe ? ye(t, l) : t;
  if (s = e.d, c = t.d, o = e.e, i = t.e, s = s.slice(), a = o - i, a) {
    for (a < 0 ? (n = s, a = -a, u = c.length) : (n = c, i = o, u = s.length), o = Math.ceil(l / we), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && (a = u, n = c, c = s, s = n), r = 0; a; )
    r = (s[--a] = s[a] + c[a] + r) / Ne | 0, s[a] %= Ne;
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = i, Oe ? ye(t, l) : t;
}
function At(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(br + e);
}
function Ot(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = we - n.length, r && (a += Vt(r)), a += n;
    o = e[t], n = o + "", r = we - n.length, r && (a += Vt(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Bt = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Ne | 0, o = a / Ne | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o)
      s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Ne + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, s, c, f, l, d, h, y, v, p, b, x, w, S, g, m, O, _, P = n.constructor, k = n.s == i.s ? 1 : -1, T = n.d, A = i.d;
    if (!n.s) return new P(n);
    if (!i.s) throw Error(ft + "Division by zero");
    for (s = n.e - i.e, O = A.length, g = T.length, h = new P(k), y = h.d = [], c = 0; A[c] == (T[c] || 0); ) ++c;
    if (A[c] > (T[c] || 0) && --s, a == null ? x = a = P.precision : o ? x = a + (Me(n) - Me(i)) + 1 : x = a, x < 0) return new P(0);
    if (x = x / we + 2 | 0, c = 0, O == 1)
      for (f = 0, A = A[0], x++; (c < g || f) && x--; c++)
        w = f * Ne + (T[c] || 0), y[c] = w / A | 0, f = w % A | 0;
    else {
      for (f = Ne / (A[0] + 1) | 0, f > 1 && (A = e(A, f), T = e(T, f), O = A.length, g = T.length), S = O, v = T.slice(0, O), p = v.length; p < O; ) v[p++] = 0;
      _ = A.slice(), _.unshift(0), m = A[0], A[1] >= Ne / 2 && ++m;
      do
        f = 0, u = t(A, v, O, p), u < 0 ? (b = v[0], O != p && (b = b * Ne + (v[1] || 0)), f = b / m | 0, f > 1 ? (f >= Ne && (f = Ne - 1), l = e(A, f), d = l.length, p = v.length, u = t(l, v, d, p), u == 1 && (f--, r(l, O < d ? _ : A, d))) : (f == 0 && (u = f = 1), l = A.slice()), d = l.length, d < p && l.unshift(0), r(v, l, p), u == -1 && (p = v.length, u = t(A, v, O, p), u < 1 && (f++, r(v, O < p ? _ : A, p))), p = v.length) : u === 0 && (f++, v = [0]), y[c++] = f, u && v[0] ? v[p++] = T[S] || 0 : (v = [T[S]], p = 1);
      while ((S++ < g || v[0] !== void 0) && x--);
    }
    return y[0] || y.shift(), h.e = s, ye(h, o ? a + Me(h) + 1 : a);
  };
}();
function lw(e, t) {
  var r, n, i, a, o, u, s = 0, c = 0, f = e.constructor, l = f.precision;
  if (Me(e) > 16) throw Error(np + Me(e));
  if (!e.s) return new f(tt);
  for (Oe = !1, u = l, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(pr(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new f(tt), f.precision = u; ; ) {
    if (i = ye(i.times(e), u), r = r.times(++s), o = a.plus(Bt(i, r, u)), Ot(o.d).slice(0, u) === Ot(a.d).slice(0, u)) {
      for (; c--; ) a = ye(a.times(a), u);
      return f.precision = l, t == null ? (Oe = !0, ye(a, l)) : a;
    }
    a = o;
  }
}
function Me(e) {
  for (var t = e.e * we, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function ml(e, t, r) {
  if (t > e.LN10.sd())
    throw Oe = !0, r && (e.precision = r), Error(ft + "LN10 precision limit exceeded");
  return ye(new e(e.LN10), t);
}
function Vt(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Jn(e, t) {
  var r, n, i, a, o, u, s, c, f, l = 1, d = 10, h = e, y = h.d, v = h.constructor, p = v.precision;
  if (h.s < 1) throw Error(ft + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(tt)) return new v(0);
  if (t == null ? (Oe = !1, c = p) : c = t, h.eq(10))
    return t == null && (Oe = !0), ml(v, c);
  if (c += d, v.precision = c, r = Ot(y), n = r.charAt(0), a = Me(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = Ot(h.d), n = r.charAt(0), l++;
    a = Me(h), n > 1 ? (h = new v("0." + r), a++) : h = new v(n + "." + r.slice(1));
  } else
    return s = ml(v, c + 2, p).times(a + ""), h = Jn(new v(n + "." + r.slice(1)), c - d).plus(s), v.precision = p, t == null ? (Oe = !0, ye(h, p)) : h;
  for (u = o = h = Bt(h.minus(tt), h.plus(tt), c), f = ye(h.times(h), c), i = 3; ; ) {
    if (o = ye(o.times(f), c), s = u.plus(Bt(o, new v(i), c)), Ot(s.d).slice(0, c) === Ot(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus(ml(v, c + 2, p).times(a + ""))), u = Bt(u, new v(l), c), v.precision = p, t == null ? (Oe = !0, ye(u, p)) : u;
    u = s, i += 2;
  }
}
function dm(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = yn(r / we), e.d = [], n = (r + 1) % we, r < 0 && (n += we), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= we; n < i; ) e.d.push(+t.slice(n, n += we));
      t = t.slice(n), n = we - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Oe && (e.e > ja || e.e < -ja)) throw Error(np + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function ye(e, t, r) {
  var n, i, a, o, u, s, c, f, l = e.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += we, i = t, c = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / we), a = l.length, f >= a) return e;
    for (c = a = l[f], o = 1; a >= 10; a /= 10) o++;
    n %= we, i = n - we + o;
  }
  if (r !== void 0 && (a = pr(10, o - i - 1), u = c / a % 10 | 0, s = t < 0 || l[f + 1] !== void 0 || c % a, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / pr(10, o - i) : 0 : l[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !l[0])
    return s ? (a = Me(e), l.length = 1, t = t - a - 1, l[0] = pr(10, (we - t % we) % we), e.e = yn(-t / we) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
  if (n == 0 ? (l.length = f, a = 1, f--) : (l.length = f + 1, a = pr(10, we - n), l[f] = i > 0 ? (c / pr(10, o - i) % pr(10, i) | 0) * a : 0), s)
    for (; ; )
      if (f == 0) {
        (l[0] += a) == Ne && (l[0] = 1, ++e.e);
        break;
      } else {
        if (l[f] += a, l[f] != Ne) break;
        l[f--] = 0, a = 1;
      }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (Oe && (e.e > ja || e.e < -ja))
    throw Error(np + Me(e));
  return e;
}
function fw(e, t) {
  var r, n, i, a, o, u, s, c, f, l, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), Oe ? ye(t, h) : t;
  if (s = e.d, l = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (f = o < 0, f ? (r = s, o = -o, u = l.length) : (r = l, n = c, u = s.length), i = Math.max(Math.ceil(h / we), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (s[i] != l[i]) {
        f = s[i] < l[i];
        break;
      }
    o = 0;
  }
  for (f && (r = s, s = l, l = r, t.s = -t.s), u = s.length, i = l.length - u; i > 0; --i) s[u++] = 0;
  for (i = l.length; i > o; ) {
    if (s[--i] < l[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Ne - 1;
      --s[a], s[i] += Ne;
    }
    s[i] -= l[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, Oe ? ye(t, h) : t) : new d(0);
}
function wr(e, t, r) {
  var n, i = Me(e), a = Ot(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Vt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Vt(-i - 1) + a, r && (n = r - o) > 0 && (a += Vt(n))) : i >= o ? (a += Vt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Vt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Vt(n))), e.s < 0 ? "-" + a : a;
}
function pm(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function dw(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(br + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return dm(o, a.toString());
    } else if (typeof a != "string")
      throw Error(br + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, bM.test(a)) dm(o, a);
    else throw Error(br + a);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = dw, i.config = i.set = xM, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function xM(e) {
  if (!e || typeof e != "object")
    throw Error(ft + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    vn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (yn(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(br + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(br + r + ": " + n);
  return this;
}
var ip = dw(mM);
tt = new ip(1);
const ve = ip;
function wM(e) {
  return PM(e) || _M(e) || OM(e) || SM();
}
function SM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OM(e, t) {
  if (e) {
    if (typeof e == "string") return Sf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sf(e, t);
  }
}
function _M(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function PM(e) {
  if (Array.isArray(e)) return Sf(e);
}
function Sf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var AM = function(t) {
  return t;
}, pw = {}, hw = function(t) {
  return t === pw;
}, hm = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && hw(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, TM = function e(t, r) {
  return t === 1 ? r : hm(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(u) {
      return u !== pw;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, hm(function() {
      for (var u = arguments.length, s = new Array(u), c = 0; c < u; c++)
        s[c] = arguments[c];
      var f = i.map(function(l) {
        return hw(l) ? s.shift() : l;
      });
      return r.apply(void 0, wM(f).concat(s));
    }));
  });
}, Po = function(t) {
  return TM(t.length, t);
}, Of = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, EM = Po(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), jM = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return AM;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(u, s) {
      return s(u);
    }, a.apply(void 0, arguments));
  };
}, _f = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, vw = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(u, s) {
      return u === r[s];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function CM(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ve(e).abs().log(10).toNumber()) + 1, t;
}
function MM(e, t, r) {
  for (var n = new ve(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var IM = Po(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), $M = Po(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), kM = Po(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Ao = {
  rangeStep: MM,
  getDigitCount: CM,
  interpolateNumber: IM,
  uninterpolateNumber: $M,
  uninterpolateTruncation: kM
};
function Pf(e) {
  return NM(e) || DM(e) || yw(e) || RM();
}
function RM() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DM(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function NM(e) {
  if (Array.isArray(e)) return Af(e);
}
function Qn(e, t) {
  return BM(e) || LM(e, t) || yw(e, t) || qM();
}
function qM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yw(e, t) {
  if (e) {
    if (typeof e == "string") return Af(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Af(e, t);
  }
}
function Af(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function LM(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (s) {
      i = !0, a = s;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function BM(e) {
  if (Array.isArray(e)) return e;
}
function gw(e) {
  var t = Qn(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function mw(e, t, r) {
  if (e.lte(0))
    return new ve(0);
  var n = Ao.getDigitCount(e.toNumber()), i = new ve(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new ve(Math.ceil(a.div(o).toNumber())).add(r).mul(o), s = u.mul(i);
  return t ? s : new ve(Math.ceil(s));
}
function FM(e, t, r) {
  var n = 1, i = new ve(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ve(10).pow(Ao.getDigitCount(e) - 1), i = new ve(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ve(Math.floor(e)));
  } else e === 0 ? i = new ve(Math.floor((t - 1) / 2)) : r || (i = new ve(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = jM(EM(function(s) {
    return i.add(new ve(s - o).mul(n)).toNumber();
  }), Of);
  return u(0, t);
}
function bw(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new ve(0),
      tickMin: new ve(0),
      tickMax: new ve(0)
    };
  var a = mw(new ve(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new ve(0) : (o = new ve(e).add(t).div(2), o = o.sub(new ve(o).mod(a)));
  var u = Math.ceil(o.sub(e).div(a).toNumber()), s = Math.ceil(new ve(t).sub(o).div(a).toNumber()), c = u + s + 1;
  return c > r ? bw(e, t, r, n, i + 1) : (c < r && (s = t > 0 ? s + (r - c) : s, u = t > 0 ? u : u + (r - c)), {
    step: a,
    tickMin: o.sub(new ve(u).mul(a)),
    tickMax: o.add(new ve(s).mul(a))
  });
}
function zM(e) {
  var t = Qn(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), u = gw([r, n]), s = Qn(u, 2), c = s[0], f = s[1];
  if (c === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [c].concat(Pf(Of(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(Pf(Of(0, i - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? _f(l) : l;
  }
  if (c === f)
    return FM(c, i, a);
  var d = bw(c, f, o, a), h = d.step, y = d.tickMin, v = d.tickMax, p = Ao.rangeStep(y, v.add(new ve(0.1).mul(h)), h);
  return r > n ? _f(p) : p;
}
function WM(e, t) {
  var r = Qn(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = gw([n, i]), u = Qn(o, 2), s = u[0], c = u[1];
  if (s === -1 / 0 || c === 1 / 0)
    return [n, i];
  if (s === c)
    return [s];
  var f = Math.max(t, 2), l = mw(new ve(c).sub(s).div(f - 1), a, 0), d = [].concat(Pf(Ao.rangeStep(new ve(s), new ve(c).sub(new ve(0.99).mul(l)), l)), [c]);
  return n > i ? _f(d) : d;
}
var UM = vw(zM), HM = vw(WM), KM = "Invariant failed";
function Sr(e, t) {
  throw new Error(KM);
}
var GM = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Zr(e) {
  "@babel/helpers - typeof";
  return Zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zr(e);
}
function Ca() {
  return Ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ca.apply(this, arguments);
}
function VM(e, t) {
  return JM(e) || ZM(e, t) || YM(e, t) || XM();
}
function XM() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function YM(e, t) {
  if (e) {
    if (typeof e == "string") return vm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vm(e, t);
  }
}
function vm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ZM(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function JM(e) {
  if (Array.isArray(e)) return e;
}
function QM(e, t) {
  if (e == null) return {};
  var r = eI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function tI(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rI(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Sw(n.key), n);
  }
}
function nI(e, t, r) {
  return t && rI(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iI(e, t, r) {
  return t = Ma(t), aI(e, xw() ? Reflect.construct(t, r || [], Ma(e).constructor) : t.apply(e, r));
}
function aI(e, t) {
  if (t && (Zr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oI(e);
}
function oI(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xw = function() {
    return !!e;
  })();
}
function Ma(e) {
  return Ma = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ma(e);
}
function uI(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Tf(e, t);
}
function Tf(e, t) {
  return Tf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Tf(e, t);
}
function ww(e, t, r) {
  return t = Sw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sw(e) {
  var t = sI(e, "string");
  return Zr(t) == "symbol" ? t : t + "";
}
function sI(e, t) {
  if (Zr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Zr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var To = /* @__PURE__ */ function(e) {
  function t() {
    return tI(this, t), iI(this, t, arguments);
  }
  return uI(t, e), nI(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.offset, a = n.layout, o = n.width, u = n.dataKey, s = n.data, c = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, d = QM(n, GM), h = ce(d, !1);
      this.props.direction === "x" && f.type !== "number" && Sr();
      var y = s.map(function(v) {
        var p = c(v, u), b = p.x, x = p.y, w = p.value, S = p.errorVal;
        if (!S)
          return null;
        var g = [], m, O;
        if (Array.isArray(S)) {
          var _ = VM(S, 2);
          m = _[0], O = _[1];
        } else
          m = O = S;
        if (a === "vertical") {
          var P = f.scale, k = x + i, T = k + o, A = k - o, M = P(w - m), C = P(w + O);
          g.push({
            x1: C,
            y1: T,
            x2: C,
            y2: A
          }), g.push({
            x1: M,
            y1: k,
            x2: C,
            y2: k
          }), g.push({
            x1: M,
            y1: T,
            x2: M,
            y2: A
          });
        } else if (a === "horizontal") {
          var I = l.scale, $ = b + i, N = $ - o, L = $ + o, F = I(w - m), H = I(w + O);
          g.push({
            x1: N,
            y1: H,
            x2: L,
            y2: H
          }), g.push({
            x1: $,
            y1: F,
            x2: $,
            y2: H
          }), g.push({
            x1: N,
            y1: F,
            x2: L,
            y2: F
          });
        }
        return /* @__PURE__ */ j.createElement(qe, Ca({
          className: "recharts-errorBar",
          key: "bar-".concat(g.map(function(W) {
            return "".concat(W.x1, "-").concat(W.x2, "-").concat(W.y1, "-").concat(W.y2);
          }))
        }, h), g.map(function(W) {
          return /* @__PURE__ */ j.createElement("line", Ca({}, W, {
            key: "line-".concat(W.x1, "-").concat(W.x2, "-").concat(W.y1, "-").concat(W.y2)
          }));
        }));
      });
      return /* @__PURE__ */ j.createElement(qe, {
        className: "recharts-errorBars"
      }, y);
    }
  }]);
}(j.Component);
ww(To, "defaultProps", {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
});
ww(To, "displayName", "ErrorBar");
function ei(e) {
  "@babel/helpers - typeof";
  return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ei(e);
}
function ym(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ym(Object(r), !0).forEach(function(n) {
      cI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ym(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cI(e, t, r) {
  return t = lI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lI(e) {
  var t = fI(e, "string");
  return ei(t) == "symbol" ? t : t + "";
}
function fI(e, t) {
  if (ei(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ei(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ow = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = et(r, Br);
  if (!o)
    return null;
  var u = Br.defaultProps, s = u !== void 0 ? fr(fr({}, u), o.props) : {}, c;
  return o.props && o.props.payload ? c = o.props && o.props.payload : a === "children" ? c = (n || []).reduce(function(f, l) {
    var d = l.item, h = l.props, y = h.sectors || h.data || [];
    return f.concat(y.map(function(v) {
      return {
        type: o.props.iconType || d.props.legendType,
        value: v.name,
        color: v.fill,
        payload: v
      };
    }));
  }, []) : c = (n || []).map(function(f) {
    var l = f.item, d = l.type.defaultProps, h = d !== void 0 ? fr(fr({}, d), l.props) : {}, y = h.dataKey, v = h.name, p = h.legendType, b = h.hide;
    return {
      inactive: b,
      dataKey: y,
      type: s.iconType || p || "square",
      color: ap(l),
      value: v || y,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: h
    };
  }), fr(fr(fr({}, s), Br.getWithHeight(o, i)), {}, {
    payload: c,
    item: o
  });
};
function ti(e) {
  "@babel/helpers - typeof";
  return ti = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ti(e);
}
function gm(e) {
  return vI(e) || hI(e) || pI(e) || dI();
}
function dI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pI(e, t) {
  if (e) {
    if (typeof e == "string") return Ef(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ef(e, t);
  }
}
function hI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function vI(e) {
  if (Array.isArray(e)) return Ef(e);
}
function Ef(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mm(Object(r), !0).forEach(function(n) {
      zr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zr(e, t, r) {
  return t = yI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yI(e) {
  var t = gI(e, "string");
  return ti(t) == "symbol" ? t : t + "";
}
function gI(e, t) {
  if (ti(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ti(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tt(e, t, r) {
  return he(e) || he(t) ? r : Re(t) ? lt(e, t, r) : ne(t) ? t(e) : r;
}
function qn(e, t, r, n) {
  var i = vM(e, function(u) {
    return Tt(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return U(u) || parseFloat(u);
    });
    return a.length ? [_o(a), Oo(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(u) {
    return !he(u);
  }) : i;
  return o.map(function(u) {
    return Re(u) || u instanceof Date ? u : "";
  });
}
var mI = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n?.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var s = a.range, c = 0; c < u; c++) {
      var f = c > 0 ? i[c - 1].coordinate : i[u - 1].coordinate, l = i[c].coordinate, d = c >= u - 1 ? i[0].coordinate : i[c + 1].coordinate, h = void 0;
      if (gt(l - f) !== gt(d - l)) {
        var y = [];
        if (gt(d - l) === gt(s[1] - s[0])) {
          h = d;
          var v = l + s[1] - s[0];
          y[0] = Math.min(v, (v + f) / 2), y[1] = Math.max(v, (v + f) / 2);
        } else {
          h = f;
          var p = d + s[1] - s[0];
          y[0] = Math.min(l, (p + l) / 2), y[1] = Math.max(l, (p + l) / 2);
        }
        var b = [Math.min(l, (h + l) / 2), Math.max(l, (h + l) / 2)];
        if (t > b[0] && t <= b[1] || t >= y[0] && t <= y[1]) {
          o = i[c].index;
          break;
        }
      } else {
        var x = Math.min(f, d), w = Math.max(f, d);
        if (t > (x + l) / 2 && t <= (w + l) / 2) {
          o = i[c].index;
          break;
        }
      }
    }
  else
    for (var S = 0; S < u; S++)
      if (S === 0 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S > 0 && S < u - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S === u - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2) {
        o = n[S].index;
        break;
      }
  return o;
}, ap = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? Ae(Ae({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, u = a.fill, s;
  switch (i) {
    case "Line":
      s = o;
      break;
    case "Area":
    case "Radar":
      s = o && o !== "none" ? o : u;
      break;
    default:
      s = u;
      break;
  }
  return s;
}, bI = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var o = {}, u = Object.keys(a), s = 0, c = u.length; s < c; s++)
    for (var f = a[u[s]].stackGroups, l = Object.keys(f), d = 0, h = l.length; d < h; d++) {
      var y = f[l[d]], v = y.items, p = y.cateAxisId, b = v.filter(function(O) {
        return qt(O.type).indexOf("Bar") >= 0;
      });
      if (b && b.length) {
        var x = b[0].type.defaultProps, w = x !== void 0 ? Ae(Ae({}, x), b[0].props) : b[0].props, S = w.barSize, g = w[p];
        o[g] || (o[g] = []);
        var m = he(S) ? r : S;
        o[g].push({
          item: b[0],
          stackList: b.slice(1),
          barSize: he(m) ? void 0 : xr(m, n, 0)
        });
      }
    }
  return o;
}, xI = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, u = t.maxBarSize, s = o.length;
  if (s < 1) return null;
  var c = xr(r, i, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, h = i / s, y = o.reduce(function(S, g) {
      return S + g.barSize || 0;
    }, 0);
    y += (s - 1) * c, y >= i && (y -= (s - 1) * c, c = 0), y >= i && h > 0 && (d = !0, h *= 0.9, y = s * h);
    var v = (i - y) / 2 >> 0, p = {
      offset: v - c,
      size: 0
    };
    f = o.reduce(function(S, g) {
      var m = {
        item: g.item,
        position: {
          offset: p.offset + p.size + c,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? h : g.barSize
        }
      }, O = [].concat(gm(S), [m]);
      return p = O[O.length - 1].position, g.stackList && g.stackList.length && g.stackList.forEach(function(_) {
        O.push({
          item: _,
          position: p
        });
      }), O;
    }, l);
  } else {
    var b = xr(n, i, 0, !0);
    i - 2 * b - (s - 1) * c <= 0 && (c = 0);
    var x = (i - 2 * b - (s - 1) * c) / s;
    x > 1 && (x >>= 0);
    var w = u === +u ? Math.min(x, u) : x;
    f = o.reduce(function(S, g, m) {
      var O = [].concat(gm(S), [{
        item: g.item,
        position: {
          offset: b + (x + c) * m + (x - w) / 2,
          size: w
        }
      }]);
      return g.stackList && g.stackList.length && g.stackList.forEach(function(_) {
        O.push({
          item: _,
          position: O[O.length - 1].position
        });
      }), O;
    }, l);
  }
  return f;
}, wI = function(t, r, n, i) {
  var a = n.children, o = n.width, u = n.margin, s = o - (u.left || 0) - (u.right || 0), c = Ow({
    children: a,
    legendWidth: s
  });
  if (c) {
    var f = i || {}, l = f.width, d = f.height, h = c.align, y = c.verticalAlign, v = c.layout;
    if ((v === "vertical" || v === "horizontal" && y === "middle") && h !== "center" && U(t[h]))
      return Ae(Ae({}, t), {}, zr({}, h, t[h] + (l || 0)));
    if ((v === "horizontal" || v === "vertical" && h === "center") && y !== "middle" && U(t[y]))
      return Ae(Ae({}, t), {}, zr({}, y, t[y] + (d || 0)));
  }
  return t;
}, SI = function(t, r, n) {
  return he(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, _w = function(t, r, n, i, a) {
  var o = r.props.children, u = bt(o, To).filter(function(c) {
    return SI(i, a, c.props.direction);
  });
  if (u && u.length) {
    var s = u.map(function(c) {
      return c.props.dataKey;
    });
    return t.reduce(function(c, f) {
      var l = Tt(f, n);
      if (he(l)) return c;
      var d = Array.isArray(l) ? [_o(l), Oo(l)] : [l, l], h = s.reduce(function(y, v) {
        var p = Tt(f, v, 0), b = d[0] - Math.abs(Array.isArray(p) ? p[0] : p), x = d[1] + Math.abs(Array.isArray(p) ? p[1] : p);
        return [Math.min(b, y[0]), Math.max(x, y[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], c[0]), Math.max(h[1], c[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, OI = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    return _w(t, u, n, a, i);
  }).filter(function(u) {
    return !he(u);
  });
  return o && o.length ? o.reduce(function(u, s) {
    return [Math.min(u[0], s[0]), Math.max(u[1], s[1])];
  }, [1 / 0, -1 / 0]) : null;
}, Pw = function(t, r, n, i, a) {
  var o = r.map(function(s) {
    var c = s.props.dataKey;
    return n === "number" && c && _w(t, s, c, i) || qn(t, c, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(s, c) {
        return [Math.min(s[0], c[0]), Math.max(s[1], c[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(s, c) {
    for (var f = 0, l = c.length; f < l; f++)
      u[c[f]] || (u[c[f]] = !0, s.push(c[f]));
    return s;
  }, []);
}, Aw = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, Tw = function(t, r, n, i) {
  if (i)
    return t.map(function(s) {
      return s.coordinate;
    });
  var a, o, u = t.map(function(s) {
    return s.coordinate === r && (a = !0), s.coordinate === n && (o = !0), s.coordinate;
  });
  return a || u.push(r), o || u.push(n), u;
}, Nt = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, u = t.range, s = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, c = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / s : 0;
  if (c = t.axisType === "angleAxis" && u?.length >= 2 ? gt(u[0] - u[1]) * 2 * c : c, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(l) {
      var d = a ? a.indexOf(l) : l;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(d) + c,
        value: l,
        offset: c
      };
    });
    return f.filter(function(l) {
      return !Oi(l.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, d) {
    return {
      coordinate: i(l) + c,
      value: l,
      index: d,
      offset: c
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(l) {
    return {
      coordinate: i(l) + c,
      value: l,
      offset: c
    };
  }) : i.domain().map(function(l, d) {
    return {
      coordinate: i(l) + c,
      value: a ? a[l] : l,
      index: d,
      offset: c
    };
  });
}, bl = /* @__PURE__ */ new WeakMap(), Ki = function(t, r) {
  if (typeof r != "function")
    return t;
  bl.has(t) || bl.set(t, /* @__PURE__ */ new WeakMap());
  var n = bl.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, _I = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, u = t.axisType;
  if (i === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: Gn(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: Pa(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Nn(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Gn(),
      realScaleType: "band"
    } : {
      scale: Pa(),
      realScaleType: "linear"
    };
  if (Si(i)) {
    var s = "scale".concat(co(i));
    return {
      scale: (nm[s] || Nn)(),
      realScaleType: nm[s] ? s : "point"
    };
  }
  return ne(i) ? {
    scale: i
  } : {
    scale: Nn(),
    realScaleType: "point"
  };
}, bm = 1e-4, PI = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - bm, o = Math.max(i[0], i[1]) + bm, u = t(r[0]), s = t(r[n - 1]);
    (u < a || u > o || s < a || s > o) && t.domain([r[0], r[n - 1]]);
  }
}, AI = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, TI = function(t, r) {
  if (!r || r.length !== 2 || !U(r[0]) || !U(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!U(t[0]) || t[0] < n) && (a[0] = n), (!U(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, EI = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, u = 0; u < r; ++u) {
        var s = Oi(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        s >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + s, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + s, o = t[u][n][1]);
      }
}, jI = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var u = Oi(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, CI = {
  sign: EI,
  // @ts-expect-error definitelytyped types are incorrect
  expand: dP,
  // @ts-expect-error definitelytyped types are incorrect
  none: Wr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: pP,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: hP,
  positive: jI
}, MI = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = CI[n], o = fP().keys(i).value(function(u, s) {
    return +Tt(u, s, 0);
  }).order(nf).offset(a);
  return o(t);
}, II = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, s = {}, c = u.reduce(function(l, d) {
    var h, y = (h = d.type) !== null && h !== void 0 && h.defaultProps ? Ae(Ae({}, d.type.defaultProps), d.props) : d.props, v = y.stackId, p = y.hide;
    if (p)
      return l;
    var b = y[n], x = l[b] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Re(v)) {
      var w = x.stackGroups[v] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      w.items.push(d), x.hasStack = !0, x.stackGroups[v] = w;
    } else
      x.stackGroups[so("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [d]
      };
    return Ae(Ae({}, l), {}, zr({}, b, x));
  }, s), f = {};
  return Object.keys(c).reduce(function(l, d) {
    var h = c[d];
    if (h.hasStack) {
      var y = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(v, p) {
        var b = h.stackGroups[p];
        return Ae(Ae({}, v), {}, zr({}, p, {
          numericAxisId: n,
          cateAxisId: i,
          items: b.items,
          stackedData: MI(t, b.items, a)
        }));
      }, y);
    }
    return Ae(Ae({}, l), {}, zr({}, d, h));
  }, f);
}, $I = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, u = r.allowDecimals, s = n || r.scale;
  if (s !== "auto" && s !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var c = t.domain();
    if (!c.length)
      return null;
    var f = UM(c, a, u);
    return t.domain([_o(f), Oo(f)]), {
      niceTicks: f
    };
  }
  if (a && i === "number") {
    var l = t.domain(), d = HM(l, a, u);
    return {
      niceTicks: d
    };
  }
  return null;
}, xm = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category")
    return n[u] ? n[u].coordinate + i : null;
  var s = Tt(o, r.dataKey, r.domain[u]);
  return he(s) ? null : r.scale(s) - a / 2 + i;
}, kI = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, RI = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? Ae(Ae({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (Re(a)) {
    var o = r[a];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, DI = function(t) {
  return t.reduce(function(r, n) {
    return [_o(n.concat([r[0]]).filter(U)), Oo(n.concat([r[1]]).filter(U))];
  }, [1 / 0, -1 / 0]);
}, Ew = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], u = o.stackedData, s = u.reduce(function(c, f) {
      var l = DI(f.slice(r, n + 1));
      return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(s[0], i[0]), Math.max(s[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, wm = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Sm = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, jf = function(t, r, n) {
  if (ne(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (U(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (wm.test(t[0])) {
    var a = +wm.exec(t[0])[1];
    i[0] = r[0] - a;
  } else ne(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (U(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Sm.test(t[1])) {
    var o = +Sm.exec(t[1])[1];
    i[1] = r[1] + o;
  } else ne(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Ia = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = Id(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, u = 1, s = a.length; u < s; u++) {
      var c = a[u], f = a[u - 1];
      o = Math.min((c.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, Om = function(t, r, n) {
  return !t || !t.length || rp(t, lt(n, "type.defaultProps.domain")) ? r : t;
}, jw = function(t, r) {
  var n = t.type.defaultProps ? Ae(Ae({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, u = n.formatter, s = n.tooltipType, c = n.chartType, f = n.hide;
  return Ae(Ae({}, ce(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: u,
    name: a || i,
    color: ap(t),
    value: Tt(r, i),
    type: s,
    payload: r,
    chartType: c,
    hide: f
  });
};
function ri(e) {
  "@babel/helpers - typeof";
  return ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ri(e);
}
function _m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _m(Object(r), !0).forEach(function(n) {
      NI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _m(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function NI(e, t, r) {
  return t = qI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qI(e) {
  var t = LI(e, "string");
  return ri(t) == "symbol" ? t : t + "";
}
function LI(e, t) {
  if (ri(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ri(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $a = Math.PI / 180, BI = function(t) {
  return t * 180 / Math.PI;
}, ze = function(t, r, n, i) {
  return {
    x: t + Math.cos(-$a * i) * n,
    y: r + Math.sin(-$a * i) * n
  };
}, FI = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, zI = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, u = FI({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var s = (n - a) / u, c = Math.acos(s);
  return i > o && (c = 2 * Math.PI - c), {
    radius: u,
    angle: BI(c),
    angleInRadian: c
  };
}, WI = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, UI = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), u = Math.min(a, o);
  return t + u * 360;
}, Am = function(t, r) {
  var n = t.x, i = t.y, a = zI({
    x: n,
    y: i
  }, r), o = a.radius, u = a.angle, s = r.innerRadius, c = r.outerRadius;
  if (o < s || o > c)
    return !1;
  if (o === 0)
    return !0;
  var f = WI(r), l = f.startAngle, d = f.endAngle, h = u, y;
  if (l <= d) {
    for (; h > d; )
      h -= 360;
    for (; h < l; )
      h += 360;
    y = h >= l && h <= d;
  } else {
    for (; h > l; )
      h -= 360;
    for (; h < d; )
      h += 360;
    y = h >= d && h <= l;
  }
  return y ? Pm(Pm({}, r), {}, {
    radius: o,
    angle: UI(h, r)
  }) : null;
};
function ni(e) {
  "@babel/helpers - typeof";
  return ni = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ni(e);
}
var HI = ["offset"];
function KI(e) {
  return YI(e) || XI(e) || VI(e) || GI();
}
function GI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function VI(e, t) {
  if (e) {
    if (typeof e == "string") return Cf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cf(e, t);
  }
}
function XI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function YI(e) {
  if (Array.isArray(e)) return Cf(e);
}
function Cf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ZI(e, t) {
  if (e == null) return {};
  var r = JI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function JI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Tm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tm(Object(r), !0).forEach(function(n) {
      QI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QI(e, t, r) {
  return t = e$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function e$(e) {
  var t = t$(e, "string");
  return ni(t) == "symbol" ? t : t + "";
}
function t$(e, t) {
  if (ni(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ni(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ii.apply(this, arguments);
}
var r$ = function(t) {
  var r = t.value, n = t.formatter, i = he(t.children) ? r : t.children;
  return ne(n) ? n(i) : i;
}, n$ = function(t, r) {
  var n = gt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, i$ = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, u = t.className, s = a, c = s.cx, f = s.cy, l = s.innerRadius, d = s.outerRadius, h = s.startAngle, y = s.endAngle, v = s.clockWise, p = (l + d) / 2, b = n$(h, y), x = b >= 0 ? 1 : -1, w, S;
  i === "insideStart" ? (w = h + x * o, S = v) : i === "insideEnd" ? (w = y - x * o, S = !v) : i === "end" && (w = y + x * o, S = v), S = b <= 0 ? S : !S;
  var g = ze(c, f, p, w), m = ze(c, f, p, w + (S ? 1 : -1) * 359), O = "M".concat(g.x, ",").concat(g.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(m.x, ",").concat(m.y), _ = he(t.id) ? so("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ j.createElement("text", ii({}, n, {
    dominantBaseline: "central",
    className: Q("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("path", {
    id: _,
    d: O
  })), /* @__PURE__ */ j.createElement("textPath", {
    xlinkHref: "#".concat(_)
  }, r));
}, a$ = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, u = a.cy, s = a.innerRadius, c = a.outerRadius, f = a.startAngle, l = a.endAngle, d = (f + l) / 2;
  if (i === "outside") {
    var h = ze(o, u, c + n, d), y = h.x, v = h.y;
    return {
      x: y,
      y: v,
      textAnchor: y >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var p = (s + c) / 2, b = ze(o, u, p, d), x = b.x, w = b.y;
  return {
    x,
    y: w,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, o$ = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, u = o.x, s = o.y, c = o.width, f = o.height, l = f >= 0 ? 1 : -1, d = l * i, h = l > 0 ? "end" : "start", y = l > 0 ? "start" : "end", v = c >= 0 ? 1 : -1, p = v * i, b = v > 0 ? "end" : "start", x = v > 0 ? "start" : "end";
  if (a === "top") {
    var w = {
      x: u + c / 2,
      y: s - l * i,
      textAnchor: "middle",
      verticalAnchor: h
    };
    return $e($e({}, w), n ? {
      height: Math.max(s - n.y, 0),
      width: c
    } : {});
  }
  if (a === "bottom") {
    var S = {
      x: u + c / 2,
      y: s + f + d,
      textAnchor: "middle",
      verticalAnchor: y
    };
    return $e($e({}, S), n ? {
      height: Math.max(n.y + n.height - (s + f), 0),
      width: c
    } : {});
  }
  if (a === "left") {
    var g = {
      x: u - p,
      y: s + f / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return $e($e({}, g), n ? {
      width: Math.max(g.x - n.x, 0),
      height: f
    } : {});
  }
  if (a === "right") {
    var m = {
      x: u + c + p,
      y: s + f / 2,
      textAnchor: x,
      verticalAnchor: "middle"
    };
    return $e($e({}, m), n ? {
      width: Math.max(n.x + n.width - m.x, 0),
      height: f
    } : {});
  }
  var O = n ? {
    width: c,
    height: f
  } : {};
  return a === "insideLeft" ? $e({
    x: u + p,
    y: s + f / 2,
    textAnchor: x,
    verticalAnchor: "middle"
  }, O) : a === "insideRight" ? $e({
    x: u + c - p,
    y: s + f / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, O) : a === "insideTop" ? $e({
    x: u + c / 2,
    y: s + d,
    textAnchor: "middle",
    verticalAnchor: y
  }, O) : a === "insideBottom" ? $e({
    x: u + c / 2,
    y: s + f - d,
    textAnchor: "middle",
    verticalAnchor: h
  }, O) : a === "insideTopLeft" ? $e({
    x: u + p,
    y: s + d,
    textAnchor: x,
    verticalAnchor: y
  }, O) : a === "insideTopRight" ? $e({
    x: u + c - p,
    y: s + d,
    textAnchor: b,
    verticalAnchor: y
  }, O) : a === "insideBottomLeft" ? $e({
    x: u + p,
    y: s + f - d,
    textAnchor: x,
    verticalAnchor: h
  }, O) : a === "insideBottomRight" ? $e({
    x: u + c - p,
    y: s + f - d,
    textAnchor: b,
    verticalAnchor: h
  }, O) : dn(a) && (U(a.x) || hr(a.x)) && (U(a.y) || hr(a.y)) ? $e({
    x: u + xr(a.x, c),
    y: s + xr(a.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, O) : $e({
    x: u + c / 2,
    y: s + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, O);
}, u$ = function(t) {
  return "cx" in t && U(t.cx);
};
function He(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = ZI(e, HI), i = $e({
    offset: r
  }, n), a = i.viewBox, o = i.position, u = i.value, s = i.children, c = i.content, f = i.className, l = f === void 0 ? "" : f, d = i.textBreakAll;
  if (!a || he(u) && he(s) && !/* @__PURE__ */ R.isValidElement(c) && !ne(c))
    return null;
  if (/* @__PURE__ */ R.isValidElement(c))
    return /* @__PURE__ */ R.cloneElement(c, i);
  var h;
  if (ne(c)) {
    if (h = /* @__PURE__ */ R.createElement(c, i), /* @__PURE__ */ R.isValidElement(h))
      return h;
  } else
    h = r$(i);
  var y = u$(a), v = ce(i, !0);
  if (y && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return i$(i, h, v);
  var p = y ? a$(i) : o$(i);
  return /* @__PURE__ */ j.createElement(ga, ii({
    className: Q("recharts-label", l)
  }, v, p, {
    breakAll: d
  }), h);
}
He.displayName = "Label";
var Cw = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, u = t.r, s = t.radius, c = t.innerRadius, f = t.outerRadius, l = t.x, d = t.y, h = t.top, y = t.left, v = t.width, p = t.height, b = t.clockWise, x = t.labelViewBox;
  if (x)
    return x;
  if (U(v) && U(p)) {
    if (U(l) && U(d))
      return {
        x: l,
        y: d,
        width: v,
        height: p
      };
    if (U(h) && U(y))
      return {
        x: h,
        y,
        width: v,
        height: p
      };
  }
  return U(l) && U(d) ? {
    x: l,
    y: d,
    width: 0,
    height: 0
  } : U(r) && U(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: c || 0,
    outerRadius: f || s || u || 0,
    clockWise: b
  } : t.viewBox ? t.viewBox : {};
}, s$ = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ j.createElement(He, {
    key: "label-implicit",
    viewBox: r
  }) : Re(t) ? /* @__PURE__ */ j.createElement(He, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ R.isValidElement(t) ? t.type === He ? /* @__PURE__ */ R.cloneElement(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ j.createElement(He, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ne(t) ? /* @__PURE__ */ j.createElement(He, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : dn(t) ? /* @__PURE__ */ j.createElement(He, ii({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, c$ = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = Cw(t), o = bt(i, He).map(function(s, c) {
    return /* @__PURE__ */ R.cloneElement(s, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(c)
    });
  });
  if (!n)
    return o;
  var u = s$(t.label, r || a);
  return [u].concat(KI(o));
};
He.parseViewBox = Cw;
He.renderCallByParent = c$;
var xl, Em;
function l$() {
  if (Em) return xl;
  Em = 1;
  function e(t) {
    var r = t == null ? 0 : t.length;
    return r ? t[r - 1] : void 0;
  }
  return xl = e, xl;
}
var f$ = l$();
const d$ = /* @__PURE__ */ xe(f$);
function ai(e) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ai(e);
}
var p$ = ["valueAccessor"], h$ = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function v$(e) {
  return b$(e) || m$(e) || g$(e) || y$();
}
function y$() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function g$(e, t) {
  if (e) {
    if (typeof e == "string") return Mf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Mf(e, t);
  }
}
function m$(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function b$(e) {
  if (Array.isArray(e)) return Mf(e);
}
function Mf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function ka() {
  return ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ka.apply(this, arguments);
}
function jm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jm(Object(r), !0).forEach(function(n) {
      x$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function x$(e, t, r) {
  return t = w$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w$(e) {
  var t = S$(e, "string");
  return ai(t) == "symbol" ? t : t + "";
}
function S$(e, t) {
  if (ai(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ai(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mm(e, t) {
  if (e == null) return {};
  var r = O$(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function O$(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var _$ = function(t) {
  return Array.isArray(t.value) ? d$(t.value) : t.value;
};
function Jt(e) {
  var t = e.valueAccessor, r = t === void 0 ? _$ : t, n = Mm(e, p$), i = n.data, a = n.dataKey, o = n.clockWise, u = n.id, s = n.textBreakAll, c = Mm(n, h$);
  return !i || !i.length ? null : /* @__PURE__ */ j.createElement(qe, {
    className: "recharts-label-list"
  }, i.map(function(f, l) {
    var d = he(a) ? r(f, l) : Tt(f && f.payload, a), h = he(u) ? {} : {
      id: "".concat(u, "-").concat(l)
    };
    return /* @__PURE__ */ j.createElement(He, ka({}, ce(f, !0), c, h, {
      parentViewBox: f.parentViewBox,
      value: d,
      textBreakAll: s,
      viewBox: He.parseViewBox(he(o) ? f : Cm(Cm({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
Jt.displayName = "LabelList";
function P$(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ j.createElement(Jt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ j.isValidElement(e) || ne(e) ? /* @__PURE__ */ j.createElement(Jt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : dn(e) ? /* @__PURE__ */ j.createElement(Jt, ka({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function A$(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = bt(n, Jt).map(function(o, u) {
    return /* @__PURE__ */ R.cloneElement(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return i;
  var a = P$(e.label, t);
  return [a].concat(v$(i));
}
Jt.renderCallByParent = A$;
function oi(e) {
  "@babel/helpers - typeof";
  return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, oi(e);
}
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, If.apply(this, arguments);
}
function Im(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Im(Object(r), !0).forEach(function(n) {
      T$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Im(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function T$(e, t, r) {
  return t = E$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function E$(e) {
  var t = j$(e, "string");
  return oi(t) == "symbol" ? t : t + "";
}
function j$(e, t) {
  if (oi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (oi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var C$ = function(t, r) {
  var n = gt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, Gi = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, u = t.isExternal, s = t.cornerRadius, c = t.cornerIsExternal, f = s * (u ? 1 : -1) + i, l = Math.asin(s / f) / $a, d = c ? a : a + o * l, h = ze(r, n, f, d), y = ze(r, n, i, d), v = c ? a - o * l : a, p = ze(r, n, f * Math.cos(l * $a), v);
  return {
    center: h,
    circleTangency: y,
    lineTangency: p,
    theta: l
  };
}, Mw = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, u = t.endAngle, s = C$(o, u), c = o + s, f = ze(r, n, a, o), l = ze(r, n, a, c), d = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(s) > 180), ",").concat(+(o > c), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (i > 0) {
    var h = ze(r, n, i, o), y = ze(r, n, i, c);
    d += "L ".concat(y.x, ",").concat(y.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(s) > 180), ",").concat(+(o <= c), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, M$ = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, s = t.cornerIsExternal, c = t.startAngle, f = t.endAngle, l = gt(f - c), d = Gi({
    cx: r,
    cy: n,
    radius: a,
    angle: c,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: s
  }), h = d.circleTangency, y = d.lineTangency, v = d.theta, p = Gi({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: s
  }), b = p.circleTangency, x = p.lineTangency, w = p.theta, S = s ? Math.abs(c - f) : Math.abs(c - f) - v - w;
  if (S < 0)
    return u ? "M ".concat(y.x, ",").concat(y.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : Mw({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: c,
      endAngle: f
    });
  var g = "M ".concat(y.x, ",").concat(y.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(l < 0), ",").concat(b.x, ",").concat(b.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(x.x, ",").concat(x.y, `
  `);
  if (i > 0) {
    var m = Gi({
      cx: r,
      cy: n,
      radius: i,
      angle: c,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), O = m.circleTangency, _ = m.lineTangency, P = m.theta, k = Gi({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: s
    }), T = k.circleTangency, A = k.lineTangency, M = k.theta, C = s ? Math.abs(c - f) : Math.abs(c - f) - P - M;
    if (C < 0 && o === 0)
      return "".concat(g, "L").concat(r, ",").concat(n, "Z");
    g += "L".concat(A.x, ",").concat(A.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(C > 180), ",").concat(+(l > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(_.x, ",").concat(_.y, "Z");
  } else
    g += "L".concat(r, ",").concat(n, "Z");
  return g;
}, I$ = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Iw = function(t) {
  var r = $m($m({}, I$), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, s = r.forceCornerRadius, c = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, d = r.className;
  if (o < a || f === l)
    return null;
  var h = Q("recharts-sector", d), y = o - a, v = xr(u, y, 0, !0), p;
  return v > 0 && Math.abs(f - l) < 360 ? p = M$({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(v, y / 2),
    forceCornerRadius: s,
    cornerIsExternal: c,
    startAngle: f,
    endAngle: l
  }) : p = Mw({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ j.createElement("path", If({}, ce(r, !0), {
    className: h,
    d: p,
    role: "img"
  }));
};
function ui(e) {
  "@babel/helpers - typeof";
  return ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ui(e);
}
function $f() {
  return $f = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $f.apply(this, arguments);
}
function km(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? km(Object(r), !0).forEach(function(n) {
      $$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : km(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $$(e, t, r) {
  return t = k$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function k$(e) {
  var t = R$(e, "string");
  return ui(t) == "symbol" ? t : t + "";
}
function R$(e, t) {
  if (ui(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ui(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Dm = {
  curveBasisClosed: eP,
  curveBasisOpen: tP,
  curveBasis: Q_,
  curveBumpX: L_,
  curveBumpY: B_,
  curveLinearClosed: rP,
  curveLinear: fo,
  curveMonotoneX: nP,
  curveMonotoneY: iP,
  curveNatural: aP,
  curveStep: oP,
  curveStepAfter: sP,
  curveStepBefore: uP
}, Vi = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Pn = function(t) {
  return t.x;
}, An = function(t) {
  return t.y;
}, D$ = function(t, r) {
  if (ne(t))
    return t;
  var n = "curve".concat(co(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Dm["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Dm[n] || fo;
}, N$ = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, u = t.layout, s = t.connectNulls, c = s === void 0 ? !1 : s, f = D$(n, u), l = c ? a.filter(function(v) {
    return Vi(v);
  }) : a, d;
  if (Array.isArray(o)) {
    var h = c ? o.filter(function(v) {
      return Vi(v);
    }) : o, y = l.map(function(v, p) {
      return Rm(Rm({}, v), {}, {
        base: h[p]
      });
    });
    return u === "vertical" ? d = Li().y(An).x1(Pn).x0(function(v) {
      return v.base.x;
    }) : d = Li().x(Pn).y1(An).y0(function(v) {
      return v.base.y;
    }), d.defined(Vi).curve(f), d(y);
  }
  return u === "vertical" && U(o) ? d = Li().y(An).x1(Pn).x0(o) : U(o) ? d = Li().x(Pn).y1(An).y0(o) : d = N0().x(Pn).y(An), d.defined(Vi).curve(f), d(l);
}, Nm = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? N$(t) : i;
  return /* @__PURE__ */ j.createElement("path", $f({}, ce(t, !1), aa(t), {
    className: Q("recharts-curve", r),
    d: o,
    ref: a
  }));
};
const { getOwnPropertyNames: q$, getOwnPropertySymbols: L$ } = Object, { hasOwnProperty: B$ } = Object.prototype;
function Tn(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function En(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    const { cache: a } = i, o = a.get(r), u = a.get(n);
    if (o && u)
      return o === n && u === r;
    a.set(r, n), a.set(n, r);
    const s = e(r, n, i);
    return a.delete(r), a.delete(n), s;
  };
}
function F$(e) {
  return e?.[Symbol.toStringTag];
}
function qm(e) {
  return q$(e).concat(L$(e));
}
const z$ = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  Object.hasOwn || ((e, t) => B$.call(e, t))
);
function Tr(e, t) {
  return e === t || !e && !t && e !== e && t !== t;
}
const W$ = "__v", U$ = "__o", H$ = "_owner", K$ = typeof Float16Array < "u", { getOwnPropertyDescriptor: Lm, keys: Bm } = Object;
function G$(e, t) {
  return e.byteLength === t.byteLength && Ra(new Uint8Array(e), new Uint8Array(t));
}
function V$(e, t, r) {
  let n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function X$(e, t) {
  return e.byteLength === t.byteLength && Ra(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function Y$(e, t) {
  return Tr(e.getTime(), t.getTime());
}
function Fm(e, t, r) {
  return e.name === t.name && e.message === t.message && e.stack === t.stack && r.equals(e.cause, t.cause, "cause", "cause", e, t, r);
}
function Z$(e, t) {
  return e === t;
}
function zm(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const i = new Array(n), a = e.entries();
  let o, u, s = 0;
  for (; (o = a.next()) && !o.done; ) {
    const c = t.entries();
    let f = !1, l = 0;
    for (; (u = c.next()) && !u.done; ) {
      if (i[l]) {
        l++;
        continue;
      }
      const d = o.value, h = u.value;
      if (r.equals(d[0], h[0], s, l, e, t, r) && r.equals(d[1], h[1], d[0], h[0], e, t, r)) {
        f = i[l] = !0;
        break;
      }
      l++;
    }
    if (!f)
      return !1;
    s++;
  }
  return !0;
}
const J$ = Tr;
function Wm(e, t, r) {
  const n = Bm(e);
  let i = n.length;
  if (Bm(t).length !== i)
    return !1;
  for (; i-- > 0; )
    if (!$w(e, t, r, n[i]))
      return !1;
  return !0;
}
function kr(e, t, r) {
  const n = qm(e);
  let i = n.length;
  if (qm(t).length !== i)
    return !1;
  let a, o, u;
  for (; i-- > 0; )
    if (a = n[i], !$w(e, t, r, a) || (o = Lm(e, a), u = Lm(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function Q$(e, t) {
  return Tr(e.valueOf(), t.valueOf());
}
function ek(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Um(e, t, r) {
  const n = e.size;
  if (n !== t.size)
    return !1;
  if (!n)
    return !0;
  const i = new Array(n), a = e.values();
  let o, u;
  for (; (o = a.next()) && !o.done; ) {
    const s = t.values();
    let c = !1, f = 0;
    for (; (u = s.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e, t, r)) {
        c = i[f] = !0;
        break;
      }
      f++;
    }
    if (!c)
      return !1;
  }
  return !0;
}
function Ra(e, t) {
  let r = e.length;
  if (t.length !== r || e.byteOffset !== t.byteOffset)
    return !1;
  if (e instanceof Float64Array || e instanceof Float32Array || K$ && e instanceof Float16Array) {
    for (; r-- > 0; )
      if (e[r] !== t[r] && (e[r] === e[r] || t[r] === t[r]))
        return !1;
    return !0;
  }
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function tk(e, t) {
  return e.href === t.href ? !0 : e.protocol === t.protocol && e.username === t.username && e.password === t.password && e.host === t.host && e.pathname === t.pathname && e.hash === t.hash && rk(e.searchParams, t.searchParams);
}
function rk(e, t) {
  const r = e.toString(), n = t.toString();
  return r === n || Hm(r) === Hm(n);
}
function Hm(e) {
  return e.split("&").sort().join("&");
}
function $w(e, t, r, n) {
  return (n === H$ || n === U$ || n === W$) && (e.$$typeof || t.$$typeof) ? !0 : z$(t, n) && r.equals(e[n], t[n], n, n, e, t, r);
}
const nk = "[object ArrayBuffer]", ik = "[object Arguments]", ak = "[object Boolean]", ok = "[object DataView]", uk = "[object Date]", sk = "[object Error]", ck = "[object Map]", lk = "[object Number]", fk = "[object Object]", dk = "[object RegExp]", pk = "[object Set]", hk = "[object String]", vk = {
  "[object Int8Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Int16Array]": !0,
  "[object Uint16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float16Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0,
  "[object BigInt64Array]": !0,
  "[object BigUint64Array]": !0
}, yk = "[object URL]", gk = Object.prototype.toString;
function mk({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: r, areDatesEqual: n, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: u, areObjectsEqual: s, arePrimitiveWrappersEqual: c, areRegExpsEqual: f, areSetsEqual: l, areTypedArraysEqual: d, areUrlsEqual: h, unknownTagComparators: y }) {
  return function(p, b, x) {
    if (p === b)
      return !0;
    if (p == null || b == null)
      return !1;
    const w = typeof p;
    if (w !== typeof b)
      return !1;
    if (w !== "object")
      return w === "number" ? u(p, b, x) : w === "function" ? a(p, b, x) : !1;
    const S = p.constructor;
    if (S !== b.constructor)
      return !1;
    if (S === Object)
      return s(p, b, x);
    if (Array.isArray(p))
      return t(p, b, x);
    if (S === Date)
      return n(p, b, x);
    if (S === RegExp)
      return f(p, b, x);
    if (S === Map)
      return o(p, b, x);
    if (S === Set)
      return l(p, b, x);
    if (S == null)
      return s(p, b, x);
    const g = gk.call(p);
    if (g === uk)
      return n(p, b, x);
    if (g === dk)
      return f(p, b, x);
    if (g === ck)
      return o(p, b, x);
    if (g === pk)
      return l(p, b, x);
    if (g === fk)
      return typeof p.then != "function" && typeof b.then != "function" && s(p, b, x);
    if (g === yk)
      return h(p, b, x);
    if (g === sk)
      return i(p, b, x);
    if (g === ik)
      return s(p, b, x);
    if (vk[g])
      return d(p, b, x);
    if (g === nk)
      return e(p, b, x);
    if (g === ok)
      return r(p, b, x);
    if (g === ak || g === lk || g === hk)
      return c(p, b, x);
    if (y) {
      let m = y[g];
      if (!m) {
        const O = F$(p);
        O && (m = y[O]);
      }
      if (m)
        return m(p, b, x);
    }
    return !1;
  };
}
function bk({ circular: e, createCustomConfig: t, strict: r }) {
  let n = {
    areArrayBuffersEqual: G$,
    areArraysEqual: r ? kr : V$,
    areDataViewsEqual: X$,
    areDatesEqual: Y$,
    // `Error` subclasses routinely carry their own enumerable properties (`status`, `code`, ...),
    // which the error comparator alone does not see, so it is composed with the object comparator.
    // `name` / `message` / `stack` are own but not enumerable, which is why errors need a
    // comparator of their own rather than being treated as plain objects in the first place.
    areErrorsEqual: r ? Tn(Fm, kr) : Tn(Fm, Wm),
    areFunctionsEqual: Z$,
    areMapsEqual: r ? Tn(zm, kr) : zm,
    areNumbersEqual: J$,
    areObjectsEqual: r ? kr : Wm,
    arePrimitiveWrappersEqual: Q$,
    areRegExpsEqual: ek,
    areSetsEqual: r ? Tn(Um, kr) : Um,
    areTypedArraysEqual: r ? Tn(Ra, kr) : Ra,
    areUrlsEqual: tk,
    unknownTagComparators: void 0
  };
  if (t && (n = Object.assign({}, n, t(n))), e) {
    const i = En(n.areArraysEqual), a = En(n.areErrorsEqual), o = En(n.areMapsEqual), u = En(n.areObjectsEqual), s = En(n.areSetsEqual);
    n = Object.assign({}, n, {
      areArraysEqual: i,
      areErrorsEqual: a,
      areMapsEqual: o,
      areObjectsEqual: u,
      areSetsEqual: s
    });
  }
  return n;
}
function xk(e) {
  return function(t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function wk({ circular: e, comparator: t, createState: r, equals: n, strict: i }) {
  if (r)
    return function(u, s) {
      const { cache: c = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: f } = r();
      return t(u, s, {
        cache: c,
        equals: n,
        meta: f,
        strict: i
      });
    };
  if (e)
    return function(u, s) {
      return t(u, s, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: n,
        meta: void 0,
        strict: i
      });
    };
  const a = {
    cache: void 0,
    equals: n,
    meta: void 0,
    strict: i
  };
  return function(u, s) {
    return t(u, s, a);
  };
}
const Sk = sr();
sr({ strict: !0 });
sr({ circular: !0 });
sr({
  circular: !0,
  strict: !0
});
sr({
  createInternalComparator: () => Tr
});
sr({
  strict: !0,
  createInternalComparator: () => Tr
});
sr({
  circular: !0,
  createInternalComparator: () => Tr
});
sr({
  circular: !0,
  createInternalComparator: () => Tr,
  strict: !0
});
function sr(e = {}) {
  const { circular: t = !1, createInternalComparator: r, createState: n, strict: i = !1 } = e, a = bk(e), o = mk(a), u = r ? r(o) : xk(o);
  return wk({ circular: t, comparator: o, createState: n, equals: u, strict: i });
}
function Ok(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Km(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : Ok(i);
  };
  requestAnimationFrame(n);
}
function kf(e) {
  "@babel/helpers - typeof";
  return kf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kf(e);
}
function _k(e) {
  return Ek(e) || Tk(e) || Ak(e) || Pk();
}
function Pk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ak(e, t) {
  if (e) {
    if (typeof e == "string") return Gm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gm(e, t);
  }
}
function Gm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Tk(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ek(e) {
  if (Array.isArray(e)) return e;
}
function jk() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, u = _k(o), s = u[0], c = u.slice(1);
        if (typeof s == "number") {
          Km(i.bind(null, c), s);
          return;
        }
        i(s), Km(i.bind(null, c));
        return;
      }
      kf(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function si(e) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, si(e);
}
function Vm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vm(Object(r), !0).forEach(function(n) {
      kw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vm(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kw(e, t, r) {
  return t = Ck(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ck(e) {
  var t = Mk(e, "string");
  return si(t) === "symbol" ? t : String(t);
}
function Mk(e, t) {
  if (si(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (si(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ik = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, $k = function(t) {
  return t;
}, kk = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Ln = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Xm(Xm({}, n), {}, kw({}, i, t(i, r[i])));
  }, {});
}, Ym = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(kk(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function Rk(e, t) {
  return qk(e) || Nk(e, t) || Rw(e, t) || Dk();
}
function Dk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nk(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function qk(e) {
  if (Array.isArray(e)) return e;
}
function Lk(e) {
  return zk(e) || Fk(e) || Rw(e) || Bk();
}
function Bk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rw(e, t) {
  if (e) {
    if (typeof e == "string") return Rf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rf(e, t);
  }
}
function Fk(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function zk(e) {
  if (Array.isArray(e)) return Rf(e);
}
function Rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Da = 1e-4, Dw = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, Nw = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, Zm = function(t, r) {
  return function(n) {
    var i = Dw(t, r);
    return Nw(i, n);
  };
}, Wk = function(t, r) {
  return function(n) {
    var i = Dw(t, r), a = [].concat(Lk(i.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return Nw(a, n);
  };
}, Jm = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, u = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, u = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, u = 1;
        break;
      default: {
        var s = r[0].split("(");
        if (s[0] === "cubic-bezier" && s[1].split(")")[0].split(",").length === 4) {
          var c = s[1].split(")")[0].split(",").map(function(p) {
            return parseFloat(p);
          }), f = Rk(c, 4);
          i = f[0], a = f[1], o = f[2], u = f[3];
        }
      }
    }
  var l = Zm(i, o), d = Zm(a, u), h = Wk(i, o), y = function(b) {
    return b > 1 ? 1 : b < 0 ? 0 : b;
  }, v = function(b) {
    for (var x = b > 1 ? 1 : b, w = x, S = 0; S < 8; ++S) {
      var g = l(w) - x, m = h(w);
      if (Math.abs(g - x) < Da || m < Da)
        return d(w);
      w = y(w - g / m);
    }
    return d(w);
  };
  return v.isStepper = !1, v;
}, Uk = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, u = o === void 0 ? 17 : o, s = function(f, l, d) {
    var h = -(f - l) * n, y = d * a, v = d + (h - y) * u / 1e3, p = d * u / 1e3 + f;
    return Math.abs(p - l) < Da && Math.abs(v) < Da ? [l, 0] : [p, v];
  };
  return s.isStepper = !0, s.dt = u, s;
}, Hk = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Jm(i);
      case "spring":
        return Uk();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Jm(i);
    }
  return typeof i == "function" ? i : null;
};
function ci(e) {
  "@babel/helpers - typeof";
  return ci = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ci(e);
}
function Qm(e) {
  return Vk(e) || Gk(e) || qw(e) || Kk();
}
function Kk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gk(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Vk(e) {
  if (Array.isArray(e)) return Nf(e);
}
function eb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eb(Object(r), !0).forEach(function(n) {
      Df(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Df(e, t, r) {
  return t = Xk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xk(e) {
  var t = Yk(e, "string");
  return ci(t) === "symbol" ? t : String(t);
}
function Yk(e, t) {
  if (ci(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ci(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zk(e, t) {
  return eR(e) || Qk(e, t) || qw(e, t) || Jk();
}
function Jk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qw(e, t) {
  if (e) {
    if (typeof e == "string") return Nf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Nf(e, t);
  }
}
function Nf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Qk(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function eR(e) {
  if (Array.isArray(e)) return e;
}
var Na = function(t, r, n) {
  return t + (r - t) * n;
}, qf = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, tR = function e(t, r, n) {
  var i = Ln(function(a, o) {
    if (qf(o)) {
      var u = t(o.from, o.to, o.velocity), s = Zk(u, 2), c = s[0], f = s[1];
      return Fe(Fe({}, o), {}, {
        from: c,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? Ln(function(a, o) {
    return qf(o) ? Fe(Fe({}, o), {}, {
      velocity: Na(o.velocity, i[a].velocity, n),
      from: Na(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const rR = function(e, t, r, n, i) {
  var a = Ik(e, t), o = a.reduce(function(p, b) {
    return Fe(Fe({}, p), {}, Df({}, b, [e[b], t[b]]));
  }, {}), u = a.reduce(function(p, b) {
    return Fe(Fe({}, p), {}, Df({}, b, {
      from: e[b],
      velocity: 0,
      to: t[b]
    }));
  }, {}), s = -1, c, f, l = function() {
    return null;
  }, d = function() {
    return Ln(function(b, x) {
      return x.from;
    }, u);
  }, h = function() {
    return !Object.values(u).filter(qf).length;
  }, y = function(b) {
    c || (c = b);
    var x = b - c, w = x / r.dt;
    u = tR(r, u, w), i(Fe(Fe(Fe({}, e), t), d())), c = b, h() || (s = requestAnimationFrame(l));
  }, v = function(b) {
    f || (f = b);
    var x = (b - f) / n, w = Ln(function(g, m) {
      return Na.apply(void 0, Qm(m).concat([r(x)]));
    }, o);
    if (i(Fe(Fe(Fe({}, e), t), w)), x < 1)
      s = requestAnimationFrame(l);
    else {
      var S = Ln(function(g, m) {
        return Na.apply(void 0, Qm(m).concat([r(1)]));
      }, o);
      i(Fe(Fe(Fe({}, e), t), S));
    }
  };
  return l = r.isStepper ? y : v, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(s);
    };
  };
};
function Jr(e) {
  "@babel/helpers - typeof";
  return Jr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Jr(e);
}
var nR = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function iR(e, t) {
  if (e == null) return {};
  var r = aR(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aR(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function wl(e) {
  return cR(e) || sR(e) || uR(e) || oR();
}
function oR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uR(e, t) {
  if (e) {
    if (typeof e == "string") return Lf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Lf(e, t);
  }
}
function sR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function cR(e) {
  if (Array.isArray(e)) return Lf(e);
}
function Lf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function tb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tb(Object(r), !0).forEach(function(n) {
      In(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function In(e, t, r) {
  return t = Lw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Lw(n.key), n);
  }
}
function dR(e, t, r) {
  return t && fR(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Lw(e) {
  var t = pR(e, "string");
  return Jr(t) === "symbol" ? t : String(t);
}
function pR(e, t) {
  if (Jr(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Jr(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Bf(e, t);
}
function Bf(e, t) {
  return Bf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bf(e, t);
}
function vR(e) {
  var t = yR();
  return function() {
    var n = qa(e), i;
    if (t) {
      var a = qa(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Ff(this, i);
  };
}
function Ff(e, t) {
  if (t && (Jr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zf(e);
}
function zf(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yR() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function qa(e) {
  return qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qa(e);
}
var Qt = /* @__PURE__ */ function(e) {
  hR(r, e);
  var t = vR(r);
  function r(n, i) {
    var a;
    lR(this, r), a = t.call(this, n, i);
    var o = a.props, u = o.isActive, s = o.attributeName, c = o.from, f = o.to, l = o.steps, d = o.children, h = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(zf(a)), a.changeStyle = a.changeStyle.bind(zf(a)), !u || h <= 0)
      return a.state = {
        style: {}
      }, typeof d == "function" && (a.state = {
        style: f
      }), Ff(a);
    if (l && l.length)
      a.state = {
        style: l[0].style
      };
    else if (c) {
      if (typeof d == "function")
        return a.state = {
          style: c
        }, Ff(a);
      a.state = {
        style: s ? In({}, s, c) : c
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return dR(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, u = a.canBegin, s = a.attributeName, c = a.shouldReAnimate, f = a.to, l = a.from, d = this.state.style;
      if (u) {
        if (!o) {
          var h = {
            style: s ? In({}, s, f) : f
          };
          this.state && d && (s && d[s] !== f || !s && d !== f) && this.setState(h);
          return;
        }
        if (!(Sk(i.to, f) && i.canBegin && i.isActive)) {
          var y = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var v = y || c ? l : i.to;
          if (this.state && d) {
            var p = {
              style: s ? In({}, s, v) : v
            };
            (s && d[s] !== v || !s && d !== v) && this.setState(p);
          }
          this.runAnimation(ht(ht({}, this.props), {}, {
            from: v,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, u = i.to, s = i.duration, c = i.easing, f = i.begin, l = i.onAnimationEnd, d = i.onAnimationStart, h = rR(o, u, Hk(c), s, this.changeStyle), y = function() {
        a.stopJSAnimation = h();
      };
      this.manager.start([d, f, y, s, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, u = i.begin, s = i.onAnimationStart, c = o[0], f = c.style, l = c.duration, d = l === void 0 ? 0 : l, h = function(v, p, b) {
        if (b === 0)
          return v;
        var x = p.duration, w = p.easing, S = w === void 0 ? "ease" : w, g = p.style, m = p.properties, O = p.onAnimationEnd, _ = b > 0 ? o[b - 1] : p, P = m || Object.keys(g);
        if (typeof S == "function" || S === "spring")
          return [].concat(wl(v), [a.runJSAnimation.bind(a, {
            from: _.style,
            to: g,
            duration: x,
            easing: S
          }), x]);
        var k = Ym(P, x, S), T = ht(ht(ht({}, _.style), g), {}, {
          transition: k
        });
        return [].concat(wl(v), [T, x, O]).filter($k);
      };
      return this.manager.start([s].concat(wl(o.reduce(h, [f, Math.max(d, u)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = jk());
      var a = i.begin, o = i.duration, u = i.attributeName, s = i.to, c = i.easing, f = i.onAnimationStart, l = i.onAnimationEnd, d = i.steps, h = i.children, y = this.manager;
      if (this.unSubscribe = y.subscribe(this.handleStyleChange), typeof c == "function" || typeof h == "function" || c === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var v = u ? In({}, u, s) : s, p = Ym(Object.keys(v), o, c);
      y.start([f, a, ht(ht({}, v), {}, {
        transition: p
      }), o, l]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var u = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var s = iR(i, nR), c = R.Children.count(a), f = this.state.style;
      if (typeof a == "function")
        return a(f);
      if (!u || c === 0 || o <= 0)
        return a;
      var l = function(h) {
        var y = h.props, v = y.style, p = v === void 0 ? {} : v, b = y.className, x = /* @__PURE__ */ R.cloneElement(h, ht(ht({}, s), {}, {
          style: ht(ht({}, p), f),
          className: b
        }));
        return x;
      };
      return c === 1 ? l(R.Children.only(a)) : /* @__PURE__ */ j.createElement("div", null, R.Children.map(a, function(d) {
        return l(d);
      }));
    }
  }]), r;
}(R.PureComponent);
Qt.displayName = "Animate";
Qt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Qt.propTypes = {
  from: de.oneOfType([de.object, de.string]),
  to: de.oneOfType([de.object, de.string]),
  attributeName: de.string,
  // animation duration
  duration: de.number,
  begin: de.number,
  easing: de.oneOfType([de.string, de.func]),
  steps: de.arrayOf(de.shape({
    duration: de.number.isRequired,
    style: de.object.isRequired,
    easing: de.oneOfType([de.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), de.func]),
    // transition css properties(dash case), optional
    properties: de.arrayOf("string"),
    onAnimationEnd: de.func
  })),
  children: de.oneOfType([de.node, de.func]),
  isActive: de.bool,
  canBegin: de.bool,
  onAnimationEnd: de.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: de.bool,
  onAnimationStart: de.func,
  onAnimationReStart: de.func
};
function li(e) {
  "@babel/helpers - typeof";
  return li = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, li(e);
}
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, La.apply(this, arguments);
}
function gR(e, t) {
  return wR(e) || xR(e, t) || bR(e, t) || mR();
}
function mR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bR(e, t) {
  if (e) {
    if (typeof e == "string") return rb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return rb(e, t);
  }
}
function rb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function wR(e) {
  if (Array.isArray(e)) return e;
}
function nb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ib(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nb(Object(r), !0).forEach(function(n) {
      SR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SR(e, t, r) {
  return t = OR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OR(e) {
  var t = _R(e, "string");
  return li(t) == "symbol" ? t : t + "";
}
function _R(e, t) {
  if (li(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (li(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ab = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, s = n >= 0 ? 1 : -1, c = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && a instanceof Array) {
    for (var l = [0, 0, 0, 0], d = 0, h = 4; d < h; d++)
      l[d] = a[d] > o ? o : a[d];
    f = "M".concat(t, ",").concat(r + u * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(c, ",").concat(t + s * l[0], ",").concat(r)), f += "L ".concat(t + n - s * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(c, `,
        `).concat(t + n, ",").concat(r + u * l[1])), f += "L ".concat(t + n, ",").concat(r + i - u * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(c, `,
        `).concat(t + n - s * l[2], ",").concat(r + i)), f += "L ".concat(t + s * l[3], ",").concat(r + i), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(c, `,
        `).concat(t, ",").concat(r + i - u * l[3])), f += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var y = Math.min(o, a);
    f = "M ".concat(t, ",").concat(r + u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + s * y, ",").concat(r, `
            L `).concat(t + n - s * y, ",").concat(r, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n, ",").concat(r + u * y, `
            L `).concat(t + n, ",").concat(r + i - u * y, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t + n - s * y, ",").concat(r + i, `
            L `).concat(t + s * y, ",").concat(r + i, `
            A `).concat(y, ",").concat(y, ",0,0,").concat(c, ",").concat(t, ",").concat(r + i - u * y, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return f;
}, PR = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, u = r.width, s = r.height;
  if (Math.abs(u) > 0 && Math.abs(s) > 0) {
    var c = Math.min(a, a + u), f = Math.max(a, a + u), l = Math.min(o, o + s), d = Math.max(o, o + s);
    return n >= c && n <= f && i >= l && i <= d;
  }
  return !1;
}, AR = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, op = function(t) {
  var r = ib(ib({}, AR), t), n = R.useRef(), i = R.useState(-1), a = gR(i, 2), o = a[0], u = a[1];
  R.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && u(S);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.width, l = r.height, d = r.radius, h = r.className, y = r.animationEasing, v = r.animationDuration, p = r.animationBegin, b = r.isAnimationActive, x = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var w = Q("recharts-rectangle", h);
  return x ? /* @__PURE__ */ j.createElement(Qt, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    to: {
      width: f,
      height: l,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: y,
    isActive: x
  }, function(S) {
    var g = S.width, m = S.height, O = S.x, _ = S.y;
    return /* @__PURE__ */ j.createElement(Qt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      isActive: b,
      easing: y
    }, /* @__PURE__ */ j.createElement("path", La({}, ce(r, !0), {
      className: w,
      d: ab(O, _, g, m, d),
      ref: n
    })));
  }) : /* @__PURE__ */ j.createElement("path", La({}, ce(r, !0), {
    className: w,
    d: ab(s, c, f, l, d)
  }));
};
function Wf() {
  return Wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wf.apply(this, arguments);
}
var Bw = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = Q("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ j.createElement("circle", Wf({}, ce(t, !1), aa(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function fi(e) {
  "@babel/helpers - typeof";
  return fi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fi(e);
}
var TR = ["x", "y", "top", "left", "width", "height", "className"];
function Uf() {
  return Uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Uf.apply(this, arguments);
}
function ob(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ER(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ob(Object(r), !0).forEach(function(n) {
      jR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ob(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jR(e, t, r) {
  return t = CR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CR(e) {
  var t = MR(e, "string");
  return fi(t) == "symbol" ? t : t + "";
}
function MR(e, t) {
  if (fi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (fi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function IR(e, t) {
  if (e == null) return {};
  var r = $R(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $R(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var kR = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, RR = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, u = o === void 0 ? 0 : o, s = t.left, c = s === void 0 ? 0 : s, f = t.width, l = f === void 0 ? 0 : f, d = t.height, h = d === void 0 ? 0 : d, y = t.className, v = IR(t, TR), p = ER({
    x: n,
    y: a,
    top: u,
    left: c,
    width: l,
    height: h
  }, v);
  return !U(n) || !U(a) || !U(l) || !U(h) || !U(u) || !U(c) ? null : /* @__PURE__ */ j.createElement("path", Uf({}, ce(p, !0), {
    className: Q("recharts-cross", y),
    d: kR(n, a, l, h, u, c)
  }));
}, Sl, ub;
function DR() {
  if (ub) return Sl;
  ub = 1;
  var e = ox(), t = e(Object.getPrototypeOf, Object);
  return Sl = t, Sl;
}
var Ol, sb;
function NR() {
  if (sb) return Ol;
  sb = 1;
  var e = Ut(), t = DR(), r = Ht(), n = "[object Object]", i = Function.prototype, a = Object.prototype, o = i.toString, u = a.hasOwnProperty, s = o.call(Object);
  function c(f) {
    if (!r(f) || e(f) != n)
      return !1;
    var l = t(f);
    if (l === null)
      return !0;
    var d = u.call(l, "constructor") && l.constructor;
    return typeof d == "function" && d instanceof d && o.call(d) == s;
  }
  return Ol = c, Ol;
}
var qR = NR();
const LR = /* @__PURE__ */ xe(qR);
var _l, cb;
function BR() {
  if (cb) return _l;
  cb = 1;
  var e = Ut(), t = Ht(), r = "[object Boolean]";
  function n(i) {
    return i === !0 || i === !1 || t(i) && e(i) == r;
  }
  return _l = n, _l;
}
var FR = BR();
const zR = /* @__PURE__ */ xe(FR);
function di(e) {
  "@babel/helpers - typeof";
  return di = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, di(e);
}
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ba.apply(this, arguments);
}
function WR(e, t) {
  return GR(e) || KR(e, t) || HR(e, t) || UR();
}
function UR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HR(e, t) {
  if (e) {
    if (typeof e == "string") return lb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lb(e, t);
  }
}
function lb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function KR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function GR(e) {
  if (Array.isArray(e)) return e;
}
function fb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function db(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fb(Object(r), !0).forEach(function(n) {
      VR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VR(e, t, r) {
  return t = XR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XR(e) {
  var t = YR(e, "string");
  return di(t) == "symbol" ? t : t + "";
}
function YR(e, t) {
  if (di(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (di(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var pb = function(t, r, n, i, a) {
  var o = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, ZR = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, JR = function(t) {
  var r = db(db({}, ZR), t), n = R.useRef(), i = R.useState(-1), a = WR(i, 2), o = a[0], u = a[1];
  R.useEffect(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && u(w);
      } catch {
      }
  }, []);
  var s = r.x, c = r.y, f = r.upperWidth, l = r.lowerWidth, d = r.height, h = r.className, y = r.animationEasing, v = r.animationDuration, p = r.animationBegin, b = r.isUpdateAnimationActive;
  if (s !== +s || c !== +c || f !== +f || l !== +l || d !== +d || f === 0 && l === 0 || d === 0)
    return null;
  var x = Q("recharts-trapezoid", h);
  return b ? /* @__PURE__ */ j.createElement(Qt, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: s,
      y: c
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: d,
      x: s,
      y: c
    },
    duration: v,
    animationEasing: y,
    isActive: b
  }, function(w) {
    var S = w.upperWidth, g = w.lowerWidth, m = w.height, O = w.x, _ = w.y;
    return /* @__PURE__ */ j.createElement(Qt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: p,
      duration: v,
      easing: y
    }, /* @__PURE__ */ j.createElement("path", Ba({}, ce(r, !0), {
      className: x,
      d: pb(O, _, S, g, m),
      ref: n
    })));
  }) : /* @__PURE__ */ j.createElement("g", null, /* @__PURE__ */ j.createElement("path", Ba({}, ce(r, !0), {
    className: x,
    d: pb(s, c, f, l, d)
  })));
}, QR = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function pi(e) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pi(e);
}
function eD(e, t) {
  if (e == null) return {};
  var r = tD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function hb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hb(Object(r), !0).forEach(function(n) {
      rD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rD(e, t, r) {
  return t = nD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nD(e) {
  var t = iD(e, "string");
  return pi(t) == "symbol" ? t : t + "";
}
function iD(e, t) {
  if (pi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (pi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aD(e, t) {
  return Fa(Fa({}, t), e);
}
function oD(e, t) {
  return e === "symbols";
}
function vb(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ j.createElement(op, r);
    case "trapezoid":
      return /* @__PURE__ */ j.createElement(JR, r);
    case "sector":
      return /* @__PURE__ */ j.createElement(Iw, r);
    case "symbols":
      if (oD(t))
        return /* @__PURE__ */ j.createElement(_d, r);
      break;
    default:
      return null;
  }
}
function uD(e) {
  return /* @__PURE__ */ R.isValidElement(e) ? e.props : e;
}
function sD(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? aD : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, u = e.isActive, s = eD(e, QR), c;
  if (/* @__PURE__ */ R.isValidElement(t))
    c = /* @__PURE__ */ R.cloneElement(t, Fa(Fa({}, s), uD(t)));
  else if (ne(t))
    c = t(s);
  else if (LR(t) && !zR(t)) {
    var f = i(t, s);
    c = /* @__PURE__ */ j.createElement(vb, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = s;
    c = /* @__PURE__ */ j.createElement(vb, {
      shapeType: r,
      elementProps: l
    });
  }
  return u ? /* @__PURE__ */ j.createElement(qe, {
    className: o
  }, c) : c;
}
function Eo(e, t) {
  return t != null && "trapezoids" in e.props;
}
function jo(e, t) {
  return t != null && "sectors" in e.props;
}
function hi(e, t) {
  return t != null && "points" in e.props;
}
function cD(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function lD(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function fD(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function dD(e, t) {
  var r;
  return Eo(e, t) ? r = cD : jo(e, t) ? r = lD : hi(e, t) && (r = fD), r;
}
function pD(e, t) {
  var r;
  return Eo(e, t) ? r = "trapezoids" : jo(e, t) ? r = "sectors" : hi(e, t) && (r = "points"), r;
}
function hD(e, t) {
  if (Eo(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (jo(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return hi(e, t) ? t.payload : {};
}
function vD(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = pD(r, t), a = hD(r, t), o = n.filter(function(s, c) {
    var f = rp(a, s), l = r.props[i].filter(function(y) {
      var v = dD(r, t);
      return v(y, t);
    }), d = r.props[i].indexOf(l[l.length - 1]), h = c === d;
    return f && h;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var Pl, yb;
function yD() {
  if (yb) return Pl;
  yb = 1;
  var e = Math.ceil, t = Math.max;
  function r(n, i, a, o) {
    for (var u = -1, s = t(e((i - n) / (a || 1)), 0), c = Array(s); s--; )
      c[o ? s : ++u] = n, n += a;
    return c;
  }
  return Pl = r, Pl;
}
var Al, gb;
function Fw() {
  if (gb) return Al;
  gb = 1;
  var e = Sx(), t = 1 / 0, r = 17976931348623157e292;
  function n(i) {
    if (!i)
      return i === 0 ? i : 0;
    if (i = e(i), i === t || i === -t) {
      var a = i < 0 ? -1 : 1;
      return a * r;
    }
    return i === i ? i : 0;
  }
  return Al = n, Al;
}
var Tl, mb;
function gD() {
  if (mb) return Tl;
  mb = 1;
  var e = yD(), t = yo(), r = Fw();
  function n(i) {
    return function(a, o, u) {
      return u && typeof u != "number" && t(a, o, u) && (o = u = void 0), a = r(a), o === void 0 ? (o = a, a = 0) : o = r(o), u = u === void 0 ? a < o ? 1 : -1 : r(u), e(a, o, u, i);
    };
  }
  return Tl = n, Tl;
}
var El, bb;
function mD() {
  if (bb) return El;
  bb = 1;
  var e = gD(), t = e();
  return El = t, El;
}
var bD = mD();
const za = /* @__PURE__ */ xe(bD);
function vi(e) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vi(e);
}
function xb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xb(Object(r), !0).forEach(function(n) {
      zw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zw(e, t, r) {
  return t = xD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function xD(e) {
  var t = wD(e, "string");
  return vi(t) == "symbol" ? t : t + "";
}
function wD(e, t) {
  if (vi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (vi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var SD = ["Webkit", "Moz", "O", "ms"], OD = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = SD.reduce(function(a, o) {
    return wb(wb({}, a), {}, zw({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Qr(e) {
  "@babel/helpers - typeof";
  return Qr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qr(e);
}
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wa.apply(this, arguments);
}
function Sb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sb(Object(r), !0).forEach(function(n) {
      Qe(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _D(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ob(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Uw(n.key), n);
  }
}
function PD(e, t, r) {
  return t && Ob(e.prototype, t), r && Ob(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function AD(e, t, r) {
  return t = Ua(t), TD(e, Ww() ? Reflect.construct(t, r || [], Ua(e).constructor) : t.apply(e, r));
}
function TD(e, t) {
  if (t && (Qr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ED(e);
}
function ED(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ww() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ww = function() {
    return !!e;
  })();
}
function Ua(e) {
  return Ua = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ua(e);
}
function jD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hf(e, t);
}
function Hf(e, t) {
  return Hf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hf(e, t);
}
function Qe(e, t, r) {
  return t = Uw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Uw(e) {
  var t = CD(e, "string");
  return Qr(t) == "symbol" ? t : t + "";
}
function CD(e, t) {
  if (Qr(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Qr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var MD = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var s = r.length, c = Nn().domain(za(0, s)).range([a, a + o - u]), f = c.domain().map(function(l) {
    return c(l);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: c(n),
    endX: c(i),
    scale: c,
    scaleValues: f
  };
}, _b = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, en = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return _D(this, t), n = AD(this, t, [r]), Qe(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Qe(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Qe(n, "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, u = i.startIndex;
        o?.({
          endIndex: a,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), Qe(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Qe(n, "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), Qe(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), Qe(n, "handleSlideDragStart", function(i) {
      var a = _b(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(n, "startX"),
      endX: n.handleTravellerDragStart.bind(n, "endX")
    }, n.state = {}, n;
  }
  return jD(t, e), PD(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, u = this.props, s = u.gap, c = u.data, f = c.length - 1, l = Math.min(i, a), d = Math.max(i, a), h = t.getIndexInRange(o, l), y = t.getIndexInRange(o, d);
      return {
        startIndex: h - h % s,
        endIndex: y === f ? f : y - y % s
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, u = i.dataKey, s = Tt(a[n], u, n);
      return ne(o) ? o(s, n) : s;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, o = i.startX, u = i.endX, s = this.props, c = s.x, f = s.width, l = s.travellerWidth, d = s.startIndex, h = s.endIndex, y = s.onChange, v = n.pageX - a;
      v > 0 ? v = Math.min(v, c + f - l - u, c + f - l - o) : v < 0 && (v = Math.max(v, c - o, c - u));
      var p = this.getIndex({
        startX: o + v,
        endX: u + v
      });
      (p.startIndex !== d || p.endIndex !== h) && y && y(p), this.setState({
        startX: o + v,
        endX: u + v,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = _b(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, u = i.endX, s = i.startX, c = this.state[o], f = this.props, l = f.x, d = f.width, h = f.travellerWidth, y = f.onChange, v = f.gap, p = f.data, b = {
        startX: this.state.startX,
        endX: this.state.endX
      }, x = n.pageX - a;
      x > 0 ? x = Math.min(x, l + d - h - c) : x < 0 && (x = Math.max(x, l - c)), b[o] = c + x;
      var w = this.getIndex(b), S = w.startIndex, g = w.endIndex, m = function() {
        var _ = p.length - 1;
        return o === "startX" && (u > s ? S % v === 0 : g % v === 0) || u < s && g === _ || o === "endX" && (u > s ? g % v === 0 : S % v === 0) || u > s && g === _;
      };
      this.setState(Qe(Qe({}, o, c + x), "brushMoveStartX", n.pageX), function() {
        y && m() && y(w);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, u = o.scaleValues, s = o.startX, c = o.endX, f = this.state[i], l = u.indexOf(f);
      if (l !== -1) {
        var d = l + n;
        if (!(d === -1 || d >= u.length)) {
          var h = u[d];
          i === "startX" && h >= c || i === "endX" && h <= s || this.setState(Qe({}, i, h), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.fill, c = n.stroke;
      return /* @__PURE__ */ j.createElement("rect", {
        stroke: c,
        fill: s,
        x: i,
        y: a,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.data, c = n.children, f = n.padding, l = R.Children.only(c);
      return l ? /* @__PURE__ */ j.cloneElement(l, {
        x: i,
        y: a,
        width: o,
        height: u,
        margin: f,
        compact: !0,
        data: s
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, o, u = this, s = this.props, c = s.y, f = s.travellerWidth, l = s.height, d = s.traveller, h = s.ariaLabel, y = s.data, v = s.startIndex, p = s.endIndex, b = Math.max(n, this.props.x), x = jl(jl({}, ce(this.props, !1)), {}, {
        x: b,
        y: c,
        width: f,
        height: l
      }), w = h || "Min value: ".concat((a = y[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = y[p]) === null || o === void 0 ? void 0 : o.name);
      return /* @__PURE__ */ j.createElement(qe, {
        tabIndex: 0,
        role: "slider",
        "aria-label": w,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(g) {
          ["ArrowLeft", "ArrowRight"].includes(g.key) && (g.preventDefault(), g.stopPropagation(), u.handleTravellerMoveKeyboard(g.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          u.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          u.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(d, x));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, u = a.height, s = a.stroke, c = a.travellerWidth, f = Math.min(n, i) + c, l = Math.max(Math.abs(i - n) - c, 0);
      return /* @__PURE__ */ j.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: s,
        fillOpacity: 0.2,
        x: f,
        y: o,
        width: l,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, u = n.height, s = n.travellerWidth, c = n.stroke, f = this.state, l = f.startX, d = f.endX, h = 5, y = {
        pointerEvents: "none",
        fill: c
      };
      return /* @__PURE__ */ j.createElement(qe, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ j.createElement(ga, Wa({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, d) - h,
        y: o + u / 2
      }, y), this.getTextOfTick(i)), /* @__PURE__ */ j.createElement(ga, Wa({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, d) + s + h,
        y: o + u / 2
      }, y), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, u = n.x, s = n.y, c = n.width, f = n.height, l = n.alwaysShowText, d = this.state, h = d.startX, y = d.endX, v = d.isTextActive, p = d.isSlideMoving, b = d.isTravellerMoving, x = d.isTravellerFocused;
      if (!i || !i.length || !U(u) || !U(s) || !U(c) || !U(f) || c <= 0 || f <= 0)
        return null;
      var w = Q("recharts-brush", a), S = j.Children.count(o) === 1, g = OD("userSelect", "none");
      return /* @__PURE__ */ j.createElement(qe, {
        className: w,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: g
      }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(h, y), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(y, "endX"), (v || p || b || x || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, u = n.height, s = n.stroke, c = Math.floor(a + u / 2) - 1;
      return /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: u,
        fill: s,
        stroke: "none"
      }), /* @__PURE__ */ j.createElement("line", {
        x1: i + 1,
        y1: c,
        x2: i + o - 1,
        y2: c,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ j.createElement("line", {
        x1: i + 1,
        y1: c + 2,
        x2: i + o - 1,
        y2: c + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ j.isValidElement(n) ? a = /* @__PURE__ */ j.cloneElement(n, i) : ne(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, u = n.x, s = n.travellerWidth, c = n.updateId, f = n.startIndex, l = n.endIndex;
      if (a !== i.prevData || c !== i.prevUpdateId)
        return jl({
          prevData: a,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o
        }, a && a.length ? MD({
          data: a,
          width: o,
          x: u,
          travellerWidth: s,
          startIndex: f,
          endIndex: l
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || u !== i.prevX || s !== i.prevTravellerWidth)) {
        i.scale.range([u, u + o - s]);
        var d = i.scale.domain().map(function(h) {
          return i.scale(h);
        });
        return {
          prevData: a,
          prevTravellerWidth: s,
          prevUpdateId: c,
          prevX: u,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
        var s = Math.floor((o + u) / 2);
        n[s] > i ? u = s : o = s;
      }
      return i >= n[u] ? u : o;
    }
  }]);
}(R.PureComponent);
Qe(en, "displayName", "Brush");
Qe(en, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var Cl, Pb;
function ID() {
  if (Pb) return Cl;
  Pb = 1;
  var e = Md();
  function t(r, n) {
    var i;
    return e(r, function(a, o, u) {
      return i = n(a, o, u), !i;
    }), !!i;
  }
  return Cl = t, Cl;
}
var Ml, Ab;
function $D() {
  if (Ab) return Ml;
  Ab = 1;
  var e = Q0(), t = ar(), r = ID(), n = Ze(), i = yo();
  function a(o, u, s) {
    var c = n(o) ? e : r;
    return s && i(o, u, s) && (u = void 0), c(o, t(u, 3));
  }
  return Ml = a, Ml;
}
var kD = $D();
const RD = /* @__PURE__ */ xe(kD);
var Pt = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, Il, Tb;
function DD() {
  if (Tb) return Il;
  Tb = 1;
  var e = gx();
  function t(r, n, i) {
    n == "__proto__" && e ? e(r, n, {
      configurable: !0,
      enumerable: !0,
      value: i,
      writable: !0
    }) : r[n] = i;
  }
  return Il = t, Il;
}
var $l, Eb;
function ND() {
  if (Eb) return $l;
  Eb = 1;
  var e = DD(), t = vx(), r = ar();
  function n(i, a) {
    var o = {};
    return a = r(a, 3), t(i, function(u, s, c) {
      e(o, s, a(u, s, c));
    }), o;
  }
  return $l = n, $l;
}
var qD = ND();
const LD = /* @__PURE__ */ xe(qD);
var kl, jb;
function BD() {
  if (jb) return kl;
  jb = 1;
  function e(t, r) {
    for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
      if (!r(t[n], n, t))
        return !1;
    return !0;
  }
  return kl = e, kl;
}
var Rl, Cb;
function FD() {
  if (Cb) return Rl;
  Cb = 1;
  var e = Md();
  function t(r, n) {
    var i = !0;
    return e(r, function(a, o, u) {
      return i = !!n(a, o, u), i;
    }), i;
  }
  return Rl = t, Rl;
}
var Dl, Mb;
function zD() {
  if (Mb) return Dl;
  Mb = 1;
  var e = BD(), t = FD(), r = ar(), n = Ze(), i = yo();
  function a(o, u, s) {
    var c = n(o) ? e : t;
    return s && i(o, u, s) && (u = void 0), c(o, r(u, 3));
  }
  return Dl = a, Dl;
}
var WD = zD();
const Hw = /* @__PURE__ */ xe(WD);
var UD = ["x", "y"];
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function Kf() {
  return Kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kf.apply(this, arguments);
}
function Ib(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ib(Object(r), !0).forEach(function(n) {
      HD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ib(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HD(e, t, r) {
  return t = KD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KD(e) {
  var t = GD(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function GD(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (yi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VD(e, t) {
  if (e == null) return {};
  var r = XD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function XD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function YD(e, t) {
  var r = e.x, n = e.y, i = VD(e, UD), a = "".concat(r), o = parseInt(a, 10), u = "".concat(n), s = parseInt(u, 10), c = "".concat(t.height || i.height), f = parseInt(c, 10), l = "".concat(t.width || i.width), d = parseInt(l, 10);
  return jn(jn(jn(jn(jn({}, t), i), o ? {
    x: o
  } : {}), s ? {
    y: s
  } : {}), {}, {
    height: f,
    width: d,
    name: t.name,
    radius: t.radius
  });
}
function $b(e) {
  return /* @__PURE__ */ j.createElement(sD, Kf({
    shapeType: "rectangle",
    propTransformer: YD,
    activeClassName: "recharts-active-bar"
  }, e));
}
var ZD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || Sr(), r);
  };
}, JD = ["value", "background"], Kw;
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function QD(e, t) {
  if (e == null) return {};
  var r = eN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function eN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ha.apply(this, arguments);
}
function kb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kb(Object(r), !0).forEach(function(n) {
      Yt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Rb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Vw(n.key), n);
  }
}
function rN(e, t, r) {
  return t && Rb(e.prototype, t), r && Rb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nN(e, t, r) {
  return t = Ka(t), iN(e, Gw() ? Reflect.construct(t, r || [], Ka(e).constructor) : t.apply(e, r));
}
function iN(e, t) {
  if (t && (tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return aN(e);
}
function aN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gw() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gw = function() {
    return !!e;
  })();
}
function Ka(e) {
  return Ka = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ka(e);
}
function oN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gf(e, t);
}
function Gf(e, t) {
  return Gf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gf(e, t);
}
function Yt(e, t, r) {
  return t = Vw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vw(e) {
  var t = uN(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function uN(e, t) {
  if (tn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Er = /* @__PURE__ */ function(e) {
  function t() {
    var r;
    tN(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = nN(this, t, [].concat(i)), Yt(r, "state", {
      isAnimationFinished: !1
    }), Yt(r, "id", so("recharts-bar-")), Yt(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), o && o();
    }), Yt(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), o && o();
    }), r;
  }
  return oN(t, e), rN(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.shape, u = a.dataKey, s = a.activeIndex, c = a.activeBar, f = ce(this.props, !1);
      return n && n.map(function(l, d) {
        var h = d === s, y = h ? c : o, v = Ce(Ce(Ce({}, f), l), {}, {
          isActive: h,
          option: y,
          index: d,
          dataKey: u,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ j.createElement(qe, Ha({
          className: "recharts-bar-rectangle"
        }, oa(i.props, l, d), {
          key: "rectangle-".concat(l?.x, "-").concat(l?.y, "-").concat(l?.value)
        }), /* @__PURE__ */ j.createElement($b, v));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.layout, u = i.isAnimationActive, s = i.animationBegin, c = i.animationDuration, f = i.animationEasing, l = i.animationId, d = this.state.prevData;
      return /* @__PURE__ */ j.createElement(Qt, {
        begin: s,
        duration: c,
        isActive: u,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var y = h.t, v = a.map(function(p, b) {
          var x = d && d[b];
          if (x) {
            var w = Mr(x.x, p.x), S = Mr(x.y, p.y), g = Mr(x.width, p.width), m = Mr(x.height, p.height);
            return Ce(Ce({}, p), {}, {
              x: w(y),
              y: S(y),
              width: g(y),
              height: m(y)
            });
          }
          if (o === "horizontal") {
            var O = Mr(0, p.height), _ = O(y);
            return Ce(Ce({}, p), {}, {
              y: p.y + p.height - _,
              height: _
            });
          }
          var P = Mr(0, p.width), k = P(y);
          return Ce(Ce({}, p), {}, {
            width: k
          });
        });
        return /* @__PURE__ */ j.createElement(qe, null, n.renderRectanglesStatically(v));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
      return a && i && i.length && (!o || !rp(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, o = i.dataKey, u = i.activeIndex, s = ce(this.props.background, !1);
      return a.map(function(c, f) {
        c.value;
        var l = c.background, d = QD(c, JD);
        if (!l)
          return null;
        var h = Ce(Ce(Ce(Ce(Ce({}, d), {}, {
          fill: "#eee"
        }, l), s), oa(n.props, c, f)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: o,
          index: f,
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ j.createElement($b, Ha({
          key: "background-bar-".concat(f),
          option: n.props.background,
          isActive: f === u
        }, h));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.data, u = a.xAxis, s = a.yAxis, c = a.layout, f = a.children, l = bt(f, To);
      if (!l)
        return null;
      var d = c === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(p, b) {
        var x = Array.isArray(p.value) ? p.value[1] : p.value;
        return {
          x: p.x,
          y: p.y,
          value: x,
          errorVal: Tt(p, b)
        };
      }, y = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ j.createElement(qe, y, l.map(function(v) {
        return /* @__PURE__ */ j.cloneElement(v, {
          key: "error-bar-".concat(i, "-").concat(v.props.dataKey),
          data: o,
          xAxis: u,
          yAxis: s,
          layout: c,
          offset: d,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, o = n.className, u = n.xAxis, s = n.yAxis, c = n.left, f = n.top, l = n.width, d = n.height, h = n.isAnimationActive, y = n.background, v = n.id;
      if (i || !a || !a.length)
        return null;
      var p = this.state.isAnimationFinished, b = Q("recharts-bar", o), x = u && u.allowDataOverflow, w = s && s.allowDataOverflow, S = x || w, g = he(v) ? this.id : v;
      return /* @__PURE__ */ j.createElement(qe, {
        className: b
      }, x || w ? /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("clipPath", {
        id: "clipPath-".concat(g)
      }, /* @__PURE__ */ j.createElement("rect", {
        x: x ? c : c - l / 2,
        y: w ? f : f - d / 2,
        width: x ? l : l * 2,
        height: w ? d : d * 2
      }))) : null, /* @__PURE__ */ j.createElement(qe, {
        className: "recharts-bar-rectangles",
        clipPath: S ? "url(#clipPath-".concat(g, ")") : null
      }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, g), (!h || p) && Jt.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]);
}(R.PureComponent);
Kw = Er;
Yt(Er, "displayName", "Bar");
Yt(Er, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Pi.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
Yt(Er, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, o = e.yAxis, u = e.xAxisTicks, s = e.yAxisTicks, c = e.stackedData, f = e.dataStartIndex, l = e.displayedData, d = e.offset, h = AI(n, r);
  if (!h)
    return null;
  var y = t.layout, v = r.type.defaultProps, p = v !== void 0 ? Ce(Ce({}, v), r.props) : r.props, b = p.dataKey, x = p.children, w = p.minPointSize, S = y === "horizontal" ? o : a, g = c ? S.scale.domain() : null, m = kI({
    numericAxis: S
  }), O = bt(x, _x), _ = l.map(function(P, k) {
    var T, A, M, C, I, $;
    c ? T = TI(c[f + k], g) : (T = Tt(P, b), Array.isArray(T) || (T = [m, T]));
    var N = ZD(w, Kw.defaultProps.minPointSize)(T[1], k);
    if (y === "horizontal") {
      var L, F = [o.scale(T[0]), o.scale(T[1])], H = F[0], W = F[1];
      A = xm({
        axis: a,
        ticks: u,
        bandSize: i,
        offset: h.offset,
        entry: P,
        index: k
      }), M = (L = W ?? H) !== null && L !== void 0 ? L : void 0, C = h.size;
      var B = H - W;
      if (I = Number.isNaN(B) ? 0 : B, $ = {
        x: A,
        y: o.y,
        width: C,
        height: o.height
      }, Math.abs(N) > 0 && Math.abs(I) < Math.abs(N)) {
        var X = gt(I || N) * (Math.abs(N) - Math.abs(I));
        M -= X, I += X;
      }
    } else {
      var ie = [a.scale(T[0]), a.scale(T[1])], le = ie[0], Ee = ie[1];
      if (A = le, M = xm({
        axis: o,
        ticks: s,
        bandSize: i,
        offset: h.offset,
        entry: P,
        index: k
      }), C = Ee - le, I = h.size, $ = {
        x: a.x,
        y: M,
        width: a.width,
        height: I
      }, Math.abs(N) > 0 && Math.abs(C) < Math.abs(N)) {
        var We = gt(C || N) * (Math.abs(N) - Math.abs(C));
        C += We;
      }
    }
    return Ce(Ce(Ce({}, P), {}, {
      x: A,
      y: M,
      width: C,
      height: I,
      value: c ? T : T[1],
      payload: P,
      background: $
    }, O && O[k] && O[k].props), {}, {
      tooltipPayload: [jw(r, P)],
      tooltipPosition: {
        x: A + C / 2,
        y: M + I / 2
      }
    });
  });
  return Ce({
    data: _,
    layout: y
  }, d);
});
function gi(e) {
  "@babel/helpers - typeof";
  return gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gi(e);
}
function sN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Db(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Xw(n.key), n);
  }
}
function cN(e, t, r) {
  return t && Db(e.prototype, t), r && Db(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Nb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nb(Object(r), !0).forEach(function(n) {
      Co(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Co(e, t, r) {
  return t = Xw(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Xw(e) {
  var t = lN(e, "string");
  return gi(t) == "symbol" ? t : t + "";
}
function lN(e, t) {
  if (gi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (gi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fN = function(t, r, n, i, a) {
  var o = t.width, u = t.height, s = t.layout, c = t.children, f = Object.keys(r), l = {
    left: n.left,
    leftMirror: n.left,
    right: o - n.right,
    rightMirror: o - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: u - n.bottom,
    bottomMirror: u - n.bottom
  }, d = !!et(c, Er);
  return f.reduce(function(h, y) {
    var v = r[y], p = v.orientation, b = v.domain, x = v.padding, w = x === void 0 ? {} : x, S = v.mirror, g = v.reversed, m = "".concat(p).concat(S ? "Mirror" : ""), O, _, P, k, T;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var A = b[1] - b[0], M = 1 / 0, C = v.categoricalDomain.sort();
      if (C.forEach(function(ie, le) {
        le > 0 && (M = Math.min((ie || 0) - (C[le - 1] || 0), M));
      }), Number.isFinite(M)) {
        var I = M / A, $ = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (O = I * $ / 2), v.padding === "no-gap") {
          var N = xr(t.barCategoryGap, I * $), L = I * $ / 2;
          O = L - N - (L - N) / $ * N;
        }
      }
    }
    i === "xAxis" ? _ = [n.left + (w.left || 0) + (O || 0), n.left + n.width - (w.right || 0) - (O || 0)] : i === "yAxis" ? _ = s === "horizontal" ? [n.top + n.height - (w.bottom || 0), n.top + (w.top || 0)] : [n.top + (w.top || 0) + (O || 0), n.top + n.height - (w.bottom || 0) - (O || 0)] : _ = v.range, g && (_ = [_[1], _[0]]);
    var F = _I(v, a, d), H = F.scale, W = F.realScaleType;
    H.domain(b).range(_), PI(H);
    var B = $I(H, vt(vt({}, v), {}, {
      realScaleType: W
    }));
    i === "xAxis" ? (T = p === "top" && !S || p === "bottom" && S, P = n.left, k = l[m] - T * v.height) : i === "yAxis" && (T = p === "left" && !S || p === "right" && S, P = l[m] - T * v.width, k = n.top);
    var X = vt(vt(vt({}, v), B), {}, {
      realScaleType: W,
      x: P,
      y: k,
      scale: H,
      width: i === "xAxis" ? n.width : v.width,
      height: i === "yAxis" ? n.height : v.height
    });
    return X.bandSize = Ia(X, B), !v.hide && i === "xAxis" ? l[m] += (T ? -1 : 1) * X.height : v.hide || (l[m] += (T ? -1 : 1) * X.width), vt(vt({}, h), {}, Co({}, y, X));
  }, {});
}, Yw = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, dN = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return Yw({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, Zw = /* @__PURE__ */ function() {
  function e(t) {
    sN(this, e), this.scale = t;
  }
  return cN(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var s = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + s;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]);
}();
Co(Zw, "EPS", 1e-4);
var up = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return vt(vt({}, n), {}, Co({}, i, Zw.create(t[i])));
  }, {});
  return vt(vt({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, u = a.position;
      return LD(i, function(s, c) {
        return r[c].apply(s, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(i) {
      return Hw(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
};
function pN(e) {
  return (e % 180 + 180) % 180;
}
var hN = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = pN(i), o = a * Math.PI / 180, u = Math.atan(n / r), s = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(s);
}, Nl, qb;
function vN() {
  if (qb) return Nl;
  qb = 1;
  var e = ar(), t = _i(), r = ho();
  function n(i) {
    return function(a, o, u) {
      var s = Object(a);
      if (!t(a)) {
        var c = e(o, 3);
        a = r(a), o = function(l) {
          return c(s[l], l, s);
        };
      }
      var f = i(a, o, u);
      return f > -1 ? s[c ? a[f] : f] : void 0;
    };
  }
  return Nl = n, Nl;
}
var ql, Lb;
function yN() {
  if (Lb) return ql;
  Lb = 1;
  var e = Fw();
  function t(r) {
    var n = e(r), i = n % 1;
    return n === n ? i ? n - i : n : 0;
  }
  return ql = t, ql;
}
var Ll, Bb;
function gN() {
  if (Bb) return Ll;
  Bb = 1;
  var e = lx(), t = ar(), r = yN(), n = Math.max;
  function i(a, o, u) {
    var s = a == null ? 0 : a.length;
    if (!s)
      return -1;
    var c = u == null ? 0 : r(u);
    return c < 0 && (c = n(s + c, 0)), e(a, t(o, 3), c);
  }
  return Ll = i, Ll;
}
var Bl, Fb;
function mN() {
  if (Fb) return Bl;
  Fb = 1;
  var e = vN(), t = gN(), r = e(t);
  return Bl = r, Bl;
}
var bN = mN();
const xN = /* @__PURE__ */ xe(bN);
var wN = A0();
const SN = /* @__PURE__ */ xe(wN);
var ON = SN(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
}), sp = /* @__PURE__ */ R.createContext(void 0), cp = /* @__PURE__ */ R.createContext(void 0), Jw = /* @__PURE__ */ R.createContext(void 0), Qw = /* @__PURE__ */ R.createContext({}), e1 = /* @__PURE__ */ R.createContext(void 0), t1 = /* @__PURE__ */ R.createContext(0), r1 = /* @__PURE__ */ R.createContext(0), zb = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, u = t.children, s = t.width, c = t.height, f = ON(a);
  return /* @__PURE__ */ j.createElement(sp.Provider, {
    value: n
  }, /* @__PURE__ */ j.createElement(cp.Provider, {
    value: i
  }, /* @__PURE__ */ j.createElement(Qw.Provider, {
    value: a
  }, /* @__PURE__ */ j.createElement(Jw.Provider, {
    value: f
  }, /* @__PURE__ */ j.createElement(e1.Provider, {
    value: o
  }, /* @__PURE__ */ j.createElement(t1.Provider, {
    value: c
  }, /* @__PURE__ */ j.createElement(r1.Provider, {
    value: s
  }, u)))))));
}, _N = function() {
  return R.useContext(e1);
}, n1 = function(t) {
  var r = R.useContext(sp);
  r == null && Sr();
  var n = r[t];
  return n == null && Sr(), n;
}, PN = function() {
  var t = R.useContext(sp);
  return Xt(t);
}, AN = function() {
  var t = R.useContext(cp), r = xN(t, function(n) {
    return Hw(n.domain, Number.isFinite);
  });
  return r || Xt(t);
}, i1 = function(t) {
  var r = R.useContext(cp);
  r == null && Sr();
  var n = r[t];
  return n == null && Sr(), n;
}, TN = function() {
  var t = R.useContext(Jw);
  return t;
}, EN = function() {
  return R.useContext(Qw);
}, lp = function() {
  return R.useContext(r1);
}, fp = function() {
  return R.useContext(t1);
};
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function jN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o1(n.key), n);
  }
}
function MN(e, t, r) {
  return t && CN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function IN(e, t, r) {
  return t = Ga(t), $N(e, a1() ? Reflect.construct(t, r || [], Ga(e).constructor) : t.apply(e, r));
}
function $N(e, t) {
  if (t && (rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return kN(e);
}
function kN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function a1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (a1 = function() {
    return !!e;
  })();
}
function Ga(e) {
  return Ga = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ga(e);
}
function RN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vf(e, t);
}
function Vf(e, t) {
  return Vf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vf(e, t);
}
function Wb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ub(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wb(Object(r), !0).forEach(function(n) {
      dp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dp(e, t, r) {
  return t = o1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o1(e) {
  var t = DN(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function DN(e, t) {
  if (rn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function NN(e, t) {
  return FN(e) || BN(e, t) || LN(e, t) || qN();
}
function qN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LN(e, t) {
  if (e) {
    if (typeof e == "string") return Hb(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hb(e, t);
  }
}
function Hb(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function BN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function FN(e) {
  if (Array.isArray(e)) return e;
}
function Xf() {
  return Xf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xf.apply(this, arguments);
}
var zN = function(t, r) {
  var n;
  return /* @__PURE__ */ j.isValidElement(t) ? n = /* @__PURE__ */ j.cloneElement(t, r) : ne(t) ? n = t(r) : n = /* @__PURE__ */ j.createElement("line", Xf({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, WN = function(t, r, n, i, a, o, u, s, c) {
  var f = a.x, l = a.y, d = a.width, h = a.height;
  if (n) {
    var y = c.y, v = t.y.apply(y, {
      position: o
    });
    if (Pt(c, "discard") && !t.y.isInRange(v))
      return null;
    var p = [{
      x: f + d,
      y: v
    }, {
      x: f,
      y: v
    }];
    return s === "left" ? p.reverse() : p;
  }
  if (r) {
    var b = c.x, x = t.x.apply(b, {
      position: o
    });
    if (Pt(c, "discard") && !t.x.isInRange(x))
      return null;
    var w = [{
      x,
      y: l + h
    }, {
      x,
      y: l
    }];
    return u === "top" ? w.reverse() : w;
  }
  if (i) {
    var S = c.segment, g = S.map(function(m) {
      return t.apply(m, {
        position: o
      });
    });
    return Pt(c, "discard") && RD(g, function(m) {
      return !t.isInRange(m);
    }) ? null : g;
  }
  return null;
};
function UN(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, u = e.className, s = e.alwaysShow, c = _N(), f = n1(i), l = i1(a), d = TN();
  if (!c || !d)
    return null;
  Lt(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = up({
    x: f.scale,
    y: l.scale
  }), y = Re(t), v = Re(r), p = n && n.length === 2, b = WN(h, y, v, p, d, e.position, f.orientation, l.orientation, e);
  if (!b)
    return null;
  var x = NN(b, 2), w = x[0], S = w.x, g = w.y, m = x[1], O = m.x, _ = m.y, P = Pt(e, "hidden") ? "url(#".concat(c, ")") : void 0, k = Ub(Ub({
    clipPath: P
  }, ce(e, !0)), {}, {
    x1: S,
    y1: g,
    x2: O,
    y2: _
  });
  return /* @__PURE__ */ j.createElement(qe, {
    className: Q("recharts-reference-line", u)
  }, zN(o, k), He.renderCallByParent(e, dN({
    x1: S,
    y1: g,
    x2: O,
    y2: _
  })));
}
var pp = /* @__PURE__ */ function(e) {
  function t() {
    return jN(this, t), IN(this, t, arguments);
  }
  return RN(t, e), MN(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ j.createElement(UN, this.props);
    }
  }]);
}(j.Component);
dp(pp, "displayName", "ReferenceLine");
dp(pp, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
});
function Yf() {
  return Yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yf.apply(this, arguments);
}
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
function Kb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kb(Object(r), !0).forEach(function(n) {
      Mo(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function KN(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, s1(n.key), n);
  }
}
function GN(e, t, r) {
  return t && KN(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function VN(e, t, r) {
  return t = Va(t), XN(e, u1() ? Reflect.construct(t, r || [], Va(e).constructor) : t.apply(e, r));
}
function XN(e, t) {
  if (t && (nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return YN(e);
}
function YN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function u1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (u1 = function() {
    return !!e;
  })();
}
function Va(e) {
  return Va = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Va(e);
}
function ZN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zf(e, t);
}
function Zf(e, t) {
  return Zf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Zf(e, t);
}
function Mo(e, t, r) {
  return t = s1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s1(e) {
  var t = JN(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function JN(e, t) {
  if (nn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var QN = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = up({
    x: i.scale,
    y: a.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return Pt(t, "discard") && !o.isInRange(u) ? null : u;
}, Io = /* @__PURE__ */ function(e) {
  function t() {
    return HN(this, t), VN(this, t, arguments);
  }
  return ZN(t, e), GN(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.r, u = n.alwaysShow, s = n.clipPathId, c = Re(i), f = Re(a);
      if (Lt(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !c || !f)
        return null;
      var l = QN(this.props);
      if (!l)
        return null;
      var d = l.x, h = l.y, y = this.props, v = y.shape, p = y.className, b = Pt(this.props, "hidden") ? "url(#".concat(s, ")") : void 0, x = Gb(Gb({
        clipPath: b
      }, ce(this.props, !0)), {}, {
        cx: d,
        cy: h
      });
      return /* @__PURE__ */ j.createElement(qe, {
        className: Q("recharts-reference-dot", p)
      }, t.renderDot(v, x), He.renderCallByParent(this.props, {
        x: d - o,
        y: h - o,
        width: 2 * o,
        height: 2 * o
      }));
    }
  }]);
}(j.Component);
Mo(Io, "displayName", "ReferenceDot");
Mo(Io, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
});
Mo(Io, "renderDot", function(e, t) {
  var r;
  return /* @__PURE__ */ j.isValidElement(e) ? r = /* @__PURE__ */ j.cloneElement(e, t) : ne(e) ? r = e(t) : r = /* @__PURE__ */ j.createElement(Bw, Yf({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
});
function Jf() {
  return Jf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jf.apply(this, arguments);
}
function an(e) {
  "@babel/helpers - typeof";
  return an = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, an(e);
}
function Vb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vb(Object(r), !0).forEach(function(n) {
      $o(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function t2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, l1(n.key), n);
  }
}
function r2(e, t, r) {
  return t && t2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function n2(e, t, r) {
  return t = Xa(t), i2(e, c1() ? Reflect.construct(t, r || [], Xa(e).constructor) : t.apply(e, r));
}
function i2(e, t) {
  if (t && (an(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return a2(e);
}
function a2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function c1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (c1 = function() {
    return !!e;
  })();
}
function Xa(e) {
  return Xa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xa(e);
}
function o2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qf(e, t);
}
function Qf(e, t) {
  return Qf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Qf(e, t);
}
function $o(e, t, r) {
  return t = l1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function l1(e) {
  var t = u2(e, "string");
  return an(t) == "symbol" ? t : t + "";
}
function u2(e, t) {
  if (an(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (an(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var s2 = function(t, r, n, i, a) {
  var o = a.x1, u = a.x2, s = a.y1, c = a.y2, f = a.xAxis, l = a.yAxis;
  if (!f || !l) return null;
  var d = up({
    x: f.scale,
    y: l.scale
  }), h = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(s, {
      position: "start"
    }) : d.y.rangeMin
  }, y = {
    x: r ? d.x.apply(u, {
      position: "end"
    }) : d.x.rangeMax,
    y: i ? d.y.apply(c, {
      position: "end"
    }) : d.y.rangeMax
  };
  return Pt(a, "discard") && (!d.isInRange(h) || !d.isInRange(y)) ? null : Yw(h, y);
}, ko = /* @__PURE__ */ function(e) {
  function t() {
    return e2(this, t), n2(this, t, arguments);
  }
  return o2(t, e), r2(t, [{
    key: "render",
    value: function() {
      var n = this.props, i = n.x1, a = n.x2, o = n.y1, u = n.y2, s = n.className, c = n.alwaysShow, f = n.clipPathId;
      Lt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
      var l = Re(i), d = Re(a), h = Re(o), y = Re(u), v = this.props.shape;
      if (!l && !d && !h && !y && !v)
        return null;
      var p = s2(l, d, h, y, this.props);
      if (!p && !v)
        return null;
      var b = Pt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
      return /* @__PURE__ */ j.createElement(qe, {
        className: Q("recharts-reference-area", s)
      }, t.renderRect(v, Xb(Xb({
        clipPath: b
      }, ce(this.props, !0)), p)), He.renderCallByParent(this.props, p));
    }
  }]);
}(j.Component);
$o(ko, "displayName", "ReferenceArea");
$o(ko, "defaultProps", {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
});
$o(ko, "renderRect", function(e, t) {
  var r;
  return /* @__PURE__ */ j.isValidElement(e) ? r = /* @__PURE__ */ j.cloneElement(e, t) : ne(e) ? r = e(t) : r = /* @__PURE__ */ j.createElement(op, Jf({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
});
function f1(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function c2(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return hN(n, r);
}
function l2(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, o = e.width, u = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + o : a + u
  } : {
    start: n ? i + o : a + u,
    end: n ? i : a
  };
}
function Ya(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function f2(e, t) {
  return f1(e, t + 1);
}
function d2(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, u = t.end, s = 0, c = 1, f = o, l = function() {
    var y = n?.[s];
    if (y === void 0)
      return {
        v: f1(n, c)
      };
    var v = s, p, b = function() {
      return p === void 0 && (p = r(y, v)), p;
    }, x = y.coordinate, w = s === 0 || Ya(e, x, b, f, u);
    w || (s = 0, f = o, c += 1), w && (f = x + e * (b() / 2 + i), s += c);
  }, d; c <= a.length; )
    if (d = l(), d) return d.v;
  return [];
}
function mi(e) {
  "@babel/helpers - typeof";
  return mi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(e);
}
function Yb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yb(Object(r), !0).forEach(function(n) {
      p2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function p2(e, t, r) {
  return t = h2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h2(e) {
  var t = v2(e, "string");
  return mi(t) == "symbol" ? t : t + "";
}
function v2(e, t) {
  if (mi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (mi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function y2(e, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, u = t.start, s = t.end, c = function(d) {
    var h = a[d], y, v = function() {
      return y === void 0 && (y = r(h, d)), y;
    };
    if (d === o - 1) {
      var p = e * (h.coordinate + e * v() / 2 - s);
      a[d] = h = Ue(Ue({}, h), {}, {
        tickCoord: p > 0 ? h.coordinate - p * e : h.coordinate
      });
    } else
      a[d] = h = Ue(Ue({}, h), {}, {
        tickCoord: h.coordinate
      });
    var b = Ya(e, h.tickCoord, v, u, s);
    b && (s = h.tickCoord - e * (v() / 2 + i), a[d] = Ue(Ue({}, h), {}, {
      isShow: !0
    }));
  }, f = o - 1; f >= 0; f--)
    c(f);
  return a;
}
function g2(e, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, s = t.start, c = t.end;
  if (a) {
    var f = n[u - 1], l = r(f, u - 1), d = e * (f.coordinate + e * l / 2 - c);
    o[u - 1] = f = Ue(Ue({}, f), {}, {
      tickCoord: d > 0 ? f.coordinate - d * e : f.coordinate
    });
    var h = Ya(e, f.tickCoord, function() {
      return l;
    }, s, c);
    h && (c = f.tickCoord - e * (l / 2 + i), o[u - 1] = Ue(Ue({}, f), {}, {
      isShow: !0
    }));
  }
  for (var y = a ? u - 1 : u, v = function(x) {
    var w = o[x], S, g = function() {
      return S === void 0 && (S = r(w, x)), S;
    };
    if (x === 0) {
      var m = e * (w.coordinate - e * g() / 2 - s);
      o[x] = w = Ue(Ue({}, w), {}, {
        tickCoord: m < 0 ? w.coordinate - m * e : w.coordinate
      });
    } else
      o[x] = w = Ue(Ue({}, w), {}, {
        tickCoord: w.coordinate
      });
    var O = Ya(e, w.tickCoord, g, s, c);
    O && (s = w.tickCoord + e * (g() / 2 + i), o[x] = Ue(Ue({}, w), {}, {
      isShow: !0
    }));
  }, p = 0; p < y; p++)
    v(p);
  return o;
}
function hp(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, o = e.minTickGap, u = e.orientation, s = e.interval, c = e.tickFormatter, f = e.unit, l = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (U(s) || Pi.isSsr)
    return f2(i, typeof s == "number" && U(s) ? s : 0);
  var d = [], h = u === "top" || u === "bottom" ? "width" : "height", y = f && h === "width" ? Dn(f, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, v = function(w, S) {
    var g = ne(c) ? c(w.value, S) : w.value;
    return h === "width" ? c2(Dn(g, {
      fontSize: t,
      letterSpacing: r
    }), y, l) : Dn(g, {
      fontSize: t,
      letterSpacing: r
    })[h];
  }, p = i.length >= 2 ? gt(i[1].coordinate - i[0].coordinate) : 1, b = l2(a, p, h);
  return s === "equidistantPreserveStart" ? d2(p, b, v, i, o) : (s === "preserveStart" || s === "preserveStartEnd" ? d = g2(p, b, v, i, o, s === "preserveStartEnd") : d = y2(p, b, v, i, o), d.filter(function(x) {
    return x.isShow;
  }));
}
var m2 = ["viewBox"], b2 = ["viewBox"], x2 = ["ticks"];
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e);
}
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
function Zb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zb(Object(r), !0).forEach(function(n) {
      vp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Fl(e, t) {
  if (e == null) return {};
  var r = w2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function w2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function S2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, p1(n.key), n);
  }
}
function O2(e, t, r) {
  return t && Jb(e.prototype, t), r && Jb(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _2(e, t, r) {
  return t = Za(t), P2(e, d1() ? Reflect.construct(t, r || [], Za(e).constructor) : t.apply(e, r));
}
function P2(e, t) {
  if (t && (on(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return A2(e);
}
function A2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function d1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (d1 = function() {
    return !!e;
  })();
}
function Za(e) {
  return Za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Za(e);
}
function T2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ed(e, t);
}
function ed(e, t) {
  return ed = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ed(e, t);
}
function vp(e, t, r) {
  return t = p1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p1(e) {
  var t = E2(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function E2(e, t) {
  if (on(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (on(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var gn = /* @__PURE__ */ function(e) {
  function t(r) {
    var n;
    return S2(this, t), n = _2(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return T2(t, e), O2(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, o = Fl(n, m2), u = this.props, s = u.viewBox, c = Fl(u, b2);
      return !Lr(a, s) || !Lr(o, c) || !Lr(i, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        i && this.setState({
          fontSize: window.getComputedStyle(i).fontSize,
          letterSpacing: window.getComputedStyle(i).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var i = this.props, a = i.x, o = i.y, u = i.width, s = i.height, c = i.orientation, f = i.tickSize, l = i.mirror, d = i.tickMargin, h, y, v, p, b, x, w = l ? -1 : 1, S = n.tickSize || f, g = U(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (c) {
        case "top":
          h = y = n.coordinate, p = o + +!l * s, v = p - w * S, x = v - w * d, b = g;
          break;
        case "left":
          v = p = n.coordinate, y = a + +!l * u, h = y - w * S, b = h - w * d, x = g;
          break;
        case "right":
          v = p = n.coordinate, y = a + +l * u, h = y + w * S, b = h + w * d, x = g;
          break;
        default:
          h = y = n.coordinate, p = o + +l * s, v = p + w * S, x = v + w * d, b = g;
          break;
      }
      return {
        line: {
          x1: h,
          y1: v,
          x2: y,
          y2: p
        },
        tick: {
          x: b,
          y: x
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o;
      switch (i) {
        case "left":
          o = a ? "start" : "end";
          break;
        case "right":
          o = a ? "end" : "start";
          break;
        default:
          o = "middle";
          break;
      }
      return o;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, o = "end";
      switch (i) {
        case "left":
        case "right":
          o = "middle";
          break;
        case "top":
          o = a ? "start" : "end";
          break;
        default:
          o = a ? "end" : "start";
          break;
      }
      return o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, s = n.orientation, c = n.mirror, f = n.axisLine, l = Ge(Ge(Ge({}, ce(this.props, !1)), ce(f, !1)), {}, {
        fill: "none"
      });
      if (s === "top" || s === "bottom") {
        var d = +(s === "top" && !c || s === "bottom" && c);
        l = Ge(Ge({}, l), {}, {
          x1: i,
          y1: a + d * u,
          x2: i + o,
          y2: a + d * u
        });
      } else {
        var h = +(s === "left" && !c || s === "right" && c);
        l = Ge(Ge({}, l), {}, {
          x1: i + h * o,
          y1: a,
          x2: i + h * o,
          y2: a + u
        });
      }
      return /* @__PURE__ */ j.createElement("line", Nr({}, l, {
        className: Q("recharts-cartesian-axis-line", lt(f, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, i, a) {
        var o = this, u = this.props, s = u.tickLine, c = u.stroke, f = u.tick, l = u.tickFormatter, d = u.unit, h = hp(Ge(Ge({}, this.props), {}, {
          ticks: n
        }), i, a), y = this.getTickTextAnchor(), v = this.getTickVerticalAnchor(), p = ce(this.props, !1), b = ce(f, !1), x = Ge(Ge({}, p), {}, {
          fill: "none"
        }, ce(s, !1)), w = h.map(function(S, g) {
          var m = o.getTickLineCoord(S), O = m.line, _ = m.tick, P = Ge(Ge(Ge(Ge({
            textAnchor: y,
            verticalAnchor: v
          }, p), {}, {
            stroke: "none",
            fill: c
          }, b), _), {}, {
            index: g,
            payload: S,
            visibleTicksCount: h.length,
            tickFormatter: l
          });
          return /* @__PURE__ */ j.createElement(qe, Nr({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord)
          }, oa(o.props, S, g)), s && /* @__PURE__ */ j.createElement("line", Nr({}, x, O, {
            className: Q("recharts-cartesian-axis-tick-line", lt(s, "className"))
          })), f && t.renderTickItem(f, P, "".concat(ne(l) ? l(S.value, g) : S.value).concat(d || "")));
        });
        return /* @__PURE__ */ j.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, w);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, o = i.width, u = i.height, s = i.ticksGenerator, c = i.className, f = i.hide;
      if (f)
        return null;
      var l = this.props, d = l.ticks, h = Fl(l, x2), y = d;
      return ne(s) && (y = d && d.length > 0 ? s(this.props) : s(h)), o <= 0 || u <= 0 || !y || !y.length ? null : /* @__PURE__ */ j.createElement(qe, {
        className: Q("recharts-cartesian-axis", c),
        ref: function(p) {
          n.layerReference = p;
        }
      }, a && this.renderAxisLine(), this.renderTicks(y, this.state.fontSize, this.state.letterSpacing), He.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ j.isValidElement(n) ? o = /* @__PURE__ */ j.cloneElement(n, i) : ne(n) ? o = n(i) : o = /* @__PURE__ */ j.createElement(ga, Nr({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), o;
    }
  }]);
}(R.Component);
vp(gn, "displayName", "CartesianAxis");
vp(gn, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var j2 = ["x1", "y1", "x2", "y2", "key"], C2 = ["offset"];
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function Qb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ke(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qb(Object(r), !0).forEach(function(n) {
      M2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function M2(e, t, r) {
  return t = I2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function I2(e) {
  var t = $2(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function $2(e, t) {
  if (Or(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gr.apply(this, arguments);
}
function e0(e, t) {
  if (e == null) return {};
  var r = k2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function k2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
var R2 = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, o = t.width, u = t.height, s = t.ry;
  return /* @__PURE__ */ j.createElement("rect", {
    x: i,
    y: a,
    ry: s,
    width: o,
    height: u,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function h1(e, t) {
  var r;
  if (/* @__PURE__ */ j.isValidElement(e))
    r = /* @__PURE__ */ j.cloneElement(e, t);
  else if (ne(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, o = t.y2, u = t.key, s = e0(t, j2), c = ce(s, !1);
    c.offset;
    var f = e0(c, C2);
    r = /* @__PURE__ */ j.createElement("line", gr({}, f, {
      x1: n,
      y1: i,
      x2: a,
      y2: o,
      fill: "none",
      key: u
    }));
  }
  return r;
}
function D2(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, s) {
    var c = Ke(Ke({}, e), {}, {
      x1: t,
      y1: u,
      x2: t + r,
      y2: u,
      key: "line-".concat(s),
      index: s
    });
    return h1(i, c);
  });
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, o);
}
function N2(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var o = a.map(function(u, s) {
    var c = Ke(Ke({}, e), {}, {
      x1: u,
      y1: t,
      x2: u,
      y2: t + r,
      key: "line-".concat(s),
      index: s
    });
    return h1(i, c);
  });
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, o);
}
function q2(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, o = e.height, u = e.horizontalPoints, s = e.horizontal, c = s === void 0 ? !0 : s;
  if (!c || !t || !t.length)
    return null;
  var f = u.map(function(d) {
    return Math.round(d + i - i);
  }).sort(function(d, h) {
    return d - h;
  });
  i !== f[0] && f.unshift(0);
  var l = f.map(function(d, h) {
    var y = !f[h + 1], v = y ? i + o - d : f[h + 1] - d;
    if (v <= 0)
      return null;
    var p = h % t.length;
    return /* @__PURE__ */ j.createElement("rect", {
      key: "react-".concat(h),
      y: d,
      x: n,
      height: v,
      width: a,
      stroke: "none",
      fill: t[p],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, l);
}
function L2(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, o = e.y, u = e.width, s = e.height, c = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var f = c.map(function(d) {
    return Math.round(d + a - a);
  }).sort(function(d, h) {
    return d - h;
  });
  a !== f[0] && f.unshift(0);
  var l = f.map(function(d, h) {
    var y = !f[h + 1], v = y ? a + u - d : f[h + 1] - d;
    if (v <= 0)
      return null;
    var p = h % n.length;
    return /* @__PURE__ */ j.createElement("rect", {
      key: "react-".concat(h),
      x: d,
      y: o,
      width: v,
      height: s,
      stroke: "none",
      fill: n[p],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, l);
}
var B2 = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, o = t.offset;
  return Tw(hp(Ke(Ke(Ke({}, gn.defaultProps), n), {}, {
    ticks: Nt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.left, o.left + o.width, r);
}, F2 = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, o = t.offset;
  return Tw(hp(Ke(Ke(Ke({}, gn.defaultProps), n), {}, {
    ticks: Nt(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), o.top, o.top + o.height, r);
}, Rr = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function v1(e) {
  var t, r, n, i, a, o, u = lp(), s = fp(), c = EN(), f = Ke(Ke({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Rr.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Rr.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Rr.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Rr.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Rr.vertical,
    verticalFill: (o = e.verticalFill) !== null && o !== void 0 ? o : Rr.verticalFill,
    x: U(e.x) ? e.x : c.left,
    y: U(e.y) ? e.y : c.top,
    width: U(e.width) ? e.width : c.width,
    height: U(e.height) ? e.height : c.height
  }), l = f.x, d = f.y, h = f.width, y = f.height, v = f.syncWithTicks, p = f.horizontalValues, b = f.verticalValues, x = PN(), w = AN();
  if (!U(h) || h <= 0 || !U(y) || y <= 0 || !U(l) || l !== +l || !U(d) || d !== +d)
    return null;
  var S = f.verticalCoordinatesGenerator || B2, g = f.horizontalCoordinatesGenerator || F2, m = f.horizontalPoints, O = f.verticalPoints;
  if ((!m || !m.length) && ne(g)) {
    var _ = p && p.length, P = g({
      yAxis: w ? Ke(Ke({}, w), {}, {
        ticks: _ ? p : w.ticks
      }) : void 0,
      width: u,
      height: s,
      offset: c
    }, _ ? !0 : v);
    Lt(Array.isArray(P), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Or(P), "]")), Array.isArray(P) && (m = P);
  }
  if ((!O || !O.length) && ne(S)) {
    var k = b && b.length, T = S({
      xAxis: x ? Ke(Ke({}, x), {}, {
        ticks: k ? b : x.ticks
      }) : void 0,
      width: u,
      height: s,
      offset: c
    }, k ? !0 : v);
    Lt(Array.isArray(T), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Or(T), "]")), Array.isArray(T) && (O = T);
  }
  return /* @__PURE__ */ j.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ j.createElement(R2, {
    fill: f.fill,
    fillOpacity: f.fillOpacity,
    x: f.x,
    y: f.y,
    width: f.width,
    height: f.height,
    ry: f.ry
  }), /* @__PURE__ */ j.createElement(D2, gr({}, f, {
    offset: c,
    horizontalPoints: m,
    xAxis: x,
    yAxis: w
  })), /* @__PURE__ */ j.createElement(N2, gr({}, f, {
    offset: c,
    verticalPoints: O,
    xAxis: x,
    yAxis: w
  })), /* @__PURE__ */ j.createElement(q2, gr({}, f, {
    horizontalPoints: m
  })), /* @__PURE__ */ j.createElement(L2, gr({}, f, {
    verticalPoints: O
  })));
}
v1.displayName = "CartesianGrid";
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function z2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function W2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, m1(n.key), n);
  }
}
function U2(e, t, r) {
  return t && W2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function H2(e, t, r) {
  return t = Ja(t), K2(e, y1() ? Reflect.construct(t, r || [], Ja(e).constructor) : t.apply(e, r));
}
function K2(e, t) {
  if (t && (un(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return G2(e);
}
function G2(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (y1 = function() {
    return !!e;
  })();
}
function Ja(e) {
  return Ja = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ja(e);
}
function V2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && td(e, t);
}
function td(e, t) {
  return td = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, td(e, t);
}
function g1(e, t, r) {
  return t = m1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m1(e) {
  var t = X2(e, "string");
  return un(t) == "symbol" ? t : t + "";
}
function X2(e, t) {
  if (un(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function rd() {
  return rd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rd.apply(this, arguments);
}
function Y2(e) {
  var t = e.xAxisId, r = lp(), n = fp(), i = n1(t);
  return i == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ j.createElement(gn, rd({}, i, {
      className: Q("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className),
      viewBox: {
        x: 0,
        y: 0,
        width: r,
        height: n
      },
      ticksGenerator: function(o) {
        return Nt(o, !0);
      }
    }))
  );
}
var Ro = /* @__PURE__ */ function(e) {
  function t() {
    return z2(this, t), H2(this, t, arguments);
  }
  return V2(t, e), U2(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ j.createElement(Y2, this.props);
    }
  }]);
}(j.Component);
g1(Ro, "displayName", "XAxis");
g1(Ro, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function Z2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function J2(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, w1(n.key), n);
  }
}
function Q2(e, t, r) {
  return t && J2(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function eq(e, t, r) {
  return t = Qa(t), tq(e, b1() ? Reflect.construct(t, r || [], Qa(e).constructor) : t.apply(e, r));
}
function tq(e, t) {
  if (t && (sn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return rq(e);
}
function rq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function b1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (b1 = function() {
    return !!e;
  })();
}
function Qa(e) {
  return Qa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qa(e);
}
function nq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && nd(e, t);
}
function nd(e, t) {
  return nd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, nd(e, t);
}
function x1(e, t, r) {
  return t = w1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w1(e) {
  var t = iq(e, "string");
  return sn(t) == "symbol" ? t : t + "";
}
function iq(e, t) {
  if (sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function id() {
  return id = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, id.apply(this, arguments);
}
var aq = function(t) {
  var r = t.yAxisId, n = lp(), i = fp(), a = i1(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ j.createElement(gn, id({}, a, {
      className: Q("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(u) {
        return Nt(u, !0);
      }
    }))
  );
}, Do = /* @__PURE__ */ function(e) {
  function t() {
    return Z2(this, t), eq(this, t, arguments);
  }
  return nq(t, e), Q2(t, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ j.createElement(aq, this.props);
    }
  }]);
}(j.Component);
x1(Do, "displayName", "YAxis");
x1(Do, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
function t0(e) {
  return cq(e) || sq(e) || uq(e) || oq();
}
function oq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uq(e, t) {
  if (e) {
    if (typeof e == "string") return ad(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ad(e, t);
  }
}
function sq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function cq(e) {
  if (Array.isArray(e)) return ad(e);
}
function ad(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var od = function(t, r, n, i, a) {
  var o = bt(t, pp), u = bt(t, Io), s = [].concat(t0(o), t0(u)), c = bt(t, ko), f = "".concat(i, "Id"), l = i[0], d = r;
  if (s.length && (d = s.reduce(function(v, p) {
    if (p.props[f] === n && Pt(p.props, "extendDomain") && U(p.props[l])) {
      var b = p.props[l];
      return [Math.min(v[0], b), Math.max(v[1], b)];
    }
    return v;
  }, d)), c.length) {
    var h = "".concat(l, "1"), y = "".concat(l, "2");
    d = c.reduce(function(v, p) {
      if (p.props[f] === n && Pt(p.props, "extendDomain") && U(p.props[h]) && U(p.props[y])) {
        var b = p.props[h], x = p.props[y];
        return [Math.min(v[0], b, x), Math.max(v[1], b, x)];
      }
      return v;
    }, d);
  }
  return a && a.length && (d = a.reduce(function(v, p) {
    return U(p) ? [Math.min(v[0], p), Math.max(v[1], p)] : v;
  }, d)), d;
}, zl = { exports: {} }, r0;
function lq() {
  return r0 || (r0 = 1, function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(s, c, f) {
      this.fn = s, this.context = c, this.once = f || !1;
    }
    function a(s, c, f, l, d) {
      if (typeof f != "function")
        throw new TypeError("The listener must be a function");
      var h = new i(f, l || s, d), y = r ? r + c : c;
      return s._events[y] ? s._events[y].fn ? s._events[y] = [s._events[y], h] : s._events[y].push(h) : (s._events[y] = h, s._eventsCount++), s;
    }
    function o(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var c = [], f, l;
      if (this._eventsCount === 0) return c;
      for (l in f = this._events)
        t.call(f, l) && c.push(r ? l.slice(1) : l);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(f)) : c;
    }, u.prototype.listeners = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      if (!l) return [];
      if (l.fn) return [l.fn];
      for (var d = 0, h = l.length, y = new Array(h); d < h; d++)
        y[d] = l[d].fn;
      return y;
    }, u.prototype.listenerCount = function(c) {
      var f = r ? r + c : c, l = this._events[f];
      return l ? l.fn ? 1 : l.length : 0;
    }, u.prototype.emit = function(c, f, l, d, h, y) {
      var v = r ? r + c : c;
      if (!this._events[v]) return !1;
      var p = this._events[v], b = arguments.length, x, w;
      if (p.fn) {
        switch (p.once && this.removeListener(c, p.fn, void 0, !0), b) {
          case 1:
            return p.fn.call(p.context), !0;
          case 2:
            return p.fn.call(p.context, f), !0;
          case 3:
            return p.fn.call(p.context, f, l), !0;
          case 4:
            return p.fn.call(p.context, f, l, d), !0;
          case 5:
            return p.fn.call(p.context, f, l, d, h), !0;
          case 6:
            return p.fn.call(p.context, f, l, d, h, y), !0;
        }
        for (w = 1, x = new Array(b - 1); w < b; w++)
          x[w - 1] = arguments[w];
        p.fn.apply(p.context, x);
      } else {
        var S = p.length, g;
        for (w = 0; w < S; w++)
          switch (p[w].once && this.removeListener(c, p[w].fn, void 0, !0), b) {
            case 1:
              p[w].fn.call(p[w].context);
              break;
            case 2:
              p[w].fn.call(p[w].context, f);
              break;
            case 3:
              p[w].fn.call(p[w].context, f, l);
              break;
            case 4:
              p[w].fn.call(p[w].context, f, l, d);
              break;
            default:
              if (!x) for (g = 1, x = new Array(b - 1); g < b; g++)
                x[g - 1] = arguments[g];
              p[w].fn.apply(p[w].context, x);
          }
      }
      return !0;
    }, u.prototype.on = function(c, f, l) {
      return a(this, c, f, l, !1);
    }, u.prototype.once = function(c, f, l) {
      return a(this, c, f, l, !0);
    }, u.prototype.removeListener = function(c, f, l, d) {
      var h = r ? r + c : c;
      if (!this._events[h]) return this;
      if (!f)
        return o(this, h), this;
      var y = this._events[h];
      if (y.fn)
        y.fn === f && (!d || y.once) && (!l || y.context === l) && o(this, h);
      else {
        for (var v = 0, p = [], b = y.length; v < b; v++)
          (y[v].fn !== f || d && !y[v].once || l && y[v].context !== l) && p.push(y[v]);
        p.length ? this._events[h] = p.length === 1 ? p[0] : p : o(this, h);
      }
      return this;
    }, u.prototype.removeAllListeners = function(c) {
      var f;
      return c ? (f = r ? r + c : c, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  }(zl)), zl.exports;
}
var fq = lq();
const dq = /* @__PURE__ */ xe(fq);
var Wl = new dq(), Ul = "recharts.syncMouseEvents";
function bi(e) {
  "@babel/helpers - typeof";
  return bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bi(e);
}
function pq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, S1(n.key), n);
  }
}
function vq(e, t, r) {
  return t && hq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Hl(e, t, r) {
  return t = S1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function S1(e) {
  var t = yq(e, "string");
  return bi(t) == "symbol" ? t : t + "";
}
function yq(e, t) {
  if (bi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (bi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var gq = /* @__PURE__ */ function() {
  function e() {
    pq(this, e), Hl(this, "activeIndex", 0), Hl(this, "coordinateList", []), Hl(this, "layout", "horizontal");
  }
  return vq(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, u = o === void 0 ? null : o, s = r.layout, c = s === void 0 ? null : s, f = r.offset, l = f === void 0 ? null : f, d = r.mouseHandlerCallback, h = d === void 0 ? null : d;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = c ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = h ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, u = i.height, s = this.coordinateList[this.activeIndex].coordinate, c = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = a + s + c, d = o + this.offset.top + u / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: d
        });
      }
    }
  }]);
}();
function mq(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e?.[0], i = e?.[1];
    if (n && i && U(n) && U(i))
      return !0;
  }
  return !1;
}
function bq(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function O1(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = ze(t, r, n, i), u = ze(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function xq(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, s = t.cy, c = t.innerRadius, f = t.outerRadius, l = t.angle, d = ze(u, s, c, l), h = ze(u, s, f, l);
      n = d.x, i = d.y, a = h.x, o = h.y;
    } else
      return O1(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function xi(e) {
  "@babel/helpers - typeof";
  return xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xi(e);
}
function n0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? n0(Object(r), !0).forEach(function(n) {
      wq(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wq(e, t, r) {
  return t = Sq(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sq(e) {
  var t = Oq(e, "string");
  return xi(t) == "symbol" ? t : t + "";
}
function Oq(e, t) {
  if (xi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (xi(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _q(e) {
  var t, r, n = e.element, i = e.tooltipEventType, a = e.isActive, o = e.activeCoordinate, u = e.activePayload, s = e.offset, c = e.activeTooltipIndex, f = e.tooltipAxisBandSize, l = e.layout, d = e.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !a || !o || d !== "ScatterChart" && i !== "axis")
    return null;
  var y, v = Nm;
  if (d === "ScatterChart")
    y = o, v = RR;
  else if (d === "BarChart")
    y = bq(l, o, s, f), v = op;
  else if (l === "radial") {
    var p = O1(o), b = p.cx, x = p.cy, w = p.radius, S = p.startAngle, g = p.endAngle;
    y = {
      cx: b,
      cy: x,
      startAngle: S,
      endAngle: g,
      innerRadius: w,
      outerRadius: w
    }, v = Iw;
  } else
    y = {
      points: xq(l, o, s)
    }, v = Nm;
  var m = Xi(Xi(Xi(Xi({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), y), ce(h, !1)), {}, {
    payload: u,
    payloadIndex: c,
    className: Q("recharts-tooltip-cursor", h.className)
  });
  return /* @__PURE__ */ R.isValidElement(h) ? /* @__PURE__ */ R.cloneElement(h, m) : /* @__PURE__ */ R.createElement(v, m);
}
var Pq = ["item"], Aq = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function cn(e) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e);
}
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qr.apply(this, arguments);
}
function i0(e, t) {
  return jq(e) || Eq(e, t) || P1(e, t) || Tq();
}
function Tq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Eq(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], s = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(s = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); s = !0) ;
    } catch (f) {
      c = !0, i = f;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return u;
  }
}
function jq(e) {
  if (Array.isArray(e)) return e;
}
function a0(e, t) {
  if (e == null) return {};
  var r = Cq(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Cq(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Mq(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Iq(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, A1(n.key), n);
  }
}
function $q(e, t, r) {
  return t && Iq(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function kq(e, t, r) {
  return t = eo(t), Rq(e, _1() ? Reflect.construct(t, r || [], eo(e).constructor) : t.apply(e, r));
}
function Rq(e, t) {
  if (t && (cn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Dq(e);
}
function Dq(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_1 = function() {
    return !!e;
  })();
}
function eo(e) {
  return eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, eo(e);
}
function Nq(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ud(e, t);
}
function ud(e, t) {
  return ud = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ud(e, t);
}
function ln(e) {
  return Bq(e) || Lq(e) || P1(e) || qq();
}
function qq() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P1(e, t) {
  if (e) {
    if (typeof e == "string") return sd(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return sd(e, t);
  }
}
function Lq(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Bq(e) {
  if (Array.isArray(e)) return sd(e);
}
function sd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function o0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? o0(Object(r), !0).forEach(function(n) {
      J(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function J(e, t, r) {
  return t = A1(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function A1(e) {
  var t = Fq(e, "string");
  return cn(t) == "symbol" ? t : t + "";
}
function Fq(e, t) {
  if (cn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zq = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, Wq = {
  width: "100%",
  height: "100%"
}, T1 = {
  x: 0,
  y: 0
};
function Yi(e) {
  return e;
}
var Uq = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, Hq = function(t, r, n, i) {
  var a = r.find(function(f) {
    return f && f.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, u = i.radius;
      return D(D(D({}, i), ze(i.cx, i.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var s = a.coordinate, c = i.angle;
    return D(D(D({}, i), ze(i.cx, i.cy, s, c)), {}, {
      angle: c,
      radius: s
    });
  }
  return T1;
}, No = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(u, s) {
    var c = s.props.data;
    return c && c.length ? [].concat(ln(u), ln(c)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && U(i) && U(a) ? t.slice(i, a + 1) : [];
};
function E1(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var cd = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, u = No(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(s, c) {
    var f, l = (f = c.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && // https://github.com/recharts/recharts/issues/4717
    // The data is sliced only when the active index is within the start/end index range.
    t.dataEndIndex - t.dataStartIndex >= n && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = l === void 0 ? u : l;
      d = Vl(h, o.dataKey, i);
    } else
      d = l && l[n] || u[n];
    return d ? [].concat(ln(s), [jw(c, d)]) : s;
  }, []);
}, u0 = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = Uq(a, n), u = t.orderedTooltipTicks, s = t.tooltipAxis, c = t.tooltipTicks, f = mI(o, u, c, s);
  if (f >= 0 && c) {
    var l = c[f] && c[f].value, d = cd(t, r, f, l), h = Hq(n, u, f, a);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: d,
      activeCoordinate: h
    };
  }
  return null;
}, Kq = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, d = t.stackOffset, h = Aw(f, a);
  return n.reduce(function(y, v) {
    var p, b = v.type.defaultProps !== void 0 ? D(D({}, v.type.defaultProps), v.props) : v.props, x = b.type, w = b.dataKey, S = b.allowDataOverflow, g = b.allowDuplicatedCategory, m = b.scale, O = b.ticks, _ = b.includeHidden, P = b[o];
    if (y[P])
      return y;
    var k = No(t.data, {
      graphicalItems: i.filter(function(B) {
        var X, ie = o in B.props ? B.props[o] : (X = B.type.defaultProps) === null || X === void 0 ? void 0 : X[o];
        return ie === P;
      }),
      dataStartIndex: s,
      dataEndIndex: c
    }), T = k.length, A, M, C;
    mq(b.domain, S, x) && (A = jf(b.domain, null, S), h && (x === "number" || m !== "auto") && (C = qn(k, w, "category")));
    var I = E1(x);
    if (!A || A.length === 0) {
      var $, N = ($ = b.domain) !== null && $ !== void 0 ? $ : I;
      if (w) {
        if (A = qn(k, w, x), x === "category" && h) {
          var L = l_(A);
          g && L ? (M = A, A = za(0, T)) : g || (A = Om(N, A, v).reduce(function(B, X) {
            return B.indexOf(X) >= 0 ? B : [].concat(ln(B), [X]);
          }, []));
        } else if (x === "category")
          g ? A = A.filter(function(B) {
            return B !== "" && !he(B);
          }) : A = Om(N, A, v).reduce(function(B, X) {
            return B.indexOf(X) >= 0 || X === "" || he(X) ? B : [].concat(ln(B), [X]);
          }, []);
        else if (x === "number") {
          var F = OI(k, i.filter(function(B) {
            var X, ie, le = o in B.props ? B.props[o] : (X = B.type.defaultProps) === null || X === void 0 ? void 0 : X[o], Ee = "hide" in B.props ? B.props.hide : (ie = B.type.defaultProps) === null || ie === void 0 ? void 0 : ie.hide;
            return le === P && (_ || !Ee);
          }), w, a, f);
          F && (A = F);
        }
        h && (x === "number" || m !== "auto") && (C = qn(k, w, "category"));
      } else h ? A = za(0, T) : u && u[P] && u[P].hasStack && x === "number" ? A = d === "expand" ? [0, 1] : Ew(u[P].stackGroups, s, c) : A = Pw(k, i.filter(function(B) {
        var X = o in B.props ? B.props[o] : B.type.defaultProps[o], ie = "hide" in B.props ? B.props.hide : B.type.defaultProps.hide;
        return X === P && (_ || !ie);
      }), x, f, !0);
      if (x === "number")
        A = od(l, A, P, a, O), N && (A = jf(N, A, S));
      else if (x === "category" && N) {
        var H = N, W = A.every(function(B) {
          return H.indexOf(B) >= 0;
        });
        W && (A = H);
      }
    }
    return D(D({}, y), {}, J({}, P, D(D({}, b), {}, {
      axisType: a,
      domain: A,
      categoricalDomain: C,
      duplicateDomain: M,
      originalDomain: (p = b.domain) !== null && p !== void 0 ? p : I,
      isCategorical: h,
      layout: f
    })));
  }, {});
}, Gq = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.layout, l = t.children, d = No(t.data, {
    graphicalItems: n,
    dataStartIndex: s,
    dataEndIndex: c
  }), h = d.length, y = Aw(f, a), v = -1;
  return n.reduce(function(p, b) {
    var x = b.type.defaultProps !== void 0 ? D(D({}, b.type.defaultProps), b.props) : b.props, w = x[o], S = E1("number");
    if (!p[w]) {
      v++;
      var g;
      return y ? g = za(0, h) : u && u[w] && u[w].hasStack ? (g = Ew(u[w].stackGroups, s, c), g = od(l, g, w, a)) : (g = jf(S, Pw(d, n.filter(function(m) {
        var O, _, P = o in m.props ? m.props[o] : (O = m.type.defaultProps) === null || O === void 0 ? void 0 : O[o], k = "hide" in m.props ? m.props.hide : (_ = m.type.defaultProps) === null || _ === void 0 ? void 0 : _.hide;
        return P === w && !k;
      }), "number", f), i.defaultProps.allowDataOverflow), g = od(l, g, w, a)), D(D({}, p), {}, J({}, w, D(D({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: lt(zq, "".concat(a, ".").concat(v % 2), null),
        domain: g,
        originalDomain: S,
        isCategorical: y,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return p;
  }, {});
}, Vq = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, s = r.dataStartIndex, c = r.dataEndIndex, f = t.children, l = "".concat(i, "Id"), d = bt(f, a), h = {};
  return d && d.length ? h = Kq(t, {
    axes: d,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  }) : o && o.length && (h = Gq(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: s,
    dataEndIndex: c
  })), h;
}, Xq = function(t) {
  var r = Xt(t), n = Nt(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: Id(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: Ia(r, n)
  };
}, s0 = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = et(r, en), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, Yq = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = qt(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, c0 = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, Zq = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, u = t.yAxisMap, s = u === void 0 ? {} : u, c = n.width, f = n.height, l = n.children, d = n.margin || {}, h = et(l, en), y = et(l, Br), v = Object.keys(s).reduce(function(g, m) {
    var O = s[m], _ = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, g), {}, J({}, _, g[_] + O.width)) : g;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), p = Object.keys(o).reduce(function(g, m) {
    var O = o[m], _ = O.orientation;
    return !O.mirror && !O.hide ? D(D({}, g), {}, J({}, _, lt(g, "".concat(_)) + O.height)) : g;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), b = D(D({}, p), v), x = b.bottom;
  h && (b.bottom += h.props.height || en.defaultProps.height), y && r && (b = wI(b, i, n, r));
  var w = c - b.left - b.right, S = f - b.top - b.bottom;
  return D(D({
    brushBottom: x
  }, b), {}, {
    // never return negative values for height and width
    width: Math.max(w, 0),
    height: Math.max(S, 0)
  });
}, Jq = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, Qq = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, s = t.axisComponents, c = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, d = function(b, x) {
    var w = x.graphicalItems, S = x.stackGroups, g = x.offset, m = x.updateId, O = x.dataStartIndex, _ = x.dataEndIndex, P = b.barSize, k = b.layout, T = b.barGap, A = b.barCategoryGap, M = b.maxBarSize, C = c0(k), I = C.numericAxisName, $ = C.cateAxisName, N = Yq(w), L = [];
    return w.forEach(function(F, H) {
      var W = No(b.data, {
        graphicalItems: [F],
        dataStartIndex: O,
        dataEndIndex: _
      }), B = F.type.defaultProps !== void 0 ? D(D({}, F.type.defaultProps), F.props) : F.props, X = B.dataKey, ie = B.maxBarSize, le = B["".concat(I, "Id")], Ee = B["".concat($, "Id")], We = {}, ge = s.reduce(function(rt, nt) {
        var wt = x["".concat(nt.axisType, "Map")], cr = B["".concat(nt.axisType, "Id")];
        wt && wt[cr] || nt.axisType === "zAxis" || Sr();
        var K = wt[cr];
        return D(D({}, rt), {}, J(J({}, nt.axisType, K), "".concat(nt.axisType, "Ticks"), Nt(K)));
      }, We), z = ge[$], Y = ge["".concat($, "Ticks")], Z = S && S[le] && S[le].hasStack && RI(F, S[le].stackGroups), q = qt(F.type).indexOf("Bar") >= 0, ee = Ia(z, Y), te = [], _e = N && bI({
        barSize: P,
        stackGroups: S,
        totalSize: Jq(ge, $)
      });
      if (q) {
        var Se, fe, Xe = he(ie) ? M : ie, pt = (Se = (fe = Ia(z, Y, !0)) !== null && fe !== void 0 ? fe : Xe) !== null && Se !== void 0 ? Se : 0;
        te = xI({
          barGap: T,
          barCategoryGap: A,
          bandSize: pt !== ee ? pt : ee,
          sizeList: _e[Ee],
          maxBarSize: Xe
        }), pt !== ee && (te = te.map(function(rt) {
          return D(D({}, rt), {}, {
            position: D(D({}, rt.position), {}, {
              offset: rt.position.offset - pt / 2
            })
          });
        }));
      }
      var Ct = F && F.type && F.type.getComposedData;
      Ct && L.push({
        props: D(D({}, Ct(D(D({}, ge), {}, {
          displayedData: W,
          props: b,
          dataKey: X,
          item: F,
          bandSize: ee,
          barPosition: te,
          offset: g,
          stackedData: Z,
          layout: k,
          dataStartIndex: O,
          dataEndIndex: _
        }))), {}, J(J(J({
          key: F.key || "item-".concat(H)
        }, I, ge[I]), $, ge[$]), "animationId", m)),
        childIndex: w_(F, b.children),
        item: F
      });
    }), L;
  }, h = function(b, x) {
    var w = b.props, S = b.dataStartIndex, g = b.dataEndIndex, m = b.updateId;
    if (!qh({
      props: w
    }))
      return null;
    var O = w.children, _ = w.layout, P = w.stackOffset, k = w.data, T = w.reverseStackOrder, A = c0(_), M = A.numericAxisName, C = A.cateAxisName, I = bt(O, n), $ = II(k, I, "".concat(M, "Id"), "".concat(C, "Id"), P, T), N = s.reduce(function(B, X) {
      var ie = "".concat(X.axisType, "Map");
      return D(D({}, B), {}, J({}, ie, Vq(w, D(D({}, X), {}, {
        graphicalItems: I,
        stackGroups: X.axisType === M && $,
        dataStartIndex: S,
        dataEndIndex: g
      }))));
    }, {}), L = Zq(D(D({}, N), {}, {
      props: w,
      graphicalItems: I
    }), x?.legendBBox);
    Object.keys(N).forEach(function(B) {
      N[B] = f(w, N[B], L, B.replace("Map", ""), r);
    });
    var F = N["".concat(C, "Map")], H = Xq(F), W = d(w, D(D({}, N), {}, {
      dataStartIndex: S,
      dataEndIndex: g,
      updateId: m,
      graphicalItems: I,
      stackGroups: $,
      offset: L
    }));
    return D(D({
      formattedGraphicalItems: W,
      graphicalItems: I,
      offset: L,
      stackGroups: $
    }, H), N);
  }, y = /* @__PURE__ */ function(p) {
    function b(x) {
      var w, S, g;
      return Mq(this, b), g = kq(this, b, [x]), J(g, "eventEmitterSymbol", Symbol("rechartsEventEmitter")), J(g, "accessibilityManager", new gq()), J(g, "handleLegendBBoxUpdate", function(m) {
        if (m) {
          var O = g.state, _ = O.dataStartIndex, P = O.dataEndIndex, k = O.updateId;
          g.setState(D({
            legendBBox: m
          }, h({
            props: g.props,
            dataStartIndex: _,
            dataEndIndex: P,
            updateId: k
          }, D(D({}, g.state), {}, {
            legendBBox: m
          }))));
        }
      }), J(g, "handleReceiveSyncEvent", function(m, O, _) {
        if (g.props.syncId === m) {
          if (_ === g.eventEmitterSymbol && typeof g.props.syncMethod != "function")
            return;
          g.applySyncEvent(O);
        }
      }), J(g, "handleBrushChange", function(m) {
        var O = m.startIndex, _ = m.endIndex;
        if (O !== g.state.dataStartIndex || _ !== g.state.dataEndIndex) {
          var P = g.state.updateId;
          g.setState(function() {
            return D({
              dataStartIndex: O,
              dataEndIndex: _
            }, h({
              props: g.props,
              dataStartIndex: O,
              dataEndIndex: _,
              updateId: P
            }, g.state));
          }), g.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: _
          });
        }
      }), J(g, "handleMouseEnter", function(m) {
        var O = g.getMouseInfo(m);
        if (O) {
          var _ = D(D({}, O), {}, {
            isTooltipActive: !0
          });
          g.setState(_), g.triggerSyncEvent(_);
          var P = g.props.onMouseEnter;
          ne(P) && P(_, m);
        }
      }), J(g, "triggeredAfterMouseMove", function(m) {
        var O = g.getMouseInfo(m), _ = O ? D(D({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        g.setState(_), g.triggerSyncEvent(_);
        var P = g.props.onMouseMove;
        ne(P) && P(_, m);
      }), J(g, "handleItemMouseEnter", function(m) {
        g.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: m,
            activePayload: m.tooltipPayload,
            activeCoordinate: m.tooltipPosition || {
              x: m.cx,
              y: m.cy
            }
          };
        });
      }), J(g, "handleItemMouseLeave", function() {
        g.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), J(g, "handleMouseMove", function(m) {
        m.persist(), g.throttleTriggeredAfterMouseMove(m);
      }), J(g, "handleMouseLeave", function(m) {
        g.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        g.setState(O), g.triggerSyncEvent(O);
        var _ = g.props.onMouseLeave;
        ne(_) && _(O, m);
      }), J(g, "handleOuterEvent", function(m) {
        var O = x_(m), _ = lt(g.props, "".concat(O));
        if (O && ne(_)) {
          var P, k;
          /.*touch.*/i.test(O) ? k = g.getMouseInfo(m.changedTouches[0]) : k = g.getMouseInfo(m), _((P = k) !== null && P !== void 0 ? P : {}, m);
        }
      }), J(g, "handleClick", function(m) {
        var O = g.getMouseInfo(m);
        if (O) {
          var _ = D(D({}, O), {}, {
            isTooltipActive: !0
          });
          g.setState(_), g.triggerSyncEvent(_);
          var P = g.props.onClick;
          ne(P) && P(_, m);
        }
      }), J(g, "handleMouseDown", function(m) {
        var O = g.props.onMouseDown;
        if (ne(O)) {
          var _ = g.getMouseInfo(m);
          O(_, m);
        }
      }), J(g, "handleMouseUp", function(m) {
        var O = g.props.onMouseUp;
        if (ne(O)) {
          var _ = g.getMouseInfo(m);
          O(_, m);
        }
      }), J(g, "handleTouchMove", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && g.throttleTriggeredAfterMouseMove(m.changedTouches[0]);
      }), J(g, "handleTouchStart", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && g.handleMouseDown(m.changedTouches[0]);
      }), J(g, "handleTouchEnd", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && g.handleMouseUp(m.changedTouches[0]);
      }), J(g, "handleDoubleClick", function(m) {
        var O = g.props.onDoubleClick;
        if (ne(O)) {
          var _ = g.getMouseInfo(m);
          O(_, m);
        }
      }), J(g, "handleContextMenu", function(m) {
        var O = g.props.onContextMenu;
        if (ne(O)) {
          var _ = g.getMouseInfo(m);
          O(_, m);
        }
      }), J(g, "triggerSyncEvent", function(m) {
        g.props.syncId !== void 0 && Wl.emit(Ul, g.props.syncId, m, g.eventEmitterSymbol);
      }), J(g, "applySyncEvent", function(m) {
        var O = g.props, _ = O.layout, P = O.syncMethod, k = g.state.updateId, T = m.dataStartIndex, A = m.dataEndIndex;
        if (m.dataStartIndex !== void 0 || m.dataEndIndex !== void 0)
          g.setState(D({
            dataStartIndex: T,
            dataEndIndex: A
          }, h({
            props: g.props,
            dataStartIndex: T,
            dataEndIndex: A,
            updateId: k
          }, g.state)));
        else if (m.activeTooltipIndex !== void 0) {
          var M = m.chartX, C = m.chartY, I = m.activeTooltipIndex, $ = g.state, N = $.offset, L = $.tooltipTicks;
          if (!N)
            return;
          if (typeof P == "function")
            I = P(L, m);
          else if (P === "value") {
            I = -1;
            for (var F = 0; F < L.length; F++)
              if (L[F].value === m.activeLabel) {
                I = F;
                break;
              }
          }
          var H = D(D({}, N), {}, {
            x: N.left,
            y: N.top
          }), W = Math.min(M, H.x + H.width), B = Math.min(C, H.y + H.height), X = L[I] && L[I].value, ie = cd(g.state, g.props.data, I), le = L[I] ? {
            x: _ === "horizontal" ? L[I].coordinate : W,
            y: _ === "horizontal" ? B : L[I].coordinate
          } : T1;
          g.setState(D(D({}, m), {}, {
            activeLabel: X,
            activeCoordinate: le,
            activePayload: ie,
            activeTooltipIndex: I
          }));
        } else
          g.setState(m);
      }), J(g, "renderCursor", function(m) {
        var O, _ = g.state, P = _.isTooltipActive, k = _.activeCoordinate, T = _.activePayload, A = _.offset, M = _.activeTooltipIndex, C = _.tooltipAxisBandSize, I = g.getTooltipEventType(), $ = (O = m.props.active) !== null && O !== void 0 ? O : P, N = g.props.layout, L = m.key || "_recharts-cursor";
        return /* @__PURE__ */ j.createElement(_q, {
          key: L,
          activeCoordinate: k,
          activePayload: T,
          activeTooltipIndex: M,
          chartName: r,
          element: m,
          isActive: $,
          layout: N,
          offset: A,
          tooltipAxisBandSize: C,
          tooltipEventType: I
        });
      }), J(g, "renderPolarAxis", function(m, O, _) {
        var P = lt(m, "type.axisType"), k = lt(g.state, "".concat(P, "Map")), T = m.type.defaultProps, A = T !== void 0 ? D(D({}, T), m.props) : m.props, M = k && k[A["".concat(P, "Id")]];
        return /* @__PURE__ */ R.cloneElement(m, D(D({}, M), {}, {
          className: Q(P, M.className),
          key: m.key || "".concat(O, "-").concat(_),
          ticks: Nt(M, !0)
        }));
      }), J(g, "renderPolarGrid", function(m) {
        var O = m.props, _ = O.radialLines, P = O.polarAngles, k = O.polarRadius, T = g.state, A = T.radiusAxisMap, M = T.angleAxisMap, C = Xt(A), I = Xt(M), $ = I.cx, N = I.cy, L = I.innerRadius, F = I.outerRadius;
        return /* @__PURE__ */ R.cloneElement(m, {
          polarAngles: Array.isArray(P) ? P : Nt(I, !0).map(function(H) {
            return H.coordinate;
          }),
          polarRadius: Array.isArray(k) ? k : Nt(C, !0).map(function(H) {
            return H.coordinate;
          }),
          cx: $,
          cy: N,
          innerRadius: L,
          outerRadius: F,
          key: m.key || "polar-grid",
          radialLines: _
        });
      }), J(g, "renderLegend", function() {
        var m = g.state.formattedGraphicalItems, O = g.props, _ = O.children, P = O.width, k = O.height, T = g.props.margin || {}, A = P - (T.left || 0) - (T.right || 0), M = Ow({
          children: _,
          formattedGraphicalItems: m,
          legendWidth: A,
          legendContent: c
        });
        if (!M)
          return null;
        var C = M.item, I = a0(M, Pq);
        return /* @__PURE__ */ R.cloneElement(C, D(D({}, I), {}, {
          chartWidth: P,
          chartHeight: k,
          margin: T,
          onBBoxUpdate: g.handleLegendBBoxUpdate
        }));
      }), J(g, "renderTooltip", function() {
        var m, O = g.props, _ = O.children, P = O.accessibilityLayer, k = et(_, $t);
        if (!k)
          return null;
        var T = g.state, A = T.isTooltipActive, M = T.activeCoordinate, C = T.activePayload, I = T.activeLabel, $ = T.offset, N = (m = k.props.active) !== null && m !== void 0 ? m : A;
        return /* @__PURE__ */ R.cloneElement(k, {
          viewBox: D(D({}, $), {}, {
            x: $.left,
            y: $.top
          }),
          active: N,
          label: I,
          payload: N ? C : [],
          coordinate: M,
          accessibilityLayer: P
        });
      }), J(g, "renderBrush", function(m) {
        var O = g.props, _ = O.margin, P = O.data, k = g.state, T = k.offset, A = k.dataStartIndex, M = k.dataEndIndex, C = k.updateId;
        return /* @__PURE__ */ R.cloneElement(m, {
          key: m.key || "_recharts-brush",
          onChange: Ki(g.handleBrushChange, m.props.onChange),
          data: P,
          x: U(m.props.x) ? m.props.x : T.left,
          y: U(m.props.y) ? m.props.y : T.top + T.height + T.brushBottom - (_.bottom || 0),
          width: U(m.props.width) ? m.props.width : T.width,
          startIndex: A,
          endIndex: M,
          updateId: "brush-".concat(C)
        });
      }), J(g, "renderReferenceElement", function(m, O, _) {
        if (!m)
          return null;
        var P = g, k = P.clipPathId, T = g.state, A = T.xAxisMap, M = T.yAxisMap, C = T.offset, I = m.type.defaultProps || {}, $ = m.props, N = $.xAxisId, L = N === void 0 ? I.xAxisId : N, F = $.yAxisId, H = F === void 0 ? I.yAxisId : F;
        return /* @__PURE__ */ R.cloneElement(m, {
          key: m.key || "".concat(O, "-").concat(_),
          xAxis: A[L],
          yAxis: M[H],
          viewBox: {
            x: C.left,
            y: C.top,
            width: C.width,
            height: C.height
          },
          clipPathId: k
        });
      }), J(g, "renderActivePoints", function(m) {
        var O = m.item, _ = m.activePoint, P = m.basePoint, k = m.childIndex, T = m.isRange, A = [], M = O.props.key, C = O.item.type.defaultProps !== void 0 ? D(D({}, O.item.type.defaultProps), O.item.props) : O.item.props, I = C.activeDot, $ = C.dataKey, N = D(D({
          index: k,
          dataKey: $,
          cx: _.x,
          cy: _.y,
          r: 4,
          fill: ap(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: _.payload,
          value: _.value
        }, ce(I, !1)), aa(I));
        return A.push(b.renderActiveDot(I, N, "".concat(M, "-activePoint-").concat(k))), P ? A.push(b.renderActiveDot(I, D(D({}, N), {}, {
          cx: P.x,
          cy: P.y
        }), "".concat(M, "-basePoint-").concat(k))) : T && A.push(null), A;
      }), J(g, "renderGraphicChild", function(m, O, _) {
        var P = g.filterFormatItem(m, O, _);
        if (!P)
          return null;
        var k = g.getTooltipEventType(), T = g.state, A = T.isTooltipActive, M = T.tooltipAxis, C = T.activeTooltipIndex, I = T.activeLabel, $ = g.props.children, N = et($, $t), L = P.props, F = L.points, H = L.isRange, W = L.baseLine, B = P.item.type.defaultProps !== void 0 ? D(D({}, P.item.type.defaultProps), P.item.props) : P.item.props, X = B.activeDot, ie = B.hide, le = B.activeBar, Ee = B.activeShape, We = !!(!ie && A && N && (X || le || Ee)), ge = {};
        k !== "axis" && N && N.props.trigger === "click" ? ge = {
          onClick: Ki(g.handleItemMouseEnter, m.props.onClick)
        } : k !== "axis" && (ge = {
          onMouseLeave: Ki(g.handleItemMouseLeave, m.props.onMouseLeave),
          onMouseEnter: Ki(g.handleItemMouseEnter, m.props.onMouseEnter)
        });
        var z = /* @__PURE__ */ R.cloneElement(m, D(D({}, P.props), ge));
        function Y(nt) {
          return typeof M.dataKey == "function" ? M.dataKey(nt.payload) : null;
        }
        if (We)
          if (C >= 0) {
            var Z, q;
            if (M.dataKey && !M.allowDuplicatedCategory) {
              var ee = typeof M.dataKey == "function" ? Y : "payload.".concat(M.dataKey.toString());
              Z = Vl(F, ee, I), q = H && W && Vl(W, ee, I);
            } else
              Z = F?.[C], q = H && W && W[C];
            if (Ee || le) {
              var te = m.props.activeIndex !== void 0 ? m.props.activeIndex : C;
              return [/* @__PURE__ */ R.cloneElement(m, D(D(D({}, P.props), ge), {}, {
                activeIndex: te
              })), null, null];
            }
            if (!he(Z))
              return [z].concat(ln(g.renderActivePoints({
                item: P,
                activePoint: Z,
                basePoint: q,
                childIndex: C,
                isRange: H
              })));
          } else {
            var _e, Se = (_e = g.getItemByXY(g.state.activeCoordinate)) !== null && _e !== void 0 ? _e : {
              graphicalItem: z
            }, fe = Se.graphicalItem, Xe = fe.item, pt = Xe === void 0 ? m : Xe, Ct = fe.childIndex, rt = D(D(D({}, P.props), ge), {}, {
              activeIndex: Ct
            });
            return [/* @__PURE__ */ R.cloneElement(pt, rt), null, null];
          }
        return H ? [z, null, null] : [z, null];
      }), J(g, "renderCustomized", function(m, O, _) {
        return /* @__PURE__ */ R.cloneElement(m, D(D({
          key: "recharts-customized-".concat(_)
        }, g.props), g.state));
      }), J(g, "renderMap", {
        CartesianGrid: {
          handler: Yi,
          once: !0
        },
        ReferenceArea: {
          handler: g.renderReferenceElement
        },
        ReferenceLine: {
          handler: Yi
        },
        ReferenceDot: {
          handler: g.renderReferenceElement
        },
        XAxis: {
          handler: Yi
        },
        YAxis: {
          handler: Yi
        },
        Brush: {
          handler: g.renderBrush,
          once: !0
        },
        Bar: {
          handler: g.renderGraphicChild
        },
        Line: {
          handler: g.renderGraphicChild
        },
        Area: {
          handler: g.renderGraphicChild
        },
        Radar: {
          handler: g.renderGraphicChild
        },
        RadialBar: {
          handler: g.renderGraphicChild
        },
        Scatter: {
          handler: g.renderGraphicChild
        },
        Pie: {
          handler: g.renderGraphicChild
        },
        Funnel: {
          handler: g.renderGraphicChild
        },
        Tooltip: {
          handler: g.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: g.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: g.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: g.renderPolarAxis
        },
        Customized: {
          handler: g.renderCustomized
        }
      }), g.clipPathId = "".concat((w = x.id) !== null && w !== void 0 ? w : so("recharts"), "-clip"), g.throttleTriggeredAfterMouseMove = Ox(g.triggeredAfterMouseMove, (S = x.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), g.state = {}, g;
    }
    return Nq(b, p), $q(b, [{
      key: "componentDidMount",
      value: function() {
        var w, S;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (w = this.props.margin.left) !== null && w !== void 0 ? w : 0,
            top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var w = this.props, S = w.children, g = w.data, m = w.height, O = w.layout, _ = et(S, $t);
        if (_) {
          var P = _.props.defaultIndex;
          if (!(typeof P != "number" || P < 0 || P > this.state.tooltipTicks.length - 1)) {
            var k = this.state.tooltipTicks[P] && this.state.tooltipTicks[P].value, T = cd(this.state, g, P, k), A = this.state.tooltipTicks[P].coordinate, M = (this.state.offset.top + m) / 2, C = O === "horizontal", I = C ? {
              x: A,
              y: M
            } : {
              y: A,
              x: M
            }, $ = this.state.formattedGraphicalItems.find(function(L) {
              var F = L.item;
              return F.type.name === "Scatter";
            });
            $ && (I = D(D({}, I), $.props.points[P].tooltipPosition), T = $.props.points[P].tooltipPayload);
            var N = {
              activeTooltipIndex: P,
              isTooltipActive: !0,
              activeLabel: k,
              activePayload: T,
              activeCoordinate: I
            };
            this.setState(N), this.renderCursor(_), this.accessibilityManager.setIndex(P);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(w, S) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== w.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== w.margin) {
          var g, m;
          this.accessibilityManager.setDetails({
            offset: {
              left: (g = this.props.margin.left) !== null && g !== void 0 ? g : 0,
              top: (m = this.props.margin.top) !== null && m !== void 0 ? m : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(w) {
        Yl([et(w.children, $t)], [et(this.props.children, $t)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var w = et(this.props.children, $t);
        if (w && typeof w.props.shared == "boolean") {
          var S = w.props.shared ? "axis" : "item";
          return u.indexOf(S) >= 0 ? S : a;
        }
        return a;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(w) {
        if (!this.container)
          return null;
        var S = this.container, g = S.getBoundingClientRect(), m = sE(g), O = {
          chartX: Math.round(w.pageX - m.left),
          chartY: Math.round(w.pageY - m.top)
        }, _ = g.width / S.offsetWidth || 1, P = this.inRange(O.chartX, O.chartY, _);
        if (!P)
          return null;
        var k = this.state, T = k.xAxisMap, A = k.yAxisMap, M = this.getTooltipEventType();
        if (M !== "axis" && T && A) {
          var C = Xt(T).scale, I = Xt(A).scale, $ = C && C.invert ? C.invert(O.chartX) : null, N = I && I.invert ? I.invert(O.chartY) : null;
          return D(D({}, O), {}, {
            xValue: $,
            yValue: N
          });
        }
        var L = u0(this.state, this.props.data, this.props.layout, P);
        return L ? D(D({}, O), L) : null;
      }
    }, {
      key: "inRange",
      value: function(w, S) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, m = this.props.layout, O = w / g, _ = S / g;
        if (m === "horizontal" || m === "vertical") {
          var P = this.state.offset, k = O >= P.left && O <= P.left + P.width && _ >= P.top && _ <= P.top + P.height;
          return k ? {
            x: O,
            y: _
          } : null;
        }
        var T = this.state, A = T.angleAxisMap, M = T.radiusAxisMap;
        if (A && M) {
          var C = Xt(A);
          return Am({
            x: O,
            y: _
          }, C);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var w = this.props.children, S = this.getTooltipEventType(), g = et(w, $t), m = {};
        g && S === "axis" && (g.props.trigger === "click" ? m = {
          onClick: this.handleClick
        } : m = {
          onMouseEnter: this.handleMouseEnter,
          onDoubleClick: this.handleDoubleClick,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd,
          onContextMenu: this.handleContextMenu
        });
        var O = aa(this.props, this.handleOuterEvent);
        return D(D({}, O), m);
      }
    }, {
      key: "addListener",
      value: function() {
        Wl.on(Ul, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        Wl.removeListener(Ul, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(w, S, g) {
        for (var m = this.state.formattedGraphicalItems, O = 0, _ = m.length; O < _; O++) {
          var P = m[O];
          if (P.item === w || P.props.key === w.key || S === qt(P.item.type) && g === P.childIndex)
            return P;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var w = this.clipPathId, S = this.state.offset, g = S.left, m = S.top, O = S.height, _ = S.width;
        return /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("clipPath", {
          id: w
        }, /* @__PURE__ */ j.createElement("rect", {
          x: g,
          y: m,
          height: O,
          width: _
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var w = this.state.xAxisMap;
        return w ? Object.entries(w).reduce(function(S, g) {
          var m = i0(g, 2), O = m[0], _ = m[1];
          return D(D({}, S), {}, J({}, O, _.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var w = this.state.yAxisMap;
        return w ? Object.entries(w).reduce(function(S, g) {
          var m = i0(g, 2), O = m[0], _ = m[1];
          return D(D({}, S), {}, J({}, O, _.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(w) {
        var S;
        return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[w]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(w) {
        var S;
        return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[w]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(w) {
        var S = this.state, g = S.formattedGraphicalItems, m = S.activeItem;
        if (g && g.length)
          for (var O = 0, _ = g.length; O < _; O++) {
            var P = g[O], k = P.props, T = P.item, A = T.type.defaultProps !== void 0 ? D(D({}, T.type.defaultProps), T.props) : T.props, M = qt(T.type);
            if (M === "Bar") {
              var C = (k.data || []).find(function(L) {
                return PR(w, L);
              });
              if (C)
                return {
                  graphicalItem: P,
                  payload: C
                };
            } else if (M === "RadialBar") {
              var I = (k.data || []).find(function(L) {
                return Am(w, L);
              });
              if (I)
                return {
                  graphicalItem: P,
                  payload: I
                };
            } else if (Eo(P, m) || jo(P, m) || hi(P, m)) {
              var $ = vD({
                graphicalItem: P,
                activeTooltipItem: m,
                itemData: A.data
              }), N = A.activeIndex === void 0 ? $ : A.activeIndex;
              return {
                graphicalItem: D(D({}, P), {}, {
                  childIndex: N
                }),
                payload: hi(P, m) ? A.data[$] : P.props.data[$]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var w = this;
        if (!qh(this))
          return null;
        var S = this.props, g = S.children, m = S.className, O = S.width, _ = S.height, P = S.style, k = S.compact, T = S.title, A = S.desc, M = a0(S, Aq), C = ce(M, !1);
        if (k)
          return /* @__PURE__ */ j.createElement(zb, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ j.createElement(Jl, qr({}, C, {
            width: O,
            height: _,
            title: T,
            desc: A
          }), this.renderClipPath(), Bh(g, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var I, $;
          C.tabIndex = (I = this.props.tabIndex) !== null && I !== void 0 ? I : 0, C.role = ($ = this.props.role) !== null && $ !== void 0 ? $ : "application", C.onKeyDown = function(L) {
            w.accessibilityManager.keyboardEvent(L);
          }, C.onFocus = function() {
            w.accessibilityManager.focus();
          };
        }
        var N = this.parseEventsOfWrapper();
        return /* @__PURE__ */ j.createElement(zb, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ j.createElement("div", qr({
          className: Q("recharts-wrapper", m),
          style: D({
            position: "relative",
            cursor: "default",
            width: O,
            height: _
          }, P)
        }, N, {
          ref: function(F) {
            w.container = F;
          }
        }), /* @__PURE__ */ j.createElement(Jl, qr({}, C, {
          width: O,
          height: _,
          title: T,
          desc: A,
          style: Wq
        }), this.renderClipPath(), Bh(g, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
  }(R.Component);
  J(y, "displayName", r), J(y, "defaultProps", D({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, l)), J(y, "getDerivedStateFromProps", function(p, b) {
    var x = p.dataKey, w = p.data, S = p.children, g = p.width, m = p.height, O = p.layout, _ = p.stackOffset, P = p.margin, k = b.dataStartIndex, T = b.dataEndIndex;
    if (b.updateId === void 0) {
      var A = s0(p);
      return D(D(D({}, A), {}, {
        updateId: 0
      }, h(D(D({
        props: p
      }, A), {}, {
        updateId: 0
      }), b)), {}, {
        prevDataKey: x,
        prevData: w,
        prevWidth: g,
        prevHeight: m,
        prevLayout: O,
        prevStackOffset: _,
        prevMargin: P,
        prevChildren: S
      });
    }
    if (x !== b.prevDataKey || w !== b.prevData || g !== b.prevWidth || m !== b.prevHeight || O !== b.prevLayout || _ !== b.prevStackOffset || !Lr(P, b.prevMargin)) {
      var M = s0(p), C = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: b.chartX,
        chartY: b.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: b.isTooltipActive
      }, I = D(D({}, u0(b, w, O)), {}, {
        updateId: b.updateId + 1
      }), $ = D(D(D({}, M), C), I);
      return D(D(D({}, $), h(D({
        props: p
      }, $), b)), {}, {
        prevDataKey: x,
        prevData: w,
        prevWidth: g,
        prevHeight: m,
        prevLayout: O,
        prevStackOffset: _,
        prevMargin: P,
        prevChildren: S
      });
    }
    if (!Yl(S, b.prevChildren)) {
      var N, L, F, H, W = et(S, en), B = W && (N = (L = W.props) === null || L === void 0 ? void 0 : L.startIndex) !== null && N !== void 0 ? N : k, X = W && (F = (H = W.props) === null || H === void 0 ? void 0 : H.endIndex) !== null && F !== void 0 ? F : T, ie = B !== k || X !== T, le = !he(w), Ee = le && !ie ? b.updateId : b.updateId + 1;
      return D(D({
        updateId: Ee
      }, h(D(D({
        props: p
      }, b), {}, {
        updateId: Ee,
        dataStartIndex: B,
        dataEndIndex: X
      }), b)), {}, {
        prevChildren: S,
        dataStartIndex: B,
        dataEndIndex: X
      });
    }
    return null;
  }), J(y, "renderActiveDot", function(p, b, x) {
    var w;
    return /* @__PURE__ */ R.isValidElement(p) ? w = /* @__PURE__ */ R.cloneElement(p, b) : ne(p) ? w = p(b) : w = /* @__PURE__ */ j.createElement(Bw, b), /* @__PURE__ */ j.createElement(qe, {
      className: "recharts-active-dot",
      key: x
    }, w);
  });
  var v = /* @__PURE__ */ R.forwardRef(function(b, x) {
    return /* @__PURE__ */ j.createElement(y, qr({}, b, {
      ref: x
    }));
  });
  return v.displayName = y.displayName, v;
}, eL = Qq({
  chartName: "BarChart",
  GraphicalChild: Er,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Ro
  }, {
    axisType: "yAxis",
    AxisComp: Do
  }],
  formatAxisMap: fN
});
function tL({ baseline: e, simulated: t }) {
  const r = ld(), n = [
    { name: "Baseline (derived)", kg: e },
    { name: "After intervention (simulated)", kg: t }
  ], i = e - t;
  return /* @__PURE__ */ E.jsxs("figure", { style: { margin: 0 }, "aria-label": "Before-and-after emissions comparison", children: [
    /* @__PURE__ */ E.jsx("figcaption", { children: /* @__PURE__ */ E.jsxs(Pe, { component: "p", fontWeight: 600, children: [
      "Baseline ",
      e.toLocaleString("en-US"),
      " kgCO2e vs simulated ",
      t.toLocaleString("en-US"),
      " kgCO2e (simulated reduction ",
      i.toLocaleString("en-US"),
      " kgCO2e)"
    ] }) }),
    /* @__PURE__ */ E.jsx("div", { "aria-hidden": "true", style: { width: "100%", height: 240 }, children: /* @__PURE__ */ E.jsx(tE, { width: "100%", height: "100%", children: /* @__PURE__ */ E.jsxs(eL, { data: n, margin: { top: 24, right: 16, left: 8, bottom: 8 }, children: [
      /* @__PURE__ */ E.jsx(v1, { strokeDasharray: "3 3", stroke: r.palette.divider }),
      /* @__PURE__ */ E.jsx(Ro, { dataKey: "name", stroke: r.palette.text.primary }),
      /* @__PURE__ */ E.jsx(Do, { stroke: r.palette.text.primary, unit: " kg", width: 80, domain: [0, "auto"] }),
      /* @__PURE__ */ E.jsx(Er, { dataKey: "kg", fill: r.palette.primary.main, stroke: r.palette.text.primary, isAnimationActive: !1, children: /* @__PURE__ */ E.jsx(Jt, { dataKey: "kg", position: "top", formatter: (a) => `${a.toLocaleString("en-US")} kg` }) })
    ] }) }) }),
    /* @__PURE__ */ E.jsx(y0, { component: fd, children: /* @__PURE__ */ E.jsxs(g0, { size: "small", "aria-label": "Chart data table", children: [
      /* @__PURE__ */ E.jsx(m0, { children: /* @__PURE__ */ E.jsxs(kn, { children: [
        /* @__PURE__ */ E.jsx(ke, { component: "th", scope: "col", children: "Scenario" }),
        /* @__PURE__ */ E.jsx(ke, { component: "th", scope: "col", children: "kgCO2e" }),
        /* @__PURE__ */ E.jsx(ke, { component: "th", scope: "col", children: "Value type" })
      ] }) }),
      /* @__PURE__ */ E.jsxs(b0, { children: [
        /* @__PURE__ */ E.jsxs(kn, { children: [
          /* @__PURE__ */ E.jsx(ke, { children: "Baseline" }),
          /* @__PURE__ */ E.jsx(ke, { children: e.toLocaleString("en-US") }),
          /* @__PURE__ */ E.jsx(ke, { children: "Derived from synthetic records" })
        ] }),
        /* @__PURE__ */ E.jsxs(kn, { children: [
          /* @__PURE__ */ E.jsx(ke, { children: "After intervention" }),
          /* @__PURE__ */ E.jsx(ke, { children: t.toLocaleString("en-US") }),
          /* @__PURE__ */ E.jsx(ke, { children: "Simulated estimate" })
        ] })
      ] })
    ] }) })
  ] });
}
const Zi = L1.electricity;
function rL({ apiBaseUrl: e, initialDays: t, showSensitivity: r }) {
  const [n, i] = R.useState({
    idleThresholdMinutes: 15,
    analysisDays: t,
    equipmentEfficiencyPct: 85,
    emissionFactor: Zi.value
  }), [a, o] = R.useState(null), [u, s] = R.useState(null);
  R.useEffect(() => {
    const f = new AbortController(), l = setTimeout(() => {
      Kl.simulate(e, n, f.signal).then(
        (d) => {
          f.signal.aborted || (o(d), s(null));
        },
        (d) => {
          f.signal.aborted || s(d.code ?? "NETWORK");
        }
      );
    }, 250);
    return () => {
      clearTimeout(l), f.abort();
    };
  }, [e, n]);
  const c = (f, l, d, h, y, v, p) => /* @__PURE__ */ E.jsxs("div", { style: { minWidth: 220, flex: "1 1 220px" }, children: [
    /* @__PURE__ */ E.jsxs("label", { htmlFor: f, style: { display: "block" }, children: [
      l,
      ": ",
      n[d],
      " ",
      p
    ] }),
    /* @__PURE__ */ E.jsx(
      wO,
      {
        id: f,
        min: h,
        max: y,
        step: v,
        value: n[d],
        valueLabelDisplay: "auto",
        "aria-label": l,
        onChange: (b, x) => i((w) => ({ ...w, [d]: x }))
      }
    )
  ] });
  return /* @__PURE__ */ E.jsx(ta, { "aria-labelledby": "sim-title", children: /* @__PURE__ */ E.jsxs(ra, { sx: { display: "grid", gap: 2 }, children: [
    /* @__PURE__ */ E.jsx(Pe, { id: "sim-title", variant: "h5", component: "h3", fontWeight: 600, children: "Before-and-after simulation" }),
    /* @__PURE__ */ E.jsx(Pe, { component: "p", children: "Adjust analytical assumptions only. These inputs never control or signal any airport equipment." }),
    /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", gap: 24, flexWrap: "wrap" }, children: [
      c("sim-idle", "Eligible idle threshold", "idleThresholdMinutes", jr.idleThresholdMinutes.min, jr.idleThresholdMinutes.max, 5, "min"),
      c("sim-ef", "Emission factor (synthetic)", "emissionFactor", Zi.min, Zi.max, 0.01, Zi.unit),
      c("sim-days", "Analysis period", "analysisDays", jr.analysisDays.min, jr.analysisDays.max, 1, "days"),
      c("sim-eff", "Equipment efficiency assumption", "equipmentEfficiencyPct", jr.equipmentEfficiencyPct.min, jr.equipmentEfficiencyPct.max, 5, "%")
    ] }),
    u && /* @__PURE__ */ E.jsx(p0, { code: u }),
    !a && !u && /* @__PURE__ */ E.jsx(h0, { label: "Running simulation" }),
    a && /* @__PURE__ */ E.jsxs("div", { "aria-live": "polite", children: [
      /* @__PURE__ */ E.jsx(tL, { baseline: a.baselineKgCO2e, simulated: a.simulatedKgCO2e }),
      /* @__PURE__ */ E.jsxs("ul", { style: { listStyle: "none", padding: 0, display: "grid", gap: 6 }, children: [
        /* @__PURE__ */ E.jsxs("li", { children: [
          "Baseline: ",
          /* @__PURE__ */ E.jsxs("strong", { children: [
            a.baselineKgCO2e.toLocaleString("en-US"),
            " kgCO2e"
          ] }),
          " ",
          /* @__PURE__ */ E.jsx(zo, { kind: a.valueKinds.baseline })
        ] }),
        /* @__PURE__ */ E.jsxs("li", { children: [
          "Simulated post-intervention: ",
          /* @__PURE__ */ E.jsxs("strong", { children: [
            a.simulatedKgCO2e.toLocaleString("en-US"),
            " kgCO2e"
          ] }),
          " ",
          /* @__PURE__ */ E.jsx(zo, { kind: a.valueKinds.simulated })
        ] }),
        /* @__PURE__ */ E.jsxs("li", { children: [
          "Absolute reduction: ",
          /* @__PURE__ */ E.jsxs("strong", { children: [
            a.reductionKgCO2e.toLocaleString("en-US"),
            " kgCO2e"
          ] }),
          " (",
          a.reductionPct,
          "%) ",
          /* @__PURE__ */ E.jsx(zo, { kind: a.valueKinds.reduction })
        ] }),
        /* @__PURE__ */ E.jsxs("li", { children: [
          "Energy estimate: ",
          a.avoidedEnergy.amount.toLocaleString("en-US"),
          " ",
          a.avoidedEnergy.unit,
          "; cost estimate: ",
          a.estimatedCostSaving.amount.toLocaleString("en-US"),
          " ",
          a.estimatedCostSaving.currency,
          " (synthetic)"
        ] }),
        r && /* @__PURE__ */ E.jsxs("li", { children: [
          "Assumption sensitivity: ",
          /* @__PURE__ */ E.jsx("strong", { children: a.sensitivity.level }),
          ". Reduction range across validated assumption bounds: ",
          a.sensitivity.lowKgCO2e.toLocaleString("en-US"),
          " to ",
          a.sensitivity.highKgCO2e.toLocaleString("en-US"),
          " kgCO2e."
        ] })
      ] }),
      /* @__PURE__ */ E.jsx(Pe, { variant: "h6", component: "h4", fontWeight: 600, children: "Calculation summary" }),
      /* @__PURE__ */ E.jsx("ol", { children: a.calculationSummary.map((f) => /* @__PURE__ */ E.jsx("li", { children: f }, f)) }),
      /* @__PURE__ */ E.jsx(Pe, { variant: "body2", children: "This is a simulated estimate, not a measured or guaranteed outcome. No reduction has occurred." })
    ] })
  ] }) });
}
function oL() {
  const { props: e, publish: t } = B1(), r = R.useRef(F1()), n = X1(async (s) => {
    const c = r.current;
    t(Ii.analysisStarted, { v: 1, correlationId: c });
    try {
      const [f, l] = await Promise.all([
        Kl.analysis(e.apiBaseUrl, c, s),
        Kl.recommendation(e.apiBaseUrl, s)
      ]);
      return s.aborted || t(Ii.analysisCompleted, {
        v: 1,
        correlationId: c,
        hotspotFound: f.hotspot !== null,
        reductionKgCO2e: l.recommendation?.expectedReductionKgCO2e ?? null
      }), { analysis: f, recommendation: l, cid: c };
    } catch (f) {
      if (!s.aborted) {
        const l = f.code;
        t(Ii.analysisFailed, {
          v: 1,
          correlationId: c,
          code: l === "TIMEOUT" || l === "INVALID_DATA" || l === "SERVER" ? l : "NETWORK"
        });
      }
      throw f;
    }
  }, [e.apiBaseUrl]);
  if (n.status === "loading") return /* @__PURE__ */ E.jsx(h0, { label: "Analysing synthetic data" });
  if (n.status === "error") return /* @__PURE__ */ E.jsx(p0, { code: n.code });
  const { analysis: i, recommendation: a, cid: o } = n.data, u = i.hotspot;
  return /* @__PURE__ */ E.jsxs("section", { "aria-labelledby": "hs-title", style: { display: "grid", gap: 16 }, children: [
    /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ E.jsx(Pe, { id: "hs-title", variant: "h4", component: "h2", fontWeight: 600, children: "Carbon hotspot analysis" }),
      /* @__PURE__ */ E.jsx(z1, {}),
      /* @__PURE__ */ E.jsx(ea, { color: "warning", label: "Advisory only" })
    ] }),
    !u || !a.recommendation ? /* @__PURE__ */ E.jsx(W1, {}) : /* @__PURE__ */ E.jsxs(E.Fragment, { children: [
      /* @__PURE__ */ E.jsxs("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
        /* @__PURE__ */ E.jsx($i, { label: "Operational source", value: u.label, caption: `Zone ${u.zoneId} (fictional)` }),
        /* @__PURE__ */ E.jsx($i, { label: "Current emissions", value: `${u.kgCO2e.toLocaleString("en-US")} kgCO2e`, caption: u.baselinePeriod.label }),
        /* @__PURE__ */ E.jsx($i, { label: "Estimated avoidable (simulated)", value: `${u.avoidableKgCO2e.toLocaleString("en-US")} kgCO2e`, caption: `${u.contributionPct}% of total emissions come from this source` }),
        /* @__PURE__ */ E.jsx(
          $i,
          {
            label: "Evidence strength",
            value: `${Math.round(u.confidence * 100)} / 100`,
            caption: "Indicates evidence strength, not certainty",
            hint: `Confidence = 0.4 × completeness (${u.confidenceBreakdown.completeness}) + 0.3 × measured share (${u.confidenceBreakdown.measuredShare}) + 0.3 × repeatability (${u.confidenceBreakdown.repeatability}). Threshold ${i.confidenceThreshold}.`
          }
        )
      ] }),
      /* @__PURE__ */ E.jsx(ta, { children: /* @__PURE__ */ E.jsxs(ra, { children: [
        /* @__PURE__ */ E.jsx(Pe, { variant: "h5", component: "h3", fontWeight: 600, children: "Why this hotspot was selected" }),
        /* @__PURE__ */ E.jsx(Pe, { component: "p", children: u.selectionReason }),
        /* @__PURE__ */ E.jsxs(Pe, { component: "p", children: [
          /* @__PURE__ */ E.jsx("strong", { children: "Supporting operational pattern: " }),
          u.supportingPattern
        ] }),
        /* @__PURE__ */ E.jsx(Pe, { variant: "h6", component: "h4", fontWeight: 600, children: "Known uncertainties and limitations" }),
        /* @__PURE__ */ E.jsx("ul", { children: u.uncertainties.map((s) => /* @__PURE__ */ E.jsx("li", { children: s }, s)) })
      ] }) }),
      /* @__PURE__ */ E.jsx(ta, { children: /* @__PURE__ */ E.jsxs(ra, { children: [
        /* @__PURE__ */ E.jsx(Pe, { variant: "h5", component: "h3", fontWeight: 600, children: "Why other groups were not selected" }),
        /* @__PURE__ */ E.jsx(y0, { children: /* @__PURE__ */ E.jsxs(g0, { "aria-label": "Candidate groups", children: [
          /* @__PURE__ */ E.jsx(m0, { children: /* @__PURE__ */ E.jsxs(kn, { children: [
            /* @__PURE__ */ E.jsx(ke, { component: "th", scope: "col", children: "Source" }),
            /* @__PURE__ */ E.jsx(ke, { component: "th", scope: "col", children: "Zone" }),
            /* @__PURE__ */ E.jsx(ke, { component: "th", scope: "col", children: "Avoidable (kgCO2e)" }),
            /* @__PURE__ */ E.jsx(ke, { component: "th", scope: "col", children: "Evidence" }),
            /* @__PURE__ */ E.jsx(ke, { component: "th", scope: "col", children: "Outcome" })
          ] }) }),
          /* @__PURE__ */ E.jsx(b0, { children: i.candidates.map((s) => /* @__PURE__ */ E.jsxs(kn, { children: [
            /* @__PURE__ */ E.jsx(ke, { children: s.label }),
            /* @__PURE__ */ E.jsx(ke, { children: s.zoneId }),
            /* @__PURE__ */ E.jsx(ke, { children: s.avoidableKgCO2e.toLocaleString("en-US") }),
            /* @__PURE__ */ E.jsx(ke, { children: s.confidence }),
            /* @__PURE__ */ E.jsxs(ke, { children: [
              /* @__PURE__ */ E.jsx(V1, { title: s.reason, describeChild: !0, children: /* @__PURE__ */ E.jsx(ea, { tabIndex: 0, size: "small", variant: s.selected ? "filled" : "outlined", color: s.selected ? "primary" : "default", label: s.selected ? "Selected" : "Not selected" }) }),
              " ",
              /* @__PURE__ */ E.jsx(Pe, { variant: "body2", component: "span", children: s.reason })
            ] })
          ] }, `${s.categoryId}-${s.zoneId}`)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ E.jsx(
        SO,
        {
          recommendation: a.recommendation,
          onSelect: () => t(Ii.recommendationSelected, { v: 1, correlationId: o, categoryId: u.categoryId, zoneId: u.zoneId })
        }
      ),
      /* @__PURE__ */ E.jsx(rL, { apiBaseUrl: e.apiBaseUrl, initialDays: e.filters.analysisDays, showSensitivity: e.featureFlags.showSensitivity })
    ] }),
    /* @__PURE__ */ E.jsxs(Pe, { variant: "caption", display: "block", children: [
      "Rule version ",
      i.ruleVersion,
      "; analysed ",
      i.analysisTimestamp,
      "; correlation ",
      i.audit.correlationId,
      "; inputs fingerprint ",
      i.audit.inputsHash,
      "."
    ] }),
    /* @__PURE__ */ E.jsx(d0, { text: "Advisory only and based on synthetic data. Operational and safety procedures take precedence; authorised personnel must review any change." })
  ] });
}
export {
  oL as default
};
