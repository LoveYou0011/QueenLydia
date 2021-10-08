const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/1uW1ub0.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*My creator is Ameer Suhail*
*Creator number : wa.me/917909139146?text=Hi%20MonkSer%20😁.%20*
*Bot setting video : https://youtu.be/_D4ZYuUSXjs*
*Githublink (Setup)  :    https://github.com/LoveYou0011/QueenLydia*
*Audio commads :   https://github.com/LoveYou0011/QueenLydia/tree/master/uploads*
*Sticker commads : https://github.com/LoveYou0011/QueenLydia/tree/master/uploads*
`}) 

}));
