const fs = require('fs');

function getAllBooks(callback) {
    fs.readFile('books.json', 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, JSON.parse(data));
        }
    });
}

// Sử dụng hàm
getAllBooks((err, books) => {
    if (err) console.error(err);
    else console.log(books);
});
