const router = require("express").Router();

router.post('/', require('./functions/create'));
router.get('/', require('./functions/read'));
router.put('/', require('./functions/update'));
router.delete('/', require('./functions/delete'));

module.exports = router;