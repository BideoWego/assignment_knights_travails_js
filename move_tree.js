const Square = require('./square');

class MoveTree {
  constructor(depth=3, start=[0, 0]) {
    this.start = start;
    this.depth = depth;
    this.boardSize = 8;
    this.buildTree();
  }

  buildTree() {
    const [x, y] = this.start;
    this.tree = this.createNode(x, y);
  }

  createNode(x, y, depth=0, parent=null) {
    const node = new Square(x, y, depth, [], parent);
    if (depth < this.depth) {
      const adjacents = this.adjacents(x, y);
      const that = this;
      adjacents.forEach(adjacent => {
        const [x, y] = adjacent;
        const child = that.createNode(x, y, depth + 1, node);
        node.children.push(child);
      });
    }
    return node;
  }

  adjacents(x, y) {
    const that = this;

    return [
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 1, y + 2],
      [x - 1, y - 2],
      [x - 2, y + 1],
      [x - 2, y - 1]
    ].filter(c => this.isInBounds(...c));
  }

  isInBounds(x, y) {
    return x >= 0 &&
      y >= 0 &&
      x < this.boardSize &&
      y < this.boardSize
  }
}

module.exports = MoveTree;
