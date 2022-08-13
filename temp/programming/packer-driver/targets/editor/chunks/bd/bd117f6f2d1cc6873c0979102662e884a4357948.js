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
          this.initTopBeiJing();
        }

        initTopBeiJing() {
          assetManager.loadBundle('assetsResours', async (err, ab) => {
            // 获得精灵节点
            let topSprite = this.node.getChildByPath("topbackground").getComponent(Sprite); // 从ab包加载图集资源

            ab.load('img/beij/spriteFrame', SpriteFrame, (err, resAsset) => {
              topSprite.spriteFrame = resAsset;
            });
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd117f6f2d1cc6873c0979102662e884a4357948.js.map