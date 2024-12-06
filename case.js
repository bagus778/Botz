module.exports = async (Klee, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
let crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const { Client } = require('ssh2');
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Klee.decodeJid(Klee.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Klee.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { Scraper } = require("akiraa-wb");
const Skrep = new Scraper()
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const reseller = JSON.parse(fs.readFileSync("./all/database/reseller.json"))
const { teksbug1 } = require("./all/database/virtex.js")
const { teksbug2 } = require("./all/database/delay.js")
const isReseller = reseller.includes(m.sender)
const { BingImageCreator } = require("./all/bingimg.js");
const { jadibot, stopjadibot, listjadibot } = require('./clonebot/jadibot')
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return Klee.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Paket.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await Klee.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}

async function KleeReply(teks) {
return Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "© Powered By "+namabot, previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `Powered By ${namaowner}`,
inviteExpiration: Date.now() + 1814400000
}
}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By Wyii`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}


const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6285624297893:+62 856-2429-7893\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

if (global.owneroff && !isCmd) {
if (!isGroup && !isOwner) {
let teks = `*Hai Kak* @${m.sender.split('@')[0]}

Maaf *Ownerku Sedang Offline*, Silahkan Tunggu Owner Kembali Online & Jangan Spam Chat`
return Klee.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnail: fs.readFileSync("./media/ownermode.jpg"), renderLargerThumbnail: false, title: "｢ OWNER OFFLINE MODE ｣", mediaUrl: linkgc, sourceUrl: linkyt, previewType: "PHOTO"}}}, {quoted: null})
}}

if (antilink.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Klee.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Klee.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Kamu Akan Saya Keluarkan Dari Grup Ini Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Klee.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

if (antilink2.includes(m.chat)) {
if (!isBotAdmin) return
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Klee.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Klee.sendMessage(m.chat, {text: `@${m.sender.split("@")[0]} Maaf Pesan Kamu Saya Hapus Karna Admin/Owner Bot Menyalakan Fitur *Antilink* Grup Lain!`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ LINK GRUP DETECTED ｣", previewType: "PHOTO"}}}, {quoted: m})
await Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${cmd}* ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


const reply = (teks) => {
return Klee.sendMessage(from, { text: teks, contextInfo:{
mentionedJid: [m.sender], 
"externalAdReply": {"title": ` ${botname}`,"body": `Selamat kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ppuser,"thumbnail": '',"sourceUrl": ``}}}, { quoted:m})} 

