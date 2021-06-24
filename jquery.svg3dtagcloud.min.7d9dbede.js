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
})({"js/jquery.svg3dtagcloud.min.js":[function(require,module,exports) {
!function () {
  function t(t, e) {
    function o() {
      F = document.createElementNS(N, "svg"), F.addEventListener("mousemove", v), t.appendChild(F), x.bgDraw && (D = document.createElementNS(N, "rect"), D.setAttribute("x", 0), D.setAttribute("y", 0), D.setAttribute("fill", x.bgColor), F.appendChild(D)), a(), i(), h(), window.addEventListener("resize", b);
    }

    function i() {
      var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
          i = e,
          r = o;
      x.width.toString().indexOf("%") > 0 || x.height.toString().indexOf("%") > 0 ? (i = Math.round(t.offsetWidth / 100 * parseInt(x.width)), r = Math.round(i / 100 * parseInt(x.height))) : (i = parseInt(x.width), r = parseInt(x.height)), i >= e && (i = e), r >= o && (r = o), P = {
        x: i / 2,
        y: r / 2
      }, E.x = x.speed / P.x, E.y = x.speed / P.y, S = i >= r ? r / 100 * parseInt(x.radius) : i / 100 * parseInt(x.radius), 1 > S && (S = 1), C = S / 2, C < x.radiusMin && (C = x.radiusMin, S = 2 * C), F.setAttribute("width", i), F.setAttribute("height", r), x.bgDraw && (D.setAttribute("width", i), D.setAttribute("height", r)), n(C);
    }

    function n(t) {
      for (var e = 0, o = z.length; o > e; e++) {
        r(z[e], t);
      }
    }

    function r(t, e) {
      var o = t.vectorPosition.x - O.x,
          i = t.vectorPosition.y - O.y,
          n = t.vectorPosition.z - O.z,
          r = Math.sqrt(o * o + i * i + n * n);
      t.vectorPosition.x /= r, t.vectorPosition.y /= r, t.vectorPosition.z /= r, t.vectorPosition.x *= e, t.vectorPosition.y *= e, t.vectorPosition.z *= e;
    }

    function s(t, e, o, i, n) {
      var r = {};
      return "undefined" != typeof e.label ? (r.element = document.createElementNS(N, "text"), r.element.setAttribute("x", 0), r.element.setAttribute("y", 0), r.element.setAttribute("fill", x.fontColor), r.element.setAttribute("font-family", x.fontFamily), r.element.setAttribute("font-size", x.fontSize), r.element.setAttribute("font-weight", x.fontWeight), r.element.setAttribute("font-style", x.fontStyle), r.element.setAttribute("font-stretch", x.fontStretch), r.element.setAttribute("text-anchor", "middle"), r.element.textContent = x.fontToUpperCase ? e.label.toUpperCase() : e.label) : "undefined" != typeof e.image && (r.element = document.createElementNS(N, "image"), r.element.setAttribute("x", 0), r.element.setAttribute("y", 0), r.element.setAttribute("width", e.width), r.element.setAttribute("height", e.height), r.element.setAttribute("id", "image_" + t), r.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", e.image), r.diffX = e.width / 2, r.diffY = e.height / 2), r.link = document.createElementNS(N, "a"), r.link.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.url), r.link.setAttribute("target", e.target), r.link.addEventListener("mouseover", m, !0), r.link.addEventListener("mouseout", y, !0), r.link.appendChild(r.element), "undefined" != typeof e.tooltip ? (r.tooltip = !0, r.tooltipLabel = x.tooltipFontToUpperCase ? e.tooltip.toUpperCase() : e.tooltip) : r.tooltip = !1, r.index = t, r.mouseOver = !1, r.vectorPosition = {
        x: o,
        y: i,
        z: n
      }, r.vector2D = {
        x: 0,
        y: 0
      }, F.appendChild(r.link), r;
    }

    function a() {
      for (var t = !1, e = 1, o = x.entries.length + 1; o > e; e++) {
        var i = Math.acos(-1 + 2 * e / o),
            n = Math.sqrt(o * Math.PI) * i,
            r = Math.cos(n) * Math.sin(i),
            a = Math.sin(n) * Math.sin(i),
            u = Math.cos(i),
            c = s(e - 1, x.entries[e - 1], r, a, u);
        z.push(c), "undefined" != typeof x.entries[e - 1].tooltip && (t = !0);
      }

      t && l();
    }

    function l() {
      w = document.createElementNS(N, "text"), w.setAttribute("x", 0), w.setAttribute("y", 0), w.setAttribute("fill", x.tooltipFontColor), w.setAttribute("font-family", x.tooltipFontFamily), w.setAttribute("font-size", x.tooltipFontSize), w.setAttribute("font-weight", x.tooltipFontWeight), w.setAttribute("font-style", x.tooltipFontStyle), w.setAttribute("font-stretch", x.tooltipFontStretch), w.setAttribute("text-anchor", x.tooltipTextAnchor), w.textContent = "", F.appendChild(w);
    }

    function u(t) {
      for (var e = 0, o = z.length; o > e; e++) {
        var i = z[e];
        if (i.element.getAttribute("x") === t.getAttribute("x") && i.element.getAttribute("y") === t.getAttribute("y")) return i;
      }
    }

    function c(t) {
      for (var e = 0, o = z.length; o > e; e++) {
        var i = z[e];
        i.index === t.index ? i.mouseOver = !0 : i.mouseOver = !1;
      }
    }

    function f(t) {
      t.tooltip && (w.setAttribute("x", t.vector2D.x - x.tooltipDiffX), w.setAttribute("y", t.vector2D.y - x.tooltipDiffY), w.textContent = x.tooltipFontToUpperCase ? t.tooltipLabel.toUpperCase() : t.tooltipLabel, w.setAttribute("opacity", 1));
    }

    function d(t) {
      w.setAttribute("opacity", 0);
    }

    function p() {
      var t = E.x * T.x - x.speed,
          e = x.speed - E.y * T.y,
          o = t * I,
          i = e * I;
      k.sx = Math.sin(o), k.cx = Math.cos(o), k.sy = Math.sin(i), k.cy = Math.cos(i);

      for (var n = 0, r = z.length; r > n; n++) {
        var s = z[n];

        if (M) {
          var a = s.vectorPosition.x,
              l = s.vectorPosition.y * k.sy + s.vectorPosition.z * k.cy;
          s.vectorPosition.x = a * k.cx + l * k.sx, s.vectorPosition.y = s.vectorPosition.y * k.cy + s.vectorPosition.z * -k.sy, s.vectorPosition.z = a * -k.sx + l * k.cx;
        }

        var u = x.fov / (x.fov + s.vectorPosition.z);
        s.vector2D.x = s.vectorPosition.x * u + P.x, s.vector2D.y = s.vectorPosition.y * u + P.y, s.diffX && s.diffY && (s.vector2D.x -= s.diffX, s.vector2D.y -= s.diffY), s.element.setAttribute("x", s.vector2D.x), s.element.setAttribute("y", s.vector2D.y);
        var c;
        M ? (c = (C - s.vectorPosition.z) / S, c < x.opacityOut && (c = x.opacityOut)) : (c = parseFloat(s.element.getAttribute("opacity")), c += s.mouseOver ? (x.opacityOver - c) / x.opacitySpeed : (x.opacityOut - c) / x.opacitySpeed), s.element.setAttribute("opacity", c);
      }

      z = z.sort(function (t, e) {
        return e.vectorPosition.z - t.vectorPosition.z;
      });
    }

    function h() {
      requestAnimFrame(h), p();
    }

    function m(t) {
      M = !1;
      var e = u(t.target);
      c(e), e.tooltip && f(e);
    }

    function y(t) {
      M = !0;
      var e = u(t.target);
      e.tooltip && d(e);
    }

    function v(t) {
      T = g(F, t);
    }

    function g(t, e) {
      var o = t.getBoundingClientRect();
      return {
        x: e.clientX - o.left,
        y: e.clientY - o.top
      };
    }

    function b(t) {
      i();
    }

    var x = {
      entries: [],
      width: 480,
      height: 480,
      radius: "70%",
      radiusMin: 75,
      bgDraw: !0,
      bgColor: "#000",
      opacityOver: 1,
      opacityOut: .05,
      opacitySpeed: 6,
      fov: 800,
      speed: 2,
      fontFamily: "Arial, sans-serif",
      fontSize: "15",
      fontColor: "#fff",
      fontWeight: "normal",
      fontStyle: "normal",
      fontStretch: "normal",
      fontToUpperCase: !1,
      tooltipFontFamily: "Arial, sans-serif",
      tooltipFontSize: "15",
      tooltipFontColor: "#fff",
      tooltipFontWeight: "normal",
      tooltipFontStyle: "normal",
      tooltipFontStretch: "normal",
      tooltipFontToUpperCase: !1,
      tooltipTextAnchor: "left",
      tooltipDiffX: 0,
      tooltipDiffY: 10
    };
    if (void 0 !== e) for (var A in e) {
      e.hasOwnProperty(A) && x.hasOwnProperty(A) && (x[A] = e[A]);
    }
    if (!x.entries.length) return !1;
    var w,
        C,
        S,
        P,
        F,
        D,
        z = [],
        M = !0,
        T = {
      x: 0,
      y: 0
    },
        O = {
      x: 0,
      y: 0,
      z: 0
    },
        E = {
      x: 0,
      y: 0
    },
        k = {
      sx: 0,
      cx: 0,
      sy: 0,
      cy: 0
    },
        I = Math.PI / 180,
        N = "http://www.w3.org/2000/svg";
    window.requestAnimFrame = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
        window.setTimeout(t, 1e3 / 60);
      };
    }(), o();
  }

  window.SVG3DTagCloud = t;
}(), "undefined" != typeof jQuery && !function (t) {
  t.fn.svg3DTagCloud = function (e) {
    var o = arguments;
    return this.each(function () {
      if (t.data(this, "plugin_SVG3DTagCloud")) {
        var i = t.data(this, "plugin_SVG3DTagCloud");
        i[e] ? i[e].apply(this, Array.prototype.slice.call(o, 1)) : t.error("Method " + e + " does not exist on jQuery.svg3DTagCloud");
      } else t.data(this, "plugin_SVG3DTagCloud", new SVG3DTagCloud(this, e));
    });
  };
}(jQuery);
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
},{}]},{},["../../Users/zaaki/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/jquery.svg3dtagcloud.min.js"], null)
//# sourceMappingURL=/jquery.svg3dtagcloud.min.7d9dbede.js.map