(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[20389],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": () => (/* binding */ MDXProvider),
/* harmony export */   "kt": () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 87594:
/***/ ((module, exports) => {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ }),

/***/ 70369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>null);


/***/ }),

/***/ 27339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Admonition)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(65319);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(92210);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"admonition":"admonition_LlT9","admonitionHeading":"admonitionHeading_tbUL","admonitionIcon":"admonitionIcon_kALy","admonitionContent":"admonitionContent_S0QG"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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





function NoteIcon() {
    return /*#__PURE__*/ react.createElement("svg", {
        viewBox: "0 0 14 16"
    }, /*#__PURE__*/ react.createElement("path", {
        fillRule: "evenodd",
        d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
    }));
}
function TipIcon() {
    return /*#__PURE__*/ react.createElement("svg", {
        viewBox: "0 0 12 16"
    }, /*#__PURE__*/ react.createElement("path", {
        fillRule: "evenodd",
        d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
    }));
}
function DangerIcon() {
    return /*#__PURE__*/ react.createElement("svg", {
        viewBox: "0 0 12 16"
    }, /*#__PURE__*/ react.createElement("path", {
        fillRule: "evenodd",
        d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
    }));
}
function InfoIcon() {
    return /*#__PURE__*/ react.createElement("svg", {
        viewBox: "0 0 14 16"
    }, /*#__PURE__*/ react.createElement("path", {
        fillRule: "evenodd",
        d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
    }));
}
function CautionIcon() {
    return /*#__PURE__*/ react.createElement("svg", {
        viewBox: "0 0 16 16"
    }, /*#__PURE__*/ react.createElement("path", {
        fillRule: "evenodd",
        d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
    }));
}
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const AdmonitionConfigs = {
    note: {
        infimaClassName: 'secondary',
        iconComponent: NoteIcon,
        label: /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
            id: "theme.admonition.note",
            description: "The default label used for the Note admonition (:::note)"
        }, "note")
    },
    tip: {
        infimaClassName: 'success',
        iconComponent: TipIcon,
        label: /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
            id: "theme.admonition.tip",
            description: "The default label used for the Tip admonition (:::tip)"
        }, "tip")
    },
    danger: {
        infimaClassName: 'danger',
        iconComponent: DangerIcon,
        label: /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
            id: "theme.admonition.danger",
            description: "The default label used for the Danger admonition (:::danger)"
        }, "danger")
    },
    info: {
        infimaClassName: 'info',
        iconComponent: InfoIcon,
        label: /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
            id: "theme.admonition.info",
            description: "The default label used for the Info admonition (:::info)"
        }, "info")
    },
    caution: {
        infimaClassName: 'warning',
        iconComponent: CautionIcon,
        label: /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
            id: "theme.admonition.caution",
            description: "The default label used for the Caution admonition (:::caution)"
        }, "caution")
    }
};
// Legacy aliases, undocumented but kept for retro-compatibility
const aliases = {
    secondary: 'note',
    important: 'info',
    success: 'tip',
    warning: 'danger'
};
function getAdmonitionConfig(unsafeType) {
    var _aliases_unsafeType;
    const type = (_aliases_unsafeType = aliases[unsafeType]) !== null && _aliases_unsafeType !== void 0 ? _aliases_unsafeType : unsafeType;
    const config = AdmonitionConfigs[type];
    if (config) {
        return config;
    }
    console.warn(`No admonition config found for admonition type "${type}". Using Info as fallback.`);
    return AdmonitionConfigs.info;
}
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
    const items = react.Children.toArray(children);
    const mdxAdmonitionTitle = items.find((item)=>{
        var _item_props;
        /*#__PURE__*/ return react.isValidElement(item) && ((_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.mdxType) === 'mdxAdmonitionTitle';
    });
    const rest = /*#__PURE__*/ react.createElement(react.Fragment, null, items.filter((item)=>item !== mdxAdmonitionTitle));
    return {
        mdxAdmonitionTitle,
        rest
    };
}
function processAdmonitionProps(props) {
    const { mdxAdmonitionTitle , rest  } = extractMDXAdmonitionTitle(props.children);
    var _props_title;
    return _object_spread_props(_object_spread({}, props), {
        title: (_props_title = props.title) !== null && _props_title !== void 0 ? _props_title : mdxAdmonitionTitle,
        children: rest
    });
}
function Admonition(props) {
    const { children , type , title , icon: iconProp  } = processAdmonitionProps(props);
    const typeConfig = getAdmonitionConfig(type);
    const titleLabel = title !== null && title !== void 0 ? title : typeConfig.label;
    const { iconComponent: IconComponent  } = typeConfig;
    const icon = iconProp !== null && iconProp !== void 0 ? iconProp : /*#__PURE__*/ react.createElement(IconComponent, null);
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.common.admonition */.k.common.admonition, ThemeClassNames/* ThemeClassNames.common.admonitionType */.k.common.admonitionType(props.type), 'alert', `alert--${typeConfig.infimaClassName}`, styles_module.admonition)
    }, /*#__PURE__*/ react.createElement("div", {
        className: styles_module.admonitionHeading
    }, /*#__PURE__*/ react.createElement("span", {
        className: styles_module.admonitionIcon
    }, icon), titleLabel), /*#__PURE__*/ react.createElement("div", {
        className: styles_module.admonitionContent
    }, children));
}


/***/ }),

