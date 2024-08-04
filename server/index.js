const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/my-library', {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const authRouter = require('./routes/auth');
const booksRouter = require('./routes/books');
app.use('/api/auth', authRouter);
app.use('/api/books', booksRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