switch (command) {
        case "menu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *LIST MENU* •
│ ${prefix}allmenu
│ ${prefix}mainmenu
│ ${prefix}downloadmenu
│ ${prefix}convertmenu
│ ${prefix}panelmenu
│ ${prefix}installpanelmenu
│ ${prefix}jadibotmenu
│ ${prefix}grupmenu
│ ${prefix}ownermenu
╰────────────────➢
`

Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
        
case "allmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *M A I N M E N U* •
│ > ${prefix}yts
│ > ${prefix}remini
│ > ${prefix}sticker
│ > ${prefix}pinterest
│ > ${prefix}qc
│ > ${prefix}dox ( nik )
╰────────────────➢

╭───➢ • *CONVERT MENU* •
│ > ${prefix}toaudio
│ > ${prefix}tomp3
│ > ${prefix}tovn
│ > ${prefix}toptv
│ > ${prefix}tts
│ > ${prefix}toimage
╰────────────────➢

╭───➢ • *PANEL MENU* •
│ > ${prefix}addseller
│ > ${prefix}delseller
│ > ${prefix}listseller
│ > ${prefix}addadmin / cadp
│ > ${prefix}addadmin2  / cadp
│ > ${prefix}cpanel
│ > ${prefix}cpanel2
│ > ${prefix}listpanel
│ > ${prefix}listadmin
│ > ${prefix}deladmin
│ > ${prefix}delpanel
╰────────────────➢

╭───➢ • *DOMAIN MENU* •
│ > ${prefix}listdomain
│ > ${prefix}listsubdomain
│ > ${prefix}delsubdomain
╰────────────────➢

╭───➢ • *GROUP MENU* •
│ > ${prefix}addmember
│ > ${prefix}antilink
│ > ${prefix}antilinkV2
│ > ${prefix}hidetag
│ > ${prefix}tagall
│ > ${prefix}delete
│ > ${prefix}open/close
│ > ${prefix}setnamagc
│ > ${prefix}setdeskgc
│ > ${prefix}setppgc
│ > ${prefix}kick
│ > ${prefix}promote
│ > ${prefix}leavegc
│ > ${prefix}leavegc2
│ > ${prefix}demote
╰────────────────➢

╭───➢ • *OWNER MENU* •
│ > ${prefix}clearsession
│ > ${prefix}anticall
│ > ${prefix}autoread
│ > ${prefix}welcome
│ > ${prefix}setthumbnail
│ > ${prefix}setppbotpanjang
│ > ${prefix}setppbot
│ > ${prefix}setnamabot
│ > ${prefix}setbiobot
╰────────────────➢

╭───➢ • *JADIBOT MENU* •
│ > ${prefix}jadibot
│ > ${prefix}stopjadibot
│ > ${prefix}listjadibot
╰────────────────➢

╭───➢ • *INSTALL  PANEL* •
│ > ${prefix}install-panel
│ > ${prefix}install-wings
│ > ${prefix}configure-wings
│ > ${prefix}installpanel (Install Panel & wings & create node)
│ > ${prefix}startwings
│ > ${prefix}install-stellar
│ > ${prefix}install-billing
│ > ${prefix}install-enigma
│ > ${prefix}uninstall-thema
│ > ${prefix}uninstall-panel
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break

case "jadibotmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩


╭───➢ • *JADIBOT MENU* •
│ > ${prefix}jadibot
│ > ${prefix}stopjadibot
│ > ${prefix}listjadibot
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break

case "convertmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩


╭───➢ • *CONVERT MENU* •
│ > ${prefix}toaudio
│ > ${prefix}tomp3
│ > ${prefix}tovn
│ > ${prefix}toptv
│ > ${prefix}tts
│ > ${prefix}toimage
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "installpanelmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *INSTALL  PANEL* •
│ > ${prefix}install-panel
│ > ${prefix}install-wings
│ > ${prefix}configure-wings
│ > ${prefix}installpanel (Install Panel & wings & create node)
│ > ${prefix}startwings
│ > ${prefix}install-stellar
│ > ${prefix}install-billing
│ > ${prefix}install-enigma
│ > ${prefix}uninstall-thema
│ > ${prefix}uninstall-panel
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "panelmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *PANEL MENU* •
│ > ${prefix}addseller
│ > ${prefix}delseller
│ > ${prefix}listseller
│ > ${prefix}addadmin / cadp
│ > ${prefix}cpanel
│ > ${prefix}listpanel
│ > ${prefix}listadmin
│ > ${prefix}deladmin
│ > ${prefix}delpanel
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "domainmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *DOMAIN MENU* •
│ > ${prefix}listdomain
│ > ${prefix}listsubdomain
│ > ${prefix}delsubdomain
│ > ${prefix}domain1 hostname|ipvps
│ > ${prefix}domain2 hostname|ipvps
│ > ${prefix}domain3 hostname|ipvps
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "grupmenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *GROUP MENU* •
│ > ${prefix}addmember
│ > ${prefix}antilink
│ > ${prefix}antilinkV2
│ > ${prefix}hidetag
│ > ${prefix}tagall
│ > ${prefix}delete
│ > ${prefix}open/close
│ > ${prefix}setnamagc
│ > ${prefix}setdeskgc
│ > ${prefix}setppgc
│ > ${prefix}kick
│ > ${prefix}promote
│ > ${prefix}leavegc
│ > ${prefix}leavegc2
│ > ${prefix}demote
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "ownermenu": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *OWNER MENU* •
│ > ${prefix}clearsession
│ > ${prefix}anticall
│ > ${prefix}autoread
│ > ${prefix}welcome
│ > ${prefix}setthumbnail
│ > ${prefix}setppbotpanjang
│ > ${prefix}setppbot
│ > ${prefix}setnamabot
│ > ${prefix}setbiobot
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "cpanel": case "cpanel2": {
let teksmenu =`
 *Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}\nAda Yang Bisa Saya Bantu Kak?

 ▬▭▬▭[ *ɪɴғᴏ ᴜsᴇʀ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA_* : ${pushname}
│► > *_NUMBER_* : ${m.sender.split('@')[0]}
╰───────────────t⪩
▬▭▬▭[ *sᴛᴀᴛᴜs ʙᴏᴛ* ]▬▭▬▭▬  
╭───────────────⪩
│► > *_NAMA BOT_* : ${global.namabot2}
│► > *_NOMOR CREATOR_* : @${global.owner2}
│► > *_VERSI SCRIPT_* : ${version}
│► > *_RUNTIME_* : ${runtime(process.uptime())}
╰───────────────t⪩

╭───➢ • *Cpanel Menu* •
│ > ${prefix}1gb (nama,nomor)
│ > ${prefix}2gb (nama,nomor)
│ > ${prefix}3gb (nama,nomor)
│ > ${prefix}4gb (nama,nomor)
│ > ${prefix}5gb (nama,nomor)
│ > ${prefix}6gb (nama,nomor)
│ > ${prefix}7gb (nama,nomor)
│ > ${prefix}8gb (nama,nomor)
│ > ${prefix}9gb (nama,nomor)
│ > ${prefix}10gb (nama,nomor)
│ > ${prefix}unli (nama,nomor)
╰────────────────➢
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: { showAdAttribution: true,
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: global.linkyt,mediaType: 1,
renderLargerThumbnail: true }}}, {quoted: qchanel})
}
break
case "addseller": {
if (!isOwner) return KleeReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (reseller.includes(orang)) return reply(`User ${orang.split('@')[0]} Sudah Terdaftar Di Database Reseller Panel!`)
await reseller.push(orang)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
reply(`Berhasil Menjadikan ${orang.split('@')[0]} Sebagai Reseller Panel`)
} else {
return reply(example("@tag/62838XXX"))
}}
break
case "delseller": {
if (!isOwner) return KleeReply(msg.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!reseller.includes(orang)) return reply(`User ${orang.split('@')[0]} Tidak Terdaftar Di Database Reseller Panel!`)
let indx = reseller.indexOf(orang)
await reseller.splice(indx, 1)
await fs.writeFileSync("./all/database/reseller.json", JSON.stringify(reseller))
reply(`Berhasil Menghapus ${orang.split('@')[0]} Dari Database Reseller Panel`)
} else {
return reply(example("@tag/62838XXX"))
}}
break
case "listseller": {
if (!isOwner) return KleeReply(msg.owner)
if (reseller.length < 1) return reply("Tidak Ada Reseller Panel")
let teksnya = ` LIST RESELLER PANEL⚡\n\n`
reseller.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
Klee.sendMessage(m.chat, {text: teksnya, mentions: [...reseller]}, {quoted: qtoko})
}
break
case "yts": {
if (!text) return reply(example("Dj Tiktok"))
await reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return reply(mess.error)
let teks = '\n*🔎Hasil Pencarian YOUTUBE*\n\n'
for (let i of data.all) {
teks += `*◦ Judul :* ${i.title}
*◦ Channel :* ${i.author?.name || "unknown"}
*◦ Durasi :* ${i?.timestamp || "unknown"}
*◦ Link Url :* ${i.url}\n\n`
}
reply(teks)
}).catch(err => reply(err.toString()))
}
break

case "setthumb": case "setthumbnail": {
if (!isOwner) return KleeReply(msg.owner)
if (!/image/g.test(mime)) return reply("Kirim/Balas Foto")
await Klee.downloadAndSaveMediaMessage(qmsg, "./media/thumbnail.jpg", false)
reply("Berhasil Mengganti Foto Thumbnail Menu ✅")
}
break
case "setppbot": case "setpp": {
if (!isOwner) return KleeReply(msg.owner)
if (/image/g.test(mime)) {
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
reply("Berhasil Mengganti Foto Profile Bot ✅")
} else return reply(example('dengan mengirim foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return KleeReply(msg.owner)
if (/image/g.test(mime)) {
var medis = await Klee.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await Klee.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return reply(example('dengan mengirim foto'))
}
break
case "setnamabot": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example('teksnya'))
Klee.updateProfileName(text)
reply("Berhasil Mengganti Nama Bot ✅")
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example('teksnya'))
Klee.updateProfileStatus(text)
reply("Berhasil Mengganti Bio Bot ✅")
}
break
case "listdomain": {
var teks = `*List Domain Yang Tersedia :*

.domain1 ${global.tld1}
.domain2 ${global.tld2}
.domain3 ${global.tld3}

*Contoh Cara Membuat Subdomain :*
ketik *.domain1* hostname|ipvps

*Contoh Cara Melihat Subdomain :*
ketik *.listsubdomain domain1*
`
reply(teks)
}
break
case "listsubdomain": case "listsubdo": {
if (!isOwner) return KleeReply(msg.owner)
if (!args[0]) return reply(example("domain1\n\nketik *.listdomain*\nUntuk melihat list domainnya"))
let zonenya
let apinya
let dom = args[0].toLowerCase()
if (/domain1/.test(dom)) {
zonenya = global.zone1
apinya = global.apitoken1
} else if (/domain2/.test(dom)) {
zonenya = global.zone2
apinya = global.apitoken2
} else if (/domain3/.test(dom)) {
zonenya = global.zone3
apinya = global.apitoken3
}
axios.get(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,{
headers: {
Authorization: "Bearer " + `${apinya}`,
"Content-Type": "application/json",
},
}).then(async (res) => {
if (res.data.result.length < 1) return reply("Tidak Ada Subdomain")
var teks = `*🌐 LIST SUBDOMAIN ${dom.toUpperCase()}*\n\n*Total Subdomain :* ${res.data.result.length}\n\n`
await res.data.result.forEach(e => teks += `*Domain :* ${e.name}\n*IP :* ${e.content}\n\n`)
return reply(teks)
})
}
break
case "domain1": case "domain2": case "domain3": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("host|ip"))
if (!text.split("|")) return reply(example("host|ip"))
let zonenya
let apinya
let tldnya
let dom = args[0].toLowerCase()
if (/domain1/.test(command)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(command)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(command)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
}
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
   
let raw1 = text
if (!raw1) return reply(example("host|ip"))
let host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "")
if (!host1) return reply("Hostname Tidak Valid!, Hostname Hanya Mendukung Tanda Strip(-) Atau Titik(.)")
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return reply(ip1 ? "IP Tidak Valid!" : "Isi IP Servernya!")
await subDomain1(host1.toLowerCase(), ip1).then((e) => {
if (e['success']) reply(`┏━━━━━━━━━━━━━━━━━━━\n┣ Ip = ${e['ip']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ Link = ${e['name']}\n┗━━━━━━━━━━━━━━━━━━━\n┣ 𝚇𝚣𝙱𝚘𝚝𝚣 - 𝚀𝚎𝚗𝚗𝙾𝚏𝚏𝚌`)
else reply(`${e['error']}`)
})}
break
case "delsubdo": case "delsubdomain": {
if (!isOwner) return reply(msg.owner)
if (!text) return reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
if (!text.split("|")) return reply(example("domain1|subdo\n\nUntuk melihat listdomain ketik *.listdomain*"))
var [pusat, sub] = text.split("|")
var zonenya
var apinya
var tldnya
if (/domain1/.test(pusat)) {
zonenya = global.zone1
apinya = global.apitoken1
tldnya = global.tld1
} else if (/domain2/.test(pusat)) {
zonenya = global.zone2
apinya = global.apitoken2
tldnya = global.tld2
} else if (/domain3/.test(pusat)) {
zonenya = global.zone3
apinya = global.apitoken3
tldnya = global.tld3
} else return reply("Domain Tidak Ditemukan")
if (!sub.includes(".")) return reply("Format Subdomain Tidak Valid!")
var host = sub.toLowerCase()
var dom = null
var id = null
await axios.get(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records`, {
headers: {
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
},
}).then(async (res) => {
await res.data.result.forEach((e) => {
if (e.name == host) {
dom = e.name
id = e.id
}})
})
if (dom == null && id == null) return reply("Subdomain Tidak Ditemukan")
await fetch(`https://api.cloudflare.com/client/v4/zones/${zonenya}/dns_records/${id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
Authorization: "Bearer " + apinya,
"Content-Type": "application/json",
}
})
reply(`Berhasil Menghapus Subdomain *${dom}* Dari Domain *${tldnya}*`)
}
break
case "bingimg" : {
  if (!text) throw "Masukan prompt nya";
  await reply("Please wait...");
  try {
    const res = new Skrep.Ai.Bingimg({
      cookie: `1cB9TU7gDdnz1dfnaKIICopSXVvQRgvhwDHzcwTw8XEToMFfvYNJUlW28Bf_gKDzDEGnq9MNjOhhy0Pzl7hdhUVba7E8nYqdynD4f6N9X5gP-M6H5HHmbZ1RMibLBrImL5xl3CGawNTgbiqbxIZh9ultsr0jjjN3QLoclj8madP4I7udcheZQGcbfJrIVhV4ld4BztIv5hp6aTpfwlutmGRdOipLcTXXbnVSnm8uT-oQ`,
    });
    const data = await res.createImage(text);

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        try {
          if (!data[i].endsWith(".svg")) {
            await Klee.sendMessage(m.chat, { image: {
               url: data[i]
               },
              caption:  `Image *(${i + 1}/${data.length})*\n\n*Prompt*: ${text}`,
              },
              { quoted: m });
          }
        } catch (error) {
          console.error(`Error sending file: ${error.message}`);
          await reply(`Failed to send image *(${i + 1}/${data.length})*`);
        }
      }
    } else {
      await m.reply("No images found.");
    }
  } catch (error) {
    console.error(`Error in handler: ${error.message}`);
    await m.reply(`${error}\n\n${error.message}`);
  }
}
break;
case "tts": {
if (!text) return reply(example("Hallo saya manusia"))
if (text.length >= 300) return reply("Jumlah huruf harus di bawah 300!")
reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
Klee.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return reply(e.toString())
}
}
break

