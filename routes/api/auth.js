const express = require('express');
const router = express.Router();
const passport = require('passport');

//Item Model
const User = require('../../models/User');

// @route  POST api /items
// @desc 	 Create a post
// @access Public
router.post('/signup', passport.authenticate('local-signup', {
	successRedirect: '/',
	failureRedirect: 'signup',
	passReqToCallback: true
}));

// @route  POST api /items
// @desc 	 Create a post
// @access Public
router.get('/signin', (req,res) => {
	const newItem = new Item({
		name: req.body.name
	});
	  
	newItem.save().then(item => res.json(item));
});

// @route  DELETE api /items
// @desc 	 Delete an item
// @access Public
router.get('/:signout', (req,res) => {
	Item.findById(req.params.id)
	.then(item => item.remove().then(() => res.json({success: true})))
	.catch(err => res.status(404).json({success: false}));
});

module.exports = router;