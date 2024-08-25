// app.js
const axios = require('axios');
const books = require('./booksData');

// Task 10: Get all books using async callback function
async function getAllBooks(callback) {
    try {
        setTimeout(() => {
            callback(null, books);
        }, 1000);
    } catch (error) {
        callback(error, null);
    }
}

// Task 11: Search by ISBN using Promises
function searchByISBN(isbn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const book = books.find(b => b.isbn === isbn);
            if (book) {
                resolve(book);
            } else {
                reject("Book not found");
            }
        }, 1000);
    });
}

// Task 12: Search by Author
async function searchByAuthor(author) {
    try {
        const result = books.filter(book => book.author === author);
        if (result.length > 0) {
            return result;
        } else {
            throw new Error("No books found for the given author");
        }
    } catch (error) {
        return error.message;
    }
}

// Task 13: Search by Title
async function searchByTitle(title) {
    try {
        const result = books.filter(book => book.title.includes(title));
        if (result.length > 0) {
            return result;
        } else {
            throw new Error("No books found with the given title");
        }
    } catch (error) {
        return error.message;
    }
}

// Function to demonstrate all tasks
async function runTasks() {
    // Task 10: Get all books
    getAllBooks((error, books) => {
        if (error) {
            console.log("Error getting books:", error);
        } else {
            console.log("All Books:", books);
        }
    });

    // Task 11: Search by ISBN
    try {
        const bookByISBN = await searchByISBN("978-1-59327-584-6");
        console.log("Book by ISBN:", bookByISBN);
    } catch (error) {
        console.log("Error searching by ISBN:", error);
    }

    // Task 12: Search by Author
    const booksByAuthor = await searchByAuthor("Marijn Haverbeke");
    console.log("Books by Author:", booksByAuthor);

    // Task 13: Search by Title
    const booksByTitle = await searchByTitle("JavaScript");
    console.log("Books by Title:", booksByTitle);
}

runTasks();
