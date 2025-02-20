function prime(n)
{
    let Prime = true;
    for(let i=2; i<n; i++)
    {
        if(n%i==0)
        {
            Prime = false;
            
        }
    }

    if(Prime)
    {
        document.write(" this number is Prime ...");
    }
    else{
        document.write("this number  is Not Prime ...");
    }
}

let n=parseInt(prompt("Enter your other "))

prime(n)