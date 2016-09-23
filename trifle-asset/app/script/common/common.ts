/*
 function sum(x: number, y: number): number {
 return x + y;
 }

 console.log(sum(1, 10));

 enum Sex {
 Male = 3, Female = Male * 2
 }

 console.log(Sex.Female);
 console.log(Sex[Sex.Female]);

 var stark = {
 sex: Sex
 };
 stark.sex = Sex.Female;

 console.log(stark.sex);
 */


interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    var newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

var mySquare = createSquare({color: "black"});
console.log(mySquare);

