// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🎊'] // 👈 Enter your Emoji 
global.emoji02 = ['🍂'] //👈 Enter your Emoji
global.notice = ` *Hi 😾 I m*
*Kasmira Lachintha*
*I am 14 years old developer...*
*From Sri Lanka 🇱🇰*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/zenoixnoize*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+94779391333'] //👈  Enter Your number
global.premium =  ['+94779391333'] //👈  Enter Your number
global.ownernomer = '+94779391333' //👈  Enter Your number
global.ownername = 'Kasmira Lachintha' //👈 Enter Your name
global.botname = '𝘾𝙃𝙀𝙀𝙈𝙀𝙎 𝘽𝙊𝙏 🍂' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝖦𝖺𝗋𝖿𝗂𝖾𝗅𝖽 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8' // 👈 You Can change this your choice
global.region = 'India, South India, Kerala' // 👈 You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us ⭐' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.facebook.com/garfieldbots/'// 👈 Enter your Social media link to follow now button
global.welcome = '*සාදරයෙන් පිළිගන්නවා 😼*' // 👈 You Can change this your choice
global.bye = '*බායි ආයි හිතුනොත් වරෙන් 😽*' // 👈 You Can change this your choice
global.packname = 'GARFIELD-BOTv8'  // 👈 You Can change this your choice 
global.author = 'NOIZE DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/nBj4wXS/d71bkcw-56eceb3a-c5cd-4a82-b6ee-52c75c9331f7.jpg' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'හරි 🦋', // 👈 You Can change this your choice
    admin: '*උබට බෑ උබ ඇඩ්මින් නෙවෙයිනෙ 😹*', // 👈 You Can change this your choice
    botAdmin: '*මට ඇඩ්මින් දියන් 😾*!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: '*මේක ගෘප් වලදි විතරයි පුලුවන් 😾*', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '*ටිකක් ඉන්නකෝ 💬*', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
