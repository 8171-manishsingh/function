
function isArmstrong(num) 
{
let originalNum = num;
    let sum = 0;
    let n = num.toString().length;

    while (originalNum > 0) {
        let digit = originalNum % 10;
        sum += Math.pow(digit, n);
        originalNum = Math.floor(originalNum / 10);
    }

    return sum === num;
}

const num = parseInt(prompt("Enter a number: "), );
if (isArmstrong(num)) 
{
    document.write(`${num} is an Armstrong number.`);
} 
else 
{
    document.write('${num} is not Armstrong number');
    }