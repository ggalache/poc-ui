const fs = require('fs');

const config = {
  ...require('./user/routes')
};

fs.writeFileSync('data.json', JSON.stringify(config));