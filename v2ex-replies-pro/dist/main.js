/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Store)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 存储
 */
var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);
  }

  _createClass(Store, null, [{
    key: "get",
    value:
    /**
     * 获取
     * @param key 键
     */
    function get(key) {
      return GM_getValue(key);
    }
    /**
     * 设置
     * @param key 键
     * @param value 值
     */

  }, {
    key: "set",
    value: function set(key, value) {
      GM_setValue(key, value);
    }
  }]);

  return Store;
}();



/***/ }),

/***/ 923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Options)
});

// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(458);
;// CONCATENATED MODULE: ./utils/src/gm/MenuCmd.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 选项菜单
 */
var MenuCmd = /*#__PURE__*/function () {
  function MenuCmd() {
    _classCallCheck(this, MenuCmd);
  }

  _createClass(MenuCmd, null, [{
    key: "register",
    value:
    /**
     * 注册
     * @param name 名称
     * @param fn 点击菜单时执行的函数
     */
    function register(name, fn) {
      return GM_registerMenuCommand(name, fn);
    }
    /**
     * 注销
     * @param menuCmdId 注册时返回的 ID
     */

  }, {
    key: "unregister",
    value: function unregister(menuCmdId) {
      GM_unregisterMenuCommand(menuCmdId);
    }
  }]);

  return MenuCmd;
}();


;// CONCATENATED MODULE: ./utils/src/CommonOptions.ts
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function CommonOptions_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommonOptions_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CommonOptions_createClass(Constructor, protoProps, staticProps) { if (protoProps) CommonOptions_defineProperties(Constructor.prototype, protoProps); if (staticProps) CommonOptions_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * 选项菜单
 */

var CommonOptions = /*#__PURE__*/function () {
  function CommonOptions() {
    CommonOptions_classCallCheck(this, CommonOptions);
  }

  CommonOptions_createClass(CommonOptions, null, [{
    key: "registerBoolOption",
    value: // /**
    //  * 选项 Key
    //  */
    // protected static Keys = {
    //   // xxx: 'xxx'
    // }
    //
    // /**
    //  * 选项
    //  * @private
    //  */
    // protected static options = [
    //   // {label: '', name: this.Keys.xxx, version: 1, value: false, menuCmdId: null},
    // ];

    /**
     * 注册 bool 类型的选项
     * @param option 选项
     */
    function registerBoolOption(option) {
      var _this = this;

      var val = option.value,
          valIsBool = typeof val === 'boolean';

      if (!valIsBool) {
        return;
      } // 注册选项


      var currentMenuCmdId = MenuCmd.register((val ? '☑️ ' : '🔲 ') + option.label, function () {
        // 点击值取反
        option.value = !option.value;
        Store/* default.set */.Z.set(option.name, JSON.stringify(option)); // 取消注册

        MenuCmd.unregister(currentMenuCmdId); // 重新注册

        _this.registerBoolOption(option); // 刷新页面


        window.location.reload();
      }); // 保存选项 ID

      option.menuCmdId = currentMenuCmdId;
      Store/* default.set */.Z.set(option.name, JSON.stringify(option));
    }
    /**
     * 注册所有选项
     * @param url 设置页面 URL
     * @param options
     */

  }, {
    key: "registerAll",
    value: function registerAll(url, options) {
      MenuCmd.register('更多设置', function () {
        window.open(url, '_blank');
      });

      var _iterator = _createForOfIteratorHelper(options),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          // TODO 【调试】不保留选项的值，每次都从 Store 中获取
          // Store.set(option.name, null);
          var storeOption = Store/* default.get */.Z.get(option.name) ? JSON.parse(Store/* default.get */.Z.get(option.name)) : null; // 如果选项不存在 || 版本不一致 时重置选项

          if (storeOption === null || !storeOption['version'] || storeOption['version'] < option.version) {
            Store/* default.set */.Z.set(option.name, JSON.stringify(option));
            storeOption = option;
          }

          this.registerBoolOption(storeOption);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * 在页面中加载选项
     */

  }, {
    key: "loadInGreasyfork",
    value: function loadInGreasyfork(scriptId, loadOptionContentFn) {
      if (location.host !== 'greasyfork.org' || location.href.indexOf('/scripts/' + scriptId) == -1) {
        return;
      }

      var selector = {
        scriptLinks: '#script-links',
        scriptOptions: '#script-options',
        scriptContent: '#script-content'
      };
      var $body = $(document.body),
          $scriptLinks = $(selector.scriptLinks),
          $scriptContent = $(selector.scriptContent); // 添加脚本设置的选项卡

      $scriptLinks.children('li:eq(0)').after("<li><a href=\"javascript:;\" id=\"script-options\">\u811A\u672C\u8BBE\u7F6E</a></li>"); // 脚本设置选项点击事件

      $body.on('click', selector.scriptOptions, function () {
        // 移除已选中选项的样式
        var $currentLi = $scriptLinks.children('li.current');
        $currentLi.html("<a href=\"".concat(location.href, "\">").concat($currentLi.text(), "</a>"));
        $currentLi.removeClass('current'); // 添加选中选项的样式

        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.parent().addClass('current');
        loadOptionContentFn($scriptContent);
      });
    }
  }]);

  return CommonOptions;
}();


;// CONCATENATED MODULE: ./v2ex-replies-pro/src/Options.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function Options_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Options_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Options_createClass(Constructor, protoProps, staticProps) { if (protoProps) Options_defineProperties(Constructor.prototype, protoProps); if (staticProps) Options_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Options = /*#__PURE__*/function () {
  function Options() {
    Options_classCallCheck(this, Options);
  }

  Options_createClass(Options, null, [{
    key: "registerAll",
    value:
    /**
     * 选项 Key
     */

    /**
     * 选项
     * @private
     */

    /**
     * 注册所有选项
     */
    function registerAll() {
      CommonOptions.registerAll('https://www.v2ex.com/settings', this.options);
    }
    /**
     * 在页面中加载选项
     */

  }, {
    key: "loadInV2ex",
    value: function loadInV2ex() {
      var _this = this;

      if (location.href.indexOf('v2ex.com/settings') == -1) {
        return;
      }

      var selector = {
        menuTab: 'a.tab',
        currentMenuTab: 'a.tab_current',
        scriptOptions: '#script-options',
        scriptContent: '#Main .box',
        v2exTokenInput: 'input[name="v2exToken"]',
        saveOptionsBtn: '#save-options'
      },
          $body = $(document.body),
          $menuTab = $(selector.menuTab); // 添加脚本设置的选项卡

      $menuTab.parent().append("<a id=\"script-options\" class=\"tab\" href=\"javascript:void(0);\">\u811A\u672C\u8BBE\u7F6E</a>"); // 脚本设置选项点击事件

      $body.on('click', selector.scriptOptions, function () {
        // 移除已选中选项的样式
        var $currentMenuTab = $(selector.currentMenuTab);
        $currentMenuTab.removeClass('tab_current');
        $currentMenuTab.addClass('tab'); // 添加选中选项的样式

        var $scriptOptions = $(selector.scriptOptions);
        $scriptOptions.removeClass('tab');
        $scriptOptions.addClass('tab_current'); // 添加脚本设置的内容

        $(selector.scriptContent + ' div:gt(1)').remove();
        $(selector.scriptContent).append("\n        <form>\n          <div class=\"inner\">\n            <div class=\"topic_content markdown_body\">\n              <p>\u8BF7\u5728\u8FD9\u586B\u5199\u4F60\u7684 <a href=\"https://www.v2ex.com/settings/tokens\" target=\"_blank\">V2EX Token</a></p>          \n            </div>\n            <div class=\"sep20\"></div>\n            <div class=\"social-settings-form\">\n              <div>\n                <div>V2EX Token</div>\n                <input type=\"password\" class=\"sl\" name=\"v2exToken\" value=\"".concat(JSON.parse(Store/* default.get */.Z.get(_this.Keys.v2exToken)).value, "\">\n              </div>\n            </div>\n          </div>\n          <div class=\"cell_ops\">\n            <input id=\"save-options\" type=\"submit\" class=\"super normal button\" value=\"Save\">\n          </div>\n        </form>\n      "));
        $body.on('click', selector.saveOptionsBtn, function () {
          var token = $(selector.v2exTokenInput).val();
          Store/* default.set */.Z.set(_this.Keys.v2exToken, JSON.stringify(_objectSpread(_objectSpread({}, JSON.parse(Store/* default.get */.Z.get(_this.Keys.v2exToken))), {
            value: token
          })));
          layer.msg('保存成功');
          return false;
        });
      });
    }
  }]);

  return Options;
}();

_defineProperty(Options, "Keys", {
  v2exToken: 'v2exToken'
});

_defineProperty(Options, "options", [{
  label: 'V2EX Token',
  name: Options.Keys.v2exToken,
  version: 1,
  value: '',
  menuCmdId: null
}]);



/***/ }),

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Replay)
});

;// CONCATENATED MODULE: ./utils/src/gm/enum/HttpDataType.ts
var HttpDataType;

