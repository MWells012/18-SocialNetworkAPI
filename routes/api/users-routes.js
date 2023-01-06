const router = require ('express').Router();

const {
    getUsers,
    createUser,
    singleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require ('');
const { remove } = require('../../models/reaction');

router.route('/').get(getUsers).post(createUser);
router.route('/:userID').get(singleUser).put(updateUser).delete(deleteUser);
router.route('/:userID/friends/:friendID').post(addFriend).delete(removeFriend);