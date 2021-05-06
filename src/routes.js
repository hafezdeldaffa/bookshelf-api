const {
  addBookHandler,
  getAllHandler,
  getBooksByIdHandler,
  editBooksByIdHandler,
  deleteBooksByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBooksByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBooksByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBooksByIdHandler,
  },
];

module.exports = {
  routes,
};

