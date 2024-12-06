require("./all/global")

const func = require("./all/place")
const readline = require("readline")
const yargs = require('yargs/yargs')
const _ = require('lodash')
const usePairingCode = true
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
return new Promise((resolve) => {
rl.question(text, resolve)
})}


async function startSesi() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { state, saveCreds } = await useMultiFileAuthState(`./session`)
const { version, isLatest } = await fetchLatestBaileysVersion()

console.log(chalk.white.bold(`⠀⠀⠀⠀⠀⠀⠀⠀⢀⠔⢉⠄⠚⢉⡀⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢺⡤⠔⣵⣿⣿⣷⣿⣷⣢⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⠓⡢⠝⠚⠉⠉⠉⠙⠛⠿⣿⣿⡗⢄⡀⠀⠀⠀⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠜⣈⡠⠒⢨⠁⠀⠀⠀⢀⠄⠈⠻⣿⡄⠳⡄⠀⠀⡷⡀
⠀⠀⠀⠀⠀⠀⠀⣜⢰⢡⠤⣀⠈⢴⢀⣄⠔⠃⠊⢆⠀⠈⢿⣄⣿⣄⣠⡧⣿
⠀⠀⠀⠀⢀⠤⡄⢻⠃⠀⠀⠈⠁⠀⠀⠀⢠⠤⢤⡀⠱⠇⣼⣿⣿⣿⡽⣧⡎
⠀⠀⠀⠀⡨⢚⣒⡇⠀⠀⠀⠸⠀⠈⠑⡀⠀⠀⠀⢉⠜⣠⣿⣿⣿⡿⣵⡿⢳
⠀⠀⢀⡀⢼⡁⢐⡱⡀⠀⠀⠘⡀⠀⠐⠁⠀⠀⣀⣲⣺⣿⣿⣿⣿⣿⠿⠛⠁
⠀⠀⠸⢤⡖⣵⠋⠀⢸⣧⣀⡀⠀⠀⠀⠀⠀⢠⡗⣦⣾⢿⣯⣻⣿⠇⠀⠀⠀
⠀⠀⠀⠘⠧⡈⡲⢤⣯⣿⡇⢉⣱⣖⣶⣺⣿⠶⢉⣏⢰⣶⣿⣿⠏⠀⠀⠀⠀
⠀⠀⠀⡠⢖⣋⡝⠻⣦⣌⣿⣶⣿⣽⣿⣿⣿⡿⡟⠙⣆⡸⠋⢀⢪⢂⠀⠀⠀
⠀⠀⣀⡸⢇⠠⡌⠒⡌⠻⣍⠙⢻⣿⣿⣿⣿⣿⣿⡟⣷⣖⣑⣏⡩⠌⠀⠀⠀
⠰⡉⠀⠀⠈⢢⡁⠀⠣⠄⣈⠳⠾⣶⢻⣼⣉⣿⡟⠋⠏⢲⠀⠀⠀⠀⠀⠀⠀
⠀⠑⠤⠄⠒⠣⠓⠤⣴⠆⠈⠄⠀⠙⠲⠦⠼⡿⡳⠤⡤⣞⠀⠐⠦⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠁⠒⢂⠈⢉⠉⢥⠒⢠⠇⠀⢀⣇⣈⣦⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⡤⠒⠊⠹⠃⠀⠀⠀⠈⠻⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠂⠐⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

${chalk.green.bold("📃  Informasi :")}         
✈  XzBotz - Simple Bot WhatsApp - By QenOffc
✈  Author : QenOffc
✈  Website : https://www.qenofficial.my.id
✈  Tiktok : @qennaja
✈  Note : Script Ini Dibuat Oleh QenOffc

${chalk.green.bold("Script Made By QenOffc (XzBotz)")}\n`));

const connectionOptions = {
version,
keepAliveIntervalMs: 30000,
printQRInTerminal: !usePairingCode,
logger: pino({ level: "fatal" }),
auth: state,
browser: ["Ubuntu","Chrome","20.0.04"],
getMessage: async (key) => {
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
return msg?.message || undefined
}
return {
conversation: 'WhatsApp Bot By QenOffc'
}}
}

