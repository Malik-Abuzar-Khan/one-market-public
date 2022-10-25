const router = require('express').Router();
const { getShopsDetails, updateShopNameAndDescription } = require("../../controllers/shop-details");

router.get('/', getShopsDetails);
router.post('/update_N&D', updateShopNameAndDescription)

module.exports = router;