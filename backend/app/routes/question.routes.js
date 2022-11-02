const express = require("express");
const question = require('../controllers/question.controller')

module.exports = (app) => {
    const router = express.Router();
    router.route("/")
        .get(question.getListQuestion)
        .post(question.createQuestion)
        .delete(question.deleteAllQuestion)

    router.route("/:id")
        .get(question.findOneQuestion)
        .put(question.updateQuestion)
        .delete(question.deleteQuestion)

    app.use("/api/question", router);
};