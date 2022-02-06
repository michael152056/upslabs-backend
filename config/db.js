const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mike:152056@cluster0.jy4ou.mongodb.net/upsLabs_bd', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Base conectada'))
    .catch(err => console.log(err));