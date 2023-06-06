"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[29514,30889],{

/***/ 51272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(89712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(65319);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/searchUtils.js
var searchUtils = __webpack_require__(56391);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(53964);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(27391);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsSidebar.js
var docsSidebar = __webpack_require__(25682);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 68 modules
var Layout = __webpack_require__(94672);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(92210);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(6379);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useLocationChange.js
var useLocationChange = __webpack_require__(58010);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useBackToTopButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/** Wires the logic for the back to top button. */ function useBackToTopButton({ threshold  }) {
    const [shown, setShown] = (0,react.useState)(false);
    const isFocusedAnchor = (0,react.useRef)(false);
    const { startScroll , cancelScroll  } = (0,scrollUtils/* useSmoothScrollTo */.Ct)();
    (0,scrollUtils/* useScrollPosition */.RF)(({ scrollY: scrollTop  }, lastPosition)=>{
        const lastScrollTop = lastPosition === null || lastPosition === void 0 ? void 0 : lastPosition.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        } else if (scrollTop >= lastScrollTop) {
            // The user has scrolled down to "fight against" the animation. Cancel any
            // animation under progress.
            cancelScroll();
            setShown(false);
        } else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
            setShown(true);
        }
    });
    (0,useLocationChange/* useLocationChange */.S)((locationChangeEvent)=>{
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return {
        shown,
        scrollToTop: ()=>startScroll(0)
    };
} //# sourceMappingURL=useBackToTopButton.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"backToTopButton":"backToTopButton_sjWU","backToTopButtonShow":"backToTopButtonShow_xfvO"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BackToTopButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function BackToTopButton() {
    const { shown , scrollToTop  } = useBackToTopButton({
        threshold: 300
    });
    return /*#__PURE__*/ react.createElement("button", {
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
        }),
        className: (0,clsx_m/* default */.Z)('clean-btn', ThemeClassNames/* ThemeClassNames.common.backToTopButton */.k.common.backToTopButton, styles_module.backToTopButton, shown && styles_module.backToTopButtonShow),
        type: "button",
        onClick: scrollToTop
    });
}

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(16550);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(24683);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(86016);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Logo/index.js
var Logo = __webpack_require__(49572);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Arrow/index.js
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

