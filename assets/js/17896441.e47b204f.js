"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[27918],{

/***/ 13073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Card),
/* harmony export */   u: () => (/* binding */ CardSection)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var param_case__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53371);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31984);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86010);




function CardSection({ id, title, icon, children, description, className, hasSubSections = false, HeadingTag = 'h1' }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)('homepage-section', hasSubSections && 'has-sub-sections', className)
    }, title && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(HeadingTag, {
        id: id !== null && id !== void 0 ? id : (0,param_case__WEBPACK_IMPORTED_MODULE_3__/* .paramCase */ .o)(title)
    }, title)), description && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: "section-description"
    }, description), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "section-content"
    }, children));
}
function Card({ id, icon, title, description, to }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        to: to,
        className: "homepage-card"
    }, icon && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "icon"
    }, icon), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "card-content"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "title",
        id: id && (0,param_case__WEBPACK_IMPORTED_MODULE_3__/* .paramCase */ .o)(title)
    }, title), description && /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "description"
    }, description)));
}


/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ theme_MDXComponents)
});

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/index.js + 39 modules
var MDXComponents = __webpack_require__(69167);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(93070);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(50551);
// EXTERNAL MODULE: ./src/components/CardComponents.tsx
var CardComponents = __webpack_require__(13073);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
;// CONCATENATED MODULE: ./shared-files/_cni-popularity.md
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));
const toc = [];
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,esm/* mdx */.kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following table summarizes different GitHub metrics to give you an idea of each project's popularity and activity levels. This data was collected in March 2024.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Provider`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Project`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Stars`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Forks`), /*#__PURE__*/ (0,esm/* mdx */.kt)("th", {
        parentName: "tr",
        "align": null
    }, `Contributors`))), /*#__PURE__*/ (0,esm/* mdx */.kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Canal`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "https://github.com/projectcalico/canal"
    }, `https://github.com/projectcalico/canal`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `712`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `100`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `20`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Flannel`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "https://github.com/flannel-io/flannel"
    }, `https://github.com/flannel-io/flannel`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `8.5k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2.9k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `235`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Calico`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "https://github.com/projectcalico/calico"
    }, `https://github.com/projectcalico/calico`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `5.5k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `1.2k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `344`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Weave`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "https://github.com/weaveworks/weave/"
    }, `https://github.com/weaveworks/weave/`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `6.6k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `662`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `87`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `Cilium`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        parentName: "td",
        "href": "https://github.com/cilium/cilium"
    }, `https://github.com/cilium/cilium`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `18.6k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2.7k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `740`)))));
}
MDXContent.isMDXComponent = true;

;// CONCATENATED MODULE: ./shared-files/_deprecation-opa-gatekeeper.md
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _deprecation_opa_gatekeeper_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _deprecation_opa_gatekeeper_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _deprecation_opa_gatekeeper_define_property(target, key, source[key]);
        });
    }
    return target;
}
function _deprecation_opa_gatekeeper_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _deprecation_opa_gatekeeper_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        _deprecation_opa_gatekeeper_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _deprecation_opa_gatekeeper_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _deprecation_opa_gatekeeper_object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _deprecation_opa_gatekeeper_object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const _deprecation_opa_gatekeeper_frontMatter = {};
const _deprecation_opa_gatekeeper_contentTitle = (/* unused pure expression or super */ null && (undefined));
const _deprecation_opa_gatekeeper_toc = [];
const _deprecation_opa_gatekeeper_layoutProps = {
    toc: _deprecation_opa_gatekeeper_toc
};
const _deprecation_opa_gatekeeper_MDXLayout = "wrapper";
function _deprecation_opa_gatekeeper_MDXContent(_param) {
    var { components } = _param, props = _deprecation_opa_gatekeeper_object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,esm/* mdx */.kt)(_deprecation_opa_gatekeeper_MDXLayout, _deprecation_opa_gatekeeper_object_spread_props(_deprecation_opa_gatekeeper_object_spread({}, _deprecation_opa_gatekeeper_layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "warning"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `OPA Gatekeeper is deprecated and will be removed in a future release. As a replacement for OPA Gatekeeper, consider switching to `, /*#__PURE__*/ (0,esm/* mdx */.kt)("a", {
        href: props.link
    }, `Kubewarden`), `.`)));
}
_deprecation_opa_gatekeeper_MDXContent.isMDXComponent = true;

;// CONCATENATED MODULE: ./shared-files/_deprecation-weave.md
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _deprecation_weave_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _deprecation_weave_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _deprecation_weave_define_property(target, key, source[key]);
        });
    }
    return target;
}
function _deprecation_weave_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _deprecation_weave_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        _deprecation_weave_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _deprecation_weave_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _deprecation_weave_object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _deprecation_weave_object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const _deprecation_weave_frontMatter = {};
const _deprecation_weave_contentTitle = (/* unused pure expression or super */ null && (undefined));
const _deprecation_weave_toc = [];
const _deprecation_weave_layoutProps = {
    toc: _deprecation_weave_toc
};
const _deprecation_weave_MDXLayout = "wrapper";
function _deprecation_weave_MDXContent(_param) {
    var { components } = _param, props = _deprecation_weave_object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,esm/* mdx */.kt)(_deprecation_weave_MDXLayout, _deprecation_weave_object_spread_props(_deprecation_weave_object_spread({}, _deprecation_weave_layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "warning"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `The Weave CNI plugin for RKE with Kubernetes v1.27 and later is now deprecated. Weave will be removed in RKE with Kubernetes v1.30.`)));
}
_deprecation_weave_MDXContent.isMDXComponent = true;

;// CONCATENATED MODULE: ./shared-files/_deprecation-helm2.md
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _deprecation_helm2_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _deprecation_helm2_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _deprecation_helm2_define_property(target, key, source[key]);
        });
    }
    return target;
}
function _deprecation_helm2_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _deprecation_helm2_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        _deprecation_helm2_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _deprecation_helm2_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _deprecation_helm2_object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _deprecation_helm2_object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const _deprecation_helm2_frontMatter = {};
const _deprecation_helm2_contentTitle = (/* unused pure expression or super */ null && (undefined));
const _deprecation_helm2_toc = [];
const _deprecation_helm2_layoutProps = {
    toc: _deprecation_helm2_toc
};
const _deprecation_helm2_MDXLayout = "wrapper";
function _deprecation_helm2_MDXContent(_param) {
    var { components } = _param, props = _deprecation_helm2_object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,esm/* mdx */.kt)(_deprecation_helm2_MDXLayout, _deprecation_helm2_object_spread_props(_deprecation_helm2_object_spread({}, _deprecation_helm2_layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "warning"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, `Helm v2 support is deprecated as of the Rancher v2.7 line and will be removed in Rancher v2.9.`)));
}
_deprecation_helm2_MDXContent.isMDXComponent = true;

;// CONCATENATED MODULE: ./shared-files/_docker-support-warning.md
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _docker_support_warning_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _docker_support_warning_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _docker_support_warning_define_property(target, key, source[key]);
        });
    }
    return target;
}
function _docker_support_warning_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _docker_support_warning_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        _docker_support_warning_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _docker_support_warning_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _docker_support_warning_object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _docker_support_warning_object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const _docker_support_warning_frontMatter = {};
const _docker_support_warning_contentTitle = (/* unused pure expression or super */ null && (undefined));
const _docker_support_warning_toc = [];
const _docker_support_warning_layoutProps = {
    toc: _docker_support_warning_toc
};
const _docker_support_warning_MDXLayout = "wrapper";
function _docker_support_warning_MDXContent(_param) {
    var { components } = _param, props = _docker_support_warning_object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,esm/* mdx */.kt)(_docker_support_warning_MDXLayout, _docker_support_warning_object_spread_props(_docker_support_warning_object_spread({}, _docker_support_warning_layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("admonition", {
        "type": "warning"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,esm/* mdx */.kt)("strong", {
        parentName: "p"
    }, `Docker installs are not supported in production environments.`), ` These instructions are provided for testing and development purposes only. Please don't use this method to install Rancher in production environments.`)));
}
_docker_support_warning_MDXContent.isMDXComponent = true;

;// CONCATENATED MODULE: ./src/theme/MDXComponents.js
// Import the original mapper
function MDXComponents_define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function MDXComponents_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            MDXComponents_define_property(target, key, source[key]);
        });
    }
    return target;
}
function MDXComponents_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function MDXComponents_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        MDXComponents_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}









/* harmony default export */ const theme_MDXComponents = (MDXComponents_object_spread_props(MDXComponents_object_spread({}, MDXComponents/* default */.Z), {
    Tabs: Tabs/* default */.Z,
    TabItem: TabItem/* default */.Z,
    CardSection: CardComponents/* CardSection */.u,
    Card: CardComponents/* Card */.Z,
    CNIPopularityTable: MDXContent,
    DeprecationOPAGatekeeper: _deprecation_opa_gatekeeper_MDXContent,
    DeprecationWeave: _deprecation_weave_MDXContent,
    DeprecationHelm2: _deprecation_helm2_MDXContent,
    DockerSupportWarning: _docker_support_warning_MDXContent
}));


/***/ })

}]);