/***/ 99179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CodeBlock)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(30358);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/colorMode.js
var contexts_colorMode = __webpack_require__(79526);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86016);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */ function usePrismTheme() {
    const { prism  } = (0,useThemeConfig/* useThemeConfig */.L)();
    const { colorMode  } = (0,contexts_colorMode/* useColorMode */.I)();
    const lightModeTheme = prism.theme;
    const darkModeTheme = prism.darkTheme || lightModeTheme;
    const prismTheme = colorMode === 'dark' ? darkModeTheme : lightModeTheme;
    return prismTheme;
} //# sourceMappingURL=usePrismTheme.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(65319);
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(87594);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/codeBlockUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
const codeBlockTitleRegex = RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1");
const metastringLinesRangeRegex = RegExp("\\{(?<range>[\\d,-]+)\\}");
// Supported types of highlight comments
const commentPatterns = {
    js: {
        start: '\\/\\/',
        end: ''
    },
    jsBlock: {
        start: '\\/\\*',
        end: '\\*\\/'
    },
    jsx: {
        start: '\\{\\s*\\/\\*',
        end: '\\*\\/\\s*\\}'
    },
    bash: {
        start: '#',
        end: ''
    },
    html: {
        start: '<!--',
        end: '-->'
    }
};
function getCommentPattern(languages, magicCommentDirectives) {
    // To be more reliable, the opening and closing comment must match
    const commentPattern = languages.map((lang)=>{
        const { start , end  } = commentPatterns[lang];
        return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d)=>{
            var _d_block, _d_block1;
            return [
                d.line,
                (_d_block = d.block) === null || _d_block === void 0 ? void 0 : _d_block.start,
                (_d_block1 = d.block) === null || _d_block1 === void 0 ? void 0 : _d_block1.end
            ].filter(Boolean);
        }).join('|')})\\s*${end})`;
    }).join('|');
    // White space is allowed, but otherwise it should be on it's own line
    return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
/**
 * Select comment styles based on language
 */ function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
    switch(lang){
        case 'js':
        case 'javascript':
        case 'ts':
        case 'typescript':
            return getCommentPattern([
                'js',
                'jsBlock'
            ], magicCommentDirectives);
        case 'jsx':
        case 'tsx':
            return getCommentPattern([
                'js',
                'jsBlock',
                'jsx'
            ], magicCommentDirectives);
        case 'html':
            return getCommentPattern([
                'js',
                'jsBlock',
                'html'
            ], magicCommentDirectives);
        case 'python':
        case 'py':
        case 'bash':
            return getCommentPattern([
                'bash'
            ], magicCommentDirectives);
        case 'markdown':
        case 'md':
            // Text uses HTML, front matter uses bash
            return getCommentPattern([
                'html',
                'jsx',
                'bash'
            ], magicCommentDirectives);
        default:
            // All comment types
            return getCommentPattern(Object.keys(commentPatterns), magicCommentDirectives);
    }
}
function parseCodeBlockTitle(metastring) {
    var _metastring_match;
    var _metastring_match_groups_title;
    return (_metastring_match_groups_title = (_metastring_match = metastring === null || metastring === void 0 ? void 0 : metastring.match(codeBlockTitleRegex)) === null || _metastring_match === void 0 ? void 0 : _metastring_match.groups.title) !== null && _metastring_match_groups_title !== void 0 ? _metastring_match_groups_title : '';
}
function containsLineNumbers(metastring) {
    return Boolean(metastring === null || metastring === void 0 ? void 0 : metastring.includes('showLineNumbers'));
}
/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */ function parseLanguage(className) {
    const languageClassName = className.split(' ').find((str)=>str.startsWith('language-'));
    return languageClassName === null || languageClassName === void 0 ? void 0 : languageClassName.replace(/language-/, '');
}
/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 *
 * @param content The raw code with magic comments. Trailing newline will be
 * trimmed upfront.
 * @param options Options for parsing behavior.
 */ function parseLines(content, options) {
    let code = content.replace(/\n$/, '');
    const { language , magicComments , metastring  } = options;
    // Highlighted lines specified in props: don't parse the content
    if (metastring && metastringLinesRangeRegex.test(metastring)) {
        const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
        if (magicComments.length === 0) {
            throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
        }
        const metastringRangeClassName = magicComments[0].className;
        const lines = parse_numeric_range_default()(linesRange).filter((n)=>n > 0).map((n)=>[
                n - 1,
                [
                    metastringRangeClassName
                ]
            ]);
        return {
            lineClassNames: Object.fromEntries(lines),
            code
        };
    }
    if (language === undefined) {
        return {
            lineClassNames: {},
            code
        };
    }
    const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
    // Go through line by line
    const lines = code.split('\n');
    const blocks = Object.fromEntries(magicComments.map((d)=>[
            d.className,
            {
                start: 0,
                range: ''
            }
        ]));
    const lineToClassName = Object.fromEntries(magicComments.filter((d)=>d.line).map(({ className , line  })=>[
            line,
            className
        ]));
    const blockStartToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className , block  })=>[
            block.start,
            className
        ]));
    const blockEndToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className , block  })=>[
            block.end,
            className
        ]));
    for(let lineNumber = 0; lineNumber < lines.length;){
        const line = lines[lineNumber];
        const match = line.match(directiveRegex);
        if (!match) {
            // Lines without directives are unchanged
            lineNumber += 1;
            continue;
        }
        const directive = match.slice(1).find((item)=>item !== undefined);
        if (lineToClassName[directive]) {
            blocks[lineToClassName[directive]].range += `${lineNumber},`;
        } else if (blockStartToClassName[directive]) {
            blocks[blockStartToClassName[directive]].start = lineNumber;
        } else if (blockEndToClassName[directive]) {
            blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
        }
        lines.splice(lineNumber, 1);
    }
    code = lines.join('\n');
    const lineClassNames = {};
    Object.entries(blocks).forEach(([className, { range  }])=>{
        parse_numeric_range_default()(range).forEach((l)=>{
            var _lineClassNames, _l;
            var _;
            (_ = (_lineClassNames = lineClassNames)[_l = l]) !== null && _ !== void 0 ? _ : _lineClassNames[_l] = [];
            lineClassNames[l].push(className);
        });
    });
    return {
        lineClassNames,
        code
    };
}
function getPrismCssVariables(prismTheme) {
    const mapping = {
        color: '--prism-color',
        backgroundColor: '--prism-background-color'
    };
    const properties = {};
    Object.entries(prismTheme.plain).forEach(([key, value])=>{
        const varName = mapping[key];
        if (varName && typeof value === 'string') {
            properties[varName] = value;
        }
    });
    return properties;
} //# sourceMappingURL=codeBlockUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"codeBlockContainer":"codeBlockContainer_Ckt0"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Container/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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





function CodeBlockContainer(_param) {
    var { as: As  } = _param, props = _object_without_properties(_param, [
        "as"
    ]);
    const prismTheme = usePrismTheme();
    const prismCssVariables = getPrismCssVariables(prismTheme);
    return /*#__PURE__*/ react.createElement(As, _object_spread_props(_object_spread({}, props), {
        style: prismCssVariables,
        className: (0,clsx_m/* default */.Z)(props.className, styles_module.codeBlockContainer, ThemeClassNames/* ThemeClassNames.common.codeBlock */.k.common.codeBlock)
    }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"codeBlockContent":"codeBlockContent_biex","codeBlockTitle":"codeBlockTitle_Ktv7","codeBlock":"codeBlock_bY9V","codeBlockStandalone":"codeBlockStandalone_MEMb","codeBlockLines":"codeBlockLines_e6Vv","codeBlockLinesWithNumbering":"codeBlockLinesWithNumbering_o6Pm","buttonGroup":"buttonGroup__atx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/Element.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX({ children , className  }) {
    return /*#__PURE__*/ react.createElement(CodeBlockContainer, {
        as: "pre",
        tabIndex: 0,
        className: (0,clsx_m/* default */.Z)(Content_styles_module.codeBlockStandalone, 'thin-scrollbar', className)
    }, /*#__PURE__*/ react.createElement("code", {
        className: Content_styles_module.codeBlockLines
    }, children));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(37806);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useMutationObserver.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const DefaultOptions = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function useMutationObserver(target, callback, options = DefaultOptions) {
    const stableCallback = (0,reactUtils/* useEvent */.zX)(callback);
    // MutationObserver options are not nested much
    // so this should be to memo options in 99%
    // TODO handle options.attributeFilter array
    const stableOptions = (0,reactUtils/* useShallowMemoObject */.Ql)(options);
    (0,react.useEffect)(()=>{
        const observer = new MutationObserver(stableCallback);
        if (target) {
            observer.observe(target, stableOptions);
        }
        return ()=>observer.disconnect();
    }, [
        target,
        stableCallback,
        stableOptions
    ]);
} //# sourceMappingURL=useMutationObserver.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useCodeWordWrap.js


// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef, callback) {
    const [hiddenTabElement, setHiddenTabElement] = (0,react.useState)();
    const updateHiddenTabElement = (0,react.useCallback)(()=>{
        var _codeBlockRef_current;
        // No need to observe non-hidden tabs
        // + we want to force a re-render when a tab becomes visible
        setHiddenTabElement((_codeBlockRef_current = codeBlockRef.current) === null || _codeBlockRef_current === void 0 ? void 0 : _codeBlockRef_current.closest('[role=tabpanel][hidden]'));
    }, [
        codeBlockRef,
        setHiddenTabElement
    ]);
    (0,react.useEffect)(()=>{
        updateHiddenTabElement();
    }, [
        updateHiddenTabElement
    ]);
    useMutationObserver(hiddenTabElement, (mutations)=>{
        mutations.forEach((mutation)=>{
            if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                callback();
                updateHiddenTabElement();
            }
        });
    }, {
        attributes: true,
        characterData: false,
        childList: false,
        subtree: false
    });
}
function useCodeWordWrap() {
    const [isEnabled, setIsEnabled] = (0,react.useState)(false);
    const [isCodeScrollable, setIsCodeScrollable] = (0,react.useState)(false);
    const codeBlockRef = (0,react.useRef)(null);
    const toggle = (0,react.useCallback)(()=>{
        const codeElement = codeBlockRef.current.querySelector('code');
        if (isEnabled) {
            codeElement.removeAttribute('style');
        } else {
            codeElement.style.whiteSpace = 'pre-wrap';
            // When code wrap is enabled, we want to avoid a scrollbar in any case
            // Ensure that very very long words/strings/tokens still wrap
            codeElement.style.overflowWrap = 'anywhere';
        }
        setIsEnabled((value)=>!value);
    }, [
        codeBlockRef,
        isEnabled
    ]);
    const updateCodeIsScrollable = (0,react.useCallback)(()=>{
        const { scrollWidth , clientWidth  } = codeBlockRef.current;
        const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector('code').hasAttribute('style');
        setIsCodeScrollable(isScrollable);
    }, [
        codeBlockRef
    ]);
    useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
    (0,react.useEffect)(()=>{
        updateCodeIsScrollable();
    }, [
        isEnabled,
        updateCodeIsScrollable
    ]);
    (0,react.useEffect)(()=>{
        window.addEventListener('resize', updateCodeIsScrollable, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('resize', updateCodeIsScrollable);
        };
    }, [
        updateCodeIsScrollable
    ]);
    return {
        codeBlockRef,
        isEnabled,
        isCodeScrollable,
        toggle
    };
} //# sourceMappingURL=useCodeWordWrap.js.map

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(87410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ const duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism/* default */.Z,
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ const dist = (Highlight);


;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Line_styles_module = ({"codeLine":"codeLine_lJS_","codeLineNumber":"codeLineNumber_Tfdd","codeLineContent":"codeLineContent_feaV"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Line/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Line_define_property(obj, key, value) {
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
function Line_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Line_define_property(target, key, source[key]);
        });
    }
    return target;
}



function CodeBlockLine({ line , classNames , showLineNumbers , getLineProps , getTokenProps  }) {
    if (line.length === 1 && line[0].content === '\n') {
        line[0].content = '';
    }
    const lineProps = getLineProps({
        line,
        className: (0,clsx_m/* default */.Z)(classNames, showLineNumbers && Line_styles_module.codeLine)
    });
    const lineTokens = line.map((token, key)=>/*#__PURE__*/ react.createElement("span", Line_object_spread({
            key: key
        }, getTokenProps({
            token,
            key
        }))));
    return /*#__PURE__*/ react.createElement("span", lineProps, showLineNumbers ? /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement("span", {
        className: Line_styles_module.codeLineNumber
    }), /*#__PURE__*/ react.createElement("span", {
        className: Line_styles_module.codeLineContent
    }, lineTokens)) : lineTokens, /*#__PURE__*/ react.createElement("br", null));
}

;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input, { target =document.body  } = {}) {
    const element = document.createElement('textarea');
    const previouslyFocusedElement = document.activeElement;
    element.value = input;
    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '');
    element.style.contain = 'strict';
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    element.style.fontSize = '12pt'; // Prevent zooming on iOS
    const selection = document.getSelection();
    let originalRange = false;
    if (selection.rangeCount > 0) {
        originalRange = selection.getRangeAt(0);
    }
    target.append(element);
    element.select();
    // Explicit selection workaround for iOS
    element.selectionStart = 0;
    element.selectionEnd = input.length;
    let isSuccess = false;
    try {
        isSuccess = document.execCommand('copy');
    } catch (e) {}
    element.remove();
    if (originalRange) {
        selection.removeAllRanges();
        selection.addRange(originalRange);
    }
    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }
    return isSuccess;
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(92210);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CopyButton_styles_module = ({"copyButtonCopied":"copyButtonCopied_obH4","copyButtonIcons":"copyButtonIcons_eSgA","copyButtonIcon":"copyButtonIcon_y97N","copyButtonSuccessIcon":"copyButtonSuccessIcon_LjdS"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/CopyButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// @ts-expect-error: TODO, we need to make theme-classic have type: module



function CopyButton({ code , className  }) {
    const [isCopied, setIsCopied] = (0,react.useState)(false);
    const copyTimeout = (0,react.useRef)(undefined);
    const handleCopyCode = (0,react.useCallback)(()=>{
        copyTextToClipboard(code);
        setIsCopied(true);
        copyTimeout.current = window.setTimeout(()=>{
            setIsCopied(false);
        }, 1000);
    }, [
        code
    ]);
    (0,react.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current), []);
    return /*#__PURE__*/ react.createElement("button", {
        type: "button",
        "aria-label": isCopied ? (0,Translate/* translate */.I)({
            id: 'theme.CodeBlock.copied',
            message: 'Copied',
            description: 'The copied button label on code blocks'
        }) : (0,Translate/* translate */.I)({
            id: 'theme.CodeBlock.copyButtonAriaLabel',
            message: 'Copy code to clipboard',
            description: 'The ARIA label for copy code blocks button'
        }),
        title: (0,Translate/* translate */.I)({
            id: 'theme.CodeBlock.copy',
            message: 'Copy',
            description: 'The copy button label on code blocks'
        }),
        className: (0,clsx_m/* default */.Z)('clean-btn', className, CopyButton_styles_module.copyButton, isCopied && CopyButton_styles_module.copyButtonCopied),
        onClick: handleCopyCode
    }, /*#__PURE__*/ react.createElement("span", {
        className: CopyButton_styles_module.copyButtonIcons,
        "aria-hidden": "true"
    }, /*#__PURE__*/ react.createElement("svg", {
        className: CopyButton_styles_module.copyButtonIcon,
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("path", {
        d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
    })), /*#__PURE__*/ react.createElement("svg", {
        className: CopyButton_styles_module.copyButtonSuccessIcon,
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ react.createElement("path", {
        d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
    }))));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const WordWrapButton_styles_module = ({"wordWrapButtonIcon":"wordWrapButtonIcon_Bwma","wordWrapButtonEnabled":"wordWrapButtonEnabled_EoeP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/WordWrapButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function WordWrapButton({ className , onClick , isEnabled  }) {
    const title = (0,Translate/* translate */.I)({
        id: 'theme.CodeBlock.wordWrapToggle',
        message: 'Toggle word wrap',
        description: 'The title attribute for toggle word wrapping button of code block lines'
    });
    return /*#__PURE__*/ react.createElement("button", {
        type: "button",
        onClick: onClick,
        className: (0,clsx_m/* default */.Z)('clean-btn', className, isEnabled && WordWrapButton_styles_module.wordWrapButtonEnabled),
        "aria-label": title,
        title: title
    }, /*#__PURE__*/ react.createElement("svg", {
        className: WordWrapButton_styles_module.wordWrapButtonIcon,
        viewBox: "0 0 24 24",
        "aria-hidden": "true"
    }, /*#__PURE__*/ react.createElement("path", {
        fill: "currentColor",
        d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
    })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/Content/String.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function String_define_property(obj, key, value) {
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
function String_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            String_define_property(target, key, source[key]);
        });
    }
    return target;
}
function String_ownKeys(object, enumerableOnly) {
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
function String_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        String_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}










function CodeBlockString({ children , className: blockClassName = '' , metastring , title: titleProp , showLineNumbers: showLineNumbersProp , language: languageProp  }) {
    const { prism: { defaultLanguage , magicComments  }  } = (0,useThemeConfig/* useThemeConfig */.L)();
    var _ref;
    const language = (_ref = languageProp !== null && languageProp !== void 0 ? languageProp : parseLanguage(blockClassName)) !== null && _ref !== void 0 ? _ref : defaultLanguage;
    const prismTheme = usePrismTheme();
    const wordWrap = useCodeWordWrap();
    // We still parse the metastring in case we want to support more syntax in the
    // future. Note that MDX doesn't strip quotes when parsing metastring:
    // "title=\"xyz\"" => title: "\"xyz\""
    const title = parseCodeBlockTitle(metastring) || titleProp;
    const { lineClassNames , code  } = parseLines(children, {
        metastring,
        language,
        magicComments
    });
    const showLineNumbers = showLineNumbersProp !== null && showLineNumbersProp !== void 0 ? showLineNumbersProp : containsLineNumbers(metastring);
    return /*#__PURE__*/ react.createElement(CodeBlockContainer, {
        as: "div",
        className: (0,clsx_m/* default */.Z)(blockClassName, language && !blockClassName.includes(`language-${language}`) && `language-${language}`)
    }, title && /*#__PURE__*/ react.createElement("div", {
        className: Content_styles_module.codeBlockTitle
    }, title), /*#__PURE__*/ react.createElement("div", {
        className: Content_styles_module.codeBlockContent
    }, /*#__PURE__*/ react.createElement(dist, String_object_spread_props(String_object_spread({}, defaultProps), {
        theme: prismTheme,
        code: code,
        language: language !== null && language !== void 0 ? language : 'text'
    }), ({ className , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ react.createElement("pre", {
            /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */ tabIndex: 0,
            ref: wordWrap.codeBlockRef,
            className: (0,clsx_m/* default */.Z)(className, Content_styles_module.codeBlock, 'thin-scrollbar')
        }, /*#__PURE__*/ react.createElement("code", {
            className: (0,clsx_m/* default */.Z)(Content_styles_module.codeBlockLines, showLineNumbers && Content_styles_module.codeBlockLinesWithNumbering)
        }, tokens.map((line, i)=>/*#__PURE__*/ react.createElement(CodeBlockLine, {
                key: i,
                line: line,
                getLineProps: getLineProps,
                getTokenProps: getTokenProps,
                classNames: lineClassNames[i],
                showLineNumbers: showLineNumbers
            }))))), /*#__PURE__*/ react.createElement("div", {
        className: Content_styles_module.buttonGroup
    }, (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /*#__PURE__*/ react.createElement(WordWrapButton, {
        className: Content_styles_module.codeButton,
        onClick: ()=>wordWrap.toggle(),
        isEnabled: wordWrap.isEnabled
    }), /*#__PURE__*/ react.createElement(CopyButton, {
        className: Content_styles_module.codeButton,
        code: code
    }))));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function CodeBlock_define_property(obj, key, value) {
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
function CodeBlock_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            CodeBlock_define_property(target, key, source[key]);
        });
    }
    return target;
}
function CodeBlock_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = CodeBlock_object_without_properties_loose(source, excluded);
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
function CodeBlock_object_without_properties_loose(source, excluded) {
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




/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */ function maybeStringifyChildren(children) {
    if (react.Children.toArray(children).some((el)=>/*#__PURE__*/ (0,react.isValidElement)(el))) {
        return children;
    }
    // The children is now guaranteed to be one/more plain strings
    return Array.isArray(children) ? children.join('') : children;
}
function CodeBlock(_param) {
    var { children: rawChildren  } = _param, props = CodeBlock_object_without_properties(_param, [
        "children"
    ]);
    // The Prism theme on SSR is always the default theme but the site theme can
    // be in a different mode. React hydration doesn't update DOM styles that come
    // from SSR. Hence force a re-render after mounting to apply the current
    // relevant styles.
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    const children = maybeStringifyChildren(rawChildren);
    const CodeBlockComp = typeof children === 'string' ? CodeBlockString : CodeBlockJSX;
    return /*#__PURE__*/ react.createElement(CodeBlockComp, CodeBlock_object_spread({
        key: String(isBrowser)
    }, props), children);
}


/***/ }),

/***/ 1755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Details_Details)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(30358);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(52647);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"details":"details_lb9f","isBrowser":"isBrowser_bmU9","collapsibleContent":"collapsibleContent_i85q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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





function isInSummary(node) {
    if (!node) {
        return false;
    }
    return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
    if (!node) {
        return false;
    }
    return node === parent || hasParent(node.parentElement, parent);
}
/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */ function Details(_param) {
    var { summary , children  } = _param, props = _object_without_properties(_param, [
        "summary",
        "children"
    ]);
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    const detailsRef = (0,react.useRef)(null);
    const { collapsed , setCollapsed  } = (0,Collapsible/* useCollapsible */.u)({
        initialState: !props.open
    });
    // Use a separate state for the actual details prop, because it must be set
    // only after animation completes, otherwise close animations won't work
    const [open, setOpen] = (0,react.useState)(props.open);
    return(// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    /*#__PURE__*/ react.createElement("details", _object_spread_props(_object_spread({}, props), {
        ref: detailsRef,
        open: open,
        "data-collapsed": collapsed,
        className: (0,clsx_m/* default */.Z)(styles_module.details, isBrowser && styles_module.isBrowser, props.className),
        onMouseDown: (e)=>{
            const target = e.target;
            // Prevent a double-click to highlight summary text
            if (isInSummary(target) && e.detail > 1) {
                e.preventDefault();
            }
        },
        onClick: (e)=>{
            e.stopPropagation(); // For isolation of multiple nested details/summary
            const target = e.target;
            const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
            if (!shouldToggle) {
                return;
            }
            e.preventDefault();
            if (collapsed) {
                setCollapsed(false);
                setOpen(true);
            } else {
                setCollapsed(true);
            // Don't do this, it breaks close animation!
            // setOpen(false);
            }
        }
    }), summary !== null && summary !== void 0 ? summary : /*#__PURE__*/ react.createElement("summary", null, "Details"), /*#__PURE__*/ react.createElement(Collapsible/* Collapsible */.z, {
        lazy: false,
        collapsed: collapsed,
        disableSSRStyle: true // Allows component to work fine even with JS disabled!
        ,
        onCollapseTransitionEnd: (newCollapsed)=>{
            setCollapsed(newCollapsed);
            setOpen(!newCollapsed);
        }
    }, /*#__PURE__*/ react.createElement("div", {
        className: styles_module.collapsibleContent
    }, children))));
} //# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Details_styles_module = ({"details":"details_b_Ee"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Details_define_property(obj, key, value) {
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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
}
function Details_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Details_define_property(target, key, source[key]);
        });
    }
    return target;
}
function Details_ownKeys(object, enumerableOnly) {
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
function Details_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Details_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}




// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';
function Details_Details(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /*#__PURE__*/ react.createElement(Details, Details_object_spread_props(Details_object_spread({}, props), {
        className: (0,clsx_m/* default */.Z)(InfimaClasses, Details_styles_module.details, props.className)
    }));
}


/***/ }),

/***/ 24999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Heading)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(92210);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86016);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(31984);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_LWe7","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_WYt5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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






function Heading(_param) {
    var { as: As , id  } = _param, props = _object_without_properties(_param, [
        "as",
        "id"
    ]);
    const { navbar: { hideOnScroll  }  } = (0,useThemeConfig/* useThemeConfig */.L)();
    // H1 headings do not need an id because they don't appear in the TOC.
    if (As === 'h1' || !id) {
        return /*#__PURE__*/ react.createElement(As, _object_spread_props(_object_spread({}, props), {
            id: undefined
        }));
    }
    const anchorTitle = (0,Translate/* translate */.I)({
        id: 'theme.common.headingLinkTitle',
        message: 'Direct link to {heading}',
        description: 'Title for link to heading'
    }, {
        heading: typeof props.children === 'string' ? props.children : id
    });
    return /*#__PURE__*/ react.createElement(As, _object_spread_props(_object_spread({}, props), {
        className: (0,clsx_m/* default */.Z)('anchor', hideOnScroll ? styles_module.anchorWithHideOnScrollNavbar : styles_module.anchorWithStickyNavbar, props.className),
        id: id
    }), props.children, /*#__PURE__*/ react.createElement(Link/* default */.Z, {
        className: "hash-link",
        to: `#${id}`,
        "aria-label": anchorTitle,
        title: anchorTitle
    }, "​"));
}


