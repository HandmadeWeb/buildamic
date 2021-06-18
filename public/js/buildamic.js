/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-helper-vue-jsx-merge-props/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/babel-helper-vue-jsx-merge-props/index.js ***!
  \****************************************************************/
/***/ ((module) => {

var nestRE = /^(attrs|props|on|nativeOn|class|style|hook)$/

module.exports = function mergeJSXProps (objs) {
  return objs.reduce(function (a, b) {
    var aa, bb, key, nestedKey, temp
    for (key in b) {
      aa = a[key]
      bb = b[key]
      if (aa && nestRE.test(key)) {
        // normalize class
        if (key === 'class') {
          if (typeof aa === 'string') {
            temp = aa
            a[key] = aa = {}
            aa[temp] = true
          }
          if (typeof bb === 'string') {
            temp = bb
            b[key] = bb = {}
            bb[temp] = true
          }
        }
        if (key === 'on' || key === 'nativeOn' || key === 'hook') {
          // merge functions
          for (nestedKey in bb) {
            aa[nestedKey] = mergeFn(aa[nestedKey], bb[nestedKey])
          }
        } else if (Array.isArray(aa)) {
          a[key] = aa.concat(bb)
        } else if (Array.isArray(bb)) {
          a[key] = [aa].concat(bb)
        } else {
          for (nestedKey in bb) {
            aa[nestedKey] = bb[nestedKey]
          }
        }
      } else {
        a[key] = b[key]
      }
    }
    return a
  }, {})
}

function mergeFn (a, b) {
  return function () {
    a && a.apply(this, arguments)
    b && b.apply(this, arguments)
  }
}


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/columns/BColumn.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/columns/BColumn.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
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
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      isSelectingNewField: false
    };
  },
  computed: {
    columnClass: function columnClass() {
      var _this$column, _this$column$config, _this$column$config$c;

      return "col col-".concat((_this$column = this.column) === null || _this$column === void 0 ? void 0 : (_this$column$config = _this$column.config) === null || _this$column$config === void 0 ? void 0 : (_this$column$config$c = _this$column$config.columnSizes) === null || _this$column$config$c === void 0 ? void 0 : _this$column$config$c.lg);
    }
  },
  components: {
    VueDraggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())
  },
  inject: ["fieldDefaults"],
  methods: {
    updateField: function updateField(index, newValue) {
      this.column.value[index].value = newValue;
    },
    updateFieldSet: function updateFieldSet(index, subFieldHandle, newValue) {
      this.column.value[index].value[subFieldHandle] = newValue;
    },
    addField: function addField(field) {
      this.column.value.push({
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)(),
        type: "field",
        config: {
          handle: field.config.handle,
          type: field.config.type
        },
        // meta: field.get("meta"),
        value: field.value
      });
      this.isSelectingNewField = false;
    },
    addFieldSet: function addFieldSet(handle) {
      var fieldSet = this.fieldDefaults.fieldsets[handle];
      this.column.value.push({
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)(),
        type: "fieldset",
        config: {
          handle: handle
        },
        //meta: defaultmeta,
        value: fieldSet["value"]
      });
      this.isSelectingNewField = false;
    },
    removeField: function removeField(fieldKey) {
      this.column.value.splice(fieldKey, 1);
    }
  },
  mounted: function mounted() {
    console.log(this.fieldDefaults); // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log('value:', this.column);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fieldtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fieldtype */ "./resources/js/components/fieldtypes/fieldtype.js");
/* harmony import */ var collect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! collect.js */ "./node_modules/collect.js/dist/index.js");
/* harmony import */ var collect_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(collect_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_BSection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/BSection.vue */ "./resources/js/components/sections/BSection.vue");
/* harmony import */ var _sections_SectionControls_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/SectionControls.vue */ "./resources/js/components/sections/SectionControls.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_4__);
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
  mixins: [_fieldtype__WEBPACK_IMPORTED_MODULE_0__.default],
  components: {
    BSection: _sections_BSection_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    SectionControls: _sections_SectionControls_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    VueDraggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_4___default())
  },
  data: function data() {
    var _this$value$value;

    return {
      sections: (_this$value$value = this.value.value) !== null && _this$value$value !== void 0 ? _this$value$value : []
    };
  },
  provide: function provide() {
    return {
      fieldDefaults: this.meta
    };
  },
  methods: {
    addSection: function addSection() {
      this.value.push({
        uuid: uuidv4(),
        type: "section",
        rows: []
      });
    },
    removeSection: function removeSection(sectionKey) {
      this.value.splice(sectionKey, 1);
    }
  },
  mounted: function mounted() {//console.log(uuidv4());
    // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log('value:', this.value);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/BRow.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/BRow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _columns_BColumn_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../columns/BColumn.vue */ "./resources/js/components/columns/BColumn.vue");
/* harmony import */ var _RowControls_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowControls.vue */ "./resources/js/components/rows/RowControls.vue");
/* harmony import */ var _ColumnSelector_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColumnSelector.vue */ "./resources/js/components/rows/ColumnSelector.vue");
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
  components: {
    BColumn: _columns_BColumn_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    RowControls: _RowControls_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    ColumnSelector: _ColumnSelector_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    var _this$row$value;

    return {
      columns: (_this$row$value = this.row.value) !== null && _this$row$value !== void 0 ? _this$row$value : [],
      rowID: this.row.uuid
    };
  } //   mounted() {
  //     //console.log(uuidv4());
  //     // console.log('config:', this.config);
  //     // console.log('meta:', this.meta);
  //     // console.log('value:', this.value);
  //   }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_modules_moduleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/modules/moduleFactory */ "./resources/js/factories/modules/moduleFactory.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
  name: "column-selector",
  components: {
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.XIcon
  },
  data: function data() {
    return {
      // A simple array that turns whatever numbers are here into bootstrap columns that match
      // Note the array is formatted to be 2 by 2 so you can easily create symmetry thumbnails
      layouts: ["12", "6 6", "4 4 4", "3 3 3 3", "2 2 2 2 2 2", "3 6 3", "10 2", "2 10", "9 3", "3 9", "8 4", "4 8", "7 5", "5 7", "1 1 1 1 1"]
    };
  },
  methods: {
    changeLayout: function changeLayout(layout) {
      var _this$columns;

      var newLayout = []; // Turn the clicked string into an array at each space e,g ["6", "6"]

      var layoutArr = layout.split(" "); // Loop the new array and create a column for each item

      layoutArr.forEach(function (col) {
        var newCol = (0,_factories_modules_moduleFactory__WEBPACK_IMPORTED_MODULE_0__.createModule)("Column"); // If we are divisible by 2, set the md breakpoint to 6 (translates to col-md-6)

        if (layoutArr.length % 2 === 0) {
          newCol.config.columnSizes.md = 6;
        } // Set the lg size to seleted value


        newCol.config.columnSizes.lg = col; // Not the smallest "xs" (mobile) size will remain unchanged from the newColumnStructure object which is 12

        newLayout.push(newCol);
      });
      var oldModules = [];
      var colCount = this.columns.length;

      if (colCount) {
        this.columns.forEach(function (component) {
          if (component.content.length) {
            component.content.forEach(function (module) {
              oldModules.push(module);
            });
            component.content = [];
          }
        });
      } // Change column layout


      (_this$columns = this.columns).splice.apply(_this$columns, [0, colCount].concat(newLayout)); // Add old modules to new layout


      this.columns[0].content = oldModules; // Send this off to vuex for mutatin'
      // this.changeColumnLayout({
      //     id: this.component.id,
      //     newLayout: newLayout
      // })
    },
    gridConversion: function gridConversion(string) {
      // Turn the clicked string into an array at each space e,g ["6", "6"]
      var array = string.split(" "); // Loop through and create the (currently single-sized) preview thumbnail classes
      // So the same grid you click is what the builder uses

      array.forEach(function (column, index) {
        array[index] = "col-" + column;
      }); // Return the array e.g ["col-md-6", "col-md-6"]

      return array;
    }
  },
  props: {
    name: String,
    columns: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/RowControls.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/RowControls.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _mixins_ModuleControls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/ModuleControls.js */ "./resources/js/components/mixins/ModuleControls.js");
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
  name: "row-controls",
  data: function data() {
    return {
      type: "Row"
    };
  },
  mixins: [_mixins_ModuleControls_js__WEBPACK_IMPORTED_MODULE_0__.default],
  components: {
    PlusCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.PlusCircleIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.XIcon,
    ClipboardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ClipboardIcon
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/BSection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/BSection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rows_BRow_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rows/BRow.vue */ "./resources/js/components/rows/BRow.vue");
/* harmony import */ var _rows_RowControls_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rows/RowControls.vue */ "./resources/js/components/rows/RowControls.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
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
  components: {
    BRow: _rows_BRow_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    VueDraggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_2___default()),
    RowControls: _rows_RowControls_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      rows: []
    };
  },
  methods: {},
  mounted: function mounted() {
    var _this$section$value;

    this.rows = (_this$section$value = this.section.value) !== null && _this$section$value !== void 0 ? _this$section$value : [];
    console.log(this.rows);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/SectionControls.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/SectionControls.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _mixins_ModuleControls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/ModuleControls.js */ "./resources/js/components/mixins/ModuleControls.js");
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
  name: "section-controls",
  data: function data() {
    return {
      type: "Section"
    };
  },
  components: {
    PlusCircleIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.PlusCircleIcon,
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.XIcon,
    ClipboardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__.ClipboardIcon
  },
  mixins: [_mixins_ModuleControls_js__WEBPACK_IMPORTED_MODULE_0__.default]
});

/***/ }),

/***/ "./resources/js/buildamic.js":
/*!***********************************!*\
  !*** ./resources/js/buildamic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fieldtypes_Buildamic_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes/Buildamic.vue */ "./resources/js/components/fieldtypes/Buildamic.vue");
/* harmony import */ var collect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! collect.js */ "./node_modules/collect.js/dist/index.js");
/* harmony import */ var collect_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(collect_js__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



collect_js__WEBPACK_IMPORTED_MODULE_1___default()().macro('recursiveCollect', function () {
  return this.map(function (item) {
    if (typeof item === 'array' || _typeof(item) === 'object' && !item.recursiveCollect) {
      return collect_js__WEBPACK_IMPORTED_MODULE_1___default()(item).recursiveCollect();
    }

    return item;
  });
});
Statamic.booting(function () {
  Statamic.$components.register('buildamic-fieldtype', _components_fieldtypes_Buildamic_vue__WEBPACK_IMPORTED_MODULE_0__.default);
});

/***/ }),

/***/ "./resources/js/components/fieldtypes/fieldtype.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/fieldtypes/fieldtype.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      required: true
    },
    config: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    handle: {
      type: String,
      required: true
    },
    meta: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    readOnly: {
      type: Boolean,
      "default": false
    },
    namePrefix: String,
    errorKeyPrefix: String
  },
  methods: {
    update: function update(value) {
      this.$emit('input', value);
    },
    updateMeta: function updateMeta(value) {
      this.$emit('meta-updated', value);
    }
  },
  computed: {
    name: function name() {
      if (this.namePrefix) {
        return "".concat(this.namePrefix, "[").concat(this.handle, "]");
      }

      return this.handle;
    },
    isReadOnly: function isReadOnly() {
      return this.readOnly || this.config.read_only || false;
    },
    replicatorPreview: function replicatorPreview() {
      return this.value;
    },
    fieldId: function fieldId() {
      return 'field_' + this.config.handle;
    }
  },
  watch: {
    replicatorPreview: {
      immediate: true,
      handler: function handler(text) {
        this.$emit('replicator-preview-updated', text);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/mixins/ModuleControls.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/mixins/ModuleControls.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_modules_moduleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../factories/modules/moduleFactory */ "./resources/js/factories/modules/moduleFactory.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: Array,
    index: {
      type: Number,
      "default": 0
    }
  },
  methods: {
    addModule: function addModule() {
      var newModule = (0,_factories_modules_moduleFactory__WEBPACK_IMPORTED_MODULE_0__.createModule)(this.type);
      this.value.splice(this.index + 1, 0, newModule);
    },
    // cloneModule() {
    //     const clone = JSON.parse(JSON.stringify(this.el))
    //     this.value.splice(this.index + 1, 0, clone);
    // },
    removeModule: function removeModule() {
      this.value.splice(this.index, 1);
    }
  }
});

/***/ }),

/***/ "./resources/js/factories/modules/column.js":
/*!**************************************************!*\
  !*** ./resources/js/factories/modules/column.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Column": () => (/* binding */ Column)
/* harmony export */ });
var Column = function Column(_ref) {
  var UUID = _ref.UUID,
      ADMIN_LABEL = _ref.ADMIN_LABEL;
  this.type = 'column';
  this.uuid = "".concat(UUID);
  this.value = [];
  this.config = {
    columnSizes: {
      "xs": 12,
      "sm": '',
      "md": '',
      "lg": '',
      "xl": ''
    },
    admin_label: ADMIN_LABEL || this.type
  };
};



/***/ }),

/***/ "./resources/js/factories/modules/moduleFactory.js":
/*!*********************************************************!*\
  !*** ./resources/js/factories/modules/moduleFactory.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createModule": () => (/* binding */ createModule)
/* harmony export */ });
/* harmony import */ var _functions_idHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/idHelpers */ "./resources/js/functions/idHelpers.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section */ "./resources/js/factories/modules/section.js");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row */ "./resources/js/factories/modules/row.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./column */ "./resources/js/factories/modules/column.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var module = {
  Section: _section__WEBPACK_IMPORTED_MODULE_1__.Section,
  Row: _row__WEBPACK_IMPORTED_MODULE_2__.Row,
  Column: _column__WEBPACK_IMPORTED_MODULE_3__.Column
};

var createModule = function createModule(type, attributes) {
  var ModuleType = module[type];
  return new ModuleType(_objectSpread({
    UUID: (0,_functions_idHelpers__WEBPACK_IMPORTED_MODULE_0__.generateID)()
  }, attributes));
};



/***/ }),

/***/ "./resources/js/factories/modules/row.js":
/*!***********************************************!*\
  !*** ./resources/js/factories/modules/row.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": () => (/* binding */ Row)
/* harmony export */ });
var Row = function Row(_ref) {
  var UUID = _ref.UUID,
      ADMIN_LABEL = _ref.ADMIN_LABEL;
  this.type = 'row';
  this.uuid = "".concat(UUID);
  this.value = [];
  this.config = {
    admin_label: ADMIN_LABEL || this.type
  };
};



/***/ }),

/***/ "./resources/js/factories/modules/section.js":
/*!***************************************************!*\
  !*** ./resources/js/factories/modules/section.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
var Section = function Section(_ref) {
  var UUID = _ref.UUID,
      ADMIN_LABEL = _ref.ADMIN_LABEL;
  this.type = 'section';
  this.uuid = "".concat(UUID);
  this.value = [];
  this.config = {
    admin_label: ADMIN_LABEL || this.type
  };
};



/***/ }),

/***/ "./resources/js/functions/idHelpers.js":
/*!*********************************************!*\
  !*** ./resources/js/functions/idHelpers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateID": () => (/* binding */ generateID),
/* harmony export */   "recursifyID": () => (/* binding */ recursifyID)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

