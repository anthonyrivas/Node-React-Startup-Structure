const express = require( 'express' ),
    api = require( './api' );


const router = express.Router();

router.use( '/api', api );

module.exports = router;