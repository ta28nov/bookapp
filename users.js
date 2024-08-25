const fs = require('fs');

function registerUser(username, password) {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);

        // Kiểm tra xem username đã tồn tại chưa
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            console.log('Username already exists. Please choose a different username.');
            return;
        }

        // Thêm người dùng mới
        const newUser = {
            username: username,
            password: password,
            reviews: []
        };
        users.push(newUser);

        // Ghi lại vào users.json
        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) throw err;
            console.log('User registered successfully!');
        });
    });
}

// Sử dụng hàm
registerUser('newUser', 'newPass');
function loginUser(username, password) {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);

        // Kiểm tra username và password
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            console.log('Login successful!');
            return user; // Trả về thông tin người dùng sau khi đăng nhập thành công
        } else {
            console.log('Invalid username or password.');
            return null;
        }
    });
}

// Sử dụng hàm
loginUser('newUser', 'newPass');
function addOrUpdateReview(username, isbn, reviewText) {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);

        // Tìm người dùng
        const user = users.find(user => user.username === username);
        if (!user) {
            console.log('User not found.');
            return;
        }

        // Tìm đánh giá theo ISBN và cập nhật, nếu không có thì thêm mới
        const reviewIndex = user.reviews.findIndex(review => review.isbn === isbn);
        if (reviewIndex >= 0) {
            user.reviews[reviewIndex].text = reviewText;
            console.log('Review updated.');
        } else {
            user.reviews.push({ isbn: isbn, text: reviewText });
            console.log('Review added.');
        }

        // Ghi lại vào users.json
        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) throw err;
            console.log('Review saved successfully!');
        });
    });
}

// Sử dụng hàm
addOrUpdateReview('newUser', '1234567890', 'Amazing book!');
function deleteReview(username, isbn) {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);

        // Tìm người dùng
        const user = users.find(user => user.username === username);
        if (!user) {
            console.log('User not found.');
            return;
        }

        // Tìm và xóa đánh giá theo ISBN
        const reviewIndex = user.reviews.findIndex(review => review.isbn === isbn);
        if (reviewIndex >= 0) {
            user.reviews.splice(reviewIndex, 1);
            console.log('Review deleted.');
        } else {
            console.log('Review not found.');
        }

        // Ghi lại vào users.json
        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
            if (err) throw err;
            console.log('Review deleted successfully!');
        });
    });
}

// Sử dụng hàm
deleteReview('newUser', '1234567890');

