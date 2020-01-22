const Sequelize = require('sequelize');
const sequelize = require('./config');
// const fetch = require("node-fetch");

const Users = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
Users.sync().then(() => console.log('Users table created'));

const Todos = sequelize.define('todos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id'
    }
  }
});
Todos.sync().then(() => console.log('Todos table created'));

const Posts = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id'
    }
  }
});
Posts.sync().then(() => console.log('Posts table created'));

const Comments = sequelize.define('comments', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id'
    }
  },
  post_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Posts,
      key: 'id'
    }
  }
});
Comments.sync().then(() => console.log('Comments table created'));

// fetch("https://koreanjson.com/users")
//   .then(res => res.json())
//   .then(data => {
//     let users = data.map(item => ({
//       name: item.name,
//       email: item.email,
//       phone: item.phone
//     }));
//     Users.bulkCreate(users).then(res =>
//       console.log("+++++++++++++유저+++++++++++++++")
//     );
//   });

// fetch("https://koreanjson.com/todos")
//   .then(res => res.json())
//   .then(data => {
//     let todos = data.map(item => ({
//       title: item.title,
//       completed: item.completed,
//       user_id: item.UserId
//     }));
//     Todos.bulkCreate(todos).then(res =>
//       console.log("+++++++++++++투두+++++++++++++++")
//     );
//   });
// fetch("https://koreanjson.com/posts")
//   .then(res => res.json())
//   .then(data => {
//     let posts = data.map(item => ({
//       title: item.title,
//       content: item.content,
//       user_id: item.UserId
//     }));
//     Posts.bulkCreate(posts).then(res =>
//       console.log("+++++++++++++포스트+++++++++++++++")
//     );
//   });
// fetch("https://koreanjson.com/comments")
//   .then(res => res.json())
//   .then(data => {
//     let comments = data.map(item => ({
//       content: item.content,
//       post_id: item.PostId,
//       user_id: item.UserId
//     }));
//     Comments.bulkCreate(comments).then(res =>
//       console.log("+++++++++++++코멘츠+++++++++++++++")
//     );
//   });

module.exports = { Users, Todos, Posts, Comments };
