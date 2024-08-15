const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QQvJzXmRHehFTcIFTbQdHN4hkN1hXMhhnZP50dylXQEFjNX5kM6VkTy1iejIkNSNEeOZ1Ypwd=69597147749',
  ALIVE_REACT: '👤',
  ALIVE_MESSAGE: `*👤 Hey Friends Iam Alive Now ,* 
*I think this bots are useful*
*to you . 😽💖*
*Nice to meet you 🤝*
*Thankyou 🌸 🪄* 

*🌚Owner -🄲 🕊️🍭 ItZ Me Senul Radawa🖤🕊️✨*

*http://Wa.me/±94710773101?text=_𝙷𝙸_|:♥️🧸_* 

*🖇️ 𝙳𝚘 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚐𝚎𝚝 𝚊𝚕𝚕 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 ?*
*𝚃𝚢𝚙𝚎 & 𝚂𝚎𝚗𝚍 - .menu or .list*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

🕊️🍭 ItZ Me Senul Radawa🖤🕊️✨`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: 'mongodb+srv://tempmail1829:7W1Ji1KDtd5W5pdE@cluster0.w9oryfw.mongodb.net/', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: 'Senul Radawa Md',
  OWNER_NAME: '🕊️🍭 ItZ Me Senul Radawa🖤🕊️✨',
  OWNER_NUMBER: '94774179596',
  SUDO: '94774179596',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© 🕊️🍭 ItZ Me Senul Radawa🖤🕊️✨',
  STICKER_AUTHOR: '🕊️🍭 ItZ Me Senul Radawa🖤🕊️✨',
  STICKER_PACK: 'Senul',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 1500,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
