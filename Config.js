// π You Can change this your choice 
// π You Can change this your choice 
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
// π You Can change this your choice
global.emoji01 = ['π'] // π Enter your Emoji 
global.emoji02 = ['π'] //π Enter your Emoji
global.notice = ` *Hi πΎ I m*
*Kasmira Lachintha*
*I am 14 years old developer...*
*From Sri Lanka π±π°*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/zenoixnoize*`  // π Enter Your details and Social Media Links and Anything
global.owner =  ['+94779391333'] //π  Enter Your number
global.premium =  ['+94779391333'] //π  Enter Your number
global.ownernomer = '+94779391333' //π  Enter Your number
global.ownername = 'Kasmira Lachintha' //π Enter Your name
global.botname = 'πΎππππππ π½ππ π' //π Enter Your Bot name
global.footer = 'Β© π―πππΎππΎπ½ π‘π π¦πΊππΏππΎππ½ π‘ππ' //π Enter Your Name
global.ig = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8' // π You Can change this your choice
global.region = 'India, South India, Kerala' // π You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us β­' // π Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.facebook.com/garfieldbots/'// π Enter your Social media link to follow now button
global.welcome = '*ΰ·ΰ·ΰΆ―ΰΆ»ΰΆΊΰ·ΰΆ±ΰ· ΰΆ΄ΰ·ΰ·ΰ·ΰΆΰΆ±ΰ·ΰΆ±ΰ·ΰ· πΌ*' // π You Can change this your choice
global.bye = '*ΰΆΆΰ·ΰΆΊΰ· ΰΆΰΆΊΰ· ΰ·ΰ·ΰΆ­ΰ·ΰΆ±ΰ·ΰΆ­ΰ· ΰ·ΰΆ»ΰ·ΰΆ±ΰ· π½*' // π You Can change this your choice
global.packname = 'GARFIELD-BOTv8'  // π You Can change this your choice 
global.author = 'NOIZE DEVELOPMENT' // π You Can change this your choice 
global.sessionName = 'session' // π You Can change this your choice
global.prefa = ['','!','.','π°οΈ','β','π'] // π You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/nBj4wXS/d71bkcw-56eceb3a-c5cd-4a82-b6ee-52c75c9331f7.jpg' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = 'β­'
global.mess = {
    success: 'ΰ·ΰΆ»ΰ· π¦', // π You Can change this your choice
    admin: '*ΰΆΰΆΆΰΆ§ ΰΆΆΰ· ΰΆΰΆΆ ΰΆΰΆ©ΰ·ΰΆΈΰ·ΰΆ±ΰ· ΰΆ±ΰ·ΰ·ΰ·ΰΆΊΰ·ΰΆ±ΰ· πΉ*', // π You Can change this your choice
    botAdmin: '*ΰΆΈΰΆ§ ΰΆΰΆ©ΰ·ΰΆΈΰ·ΰΆ±ΰ· ΰΆ―ΰ·ΰΆΊΰΆ±ΰ· πΎ*!', // π You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // π You Can change this your choice
    group: '*ΰΆΈΰ·ΰΆ ΰΆΰ·ΰΆ΄ΰ· ΰ·ΰΆ½ΰΆ―ΰ· ΰ·ΰ·ΰΆ­ΰΆ»ΰΆΊΰ· ΰΆ΄ΰ·ΰΆ½ΰ·ΰ·ΰΆ±ΰ· πΎ*', // π You Can change this your choice
    private: 'Features Used Only For Private Chat!', // π You Can change this your choice
    bot: 'This Feature Is Only For Bot', // π You Can change this your choice
    wait: '*ΰΆ§ΰ·ΰΆΰΆΰ· ΰΆΰΆ±ΰ·ΰΆ±ΰΆΰ· π¬*', // π You Can change this your choice
    error: 'Error! Maybe Api Key Is Expiredπ€!', // π You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // π You Can change this your choice
/// Do Not Change π 
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
