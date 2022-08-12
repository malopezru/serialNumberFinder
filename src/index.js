require('dotenv').config();

const app = require('./server');
const data = require('./controller/serialNumberFinder')
require('./database');

app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'))
})

/* data.getAllItems()
data.getEntityInfo("15151") */