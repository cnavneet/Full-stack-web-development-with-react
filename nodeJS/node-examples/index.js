var rect = require('./reactangle');

function solveRect(l, b) {
    console.log("Solving for rectangle with l = "+ l +" and b = "+ b);
    if(l<=0 || b<=0) {
        console.log("Rectangle dimensions should be greate than zero: l = "+ l +", and b = "+ b);
    }
    else {
        console.log("The area of the rectangle is: " + rect.perimeter(l, b));
        console.log("The perimeter of the rectangle is: " + rect.perimeter(l, b));
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);