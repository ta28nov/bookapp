const fs = require('fs').promises;

// Hàm tìm kiếm sách theo ISBN sử dụng Promises
function searchByISBN(isbn) {
    return fs.readFile('books.json', 'utf8')
        .then(data => {
            const books = JSON.parse(data);
            return books.find(book => book.isbn === isbn);
        })
        .catch(err => {
            console.error('Error reading file:', err);
            throw err;
        });
}

// Hàm tìm kiếm sách theo tác giả
function searchByAuthor(author) {
    return fs.readFile('books.json', 'utf8')
        .then(data => {
            const books = JSON.parse(data);
            return books.filter(book => book.author === author);
        })
        .catch(err => {
            console.error('Error reading file:', err);
            throw err;
        });
}

// Hàm tìm kiếm sách theo tiêu đề
function searchByTitle(title) {
    return fs.readFile('books.json', 'utf8')
        .then(data => {
            const books = JSON.parse(data);
            return books.filter(book => book.title === title);
        })
        .catch(err => {
            console.error('Error reading file:', err);
            throw err;
        });
}

// Sử dụng hàm tìm kiếm sách theo ISBN
searchByISBN('978-3-16-148410-0')
    .then(book => console.log('Book found:', book))
    .catch(err => console.error('Error:', err));

// Sử dụng hàm tìm kiếm sách theo tác giả
searchByAuthor('Author Name')
    .then(books => console.log('Books found:', books))
    .catch(err => console.error('Error:', err));

// Sử dụng hàm tìm kiếm sách theo tiêu đề
searchByTitle('Sample Book')
    .then(books => console.log('Books found:', books))
    .catch(err => console.error('Error:', err));




    