const { Book, User } = require("../models");

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    book: async () => {
      return Book.find({});
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },
    addBook: async (parent, args) => {
      const newBook = await Book.create(args);
      return newBook;
    },
    removeBook: async (parent, { bookId, skill }) => {
      return Profile.findOneAndDelete({ _id: bookId }, { new: true });
    },
  },
};

module.exports = resolvers;
