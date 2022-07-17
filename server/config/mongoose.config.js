const mongoose = require('mongoose');
const schemaName = 'authordb';
mongoose.set('runValidators', true); // for Validation on PUT request or UPDATE
mongoose.connect(`mongodb://localhost/${schemaName}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log(`Established a connection to the ${schemaName}`))
    .catch(err => console.log(`Something went wrong with the ${schemaName} connection`, err) );