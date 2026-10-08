import { g as O, a as R, r as D, u as q, b as A, j as t, c as U, d as n, e as z, s as g, k as P, f as k, m as v, h as p, i as K, l as M, L as N, E, T as h, S as W, C as V, K as X } from "./remote-B9Lk1QPt.js";
import { K as m } from "./KpiCard-BvnDg0JL.js";
import { u as F, C as H, a as _, T as G, b as J, c as Q, d as w, e as c, f as Y } from "./useAsync-abeeagki.js";
function Z(e) {
  return O("MuiLinearProgress", e);
}
R("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "bar1", "bar2", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const x = 4, C = P`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`, rr = typeof C != "string" ? k`
        animation: ${C} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, j = P`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`, er = typeof j != "string" ? k`
        animation: ${j} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, $ = P`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`, ar = typeof $ != "string" ? k`
        animation: ${$} 3s infinite linear;
      ` : null, tr = (e) => {
  const {
    classes: r,
    variant: a,
    color: i
  } = e, s = {
    root: ["root", `color${n(i)}`, a],
    dashed: ["dashed", `dashedColor${n(i)}`],
    bar1: ["bar", "bar1", `barColor${n(i)}`, (a === "indeterminate" || a === "query") && "bar1Indeterminate", a === "determinate" && "bar1Determinate", a === "buffer" && "bar1Buffer"],
    bar2: ["bar", "bar2", a !== "buffer" && `barColor${n(i)}`, a === "buffer" && `color${n(i)}`, (a === "indeterminate" || a === "query") && "bar2Indeterminate", a === "buffer" && "bar2Buffer"]
  };
  return z(s, Z, r);
}, L = (e, r) => e.vars ? e.vars.palette.LinearProgress[`${r}Bg`] : e.palette.mode === "light" ? e.lighten(e.palette[r].main, 0.62) : e.darken(e.palette[r].main, 0.5), ir = g("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, r) => {
    const {
      ownerState: a
    } = e;
    return [r.root, r[`color${n(a.color)}`], r[a.variant]];
  }
})(v(({
  theme: e
}) => ({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  // Fix Safari's bug during composition of different paint.
  zIndex: 0,
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [...Object.entries(e.palette).filter(p()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      backgroundColor: L(e, r)
    }
  })), {
    props: ({
      ownerState: r
    }) => r.color === "inherit" && r.variant !== "buffer",
    style: {
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "currentColor",
        opacity: 0.3
      }
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      backgroundColor: "transparent"
    }
  }, {
    props: {
      variant: "query"
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}))), sr = g("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (e, r) => {
    const {
      ownerState: a
    } = e;
    return [r.dashed, r[`dashedColor${n(a.color)}`]];
  }
})(v(({
  theme: e
}) => ({
  position: "absolute",
  marginTop: 0,
  height: "100%",
  width: "100%",
  backgroundSize: "10px 10px",
  backgroundPosition: "0 -23px",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3,
      backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
    }
  }, ...Object.entries(e.palette).filter(p()).map(([r]) => {
    const a = L(e, r);
    return {
      props: {
        color: r
      },
      style: {
        backgroundImage: `radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`
      }
    };
  })]
})), ar || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${$} 3s infinite linear`
}), nr = g("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, r) => {
    const {
      ownerState: a
    } = e;
    return [r.bar, r.bar1, r[`barColor${n(a.color)}`], (a.variant === "indeterminate" || a.variant === "query") && r.bar1Indeterminate, a.variant === "determinate" && r.bar1Determinate, a.variant === "buffer" && r.bar1Buffer];
  }
})(v(({
  theme: e
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      backgroundColor: "currentColor"
    }
  }, ...Object.entries(e.palette).filter(p()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      backgroundColor: (e.vars || e).palette[r].main
    }
  })), {
    props: {
      variant: "determinate"
    },
    style: {
      transition: `transform .${x}s linear`
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      zIndex: 1,
      transition: `transform .${x}s linear`
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" || r.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" || r.variant === "query",
    style: rr || {
      animation: `${C} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
    }
  }]
}))), or = g("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, r) => {
    const {
      ownerState: a
    } = e;
    return [r.bar, r.bar2, r[`barColor${n(a.color)}`], (a.variant === "indeterminate" || a.variant === "query") && r.bar2Indeterminate, a.variant === "buffer" && r.bar2Buffer];
  }
})(v(({
  theme: e
}) => ({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  variants: [...Object.entries(e.palette).filter(p()).map(([r]) => ({
    props: {
      color: r
    },
    style: {
      "--LinearProgressBar2-barColor": (e.vars || e).palette[r].main
    }
  })), {
    props: ({
      ownerState: r
    }) => r.variant !== "buffer" && r.color !== "inherit",
    style: {
      backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant !== "buffer" && r.color === "inherit",
    style: {
      backgroundColor: "currentColor"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3
    }
  }, ...Object.entries(e.palette).filter(p()).map(([r]) => ({
    props: {
      color: r,
      variant: "buffer"
    },
    style: {
      backgroundColor: L(e, r),
      transition: `transform .${x}s linear`
    }
  })), {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" || r.variant === "query",
    style: {
      width: "auto"
    }
  }, {
    props: ({
      ownerState: r
    }) => r.variant === "indeterminate" || r.variant === "query",
    style: er || {
      animation: `${j} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
    }
  }]
}))), lr = /* @__PURE__ */ D.forwardRef(function(r, a) {
  const i = q({
    props: r,
    name: "MuiLinearProgress"
  }), {
    className: s,
    color: I = "primary",
    value: y,
    valueBuffer: S,
    variant: l = "indeterminate",
    ...T
  } = i, d = {
    ...i,
    color: I,
    variant: l
  }, u = tr(d), B = A(), b = {}, f = {
    bar1: {},
    bar2: {}
  };
  if ((l === "determinate" || l === "buffer") && y !== void 0) {
    b["aria-valuenow"] = Math.round(y), b["aria-valuemin"] = 0, b["aria-valuemax"] = 100;
    let o = y - 100;
    B && (o = -o), f.bar1.transform = `translateX(${o}%)`;
  }
  if (l === "buffer" && S !== void 0) {
    let o = (S || 0) - 100;
    B && (o = -o), f.bar2.transform = `translateX(${o}%)`;
  }
  return /* @__PURE__ */ t.jsxs(ir, {
    className: U(u.root, s),
    ownerState: d,
    role: "progressbar",
    ...b,
    ref: a,
    ...T,
    children: [l === "buffer" ? /* @__PURE__ */ t.jsx(sr, {
      className: u.dashed,
      ownerState: d
    }) : null, /* @__PURE__ */ t.jsx(nr, {
      className: u.bar1,
      ownerState: d,
      style: f.bar1
    }), l === "determinate" ? null : /* @__PURE__ */ t.jsx(or, {
      className: u.bar2,
      ownerState: d,
      style: f.bar2
    })]
  });
});
function ur() {
  const { props: e } = K(), r = F((s) => M.overview(e.apiBaseUrl, e.filters.analysisDays, s), [e.apiBaseUrl, e.filters.analysisDays]);
  if (r.status === "loading") return /* @__PURE__ */ t.jsx(N, { label: "Loading overview" });
  if (r.status === "error") return /* @__PURE__ */ t.jsx(E, { code: r.code });
  const a = r.data, i = a.quality;
  return /* @__PURE__ */ t.jsxs("section", { "aria-labelledby": "ov-title", style: { display: "grid", gap: 16 }, children: [
    /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ t.jsx(h, { id: "ov-title", variant: "h4", component: "h2", fontWeight: 600, children: "Airport emissions overview" }),
      /* @__PURE__ */ t.jsx(W, {})
    ] }),
    /* @__PURE__ */ t.jsx(h, { children: a.syntheticNotice }),
    /* @__PURE__ */ t.jsxs("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ t.jsx(m, { label: "Total simulated emissions", value: `${a.totalKgCO2e.toLocaleString("en-US")} kgCO2e`, caption: "Derived from synthetic records" }),
      /* @__PURE__ */ t.jsx(m, { label: "Analysis period", value: `${a.periodDays} days`, caption: `${a.meta.airportId} / ${a.meta.terminalId} (fictional)` }),
      /* @__PURE__ */ t.jsx(
        m,
        {
          label: "Data completeness",
          value: `${i.completenessPct}%`,
          caption: `Status: ${i.status}`,
          badge: /* @__PURE__ */ t.jsx(V, { size: "small", color: i.status === "complete" ? "success" : "warning", label: i.status }),
          hint: "Share of records with valid values. Missing records are excluded, so totals may be understated."
        }
      ),
      /* @__PURE__ */ t.jsx(m, { label: "Last dataset refresh", value: new Date(a.meta.datasetRefreshedAt).toISOString().slice(0, 10), caption: "Synthetic dataset timestamp (UTC)" })
    ] }),
    /* @__PURE__ */ t.jsx(H, { children: /* @__PURE__ */ t.jsxs(_, { children: [
      /* @__PURE__ */ t.jsxs(h, { variant: "h5", component: "h3", fontWeight: 600, sx: { mb: 2 }, children: [
        "Emissions by operational category ",
        /* @__PURE__ */ t.jsx(X, { kind: a.valueKind })
      ] }),
      /* @__PURE__ */ t.jsx(G, { children: /* @__PURE__ */ t.jsxs(J, { "aria-label": "Emissions by category", children: [
        /* @__PURE__ */ t.jsx(Q, { children: /* @__PURE__ */ t.jsxs(w, { children: [
          /* @__PURE__ */ t.jsx(c, { component: "th", scope: "col", children: "Category" }),
          /* @__PURE__ */ t.jsx(c, { component: "th", scope: "col", children: "kgCO2e" }),
          /* @__PURE__ */ t.jsx(c, { component: "th", scope: "col", children: "Share" })
        ] }) }),
        /* @__PURE__ */ t.jsx(Y, { children: a.categories.map((s) => /* @__PURE__ */ t.jsxs(w, { children: [
          /* @__PURE__ */ t.jsx(c, { children: s.label }),
          /* @__PURE__ */ t.jsx(c, { children: s.kgCO2e.toLocaleString("en-US") }),
          /* @__PURE__ */ t.jsxs(c, { children: [
            /* @__PURE__ */ t.jsx(lr, { variant: "determinate", value: s.sharePct, "aria-label": `${s.label} share`, sx: { maxWidth: 160, display: "inline-block", verticalAlign: "middle", width: "100%" } }),
            " ",
            s.sharePct,
            "%"
          ] })
        ] }, s.categoryId)) })
      ] }) })
    ] }) })
  ] });
}
export {
  ur as default
};
