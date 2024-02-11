let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let setting = global.db.data.settings
let type = (args[0] || '').toLowerCase()
let isAll = false
let isUser = false
switch (type) {
		
case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
		
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}} else if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
		
case 'detect': case 'avisos': case 'autodetectar':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break

case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break

case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break

case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break

case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
		
case 'jadibotmd': case 'modejadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = !isEnable
break 
		
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
		
case 'anticall': case 'antillamar': case 'antillamada':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'modoadmin': case 'modeadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
		
case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break

case 'antiprivado':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
		
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
default:
if (!/[01]/.test(command)) return m.reply(`
${lenguajeBot.smsConfi1bot()}\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'avisos' : 'detect'}*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'bienvenida' : 'welcome'}*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'antienlace' : 'antilink'}*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'antienlace2' : 'antilink2'}*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *antitiktok*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *antiyoutube*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *antitelegram*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *antifacebook*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *antinstagram*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *antitwitter*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'antinternacional' : 'antifake'}*\n
${lenguajeBot.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'restringir' : 'restrict'}*\n
${lenguajeBot.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'publico' : 'public'}*\n
${lenguajeBot.smsParaOw() + ' ' + `${bot.jadibotmd ? '✅' : '❌'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'modoserbot' : 'modejadibot'}*\n
${lenguajeBot.smsParaOw() + ' ' + `${bot.antiprivado ? '✅' : '❌'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'antiprivado' : 'antiprivate'}*\n
${lenguajeBot.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'antillamar' : 'anticall'}*\n
${lenguajeBot.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'autovisto' : 'autoread'}*\n
${lenguajeBot.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : lenguajeBot.smsNoGg()}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'modoadmin' : 'modeadmin'}*\n
${lenguajeBot.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.delete ? '❌' : '✅' : '🌻'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'antieliminar' : 'antidelete'}*\n
${lenguajeBot.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.antiver ? '✅' : '❌' : '🌻'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'antiver' : 'antiviewonce'}*\n
${lenguajeBot.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.reaction ? '✅' : '❌' : '🌻'}`}
 \`\`\`${usedPrefix}on/off\`\`\` *${lenguajeBot.lenguaje() == 'es' ? 'reaccion' : 'reaction'}*`.trim())
return false
}
m.reply(`${lenguajeBot['smsAvisoEG']()}*⭔ ${lenguajeBot.smsConfi2bot()}:* _${type}_
*⭔ ${lenguajeBot.smsConfi3bot()}:* _${isEnable ? lenguajeBot.smsConfi5bot() : lenguajeBot.smsConfi6bot()}_
*⭔ ${lenguajeBot.smsConfi4bot()}:* ${isAll ? packname : isUser ? '' : '_' + lenguajeBot.smsConfi7bot() + '_'}`)
}
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
