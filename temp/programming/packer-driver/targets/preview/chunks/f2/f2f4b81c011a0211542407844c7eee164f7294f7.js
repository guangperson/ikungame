System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, resources, SpriteFrame, _dec, _class, _crd, ccclass, property, main;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
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
          console.log("sss");
          console.log(resources.load('assetsResours/img/topbackground', SpriteFrame, () => {}));
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2f4b81c011a0211542407844c7eee164f7294f7.js.map