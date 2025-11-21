const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port", process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });


