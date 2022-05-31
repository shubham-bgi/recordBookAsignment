const log_group = 'functions.read';

module.exports = async (req, res) => {
    console.log(log_group, req.originalUrl, req.body);
    const range = req.query.range === undefined ? 'Sheet1' : `Sheet1!${req.query.range}`;
    const request = {
        spreadsheetId: process.env.SHEET_ID,
        range: range
    };
    try {
        const response = await sheets.spreadsheets.values.get(request);
        return res.status(200).json(response.data);
    } catch (error) {
        console.error(log_group, error);
        return res.status(500).json(error);
    }
}