/***/ }),

/***/ 74414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MDXImg)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"img":"img_ev3q"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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



function transformImgClassName(className) {
    return (0,clsx_m/* default */.Z)(className, styles_module.img);
}
function MDXImg(props) {
    return(// eslint-disable-next-line jsx-a11y/alt-text
    /*#__PURE__*/ react.createElement("img", _object_spread_props(_object_spread({
        loading: "lazy"
    }, props), {
        className: transformImgClassName(props.className)
    })));
}


/***/ }),

/***/ 89216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MDXUl)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"containsTaskList":"containsTaskList_mC6p"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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



function transformUlClassName(className) {
    return (0,clsx_m/* default */.Z)(className, // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    (className === null || className === void 0 ? void 0 : className.includes('contains-task-list')) && styles_module.containsTaskList);
}
function MDXUl(props) {
    return /*#__PURE__*/ react.createElement("ul", _object_spread_props(_object_spread({}, props), {
        className: transformUlClassName(props.className)
    }));
}


/***/ }),

/***/ 99387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _theme_MDXComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29768);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXContent({ children  }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .MDXProvider */ .Zo, {
        components: _theme_MDXComponents__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
    }, children);
}


/***/ }),

/***/ 48704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TOC)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(15574);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tableOfContents":"tableOfContents_bqdL","docItemContainer":"docItemContainer_F8PC"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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




// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
function TOC(_param) {
    var { className  } = _param, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(styles_module.tableOfContents, 'thin-scrollbar', className)
    }, /*#__PURE__*/ react.createElement(TOCItems/* default */.Z, _object_spread_props(_object_spread({}, props), {
        linkClassName: LINK_CLASS_NAME,
        linkActiveClassName: LINK_ACTIVE_CLASS_NAME
    })));
}


/***/ }),

/***/ 15574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86016);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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

function treeifyTOC(flatTOC) {
    const headings = flatTOC.map((heading)=>_object_spread_props(_object_spread({}, heading), {
            parentIndex: -1,
            children: []
        }));
    // Keep track of which previous index would be the current heading's direct
    // parent. Each entry <i> is the last index of the `headings` array at heading
    // level <i>. We will modify these indices as we iterate through all headings.
    // e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
    // indices 0 and 1 will remain unused.
    const prevIndexForLevel = Array(7).fill(-1);
    headings.forEach((curr, currIndex)=>{
        // Take the last seen index for each ancestor level. the highest index will
        // be the direct ancestor of the current heading.
        const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
        curr.parentIndex = Math.max(...ancestorLevelIndexes);
        // Mark that curr.level was last seen at the current index.
        prevIndexForLevel[curr.level] = currIndex;
    });
    const rootNodes = [];
    // For a given parentIndex, add each Node into that parent's `children` array
    headings.forEach((heading)=>{
        const { parentIndex  } = heading, rest = _object_without_properties(heading, [
            "parentIndex"
        ]);
        if (parentIndex >= 0) {
            headings[parentIndex].children.push(rest);
        } else {
            rootNodes.push(rest);
        }
    });
    return rootNodes;
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */ function useTreeifiedTOC(toc) {
    return useMemo(()=>treeifyTOC(toc), [
        toc
    ]);
}
function filterTOC({ toc , minHeadingLevel , maxHeadingLevel  }) {
    function isValid(item) {
        return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
    }
    return toc.flatMap((item)=>{
        const filteredChildren = filterTOC({
            toc: item.children,
            minHeadingLevel,
            maxHeadingLevel
        });
        if (isValid(item)) {
            return [
                _object_spread_props(_object_spread({}, item), {
                    children: filteredChildren
                })
            ];
        }
        return filteredChildren;
    });
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */ function useFilteredAndTreeifiedTOC({ toc , minHeadingLevel , maxHeadingLevel  }) {
    return (0,react.useMemo)(()=>filterTOC({
            toc: treeifyTOC(toc),
            minHeadingLevel,
            maxHeadingLevel
        }), [
        toc,
        minHeadingLevel,
        maxHeadingLevel
    ]);
} //# sourceMappingURL=tocUtils.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */ function getVisibleBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    const hasNoHeight = rect.top === rect.bottom;
    if (hasNoHeight) {
        return getVisibleBoundingClientRect(element.parentNode);
    }
    return rect;
}
/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */ function isInViewportTopHalf(boundingRect) {
    return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors({ minHeadingLevel , maxHeadingLevel  }) {
    const selectors = [];
    for(let i = minHeadingLevel; i <= maxHeadingLevel; i += 1){
        selectors.push(`h${i}.anchor`);
    }
    return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, { anchorTopOffset  }) {
    // Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
    // under the viewport top boundary. It does not mean this anchor is visible
    // yet, but if user continues scrolling down, it will be the first to become
    // visible
    const nextVisibleAnchor = anchors.find((anchor)=>{
        const boundingRect = getVisibleBoundingClientRect(anchor);
        return boundingRect.top >= anchorTopOffset;
    });
    if (nextVisibleAnchor) {
        const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
        // If anchor is in the top half of the viewport: it is the one we consider
        // "active" (unless it's too close to the top and and soon to be scrolled
        // outside viewport)
        if (isInViewportTopHalf(boundingRect)) {
            return nextVisibleAnchor;
        }
        var _anchors_;
        // If anchor is in the bottom half of the viewport, or under the viewport,
        // we consider the active anchor is the previous one. This is because the
        // main text appearing in the user screen mostly belong to the previous
        // anchor. Returns null for the first anchor, see
        // https://github.com/facebook/docusaurus/issues/5318
        return (_anchors_ = anchors[anchors.indexOf(nextVisibleAnchor) - 1]) !== null && _anchors_ !== void 0 ? _anchors_ : null;
    }
    var _anchors_1;
    // No anchor under viewport top (i.e. we are at the bottom of the page),
    // highlight the last anchor found
    return (_anchors_1 = anchors[anchors.length - 1]) !== null && _anchors_1 !== void 0 ? _anchors_1 : null;
}
function getLinkAnchorValue(link) {
    return decodeURIComponent(link.href.substring(link.href.indexOf('#') + 1));
}
function getLinks(linkClassName) {
    return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
    // Not ideal to obtain actual height this way
    // Using TS ! (not ?) because otherwise a bad selector would be un-noticed
    return document.querySelector('.navbar').clientHeight;
}
function useAnchorTopOffsetRef() {
    const anchorTopOffsetRef = (0,react.useRef)(0);
    const { navbar: { hideOnScroll  }  } = (0,useThemeConfig/* useThemeConfig */.L)();
    (0,react.useEffect)(()=>{
        anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
    }, [
        hideOnScroll
    ]);
    return anchorTopOffsetRef;
}
/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */ function useTOCHighlight(config) {
    const lastActiveLinkRef = (0,react.useRef)(undefined);
    const anchorTopOffsetRef = useAnchorTopOffsetRef();
    (0,react.useEffect)(()=>{
        if (!config) {
            // No-op, highlighting is disabled
            return ()=>{};
        }
        const { linkClassName , linkActiveClassName , minHeadingLevel , maxHeadingLevel  } = config;
        function updateLinkActiveClass(link, active) {
            if (active) {
                if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
                    lastActiveLinkRef.current.classList.remove(linkActiveClassName);
                }
                link.classList.add(linkActiveClassName);
                lastActiveLinkRef.current = link;
            // link.scrollIntoView({block: 'nearest'});
            } else {
                link.classList.remove(linkActiveClassName);
            }
        }
        function updateActiveLink() {
            const links = getLinks(linkClassName);
            const anchors = getAnchors({
                minHeadingLevel,
                maxHeadingLevel
            });
            const activeAnchor = getActiveAnchor(anchors, {
                anchorTopOffset: anchorTopOffsetRef.current
            });
            const activeLink = links.find((link)=>activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
            links.forEach((link)=>{
                updateLinkActiveClass(link, link === activeLink);
            });
        }
        document.addEventListener('scroll', updateActiveLink);
        document.addEventListener('resize', updateActiveLink);
        updateActiveLink();
        return ()=>{
            document.removeEventListener('scroll', updateActiveLink);
            document.removeEventListener('resize', updateActiveLink);
        };
    }, [
        config,
        anchorTopOffsetRef
    ]);
} //# sourceMappingURL=useTOCHighlight.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Recursive component rendering the toc tree
function TOCItemTree({ toc , className , linkClassName , isChild  }) {
    if (!toc.length) {
        return null;
    }
    return /*#__PURE__*/ react.createElement("ul", {
        className: isChild ? undefined : className
    }, toc.map((heading)=>/*#__PURE__*/ react.createElement("li", {
            key: heading.id
        }, /*#__PURE__*/ react.createElement("a", {
            href: `#${heading.id}`,
            className: linkClassName !== null && linkClassName !== void 0 ? linkClassName : undefined,
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: heading.value
            }
        }), /*#__PURE__*/ react.createElement(TOCItemTree, {
            isChild: true,
            toc: heading.children,
            className: className,
            linkClassName: linkClassName
        }))));
}
// Memo only the tree root is enough
/* harmony default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function TOCItems_define_property(obj, key, value) {
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
function TOCItems_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            TOCItems_define_property(target, key, source[key]);
        });
    }
    return target;
}
function TOCItems_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = TOCItems_object_without_properties_loose(source, excluded);
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
function TOCItems_object_without_properties_loose(source, excluded) {
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




function TOCItems(_param) {
    var { toc , className ='table-of-contents table-of-contents__left-border' , linkClassName ='table-of-contents__link' , linkActiveClassName =undefined , minHeadingLevel: minHeadingLevelOption , maxHeadingLevel: maxHeadingLevelOption  } = _param, props = TOCItems_object_without_properties(_param, [
        "toc",
        "className",
        "linkClassName",
        "linkActiveClassName",
        "minHeadingLevel",
        "maxHeadingLevel"
    ]);
    const themeConfig = (0,useThemeConfig/* useThemeConfig */.L)();
    const minHeadingLevel = minHeadingLevelOption !== null && minHeadingLevelOption !== void 0 ? minHeadingLevelOption : themeConfig.tableOfContents.minHeadingLevel;
    const maxHeadingLevel = maxHeadingLevelOption !== null && maxHeadingLevelOption !== void 0 ? maxHeadingLevelOption : themeConfig.tableOfContents.maxHeadingLevel;
    const tocTree = useFilteredAndTreeifiedTOC({
        toc,
        minHeadingLevel,
        maxHeadingLevel
    });
    const tocHighlightConfig = (0,react.useMemo)(()=>{
        if (linkClassName && linkActiveClassName) {
            return {
                linkClassName,
                linkActiveClassName,
                minHeadingLevel,
                maxHeadingLevel
            };
        }
        return undefined;
    }, [
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
    ]);
    useTOCHighlight(tocHighlightConfig);
    return /*#__PURE__*/ react.createElement(Tree, TOCItems_object_spread({
        toc: tocTree,
        className: className,
        linkClassName: linkClassName
    }, props));
}