function generateID() {
  return (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();
}
var recursifyID = function recursifyID(array) {
  array.uuid = generateID();

  if (!Array.isArray(array.value)) {
    return false;
  }

  array.value.forEach(function (el) {
    if (el.id || el.id === '') {
      el.id = generateModuleID(el.type);
    }

    if (!Array.isArray(el.value)) {
      return false;
    } else {
      recursifyID(el);
    }
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/helpers/clone.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/helpers/clone.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Clone helper
 *
 * Clone an array or object
 *
 * @param items
 * @returns {*}
 */

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function clone(items) {
  var cloned = void 0;

  if (Array.isArray(items)) {
    var _cloned;

    cloned = [];

    (_cloned = cloned).push.apply(_cloned, _toConsumableArray(items));
  } else {
    cloned = {};

    Object.keys(items).forEach(function (prop) {
      cloned[prop] = items[prop];
    });
  }

  return cloned;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/helpers/is.js":
/*!****************************************************!*\
  !*** ./node_modules/collect.js/dist/helpers/is.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  /**
   * @returns {boolean}
   */
  isArray: function isArray(item) {
    return Array.isArray(item);
  },

  /**
   * @returns {boolean}
   */
  isObject: function isObject(item) {
    return (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && Array.isArray(item) === false && item !== null;
  },

  /**
   * @returns {boolean}
   */
  isFunction: function isFunction(item) {
    return typeof item === 'function';
  }
};

/***/ }),

/***/ "./node_modules/collect.js/dist/helpers/nestedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/collect.js/dist/helpers/nestedValue.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Get value of a nested property
 *
 * @param mainObject
 * @param key
 * @returns {*}
 */

module.exports = function nestedValue(mainObject, key) {
  try {
    return key.split('.').reduce(function (obj, property) {
      return obj[property];
    }, mainObject);
  } catch (err) {
    // If we end up here, we're not working with an object, and @var mainObject is the value itself
    return mainObject;
  }
};

/***/ }),

/***/ "./node_modules/collect.js/dist/helpers/values.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/helpers/values.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";



/**
 * Values helper
 *
 * Retrieve values from [this.items] when it is an array, object or Collection
 *
 * @returns {*}
 * @param items
 */

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function values(items) {
  var valuesArray = [];

  if (Array.isArray(items)) {
    valuesArray.push.apply(valuesArray, _toConsumableArray(items));
  } else if (items.constructor.name === 'Collection') {
    valuesArray.push.apply(valuesArray, _toConsumableArray(items.all()));
  } else {
    Object.keys(items).forEach(function (prop) {
      return valuesArray.push(items[prop]);
    });
  }

  return valuesArray;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/helpers/variadic.js":
/*!**********************************************************!*\
  !*** ./node_modules/collect.js/dist/helpers/variadic.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Variadic helper function
 *
 * @param args
 * @returns {*}
 */

module.exports = function variadic(args) {
  if (Array.isArray(args[0])) {
    return args[0];
  }

  return args;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/collect.js/dist/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Collection(collection) {
  if (collection !== undefined && !Array.isArray(collection) && (typeof collection === 'undefined' ? 'undefined' : _typeof(collection)) !== 'object') {
    this.items = [collection];
  } else if (collection instanceof this.constructor) {
    this.items = collection.all();
  } else {
    this.items = collection || [];
  }
}

/**
 * Symbol.iterator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
 */
var SymbolIterator = __webpack_require__(/*! ./methods/symbol.iterator */ "./node_modules/collect.js/dist/methods/symbol.iterator.js");

if (typeof Symbol !== 'undefined') {
  Collection.prototype[Symbol.iterator] = SymbolIterator;
}

/**
 * Support JSON.stringify
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
 */
Collection.prototype.toJSON = function toJSON() {
  return this.items;
};

Collection.prototype.all = __webpack_require__(/*! ./methods/all */ "./node_modules/collect.js/dist/methods/all.js");
Collection.prototype.average = __webpack_require__(/*! ./methods/average */ "./node_modules/collect.js/dist/methods/average.js");
Collection.prototype.avg = __webpack_require__(/*! ./methods/avg */ "./node_modules/collect.js/dist/methods/avg.js");
Collection.prototype.chunk = __webpack_require__(/*! ./methods/chunk */ "./node_modules/collect.js/dist/methods/chunk.js");
Collection.prototype.collapse = __webpack_require__(/*! ./methods/collapse */ "./node_modules/collect.js/dist/methods/collapse.js");
Collection.prototype.combine = __webpack_require__(/*! ./methods/combine */ "./node_modules/collect.js/dist/methods/combine.js");
Collection.prototype.concat = __webpack_require__(/*! ./methods/concat */ "./node_modules/collect.js/dist/methods/concat.js");
Collection.prototype.contains = __webpack_require__(/*! ./methods/contains */ "./node_modules/collect.js/dist/methods/contains.js");
Collection.prototype.count = __webpack_require__(/*! ./methods/count */ "./node_modules/collect.js/dist/methods/count.js");
Collection.prototype.countBy = __webpack_require__(/*! ./methods/countBy */ "./node_modules/collect.js/dist/methods/countBy.js");
Collection.prototype.crossJoin = __webpack_require__(/*! ./methods/crossJoin */ "./node_modules/collect.js/dist/methods/crossJoin.js");
Collection.prototype.dd = __webpack_require__(/*! ./methods/dd */ "./node_modules/collect.js/dist/methods/dd.js");
Collection.prototype.diff = __webpack_require__(/*! ./methods/diff */ "./node_modules/collect.js/dist/methods/diff.js");
Collection.prototype.diffAssoc = __webpack_require__(/*! ./methods/diffAssoc */ "./node_modules/collect.js/dist/methods/diffAssoc.js");
Collection.prototype.diffKeys = __webpack_require__(/*! ./methods/diffKeys */ "./node_modules/collect.js/dist/methods/diffKeys.js");
Collection.prototype.dump = __webpack_require__(/*! ./methods/dump */ "./node_modules/collect.js/dist/methods/dump.js");
Collection.prototype.duplicates = __webpack_require__(/*! ./methods/duplicates */ "./node_modules/collect.js/dist/methods/duplicates.js");
Collection.prototype.each = __webpack_require__(/*! ./methods/each */ "./node_modules/collect.js/dist/methods/each.js");
Collection.prototype.eachSpread = __webpack_require__(/*! ./methods/eachSpread */ "./node_modules/collect.js/dist/methods/eachSpread.js");
Collection.prototype.every = __webpack_require__(/*! ./methods/every */ "./node_modules/collect.js/dist/methods/every.js");
Collection.prototype.except = __webpack_require__(/*! ./methods/except */ "./node_modules/collect.js/dist/methods/except.js");
Collection.prototype.filter = __webpack_require__(/*! ./methods/filter */ "./node_modules/collect.js/dist/methods/filter.js");
Collection.prototype.first = __webpack_require__(/*! ./methods/first */ "./node_modules/collect.js/dist/methods/first.js");
Collection.prototype.firstWhere = __webpack_require__(/*! ./methods/firstWhere */ "./node_modules/collect.js/dist/methods/firstWhere.js");
Collection.prototype.flatMap = __webpack_require__(/*! ./methods/flatMap */ "./node_modules/collect.js/dist/methods/flatMap.js");
Collection.prototype.flatten = __webpack_require__(/*! ./methods/flatten */ "./node_modules/collect.js/dist/methods/flatten.js");
Collection.prototype.flip = __webpack_require__(/*! ./methods/flip */ "./node_modules/collect.js/dist/methods/flip.js");
Collection.prototype.forPage = __webpack_require__(/*! ./methods/forPage */ "./node_modules/collect.js/dist/methods/forPage.js");
Collection.prototype.forget = __webpack_require__(/*! ./methods/forget */ "./node_modules/collect.js/dist/methods/forget.js");
Collection.prototype.get = __webpack_require__(/*! ./methods/get */ "./node_modules/collect.js/dist/methods/get.js");
Collection.prototype.groupBy = __webpack_require__(/*! ./methods/groupBy */ "./node_modules/collect.js/dist/methods/groupBy.js");
Collection.prototype.has = __webpack_require__(/*! ./methods/has */ "./node_modules/collect.js/dist/methods/has.js");
Collection.prototype.implode = __webpack_require__(/*! ./methods/implode */ "./node_modules/collect.js/dist/methods/implode.js");
Collection.prototype.intersect = __webpack_require__(/*! ./methods/intersect */ "./node_modules/collect.js/dist/methods/intersect.js");
Collection.prototype.intersectByKeys = __webpack_require__(/*! ./methods/intersectByKeys */ "./node_modules/collect.js/dist/methods/intersectByKeys.js");
Collection.prototype.isEmpty = __webpack_require__(/*! ./methods/isEmpty */ "./node_modules/collect.js/dist/methods/isEmpty.js");
Collection.prototype.isNotEmpty = __webpack_require__(/*! ./methods/isNotEmpty */ "./node_modules/collect.js/dist/methods/isNotEmpty.js");
Collection.prototype.join = __webpack_require__(/*! ./methods/join */ "./node_modules/collect.js/dist/methods/join.js");
Collection.prototype.keyBy = __webpack_require__(/*! ./methods/keyBy */ "./node_modules/collect.js/dist/methods/keyBy.js");
Collection.prototype.keys = __webpack_require__(/*! ./methods/keys */ "./node_modules/collect.js/dist/methods/keys.js");
Collection.prototype.last = __webpack_require__(/*! ./methods/last */ "./node_modules/collect.js/dist/methods/last.js");
Collection.prototype.macro = __webpack_require__(/*! ./methods/macro */ "./node_modules/collect.js/dist/methods/macro.js");
Collection.prototype.make = __webpack_require__(/*! ./methods/make */ "./node_modules/collect.js/dist/methods/make.js");
Collection.prototype.map = __webpack_require__(/*! ./methods/map */ "./node_modules/collect.js/dist/methods/map.js");
Collection.prototype.mapSpread = __webpack_require__(/*! ./methods/mapSpread */ "./node_modules/collect.js/dist/methods/mapSpread.js");
Collection.prototype.mapToDictionary = __webpack_require__(/*! ./methods/mapToDictionary */ "./node_modules/collect.js/dist/methods/mapToDictionary.js");
Collection.prototype.mapInto = __webpack_require__(/*! ./methods/mapInto */ "./node_modules/collect.js/dist/methods/mapInto.js");
Collection.prototype.mapToGroups = __webpack_require__(/*! ./methods/mapToGroups */ "./node_modules/collect.js/dist/methods/mapToGroups.js");
Collection.prototype.mapWithKeys = __webpack_require__(/*! ./methods/mapWithKeys */ "./node_modules/collect.js/dist/methods/mapWithKeys.js");
Collection.prototype.max = __webpack_require__(/*! ./methods/max */ "./node_modules/collect.js/dist/methods/max.js");
Collection.prototype.median = __webpack_require__(/*! ./methods/median */ "./node_modules/collect.js/dist/methods/median.js");
Collection.prototype.merge = __webpack_require__(/*! ./methods/merge */ "./node_modules/collect.js/dist/methods/merge.js");
Collection.prototype.mergeRecursive = __webpack_require__(/*! ./methods/mergeRecursive */ "./node_modules/collect.js/dist/methods/mergeRecursive.js");
Collection.prototype.min = __webpack_require__(/*! ./methods/min */ "./node_modules/collect.js/dist/methods/min.js");
Collection.prototype.mode = __webpack_require__(/*! ./methods/mode */ "./node_modules/collect.js/dist/methods/mode.js");
Collection.prototype.nth = __webpack_require__(/*! ./methods/nth */ "./node_modules/collect.js/dist/methods/nth.js");
Collection.prototype.only = __webpack_require__(/*! ./methods/only */ "./node_modules/collect.js/dist/methods/only.js");
Collection.prototype.pad = __webpack_require__(/*! ./methods/pad */ "./node_modules/collect.js/dist/methods/pad.js");
Collection.prototype.partition = __webpack_require__(/*! ./methods/partition */ "./node_modules/collect.js/dist/methods/partition.js");
Collection.prototype.pipe = __webpack_require__(/*! ./methods/pipe */ "./node_modules/collect.js/dist/methods/pipe.js");
Collection.prototype.pluck = __webpack_require__(/*! ./methods/pluck */ "./node_modules/collect.js/dist/methods/pluck.js");
Collection.prototype.pop = __webpack_require__(/*! ./methods/pop */ "./node_modules/collect.js/dist/methods/pop.js");
Collection.prototype.prepend = __webpack_require__(/*! ./methods/prepend */ "./node_modules/collect.js/dist/methods/prepend.js");
Collection.prototype.pull = __webpack_require__(/*! ./methods/pull */ "./node_modules/collect.js/dist/methods/pull.js");
Collection.prototype.push = __webpack_require__(/*! ./methods/push */ "./node_modules/collect.js/dist/methods/push.js");
Collection.prototype.put = __webpack_require__(/*! ./methods/put */ "./node_modules/collect.js/dist/methods/put.js");
Collection.prototype.random = __webpack_require__(/*! ./methods/random */ "./node_modules/collect.js/dist/methods/random.js");
Collection.prototype.reduce = __webpack_require__(/*! ./methods/reduce */ "./node_modules/collect.js/dist/methods/reduce.js");
Collection.prototype.reject = __webpack_require__(/*! ./methods/reject */ "./node_modules/collect.js/dist/methods/reject.js");
Collection.prototype.replace = __webpack_require__(/*! ./methods/replace */ "./node_modules/collect.js/dist/methods/replace.js");
Collection.prototype.replaceRecursive = __webpack_require__(/*! ./methods/replaceRecursive */ "./node_modules/collect.js/dist/methods/replaceRecursive.js");
Collection.prototype.reverse = __webpack_require__(/*! ./methods/reverse */ "./node_modules/collect.js/dist/methods/reverse.js");
Collection.prototype.search = __webpack_require__(/*! ./methods/search */ "./node_modules/collect.js/dist/methods/search.js");
Collection.prototype.shift = __webpack_require__(/*! ./methods/shift */ "./node_modules/collect.js/dist/methods/shift.js");
Collection.prototype.shuffle = __webpack_require__(/*! ./methods/shuffle */ "./node_modules/collect.js/dist/methods/shuffle.js");
Collection.prototype.skip = __webpack_require__(/*! ./methods/skip */ "./node_modules/collect.js/dist/methods/skip.js");
Collection.prototype.skipUntil = __webpack_require__(/*! ./methods/skipUntil */ "./node_modules/collect.js/dist/methods/skipUntil.js");
Collection.prototype.skipWhile = __webpack_require__(/*! ./methods/skipWhile */ "./node_modules/collect.js/dist/methods/skipWhile.js");
Collection.prototype.slice = __webpack_require__(/*! ./methods/slice */ "./node_modules/collect.js/dist/methods/slice.js");
Collection.prototype.some = __webpack_require__(/*! ./methods/some */ "./node_modules/collect.js/dist/methods/some.js");
Collection.prototype.sort = __webpack_require__(/*! ./methods/sort */ "./node_modules/collect.js/dist/methods/sort.js");
Collection.prototype.sortDesc = __webpack_require__(/*! ./methods/sortDesc */ "./node_modules/collect.js/dist/methods/sortDesc.js");
Collection.prototype.sortBy = __webpack_require__(/*! ./methods/sortBy */ "./node_modules/collect.js/dist/methods/sortBy.js");
Collection.prototype.sortByDesc = __webpack_require__(/*! ./methods/sortByDesc */ "./node_modules/collect.js/dist/methods/sortByDesc.js");
Collection.prototype.sortKeys = __webpack_require__(/*! ./methods/sortKeys */ "./node_modules/collect.js/dist/methods/sortKeys.js");
Collection.prototype.sortKeysDesc = __webpack_require__(/*! ./methods/sortKeysDesc */ "./node_modules/collect.js/dist/methods/sortKeysDesc.js");
Collection.prototype.splice = __webpack_require__(/*! ./methods/splice */ "./node_modules/collect.js/dist/methods/splice.js");
Collection.prototype.split = __webpack_require__(/*! ./methods/split */ "./node_modules/collect.js/dist/methods/split.js");
Collection.prototype.sum = __webpack_require__(/*! ./methods/sum */ "./node_modules/collect.js/dist/methods/sum.js");
Collection.prototype.take = __webpack_require__(/*! ./methods/take */ "./node_modules/collect.js/dist/methods/take.js");
Collection.prototype.takeUntil = __webpack_require__(/*! ./methods/takeUntil */ "./node_modules/collect.js/dist/methods/takeUntil.js");
Collection.prototype.takeWhile = __webpack_require__(/*! ./methods/takeWhile */ "./node_modules/collect.js/dist/methods/takeWhile.js");
Collection.prototype.tap = __webpack_require__(/*! ./methods/tap */ "./node_modules/collect.js/dist/methods/tap.js");
Collection.prototype.times = __webpack_require__(/*! ./methods/times */ "./node_modules/collect.js/dist/methods/times.js");
Collection.prototype.toArray = __webpack_require__(/*! ./methods/toArray */ "./node_modules/collect.js/dist/methods/toArray.js");
Collection.prototype.toJson = __webpack_require__(/*! ./methods/toJson */ "./node_modules/collect.js/dist/methods/toJson.js");
Collection.prototype.transform = __webpack_require__(/*! ./methods/transform */ "./node_modules/collect.js/dist/methods/transform.js");
Collection.prototype.unless = __webpack_require__(/*! ./methods/unless */ "./node_modules/collect.js/dist/methods/unless.js");
Collection.prototype.unlessEmpty = __webpack_require__(/*! ./methods/whenNotEmpty */ "./node_modules/collect.js/dist/methods/whenNotEmpty.js");
Collection.prototype.unlessNotEmpty = __webpack_require__(/*! ./methods/whenEmpty */ "./node_modules/collect.js/dist/methods/whenEmpty.js");
Collection.prototype.union = __webpack_require__(/*! ./methods/union */ "./node_modules/collect.js/dist/methods/union.js");
Collection.prototype.unique = __webpack_require__(/*! ./methods/unique */ "./node_modules/collect.js/dist/methods/unique.js");
Collection.prototype.unwrap = __webpack_require__(/*! ./methods/unwrap */ "./node_modules/collect.js/dist/methods/unwrap.js");
Collection.prototype.values = __webpack_require__(/*! ./methods/values */ "./node_modules/collect.js/dist/methods/values.js");
Collection.prototype.when = __webpack_require__(/*! ./methods/when */ "./node_modules/collect.js/dist/methods/when.js");
Collection.prototype.whenEmpty = __webpack_require__(/*! ./methods/whenEmpty */ "./node_modules/collect.js/dist/methods/whenEmpty.js");
Collection.prototype.whenNotEmpty = __webpack_require__(/*! ./methods/whenNotEmpty */ "./node_modules/collect.js/dist/methods/whenNotEmpty.js");
Collection.prototype.where = __webpack_require__(/*! ./methods/where */ "./node_modules/collect.js/dist/methods/where.js");
Collection.prototype.whereBetween = __webpack_require__(/*! ./methods/whereBetween */ "./node_modules/collect.js/dist/methods/whereBetween.js");
Collection.prototype.whereIn = __webpack_require__(/*! ./methods/whereIn */ "./node_modules/collect.js/dist/methods/whereIn.js");
Collection.prototype.whereInstanceOf = __webpack_require__(/*! ./methods/whereInstanceOf */ "./node_modules/collect.js/dist/methods/whereInstanceOf.js");
Collection.prototype.whereNotBetween = __webpack_require__(/*! ./methods/whereNotBetween */ "./node_modules/collect.js/dist/methods/whereNotBetween.js");
Collection.prototype.whereNotIn = __webpack_require__(/*! ./methods/whereNotIn */ "./node_modules/collect.js/dist/methods/whereNotIn.js");
Collection.prototype.whereNull = __webpack_require__(/*! ./methods/whereNull */ "./node_modules/collect.js/dist/methods/whereNull.js");
Collection.prototype.whereNotNull = __webpack_require__(/*! ./methods/whereNotNull */ "./node_modules/collect.js/dist/methods/whereNotNull.js");
Collection.prototype.wrap = __webpack_require__(/*! ./methods/wrap */ "./node_modules/collect.js/dist/methods/wrap.js");
Collection.prototype.zip = __webpack_require__(/*! ./methods/zip */ "./node_modules/collect.js/dist/methods/zip.js");

var collect = function collect(collection) {
  return new Collection(collection);
};

module.exports = collect;
module.exports.collect = collect;
module.exports.default = collect;
module.exports.Collection = Collection;

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/all.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/all.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function all() {
  return this.items;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/average.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/average.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function average(key) {
  if (key === undefined) {
    return this.sum() / this.items.length;
  }

  return new this.constructor(this.items).pluck(key).sum() / this.items.length;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/avg.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/avg.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var average = __webpack_require__(/*! ./average */ "./node_modules/collect.js/dist/methods/average.js");

module.exports = average;

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/chunk.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/chunk.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function chunk(size) {
  var _this = this;

  var chunks = [];
  var index = 0;

  if (Array.isArray(this.items)) {
    do {
      var items = this.items.slice(index, index + size);
      var collection = new this.constructor(items);

      chunks.push(collection);
      index += size;
    } while (index < this.items.length);
  } else if (_typeof(this.items) === 'object') {
    var keys = Object.keys(this.items);

    var _loop = function _loop() {
      var keysOfChunk = keys.slice(index, index + size);
      var collection = new _this.constructor({});

      keysOfChunk.forEach(function (key) {
        return collection.put(key, _this.items[key]);
      });

      chunks.push(collection);
      index += size;
    };

    do {
      _loop();
    } while (index < keys.length);
  } else {
    chunks.push(new this.constructor([this.items]));
  }

  return new this.constructor(chunks);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/collapse.js":
/*!**********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/collapse.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function collapse() {
  var _ref;

  return new this.constructor((_ref = []).concat.apply(_ref, _toConsumableArray(this.items)));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/combine.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/combine.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function combine(array) {
  var _this = this;

  var values = array;

  if (values instanceof this.constructor) {
    values = array.all();
  }

  var collection = {};

  if (Array.isArray(this.items) && Array.isArray(values)) {
    this.items.forEach(function (key, iterator) {
      collection[key] = values[iterator];
    });
  } else if (_typeof(this.items) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object') {
    Object.keys(this.items).forEach(function (key, index) {
      collection[_this.items[key]] = values[Object.keys(values)[index]];
    });
  } else if (Array.isArray(this.items)) {
    collection[this.items[0]] = values;
  } else if (typeof this.items === 'string' && Array.isArray(values)) {
    var _values = values;

    var _values2 = _slicedToArray(_values, 1);

    collection[this.items] = _values2[0];
  } else if (typeof this.items === 'string') {
    collection[this.items] = values;
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/concat.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/concat.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clone = __webpack_require__(/*! ../helpers/clone */ "./node_modules/collect.js/dist/helpers/clone.js");

module.exports = function concat(collectionOrArrayOrObject) {
  var list = collectionOrArrayOrObject;

  if (collectionOrArrayOrObject instanceof this.constructor) {
    list = collectionOrArrayOrObject.all();
  } else if ((typeof collectionOrArrayOrObject === 'undefined' ? 'undefined' : _typeof(collectionOrArrayOrObject)) === 'object') {
    list = [];
    Object.keys(collectionOrArrayOrObject).forEach(function (property) {
      list.push(collectionOrArrayOrObject[property]);
    });
  }

  var collection = clone(this.items);

  list.forEach(function (item) {
    if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
      Object.keys(item).forEach(function (key) {
        return collection.push(item[key]);
      });
    } else {
      collection.push(item);
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/contains.js":
/*!**********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/contains.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var values = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");

var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function contains(key, value) {
  if (value !== undefined) {
    if (Array.isArray(this.items)) {
      return this.items.filter(function (items) {
        return items[key] !== undefined && items[key] === value;
      }).length > 0;
    }

    return this.items[key] !== undefined && this.items[key] === value;
  }

  if (isFunction(key)) {
    return this.items.filter(function (item, index) {
      return key(item, index);
    }).length > 0;
  }

  if (Array.isArray(this.items)) {
    return this.items.indexOf(key) !== -1;
  }

  var keysAndValues = values(this.items);
  keysAndValues.push.apply(keysAndValues, _toConsumableArray(Object.keys(this.items)));

  return keysAndValues.indexOf(key) !== -1;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/count.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/count.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function count() {
  var arrayLength = 0;

  if (Array.isArray(this.items)) {
    arrayLength = this.items.length;
  }

  return Math.max(Object.keys(this.items).length, arrayLength);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/countBy.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/countBy.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function countBy() {
  var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (value) {
    return value;
  };

  return new this.constructor(this.items).groupBy(fn).map(function (value) {
    return value.count();
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/crossJoin.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/crossJoin.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function crossJoin() {
  function join(collection, constructor, args) {
    var current = args[0];

    if (current instanceof constructor) {
      current = current.all();
    }

    var rest = args.slice(1);
    var last = !rest.length;
    var result = [];

    for (var i = 0; i < current.length; i += 1) {
      var collectionCopy = collection.slice();
      collectionCopy.push(current[i]);

      if (last) {
        result.push(collectionCopy);
      } else {
        result = result.concat(join(collectionCopy, constructor, rest));
      }
    }

    return result;
  }

  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return new this.constructor(join([], this.constructor, [].concat([this.items], values)));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/dd.js":
/*!****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/dd.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");


module.exports = function dd() {
  this.dump();

  if (typeof process !== 'undefined') {
    process.exit(1);
  }
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/diff.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/diff.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function diff(values) {
  var valuesToDiff = void 0;

  if (values instanceof this.constructor) {
    valuesToDiff = values.all();
  } else {
    valuesToDiff = values;
  }

  var collection = this.items.filter(function (item) {
    return valuesToDiff.indexOf(item) === -1;
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/diffAssoc.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/diffAssoc.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function diffAssoc(values) {
  var _this = this;

  var diffValues = values;

  if (values instanceof this.constructor) {
    diffValues = values.all();
  }

  var collection = {};

  Object.keys(this.items).forEach(function (key) {
    if (diffValues[key] === undefined || diffValues[key] !== _this.items[key]) {
      collection[key] = _this.items[key];
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/diffKeys.js":
/*!**********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/diffKeys.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function diffKeys(object) {
  var objectToDiff = void 0;

  if (object instanceof this.constructor) {
    objectToDiff = object.all();
  } else {
    objectToDiff = object;
  }

  var objectKeys = Object.keys(objectToDiff);

  var remainingKeys = Object.keys(this.items).filter(function (item) {
    return objectKeys.indexOf(item) === -1;
  });

  return new this.constructor(this.items).only(remainingKeys);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/dump.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/dump.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function dump() {
  // eslint-disable-next-line
  console.log(this);

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/duplicates.js":
/*!************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/duplicates.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function duplicates() {
  var _this = this;

  var occuredValues = [];
  var duplicateValues = {};

  var stringifiedValue = function stringifiedValue(value) {
    if (Array.isArray(value) || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      return JSON.stringify(value);
    }

    return value;
  };

  if (Array.isArray(this.items)) {
    this.items.forEach(function (value, index) {
      var valueAsString = stringifiedValue(value);

      if (occuredValues.indexOf(valueAsString) === -1) {
        occuredValues.push(valueAsString);
      } else {
        duplicateValues[index] = value;
      }
    });
  } else if (_typeof(this.items) === 'object') {
    Object.keys(this.items).forEach(function (key) {
      var valueAsString = stringifiedValue(_this.items[key]);

      if (occuredValues.indexOf(valueAsString) === -1) {
        occuredValues.push(valueAsString);
      } else {
        duplicateValues[key] = _this.items[key];
      }
    });
  }

  return new this.constructor(duplicateValues);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/each.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/each.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function each(fn) {
  var stop = false;

  if (Array.isArray(this.items)) {
    var length = this.items.length;


    for (var index = 0; index < length && !stop; index += 1) {
      stop = fn(this.items[index], index, this.items) === false;
    }
  } else {
    var keys = Object.keys(this.items);
    var _length = keys.length;


    for (var _index = 0; _index < _length && !stop; _index += 1) {
      var key = keys[_index];

      stop = fn(this.items[key], key, this.items) === false;
    }
  }

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/eachSpread.js":
/*!************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/eachSpread.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function eachSpread(fn) {
  this.each(function (values, key) {
    fn.apply(undefined, _toConsumableArray(values).concat([key]));
  });

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/every.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/every.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var values = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");

module.exports = function every(fn) {
  var items = values(this.items);

  return items.every(fn);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/except.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/except.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var variadic = __webpack_require__(/*! ../helpers/variadic */ "./node_modules/collect.js/dist/helpers/variadic.js");

module.exports = function except() {
  var _this = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);

  if (Array.isArray(this.items)) {
    var _collection = this.items.filter(function (item) {
      return properties.indexOf(item) === -1;
    });

    return new this.constructor(_collection);
  }

  var collection = {};

  Object.keys(this.items).forEach(function (property) {
    if (properties.indexOf(property) === -1) {
      collection[property] = _this.items[property];
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/filter.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/filter.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function falsyValue(item) {
  if (Array.isArray(item)) {
    if (item.length) {
      return false;
    }
  } else if (item !== undefined && item !== null && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
    if (Object.keys(item).length) {
      return false;
    }
  } else if (item) {
    return false;
  }

  return true;
}

function filterObject(func, items) {
  var result = {};
  Object.keys(items).forEach(function (key) {
    if (func) {
      if (func(items[key], key)) {
        result[key] = items[key];
      }
    } else if (!falsyValue(items[key])) {
      result[key] = items[key];
    }
  });

  return result;
}

function filterArray(func, items) {
  if (func) {
    return items.filter(func);
  }
  var result = [];
  for (var i = 0; i < items.length; i += 1) {
    var item = items[i];
    if (!falsyValue(item)) {
      result.push(item);
    }
  }

  return result;
}

module.exports = function filter(fn) {
  var func = fn || false;
  var filteredItems = null;
  if (Array.isArray(this.items)) {
    filteredItems = filterArray(func, this.items);
  } else {
    filteredItems = filterObject(func, this.items);
  }

  return new this.constructor(filteredItems);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/first.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/first.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function first(fn, defaultValue) {
  if (isFunction(fn)) {
    for (var i = 0, length = this.items.length; i < length; i += 1) {
      var item = this.items[i];
      if (fn(item)) {
        return item;
      }
    }

    if (isFunction(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  if (Array.isArray(this.items) && this.items.length || Object.keys(this.items).length) {
    if (Array.isArray(this.items)) {
      return this.items[0];
    }

    var firstKey = Object.keys(this.items)[0];

    return this.items[firstKey];
  }

  if (isFunction(defaultValue)) {
    return defaultValue();
  }

  return defaultValue;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/firstWhere.js":
/*!************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/firstWhere.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function firstWhere(key, operator, value) {
  return this.where(key, operator, value).first() || null;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/flatMap.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/flatMap.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function flatMap(fn) {
  return this.map(fn).collapse();
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/flatten.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/flatten.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isArray = _require.isArray,
    isObject = _require.isObject;

module.exports = function flatten(depth) {
  var flattenDepth = depth || Infinity;

  var fullyFlattened = false;
  var collection = [];

  var flat = function flat(items) {
    collection = [];

    if (isArray(items)) {
      items.forEach(function (item) {
        if (isArray(item)) {
          collection = collection.concat(item);
        } else if (isObject(item)) {
          Object.keys(item).forEach(function (property) {
            collection = collection.concat(item[property]);
          });
        } else {
          collection.push(item);
        }
      });
    } else {
      Object.keys(items).forEach(function (property) {
        if (isArray(items[property])) {
          collection = collection.concat(items[property]);
        } else if (isObject(items[property])) {
          Object.keys(items[property]).forEach(function (prop) {
            collection = collection.concat(items[property][prop]);
          });
        } else {
          collection.push(items[property]);
        }
      });
    }

    fullyFlattened = collection.filter(function (item) {
      return isObject(item);
    });
    fullyFlattened = fullyFlattened.length === 0;

    flattenDepth -= 1;
  };

  flat(this.items);

  while (!fullyFlattened && flattenDepth > 0) {
    flat(collection);
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/flip.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/flip.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function flip() {
  var _this = this;

  var collection = {};

  if (Array.isArray(this.items)) {
    Object.keys(this.items).forEach(function (key) {
      collection[_this.items[key]] = Number(key);
    });
  } else {
    Object.keys(this.items).forEach(function (key) {
      collection[_this.items[key]] = key;
    });
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/forPage.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/forPage.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function forPage(page, chunk) {
  var _this = this;

  var collection = {};

  if (Array.isArray(this.items)) {
    collection = this.items.slice(page * chunk - chunk, page * chunk);
  } else {
    Object.keys(this.items).slice(page * chunk - chunk, page * chunk).forEach(function (key) {
      collection[key] = _this.items[key];
    });
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/forget.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/forget.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function forget(key) {
  if (Array.isArray(this.items)) {
    this.items.splice(key, 1);
  } else {
    delete this.items[key];
  }

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/get.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/get.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function get(key) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (this.items[key] !== undefined) {
    return this.items[key];
  }

  if (isFunction(defaultValue)) {
    return defaultValue();
  }

  if (defaultValue !== null) {
    return defaultValue;
  }

  return null;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/groupBy.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/groupBy.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ "./node_modules/collect.js/dist/helpers/nestedValue.js");

var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function groupBy(key) {
  var _this = this;

  var collection = {};

  this.items.forEach(function (item, index) {
    var resolvedKey = void 0;

    if (isFunction(key)) {
      resolvedKey = key(item, index);
    } else if (nestedValue(item, key) || nestedValue(item, key) === 0) {
      resolvedKey = nestedValue(item, key);
    } else {
      resolvedKey = '';
    }

    if (collection[resolvedKey] === undefined) {
      collection[resolvedKey] = new _this.constructor([]);
    }

    collection[resolvedKey].push(item);
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/has.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/has.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var variadic = __webpack_require__(/*! ../helpers/variadic */ "./node_modules/collect.js/dist/helpers/variadic.js");

module.exports = function has() {
  var _this = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);

  return properties.filter(function (key) {
    return Object.hasOwnProperty.call(_this.items, key);
  }).length === properties.length;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/implode.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/implode.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function implode(key, glue) {
  if (glue === undefined) {
    return this.items.join(key);
  }

  return new this.constructor(this.items).pluck(key).all().join(glue);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/intersect.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/intersect.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function intersect(values) {
  var intersectValues = values;

  if (values instanceof this.constructor) {
    intersectValues = values.all();
  }

  var collection = this.items.filter(function (item) {
    return intersectValues.indexOf(item) !== -1;
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/intersectByKeys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/intersectByKeys.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function intersectByKeys(values) {
  var _this = this;

  var intersectKeys = Object.keys(values);

  if (values instanceof this.constructor) {
    intersectKeys = Object.keys(values.all());
  }

  var collection = {};

  Object.keys(this.items).forEach(function (key) {
    if (intersectKeys.indexOf(key) !== -1) {
      collection[key] = _this.items[key];
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/isEmpty.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/isEmpty.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isEmpty() {
  if (Array.isArray(this.items)) {
    return !this.items.length;
  }

  return !Object.keys(this.items).length;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/isNotEmpty.js":
/*!************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/isNotEmpty.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isNotEmpty() {
  return !this.isEmpty();
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/join.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/join.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function join(glue, finalGlue) {
  var collection = this.values();

  if (finalGlue === undefined) {
    return collection.implode(glue);
  }

  var count = collection.count();

  if (count === 0) {
    return '';
  }

  if (count === 1) {
    return collection.last();
  }

  var finalItem = collection.pop();

  return collection.implode(glue) + finalGlue + finalItem;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/keyBy.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/keyBy.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ "./node_modules/collect.js/dist/helpers/nestedValue.js");

var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function keyBy(key) {
  var collection = {};

  if (isFunction(key)) {
    this.items.forEach(function (item) {
      collection[key(item)] = item;
    });
  } else {
    this.items.forEach(function (item) {
      var keyValue = nestedValue(item, key);

      collection[keyValue || ''] = item;
    });
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/keys.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/keys.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function keys() {
  var collection = Object.keys(this.items);

  if (Array.isArray(this.items)) {
    collection = collection.map(Number);
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/last.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/last.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function last(fn, defaultValue) {
  var items = this.items;


  if (isFunction(fn)) {
    items = this.filter(fn).all();
  }

  if (Array.isArray(items) && !items.length || !Object.keys(items).length) {
    if (isFunction(defaultValue)) {
      return defaultValue();
    }

    return defaultValue;
  }

  if (Array.isArray(items)) {
    return items[items.length - 1];
  }
  var keys = Object.keys(items);

  return items[keys[keys.length - 1]];
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/macro.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/macro.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function macro(name, fn) {
  this.constructor.prototype[name] = fn;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/make.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/make.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function make() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return new this.constructor(items);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/map.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/map.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function map(fn) {
  var _this = this;

  if (Array.isArray(this.items)) {
    return new this.constructor(this.items.map(fn));
  }

  var collection = {};

  Object.keys(this.items).forEach(function (key) {
    collection[key] = fn(_this.items[key], key);
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/mapInto.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/mapInto.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function mapInto(ClassName) {
  return this.map(function (value, key) {
    return new ClassName(value, key);
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/mapSpread.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/mapSpread.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function mapSpread(fn) {
  return this.map(function (values, key) {
    return fn.apply(undefined, _toConsumableArray(values).concat([key]));
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/mapToDictionary.js":
/*!*****************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/mapToDictionary.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

module.exports = function mapToDictionary(fn) {
  var collection = {};

  this.items.forEach(function (item, k) {
    var _fn = fn(item, k),
        _fn2 = _slicedToArray(_fn, 2),
        key = _fn2[0],
        value = _fn2[1];

    if (collection[key] === undefined) {
      collection[key] = [value];
    } else {
      collection[key].push(value);
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/mapToGroups.js":
/*!*************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/mapToGroups.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

module.exports = function mapToGroups(fn) {
  var collection = {};

  this.items.forEach(function (item, key) {
    var _fn = fn(item, key),
        _fn2 = _slicedToArray(_fn, 2),
        keyed = _fn2[0],
        value = _fn2[1];

    if (collection[keyed] === undefined) {
      collection[keyed] = [value];
    } else {
      collection[keyed].push(value);
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/mapWithKeys.js":
/*!*************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/mapWithKeys.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

module.exports = function mapWithKeys(fn) {
  var _this = this;

  var collection = {};

  if (Array.isArray(this.items)) {
    this.items.forEach(function (item) {
      var _fn = fn(item),
          _fn2 = _slicedToArray(_fn, 2),
          keyed = _fn2[0],
          value = _fn2[1];

      collection[keyed] = value;
    });
  } else {
    Object.keys(this.items).forEach(function (key) {
      var _fn3 = fn(_this.items[key]),
          _fn4 = _slicedToArray(_fn3, 2),
          keyed = _fn4[0],
          value = _fn4[1];

      collection[keyed] = value;
    });
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/max.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/max.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function max(key) {
  if (typeof key === 'string') {
    var filtered = this.items.filter(function (item) {
      return item[key] !== undefined;
    });

    return Math.max.apply(Math, _toConsumableArray(filtered.map(function (item) {
      return item[key];
    })));
  }

  return Math.max.apply(Math, _toConsumableArray(this.items));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/median.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/median.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function median(key) {
  var length = this.items.length;


  if (key === undefined) {
    if (length % 2 === 0) {
      return (this.items[length / 2 - 1] + this.items[length / 2]) / 2;
    }

    return this.items[Math.floor(length / 2)];
  }

  if (length % 2 === 0) {
    return (this.items[length / 2 - 1][key] + this.items[length / 2][key]) / 2;
  }

  return this.items[Math.floor(length / 2)][key];
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/merge.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/merge.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function merge(value) {
  var arrayOrObject = value;

  if (typeof arrayOrObject === 'string') {
    arrayOrObject = [arrayOrObject];
  }

  if (Array.isArray(this.items) && Array.isArray(arrayOrObject)) {
    return new this.constructor(this.items.concat(arrayOrObject));
  }

  var collection = JSON.parse(JSON.stringify(this.items));

  Object.keys(arrayOrObject).forEach(function (key) {
    collection[key] = arrayOrObject[key];
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/mergeRecursive.js":
/*!****************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/mergeRecursive.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function mergeRecursive(items) {
  var merge = function merge(target, source) {
    var merged = {};

    var mergedKeys = Object.keys(Object.assign({}, target, source));

    mergedKeys.forEach(function (key) {
      if (target[key] === undefined && source[key] !== undefined) {
        merged[key] = source[key];
      } else if (target[key] !== undefined && source[key] === undefined) {
        merged[key] = target[key];
      } else if (target[key] !== undefined && source[key] !== undefined) {
        if (target[key] === source[key]) {
          merged[key] = target[key];
        } else if (!Array.isArray(target[key]) && _typeof(target[key]) === 'object' && !Array.isArray(source[key]) && _typeof(source[key]) === 'object') {
          merged[key] = merge(target[key], source[key]);
        } else {
          merged[key] = [].concat(target[key], source[key]);
        }
      }
    });

    return merged;
  };

  if (!items) {
    return this;
  }

  if (items.constructor.name === 'Collection') {
    return new this.constructor(merge(this.items, items.all()));
  }

  return new this.constructor(merge(this.items, items));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/min.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/min.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = function min(key) {
  if (key !== undefined) {
    var filtered = this.items.filter(function (item) {
      return item[key] !== undefined;
    });

    return Math.min.apply(Math, _toConsumableArray(filtered.map(function (item) {
      return item[key];
    })));
  }

  return Math.min.apply(Math, _toConsumableArray(this.items));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/mode.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/mode.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function mode(key) {
  var values = [];
  var highestCount = 1;

  if (!this.items.length) {
    return null;
  }

  this.items.forEach(function (item) {
    var tempValues = values.filter(function (value) {
      if (key !== undefined) {
        return value.key === item[key];
      }

      return value.key === item;
    });

    if (!tempValues.length) {
      if (key !== undefined) {
        values.push({ key: item[key], count: 1 });
      } else {
        values.push({ key: item, count: 1 });
      }
    } else {
      tempValues[0].count += 1;
      var count = tempValues[0].count;


      if (count > highestCount) {
        highestCount = count;
      }
    }
  });

  return values.filter(function (value) {
    return value.count === highestCount;
  }).map(function (value) {
    return value.key;
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/nth.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/nth.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var values = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");

module.exports = function nth(n) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var items = values(this.items);

  var collection = items.slice(offset).filter(function (item, index) {
    return index % n === 0;
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/only.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/only.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var variadic = __webpack_require__(/*! ../helpers/variadic */ "./node_modules/collect.js/dist/helpers/variadic.js");

module.exports = function only() {
  var _this = this;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var properties = variadic(args);

  if (Array.isArray(this.items)) {
    var _collection = this.items.filter(function (item) {
      return properties.indexOf(item) !== -1;
    });

    return new this.constructor(_collection);
  }

  var collection = {};

  Object.keys(this.items).forEach(function (prop) {
    if (properties.indexOf(prop) !== -1) {
      collection[prop] = _this.items[prop];
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/pad.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/pad.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var clone = __webpack_require__(/*! ../helpers/clone */ "./node_modules/collect.js/dist/helpers/clone.js");

module.exports = function pad(size, value) {
  var abs = Math.abs(size);
  var count = this.count();

  if (abs <= count) {
    return this;
  }

  var diff = abs - count;
  var items = clone(this.items);
  var isArray = Array.isArray(this.items);
  var prepend = size < 0;

  for (var iterator = 0; iterator < diff;) {
    if (!isArray) {
      if (items[iterator] !== undefined) {
        diff += 1;
      } else {
        items[iterator] = value;
      }
    } else if (prepend) {
      items.unshift(value);
    } else {
      items.push(value);
    }

    iterator += 1;
  }

  return new this.constructor(items);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/partition.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/partition.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function partition(fn) {
  var _this = this;

  var arrays = void 0;

  if (Array.isArray(this.items)) {
    arrays = [new this.constructor([]), new this.constructor([])];

    this.items.forEach(function (item) {
      if (fn(item) === true) {
        arrays[0].push(item);
      } else {
        arrays[1].push(item);
      }
    });
  } else {
    arrays = [new this.constructor({}), new this.constructor({})];

    Object.keys(this.items).forEach(function (prop) {
      var value = _this.items[prop];

      if (fn(value) === true) {
        arrays[0].put(prop, value);
      } else {
        arrays[1].put(prop, value);
      }
    });
  }

  return new this.constructor(arrays);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/pipe.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/pipe.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function pipe(fn) {
  return fn(this);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/pluck.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/pluck.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isArray = _require.isArray,
    isObject = _require.isObject;

var nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ "./node_modules/collect.js/dist/helpers/nestedValue.js");

var buildKeyPathMap = function buildKeyPathMap(items) {
  var keyPaths = {};

  items.forEach(function (item, index) {
    function buildKeyPath(val, keyPath) {
      if (isObject(val)) {
        Object.keys(val).forEach(function (prop) {
          buildKeyPath(val[prop], keyPath + '.' + prop);
        });
      } else if (isArray(val)) {
        val.forEach(function (v, i) {
          buildKeyPath(v, keyPath + '.' + i);
        });
      }

      keyPaths[keyPath] = val;
    }

    buildKeyPath(item, index);
  });

  return keyPaths;
};

module.exports = function pluck(value, key) {
  if (value.indexOf('*') !== -1) {
    var keyPathMap = buildKeyPathMap(this.items);

    var keyMatches = [];

    if (key !== undefined) {
      var keyRegex = new RegExp('0.' + key, 'g');
      var keyNumberOfLevels = ('0.' + key).split('.').length;

      Object.keys(keyPathMap).forEach(function (k) {
        var matchingKey = k.match(keyRegex);

        if (matchingKey) {
          var match = matchingKey[0];

          if (match.split('.').length === keyNumberOfLevels) {
            keyMatches.push(keyPathMap[match]);
          }
        }
      });
    }

    var valueMatches = [];
    var valueRegex = new RegExp('0.' + value, 'g');
    var valueNumberOfLevels = ('0.' + value).split('.').length;

    Object.keys(keyPathMap).forEach(function (k) {
      var matchingValue = k.match(valueRegex);

      if (matchingValue) {
        var match = matchingValue[0];

        if (match.split('.').length === valueNumberOfLevels) {
          valueMatches.push(keyPathMap[match]);
        }
      }
    });

    if (key !== undefined) {
      var collection = {};

      this.items.forEach(function (item, index) {
        collection[keyMatches[index] || ''] = valueMatches;
      });

      return new this.constructor(collection);
    }

    return new this.constructor([valueMatches]);
  }

  if (key !== undefined) {
    var _collection = {};

    this.items.forEach(function (item) {
      if (nestedValue(item, value) !== undefined) {
        _collection[item[key] || ''] = nestedValue(item, value);
      } else {
        _collection[item[key] || ''] = null;
      }
    });

    return new this.constructor(_collection);
  }

  return this.map(function (item) {
    if (nestedValue(item, value) !== undefined) {
      return nestedValue(item, value);
    }

    return null;
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/pop.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/pop.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function pop() {
  if (Array.isArray(this.items)) {
    return this.items.pop();
  }

  var keys = Object.keys(this.items);
  var key = keys[keys.length - 1];
  var last = this.items[key];

  delete this.items[key];

  return last;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/prepend.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/prepend.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function prepend(value, key) {
  if (key !== undefined) {
    return this.put(key, value);
  }

  this.items.unshift(value);

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/pull.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/pull.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function pull(key, defaultValue) {
  var returnValue = this.items[key] || null;

  if (!returnValue && defaultValue !== undefined) {
    if (isFunction(defaultValue)) {
      returnValue = defaultValue();
    } else {
      returnValue = defaultValue;
    }
  }

  delete this.items[key];

  return returnValue;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/push.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/push.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function push() {
  var _items;

  (_items = this.items).push.apply(_items, arguments);

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/put.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/put.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function put(key, value) {
  this.items[key] = value;

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/random.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/random.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var values = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");

module.exports = function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var items = values(this.items);

  var collection = new this.constructor(items).shuffle();

  // If not a length was specified
  if (length !== parseInt(length, 10)) {
    return collection.first();
  }

  return collection.take(length);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/reduce.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function reduce(fn, carry) {
  var _this = this;

  var reduceCarry = null;

  if (carry !== undefined) {
    reduceCarry = carry;
  }

  if (Array.isArray(this.items)) {
    this.items.forEach(function (item) {
      reduceCarry = fn(reduceCarry, item);
    });
  } else {
    Object.keys(this.items).forEach(function (key) {
      reduceCarry = fn(reduceCarry, _this.items[key], key);
    });
  }

  return reduceCarry;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/reject.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/reject.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function reject(fn) {
  return new this.constructor(this.items).filter(function (item) {
    return !fn(item);
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/replace.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/replace.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function replace(items) {
  if (!items) {
    return this;
  }

  if (Array.isArray(items)) {
    var _replaced = this.items.map(function (value, index) {
      return items[index] || value;
    });

    return new this.constructor(_replaced);
  }

  if (items.constructor.name === 'Collection') {
    var _replaced2 = Object.assign({}, this.items, items.all());

    return new this.constructor(_replaced2);
  }

  var replaced = Object.assign({}, this.items, items);

  return new this.constructor(replaced);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/replaceRecursive.js":
/*!******************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/replaceRecursive.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function replaceRecursive(items) {
  var replace = function replace(target, source) {
    var replaced = Object.assign({}, target);

    var mergedKeys = Object.keys(Object.assign({}, target, source));

    mergedKeys.forEach(function (key) {
      if (!Array.isArray(source[key]) && _typeof(source[key]) === 'object') {
        replaced[key] = replace(target[key], source[key]);
      } else if (target[key] === undefined && source[key] !== undefined) {
        if (_typeof(target[key]) === 'object') {
          replaced[key] = Object.assign({}, source[key]);
        } else {
          replaced[key] = source[key];
        }
      } else if (target[key] !== undefined && source[key] === undefined) {
        if (_typeof(target[key]) === 'object') {
          replaced[key] = Object.assign({}, target[key]);
        } else {
          replaced[key] = target[key];
        }
      } else if (target[key] !== undefined && source[key] !== undefined) {
        if (_typeof(source[key]) === 'object') {
          replaced[key] = Object.assign({}, source[key]);
        } else {
          replaced[key] = source[key];
        }
      }
    });

    return replaced;
  };

  if (!items) {
    return this;
  }

  if (!Array.isArray(items) && (typeof items === 'undefined' ? 'undefined' : _typeof(items)) !== 'object') {
    return new this.constructor(replace(this.items, [items]));
  }

  if (items.constructor.name === 'Collection') {
    return new this.constructor(replace(this.items, items.all()));
  }

  return new this.constructor(replace(this.items, items));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/reverse.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/reverse.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function reverse() {
  var collection = [].concat(this.items).reverse();

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/search.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/search.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable eqeqeq */

var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isArray = _require.isArray,
    isObject = _require.isObject,
    isFunction = _require.isFunction;

module.exports = function search(valueOrFunction, strict) {
  var _this = this;

  var result = void 0;

  var find = function find(item, key) {
    if (isFunction(valueOrFunction)) {
      return valueOrFunction(_this.items[key], key);
    }

    if (strict) {
      return _this.items[key] === valueOrFunction;
    }

    return _this.items[key] == valueOrFunction;
  };

  if (isArray(this.items)) {
    result = this.items.findIndex(find);
  } else if (isObject(this.items)) {
    result = Object.keys(this.items).find(function (key) {
      return find(_this.items[key], key);
    });
  }

  if (result === undefined || result < 0) {
    return false;
  }

  return result;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/shift.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/shift.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function shift() {
  if (Array.isArray(this.items) && this.items.length) {
    return this.items.shift();
  }

  if (Object.keys(this.items).length) {
    var key = Object.keys(this.items)[0];
    var value = this.items[key];
    delete this.items[key];

    return value;
  }

  return null;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/shuffle.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/shuffle.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var values = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");

module.exports = function shuffle() {
  var items = values(this.items);

  var j = void 0;
  var x = void 0;
  var i = void 0;

  for (i = items.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = items[i - 1];
    items[i - 1] = items[j];
    items[j] = x;
  }

  this.items = items;

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/skip.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/skip.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isObject = _require.isObject;

module.exports = function skip(number) {
  var _this = this;

  if (isObject(this.items)) {
    return new this.constructor(Object.keys(this.items).reduce(function (accumulator, key, index) {
      if (index + 1 > number) {
        accumulator[key] = _this.items[key];
      }

      return accumulator;
    }, {}));
  }

  return new this.constructor(this.items.slice(number));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/skipUntil.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/skipUntil.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isArray = _require.isArray,
    isObject = _require.isObject,
    isFunction = _require.isFunction;

module.exports = function skipUntil(valueOrFunction) {
  var _this = this;

  var previous = null;
  var items = void 0;

  var callback = function callback(value) {
    return value === valueOrFunction;
  };
  if (isFunction(valueOrFunction)) {
    callback = valueOrFunction;
  }

  if (isArray(this.items)) {
    items = this.items.filter(function (item) {
      if (previous !== true) {
        previous = callback(item);
      }

      return previous;
    });
  }

  if (isObject(this.items)) {
    items = Object.keys(this.items).reduce(function (acc, key) {
      if (previous !== true) {
        previous = callback(_this.items[key]);
      }

      if (previous !== false) {
        acc[key] = _this.items[key];
      }

      return acc;
    }, {});
  }

  return new this.constructor(items);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/skipWhile.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/skipWhile.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isArray = _require.isArray,
    isObject = _require.isObject,
    isFunction = _require.isFunction;

module.exports = function skipWhile(valueOrFunction) {
  var _this = this;

  var previous = null;
  var items = void 0;

  var callback = function callback(value) {
    return value === valueOrFunction;
  };
  if (isFunction(valueOrFunction)) {
    callback = valueOrFunction;
  }

  if (isArray(this.items)) {
    items = this.items.filter(function (item) {
      if (previous !== true) {
        previous = !callback(item);
      }

      return previous;
    });
  }

  if (isObject(this.items)) {
    items = Object.keys(this.items).reduce(function (acc, key) {
      if (previous !== true) {
        previous = !callback(_this.items[key]);
      }

      if (previous !== false) {
        acc[key] = _this.items[key];
      }

      return acc;
    }, {});
  }

  return new this.constructor(items);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/slice.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function slice(remove, limit) {
  var collection = this.items.slice(remove);

  if (limit !== undefined) {
    collection = collection.slice(0, limit);
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/some.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/some.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var contains = __webpack_require__(/*! ./contains */ "./node_modules/collect.js/dist/methods/contains.js");

module.exports = contains;

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/sort.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/sort.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function sort(fn) {
  var collection = [].concat(this.items);

  if (fn === undefined) {
    if (this.every(function (item) {
      return typeof item === 'number';
    })) {
      collection.sort(function (a, b) {
        return a - b;
      });
    } else {
      collection.sort();
    }
  } else {
    collection.sort(fn);
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/sortBy.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/sortBy.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ "./node_modules/collect.js/dist/helpers/nestedValue.js");

var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function sortBy(valueOrFunction) {
  var collection = [].concat(this.items);
  var getValue = function getValue(item) {
    if (isFunction(valueOrFunction)) {
      return valueOrFunction(item);
    }

    return nestedValue(item, valueOrFunction);
  };

  collection.sort(function (a, b) {
    var valueA = getValue(a);
    var valueB = getValue(b);

    if (valueA === null || valueA === undefined) {
      return 1;
    }
    if (valueB === null || valueB === undefined) {
      return -1;
    }

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }

    return 0;
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/sortByDesc.js":
/*!************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/sortByDesc.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function sortByDesc(valueOrFunction) {
  return this.sortBy(valueOrFunction).reverse();
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/sortDesc.js":
/*!**********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/sortDesc.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function sortDesc() {
  return this.sort().reverse();
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/sortKeys.js":
/*!**********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/sortKeys.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function sortKeys() {
  var _this = this;

  var ordered = {};

  Object.keys(this.items).sort().forEach(function (key) {
    ordered[key] = _this.items[key];
  });

  return new this.constructor(ordered);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/sortKeysDesc.js":
/*!**************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/sortKeysDesc.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function sortKeysDesc() {
  var _this = this;

  var ordered = {};

  Object.keys(this.items).sort().reverse().forEach(function (key) {
    ordered[key] = _this.items[key];
  });

  return new this.constructor(ordered);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/splice.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/splice.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function splice(index, limit, replace) {
  var slicedCollection = this.slice(index, limit);

  this.items = this.diff(slicedCollection.all()).all();

  if (Array.isArray(replace)) {
    for (var iterator = 0, length = replace.length; iterator < length; iterator += 1) {
      this.items.splice(index + iterator, 0, replace[iterator]);
    }
  }

  return slicedCollection;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/split.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/split.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function split(numberOfGroups) {
  var itemsPerGroup = Math.round(this.items.length / numberOfGroups);

  var items = JSON.parse(JSON.stringify(this.items));
  var collection = [];

  for (var iterator = 0; iterator < numberOfGroups; iterator += 1) {
    collection.push(new this.constructor(items.splice(0, itemsPerGroup)));
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/sum.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/sum.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var values = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");

var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function sum(key) {
  var items = values(this.items);

  var total = 0;

  if (key === undefined) {
    for (var i = 0, length = items.length; i < length; i += 1) {
      total += parseFloat(items[i]);
    }
  } else if (isFunction(key)) {
    for (var _i = 0, _length = items.length; _i < _length; _i += 1) {
      total += parseFloat(key(items[_i]));
    }
  } else {
    for (var _i2 = 0, _length2 = items.length; _i2 < _length2; _i2 += 1) {
      total += parseFloat(items[_i2][key]);
    }
  }

  return parseFloat(total.toPrecision(12));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/symbol.iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/symbol.iterator.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function SymbolIterator() {
  var _this = this;

  var index = -1;

  return {
    next: function next() {
      index += 1;

      return {
        value: _this.items[index],
        done: index >= _this.items.length
      };
    }
  };
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/take.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/take.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function take(length) {
  var _this = this;

  if (!Array.isArray(this.items) && _typeof(this.items) === 'object') {
    var keys = Object.keys(this.items);
    var slicedKeys = void 0;

    if (length < 0) {
      slicedKeys = keys.slice(length);
    } else {
      slicedKeys = keys.slice(0, length);
    }

    var collection = {};

    keys.forEach(function (prop) {
      if (slicedKeys.indexOf(prop) !== -1) {
        collection[prop] = _this.items[prop];
      }
    });

    return new this.constructor(collection);
  }

  if (length < 0) {
    return new this.constructor(this.items.slice(length));
  }

  return new this.constructor(this.items.slice(0, length));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/takeUntil.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/takeUntil.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isArray = _require.isArray,
    isObject = _require.isObject,
    isFunction = _require.isFunction;

module.exports = function takeUntil(valueOrFunction) {
  var _this = this;

  var previous = null;
  var items = void 0;

  var callback = function callback(value) {
    return value === valueOrFunction;
  };
  if (isFunction(valueOrFunction)) {
    callback = valueOrFunction;
  }

  if (isArray(this.items)) {
    items = this.items.filter(function (item) {
      if (previous !== false) {
        previous = !callback(item);
      }

      return previous;
    });
  }

  if (isObject(this.items)) {
    items = Object.keys(this.items).reduce(function (acc, key) {
      if (previous !== false) {
        previous = !callback(_this.items[key]);
      }

      if (previous !== false) {
        acc[key] = _this.items[key];
      }

      return acc;
    }, {});
  }

  return new this.constructor(items);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/takeWhile.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/takeWhile.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isArray = _require.isArray,
    isObject = _require.isObject,
    isFunction = _require.isFunction;

module.exports = function takeWhile(valueOrFunction) {
  var _this = this;

  var previous = null;
  var items = void 0;

  var callback = function callback(value) {
    return value === valueOrFunction;
  };
  if (isFunction(valueOrFunction)) {
    callback = valueOrFunction;
  }

  if (isArray(this.items)) {
    items = this.items.filter(function (item) {
      if (previous !== false) {
        previous = callback(item);
      }

      return previous;
    });
  }

  if (isObject(this.items)) {
    items = Object.keys(this.items).reduce(function (acc, key) {
      if (previous !== false) {
        previous = callback(_this.items[key]);
      }

      if (previous !== false) {
        acc[key] = _this.items[key];
      }

      return acc;
    }, {});
  }

  return new this.constructor(items);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/tap.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/tap.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function tap(fn) {
  fn(this);

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/times.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/times.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function times(n, fn) {
  for (var iterator = 1; iterator <= n; iterator += 1) {
    this.items.push(fn(iterator));
  }

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/toArray.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/toArray.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function toArray() {
  var collectionInstance = this.constructor;

  function iterate(list, collection) {
    var childCollection = [];

    if (list instanceof collectionInstance) {
      list.items.forEach(function (i) {
        return iterate(i, childCollection);
      });
      collection.push(childCollection);
    } else if (Array.isArray(list)) {
      list.forEach(function (i) {
        return iterate(i, childCollection);
      });
      collection.push(childCollection);
    } else {
      collection.push(list);
    }
  }

  if (Array.isArray(this.items)) {
    var collection = [];

    this.items.forEach(function (items) {
      iterate(items, collection);
    });

    return collection;
  }

  return this.values().all();
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/toJson.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/toJson.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function toJson() {
  if (_typeof(this.items) === 'object' && !Array.isArray(this.items)) {
    return JSON.stringify(this.all());
  }

  return JSON.stringify(this.toArray());
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/transform.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/transform.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function transform(fn) {
  var _this = this;

  if (Array.isArray(this.items)) {
    this.items = this.items.map(fn);
  } else {
    var collection = {};

    Object.keys(this.items).forEach(function (key) {
      collection[key] = fn(_this.items[key], key);
    });

    this.items = collection;
  }

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/union.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/union.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function union(object) {
  var _this = this;

  var collection = JSON.parse(JSON.stringify(this.items));

  Object.keys(object).forEach(function (prop) {
    if (_this.items[prop] === undefined) {
      collection[prop] = object[prop];
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/unique.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/unique.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _require = __webpack_require__(/*! ../helpers/is */ "./node_modules/collect.js/dist/helpers/is.js"),
    isFunction = _require.isFunction;

module.exports = function unique(key) {
  var collection = void 0;

  if (key === undefined) {
    collection = this.items.filter(function (element, index, self) {
      return self.indexOf(element) === index;
    });
  } else {
    collection = [];

    var usedKeys = [];

    for (var iterator = 0, length = this.items.length; iterator < length; iterator += 1) {
      var uniqueKey = void 0;
      if (isFunction(key)) {
        uniqueKey = key(this.items[iterator]);
      } else {
        uniqueKey = this.items[iterator][key];
      }

      if (usedKeys.indexOf(uniqueKey) === -1) {
        collection.push(this.items[iterator]);
        usedKeys.push(uniqueKey);
      }
    }
  }

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/unless.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/unless.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function when(value, fn, defaultFn) {
  if (!value) {
    fn(this);
  } else {
    defaultFn(this);
  }
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/unwrap.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/unwrap.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function unwrap(value) {
  if (value instanceof this.constructor) {
    return value.all();
  }

  return value;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/values.js":
/*!********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/values.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getValues = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");

module.exports = function values() {
  return new this.constructor(getValues(this.items));
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/when.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/when.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function when(value, fn, defaultFn) {
  if (value) {
    return fn(this, value);
  }

  if (defaultFn) {
    return defaultFn(this, value);
  }

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whenEmpty.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whenEmpty.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function whenEmpty(fn, defaultFn) {
  if (Array.isArray(this.items) && !this.items.length) {
    return fn(this);
  }if (!Object.keys(this.items).length) {
    return fn(this);
  }

  if (defaultFn !== undefined) {
    if (Array.isArray(this.items) && this.items.length) {
      return defaultFn(this);
    }if (Object.keys(this.items).length) {
      return defaultFn(this);
    }
  }

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whenNotEmpty.js":
/*!**************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whenNotEmpty.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function whenNotEmpty(fn, defaultFn) {
  if (Array.isArray(this.items) && this.items.length) {
    return fn(this);
  }if (Object.keys(this.items).length) {
    return fn(this);
  }

  if (defaultFn !== undefined) {
    if (Array.isArray(this.items) && !this.items.length) {
      return defaultFn(this);
    }if (!Object.keys(this.items).length) {
      return defaultFn(this);
    }
  }

  return this;
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/where.js":
/*!*******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/where.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var values = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");
var nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ "./node_modules/collect.js/dist/helpers/nestedValue.js");

module.exports = function where(key, operator, value) {
  var comparisonOperator = operator;
  var comparisonValue = value;

  var items = values(this.items);

  if (operator === undefined || operator === true) {
    return new this.constructor(items.filter(function (item) {
      return nestedValue(item, key);
    }));
  }

  if (operator === false) {
    return new this.constructor(items.filter(function (item) {
      return !nestedValue(item, key);
    }));
  }

  if (value === undefined) {
    comparisonValue = operator;
    comparisonOperator = '===';
  }

  var collection = items.filter(function (item) {
    switch (comparisonOperator) {
      case '==':
        return nestedValue(item, key) === Number(comparisonValue) || nestedValue(item, key) === comparisonValue.toString();

      default:
      case '===':
        return nestedValue(item, key) === comparisonValue;

      case '!=':
      case '<>':
        return nestedValue(item, key) !== Number(comparisonValue) && nestedValue(item, key) !== comparisonValue.toString();

      case '!==':
        return nestedValue(item, key) !== comparisonValue;

      case '<':
        return nestedValue(item, key) < comparisonValue;

      case '<=':
        return nestedValue(item, key) <= comparisonValue;

      case '>':
        return nestedValue(item, key) > comparisonValue;

      case '>=':
        return nestedValue(item, key) >= comparisonValue;
    }
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whereBetween.js":
/*!**************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whereBetween.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function whereBetween(key, values) {
  return this.where(key, '>=', values[0]).where(key, '<=', values[values.length - 1]);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whereIn.js":
/*!*********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whereIn.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var extractValues = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");
var nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ "./node_modules/collect.js/dist/helpers/nestedValue.js");

module.exports = function whereIn(key, values) {
  var items = extractValues(values);

  var collection = this.items.filter(function (item) {
    return items.indexOf(nestedValue(item, key)) !== -1;
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whereInstanceOf.js":
/*!*****************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whereInstanceOf.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function whereInstanceOf(type) {
  return this.filter(function (item) {
    return item instanceof type;
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whereNotBetween.js":
/*!*****************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whereNotBetween.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ "./node_modules/collect.js/dist/helpers/nestedValue.js");

module.exports = function whereNotBetween(key, values) {
  return this.filter(function (item) {
    return nestedValue(item, key) < values[0] || nestedValue(item, key) > values[values.length - 1];
  });
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whereNotIn.js":
/*!************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whereNotIn.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var extractValues = __webpack_require__(/*! ../helpers/values */ "./node_modules/collect.js/dist/helpers/values.js");
var nestedValue = __webpack_require__(/*! ../helpers/nestedValue */ "./node_modules/collect.js/dist/helpers/nestedValue.js");

module.exports = function whereNotIn(key, values) {
  var items = extractValues(values);

  var collection = this.items.filter(function (item) {
    return items.indexOf(nestedValue(item, key)) === -1;
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whereNotNull.js":
/*!**************************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whereNotNull.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function whereNotNull() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return this.where(key, '!==', null);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/whereNull.js":
/*!***********************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/whereNull.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function whereNull() {
  var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return this.where(key, '===', null);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/wrap.js":
/*!******************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/wrap.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function wrap(value) {
  if (value instanceof this.constructor) {
    return value;
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    return new this.constructor(value);
  }

  return new this.constructor([value]);
};

/***/ }),

/***/ "./node_modules/collect.js/dist/methods/zip.js":
/*!*****************************************************!*\
  !*** ./node_modules/collect.js/dist/methods/zip.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function zip(array) {
  var _this = this;

  var values = array;

  if (values instanceof this.constructor) {
    values = values.all();
  }

  var collection = this.items.map(function (item, index) {
    return new _this.constructor([item, values[index]]);
  });

  return new this.constructor(collection);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.column-section-wrapper[data-v-b198e620] {\n  flex-basis: 50%;\n  max-width: 50%;\n  box-sizing: border-box;\n  transition: transform 0.2s;\n}\n.column-section-wrapper[data-v-b198e620]:hover {\n  transform: scale(1.04);\n}\n.column-section-wrapper[data-v-b198e620]:active {\n  transform: scale(0.9);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./resources/css/buildamic.css":
/*!*************************************!*\
  !*** ./resources/css/buildamic.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "MultiDrag": () => (/* binding */ MultiDragPlugin),
/* harmony export */   "Sortable": () => (/* binding */ Sortable),
/* harmony export */   "Swap": () => (/* binding */ SwapPlugin)
/* harmony export */ });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityIcon": () => (/* binding */ ActivityIcon),
/* harmony export */   "AirplayIcon": () => (/* binding */ AirplayIcon),
/* harmony export */   "AlertCircleIcon": () => (/* binding */ AlertCircleIcon),
/* harmony export */   "AlertOctagonIcon": () => (/* binding */ AlertOctagonIcon),
/* harmony export */   "AlertTriangleIcon": () => (/* binding */ AlertTriangleIcon),
/* harmony export */   "AlignCenterIcon": () => (/* binding */ AlignCenterIcon),
/* harmony export */   "AlignJustifyIcon": () => (/* binding */ AlignJustifyIcon),
/* harmony export */   "AlignLeftIcon": () => (/* binding */ AlignLeftIcon),
/* harmony export */   "AlignRightIcon": () => (/* binding */ AlignRightIcon),
/* harmony export */   "AnchorIcon": () => (/* binding */ AnchorIcon),
/* harmony export */   "ApertureIcon": () => (/* binding */ ApertureIcon),
/* harmony export */   "ArchiveIcon": () => (/* binding */ ArchiveIcon),
/* harmony export */   "ArrowDownCircleIcon": () => (/* binding */ ArrowDownCircleIcon),
/* harmony export */   "ArrowDownLeftIcon": () => (/* binding */ ArrowDownLeftIcon),
/* harmony export */   "ArrowDownRightIcon": () => (/* binding */ ArrowDownRightIcon),
/* harmony export */   "ArrowDownIcon": () => (/* binding */ ArrowDownIcon),
/* harmony export */   "ArrowLeftCircleIcon": () => (/* binding */ ArrowLeftCircleIcon),
/* harmony export */   "ArrowLeftIcon": () => (/* binding */ ArrowLeftIcon),
/* harmony export */   "ArrowRightCircleIcon": () => (/* binding */ ArrowRightCircleIcon),
/* harmony export */   "ArrowRightIcon": () => (/* binding */ ArrowRightIcon),
/* harmony export */   "ArrowUpCircleIcon": () => (/* binding */ ArrowUpCircleIcon),
/* harmony export */   "ArrowUpLeftIcon": () => (/* binding */ ArrowUpLeftIcon),
/* harmony export */   "ArrowUpRightIcon": () => (/* binding */ ArrowUpRightIcon),
/* harmony export */   "ArrowUpIcon": () => (/* binding */ ArrowUpIcon),
/* harmony export */   "AtSignIcon": () => (/* binding */ AtSignIcon),
/* harmony export */   "AwardIcon": () => (/* binding */ AwardIcon),
/* harmony export */   "BarChart2Icon": () => (/* binding */ BarChart2Icon),
/* harmony export */   "BarChartIcon": () => (/* binding */ BarChartIcon),
/* harmony export */   "BatteryChargingIcon": () => (/* binding */ BatteryChargingIcon),
/* harmony export */   "BatteryIcon": () => (/* binding */ BatteryIcon),
/* harmony export */   "BellOffIcon": () => (/* binding */ BellOffIcon),
/* harmony export */   "BellIcon": () => (/* binding */ BellIcon),
/* harmony export */   "BluetoothIcon": () => (/* binding */ BluetoothIcon),
/* harmony export */   "BoldIcon": () => (/* binding */ BoldIcon),
/* harmony export */   "BookOpenIcon": () => (/* binding */ BookOpenIcon),
/* harmony export */   "BookIcon": () => (/* binding */ BookIcon),
/* harmony export */   "BookmarkIcon": () => (/* binding */ BookmarkIcon),
/* harmony export */   "BoxIcon": () => (/* binding */ BoxIcon),
/* harmony export */   "BriefcaseIcon": () => (/* binding */ BriefcaseIcon),
/* harmony export */   "CalendarIcon": () => (/* binding */ CalendarIcon),
/* harmony export */   "CameraOffIcon": () => (/* binding */ CameraOffIcon),
/* harmony export */   "CameraIcon": () => (/* binding */ CameraIcon),
/* harmony export */   "CastIcon": () => (/* binding */ CastIcon),
/* harmony export */   "CheckCircleIcon": () => (/* binding */ CheckCircleIcon),
/* harmony export */   "CheckSquareIcon": () => (/* binding */ CheckSquareIcon),
/* harmony export */   "CheckIcon": () => (/* binding */ CheckIcon),
/* harmony export */   "ChevronDownIcon": () => (/* binding */ ChevronDownIcon),
/* harmony export */   "ChevronLeftIcon": () => (/* binding */ ChevronLeftIcon),
/* harmony export */   "ChevronRightIcon": () => (/* binding */ ChevronRightIcon),
/* harmony export */   "ChevronUpIcon": () => (/* binding */ ChevronUpIcon),
/* harmony export */   "ChevronsDownIcon": () => (/* binding */ ChevronsDownIcon),
/* harmony export */   "ChevronsLeftIcon": () => (/* binding */ ChevronsLeftIcon),
/* harmony export */   "ChevronsRightIcon": () => (/* binding */ ChevronsRightIcon),
/* harmony export */   "ChevronsUpIcon": () => (/* binding */ ChevronsUpIcon),
/* harmony export */   "ChromeIcon": () => (/* binding */ ChromeIcon),
/* harmony export */   "CircleIcon": () => (/* binding */ CircleIcon),
/* harmony export */   "ClipboardIcon": () => (/* binding */ ClipboardIcon),
/* harmony export */   "ClockIcon": () => (/* binding */ ClockIcon),
/* harmony export */   "CloudDrizzleIcon": () => (/* binding */ CloudDrizzleIcon),
/* harmony export */   "CloudLightningIcon": () => (/* binding */ CloudLightningIcon),
/* harmony export */   "CloudOffIcon": () => (/* binding */ CloudOffIcon),
/* harmony export */   "CloudRainIcon": () => (/* binding */ CloudRainIcon),
/* harmony export */   "CloudSnowIcon": () => (/* binding */ CloudSnowIcon),
/* harmony export */   "CloudIcon": () => (/* binding */ CloudIcon),
/* harmony export */   "CodeIcon": () => (/* binding */ CodeIcon),
/* harmony export */   "CodepenIcon": () => (/* binding */ CodepenIcon),
/* harmony export */   "CodesandboxIcon": () => (/* binding */ CodesandboxIcon),
/* harmony export */   "CoffeeIcon": () => (/* binding */ CoffeeIcon),
/* harmony export */   "ColumnsIcon": () => (/* binding */ ColumnsIcon),
/* harmony export */   "CommandIcon": () => (/* binding */ CommandIcon),
/* harmony export */   "CompassIcon": () => (/* binding */ CompassIcon),
/* harmony export */   "CopyIcon": () => (/* binding */ CopyIcon),
/* harmony export */   "CornerDownLeftIcon": () => (/* binding */ CornerDownLeftIcon),
/* harmony export */   "CornerDownRightIcon": () => (/* binding */ CornerDownRightIcon),
/* harmony export */   "CornerLeftDownIcon": () => (/* binding */ CornerLeftDownIcon),
/* harmony export */   "CornerLeftUpIcon": () => (/* binding */ CornerLeftUpIcon),
/* harmony export */   "CornerRightDownIcon": () => (/* binding */ CornerRightDownIcon),
/* harmony export */   "CornerRightUpIcon": () => (/* binding */ CornerRightUpIcon),
/* harmony export */   "CornerUpLeftIcon": () => (/* binding */ CornerUpLeftIcon),
/* harmony export */   "CornerUpRightIcon": () => (/* binding */ CornerUpRightIcon),
/* harmony export */   "CpuIcon": () => (/* binding */ CpuIcon),
/* harmony export */   "CreditCardIcon": () => (/* binding */ CreditCardIcon),
/* harmony export */   "CropIcon": () => (/* binding */ CropIcon),
/* harmony export */   "CrosshairIcon": () => (/* binding */ CrosshairIcon),
/* harmony export */   "DatabaseIcon": () => (/* binding */ DatabaseIcon),
/* harmony export */   "DeleteIcon": () => (/* binding */ DeleteIcon),
/* harmony export */   "DiscIcon": () => (/* binding */ DiscIcon),
/* harmony export */   "DivideCircleIcon": () => (/* binding */ DivideCircleIcon),
/* harmony export */   "DivideSquareIcon": () => (/* binding */ DivideSquareIcon),
/* harmony export */   "DivideIcon": () => (/* binding */ DivideIcon),
/* harmony export */   "DollarSignIcon": () => (/* binding */ DollarSignIcon),
/* harmony export */   "DownloadCloudIcon": () => (/* binding */ DownloadCloudIcon),
/* harmony export */   "DownloadIcon": () => (/* binding */ DownloadIcon),
/* harmony export */   "DribbbleIcon": () => (/* binding */ DribbbleIcon),
/* harmony export */   "DropletIcon": () => (/* binding */ DropletIcon),
/* harmony export */   "Edit2Icon": () => (/* binding */ Edit2Icon),
/* harmony export */   "Edit3Icon": () => (/* binding */ Edit3Icon),
/* harmony export */   "EditIcon": () => (/* binding */ EditIcon),
/* harmony export */   "ExternalLinkIcon": () => (/* binding */ ExternalLinkIcon),
/* harmony export */   "EyeOffIcon": () => (/* binding */ EyeOffIcon),
/* harmony export */   "EyeIcon": () => (/* binding */ EyeIcon),
/* harmony export */   "FacebookIcon": () => (/* binding */ FacebookIcon),
/* harmony export */   "FastForwardIcon": () => (/* binding */ FastForwardIcon),
/* harmony export */   "FeatherIcon": () => (/* binding */ FeatherIcon),
/* harmony export */   "FigmaIcon": () => (/* binding */ FigmaIcon),
/* harmony export */   "FileMinusIcon": () => (/* binding */ FileMinusIcon),
/* harmony export */   "FilePlusIcon": () => (/* binding */ FilePlusIcon),
/* harmony export */   "FileTextIcon": () => (/* binding */ FileTextIcon),
/* harmony export */   "FileIcon": () => (/* binding */ FileIcon),
/* harmony export */   "FilmIcon": () => (/* binding */ FilmIcon),
/* harmony export */   "FilterIcon": () => (/* binding */ FilterIcon),
/* harmony export */   "FlagIcon": () => (/* binding */ FlagIcon),
/* harmony export */   "FolderMinusIcon": () => (/* binding */ FolderMinusIcon),
/* harmony export */   "FolderPlusIcon": () => (/* binding */ FolderPlusIcon),
/* harmony export */   "FolderIcon": () => (/* binding */ FolderIcon),
/* harmony export */   "FramerIcon": () => (/* binding */ FramerIcon),
/* harmony export */   "FrownIcon": () => (/* binding */ FrownIcon),
/* harmony export */   "GiftIcon": () => (/* binding */ GiftIcon),
/* harmony export */   "GitBranchIcon": () => (/* binding */ GitBranchIcon),
/* harmony export */   "GitCommitIcon": () => (/* binding */ GitCommitIcon),
/* harmony export */   "GitMergeIcon": () => (/* binding */ GitMergeIcon),
/* harmony export */   "GitPullRequestIcon": () => (/* binding */ GitPullRequestIcon),
/* harmony export */   "GithubIcon": () => (/* binding */ GithubIcon),
/* harmony export */   "GitlabIcon": () => (/* binding */ GitlabIcon),
/* harmony export */   "GlobeIcon": () => (/* binding */ GlobeIcon),
/* harmony export */   "GridIcon": () => (/* binding */ GridIcon),
/* harmony export */   "HardDriveIcon": () => (/* binding */ HardDriveIcon),
/* harmony export */   "HashIcon": () => (/* binding */ HashIcon),
/* harmony export */   "HeadphonesIcon": () => (/* binding */ HeadphonesIcon),
/* harmony export */   "HeartIcon": () => (/* binding */ HeartIcon),
/* harmony export */   "HelpCircleIcon": () => (/* binding */ HelpCircleIcon),
/* harmony export */   "HexagonIcon": () => (/* binding */ HexagonIcon),
/* harmony export */   "HomeIcon": () => (/* binding */ HomeIcon),
/* harmony export */   "ImageIcon": () => (/* binding */ ImageIcon),
/* harmony export */   "InboxIcon": () => (/* binding */ InboxIcon),
/* harmony export */   "InfoIcon": () => (/* binding */ InfoIcon),
/* harmony export */   "InstagramIcon": () => (/* binding */ InstagramIcon),
/* harmony export */   "ItalicIcon": () => (/* binding */ ItalicIcon),
/* harmony export */   "KeyIcon": () => (/* binding */ KeyIcon),
/* harmony export */   "LayersIcon": () => (/* binding */ LayersIcon),
/* harmony export */   "LayoutIcon": () => (/* binding */ LayoutIcon),
/* harmony export */   "LifeBuoyIcon": () => (/* binding */ LifeBuoyIcon),
/* harmony export */   "Link2Icon": () => (/* binding */ Link2Icon),
/* harmony export */   "LinkIcon": () => (/* binding */ LinkIcon),
/* harmony export */   "LinkedinIcon": () => (/* binding */ LinkedinIcon),
/* harmony export */   "ListIcon": () => (/* binding */ ListIcon),
/* harmony export */   "LoaderIcon": () => (/* binding */ LoaderIcon),
/* harmony export */   "LockIcon": () => (/* binding */ LockIcon),
/* harmony export */   "LogInIcon": () => (/* binding */ LogInIcon),
/* harmony export */   "LogOutIcon": () => (/* binding */ LogOutIcon),
/* harmony export */   "MailIcon": () => (/* binding */ MailIcon),
/* harmony export */   "MapPinIcon": () => (/* binding */ MapPinIcon),
/* harmony export */   "MapIcon": () => (/* binding */ MapIcon),
/* harmony export */   "Maximize2Icon": () => (/* binding */ Maximize2Icon),
/* harmony export */   "MaximizeIcon": () => (/* binding */ MaximizeIcon),
/* harmony export */   "MehIcon": () => (/* binding */ MehIcon),
/* harmony export */   "MenuIcon": () => (/* binding */ MenuIcon),
/* harmony export */   "MessageCircleIcon": () => (/* binding */ MessageCircleIcon),
/* harmony export */   "MessageSquareIcon": () => (/* binding */ MessageSquareIcon),
/* harmony export */   "MicOffIcon": () => (/* binding */ MicOffIcon),
/* harmony export */   "MicIcon": () => (/* binding */ MicIcon),
/* harmony export */   "Minimize2Icon": () => (/* binding */ Minimize2Icon),
/* harmony export */   "MinimizeIcon": () => (/* binding */ MinimizeIcon),
/* harmony export */   "MinusCircleIcon": () => (/* binding */ MinusCircleIcon),
/* harmony export */   "MinusSquareIcon": () => (/* binding */ MinusSquareIcon),
/* harmony export */   "MinusIcon": () => (/* binding */ MinusIcon),
/* harmony export */   "MonitorIcon": () => (/* binding */ MonitorIcon),
/* harmony export */   "MoonIcon": () => (/* binding */ MoonIcon),
/* harmony export */   "MoreHorizontalIcon": () => (/* binding */ MoreHorizontalIcon),
/* harmony export */   "MoreVerticalIcon": () => (/* binding */ MoreVerticalIcon),
/* harmony export */   "MousePointerIcon": () => (/* binding */ MousePointerIcon),
/* harmony export */   "MoveIcon": () => (/* binding */ MoveIcon),
/* harmony export */   "MusicIcon": () => (/* binding */ MusicIcon),
/* harmony export */   "Navigation2Icon": () => (/* binding */ Navigation2Icon),
/* harmony export */   "NavigationIcon": () => (/* binding */ NavigationIcon),
/* harmony export */   "OctagonIcon": () => (/* binding */ OctagonIcon),
/* harmony export */   "PackageIcon": () => (/* binding */ PackageIcon),
/* harmony export */   "PaperclipIcon": () => (/* binding */ PaperclipIcon),
/* harmony export */   "PauseCircleIcon": () => (/* binding */ PauseCircleIcon),
/* harmony export */   "PauseIcon": () => (/* binding */ PauseIcon),
/* harmony export */   "PenToolIcon": () => (/* binding */ PenToolIcon),
/* harmony export */   "PercentIcon": () => (/* binding */ PercentIcon),
/* harmony export */   "PhoneCallIcon": () => (/* binding */ PhoneCallIcon),
/* harmony export */   "PhoneForwardedIcon": () => (/* binding */ PhoneForwardedIcon),
/* harmony export */   "PhoneIncomingIcon": () => (/* binding */ PhoneIncomingIcon),
/* harmony export */   "PhoneMissedIcon": () => (/* binding */ PhoneMissedIcon),
/* harmony export */   "PhoneOffIcon": () => (/* binding */ PhoneOffIcon),
/* harmony export */   "PhoneOutgoingIcon": () => (/* binding */ PhoneOutgoingIcon),
/* harmony export */   "PhoneIcon": () => (/* binding */ PhoneIcon),
/* harmony export */   "PieChartIcon": () => (/* binding */ PieChartIcon),
/* harmony export */   "PlayCircleIcon": () => (/* binding */ PlayCircleIcon),
/* harmony export */   "PlayIcon": () => (/* binding */ PlayIcon),
/* harmony export */   "PlusCircleIcon": () => (/* binding */ PlusCircleIcon),
/* harmony export */   "PlusSquareIcon": () => (/* binding */ PlusSquareIcon),
/* harmony export */   "PlusIcon": () => (/* binding */ PlusIcon),
/* harmony export */   "PocketIcon": () => (/* binding */ PocketIcon),
/* harmony export */   "PowerIcon": () => (/* binding */ PowerIcon),
/* harmony export */   "PrinterIcon": () => (/* binding */ PrinterIcon),
/* harmony export */   "RadioIcon": () => (/* binding */ RadioIcon),
/* harmony export */   "RefreshCcwIcon": () => (/* binding */ RefreshCcwIcon),
/* harmony export */   "RefreshCwIcon": () => (/* binding */ RefreshCwIcon),
/* harmony export */   "RepeatIcon": () => (/* binding */ RepeatIcon),
/* harmony export */   "RewindIcon": () => (/* binding */ RewindIcon),
/* harmony export */   "RotateCcwIcon": () => (/* binding */ RotateCcwIcon),
/* harmony export */   "RotateCwIcon": () => (/* binding */ RotateCwIcon),
/* harmony export */   "RssIcon": () => (/* binding */ RssIcon),
/* harmony export */   "SaveIcon": () => (/* binding */ SaveIcon),
/* harmony export */   "ScissorsIcon": () => (/* binding */ ScissorsIcon),
/* harmony export */   "SearchIcon": () => (/* binding */ SearchIcon),
/* harmony export */   "SendIcon": () => (/* binding */ SendIcon),
/* harmony export */   "ServerIcon": () => (/* binding */ ServerIcon),
/* harmony export */   "SettingsIcon": () => (/* binding */ SettingsIcon),
/* harmony export */   "Share2Icon": () => (/* binding */ Share2Icon),
/* harmony export */   "ShareIcon": () => (/* binding */ ShareIcon),
/* harmony export */   "ShieldOffIcon": () => (/* binding */ ShieldOffIcon),
/* harmony export */   "ShieldIcon": () => (/* binding */ ShieldIcon),
/* harmony export */   "ShoppingBagIcon": () => (/* binding */ ShoppingBagIcon),
/* harmony export */   "ShoppingCartIcon": () => (/* binding */ ShoppingCartIcon),
/* harmony export */   "ShuffleIcon": () => (/* binding */ ShuffleIcon),
/* harmony export */   "SidebarIcon": () => (/* binding */ SidebarIcon),
/* harmony export */   "SkipBackIcon": () => (/* binding */ SkipBackIcon),
/* harmony export */   "SkipForwardIcon": () => (/* binding */ SkipForwardIcon),
/* harmony export */   "SlackIcon": () => (/* binding */ SlackIcon),
/* harmony export */   "SlashIcon": () => (/* binding */ SlashIcon),
/* harmony export */   "SlidersIcon": () => (/* binding */ SlidersIcon),
/* harmony export */   "SmartphoneIcon": () => (/* binding */ SmartphoneIcon),
/* harmony export */   "SmileIcon": () => (/* binding */ SmileIcon),
/* harmony export */   "SpeakerIcon": () => (/* binding */ SpeakerIcon),
/* harmony export */   "SquareIcon": () => (/* binding */ SquareIcon),
/* harmony export */   "StarIcon": () => (/* binding */ StarIcon),
/* harmony export */   "StopCircleIcon": () => (/* binding */ StopCircleIcon),
/* harmony export */   "SunIcon": () => (/* binding */ SunIcon),
/* harmony export */   "SunriseIcon": () => (/* binding */ SunriseIcon),
/* harmony export */   "SunsetIcon": () => (/* binding */ SunsetIcon),
/* harmony export */   "TabletIcon": () => (/* binding */ TabletIcon),
/* harmony export */   "TagIcon": () => (/* binding */ TagIcon),
/* harmony export */   "TargetIcon": () => (/* binding */ TargetIcon),
/* harmony export */   "TerminalIcon": () => (/* binding */ TerminalIcon),
/* harmony export */   "ThermometerIcon": () => (/* binding */ ThermometerIcon),
/* harmony export */   "ThumbsDownIcon": () => (/* binding */ ThumbsDownIcon),
/* harmony export */   "ThumbsUpIcon": () => (/* binding */ ThumbsUpIcon),
/* harmony export */   "ToggleLeftIcon": () => (/* binding */ ToggleLeftIcon),
/* harmony export */   "ToggleRightIcon": () => (/* binding */ ToggleRightIcon),
/* harmony export */   "ToolIcon": () => (/* binding */ ToolIcon),
/* harmony export */   "Trash2Icon": () => (/* binding */ Trash2Icon),
/* harmony export */   "TrashIcon": () => (/* binding */ TrashIcon),
/* harmony export */   "TrelloIcon": () => (/* binding */ TrelloIcon),
/* harmony export */   "TrendingDownIcon": () => (/* binding */ TrendingDownIcon),
/* harmony export */   "TrendingUpIcon": () => (/* binding */ TrendingUpIcon),
/* harmony export */   "TriangleIcon": () => (/* binding */ TriangleIcon),
/* harmony export */   "TruckIcon": () => (/* binding */ TruckIcon),
/* harmony export */   "TvIcon": () => (/* binding */ TvIcon),
/* harmony export */   "TwitchIcon": () => (/* binding */ TwitchIcon),
/* harmony export */   "TwitterIcon": () => (/* binding */ TwitterIcon),
/* harmony export */   "TypeIcon": () => (/* binding */ TypeIcon),
/* harmony export */   "UmbrellaIcon": () => (/* binding */ UmbrellaIcon),
/* harmony export */   "UnderlineIcon": () => (/* binding */ UnderlineIcon),
/* harmony export */   "UnlockIcon": () => (/* binding */ UnlockIcon),
/* harmony export */   "UploadCloudIcon": () => (/* binding */ UploadCloudIcon),
/* harmony export */   "UploadIcon": () => (/* binding */ UploadIcon),
/* harmony export */   "UserCheckIcon": () => (/* binding */ UserCheckIcon),
/* harmony export */   "UserMinusIcon": () => (/* binding */ UserMinusIcon),
/* harmony export */   "UserPlusIcon": () => (/* binding */ UserPlusIcon),
/* harmony export */   "UserXIcon": () => (/* binding */ UserXIcon),
/* harmony export */   "UserIcon": () => (/* binding */ UserIcon),
/* harmony export */   "UsersIcon": () => (/* binding */ UsersIcon),
/* harmony export */   "VideoOffIcon": () => (/* binding */ VideoOffIcon),
/* harmony export */   "VideoIcon": () => (/* binding */ VideoIcon),
/* harmony export */   "VoicemailIcon": () => (/* binding */ VoicemailIcon),
/* harmony export */   "Volume1Icon": () => (/* binding */ Volume1Icon),
/* harmony export */   "Volume2Icon": () => (/* binding */ Volume2Icon),
/* harmony export */   "VolumeXIcon": () => (/* binding */ VolumeXIcon),
/* harmony export */   "VolumeIcon": () => (/* binding */ VolumeIcon),
/* harmony export */   "WatchIcon": () => (/* binding */ WatchIcon),
/* harmony export */   "WifiOffIcon": () => (/* binding */ WifiOffIcon),
/* harmony export */   "WifiIcon": () => (/* binding */ WifiIcon),
/* harmony export */   "WindIcon": () => (/* binding */ WindIcon),
/* harmony export */   "XCircleIcon": () => (/* binding */ XCircleIcon),
/* harmony export */   "XOctagonIcon": () => (/* binding */ XOctagonIcon),
/* harmony export */   "XSquareIcon": () => (/* binding */ XSquareIcon),
/* harmony export */   "XIcon": () => (/* binding */ XIcon),
/* harmony export */   "YoutubeIcon": () => (/* binding */ YoutubeIcon),
/* harmony export */   "ZapOffIcon": () => (/* binding */ ZapOffIcon),
/* harmony export */   "ZapIcon": () => (/* binding */ ZapIcon),
/* harmony export */   "ZoomInIcon": () => (/* binding */ ZoomInIcon),
/* harmony export */   "ZoomOutIcon": () => (/* binding */ ZoomOutIcon)
/* harmony export */ });
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);


var ActivityIcon = {
  name: 'ActivityIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-activity"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "22 12 18 12 15 21 9 3 6 12 2 12"
      }
    })]);
  }
};

var AirplayIcon = {
  name: 'AirplayIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-airplay"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
      }
    }), h("polygon", {
      attrs: {
        points: "12 15 17 21 7 21 12 15"
      }
    })]);
  }
};

var AlertCircleIcon = {
  name: 'AlertCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
      }
    })]);
  }
};

var AlertOctagonIcon = {
  name: 'AlertOctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12.01",
        y2: "16"
      }
    })]);
  }
};

var AlertTriangleIcon = {
  name: 'AlertTriangleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-alert-triangle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }
    })]);
  }
};

var AlignCenterIcon = {
  name: 'AlignCenterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-center"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "10",
        x2: "6",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "18",
        x2: "6",
        y2: "18"
      }
    })]);
  }
};

var AlignJustifyIcon = {
  name: 'AlignJustifyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-justify"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "21",
        y1: "10",
        x2: "3",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};

var AlignLeftIcon = {
  name: 'AlignLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "10",
        x2: "3",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    })]);
  }
};

var AlignRightIcon = {
  name: 'AlignRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-align-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "21",
        y1: "10",
        x2: "7",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "6",
        x2: "3",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "14",
        x2: "3",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "7",
        y2: "18"
      }
    })]);
  }
};

var AnchorIcon = {
  name: 'AnchorIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-anchor"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "5",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "8"
      }
    }), h("path", {
      attrs: {
        d: "M5 12H2a10 10 0 0 0 20 0h-3"
      }
    })]);
  }
};

