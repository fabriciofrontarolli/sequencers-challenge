/* Only used for production (Heroku) */
const express = require('express');
const app = express();

app.use(express.static('dist'));

const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);    
});
