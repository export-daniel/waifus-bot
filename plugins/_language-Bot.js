import { en, es } from '../lib/idiomas/total-idiomas.js'  
export async function before(m, { conn }) {
global.wait = lenguajeBot['smsMeWait']()
global.wait2 = lenguajeBot.smsWait()
  
let user = global.db.data.users[m.sender]

if (user.BotLanguage == 'es') {
global.lenguajeBot = es
} else if (user.BotLanguage == 'en') {
global.lenguajeBot = en
} else {
global.lenguajeBot = es
}
}
