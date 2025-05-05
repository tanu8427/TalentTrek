const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN; // ✅

mongoose.connect(mongo_url)
    .then(() => {
        console.log("Mongo DB connection Successfully");
    })
    .catch((err) => {
        console.log("Mongo-DB connection failed", err);
    });
