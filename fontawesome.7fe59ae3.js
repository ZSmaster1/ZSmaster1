// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/fontawesome.js":[function(require,module,exports) {
var define;
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.FontAwesomeKitConfig = {
  "asyncLoading": {
    "enabled": false
  },
  "autoA11y": {
    "enabled": true
  },
  "baseUrl": "https://ka-f.fontawesome.com",
  "baseUrlKit": "https://kit.fontawesome.com",
  "detectConflictsUntil": null,
  "iconUploads": {},
  "id": 107751426,
  "license": "pro",
  "method": "css",
  "minify": {
    "enabled": true
  },
  "token": "93aa16c0ce",
  "v4FontFaceShim": {
    "enabled": true
  },
  "v4shim": {
    "enabled": true
  },
  "version": "5.15.3"
};
!function (t) {
  "function" == typeof define && define.amd ? define("kit-loader", t) : t();
}(function () {
  "use strict";

  function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(e);
  }

  function e(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function n(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function r(t) {
    for (var r = 1; r < arguments.length; r++) {
      var o = null != arguments[r] ? arguments[r] : {};
      r % 2 ? n(Object(o), !0).forEach(function (n) {
        e(t, n, o[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }

    return t;
  }

  function o(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0) {
          ;
        }
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == a.return || a.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return i(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function i(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) {
      r[n] = t[n];
    }

    return r;
  }

  function c(t, e) {
    var n = e && e.addOn || "",
        r = e && e.baseFilename || t.license + n,
        o = e && e.minify ? ".min" : "",
        i = e && e.fileSuffix || t.method,
        c = e && e.subdir || t.method;
    return t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/" + c + "/" + r + o + "." + i;
  }

  function a(t) {
    return t.baseUrlKit + "/" + t.token + "/" + t.id + "/kit-upload.css";
  }

  function u(t, e) {
    var n = e || ["fa"],
        r = "." + Array.prototype.join.call(n, ",."),
        o = t.querySelectorAll(r);
    Array.prototype.forEach.call(o, function (e) {
      var n = e.getAttribute("title");
      e.setAttribute("aria-hidden", "true");
      var r = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only");

      if (n && r) {
        var o = t.createElement("span");
        o.innerHTML = n, o.classList.add("sr-only"), e.parentNode.insertBefore(o, e.nextSibling);
      }
    });
  }

  var f,
      s = function s() {},
      d = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
      l = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
      h = [];

  function m() {
    for (var t = 0; t < h.length; t++) {
      h[t][0](h[t][1]);
    }

    h = [], f = !1;
  }

  function p(t, e) {
    h.push([t, e]), f || (f = !0, l(m, 0));
  }

  function y(t) {
    var e = t.owner,
        n = e._state,
        r = e._data,
        o = t[n],
        i = t.then;

    if ("function" == typeof o) {
      n = "fulfilled";

      try {
        r = o(r);
      } catch (t) {
        w(i, t);
      }
    }

    b(i, r) || ("fulfilled" === n && v(i, r), "rejected" === n && w(i, r));
  }

  function b(e, n) {
    var r;

    try {
      if (e === n) throw new TypeError("A promises callback cannot return that same promise.");

      if (n && ("function" == typeof n || "object" === t(n))) {
        var o = n.then;
        if ("function" == typeof o) return o.call(n, function (t) {
          r || (r = !0, n === t ? g(e, t) : v(e, t));
        }, function (t) {
          r || (r = !0, w(e, t));
        }), !0;
      }
    } catch (t) {
      return r || w(e, t), !0;
    }

    return !1;
  }

  function v(t, e) {
    t !== e && b(t, e) || g(t, e);
  }

  function g(t, e) {
    "pending" === t._state && (t._state = "settled", t._data = e, p(S, t));
  }

  function w(t, e) {
    "pending" === t._state && (t._state = "settled", t._data = e, p(O, t));
  }

  function A(t) {
    t._then = t._then.forEach(y);
  }

  function S(t) {
    t._state = "fulfilled", A(t);
  }

  function O(t) {
    t._state = "rejected", A(t), !t._handled && d && global.process.emit("unhandledRejection", t._data, t);
  }

  function j(t) {
    global.process.emit("rejectionHandled", t);
  }

  function E(t) {
    if ("function" != typeof t) throw new TypeError("Promise resolver " + t + " is not a function");
    if (this instanceof E == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    this._then = [], function (t, e) {
      function n(t) {
        w(e, t);
      }

      try {
        t(function (t) {
          v(e, t);
        }, n);
      } catch (t) {
        n(t);
      }
    }(t, this);
  }

  E.prototype = {
    constructor: E,
    _state: "pending",
    _then: null,
    _data: void 0,
    _handled: !1,
    then: function then(t, e) {
      var n = {
        owner: this,
        then: new this.constructor(s),
        fulfilled: t,
        rejected: e
      };
      return !e && !t || this._handled || (this._handled = !0, "rejected" === this._state && d && p(j, this)), "fulfilled" === this._state || "rejected" === this._state ? p(y, n) : this._then.push(n), n.then;
    },
    catch: function _catch(t) {
      return this.then(null, t);
    }
  }, E.all = function (t) {
    if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.all().");
    return new E(function (e, n) {
      var r = [],
          o = 0;

      function i(t) {
        return o++, function (n) {
          r[t] = n, --o || e(r);
        };
      }

      for (var c, a = 0; a < t.length; a++) {
        (c = t[a]) && "function" == typeof c.then ? c.then(i(a), n) : r[a] = c;
      }

      o || e(r);
    });
  }, E.race = function (t) {
    if (!Array.isArray(t)) throw new TypeError("You must pass an array to Promise.race().");
    return new E(function (e, n) {
      for (var r, o = 0; o < t.length; o++) {
        (r = t[o]) && "function" == typeof r.then ? r.then(e, n) : e(r);
      }
    });
  }, E.resolve = function (e) {
    return e && "object" === t(e) && e.constructor === E ? e : new E(function (t) {
      t(e);
    });
  }, E.reject = function (t) {
    return new E(function (e, n) {
      n(t);
    });
  };

  var _ = "function" == typeof Promise ? Promise : E;

  function P(t, e) {
    var n = e.fetch,
        r = e.XMLHttpRequest,
        o = e.token,
        i = t;
    return "URLSearchParams" in window ? (i = new URL(t)).searchParams.set("token", o) : i = i + "?token=" + encodeURIComponent(o), i = i.toString(), new _(function (t, e) {
      if ("function" == typeof n) n(i, {
        mode: "cors",
        cache: "default"
      }).then(function (t) {
        if (t.ok) return t.text();
        throw new Error("");
      }).then(function (e) {
        t(e);
      }).catch(e);else if ("function" == typeof r) {
        var o = new r();
        o.addEventListener("loadend", function () {
          this.responseText ? t(this.responseText) : e(new Error(""));
        });
        ["abort", "error", "timeout"].map(function (t) {
          o.addEventListener(t, function () {
            e(new Error(""));
          });
        }), o.open("GET", i), o.send();
      } else {
        e(new Error(""));
      }
    });
  }

  function C(t, e, n) {
    var r = t;
    return [[/(url\("?)\.\.\/\.\.\/\.\./g, function (t, n) {
      return "".concat(n).concat(e);
    }], [/(url\("?)\.\.\/webfonts/g, function (t, r) {
      return "".concat(r).concat(e, "/releases/v").concat(n, "/webfonts");
    }], [/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g, function (t, n) {
      return "".concat(n).concat(e);
    }]].forEach(function (t) {
      var e = o(t, 2),
          n = e[0],
          i = e[1];
      r = r.replace(n, i);
    }), r;
  }

  function F(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
        o = e.document || o,
        i = u.bind(u, o, ["fa", "fab", "fas", "far", "fal", "fad", "fak"]),
        f = Object.keys(t.iconUploads || {}).length > 0;
    t.autoA11y.enabled && n(i);
    var s = [{
      id: "fa-main",
      addOn: void 0
    }];
    t.v4shim.enabled && s.push({
      id: "fa-v4-shims",
      addOn: "-v4-shims"
    }), t.v4FontFaceShim.enabled && s.push({
      id: "fa-v4-font-face",
      addOn: "-v4-font-face"
    }), f && s.push({
      id: "fa-kit-upload",
      customCss: !0
    });
    var d = s.map(function (n) {
      return new _(function (o, i) {
        P(n.customCss ? a(t) : c(t, {
          addOn: n.addOn,
          minify: t.minify.enabled
        }), e).then(function (i) {
          o(U(i, r(r({}, e), {}, {
            baseUrl: t.baseUrl,
            version: t.version,
            id: n.id,
            contentFilter: function contentFilter(t, e) {
              return C(t, e.baseUrl, e.version);
            }
          })));
        }).catch(i);
      });
    });
    return _.all(d);
  }

  function U(t, e) {
    var n = e.contentFilter || function (t, e) {
      return t;
    },
        r = document.createElement("style"),
        o = document.createTextNode(n(t, e));

    return r.appendChild(o), r.media = "all", e.id && r.setAttribute("id", e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), r;
  }

  function k(t, e) {
    e.autoA11y = t.autoA11y.enabled, "pro" === t.license && (e.autoFetchSvg = !0, e.fetchSvgFrom = t.baseUrl + "/releases/" + ("latest" === t.version ? "latest" : "v".concat(t.version)) + "/svgs", e.fetchUploadedSvgFrom = t.uploadsUrl);
    var n = [];
    return t.v4shim.enabled && n.push(new _(function (n, o) {
      P(c(t, {
        addOn: "-v4-shims",
        minify: t.minify.enabled
      }), e).then(function (t) {
        n(I(t, r(r({}, e), {}, {
          id: "fa-v4-shims"
        })));
      }).catch(o);
    })), n.push(new _(function (n, o) {
      P(c(t, {
        minify: t.minify.enabled
      }), e).then(function (t) {
        var o = I(t, r(r({}, e), {}, {
          id: "fa-main"
        }));
        n(function (t, e) {
          var n = e && void 0 !== e.autoFetchSvg ? e.autoFetchSvg : void 0,
              r = e && void 0 !== e.autoA11y ? e.autoA11y : void 0;
          void 0 !== r && t.setAttribute("data-auto-a11y", r ? "true" : "false");
          n && (t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), t.setAttribute("data-fetch-svg-from", e.fetchSvgFrom), t.setAttribute("data-fetch-uploaded-svg-from", e.fetchUploadedSvgFrom));
          return t;
        }(o, e));
      }).catch(o);
    })), _.all(n);
  }

  function I(t, e) {
    var n = document.createElement("SCRIPT"),
        r = document.createTextNode(t);
    return n.appendChild(r), n.referrerPolicy = "strict-origin", e.id && n.setAttribute("id", e.id), e && e.detectingConflicts && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n;
  }

  function L(t) {
    var _e,
        n = [],
        r = document,
        o = r.documentElement.doScroll,
        i = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState);

    i || r.addEventListener("DOMContentLoaded", _e = function e() {
      for (r.removeEventListener("DOMContentLoaded", _e), i = 1; _e = n.shift();) {
        _e();
      }
    }), i ? setTimeout(t, 0) : n.push(t);
  }

  function T(t) {
    "undefined" != typeof MutationObserver && new MutationObserver(t).observe(document, {
      childList: !0,
      subtree: !0
    });
  }

  try {
    if (window.FontAwesomeKitConfig) {
      var x = window.FontAwesomeKitConfig,
          M = {
        detectingConflicts: x.detectConflictsUntil && new Date() <= new Date(x.detectConflictsUntil),
        detectionIgnoreAttr: "data-fa-detection-ignore",
        fetch: window.fetch,
        token: x.token,
        XMLHttpRequest: window.XMLHttpRequest,
        document: document
      },
          D = document.currentScript,
          N = D ? D.parentElement : document.head;
      (function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "js" === t.method ? k(t, e) : "css" === t.method ? F(t, e, function (t) {
          L(t), T(t);
        }) : void 0;
      })(x, M).then(function (t) {
        t.map(function (t) {
          try {
            N.insertBefore(t, D ? D.nextSibling : null);
          } catch (e) {
            N.appendChild(t);
          }
        }), M.detectingConflicts && D && L(function () {
          D.setAttributeNode(document.createAttribute(M.detectionIgnoreAttr));

          var t = function (t, e) {
            var n = document.createElement("script");
            return e && e.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)), n.src = c(t, {
              baseFilename: "conflict-detection",
              fileSuffix: "js",
              subdir: "js",
              minify: t.minify.enabled
            }), n;
          }(x, M);

          document.body.appendChild(t);
        });
      }).catch(function (t) {
        console.error("".concat("Font Awesome Kit:", " ").concat(t));
      });
    }
  } catch (t) {
    console.error("".concat("Font Awesome Kit:", " ").concat(t));
  }
});
},{}],"../../Users/zaaki/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60549" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../Users/zaaki/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/fontawesome.js"], null)
//# sourceMappingURL=/fontawesome.7fe59ae3.js.map