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
})({"../client/components/aspect.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Aspect = void 0;

var react_1 = __importDefault(require("react"));

function Aspect(props) {
  return react_1.default.createElement("div", {
    className: "block " + props.className,
    "data-component": props.label
  }, react_1.default.createElement("div", {
    className: "flex aspect aspect-" + props.ratio,
    style: {
      width: props.width
    }
  }, react_1.default.createElement("div", {
    className: "absolute top-0 left-0 right-0 bottom-0 " + (props.center ? "flex items-center justify-center" : "")
  }, props.children)));
}

exports.Aspect = Aspect;
Aspect.defaultProps = {
  ratio: "square",
  width: "auto",
  center: true,
  label: "Aspect",
  className: ""
};
},{}],"../client/components/horizontal-scroll.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalScroll = void 0;

var react_1 = __importDefault(require("react"));

function HorizontalScroll(props) {
  return react_1.default.createElement("div", {
    role: "presentation"
  }, react_1.default.createElement("div", {
    className: "flex items-center horizontal-scroll scrolling-touch py-3",
    role: "presentation"
  }, props.children, react_1.default.createElement("span", {
    className: "pr-48 overflow-hidden invisible opacity-0",
    role: "presentation",
    "aria-hidden": "true"
  }, react_1.default.createElement("span", {
    style: {
      marginLeft: "-9999px"
    }
  }, "|"))));
}

exports.HorizontalScroll = HorizontalScroll;
},{}],"../client/providers/FirebaseProvider.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = exports.firestore = void 0;

var app_1 = __importDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCo5E9oasqwUCnDHmGMaByGkNgU2BoJcMI",
  authDomain: "portfoliowars.firebaseapp.com",
  databaseURL: "https://portfoliowars.firebaseio.com",
  projectId: "portfoliowars",
  storageBucket: "portfoliowars.appspot.com",
  messagingSenderId: "985716813734",
  appId: "1:985716813734:web:37a698e24d1df59fbde967",
  measurementId: "G-6MY43NDCNE"
};
app_1.default.initializeApp(firebaseConfig);
exports.firestore = app_1.default.firestore;
exports.auth = app_1.default.auth;
},{}],"../client/providers/AuthProvider.tsx":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuth = exports.Auth = exports.AuthContext = void 0;

var react_1 = __importStar(require("react"));

var FirebaseProvider_1 = require("./FirebaseProvider");

exports.AuthContext = react_1.default.createContext({
  checkedAuth: false,
  login: function () {
    return new Promise(function () {});
  },
  logout: function () {
    return new Promise(function () {});
  }
});

function Auth(props) {
  var _a = react_1.useState(),
      user = _a[0],
      setUser = _a[1];

  var _b = react_1.useState(false),
      checkedAuth = _b[0],
      setCheckedAuth = _b[1];

  var provider = new FirebaseProvider_1.auth.GithubAuthProvider();
  console.log("render auth", user);
  react_1.useEffect(function () {
    FirebaseProvider_1.auth().onAuthStateChanged(function (potentialUser) {
      setCheckedAuth(false);

      if (potentialUser) {
        setUserPromise(potentialUser);
      }
    });
  }, []);

  function setUserPromise(cb) {
    return __awaiter(this, void 0, void 0, function () {
      var firebaseUser, err_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            setCheckedAuth(false);
            _a.label = 1;

          case 1:
            _a.trys.push([1, 3,, 4]);

            return [4
            /*yield*/
            , Promise.resolve(cb)];

          case 2:
            firebaseUser = _a.sent();
            setUser({
              displayName: firebaseUser.displayName,
              uid: firebaseUser.uid,
              photoURL: firebaseUser.photoURL
            });
            return [3
            /*break*/
            , 4];

          case 3:
            err_1 = _a.sent();
            console.error(err_1);
            return [3
            /*break*/
            , 4];

          case 4:
            setCheckedAuth(true);
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  function logout() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        setUserPromise(FirebaseProvider_1.auth().signOut());
        return [2
        /*return*/
        ];
      });
    });
  }

  function login() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        setUserPromise(FirebaseProvider_1.auth().signInWithPopup(provider));
        return [2
        /*return*/
        ];
      });
    });
  }

  return react_1.default.createElement(exports.AuthContext.Provider, __assign({
    value: {
      user: user,
      checkedAuth: checkedAuth,
      login: login,
      logout: logout
    }
  }, props));
}

exports.Auth = Auth;

function useAuth() {
  return react_1.default.useContext(exports.AuthContext);
}

exports.useAuth = useAuth;
},{"./FirebaseProvider":"../client/providers/FirebaseProvider.tsx"}],"../client/providers/index.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(require("./AuthProvider"), exports);

exports.firebase = __importStar(require("./FirebaseProvider"));
},{"./AuthProvider":"../client/providers/AuthProvider.tsx","./FirebaseProvider":"../client/providers/FirebaseProvider.tsx"}],"../client/components/login-button.tsx":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginButton = void 0;

var react_1 = __importStar(require("react"));

var aspect_1 = require("./aspect");

var react_content_loader_1 = __importDefault(require("react-content-loader"));

var react_fontawesome_1 = require("@fortawesome/react-fontawesome");

var providers_1 = require("../providers");

var react_router_dom_1 = require("react-router-dom");

function LoginButtonHolder(_a) {
  var children = _a.children,
      props = __rest(_a, ["children"]);

  return react_1.default.createElement("button", __assign({
    className: "rounded-lg focus"
  }, props), react_1.default.createElement("span", {
    className: "flex items-center rounded-lg text-font-bold",
    role: "presentation",
    "aria-hidden": "true"
  }, children));
}

