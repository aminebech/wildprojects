process.stdin.resume()
process.stdin.setEncoding('utf8')


console.log('How old are you ? ')

process.stdin.on('data', (age) => {
   if(age !=NaN && age > 0 && age < 99)
   {
        let annee = 2019 - age
        console.log('Tu es née en ' + annee) 
   }
   else 
   console.log("Cette console n'accepte que les nombres entre 1 et 99")

  process.exit()
})