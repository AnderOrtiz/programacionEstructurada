import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let temperaturas = [];

rl.question('Ingrese la temparatura del primer día: ', (temp1) => {
    temperaturas.push(temp1);
    rl.question('Ingrese la temparatura del segundo día: ', (temp2) => {
        temperaturas.push(temp2);
        rl.question('Ingrese la temparatura del tercer día: ', (temp3) => {
            temperaturas.push(temp3);
            rl.close();
            temperaturas = temperaturas.map(temp => temp * 1)
            const temperaturaMasAlta = Math.max(...temperaturas)
            console.log(temperaturaMasAlta);
            
        })
    })
})