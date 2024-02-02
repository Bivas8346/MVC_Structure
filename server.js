const express = require('express')
const ejs = require('ejs')


const router=require('./Router/homeRouter')

const app = express()


app.set('view engine','ejs')
app.set('views','views');

app.use(router);
app.use(express.static('public'))

const port=4466;
app.listen(port,(error)=>{

    if(!error){
        console.log(`server run in http://localhost:${port}`);
    }
    else{
        console.log(`error happend`);
    }
})