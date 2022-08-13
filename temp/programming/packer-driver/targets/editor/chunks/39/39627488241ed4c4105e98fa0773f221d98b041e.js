System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, assetManager, Sprite, SpriteFrame, _dec, _class, _crd, ccclass, property, main;

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
          assetManager.loadBundle('assetsResours', async (err, ab) => {
            // 释放ab包，不会释放从ab包中加载的资源
            // 释放ab包
            // assetManager.removeBundle(ab)
            let topSprite = this.node.getChildByPath("topbackground").getComponent(Sprite);
            console.log(topSprite); // 从ab包加载图集资源

            ab.load('img/topbackground', SpriteFrame, (err, resAsset) => {
              console.log(resAsset);
            }); // 加载声音文件
            // ab.load(path, 类型, 回调)
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=39627488241ed4c4105e98fa0773f221d98b041e.js.map