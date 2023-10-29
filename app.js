const express = require("express");
const userRouter = require('./users/users_router')
const adminRouter = require('./admin/admin_router')
const sequelize = require('./config/sequelize')

const PORT= 3007 || process.env.PORT

const app = express();

app.use(express.json());


app.use('/users', userRouter)

app.use('/admin', adminRouter)



// app.use('/admin', adminRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})


sequelize.authenticate().then(() => {
    console.log('connected to db sucessfully');
}).catch((err) => {
 console.log('Error connecting to db', err);
})



app.use('*', (req, res) => {
    res.status(404).send({
        data: null,
        error: 'Route not found'
    })
})