case "qc": {
if (!text) return reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
reply(msg.wait)
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": reswarna,
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = makeid+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return reply("Error")
await Klee.sendStimg(m.chat, tempnya, m, {packname: namabot})
fs.unlinkSync(`./${tempnya}`)
})
})
}
break


case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return reply("Durasi vidio maksimal 30 detik!")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
Klee.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return reply(example("dengam mengirim/balas vidio"))
}
}
break
case "toimage": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return reply(example('dengan reply sticker'))
reply(msg.wait)
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
Klee.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return reply(example('dengan mengirim audio/vidio'))
reply(msg.wait)
await Klee.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
Klee.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(example('dengan mengirim vidio'))
if ((qmsg).seconds > 30) return reply("Durasi vidio maksimal 30 detik")
reply(msg.wait)
await Klee.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
Klee.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return reply(example("dengan mengirim foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return reply("Durasi vidio maksimal 15 detik!")
}
reply(msg.wait)
var media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.sendStimg(m.chat, media, m, {packname: global.packname})
await fs.unlinkSync(media)
}
break
case "tourl": {
if (!/image/.test(mime)) return reply(example("dengan mengirim foto"))
await reply(msg.wait)
var fotonya = await Klee.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await reply(`Link Tautan :\n${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": {
if (!isOwner) return KleeReply(msg.owner)
Klee.public = true
reply("Berhasil mengganti mode bot menjadi *Public*")
}
break
case "self": {
if (!isOwner) return KleeReply(msg.owner)
Klee.public = false
reply("Berhasil mengganti mode bot menjadi *Self*")
}
break
case "get": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply("linknya")
try {
var check = await fetchJson(text)
reply(JSON.stringify(check, null, 2))
} catch (e) {
return reply(e.toString())
}}
break



case "mediafire": {
if (!text) return reply(example("linknya"))
if (!text.includes('mediafire.com')) return reply("Link Tautan Tidak Valid!")
reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return reply("Gagal mendownload, ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return reply("Gagal mendownload, ukuran file terlalu besar")
if (res.url == "") return reply(mess.error)
Klee.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download Berhasil ✅"}, {quoted: m})
}).catch((e) => reply(e.toString()))
}
break
case "pinterest": case "pin": {
if (!text) return reply(example("tobrut"))
reply(msg.wait)
await pinterest(text).then((res) => {
if (res.length < 1) return reply("Error, Foto Tidak Ditemukan")
let jumlah = 5
if (res.length < jumlah) jumlah = res.length
for (let e = 0; e < jumlah; e++) {
Klee.sendMessage(m.chat, {image: {url: res[e]}, caption: "Done Bang ✅"}, {quoted: m})
}
}).catch(e => reply(e.toString()))
}
break

case "owner": {
Klee.sendContact(m.chat, [owner], "Developer Bot WhatsApp", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: ppuser, 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: ``, 
mediaType: 1
}}})
}
break
case "antilink": {
if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
if (!args[0]) return reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return reply("*Antilink* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
reply("Berhasil Menyalakan *Antilink* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return reply("*Antilink* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else {
return reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.owner)
if (!args[0]) return reply(example("on/off\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return reply("*AntilinkV2* Di Grup Ini Sudah Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
reply("Berhasil Menyalakan *AntilinkV2* Di Grup Ini ✅\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return reply("*AntilinkV2* Di Grup Ini Belum Aktif!\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Ini")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
reply("Berhasil Mematikan *Antilink* Di Grup Ini ❌\n\nKetik *.statusgc* Untuk Melihat Status Setting Grup Inii")
} else {
return reply(example("on/off"))
}}
break
case "welcome": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return reply("*Welcome* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = true
reply("Berhasil Menyalakan *Welcome ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!welcome) return reply("*Welcome* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
welcome = false
reply("Berhasil Mematikan *Welcome ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoread": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return reply("*Autoread* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = true
reply("Berhasil Menyalakan *Autoread ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!autoread) return reply("*Autoread* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
autoread = false
reply("Berhasil Mematikan *Autoread ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "anticall": {
if (!isOwner) return KleeReply(msg.owner)
if (!text) return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return reply("*Anticall* Sudah Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = true
reply("Berhasil Menyalakan *Anticall ✅*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else if (text.toLowerCase() == "off") {
if (!anticall) return reply("*Anticall* Sudah Tidak Aktif!\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
anticall = false
reply("Berhasil Mematikan *Anticall ❌*\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot")
} else {
return reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return KleeReply(msg.owner)
var teks = `
*List Status Bot Settings :*

* Autoread : ${global.autoread ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Anticall : ${global.anticall ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}
* Welcome : ${global.welcome ? "*Aktif ✅*" : "*Tidak Aktif ❌*"}

*Contoh Penggunaan :*
Ketik *.autoread* on/off`
reply(teks)
}
break
case "statusgc": {
if (!isGroup) return KleeReply(msg.group)
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
var anti1 = "Aktif ✅"
var anti2 = "Aktif ✅"
if (!antilink2.includes(m.chat)) anti2 = "Tidak Aktif ❌"
if (!antilink.includes(m.chat)) anti1 = "Tidak Aktif ❌"
var teks = `
*List Status Grup Settings :*

* Antilink : *${anti1}*
* AntilinkV2 : *${anti2}*

*Contoh Penggunaan :*
Ketik *.antilink* on/off
`
Klee.senText(m.chat, teks, qchanel)
}
break
case "setppgc": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (/image/g.test(mime)) {
let media = await Klee.downloadAndSaveMediaMessage(qmsg)
await Klee.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
reply("Berhasil Mengganti *Profil* Grup")
} else return reply(example('dengan mengirim foto'))}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return reply(example('teksnya'))
const gcname = metadata.subject
await Klee.groupUpdateSubject(m.chat, text)
reply(`Berhasil Mengganti Nama Grup *${gcname}* Menjadi *${text}*`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return reply(example('teksnya'))
await Klee.groupUpdateDescription(m.chat, text)
reply(`Berhasil Mengganti *Deskripsi* Grup`)
}
break
case "open": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
await Klee.groupSettingUpdate(m.chat, 'not_announcement')
reply("Berhasil Mengganti Setelan Grup Menjadi Anggota Dapat Mengirim Pesan")
}
break
case "close": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
await Klee.groupSettingUpdate(m.chat, 'announcement')
reply("Berhasil Mengganti Setelan Grup Menjadi Hanya Admin Yang Dapat Mengirim Pesan")
}
break
case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return KleeReply(msg.admin)
if (!m.quoted) return reply("Reply Pesan Yang Ingin Di Hapus")
if (m.quoted.sender == botNumber) {
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return KleeReply(msg.adminbot)
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return KleeReply(msg.owner)
if (!m.quoted) return reply("Reply Pesan Yang Ingin Di Hapus")
Klee.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => reply(`Berhasil Memberhentikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => reply(err.toString()))
} else return reply(example('62838XXX'))}
break
case "promote": case "promot": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => reply(`Berhasil Menjadikan ${target.split("@")[0]} Sebagai Admin Grup Ini`)).catch((err) => reply(err.toString()))
} else return reply(example('62838XXX'))}
break
case "add": case "addmember": {
if (!isGroup) return KleeReply(msg.group)
if (!args[0]) return reply(example("62838XXX"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await Klee.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return reply("Nomor Tersebut Tidak Terdaftar Di WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return reply("Gagal Menambahkan Member, Karna Admin Tidak Mengizinkam Peserta Dapat Add Member")
var a = await Klee.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return reply(`Berhasil Menambahkan ${teks.split("@")[0]} Kedalam Grup Ini`)
if (a[0].status == 408) return reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
if (a[0].status == 409) return reply(`Dia Sudah Ada Di Dalam Grup Ini!`)
if (a[0].status == 403) return reply(`Gagal Menambahkan ${teks.split("@")[0]} Ke Dalam Grup Ini, Karna Target Tidak Mengizinkan Orang Lain Dapat Menambahkan Dirinya Ke Dalam Grup`)
}
break
case "kik": case "kick": {
if (!isGroup) return KleeReply(msg.group)
if (!isBotAdmin) return KleeReply(msg.adminbot)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Klee.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Klee.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('nomornya/@tag'))}
break
case "hidetag": case "z": case "h": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!m.quoted && !text) return reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Klee.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return KleeReply(msg.group)
if (!isAdmin && !isOwner) return KleeReply(msg.admin)
if (!text) return reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Klee.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gbb": case "10gb": case "unli": {
    if (!isPremium && !isOwner) return KleeReply("Maaf Kamu Belum Terdaftar Di Database Resseler Silahkan Untuk Menghubungi Owner")
if (!jangan) return KleeReply("Group Belum Terdaftar")

if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("nama,6283XXX"))
if (!text.split(",")) return reply(example("nama,6283XXX"))
var buyyer = text.split(",")[0].toLowerCase()
if (!buyyer) return reply(example("nama,6283XXX"))
var ceknya = text.split(",")[1]
if (!ceknya) return reply(example("nama,6283XXX"))
var client = text.split(",")[1].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var check = await Klee.onWhatsApp(ceknya)
if (!check[0].exists) return reply("Nomor Buyyer Tidak Valid!")
global.panel2 = [buyyer, client]
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1125"
disknya = "1125"
cpu = "40"
} else if (command == "2gb") {
ram = "2125"
disknya = "2125"
cpu = "60"
} else if (command == "3gb") {
ram = "3125"
disknya = "3125"
cpu = "80"
} else if (command == "4gb") {
ram = "4125"
disknya = "4125"
cpu = "100"
} else if (command == "5gb") {
ram = "5125"
disknya = "5125"
cpu = "120"
} else if (command == "6gb") {
ram = "6125"
disknya = "6125"
cpu = "140"
} else if (command == "7gb") {
ram = "7125"
disknya = "7125"
cpu = "160"
} else if (command == "8gb") {
ram = "8125"
disknya = "8125"
cpu = "180"
} else if (command == "9gb") {
ram = "9124"
disknya = "9125"
cpu = "200"
} else if (command == "10gb") {
ram = "10125"
disknya = "10125"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
if (!jangan) return KleeReply("Grup Belum Terdaftar")
let username = global.panel2[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username)
let password = username + "1221"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
await reply(`*Berhasil Membuat Akun Panel ✅*\n\n* *User ID :* ${user.id}\n* *Server ID :* ${server.id}\n* *Nama :* ${name} Server\n* *Ram :* ${ram == "0" ? "Unlimited" : ram.charAt(0) + "GB"}\n* *CPU :* ${cpu == "0" ? "Unlimited" : cpu+"%"}\n* *Storage :* ${disknya == "0" ? "Unlimited" : disknya.charAt(0) + "GB"}\n* *Created :* ${desc}\n\nData Akun Sudah Dikirim Ke Nomor ${global.panel2[1].split('@')[0]}`)
var datapanel = `Hai @${global.panel2[1].split`@`[0]}
*BERIKUT DATA AKUN PANEL ANDA*

* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Link Login :* ${global.domain}

Catatan Tambahan
> dilarang bagi-bagi panel secara gratis
> dilarang menyebarkan data anda
> dilarang menyebarkan Link login
> info selengkapnya hubungi owner panel
`
Klee.sendMessage(global.panel2[1],{text: datapanel }, { quoted: Klee.chat })
}
break
case "addadmin": {
if (!isOwner) return m.reply(`*Fitur Ini hanya dapat di akses Oleh Owner Seseorang!*`)
if (!isOwner) return m.reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "024"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Admin",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: USER

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
CREATED AT: ${user.created_at}
`
    const listMessage = {

        text: tks,

    }

	

    await Klee.sendMessage(m.chat, listMessage)

    await Klee.sendMessage(nomornya, {

        text: `_*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*_\n

Username :  ${username}
Password: ${password}
Login: ${domain}

Catatan Tambahan
> dilarang bagi-bagi panel secara gratis
> dilarang menyebarkan data anda
> dilarang menyebarkan Link login
> info selengkapnya hubungi owner panel
`,

    })        
}

break
case "listpanel": case "listp": case "listserver": {
if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!isOwner) return KleeReply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return reply("Tidak Ada Server Bot")
let messageText = "*LIST SERVER PANEL BOT⚡*\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\`📡ID Server ${s.id}\`
* Nama Server : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Storage : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n\n`
}

