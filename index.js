const MoveTree = require('./move_tree');
const KnightSearcher = require('./knight_searcher');

const moveTree = new MoveTree(9, [0, 0]);
const knightSearcher = new KnightSearcher(moveTree)

console.log({
  bfs: knightSearcher.bfsFor(4, 2),
  dfs: knightSearcher.bfsFor(4, 2)
});
