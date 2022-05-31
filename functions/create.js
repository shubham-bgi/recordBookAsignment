const log_group = 'functions.create';

module.exports = async (req, res) => {
    console.log(log_group, req.originalUrl, req.body);
    if (!req.body) return res.status(400).json({ error: 'body is required' });

    const body = req.body;
    const range = req.query.range === undefined ? 'Sheet1' : `Sheet1!${req.query.range}`;
    const request = {
        spreadsheetId: process.env.SHEET_ID,
        range: range,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            "values" : body
        },
    };
    try {
        const response = await sheets.spreadsheets.values.append(request);
        return res.status(201).json(response.data);
    } catch (error) {
        console.error(log_group, error);
        return res.status(500).json(error);
    }
}