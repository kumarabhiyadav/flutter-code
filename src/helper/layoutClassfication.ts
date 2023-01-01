// This Classifiaction file will help to check elements are in
// "Row"  Coloum

import { throws } from "assert";

enum layoutType {
  Coloum = "Coloum",
  Row = "Row",
}

class LayoutClassifiaction {
  frame: any;

  constructor(frame: any) {
    this.frame = frame;
  }
}

class LayoutSepator {}

export class GroupAndNodeSeperator {
  frameNode: any;

  constructor(frameNode: any) {
    this.frameNode = frameNode;
  }

  arrayOfChildrens():Array<any> {
    let arrayOfChildrens = [];
    for (const node of this.frameNode["children"]) {
      let child = this.nodeChildrens(node);
      if (child) arrayOfChildrens.push(child);
    }
    return arrayOfChildrens;
  }

  nodeChildrens(node: any): any {
    if (Array.isArray(node)) {
      for (const nd of node) {
        this.nodeChildrens(nd);
      }
    }

    if (
      node.type == "INSTANCE" ||
      node.type == "GROUP" ||
      node.type == "FRAME"
    ) {
      return this.nodeChildrens(node.children);
    } else {
      return node;
    }
  }
}
