const { User, Thought } = require('../models');

const userController = {
    getUser(req, res) {
        User.find()
        .then((dbUserData) => {
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts:dbThoughtData._id} },
                { new: true }
            );
        })
        .then((dbUserData) => {
            if(!dbThoughtData) {
                return res.status(404).json({message: ''})
            }
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    singleUser(req,res) {
        User.findOne()
    },
    updateUser(req, res) {
        User.findOneAndUpdate()
    },
    deleteUser(req, res) {
        User.findOneAndDelete()
    },
    addFriend(req, res) {
        User.findOneAndUpdate()
    },
    removeFriend(req, res) {
        User.findOneAndUpdate()
    }
}

module.exports = userController;