(function (HttpDataType) {
  HttpDataType["JSON"] = "JSON";
})(HttpDataType || (HttpDataType = {}));
;// CONCATENATED MODULE: ./utils/src/gm/Request.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Request = /*#__PURE__*/function () {
  function Request() {
    _classCallCheck(this, Request);
  }

  _createClass(Request, null, [{
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(option) {
        var onload1;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                option['method'] = 'GET'; // 同步时返回 Promise

                if (!option.synchronous) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  GM_xmlhttpRequest(_objectSpread(_objectSpread({}, option), {}, {
                    onload: function onload(response) {
                      resolve(option.dataType === HttpDataType.JSON ? JSON.parse(response.responseText) : response.responseText);
                    },
                    onerror: function onerror(error) {
                      reject(error);
                    }
                  }));
                }));

              case 5:
                onload1 = function onload1(details) {
                  var response;

                  if (option.dataType === HttpDataType.JSON) {
                    response = JSON.parse(details.responseText);
                  } else {
                    response = details.response;
                  }

                  option.onload(response);
                };

                GM_xmlhttpRequest(_objectSpread(_objectSpread({}, option), {}, {
                  onload: onload1
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function get(_x) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);

  return Request;
}();


;// CONCATENATED MODULE: ./utils/src/gm/Info.ts
function Info_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Info_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Info_createClass(Constructor, protoProps, staticProps) { if (protoProps) Info_defineProperties(Constructor.prototype, protoProps); if (staticProps) Info_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 获取脚本信息
 */
var Info = /*#__PURE__*/function () {
  function Info() {
    Info_classCallCheck(this, Info);
  }

  Info_createClass(Info, null, [{
    key: "get",
    value: function get() {
      return GM_info.script;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.get().name;
    }
  }, {
    key: "getVersion",
    value: function getVersion() {
      return this.get().version;
    }
  }]);

  return Info;
}();


// EXTERNAL MODULE: ./utils/src/gm/Store.ts
var Store = __webpack_require__(458);
// EXTERNAL MODULE: ./v2ex-replies-pro/src/Options.ts + 2 modules
var Options = __webpack_require__(923);
;// CONCATENATED MODULE: ./v2ex-replies-pro/src/api/V2ex.ts
function V2ex_typeof(obj) { "@babel/helpers - typeof"; return V2ex_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, V2ex_typeof(obj); }

function V2ex_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ V2ex_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == V2ex_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function V2ex_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { V2ex_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function V2ex_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function V2ex_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function V2ex_createClass(Constructor, protoProps, staticProps) { if (protoProps) V2ex_defineProperties(Constructor.prototype, protoProps); if (staticProps) V2ex_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function V2ex_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var V2ex = /*#__PURE__*/function () {
  function V2ex() {
    V2ex_classCallCheck(this, V2ex);
  }

  V2ex_createClass(V2ex, null, [{
    key: "checkToken",
    value:
    /**
     * 检查 Token 是否有效
     */
    function () {
      var _checkToken = V2ex_asyncToGenerator( /*#__PURE__*/V2ex_regeneratorRuntime().mark(function _callee() {
        var token, result;
        return V2ex_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = JSON.parse(Store/* default.get */.Z.get(Options/* default.Keys.v2exToken */.Z.Keys.v2exToken)).value;

                if (!(!token && location.href.indexOf('v2ex.com/settings') == -1)) {
                  _context.next = 4;
                  break;
                }

                layer.msg('请先在“脚本设置”中填写 Token！', {
                  icon: 4,
                  offset: 'rb'
                }, function () {
                  window.open('https://www.v2ex.com/settings', '_blank');
                });
                return _context.abrupt("return", false);

              case 4:
                _context.next = 6;
                return Request.get({
                  url: this.BASE_URL + 'token',
                  dataType: HttpDataType.JSON,
                  synchronous: true,
                  headers: {
                    'Authorization': 'Bearer ' + token
                  }
                });

              case 6:
                result = _context.sent;

                if (result['success']) {
                  _context.next = 10;
                  break;
                }

                layer.msg(Info.getName() + "：" + result['message'], {
                  icon: 2,
                  offset: 'rb',
                  time: 5000
                });
                return _context.abrupt("return", false);

              case 10:
                return _context.abrupt("return", true);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkToken() {
        return _checkToken.apply(this, arguments);
      }

      return checkToken;
    }()
    /**
     * 获取主题回复
     * @param topicId 主题 ID
     * @param page 页码
     */

  }, {
    key: "getReplies",
    value: function () {
      var _getReplies = V2ex_asyncToGenerator( /*#__PURE__*/V2ex_regeneratorRuntime().mark(function _callee2(topicId, page) {
        var result;
        return V2ex_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Request.get({
                  url: this.BASE_URL + 'topics/' + topicId + '/replies' + (page ? '?p=' + page : ''),
                  dataType: HttpDataType.JSON,
                  synchronous: true,
                  headers: {
                    'Authorization': 'Bearer ' + JSON.parse(Store/* default.get */.Z.get(Options/* default.Keys.v2exToken */.Z.Keys.v2exToken)).value
                  }
                });

              case 2:
                result = _context2.sent;

                if (result['success']) {
                  _context2.next = 6;
                  break;
                }

                console.warn(Info.getName() + "：" + result['message']);
                return _context2.abrupt("return");

              case 6:
                return _context2.abrupt("return", result['result']);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getReplies(_x, _x2) {
        return _getReplies.apply(this, arguments);
      }

      return getReplies;
    }()
  }]);

  return V2ex;
}();

V2ex_defineProperty(V2ex, "BASE_URL", 'https://www.v2ex.com/api/v2/');


;// CONCATENATED MODULE: ./v2ex-replies-pro/src/Replay.ts
function Replay_typeof(obj) { "@babel/helpers - typeof"; return Replay_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Replay_typeof(obj); }

function Replay_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ Replay_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == Replay_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Replay_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Replay_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Replay_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Replay_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function Replay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Replay_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Replay_createClass(Constructor, protoProps, staticProps) { if (protoProps) Replay_defineProperties(Constructor.prototype, protoProps); if (staticProps) Replay_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Replay = /*#__PURE__*/function () {
  function Replay() {
    Replay_classCallCheck(this, Replay);
  }

  Replay_createClass(Replay, null, [{
    key: "run",
    value: function () {
      var _run = Replay_asyncToGenerator( /*#__PURE__*/Replay_regeneratorRuntime().mark(function _callee() {
        var _this = this;

        var selector, $body, $head, $allReplies, $repliesNumber, $opUserName, repliesNumber, opUserName, replies, i, db, start, showReplies, showTaSay;
        return Replay_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(location.href.indexOf('v2ex.com/t/') === -1)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return V2ex.checkToken();

              case 4:
                if (_context.sent) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                selector = {
                  // 回复列表
                  repliesBox: '#Main .box:eq(1)',
                  // 所有回复
                  allReplies: '#Main .box:eq(1) .cell:not(:eq(0))',
                  // 回复数
                  repliesNumber: '#Main .box:eq(1) .gray',
                  // OP 名
                  opUserName: '.header .gray a:eq(0)',
                  // @ 链接
                  atLink: '.at-link',
                  // 右侧内容
                  taSay: '.ta-say'
                }, $body = $(document.body), $head = $(document.head), $allReplies = $(selector.allReplies), $repliesNumber = $(selector.repliesNumber), $opUserName = $(selector.opUserName); // 添加弹窗样式

                $head.append("<style>\n      .winbox".concat(selector.taSay, " {\n        border-shadow: 0 14px 12px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%) !important;\n      }\n      .winbox").concat(selector.taSay, " .wb-drag {\n        background-color: #e2e2e2;\n        color: #666;\n      }\n    </style>")); // 隐藏原回复

                $allReplies.hide(); // 获取回复数

                repliesNumber = $repliesNumber.text().substring(0, $repliesNumber.text().indexOf('条')); // 获取 OP 名

                opUserName = $opUserName.text(); // 获取所有回复

                replies = [];
                i = 1;

              case 13:
                if (!(i <= Math.ceil(Number(repliesNumber) / 20))) {
                  _context.next = 25;
                  break;
                }

                _context.t0 = replies.push;
                _context.t1 = replies;
                _context.t2 = _toConsumableArray;
                _context.next = 19;
                return V2ex.getReplies(topicId, i);

              case 19:
                _context.t3 = _context.sent;
                _context.t4 = (0, _context.t2)(_context.t3);

                _context.t0.apply.call(_context.t0, _context.t1, _context.t4);

              case 22:
                i++;
                _context.next = 13;
                break;

              case 25:
                // 清空数据库
                db = openDatabase('v2ex-replies-pro', Info.getVersion(), Info.getName(), 10 * 1024 * 1024);
                db.transaction(function (tx) {
                  tx.executeSql("drop table if exists rendered_replies");
                }, function (error) {}, function () {
                  start();
                });

                start = function start() {
                  var _loop = function _loop(_i) {
                    var reply = replies[_i],
                        replyId = reply.id,
                        created = reply.created,
                        created1 = Number(created + '000'),
                        createdFormat = moment(created1).format('YYYY-MM-DD HH:mm:ss'),
                        createdAgo = moment(created1).fromNow(),
                        member = reply.member,
                        username = member.username,
                        avatar = member.avatar,
                        replyDivId = 'r_' + replyId,
                        $replyDivId = $('#' + replyDivId),
                        // 点赞数
                    $fade = $replyDivId.find('.fade'),
                        fadeHtml = $fade.length === 0 ? '' : $fade.prop('outerHTML'); // 删除原回复

                    $replyDivId.remove();
                    var contentRendered = reply.content_rendered,
                        atSearchStartIndex = 0; // 可能会 @ 多个人

                    var atSearchStr = '@<a href=\"/member/';

                    while (true) {
                      var atLinkIndex = contentRendered.indexOf(atSearchStr, atSearchStartIndex);

                      if (atLinkIndex === -1) {
                        break;
                      } // 获取 @ 的用户名


                      var atUsername = contentRendered.substring(atLinkIndex + atSearchStr.length, contentRendered.indexOf('">', atLinkIndex)); // 回复内容，其中 @ 链接添加了 class 和 @ 的用户名传递

                      var replaceStr = "@<a class=\"".concat(selector.atLink.substring(1), "\" data-reply-div-id=\"").concat(replyDivId, "\" data-username=\"").concat(atUsername, "\" data-created=\"").concat(created, "\" onclick=\"return false;\" href=\"/member/").concat(atUsername);
                      contentRendered = contentRendered.replaceAll("@<a href=\"/member/".concat(atUsername), replaceStr);
                      atSearchStartIndex = atLinkIndex + replaceStr.length;
                    }

                    var html = "\n          <!-- \u6B64\u5904\u7684 style \u4E3A\u6A21\u4EFF .cell \u6837\u5F0F -->\n          <div id=\"".concat(replyDivId, "\" style=\"font-size: 14px; line-height: 150%; border-bottom: 1px solid #e2e2e2\">\n            <div style=\"display: flex;\">\n              <div style=\"display: flex; flex-direction: column; align-items: center; background-color: #fafbfc; padding: 12px 0 10px 0\">\n                ").concat(username === opUserName ? "\n                  <div style=\"height: 0\">\n                    <div style=\"position: relative; left: 44px; top: -12px; background-image: linear-gradient(225deg, #558bf6 23px, #fafbfc 0); width: 32px; height: 32px;\">\n                      <div class=\"badges\" style=\"color: white; transform: rotate(45deg); position: relative; top: -1px; right: -5px\">OP</div>\n                    </div>\n                  </div>\n                " : '', "\n                <img src=\"").concat(avatar, "\" class=\"avatar\" alt=\"").concat(username, "\" style=\"width: 48px\">\n                <div style=\"width: 120px;\">\n                  <a href=\"/member/").concat(username, "\" class=\"dark\">").concat(username, "</a>\n                </div>\n              </div>\n              <div style=\"padding: 10px 10px 10px 12px; width: 100%\">\n                <div style=\"display: flex; justify-content: space-between\">\n                  <div>\n                    &nbsp;<span class=\"ago\" title=\"").concat(createdFormat, "\">").concat(createdAgo, "</span>&nbsp;").concat(fadeHtml, "\n                  </div>\n                  <div>\n                    <!-- \u6B64\u5904\u4E3A\u539F\u5185\u5BB9\u4FDD\u6301\u4E0D\u53D8 -->\n                    <div id=\"thank_area_").concat(replyId, "\" class=\"thank_area\"><a href=\"#;\" onclick=\"if (confirm('\u786E\u8BA4\u8981\u4E0D\u518D\u663E\u793A\u6765\u81EA @").concat(username, " \u7684\u8FD9\u6761\u56DE\u590D\uFF1F')) { ignoreReply(").concat(replyId, ", ").concat(once, "); }\" class=\"thank\" style=\"color: #ccc;\">\u9690\u85CF</a> &nbsp; &nbsp; <a href=\"#;\" onclick=\"if (confirm('\u786E\u8BA4\u82B1\u8D39 10 \u4E2A\u94DC\u5E01\u5411 @").concat(username, " \u7684\u8FD9\u6761\u56DE\u590D\u53D1\u9001\u611F\u8C22\uFF1F')) { thankReply(").concat(replyId, "); }\" class=\"thank\">\u611F\u8C22\u56DE\u590D\u8005</a></div> &nbsp; <a href=\"#;\" onclick=\"replyOne('").concat(username, "');\"><img src=\"/static/img/reply_neue.png\" align=\"absmiddle\" border=\"0\" alt=\"Reply\" width=\"20\"></a> &nbsp;&nbsp; <span class=\"no\">1</span>\n                  </div>\n                </div>\n                <div style=\"text-align: left\">\n                  <span>").concat(contentRendered, "</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        "); // 将已渲染的回复保存到 Web SQL 中

                    db.transaction(function (tx) {
                      // @formatter:off
                      tx.executeSql("create table if not exists rendered_replies (id unique, username, created, html, content_rendered)");
                      tx.executeSql("insert or replace into rendered_replies (id, username, created, html, content_rendered) values (?, ?, ?, ?, ?)", [replyId, username, created, html, contentRendered]); // @formatter:on
                    }, function (error) {}, function () {
                      if (_i === replies.length - 1) {
                        // updateReplies();
                        showReplies();
                      }
                    });
                  };

                  for (var _i = 0; _i < replies.length; _i++) {
                    _loop(_i);
                  }
                };
                /**
                 * 展示回复
                 */


                showReplies = function showReplies() {
                  db.transaction(function (tx) {
                    // @formatter:off
                    tx.executeSql("select * from rendered_replies order by created", [], function (tx, results) {
                      // @formatter:on
                      var _iterator = _createForOfIteratorHelper(results.rows),
                          _step;

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          var row = _step.value;
                          $(selector.repliesBox).append(row.html);
                        } // 给 @ 链接添加点击事件

                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      $body.on('click', selector.atLink, function () {
                        var $this = $(this);
                        showTaSay($this.data('replyDivId'), $this.data('username'), $this.data('created'));
                      });
                    });
                  });
                };
                /**
                 * 展示 TA 说了什么
                 * @param replyDivId 回复的 div id
                 * @param username 用户名
                 * @param created 创建时间
                 */


                showTaSay = function showTaSay(replyDivId, username, created) {
                  // 关闭弹窗
                  if (_this.winbox) {
                    _this.winbox.close();
                  }

                  console.log(replyDivId); // 高亮点击 @ 链接的那条回复

                  var $reply = $('#' + replyDivId);
                  $reply.css('border', '2px solid'); // 跳转到高亮回复

                  $('html,body').animate({
                    scrollTop: $reply.offset().top - $(window).height() / 2
                  }, 500);
                  db.transaction(function (tx) {
                    // @formatter:off
                    tx.executeSql("select * from rendered_replies where username = ? order by created", [username], function (tx, results) {
                      // @formatter:on
                      var html = '',
                          isGeByPrev = true,
                          isHighlighted = false;

                      for (var _i2 = 0; _i2 < results.rows.length; _i2++) {
                        var row = results.rows[_i2];
                        var borderStyle = 'border-bottom: 1px solid #e2e2e2;'; // 在点击回复所在位置高亮

                        if (!(created > row.created) && isGeByPrev) {
                          borderStyle += 'border-top: 2px solid';
                          isHighlighted = true;
                        } else if (_i2 === results.rows.length - 1 && !isHighlighted) {
                          borderStyle = 'border-bottom: 2px solid';
                        }

                        html += "\n              <div style=\"".concat(borderStyle, "\">\n                ").concat($(row.html).find('.ago').parent().prop('outerHTML'), "\n                <div style=\"padding-bottom: 5px\">").concat(row.content_rendered, "</div>\n              </div>\n            "); // 当前条是否为之前的回复，用于下一条判断是否需要高亮

                        isGeByPrev = created > row.created;
                      }

                      _this.winbox = new WinBox({
                        "class": selector.taSay.substring(1),
                        title: username + ' 说了什么？',
                        x: localStorage.getItem('ta_say_x') || 'right',
                        y: localStorage.getItem('ta_say_y') || 'bottom',
                        width: localStorage.getItem('ta_say_width') || '540px',
                        height: localStorage.getItem('ta_say_height') || '70%',
                        html: "<div style=\"padding: 10px; font-size: 14px\">".concat(html, "</div>"),
                        onresize: function onresize(width, height) {
                          // 改变窗口大小时记录窗口大小
                          localStorage.setItem('ta_say_width', width + 'px');
                          localStorage.setItem('ta_say_height', height + 'px');
                        },
                        onmove: function onmove(x, y) {
                          // 移动窗口时记录窗口位置
                          localStorage.setItem('ta_say_x', x);
                          localStorage.setItem('ta_say_y', y);
                        },
                        onclose: function onclose() {
                          // 关闭弹窗时取消回复高亮
                          $reply.css('border', 'none');
                          $reply.css('border-bottom', '1px solid #e2e2e2');
                        }
                      });
                    });
                  });
                };

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function run() {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }]);

  return Replay;
}();



/***/ }),

/***/ 649:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Replay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(439);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(923);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// ==UserScript==
// @name         V2EX 主题回复增强
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  增强 V2EX 主题的回复。
// @author       duanluan
// @copyright    2022, duanluan (https://github.com/duanluan)
// @license      Apache-2.0; https://www.apache.org/licenses/LICENSE-2.0.txt
// @match        *://*.v2ex.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/moment-with-locales.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/moment.js/2.29.4/locale/zh-cn.min.js
// @require      https://cdn.jsdelivr.net/npm/winbox@0.2.6/dist/winbox.bundle.min.js
// @resource css https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/layer.min.css
// @require      https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/layer.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==
// ==OpenUserJS==
// @author duanluan
// ==/OpenUserJS==



_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  'use strict'; // 加载 CSS

  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          GM_addStyle(GM_getResourceText('css')); // 设置 layer 图标

          $(document.head).append("<style>\n    .layui-layer-ico{background:url('https://cdn.bootcdn.net/ajax/libs/layer/3.5.1/theme/default/icon.png') no-repeat}\n    /* \u539F\u6837\u5F0F\u4E0D\u77E5\u4E3A\u4F55\u4F1A\u5931\u6548\uFF0C\u5BFC\u81F4 icon \u8BBE\u7F6E\u65E0\u6548 */\n    .layui-layer-ico1{background-position:-30px 0}\n    .layui-layer-ico2{background-position:-60px 0}\n    .layui-layer-ico3{background-position:-90px 0}\n    .layui-layer-ico4{background-position:-120px 0}\n    .layui-layer-ico5{background-position:-150px 0}\n    .layui-layer-ico6{background-position:-180px 0}\n  </style>");
          _Options__WEBPACK_IMPORTED_MODULE_1__/* ["default"].registerAll */ .Z.registerAll();
          _Options__WEBPACK_IMPORTED_MODULE_1__/* ["default"].loadInV2ex */ .Z.loadInV2ex();
          _Replay__WEBPACK_IMPORTED_MODULE_0__/* ["default"].run */ .Z.run();

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(649);
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(923);
/******/ 	var __webpack_exports__ = __webpack_require__(439);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9TdG9yZS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdXRpbHMvc3JjL2dtL01lbnVDbWQudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9Db21tb25PcHRpb25zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi92MmV4LXJlcGxpZXMtcHJvL3NyYy9PcHRpb25zLnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vZW51bS9IdHRwRGF0YVR5cGUudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3V0aWxzL3NyYy9nbS9SZXF1ZXN0LnRzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvLi91dGlscy9zcmMvZ20vSW5mby50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdjJleC1yZXBsaWVzLXByby9zcmMvYXBpL1YyZXgudHMiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy8uL3YyZXgtcmVwbGllcy1wcm8vc3JjL1JlcGxheS50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzLy4vdjJleC1yZXBsaWVzLXByby9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RhbXBlcm1vbmtleS1zY3JpcHQtdXRpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YW1wZXJtb25rZXktc2NyaXB0LXV0aWxzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFtcGVybW9ua2V5LXNjcmlwdC11dGlscy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlrZjlgqhcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuXG4gIC8qKlxuICAgKiDojrflj5ZcbiAgICogQHBhcmFtIGtleSDplK5cbiAgICovXG4gIHN0YXRpYyBnZXQoa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBHTV9nZXRWYWx1ZShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rlxuICAgKiBAcGFyYW0ga2V5IOmUrlxuICAgKiBAcGFyYW0gdmFsdWUg5YC8XG4gICAqL1xuICBzdGF0aWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgR01fc2V0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICog6YCJ6aG56I+c5Y2VXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVDbWQge1xuXG4gIC8qKlxuICAgKiDms6jlhoxcbiAgICogQHBhcmFtIG5hbWUg5ZCN56ewXG4gICAqIEBwYXJhbSBmbiDngrnlh7voj5zljZXml7bmiafooYznmoTlh73mlbBcbiAgICovXG4gIHN0YXRpYyByZWdpc3RlcihuYW1lOiBzdHJpbmcsIGZuOiAoKSA9PiB2b2lkKTogbnVtYmVyIHtcbiAgICByZXR1cm4gR01fcmVnaXN0ZXJNZW51Q29tbWFuZChuYW1lLCBmbik7XG4gIH1cblxuICAvKipcbiAgICog5rOo6ZSAXG4gICAqIEBwYXJhbSBtZW51Q21kSWQg5rOo5YaM5pe26L+U5Zue55qEIElEXG4gICAqL1xuICBzdGF0aWMgdW5yZWdpc3RlcihtZW51Q21kSWQ6IG51bWJlcikge1xuICAgIEdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZChtZW51Q21kSWQpO1xuICB9XG59XG4iLCJpbXBvcnQgU3RvcmUgZnJvbSBcIi4uLy4uL3V0aWxzL3NyYy9nbS9TdG9yZVwiO1xuaW1wb3J0IE1lbnVDbWQgZnJvbSBcIi4uLy4uL3V0aWxzL3NyYy9nbS9NZW51Q21kXCI7XG5cbi8qKlxuICog6YCJ6aG56I+c5Y2VXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbk9wdGlvbnMge1xuXG4gIC8vIC8qKlxuICAvLyAgKiDpgInpobkgS2V5XG4gIC8vICAqL1xuICAvLyBwcm90ZWN0ZWQgc3RhdGljIEtleXMgPSB7XG4gIC8vICAgLy8geHh4OiAneHh4J1xuICAvLyB9XG4gIC8vXG4gIC8vIC8qKlxuICAvLyAgKiDpgInpoblcbiAgLy8gICogQHByaXZhdGVcbiAgLy8gICovXG4gIC8vIHByb3RlY3RlZCBzdGF0aWMgb3B0aW9ucyA9IFtcbiAgLy8gICAvLyB7bGFiZWw6ICcnLCBuYW1lOiB0aGlzLktleXMueHh4LCB2ZXJzaW9uOiAxLCB2YWx1ZTogZmFsc2UsIG1lbnVDbWRJZDogbnVsbH0sXG4gIC8vIF07XG5cbiAgLyoqXG4gICAqIOazqOWGjCBib29sIOexu+Wei+eahOmAiemhuVxuICAgKiBAcGFyYW0gb3B0aW9uIOmAiemhuVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb246IGFueSkge1xuICAgIGNvbnN0IHZhbCA9IG9wdGlvbi52YWx1ZSwgdmFsSXNCb29sID0gKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyk7XG5cbiAgICBpZiAoIXZhbElzQm9vbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyDms6jlhozpgInpoblcbiAgICBjb25zdCBjdXJyZW50TWVudUNtZElkID0gTWVudUNtZC5yZWdpc3RlcigodmFsID8gJ+KYke+4jyAnIDogJ/CflLIgJykgKyBvcHRpb24ubGFiZWwsICgpID0+IHtcbiAgICAgIC8vIOeCueWHu+WAvOWPluWPjVxuICAgICAgb3B0aW9uLnZhbHVlID0gIW9wdGlvbi52YWx1ZTtcbiAgICAgIFN0b3JlLnNldChvcHRpb24ubmFtZSwgSlNPTi5zdHJpbmdpZnkob3B0aW9uKSk7XG5cbiAgICAgIC8vIOWPlua2iOazqOWGjFxuICAgICAgTWVudUNtZC51bnJlZ2lzdGVyKGN1cnJlbnRNZW51Q21kSWQpO1xuICAgICAgLy8g6YeN5paw5rOo5YaMXG4gICAgICB0aGlzLnJlZ2lzdGVyQm9vbE9wdGlvbihvcHRpb24pO1xuICAgICAgLy8g5Yi35paw6aG16Z2iXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICAvLyDkv53lrZjpgInpobkgSURcbiAgICBvcHRpb24ubWVudUNtZElkID0gY3VycmVudE1lbnVDbWRJZDtcbiAgICBTdG9yZS5zZXQob3B0aW9uLm5hbWUsIEpTT04uc3RyaW5naWZ5KG9wdGlvbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIOazqOWGjOaJgOaciemAiemhuVxuICAgKiBAcGFyYW0gdXJsIOiuvue9rumhtemdoiBVUkxcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHN0YXRpYyByZWdpc3RlckFsbCh1cmw6IHN0cmluZywgb3B0aW9uczogYW55W10pIHtcbiAgICBNZW51Q21kLnJlZ2lzdGVyKCfmm7TlpJrorr7nva4nLCAoKSA9PiB7XG4gICAgICB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnKTtcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgIC8vIFRPRE8g44CQ6LCD6K+V44CR5LiN5L+d55WZ6YCJ6aG555qE5YC877yM5q+P5qyh6YO95LuOIFN0b3JlIOS4reiOt+WPllxuICAgICAgLy8gU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBudWxsKTtcblxuICAgICAgbGV0IHN0b3JlT3B0aW9uID0gU3RvcmUuZ2V0KG9wdGlvbi5uYW1lKSA/IEpTT04ucGFyc2UoU3RvcmUuZ2V0KG9wdGlvbi5uYW1lKSkgOiBudWxsO1xuICAgICAgLy8g5aaC5p6c6YCJ6aG55LiN5a2Y5ZyoIHx8IOeJiOacrOS4jeS4gOiHtCDml7bph43nva7pgInpoblcbiAgICAgIGlmIChzdG9yZU9wdGlvbiA9PT0gbnVsbCB8fCAhc3RvcmVPcHRpb25bJ3ZlcnNpb24nXSB8fCBzdG9yZU9wdGlvblsndmVyc2lvbiddIDwgb3B0aW9uLnZlcnNpb24pIHtcbiAgICAgICAgU3RvcmUuc2V0KG9wdGlvbi5uYW1lLCBKU09OLnN0cmluZ2lmeShvcHRpb24pKTtcbiAgICAgICAgc3RvcmVPcHRpb24gPSBvcHRpb247XG4gICAgICB9XG4gICAgICB0aGlzLnJlZ2lzdGVyQm9vbE9wdGlvbihzdG9yZU9wdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWcqOmhtemdouS4reWKoOi9vemAiemhuVxuICAgKi9cbiAgc3RhdGljIGxvYWRJbkdyZWFzeWZvcmsoc2NyaXB0SWQ6IG51bWJlciwgbG9hZE9wdGlvbkNvbnRlbnRGbjogRnVuY3Rpb24pIHtcbiAgICBpZiAobG9jYXRpb24uaG9zdCAhPT0gJ2dyZWFzeWZvcmsub3JnJyB8fCBsb2NhdGlvbi5ocmVmLmluZGV4T2YoJy9zY3JpcHRzLycgKyBzY3JpcHRJZCkgPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB7XG4gICAgICBzY3JpcHRMaW5rczogJyNzY3JpcHQtbGlua3MnLFxuICAgICAgc2NyaXB0T3B0aW9uczogJyNzY3JpcHQtb3B0aW9ucycsXG4gICAgICBzY3JpcHRDb250ZW50OiAnI3NjcmlwdC1jb250ZW50JyxcbiAgICB9XG4gICAgY29uc3QgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpLCAkc2NyaXB0TGlua3MgPSAkKHNlbGVjdG9yLnNjcmlwdExpbmtzKSwgJHNjcmlwdENvbnRlbnQgPSAkKHNlbGVjdG9yLnNjcmlwdENvbnRlbnQpO1xuXG4gICAgLy8g5re75Yqg6ISa5pys6K6+572u55qE6YCJ6aG55Y2hXG4gICAgJHNjcmlwdExpbmtzLmNoaWxkcmVuKCdsaTplcSgwKScpLmFmdGVyKGA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGlkPVwic2NyaXB0LW9wdGlvbnNcIj7ohJrmnKzorr7nva48L2E+PC9saT5gKVxuICAgIC8vIOiEmuacrOiuvue9rumAiemhueeCueWHu+S6i+S7tlxuICAgICRib2R5Lm9uKCdjbGljaycsIHNlbGVjdG9yLnNjcmlwdE9wdGlvbnMsICgpID0+IHtcbiAgICAgIC8vIOenu+mZpOW3sumAieS4remAiemhueeahOagt+W8j1xuICAgICAgY29uc3QgJGN1cnJlbnRMaSA9ICRzY3JpcHRMaW5rcy5jaGlsZHJlbignbGkuY3VycmVudCcpO1xuICAgICAgJGN1cnJlbnRMaS5odG1sKGA8YSBocmVmPVwiJHtsb2NhdGlvbi5ocmVmfVwiPiR7JGN1cnJlbnRMaS50ZXh0KCl9PC9hPmApO1xuICAgICAgJGN1cnJlbnRMaS5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xuXG4gICAgICAvLyDmt7vliqDpgInkuK3pgInpobnnmoTmoLflvI9cbiAgICAgIGNvbnN0ICRzY3JpcHRPcHRpb25zID0gJChzZWxlY3Rvci5zY3JpcHRPcHRpb25zKTtcbiAgICAgICRzY3JpcHRPcHRpb25zLnBhcmVudCgpLmFkZENsYXNzKCdjdXJyZW50Jyk7XG5cbiAgICAgIGxvYWRPcHRpb25Db250ZW50Rm4oJHNjcmlwdENvbnRlbnQpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tbW9uT3B0aW9ucyBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL0NvbW1vbk9wdGlvbnNcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vLi4vdXRpbHMvc3JjL2dtL1N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiDpgInpobkgS2V5XG4gICAqL1xuICBzdGF0aWMgS2V5cyA9IHtcbiAgICB2MmV4VG9rZW46ICd2MmV4VG9rZW4nLFxuICB9XG5cbiAgLyoqXG4gICAqIOmAiemhuVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIHN0YXRpYyBvcHRpb25zID0gW1xuICAgIHtsYWJlbDogJ1YyRVggVG9rZW4nLCBuYW1lOiB0aGlzLktleXMudjJleFRva2VuLCB2ZXJzaW9uOiAxLCB2YWx1ZTogJycsIG1lbnVDbWRJZDogbnVsbH0sXG4gIF07XG5cbiAgLyoqXG4gICAqIOazqOWGjOaJgOaciemAiemhuVxuICAgKi9cbiAgc3RhdGljIHJlZ2lzdGVyQWxsKCkge1xuICAgIENvbW1vbk9wdGlvbnMucmVnaXN0ZXJBbGwoJ2h0dHBzOi8vd3d3LnYyZXguY29tL3NldHRpbmdzJywgdGhpcy5vcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlnKjpobXpnaLkuK3liqDovb3pgInpoblcbiAgICovXG4gIHN0YXRpYyBsb2FkSW5WMmV4KCkge1xuICAgIGlmIChsb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3YyZXguY29tL3NldHRpbmdzJykgPT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB7XG4gICAgICAgIG1lbnVUYWI6ICdhLnRhYicsXG4gICAgICAgIGN1cnJlbnRNZW51VGFiOiAnYS50YWJfY3VycmVudCcsXG4gICAgICAgIHNjcmlwdE9wdGlvbnM6ICcjc2NyaXB0LW9wdGlvbnMnLFxuICAgICAgICBzY3JpcHRDb250ZW50OiAnI01haW4gLmJveCcsXG5cbiAgICAgICAgdjJleFRva2VuSW5wdXQ6ICdpbnB1dFtuYW1lPVwidjJleFRva2VuXCJdJyxcbiAgICAgICAgc2F2ZU9wdGlvbnNCdG46ICcjc2F2ZS1vcHRpb25zJyxcbiAgICAgIH0sXG4gICAgICAkYm9keSA9ICQoZG9jdW1lbnQuYm9keSksICRtZW51VGFiID0gJChzZWxlY3Rvci5tZW51VGFiKTtcblxuICAgIC8vIOa3u+WKoOiEmuacrOiuvue9rueahOmAiemhueWNoVxuICAgICRtZW51VGFiLnBhcmVudCgpLmFwcGVuZChgPGEgaWQ9XCJzY3JpcHQtb3B0aW9uc1wiIGNsYXNzPVwidGFiXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIj7ohJrmnKzorr7nva48L2E+YCk7XG4gICAgLy8g6ISa5pys6K6+572u6YCJ6aG554K55Ye75LqL5Lu2XG4gICAgJGJvZHkub24oJ2NsaWNrJywgc2VsZWN0b3Iuc2NyaXB0T3B0aW9ucywgKCkgPT4ge1xuICAgICAgLy8g56e76Zmk5bey6YCJ5Lit6YCJ6aG555qE5qC35byPXG4gICAgICBjb25zdCAkY3VycmVudE1lbnVUYWIgPSAkKHNlbGVjdG9yLmN1cnJlbnRNZW51VGFiKTtcbiAgICAgICRjdXJyZW50TWVudVRhYi5yZW1vdmVDbGFzcygndGFiX2N1cnJlbnQnKTtcbiAgICAgICRjdXJyZW50TWVudVRhYi5hZGRDbGFzcygndGFiJyk7XG5cbiAgICAgIC8vIOa3u+WKoOmAieS4remAiemhueeahOagt+W8j1xuICAgICAgY29uc3QgJHNjcmlwdE9wdGlvbnMgPSAkKHNlbGVjdG9yLnNjcmlwdE9wdGlvbnMpO1xuICAgICAgJHNjcmlwdE9wdGlvbnMucmVtb3ZlQ2xhc3MoJ3RhYicpO1xuICAgICAgJHNjcmlwdE9wdGlvbnMuYWRkQ2xhc3MoJ3RhYl9jdXJyZW50Jyk7XG5cbiAgICAgIC8vIOa3u+WKoOiEmuacrOiuvue9rueahOWGheWuuVxuICAgICAgJChzZWxlY3Rvci5zY3JpcHRDb250ZW50ICsgJyBkaXY6Z3QoMSknKS5yZW1vdmUoKTtcbiAgICAgICQoc2VsZWN0b3Iuc2NyaXB0Q29udGVudCkuYXBwZW5kKGBcbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9waWNfY29udGVudCBtYXJrZG93bl9ib2R5XCI+XG4gICAgICAgICAgICAgIDxwPuivt+WcqOi/meWhq+WGmeS9oOeahCA8YSBocmVmPVwiaHR0cHM6Ly93d3cudjJleC5jb20vc2V0dGluZ3MvdG9rZW5zXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VjJFWCBUb2tlbjwvYT48L3A+ICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VwMjBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtc2V0dGluZ3MtZm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+VjJFWCBUb2tlbjwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cInNsXCIgbmFtZT1cInYyZXhUb2tlblwiIHZhbHVlPVwiJHtKU09OLnBhcnNlKFN0b3JlLmdldCh0aGlzLktleXMudjJleFRva2VuKSkudmFsdWV9XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNlbGxfb3BzXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzYXZlLW9wdGlvbnNcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdXBlciBub3JtYWwgYnV0dG9uXCIgdmFsdWU9XCJTYXZlXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIGApO1xuXG4gICAgICAkYm9keS5vbignY2xpY2snLCBzZWxlY3Rvci5zYXZlT3B0aW9uc0J0biwgKCkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9ICQoc2VsZWN0b3IudjJleFRva2VuSW5wdXQpLnZhbCgpO1xuICAgICAgICBTdG9yZS5zZXQodGhpcy5LZXlzLnYyZXhUb2tlbiwgSlNPTi5zdHJpbmdpZnkoey4uLkpTT04ucGFyc2UoU3RvcmUuZ2V0KHRoaXMuS2V5cy52MmV4VG9rZW4pKSwgLi4ue3ZhbHVlOiB0b2tlbn19KSk7XG4gICAgICAgIGxheWVyLm1zZygn5L+d5a2Y5oiQ5YqfJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBIdHRwRGF0YVR5cGUge1xuICBKU09OID0gXCJKU09OXCJcbn1cbiIsImltcG9ydCB7SHR0cERhdGFUeXBlfSBmcm9tIFwiLi9lbnVtL0h0dHBEYXRhVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXF1ZXN0IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0KG9wdGlvbjogeyB1cmw6IHN0cmluZywgZGF0YVR5cGU/OiBIdHRwRGF0YVR5cGUsIHN5bmNocm9ub3VzPzogYm9vbGVhbiwgaGVhZGVycz86IHt9LCBvbmxvYWQ/OiBGdW5jdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICBvcHRpb25bJ21ldGhvZCddID0gJ0dFVCc7XG5cbiAgICAvLyDlkIzmraXml7bov5Tlm54gUHJvbWlzZVxuICAgIGlmIChvcHRpb24uc3luY2hyb25vdXMpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIEdNX3htbGh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICAuLi5vcHRpb24sXG4gICAgICAgICAgb25sb2FkOiAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUob3B0aW9uLmRhdGFUeXBlID09PSBIdHRwRGF0YVR5cGUuSlNPTiA/IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2VUZXh0KSA6IHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbmVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9ubG9hZDEgPSBmdW5jdGlvbiAoZGV0YWlscykge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIGlmIChvcHRpb24uZGF0YVR5cGUgPT09IEh0dHBEYXRhVHlwZS5KU09OKSB7XG4gICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGRldGFpbHMucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNwb25zZSA9IGRldGFpbHMucmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9uLm9ubG9hZChyZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBHTV94bWxodHRwUmVxdWVzdCh7Li4ub3B0aW9uLCBvbmxvYWQ6IG9ubG9hZDF9KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICog6I635Y+W6ISa5pys5L+h5oGvXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8ge1xuXG4gIHN0YXRpYyBnZXQoKSB7XG4gICAgcmV0dXJuIEdNX2luZm8uc2NyaXB0O1xuICB9XG5cbiAgc3RhdGljIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCkubmFtZTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgpLnZlcnNpb247XG4gIH1cbn1cbiIsImltcG9ydCBSZXF1ZXN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9zcmMvZ20vUmVxdWVzdFwiO1xuaW1wb3J0IHtIdHRwRGF0YVR5cGV9IGZyb20gXCIuLi8uLi8uLi91dGlscy9zcmMvZ20vZW51bS9IdHRwRGF0YVR5cGVcIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuLi8uLi8uLi91dGlscy9zcmMvZ20vSW5mb1wiO1xuaW1wb3J0IFN0b3JlIGZyb20gXCIuLi8uLi8uLi91dGlscy9zcmMvZ20vU3RvcmVcIjtcbmltcG9ydCBPcHRpb25zIGZyb20gXCIuLi9PcHRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFYyZXgge1xuXG4gIHN0YXRpYyBCQVNFX1VSTCA9ICdodHRwczovL3d3dy52MmV4LmNvbS9hcGkvdjIvJztcblxuICAvKipcbiAgICog5qOA5p+lIFRva2VuIOaYr+WQpuacieaViFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBjaGVja1Rva2VuKCkge1xuICAgIGNvbnN0IHRva2VuID0gSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLnYyZXhUb2tlbikpLnZhbHVlO1xuICAgIGlmICghdG9rZW4gJiYgbG9jYXRpb24uaHJlZi5pbmRleE9mKCd2MmV4LmNvbS9zZXR0aW5ncycpID09IC0xKSB7XG4gICAgICBsYXllci5tc2coJ+ivt+WFiOWcqOKAnOiEmuacrOiuvue9ruKAneS4reWhq+WGmSBUb2tlbu+8gScsIHtpY29uOiA0LCBvZmZzZXQ6ICdyYid9LCAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3d3dy52MmV4LmNvbS9zZXR0aW5ncycsICdfYmxhbmsnKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBSZXF1ZXN0LmdldCh7XG4gICAgICB1cmw6IHRoaXMuQkFTRV9VUkwgKyAndG9rZW4nLFxuICAgICAgZGF0YVR5cGU6IEh0dHBEYXRhVHlwZS5KU09OLFxuICAgICAgc3luY2hyb25vdXM6IHRydWUsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghcmVzdWx0WydzdWNjZXNzJ10pIHtcbiAgICAgIGxheWVyLm1zZyhJbmZvLmdldE5hbWUoKSArIFwi77yaXCIgKyByZXN1bHRbJ21lc3NhZ2UnXSwge2ljb246IDIsIG9mZnNldDogJ3JiJywgdGltZTogNTAwMH0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bkuLvpopjlm57lpI1cbiAgICogQHBhcmFtIHRvcGljSWQg5Li76aKYIElEXG4gICAqIEBwYXJhbSBwYWdlIOmhteeggVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRSZXBsaWVzKHRvcGljSWQ6IG51bWJlciwgcGFnZT86IG51bWJlcik6IFByb21pc2U8eyBodG1sOiBzdHJpbmc7IGlkOiBudW1iZXIsIGNyZWF0ZWQ6IG51bWJlciwgY29udGVudDogc3RyaW5nLCBjb250ZW50X3JlbmRlcmVkOiBzdHJpbmcsIG1lbWJlcjogeyBpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCBjcmVhdGVkOiBudW1iZXIsIHVybDogc3RyaW5nLCBhdmF0YXI6IHN0cmluZywgYmlvOiBzdHJpbmcsIGdpdGh1Yjogc3RyaW5nLCB3ZWJzaXRlOiBzdHJpbmcgfSB9W10+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBSZXF1ZXN0LmdldCh7XG4gICAgICB1cmw6IHRoaXMuQkFTRV9VUkwgKyAndG9waWNzLycgKyB0b3BpY0lkICsgJy9yZXBsaWVzJyArIChwYWdlID8gJz9wPScgKyBwYWdlIDogJycpLFxuICAgICAgZGF0YVR5cGU6IEh0dHBEYXRhVHlwZS5KU09OLFxuICAgICAgc3luY2hyb25vdXM6IHRydWUsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgSlNPTi5wYXJzZShTdG9yZS5nZXQoT3B0aW9ucy5LZXlzLnYyZXhUb2tlbikpLnZhbHVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3VsdFsnc3VjY2VzcyddKSB7XG4gICAgICBjb25zb2xlLndhcm4oSW5mby5nZXROYW1lKCkgKyBcIu+8mlwiICsgcmVzdWx0WydtZXNzYWdlJ10pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0WydyZXN1bHQnXTtcbiAgfVxufVxuIiwiaW1wb3J0IFYyZXggZnJvbSBcIi4vYXBpL1YyZXhcIjtcbmltcG9ydCBJbmZvIGZyb20gXCIuLi8uLi91dGlscy9zcmMvZ20vSW5mb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBsYXkge1xuXG4gIHByaXZhdGUgc3RhdGljIHdpbmJveDogYW55O1xuXG4gIHN0YXRpYyBhc3luYyBydW4oKSB7XG4gICAgaWYgKGxvY2F0aW9uLmhyZWYuaW5kZXhPZigndjJleC5jb20vdC8nKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDmo4Dmn6UgVG9rZW5cbiAgICBpZiAoIWF3YWl0IFYyZXguY2hlY2tUb2tlbigpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3RcbiAgICAgIHNlbGVjdG9yID0ge1xuICAgICAgICAvLyDlm57lpI3liJfooahcbiAgICAgICAgcmVwbGllc0JveDogJyNNYWluIC5ib3g6ZXEoMSknLFxuICAgICAgICAvLyDmiYDmnInlm57lpI1cbiAgICAgICAgYWxsUmVwbGllczogJyNNYWluIC5ib3g6ZXEoMSkgLmNlbGw6bm90KDplcSgwKSknLFxuICAgICAgICAvLyDlm57lpI3mlbBcbiAgICAgICAgcmVwbGllc051bWJlcjogJyNNYWluIC5ib3g6ZXEoMSkgLmdyYXknLFxuICAgICAgICAvLyBPUCDlkI1cbiAgICAgICAgb3BVc2VyTmFtZTogJy5oZWFkZXIgLmdyYXkgYTplcSgwKScsXG4gICAgICAgIC8vIEAg6ZO+5o6lXG4gICAgICAgIGF0TGluazogJy5hdC1saW5rJyxcbiAgICAgICAgLy8g5Y+z5L6n5YaF5a65XG4gICAgICAgIHRhU2F5OiAnLnRhLXNheScsXG4gICAgICB9LFxuICAgICAgJGJvZHkgPSAkKGRvY3VtZW50LmJvZHkpLCAkaGVhZCA9ICQoZG9jdW1lbnQuaGVhZCksXG4gICAgICAkYWxsUmVwbGllcyA9ICQoc2VsZWN0b3IuYWxsUmVwbGllcyksXG4gICAgICAkcmVwbGllc051bWJlciA9ICQoc2VsZWN0b3IucmVwbGllc051bWJlciksXG4gICAgICAkb3BVc2VyTmFtZSA9ICQoc2VsZWN0b3Iub3BVc2VyTmFtZSk7XG5cbiAgICAvLyDmt7vliqDlvLnnqpfmoLflvI9cbiAgICAkaGVhZC5hcHBlbmQoYDxzdHlsZT5cbiAgICAgIC53aW5ib3gke3NlbGVjdG9yLnRhU2F5fSB7XG4gICAgICAgIGJvcmRlci1zaGFkb3c6IDAgMTRweCAxMnB4IHJnYigwIDAgMCAvIDI1JSksIDAgMTBweCAxMHB4IHJnYigwIDAgMCAvIDIyJSkgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC53aW5ib3gke3NlbGVjdG9yLnRhU2F5fSAud2ItZHJhZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgfVxuICAgIDwvc3R5bGU+YCk7XG5cbiAgICAvLyDpmpDol4/ljp/lm57lpI1cbiAgICAkYWxsUmVwbGllcy5oaWRlKCk7XG4gICAgLy8g6I635Y+W5Zue5aSN5pWwXG4gICAgY29uc3QgcmVwbGllc051bWJlciA9ICRyZXBsaWVzTnVtYmVyLnRleHQoKS5zdWJzdHJpbmcoMCwgJHJlcGxpZXNOdW1iZXIudGV4dCgpLmluZGV4T2YoJ+adoScpKTtcbiAgICAvLyDojrflj5YgT1Ag5ZCNXG4gICAgY29uc3Qgb3BVc2VyTmFtZSA9ICRvcFVzZXJOYW1lLnRleHQoKTtcbiAgICAvLyDojrflj5bmiYDmnInlm57lpI1cbiAgICBjb25zdCByZXBsaWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gTWF0aC5jZWlsKE51bWJlcihyZXBsaWVzTnVtYmVyKSAvIDIwKTsgaSsrKSB7XG4gICAgICByZXBsaWVzLnB1c2goLi4uYXdhaXQgVjJleC5nZXRSZXBsaWVzKHRvcGljSWQsIGkpKTtcbiAgICB9XG5cbiAgICAvLyDmuIXnqbrmlbDmja7lupNcbiAgICBjb25zdCBkYiA9IG9wZW5EYXRhYmFzZSgndjJleC1yZXBsaWVzLXBybycsIEluZm8uZ2V0VmVyc2lvbigpLCBJbmZvLmdldE5hbWUoKSwgMTAgKiAxMDI0ICogMTAyNCk7XG4gICAgZGIudHJhbnNhY3Rpb24odHggPT4ge1xuICAgICAgdHguZXhlY3V0ZVNxbChgZHJvcCB0YWJsZSBpZiBleGlzdHMgcmVuZGVyZWRfcmVwbGllc2ApO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICB9LCAoKSA9PiB7XG4gICAgICBzdGFydCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcGxpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICByZXBseSA9IHJlcGxpZXNbaV0sXG4gICAgICAgICAgcmVwbHlJZCA9IHJlcGx5LmlkLFxuICAgICAgICAgIGNyZWF0ZWQgPSByZXBseS5jcmVhdGVkLCBjcmVhdGVkMSA9IE51bWJlcihjcmVhdGVkICsgJzAwMCcpLCBjcmVhdGVkRm9ybWF0ID0gbW9tZW50KGNyZWF0ZWQxKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKSwgY3JlYXRlZEFnbyA9IG1vbWVudChjcmVhdGVkMSkuZnJvbU5vdygpLFxuICAgICAgICAgIG1lbWJlciA9IHJlcGx5Lm1lbWJlcixcbiAgICAgICAgICB1c2VybmFtZSA9IG1lbWJlci51c2VybmFtZSxcbiAgICAgICAgICBhdmF0YXIgPSBtZW1iZXIuYXZhdGFyLFxuXG4gICAgICAgICAgcmVwbHlEaXZJZCA9ICdyXycgKyByZXBseUlkLCAkcmVwbHlEaXZJZCA9ICQoJyMnICsgcmVwbHlEaXZJZCksXG4gICAgICAgICAgLy8g54K56LWe5pWwXG4gICAgICAgICAgJGZhZGUgPSAkcmVwbHlEaXZJZC5maW5kKCcuZmFkZScpLCBmYWRlSHRtbCA9ICRmYWRlLmxlbmd0aCA9PT0gMCA/ICcnIDogJGZhZGUucHJvcCgnb3V0ZXJIVE1MJyk7XG5cbiAgICAgICAgLy8g5Yig6Zmk5Y6f5Zue5aSNXG4gICAgICAgICRyZXBseURpdklkLnJlbW92ZSgpO1xuXG4gICAgICAgIGxldCBjb250ZW50UmVuZGVyZWQgPSByZXBseS5jb250ZW50X3JlbmRlcmVkLCBhdFNlYXJjaFN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAvLyDlj6/og73kvJogQCDlpJrkuKrkurpcbiAgICAgICAgY29uc3QgYXRTZWFyY2hTdHIgPSAnQDxhIGhyZWY9XFxcIi9tZW1iZXIvJztcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBsZXQgYXRMaW5rSW5kZXggPSBjb250ZW50UmVuZGVyZWQuaW5kZXhPZihhdFNlYXJjaFN0ciwgYXRTZWFyY2hTdGFydEluZGV4KTtcbiAgICAgICAgICBpZiAoYXRMaW5rSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g6I635Y+WIEAg55qE55So5oi35ZCNXG4gICAgICAgICAgbGV0IGF0VXNlcm5hbWUgPSBjb250ZW50UmVuZGVyZWQuc3Vic3RyaW5nKGF0TGlua0luZGV4ICsgYXRTZWFyY2hTdHIubGVuZ3RoLCBjb250ZW50UmVuZGVyZWQuaW5kZXhPZignXCI+JywgYXRMaW5rSW5kZXgpKTtcbiAgICAgICAgICAvLyDlm57lpI3lhoXlrrnvvIzlhbbkuK0gQCDpk77mjqXmt7vliqDkuoYgY2xhc3Mg5ZKMIEAg55qE55So5oi35ZCN5Lyg6YCSXG4gICAgICAgICAgY29uc3QgcmVwbGFjZVN0ciA9IGBAPGEgY2xhc3M9XCIke3NlbGVjdG9yLmF0TGluay5zdWJzdHJpbmcoMSl9XCIgZGF0YS1yZXBseS1kaXYtaWQ9XCIke3JlcGx5RGl2SWR9XCIgZGF0YS11c2VybmFtZT1cIiR7YXRVc2VybmFtZX1cIiBkYXRhLWNyZWF0ZWQ9XCIke2NyZWF0ZWR9XCIgb25jbGljaz1cInJldHVybiBmYWxzZTtcIiBocmVmPVwiL21lbWJlci8ke2F0VXNlcm5hbWV9YDtcbiAgICAgICAgICBjb250ZW50UmVuZGVyZWQgPSBjb250ZW50UmVuZGVyZWQucmVwbGFjZUFsbChgQDxhIGhyZWY9XCIvbWVtYmVyLyR7YXRVc2VybmFtZX1gLCByZXBsYWNlU3RyKTtcbiAgICAgICAgICBhdFNlYXJjaFN0YXJ0SW5kZXggPSBhdExpbmtJbmRleCArIHJlcGxhY2VTdHIubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICA8IS0tIOatpOWkhOeahCBzdHlsZSDkuLrmqKHku78gLmNlbGwg5qC35byPIC0tPlxuICAgICAgICAgIDxkaXYgaWQ9XCIke3JlcGx5RGl2SWR9XCIgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxNTAlOyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMlwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYmZjOyBwYWRkaW5nOiAxMnB4IDAgMTBweCAwXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VybmFtZSA9PT0gb3BVc2VyTmFtZSA/IGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgbGVmdDogNDRweDsgdG9wOiAtMTJweDsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzU1OGJmNiAyM3B4LCAjZmFmYmZjIDApOyB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4O1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZXNcIiBzdHlsZT1cImNvbG9yOiB3aGl0ZTsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLTFweDsgcmlnaHQ6IC01cHhcIj5PUDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGAgOiAnJ31cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7YXZhdGFyfVwiIGNsYXNzPVwiYXZhdGFyXCIgYWx0PVwiJHt1c2VybmFtZX1cIiBzdHlsZT1cIndpZHRoOiA0OHB4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMjBweDtcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbWVtYmVyLyR7dXNlcm5hbWV9XCIgY2xhc3M9XCJkYXJrXCI+JHt1c2VybmFtZX08L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweCAxMHB4IDEwcHggMTJweDsgd2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDs8c3BhbiBjbGFzcz1cImFnb1wiIHRpdGxlPVwiJHtjcmVhdGVkRm9ybWF0fVwiPiR7Y3JlYXRlZEFnb308L3NwYW4+Jm5ic3A7JHtmYWRlSHRtbH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSDmraTlpITkuLrljp/lhoXlrrnkv53mjIHkuI3lj5ggLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aGFua19hcmVhXyR7cmVwbHlJZH1cIiBjbGFzcz1cInRoYW5rX2FyZWFcIj48YSBocmVmPVwiIztcIiBvbmNsaWNrPVwiaWYgKGNvbmZpcm0oJ+ehruiupOimgeS4jeWGjeaYvuekuuadpeiHqiBAJHt1c2VybmFtZX0g55qE6L+Z5p2h5Zue5aSN77yfJykpIHsgaWdub3JlUmVwbHkoJHtyZXBseUlkfSwgJHtvbmNlfSk7IH1cIiBjbGFzcz1cInRoYW5rXCIgc3R5bGU9XCJjb2xvcjogI2NjYztcIj7pmpDol488L2E+ICZuYnNwOyAmbmJzcDsgPGEgaHJlZj1cIiM7XCIgb25jbGljaz1cImlmIChjb25maXJtKCfnoa7orqToirHotLkgMTAg5Liq6ZOc5biB5ZCRIEAke3VzZXJuYW1lfSDnmoTov5nmnaHlm57lpI3lj5HpgIHmhJ/osKLvvJ8nKSkgeyB0aGFua1JlcGx5KCR7cmVwbHlJZH0pOyB9XCIgY2xhc3M9XCJ0aGFua1wiPuaEn+iwouWbnuWkjeiAhTwvYT48L2Rpdj4gJm5ic3A7IDxhIGhyZWY9XCIjO1wiIG9uY2xpY2s9XCJyZXBseU9uZSgnJHt1c2VybmFtZX0nKTtcIj48aW1nIHNyYz1cIi9zdGF0aWMvaW1nL3JlcGx5X25ldWUucG5nXCIgYWxpZ249XCJhYnNtaWRkbGVcIiBib3JkZXI9XCIwXCIgYWx0PVwiUmVwbHlcIiB3aWR0aD1cIjIwXCI+PC9hPiAmbmJzcDsmbmJzcDsgPHNwYW4gY2xhc3M9XCJub1wiPjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjb250ZW50UmVuZGVyZWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIC8vIOWwhuW3sua4suafk+eahOWbnuWkjeS/neWtmOWIsCBXZWIgU1FMIOS4rVxuICAgICAgICBkYi50cmFuc2FjdGlvbih0eCA9PiB7XG4gICAgICAgICAgLy8gQGZvcm1hdHRlcjpvZmZcbiAgICAgICAgICB0eC5leGVjdXRlU3FsKGBjcmVhdGUgdGFibGUgaWYgbm90IGV4aXN0cyByZW5kZXJlZF9yZXBsaWVzIChpZCB1bmlxdWUsIHVzZXJuYW1lLCBjcmVhdGVkLCBodG1sLCBjb250ZW50X3JlbmRlcmVkKWApO1xuICAgICAgICAgIHR4LmV4ZWN1dGVTcWwoYGluc2VydCBvciByZXBsYWNlIGludG8gcmVuZGVyZWRfcmVwbGllcyAoaWQsIHVzZXJuYW1lLCBjcmVhdGVkLCBodG1sLCBjb250ZW50X3JlbmRlcmVkKSB2YWx1ZXMgKD8sID8sID8sID8sID8pYCwgW3JlcGx5SWQsIHVzZXJuYW1lLCBjcmVhdGVkLCBodG1sLCBjb250ZW50UmVuZGVyZWRdKTtcbiAgICAgICAgICAvLyBAZm9ybWF0dGVyOm9uXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIGlmIChpID09PSByZXBsaWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZVJlcGxpZXMoKTtcbiAgICAgICAgICAgIHNob3dSZXBsaWVzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsZXnpLrlm57lpI1cbiAgICAgKi9cbiAgICBjb25zdCBzaG93UmVwbGllcyA9ICgpID0+IHtcbiAgICAgIGRiLnRyYW5zYWN0aW9uKHR4ID0+IHtcbiAgICAgICAgLy8gQGZvcm1hdHRlcjpvZmZcbiAgICAgICAgdHguZXhlY3V0ZVNxbChgc2VsZWN0ICogZnJvbSByZW5kZXJlZF9yZXBsaWVzIG9yZGVyIGJ5IGNyZWF0ZWRgLCBbXSwgKHR4LCByZXN1bHRzKSA9PiB7XG4gICAgICAgIC8vIEBmb3JtYXR0ZXI6b25cbiAgICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByZXN1bHRzLnJvd3MpIHtcbiAgICAgICAgICAgICQoc2VsZWN0b3IucmVwbGllc0JveCkuYXBwZW5kKHJvdy5odG1sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g57uZIEAg6ZO+5o6l5re75Yqg54K55Ye75LqL5Lu2XG4gICAgICAgICAgJGJvZHkub24oJ2NsaWNrJywgc2VsZWN0b3IuYXRMaW5rLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBzaG93VGFTYXkoJHRoaXMuZGF0YSgncmVwbHlEaXZJZCcpLCAkdGhpcy5kYXRhKCd1c2VybmFtZScpLCAkdGhpcy5kYXRhKCdjcmVhdGVkJykpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5bGV56S6IFRBIOivtOS6huS7gOS5iFxuICAgICAqIEBwYXJhbSByZXBseURpdklkIOWbnuWkjeeahCBkaXYgaWRcbiAgICAgKiBAcGFyYW0gdXNlcm5hbWUg55So5oi35ZCNXG4gICAgICogQHBhcmFtIGNyZWF0ZWQg5Yib5bu65pe26Ze0XG4gICAgICovXG4gICAgY29uc3Qgc2hvd1RhU2F5ID0gKHJlcGx5RGl2SWQ6IHN0cmluZywgdXNlcm5hbWU6IHN0cmluZywgY3JlYXRlZDogbnVtYmVyKSA9PiB7XG4gICAgICAvLyDlhbPpl63lvLnnqpdcbiAgICAgIGlmICh0aGlzLndpbmJveCkge1xuICAgICAgICB0aGlzLndpbmJveC5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2cocmVwbHlEaXZJZClcblxuICAgICAgLy8g6auY5Lqu54K55Ye7IEAg6ZO+5o6l55qE6YKj5p2h5Zue5aSNXG4gICAgICBjb25zdCAkcmVwbHkgPSAkKCcjJyArIHJlcGx5RGl2SWQpO1xuICAgICAgJHJlcGx5LmNzcygnYm9yZGVyJywgJzJweCBzb2xpZCcpO1xuICAgICAgLy8g6Lez6L2s5Yiw6auY5Lqu5Zue5aSNXG4gICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICRyZXBseS5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuaGVpZ2h0KCkgLyAyfSwgNTAwKTtcblxuICAgICAgZGIudHJhbnNhY3Rpb24odHggPT4ge1xuICAgICAgICAvLyBAZm9ybWF0dGVyOm9mZlxuICAgICAgICB0eC5leGVjdXRlU3FsKGBzZWxlY3QgKiBmcm9tIHJlbmRlcmVkX3JlcGxpZXMgd2hlcmUgdXNlcm5hbWUgPSA/IG9yZGVyIGJ5IGNyZWF0ZWRgLCBbdXNlcm5hbWVdLCh0eCwgcmVzdWx0cykgPT4ge1xuICAgICAgICAvLyBAZm9ybWF0dGVyOm9uXG4gICAgICAgICAgbGV0IGh0bWwgPSAnJywgaXNHZUJ5UHJldiA9IHRydWUsIGlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gcmVzdWx0cy5yb3dzW2ldO1xuXG4gICAgICAgICAgICBsZXQgYm9yZGVyU3R5bGUgPSAnYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7JztcbiAgICAgICAgICAgIC8vIOWcqOeCueWHu+WbnuWkjeaJgOWcqOS9jee9rumrmOS6rlxuICAgICAgICAgICAgaWYgKCEoY3JlYXRlZCA+IHJvdy5jcmVhdGVkKSAmJiBpc0dlQnlQcmV2KSB7XG4gICAgICAgICAgICAgIGJvcmRlclN0eWxlICs9ICdib3JkZXItdG9wOiAycHggc29saWQnO1xuICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gcmVzdWx0cy5yb3dzLmxlbmd0aCAtIDEgJiYgIWlzSGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgICAgICAgYm9yZGVyU3R5bGUgPSAnYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh0bWwgKz0gYFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiJHtib3JkZXJTdHlsZX1cIj5cbiAgICAgICAgICAgICAgICAkeyQocm93Lmh0bWwpLmZpbmQoJy5hZ28nKS5wYXJlbnQoKS5wcm9wKCdvdXRlckhUTUwnKX1cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZy1ib3R0b206IDVweFwiPiR7cm93LmNvbnRlbnRfcmVuZGVyZWR9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIC8vIOW9k+WJjeadoeaYr+WQpuS4uuS5i+WJjeeahOWbnuWkje+8jOeUqOS6juS4i+S4gOadoeWIpOaWreaYr+WQpumcgOimgemrmOS6rlxuICAgICAgICAgICAgaXNHZUJ5UHJldiA9IGNyZWF0ZWQgPiByb3cuY3JlYXRlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLndpbmJveCA9IG5ldyBXaW5Cb3goe1xuICAgICAgICAgICAgY2xhc3M6IHNlbGVjdG9yLnRhU2F5LnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgIHRpdGxlOiB1c2VybmFtZSArICcg6K+05LqG5LuA5LmI77yfJyxcbiAgICAgICAgICAgIHg6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YV9zYXlfeCcpIHx8ICdyaWdodCcsXG4gICAgICAgICAgICB5OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFfc2F5X3knKSB8fCAnYm90dG9tJyxcbiAgICAgICAgICAgIHdpZHRoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFfc2F5X3dpZHRoJykgfHwgJzU0MHB4JyxcbiAgICAgICAgICAgIGhlaWdodDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhX3NheV9oZWlnaHQnKSB8fCAnNzAlJyxcbiAgICAgICAgICAgIGh0bWw6IGA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweDsgZm9udC1zaXplOiAxNHB4XCI+JHtodG1sfTwvZGl2PmAsXG4gICAgICAgICAgICBvbnJlc2l6ZTogKHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgICAgICAgLy8g5pS55Y+Y56qX5Y+j5aSn5bCP5pe26K6w5b2V56qX5Y+j5aSn5bCPXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YV9zYXlfd2lkdGgnLCB3aWR0aCArICdweCcpO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFfc2F5X2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9ubW92ZTogKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgLy8g56e75Yqo56qX5Y+j5pe26K6w5b2V56qX5Y+j5L2N572uXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YV9zYXlfeCcsIHgpO1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFfc2F5X3knLCB5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNsb3NlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIC8vIOWFs+mXreW8ueeql+aXtuWPlua2iOWbnuWkjemrmOS6rlxuICAgICAgICAgICAgICAkcmVwbHkuY3NzKCdib3JkZXInLCAnbm9uZScpO1xuICAgICAgICAgICAgICAkcmVwbHkuY3NzKCdib3JkZXItYm90dG9tJywgJzFweCBzb2xpZCAjZTJlMmUyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyA9PVVzZXJTY3JpcHQ9PVxuLy8gQG5hbWUgICAgICAgICBWMkVYIOS4u+mimOWbnuWkjeWinuW8ulxuLy8gQG5hbWVzcGFjZSAgICBodHRwOi8vdGFtcGVybW9ua2V5Lm5ldC9cbi8vIEB2ZXJzaW9uICAgICAgMC4wLjJcbi8vIEBkZXNjcmlwdGlvbiAg5aKe5by6IFYyRVgg5Li76aKY55qE5Zue5aSN44CCXG4vLyBAYXV0aG9yICAgICAgIGR1YW5sdWFuXG4vLyBAY29weXJpZ2h0ICAgIDIwMjIsIGR1YW5sdWFuIChodHRwczovL2dpdGh1Yi5jb20vZHVhbmx1YW4pXG4vLyBAbGljZW5zZSAgICAgIEFwYWNoZS0yLjA7IGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAudHh0XG4vLyBAbWF0Y2ggICAgICAgICo6Ly8qLnYyZXguY29tLypcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjYuMC9qcXVlcnkubWluLmpzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9tb21lbnQuanMvMi4yOS40L21vbWVudC13aXRoLWxvY2FsZXMubWluLmpzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9tb21lbnQuanMvMi4yOS40L2xvY2FsZS96aC1jbi5taW4uanNcbi8vIEByZXF1aXJlICAgICAgaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93aW5ib3hAMC4yLjYvZGlzdC93aW5ib3guYnVuZGxlLm1pbi5qc1xuLy8gQHJlc291cmNlIGNzcyBodHRwczovL2Nkbi5ib290Y2RuLm5ldC9hamF4L2xpYnMvbGF5ZXIvMy41LjEvdGhlbWUvZGVmYXVsdC9sYXllci5taW4uY3NzXG4vLyBAcmVxdWlyZSAgICAgIGh0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9sYXllci8zLjUuMS9sYXllci5taW4uanNcbi8vIEBncmFudCAgICAgICAgR01feG1saHR0cFJlcXVlc3Rcbi8vIEBncmFudCAgICAgICAgR01fZ2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fc2V0VmFsdWVcbi8vIEBncmFudCAgICAgICAgR01fcmVnaXN0ZXJNZW51Q29tbWFuZFxuLy8gQGdyYW50ICAgICAgICBHTV91bnJlZ2lzdGVyTWVudUNvbW1hbmRcbi8vIEBncmFudCAgICAgICAgR01fZ2V0UmVzb3VyY2VUZXh0XG4vLyBAZ3JhbnQgICAgICAgIEdNX2FkZFN0eWxlXG4vLyA9PS9Vc2VyU2NyaXB0PT1cblxuLy8gPT1PcGVuVXNlckpTPT1cbi8vIEBhdXRob3IgZHVhbmx1YW5cbi8vID09L09wZW5Vc2VySlM9PVxuXG5pbXBvcnQgUmVwbGF5IGZyb20gXCIuL1JlcGxheVwiO1xuaW1wb3J0IE9wdGlvbnMgZnJvbSBcIi4vT3B0aW9uc1wiO1xuXG4oYXN5bmMgKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8g5Yqg6L29IENTU1xuICBHTV9hZGRTdHlsZShHTV9nZXRSZXNvdXJjZVRleHQoJ2NzcycpKTtcbiAgLy8g6K6+572uIGxheWVyIOWbvuagh1xuICAkKGRvY3VtZW50LmhlYWQpLmFwcGVuZChgPHN0eWxlPlxuICAgIC5sYXl1aS1sYXllci1pY297YmFja2dyb3VuZDp1cmwoJ2h0dHBzOi8vY2RuLmJvb3RjZG4ubmV0L2FqYXgvbGlicy9sYXllci8zLjUuMS90aGVtZS9kZWZhdWx0L2ljb24ucG5nJykgbm8tcmVwZWF0fVxuICAgIC8qIOWOn+agt+W8j+S4jeefpeS4uuS9leS8muWkseaViO+8jOWvvOiHtCBpY29uIOiuvue9ruaXoOaViCAqL1xuICAgIC5sYXl1aS1sYXllci1pY28xe2JhY2tncm91bmQtcG9zaXRpb246LTMwcHggMH1cbiAgICAubGF5dWktbGF5ZXItaWNvMntiYWNrZ3JvdW5kLXBvc2l0aW9uOi02MHB4IDB9XG4gICAgLmxheXVpLWxheWVyLWljbzN7YmFja2dyb3VuZC1wb3NpdGlvbjotOTBweCAwfVxuICAgIC5sYXl1aS1sYXllci1pY280e2JhY2tncm91bmQtcG9zaXRpb246LTEyMHB4IDB9XG4gICAgLmxheXVpLWxheWVyLWljbzV7YmFja2dyb3VuZC1wb3NpdGlvbjotMTUwcHggMH1cbiAgICAubGF5dWktbGF5ZXItaWNvNntiYWNrZ3JvdW5kLXBvc2l0aW9uOi0xODBweCAwfVxuICA8L3N0eWxlPmApO1xuXG4gIE9wdGlvbnMucmVnaXN0ZXJBbGwoKTtcbiAgT3B0aW9ucy5sb2FkSW5WMmV4KCk7XG5cbiAgUmVwbGF5LnJ1bigpO1xufSkoKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDY0OSk7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg5MjMpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQzOSk7XG4iLCIiXSwibmFtZXMiOlsiU3RvcmUiLCJrZXkiLCJHTV9nZXRWYWx1ZSIsInZhbHVlIiwiR01fc2V0VmFsdWUiLCJNZW51Q21kIiwibmFtZSIsImZuIiwiR01fcmVnaXN0ZXJNZW51Q29tbWFuZCIsIm1lbnVDbWRJZCIsIkdNX3VucmVnaXN0ZXJNZW51Q29tbWFuZCIsIkNvbW1vbk9wdGlvbnMiLCJvcHRpb24iLCJ2YWwiLCJ2YWxJc0Jvb2wiLCJjdXJyZW50TWVudUNtZElkIiwicmVnaXN0ZXIiLCJsYWJlbCIsInNldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bnJlZ2lzdGVyIiwicmVnaXN0ZXJCb29sT3B0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1cmwiLCJvcHRpb25zIiwib3BlbiIsInN0b3JlT3B0aW9uIiwiZ2V0IiwicGFyc2UiLCJ2ZXJzaW9uIiwic2NyaXB0SWQiLCJsb2FkT3B0aW9uQ29udGVudEZuIiwiaG9zdCIsImhyZWYiLCJpbmRleE9mIiwic2VsZWN0b3IiLCJzY3JpcHRMaW5rcyIsInNjcmlwdE9wdGlvbnMiLCJzY3JpcHRDb250ZW50IiwiJGJvZHkiLCIkIiwiZG9jdW1lbnQiLCJib2R5IiwiJHNjcmlwdExpbmtzIiwiJHNjcmlwdENvbnRlbnQiLCJjaGlsZHJlbiIsImFmdGVyIiwib24iLCIkY3VycmVudExpIiwiaHRtbCIsInRleHQiLCJyZW1vdmVDbGFzcyIsIiRzY3JpcHRPcHRpb25zIiwicGFyZW50IiwiYWRkQ2xhc3MiLCJPcHRpb25zIiwicmVnaXN0ZXJBbGwiLCJtZW51VGFiIiwiY3VycmVudE1lbnVUYWIiLCJ2MmV4VG9rZW5JbnB1dCIsInNhdmVPcHRpb25zQnRuIiwiJG1lbnVUYWIiLCJhcHBlbmQiLCIkY3VycmVudE1lbnVUYWIiLCJyZW1vdmUiLCJLZXlzIiwidjJleFRva2VuIiwidG9rZW4iLCJsYXllciIsIm1zZyIsIkh0dHBEYXRhVHlwZSIsIlJlcXVlc3QiLCJzeW5jaHJvbm91cyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiR01feG1saHR0cFJlcXVlc3QiLCJvbmxvYWQiLCJyZXNwb25zZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUZXh0Iiwib25lcnJvciIsImVycm9yIiwib25sb2FkMSIsImRldGFpbHMiLCJJbmZvIiwiR01faW5mbyIsInNjcmlwdCIsIlYyZXgiLCJpY29uIiwib2Zmc2V0IiwiQkFTRV9VUkwiLCJoZWFkZXJzIiwicmVzdWx0IiwiZ2V0TmFtZSIsInRpbWUiLCJ0b3BpY0lkIiwicGFnZSIsImNvbnNvbGUiLCJ3YXJuIiwiUmVwbGF5IiwiY2hlY2tUb2tlbiIsInJlcGxpZXNCb3giLCJhbGxSZXBsaWVzIiwicmVwbGllc051bWJlciIsIm9wVXNlck5hbWUiLCJhdExpbmsiLCJ0YVNheSIsIiRoZWFkIiwiaGVhZCIsIiRhbGxSZXBsaWVzIiwiJHJlcGxpZXNOdW1iZXIiLCIkb3BVc2VyTmFtZSIsImhpZGUiLCJzdWJzdHJpbmciLCJyZXBsaWVzIiwiaSIsIk1hdGgiLCJjZWlsIiwiTnVtYmVyIiwicHVzaCIsImdldFJlcGxpZXMiLCJkYiIsIm9wZW5EYXRhYmFzZSIsImdldFZlcnNpb24iLCJ0cmFuc2FjdGlvbiIsInR4IiwiZXhlY3V0ZVNxbCIsInN0YXJ0IiwicmVwbHkiLCJyZXBseUlkIiwiaWQiLCJjcmVhdGVkIiwiY3JlYXRlZDEiLCJjcmVhdGVkRm9ybWF0IiwibW9tZW50IiwiZm9ybWF0IiwiY3JlYXRlZEFnbyIsImZyb21Ob3ciLCJtZW1iZXIiLCJ1c2VybmFtZSIsImF2YXRhciIsInJlcGx5RGl2SWQiLCIkcmVwbHlEaXZJZCIsIiRmYWRlIiwiZmluZCIsImZhZGVIdG1sIiwibGVuZ3RoIiwicHJvcCIsImNvbnRlbnRSZW5kZXJlZCIsImNvbnRlbnRfcmVuZGVyZWQiLCJhdFNlYXJjaFN0YXJ0SW5kZXgiLCJhdFNlYXJjaFN0ciIsImF0TGlua0luZGV4IiwiYXRVc2VybmFtZSIsInJlcGxhY2VTdHIiLCJyZXBsYWNlQWxsIiwib25jZSIsInNob3dSZXBsaWVzIiwicmVzdWx0cyIsInJvd3MiLCJyb3ciLCIkdGhpcyIsInNob3dUYVNheSIsImRhdGEiLCJ3aW5ib3giLCJjbG9zZSIsImxvZyIsIiRyZXBseSIsImNzcyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0b3AiLCJoZWlnaHQiLCJpc0dlQnlQcmV2IiwiaXNIaWdobGlnaHRlZCIsImJvcmRlclN0eWxlIiwiV2luQm94IiwidGl0bGUiLCJ4IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInkiLCJ3aWR0aCIsIm9ucmVzaXplIiwic2V0SXRlbSIsIm9ubW92ZSIsIm9uY2xvc2UiLCJHTV9hZGRTdHlsZSIsIkdNX2dldFJlc291cmNlVGV4dCIsImxvYWRJblYyZXgiLCJydW4iXSwic291cmNlUm9vdCI6IiJ9