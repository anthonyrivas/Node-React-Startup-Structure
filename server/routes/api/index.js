const express = require('express'),
    { api: controller } = require('../../controllers');


const router = express.Router();

router.route('/')
    .get(controller.getMain);

module.exports = router;