var ApertureIcon = {
  name: 'ApertureIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-aperture"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "14.31",
        y1: "8",
        x2: "20.05",
        y2: "17.94"
      }
    }), h("line", {
      attrs: {
        x1: "9.69",
        y1: "8",
        x2: "21.17",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "7.38",
        y1: "12",
        x2: "13.12",
        y2: "2.06"
      }
    }), h("line", {
      attrs: {
        x1: "9.69",
        y1: "16",
        x2: "3.95",
        y2: "6.06"
      }
    }), h("line", {
      attrs: {
        x1: "14.31",
        y1: "16",
        x2: "2.83",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "16.62",
        y1: "12",
        x2: "10.88",
        y2: "21.94"
      }
    })]);
  }
};

var ArchiveIcon = {
  name: 'ArchiveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-archive"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "21 8 21 21 3 21 3 8"
      }
    }), h("rect", {
      attrs: {
        x: "1",
        y: "3",
        width: "22",
        height: "5"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "12",
        x2: "14",
        y2: "12"
      }
    })]);
  }
};

var ArrowDownCircleIcon = {
  name: 'ArrowDownCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "8 12 12 16 16 12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    })]);
  }
};

var ArrowDownLeftIcon = {
  name: 'ArrowDownLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "7",
        x2: "7",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "17 17 7 17 7 7"
      }
    })]);
  }
};

