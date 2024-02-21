"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[13085],{

/***/ 1456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(89712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(65319);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 71 modules
var Layout = __webpack_require__(33737);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__(99387);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(48704);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"mdxPageWrapper":"mdxPageWrapper_j9I6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function MDXPage(props) {
    const { content: MDXPageContent } = props;
    const { metadata: { title, description, frontMatter } } = MDXPageContent;
    const { wrapperClassName, hide_table_of_contents: hideTableOfContents } = frontMatter;
    return /*#__PURE__*/ react.createElement(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: (0,clsx_m/* default */.Z)(wrapperClassName !== null && wrapperClassName !== void 0 ? wrapperClassName : ThemeClassNames/* ThemeClassNames */.k.wrapper.mdxPages, ThemeClassNames/* ThemeClassNames */.k.page.mdxPage)
    }, /*#__PURE__*/ react.createElement(metadataUtils/* PageMetadata */.d, {
        title: title,
        description: description
    }), /*#__PURE__*/ react.createElement(Layout/* default */.Z, null, /*#__PURE__*/ react.createElement("main", {
        className: "container container--fluid margin-vert--lg"
    }, /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)('row', styles_module.mdxPageWrapper)
    }, /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)('col', !hideTableOfContents && 'col--8')
    }, /*#__PURE__*/ react.createElement("article", null, /*#__PURE__*/ react.createElement(MDXContent/* default */.Z, null, /*#__PURE__*/ react.createElement(MDXPageContent, null)))), !hideTableOfContents && MDXPageContent.toc.length > 0 && /*#__PURE__*/ react.createElement("div", {
        className: "col col--2"
    }, /*#__PURE__*/ react.createElement(TOC/* default */.Z, {
        toc: MDXPageContent.toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level
    }))))));
}


/***/ }),

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

/***/ 421:
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
    }), /*#__PURE__*/ (0,esm/* mdx */.kt)("p", null, `The following table summarizes different GitHub metrics to give you an idea of each project's popularity and activity levels. This data was collected in February 2024.`), /*#__PURE__*/ (0,esm/* mdx */.kt)("table", null, /*#__PURE__*/ (0,esm/* mdx */.kt)("thead", {
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
    }, `708`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `103`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `8.4k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2.9k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `231`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `5.3k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `1.2k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `335`)), /*#__PURE__*/ (0,esm/* mdx */.kt)("tr", {
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
    }, `6.5k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `670`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
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
    }, `17.8k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `2.6k`), /*#__PURE__*/ (0,esm/* mdx */.kt)("td", {
        parentName: "tr",
        "align": null
    }, `699`)))));
}
MDXContent.isMDXComponent = true;

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
    CNIPopularityTable: MDXContent
}));


/***/ })

}]);