const Klee = func.makeWASocket(connectionOptions)
if (usePairingCode && !Klee.authState.creds.registered) {
const phoneNumber = await question(color('Masukan Nomor Whatsapp Awali dengan 62 :\n', 'red'));
const code = await Klee.requestPairingCode(phoneNumber.trim())
console.log(`${chalk.redBright('Your Pairing Code')} : ${code}`)
}
store?.bind(Klee.ev)

Klee.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
const reason = new Boom(lastDisconnect?.error)?.output.statusCode
console.log(color(lastDisconnect.error, 'deeppink'))
if (lastDisconnect.error == 'Error: Stream Errored (unknown)') {
process.exit()
} else if (reason === DisconnectReason.badSession) {
console.log(color(`Bad Session File, Please Delete Session and Scan Again`))
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionLost) {
console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink'))
process.exit()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log(color('Connection Replaced, Another New Session Opened, Please Close Current Session First'))
Klee.logout()
} else if (reason === DisconnectReason.loggedOut) {
console.log(color(`Device Logged Out, Please Scan Again And Run.`))
Klee.logout()
} else if (reason === DisconnectReason.restartRequired) {
console.log(color('Restart Required, Restarting...'))
await startSesi()
} else if (reason === DisconnectReason.timedOut) {
console.log(color('Connection TimedOut, Reconnecting...'))
startSesi()
}
} else if (connection === "connecting") {
console.log(color('Menghubungkan . . . '))
} else if (connection === "open") {
let teksnotif = ` Lapor kak Script Bot sudah berhasil terpasang
 *▧ Botname :* ${global.namabot2}
 *▧ Version :* 3.5.0
 *▧ Nomor : ${Klee.user.id.split(":")[0]}*`
Klee.sendMessage( global.owner+"@s.whatsapp.net", {text: teksnotif})
console.log(color('Bot Berhasil Tersambung'))
}
})

Klee.ev.on('call', async (user) => {
if (!global.anticall) return
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await Klee.sendMessage(ff.from, {text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`, contextInfo: {mentionedJid: [ff.from], externalAdReply: {showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO"}}}, {quoted: null})
Klee.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
await sleep(10000)
await Klee.updateBlockStatus(ff.from, "block")
}}
}})

Klee.ev.on('messages.upsert', async (chatUpdate) => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return Klee.readMessages([m.key])
if (!Klee.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
if (global.autoread) Klee.readMessages([m.key])
m = func.smsg(Klee, m, store)
require("./case.js")(Klee, m, store)
} catch (err) {
console.log(err)
}
})

Klee.ev.on('group-participants.update', async (anu) => {
if (!global.welcome) return
let botNumber = await Klee.decodeJid(Klee.user.id)
if (anu.participants.includes(botNumber)) return
try {
let metadata = await Klee.groupMetadata(anu.id)
let namagc = metadata.subject
let participants = anu.participants
for (let num of participants) {
let check = anu.author !== num && anu.author.length > 1
let tag = check ? [anu.author, num] : [num]
try {
ppuser = await Klee.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
if (anu.action == 'add') {
Klee.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini` : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: linkyt, mediaType: 1}}})
} 
if (anu.action == 'remove') { 
Klee.sendMessage(anu.id, {text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini` : `@${num.split("@")[0]} Telah Keluar Dari Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: linkyt, mediaType: 1}}})
}
if (anu.action == "promote") {
Klee.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkyt, mediaType: 1}}})
}
if (anu.action == "demote") {
Klee.sendMessage(anu.id, {text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`, 
contextInfo: {mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkyt, mediaType: 1}}})
}
} 
} catch (err) {
console.log(err)
}})

Klee.public = true

Klee.ev.on('creds.update', saveCreds)
return Klee
}

startSesi()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})