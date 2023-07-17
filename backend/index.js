const express = require('express');
require('dotenv').config();
const cors = require('cors');
const csvRoute = require('./routes/readcsv');

const app = express();


app.use(express.json());
app.use(cors())

app.use('/api/csv/',csvRoute)


app.listen(8080, () => {
    console.log(`Server is running on `);
  });
  