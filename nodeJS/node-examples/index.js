var rect = require('./reactangle');

function solveRect(l, b) {
    console.log("Solving for rectangle with l = "+ l +" and b = "+ b);
    rect(l, b, (err, reactanle) => {
        if(err) {
            console.log("Error: " + err.message)
        }
        else {
            console.log("The area of the rectangle of dimensions l="+l+", and b="+b+" is: "+reactanle.area());
            console.log("The perimeter of the rectangle of dimensions l="+l+", and b="+b+" is: "+reactanle.perimeter())
        }
    });
    console.log("This state after the call to rect()");
};

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);