function IconArrow(props) {
    return /*#__PURE__*/ react.createElement("svg", _object_spread({
        width: "20",
        height: "20",
        "aria-hidden": "true"
    }, props), /*#__PURE__*/ react.createElement("g", {
        fill: "#7a7a7a"
    }, /*#__PURE__*/ react.createElement("path", {
        d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"
    }), /*#__PURE__*/ react.createElement("path", {
        d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"
    })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CollapseButton_styles_module = ({"collapseSidebarButton":"collapseSidebarButton_PEFL","collapseSidebarButtonIcon":"collapseSidebarButtonIcon_kv0_"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function CollapseButton({ onClick  }) {
    return /*#__PURE__*/ react.createElement("button", {
        type: "button",
        title: (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.collapseButtonTitle',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.collapseButtonAriaLabel',
            message: 'Collapse sidebar',
            description: 'The title attribute for collapse button of doc sidebar'
        }),
        className: (0,clsx_m/* default */.Z)('button button--secondary button--outline', CollapseButton_styles_module.collapseSidebarButton),
        onClick: onClick
    }, /*#__PURE__*/ react.createElement(IconArrow, {
        className: CollapseButton_styles_module.collapseSidebarButtonIcon
    }));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/announcementBar.js
var announcementBar = __webpack_require__(64738);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(37806);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docSidebarItemsExpandedState.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const EmptyContext = Symbol('EmptyContext');
const Context = /*#__PURE__*/ react.createContext(EmptyContext);
/**
 * Should be used to wrap one sidebar category level. This provider syncs the
 * expanded states of all sibling categories, and categories can choose to
 * collapse itself if another one is expanded.
 */ function DocSidebarItemsExpandedStateProvider({ children  }) {
    const [expandedItem, setExpandedItem] = (0,react.useState)(null);
    const contextValue = (0,react.useMemo)(()=>({
            expandedItem,
            setExpandedItem
        }), [
        expandedItem
    ]);
    return /*#__PURE__*/ react.createElement(Context.Provider, {
        value: contextValue
    }, children);
}
function useDocSidebarItemsExpandedState() {
    const value = (0,react.useContext)(Context);
    if (value === EmptyContext) {
        throw new reactUtils/* ReactContextError */.i6('DocSidebarItemsExpandedStateProvider');
    }
    return value;
} //# sourceMappingURL=docSidebarItemsExpandedState.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(52647);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(87275);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(31984);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(30358);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Category/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Category_define_property(obj, key, value) {
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
function Category_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Category_define_property(target, key, source[key]);
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








// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({ isActive , collapsed , updateCollapsed  }) {
    const wasActive = (0,reactUtils/* usePrevious */.D9)(isActive);
    (0,react.useEffect)(()=>{
        const justBecameActive = isActive && !wasActive;
        if (justBecameActive && collapsed) {
            updateCollapsed(false);
        }
    }, [
        isActive,
        wasActive,
        collapsed,
        updateCollapsed
    ]);
}
/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */ function useCategoryHrefWithSSRFallback(item) {
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    return (0,react.useMemo)(()=>{
        if (item.href) {
            return item.href;
        }
        // In these cases, it's not necessary to render a fallback
        // We skip the "findFirstCategoryLink" computation
        if (isBrowser || !item.collapsible) {
            return undefined;
        }
        return (0,docsUtils/* findFirstCategoryLink */.Wl)(item);
    }, [
        item,
        isBrowser
    ]);
}
function Category_CollapseButton({ categoryLabel , onClick  }) {
    return /*#__PURE__*/ react.createElement("button", {
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel',
            message: "Toggle the collapsible sidebar category '{label}'",
            description: 'The ARIA label to toggle the collapsible sidebar category'
        }, {
            label: categoryLabel
        }),
        type: "button",
        className: "clean-btn menu__caret",
        onClick: onClick
    });
}
function DocSidebarItemCategory(_param) {
    var { item , onItemClick , activePath , level , index  } = _param, props = _object_without_properties(_param, [
        "item",
        "onItemClick",
        "activePath",
        "level",
        "index"
    ]);
    const { items , label , collapsible , className , href  } = item;
    const { docs: { sidebar: { autoCollapseCategories  }  }  } = (0,useThemeConfig/* useThemeConfig */.L)();
    const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
    const isActive = (0,docsUtils/* isActiveSidebarItem */._F)(item, activePath);
    const isCurrentPage = (0,routesUtils/* isSamePath */.Mg)(href, activePath);
    const { collapsed , setCollapsed  } = (0,Collapsible/* useCollapsible */.u)({
        // Active categories are always initialized as expanded. The default
        // (`item.collapsed`) is only used for non-active categories.
        initialState: ()=>{
            if (!collapsible) {
                return false;
            }
            return isActive ? false : item.collapsed;
        }
    });
    const { expandedItem , setExpandedItem  } = useDocSidebarItemsExpandedState();
    // Use this instead of `setCollapsed`, because it is also reactive
    const updateCollapsed = (toCollapsed = !collapsed)=>{
        setExpandedItem(toCollapsed ? null : index);
        setCollapsed(toCollapsed);
    };
    useAutoExpandActiveCategory({
        isActive,
        collapsed,
        updateCollapsed
    });
    (0,react.useEffect)(()=>{
        if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
            setCollapsed(true);
        }
    }, [
        collapsible,
        expandedItem,
        index,
        setCollapsed,
        autoCollapseCategories
    ]);
    return /*#__PURE__*/ react.createElement("li", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemCategory */.k.docs.docSidebarItemCategory, ThemeClassNames/* ThemeClassNames.docs.docSidebarItemCategoryLevel */.k.docs.docSidebarItemCategoryLevel(level), 'menu__list-item', {
            'menu__list-item--collapsed': collapsed
        }, className)
    }, /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)('menu__list-item-collapsible', {
            'menu__list-item-collapsible--active': isCurrentPage
        })
    }, /*#__PURE__*/ react.createElement(Link/* default */.Z, Category_object_spread({
        className: (0,clsx_m/* default */.Z)('menu__link', {
            'menu__link--sublist': collapsible,
            'menu__link--sublist-caret': !href && collapsible,
            'menu__link--active': isActive
        }),
        onClick: collapsible ? (e)=>{
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
            if (href) {
                updateCollapsed(false);
            } else {
                e.preventDefault();
                updateCollapsed();
            }
        } : ()=>{
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        },
        "aria-current": isCurrentPage ? 'page' : undefined,
        "aria-expanded": collapsible ? !collapsed : undefined,
        href: collapsible ? hrefWithSSRFallback !== null && hrefWithSSRFallback !== void 0 ? hrefWithSSRFallback : '#' : hrefWithSSRFallback
    }, props), label), href && collapsible && /*#__PURE__*/ react.createElement(Category_CollapseButton, {
        categoryLabel: label,
        onClick: (e)=>{
            e.preventDefault();
            updateCollapsed();
        }
    })), /*#__PURE__*/ react.createElement(Collapsible/* Collapsible */.z, {
        lazy: true,
        as: "ul",
        className: "menu__list",
        collapsed: collapsed
    }, /*#__PURE__*/ react.createElement(theme_DocSidebarItems, {
        items: items,
        tabIndex: collapsed ? -1 : 0,
        onItemClick: onItemClick,
        activePath: activePath,
        level: level + 1
    })));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/isInternalUrl.js