var ArrowDownRightIcon = {
  name: 'ArrowDownRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "7",
        y1: "7",
        x2: "17",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "17 7 17 17 7 17"
      }
    })]);
  }
};

var ArrowDownIcon = {
  name: 'ArrowDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-down"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
      }
    }), h("polyline", {
      attrs: {
        points: "19 12 12 19 5 12"
      }
    })]);
  }
};

var ArrowLeftCircleIcon = {
  name: 'ArrowLeftCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 8 8 12 12 16"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "12",
        x2: "8",
        y2: "12"
      }
    })]);
  }
};

var ArrowLeftIcon = {
  name: 'ArrowLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "12",
        x2: "5",
        y2: "12"
      }
    }), h("polyline", {
      attrs: {
        points: "12 19 5 12 12 5"
      }
    })]);
  }
};

var ArrowRightCircleIcon = {
  name: 'ArrowRightCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 16 16 12 12 8"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var ArrowRightIcon = {
  name: 'ArrowRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    }), h("polyline", {
      attrs: {
        points: "12 5 19 12 12 19"
      }
    })]);
  }
};

var ArrowUpCircleIcon = {
  name: 'ArrowUpCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "16 12 12 8 8 12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "8"
      }
    })]);
  }
};

var ArrowUpLeftIcon = {
  name: 'ArrowUpLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-left"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "17",
        y1: "17",
        x2: "7",
        y2: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "7 17 7 7 17 7"
      }
    })]);
  }
};

