// import { Router } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/express';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('selection');
});
router.post('/selection', (req, res) => {
  console.log('hitten selection route!!')
  let role = req.body.user;
  console.log(role);
  if (role === 'Instructor'){
    console.log('selection is instructor')
    res.render('landing-page-one')
  }else{
    console.log('selection is student')
    console.log('landing page two')
    res.render('landing-page-two')
  }
  // .get('/annoucement-post', (req, res) =>{
  //   console.log('annoucement page is a success!')
  // }))
});
// router.get('/', function(req, res, next) {
//   res.render('annoucements');
// });


module.exports = router;
