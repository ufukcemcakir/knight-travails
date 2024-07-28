function knightMoves(start, end) {
    const board = 8;
    const moves = [
      [-2, -1], [-2, 1], [-1, -2], [-1, 2],
      [1, -2], [1, 2], [2, -1], [2, 1]
    ];
  
    function isValidMove(pos) {
      return pos[0] >= 0 && pos[0] < board && pos[1] >= 0 && pos[1] < board;
    }
  
    const queue = [[start]];
    const visited = new Set([start.toString()]);
  
    while (queue.length > 0) {
      const path = queue.shift();
      const currentPos = path[path.length - 1];
  
      if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
        return path;
      }
  
      for (const move of moves) {
        const newPos = [currentPos[0] + move[0], currentPos[1] + move[1]];
        if (isValidMove(newPos) && !visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push([...path, newPos]);
        }
      }
    }
  
    return null;
  }
  
  function printKnightMoves(start, end) {
    const path = knightMoves(start, end);
    if (path) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(pos => console.log(`[${pos[0]},${pos[1]}]`));
    } else {
      console.log("No valid path found.");
    }
  }
  
  printKnightMoves([0, 0], [1, 2]);
  printKnightMoves([0, 0], [3, 3]);
  printKnightMoves([3, 3], [0, 0]);
  printKnightMoves([0, 0], [7, 7]);
  printKnightMoves([3, 3], [4, 3]);