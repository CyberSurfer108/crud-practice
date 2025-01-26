const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('test.db');



const fetchAllItems = () => {
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
