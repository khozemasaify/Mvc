const express = require ("express")
const app = express();
const userRouter = require('./routes/index');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',userRouter)

app.listen(process.env.PORT || 3000)