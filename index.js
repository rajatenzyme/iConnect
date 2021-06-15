const express = require('express');
const app = express();
const port = 8000;


//use routers
app.use('/', require('./routes'));

app.listen(port, function (err){
    if (err){
        console.log(`Error in server running  - ${err}`);
    }
    console.log(`Server running on port: ${port}`);
});