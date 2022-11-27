const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        username: {
            type: String,
            require: [true, "username is required"],
        },
        avatar_Url: {
            type: String,
            default: 'http://localhost:8088/api/image/meo.jpg'
        },     
        email: {
            type: String,
            trim: true,
            lowercas: true,
        },
        
        password: String,
        name: String,
        introduce: String,
        // user follow ...
        follow: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }],
        // user dc follow bởi ...
        followBy: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }],
        followBlog: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "blog"
        }],
        repAnswer: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "question"
        }],
        roles: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Role"
            },
        ],
        ban: Boolean,
    },

    {
        timestamps: true,
    }
);

schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model("user", schema);