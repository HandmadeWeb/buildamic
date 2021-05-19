/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [Fieldtype],
  props: {
    handle: {
      type: String,
      required: true
    },
    // meta: {
    //     type: Object,
    //     required: true
    // },
    value: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      fields: {},
      sets: {},
      values: this.value
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.config.fields.forEach(function (field) {
      _this.fields[field.handle] = field;
    });
    this.config.sets.forEach(function (set) {
      _this.sets[set.handle] = set;
    });
  },
  computed: {},
  methods: {}
});

/***/ }),

/***/ "./src/resources/js/components/fieldtypes/Buildamic.vue":
/*!**************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/Buildamic.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Buildamic_vue_vue_type_template_id_b160c04c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buildamic.vue?vue&type=template&id=b160c04c& */ "./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=b160c04c&");
/* harmony import */ var _Buildamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buildamic.vue?vue&type=script&lang=js& */ "./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Buildamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Buildamic_vue_vue_type_template_id_b160c04c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Buildamic_vue_vue_type_template_id_b160c04c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/resources/js/components/fieldtypes/Buildamic.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Buildamic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=b160c04c&":
/*!*********************************************************************************************!*\
  !*** ./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=b160c04c& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_template_id_b160c04c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_template_id_b160c04c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_template_id_b160c04c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Buildamic.vue?vue&type=template&id=b160c04c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=b160c04c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=b160c04c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=b160c04c& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "buildamic-fieldtype-container" },
    _vm._l(_vm.values, function(section, sectionKey) {
      return _c("div", { key: sectionKey, class: _vm.sortableItemClass }, [
        _c("div", {
          staticClass: "item-move sortable-handle",
          class: _vm.sortableHandleClass
        }),
        _vm._v(" "),
        section.type == "section"
          ? _c(
              "div",
              _vm._l(section.rows, function(row, rowKey) {
                return _c(
                  "div",
                  { key: rowKey },
                  _vm._l(row.columns, function(column, columnKey) {
                    return _c(
                      "div",
                      { key: columnKey },
                      _vm._l(column.fields, function(field, fieldKey) {
                        return _c(
                          "div",
                          { key: fieldKey, attrs: { index: fieldKey } },
                          [
                            field.type == "field"
                              ? _c(
                                  "div",
                                  [
                                    _c(
                                      (field.config.field.component ||
                                        field.config.field.type) + "-fieldtype",
                                      {
                                        tag: "component",
                                        attrs: {
                                          config: field.config.field,
                                          value: field.value,
                                          meta: field.meta,
                                          handle: field.config.handle,
                                          "name-prefix": field.config.prefix,
                                          "error-key-prefix": _vm.errorKey,
                                          "read-only": _vm.isReadOnly
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.$emit("updated", $event)
                                          },
                                          "meta-updated": function($event) {
                                            return _vm.$emit(
                                              "meta-updated",
                                              $event
                                            )
                                          },
                                          focus: function($event) {
                                            return _vm.$emit("focus")
                                          },
                                          blur: function($event) {
                                            return _vm.$emit("blur")
                                          }
                                        }
                                      }
                                    )
                                  ],
                                  1
                                )
                              : field.type == "set"
                              ? _c(
                                  "div",
                                  _vm._l(field, function(
                                    setField,
                                    setFieldKey
                                  ) {
                                    return _c(
                                      (field.config.field.component ||
                                        field.config.field.type) + "-fieldtype",
                                      {
                                        key: setFieldKey,
                                        tag: "component",
                                        attrs: {
                                          index: setFieldKey,
                                          config: field.config.field,
                                          value: field.value,
                                          meta: field.meta,
                                          handle: field.config.handle,
                                          "name-prefix": field.config.prefix,
                                          "error-key-prefix": _vm.errorKey,
                                          "read-only": _vm.isReadOnly
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.$emit("updated", $event)
                                          },
                                          "meta-updated": function($event) {
                                            return _vm.$emit(
                                              "meta-updated",
                                              $event
                                            )
                                          },
                                          focus: function($event) {
                                            return _vm.$emit("focus")
                                          },
                                          blur: function($event) {
                                            return _vm.$emit("blur")
                                          }
                                        }
                                      }
                                    )
                                  }),
                                  1
                                )
                              : _vm._e()
                          ]
                        )
                      }),
                      0
                    )
                  }),
                  0
                )
              }),
              0
            )
          : section.type == "global"
          ? _c("div", [_vm._v("Global Section")])
          : _vm._e()
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/resources/js/buildamic.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fieldtypes_Buildamic_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes/Buildamic.vue */ "./src/resources/js/components/fieldtypes/Buildamic.vue");

Statamic.booting(function () {
  Statamic.$components.register('buildamic-fieldtype', _components_fieldtypes_Buildamic_vue__WEBPACK_IMPORTED_MODULE_0__.default);
});
})();

/******/ })()
;