/***/ }),

/***/ 50551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function TabItem({ children , hidden , className  }) {
    return /*#__PURE__*/ react.createElement("div", {
        role: "tabpanel",
        className: (0,clsx_m/* default */.Z)(styles_module.tabItem, className),
        hidden
    }, children);
}


/***/ }),

/***/ 93070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(6379);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(47348);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(83928);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js
var storageUtils = __webpack_require__(76632);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function _define_property(obj, key, value) {
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




// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp) {
    return 'value' in comp.props;
}
function ensureValidChildren(children) {
    return react.Children.map(children, (child)=>{
        if (/*#__PURE__*/ (0,react.isValidElement)(child) && isTabItem(child)) {
            return child;
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
    });
}
function extractChildrenTabValues(children) {
    return ensureValidChildren(children).map(({ props: { value , label , attributes , default: isDefault  }  })=>({
            value,
            label,
            attributes,
            default: isDefault
        }));
}
function ensureNoDuplicateValue(values) {
    const dup = (0,jsUtils/* duplicates */.l)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp , children  } = props;
    return (0,react.useMemo)(()=>{
        const values = valuesProp !== null && valuesProp !== void 0 ? valuesProp : extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue({ value , tabValues  }) {
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue({ defaultValue , tabValues  }) {
    if (tabValues.length === 0) {
        throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');
    }
    if (defaultValue) {
        // Warn user about passing incorrect defaultValue as prop.
        if (!isValidValue({
            value: defaultValue,
            tabValues
        })) {
            throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map((a)=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);
        }
        return defaultValue;
    }
    var _tabValues_find;
    const defaultTabValue = (_tabValues_find = tabValues.find((tabValue)=>tabValue.default)) !== null && _tabValues_find !== void 0 ? _tabValues_find : tabValues[0];
    if (!defaultTabValue) {
        throw new Error('Unexpected error: 0 tabValues');
    }
    return defaultTabValue.value;
}
function getStorageKey(groupId) {
    if (!groupId) {
        return null;
    }
    return `docusaurus.tab.${groupId}`;
}
function getQueryStringKey({ queryString =false , groupId  }) {
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId !== null && groupId !== void 0 ? groupId : null;
}
function useTabQueryString({ queryString =false , groupId  }) {
    const history = (0,react_router/* useHistory */.k6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,historyUtils/* useQueryStringValue */._X)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace(_object_spread_props(_object_spread({}, history.location), {
            search: searchParams.toString()
        }));
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage({ groupId  }) {
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,storageUtils/* useStorageSlot */.Nk)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        storageSlot.set(newValue);
    }, [
        key,
        storageSlot
    ]);
    return [
        value,
        setValue
    ];
}
function useTabs(props) {
    const { defaultValue , queryString =false , groupId  } = props;
    const tabValues = useTabValues(props);
    const [selectedValue, setSelectedValue] = (0,react.useState)(()=>getInitialStateValue({
            defaultValue,
            tabValues
        }));
    const [queryStringValue, setQueryString] = useTabQueryString({
        queryString,
        groupId
    });
    const [storageValue, setStorageValue] = useTabStorage({
        groupId
    });
    // We sync valid querystring/storage value to state on change + hydration
    const valueToSync = (()=>{
        const value = queryStringValue !== null && queryStringValue !== void 0 ? queryStringValue : storageValue;
        if (!isValidValue({
            value,
            tabValues
        })) {
            return null;
        }
        return value;
    })();
    // Sync in a layout/sync effect is important, for useScrollPositionBlocker
    // See https://github.com/facebook/docusaurus/issues/8625
    (0,react.useLayoutEffect)(()=>{
        if (valueToSync) {
            setSelectedValue(valueToSync);
        }
    }, [
        valueToSync
    ]);
    const selectValue = (0,react.useCallback)((newValue)=>{
        if (!isValidValue({
            value: newValue,
            tabValues
        })) {
            throw new Error(`Can't select invalid tab value=${newValue}`);
        }
        setSelectedValue(newValue);
        setQueryString(newValue);
        setStorageValue(newValue);
    }, [
        setQueryString,
        setStorageValue,
        tabValues
    ]);
    return {
        selectedValue,
        selectValue,
        tabValues
    };
} //# sourceMappingURL=tabsUtils.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(30358);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Tabs_define_property(obj, key, value) {
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
function Tabs_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Tabs_define_property(target, key, source[key]);
        });
    }
    return target;
}
function Tabs_ownKeys(object, enumerableOnly) {
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
function Tabs_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Tabs_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}





