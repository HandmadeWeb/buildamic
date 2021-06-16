/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicColumn.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicColumn.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  inject: ["fields", "fieldsets"],
  methods: {
    fieldtypeComponent: function fieldtypeComponent(handle) {
      var field = this.fields.where("handle", handle).first();
      return "".concat(field.component || field.type, "-fieldtype");
    },
    updateField: function updateField(index, value) {
      this.column.fields[index].value = value;
    },
    addField: function addField(handle) {
      var field = this.fields.where("handle", handle).first();
      var defaultValue = this.mmeta.get('fields')['value'][handle];
      var defaultmeta = this.meta.get('fields')['meta'][handle];
      this.column.fields.push({
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)(),
        type: "field",
        config: {
          handle: field.handle,
          type: field.type
        },
        //meta: defaultmeta,
        value: defaultValue
      });
      this.isSelectingNewField = false; //this.update(this.value);
    },
    addFieldSet: function addFieldSet(handle) {
      var fieldSet = this.fieldsets.where("handle", handle).first();
      var defaultValue = [];
      var defaultValues = this.meta.get('fieldsets')['value'][handle];
      var defaultmeta = this.meta.get('fieldsets')['meta'][handle];
      defaultValues.foreach(function (key, val) {
        console.log(key);
        console.log(val);
      });
      console.log(defaultValue); // this.column.fields.push({
      //   uuid: uuidv4(),
      //   type: "fieldset",
      //   config: {
      //     handle: field.handle,
      //     type: field.type,
      //   },
      //   //meta: defaultmeta,
      //   value: defaultValue,
      // });
      // this.isSelectingNewField = false;
      //this.update(this.value);
    },
    removeField: function removeField(fieldKey) {
      this.column.fields.splice(fieldKey, 1); //this.update(this.value);
    }
  },
  mounted: function mounted() {//console.log(uuidv4());
    // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log('value:', this.value);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicRow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicRow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _BuildamicColumn_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuildamicColumn.vue */ "./resources/js/components/BuildamicColumn.vue");
//
//
//
//
//
//
//
//
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
    BuildamicColumn: _BuildamicColumn_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    addColumn: function addColumn() {
      this.row.columns.push({
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)(),
        fields: []
      }); //this.update(this.value);
    },
    removeColumn: function removeColumn(columnKey) {
      this.row.columns.splice(columnKey, 1); //this.update(this.value);
    }
  } //   mounted() {
  //     //console.log(uuidv4());
  //     // console.log('config:', this.config);
  //     // console.log('meta:', this.meta);
  //     // console.log('value:', this.value);
  //   }

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicSection.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicSection.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _BuildamicRow_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuildamicRow.vue */ "./resources/js/components/BuildamicRow.vue");
//
//
//
//
//
//
//
//
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
    BuildamicRow: _BuildamicRow_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    addRow: function addRow() {
      this.section.rows.push({
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)(),
        columns: []
      }); //this.update(this.value);
    },
    removeRow: function removeRow(rowKey) {
      this.section.rows.splice(rowKey, 1); //this.update(this.value);
    }
  } //   mounted() {
  //     //console.log(uuidv4());
  //     // console.log('config:', this.config);
  //     // console.log('meta:', this.meta);
  //     // console.log('value:', this.value);
  //   }

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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var collect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! collect.js */ "./node_modules/collect.js/dist/index.js");
/* harmony import */ var collect_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(collect_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BuildamicSection_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BuildamicSection.vue */ "./resources/js/components/BuildamicSection.vue");
//
//
//
//
//
//
//
//
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
  components: {
    BuildamicSection: _BuildamicSection_vue__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {};
  },
  provide: function provide() {
    return {
      fields: collect_js__WEBPACK_IMPORTED_MODULE_0___default()(this.fields),
      fieldsets: collect_js__WEBPACK_IMPORTED_MODULE_0___default()(this.fieldsets)
    };
  },
  methods: {
    addSection: function addSection() {
      this.value.sections.push({
        uuid: (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)(),
        type: 'section',
        rows: []
      });
      this.update(this.value);
    },
    removeSection: function removeSection(sectionKey) {
      this.value.sections.splice(sectionKey, 1);
      this.update(this.value);
    }
  },
  mounted: function mounted() {//console.log(uuidv4());
    // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log('value:', this.value);
  }
});

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

