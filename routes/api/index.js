const router = require('express');
const userRoutes = require('./users-routes');
const thoughtRoutes = require('./thoughts-routes');

router.use('./users-routes', userRoutes);
router.use('./thoughts-routes', thoughtRoutes);

module.exports = router;