var ArrowUpRightIcon = {
  name: 'ArrowUpRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up-right"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "7",
        y1: "17",
        x2: "17",
        y2: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "7 7 17 7 17 17"
      }
    })]);
  }
};

var ArrowUpIcon = {
  name: 'ArrowUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-arrow-up"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "5"
      }
    }), h("polyline", {
      attrs: {
        points: "5 12 12 5 19 12"
      }
    })]);
  }
};

var AtSignIcon = {
  name: 'AtSignIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-at-sign"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("path", {
      attrs: {
        d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"
      }
    })]);
  }
};

var AwardIcon = {
  name: 'AwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-award"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "8",
        r: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88"
      }
    })]);
  }
};

var BarChart2Icon = {
  name: 'BarChart2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bar-chart-2"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "14"
      }
    })]);
  }
};

var BarChartIcon = {
  name: 'BarChartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bar-chart"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "20",
        x2: "18",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "20",
        x2: "6",
        y2: "16"
      }
    })]);
  }
};

var BatteryChargingIcon = {
  name: 'BatteryChargingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-battery-charging"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "13",
        x2: "23",
        y2: "11"
      }
    }), h("polyline", {
      attrs: {
        points: "11 6 7 12 13 12 9 18"
      }
    })]);
  }
};

var BatteryIcon = {
  name: 'BatteryIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-battery"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "6",
        width: "18",
        height: "12",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "13",
        x2: "23",
        y2: "11"
      }
    })]);
  }
};

var BellOffIcon = {
  name: 'BellOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bell-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }
    }), h("path", {
      attrs: {
        d: "M18.63 13A17.89 17.89 0 0 1 18 8"
      }
    }), h("path", {
      attrs: {
        d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
      }
    }), h("path", {
      attrs: {
        d: "M18 8a6 6 0 0 0-9.33-5"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var BellIcon = {
  name: 'BellIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bell"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      }
    }), h("path", {
      attrs: {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      }
    })]);
  }
};

var BluetoothIcon = {
  name: 'BluetoothIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bluetooth"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"
      }
    })]);
  }
};

var BoldIcon = {
  name: 'BoldIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bold"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
      }
    }), h("path", {
      attrs: {
        d: "M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"
      }
    })]);
  }
};

var BookOpenIcon = {
  name: 'BookOpenIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-book-open"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
      }
    }), h("path", {
      attrs: {
        d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
      }
    })]);
  }
};

var BookIcon = {
  name: 'BookIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-book"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
      }
    }), h("path", {
      attrs: {
        d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
      }
    })]);
  }
};

var BookmarkIcon = {
  name: 'BookmarkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-bookmark"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var BoxIcon = {
  name: 'BoxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-box"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var BriefcaseIcon = {
  name: 'BriefcaseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-briefcase"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
      }
    })]);
  }
};

var CalendarIcon = {
  name: 'CalendarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-calendar"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "4",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "2",
        x2: "16",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "10",
        x2: "21",
        y2: "10"
      }
    })]);
  }
};

var CameraOffIcon = {
  name: 'CameraOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-camera-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"
      }
    })]);
  }
};

var CameraIcon = {
  name: 'CameraIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-camera"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "13",
        r: "4"
      }
    })]);
  }
};

var CastIcon = {
  name: 'CastIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cast"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "20",
        x2: "2.01",
        y2: "20"
      }
    })]);
  }
};

var CheckCircleIcon = {
  name: 'CheckCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check-circle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
      }
    }), h("polyline", {
      attrs: {
        points: "22 4 12 14.01 9 11.01"
      }
    })]);
  }
};

var CheckSquareIcon = {
  name: 'CheckSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check-square"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 11 12 14 22 4"
      }
    }), h("path", {
      attrs: {
        d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
      }
    })]);
  }
};

var CheckIcon = {
  name: 'CheckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-check"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "20 6 9 17 4 12"
      }
    })]);
  }
};

var ChevronDownIcon = {
  name: 'ChevronDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6 9 12 15 18 9"
      }
    })]);
  }
};

var ChevronLeftIcon = {
  name: 'ChevronLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 18 9 12 15 6"
      }
    })]);
  }
};

var ChevronRightIcon = {
  name: 'ChevronRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 18 15 12 9 6"
      }
    })]);
  }
};

var ChevronUpIcon = {
  name: 'ChevronUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevron-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "18 15 12 9 6 15"
      }
    })]);
  }
};

var ChevronsDownIcon = {
  name: 'ChevronsDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "7 13 12 18 17 13"
      }
    }), h("polyline", {
      attrs: {
        points: "7 6 12 11 17 6"
      }
    })]);
  }
};

var ChevronsLeftIcon = {
  name: 'ChevronsLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "11 17 6 12 11 7"
      }
    }), h("polyline", {
      attrs: {
        points: "18 17 13 12 18 7"
      }
    })]);
  }
};

var ChevronsRightIcon = {
  name: 'ChevronsRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "13 17 18 12 13 7"
      }
    }), h("polyline", {
      attrs: {
        points: "6 17 11 12 6 7"
      }
    })]);
  }
};

var ChevronsUpIcon = {
  name: 'ChevronsUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chevrons-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "17 11 12 6 7 11"
      }
    }), h("polyline", {
      attrs: {
        points: "17 18 12 13 7 18"
      }
    })]);
  }
};

var ChromeIcon = {
  name: 'ChromeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-chrome"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "21.17",
        y1: "8",
        x2: "12",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "3.95",
        y1: "6.06",
        x2: "8.54",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "10.88",
        y1: "21.94",
        x2: "15.46",
        y2: "14"
      }
    })]);
  }
};

var CircleIcon = {
  name: 'CircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    })]);
  }
};

var ClipboardIcon = {
  name: 'ClipboardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-clipboard"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
      }
    }), h("rect", {
      attrs: {
        x: "8",
        y: "2",
        width: "8",
        height: "4",
        rx: "1",
        ry: "1"
      }
    })]);
  }
};

var ClockIcon = {
  name: 'ClockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-clock"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polyline", {
      attrs: {
        points: "12 6 12 12 16 14"
      }
    })]);
  }
};

var CloudDrizzleIcon = {
  name: 'CloudDrizzleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-drizzle"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "8",
        y1: "19",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "19",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "16",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "17"
      }
    }), h("path", {
      attrs: {
        d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
      }
    })]);
  }
};

var CloudLightningIcon = {
  name: 'CloudLightningIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-lightning"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"
      }
    }), h("polyline", {
      attrs: {
        points: "13 11 9 17 15 17 11 23"
      }
    })]);
  }
};

var CloudOffIcon = {
  name: 'CloudOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var CloudRainIcon = {
  name: 'CloudRainIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-rain"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "13",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
      }
    })]);
  }
};

var CloudSnowIcon = {
  name: 'CloudSnowIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud-snow"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "16",
        x2: "8.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "20",
        x2: "8.01",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12.01",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "16",
        x2: "16.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "20",
        x2: "16.01",
        y2: "20"
      }
    })]);
  }
};

var CloudIcon = {
  name: 'CloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cloud"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
      }
    })]);
  }
};

var CodeIcon = {
  name: 'CodeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-code"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 18 22 12 16 6"
      }
    }), h("polyline", {
      attrs: {
        points: "8 6 2 12 8 18"
      }
    })]);
  }
};

var CodepenIcon = {
  name: 'CodepenIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-codepen"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "15.5"
      }
    }), h("polyline", {
      attrs: {
        points: "22 8.5 12 15.5 2 8.5"
      }
    }), h("polyline", {
      attrs: {
        points: "2 15.5 12 8.5 22 15.5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "8.5"
      }
    })]);
  }
};

var CodesandboxIcon = {
  name: 'CodesandboxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-codesandbox"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "7.5 4.21 12 6.81 16.5 4.21"
      }
    }), h("polyline", {
      attrs: {
        points: "7.5 19.79 7.5 14.6 3 12"
      }
    }), h("polyline", {
      attrs: {
        points: "21 12 16.5 14.6 16.5 19.79"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var CoffeeIcon = {
  name: 'CoffeeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-coffee"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 8h1a4 4 0 0 1 0 8h-1"
      }
    }), h("path", {
      attrs: {
        d: "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "1",
        x2: "6",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "1",
        x2: "10",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "1",
        x2: "14",
        y2: "4"
      }
    })]);
  }
};

var ColumnsIcon = {
  name: 'ColumnsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-columns"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
      }
    })]);
  }
};

var CommandIcon = {
  name: 'CommandIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-command"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
      }
    })]);
  }
};

var CompassIcon = {
  name: 'CompassIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-compass"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polygon", {
      attrs: {
        points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
      }
    })]);
  }
};

var CopyIcon = {
  name: 'CopyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-copy"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "13",
        height: "13",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      }
    })]);
  }
};

var CornerDownLeftIcon = {
  name: 'CornerDownLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-down-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 10 4 15 9 20"
      }
    }), h("path", {
      attrs: {
        d: "M20 4v7a4 4 0 0 1-4 4H4"
      }
    })]);
  }
};

var CornerDownRightIcon = {
  name: 'CornerDownRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-down-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 10 20 15 15 20"
      }
    }), h("path", {
      attrs: {
        d: "M4 4v7a4 4 0 0 0 4 4h12"
      }
    })]);
  }
};

var CornerLeftDownIcon = {
  name: 'CornerLeftDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-left-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "14 15 9 20 4 15"
      }
    }), h("path", {
      attrs: {
        d: "M20 4h-7a4 4 0 0 0-4 4v12"
      }
    })]);
  }
};