var isInternalUrl = __webpack_require__(47785);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/ExternalLink/index.js + 1 modules
var ExternalLink = __webpack_require__(40379);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Link_styles_module = ({"menuExternalLink":"menuExternalLink_NmtK"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Link/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Link_define_property(obj, key, value) {
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
function Link_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Link_define_property(target, key, source[key]);
        });
    }
    return target;
}
function Link_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = Link_object_without_properties_loose(source, excluded);
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
function Link_object_without_properties_loose(source, excluded) {
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








function DocSidebarItemLink(_param) {
    var { item , onItemClick , activePath , level , index  } = _param, props = Link_object_without_properties(_param, [
        "item",
        "onItemClick",
        "activePath",
        "level",
        "index"
    ]);
    const { href , label , className , autoAddBaseUrl  } = item;
    const isActive = (0,docsUtils/* isActiveSidebarItem */._F)(item, activePath);
    const isInternalLink = (0,isInternalUrl/* default */.Z)(href);
    return /*#__PURE__*/ react.createElement("li", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLink */.k.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level), 'menu__list-item', className),
        key: label
    }, /*#__PURE__*/ react.createElement(Link/* default */.Z, Link_object_spread({
        className: (0,clsx_m/* default */.Z)('menu__link', !isInternalLink && Link_styles_module.menuExternalLink, {
            'menu__link--active': isActive
        }),
        autoAddBaseUrl: autoAddBaseUrl,
        "aria-current": isActive ? 'page' : undefined,
        to: href
    }, isInternalLink && {
        onClick: onItemClick ? ()=>onItemClick(item) : undefined
    }, props), label, !isInternalLink && /*#__PURE__*/ react.createElement(ExternalLink/* default */.Z, null)));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Html_styles_module = ({"menuHtmlItem":"menuHtmlItem_M9Kj"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/Html/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocSidebarItemHtml({ item , level , index  }) {
    const { value , defaultStyle , className  } = item;
    return /*#__PURE__*/ react.createElement("li", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLink */.k.docs.docSidebarItemLink, ThemeClassNames/* ThemeClassNames.docs.docSidebarItemLinkLevel */.k.docs.docSidebarItemLinkLevel(level), defaultStyle && [
            Html_styles_module.menuHtmlItem,
            'menu__list-item'
        ], className),
        key: index,
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML: {
            __html: value
        }
    });
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function DocSidebarItem_define_property(obj, key, value) {
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
function DocSidebarItem_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocSidebarItem_define_property(target, key, source[key]);
        });
    }
    return target;
}
function DocSidebarItem_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = DocSidebarItem_object_without_properties_loose(source, excluded);
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
function DocSidebarItem_object_without_properties_loose(source, excluded) {
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




function DocSidebarItem(_param) {
    var { item  } = _param, props = DocSidebarItem_object_without_properties(_param, [
        "item"
    ]);
    switch(item.type){
        case 'category':
            return /*#__PURE__*/ react.createElement(DocSidebarItemCategory, DocSidebarItem_object_spread({
                item: item
            }, props));
        case 'html':
            return /*#__PURE__*/ react.createElement(DocSidebarItemHtml, DocSidebarItem_object_spread({
                item: item
            }, props));
        case 'link':
        default:
            return /*#__PURE__*/ react.createElement(DocSidebarItemLink, DocSidebarItem_object_spread({
                item: item
            }, props));
    }
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebarItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function DocSidebarItems_define_property(obj, key, value) {
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
function DocSidebarItems_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocSidebarItems_define_property(target, key, source[key]);
        });
    }
    return target;
}
function DocSidebarItems_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = DocSidebarItems_object_without_properties_loose(source, excluded);
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
function DocSidebarItems_object_without_properties_loose(source, excluded) {
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



// TODO this item should probably not receive the "activePath" props
// TODO this triggers whole sidebar re-renders on navigation
function DocSidebarItems(_param) {
    var { items  } = _param, props = DocSidebarItems_object_without_properties(_param, [
        "items"
    ]);
    return /*#__PURE__*/ react.createElement(DocSidebarItemsExpandedStateProvider, null, items.map((item, index)=>/*#__PURE__*/ react.createElement(DocSidebarItem, DocSidebarItems_object_spread({
            key: index,
            item: item,
            index: index
        }, props))));
}
// Optimize sidebar at each "level"
/* harmony default export */ const theme_DocSidebarItems = (/*#__PURE__*/(0,react.memo)(DocSidebarItems));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Content_styles_module = ({"menu":"menu_SIkG","menuWithAnnouncementBar":"menuWithAnnouncementBar_GW3s"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function useShowAnnouncementBar() {
    const { isActive  } = (0,announcementBar/* useAnnouncementBar */.nT)();
    const [showAnnouncementBar, setShowAnnouncementBar] = (0,react.useState)(isActive);
    (0,scrollUtils/* useScrollPosition */.RF)(({ scrollY  })=>{
        if (isActive) {
            setShowAnnouncementBar(scrollY === 0);
        }
    }, [
        isActive
    ]);
    return isActive && showAnnouncementBar;
}
function DocSidebarDesktopContent({ path , sidebar , className  }) {
    const showAnnouncementBar = useShowAnnouncementBar();
    return /*#__PURE__*/ react.createElement("nav", {
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.navAriaLabel',
            message: 'Docs sidebar',
            description: 'The ARIA label for the sidebar navigation'
        }),
        className: (0,clsx_m/* default */.Z)('menu thin-scrollbar', Content_styles_module.menu, showAnnouncementBar && Content_styles_module.menuWithAnnouncementBar, className)
    }, /*#__PURE__*/ react.createElement("ul", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarMenu */.k.docs.docSidebarMenu, 'menu__list')
    }, /*#__PURE__*/ react.createElement(theme_DocSidebarItems, {
        items: sidebar,
        activePath: path,
        level: 1
    })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Desktop_styles_module = ({"sidebar":"sidebar_njMd","sidebarWithHideableNavbar":"sidebarWithHideableNavbar_wUlq","sidebarHidden":"sidebarHidden_VK0M","sidebarLogo":"sidebarLogo_isFc"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocSidebarDesktop({ path , sidebar , onCollapse , isHidden  }) {
    const { navbar: { hideOnScroll  } , docs: { sidebar: { hideable  }  }  } = (0,useThemeConfig/* useThemeConfig */.L)();
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(Desktop_styles_module.sidebar, hideOnScroll && Desktop_styles_module.sidebarWithHideableNavbar, isHidden && Desktop_styles_module.sidebarHidden)
    }, hideOnScroll && /*#__PURE__*/ react.createElement(Logo/* default */.Z, {
        tabIndex: -1,
        className: Desktop_styles_module.sidebarLogo
    }), /*#__PURE__*/ react.createElement(DocSidebarDesktopContent, {
        path: path,
        sidebar: sidebar
    }), hideable && /*#__PURE__*/ react.createElement(CollapseButton, {
        onClick: onCollapse
    }));
}
/* harmony default export */ const Desktop = (/*#__PURE__*/react.memo(DocSidebarDesktop));

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(36847);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarMobileSidebar.js
var navbarMobileSidebar = __webpack_require__(57796);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = ({ sidebar , path  })=>{
    const mobileSidebar = (0,navbarMobileSidebar/* useNavbarMobileSidebar */.e)();
    return /*#__PURE__*/ react.createElement("ul", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarMenu */.k.docs.docSidebarMenu, 'menu__list')
    }, /*#__PURE__*/ react.createElement(theme_DocSidebarItems, {
        items: sidebar,
        activePath: path,
        onItemClick: (item)=>{
            // Mobile sidebar should only be closed if the category has a link
            if (item.type === 'category' && item.href) {
                mobileSidebar.toggle();
            }
            if (item.type === 'link') {
                mobileSidebar.toggle();
            }
        },
        level: 1
    }));
};
function DocSidebarMobile(props) {
    return /*#__PURE__*/ react.createElement(content/* NavbarSecondaryMenuFiller */.Zo, {
        component: DocSidebarMobileSecondaryMenu,
        props: props
    });
}
/* harmony default export */ const Mobile = (/*#__PURE__*/react.memo(DocSidebarMobile));

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocSidebar(props) {
    const windowSize = (0,useWindowSize/* useWindowSize */.i)();
    // Desktop sidebar visible on hydration: need SSR rendering
    const shouldRenderSidebarDesktop = windowSize === 'desktop' || windowSize === 'ssr';
    // Mobile sidebar not visible on hydration: can avoid SSR rendering
    const shouldRenderSidebarMobile = windowSize === 'mobile';
    return /*#__PURE__*/ react.createElement(react.Fragment, null, shouldRenderSidebarDesktop && /*#__PURE__*/ react.createElement(Desktop, props), shouldRenderSidebarMobile && /*#__PURE__*/ react.createElement(Mobile, props));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const ExpandButton_styles_module = ({"expandButton":"expandButton_m80_","expandButtonIcon":"expandButtonIcon_BlDH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/ExpandButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocPageLayoutSidebarExpandButton({ toggleSidebar  }) {
    return /*#__PURE__*/ react.createElement("div", {
        className: ExpandButton_styles_module.expandButton,
        title: (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.expandButtonTitle',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.sidebar.expandButtonAriaLabel',
            message: 'Expand sidebar',
            description: 'The ARIA label and title attribute for expand button of doc sidebar'
        }),
        tabIndex: 0,
        role: "button",
        onKeyDown: toggleSidebar,
        onClick: toggleSidebar
    }, /*#__PURE__*/ react.createElement(IconArrow, {
        className: ExpandButton_styles_module.expandButtonIcon
    }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Sidebar_styles_module = ({"docSidebarContainer":"docSidebarContainer_b6E3","docSidebarContainerHidden":"docSidebarContainerHidden_b3ry","sidebarViewport":"sidebarViewport_Xe31"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







// Reset sidebar state when sidebar changes
// Use React key to unmount/remount the children
// See https://github.com/facebook/docusaurus/issues/3414
function ResetOnSidebarChange({ children  }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
    var _sidebar_name;
    return /*#__PURE__*/ react.createElement(react.Fragment, {
        key: (_sidebar_name = sidebar === null || sidebar === void 0 ? void 0 : sidebar.name) !== null && _sidebar_name !== void 0 ? _sidebar_name : 'noSidebar'
    }, children);
}
function DocPageLayoutSidebar({ sidebar , hiddenSidebarContainer , setHiddenSidebarContainer  }) {
    const { pathname  } = (0,react_router/* useLocation */.TH)();
    const [hiddenSidebar, setHiddenSidebar] = (0,react.useState)(false);
    const toggleSidebar = (0,react.useCallback)(()=>{
        if (hiddenSidebar) {
            setHiddenSidebar(false);
        }
        setHiddenSidebarContainer((value)=>!value);
    }, [
        setHiddenSidebarContainer,
        hiddenSidebar
    ]);
    return /*#__PURE__*/ react.createElement("aside", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames.docs.docSidebarContainer */.k.docs.docSidebarContainer, Sidebar_styles_module.docSidebarContainer, hiddenSidebarContainer && Sidebar_styles_module.docSidebarContainerHidden),
        onTransitionEnd: (e)=>{
            if (!e.currentTarget.classList.contains(Sidebar_styles_module.docSidebarContainer)) {
                return;
            }
            if (hiddenSidebarContainer) {
                setHiddenSidebar(true);
            }
        }
    }, /*#__PURE__*/ react.createElement(ResetOnSidebarChange, null, /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(Sidebar_styles_module.sidebarViewport, hiddenSidebar && Sidebar_styles_module.sidebarViewportHidden)
    }, /*#__PURE__*/ react.createElement(DocSidebar, {
        sidebar: sidebar,
        path: pathname,
        onCollapse: toggleSidebar,
        isHidden: hiddenSidebar
    }), hiddenSidebar && /*#__PURE__*/ react.createElement(DocPageLayoutSidebarExpandButton, {
        toggleSidebar: toggleSidebar
    }))));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Main_styles_module = ({"docMainContainer":"docMainContainer_gTbr","docMainContainerEnhanced":"docMainContainerEnhanced_Uz_u","docItemWrapperEnhanced":"docItemWrapperEnhanced_czyv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocPageLayoutMain({ hiddenSidebarContainer , children  }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
    return /*#__PURE__*/ react.createElement("main", {
        className: (0,clsx_m/* default */.Z)(Main_styles_module.docMainContainer, (hiddenSidebarContainer || !sidebar) && Main_styles_module.docMainContainerEnhanced)
    }, /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)('container padding-top--md padding-bottom--lg', Main_styles_module.docItemWrapper, hiddenSidebarContainer && Main_styles_module.docItemWrapperEnhanced)
    }, children));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"docPage":"docPage__5DB","docsWrapper":"docsWrapper_BCFX"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocPageLayout({ children  }) {
    const sidebar = (0,docsSidebar/* useDocsSidebar */.V)();
    const [hiddenSidebarContainer, setHiddenSidebarContainer] = (0,react.useState)(false);
    return /*#__PURE__*/ react.createElement(Layout/* default */.Z, {
        wrapperClassName: Layout_styles_module.docsWrapper
    }, /*#__PURE__*/ react.createElement(BackToTopButton, null), /*#__PURE__*/ react.createElement("div", {
        className: Layout_styles_module.docPage
    }, sidebar && /*#__PURE__*/ react.createElement(DocPageLayoutSidebar, {
        sidebar: sidebar.items,
        hiddenSidebarContainer: hiddenSidebarContainer,
        setHiddenSidebarContainer: setHiddenSidebarContainer
    }), /*#__PURE__*/ react.createElement(DocPageLayoutMain, {
        hiddenSidebarContainer: hiddenSidebarContainer
    }, children)));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/NotFound.js
var NotFound = __webpack_require__(30889);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/SearchMetadata/index.js
var SearchMetadata = __webpack_require__(36894);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






function DocPageMetadata(props) {
    const { versionMetadata  } = props;
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(SearchMetadata/* default */.Z, {
        version: versionMetadata.version,
        tag: (0,searchUtils/* docVersionSearchTag */.os)(versionMetadata.pluginId, versionMetadata.version)
    }), /*#__PURE__*/ react.createElement(metadataUtils/* PageMetadata */.d, null, versionMetadata.noIndex && /*#__PURE__*/ react.createElement("meta", {
        name: "robots",
        content: "noindex, nofollow"
    })));
}
function DocPage(props) {
    const { versionMetadata  } = props;
    const currentDocRouteMetadata = (0,docsUtils/* useDocRouteMetadata */.hI)(props);
    if (!currentDocRouteMetadata) {
        return /*#__PURE__*/ react.createElement(NotFound["default"], null);
    }
    const { docElement , sidebarName , sidebarItems  } = currentDocRouteMetadata;
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement(DocPageMetadata, props), /*#__PURE__*/ react.createElement(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: (0,clsx_m/* default */.Z)(// TODO: it should be removed from here
        ThemeClassNames/* ThemeClassNames.wrapper.docsPages */.k.wrapper.docsPages, ThemeClassNames/* ThemeClassNames.page.docsDocPage */.k.page.docsDocPage, props.versionMetadata.className)
    }, /*#__PURE__*/ react.createElement(docsVersion/* DocsVersionProvider */.q, {
        version: versionMetadata
    }, /*#__PURE__*/ react.createElement(docsSidebar/* DocsSidebarProvider */.b, {
        name: sidebarName,
        items: sidebarItems
    }, /*#__PURE__*/ react.createElement(DocPageLayout, null, docElement)))));
}


/***/ }),

/***/ 30889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92210);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89712);
/* harmony import */ var _theme_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94672);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function NotFound() {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_3__/* .PageMetadata */ .d, {
        title: (0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)({
            id: 'theme.NotFound.title',
            message: 'Page Not Found'
        })
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
        className: "container margin-vert--xl"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col col--6 col--offset-3"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: "hero__title"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        id: "theme.NotFound.title",
        description: "The title of the 404 page"
    }, "Page Not Found")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        id: "theme.NotFound.p1",
        description: "The first paragraph of the 404 page"
    }, "We could not find what you were looking for.")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        id: "theme.NotFound.p2",
        description: "The 2nd paragraph of the 404 page"
    }, "Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))));
}


/***/ }),

/***/ 27391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useDocsVersion),
/* harmony export */   "q": () => (/* binding */ DocsVersionProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37806);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * Provide the current version's metadata to your children.
 */ function DocsVersionProvider({ children , version  }) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
        value: version
    }, children);
}
/**
 * Gets the version metadata of the current doc page.
 */ function useDocsVersion() {
    const version = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
    if (version === null) {
        throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .i6('DocsVersionProvider');
    }
    return version;
} //# sourceMappingURL=docsVersion.js.map


/***/ })

}]);