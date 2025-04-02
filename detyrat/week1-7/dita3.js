//Print pyramyd way of hashtag first way without function
let pyramidStyle = "";
for (let i = 0; i < 6; i++) {
    // Add spaces before the "#" to center the pyramid
    let spaces = " ".repeat(n - i - 1);
    pyramidStyle = spaces + "#".repeat(2 * i + 1); // Number of "#" increases as the row number increases
    console.log(pyramidStyle);
}

//Print pyramyd way of hashtag second way with function
function createPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
      console.log(' '.repeat(rows - i) + '#'.repeat(2 * i - 1));
    }
}
createPyramid(6);


//Print pyramyd way of hashtag third way with function
function pyramid(rows){
    for(let i = 0; i<=rows; i++){
        let spaces = " ".repeat(rows-i)
        let stars = "* ".repeat(i)
    console.log(spaces+stars)
    }
}
pyramid(6);

