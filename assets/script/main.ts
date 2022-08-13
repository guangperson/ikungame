import { _decorator, Component, Node, resources,assetManager,SpriteAtlas,AssetManager, Sprite,SpriteFrame,AudioSource, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {

    @property(AudioSource)
    public _audioSource: AudioSource = null!;

    start() {
        this.initTopBeiJing();
        this.initMusic();
        this.initButton();
    }

    initTopBeiJing(){
        assetManager.loadBundle('assetsResours', async (err, ab: AssetManager.Bundle) => {
            // 获得精灵节点
            let topSprite = this.node.getChildByPath("topbackground").getComponent(Sprite);
            let downSprite = this.node.getChildByPath("downbackground").getComponent(Sprite);

            // 从ab包加载图集资源
            ab.load('img/beij/spriteFrame',SpriteFrame,(err, resAsset) => {
                topSprite.spriteFrame=resAsset;
            });
            
            ab.load('img/downgg/spriteFrame',SpriteFrame,(err, resAsset) => {
                downSprite.spriteFrame=resAsset;
            });
           
        })
    }


    initButton(){
        this.node.getChildByPath("buttons/buttons1/Button-000")?.on(Node.EventType.TOUCH_START, this.play, this);
    }

    update(deltaTime: number) {
        
    }

    

    initMusic () {
        const button = this.node.getChildByPath("buttons/buttons1/Button-000");
        button.getChildByPath("Label").getComponent(Label).string="鸡你太美";
        button.active=true;
         // 获取 AudioSource 组件
         const audioSource = button.getComponent(AudioSource)!;
         console.log(audioSource);
         // 将组件赋到全局变量 _audioSource 中
         this._audioSource = audioSource;
     }

     play () {
         // 播放音乐
         this._audioSource.play();
     }

     pause () {
         // 暂停音乐
         this._audioSource.pause();
     }
}

