(async () => {
    const https = require('https')
    const rollDice = numberOfSides => () => {
        return new Promise((resolve, reject) => {
            if(numberOfSides <= 1)
             { 
                reject("dice can't have one or less")
            }else{ 
                const url = `https://www.random.org/integers/?num=1&min=1&max=${numberOfSides}&col=1&base=10&format=plain&rnd=new`
                https.get(url, response => {
                    let data = ''
                
                    response.on('data', chunk => {
                        data += chunk
                    })
                
                    response.on('end', () => {
                        resolve(data)
                    })
                })
            }
        })         
    }

    


    const rollD6 = rollDice(6)
    const rollD20 = rollDice(20)


    console.log(await rollD6())
    console.log(await rollD20())
})()