/***/ "./resources/js/components/BuildamicColumn.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/BuildamicColumn.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuildamicColumn_vue_vue_type_template_id_72b92d8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuildamicColumn.vue?vue&type=template&id=72b92d8f&scoped=true& */ "./resources/js/components/BuildamicColumn.vue?vue&type=template&id=72b92d8f&scoped=true&");
/* harmony import */ var _BuildamicColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildamicColumn.vue?vue&type=script&lang=js& */ "./resources/js/components/BuildamicColumn.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BuildamicColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BuildamicColumn_vue_vue_type_template_id_72b92d8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BuildamicColumn_vue_vue_type_template_id_72b92d8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72b92d8f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BuildamicColumn.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BuildamicRow.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/BuildamicRow.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuildamicRow_vue_vue_type_template_id_3a7d9871_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuildamicRow.vue?vue&type=template&id=3a7d9871&scoped=true& */ "./resources/js/components/BuildamicRow.vue?vue&type=template&id=3a7d9871&scoped=true&");
/* harmony import */ var _BuildamicRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildamicRow.vue?vue&type=script&lang=js& */ "./resources/js/components/BuildamicRow.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BuildamicRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BuildamicRow_vue_vue_type_template_id_3a7d9871_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BuildamicRow_vue_vue_type_template_id_3a7d9871_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3a7d9871",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BuildamicRow.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BuildamicSection.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/BuildamicSection.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BuildamicSection_vue_vue_type_template_id_3b11487c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuildamicSection.vue?vue&type=template&id=3b11487c&scoped=true& */ "./resources/js/components/BuildamicSection.vue?vue&type=template&id=3b11487c&scoped=true&");
/* harmony import */ var _BuildamicSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuildamicSection.vue?vue&type=script&lang=js& */ "./resources/js/components/BuildamicSection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BuildamicSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BuildamicSection_vue_vue_type_template_id_3b11487c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BuildamicSection_vue_vue_type_template_id_3b11487c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3b11487c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BuildamicSection.vue"
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

