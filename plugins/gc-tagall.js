let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝐁𝐨𝐭𝐬: ${pesan}`
let teks = `Creador Wa.me/51935763050 SI QUIERES BOT COMUNICAME
𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚 𝐆𝐞𝐧𝐞𝐫𝐚𝐥- 𝐊𝐚𝐫𝐢𝐦𝐦𝐦.𝟑𝟑 \n\n❏ ${oi}\n❏ 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `👻👉🏿 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐳𝐊𝐚𝐫𝐢𝐦𝟗𝟗𝟗`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
