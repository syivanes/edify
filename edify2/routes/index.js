// import { Router } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/express';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('selection');
// });


router.route('/')
  .get((req, res)=>{
    res.render('selection');
  })
  .post((req,res)=>{
    console.log('hitten selection route!!')
    let role = req.body.user;
    console.log(role);
    /* User selection */
    if (role === 'Instructor'){
      console.log('selection is instructor')
      res.render('landing-page-one')
    }else{
      console.log('selection is student')
      console.log('landing page two')
      res.render('landing-page-two')
    }
  })
  router.route('/edit-classnotes')
    .get((req, res) => {
      res.render('edit-classnotes')
    })
    .post((req, res) =>{
      let title = req.body.title;
      let notes = req.body.notes;
      console.log(title, notes)
      res.render('landing-page-one', {
        title: title,
        notes: notes
      })
    })

  router.route('/edit-announcements')
    .get((req, res) =>{
      res.render('edit-announcements')
    })
    .post((req, res) =>{
      let title = req.body.title;
      let content= req.body.content;
      console.log(title, content)
      res.render('landing-page-one',{
        content: content
      })
    })
    

/* defines user role */
// router.post('/selection', (req, res) => {
//   console.log('hitten selection route!!')
//   let role = req.body.user;
//   console.log(role);
//   /* User selection */
//   if (role === 'Instructor'){
//     console.log('selection is instructor')
//     res.render('landing-page-one')
//   }else{
//     console.log('selection is student')
//     console.log('landing page two')
//     res.render('landing-page-two')
//   }
// });

// router.post('/edit-classnotes', urlencoded, (req, res) => {
//   console.log(req.body)
// });



module.exports = router;
