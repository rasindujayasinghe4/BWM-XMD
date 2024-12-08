const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOYLc1KqpWkREFBFF8bJ1aitCgCjXEBCc8r+fYi4187Dn7OxbKpBOp7u/fgFJigu0QA0YvYCM4ApS1C5pkyEwAuPS9xEBXeBBCsEIIGN2RqrgW4G6mLmVbdWeJAi9xW5yxOpQ2sfrdb2kM6V2js/g0QVZeY6w+wfA6Hq1tXp9CdNBPD8Wsb6OLxPzaLBG3BfTqTFPDykyB8Pzmn8GjxYRYoKTQM1CFCMCowVqLIjJ9+h35nkkjgfm5FpPAjthOvEuuO1Whgz5lYguuRRQGCvUGR7S79G3LK/aUL+zHvP9oUXWtUkKBw+ZfiQxy4gygRVu0t12ql0Gb/QLHCTI0z2UUEybb+uOZQrrG7aqib+dL3ieXcf21DYPE3e1uU2lopqcxjDOGHMvf4843joGLl1zKGcTqacd7idT821p6Cmne90M9MP5ijAuuZmz+0rcIh9Zuf4f3Rlt6QSzCTRzfhXAHneD0XKn33bwICCT8Llw2ovV9Sr7DP89+rDpL9zNnR1u4kFns5cjQ72e+oUad5x+RTROwbvxuJ/UvbX6SR/SkvyJZd3M9FAYSPO5QK8HFk4NyOWChOqTL0TVjIzD6WxtBDYb9nQ2tp2DQsaWsWEDu8YXXw7J4CQMCiNR9nzlryz+hJbJOHh+fdEVNboHRuyjCwgKcEEJpDhN2r0+I3YB9CobuQTRV3nB/OKcva12Tel02lldJyXdHOiGpJFAckfkd1xDwzNLGm5/fAZdkJHURUWBvBkuaEqaJSoKGKACjP7+2QUJqumbce11HNsFPiYF3SVlFqXQ+3D14yN03bRMqN0krtIuEAEj5nMbUYqToGh1LBNI3BBXSAkhLcDIh1GBHl3goQq7qMUDmsPkK9M+biV8K7ca5LfsP77cUg7T5O0X3uMQ47L8kyci4Yn3peETRGf0hFyf5QTXFV2JBV2A32emPfNbC/dOvs/1dYjGkpZHiZKd9aVhB3zt6682vGmPCPLAiJISdcEZutcy26ZXlPwBV9q7Cl/zd1tsEoffdOLN7U4iP2Mv6hfcN0/B6OWzp5TUa/FEdTGVtpoKuiB+jSBuXz7kJZHlOZ7j2BHP/FX8uLU6wiz7kSDawr5r3h7wEIU4KsAIKEs/SwcDVTUvDHtONU1eBrIStKJ+ePQR9rcwMXZ4Wxwb96z0vVl6D66MFZOgN7AvOwY2J0EIzCHZJqLq6M//AtLWvsCpq1UOJ6dxRTYb1d8afiyu8ls/mLInUfe9YegrvcQbrE19IpfJAO33+G6qq9W2b5SB3qeMtU8cKzymAa2R0qiZLD+3t71l5etlCxwx+ka1TtJ8H52rVeDHihcftnwUipA9mkNpuI4PktPP1w17nuVinN1va06e4FzfnyrDEA9qlU1D0bzX8rgpBxqh8vsYvtZA9F6/+HVAXt6T5WP02mYJbB36D2++Zpx5dL9AvNfjb3I09tTUVeJlot1oshGX/NycCDlv9dSUNbUiRug48SEjdMKpDR6Pn12QRZD6KYnb0ks8kmIPdEEECyp/jukWx6igMM7AiJU4ThQElu8/fgG4cc5A3AcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

