"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[27918],{

/***/ 55202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 1 modules
var metadataUtils = __webpack_require__(89712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/reactUtils.js
var reactUtils = __webpack_require__(37806);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/doc.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const Context = /*#__PURE__*/ react.createContext(null);
/**
 * Note: we don't use `PropDoc` as context value on purpose. Metadata is
 * currently stored inside the MDX component, but we may want to change that in
 * the future. This layer is a good opportunity to decouple storage from
 * consuming API, potentially allowing us to provide metadata as both props and
 * route context without duplicating the chunks in the future.
 */ function useContextValue(content) {
    return (0,react.useMemo)(()=>({
            metadata: content.metadata,
            frontMatter: content.frontMatter,
            assets: content.assets,
            contentTitle: content.contentTitle,
            toc: content.toc
        }), [
        content
    ]);
}
/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the doc to the children tree.
 */ function DocProvider({ children, content }) {
    const contextValue = useContextValue(content);
    return /*#__PURE__*/ react.createElement(Context.Provider, {
        value: contextValue
    }, children);
}
/**
 * Returns the data of the currently browsed doc. Gives access to the doc's MDX
 * Component, front matter, metadata, TOC, etc. When swizzling a low-level
 * component (e.g. the "Edit this page" link) and you need some extra metadata,
 * you don't have to drill the props all the way through the component tree:
 * simply use this hook instead.
 */ function useDoc() {
    const doc = (0,react.useContext)(Context);
    if (doc === null) {
        throw new reactUtils/* ReactContextError */.i6('DocProvider');
    }
    return doc;
} //# sourceMappingURL=doc.js.map

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Metadata/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function DocItemMetadata() {
    const { metadata, frontMatter, assets } = useDoc();
    var _assets_image;
    return /*#__PURE__*/ react.createElement(metadataUtils/* PageMetadata */.d, {
        title: metadata.title,
        description: metadata.description,
        keywords: frontMatter.keywords,
        image: (_assets_image = assets.image) !== null && _assets_image !== void 0 ? _assets_image : frontMatter.image
    });
}

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(24683);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(92210);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(31984);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/PaginatorNavLink/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ react.createElement(Link/* default */.Z, {
        className: (0,clsx_m/* default */.Z)('pagination-nav__link', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
        to: permalink
    }, subLabel && /*#__PURE__*/ react.createElement("div", {
        className: "pagination-nav__sublabel"
    }, subLabel), /*#__PURE__*/ react.createElement("div", {
        className: "pagination-nav__label"
    }, title));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocPaginator/index.js
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



function DocPaginator(props) {
    const { previous, next } = props;
    return /*#__PURE__*/ react.createElement("nav", {
        className: "pagination-nav docusaurus-mt-lg",
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.paginator.navAriaLabel',
            message: 'Docs pages',
            description: 'The ARIA label for the docs pagination'
        })
    }, previous && /*#__PURE__*/ react.createElement(PaginatorNavLink, _object_spread_props(_object_spread({}, previous), {
        subLabel: /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
            id: "theme.docs.paginator.previous",
            description: "The label used to navigate to the previous doc"
        }, "Previous")
    })), next && /*#__PURE__*/ react.createElement(PaginatorNavLink, _object_spread_props(_object_spread({}, next), {
        subLabel: /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
            id: "theme.docs.paginator.next",
            description: "The label used to navigate to the next doc"
        }, "Next"),
        isNext: true
    })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Paginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/**
 * This extra component is needed, because <DocPaginator> should remain generic.
 * DocPaginator is used in non-docs contexts too: generated-index pages...
 */ function DocItemPaginator() {
    const { metadata } = useDoc();
    return /*#__PURE__*/ react.createElement(DocPaginator, {
        previous: metadata.previous,
        next: metadata.next
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(8241);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js + 1 modules
var client = __webpack_require__(88249);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(65319);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(39085);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(27391);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function UnreleasedVersionLabel({ siteTitle, versionMetadata }) {
    return /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.docs.versions.unreleasedVersionLabel",
        description: "The label used to tell the user that he's browsing an unreleased doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ react.createElement("b", null, versionMetadata.label)
        }
    }, 'This is unreleased documentation for {siteTitle} {versionLabel} version.');
}
function UnmaintainedVersionLabel({ siteTitle, versionMetadata }) {
    return /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.docs.versions.unmaintainedVersionLabel",
        description: "The label used to tell the user that he's browsing an unmaintained doc version",
        values: {
            siteTitle,
            versionLabel: /*#__PURE__*/ react.createElement("b", null, versionMetadata.label)
        }
    }, 'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');
}
const BannerLabelComponents = {
    unreleased: UnreleasedVersionLabel,
    unmaintained: UnmaintainedVersionLabel
};
function BannerLabel(props) {
    const BannerLabelComponent = BannerLabelComponents[props.versionMetadata.banner];
    return /*#__PURE__*/ react.createElement(BannerLabelComponent, props);
}
function LatestVersionSuggestionLabel({ versionLabel, to, onClick }) {
    return /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.docs.versions.latestVersionSuggestionLabel",
        description: "The label used to tell the user to check the latest version",
        values: {
            versionLabel,
            latestVersionLink: /*#__PURE__*/ react.createElement("b", null, /*#__PURE__*/ react.createElement(Link/* default */.Z, {
                to: to,
                onClick: onClick
            }, /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
                id: "theme.docs.versions.latestVersionLinkLabel",
                description: "The label used for the latest version suggestion link label"
            }, "latest version")))
        }
    }, 'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');
}
function DocVersionBannerEnabled({ className, versionMetadata }) {
    const { siteConfig: { title: siteTitle } } = (0,useDocusaurusContext/* default */.Z)();
    const { pluginId } = (0,client/* useActivePlugin */.gA)({
        failfast: true
    });
    const getVersionMainDoc = (version)=>version.docs.find((doc)=>doc.id === version.mainDocId);
    const { savePreferredVersionName } = (0,docsPreferredVersion/* useDocsPreferredVersion */.J)(pluginId);
    const { latestDocSuggestion, latestVersionSuggestion } = (0,client/* useDocVersionSuggestions */.Jo)(pluginId);
    // Try to link to same doc in latest version (not always possible), falling
    // back to main doc of latest version
    const latestVersionSuggestedDoc = latestDocSuggestion !== null && latestDocSuggestion !== void 0 ? latestDocSuggestion : getVersionMainDoc(latestVersionSuggestion);
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(className, ThemeClassNames/* ThemeClassNames */.k.docs.docVersionBanner, 'alert alert--warning margin-bottom--md'),
        role: "alert"
    }, /*#__PURE__*/ react.createElement("div", null, /*#__PURE__*/ react.createElement(BannerLabel, {
        siteTitle: siteTitle,
        versionMetadata: versionMetadata
    })), /*#__PURE__*/ react.createElement("div", {
        className: "margin-top--md"
    }, /*#__PURE__*/ react.createElement(LatestVersionSuggestionLabel, {
        versionLabel: latestVersionSuggestion.label,
        to: latestVersionSuggestedDoc.path,
        onClick: ()=>savePreferredVersionName(latestVersionSuggestion.name)
    })));
}
function DocVersionBanner({ className }) {
    const versionMetadata = (0,docsVersion/* useDocsVersion */.E)();
    if (versionMetadata.banner) {
        return /*#__PURE__*/ react.createElement(DocVersionBannerEnabled, {
            className: className,
            versionMetadata: versionMetadata
        });
    }
    return null;
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocVersionBadge/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocVersionBadge({ className }) {
    const versionMetadata = (0,docsVersion/* useDocsVersion */.E)();
    if (versionMetadata.badge) {
        return /*#__PURE__*/ react.createElement("span", {
            className: (0,clsx_m/* default */.Z)(className, ThemeClassNames/* ThemeClassNames */.k.docs.docVersionBadge, 'badge badge--secondary')
        }, /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
            id: "theme.docs.versionBadge.label",
            values: {
                versionLabel: versionMetadata.label
            }
        }, 'Version: {versionLabel}'));
    }
    return null;
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function LastUpdatedAtDate({ lastUpdatedAt, formattedLastUpdatedAt }) {
    return /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.lastUpdated.atDate",
        description: "The words used to describe on which date a page has been last updated",
        values: {
            date: /*#__PURE__*/ react.createElement("b", null, /*#__PURE__*/ react.createElement("time", {
                dateTime: new Date(lastUpdatedAt * 1000).toISOString()
            }, formattedLastUpdatedAt))
        }
    }, ' on {date}');
}
function LastUpdatedByUser({ lastUpdatedBy }) {
    return /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.lastUpdated.byUser",
        description: "The words used to describe by who the page has been last updated",
        values: {
            user: /*#__PURE__*/ react.createElement("b", null, lastUpdatedBy)
        }
    }, ' by {user}');
}
function LastUpdated({ lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy }) {
    return /*#__PURE__*/ react.createElement("span", {
        className: ThemeClassNames/* ThemeClassNames */.k.common.lastUpdated
    }, /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.lastUpdated.lastUpdatedAtBy",
        description: "The sentence used to display when a page has been last updated, and by who",
        values: {
            atDate: lastUpdatedAt && formattedLastUpdatedAt ? /*#__PURE__*/ react.createElement(LastUpdatedAtDate, {
                lastUpdatedAt: lastUpdatedAt,
                formattedLastUpdatedAt: formattedLastUpdatedAt
            }) : '',
            byUser: lastUpdatedBy ? /*#__PURE__*/ react.createElement(LastUpdatedByUser, {
                lastUpdatedBy: lastUpdatedBy
            }) : ''
        }
    }, 'Last updated{atDate}{byUser}'),  false && /*#__PURE__*/ 0);
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconEdit":"iconEdit_Z9Sw"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Edit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Edit_define_property(obj, key, value) {
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
function Edit_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Edit_define_property(target, key, source[key]);
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



