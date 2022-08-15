import { _decorator, Component, Node, resources,assetManager,SpriteAtlas,AssetManager, Sprite,SpriteFrame,AudioSource, Label, JsonAsset } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {

    @property(AudioSource)
    public _audioSource: AudioSource = null!;
    @property(AudioSource)
    public array:Array<AudioSource> = new Array<AudioSource>;
    start() {
        this.initTopBeiJing();
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
            ab.load('json/text',JsonAsset,(err, resAsset) => {
                const json = resAsset.json as JsonAsset;
                const row1 = json.row1;
                
                for (let i=0;i<row1.length; i++) {
                    //取得数组数据
                    let list = row1[i];  
                    let data1 = list[0];
                    let data2 = list[1];
                    this.initMusic(i,data2);
                    console.log(data1 +"--"+data2)
                }
                
            });
           
        })
    }

    update(deltaTime: number) {
        

    }

    initMusic (len : number,btnName : string) {
            const button = this.node.getChildByPath("buttons/buttons1/Button-00"+len);
            button.getChildByPath("Label").getComponent(Label).string=btnName;
            button?.on(Node.EventType.TOUCH_START, this.play, this);
            button.active=true;
            // 获取 AudioSource 组件
            const audioSource = button.getComponent(AudioSource)!;
            console.log(audioSource);
            // 将组件赋到全局变量 _audioSource 中
            // this._audioSource = audioSource;
            this.array.push(audioSource);
     }
     play (e) {
        let str = e.currentTarget.name;
        let index = str.substr(str.length-1);
        // 暂停上一个
        // this.array[index].pause();
        // 播放音乐
        this.array[index].play();
        
     }

     pause () {
         // 暂停音乐
         this._audioSource.pause();
     }
}

