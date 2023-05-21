const express=require('express');
const router=express.Router();

router.get('/blogs',blogController)

module.exports=router;