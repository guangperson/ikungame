System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, assetManager, SpriteAtlas, Sprite, _dec, _class, _crd, ccclass, property, main;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      assetManager = _cc.assetManager;
      SpriteAtlas = _cc.SpriteAtlas;
      Sprite = _cc.Sprite;
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
            const topSprite = this.node.getChildByPath("topbackground").getComponent(Sprite);
            console.log(topSprite); // 从ab包加载图集资源

            ab.load('img/topbackground', SpriteAtlas, (e, a) => {
              console.log(e);
              console.log(a);
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
//# sourceMappingURL=3cfcfad01d4f8e875484387e67bb4b83f3fa333f.js.map