require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "6282135574623"
global.owner2 = "6285743127108"
global.namaowner = "𝚀𝚎𝚗𝚗𝙾𝚏𝚏𝚌"
global.botname = "𝚇𝚣𝙱𝚘𝚝𝚣"
//======== Setting Bot & Link ========//
global.namabot = "𝚇𝚣𝙱𝚘𝚝𝚣" 
global.namabot2 = "𝚇𝚣𝙱𝚘𝚝𝚣"
global.foother = "© 𝚇𝚣𝙱𝚘𝚝𝚣 - 𝚀𝚎𝚗𝚗𝙾𝚏𝚏𝚌"
global.idsaluran = false
global.linkgc = 'https://chat.whatsapp.com/BWwLQSUMcNWJMKRMwbqKVY'
global.linksaluran = "https://whatsapp.com/channel/0029VayiGBeD8SE1xNogpm3h"
global.linkyt = '-'
global.linktele = 't.me/qenoffc'
global.packname = "𝚇𝚣𝙱𝚘𝚝𝚣"
global.author = "𝚀𝚎𝚗𝚗𝙾𝚏𝚏𝚌"

//========== Setting Event ==========//
global.welcome = true
global.autoread = true
global.anticall = false
global.owneroff = false


//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://panel-login-server.cloudvvip.my.id"
global.apikey = "ptla_TffGPUG33NsHaIHg9K1qwlYdsUSI8b6EMsuWN1Ol1Me"
global.capikey = "ptlc_xpjYhzhjg0RIWMJtjmM3cNkXxKZUWpXIy8WxBGR99ay"
                             
//=========== Api Domain ===========//
global.zone1 = "c2047082b74a80e5be03959bad59592a"
global.apitoken1 = "Nop2RDsy0Uyh1WHE17CC59aEhen-ZA61MWNrAqVl"
global.tld1 = "digitalserver.biz.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})