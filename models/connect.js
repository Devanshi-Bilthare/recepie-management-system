const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/recepie-management-system')
.then(() => console.log('database connected'))
.catch(err => console.log(err))