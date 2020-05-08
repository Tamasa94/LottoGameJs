(function()
{
    var btn =  document.querySelector(".btn");
    var output = document.querySelector(".output");


    function getRandom(min, max)
    {
        return Math.round(Math.random() * (max - min) + min);
    } 

    function showRandomNumbers()
    {
        let numbers = [];
        let random;

        for(let i = 0; i < 6; i++)
        {
            do
            {
                random = getRandom(1,49);
            }
            while(numbers.includes(random));
           
            numbers.push(random);
        }
        
        output.value = numbers.join(", ");

     }

    btn.onclick = showRandomNumbers;
})() 