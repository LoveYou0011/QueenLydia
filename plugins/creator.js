function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '917909139146', '𝙻𝚘𝚟𝚎 𝚢𝚘𝚞~', m)
  this.sendContact(m.chat, '917909139146', '𝙻𝚘𝚟𝚎 𝚢𝚘𝚞~', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