var CornerLeftUpIcon = {
  name: 'CornerLeftUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-left-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "14 9 9 4 4 9"
      }
    }), h("path", {
      attrs: {
        d: "M20 20h-7a4 4 0 0 1-4-4V4"
      }
    })]);
  }
};

var CornerRightDownIcon = {
  name: 'CornerRightDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-right-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "10 15 15 20 20 15"
      }
    }), h("path", {
      attrs: {
        d: "M4 4h7a4 4 0 0 1 4 4v12"
      }
    })]);
  }
};

var CornerRightUpIcon = {
  name: 'CornerRightUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-right-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "10 9 15 4 20 9"
      }
    }), h("path", {
      attrs: {
        d: "M4 20h7a4 4 0 0 0 4-4V4"
      }
    })]);
  }
};

var CornerUpLeftIcon = {
  name: 'CornerUpLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-up-left"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "9 14 4 9 9 4"
      }
    }), h("path", {
      attrs: {
        d: "M20 20v-7a4 4 0 0 0-4-4H4"
      }
    })]);
  }
};

var CornerUpRightIcon = {
  name: 'CornerUpRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-corner-up-right"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 14 20 9 15 4"
      }
    }), h("path", {
      attrs: {
        d: "M4 20v-7a4 4 0 0 1 4-4h12"
      }
    })]);
  }
};

var CpuIcon = {
  name: 'CpuIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-cpu"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "1",
        x2: "9",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "1",
        x2: "15",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "20",
        x2: "9",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "20",
        x2: "15",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "9",
        x2: "23",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "14",
        x2: "23",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "9",
        x2: "4",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "14",
        x2: "4",
        y2: "14"
      }
    })]);
  }
};

var CreditCardIcon = {
  name: 'CreditCardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-credit-card"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "4",
        width: "22",
        height: "16",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "10",
        x2: "23",
        y2: "10"
      }
    })]);
  }
};

var CropIcon = {
  name: 'CropIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-crop"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6.13 1L6 16a2 2 0 0 0 2 2h15"
      }
    }), h("path", {
      attrs: {
        d: "M1 6.13L16 6a2 2 0 0 1 2 2v15"
      }
    })]);
  }
};

var CrosshairIcon = {
  name: 'CrosshairIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-crosshair"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "18",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "6",
        x2: "12",
        y2: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "18"
      }
    })]);
  }
};

var DatabaseIcon = {
  name: 'DatabaseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-database"
    }, ctx.data]), [h("ellipse", {
      attrs: {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }
    }), h("path", {
      attrs: {
        d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
      }
    }), h("path", {
      attrs: {
        d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
      }
    })]);
  }
};

var DeleteIcon = {
  name: 'DeleteIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-delete"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "9",
        x2: "12",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "18",
        y2: "15"
      }
    })]);
  }
};

var DiscIcon = {
  name: 'DiscIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-disc"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var DivideCircleIcon = {
  name: 'DivideCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-divide-circle"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "8"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    })]);
  }
};

var DivideSquareIcon = {
  name: 'DivideSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-divide-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "8"
      }
    })]);
  }
};

var DivideIcon = {
  name: 'DivideIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-divide"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "6",
        r: "2"
      }
    }), h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "18",
        r: "2"
      }
    })]);
  }
};

var DollarSignIcon = {
  name: 'DollarSignIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dollar-sign"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
      }
    })]);
  }
};

var DownloadCloudIcon = {
  name: 'DownloadCloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-download-cloud"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "8 17 12 21 16 17"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "21"
      }
    }), h("path", {
      attrs: {
        d: "M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"
      }
    })]);
  }
};

var DownloadIcon = {
  name: 'DownloadIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-download"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    }), h("polyline", {
      attrs: {
        points: "7 10 12 15 17 10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "15",
        x2: "12",
        y2: "3"
      }
    })]);
  }
};

var DribbbleIcon = {
  name: 'DribbbleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-dribbble"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
      }
    })]);
  }
};

var DropletIcon = {
  name: 'DropletIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-droplet"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
      }
    })]);
  }
};

var Edit2Icon = {
  name: 'Edit2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      }
    })]);
  }
};

var Edit3Icon = {
  name: 'Edit3Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit-3"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 20h9"
      }
    }), h("path", {
      attrs: {
        d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
      }
    })]);
  }
};

var EditIcon = {
  name: 'EditIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-edit"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      }
    }), h("path", {
      attrs: {
        d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
      }
    })]);
  }
};

var ExternalLinkIcon = {
  name: 'ExternalLinkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-external-link"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    }), h("polyline", {
      attrs: {
        points: "15 3 21 3 21 9"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "14",
        x2: "21",
        y2: "3"
      }
    })]);
  }
};

var EyeOffIcon = {
  name: 'EyeOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-eye-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var EyeIcon = {
  name: 'EyeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-eye"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var FacebookIcon = {
  name: 'FacebookIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-facebook"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      }
    })]);
  }
};

var FastForwardIcon = {
  name: 'FastForwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-fast-forward"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "13 19 22 12 13 5 13 19"
      }
    }), h("polygon", {
      attrs: {
        points: "2 19 11 12 2 5 2 19"
      }
    })]);
  }
};

var FeatherIcon = {
  name: 'FeatherIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-feather"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "8",
        x2: "2",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "17.5",
        y1: "15",
        x2: "9",
        y2: "15"
      }
    })]);
  }
};

var FigmaIcon = {
  name: 'FigmaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-figma"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
      }
    }), h("path", {
      attrs: {
        d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
      }
    }), h("path", {
      attrs: {
        d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
      }
    }), h("path", {
      attrs: {
        d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
      }
    })]);
  }
};

var FileMinusIcon = {
  name: 'FileMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var FilePlusIcon = {
  name: 'FilePlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "15",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var FileTextIcon = {
  name: 'FileTextIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file-text"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      }
    }), h("polyline", {
      attrs: {
        points: "14 2 14 8 20 8"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "13",
        x2: "8",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "17",
        x2: "8",
        y2: "17"
      }
    }), h("polyline", {
      attrs: {
        points: "10 9 9 9 8 9"
      }
    })]);
  }
};

var FileIcon = {
  name: 'FileIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-file"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
      }
    }), h("polyline", {
      attrs: {
        points: "13 2 13 9 20 9"
      }
    })]);
  }
};

var FilmIcon = {
  name: 'FilmIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-film"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "2.18",
        ry: "2.18"
      }
    }), h("line", {
      attrs: {
        x1: "7",
        y1: "2",
        x2: "7",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "2",
        x2: "17",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "7",
        x2: "7",
        y2: "7"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "17",
        x2: "7",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "17",
        x2: "22",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "7",
        x2: "22",
        y2: "7"
      }
    })]);
  }
};

var FilterIcon = {
  name: 'FilterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-filter"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }
    })]);
  }
};

var FlagIcon = {
  name: 'FlagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-flag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "22",
        x2: "4",
        y2: "15"
      }
    })]);
  }
};

var FolderMinusIcon = {
  name: 'FolderMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "14"
      }
    })]);
  }
};

var FolderPlusIcon = {
  name: 'FolderPlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "11",
        x2: "12",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "14",
        x2: "15",
        y2: "14"
      }
    })]);
  }
};

var FolderIcon = {
  name: 'FolderIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-folder"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var FramerIcon = {
  name: 'FramerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-framer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"
      }
    })]);
  }
};

var FrownIcon = {
  name: 'FrownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-frown"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M16 16s-1.5-2-4-2-4 2-4 2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var GiftIcon = {
  name: 'GiftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-gift"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "20 12 20 22 4 22 4 12"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22",
        x2: "12",
        y2: "7"
      }
    }), h("path", {
      attrs: {
        d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
      }
    }), h("path", {
      attrs: {
        d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
      }
    })]);
  }
};

var GitBranchIcon = {
  name: 'GitBranchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-branch"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "6",
        y1: "3",
        x2: "6",
        y2: "15"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "6",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M18 9a9 9 0 0 1-9 9"
      }
    })]);
  }
};

var GitCommitIcon = {
  name: 'GitCommitIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-commit"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "1.05",
        y1: "12",
        x2: "7",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "17.01",
        y1: "12",
        x2: "22.96",
        y2: "12"
      }
    })]);
  }
};

var GitMergeIcon = {
  name: 'GitMergeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-merge"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M6 21V9a9 9 0 0 0 9 9"
      }
    })]);
  }
};

var GitPullRequestIcon = {
  name: 'GitPullRequestIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-git-pull-request"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M13 6h3a2 2 0 0 1 2 2v7"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "9",
        x2: "6",
        y2: "21"
      }
    })]);
  }
};

var GithubIcon = {
  name: 'GithubIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-github"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      }
    })]);
  }
};

var GitlabIcon = {
  name: 'GitlabIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-gitlab"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
      }
    })]);
  }
};

var GlobeIcon = {
  name: 'GlobeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-globe"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
      }
    })]);
  }
};

var GridIcon = {
  name: 'GridIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-grid"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "3",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "14",
        width: "7",
        height: "7"
      }
    }), h("rect", {
      attrs: {
        x: "3",
        y: "14",
        width: "7",
        height: "7"
      }
    })]);
  }
};

var HardDriveIcon = {
  name: 'HardDriveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hard-drive"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "16",
        x2: "6.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "16",
        x2: "10.01",
        y2: "16"
      }
    })]);
  }
};

var HashIcon = {
  name: 'HashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hash"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "4",
        y1: "9",
        x2: "20",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "15",
        x2: "20",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "3",
        x2: "8",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "3",
        x2: "14",
        y2: "21"
      }
    })]);
  }
};

var HeadphonesIcon = {
  name: 'HeadphonesIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-headphones"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 18v-6a9 9 0 0 1 18 0v6"
      }
    }), h("path", {
      attrs: {
        d: "M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"
      }
    })]);
  }
};

var HeartIcon = {
  name: 'HeartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-heart"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      }
    })]);
  }
};

var HelpCircleIcon = {
  name: 'HelpCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-help-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12.01",
        y2: "17"
      }
    })]);
  }
};

var HexagonIcon = {
  name: 'HexagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hexagon"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    })]);
  }
};

var HomeIcon = {
  name: 'HomeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-home"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "9 22 9 12 15 12 15 22"
      }
    })]);
  }
};

var ImageIcon = {
  name: 'ImageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-image"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "8.5",
        r: "1.5"
      }
    }), h("polyline", {
      attrs: {
        points: "21 15 16 10 5 21"
      }
    })]);
  }
};

var InboxIcon = {
  name: 'InboxIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-inbox"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "22 12 16 12 14 15 10 15 8 12 2 12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    })]);
  }
};

var InfoIcon = {
  name: 'InfoIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-info"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "16",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12.01",
        y2: "8"
      }
    })]);
  }
};

var InstagramIcon = {
  name: 'InstagramIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-instagram"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "20",
        rx: "5",
        ry: "5"
      }
    }), h("path", {
      attrs: {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      }
    }), h("line", {
      attrs: {
        x1: "17.5",
        y1: "6.5",
        x2: "17.51",
        y2: "6.5"
      }
    })]);
  }
};

var ItalicIcon = {
  name: 'ItalicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-italic"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "4",
        x2: "10",
        y2: "4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "20",
        x2: "5",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "4",
        x2: "9",
        y2: "20"
      }
    })]);
  }
};

var KeyIcon = {
  name: 'KeyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-key"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
      }
    })]);
  }
};

var LayersIcon = {
  name: 'LayersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-layers"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 2 7 12 12 22 7 12 2"
      }
    }), h("polyline", {
      attrs: {
        points: "2 17 12 22 22 17"
      }
    }), h("polyline", {
      attrs: {
        points: "2 12 12 17 22 12"
      }
    })]);
  }
};

var LayoutIcon = {
  name: 'LayoutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-layout"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "9",
        x2: "21",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "21",
        x2: "9",
        y2: "9"
      }
    })]);
  }
};

var LifeBuoyIcon = {
  name: 'LifeBuoyIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-life-buoy"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "9.17",
        y2: "9.17"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "14.83",
        x2: "19.07",
        y2: "19.07"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "9.17",
        x2: "19.07",
        y2: "4.93"
      }
    }), h("line", {
      attrs: {
        x1: "14.83",
        y1: "9.17",
        x2: "18.36",
        y2: "5.64"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "19.07",
        x2: "9.17",
        y2: "14.83"
      }
    })]);
  }
};

var Link2Icon = {
  name: 'Link2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-link-2"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var LinkIcon = {
  name: 'LinkIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-link"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      }
    }), h("path", {
      attrs: {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      }
    })]);
  }
};

var LinkedinIcon = {
  name: 'LinkedinIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-linkedin"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "9",
        width: "4",
        height: "12"
      }
    }), h("circle", {
      attrs: {
        cx: "4",
        cy: "4",
        r: "2"
      }
    })]);
  }
};

var ListIcon = {
  name: 'ListIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-list"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "8",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "21",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "18",
        x2: "21",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "3.01",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "12",
        x2: "3.01",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "18",
        x2: "3.01",
        y2: "18"
      }
    })]);
  }
};

var LoaderIcon = {
  name: 'LoaderIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-loader"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12",
        y2: "22"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "7.76",
        y2: "7.76"
      }
    }), h("line", {
      attrs: {
        x1: "16.24",
        y1: "16.24",
        x2: "19.07",
        y2: "19.07"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "6",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "19.07",
        x2: "7.76",
        y2: "16.24"
      }
    }), h("line", {
      attrs: {
        x1: "16.24",
        y1: "7.76",
        x2: "19.07",
        y2: "4.93"
      }
    })]);
  }
};

var LockIcon = {
  name: 'LockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-lock"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M7 11V7a5 5 0 0 1 10 0v4"
      }
    })]);
  }
};

var LogInIcon = {
  name: 'LogInIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-log-in"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
      }
    }), h("polyline", {
      attrs: {
        points: "10 17 15 12 10 7"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    })]);
  }
};

var LogOutIcon = {
  name: 'LogOutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-log-out"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
      }
    }), h("polyline", {
      attrs: {
        points: "16 17 21 12 16 7"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "12",
        x2: "9",
        y2: "12"
      }
    })]);
  }
};

var MailIcon = {
  name: 'MailIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mail"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "22,6 12,13 2,6"
      }
    })]);
  }
};

var MapPinIcon = {
  name: 'MapPinIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map-pin"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "10",
        r: "3"
      }
    })]);
  }
};

var MapIcon = {
  name: 'MapIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-map"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "2",
        x2: "8",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "6",
        x2: "16",
        y2: "22"
      }
    })]);
  }
};

var Maximize2Icon = {
  name: 'Maximize2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-maximize-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "15 3 21 3 21 9"
      }
    }), h("polyline", {
      attrs: {
        points: "9 21 3 21 3 15"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "3",
        x2: "14",
        y2: "10"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "21",
        x2: "10",
        y2: "14"
      }
    })]);
  }
};

var MaximizeIcon = {
  name: 'MaximizeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-maximize"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
      }
    })]);
  }
};

var MehIcon = {
  name: 'MehIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-meh"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "15",
        x2: "16",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var MenuIcon = {
  name: 'MenuIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-menu"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "3",
        y1: "12",
        x2: "21",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "18",
        x2: "21",
        y2: "18"
      }
    })]);
  }
};

var MessageCircleIcon = {
  name: 'MessageCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-message-circle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      }
    })]);
  }
};

var MessageSquareIcon = {
  name: 'MessageSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-message-square"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      }
    })]);
  }
};

var MicOffIcon = {
  name: 'MicOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mic-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
      }
    }), h("path", {
      attrs: {
        d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }
    })]);
  }
};

var MicIcon = {
  name: 'MicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mic"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
      }
    }), h("path", {
      attrs: {
        d: "M19 10v2a7 7 0 0 1-14 0v-2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "23",
        x2: "16",
        y2: "23"
      }
    })]);
  }
};

var Minimize2Icon = {
  name: 'Minimize2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minimize-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 14 10 14 10 20"
      }
    }), h("polyline", {
      attrs: {
        points: "20 10 14 10 14 4"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "10",
        x2: "21",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "21",
        x2: "10",
        y2: "14"
      }
    })]);
  }
};

var MinimizeIcon = {
  name: 'MinimizeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minimize"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
      }
    })]);
  }
};

var MinusCircleIcon = {
  name: 'MinusCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var MinusSquareIcon = {
  name: 'MinusSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var MinusIcon = {
  name: 'MinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-minus"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    })]);
  }
};

var MonitorIcon = {
  name: 'MonitorIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-monitor"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "3",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "21",
        x2: "16",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "17",
        x2: "12",
        y2: "21"
      }
    })]);
  }
};

var MoonIcon = {
  name: 'MoonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-moon"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      }
    })]);
  }
};

var MoreHorizontalIcon = {
  name: 'MoreHorizontalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-more-horizontal"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "19",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "5",
        cy: "12",
        r: "1"
      }
    })]);
  }
};

var MoreVerticalIcon = {
  name: 'MoreVerticalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-more-vertical"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "5",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "19",
        r: "1"
      }
    })]);
  }
};

var MousePointerIcon = {
  name: 'MousePointerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-mouse-pointer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
      }
    }), h("path", {
      attrs: {
        d: "M13 13l6 6"
      }
    })]);
  }
};

var MoveIcon = {
  name: 'MoveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-move"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "5 9 2 12 5 15"
      }
    }), h("polyline", {
      attrs: {
        points: "9 5 12 2 15 5"
      }
    }), h("polyline", {
      attrs: {
        points: "15 19 12 22 9 19"
      }
    }), h("polyline", {
      attrs: {
        points: "19 9 22 12 19 15"
      }
    }), h("line", {
      attrs: {
        x1: "2",
        y1: "12",
        x2: "22",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "22"
      }
    })]);
  }
};

var MusicIcon = {
  name: 'MusicIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-music"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9 18V5l12-2v13"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "16",
        r: "3"
      }
    })]);
  }
};

var Navigation2Icon = {
  name: 'Navigation2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-navigation-2"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 19 21 12 17 5 21 12 2"
      }
    })]);
  }
};

var NavigationIcon = {
  name: 'NavigationIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-navigation"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "3 11 22 2 13 21 11 13 3 11"
      }
    })]);
  }
};

var OctagonIcon = {
  name: 'OctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    })]);
  }
};

var PackageIcon = {
  name: 'PackageIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-package"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "16.5",
        y1: "9.4",
        x2: "7.5",
        y2: "4.21"
      }
    }), h("path", {
      attrs: {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
      }
    }), h("polyline", {
      attrs: {
        points: "3.27 6.96 12 12.01 20.73 6.96"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "22.08",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var PaperclipIcon = {
  name: 'PaperclipIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-paperclip"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
      }
    })]);
  }
};

var PauseCircleIcon = {
  name: 'PauseCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pause-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "15",
        x2: "10",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "15",
        x2: "14",
        y2: "9"
      }
    })]);
  }
};

var PauseIcon = {
  name: 'PauseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pause"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "6",
        y: "4",
        width: "4",
        height: "16"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "4",
        width: "4",
        height: "16"
      }
    })]);
  }
};

var PenToolIcon = {
  name: 'PenToolIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pen-tool"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 19l7-7 3 3-7 7-3-3z"
      }
    }), h("path", {
      attrs: {
        d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
      }
    }), h("path", {
      attrs: {
        d: "M2 2l7.586 7.586"
      }
    }), h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "2"
      }
    })]);
  }
};

var PercentIcon = {
  name: 'PercentIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-percent"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "19",
        y1: "5",
        x2: "5",
        y2: "19"
      }
    }), h("circle", {
      attrs: {
        cx: "6.5",
        cy: "6.5",
        r: "2.5"
      }
    }), h("circle", {
      attrs: {
        cx: "17.5",
        cy: "17.5",
        r: "2.5"
      }
    })]);
  }
};

var PhoneCallIcon = {
  name: 'PhoneCallIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-call"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneForwardedIcon = {
  name: 'PhoneForwardedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-forwarded"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "19 1 23 5 19 9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "5",
        x2: "23",
        y2: "5"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneIncomingIcon = {
  name: 'PhoneIncomingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-incoming"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 2 16 8 22 8"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "16",
        y2: "8"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneMissedIcon = {
  name: 'PhoneMissedIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-missed"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "17",
        y2: "7"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "1",
        x2: "23",
        y2: "7"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneOffIcon = {
  name: 'PhoneOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "1",
        x2: "1",
        y2: "23"
      }
    })]);
  }
};

var PhoneOutgoingIcon = {
  name: 'PhoneOutgoingIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone-outgoing"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 7 23 1 17 1"
      }
    }), h("line", {
      attrs: {
        x1: "16",
        y1: "8",
        x2: "23",
        y2: "1"
      }
    }), h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PhoneIcon = {
  name: 'PhoneIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-phone"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    })]);
  }
};

var PieChartIcon = {
  name: 'PieChartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pie-chart"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21.21 15.89A10 10 0 1 1 8 2.83"
      }
    }), h("path", {
      attrs: {
        d: "M22 12A10 10 0 0 0 12 2v10z"
      }
    })]);
  }
};

var PlayCircleIcon = {
  name: 'PlayCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-play-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("polygon", {
      attrs: {
        points: "10 8 16 12 10 16 10 8"
      }
    })]);
  }
};

var PlayIcon = {
  name: 'PlayIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-play"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "5 3 19 12 5 21 5 3"
      }
    })]);
  }
};

var PlusCircleIcon = {
  name: 'PlusCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var PlusSquareIcon = {
  name: 'PlusSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "12",
        x2: "16",
        y2: "12"
      }
    })]);
  }
};

var PlusIcon = {
  name: 'PlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-plus"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "12",
        y1: "5",
        x2: "12",
        y2: "19"
      }
    }), h("line", {
      attrs: {
        x1: "5",
        y1: "12",
        x2: "19",
        y2: "12"
      }
    })]);
  }
};

var PocketIcon = {
  name: 'PocketIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-pocket"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
      }
    }), h("polyline", {
      attrs: {
        points: "8 10 12 14 16 10"
      }
    })]);
  }
};

var PowerIcon = {
  name: 'PowerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-power"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M18.36 6.64a9 9 0 1 1-12.73 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var PrinterIcon = {
  name: 'PrinterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-printer"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "6 9 6 2 18 2 18 9"
      }
    }), h("path", {
      attrs: {
        d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
      }
    }), h("rect", {
      attrs: {
        x: "6",
        y: "14",
        width: "12",
        height: "8"
      }
    })]);
  }
};

var RadioIcon = {
  name: 'RadioIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-radio"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "2"
      }
    }), h("path", {
      attrs: {
        d: "M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
      }
    })]);
  }
};

var RefreshCcwIcon = {
  name: 'RefreshCcwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-refresh-ccw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "1 4 1 10 7 10"
      }
    }), h("polyline", {
      attrs: {
        points: "23 20 23 14 17 14"
      }
    }), h("path", {
      attrs: {
        d: "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"
      }
    })]);
  }
};

var RefreshCwIcon = {
  name: 'RefreshCwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-refresh-cw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 4 23 10 17 10"
      }
    }), h("polyline", {
      attrs: {
        points: "1 20 1 14 7 14"
      }
    }), h("path", {
      attrs: {
        d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
      }
    })]);
  }
};

var RepeatIcon = {
  name: 'RepeatIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-repeat"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "17 1 21 5 17 9"
      }
    }), h("path", {
      attrs: {
        d: "M3 11V9a4 4 0 0 1 4-4h14"
      }
    }), h("polyline", {
      attrs: {
        points: "7 23 3 19 7 15"
      }
    }), h("path", {
      attrs: {
        d: "M21 13v2a4 4 0 0 1-4 4H3"
      }
    })]);
  }
};

var RewindIcon = {
  name: 'RewindIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rewind"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 19 2 12 11 5 11 19"
      }
    }), h("polygon", {
      attrs: {
        points: "22 19 13 12 22 5 22 19"
      }
    })]);
  }
};

var RotateCcwIcon = {
  name: 'RotateCcwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rotate-ccw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "1 4 1 10 7 10"
      }
    }), h("path", {
      attrs: {
        d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10"
      }
    })]);
  }
};

var RotateCwIcon = {
  name: 'RotateCwIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rotate-cw"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 4 23 10 17 10"
      }
    }), h("path", {
      attrs: {
        d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
      }
    })]);
  }
};

var RssIcon = {
  name: 'RssIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-rss"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 11a9 9 0 0 1 9 9"
      }
    }), h("path", {
      attrs: {
        d: "M4 4a16 16 0 0 1 16 16"
      }
    }), h("circle", {
      attrs: {
        cx: "5",
        cy: "19",
        r: "1"
      }
    })]);
  }
};

var SaveIcon = {
  name: 'SaveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-save"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
      }
    }), h("polyline", {
      attrs: {
        points: "17 21 17 13 7 13 7 21"
      }
    }), h("polyline", {
      attrs: {
        points: "7 3 7 8 15 8"
      }
    })]);
  }
};

