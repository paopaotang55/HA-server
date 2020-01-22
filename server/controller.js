const { Users, Todos, Posts, Comments } = require("../db/models");

Comments.belongsTo(Users, {
  foreignKey: "user_id",
  targetKey: "id"
});
Posts.belongsTo(Users, {
  foreignKey: "user_id",
  targetKey: "id"
});
module.exports = {
  user: {
    getUsers: async (req, res) => {
      try {
        const names = await Users.findAll({
          attributes: ["id", "name"]
        });
        res.status(200).send({
          code: 0,
          data: names
        });
      } catch (err) {
        res.status(500).send({
          code: 1,
          message: "서버 에러!!"
        });
      }
    },
    getUserInfo: async (req, res) => {
      const id = +req.params.id;
      try {
        const user = await Users.findOne({ where: { id } });
        if (user) {
          res.status(200).send({
            code: 0,
            data: user
          });
        } else {
          res.status(401).send({
            code: 1,
            message: "유저 아이디 없음"
          });
        }
      } catch (err) {
        res.status(500).send({
          code: 1,
          message: "서버 에러!!"
        });
      }
    },
    getUserTodos: async (req, res) => {
      const user_id = +req.params.id;
      try {
        const todos = await Todos.findAll({ where: { user_id } });
        res.status(200).send({
          code: 0,
          data: todos
        });
      } catch (err) {
        res.status(500).send({
          code: 1,
          message: "서버 에러!!"
        });
      }
    },
    getPosts: async (req, res) => {
      try {
        const posts = await Posts.findAll({
          include: [{ model: Users, require: true, attributes: ["name"] }]
        });
        res.status(200).send({
          code: 0,
          data: posts
        });
      } catch (err) {
        res.status(500).send({
          code: 1,
          message: "서버 에러!!"
        });
      }
    },
    getComments: async (req, res) => {
      const post_id = +req.params.id;
      try {
        const comments = await Comments.findAll({
          attributes: ["id", "content"],
          include: [{ model: Users, require: true, attributes: ["name"] }],
          where: { post_id }
        });
        res.status(200).send({
          code: 0,
          data: comments
        });
      } catch (err) {
        res.status(500).send({
          code: 1,
          message: "서버 에러!!"
        });
      }
    }
  }
};
