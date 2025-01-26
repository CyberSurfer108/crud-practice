const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('test.db');



const fetchAllItems = () => {
    // Promise helps with async calls. Basically gives the caller a promise that data will be delivered.
    // if everything is fine then resolve the promise (await has been satisfied) so continue with the code.
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM list', [], (error, data) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(data);
            }
        });
    });
};





module.exports = {
    fetchAllItems,
    db
};
