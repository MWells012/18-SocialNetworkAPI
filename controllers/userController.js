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
        res.json(dbUserData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
    },

    singleUser(req,res) {
        User.findOne({ _id: req.params.userId})
        .populate('friends')
        .populate('thoughts')
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({ message: "there is no user with this ID."});
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId},
            { }
        )

        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'There is no user that matches that ID' });
            }
            res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'We cannot find a user with this ID.' });
                }

                // i'm missing something here but idk how to write it
            .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
    


    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true })
        .then((dbUserData) => {
            if (!dbUserData) {
            return res.status(404).json({ message: 'There is no user with this ID.' });
        }
        res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
        .then((dbUserData) => {
            if (!dbUserData) {
            return res.status(404).json({ message: 'There is no user with this ID.' });
        }
        res.json(dbUserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
};


module.exports = userController;