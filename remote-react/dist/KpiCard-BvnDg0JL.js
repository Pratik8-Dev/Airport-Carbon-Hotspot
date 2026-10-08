import { r as O, n as Er, V as Or, _ as Pr, W as Tr, R as _t, X as Ye, Y as Rr, Z as Sr, p as Rt, $ as Cr, F as ae, g as Ge, a as Ke, j as W, e as Ze, b as Je, u as Qe, s as pe, a0 as Ht, o as _e, v as Dr, y as Ae, c as Me, q as te, a1 as Ar, d as tr, G as $e, m as we, T as de } from "./remote-B9Lk1QPt.js";
import { C as Mr, a as $r } from "./useAsync-abeeagki.js";
function ke(t) {
  return t && t.ownerDocument || document;
}
function je(t, e) {
  typeof t == "function" ? t(e) : t && (t.current = e);
}
function kr(t) {
  const {
    controlled: e,
    default: r,
    name: n,
    state: o = "value"
  } = t, {
    current: i
  } = O.useRef(e !== void 0), [s, a] = O.useState(r), p = i ? e : s, c = O.useCallback((l) => {
    i || a(l);
  }, []);
  return [p, c];
}
var er = Or();
const ee = /* @__PURE__ */ Er(er), Ne = {
  disabled: !1
};
var jr = function(e) {
  return e.scrollTop;
}, Ut = "unmounted", ft = "exited", dt = "entering", Tt = "entered", me = "exiting", ot = /* @__PURE__ */ function(t) {
  Pr(e, t);
  function e(n, o) {
    var i;
    i = t.call(this, n, o) || this;
    var s = o, a = s && !s.isMounting ? n.enter : n.appear, p;
    return i.appearStatus = null, n.in ? a ? (p = ft, i.appearStatus = dt) : p = Tt : n.unmountOnExit || n.mountOnEnter ? p = Ut : p = ft, i.state = {
      status: p
    }, i.nextCallback = null, i;
  }
  e.getDerivedStateFromProps = function(o, i) {
    var s = o.in;
    return s && i.status === Ut ? {
      status: ft
    } : null;
  };
  var r = e.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== dt && s !== Tt && (i = dt) : (s === dt || s === Tt) && (i = me);
    }
    this.updateStatus(!1, i);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var o = this.props.timeout, i, s, a;
    return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
      exit: i,
      enter: s,
      appear: a
    };
  }, r.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === dt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : ee.findDOMNode(this);
          s && jr(s);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === ft && this.setState({
      status: Ut
    });
  }, r.performEnter = function(o) {
    var i = this, s = this.props.enter, a = this.context ? this.context.isMounting : o, p = this.props.nodeRef ? [a] : [ee.findDOMNode(this), a], c = p[0], l = p[1], v = this.getTimeouts(), b = a ? v.appear : v.enter;
    if (!o && !s || Ne.disabled) {
      this.safeSetState({
        status: Tt
      }, function() {
        i.props.onEntered(c);
      });
      return;
    }
    this.props.onEnter(c, l), this.safeSetState({
      status: dt
    }, function() {
      i.props.onEntering(c, l), i.onTransitionEnd(b, function() {
        i.safeSetState({
          status: Tt
        }, function() {
          i.props.onEntered(c, l);
        });
      });
    });
  }, r.performExit = function() {
    var o = this, i = this.props.exit, s = this.getTimeouts(), a = this.props.nodeRef ? void 0 : ee.findDOMNode(this);
    if (!i || Ne.disabled) {
      this.safeSetState({
        status: ft
      }, function() {
        o.props.onExited(a);
      });
      return;
    }
    this.props.onExit(a), this.safeSetState({
      status: me
    }, function() {
      o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
        o.safeSetState({
          status: ft
        }, function() {
          o.props.onExited(a);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, r.setNextCallback = function(o) {
    var i = this, s = !0;
    return this.nextCallback = function(a) {
      s && (s = !1, i.nextCallback = null, o(a));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : ee.findDOMNode(this), a = o == null && !this.props.addEndListener;
    if (!s || a) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var p = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = p[0], l = p[1];
      this.props.addEndListener(c, l);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, r.render = function() {
    var o = this.state.status;
    if (o === Ut)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var a = Tr(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ _t.createElement(Ye.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : _t.cloneElement(_t.Children.only(s), a))
    );
  }, e;
}(_t.Component);
ot.contextType = Ye;
ot.propTypes = {};
function Pt() {
}
ot.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Pt,
  onEntering: Pt,
  onEntered: Pt,
  onExit: Pt,
  onExiting: Pt,
  onExited: Pt
};
ot.UNMOUNTED = Ut;
ot.EXITED = ft;
ot.ENTERING = dt;
ot.ENTERED = Tt;
ot.EXITING = me;
const Nr = (t) => t.scrollTop;
function Le(t, e) {
  const {
    timeout: r,
    easing: n,
    style: o = {}
  } = t;
  return {
    duration: o.transitionDuration ?? (typeof r == "number" ? r : r[e.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof n == "object" ? n[e.mode] : n),
    delay: o.transitionDelay
  };
}
var F = "top", Y = "bottom", G = "right", H = "left", Ee = "auto", Yt = [F, Y, G, H], St = "start", zt = "end", Lr = "clippingParents", rr = "viewport", It = "popper", Br = "reference", Be = /* @__PURE__ */ Yt.reduce(function(t, e) {
  return t.concat([e + "-" + St, e + "-" + zt]);
}, []), or = /* @__PURE__ */ [].concat(Yt, [Ee]).reduce(function(t, e) {
  return t.concat([e, e + "-" + St, e + "-" + zt]);
}, []), Wr = "beforeRead", Ir = "read", Fr = "afterRead", Hr = "beforeMain", Ur = "main", Vr = "afterMain", Xr = "beforeWrite", zr = "write", qr = "afterWrite", Yr = [Wr, Ir, Fr, Hr, Ur, Vr, Xr, zr, qr];
function tt(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function V(t) {
  if (t == null)
    return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function mt(t) {
  var e = V(t).Element;
  return t instanceof e || t instanceof Element;
}
function q(t) {
  var e = V(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function Oe(t) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = V(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Gr(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(r) {
    var n = e.styles[r] || {}, o = e.attributes[r] || {}, i = e.elements[r];
    !q(i) || !tt(i) || (Object.assign(i.style, n), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function Kr(t) {
  var e = t.state, r = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, r.popper), e.styles = r, e.elements.arrow && Object.assign(e.elements.arrow.style, r.arrow), function() {
    Object.keys(e.elements).forEach(function(n) {
      var o = e.elements[n], i = e.attributes[n] || {}, s = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : r[n]), a = s.reduce(function(p, c) {
        return p[c] = "", p;
      }, {});
      !q(o) || !tt(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(p) {
        o.removeAttribute(p);
      }));
    });
  };
}
const Zr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gr,
  effect: Kr,
  requires: ["computeStyles"]
};
function _(t) {
  return t.split("-")[0];
}
var vt = Math.max, se = Math.min, Ct = Math.round;
function he() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function nr() {
  return !/^((?!chrome|android).)*safari/i.test(he());
}
function Dt(t, e, r) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  var n = t.getBoundingClientRect(), o = 1, i = 1;
  e && q(t) && (o = t.offsetWidth > 0 && Ct(n.width) / t.offsetWidth || 1, i = t.offsetHeight > 0 && Ct(n.height) / t.offsetHeight || 1);
  var s = mt(t) ? V(t) : window, a = s.visualViewport, p = !nr() && r, c = (n.left + (p && a ? a.offsetLeft : 0)) / o, l = (n.top + (p && a ? a.offsetTop : 0)) / i, v = n.width / o, b = n.height / i;
  return {
    width: v,
    height: b,
    top: l,
    right: c + v,
    bottom: l + b,
    left: c,
    x: c,
    y: l
  };
}
function Pe(t) {
  var e = Dt(t), r = t.offsetWidth, n = t.offsetHeight;
  return Math.abs(e.width - r) <= 1 && (r = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
    x: t.offsetLeft,
    y: t.offsetTop,
    width: r,
    height: n
  };
}
function ir(t, e) {
  var r = e.getRootNode && e.getRootNode();
  if (t.contains(e))
    return !0;
  if (r && Oe(r)) {
    var n = e;
    do {
      if (n && t.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function rt(t) {
  return V(t).getComputedStyle(t);
}
function Jr(t) {
  return ["table", "td", "th"].indexOf(tt(t)) >= 0;
}
function st(t) {
  return ((mt(t) ? t.ownerDocument : (
    // $FlowFixMe[prop-missing]
    t.document
  )) || window.document).documentElement;
}
function le(t) {
  return tt(t) === "html" ? t : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    t.parentNode || // DOM Element detected
    (Oe(t) ? t.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    st(t)
  );
}
function We(t) {
  return !q(t) || // https://github.com/popperjs/popper-core/issues/837
  rt(t).position === "fixed" ? null : t.offsetParent;
}
function Qr(t) {
  var e = /firefox/i.test(he()), r = /Trident/i.test(he());
  if (r && q(t)) {
    var n = rt(t);
    if (n.position === "fixed")
      return null;
  }
  var o = le(t);
  for (Oe(o) && (o = o.host); q(o) && ["html", "body"].indexOf(tt(o)) < 0; ) {
    var i = rt(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || e && i.willChange === "filter" || e && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Gt(t) {
  for (var e = V(t), r = We(t); r && Jr(r) && rt(r).position === "static"; )
    r = We(r);
  return r && (tt(r) === "html" || tt(r) === "body" && rt(r).position === "static") ? e : r || Qr(t) || e;
}
function Te(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Vt(t, e, r) {
  return vt(t, se(e, r));
}
function _r(t, e, r) {
  var n = Vt(t, e, r);
  return n > r ? r : n;
}
function ar() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function sr(t) {
  return Object.assign({}, ar(), t);
}
function pr(t, e) {
  return e.reduce(function(r, n) {
    return r[n] = t, r;
  }, {});
}
var to = function(e, r) {
  return e = typeof e == "function" ? e(Object.assign({}, r.rects, {
    placement: r.placement
  })) : e, sr(typeof e != "number" ? e : pr(e, Yt));
};
function eo(t) {
  var e, r = t.state, n = t.name, o = t.options, i = r.elements.arrow, s = r.modifiersData.popperOffsets, a = _(r.placement), p = Te(a), c = [H, G].indexOf(a) >= 0, l = c ? "height" : "width";
  if (!(!i || !s)) {
    var v = to(o.padding, r), b = Pe(i), d = p === "y" ? F : H, w = p === "y" ? Y : G, f = r.rects.reference[l] + r.rects.reference[p] - s[p] - r.rects.popper[l], h = s[p] - r.rects.reference[p], E = Gt(i), C = E ? p === "y" ? E.clientHeight || 0 : E.clientWidth || 0 : 0, y = f / 2 - h / 2, u = v[d], m = C - b[l] - v[w], g = C / 2 - b[l] / 2 + y, P = Vt(u, g, m), k = p;
    r.modifiersData[n] = (e = {}, e[k] = P, e.centerOffset = P - g, e);
  }
}
function ro(t) {
  var e = t.state, r = t.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = e.elements.popper.querySelector(o), !o) || ir(e.elements.popper, o) && (e.elements.arrow = o));
}
const oo = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: eo,
  effect: ro,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function At(t) {
  return t.split("-")[1];
}
var no = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function io(t, e) {
  var r = t.x, n = t.y, o = e.devicePixelRatio || 1;
  return {
    x: Ct(r * o) / o || 0,
    y: Ct(n * o) / o || 0
  };
}
function Ie(t) {
  var e, r = t.popper, n = t.popperRect, o = t.placement, i = t.variation, s = t.offsets, a = t.position, p = t.gpuAcceleration, c = t.adaptive, l = t.roundOffsets, v = t.isFixed, b = s.x, d = b === void 0 ? 0 : b, w = s.y, f = w === void 0 ? 0 : w, h = typeof l == "function" ? l({
    x: d,
    y: f
  }) : {
    x: d,
    y: f
  };
  d = h.x, f = h.y;
  var E = s.hasOwnProperty("x"), C = s.hasOwnProperty("y"), y = H, u = F, m = window;
  if (c) {
    var g = Gt(r), P = "clientHeight", k = "clientWidth";
    if (g === V(r) && (g = st(r), rt(g).position !== "static" && a === "absolute" && (P = "scrollHeight", k = "scrollWidth")), g = g, o === F || (o === H || o === G) && i === zt) {
      u = Y;
      var M = v && g === m && m.visualViewport ? m.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        g[P]
      );
      f -= M - n.height, f *= p ? 1 : -1;
    }
    if (o === H || (o === F || o === Y) && i === zt) {
      y = G;
      var T = v && g === m && m.visualViewport ? m.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        g[k]
      );
      d -= T - n.width, d *= p ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: a
  }, c && no), L = l === !0 ? io({
    x: d,
    y: f
  }, V(r)) : {
    x: d,
    y: f
  };
  if (d = L.x, f = L.y, p) {
    var $;
    return Object.assign({}, D, ($ = {}, $[u] = C ? "0" : "", $[y] = E ? "0" : "", $.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + f + "px)" : "translate3d(" + d + "px, " + f + "px, 0)", $));
  }
  return Object.assign({}, D, (e = {}, e[u] = C ? f + "px" : "", e[y] = E ? d + "px" : "", e.transform = "", e));
}
function ao(t) {
  var e = t.state, r = t.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, i = r.adaptive, s = i === void 0 ? !0 : i, a = r.roundOffsets, p = a === void 0 ? !0 : a, c = {
    placement: _(e.placement),
    variation: At(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: o,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Ie(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: p
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Ie(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: p
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const so = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ao,
  data: {}
};
var re = {
  passive: !0
};
function po(t) {
  var e = t.state, r = t.instance, n = t.options, o = n.scroll, i = o === void 0 ? !0 : o, s = n.resize, a = s === void 0 ? !0 : s, p = V(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return i && c.forEach(function(l) {
    l.addEventListener("scroll", r.update, re);
  }), a && p.addEventListener("resize", r.update, re), function() {
    i && c.forEach(function(l) {
      l.removeEventListener("scroll", r.update, re);
    }), a && p.removeEventListener("resize", r.update, re);
  };
}
const lo = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: po,
  data: {}
};
var co = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ie(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return co[e];
  });
}
var uo = {
  start: "end",
  end: "start"
};
function Fe(t) {
  return t.replace(/start|end/g, function(e) {
    return uo[e];
  });
}
function Re(t) {
  var e = V(t), r = e.pageXOffset, n = e.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Se(t) {
  return Dt(st(t)).left + Re(t).scrollLeft;
}
function fo(t, e) {
  var r = V(t), n = st(t), o = r.visualViewport, i = n.clientWidth, s = n.clientHeight, a = 0, p = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = nr();
    (c || !c && e === "fixed") && (a = o.offsetLeft, p = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Se(t),
    y: p
  };
}
function vo(t) {
  var e, r = st(t), n = Re(t), o = (e = t.ownerDocument) == null ? void 0 : e.body, i = vt(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = vt(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -n.scrollLeft + Se(t), p = -n.scrollTop;
  return rt(o || r).direction === "rtl" && (a += vt(r.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: p
  };
}
function Ce(t) {
  var e = rt(t), r = e.overflow, n = e.overflowX, o = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function lr(t) {
  return ["html", "body", "#document"].indexOf(tt(t)) >= 0 ? t.ownerDocument.body : q(t) && Ce(t) ? t : lr(le(t));
}
function Xt(t, e) {
  var r;
  e === void 0 && (e = []);
  var n = lr(t), o = n === ((r = t.ownerDocument) == null ? void 0 : r.body), i = V(n), s = o ? [i].concat(i.visualViewport || [], Ce(n) ? n : []) : n, a = e.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Xt(le(s)))
  );
}
function ge(t) {
  return Object.assign({}, t, {
    left: t.x,
    top: t.y,
    right: t.x + t.width,
    bottom: t.y + t.height
  });
}
function mo(t, e) {
  var r = Dt(t, !1, e === "fixed");
  return r.top = r.top + t.clientTop, r.left = r.left + t.clientLeft, r.bottom = r.top + t.clientHeight, r.right = r.left + t.clientWidth, r.width = t.clientWidth, r.height = t.clientHeight, r.x = r.left, r.y = r.top, r;
}
function He(t, e, r) {
  return e === rr ? ge(fo(t, r)) : mt(e) ? mo(e, r) : ge(vo(st(t)));
}
function ho(t) {
  var e = Xt(le(t)), r = ["absolute", "fixed"].indexOf(rt(t).position) >= 0, n = r && q(t) ? Gt(t) : t;
  return mt(n) ? e.filter(function(o) {
    return mt(o) && ir(o, n) && tt(o) !== "body";
  }) : [];
}
function go(t, e, r, n) {
  var o = e === "clippingParents" ? ho(t) : [].concat(e), i = [].concat(o, [r]), s = i[0], a = i.reduce(function(p, c) {
    var l = He(t, c, n);
    return p.top = vt(l.top, p.top), p.right = se(l.right, p.right), p.bottom = se(l.bottom, p.bottom), p.left = vt(l.left, p.left), p;
  }, He(t, s, n));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function cr(t) {
  var e = t.reference, r = t.element, n = t.placement, o = n ? _(n) : null, i = n ? At(n) : null, s = e.x + e.width / 2 - r.width / 2, a = e.y + e.height / 2 - r.height / 2, p;
  switch (o) {
    case F:
      p = {
        x: s,
        y: e.y - r.height
      };
      break;
    case Y:
      p = {
        x: s,
        y: e.y + e.height
      };
      break;
    case G:
      p = {
        x: e.x + e.width,
        y: a
      };
      break;
    case H:
      p = {
        x: e.x - r.width,
        y: a
      };
      break;
    default:
      p = {
        x: e.x,
        y: e.y
      };
  }
  var c = o ? Te(o) : null;
  if (c != null) {
    var l = c === "y" ? "height" : "width";
    switch (i) {
      case St:
        p[c] = p[c] - (e[l] / 2 - r[l] / 2);
        break;
      case zt:
        p[c] = p[c] + (e[l] / 2 - r[l] / 2);
        break;
    }
  }
  return p;
}
function qt(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, o = n === void 0 ? t.placement : n, i = r.strategy, s = i === void 0 ? t.strategy : i, a = r.boundary, p = a === void 0 ? Lr : a, c = r.rootBoundary, l = c === void 0 ? rr : c, v = r.elementContext, b = v === void 0 ? It : v, d = r.altBoundary, w = d === void 0 ? !1 : d, f = r.padding, h = f === void 0 ? 0 : f, E = sr(typeof h != "number" ? h : pr(h, Yt)), C = b === It ? Br : It, y = t.rects.popper, u = t.elements[w ? C : b], m = go(mt(u) ? u : u.contextElement || st(t.elements.popper), p, l, s), g = Dt(t.elements.reference), P = cr({
    reference: g,
    element: y,
    placement: o
  }), k = ge(Object.assign({}, y, P)), M = b === It ? k : g, T = {
    top: m.top - M.top + E.top,
    bottom: M.bottom - m.bottom + E.bottom,
    left: m.left - M.left + E.left,
    right: M.right - m.right + E.right
  }, D = t.modifiersData.offset;
  if (b === It && D) {
    var L = D[o];
    Object.keys(T).forEach(function($) {
      var U = [G, Y].indexOf($) >= 0 ? 1 : -1, S = [F, Y].indexOf($) >= 0 ? "y" : "x";
      T[$] += L[S] * U;
    });
  }
  return T;
}
function yo(t, e) {
  e === void 0 && (e = {});
  var r = e, n = r.placement, o = r.boundary, i = r.rootBoundary, s = r.padding, a = r.flipVariations, p = r.allowedAutoPlacements, c = p === void 0 ? or : p, l = At(n), v = l ? a ? Be : Be.filter(function(w) {
    return At(w) === l;
  }) : Yt, b = v.filter(function(w) {
    return c.indexOf(w) >= 0;
  });
  b.length === 0 && (b = v);
  var d = b.reduce(function(w, f) {
    return w[f] = qt(t, {
      placement: f,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[_(f)], w;
  }, {});
  return Object.keys(d).sort(function(w, f) {
    return d[w] - d[f];
  });
}
function xo(t) {
  if (_(t) === Ee)
    return [];
  var e = ie(t);
  return [Fe(t), e, Fe(e)];
}
function bo(t) {
  var e = t.state, r = t.options, n = t.name;
  if (!e.modifiersData[n]._skip) {
    for (var o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, a = s === void 0 ? !0 : s, p = r.fallbackPlacements, c = r.padding, l = r.boundary, v = r.rootBoundary, b = r.altBoundary, d = r.flipVariations, w = d === void 0 ? !0 : d, f = r.allowedAutoPlacements, h = e.options.placement, E = _(h), C = E === h, y = p || (C || !w ? [ie(h)] : xo(h)), u = [h].concat(y).reduce(function(K, X) {
      return K.concat(_(X) === Ee ? yo(e, {
        placement: X,
        boundary: l,
        rootBoundary: v,
        padding: c,
        flipVariations: w,
        allowedAutoPlacements: f
      }) : X);
    }, []), m = e.rects.reference, g = e.rects.popper, P = /* @__PURE__ */ new Map(), k = !0, M = u[0], T = 0; T < u.length; T++) {
      var D = u[T], L = _(D), $ = At(D) === St, U = [F, Y].indexOf(L) >= 0, S = U ? "width" : "height", A = qt(e, {
        placement: D,
        boundary: l,
        rootBoundary: v,
        altBoundary: b,
        padding: c
      }), R = U ? $ ? G : H : $ ? Y : F;
      m[S] > g[S] && (R = ie(R));
      var I = ie(R), N = [];
      if (i && N.push(A[L] <= 0), a && N.push(A[R] <= 0, A[I] <= 0), N.every(function(K) {
        return K;
      })) {
        M = D, k = !1;
        break;
      }
      P.set(D, N);
    }
    if (k)
      for (var B = w ? 3 : 1, ht = function(X) {
        var nt = u.find(function(it) {
          var z = P.get(it);
          if (z)
            return z.slice(0, X).every(function(yt) {
              return yt;
            });
        });
        if (nt)
          return M = nt, "break";
      }, et = B; et > 0; et--) {
        var gt = ht(et);
        if (gt === "break") break;
      }
    e.placement !== M && (e.modifiersData[n]._skip = !0, e.placement = M, e.reset = !0);
  }
}
const wo = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: bo,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ue(t, e, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: t.top - e.height - r.y,
    right: t.right - e.width + r.x,
    bottom: t.bottom - e.height + r.y,
    left: t.left - e.width - r.x
  };
}
function Ve(t) {
  return [F, G, Y, H].some(function(e) {
    return t[e] >= 0;
  });
}
function Eo(t) {
  var e = t.state, r = t.name, n = e.rects.reference, o = e.rects.popper, i = e.modifiersData.preventOverflow, s = qt(e, {
    elementContext: "reference"
  }), a = qt(e, {
    altBoundary: !0
  }), p = Ue(s, n), c = Ue(a, o, i), l = Ve(p), v = Ve(c);
  e.modifiersData[r] = {
    referenceClippingOffsets: p,
    popperEscapeOffsets: c,
    isReferenceHidden: l,
    hasPopperEscaped: v
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": l,
    "data-popper-escaped": v
  });
}
const Oo = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Eo
};
function Po(t, e, r) {
  var n = _(t), o = [H, F].indexOf(n) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, e, {
    placement: t
  })) : r, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [H, G].indexOf(n) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function To(t) {
  var e = t.state, r = t.options, n = t.name, o = r.offset, i = o === void 0 ? [0, 0] : o, s = or.reduce(function(l, v) {
    return l[v] = Po(v, e.rects, i), l;
  }, {}), a = s[e.placement], p = a.x, c = a.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += p, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = s;
}
const Ro = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: To
};
function So(t) {
  var e = t.state, r = t.name;
  e.modifiersData[r] = cr({
    reference: e.rects.reference,
    element: e.rects.popper,
    placement: e.placement
  });
}
const Co = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: So,
  data: {}
};
function Do(t) {
  return t === "x" ? "y" : "x";
}
function Ao(t) {
  var e = t.state, r = t.options, n = t.name, o = r.mainAxis, i = o === void 0 ? !0 : o, s = r.altAxis, a = s === void 0 ? !1 : s, p = r.boundary, c = r.rootBoundary, l = r.altBoundary, v = r.padding, b = r.tether, d = b === void 0 ? !0 : b, w = r.tetherOffset, f = w === void 0 ? 0 : w, h = qt(e, {
    boundary: p,
    rootBoundary: c,
    padding: v,
    altBoundary: l
  }), E = _(e.placement), C = At(e.placement), y = !C, u = Te(E), m = Do(u), g = e.modifiersData.popperOffsets, P = e.rects.reference, k = e.rects.popper, M = typeof f == "function" ? f(Object.assign({}, e.rects, {
    placement: e.placement
  })) : f, T = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), D = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (g) {
    if (i) {
      var $, U = u === "y" ? F : H, S = u === "y" ? Y : G, A = u === "y" ? "height" : "width", R = g[u], I = R + h[U], N = R - h[S], B = d ? -k[A] / 2 : 0, ht = C === St ? P[A] : k[A], et = C === St ? -k[A] : -P[A], gt = e.elements.arrow, K = d && gt ? Pe(gt) : {
        width: 0,
        height: 0
      }, X = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : ar(), nt = X[U], it = X[S], z = Vt(0, P[A], K[A]), yt = y ? P[A] / 2 - B - z - nt - T.mainAxis : ht - z - nt - T.mainAxis, ce = y ? -P[A] / 2 + B + z + it + T.mainAxis : et + z + it + T.mainAxis, xt = e.elements.arrow && Gt(e.elements.arrow), Z = xt ? u === "y" ? xt.clientTop || 0 : xt.clientLeft || 0 : 0, bt = ($ = D?.[u]) != null ? $ : 0, pt = R + yt - bt - Z, wt = R + ce - bt, Mt = Vt(d ? se(I, pt) : I, R, d ? vt(N, wt) : N);
      g[u] = Mt, L[u] = Mt - R;
    }
    if (a) {
      var lt, Et = u === "x" ? F : H, $t = u === "x" ? Y : G, Q = g[m], ct = m === "y" ? "height" : "width", kt = Q + h[Et], jt = Q - h[$t], Nt = [F, H].indexOf(E) !== -1, Kt = (lt = D?.[m]) != null ? lt : 0, Zt = Nt ? kt : Q - P[ct] - k[ct] - Kt + T.altAxis, Ot = Nt ? Q + P[ct] + k[ct] - Kt - T.altAxis : jt, Jt = d && Nt ? _r(Zt, Q, Ot) : Vt(d ? Zt : kt, Q, d ? Ot : jt);
      g[m] = Jt, L[m] = Jt - Q;
    }
    e.modifiersData[n] = L;
  }
}
const Mo = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ao,
  requiresIfExists: ["offset"]
};
function $o(t) {
  return {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  };
}
function ko(t) {
  return t === V(t) || !q(t) ? Re(t) : $o(t);
}
function jo(t) {
  var e = t.getBoundingClientRect(), r = Ct(e.width) / t.offsetWidth || 1, n = Ct(e.height) / t.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function No(t, e, r) {
  r === void 0 && (r = !1);
  var n = q(e), o = q(e) && jo(e), i = st(e), s = Dt(t, o, r), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((tt(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ce(i)) && (a = ko(e)), q(e) ? (p = Dt(e, !0), p.x += e.clientLeft, p.y += e.clientTop) : i && (p.x = Se(i))), {
    x: s.left + a.scrollLeft - p.x,
    y: s.top + a.scrollTop - p.y,
    width: s.width,
    height: s.height
  };
}
function Lo(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  t.forEach(function(i) {
    e.set(i.name, i);
  });
  function o(i) {
    r.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!r.has(a)) {
        var p = e.get(a);
        p && o(p);
      }
    }), n.push(i);
  }
  return t.forEach(function(i) {
    r.has(i.name) || o(i);
  }), n;
}
function Bo(t) {
  var e = Lo(t);
  return Yr.reduce(function(r, n) {
    return r.concat(e.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Wo(t) {
  var e;
  return function() {
    return e || (e = new Promise(function(r) {
      Promise.resolve().then(function() {
        e = void 0, r(t());
      });
    })), e;
  };
}
function Io(t) {
  var e = t.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(e).map(function(r) {
    return e[r];
  });
}
var Xe = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ze() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return !e.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Fo(t) {
  t === void 0 && (t = {});
  var e = t, r = e.defaultModifiers, n = r === void 0 ? [] : r, o = e.defaultOptions, i = o === void 0 ? Xe : o;
  return function(a, p, c) {
    c === void 0 && (c = i);
    var l = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xe, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: p
      },
      attributes: {},
      styles: {}
    }, v = [], b = !1, d = {
      state: l,
      setOptions: function(E) {
        var C = typeof E == "function" ? E(l.options) : E;
        f(), l.options = Object.assign({}, i, l.options, C), l.scrollParents = {
          reference: mt(a) ? Xt(a) : a.contextElement ? Xt(a.contextElement) : [],
          popper: Xt(p)
        };
        var y = Bo(Io([].concat(n, l.options.modifiers)));
        return l.orderedModifiers = y.filter(function(u) {
          return u.enabled;
        }), w(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var E = l.elements, C = E.reference, y = E.popper;
          if (ze(C, y)) {
            l.rects = {
              reference: No(C, Gt(y), l.options.strategy === "fixed"),
              popper: Pe(y)
            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(T) {
              return l.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var u = 0; u < l.orderedModifiers.length; u++) {
              if (l.reset === !0) {
                l.reset = !1, u = -1;
                continue;
              }
              var m = l.orderedModifiers[u], g = m.fn, P = m.options, k = P === void 0 ? {} : P, M = m.name;
              typeof g == "function" && (l = g({
                state: l,
                options: k,
                name: M,
                instance: d
              }) || l);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Wo(function() {
        return new Promise(function(h) {
          d.forceUpdate(), h(l);
        });
      }),
      destroy: function() {
        f(), b = !0;
      }
    };
    if (!ze(a, p))
      return d;
    d.setOptions(c).then(function(h) {
      !b && c.onFirstUpdate && c.onFirstUpdate(h);
    });
    function w() {
      l.orderedModifiers.forEach(function(h) {
        var E = h.name, C = h.options, y = C === void 0 ? {} : C, u = h.effect;
        if (typeof u == "function") {
          var m = u({
            state: l,
            name: E,
            instance: d,
            options: y
          }), g = function() {
          };
          v.push(m || g);
        }
      });
    }
    function f() {
      v.forEach(function(h) {
        return h();
      }), v = [];
    }
    return d;
  };
}
var Ho = [lo, Co, so, Zr, Ro, wo, Mo, oo, Oo], Uo = /* @__PURE__ */ Fo({
  defaultModifiers: Ho
});
function Vo(t) {
  const {
    elementType: e,
    externalSlotProps: r,
    ownerState: n,
    skipResolvingSlotProps: o = !1,
    ...i
  } = t, s = o ? {} : Rr(r, n), {
    props: a,
    internalRef: p
  } = Sr({
    ...i,
    externalSlotProps: s
  }), c = Rt(p, s?.ref, t.additionalProps?.ref);
  return Cr(e, {
    ...a,
    ref: c
  }, n);
}
function De(t) {
  return parseInt(O.version, 10) >= 19 ? t?.props?.ref || null : t?.ref || null;
}
function Xo(t) {
  return typeof t == "function" ? t() : t;
}
const zo = /* @__PURE__ */ O.forwardRef(function(e, r) {
  const {
    children: n,
    container: o,
    disablePortal: i = !1
  } = e, [s, a] = O.useState(null), p = Rt(/* @__PURE__ */ O.isValidElement(n) ? De(n) : null, r);
  if (ae(() => {
    i || a(Xo(o) || document.body);
  }, [o, i]), ae(() => {
    if (s && !i)
      return je(r, s), () => {
        je(r, null);
      };
  }, [r, s, i]), i) {
    if (/* @__PURE__ */ O.isValidElement(n)) {
      const c = {
        ref: p
      };
      return /* @__PURE__ */ O.cloneElement(n, c);
    }
    return n;
  }
  return s && /* @__PURE__ */ er.createPortal(n, s);
});
function qo(t) {
  return Ge("MuiPopper", t);
}
Ke("MuiPopper", ["root"]);
function Yo(t, e) {
  if (e === "ltr")
    return t;
  switch (t) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return t;
  }
}
function ye(t) {
  return typeof t == "function" ? t() : t;
}
function Go(t) {
  return t.nodeType !== void 0;
}
const Ko = (t) => {
  const {
    classes: e
  } = t;
  return Ze({
    root: ["root"]
  }, qo, e);
}, Zo = {}, Jo = /* @__PURE__ */ O.forwardRef(function(e, r) {
  const {
    anchorEl: n,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: a,
    open: p,
    placement: c,
    popperOptions: l,
    popperRef: v,
    slotProps: b = {},
    slots: d = {},
    TransitionProps: w,
    // @ts-ignore internal logic
    ownerState: f,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...h
  } = e, E = O.useRef(null), C = Rt(E, r), y = O.useRef(null), u = Rt(y, v), m = O.useRef(u);
  ae(() => {
    m.current = u;
  }, [u]), O.useImperativeHandle(v, () => y.current, []);
  const g = Yo(c, i), [P, k] = O.useState(g), [M, T] = O.useState(ye(n));
  O.useEffect(() => {
    y.current && y.current.forceUpdate();
  }), O.useEffect(() => {
    n && T(ye(n));
  }, [n]), ae(() => {
    if (!M || !p)
      return;
    const S = (I) => {
      k(I.placement);
    };
    let A = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: I
      }) => {
        S(I);
      }
    }];
    a != null && (A = A.concat(a)), l && l.modifiers != null && (A = A.concat(l.modifiers));
    const R = Uo(M, E.current, {
      placement: g,
      ...l,
      modifiers: A
    });
    return m.current(R), () => {
      R.destroy(), m.current(null);
    };
  }, [M, s, a, p, l, g]);
  const D = {
    placement: P
  };
  w !== null && (D.TransitionProps = w);
  const L = Ko(e), $ = d.root ?? "div", U = Vo({
    elementType: $,
    externalSlotProps: b.root,
    externalForwardedProps: h,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: e,
    className: L.root
  });
  return /* @__PURE__ */ W.jsx($, {
    ...U,
    children: typeof o == "function" ? o(D) : o
  });
}), Qo = /* @__PURE__ */ O.forwardRef(function(e, r) {
  const {
    anchorEl: n,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: p = !1,
    modifiers: c,
    open: l,
    placement: v = "bottom",
    popperOptions: b = Zo,
    popperRef: d,
    style: w,
    transition: f = !1,
    slotProps: h = {},
    slots: E = {},
    ...C
  } = e, [y, u] = O.useState(!0), m = () => {
    u(!1);
  }, g = () => {
    u(!0);
  };
  if (!p && !l && (!f || y))
    return null;
  let P;
  if (i)
    P = i;
  else if (n) {
    const T = ye(n);
    P = T && Go(T) ? ke(T).body : ke(null).body;
  }
  const k = !l && p && (!f || y) ? "none" : void 0, M = f ? {
    in: l,
    onEnter: m,
    onExited: g
  } : void 0;
  return /* @__PURE__ */ W.jsx(zo, {
    disablePortal: a,
    container: P,
    children: /* @__PURE__ */ W.jsx(Jo, {
      anchorEl: n,
      direction: s,
      disablePortal: a,
      modifiers: c,
      ref: r,
      open: f ? !y : l,
      placement: v,
      popperOptions: b,
      popperRef: d,
      slotProps: h,
      slots: E,
      ...C,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: k,
        ...w
      },
      TransitionProps: M,
      children: o
    })
  });
}), _o = pe(Qo, {
  name: "MuiPopper",
  slot: "Root"
})({}), ur = /* @__PURE__ */ O.forwardRef(function(e, r) {
  const n = Je(), o = Qe({
    props: e,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    components: a,
    componentsProps: p,
    container: c,
    disablePortal: l,
    keepMounted: v,
    modifiers: b,
    open: d,
    placement: w,
    popperOptions: f,
    popperRef: h,
    transition: E,
    slots: C,
    slotProps: y,
    ...u
  } = o, m = C?.root ?? a?.Root, g = {
    anchorEl: i,
    container: c,
    disablePortal: l,
    keepMounted: v,
    modifiers: b,
    open: d,
    placement: w,
    popperOptions: f,
    popperRef: h,
    transition: E,
    ...u
  };
  return /* @__PURE__ */ W.jsx(_o, {
    as: s,
    direction: n ? "rtl" : "ltr",
    slots: {
      root: m
    },
    slotProps: y ?? p,
    ...g,
    ref: r
  });
});
function xe(t) {
  return `scale(${t}, ${t ** 2})`;
}
const tn = {
  entering: {
    opacity: 1,
    transform: xe(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ve = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), be = /* @__PURE__ */ O.forwardRef(function(e, r) {
  const {
    addEndListener: n,
    appear: o = !0,
    children: i,
    easing: s,
    in: a,
    onEnter: p,
    onEntered: c,
    onEntering: l,
    onExit: v,
    onExited: b,
    onExiting: d,
    style: w,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: h = ot,
    ...E
  } = e, C = Ht(), y = O.useRef(), u = _e(), m = O.useRef(null), g = Rt(m, De(i), r), P = (S) => (A) => {
    if (S) {
      const R = m.current;
      A === void 0 ? S(R) : S(R, A);
    }
  }, k = P(l), M = P((S, A) => {
    Nr(S);
    const {
      duration: R,
      delay: I,
      easing: N
    } = Le({
      style: w,
      timeout: f,
      easing: s
    }, {
      mode: "enter"
    });
    let B;
    f === "auto" ? (B = u.transitions.getAutoHeightDuration(S.clientHeight), y.current = B) : B = R, S.style.transition = [u.transitions.create("opacity", {
      duration: B,
      delay: I
    }), u.transitions.create("transform", {
      duration: ve ? B : B * 0.666,
      delay: I,
      easing: N
    })].join(","), p && p(S, A);
  }), T = P(c), D = P(d), L = P((S) => {
    const {
      duration: A,
      delay: R,
      easing: I
    } = Le({
      style: w,
      timeout: f,
      easing: s
    }, {
      mode: "exit"
    });
    let N;
    f === "auto" ? (N = u.transitions.getAutoHeightDuration(S.clientHeight), y.current = N) : N = A, S.style.transition = [u.transitions.create("opacity", {
      duration: N,
      delay: R
    }), u.transitions.create("transform", {
      duration: ve ? N : N * 0.666,
      delay: ve ? R : R || N * 0.333,
      easing: I
    })].join(","), S.style.opacity = 0, S.style.transform = xe(0.75), v && v(S);
  }), $ = P(b), U = (S) => {
    f === "auto" && C.start(y.current || 0, S), n && n(m.current, S);
  };
  return /* @__PURE__ */ W.jsx(h, {
    appear: o,
    in: a,
    nodeRef: m,
    onEnter: M,
    onEntered: T,
    onEntering: k,
    onExit: L,
    onExited: $,
    onExiting: D,
    addEndListener: U,
    timeout: f === "auto" ? null : f,
    ...E,
    children: (S, {
      ownerState: A,
      ...R
    }) => /* @__PURE__ */ O.cloneElement(i, {
      style: {
        opacity: 0,
        transform: xe(0.75),
        visibility: S === "exited" && !a ? "hidden" : void 0,
        ...tn[S],
        ...w,
        ...i.props.style
      },
      ref: g,
      ...R
    })
  });
});
be && (be.muiSupportAuto = !0);
function en(t) {
  return Ge("MuiTooltip", t);
}
const j = Ke("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function rn(t) {
  return Math.round(t * 1e5) / 1e5;
}
const on = (t) => {
  const {
    classes: e,
    disableInteractive: r,
    arrow: n,
    touch: o,
    placement: i
  } = t, s = {
    popper: ["popper", !r && "popperInteractive", n && "popperArrow"],
    tooltip: ["tooltip", n && "tooltipArrow", o && "touch", `tooltipPlacement${tr(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Ze(s, en, e);
}, nn = pe(ur, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (t, e) => {
    const {
      ownerState: r
    } = t;
    return [e.popper, !r.disableInteractive && e.popperInteractive, r.arrow && e.popperArrow, !r.open && e.popperClose];
  }
})(we(({
  theme: t
}) => ({
  zIndex: (t.vars || t).zIndex.tooltip,
  pointerEvents: "none",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disableInteractive,
    style: {
      pointerEvents: "auto"
    }
  }, {
    props: ({
      open: e
    }) => !e,
    style: {
      pointerEvents: "none"
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow,
    style: {
      [`&[data-popper-placement*="bottom"] .${j.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${j.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${j.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${j.arrow}`]: {
        height: "1em",
        width: "0.71em",
        "&::before": {
          transformOrigin: "0 0"
        }
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow && !e.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${j.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow && !!e.isRtl,
    style: {
      [`&[data-popper-placement*="right"] .${j.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow && !e.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${j.arrow}`]: {
        right: 0,
        marginRight: "-0.71em"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.arrow && !!e.isRtl,
    style: {
      [`&[data-popper-placement*="left"] .${j.arrow}`]: {
        left: 0,
        marginLeft: "-0.71em"
      }
    }
  }]
}))), an = pe("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (t, e) => {
    const {
      ownerState: r
    } = t;
    return [e.tooltip, r.touch && e.touch, r.arrow && e.tooltipArrow, e[`tooltipPlacement${tr(r.placement.split("-")[0])}`]];
  }
})(we(({
  theme: t
}) => ({
  backgroundColor: t.vars ? t.vars.palette.Tooltip.bg : t.alpha(t.palette.grey[700], 0.92),
  borderRadius: (t.vars || t).shape.borderRadius,
  color: (t.vars || t).palette.common.white,
  fontFamily: t.typography.fontFamily,
  padding: "4px 8px",
  fontSize: t.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: t.typography.fontWeightMedium,
  [`.${j.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center"
  },
  [`.${j.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center"
  },
  [`.${j.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${j.popper}[data-popper-placement*="bottom"] &`]: {
    transformOrigin: "center top",
    marginTop: "14px"
  },
  variants: [{
    props: ({
      ownerState: e
    }) => e.arrow,
    style: {
      position: "relative",
      margin: 0
    }
  }, {
    props: ({
      ownerState: e
    }) => e.touch,
    style: {
      padding: "8px 16px",
      fontSize: t.typography.pxToRem(14),
      lineHeight: `${rn(16 / 14)}em`,
      fontWeight: t.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: e
    }) => !e.isRtl,
    style: {
      [`.${j.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "14px"
      },
      [`.${j.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "14px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => !e.isRtl && e.touch,
    style: {
      [`.${j.popper}[data-popper-placement*="left"] &`]: {
        marginRight: "24px"
      },
      [`.${j.popper}[data-popper-placement*="right"] &`]: {
        marginLeft: "24px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => !!e.isRtl,
    style: {
      [`.${j.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "14px"
      },
      [`.${j.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "14px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => !!e.isRtl && e.touch,
    style: {
      [`.${j.popper}[data-popper-placement*="left"] &`]: {
        marginLeft: "24px"
      },
      [`.${j.popper}[data-popper-placement*="right"] &`]: {
        marginRight: "24px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.touch,
    style: {
      [`.${j.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      }
    }
  }, {
    props: ({
      ownerState: e
    }) => e.touch,
    style: {
      [`.${j.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), sn = pe("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(we(({
  theme: t
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: t.vars ? t.vars.palette.Tooltip.bg : t.alpha(t.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
})));
let oe = !1;
const qe = new Ar();
let Ft = {
  x: 0,
  y: 0
};
function ne(t, e) {
  return (r, ...n) => {
    e && e(r, ...n), t(r, ...n);
  };
}
const pn = /* @__PURE__ */ O.forwardRef(function(e, r) {
  const n = Qe({
    props: e,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    components: a = {},
    componentsProps: p = {},
    describeChild: c = !1,
    disableFocusListener: l = !1,
    disableHoverListener: v = !1,
    disableInteractive: b = !1,
    disableTouchListener: d = !1,
    enterDelay: w = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: h = 700,
    followCursor: E = !1,
    id: C,
    leaveDelay: y = 0,
    leaveTouchDelay: u = 1500,
    onClose: m,
    onOpen: g,
    open: P,
    placement: k = "bottom",
    PopperComponent: M,
    PopperProps: T = {},
    slotProps: D = {},
    slots: L = {},
    title: $,
    TransitionComponent: U,
    TransitionProps: S,
    ...A
  } = n, R = /* @__PURE__ */ O.isValidElement(i) ? i : /* @__PURE__ */ W.jsx("span", {
    children: i
  }), I = _e(), N = Je(), [B, ht] = O.useState(), [et, gt] = O.useState(null), K = O.useRef(!1), X = b || E, nt = Ht(), it = Ht(), z = Ht(), yt = Ht(), [ce, xt] = kr({
    controlled: P,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Z = ce;
  const bt = Dr(C), pt = O.useRef(), wt = Ae(() => {
    pt.current !== void 0 && (document.body.style.WebkitUserSelect = pt.current, pt.current = void 0), yt.clear();
  });
  O.useEffect(() => wt, [wt]);
  const Mt = (x) => {
    qe.clear(), oe = !0, xt(!0), g && !Z && g(x);
  }, lt = Ae(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (x) => {
      qe.start(800 + y, () => {
        oe = !1;
      }), xt(!1), m && Z && m(x), nt.start(I.transitions.duration.shortest, () => {
        K.current = !1;
      });
    }
  ), Et = (x) => {
    K.current && x.type !== "touchstart" || (B && B.removeAttribute("title"), it.clear(), z.clear(), w || oe && f ? it.start(oe ? f : w, () => {
      Mt(x);
    }) : Mt(x));
  }, $t = (x) => {
    it.clear(), z.start(y, () => {
      lt(x);
    });
  }, [, Q] = O.useState(!1), ct = (x) => {
    $e(x.target) || (Q(!1), $t(x));
  }, kt = (x) => {
    B || ht(x.currentTarget), $e(x.target) && (Q(!0), Et(x));
  }, jt = (x) => {
    K.current = !0;
    const at = R.props;
    at.onTouchStart && at.onTouchStart(x);
  }, Nt = (x) => {
    jt(x), z.clear(), nt.clear(), wt(), pt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", yt.start(h, () => {
      document.body.style.WebkitUserSelect = pt.current, Et(x);
    });
  }, Kt = (x) => {
    R.props.onTouchEnd && R.props.onTouchEnd(x), wt(), z.start(u, () => {
      lt(x);
    });
  };
  O.useEffect(() => {
    if (!Z)
      return;
    function x(at) {
      at.key === "Escape" && lt(at);
    }
    return document.addEventListener("keydown", x), () => {
      document.removeEventListener("keydown", x);
    };
  }, [lt, Z]);
  const Zt = Rt(De(R), ht, r);
  !$ && $ !== 0 && (Z = !1);
  const Ot = O.useRef(), Jt = (x) => {
    const at = R.props;
    at.onMouseMove && at.onMouseMove(x), Ft = {
      x: x.clientX,
      y: x.clientY
    }, Ot.current && Ot.current.update();
  }, Lt = {}, ue = typeof $ == "string";
  c ? (Lt.title = !Z && ue && !v ? $ : null, Lt["aria-describedby"] = Z ? bt : null) : (Lt["aria-label"] = ue ? $ : null, Lt["aria-labelledby"] = Z && !ue ? bt : null);
  const J = {
    ...Lt,
    ...A,
    ...R.props,
    className: Me(A.className, R.props.className),
    onTouchStart: jt,
    ref: Zt,
    ...E ? {
      onMouseMove: Jt
    } : {}
  }, Bt = {};
  d || (J.onTouchStart = Nt, J.onTouchEnd = Kt), v || (J.onMouseOver = ne(Et, J.onMouseOver), J.onMouseLeave = ne($t, J.onMouseLeave), X || (Bt.onMouseOver = Et, Bt.onMouseLeave = $t)), l || (J.onFocus = ne(kt, J.onFocus), J.onBlur = ne(ct, J.onBlur), X || (Bt.onFocus = kt, Bt.onBlur = ct));
  const ut = {
    ...n,
    isRtl: N,
    arrow: o,
    disableInteractive: X,
    placement: k,
    PopperComponentProp: M,
    touch: K.current
  }, Wt = typeof D.popper == "function" ? D.popper(ut) : D.popper, fr = O.useMemo(() => {
    let x = [{
      name: "arrow",
      enabled: !!et,
      options: {
        element: et,
        padding: 4
      }
    }];
    return T.popperOptions?.modifiers && (x = x.concat(T.popperOptions.modifiers)), Wt?.popperOptions?.modifiers && (x = x.concat(Wt.popperOptions.modifiers)), {
      ...T.popperOptions,
      ...Wt?.popperOptions,
      modifiers: x
    };
  }, [et, T.popperOptions, Wt?.popperOptions]), fe = on(ut), dr = typeof D.transition == "function" ? D.transition(ut) : D.transition, Qt = {
    slots: {
      popper: a.Popper,
      transition: a.Transition ?? U,
      tooltip: a.Tooltip,
      arrow: a.Arrow,
      ...L
    },
    slotProps: {
      arrow: D.arrow ?? p.arrow,
      popper: {
        ...T,
        ...Wt ?? p.popper
      },
      // resolvedPopperProps can be spread because it's already an object
      tooltip: D.tooltip ?? p.tooltip,
      transition: {
        ...S,
        ...dr ?? p.transition
      }
    }
  }, [vr, mr] = te("popper", {
    elementType: nn,
    externalForwardedProps: Qt,
    ownerState: ut,
    className: Me(fe.popper, T?.className)
  }), [hr, gr] = te("transition", {
    elementType: be,
    externalForwardedProps: Qt,
    ownerState: ut
  }), [yr, xr] = te("tooltip", {
    elementType: an,
    className: fe.tooltip,
    externalForwardedProps: Qt,
    ownerState: ut
  }), [br, wr] = te("arrow", {
    elementType: sn,
    className: fe.arrow,
    externalForwardedProps: Qt,
    ownerState: ut,
    ref: gt
  });
  return /* @__PURE__ */ W.jsxs(O.Fragment, {
    children: [/* @__PURE__ */ O.cloneElement(R, J), /* @__PURE__ */ W.jsx(vr, {
      as: M ?? ur,
      placement: k,
      anchorEl: E ? {
        getBoundingClientRect: () => ({
          top: Ft.y,
          left: Ft.x,
          right: Ft.x,
          bottom: Ft.y,
          width: 0,
          height: 0
        })
      } : B,
      popperRef: Ot,
      open: B ? Z : !1,
      id: bt,
      transition: !0,
      ...Bt,
      ...mr,
      popperOptions: fr,
      children: ({
        TransitionProps: x
      }) => /* @__PURE__ */ W.jsx(hr, {
        timeout: I.transitions.duration.shorter,
        ...x,
        ...gr,
        children: /* @__PURE__ */ W.jsxs(yr, {
          ...xr,
          children: [$, o ? /* @__PURE__ */ W.jsx(br, {
            ...wr
          }) : null]
        })
      })
    })]
  });
});
function un({ label: t, value: e, caption: r, hint: n, badge: o }) {
  const i = /* @__PURE__ */ W.jsx(Mr, { role: "group", "aria-label": `${t}: ${e}`, sx: { minWidth: 200, flex: "1 1 200px" }, children: /* @__PURE__ */ W.jsxs($r, { sx: { display: "grid", gap: 1 }, children: [
    /* @__PURE__ */ W.jsx(de, { variant: "body2", color: "text.secondary", children: t }),
    /* @__PURE__ */ W.jsx(de, { variant: "h4", component: "p", fontWeight: 600, children: e }),
    r && /* @__PURE__ */ W.jsx(de, { variant: "body2", children: r }),
    o
  ] }) });
  return n ? /* @__PURE__ */ W.jsx(pn, { title: n, describeChild: !0, children: i }) : i;
}
export {
  un as K,
  zo as P,
  ot as T,
  Le as a,
  Vo as b,
  pn as c,
  De as g,
  ke as o,
  Nr as r,
  kr as u
};
