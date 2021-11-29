const router = require('express').Router();
const {
    getAllThoughts,
    createNewThought,
    getThoughtById,
    updateThoughtById,
    deleteThoughtById,
    postReaction,
    deleteReactionById
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createNewThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThoughtById)

router
    .route('/:thoughtId/reactions')
    .post(postReaction)

router
    .route('/:thoughtId/reactions/reactionId')
    .delete(deleteReactionById)

module.exports = router;