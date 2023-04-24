import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Cocos")
export class Cocos extends Component {
  start() {
    console.log("hello");
  }

  update(deltaTime: number) {}
}