messageText += ` Total Server : *${res.meta.pagination.count} Server*`;
  
  await Klee.sendMessage(m.chat, { text: messageText }, { quoted: qtoko })
}
break
case "delpanel": case "hapuspanel": {
if (!isOwner) return KleeReply(msg.owner)
if (global.apikey.length < 1) return reply("Apikey Tidak Ditemukan!")
if (!args[0]) return reply(example("idservernya\n\nuntuk melihat id server ketik *.listpanel*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan")
reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break

case "jadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  jadibot(Klee, m, from)
}
break
case "stopjadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  stopjadibot(Klee, from)
}
break
case "listjadibot":{
  if (isGroup) return reply("Features Used Only For Private Chat!")
  listjadibot(Klee, m)
}



break
case 'install-panel':{
if (!isOwner) return ('Maaf Hanya Untuk owner')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}install-panel ipvps,password,domain`)
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = 'bash <(curl -s https://pterodactyl-installer.se)';

const conn = new Client();
conn.on('ready', () => {
          m.reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
         if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`admin1221\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 90000));
m.reply(`*DATA PANEL ANDA*\n\n*USERNAME:* adm\n*PASSWORD:* admin12\n*LOGIN:* ${subdomain}\nNote: harus Install Wings Ketik .install-wings\nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA`)
}

