System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, assetManager, Sprite, SpriteFrame, AudioSource, Label, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, main;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      assetManager = _cc.assetManager;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      AudioSource = _cc.AudioSource;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3179yNaX5B5IoOtEfZCSdD", "main", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass('main'), _dec2 = property(AudioSource), _dec(_class = (_class2 = class main extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_audioSource", _descriptor, this);
        }

        start() {
          this.initTopBeiJing();
          this.initMusic();
          this.initButton();
        }

        initTopBeiJing() {
          assetManager.loadBundle('assetsResours', async (err, ab) => {
            // 获得精灵节点
            let topSprite = this.node.getChildByPath("topbackground").getComponent(Sprite);
            let downSprite = this.node.getChildByPath("downbackground").getComponent(Sprite); // 从ab包加载图集资源

            ab.load('img/beij/spriteFrame', SpriteFrame, (err, resAsset) => {
              topSprite.spriteFrame = resAsset;
            });
            ab.load('img/downgg/spriteFrame', SpriteFrame, (err, resAsset) => {
              downSprite.spriteFrame = resAsset;
            });
          });
        }

        initButton() {
          var _this$node$getChildBy;

          (_this$node$getChildBy = this.node.getChildByPath("buttons/buttons1/Button-000")) == null ? void 0 : _this$node$getChildBy.on(Node.EventType.TOUCH_START, this.play, this);
        }

        update(deltaTime) {}

        initMusic() {
          const button = this.node.getChildByPath("buttons/buttons1/Button-000");
          button.getChildByPath("Labei").getComponent(Label).string = "鸡你太美";
          button.active = true; // 获取 AudioSource 组件

          const audioSource = button.getComponent(AudioSource);
          console.log(audioSource); // 将组件赋到全局变量 _audioSource 中

          this._audioSource = audioSource;
        }

        play() {
          // 播放音乐
          this._audioSource.play();
        }

        pause() {
          // 暂停音乐
          this._audioSource.pause();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e25eac6c2a9dc964e4f086c9204d3fd0c905e300.js.map