function TabList({ className , block , selectedValue , selectValue , tabValues  }) {
    const tabRefs = [];
    const { blockElementScrollPositionUntilNextRender  } = (0,scrollUtils/* useScrollPositionBlocker */.o5)();
    const handleTabChange = (event)=>{
        const newTab = event.currentTarget;
        const newTabIndex = tabRefs.indexOf(newTab);
        const newTabValue = tabValues[newTabIndex].value;
        if (newTabValue !== selectedValue) {
            blockElementScrollPositionUntilNextRender(newTab);
            selectValue(newTabValue);
        }
    };
    const handleKeydown = (event)=>{
        let focusElement = null;
        switch(event.key){
            case 'Enter':
                {
                    handleTabChange(event);
                    break;
                }
            case 'ArrowRight':
                {
                    const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
                    var _tabRefs_nextTab;
                    focusElement = (_tabRefs_nextTab = tabRefs[nextTab]) !== null && _tabRefs_nextTab !== void 0 ? _tabRefs_nextTab : tabRefs[0];
                    break;
                }
            case 'ArrowLeft':
                {
                    const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                    var _tabRefs_prevTab;
                    focusElement = (_tabRefs_prevTab = tabRefs[prevTab]) !== null && _tabRefs_prevTab !== void 0 ? _tabRefs_prevTab : tabRefs[tabRefs.length - 1];
                    break;
                }
            default:
                break;
        }
        focusElement === null || focusElement === void 0 ? void 0 : focusElement.focus();
    };
    return /*#__PURE__*/ react.createElement("ul", {
        role: "tablist",
        "aria-orientation": "horizontal",
        className: (0,clsx_m/* default */.Z)('tabs', {
            'tabs--block': block
        }, className)
    }, tabValues.map(({ value , label , attributes  })=>{
        /*#__PURE__*/ return react.createElement("li", Tabs_object_spread_props(Tabs_object_spread({
            // TODO extract TabListItem
            role: "tab",
            tabIndex: selectedValue === value ? 0 : -1,
            "aria-selected": selectedValue === value,
            key: value,
            ref: (tabControl)=>tabRefs.push(tabControl),
            onKeyDown: handleKeydown,
            onClick: handleTabChange
        }, attributes), {
            className: (0,clsx_m/* default */.Z)('tabs__item', styles_module.tabItem, attributes === null || attributes === void 0 ? void 0 : attributes.className, {
                'tabs__item--active': selectedValue === value
            })
        }), label !== null && label !== void 0 ? label : value);
    }));
}
function TabContent({ lazy , children , selectedValue  }) {
    // eslint-disable-next-line no-param-reassign
    children = Array.isArray(children) ? children : [
        children
    ];
    if (lazy) {
        const selectedTabItem = children.find((tabItem)=>tabItem.props.value === selectedValue);
        if (!selectedTabItem) {
            // fail-safe or fail-fast? not sure what's best here
            return null;
        }
        return /*#__PURE__*/ (0,react.cloneElement)(selectedTabItem, {
            className: 'margin-top--md'
        });
    }
    return /*#__PURE__*/ react.createElement("div", {
        className: "margin-top--md"
    }, children.map((tabItem, i)=>/*#__PURE__*/ (0,react.cloneElement)(tabItem, {
            key: i,
            hidden: tabItem.props.value !== selectedValue
        })));
}
function TabsComponent(props) {
    const tabs = useTabs(props);
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)('tabs-container', styles_module.tabList)
    }, /*#__PURE__*/ react.createElement(TabList, Tabs_object_spread({}, props, tabs)), /*#__PURE__*/ react.createElement(TabContent, Tabs_object_spread({}, props, tabs)));
}
function Tabs(props) {
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    return /*#__PURE__*/ react.createElement(TabsComponent, Tabs_object_spread({
        // Remount tabs after hydration
        // Temporary fix for https://github.com/facebook/docusaurus/issues/5653
        key: String(isBrowser)
    }, props));
}


/***/ })

}]);