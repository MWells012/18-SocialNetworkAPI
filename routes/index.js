const router= require ('express').Router();
const apiRoutes= require ('./api');

router.use('/api', apiRoutes);
router.use((req,res) => res.send('Hmm, nothing here. Try again?'));

module.exports = router;