
class KnightSearcher {
  constructor(moveTree) {
    this.moveTree = moveTree;
  }

  bfsFor(x, y) {
    const queue = [this.moveTree.tree];
    let node;
    do {
      node = queue.pop();
      if (x === node.x && y === node.y) {
        break;
      }
      node.children.forEach(c => queue.unshift(c));
    } while (queue.length);
    return this.moves(node);
  }

  dfsFor() {
    const stack = [this.moveTree.tree];
    let node;
    do {
      node = stack.pop();
      if (x === node.x && y === node.y) {
        break;
      }
      node.children.forEach(c => stack.push(c));
    } while (stack.length);
    return this.moves(node);
  }

  moves(node) {
    const moves = [];
    while (node) {
      const { x, y } = node;
      moves.push([x, y]);
      node = node.parent;
    }
    return moves;
  }
}

module.exports = KnightSearcher;
