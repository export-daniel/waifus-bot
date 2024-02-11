let WAMessageStubType = (await import(global.baileys)).default

export async function before(m, { conn, participants, groupMetadata }) {
if (!m.messageStubType || !m.isGroup) return
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
let chat = global.db.data.chats[m.chat]
let usuario = `@${m.sender.split`@`[0]}`
let inf = lenguajeBot['smsAvisoIIG']()
let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './media/grupo.jpg'  

let nombre, foto, edit, newlink, status, admingp, noadmingp
nombre = lenguajeBot.smsAutodetec1(inf, usuario, m)
foto = lenguajeBot.smsAutodetec2(inf, usuario, groupMetadata)
edit = lenguajeBot.smsAutodetec3(inf, usuario, m, groupMetadata)
newlink = lenguajeBot.smsAutodetec4(inf, groupMetadata, usuario)
status = lenguajeBot.smsAutodetec5(inf, groupMetadata, m, usuario)
admingp = lenguajeBot.smsAutodetec6(inf, m, groupMetadata, usuario)
noadmingp = lenguajeBot.smsAutodetec7(inf, m, groupMetadata, usuario)

if (chat.detect && m.messageStubType == 21) {
await conn.sendMessage(m.chat, { text: nombre, mentions: [m.sender] }, { quoted: fkontak })   
  
} else if (chat.detect && m.messageStubType == 22) {
await conn.sendMessage(m.chat, { image: { url: pp }, caption: foto, mentions: [m.sender] }, { quoted: fkontak })

} else if (chat.detect && m.messageStubType == 23) {
await conn.sendMessage(m.chat, { text: newlink, mentions: [m.sender] }, { quoted: fkontak })    

} else if (chat.detect && m.messageStubType == 25) {
await conn.sendMessage(m.chat, { text: edit, mentions: [m.sender] }, { quoted: fkontak })  
	
} else if (chat.detect && m.messageStubType == 26) {
await conn.sendMessage(m.chat, { text: status, mentions: [m.sender] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 29) {
await conn.sendMessage(m.chat, { text: admingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

} else if (chat.detect && m.messageStubType == 30) {
await conn.sendMessage(m.chat, { text: noadmingp, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })  

//} else if (chat.detect && m.messageStubType == 145) {
//await conn.sendMessage(m.chat, { text: 'Se ha activado el modo de aprobación para unirse al grupo.', mentions: [m.sender] })

} else {
//console.log({ messageStubType: m.messageStubType,
//messageStubParameters: m.messageStubParameters,
//type: WAMessageStubType[m.messageStubType], 
//})
}}