var ScissorsIcon = {
  name: 'ScissorsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-scissors"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "6",
        cy: "6",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "18",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "4",
        x2: "8.12",
        y2: "15.88"
      }
    }), h("line", {
      attrs: {
        x1: "14.47",
        y1: "14.48",
        x2: "20",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "8.12",
        y1: "8.12",
        x2: "12",
        y2: "12"
      }
    })]);
  }
};

var SearchIcon = {
  name: 'SearchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-search"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    })]);
  }
};

var SendIcon = {
  name: 'SendIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-send"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "2",
        x2: "11",
        y2: "13"
      }
    }), h("polygon", {
      attrs: {
        points: "22 2 15 22 11 13 2 9 22 2"
      }
    })]);
  }
};

var ServerIcon = {
  name: 'ServerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-server"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "2",
        width: "20",
        height: "8",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "2",
        y: "14",
        width: "20",
        height: "8",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "6",
        x2: "6.01",
        y2: "6"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "18",
        x2: "6.01",
        y2: "18"
      }
    })]);
  }
};

var SettingsIcon = {
  name: 'SettingsIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-settings"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "3"
      }
    }), h("path", {
      attrs: {
        d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      }
    })]);
  }
};

var Share2Icon = {
  name: 'Share2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share-2"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "18",
        cy: "5",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "6",
        cy: "12",
        r: "3"
      }
    }), h("circle", {
      attrs: {
        cx: "18",
        cy: "19",
        r: "3"
      }
    }), h("line", {
      attrs: {
        x1: "8.59",
        y1: "13.51",
        x2: "15.42",
        y2: "17.49"
      }
    }), h("line", {
      attrs: {
        x1: "15.41",
        y1: "6.51",
        x2: "8.59",
        y2: "10.49"
      }
    })]);
  }
};

var ShareIcon = {
  name: 'ShareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-share"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
      }
    }), h("polyline", {
      attrs: {
        points: "16 6 12 2 8 6"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "15"
      }
    })]);
  }
};

var ShieldOffIcon = {
  name: 'ShieldOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shield-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"
      }
    }), h("path", {
      attrs: {
        d: "M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var ShieldIcon = {
  name: 'ShieldIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shield"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      }
    })]);
  }
};

var ShoppingBagIcon = {
  name: 'ShoppingBagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shopping-bag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
      }
    }), h("line", {
      attrs: {
        x1: "3",
        y1: "6",
        x2: "21",
        y2: "6"
      }
    }), h("path", {
      attrs: {
        d: "M16 10a4 4 0 0 1-8 0"
      }
    })]);
  }
};

var ShoppingCartIcon = {
  name: 'ShoppingCartIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shopping-cart"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "9",
        cy: "21",
        r: "1"
      }
    }), h("circle", {
      attrs: {
        cx: "20",
        cy: "21",
        r: "1"
      }
    }), h("path", {
      attrs: {
        d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
      }
    })]);
  }
};

var ShuffleIcon = {
  name: 'ShuffleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-shuffle"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 3 21 3 21 8"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "20",
        x2: "21",
        y2: "3"
      }
    }), h("polyline", {
      attrs: {
        points: "21 16 21 21 16 21"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "15",
        x2: "21",
        y2: "21"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "4",
        x2: "9",
        y2: "9"
      }
    })]);
  }
};

var SidebarIcon = {
  name: 'SidebarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sidebar"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "3",
        x2: "9",
        y2: "21"
      }
    })]);
  }
};

var SkipBackIcon = {
  name: 'SkipBackIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-skip-back"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "19 20 9 12 19 4 19 20"
      }
    }), h("line", {
      attrs: {
        x1: "5",
        y1: "19",
        x2: "5",
        y2: "5"
      }
    })]);
  }
};

var SkipForwardIcon = {
  name: 'SkipForwardIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-skip-forward"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "5 4 15 12 5 20 5 4"
      }
    }), h("line", {
      attrs: {
        x1: "19",
        y1: "5",
        x2: "19",
        y2: "19"
      }
    })]);
  }
};

var SlackIcon = {
  name: 'SlackIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-slack"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"
      }
    }), h("path", {
      attrs: {
        d: "M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"
      }
    }), h("path", {
      attrs: {
        d: "M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"
      }
    })]);
  }
};

var SlashIcon = {
  name: 'SlashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-slash"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "4.93",
        y1: "4.93",
        x2: "19.07",
        y2: "19.07"
      }
    })]);
  }
};

var SlidersIcon = {
  name: 'SlidersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sliders"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "4",
        y1: "21",
        x2: "4",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "10",
        x2: "4",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "8",
        x2: "12",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "21",
        x2: "20",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "12",
        x2: "20",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "14",
        x2: "7",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "8",
        x2: "15",
        y2: "8"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "16",
        x2: "23",
        y2: "16"
      }
    })]);
  }
};

var SmartphoneIcon = {
  name: 'SmartphoneIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-smartphone"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "5",
        y: "2",
        width: "14",
        height: "20",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }
    })]);
  }
};

var SmileIcon = {
  name: 'SmileIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-smile"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("path", {
      attrs: {
        d: "M8 14s1.5 2 4 2 4-2 4-2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "9.01",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "15.01",
        y2: "9"
      }
    })]);
  }
};

var SpeakerIcon = {
  name: 'SpeakerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-speaker"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
        ry: "2"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "14",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "6",
        x2: "12.01",
        y2: "6"
      }
    })]);
  }
};

var SquareIcon = {
  name: 'SquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    })]);
  }
};

var StarIcon = {
  name: 'StarIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-star"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    })]);
  }
};

var StopCircleIcon = {
  name: 'StopCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-stop-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("rect", {
      attrs: {
        x: "9",
        y: "9",
        width: "6",
        height: "6"
      }
    })]);
  }
};

var SunIcon = {
  name: 'SunIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sun"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "1",
        x2: "12",
        y2: "3"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "21",
        x2: "12",
        y2: "23"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "4.22",
        x2: "5.64",
        y2: "5.64"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "18.36",
        x2: "19.78",
        y2: "19.78"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "12",
        x2: "3",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "12",
        x2: "23",
        y2: "12"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "19.78",
        x2: "5.64",
        y2: "18.36"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "5.64",
        x2: "19.78",
        y2: "4.22"
      }
    })]);
  }
};

var SunriseIcon = {
  name: 'SunriseIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunrise"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 18a5 5 0 0 0-10 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "2",
        x2: "12",
        y2: "9"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "10.22",
        x2: "5.64",
        y2: "11.64"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "23",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "11.64",
        x2: "19.78",
        y2: "10.22"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "22",
        x2: "1",
        y2: "22"
      }
    }), h("polyline", {
      attrs: {
        points: "8 6 12 2 16 6"
      }
    })]);
  }
};

var SunsetIcon = {
  name: 'SunsetIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-sunset"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 18a5 5 0 0 0-10 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "9",
        x2: "12",
        y2: "2"
      }
    }), h("line", {
      attrs: {
        x1: "4.22",
        y1: "10.22",
        x2: "5.64",
        y2: "11.64"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "18",
        x2: "3",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "18",
        x2: "23",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "18.36",
        y1: "11.64",
        x2: "19.78",
        y2: "10.22"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "22",
        x2: "1",
        y2: "22"
      }
    }), h("polyline", {
      attrs: {
        points: "16 5 12 9 8 5"
      }
    })]);
  }
};

var TabletIcon = {
  name: 'TabletIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tablet"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "4",
        y: "2",
        width: "16",
        height: "20",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18"
      }
    })]);
  }
};

var TagIcon = {
  name: 'TagIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tag"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
      }
    }), h("line", {
      attrs: {
        x1: "7",
        y1: "7",
        x2: "7.01",
        y2: "7"
      }
    })]);
  }
};

var TargetIcon = {
  name: 'TargetIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-target"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "6"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "2"
      }
    })]);
  }
};

var TerminalIcon = {
  name: 'TerminalIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-terminal"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 17 10 11 4 5"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "19",
        x2: "20",
        y2: "19"
      }
    })]);
  }
};

var ThermometerIcon = {
  name: 'ThermometerIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thermometer"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
      }
    })]);
  }
};

var ThumbsDownIcon = {
  name: 'ThumbsDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thumbs-down"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
      }
    })]);
  }
};

var ThumbsUpIcon = {
  name: 'ThumbsUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-thumbs-up"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
      }
    })]);
  }
};

var ToggleLeftIcon = {
  name: 'ToggleLeftIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-toggle-left"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "22",
        height: "14",
        rx: "7",
        ry: "7"
      }
    }), h("circle", {
      attrs: {
        cx: "8",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var ToggleRightIcon = {
  name: 'ToggleRightIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-toggle-right"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "22",
        height: "14",
        rx: "7",
        ry: "7"
      }
    }), h("circle", {
      attrs: {
        cx: "16",
        cy: "12",
        r: "3"
      }
    })]);
  }
};

var ToolIcon = {
  name: 'ToolIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tool"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
      }
    })]);
  }
};

var Trash2Icon = {
  name: 'Trash2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trash-2"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "3 6 5 6 21 6"
      }
    }), h("path", {
      attrs: {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "11",
        x2: "10",
        y2: "17"
      }
    }), h("line", {
      attrs: {
        x1: "14",
        y1: "11",
        x2: "14",
        y2: "17"
      }
    })]);
  }
};

var TrashIcon = {
  name: 'TrashIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trash"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "3 6 5 6 21 6"
      }
    }), h("path", {
      attrs: {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      }
    })]);
  }
};

var TrelloIcon = {
  name: 'TrelloIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trello"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("rect", {
      attrs: {
        x: "7",
        y: "7",
        width: "3",
        height: "9"
      }
    }), h("rect", {
      attrs: {
        x: "14",
        y: "7",
        width: "3",
        height: "5"
      }
    })]);
  }
};

var TrendingDownIcon = {
  name: 'TrendingDownIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trending-down"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 18 13.5 8.5 8.5 13.5 1 6"
      }
    }), h("polyline", {
      attrs: {
        points: "17 18 23 18 23 12"
      }
    })]);
  }
};

var TrendingUpIcon = {
  name: 'TrendingUpIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-trending-up"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "23 6 13.5 15.5 8.5 10.5 1 18"
      }
    }), h("polyline", {
      attrs: {
        points: "17 6 23 6 23 12"
      }
    })]);
  }
};

var TriangleIcon = {
  name: 'TriangleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-triangle"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
      }
    })]);
  }
};

var TruckIcon = {
  name: 'TruckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-truck"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "1",
        y: "3",
        width: "15",
        height: "13"
      }
    }), h("polygon", {
      attrs: {
        points: "16 8 20 8 23 11 23 16 16 16 16 8"
      }
    }), h("circle", {
      attrs: {
        cx: "5.5",
        cy: "18.5",
        r: "2.5"
      }
    }), h("circle", {
      attrs: {
        cx: "18.5",
        cy: "18.5",
        r: "2.5"
      }
    })]);
  }
};

var TvIcon = {
  name: 'TvIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-tv"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "2",
        y: "7",
        width: "20",
        height: "15",
        rx: "2",
        ry: "2"
      }
    }), h("polyline", {
      attrs: {
        points: "17 2 12 7 7 2"
      }
    })]);
  }
};

var TwitchIcon = {
  name: 'TwitchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-twitch"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
      }
    })]);
  }
};

var TwitterIcon = {
  name: 'TwitterIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-twitter"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      }
    })]);
  }
};

var TypeIcon = {
  name: 'TypeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-type"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "4 7 4 4 20 4 20 7"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "20",
        x2: "15",
        y2: "20"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "4",
        x2: "12",
        y2: "20"
      }
    })]);
  }
};

var UmbrellaIcon = {
  name: 'UmbrellaIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-umbrella"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
      }
    })]);
  }
};

var UnderlineIcon = {
  name: 'UnderlineIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-underline"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"
      }
    }), h("line", {
      attrs: {
        x1: "4",
        y1: "21",
        x2: "20",
        y2: "21"
      }
    })]);
  }
};

var UnlockIcon = {
  name: 'UnlockIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-unlock"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "11",
        width: "18",
        height: "11",
        rx: "2",
        ry: "2"
      }
    }), h("path", {
      attrs: {
        d: "M7 11V7a5 5 0 0 1 9.9-1"
      }
    })]);
  }
};

var UploadCloudIcon = {
  name: 'UploadCloudIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-upload-cloud"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "16 16 12 12 8 16"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "12",
        x2: "12",
        y2: "21"
      }
    }), h("path", {
      attrs: {
        d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
      }
    }), h("polyline", {
      attrs: {
        points: "16 16 12 12 8 16"
      }
    })]);
  }
};

var UploadIcon = {
  name: 'UploadIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-upload"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    }), h("polyline", {
      attrs: {
        points: "17 8 12 3 7 8"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "3",
        x2: "12",
        y2: "15"
      }
    })]);
  }
};

var UserCheckIcon = {
  name: 'UserCheckIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-check"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("polyline", {
      attrs: {
        points: "17 11 19 13 23 9"
      }
    })]);
  }
};

var UserMinusIcon = {
  name: 'UserMinusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-minus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "11",
        x2: "17",
        y2: "11"
      }
    })]);
  }
};

var UserPlusIcon = {
  name: 'UserPlusIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-plus"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "20",
        y1: "8",
        x2: "20",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "11",
        x2: "17",
        y2: "11"
      }
    })]);
  }
};

var UserXIcon = {
  name: 'UserXIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user-x"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "8.5",
        cy: "7",
        r: "4"
      }
    }), h("line", {
      attrs: {
        x1: "18",
        y1: "8",
        x2: "23",
        y2: "13"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "8",
        x2: "18",
        y2: "13"
      }
    })]);
  }
};

var UserIcon = {
  name: 'UserIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-user"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "12",
        cy: "7",
        r: "4"
      }
    })]);
  }
};

var UsersIcon = {
  name: 'UsersIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-users"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
      }
    }), h("circle", {
      attrs: {
        cx: "9",
        cy: "7",
        r: "4"
      }
    }), h("path", {
      attrs: {
        d: "M23 21v-2a4 4 0 0 0-3-3.87"
      }
    }), h("path", {
      attrs: {
        d: "M16 3.13a4 4 0 0 1 0 7.75"
      }
    })]);
  }
};

var VideoOffIcon = {
  name: 'VideoOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-video-off"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var VideoIcon = {
  name: 'VideoIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-video"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "23 7 16 12 23 17 23 7"
      }
    }), h("rect", {
      attrs: {
        x: "1",
        y: "5",
        width: "15",
        height: "14",
        rx: "2",
        ry: "2"
      }
    })]);
  }
};

var VoicemailIcon = {
  name: 'VoicemailIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-voicemail"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "5.5",
        cy: "11.5",
        r: "4.5"
      }
    }), h("circle", {
      attrs: {
        cx: "18.5",
        cy: "11.5",
        r: "4.5"
      }
    }), h("line", {
      attrs: {
        x1: "5.5",
        y1: "16",
        x2: "18.5",
        y2: "16"
      }
    })]);
  }
};

var Volume1Icon = {
  name: 'Volume1Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-1"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("path", {
      attrs: {
        d: "M15.54 8.46a5 5 0 0 1 0 7.07"
      }
    })]);
  }
};

var Volume2Icon = {
  name: 'Volume2Icon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-2"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("path", {
      attrs: {
        d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
      }
    })]);
  }
};

var VolumeXIcon = {
  name: 'VolumeXIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume-x"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    }), h("line", {
      attrs: {
        x1: "23",
        y1: "9",
        x2: "17",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "17",
        y1: "9",
        x2: "23",
        y2: "15"
      }
    })]);
  }
};

var VolumeIcon = {
  name: 'VolumeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-volume"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
      }
    })]);
  }
};

var WatchIcon = {
  name: 'WatchIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-watch"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "7"
      }
    }), h("polyline", {
      attrs: {
        points: "12 9 12 12 13.5 13.5"
      }
    }), h("path", {
      attrs: {
        d: "M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
      }
    })]);
  }
};

var WifiOffIcon = {
  name: 'WifiOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wifi-off"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    }), h("path", {
      attrs: {
        d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55"
      }
    }), h("path", {
      attrs: {
        d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39"
      }
    }), h("path", {
      attrs: {
        d: "M10.71 5.05A16 16 0 0 1 22.58 9"
      }
    }), h("path", {
      attrs: {
        d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88"
      }
    }), h("path", {
      attrs: {
        d: "M8.53 16.11a6 6 0 0 1 6.95 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12.01",
        y2: "20"
      }
    })]);
  }
};

var WifiIcon = {
  name: 'WifiIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wifi"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M5 12.55a11 11 0 0 1 14.08 0"
      }
    }), h("path", {
      attrs: {
        d: "M1.42 9a16 16 0 0 1 21.16 0"
      }
    }), h("path", {
      attrs: {
        d: "M8.53 16.11a6 6 0 0 1 6.95 0"
      }
    }), h("line", {
      attrs: {
        x1: "12",
        y1: "20",
        x2: "12.01",
        y2: "20"
      }
    })]);
  }
};

var WindIcon = {
  name: 'WindIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-wind"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
      }
    })]);
  }
};

var XCircleIcon = {
  name: 'XCircleIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-circle"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "12",
        cy: "12",
        r: "10"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var XOctagonIcon = {
  name: 'XOctagonIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-octagon"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    })]);
  }
};

var XSquareIcon = {
  name: 'XSquareIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x-square"
    }, ctx.data]), [h("rect", {
      attrs: {
        x: "3",
        y: "3",
        width: "18",
        height: "18",
        rx: "2",
        ry: "2"
      }
    }), h("line", {
      attrs: {
        x1: "9",
        y1: "9",
        x2: "15",
        y2: "15"
      }
    }), h("line", {
      attrs: {
        x1: "15",
        y1: "9",
        x2: "9",
        y2: "15"
      }
    })]);
  }
};

var XIcon = {
  name: 'XIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-x"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }
    })]);
  }
};

var YoutubeIcon = {
  name: 'YoutubeIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-youtube"
    }, ctx.data]), [h("path", {
      attrs: {
        d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
      }
    }), h("polygon", {
      attrs: {
        points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
      }
    })]);
  }
};

var ZapOffIcon = {
  name: 'ZapOffIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zap-off"
    }, ctx.data]), [h("polyline", {
      attrs: {
        points: "12.41 6.75 13 2 10.57 4.92"
      }
    }), h("polyline", {
      attrs: {
        points: "18.57 12.91 21 10 15.66 10"
      }
    }), h("polyline", {
      attrs: {
        points: "8 8 3 14 12 14 11 22 16 16"
      }
    }), h("line", {
      attrs: {
        x1: "1",
        y1: "1",
        x2: "23",
        y2: "23"
      }
    })]);
  }
};

var ZapIcon = {
  name: 'ZapIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zap"
    }, ctx.data]), [h("polygon", {
      attrs: {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      }
    })]);
  }
};

var ZoomInIcon = {
  name: 'ZoomInIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zoom-in"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    }), h("line", {
      attrs: {
        x1: "11",
        y1: "8",
        x2: "11",
        y2: "14"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "11",
        x2: "14",
        y2: "11"
      }
    })]);
  }
};

var ZoomOutIcon = {
  name: 'ZoomOutIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-zoom-out"
    }, ctx.data]), [h("circle", {
      attrs: {
        cx: "11",
        cy: "11",
        r: "8"
      }
    }), h("line", {
      attrs: {
        x1: "21",
        y1: "21",
        x2: "16.65",
        y2: "16.65"
      }
    }), h("line", {
      attrs: {
        x1: "8",
        y1: "11",
        x2: "14",
        y2: "11"
      }
    })]);
  }
};




/***/ }),

/***/ "./resources/js/components/columns/BColumn.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/columns/BColumn.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BColumn_vue_vue_type_template_id_fa9700ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BColumn.vue?vue&type=template&id=fa9700ea&scoped=true& */ "./resources/js/components/columns/BColumn.vue?vue&type=template&id=fa9700ea&scoped=true&");
/* harmony import */ var _BColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BColumn.vue?vue&type=script&lang=js& */ "./resources/js/components/columns/BColumn.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BColumn_vue_vue_type_template_id_fa9700ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BColumn_vue_vue_type_template_id_fa9700ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fa9700ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/columns/BColumn.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/fieldtypes/Buildamic.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/fieldtypes/Buildamic.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Buildamic_vue_vue_type_template_id_e17d23e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buildamic.vue?vue&type=template&id=e17d23e2&scoped=true& */ "./resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=e17d23e2&scoped=true&");
/* harmony import */ var _Buildamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buildamic.vue?vue&type=script&lang=js& */ "./resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Buildamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Buildamic_vue_vue_type_template_id_e17d23e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Buildamic_vue_vue_type_template_id_e17d23e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e17d23e2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fieldtypes/Buildamic.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/rows/BRow.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/rows/BRow.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BRow_vue_vue_type_template_id_3443c3f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BRow.vue?vue&type=template&id=3443c3f3&scoped=true& */ "./resources/js/components/rows/BRow.vue?vue&type=template&id=3443c3f3&scoped=true&");
/* harmony import */ var _BRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BRow.vue?vue&type=script&lang=js& */ "./resources/js/components/rows/BRow.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BRow_vue_vue_type_template_id_3443c3f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BRow_vue_vue_type_template_id_3443c3f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3443c3f3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/rows/BRow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/rows/ColumnSelector.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/rows/ColumnSelector.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ColumnSelector_vue_vue_type_template_id_b198e620_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColumnSelector.vue?vue&type=template&id=b198e620&scoped=true& */ "./resources/js/components/rows/ColumnSelector.vue?vue&type=template&id=b198e620&scoped=true&");
/* harmony import */ var _ColumnSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColumnSelector.vue?vue&type=script&lang=js& */ "./resources/js/components/rows/ColumnSelector.vue?vue&type=script&lang=js&");
/* harmony import */ var _ColumnSelector_vue_vue_type_style_index_0_id_b198e620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css& */ "./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _ColumnSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ColumnSelector_vue_vue_type_template_id_b198e620_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ColumnSelector_vue_vue_type_template_id_b198e620_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b198e620",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/rows/ColumnSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/rows/RowControls.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/rows/RowControls.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RowControls_vue_vue_type_template_id_62c6d6b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RowControls.vue?vue&type=template&id=62c6d6b6& */ "./resources/js/components/rows/RowControls.vue?vue&type=template&id=62c6d6b6&");
/* harmony import */ var _RowControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RowControls.vue?vue&type=script&lang=js& */ "./resources/js/components/rows/RowControls.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RowControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RowControls_vue_vue_type_template_id_62c6d6b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _RowControls_vue_vue_type_template_id_62c6d6b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/rows/RowControls.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/sections/BSection.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/sections/BSection.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BSection_vue_vue_type_template_id_5f8e1a49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BSection.vue?vue&type=template&id=5f8e1a49&scoped=true& */ "./resources/js/components/sections/BSection.vue?vue&type=template&id=5f8e1a49&scoped=true&");
/* harmony import */ var _BSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BSection.vue?vue&type=script&lang=js& */ "./resources/js/components/sections/BSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BSection_vue_vue_type_template_id_5f8e1a49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BSection_vue_vue_type_template_id_5f8e1a49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5f8e1a49",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sections/BSection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/sections/SectionControls.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/sections/SectionControls.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SectionControls_vue_vue_type_template_id_8f698df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionControls.vue?vue&type=template&id=8f698df6& */ "./resources/js/components/sections/SectionControls.vue?vue&type=template&id=8f698df6&");
/* harmony import */ var _SectionControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionControls.vue?vue&type=script&lang=js& */ "./resources/js/components/sections/SectionControls.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SectionControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SectionControls_vue_vue_type_template_id_8f698df6___WEBPACK_IMPORTED_MODULE_0__.render,
  _SectionControls_vue_vue_type_template_id_8f698df6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sections/SectionControls.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/columns/BColumn.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/columns/BColumn.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BColumn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/columns/BColumn.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Buildamic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/Buildamic.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/rows/BRow.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/rows/BRow.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BRow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/BRow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/rows/ColumnSelector.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/rows/ColumnSelector.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColumnSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/rows/RowControls.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/rows/RowControls.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RowControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RowControls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/RowControls.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RowControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/sections/BSection.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/sections/BSection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/BSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/sections/SectionControls.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/sections/SectionControls.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionControls.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/SectionControls.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionControls_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/columns/BColumn.vue?vue&type=template&id=fa9700ea&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/columns/BColumn.vue?vue&type=template&id=fa9700ea&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BColumn_vue_vue_type_template_id_fa9700ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BColumn_vue_vue_type_template_id_fa9700ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BColumn_vue_vue_type_template_id_fa9700ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BColumn.vue?vue&type=template&id=fa9700ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/columns/BColumn.vue?vue&type=template&id=fa9700ea&scoped=true&");


