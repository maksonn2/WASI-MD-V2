//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "18297971813@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "18297971813";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEgvbzB1OGFMWWNlSnNDZWgvc1pEeVFkNnlWZUFZcWlqRHJ0QzVhbGpWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFhiN0h1Z3c4Zm92Z3RiN09acTh4RDdOQ2puWnJhMERGQVhKbjF6WXZDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTGpFbk9DdUV4K1lqMExVNWlUbkZNeFJXL1ZZU25JQURqR1RjQnB4bVc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaVjI1b1E2SUxGU0lqRjI1bVZlQXRlWjVmaFFUMnFlSmVhOXk1enhLMG53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitBaWk2a05oSHNvV3JCTVF4anp1UU1zdHJwWlRLdERsWXlCZ1VRTGxRRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino0blpnUlFDWWptYXVaVXhEKzZUQ1B1cG5vUk5yVFBEQ1B6ZGd0NkM1MzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0I4cHpmb1J2dkdQY1pHalFKbmE5R2g1TTBEaDdTNTVLdzl2SjhZNWgzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW1yUUYrc0FCNWg1c1ZKbVJxNEl1aUV0WVMwTVlTQ3dFVCs5a2R5ck9Ecz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjllK2p1dmY1Y3pNMytrdnpUNTJraGxya1o2cm1YQXlQbTB6cHV6NllRTkg0c2FkNXNDbDV0V1Q1bmwvdlA1WEIzdG93MGp4TStXd2tvNFlUQy85WEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJqdUNmUVhmdUlZWnlOWVpmanZhSFNiVUdLc0tpanFWUzlDNCtjUGZiVzVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItaXJobGFNb1RLdVo0T2h6R3JDRnVBIiwicGhvbmVJZCI6ImMxOGFiNTQ5LTIxMDQtNDVjOS04OThmLTVmZmU4MDE3MzIzOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOeXpVdmhuQnFKaERqb3MvY2xUL282TTdybDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1EySkJCZ2lUMXpDdXB0YVFQeUxobDI5TGlnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJINEpIVFEzIiwibWUiOnsiaWQiOiIxODI5NTU5NTA5NjoyM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtYfLoeG1kuG1iCDhtYjhtZLhtZbKsOG1ieG1kOKBsSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSzJ2eitFQkVLcUp4OEFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidW8zYUdiZGVOb1Y1eGk0c21lck1aY2ZhMjVCQTBGZUZDeHFpZWxKaXFDdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaDFTaW9yeE5OMXBYVGxZK0hyNWZzWmRrTVY1NVlJamxFT2FWaWs0L2laRkRPWittMmtDSitPcU9Lb1haU2JwblZHRXQzb2N2VzFQbE9sNWNNakMvRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InZXZzhRNkJUSE9paEZuUUx3ZFFpQjBva05DT2VRUDFVckNkb0crbnJndFUrSTNKWXFrWjhVYUE5a1pITTdvZW9VZEk0eWFVZjhmejRNbHZlT1JBYkN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTgyOTU1OTUwOTY6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnFOMmhtM1hqYUZlY1l1TEpucXpHWEgydHVRUU5CWGhRc2FvbnBTWXFncyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NTk5NDkzNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIRC8ifQ==|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xjRG1VSUFvSGxtZE04UEF5aXFmV3VQblcyVVkreUhDVVc4Y2xRM1VuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM01NVitrRkF6SDArNFJXanE4WTM3M3plWFkzVVFTTi8zMDJVdVlpcExUaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRVlIenEyK1FXRWZxN0tBZmYwR1E1VWFBcytsZW5TYlozNEpmSnJQSFVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEak5EVExOSFEwSklCU1ZMVFlad2I5bDd6OVp4SzZJMDM5YkNrOW5uRUJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNKVisvcVFsbmJlQkdMU01DZjdnMkpFL0tIcUs0d1VCdkxGMmZZeWM2MFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkoralZ2MnNibDRyS2t2bTljcTlQZG1YRm9jY0lVcklja2hWWlRNUEVCak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JEMWtxRFhpMjRMSHgxTUtCaUpvZml4ejlxeHpFdHhwZTZkaWtDbUtWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaE42ZHg0cnN3aWk2Ujl3Qkpqa3VKN295WDllZkk2MlMrSXc5S0M2VEZ3OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJDL1htWnRPanZRRG5TMmp3cHVWRXVGRlNyWmNpcmpIZER2dlcwZ2xuUWVjL3pLcUtLOFVqRjVoQTVIZFRta2MxdURaTVdDaWFjZ2QvaVNUZHFaZml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6Im5ueVQxeDJEOEhvdGdoTTJucDI4bC9aeEJVcW1TSEptWFRyV01YWW1HRUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTgyOTc5NzE4MTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjA5OTQyNTI2NjY4MkEyRTg0NTYyRTQ4MEVGNkU1NDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjU5MTQ2Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibGdoeDhvcXJTZzJtaVNRVUItY2stdyIsInBob25lSWQiOiIwMjEzMDg5NS0wYjRiLTQ2N2ItOTkwNi1lNmY0MjdlNDg3ZWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEp6dThhWXB0WDdibTVKb0Y0Q0E1VmV0MEJNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwrV2puRENGd3NBOVJ6SnVOUFVlenM1bTFkdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOTlI1TkJLWSIsIm1lIjp7ImlkIjoiMTgyOTc5NzE4MTM6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjgaPigaDigKLigaDhtKXigaDigKJUw7N4aWNvIPCdkIPwnZCA8J2QgfCdm6/wnZCN8J2Qku+8vOG0pe+8j8KgIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMV3Z6K0VCRU5tOTY4QUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1bzNhR2JkZU5vVjV4aTRzbWVyTVpjZmEyNUJBMEZlRkN4cWllbEppcUN3PSIsImFjY291bnRTaWduYXR1cmUiOiJ1THArS2QvNW1zUENKdlZOUE5tM09ydjd2dENldzh2RmZPNElPUEl2V2ZpUjZmeFozTGxjdWx3Z0hDdldvNnJhdzNFRE81aWs2KzNOckN5NFgyS2tEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieTlFTEpSam1VN0RWei85bEFkenRIanpnSkdLRzFtVDVTZDNWOVBQVzhSZ25VMmRQaEJ5SURxNWx3TUkvRG12ekxLWkN0YkdvVFFPcmtWNGRIOEpIanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODI5Nzk3MTgxMzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJxTjJobTNYamFGZWNZdUxKbnF6R1hIMnR1UVFOQlhoUXNhb25wU1lxZ3MifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDY1OTE0NjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUDViIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