break
case 'install-wings':{
if (!isOwner && !isReseller ) return ('Maaf Hanya Untuk VallzOffc')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}install-panel ipvps,password,domainpanel,domainnode`)
let ipvps = t[0];
let passwd = t[1];
let subdomain = t[2];
let domainnode =t[3];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = 'bash <(curl -s https://pterodactyl-installer.se)';

const conn = new Client();
conn.on('ready', () => {
          m.reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
          if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 90000));
m.reply(`SUCCES INSTALL WINGS MOHON UNTUK CONFIGURE`)
}

break
case 'installpanel': {
    if (!isOwner) return m.reply("Khusus Owner Bodoh")
    let t = text.split(',');
    if (t.length < 5) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}installpanel ipvps,password,domainpnl,domainnode,ramvps (Contoh 80000 8gb)`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
        m.reply('*PROSES PENGINSTALLAN PANEL SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
                installWings(conn, domainnode, subdomain, password, ramvps);
            }).on('data', (data) => {
                handlePanelInstallationInput(data, stream, subdomain, password);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
        m.reply('*PROSES PENGINSTALLAN WINGS SEDANG BERLANGSUNG MOHON TUNGGU 5-10MENIT*');
        conn.exec(commandWings, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
                createNode(conn, domainnode, ramvps, subdomain, password);
            }).on('data', (data) => {
                handleWingsInstallationInput(data, stream, domainnode, subdomain);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
        const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)';
        m.reply('*MEMULAI CREATE NODE & LOCATION*');

        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
                conn.end();
                sendPanelData(subdomain, password);
            }).on('data', (data) => {
                handleNodeCreationInput(data, stream, domainnode, ramvps);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    function sendPanelData(subdomain, password) {
        m.reply(`*DATA PANEL ANDA*\n\n*USERNAME:* admin\n*PASSWORD:* ${password}\n*LOGIN:* ${subdomain}\n\nNote: Semua Instalasi Telah Selesai Silahkan Create Allocation Di Node Yang Di buat Oleh Bot Dan Ambil Token Configuration dan ketik .startwings (token) \nNote: *HARAP TUNGGU 1-5MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
        if (data.toString().includes('Input')) {
            stream.write('0\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('Asia/Jakarta\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('adm\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${password}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('yes\n');
        }
        if (data.toString().includes('Please read the Terms of Service')) {
            stream.write('A\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
        if (data.toString().includes('Input')) {
            stream.write('1\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${subdomain}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('user\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('1248\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write(`${domainnode}\n`);
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('admin@gmail.com\n');
        }
        if (data.toString().includes('Input')) {
            stream.write('y\n');
        }
        console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
        stream.write('Xyra\n');
        stream.write('4\n');
        stream.write('SGP\n');
        stream.write('Auto Install Node\n');
        stream.write(`${domainnode}\n`);
        stream.write('NODES\n');
        stream.write(`${ramvps}\n`);
        stream.write(`${ramvps}\n`);
        stream.write('1\n');
        console.log('STDOUT: ' + data);
    }
}

break

case 'configure-wings': case 'startwings': {
if (!isOwner) return ('Maaf Hanya Untuk Owner')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}startwings ipvps,paaswdvps,token ( token configure )`)
let ipvps = t[0];
let passwd = t[1];
let commandwings = t[2];
const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = `${commandwings}`;

const conn = new Client();
conn.on('ready', () => {
          m.reply('*PROSES CONFIGURE WINGS*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }

          if (data.toString().includes('Input')) {
            stream.write('systemctl start wings\n');
          }
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 90000));
m.reply(`SUCCES CONFIGURE WINGS SELSAI`)
}


break 

case 'uninstall-panel':{
if (!isOwner) return ('Maaf Hanya Untuk Owner')
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}uninstall-panel ipvps,paaswdvps,`)
let ipvps = t[0];
let passwd = t[1];

const connSettings = {
    host: ipvps,
    port: '22',
    username: 'root',
    password: passwd
};

const command = `bash <(curl -s https://pterodactyl-installer.se)`;

const conn = new Client();
conn.on('ready', () => {
          m.reply('*PROSES UNISNATALL PANEL*')
    conn.exec(command, (err, stream) => {
        if (err) throw err;
        stream.on('close', (code, signal) => {
            console.log('Stream closed with code ' + code + ' and signal ' + signal);
            conn.end();
        }).on('data', (data) => {
          if (data.toString().includes('Input')) {
            stream.write('6\n');
          }

          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          if (data.toString().includes('Input')) {
            stream.write('y\n');
          }
          console.log('STDOUT: ' + data);
        }).stderr.on('data', (data) => {
          console.log('STDERR: ' + data);
        });
    });
}).connect(connSettings);
await new Promise(resolve => setTimeout(resolve, 8000));
m.reply(`SUCCES DELLETE PANEL`)
}

break
case 'install-stellar': {
    if (!isOwner) return m.reply("Khusus Owner Bodoh")
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}install-stellar ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Klee(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('Xyra\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('SUKSES INSTALL THEME');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'install-billing': {
    if (!isOwner) return m.reply("Khusus Owner Bodoh")
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}install-billing ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Klee(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('Xyra\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('SUKSES INSTALL THEME');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  
case 'install-enigma': {
    if (!isOwner) return m.reply("Khusus Owner Bodoh")
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}install-enigma ipvps,password,linkwa,linkgc,linkch`)
    
    let ipvps = t[0];
    let passwd = t[1];
    let linkwa = t[2];
    let linkgc = t[3];
    let linkch = t[4];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Klee(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES INSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUKSES INSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('Xyra\n');
                stream.write('1\n');
                stream.write('3\n');
                stream.write(`${linkwa}\n`);
                stream.write(`${linkgc}\n`);
                stream.write(`${linkch}\n`);
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('SUKSES INSTALL THEME');
        }
    }, 300000); // 180000 ms = 3 menit
    
}
break  
case 'uninstall-theme': {
    if (!isOwner) return m.reply("Khusus Owner Bodoh")
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`*Format salah!*\nPenggunaan: ${prefix}uninstall-theme ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    // Fungsi untuk mendekode representasi byte kembali ke string asli
    function Klee(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    // Gunakan string terenkripsi di kode Anda
    const command = 'bash <(curl https://raw.githubusercontent.com/Danzzofficialv1/Xyraa-Hosting/refs/heads/main/install.sh)'

    const conn = new Client();
    let isSuccess = false; // Flag untuk menentukan keberhasilan koneksi

    conn.on('ready', () => {
        isSuccess = true; // Set flag menjadi true jika koneksi berhasil
        m.reply('*PROSES UNINSTALL THEME DIMULAI MOHON TUNGGU 5-10 MENIT KEDEPAN*');
        
        conn.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('`SUKSES UNINSTALL THEME PANEL ANDA, SILAHKAN CEK`')
                conn.end();
            }).on('data', (data) => {
                stream.write('Xyra\n');
                stream.write('2\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('SUKSES UNINSTALL THEME');
        }
    }, 300000); // 180000 ms = 3 menit
   
}
break  

     case 'delgc':
if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return m.reply("Khusus Owner")
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Not Active Klee - OfficiaL✅`)
break
case 'addgc':
if (!isOwner) return m.reply('Maaf, command ini hanya untuk pemilik.')
if (!isGroup) return m.reply("Khusus Owner")
pler.push(m.chat)
fs.writeFileSync('./all/database/idgrup.json', JSON.stringify(pler))
m.reply(`${command} Success Active To Crate Subdo Klee - OfficiaL✅`)
break 

case 'rvo': {
  const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await Klee.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await Klee.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break          
case 'hdr': case 'remini':{
	   	if (!quoted) return reply(`Fotonya Mana Kak ?`)
			if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply("Proses Kak....")
			let media = await quoted.download()
			const { remini } = require('./all/remini.js')
			let proses = await remini(media, "enhance");
			Klee.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break
    case "sc": case "script": {
let teksmenu = `
*Haii* @${m.sender.split("@")[0]}, Selamat ${ucapan()}
Untuk Script ini Buy Ke Owner QenOffc

Hubungi : wa.me/6282135574623
`
Klee.sendMessage(m.chat, {text: `${teksmenu}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: fs.readFileSync("./media/thumbnail2.jpg"), title: `© ${namabot} - ${version}`, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl:"https://google.com/", previewType: "PHOTO"}}}, {quoted: qchanel})
}
break
case "spotify-search": case "sps": {
  if (!text) return m.reply("Masukkan kata kunci pencarian, contohnya: 'la vaguelette'");
  await reply("Tunggu sebentar...");

  const url = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
  
  fetch(url)
    .then(response => response.json())
    .then(async data => {
      if (data.length == 0) return m.reply("Tidak ada hasil ditemukan.");

      let teks = '\n*SPOTIFY SEARCH*\n*🔎 Hasil Pencarian*\n\n';
      for (let i of data) {
        teks += `*◦ Judul :* ${i.title}
*◦ Artis :* ${i.artist || "unknown"}
*◦ Album :* ${i.album || "unknown"}
*◦ Durasi :* ${i.duration || "unknown"}
*◦ Link :* ${i.url}\n\n`;
      }
      reply(teks);
    })
    .catch(err => m.reply("Terjadi kesalahan: " + err.toString()));
}
break;
case "spoty-download": case "spotifydl": case "spdl":{
  
    if (!text) return m.reply('Masukkan Link!');
    await reply ("mohon tunggu sebentar");
    // Mengambil URL dari API download
    let apiURL = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(text)}`;
    
    try {
        // Mendapatkan data dari API
        let response = await fetch(apiURL);
        
        // Memastikan respon adalah tipe audio
        if (response.headers.get("content-type") === "audio/mpeg") {
            // Mengirim audio melalui WhatsApp
            await Klee.sendMessage(m.chat, { audio: { url: apiURL }, mimetype: 'audio/mpeg' }, { quoted: m });
        } else {
            m.reply("Gagal mendapatkan file audio. Pastikan link yang dimasukkan benar.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil file audio.");
    }
}
break;


    case 'tiktok': case "tt": { 
    if (!text) return reply(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return reply(`Link Invalid!!`);
    reply("PROSES TUAN MOHON JANGAN SPAM..");
    
    // Menggunakan fetch untuk akses API TikTok milikmu
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return reply('Gagal mengambil data dari API');
            
            // Mengambil URL video dan audio
        const title = `${data.result.title}\n${data.result.size}\n© 𝚇𝚣𝙱𝚘𝚝𝚣 - 𝚀𝚎𝚗𝚗𝙾𝚏𝚏𝚌`
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            // Mengirim video dan audio
            Klee.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            Klee.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: m });
        })
        .catch(err => reply(err.toString()));
}
break;    

case "splay": {
    const axios = require("axios");
    if (!text) return m.reply('Masukkan Judul Contoh\nContoh `La Vagualette!`');

    await reply("Mohon Tunggu Sebentar...");

    try {
        // URL API untuk pencarian lagu
        const searchApiUrl = `https://spotifyapi.caliphdev.com/api/search/tracks?q=${encodeURIComponent(text)}`;
        const searchData = (await axios.get(searchApiUrl)).data;
        
        // Pilih hasil pertama dari data pencarian
        const data = searchData[0];
        if (!data) return reply("Lagu tidak ditemukan.");

        // Teks yang akan dikirimkan
        const tekswait = `_###_ *SPOTIFY PLAYER* _###_

- *Judul:* ${data.title}
- *Artis:* ${data.artist}
- *URL:* ${data.url}`;

        // Mengirim pesan informasi lagu
        await Klee.sendMessage(m.chat, { 
            text: `${tekswait}`, 
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: { 
                    showAdAttribution: true,
                    title:`${data.title}`,
                    body:"SPOTIFY SEARCH & DOWNLOAD",
                    thumbnailUrl: data.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: qchanel });

        // URL API untuk download lagu
        const downloadApiUrl = `https://spotifyapi.caliphdev.com/api/download/track?url=${encodeURIComponent(data.url)}`;
        // Mendapatkan data dari API
        let response = await fetch(downloadApiUrl);
        
        // Memastikan respon adalah tipe audio
        if (response.headers.get("content-type") === "audio/mpeg") {
            // Mengirim audio melalui WhatsApp
            await Klee.sendMessage(m.chat, { audio: { url: downloadApiUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
        } else {
            m.reply("Gagal mendapatkan file audio.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil file audio.");
    }
}
break;

case "play": {
    const axios = require("axios");
    if (!text) return m.reply('Masukkan Judul Contoh\nContoh La Vagualette!');

    await reply("Mohon Tunggu Sebentar...");

    try {
        // URL API untuk pencarian lagu
        const searchApiUrl = `https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`;
        const searchData = (await axios.get(searchApiUrl)).data;

        // Pilih hasil pertama dari data pencarian
        const data = searchData.data[0];
        if (!data) return reply("Lagu tidak ditemukan.");

        // Teks yang akan dikirimkan
        const tekswait = `_###_ YOUTUBE PLAYER ###

- Judul: ${data.title}
- Artis: ${data.author.name}
- URL: ${data.url}`;

        // Mengirim pesan informasi lagu
        await Klee.sendMessage(m.chat, { 
            text: `${tekswait}`, 
            contextInfo: {
                mentionedJid: [m.sender],
                externalAdReply: { 
                    showAdAttribution: true,
                    title: `${data.title}`,
                    body: "YOUTUBE SEARCH & DOWNLOAD",
                    thumbnailUrl: data.thumbnail,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            } 
        }, { quoted: qchanel });

        // URL API untuk download lagu
        const downloadApiUrl = `https://api.nexoracle.com/downloader/yt-audio?apikey=free_key@maher_apis&url=${encodeURIComponent(data.url)}`;
        const downloadData = (await axios.get(downloadApiUrl)).data;

        // Cek jika status berhasil
        if (downloadData.status === 200 && downloadData.result.audio) {
            const audioUrl = downloadData.result.audio;
            const title = downloadData.result.title || "Audio";
            const thumbnail = downloadData.result.thumb;

            // Mengirim audio melalui WhatsApp
            await Klee.sendMessage(m.chat, { 
                audio: { url: audioUrl }, 
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
                thumbnail: thumbnail
            }, { quoted: m });
        } else {
            m.reply("Gagal mendapatkan file audio.");
        }
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil file audio.");
    }
}
break;
        
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Klee.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Klee.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Klee.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Klee.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Klee.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
Klee.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})