function AvatarHolder(props) {
  return react_1.default.createElement(aspect_1.Aspect, {
    width: "40px",
    className: "bg-gray-300 hover:bg-gray-200 rounded-lg overflow-hidden"
  }, props.children);
}

function ButtonText(props) {
  var content;

  if (props.checkedAuth) {
    content = react_1.default.createElement("span", null, props.label);
  } else {
    content = react_1.default.createElement(react_content_loader_1.default, {
      speed: 2,
      width: 110,
      height: 10,
      viewBox: "0 0 110 10",
      style: {
        width: "100%"
      },
      backgroundColor: "var(--white)",
      foregroundColor: "var(--gray-300)"
    }, react_1.default.createElement("circle", {
      cx: "5",
      cy: "5",
      r: "5"
    }), react_1.default.createElement("rect", {
      x: "5",
      y: "0",
      rx: "0",
      ry: "0",
      width: "100",
      height: "10"
    }), react_1.default.createElement("circle", {
      cx: "105",
      cy: "5",
      r: "5"
    }));
  }

  return react_1.default.createElement("span", {
    className: "text-sm uppercase text-center px-3",
    style: {
      width: "90px"
    }
  }, content);
}

function GitHubLogo(props) {
  if (props.checkedAuth) {
    return react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
      icon: ["fab", "github-alt"],
      size: "lg"
    });
  } else {
    return react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
      icon: ["fas", "spinner-third"],
      size: "lg",
      spin: true
    });
  }
}

function ProfilePicture(props) {
  var _a;

  if ((_a = props.user) === null || _a === void 0 ? void 0 : _a.photoURL) {
    return react_1.default.createElement("img", {
      src: props.user.photoURL,
      alt: "GitHub profile picture",
      className: "rounded-l-lg",
      width: "40px"
    });
  } else {
    return react_1.default.createElement("span", {
      className: "font-bold"
    }, "?");
  }
}

function AuthenticatedButton(props) {
  if (props.user) {
    return react_1.default.createElement(LoginButtonHolder, {
      onClick: props.onClick,
      "aria-label": "Show profile links",
      "aria-checked": props["aria-checked"]
    }, react_1.default.createElement(AvatarHolder, null, react_1.default.createElement(ProfilePicture, {
      user: props.user
    })), react_1.default.createElement(ButtonText, {
      label: "Profile",
      checkedAuth: props.checkedAuth
    }));
  } else {
    return react_1.default.createElement(react_1.default.Fragment, null);
  }
}

function UnauthenticatedButton(props) {
  if (!props.user) {
    return react_1.default.createElement(LoginButtonHolder, {
      onClick: props.onLogin,
      "aria-label": "Sign in with GitHub"
    }, react_1.default.createElement(AvatarHolder, null, react_1.default.createElement(GitHubLogo, {
      checkedAuth: props.checkedAuth
    })), react_1.default.createElement(ButtonText, {
      label: "Sign In",
      checkedAuth: props.checkedAuth
    }));
  } else {
    return react_1.default.createElement(react_1.default.Fragment, null);
  }
}

function AuthButton(props) {
  if (props.user) {
    return react_1.default.createElement(AuthenticatedButton, __assign({}, props));
  } else {
    return react_1.default.createElement(UnauthenticatedButton, __assign({}, props));
  }
}

function DropDown(props) {
  var links = props.links || {};
  return react_1.default.createElement("div", {
    className: "absolute top-100 right-0 mt-1 p-1 bg-gray-200 rounded-lg",
    style: {
      zIndex: 20,
      width: "150px"
    }
  }, react_1.default.createElement("div", {
    className: "w-full overflow-hidden"
  }, Object.keys(links).map(function (key) {
    return react_1.default.createElement(react_router_dom_1.Link, {
      to: links[key].link,
      key: key,
      "aria-label": key,
      className: "rounded-lg uppercase block px-3 py-1 hover:bg-gray-100 hover:text-font-bold focus:bg-gray-100 focus:text-font-bold cursor-pointer"
    }, react_1.default.createElement("div", {
      role: "presentation",
      "aria-hidden": "true"
    }, key));
  }), react_1.default.createElement("hr", {
    className: "border-gray-100 my-1"
  }), react_1.default.createElement("div", {
    onClick: props.onLogout,
    role: "link",
    "aria-label": "Logout",
    tabIndex: 0,
    className: "rounded-lg uppercase block px-3 py-1 hover:bg-gray-100 hover:text-font-bold focus:bg-gray-100 focus:text-font-bold cursor-pointer"
  }, react_1.default.createElement("span", {
    "aria-hidden": "true",
    role: "presentation"
  }, "Logout"))));
}

function LoginButton() {
  var auth = providers_1.useAuth();
  var links = {
    profile: {
      link: "/profile"
    },
    challenges: {
      link: "/profile/challenges"
    },
    submissions: {
      link: "/profile/submissions"
    },
    github: {
      link: "#"
    },
    settings: {
      link: "/profile/settings"
    }
  };

  var _a = react_1.useState(false),
      visible = _a[0],
      setDrop = _a[1];

  function clicked() {
    if (auth.user) {
      setDrop(!visible);
    }
  }

  function logout() {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , auth.logout()];

          case 1:
            _a.sent();

            setDrop(false);
            return [2
            /*return*/
            ];
        }
      });
    });
  }

  return react_1.default.createElement("div", {
    className: "relative rounded-lg flex " + (visible ? "" : "")
  }, react_1.default.createElement(AuthButton, {
    user: auth.user,
    checkedAuth: auth.checkedAuth,
    onLogin: auth.login,
    onClick: clicked,
    "aria-checked": visible,
    tabIndex: 0
  }), auth.user && visible ? react_1.default.createElement(DropDown, {
    links: links,
    onLogout: logout
  }) : null);
}

