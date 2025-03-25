const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/', (_, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/health', (_, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
