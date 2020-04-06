System.register(["react","react-dom"], function(__WEBPACK_DYNAMIC_EXPORT__) {
	var __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__;
	return {
		setters: [
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_react__ = module;
			},
			function(module) {
				__WEBPACK_EXTERNAL_MODULE_react_dom__ = module;
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/microfrontend-react-sspa-app1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/single-spa-react/lib/single-spa-react.js":
/*!***************************************************************!*\
  !*** ./node_modules/single-spa-react/lib/single-spa-react.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = singleSpaReact;
  _exports.SingleSpaContext = void 0;

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  /* We don't import parcel.component.js from this file intentionally. See comment
   * in that file for why
   */
  // React context that gives any react component the single-spa props
  var SingleSpaContext = null;
  _exports.SingleSpaContext = SingleSpaContext;
  var defaultOpts = {
    // required opts
    React: null,
    ReactDOM: null,
    rootComponent: null,
    loadRootComponent: null,
    suppressComponentDidCatchWarning: false,
    domElements: {},
    // optional opts
    domElementGetter: null,
    parcelCanUpdate: true // by default, allow parcels created with single-spa-react to be updated

  };

  function singleSpaReact(userOpts) {
    if (_typeof(userOpts) !== "object") {
      throw new Error("single-spa-react requires a configuration object");
    }

    var opts = _objectSpread({}, defaultOpts, {}, userOpts);

    if (!opts.React) {
      throw new Error("single-spa-react must be passed opts.React");
    }

    if (!opts.ReactDOM) {
      throw new Error("single-spa-react must be passed opts.ReactDOM");
    }

    if (!opts.rootComponent && !opts.loadRootComponent) {
      throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");
    }

    if (!SingleSpaContext && opts.React.createContext) {
      _exports.SingleSpaContext = SingleSpaContext = opts.React.createContext();
    }

    var lifecycles = {
      bootstrap: bootstrap.bind(null, opts),
      mount: mount.bind(null, opts),
      unmount: unmount.bind(null, opts)
    };

    if (opts.parcelCanUpdate) {
      lifecycles.update = update.bind(null, opts);
    }

    return lifecycles;
  }

  function bootstrap(opts, props) {
    if (opts.rootComponent) {
      // This is a class or stateless function component
      return Promise.resolve();
    } else {
      // They passed a promise that resolves with the react component. Wait for it to resolve before mounting
      return opts.loadRootComponent(props).then(function (resolvedComponent) {
        opts.rootComponent = resolvedComponent;
      });
    }
  }

  function mount(opts, props) {
    return new Promise(function (resolve, reject) {
      if (!opts.suppressComponentDidCatchWarning && atLeastReact16(opts.React)) {
        if (!opts.rootComponent.prototype) {
          console.warn("single-spa-react: ".concat(props.name || props.appName || props.childAppName, "'s rootComponent does not have a prototype.  If using a functional component, wrap it in an error boundary or other class that implements componentDidCatch to avoid accidentally unmounting the entire single-spa application"));
        } else if (!opts.rootComponent.prototype.componentDidCatch) {
          console.warn("single-spa-react: ".concat(props.name || props.appName || props.childAppName, "'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application."));
        }
      }

      var domElementGetter = chooseDomElementGetter(opts, props);

      if (typeof domElementGetter !== "function") {
        throw new Error("single-spa-react: the domElementGetter for react application '".concat(props.appName || props.name, "' is not a function"));
      }

      var whenFinished = function whenFinished() {
        resolve(this);
      };

      var rootComponentElement = opts.React.createElement(opts.rootComponent, props);
      var elementToRender = SingleSpaContext ? opts.React.createElement(SingleSpaContext.Provider, {
        value: props
      }, rootComponentElement) : rootComponentElement;
      var domElement = getRootDomEl(domElementGetter, props);
      var renderedComponent = reactDomRender({
        elementToRender: elementToRender,
        domElement: domElement,
        whenFinished: whenFinished,
        opts: opts
      });
      opts.domElements[props.name] = domElement;
    });
  }

  function unmount(opts, props) {
    return Promise.resolve().then(function () {
      opts.ReactDOM.unmountComponentAtNode(opts.domElements[props.name]);
      delete opts.domElements[props.name];
    });
  }

  function update(opts, props) {
    return new Promise(function (resolve, reject) {
      var whenFinished = function whenFinished() {
        resolve(this);
      };

      var rootComponentElement = opts.React.createElement(opts.rootComponent, props);
      var elementToRender = SingleSpaContext ? opts.React.createElement(SingleSpaContext.Provider, {
        value: props
      }, rootComponentElement) : rootComponentElement;
      var renderedComponent = reactDomRender({
        elementToRender: elementToRender,
        domElement: opts.domElements[props.name],
        whenFinished: whenFinished,
        opts: opts
      });
    });
  }

  function getRootDomEl(domElementGetter, props) {
    var el = domElementGetter(props);

    if (!el) {
      throw new Error("single-spa-react: domElementGetter function for application '".concat(props.appName || props.name, "' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));
    }

    return el;
  }

  function atLeastReact16(React) {
    if (React && typeof React.version === "string" && React.version.indexOf(".") >= 0) {
      var majorVersionString = React.version.slice(0, React.version.indexOf("."));

      try {
        return Number(majorVersionString) >= 16;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  }

  function chooseDomElementGetter(opts, props) {
    props = props && props.customProps ? props.customProps : props;

    if (props.domElement) {
      return function () {
        return props.domElement;
      };
    } else if (props.domElementGetter) {
      return props.domElementGetter;
    } else if (opts.domElementGetter) {
      return opts.domElementGetter;
    } else {
      return defaultDomElementGetter(props);
    }
  }

  function defaultDomElementGetter(props) {
    var appName = props.appName || props.name;

    if (!appName) {
      throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");
    }

    var htmlId = "single-spa-application:".concat(appName);
    return function defaultDomEl() {
      var domElement = document.getElementById(htmlId);

      if (!domElement) {
        domElement = document.createElement("div");
        domElement.id = htmlId;
        document.body.appendChild(domElement);
      }

      return domElement;
    };
  }

  function reactDomRender(_ref) {
    var opts = _ref.opts,
        elementToRender = _ref.elementToRender,
        domElement = _ref.domElement,
        whenFinished = _ref.whenFinished;

    if (opts.renderType === "createRoot") {
      return opts.ReactDOM.createRoot(domElement).render(elementToRender, whenFinished);
    }

    if (opts.renderType === "createBlockingRoot") {
      return opts.ReactDOM.createBlockingRoot(domElement).render(elementToRender, whenFinished);
    }

    if (opts.renderType === "hydrate") {
      return opts.ReactDOM.hydrate(elementToRender, domElement, whenFinished);
    } // default to this if 'renderType' is null or doesn't match the other options


    return opts.ReactDOM.render(elementToRender, domElement, whenFinished);
  }
});

//# sourceMappingURL=single-spa-react.js.map

/***/ }),

/***/ "./node_modules/systemjs-webpack-interop/public-path.js":
/*!**************************************************************!*\
  !*** ./node_modules/systemjs-webpack-interop/public-path.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.setPublicPath = function setPublicPath(
  systemjsModuleName,
  rootDirectoryLevel
) {
  if (!rootDirectoryLevel) {
    rootDirectoryLevel = 1;
  }
  if (
    typeof systemjsModuleName !== "string" ||
    systemjsModuleName.trim().length === 0
  ) {
    throw Error(
      "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
    );
  }

  if (
    typeof rootDirectoryLevel !== "number" ||
    rootDirectoryLevel <= 0 ||
    !Number.isInteger(rootDirectoryLevel)
  ) {
    throw Error(
      "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
    );
  }

  let moduleUrl;
  try {
    moduleUrl = window.System.resolve(systemjsModuleName);
    if (!moduleUrl) {
      throw Error();
    }
  } catch (err) {
    throw Error(
      "systemjs-webpack-interop: There is no such module '" +
        systemjsModuleName +
        "' in the SystemJS registry. Did you misspell the name of your module?"
    );
  }

  __webpack_require__.p = resolveDirectory(moduleUrl, rootDirectoryLevel);
};

function resolveDirectory(urlString, rootDirectoryLevel) {
  const url = new URL(urlString);
  const pathname = new URL(urlString).pathname;
  let numDirsProcessed = 0,
    index = pathname.length;
  while (numDirsProcessed !== rootDirectoryLevel && index >= 0) {
    const char = pathname[--index];
    if (char === "/") {
      numDirsProcessed++;
    }
  }

  if (numDirsProcessed !== rootDirectoryLevel) {
    throw Error(
      "systemjs-webpack-interop: rootDirectoryLevel (" +
        rootDirectoryLevel +
        ") is greater than the number of directories (" +
        numDirsProcessed +
        ") in the URL path " +
        fullUrl
    );
  }

  url.pathname = url.pathname.slice(0, index + 1);

  return url.href;
}


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "App 1 is mounted");
}

/***/ }),

/***/ "./src/microfrontend-react-sspa-app1.js":
/*!**********************************************!*\
  !*** ./src/microfrontend-react-sspa-app1.js ***!
  \**********************************************/
/*! exports provided: bootstrap, mount, unmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmount", function() { return unmount; });
/* harmony import */ var _set_public_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-public-path */ "./src/set-public-path.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! single-spa-react */ "./node_modules/single-spa-react/lib/single-spa-react.js");
/* harmony import */ var single_spa_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(single_spa_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");





var lifecycles = single_spa_react__WEBPACK_IMPORTED_MODULE_3___default()({
  React: react__WEBPACK_IMPORTED_MODULE_1___default.a,
  ReactDOM: react_dom__WEBPACK_IMPORTED_MODULE_2___default.a,
  rootComponent: _App__WEBPACK_IMPORTED_MODULE_4__["default"]
});
var bootstrap = lifecycles.bootstrap;
var mount = lifecycles.mount;
var unmount = lifecycles.unmount;

/***/ }),

/***/ "./src/set-public-path.js":
/*!********************************!*\
  !*** ./src/set-public-path.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var systemjs_webpack_interop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! systemjs-webpack-interop */ "./node_modules/systemjs-webpack-interop/public-path.js");
/* harmony import */ var systemjs_webpack_interop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(systemjs_webpack_interop__WEBPACK_IMPORTED_MODULE_0__);

Object(systemjs_webpack_interop__WEBPACK_IMPORTED_MODULE_0__["setPublicPath"])("microfrontend-react-sspa/app1");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ })
			);
		}
	};
});
//# sourceMappingURL=microfrontend-react-sspa-app1.js.map