exports.LoginButton = LoginButton;
},{"./aspect":"../client/components/aspect.tsx","../providers":"../client/providers/index.ts"}],"../client/components/theme-button.tsx":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeButton = void 0;

var react_1 = __importStar(require("react"));

var aspect_1 = require("./aspect");

var react_fontawesome_1 = require("@fortawesome/react-fontawesome");

var react_helmet_1 = require("react-helmet");

function getTheme() {
  var loaded = typeof window !== undefined ? JSON.parse(window.localStorage.getItem("dark") || "true") : true;
  return typeof loaded === undefined ? true : loaded;
}

function ThemeButton(props) {
  var _a = react_1.useState(0),
      count = _a[0],
      setCount = _a[1];

  var _b = react_1.useState(true),
      dark = _b[0],
      setDark = _b[1];

  var top = count > 0 ? react_1.default.createElement(react_helmet_1.Helmet, null, react_1.default.createElement("html", {
    className: "text-font-muted bg-white " + (dark ? "dark" : "light")
  })) : react_1.default.createElement(react_helmet_1.Helmet, null, react_1.default.createElement("html", {
    className: "text-font-muted bg-white default-theme"
  }));
  react_1.default.useEffect(function () {
    var theme = getTheme();
    console.log("trying to change theme", theme);
    setCount(function (c) {
      return c + 1;
    });
    setDark(theme);
    window.localStorage.setItem("dark", JSON.stringify(theme));
  }, []);
  return react_1.default.createElement("button", {
    className: "items-center text-font-bold flex bg-gray-300 hover:bg-gray-200 rounded-lg focus " + props.className,
    "aria-label": "theme toggle",
    tabIndex: 0,
    onClick: function () {
      var theme = getTheme();
      setCount(function (c) {
        return c + 1;
      });
      setDark(!theme);
      window.localStorage.setItem("dark", JSON.stringify(!theme));
    },
    "aria-checked": false
  }, top, react_1.default.createElement(aspect_1.Aspect, {
    width: "40px",
    "aria-hidden": "true"
  }, react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: "moon-stars",
    size: "lg"
  })));
}

exports.ThemeButton = ThemeButton;
},{"./aspect":"../client/components/aspect.tsx"}],"../client/components/navigation.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = void 0;

var react_1 = __importDefault(require("react"));

var react_router_dom_1 = require("react-router-dom");

var _1 = require(".");

var theme_button_1 = require("./theme-button");

function Navigation() {
  var pages = {
    challenges: {
      icon: "rocket",
      link: "/"
    },
    submissions: {
      icon: "inbox",
      link: "/submissions"
    },
    leaderboards: {
      icon: "trophy-alt",
      link: "/leaderboards"
    },
    "tips & tricks": {
      icon: "head-side-brain",
      link: "/tips"
    },
    paths: {
      icon: "graduation-cap",
      link: "/paths"
    }
  };
  return react_1.default.createElement("div", {
    className: "mb-3",
    role: "presentation"
  }, react_1.default.createElement("div", {
    className: "mx-auto container justify-between flex items-center py-1",
    role: "presentation"
  }, react_1.default.createElement(react_router_dom_1.Link, {
    to: "/",
    className: "uppercase font-bold text-font-bold text-2xl block focus",
    role: "link",
    "aria-label": "Gig Gym: Go to home page."
  }, react_1.default.createElement("span", {
    "aria-hidden": "true"
  }, "gig gym")), react_1.default.createElement("div", {
    className: "items-center flex",
    "aria-label": "Account Stuff"
  }, react_1.default.createElement(theme_button_1.ThemeButton, {
    className: "mr-2"
  }), react_1.default.createElement(_1.LoginButton, null))), react_1.default.createElement("nav", {
    className: "mx-auto container mt-3",
    role: "presentation",
    "aria-label": "Navigation"
  }, react_1.default.createElement(_1.HorizontalScroll, null, Object.keys(pages).map(function (key) {
    var page = pages[key];
    return react_1.default.createElement(_1.Tag, {
      to: page.link,
      key: key,
      label: key,
      icon: page.icon,
      color: "bg-gray-100"
    });
  }))));
}

exports.Navigation = Navigation;
},{".":"../client/components/index.ts","./theme-button":"../client/components/theme-button.tsx"}],"../client/components/tag.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = void 0;

var react_1 = __importDefault(require("react"));

var react_router_dom_1 = require("react-router-dom");

var react_fontawesome_1 = require("@fortawesome/react-fontawesome");

function icon(name) {
  if (name) {
    return react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
      icon: name,
      size: "sm",
      className: "mr-2"
    });
  } else {
    return "";
  }
}

function Tag(props) {
  return react_1.default.createElement(react_router_dom_1.Link, {
    to: props.to,
    className: "tag focus mr-1 bg-gray-300 hover:text-font-bold hover:bg-gray-200",
    "aria-label": props.label
  }, react_1.default.createElement("span", {
    className: "flex items-center",
    role: "presentation",
    "aria-hidden": "true"
  }, icon(props.icon), react_1.default.createElement("span", {
    className: "uppercase text-sm"
  }, props.label)));
}

exports.Tag = Tag;
},{}],"../client/helpers.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAsyncData = exports.list_to_english = exports.pluralize = void 0;

var react_1 = require("react");

function pluralize(value, label, plural) {
  return value + " " + (value === 1 ? label : plural || label + "s");
}

exports.pluralize = pluralize;

function list_to_english(list) {
  if (list.length === 1) {
    return list[0];
  } else {
    var a = list.slice(0, -2);
    var b = list.slice(-2);
    return a.join(", ") + ", " + b.join(", and ");
  }
}

exports.list_to_english = list_to_english;

