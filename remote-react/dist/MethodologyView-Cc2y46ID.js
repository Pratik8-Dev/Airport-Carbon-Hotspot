import { i as p, l as m, j as e, L as u, E as g, T as o, S as y, J as b } from "./remote-B9Lk1QPt.js";
import { u as f, C as t, a as c, T as a, b as d, c as h, d as l, e as s, f as x } from "./useAsync-abeeagki.js";
function E() {
  const { props: j } = p(), r = f((n) => m.methodology(j.apiBaseUrl, n), [j.apiBaseUrl]);
  if (r.status === "loading") return /* @__PURE__ */ e.jsx(u, { label: "Loading methodology" });
  if (r.status === "error") return /* @__PURE__ */ e.jsx(g, { code: r.code });
  const i = r.data;
  return /* @__PURE__ */ e.jsxs("section", { "aria-labelledby": "m-title", style: { display: "grid", gap: 16 }, children: [
    /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
      /* @__PURE__ */ e.jsx(o, { id: "m-title", variant: "h4", component: "h2", fontWeight: 600, children: "Methodology and assumptions" }),
      /* @__PURE__ */ e.jsx(y, {})
    ] }),
    /* @__PURE__ */ e.jsxs(o, { children: [
      "Rule version ",
      i.ruleVersion,
      "; dataset ",
      i.datasetId,
      "."
    ] }),
    /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsxs(c, { children: [
      /* @__PURE__ */ e.jsx(o, { variant: "h5", component: "h3", fontWeight: 600, children: "How the hotspot is selected" }),
      /* @__PURE__ */ e.jsx(o, { component: "p", children: i.selectionExplanation }),
      /* @__PURE__ */ e.jsx(o, { component: "p", children: i.confidenceExplanation })
    ] }) }),
    /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsxs(c, { children: [
      /* @__PURE__ */ e.jsx(o, { variant: "h5", component: "h3", fontWeight: 600, children: "Formulas" }),
      /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsxs(d, { "aria-label": "Formulas", children: [
        /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsxs(l, { children: [
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Name" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Formula" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Variables and units" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Rounding" })
        ] }) }),
        /* @__PURE__ */ e.jsx(x, { children: i.formulas.map((n) => /* @__PURE__ */ e.jsxs(l, { children: [
          /* @__PURE__ */ e.jsx(s, { children: n.name }),
          /* @__PURE__ */ e.jsx(s, { children: /* @__PURE__ */ e.jsx("code", { children: n.formula }) }),
          /* @__PURE__ */ e.jsxs(s, { children: [
            n.variables.join("; "),
            " (",
            n.source,
            ")"
          ] }),
          /* @__PURE__ */ e.jsx(s, { children: n.rounding })
        ] }, n.name)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsxs(c, { children: [
      /* @__PURE__ */ e.jsx(o, { variant: "h5", component: "h3", fontWeight: 600, children: "Emission factors (synthetic demonstration values)" }),
      /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsxs(d, { "aria-label": "Emission factors", children: [
        /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsxs(l, { children: [
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Energy type" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Value" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Allowed range" })
        ] }) }),
        /* @__PURE__ */ e.jsx(x, { children: i.emissionFactors.map((n) => /* @__PURE__ */ e.jsxs(l, { children: [
          /* @__PURE__ */ e.jsx(s, { children: n.energyType }),
          /* @__PURE__ */ e.jsxs(s, { children: [
            n.value,
            " ",
            n.unit
          ] }),
          /* @__PURE__ */ e.jsxs(s, { children: [
            n.min,
            " to ",
            n.max
          ] })
        ] }, n.energyType)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsxs(c, { children: [
      /* @__PURE__ */ e.jsx(o, { variant: "h5", component: "h3", fontWeight: 600, children: "Input fields" }),
      /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsxs(d, { "aria-label": "Input fields", children: [
        /* @__PURE__ */ e.jsx(h, { children: /* @__PURE__ */ e.jsxs(l, { children: [
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Field" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Type" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Unit" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Description" }),
          /* @__PURE__ */ e.jsx(s, { component: "th", scope: "col", children: "Validation" })
        ] }) }),
        /* @__PURE__ */ e.jsx(x, { children: i.fields.map((n) => /* @__PURE__ */ e.jsxs(l, { children: [
          /* @__PURE__ */ e.jsx(s, { children: n.name }),
          /* @__PURE__ */ e.jsx(s, { children: n.type }),
          /* @__PURE__ */ e.jsx(s, { children: n.unit }),
          /* @__PURE__ */ e.jsx(s, { children: n.description }),
          /* @__PURE__ */ e.jsx(s, { children: n.validation })
        ] }, n.name)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ e.jsx(t, { children: /* @__PURE__ */ e.jsxs(c, { children: [
      /* @__PURE__ */ e.jsx(o, { variant: "h5", component: "h3", fontWeight: 600, children: "Data sources, assumptions and limitations" }),
      /* @__PURE__ */ e.jsx("ul", { children: [...i.dataSources, ...i.assumptions, ...i.limitations].map((n) => /* @__PURE__ */ e.jsx("li", { children: n }, n)) }),
      /* @__PURE__ */ e.jsx(o, { component: "p", children: i.retention })
    ] }) }),
    /* @__PURE__ */ e.jsx(b, { text: i.safetyStatement })
  ] });
}
export {
  E as default
};
