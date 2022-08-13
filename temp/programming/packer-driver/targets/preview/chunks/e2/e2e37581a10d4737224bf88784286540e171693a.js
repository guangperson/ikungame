System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, assetManager, Sprite, SpriteFrame, _dec, _class, _crd, ccclass, property, main;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3179yNaX5B5IoOtEfZCSdD", "main", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass('main'), _dec(_class = class main extends Component {
        start() {
          var _this = this;

          assetManager.loadBundle('assetsResours', /*#__PURE__*/_asyncToGenerator(function* (err, ab) {
            // 释放ab包，不会释放从ab包中加载的资源
            // 释放ab包
            // assetManager.removeBundle(ab)
            var topSprite = _this.node.getChildByPath("topbackground").getComponent(Sprite);

            console.log(topSprite); // 从ab包加载图集资源

            ab.load('img/topbackground/spriteFrame', SpriteFrame, (err, resAsset) => {
              console.log(resAsset);
            }); // 加载声音文件
            // ab.load(path, 类型, 回调)
          }));
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2e37581a10d4737224bf88784286540e171693a.js.map