function useAsyncData(props, fetcher) {
  var _a, _b;

  var data;
  var loading = false;

  if (typeof window !== "undefined") {
    if (window.__ssr_data__) {
      data = window.__ssr_data__;
      delete window.__ssr_data__;
    } else {
      var setData_1;
      var setLoading_1;
      _a = react_1.useState(undefined), data = _a[0], setData_1 = _a[1];
      _b = react_1.useState(false), loading = _b[0], setLoading_1 = _b[1];
      react_1.useEffect(function () {
        fetcher({
          mode: "browser"
        }).then(function (res) {
          setData_1(res);
          setLoading_1(false);
        });
      }, []);
    }
  } else {
    data = props.staticContext;
  }

  return {
    data: data,
    loading: loading
  };
}

exports.useAsyncData = useAsyncData;
},{}],"../client/assets/devicon.json":[function(require,module,exports) {
module.exports = [{
  "name": "amazonwebservices",
  "tags": ["cloud", "hosting", "server"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain-wordmark"],
    "font": ["original", "plain-wordmark"]
  }
}, {
  "name": "android",
  "tags": ["os", "mobile"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "angularjs",
  "tags": ["framework", "javascript"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "apache",
  "tags": ["php"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "appcelerator",
  "tags": ["app", "mobile"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain-wordmark"],
    "font": ["original", "plain-wordmark"]
  }
}, {
  "name": "apple",
  "tags": ["brand", "mobile"],
  "versions": {
    "svg": ["original"],
    "font": ["original"]
  }
}, {
  "name": "atom",
  "tags": ["editor"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["original", "original-wordmark"]
  }
}, {
  "name": "babel",
  "tags": ["javascript", "transpiler"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "backbonejs",
  "tags": ["javascript", "framework"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "behance",
  "tags": ["social", "website"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "bitbucket",
  "tags": [],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "bootstrap",
  "tags": ["css", "framework"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "bower",
  "tags": ["package", "manager"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "c",
  "tags": ["language"],
  "versions": {
    "svg": ["original", "plain", "line"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "cakephp",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "ceylon",
  "tags": ["language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain"]
  }
}, {
  "name": "chrome",
  "tags": ["browser"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "clojure",
  "tags": ["language"],
  "versions": {
    "svg": ["original", "line", "plain"],
    "font": []
  }
}, {
  "name": "clojurescript",
  "tags": ["language"],
  "versions": {
    "svg": ["original", "plain"],
    "font": []
  }
}, {
  "name": "codeigniter",
  "tags": ["php", "framework"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "coffeescript",
  "tags": ["javascript", "language"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["original", "original-wordmark"]
  }
}, {
  "name": "confluence",
  "tags": [],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "couchdb",
  "tags": ["database"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "cplusplus",
  "tags": ["language"],
  "versions": {
    "svg": ["original", "plain", "line"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "csharp",
  "tags": ["language"],
  "versions": {
    "svg": ["original", "plain", "line"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "css3",
  "tags": ["language", "programming"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "cucumber",
  "tags": ["framework"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "d3js",
  "tags": [],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "debian",
  "tags": ["os", "server"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "devicon",
  "tags": ["iconset"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "django",
  "tags": [],
  "versions": {
    "svg": ["original", "plain", "line"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "docker",
  "tags": ["platform", "deploy"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "doctrine",
  "tags": [],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "dot-net",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "drupal",
  "tags": ["cms"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "electron",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["original", "original-wordmark"]
  }
}, {
  "name": "elm",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "ember",
  "tags": ["framework"],
  "versions": {
    "svg": ["original-wordmark"],
    "font": ["original-wordmark"]
  }
}, {
  "name": "erlang",
  "tags": [],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "express",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["original", "original-wordmark"]
  }
}, {
  "name": "facebook",
  "tags": ["auth"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "firefox",
  "tags": ["browser"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "foundation",
  "tags": ["framework", "css"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "gatling",
  "tags": ["framework", "testing"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "gimp",
  "tags": ["graphic"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain"]
  }
}, {
  "name": "git",
  "tags": ["version-control"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "github",
  "tags": ["version-control"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "gitlab",
  "tags": ["version-control"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "go",
  "tags": ["language"],
  "versions": {
    "svg": ["original", "plain", "line"],
    "font": ["plain", "line"]
  }
}, {
  "name": "google",
  "tags": ["auth"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "gradle",
  "tags": ["task-runner"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "grails",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "groovy",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "grunt",
  "tags": ["task-runner", "nodejs"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "gulp",
  "tags": ["task-runner", "nodejs"],
  "versions": {
    "svg": ["plain"],
    "font": ["plain"]
  }
}, {
  "name": "handlebars",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "heroku",
  "tags": ["cloud"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "html5",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "ie10",
  "tags": ["browser"],
  "versions": {
    "svg": ["original"],
    "font": ["original"]
  }
}, {
  "name": "illustrator",
  "tags": ["editor", "vector"],
  "versions": {
    "svg": ["plain", "line"],
    "font": ["plain", "line"]
  }
}, {
  "name": "inkscape",
  "tags": ["editor", "vector"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "intellij",
  "tags": ["editor"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "ionic",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["original", "original-wordmark"]
  }
}, {
  "name": "jasmine",
  "tags": ["testing"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "java",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "javascript",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "jeet",
  "tags": ["framework", "css"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "jetbrains",
  "tags": [],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "jquery",
  "tags": ["library", "javascript"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "krakenjs",
  "tags": ["nodejs", "framework"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "laravel",
  "tags": ["php", "framework"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "less",
  "tags": ["css", "pre-processor"],
  "versions": {
    "svg": ["plain-wordmark"],
    "font": ["plain-wordmark"]
  }
}, {
  "name": "linkedin",
  "tags": ["social", "auth"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "linux",
  "tags": ["os"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "meteor",
  "tags": ["javascript"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "mocha",
  "tags": ["testing"],
  "versions": {
    "svg": ["plain"],
    "font": ["plain"]
  }
}, {
  "name": "mongodb",
  "tags": ["database"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "moodle",
  "tags": ["platform"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "mysql",
  "tags": ["database", "language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "nginx",
  "tags": ["server"],
  "versions": {
    "svg": ["original"],
    "font": ["original", "original-wordmark", "plain", "plain-wordmark"]
  }
}, {
  "name": "nodejs",
  "tags": ["javascript", "language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "nodewebkit",
  "tags": [],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "npm",
  "tags": ["package", "manager"],
  "versions": {
    "svg": ["original-wordmark"],
    "font": ["original-wordmark"]
  }
}, {
  "name": "oracle",
  "tags": ["database"],
  "versions": {
    "svg": ["original"],
    "font": ["original"]
  }
}, {
  "name": "photoshop",
  "tags": ["editor", "graphic"],
  "versions": {
    "svg": ["plain", "line"],
    "font": ["plain", "line"]
  }
}, {
  "name": "php",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "phpstorm",
  "tags": ["editor"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "postgresql",
  "tags": ["database"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "protractor",
  "tags": ["framework", "javascript"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "pycharm",
  "tags": ["editor"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "python",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "rails",
  "tags": ["framework"],
  "versions": {
    "svg": ["original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "react",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["original", "original-wordmark"]
  }
}, {
  "name": "redhat",
  "tags": ["server", "linux"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "redis",
  "tags": ["server"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "redux",
  "tags": ["framework"],
  "versions": {
    "svg": ["original"],
    "font": []
  }
}, {
  "name": "ruby",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "rubymine",
  "tags": ["editor"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "rust",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["plain"],
    "font": ["plain"]
  }
}, {
  "name": "safari",
  "tags": ["browser"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line-wordmark", "line"],
    "font": ["plain", "plain-wordmark", "line-wordmark", "line"]
  }
}, {
  "name": "sass",
  "tags": ["pre-processor", "css"],
  "versions": {
    "svg": ["original"],
    "font": ["original"]
  }
}, {
  "name": "scala",
  "tags": ["programming", "language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "sequelize",
  "tags": ["database", "language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "sketch",
  "tags": ["application"],
  "versions": {
    "svg": ["original", "original-wordmark", "line", "line-wordmark"],
    "font": ["line", "line-wordmark"]
  }
}, {
  "name": "slack",
  "tags": ["chat"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "sourcetree",
  "tags": ["version-control"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "ssh",
  "tags": ["security"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "stylus",
  "tags": ["css", "pre-processor"],
  "versions": {
    "svg": ["original"],
    "font": ["original"]
  }
}, {
  "name": "swift",
  "tags": ["language"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "symfony",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["original", "original-wordmark"]
  }
}, {
  "name": "tomcat",
  "tags": ["server"],
  "versions": {
    "svg": ["original", "original-wordmark", "line", "line-wordmark"],
    "font": ["line", "line-wordmark"]
  }
}, {
  "name": "travis",
  "tags": ["platform", "integration"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "trello",
  "tags": ["platform", "organize"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "twitter",
  "tags": ["auth"],
  "versions": {
    "svg": ["original"],
    "font": ["plain"]
  }
}, {
  "name": "typescript",
  "tags": ["programming", "transpiler"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "ubuntu",
  "tags": ["os"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "vagrant",
  "tags": ["platform"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "vim",
  "tags": ["editor"],
  "versions": {
    "svg": ["original", "plain"],
    "font": ["plain"]
  }
}, {
  "name": "visualstudio",
  "tags": ["editor"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "vuejs",
  "tags": ["framework"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark", "line", "line-wordmark"],
    "font": ["plain", "plain-wordmark", "line", "line-wordmark"]
  }
}, {
  "name": "webpack",
  "tags": ["package", "manager"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "webstorm",
  "tags": ["editor"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "windows8",
  "tags": ["os"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["original", "original-wordmark"]
  }
}, {
  "name": "wordpress",
  "tags": ["cms"],
  "versions": {
    "svg": ["original", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "yarn",
  "tags": ["package", "manager"],
  "versions": {
    "svg": ["original", "original-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "yii",
  "tags": ["php", "framework"],
  "versions": {
    "svg": ["original", "original-wordmark", "plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}, {
  "name": "yunohost",
  "tags": ["os"],
  "versions": {
    "svg": ["original"],
    "font": []
  }
}, {
  "name": "zend",
  "tags": ["php", "framework"],
  "versions": {
    "svg": ["plain", "plain-wordmark"],
    "font": ["plain", "plain-wordmark"]
  }
}];
},{}],"../client/components/challenge-image.tsx":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChallengeImage = void 0;

var react_1 = __importDefault(require("react"));

var devicon_json_1 = __importDefault(require("../assets/devicon.json"));

function fillTechLogos(skills) {
  var techs = Array.from(devicon_json_1.default);
  var used = techs.filter(function (v) {
    return skills.includes(v.name);
  });
  return used.map(function (v) {
    return __assign(__assign({}, v), {
      image: "/assets/devicon/" + v.name + "/" + v.name + "-original.svg"
    });
  });
}

function ChallengeImage(props) {
  var _a = react_1.default.useState(false),
      loaded = _a[0],
      setLoaded = _a[1];

  var technologies = fillTechLogos(props.skills);
  return react_1.default.createElement("div", {
    "data-component": "challenge-image",
    className: "flex overflow-hidden h-full opacity-0 " + (loaded ? "challenge-image-transition" : "")
  }, technologies.map(function (tech, index) {
    return react_1.default.createElement("div", {
      className: "flex-grow relative h-full",
      key: index
    }, react_1.default.createElement("div", {
      className: "absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center"
    }, react_1.default.createElement("div", {
      className: "w-full h-full p-3 flex items-center justify-center"
    }, react_1.default.createElement("div", {
      className: "absolute right-0 bottom-0 top-0 left-0 colored devicon-" + tech.name + "-plain",
      style: {
        zIndex: 1
      }
    }, react_1.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%"
    }, react_1.default.createElement("defs", null, react_1.default.createElement("pattern", {
      id: "circuit",
      width: "304",
      height: "304",
      patternUnits: "userSpaceOnUse"
    }, react_1.default.createElement("path", {
      fill: "black",
      d: "M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    }))), react_1.default.createElement("rect", {
      width: "100%",
      height: "100%",
      fill: "currentColor"
    }), react_1.default.createElement("rect", {
      width: "100%",
      height: "100%",
      fill: "url(#circuit)",
      opacity: "0.1"
    }))), react_1.default.createElement("img", {
      src: tech.image,
      alt: "tech logo",
      className: "tech-logo",
      onLoad: function () {
        return setLoaded(true);
      }
    }))));
  }));
}

exports.ChallengeImage = ChallengeImage;
},{"../assets/devicon.json":"../client/assets/devicon.json"}],"../client/components/skill-level.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkillLevel = exports.SkillLevels = exports.SkillLevelColors = void 0;

var react_1 = __importDefault(require("react"));

exports.SkillLevelColors = ["blue", "green", "purple", "orange", "red"];
var SkillLevels;

(function (SkillLevels) {
  SkillLevels[SkillLevels["Beginner"] = 0] = "Beginner";
  SkillLevels[SkillLevels["Novice"] = 1] = "Novice";
  SkillLevels[SkillLevels["Itern"] = 2] = "Itern";
  SkillLevels[SkillLevels["Pro"] = 3] = "Pro";
  SkillLevels[SkillLevels["Expert"] = 4] = "Expert";
})(SkillLevels = exports.SkillLevels || (exports.SkillLevels = {}));

function SkillLevel(props) {
  return react_1.default.createElement("div", {
    role: "presentation",
    "aria-hidden": "true"
  }, react_1.default.createElement("div", {
    className: "text-xs uppercase font-bold text-muted"
  }, SkillLevels[props.level]), react_1.default.createElement("div", {
    className: "flex"
  }, exports.SkillLevelColors.map(function (key, index) {
    return react_1.default.createElement("div", {
      key: key,
      className: "py-1 flex-grow rounded-full mr-1 bg-gray-200 " + (props.level >= index ? "bg-" + exports.SkillLevelColors[props.level] : "")
    });
  })));
}

exports.SkillLevel = SkillLevel;
},{}],"../client/components/challenge-card.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChallengeCard = void 0;

var react_1 = __importDefault(require("react"));

var _1 = require(".");

var helpers_1 = require("../helpers");

var react_router_dom_1 = require("react-router-dom");

var react_fontawesome_1 = require("@fortawesome/react-fontawesome");

var challenge_image_1 = require("./challenge-image");

var skill_level_1 = require("./skill-level");

var react_clamp_lines_1 = __importDefault(require("react-clamp-lines"));

function ChallengeAriaDetails(props) {
  var challenge = props.challenge;
  var $details = "challenge-details-" + challenge.uid;
  return react_1.default.createElement("details", {
    className: "hidden",
    id: $details
  }, react_1.default.createElement("summary", null, challenge.title), react_1.default.createElement("p", null, "This challenge mainly covers ", helpers_1.pluralize(challenge.skillsRequired.length, "skill"), ";", " ", helpers_1.list_to_english(challenge.skillsRequired), ". Upon completing this level", " ", challenge.difficulty, " challenge, which has", " ", helpers_1.pluralize(challenge.milestonesCount, "milestone"), ", you will", helpers_1.pluralize(challenge.xp, "experience point")), react_1.default.createElement("p", null, challenge.description));
}

function ChallengeCard(props) {
  var challenge = props.challenge;
  var $details = "challenge-details-" + challenge.uid;
  return react_1.default.createElement(_1.Aspect, {
    label: "ChallengeCard"
  }, react_1.default.createElement("div", {
    className: "challenge-card focus rounded-xl select-none",
    "aria-details": $details,
    "aria-describedby": $details,
    role: "link",
    tabIndex: 0
  }, react_1.default.createElement(ChallengeAriaDetails, {
    challenge: challenge
  }), react_1.default.createElement("div", {
    "aria-hidden": true,
    className: "rounded-t-xl overflow-hidden bg-black",
    style: {
      flexBasis: "50%"
    }
  }, react_1.default.createElement(challenge_image_1.ChallengeImage, {
    skills: challenge.skillsRequired
  })), react_1.default.createElement("div", {
    className: "flex flex-col justify-between bg-gray-400 p-3 rounded-b-xl",
    "aria-hidden": "true",
    style: {
      flexBasis: "50%"
    }
  }, react_1.default.createElement(skill_level_1.SkillLevel, {
    level: challenge.difficulty
  }), react_1.default.createElement("div", null, react_1.default.createElement("div", {
    className: "font-bold text-font-bold"
  }, challenge.title), react_1.default.createElement(react_clamp_lines_1.default, {
    id: "challenge-" + challenge.uid,
    className: "text-sm text-font-muted",
    text: challenge.description,
    lines: 2,
    buttons: false
  })), react_1.default.createElement("div", {
    className: "flex justify-between items-center"
  }, react_1.default.createElement("div", {
    className: "ml-2 flex-grow flex justify-between items-center -mt-2 mr-6"
  })), react_1.default.createElement(react_router_dom_1.Link, {
    to: "/challenge/" + challenge.uid,
    className: "bg-accent hover:bg-accent-bright focus:bg-accent-bright focus text-black btn",
    tabIndex: -1
  }, "View", react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, {
    icon: "chevron-right",
    className: "ml-1"
  })))));
}

exports.ChallengeCard = ChallengeCard;
},{".":"../client/components/index.ts","../helpers":"../client/helpers.ts","./challenge-image":"../client/components/challenge-image.tsx","./skill-level":"../client/components/skill-level.tsx"}],"../client/components/grid.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;

var react_1 = __importDefault(require("react"));

var defaultProps = {
  spacing: {
    x: 1,
    y: 1
  },
  cols: {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 3,
    xl: 3
  }
};

function Grid(props) {
  var cols = props.cols || defaultProps.cols;
  var spacing = props.spacing || defaultProps.spacing;
  var className = "w-1/" + cols.xs + " sm:w-1/" + cols.sm + " md:w-1/" + cols.md + " lg:w-1/" + cols.lg + " xl:w-1/" + cols.xl + " px-" + spacing.x + " py-" + spacing.y;
  var gridSpacing = className.split("1/1").join("full");
  return react_1.default.createElement("div", {
    className: "sm:-mx-" + spacing.x + " -my-" + spacing.y + " mx-0 flex flex-wrap",
    role: "feed",
    "aria-label": props["aria-label"]
  }, react_1.default.Children.map(props.children, function (child) {
    return react_1.default.createElement("div", {
      className: gridSpacing
    }, child);
  }));
}

exports.Grid = Grid;
},{}],"../client/components/index.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(require("./aspect"), exports);

__exportStar(require("./horizontal-scroll"), exports);

__exportStar(require("./login-button"), exports);

__exportStar(require("./navigation"), exports);

__exportStar(require("./theme-button"), exports);

__exportStar(require("./tag"), exports);

__exportStar(require("./challenge-card"), exports);

__exportStar(require("./grid"), exports);

__exportStar(require("./login-button"), exports);
},{"./aspect":"../client/components/aspect.tsx","./horizontal-scroll":"../client/components/horizontal-scroll.tsx","./login-button":"../client/components/login-button.tsx","./navigation":"../client/components/navigation.tsx","./theme-button":"../client/components/theme-button.tsx","./tag":"../client/components/tag.tsx","./challenge-card":"../client/components/challenge-card.tsx","./grid":"../client/components/grid.tsx"}],"../client/pages/about.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = void 0;

var react_1 = __importDefault(require("react"));

var components_1 = require("../components");

exports.About = function () {
  return react_1.default.createElement("div", null, react_1.default.createElement("h1", null, "Hello about"), react_1.default.createElement(components_1.Aspect, {
    className: "bg-green-400",
    width: "40px"
  }, "hello"));
};
},{"../components":"../client/components/index.ts"}],"../client/pages/challenge.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Challenge = void 0;

var react_1 = __importDefault(require("react"));

function Challenge() {
  return react_1.default.createElement("div", null, react_1.default.createElement("h1", null, "Hello Challenge"));
}

exports.Challenge = Challenge;
},{}],"../client/schemas/Challenge.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillChallengeSchema = exports.defaultChallengeSchema = void 0;

var faker = __importStar(require("faker"));

function randomSkill(amount) {
  var res = [];

  for (var i = 0; i <= faker.random.number({
    max: amount,
    min: 1
  }); i++) {
    res.push(faker.random.arrayElement(["html5", "react", "vuejs", "git", "docker", "angularjs", "typescript", "electron", "mysql", "python"]));
  }

  return res;
}

function defaultChallengeSchema() {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.words(12),
    uid: faker.random.uuid(),
    difficulty: faker.random.number({
      max: 4,
      min: 0
    }),
    skillsRequired: randomSkill(3),
    milestonesCount: 3,
    completedMilestonesCount: 1,
    xp: 9,
    submissionCount: 17,
    viewCount: 213,
    color: "green"
  };
}

exports.defaultChallengeSchema = defaultChallengeSchema;

function fillChallengeSchema(doc) {
  var defaults = {
    title: "Lorem",
    description: "est molestiae aliquid ut autem consequuntur facilis harum necessitatibus accusantium ipsum harum aspernatur recusandae ab et est temporibus alias nihil",
    uid: faker.random.uuid(),
    difficulty: 0,
    skillsRequired: ["html5"],
    milestonesCount: 3,
    completedMilestonesCount: 1,
    xp: 9,
    submissionCount: 17,
    viewCount: 213,
    color: "green"
  };

  if (doc != null) {
    defaults = __assign(__assign(__assign({}, defaults), doc.data()), {
      uid: doc.id
    });
  }

  return defaults;
}

exports.fillChallengeSchema = fillChallengeSchema;
},{}],"../client/pages/home.tsx":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = void 0;

var react_1 = __importDefault(require("react"));

var react_helmet_1 = require("react-helmet");

var components_1 = require("../components");

var Challenge_1 = require("../schemas/Challenge");

var FirebaseProvider_1 = require("../providers/FirebaseProvider");

var helpers_1 = require("../helpers");

function renderChallenges(challenges, loading) {
  if (challenges === void 0) {
    challenges = [];
  }

  if (loading) {
    return react_1.default.createElement("h1", null, "LOADING...");
  } else {
    return challenges.map(function (challenge, i) {
      return react_1.default.createElement(components_1.ChallengeCard, {
        key: i,
        challenge: challenge
      });
    });
  }
}

Home.asyncData = function () {
  return __awaiter(void 0, void 0, Promise, function () {
    var data, challenges;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , FirebaseProvider_1.firestore().collection("challenges").get()];

        case 1:
          data = _a.sent();
          challenges = data.docs.map(function (doc) {
            return Challenge_1.fillChallengeSchema(doc);
          });
          return [2
          /*return*/
          , {
            challenges: challenges
          }];
      }
    });
  });
};

function Home(props) {
  var _a = helpers_1.useAsyncData(props, Home.asyncData),
      data = _a.data,
      loading = _a.loading;

  return react_1.default.createElement("div", null, react_1.default.createElement(react_helmet_1.Helmet, null, react_1.default.createElement("title", null, "Gig Gym | Home")), react_1.default.createElement(components_1.Grid, {
    "aria-label": "Challenges Feed",
    spacing: {
      x: 3,
      y: 3
    }
  }, renderChallenges(data === null || data === void 0 ? void 0 : data.challenges, loading)));
}

exports.Home = Home;
},{"../components":"../client/components/index.ts","../schemas/Challenge":"../client/schemas/Challenge.ts","../providers/FirebaseProvider":"../client/providers/FirebaseProvider.tsx","../helpers":"../client/helpers.ts"}],"../client/pages/index.ts":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(require("./about"), exports);

__exportStar(require("./challenge"), exports);

__exportStar(require("./home"), exports);
},{"./about":"../client/pages/about.tsx","./challenge":"../client/pages/challenge.tsx","./home":"../client/pages/home.tsx"}],"../client/routes.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var pages_1 = require("./pages");

exports.routes = [{
  path: "/",
  component: pages_1.Home,
  exact: true
}, {
  path: "/about",
  component: pages_1.About,
  exact: true
}, {
  path: "/challenge/:id/:something",
  component: pages_1.Challenge,
  exact: true
}];
},{"./pages":"../client/pages/index.ts"}],"../client/App.tsx":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var react_1 = __importDefault(require("react"));

var react_router_dom_1 = require("react-router-dom");

var components_1 = require("./components");

var react_helmet_1 = require("react-helmet");

var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");

var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");

var pro_solid_svg_icons_1 = require("@fortawesome/pro-solid-svg-icons");

var providers_1 = require("./providers");

var routes_1 = require("./routes");

fontawesome_svg_core_1.library.add(free_brands_svg_icons_1.fab, pro_solid_svg_icons_1.fas);

exports.App = function () {
  return react_1.default.createElement(providers_1.Auth, null, react_1.default.createElement("div", {
    className: "sm:p-3 p-1"
  }, react_1.default.createElement(react_helmet_1.Helmet, null, react_1.default.createElement("meta", {
    charSet: "utf-8"
  }), react_1.default.createElement("html", {
    className: "text-font-muted bg-white default-theme"
  }), react_1.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react_1.default.createElement("link", {
    rel: "stylesheet",
    href: "/assets/devicon-colors.css"
  }), react_1.default.createElement("link", {
    rel: "stylesheet",
    href: "/assets/main.css"
  })), react_1.default.createElement(components_1.Navigation, null), react_1.default.createElement("div", {
    className: "container mx-auto"
  }, routes_1.routes.map(function (_a, i) {
    var route = __rest(_a, []);

    return react_1.default.createElement(react_router_dom_1.Route, __assign({
      key: i
    }, route));
  }))));
};
},{"./components":"../client/components/index.ts","./providers":"../client/providers/index.ts","./routes":"../client/routes.ts"}],"index.tsx":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactApp = void 0;

var react_1 = __importDefault(require("react"));

var firebase_functions_1 = require("firebase-functions");

var server_1 = require("react-dom/server");

var App_1 = require("../client/App");

var react_router_dom_1 = require("react-router-dom");

var react_helmet_1 = require("react-helmet");

var fontawesome_svg_core_1 = require("@fortawesome/fontawesome-svg-core");

var routes_1 = require("../client/routes");

exports.ReactApp = firebase_functions_1.https.onRequest(function (req, res) {
  return __awaiter(void 0, void 0, void 0, function () {
    var currentRoute, component, asyncData, content, helmet, page;

    var _a;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          currentRoute = routes_1.routes.find(function (route) {
            return react_router_dom_1.matchPath(req.url, route);
          });
          component = currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.component;
          return [4
          /*yield*/
          , (_a = component === null || component === void 0 ? void 0 : component.asyncData) === null || _a === void 0 ? void 0 : _a.call({
            req: req,
            res: res,
            mode: "server"
          })];

        case 1:
          asyncData = _b.sent();
          content = server_1.renderToString(react_1.default.createElement(react_router_dom_1.StaticRouter, {
            location: req.url,
            context: asyncData
          }, react_1.default.createElement(App_1.App, null)));
          helmet = react_helmet_1.Helmet.renderStatic();
          page = "<!DOCTYPE html>\n    <html " + helmet.htmlAttributes.toString() + ">\n    <head>\n        " + helmet.meta.toString() + "\n        " + helmet.title.toString() + "\n        " + helmet.link.toString() + "\n        <style id=\"fontawesome\" type=\"text/css\">" + fontawesome_svg_core_1.dom.css() + "</style>\n        " + helmet.script.toString() + "\n        " + helmet.style.toString() + "\n        <script>window.__ssr_data__ = " + JSON.stringify(asyncData) + "</script>\n        <script defer src=\"/assets/index_ssr.js\"></script>\n    </head>\n    <body " + helmet.bodyAttributes.toString() + ">\n      <div id=\"root\" role=\"presentation\">" + content + "</div>\n    </body>\n    </html>";
          res.send(page);
          return [2
          /*return*/
          ];
      }
    });
  });
});
},{"../client/App":"../client/App.tsx","../client/routes":"../client/routes.ts"}]},{},["index.tsx"], null)