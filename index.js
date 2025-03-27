const express = require('express') ; 
const app = express() ;  

//add
const router = require('./router') ; 
require('./cron/reply-unread-msg')
app.use("/", router);
app.listen(3000 , ()=>{
    console.log('http://localhost:3000');
})