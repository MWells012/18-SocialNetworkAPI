const { User, Thought, Reaction } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        User.find()
        .then((dbThoughtData) => {
            res.json(dbThoughtData);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

        createThought (req, res) {
        Thought.create(req.body)
        .then((dbThoughtData) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId},
                {$push: {thoughts:dbThoughtData._id} },
                { new: true }
            );
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'the thought was created but there is no user with this id!'});
            }
            res.json({ message: 'Your thought was successfully created!'});
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },

    singleThought(req, res) {
        Thought.findOne(  )
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
                return res.status(404).json({ message: 'there is no thought with this id. '});
            }
            res.json(dbThoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    updateThought (req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
        .then((dbThoughtData) => {
            if (!dbThoughData) => {
                return res.status(404).json({ message: 'There is no thought with this ID.'});
            }
            res.json(dbThoughtData);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    deleteThought (req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtID })
        .then((dbThoughtData) => {
            if (!dbthoughtData) {
                return res.status(404).json({ message: "we cannot find a thought with this id"});
            }
            return User.findOneAndUpdate (
                { thoughts: req.params.thoughtId },
                { $pull: { thoughts: req.params.thoughtId } },
                { new: true }
            );
        })
        .then((dbUserData) => {
            if (!dbUserData) {
                return res.status(404).json({ message: 'Your thought was created but there is no user with this id!' });
            }
            res.json({ message: 'Your thought was successfully deleted!' });
            })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    addReaction (req, res) {
        Reaction.findOneAndUpdate(req.body)

        .then((dbThoughtData) => {
            if (!dbThoughtData) {
                return res.status(404).json({ message: ' '});
            }
            res.json(dbThoughtData);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    deleteReaction (req, res) {
        Reaction.findOneAndUpdate(req.body)

        .then((dbThoughtData) => {
            if (!dbThoughtData) {
                return res.status(404).json({ message: ' '});
            }
            res.json(dbThoughtData);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

}


module.exports = thoughtController;
