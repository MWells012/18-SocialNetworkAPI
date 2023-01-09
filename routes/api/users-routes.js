const router = require('express').Router();

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


router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(singleUser).put(updateUser).delete(deleteUser);
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend);
module.exports = router;