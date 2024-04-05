const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="kingbelax6@gmail.com"
global.location="Harare,Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "CAT/Harare";
global.github=process.env.GITHUB|| "";
global.gurl  = process.env.GURL || "https://chat.whatsapp.com/BcGmcbHvhxPJVw0XYRYjpa";
global.website= process.env.GURL|| "https://chat.whatsapp.com/BcGmcbHvhxPJVw0XYRYjpa" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "263717416117" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717416117";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_51_04_05_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNklGamdCT0lnZ3k3czhCM1pSNWhuRjg5WHBXWUE3TVhGQjN4cWM3VzRFQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkZHQ3NYaFJvRmZjdGhtZVZMcm9WTmdiSFRnVjl6WHRvNmtObTJvbjBqUm89XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwib0NjemlaK1QrbWZucEdPelhUQ3JWSG03TEtsZEE4ZkFyaDFEUTJ6TUpIWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlNkUW5hNk1peHN0aTV3M25SaTdCVEpkUlVWM3ZBRlFNSzZIL2lVYTBuVmM9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUtmK2gxTHAyMkxKTjNieVkwc1M2dCtDMkxvcTZacWl5bzZ1TzFyZlptMD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkZTb2h2eE1GOGJNaTM5N2R2ZkhMZUtVQUdHOHkzOUR2SFQ3ekVpd3ZHQ2c9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRRFFoUXZ2Z1NaeGlvQWM2Z0pSQ1p0cFlpVGRFZEJEZEdmczFyWVQ5aFZ3PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibDBETUtVc2VXcHV4dmV5QkFMWUMydUgxYzJpUmNWeTlPdjcrNE9qNGRWTT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJYQmZ6dW1JQUZVS3VqRzJ0d1lTUWZYMTdJWFFDYkUwYVIyYjAxWWdQZE5Yc202ME9QU0tGZWs5M2JtUHg5Yjc3TTlBNFRvU1hNM1QwdU10VEwrcU9BUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjAsXCJhZHZTZWNyZXRLZXlcIjpcIm1yKzhGWC9ZKzhTWm93ZXJzN3FOMkF0UU5VOThKV0tRTGxVcGxQWWhSM2s9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJwQ2czZnFSNlQzU0twMVd5TXlVS2NRXCIsXCJwaG9uZUlkXCI6XCIwMGZlODk3ZC00Yzg5LTRiOWItOTg1MS1lMTUyNzhkMWFlOTlcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIi9TNGh4VWxXQ0VUdUNnajNaS3hjTW1FUzRkST1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJLc1U3QStyaTVNZWUwNEJZcWhyN0kwSlk1T2c9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiNzFSTTM3RVBcIixcIm1lXCI6e1wiaWRcIjpcIjI2Mzc4MzY4OTgwOToxN0BzLndoYXRzYXBwLm5ldFwiLFwibmFtZVwiOlwiz6bhn6Dhn6DhlrHJqOGfqSDhlrLhn6DItlwiLFwibGlkXCI6XCIxNzYxNjI4MzE1OTc4MjE6MTdAbGlkXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNPYkV1OHNCRUlyM3ZyQUdHQU1nQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwic0pGZm1wZlFpVTkrUlBodXhLVldOeTd4ZEhoVENrNlg4dFZaNXZ3VTQxRT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkYwNENQWkxMNXQxb1VTUUg1OE1Vald5b2ZPV1JNZG04QXRsaDlleWVRUldKTGRLSmpDM3l4SU1kRTJ4RlNJa3NLZkwycWlyVHV5T2dWdytLNEpXc0FnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwib0ZXbDZTWjFERlBtUXg1WHk1dzB2QmcxYW5ob2xiQlFISVZhOHF6S1RLMC9MQWhMdjl3UzVFZTl3UmJZUzdKZGMyU2hJQkJBZFpIMVhjd0hBM1ZkRHc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI2Mzc4MzY4OTgwOToxN0BzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJiQ1JYNXFYMElsUGZrVDRic1NsVmpjdThYUjRVd3BPbC9MVldlYjhGT05SXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjMwNzA4NixcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFETHFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFETHEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvUm1BdE4rQTJqOGxFTkkzMXY1UFA5ZzFod1B6cHQzMnQ4RUVHMzhxQTY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQyNjY5NzMxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "Ϧ០០ᖱɨ៩ ᖲ០ȶ" , // ```『 ⱧØØĐƗɆ Ⱨ₳₵₭ɆⱤ ฿Ø₮』```", //*『Ϧ០០ᖱɨ៩ ᖲ០ȶ』*\n "),
 
  author : process.env.PACK_AUTHER|| "ⱧØØĐƗɆ Ⱨ₳₵₭ɆⱤ ฿Ø₮",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Ϧ០០ᖱɨ៩ ᖲ០ȶ",
  ownername:process.env.OWNER_NAME|| "It'x ℍ𝕠𝕠𝕕𝔹𝕠𝕚",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "27714e8c-4152-4287-8d84-001fed072d6f",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "macallister1",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "🅷🅰🆁🅳🅴🆁 🆃🅷🅰🅽 🅴🆅🅴🆁",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
