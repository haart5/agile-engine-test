const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const csvFile = './public/Mobile_Food_Facility_Permit.csv';

app.get('/api/csv-data', (req, res) => {
    const results = [];

    fs.createReadStream(csvFile)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        })
        .on('error', (err) => {
            res.status(500).json({ error: err });
        });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});