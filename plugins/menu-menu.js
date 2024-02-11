import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `*◈ ${user.registered === true ? user.name : `👉 ${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'verificar nombre.edad' : 'verify name.age'}`} ◈*
*˚₊·˚₊· ͟͟͞͞➳❥ @${m.sender.split("@")[0]}*
*˚₊·˚₊· ͟͟͞͞➳❥* ${packname}${conn.user.jid == global.conn.user.jid ? '' : `\n*˚₊·˚₊· ͟͟͞͞➳❥* 𝗚𝗕 - 𝗦𝗨𝗕 𝗕𝗢𝗧 ⇢ *@${global.conn.user.jid.split`@`[0]}*`}
*☆═━┈◈ ╰ ${vs} ㎇ ╯ ◈┈━═☆*
*│* 
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal1()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'creadora' : 'owner'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'contacto' : 'contact'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'cuentasgb' : 'account'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'donar' : 'donate'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'codigo' : 'sc'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'gruposgb' : 'groupsgb'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'instalarbot' : 'installbot'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'estado' : 'status'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'velocidad' : 'ping'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'infogata' : 'infobot'}_ 
*│* ┊▸ ✦ _${lenguajeBot.lenguaje() == 'es' ? 'términos y condiciones' : 'terms'}_ 
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal2()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'serbot' : 'jadibot'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'bots' : 'subsbots'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'pausarsb' : 'pausesb'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'eliminarsesion' : 'delsession'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal3()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'google *texto*' : 'googlef *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'bot *texto*' : 'simsimi *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'ia *texto*' : 'chatgpt *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'yts *texto*' : 'yts *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal4()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'imagen *texto*' : 'gimage *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'facebook *enlace*' : 'facebookdl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'mediafire *enlace*' : 'mediafiredl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'play *nombre o enlace*' : 'play *name*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'yta *enlace*' : 'yta *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'ytv *enlace*' : 'ytv *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'ytmax *enlace*' : 'ytmax *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'ytadoc *enlace*' : 'ytadoc *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'ytvdoc *enlace*' : 'ytvdoc *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'ytmaxdoc *enlace*' : 'ytmaxdoc *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'tiktok *enlace*' : 'tkdl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'openiamage *texto*' : 'dalle *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'midjourney *texto*' : 'openjourney *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'spotify *texto o enlace*' : 'spotify *text or link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'spotifysearch *texto*' : 'spotifysearch *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'instagram *enlace*' : 'instagram *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'twitterx *enlace*' : 'twitterx *link*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal5()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'img *sticker*' : 'toimg *sticker*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'url *imagen*' : 'tourl *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'mp4 *sticker*' : 'tovideo *sticker*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'gif *video*' : 'togif *video*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'mp3 *video o audio*' : 'tovn *video or audio*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'tts *texto*' : 'totts *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal6()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'infogrupo' : 'groupinfo'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'admins' : 'dmins'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'enlace' : 'linkgroup'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'inspeccionar *enlace*' : 'inspect *link*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal7()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'notificar *texto*' : 'hidetag'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'sacar *tag*' : 'kick *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'invitar *número*' : 'invite *number*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'daradmin *tag*' : 'promote *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'quitaradmin *tag*' : 'demote *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'prohibir *tag*' : 'deprive *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'desprohibir *tag*' : 'undeprive *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarwelcome *texto*' : 'setwelcome'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarbye *texto*' : 'setbye'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'cambiardesc *texto*' : 'setdesc'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'cambiarnombre *texto*' : 'setname'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'cambiarpp *imagen*' : 'setppgc *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'nuevoenlace' : 'resetlink'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'grupo abrir' : 'group open'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'grupo cerrar' : 'group close'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'invocar' : 'tagall'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal8()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarbass' : 'editbass'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarvibra' : 'editvibra'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarblown' : 'editblown'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editardeep' : 'editdeep'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarearrape' : 'editearrape'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarfast' : 'editfast'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarfat' : 'editfat'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarnightcore' : 'editnightcore'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarrobot' : 'editrobot'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarslow' : 'editslow'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editarsmooth' : 'editsmooth'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editartupai' : 'edittupai'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'editaraudio8d' : 'editaudio8d'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal9()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}bass_
*│* ┊▸ ✦ _${usedPrefix}blown_
*│* ┊▸ ✦ _${usedPrefix}deep_
*│* ┊▸ ✦ _${usedPrefix}earrape_
*│* ┊▸ ✦ _${usedPrefix}fast_
*│* ┊▸ ✦ _${usedPrefix}fat_
*│* ┊▸ ✦ _${usedPrefix}nightcore_
*│* ┊▸ ✦ _${usedPrefix}reverse_
*│* ┊▸ ✦ _${usedPrefix}robot_
*│* ┊▸ ✦ _${usedPrefix}slow_
*│* ┊▸ ✦ _${usedPrefix}smooth_
*│* ┊▸ ✦ _${usedPrefix}tupai_
*│* ┊▸ ✦ _${usedPrefix}audio8d_
*│* ┊▸ ✦ _${usedPrefix}echo_
*│* ┊▸ ✦ _${usedPrefix}distortion_
*│* ┊▸ ✦ _${usedPrefix}pitch_
*│* ┊▸ ✦ _${usedPrefix}reverb_
*│* ┊▸ ✦ _${usedPrefix}flanger_
*│* ┊▸ ✦ _${usedPrefix}apulsator_
*│* ┊▸ ✦ _${usedPrefix}tremolo_
*│* ┊▸ ✦ _${usedPrefix}chorus_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal10()}_ ◂◂*
*│* ┊ 
*│* ┊▸ ✦ _on_
*│* ┊▸ ✦ _off_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal11()}_ ◂◂*
*│* ┊ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'verificar *nombre.edad*' : 'verify *name.age*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'anulareg *id de registro*' : 'unreg *id registration*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'idregistro' : 'idregister'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│*
*╰ ㊂ ▸▸ _${lenguajeBot.smsMenuTotal12()}_ ◂◂*
*│* ┊ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'respaldo' : 'backup'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'banusuario *@tag*' : 'banuser *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'desbanusuario *@tag*' : 'unbanuser *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'tenerpoder' : 'autoadmin'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'nuevabiobot *texto*' : 'setbiobot *texto*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'nuevonombrebot *texto*' : 'setbiobot *texto*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'nuevafotobot *imagen*' : 'setppbot *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'actualizar' : 'update'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'banearchat' : 'banchat'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'desbanearchat' : 'unbanchat'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'salir' : 'leave'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'bloquear *@tag*' : 'block *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'desbloquear *@tag*' : 'unblock *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'obtenercodigo *nombre de archivo*' : 'getplugin *filename*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'borrardatos *número*' : 'deletedatauser *number*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'unete *enlace*' : 'join *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'bcsubbot *texto*' : 'bcsubbot *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'bcc *texto*' : 'bcchats *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'bcgc *texto*' : 'broadcastgc *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeBot.lenguaje() == 'es' ? 'bc *texto*' : 'broadcastall *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
 `.trim()
    
const vi = ['https://telegra.ph/file/405daebd4bc0d69e5d165.mp4',
'https://telegra.ph/file/1d0ad9f79f65f39895b08.mp4',
'https://telegra.ph/file/c25afc1685b13210ce602.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: botlink.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: botimg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, img, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply(lenguajeBot['smsMalError3']() + '\n*' + lenguajeBot.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeBot.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeBot.smsMensError2()} ` + usedPrefix + command)
console.log(`${lenguajeBot['smsMensError2']()} ${usedPrefix + command}`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|menucompleto|allmenu|allm|m|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
