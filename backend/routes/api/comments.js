/**
 * Express router for handling comment-related API endpoints.
 * @module routes/api/comments
 */

/**
 * GET /api/comments/post/:postId
 * Retrieves all comments for a specific post.
 * @name GetCommentsByPost
 * @route {GET} /post/:postId
 * @routeparam {string} postId - The ID of the post to retrieve comments for
 * @returns {Object[]} 200 - An array of comment objects with populated author username
 * @returns {Object} 500 - Error object if fetching comments fails
 * @returns {string} 500.error - Error message indicating failure to fetch comments
 */

/**
 * DELETE /api/comments/:commentId
 * Deletes a specific comment by its ID.
 * @name DeleteComment
 * @route {DELETE} /:commentId
 * @routeparam {string} commentId - The ID of the comment to delete
 * @returns {Object} 200 - Success message object
 * @returns {string} 200.message - Success message indicating comment was deleted
 * @returns {Object} 404 - Error object if comment is not found
 * @returns {string} 404.error - Error message indicating comment not found
 * @returns {Object} 500 - Error object if deletion fails
 * @returns {string} 500.error - Error message indicating failure to delete comment
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey Github Copilot, please write a route to get all comments for a specific post
router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).populate("author", "username");
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    await comment.remove();
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});