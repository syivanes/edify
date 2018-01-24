// import { Router } from '../../../../Library/Caches/typescript/2.6/node_modules/@types/express';

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('selection');
// });

const Announcement = require('../models/announcement');
const Classnote = require('../models/classnote');

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
    .post((req, res) => {
      let title = req.body.title;
      let content = req.body.content;

      Classnote.create({
        title: title,
        content: content        
      }).then(result => {
        res.render('landing-page-one', {
          title: result.title,
          content: result.content
        })
      })
    })

  router.route('/edit-announcements')
    .get((req, res) => {
      res.render('edit-announcements')
    })
    .post((req, res) => {
      // let title = req.body.title;
      let content = req.body.content;
      // let datePublished = Date.now();
      
      // console.log(content, datePublished)

      Announcement.create({
        content: content
        // date_published: datePublished
      }).then(result => {
        console.log(result)
          res.render('landing-page-one', {
          datePublished: result.createdAt,
          content: result.content
        })
        // res.send(result)
      }).catch(err => {
        res.send('we got an error')
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