/***/ }),

/***/ "./resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=e17d23e2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=e17d23e2&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_template_id_e17d23e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_template_id_e17d23e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buildamic_vue_vue_type_template_id_e17d23e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Buildamic.vue?vue&type=template&id=e17d23e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=e17d23e2&scoped=true&");


/***/ }),

/***/ "./resources/js/components/rows/BRow.vue?vue&type=template&id=3443c3f3&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/rows/BRow.vue?vue&type=template&id=3443c3f3&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BRow_vue_vue_type_template_id_3443c3f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BRow_vue_vue_type_template_id_3443c3f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BRow_vue_vue_type_template_id_3443c3f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BRow.vue?vue&type=template&id=3443c3f3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/BRow.vue?vue&type=template&id=3443c3f3&scoped=true&");


/***/ }),

/***/ "./resources/js/components/rows/ColumnSelector.vue?vue&type=template&id=b198e620&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/rows/ColumnSelector.vue?vue&type=template&id=b198e620&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_template_id_b198e620_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_template_id_b198e620_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_template_id_b198e620_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColumnSelector.vue?vue&type=template&id=b198e620&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=template&id=b198e620&scoped=true&");


/***/ }),

/***/ "./resources/js/components/rows/RowControls.vue?vue&type=template&id=62c6d6b6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/rows/RowControls.vue?vue&type=template&id=62c6d6b6& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowControls_vue_vue_type_template_id_62c6d6b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowControls_vue_vue_type_template_id_62c6d6b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RowControls_vue_vue_type_template_id_62c6d6b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RowControls.vue?vue&type=template&id=62c6d6b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/RowControls.vue?vue&type=template&id=62c6d6b6&");


/***/ }),

/***/ "./resources/js/components/sections/BSection.vue?vue&type=template&id=5f8e1a49&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/sections/BSection.vue?vue&type=template&id=5f8e1a49&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BSection_vue_vue_type_template_id_5f8e1a49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BSection_vue_vue_type_template_id_5f8e1a49_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BSection_vue_vue_type_template_id_5f8e1a49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BSection.vue?vue&type=template&id=5f8e1a49&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/BSection.vue?vue&type=template&id=5f8e1a49&scoped=true&");


/***/ }),

/***/ "./resources/js/components/sections/SectionControls.vue?vue&type=template&id=8f698df6&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/sections/SectionControls.vue?vue&type=template&id=8f698df6& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionControls_vue_vue_type_template_id_8f698df6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionControls_vue_vue_type_template_id_8f698df6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionControls_vue_vue_type_template_id_8f698df6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SectionControls.vue?vue&type=template&id=8f698df6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/SectionControls.vue?vue&type=template&id=8f698df6&");


/***/ }),

/***/ "./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_style_index_0_id_b198e620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_style_index_0_id_b198e620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_style_index_0_id_b198e620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_style_index_0_id_b198e620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ColumnSelector_vue_vue_type_style_index_0_id_b198e620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/columns/BColumn.vue?vue&type=template&id=fa9700ea&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/columns/BColumn.vue?vue&type=template&id=fa9700ea&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "buildamic-column", class: _vm.columnClass },
    [
      _c(
        "vue-draggable",
        {
          attrs: {
            list: _vm.column.value,
            group: { name: "columns" },
            "ghost-class": "ghost"
          }
        },
        [
          _vm._l(_vm.column.value, function(field, fieldKey) {
            return [
              field.type === "field"
                ? _c(
                    "div",
                    {
                      key: field.uuid,
                      staticClass: "p-5 bg-red",
                      class: [field.config.type + "-fieldtype"]
                    },
                    [
                      _c(field.config.handle + "-fieldtype", {
                        tag: "component",
                        attrs: {
                          config: field.config,
                          value: field.value,
                          meta: field.meta,
                          handle: field.config.handle
                        },
                        on: {
                          input: function($event) {
                            return _vm.updateField(fieldKey, $event)
                          },
                          "meta-updated": function($event) {
                            return _vm.$emit("meta-updated", $event)
                          },
                          focus: function($event) {
                            return _vm.$emit("focus")
                          },
                          blur: function($event) {
                            return _vm.$emit("blur")
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          on: {
                            click: function($event) {
                              return _vm.removeField(fieldKey)
                            }
                          }
                        },
                        [_vm._v("\n          Remove Field\n        ")]
                      )
                    ],
                    1
                  )
                : _c(
                    "div",
                    { key: field.uuid, staticClass: "p-5 bg-red" },
                    [
                      _vm._v(
                        "\n        Field Set " +
                          _vm._s(field.uuid) +
                          "\n\n        "
                      ),
                      _vm._l(
                        _vm.fieldDefaults.fieldsets[field.config.handle][
                          "config"
                        ]["fields"],
                        function(subField, subFieldKey) {
                          return _c(
                            "div",
                            { key: subFieldKey, staticClass: "p-5 bg-blue" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "p-5 bg-purple",
                                  class: [subField.field.type + "-fieldtype"]
                                },
                                [
                                  _vm._v(
                                    "\n            Field " +
                                      _vm._s(subField.field.display) +
                                      "\n\n            "
                                  ),
                                  _c(subField.field.type + "-fieldtype", {
                                    tag: "component",
                                    attrs: {
                                      config: subField.field,
                                      value: field.value[subField.handle],
                                      meta:
                                        _vm.fieldDefaults.fieldsets[
                                          field.config.handle
                                        ]["meta"][subField.handle],
                                      handle: subField.handle
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.updateFieldSet(
                                          fieldKey,
                                          subField.handle,
                                          $event
                                        )
                                      },
                                      "meta-updated": function($event) {
                                        return _vm.$emit("meta-updated", $event)
                                      },
                                      focus: function($event) {
                                        return _vm.$emit("focus")
                                      },
                                      blur: function($event) {
                                        return _vm.$emit("blur")
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        }
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn",
                          on: {
                            click: function($event) {
                              return _vm.removeField(fieldKey)
                            }
                          }
                        },
                        [_vm._v("\n          Remove FieldSet\n        ")]
                      )
                    ],
                    2
                  )
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn",
          on: {
            click: function($event) {
              _vm.isSelectingNewField = true
            }
          }
        },
        [_vm._v("Add Field")]
      ),
      _vm._v(" "),
      _vm.isSelectingNewField
        ? _c(
            "stack",
            {
              attrs: { name: "field-stack" },
              on: {
                closed: function($event) {
                  _vm.isSelectingNewField = false
                }
              }
            },
            [
              _c("div", { staticClass: "h-full bg-white overflow-auto" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "bg-grey-20 px-3 py-1 border-b border-grey-30 text-lg font-medium flex items-center justify-between"
                  },
                  [
                    _vm._v(
                      "\n        " + _vm._s(_vm.__("Fieldtypes")) + "\n        "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn-close",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.isSelectingNewField = false
                          }
                        }
                      },
                      [_vm._v("\n          ×\n        ")]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "p-3 pt-0" }, [
                  _c("div", { staticClass: "fieldtype-selector" }, [
                    _c(
                      "div",
                      { staticClass: "fieldtype-list" },
                      _vm._l(_vm.fieldDefaults.fields, function(field, key) {
                        return _c("div", { key: key, staticClass: "p-1" }, [
                          _c(
                            "a",
                            {
                              staticClass:
                                "border flex items-center group w-full rounded shadow-sm py-1 px-2",
                              on: {
                                click: function($event) {
                                  return _vm.addField(field)
                                }
                              }
                            },
                            [
                              _c("svg-icon", {
                                staticClass:
                                  "h-4 w-4 text-grey-80 group-hover:text-blue",
                                attrs: { name: field.config.icon }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "pl-2 text-grey-80 group-hover:text-blue"
                                },
                                [_vm._v(_vm._s(_vm.__(field.config.display)))]
                              )
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=e17d23e2&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fieldtypes/Buildamic.vue?vue&type=template&id=e17d23e2&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "buildamic-fieldtype" },
    [
      _c(
        "vue-draggable",
        {
          staticClass: "flex flex-col gap-3",
          attrs: {
            list: _vm.sections,
            group: { name: "sections" },
            "ghost-class": "ghost"
          }
        },
        _vm._l(_vm.sections, function(section, sectionIndex) {
          return _c(
            "b-section",
            { key: section.uuid, attrs: { section: section } },
            [
              _c("section-controls", {
                attrs: { value: _vm.sections, index: sectionIndex }
              })
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      !_vm.sections.length
        ? _c("section-controls", { attrs: { value: _vm.sections } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/BRow.vue?vue&type=template&id=3443c3f3&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/BRow.vue?vue&type=template&id=3443c3f3&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "buildamic-row bg-green-light p-2" },
    [
      _vm._l(_vm.columns, function(column, columnKey) {
        return [_c("b-column", { key: columnKey, attrs: { column: column } })]
      }),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _c("column-selector", {
        attrs: { columns: _vm.columns, name: _vm.row.uuid + "-column-layouts" }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          on: {
            click: function($event) {
              return _vm.$modals.open(_vm.row.uuid + "-column-layouts")
            }
          }
        },
        [_vm._v("\n    Open Col\n  ")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=template&id=b198e620&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=template&id=b198e620&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    "vue-modal",
    {
      attrs: {
        name: _vm.name,
        scrollable: true,
        draggable: true,
        clickToClose: true,
        height: "auto"
      }
    },
    [
      _c("x-icon", {
        staticClass:
          "text-grey-80 cursor-pointer inset-y-0 m-2 absolute right-0",
        attrs: { size: "1.5x" },
        on: {
          click: function($event) {
            return _vm.$modals.close(_vm.name)
          }
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "p-6 bg-grey-40 text-grey-80" }, [
        _c("span", { staticClass: "block text-2xl text-grey-80 mb-4" }, [
          _vm._v("Choose column layout:")
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list-unstyled relative flex flex-wrap" },
          _vm._l(_vm.layouts, function(layout) {
            return _c(
              "li",
              {
                key: layout,
                staticClass:
                  "column-section-wrapper flex-shrink-0 flex-grow px-2 mb-0 cursor-pointer",
                on: {
                  click: function($event) {
                    return _vm.changeLayout(layout)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "mb-2 flex w-full bg-grey-60 rounded p-1 col-gap-1"
                  },
                  _vm._l(_vm.gridConversion(layout), function(colClass, index) {
                    return _c("div", {
                      key: _vm.name + index,
                      staticClass: "bg-grey-30 h-12 col",
                      class: colClass
                    })
                  }),
                  0
                )
              ]
            )
          }),
          0
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/RowControls.vue?vue&type=template&id=62c6d6b6&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/RowControls.vue?vue&type=template&id=62c6d6b6& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    {
      staticClass: "p-4 pt-0 flex justify-center items-center text-center",
      attrs: { "data-testid": "row-controls" }
    },
    [
      _c(
        "a",
        {
          staticClass: "flex pr-6 items-center justify-center",
          attrs: { href: "#", "data-testid": "row-add" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.addModule($event)
            }
          }
        },
        [_c("plus-circle-icon", { staticClass: "mr-2" }), _vm._v(" Add Row")],
        1
      ),
      _vm._v(" "),
      _vm.value.length
        ? _c(
            "a",
            {
              staticClass: "flex pr-6 items-center justify-center",
              attrs: { href: "#", "data-testid": "row-remove" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.removeModule($event)
                }
              }
            },
            [
              _c("plus-circle-icon", { staticClass: "mr-2" }),
              _vm._v(" Remove row")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "flex pr-6 items-center justify-center",
          attrs: { href: "#" }
        },
        [
          _c("plus-circle-icon", { staticClass: "mr-2" }),
          _vm._v(" Add row Separator")
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/BSection.vue?vue&type=template&id=5f8e1a49&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/BSection.vue?vue&type=template&id=5f8e1a49&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    { staticClass: "buildamic-section p-4 bg-blue" },
    [
      _c(
        "vue-draggable",
        {
          staticClass: "flex flex-col gap-3",
          attrs: {
            list: _vm.rows,
            group: { name: "rows" },
            "ghost-class": "ghost"
          }
        },
        [
          _vm._l(_vm.rows, function(row, rowIndex) {
            return [
              _vm.rows.length
                ? _c(
                    "b-row",
                    {
                      key: "row-" + row.uuid,
                      attrs: { rowIndex: rowIndex, row: row, rows: _vm.rows }
                    },
                    [_c("row-controls", { attrs: { value: _vm.rows } })],
                    1
                  )
                : _vm._e()
            ]
          }),
          _vm._v(" "),
          !_vm.rows.length
            ? _c("row-controls", { attrs: { value: _vm.rows } })
            : _vm._e(),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/SectionControls.vue?vue&type=template&id=8f698df6&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/sections/SectionControls.vue?vue&type=template&id=8f698df6& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    {
      staticClass: "p-4 pt-0 flex justify-center items-center text-center",
      attrs: { "data-testid": "section-controls" }
    },
    [
      _c(
        "a",
        {
          staticClass: "flex pr-6 items-center justify-center",
          attrs: { href: "#", "data-testid": "section-add" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.addModule($event)
            }
          }
        },
        [
          _c("plus-circle-icon", { staticClass: "mr-2" }),
          _vm._v(" Add empty section")
        ],
        1
      ),
      _vm._v(" "),
      _vm.value.length
        ? _c(
            "a",
            {
              staticClass: "flex pr-6 items-center justify-center",
              attrs: { href: "#", "data-testid": "section-remove" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.removeModule($event)
                }
              }
            },
            [
              _c("plus-circle-icon", { staticClass: "mr-2" }),
              _vm._v(" Remove section")
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "flex pr-6 items-center justify-center",
          attrs: { href: "#" }
        },
        [
          _c("plus-circle-icon", { staticClass: "mr-2" }),
          _vm._v(" Add Section\n    Separator")
        ],
        1
      )
    ]
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

"use strict";
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


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/rows/ColumnSelector.vue?vue&type=style&index=0&id=b198e620&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("294c72bf", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = (0,_listToStyles__WEBPACK_IMPORTED_MODULE_0__.default)(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ listToStyles)
/* harmony export */ });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vuedraggable/dist/vuedraggable.umd.js":
/*!************************************************************!*\
  !*** ./node_modules/vuedraggable/dist/vuedraggable.umd.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_688__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_688__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_688__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_688__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_688__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_688__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_688__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_688__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_688__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_688__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_688__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_688__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_688__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_688__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_688__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_688__(__nested_webpack_require_688__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __nested_webpack_require_4164__) {

"use strict";

var LIBRARY = __nested_webpack_require_4164__("2d00");
var $export = __nested_webpack_require_4164__("5ca1");
var redefine = __nested_webpack_require_4164__("2aba");
var hide = __nested_webpack_require_4164__("32e9");
var Iterators = __nested_webpack_require_4164__("84f2");
var $iterCreate = __nested_webpack_require_4164__("41a0");
var setToStringTag = __nested_webpack_require_4164__("7f20");
var getPrototypeOf = __nested_webpack_require_4164__("38fd");
var ITERATOR = __nested_webpack_require_4164__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __nested_webpack_require_7070__) {

var toInteger = __nested_webpack_require_7070__("4588");
var defined = __nested_webpack_require_7070__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __nested_webpack_require_7783__) {

"use strict";

var at = __nested_webpack_require_7783__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __nested_webpack_require_8134__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __nested_webpack_require_8134__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __nested_webpack_require_8593__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_8593__("ce10");
var enumBugKeys = __nested_webpack_require_8593__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __nested_webpack_require_8892__) {

var dP = __nested_webpack_require_8892__("86cc");
var anObject = __nested_webpack_require_8892__("cb7c");
var getKeys = __nested_webpack_require_8892__("0d58");

module.exports = __nested_webpack_require_8892__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __nested_webpack_require_9392__) {

"use strict";

__nested_webpack_require_9392__("b0c5");
var redefine = __nested_webpack_require_9392__("2aba");
var hide = __nested_webpack_require_9392__("32e9");
var fails = __nested_webpack_require_9392__("79e5");
var defined = __nested_webpack_require_9392__("be13");
var wks = __nested_webpack_require_9392__("2b4c");
var regexpExec = __nested_webpack_require_9392__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __nested_webpack_require_12849__) {

var isObject = __nested_webpack_require_12849__("d3f4");
var document = __nested_webpack_require_12849__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __nested_webpack_require_13233__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __nested_webpack_require_13233__("2d95");
var TAG = __nested_webpack_require_13233__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __nested_webpack_require_14160__) {

var global = __nested_webpack_require_14160__("7726");
var hide = __nested_webpack_require_14160__("32e9");
var has = __nested_webpack_require_14160__("69a8");
var SRC = __nested_webpack_require_14160__("ca5a")('src');
var $toString = __nested_webpack_require_14160__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__nested_webpack_require_14160__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __nested_webpack_require_15334__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_15334__("cb7c");
var dPs = __nested_webpack_require_15334__("1495");
var enumBugKeys = __nested_webpack_require_15334__("e11e");
var IE_PROTO = __nested_webpack_require_15334__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_15334__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_15334__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __nested_webpack_require_16945__) {

var store = __nested_webpack_require_16945__("5537")('wks');
var uid = __nested_webpack_require_16945__("ca5a");
var Symbol = __nested_webpack_require_16945__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __nested_webpack_require_17667__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __nested_webpack_require_17667__("5ca1");
var context = __nested_webpack_require_17667__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __nested_webpack_require_17667__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __nested_webpack_require_18235__) {

var dP = __nested_webpack_require_18235__("86cc");
var createDesc = __nested_webpack_require_18235__("4630");
module.exports = __nested_webpack_require_18235__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __nested_webpack_require_18611__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_18611__("69a8");
var toObject = __nested_webpack_require_18611__("4bf8");
var IE_PROTO = __nested_webpack_require_18611__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __nested_webpack_require_19205__) {

"use strict";

var create = __nested_webpack_require_19205__("2aeb");
var descriptor = __nested_webpack_require_19205__("4630");
var setToStringTag = __nested_webpack_require_19205__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_19205__("32e9")(IteratorPrototype, __nested_webpack_require_19205__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __nested_webpack_require_19831__) {

// 19.1.2.14 Object.keys(O)
var toObject = __nested_webpack_require_19831__("4bf8");
var $keys = __nested_webpack_require_19831__("0d58");

__nested_webpack_require_19831__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __nested_webpack_require_20609__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_20609__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __nested_webpack_require_20831__) {

var MATCH = __nested_webpack_require_20831__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __nested_webpack_require_21176__) {

"use strict";


var regexpFlags = __nested_webpack_require_21176__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __nested_webpack_require_23109__) {

var core = __nested_webpack_require_23109__("8378");
var global = __nested_webpack_require_23109__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_23109__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __nested_webpack_require_23642__) {

var global = __nested_webpack_require_23642__("7726");
var core = __nested_webpack_require_23642__("8378");
var hide = __nested_webpack_require_23642__("32e9");
var redefine = __nested_webpack_require_23642__("2aba");
var ctx = __nested_webpack_require_23642__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __nested_webpack_require_25367__) {

// most Object methods by ES6 should accept primitives
var $export = __nested_webpack_require_25367__("5ca1");
var core = __nested_webpack_require_25367__("8378");
var fails = __nested_webpack_require_25367__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __nested_webpack_require_25845__) {

"use strict";


var classof = __nested_webpack_require_25845__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __nested_webpack_require_26551__) {

var shared = __nested_webpack_require_26551__("5537")('keys');
var uid = __nested_webpack_require_26551__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __nested_webpack_require_26811__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_26811__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __nested_webpack_require_27194__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __nested_webpack_require_27194__("5ca1");
var $includes = __nested_webpack_require_27194__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__nested_webpack_require_27194__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __nested_webpack_require_27659__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_27659__("626a");
var defined = __nested_webpack_require_27659__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __nested_webpack_require_28155__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_28155__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __nested_webpack_require_28898__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __nested_webpack_require_28898__("0d58");
var gOPS = __nested_webpack_require_28898__("2621");
var pIE = __nested_webpack_require_28898__("52a7");
var toObject = __nested_webpack_require_28898__("4bf8");
var IObject = __nested_webpack_require_28898__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __nested_webpack_require_28898__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __nested_webpack_require_30635__) {

var toInteger = __nested_webpack_require_30635__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __nested_webpack_require_31112__) {

var def = __nested_webpack_require_31112__("86cc").f;
var has = __nested_webpack_require_31112__("69a8");
var TAG = __nested_webpack_require_31112__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __nested_webpack_require_31751__) {

var anObject = __nested_webpack_require_31751__("cb7c");
var IE8_DOM_DEFINE = __nested_webpack_require_31751__("c69a");
var toPrimitive = __nested_webpack_require_31751__("6a99");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_31751__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __nested_webpack_require_32441__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_32441__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __nested_webpack_require_33048__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __nested_webpack_require_33048__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __nested_webpack_require_33048__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __nested_webpack_require_33448__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_33448__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __nested_webpack_require_33750__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_33750__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __nested_webpack_require_34139__) {

"use strict";


var anObject = __nested_webpack_require_34139__("cb7c");
var toObject = __nested_webpack_require_34139__("4bf8");
var toLength = __nested_webpack_require_34139__("9def");
var toInteger = __nested_webpack_require_34139__("4588");
var advanceStringIndex = __nested_webpack_require_34139__("0390");
var regExpExec = __nested_webpack_require_34139__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__nested_webpack_require_34139__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __nested_webpack_require_38885__) {

// 7.2.8 IsRegExp(argument)
var isObject = __nested_webpack_require_38885__("d3f4");
var cof = __nested_webpack_require_38885__("2d95");
var MATCH = __nested_webpack_require_38885__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __nested_webpack_require_39282__) {

var $iterators = __nested_webpack_require_39282__("cadf");
var getKeys = __nested_webpack_require_39282__("0d58");
var redefine = __nested_webpack_require_39282__("2aba");
var global = __nested_webpack_require_39282__("7726");
var hide = __nested_webpack_require_39282__("32e9");
var Iterators = __nested_webpack_require_39282__("84f2");
var wks = __nested_webpack_require_39282__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __nested_webpack_require_41209__) {

"use strict";

var regexpExec = __nested_webpack_require_41209__("520a");
__nested_webpack_require_41209__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __nested_webpack_require_41706__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_41706__("6821");
var toLength = __nested_webpack_require_41706__("9def");
var toAbsoluteIndex = __nested_webpack_require_41706__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_42729__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __nested_webpack_require_42729__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42729__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_42729__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_42729__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __nested_webpack_require_44512__) {

module.exports = !__nested_webpack_require_44512__("9e1e") && !__nested_webpack_require_44512__("79e5")(function () {
  return Object.defineProperty(__nested_webpack_require_44512__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __nested_webpack_require_45568__) {

"use strict";

var addToUnscopables = __nested_webpack_require_45568__("9c6c");
var step = __nested_webpack_require_45568__("d53b");
var Iterators = __nested_webpack_require_45568__("84f2");
var toIObject = __nested_webpack_require_45568__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_45568__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __nested_webpack_require_46777__) {

var isObject = __nested_webpack_require_46777__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __nested_webpack_require_47019__) {

var has = __nested_webpack_require_47019__("69a8");
var toIObject = __nested_webpack_require_47019__("6821");
var arrayIndexOf = __nested_webpack_require_47019__("c366")(false);
var IE_PROTO = __nested_webpack_require_47019__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __nested_webpack_require_47655__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __nested_webpack_require_47655__("aae3");
var defined = __nested_webpack_require_47655__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __nested_webpack_require_48796__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __nested_webpack_require_48796__("5ca1");
var toLength = __nested_webpack_require_48796__("9def");
var context = __nested_webpack_require_48796__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __nested_webpack_require_48796__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __nested_webpack_require_50913__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __nested_webpack_require_50913__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __nested_webpack_require_50913__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __nested_webpack_require_51166__) {

module.exports = __nested_webpack_require_51166__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __nested_webpack_require_51344__) {

var document = __nested_webpack_require_51344__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __nested_webpack_require_51548__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_51548__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_51548__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_51548__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __nested_webpack_require_51548__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __nested_webpack_require_51548__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __nested_webpack_require_51548__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __nested_webpack_require_51548__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __nested_webpack_require_51548__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __nested_webpack_require_51548__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __nested_webpack_require_51548__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __nested_webpack_require_51548__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__nested_webpack_require_51548__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __nested_webpack_require_51548__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/buildamic": 0,
/******/ 			"public/css/buildamic": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/buildamic"], () => (__webpack_require__("./resources/js/buildamic.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/buildamic"], () => (__webpack_require__("./resources/css/buildamic.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;