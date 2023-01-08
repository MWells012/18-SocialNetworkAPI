const Router= require ('express').Router();
const apiRoutes= require ('./api');

Router.use('/api', apiRoutes);
Router.use((req,res) => res.send('Hmm, nothing here. Try again?'));

module.exports = Router;