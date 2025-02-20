function factorial(n) 
{
if (n < 0)
{
    document.write(" this number is factorial ")
}
let fact = 1;

for (let i = 2; i <= n; i++) {
    fact *= i;
}

return fact;
}


let i= prompt('ernter You numbar')
let num=parseInt(i)
document.write(`Factorial of ${num} is:`, factorial(num));
