export class Splitter {
  selectedFrame: any;
  array_of_childrens: Array<any> = [];

  constructor(selectedFramearg: any) {
    this.selectedFrame = selectedFramearg;
  }

  getChildrens() {
    this.getChild(this.selectedFrame);
    return this.array_of_childrens;
  }

  getChild(node: any) {
    if (Array.isArray(node)) {
      for (const child of node) {
        this.getChild(child);
      }
    }

    if (node.children) {
      this.getChild(node.children);
    } else {
      if (!Array.isArray(node)) {
        this.array_of_childrens.push(node);
      }
    }
  }

  sortYaxis() {
    this.array_of_childrens.sort((a, b) => (a.y < b.y ? -1 : 1)); // Sorting Node on Y-Coordinate
  }
}
