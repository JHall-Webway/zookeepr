const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const bp = require('body-parser');

router.use(bp.json());
router.use(bp.urlencoded({ extended:true }));
router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;