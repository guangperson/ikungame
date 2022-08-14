System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, assetManager, Sprite, SpriteFrame, AudioSource, Label, JsonAsset, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, main;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      JsonAsset = _cc.JsonAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3179yNaX5B5IoOtEfZCSdD", "main", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("main", main = (_dec = ccclass('main'), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec(_class = (_class2 = class main extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_audioSource", _descriptor, this);

          _initializerDefineProperty(this, "array", _descriptor2, this);
        }

        start() {
          this.initTopBeiJing();
        }

        initTopBeiJing() {
          var _this = this;

          assetManager.loadBundle('assetsResours', /*#__PURE__*/_asyncToGenerator(function* (err, ab) {
            // 获得精灵节点
            var topSprite = _this.node.getChildByPath("topbackground").getComponent(Sprite);

            var downSprite = _this.node.getChildByPath("downbackground").getComponent(Sprite); // 从ab包加载图集资源


            ab.load('img/beij/spriteFrame', SpriteFrame, (err, resAsset) => {
              topSprite.spriteFrame = resAsset;
            });
            ab.load('img/downgg/spriteFrame', SpriteFrame, (err, resAsset) => {
              downSprite.spriteFrame = resAsset;
            });
            ab.load('json/text', JsonAsset, (err, resAsset) => {
              var json = resAsset.json;
              var row1 = json.row1;

              for (var i = 0; i < row1.length; i++) {
                //取得数组数据
                var list = row1[i];
                var data1 = list[0];
                var data2 = list[1];

                _this.initMusic(i, data2);

                console.log(data1 + "--" + data2);
              }
            });
          }));
        }

        update(deltaTime) {}

        initMusic(len, btnName) {
          var button = this.node.getChildByPath("buttons/buttons1/Button-00" + len);
          button.getChildByPath("Label").getComponent(Label).string = btnName;
          button == null ? void 0 : button.on(Node.EventType.TOUCH_START, this.play, this);
          button.active = true; // 获取 AudioSource 组件

          var audioSource = button.getComponent(AudioSource);
          console.log(audioSource); // 将组件赋到全局变量 _audioSource 中
          // this._audioSource = audioSource;

          this.array.push(audioSource);
        }

        play(e) {
          var str = e.currentTarget.name;
          var index = str.substr(str.length - 1); // 暂停上一个

          this.array[index].pause(); // 播放音乐

          this.array[index].play();
        }

        pause() {
          // 暂停音乐
          this._audioSource.pause();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "array", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Array();
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc9934125a6bbc2807b4ebcf17d46d73e326c99b.js.map