const router = require('express').Router();
const {
    getAllUsers,
    createNewUser,
    getUserById,
    updateUserById,
    deleteUserById,
    addFriendById,
    deleteFriendById
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createNewUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

router  
    .route('/:id/friends/:friendId')
    .post(addFriendById)
    .delete(deleteFriendById)

module.exports = router;