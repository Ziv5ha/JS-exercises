const a = 1; b = -8; c = 12;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
// your code goes here
solutionA = (-b+Math.sqrt((b**2)-(4*a*c)))/2*a
solutionB = (-b-Math.sqrt((b**2)-(4*a*c)))/2*a
console.log(solutionA, solutionB)