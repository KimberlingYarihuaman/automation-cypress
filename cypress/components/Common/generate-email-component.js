export const generatorEmails = {

    getGenerateEmail: () => {
        //GENERATE EMAILS
        let baseEmail = "kimberling.yarihuaman+"
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const specialCharacters = "-_+"
 
        baseEmail = baseEmail + (Math.floor((Math.random() * 999))) + specialCharacters[Math.floor(Math.random() * specialCharacters.length)] + alphabet[Math.floor(Math.random() * alphabet.length)]

        return baseEmail + ("@gmail.com")
    }
}