function IconEdit(_param) {
    var { className } = _param, restProps = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ react.createElement("svg", Edit_object_spread({
        fill: "currentColor",
        height: "20",
        width: "20",
        viewBox: "0 0 40 40",
        className: (0,clsx_m/* default */.Z)(styles_module.iconEdit, className),
        "aria-hidden": "true"
    }, restProps), /*#__PURE__*/ react.createElement("g", null, /*#__PURE__*/ react.createElement("path", {
        d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"
    })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function EditThisPage({ editUrl }) {
    return /*#__PURE__*/ react.createElement("a", {
        href: editUrl,
        target: "_blank",
        rel: "noreferrer noopener",
        className: ThemeClassNames/* ThemeClassNames */.k.common.editThisPage
    }, /*#__PURE__*/ react.createElement(IconEdit, null), /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.common.editThisPage",
        description: "The link label to edit the current page"
    }, "Edit this page"));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Tag_styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function Tag({ permalink, label, count }) {
    return /*#__PURE__*/ react.createElement(Link/* default */.Z, {
        href: permalink,
        className: (0,clsx_m/* default */.Z)(Tag_styles_module.tag, count ? Tag_styles_module.tagWithCount : Tag_styles_module.tagRegular)
    }, label, count && /*#__PURE__*/ react.createElement("span", null, count));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TagsListInline_styles_module = ({"tags":"tags_jXut","tag":"tag_QGVx"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TagsListInline({ tags }) {
    return /*#__PURE__*/ react.createElement(react.Fragment, null, /*#__PURE__*/ react.createElement("b", null, /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.tags.tagsListLabel",
        description: "The label alongside a tag list"
    }, "Tags:")), /*#__PURE__*/ react.createElement("ul", {
        className: (0,clsx_m/* default */.Z)(TagsListInline_styles_module.tags, 'padding--none', 'margin-left--sm')
    }, tags.map(({ label, permalink: tagPermalink })=>/*#__PURE__*/ react.createElement("li", {
            key: tagPermalink,
            className: TagsListInline_styles_module.tag
        }, /*#__PURE__*/ react.createElement(Tag, {
            label: label,
            permalink: tagPermalink
        })))));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Footer_styles_module = ({"lastUpdated":"lastUpdated_vwxv"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Footer/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 







function TagsRow(props) {
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docFooterTagsRow, 'row margin-bottom--sm')
    }, /*#__PURE__*/ react.createElement("div", {
        className: "col"
    }, /*#__PURE__*/ react.createElement(TagsListInline, props)));
}
function EditMetaRow({ editUrl, lastUpdatedAt, lastUpdatedBy, formattedLastUpdatedAt }) {
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docFooterEditMetaRow, 'row')
    }, /*#__PURE__*/ react.createElement("div", {
        className: "col"
    }, editUrl && /*#__PURE__*/ react.createElement(EditThisPage, {
        editUrl: editUrl
    })), /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)('col', Footer_styles_module.lastUpdated)
    }, (lastUpdatedAt || lastUpdatedBy) && /*#__PURE__*/ react.createElement(LastUpdated, {
        lastUpdatedAt: lastUpdatedAt,
        formattedLastUpdatedAt: formattedLastUpdatedAt,
        lastUpdatedBy: lastUpdatedBy
    })));
}
function DocItemFooter() {
    const { metadata } = useDoc();
    const { editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags } = metadata;
    const canDisplayTagsRow = tags.length > 0;
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
    const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
    if (!canDisplayFooter) {
        return null;
    }
    return /*#__PURE__*/ react.createElement("footer", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docFooter, 'docusaurus-mt-lg')
    }, canDisplayTagsRow && /*#__PURE__*/ react.createElement(TagsRow, {
        tags: tags
    }), canDisplayEditMetaRow && /*#__PURE__*/ react.createElement(EditMetaRow, {
        editUrl: editUrl,
        lastUpdatedAt: lastUpdatedAt,
        lastUpdatedBy: lastUpdatedBy,
        formattedLastUpdatedAt: formattedLastUpdatedAt
    }));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(52647);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(15574);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CollapseButton_styles_module = ({"tocCollapsibleButton":"tocCollapsibleButton_TO0P","tocCollapsibleButtonExpanded":"tocCollapsibleButtonExpanded_MG3E"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/CollapseButton/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function CollapseButton_define_property(obj, key, value) {
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
function CollapseButton_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            CollapseButton_define_property(target, key, source[key]);
        });
    }
    return target;
}
function CollapseButton_ownKeys(object, enumerableOnly) {
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
function CollapseButton_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        CollapseButton_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function CollapseButton_object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = CollapseButton_object_without_properties_loose(source, excluded);
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
function CollapseButton_object_without_properties_loose(source, excluded) {
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




function TOCCollapsibleCollapseButton(_param) {
    var { collapsed } = _param, props = CollapseButton_object_without_properties(_param, [
        "collapsed"
    ]);
    return /*#__PURE__*/ react.createElement("button", CollapseButton_object_spread_props(CollapseButton_object_spread({
        type: "button"
    }, props), {
        className: (0,clsx_m/* default */.Z)('clean-btn', CollapseButton_styles_module.tocCollapsibleButton, !collapsed && CollapseButton_styles_module.tocCollapsibleButtonExpanded, props.className)
    }), /*#__PURE__*/ react.createElement(Translate/* default */.Z, {
        id: "theme.TOCCollapsible.toggleButtonLabel",
        description: "The label used by the button on the collapsible TOC component"
    }, "On this page"));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const TOCCollapsible_styles_module = ({"tocCollapsible":"tocCollapsible_ETCw","tocCollapsibleContent":"tocCollapsibleContent_vkbj","tocCollapsibleExpanded":"tocCollapsibleExpanded_sAul"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TOCCollapsible({ toc, className, minHeadingLevel, maxHeadingLevel }) {
    const { collapsed, toggleCollapsed } = (0,Collapsible/* useCollapsible */.u)({
        initialState: true
    });
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(TOCCollapsible_styles_module.tocCollapsible, !collapsed && TOCCollapsible_styles_module.tocCollapsibleExpanded, className)
    }, /*#__PURE__*/ react.createElement(TOCCollapsibleCollapseButton, {
        collapsed: collapsed,
        onClick: toggleCollapsed
    }), /*#__PURE__*/ react.createElement(Collapsible/* Collapsible */.z, {
        lazy: true,
        className: TOCCollapsible_styles_module.tocCollapsibleContent,
        collapsed: collapsed
    }, /*#__PURE__*/ react.createElement(TOCItems/* default */.Z, {
        toc: toc,
        minHeadingLevel: minHeadingLevel,
        maxHeadingLevel: maxHeadingLevel
    })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Mobile_styles_module = ({"tocMobile":"tocMobile_ITEo"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function DocItemTOCMobile() {
    const { toc, frontMatter } = useDoc();
    return /*#__PURE__*/ react.createElement(TOCCollapsible, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docTocMobile, Mobile_styles_module.tocMobile)
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(48704);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/TOC/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function DocItemTOCDesktop() {
    const { toc, frontMatter } = useDoc();
    return /*#__PURE__*/ react.createElement(TOC/* default */.Z, {
        toc: toc,
        minHeadingLevel: frontMatter.toc_min_heading_level,
        maxHeadingLevel: frontMatter.toc_max_heading_level,
        className: ThemeClassNames/* ThemeClassNames */.k.docs.docTocDesktop
    });
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(24999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js
var MDXContent = __webpack_require__(99387);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Content/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/ function useSyntheticTitle() {
    const { metadata, frontMatter, contentTitle } = useDoc();
    const shouldRender = !frontMatter.hide_title && typeof contentTitle === 'undefined';
    if (!shouldRender) {
        return null;
    }
    return metadata.title;
}
function DocItemContent({ children }) {
    const syntheticTitle = useSyntheticTitle();
    return /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docMarkdown, 'markdown')
    }, syntheticTitle && /*#__PURE__*/ react.createElement("header", null, /*#__PURE__*/ react.createElement(Heading/* default */.Z, {
        as: "h1"
    }, syntheticTitle)), /*#__PURE__*/ react.createElement(MDXContent/* default */.Z, null, children));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js
var docsUtils = __webpack_require__(53964);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(87275);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(70676);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Icon/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Home_define_property(obj, key, value) {
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
function Home_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            Home_define_property(target, key, source[key]);
        });
    }
    return target;
}

function IconHome(props) {
    return /*#__PURE__*/ react.createElement("svg", Home_object_spread({
        viewBox: "0 0 24 24"
    }, props), /*#__PURE__*/ react.createElement("path", {
        d: "M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",
        fill: "currentColor"
    }));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Home_styles_module = ({"breadcrumbHomeIcon":"breadcrumbHomeIcon_YNFT"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/Items/Home/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function HomeBreadcrumbItem() {
    const homeHref = (0,useBaseUrl/* default */.Z)('/');
    return /*#__PURE__*/ react.createElement("li", {
        className: "breadcrumbs__item"
    }, /*#__PURE__*/ react.createElement(Link/* default */.Z, {
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.breadcrumbs.home',
            message: 'Home page',
            description: 'The ARIA label for the home page in the breadcrumbs'
        }),
        className: "breadcrumbs__link",
        href: homeHref
    }, /*#__PURE__*/ react.createElement(IconHome, {
        className: Home_styles_module.breadcrumbHomeIcon
    })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Z_bl"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function DocBreadcrumbs_define_property(obj, key, value) {
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
function DocBreadcrumbs_object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            DocBreadcrumbs_define_property(target, key, source[key]);
        });
    }
    return target;
}
function DocBreadcrumbs_ownKeys(object, enumerableOnly) {
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
function DocBreadcrumbs_object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        DocBreadcrumbs_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}








// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }) {
    const className = 'breadcrumbs__link';
    if (isLast) {
        return /*#__PURE__*/ react.createElement("span", {
            className: className,
            itemProp: "name"
        }, children);
    }
    return href ? /*#__PURE__*/ react.createElement(Link/* default */.Z, {
        className: className,
        href: href,
        itemProp: "item"
    }, /*#__PURE__*/ react.createElement("span", {
        itemProp: "name"
    }, children)) : // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    /*#__PURE__*/ react.createElement("span", {
        className: className
    }, children);
}
// TODO move to design system folder
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
    return /*#__PURE__*/ react.createElement("li", DocBreadcrumbs_object_spread_props(DocBreadcrumbs_object_spread({}, addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem'
    }), {
        className: (0,clsx_m/* default */.Z)('breadcrumbs__item', {
            'breadcrumbs__item--active': active
        })
    }), children, /*#__PURE__*/ react.createElement("meta", {
        itemProp: "position",
        content: String(index + 1)
    }));
}
function DocBreadcrumbs() {
    const breadcrumbs = (0,docsUtils/* useSidebarBreadcrumbs */.s1)();
    const homePageRoute = (0,routesUtils/* useHomePageRoute */.Ns)();
    if (!breadcrumbs) {
        return null;
    }
    return /*#__PURE__*/ react.createElement("nav", {
        className: (0,clsx_m/* default */.Z)(ThemeClassNames/* ThemeClassNames */.k.docs.docBreadcrumbs, DocBreadcrumbs_styles_module.breadcrumbsContainer),
        "aria-label": (0,Translate/* translate */.I)({
            id: 'theme.docs.breadcrumbs.navAriaLabel',
            message: 'Breadcrumbs',
            description: 'The ARIA label for the breadcrumbs'
        })
    }, /*#__PURE__*/ react.createElement("ul", {
        className: "breadcrumbs",
        itemScope: true,
        itemType: "https://schema.org/BreadcrumbList"
    }, homePageRoute && /*#__PURE__*/ react.createElement(HomeBreadcrumbItem, null), breadcrumbs.map((item, idx)=>{
        const isLast = idx === breadcrumbs.length - 1;
        return /*#__PURE__*/ react.createElement(BreadcrumbsItem, {
            key: idx,
            active: isLast,
            index: idx,
            addMicrodata: !!item.href
        }, /*#__PURE__*/ react.createElement(BreadcrumbsItemLink, {
            href: item.href,
            isLast: isLast
        }, item.label));
    })));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Layout_styles_module = ({"docItemContainer":"docItemContainer_Djhp","docItemCol":"docItemCol_VOVn"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/Layout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 












/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */ function useDocTOC() {
    const { frontMatter, toc } = useDoc();
    const windowSize = (0,useWindowSize/* useWindowSize */.i)();
    const hidden = frontMatter.hide_table_of_contents;
    const canRender = !hidden && toc.length > 0;
    const mobile = canRender ? /*#__PURE__*/ react.createElement(DocItemTOCMobile, null) : undefined;
    const desktop = canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? /*#__PURE__*/ react.createElement(DocItemTOCDesktop, null) : undefined;
    return {
        hidden,
        mobile,
        desktop
    };
}
function DocItemLayout({ children }) {
    const docTOC = useDocTOC();
    return /*#__PURE__*/ react.createElement("div", {
        className: "row"
    }, /*#__PURE__*/ react.createElement("div", {
        className: (0,clsx_m/* default */.Z)('col', !docTOC.hidden && Layout_styles_module.docItemCol)
    }, /*#__PURE__*/ react.createElement(DocVersionBanner, null), /*#__PURE__*/ react.createElement("div", {
        className: Layout_styles_module.docItemContainer
    }, /*#__PURE__*/ react.createElement("article", null, /*#__PURE__*/ react.createElement(DocBreadcrumbs, null), /*#__PURE__*/ react.createElement(DocVersionBadge, null), docTOC.mobile, /*#__PURE__*/ react.createElement(DocItemContent, null, children), /*#__PURE__*/ react.createElement(DocItemFooter, null)), /*#__PURE__*/ react.createElement(DocItemPaginator, null))), docTOC.desktop && /*#__PURE__*/ react.createElement("div", {
        className: "col col--3"
    }, docTOC.desktop));
}

;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function DocItem(props) {
    const docHtmlClassName = `docs-doc-id-${props.content.metadata.unversionedId}`;
    const MDXComponent = props.content;
    return /*#__PURE__*/ react.createElement(DocProvider, {
        content: props.content
    }, /*#__PURE__*/ react.createElement(metadataUtils/* HtmlClassNameProvider */.FG, {
        className: docHtmlClassName
    }, /*#__PURE__*/ react.createElement(DocItemMetadata, null), /*#__PURE__*/ react.createElement(DocItemLayout, null, /*#__PURE__*/ react.createElement(MDXComponent, null))));
}


/***/ }),

/***/ 27391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useDocsVersion),
/* harmony export */   q: () => (/* binding */ DocsVersionProvider)
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
 */ function DocsVersionProvider({ children, version }) {
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


/***/ }),

