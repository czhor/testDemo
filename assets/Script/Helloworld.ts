const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;
        replacer() 
    }
    
}


function replacer() {
    globalThis.tex = new Set()
    // TODO:label创建的纹理还没被hack
    class newTex2D extends cc.renderer.Texture2D{
        constructor(...args) {
            super(...args);
            globalThis.tex.add(this)
        }
        destroy() {
            super.destroy();
            globalThis.tex.delete(this)
        }
    }
    class newTex2D1 extends cc.Texture2D{
        constructor(...args) {
            super(...args);
            globalThis.tex.add(this)
        }
        destroy() {
            super.destroy();
            globalThis.tex.delete(this)
        }
    }
    cc.renderer.Texture2D = newTex2D
    cc.Texture2D = newTex2D1
    
}