/***/ "./resources/js/components/BuildamicColumn.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/BuildamicColumn.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuildamicColumn.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicColumn.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicColumn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/BuildamicRow.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/BuildamicRow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuildamicRow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicRow.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/BuildamicSection.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/BuildamicSection.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuildamicSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicSection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/BuildamicColumn.vue?vue&type=template&id=72b92d8f&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/BuildamicColumn.vue?vue&type=template&id=72b92d8f&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicColumn_vue_vue_type_template_id_72b92d8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicColumn_vue_vue_type_template_id_72b92d8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicColumn_vue_vue_type_template_id_72b92d8f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuildamicColumn.vue?vue&type=template&id=72b92d8f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicColumn.vue?vue&type=template&id=72b92d8f&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BuildamicRow.vue?vue&type=template&id=3a7d9871&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/BuildamicRow.vue?vue&type=template&id=3a7d9871&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicRow_vue_vue_type_template_id_3a7d9871_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicRow_vue_vue_type_template_id_3a7d9871_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicRow_vue_vue_type_template_id_3a7d9871_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuildamicRow.vue?vue&type=template&id=3a7d9871&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicRow.vue?vue&type=template&id=3a7d9871&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BuildamicSection.vue?vue&type=template&id=3b11487c&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/BuildamicSection.vue?vue&type=template&id=3b11487c&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicSection_vue_vue_type_template_id_3b11487c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicSection_vue_vue_type_template_id_3b11487c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuildamicSection_vue_vue_type_template_id_3b11487c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BuildamicSection.vue?vue&type=template&id=3b11487c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicSection.vue?vue&type=template&id=3b11487c&scoped=true&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicColumn.vue?vue&type=template&id=72b92d8f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicColumn.vue?vue&type=template&id=72b92d8f&scoped=true& ***!
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
    { staticClass: "buildamic-column-container" },
    [
      _vm._v("\n  Column " + _vm._s(_vm.column.uuid) + "\n  "),
      _vm._l(_vm.column.fields, function(field, fieldKey) {
        return _c("div", { key: fieldKey, staticClass: "py-2" }, [
          field.type === "field"
            ? _c(
                "div",
                {
                  staticClass: "p-5 bg-red",
                  class: [field.config.type + "-fieldtype"]
                },
                [
                  _vm._v("\n      Field " + _vm._s(field.uuid) + "\n      "),
                  _c(_vm.fieldtypeComponent(field.config.handle), {
                    tag: "component",
                    attrs: {
                      config: _vm.fields
                        .where("handle", field.config.handle)
                        .first(),
                      value: field.value,
                      meta: _vm.fields.get("fields")["meta"][
                        field.config.handle
                      ],
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
                    [_vm._v("\n        Remove Field\n      ")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          field.type === "fieldset"
            ? _c(
                "div",
                {
                  staticClass: "p-5 bg-red",
                  class: [field.config.type + "-fieldtype"]
                },
                [
                  _vm._v(
                    "\n      Field Set " + _vm._s(field.uuid) + "\n      "
                  ),
                  _c(_vm.fieldtypeComponent(field.config.handle), {
                    tag: "component",
                    attrs: {
                      config: _vm.fields
                        .where("handle", field.config.handle)
                        .first(),
                      value: field.value,
                      meta: _vm.meta.get("fields")["meta"][field.config.handle],
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
                    [_vm._v("\n        Remove Field\n      ")]
                  )
                ],
                1
              )
            : _vm._e()
        ])
      }),
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
                      [
                        _vm._l(_vm.fields, function(field, key) {
                          return _c("div", { key: key, staticClass: "p-1" }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "border flex items-center group w-full rounded shadow-sm py-1 px-2",
                                on: {
                                  click: function($event) {
                                    return _vm.addField(field.handle)
                                  }
                                }
                              },
                              [
                                _c("svg-icon", {
                                  staticClass:
                                    "h-4 w-4 text-grey-80 group-hover:text-blue",
                                  attrs: { name: field.icon }
                                }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "pl-2 text-grey-80 group-hover:text-blue"
                                  },
                                  [_vm._v(_vm._s(_vm.__(field.display)))]
                                )
                              ],
                              1
                            )
                          ])
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.fieldsets, function(fieldSet, fieldSetKey) {
                          return _c(
                            "div",
                            { key: fieldSetKey, staticClass: "p-1" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "border flex items-center group w-full rounded shadow-sm py-1 px-2",
                                  on: {
                                    click: function($event) {
                                      return _vm.addFieldSet(fieldSet.handle)
                                    }
                                  }
                                },
                                [
                                  _c("svg-icon", {
                                    staticClass:
                                      "h-4 w-4 text-grey-80 group-hover:text-blue",
                                    attrs: { name: fieldSet.icon }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "pl-2 text-grey-80 group-hover:text-blue"
                                    },
                                    [_vm._v(_vm._s(_vm.__(fieldSet.display)))]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ])
              ])
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicRow.vue?vue&type=template&id=3a7d9871&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicRow.vue?vue&type=template&id=3a7d9871&scoped=true& ***!
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
    { staticClass: "buildamic-row-container" },
    [
      _vm._v("\n    Row " + _vm._s(_vm.row.uuid) + "\n    "),
      _vm._l(_vm.row.columns, function(column, columnKey) {
        return _c("div", { key: columnKey, staticClass: "py-2" }, [
          _c(
            "div",
            { staticClass: "p-5 bg-yellow" },
            [
              _c("buildamic-column", { attrs: { column: column } }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function($event) {
                      return _vm.removeColumn(columnKey)
                    }
                  }
                },
                [_vm._v("Remove Column")]
              )
            ],
            1
          )
        ])
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.addColumn($event)
            }
          }
        },
        [_vm._v("Add Column")]
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicSection.vue?vue&type=template&id=3b11487c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BuildamicSection.vue?vue&type=template&id=3b11487c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "buildamic-section-container" },
    [
      _vm._v("\n  Section " + _vm._s(_vm.section.uuid) + "\n  "),
      _vm._l(_vm.section.rows, function(row, rowKey) {
        return _c("div", { key: rowKey, staticClass: "py-2" }, [
          _c(
            "div",
            { staticClass: "p-5 bg-green" },
            [
              _c("buildamic-row", { attrs: { row: row } }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function($event) {
                      return _vm.removeRow(rowKey)
                    }
                  }
                },
                [_vm._v("Remove Row")]
              )
            ],
            1
          )
        ])
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.addRow($event)
            }
          }
        },
        [_vm._v("Add Row")]
      )
    ],
    2
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
    { staticClass: "buildamic-fieldtype-container" },
    [
      _vm._l(_vm.value, function(section, sectionKey) {
        return _c("div", { key: sectionKey, staticClass: "py-2" }, [
          _c(
            "div",
            { staticClass: "p-5 bg-blue" },
            [
              _c("buildamic-section", { attrs: { section: section } }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn",
                  on: {
                    click: function($event) {
                      return _vm.removeSection(sectionKey)
                    }
                  }
                },
                [_vm._v("Remove Section")]
              )
            ],
            1
          )
        ])
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn",
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.addSection($event)
            }
          }
        },
        [_vm._v("Add Section")]
      )
    ],
    2
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./resources/js/buildamic.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fieldtypes_Buildamic_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fieldtypes/Buildamic.vue */ "./resources/js/components/fieldtypes/Buildamic.vue");

Statamic.booting(function () {
  Statamic.$components.register('buildamic-fieldtype', _components_fieldtypes_Buildamic_vue__WEBPACK_IMPORTED_MODULE_0__.default);
});
})();

/******/ })()
;