/***/ 29768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ theme_MDXComponents)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js
var Head = __webpack_require__(71098);
;// CONCATENATED MODULE: ./src/theme/MDXComponents/Head.js
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


// MDX elements are wrapped through the MDX pragma. In some cases (notably usage
// with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element) {
    var _element_props;
    if (((_element_props = element.props) === null || _element_props === void 0 ? void 0 : _element_props.mdxType) && element.props.originalType) {
        const _element_props = element.props, { mdxType, originalType } = _element_props, newProps = _object_without_properties(_element_props, [
            "mdxType",
            "originalType"
        ]);
        return /*#__PURE__*/ react.createElement(element.props.originalType, newProps);
    }
    return element;
}
function MDXHead(props) {
    const unwrappedChildren = react.Children.map(props.children, (child)=>/*#__PURE__*/ react.isValidElement(child) ? unwrapMDXElement(child) : child);
    return /*#__PURE__*/ react.createElement(Head/* default */.Z, props, unwrappedChildren);
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js + 21 modules
var CodeBlock = __webpack_require__(957);
;// CONCATENATED MODULE: ./src/theme/MDXComponents/Code.js


function MDXCode(props) {
    const inlineElements = [
        'a',
        'abbr',
        'b',
        'br',
        'button',
        'cite',
        'code',
        'del',
        'dfn',
        'em',
        'i',
        'img',
        'input',
        'ins',
        'kbd',
        'label',
        'object',
        'output',
        'q',
        'ruby',
        's',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'time',
        'u',
        'var',
        'wbr'
    ];
    const shouldBeInline = react.Children.toArray(props.children).every((el)=>{
        var _el_props;
        return typeof el === 'string' && !el.includes('\n') || /*#__PURE__*/ (0,react.isValidElement)(el) && inlineElements.includes((_el_props = el.props) === null || _el_props === void 0 ? void 0 : _el_props.mdxType);
    });
    return shouldBeInline ? /*#__PURE__*/ react.createElement("code", props) : /*#__PURE__*/ react.createElement(CodeBlock/* default */.Z, props);
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(31984);
;// CONCATENATED MODULE: ./src/theme/MDXComponents/A.js


function MDXA(props) {
    return /*#__PURE__*/ react.createElement(Link/* default */.Z, props);
}

;// CONCATENATED MODULE: ./src/theme/MDXComponents/Pre.js
function _define_property(obj, key, value) {
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


function MDXPre(props) {
    var _props_children_props;
    return /*#__PURE__*/ react.createElement(CodeBlock/* default */.Z, /*#__PURE__*/ (0,react.isValidElement)(props.children) && ((_props_children_props = props.children.props) === null || _props_children_props === void 0 ? void 0 : _props_children_props.originalType) === 'code' ? props.children.props : _object_spread({}, props));
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Details/index.js + 3 modules
var Details = __webpack_require__(1755);
;// CONCATENATED MODULE: ./src/theme/MDXComponents/Details.js
function Details_define_property(obj, key, value) {
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


function MDXDetails(props) {
    const items = react.Children.toArray(props.children);
    // Split summary item from the rest to pass it as a separate prop to the
    // Details theme component
    const summary = items.find((item)=>{
        var _item_props;
        return /*#__PURE__*/ react.isValidElement(item) && ((_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.mdxType) === 'summary';
    });
    const children = /*#__PURE__*/ react.createElement(react.Fragment, null, items.filter((item)=>item !== summary));
    return /*#__PURE__*/ react.createElement(Details/* default */.Z, _object_spread_props(Details_object_spread({}, props), {
        summary: summary
    }), children);
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(24999);
;// CONCATENATED MODULE: ./src/theme/MDXComponents/Heading.js


function MDXHeading(props) {
    return /*#__PURE__*/ react.createElement(Heading/* default */.Z, props);
}

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Ul/index.js + 1 modules
var Ul = __webpack_require__(89216);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXComponents/Img/index.js + 1 modules
var Img = __webpack_require__(74414);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Admonition/index.js + 1 modules
var Admonition = __webpack_require__(27339);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Noop.js
var Noop = __webpack_require__(70369);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(93070);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(50551);
;// CONCATENATED MODULE: ./src/theme/MDXComponents/index.js
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













const MDXComponents = {
    head: MDXHead,
    code: MDXCode,
    a: MDXA,
    pre: MDXPre,
    details: MDXDetails,
    ul: Ul/* default */.Z,
    img: Img/* default */.Z,
    h1: (props)=>/*#__PURE__*/ react.createElement(MDXHeading, MDXComponents_object_spread({
            as: "h1"
        }, props)),
    h2: (props)=>/*#__PURE__*/ react.createElement(MDXHeading, MDXComponents_object_spread({
            as: "h2"
        }, props)),
    h3: (props)=>/*#__PURE__*/ react.createElement(MDXHeading, MDXComponents_object_spread({
            as: "h3"
        }, props)),
    h4: (props)=>/*#__PURE__*/ react.createElement(MDXHeading, MDXComponents_object_spread({
            as: "h4"
        }, props)),
    h5: (props)=>/*#__PURE__*/ react.createElement(MDXHeading, MDXComponents_object_spread({
            as: "h5"
        }, props)),
    h6: (props)=>/*#__PURE__*/ react.createElement(MDXHeading, MDXComponents_object_spread({
            as: "h6"
        }, props)),
    admonition: Admonition/* default */.Z,
    mermaid: Noop/* default */.Z,
    Tabs: Tabs/* default */.Z,
    TabItem: TabItem/* default */.Z
};
/* harmony default export */ const theme_MDXComponents = (MDXComponents);


/***/ })

}]);