const Router = require ('express').Router();

const {
    getUsers,
    createUser,
    singleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require ('../../controllers/userController');
// const { remove } = require('../../models/reaction');

Router.route('/').get(getUsers).post(createUser);
Router.route('/:userID').get(singleUser).put(updateUser).delete(deleteUser);
Router.route('/:userID/friends/:friendID').post(addFriend).delete(removeFriend);
module.exports = Router;