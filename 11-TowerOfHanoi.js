//3 rods
//number of disks of different sizes which can slide onto any rod
//puzzle starts with disks neatly stacked in ascending order of size on one rod
//smallest disk at top (conical shape)
//other 2 rods empty to begin with

//goal of puzzle: move entire stack of rods to another rod (can't be original rod where it was stacked before!)
//while maintaining ascending order as well

//RULES
//1) Only 1 disk moved at a time
//2) Each move consists of taking upper disk from a rod and sliding it onto another rod
//on top of other disks that may already be present on that rod.
//3) A larger disk may not be placed on top of a smaller disk

let n=0;
function HanoiPuzzle(disk, rodA, rodB, rodC) {
    if (disk === 1) {
        console.log('Move disk from rod ', rodA, ' to rod ', rodC);
        ++n;
    }
    else {
        HanoiPuzzle(disk-1, rodA, rodC, rodB);
        console.log('Move disk from rod ', rodA, ' to rod ', rodC);
        ++n;
        HanoiPuzzle(disk-1, rodB, rodA, rodC);
  }
  
  return 'Number of move is ' + n;
}

console.log(HanoiPuzzle(10, "A", "B", "C"))

//exponential time O(2^n)
//running time grows rapidly with any increase in input sizes