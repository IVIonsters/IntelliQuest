const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Auth route'));

try {
  const authInfo = await descopeClient.validateSession(sessionToken);
  console.log("Successfully validated user session:");
  console.log(authInfo);
} catch (error) {
  console.log ("Could not validate user session " + error);
}

module.exports = router;
