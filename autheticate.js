const { google } = require('googleapis');
(async () => {
    try {
        const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
        globalThis.sheets = google.sheets({ version: "v4", auth });
        console.log('Connected to Google sheets.');
    } catch (error) {
        console.log(error);
    }
})()