import chalk from "chalk";
// Version 1: Runs the if block (alien_color is 'green')
let alien_color_if = 'green';
if (alien_color_if === 'green') {
    console.log(chalk.green("Congratulations! You just earned 5 points for shooting the alien."));
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// Version 2: Runs the else block (alien_color is 'red')
let alien_color_else = 'red';
if (alien_color_else === 'green') {
    console.log(chalk.green("Congratulations! You just earned 5 points for shooting the alien."));
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
