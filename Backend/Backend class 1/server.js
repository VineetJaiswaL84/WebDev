const express = require('express');
const mongoose = require('mongoose'); // corrected spelling
const app = express();

app.use(express.json()); // to parse JSON request body

app.listen(8000, () => {
    console.log('Server is running on port 8000'); // consistent port and fixed typo
});

app.get('/', (request, response) => {
    response.send("Hello Jee Kaise Ho Saare");
});

app.post('/api/cars', (request, response) => {
    const { name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully");
});

// corrected URL and option spelling
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connection Successful");
})
.catch((error) => {
    console.log("Received an error", error);
});
