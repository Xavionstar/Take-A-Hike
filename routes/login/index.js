const express = require('express');
//const { User } = require('../../models');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('cheese')
res.render('login')
});

// router.post('/', async (req, res) => {
    
//     try {
//         console.log(req.body)
//       const userData = await User.findOne({ where: { email: req.body.email } });
   
//       if (!userData) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }
  
//       const validPassword = await userData.checkPassword(req.body.password);
       
//       if (!validPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }
  
      // req.session.save(() => {
      //   req.session.user_id = userData.id;
      //   req.session.logged_in = true;
        
      //   res.redirect('/dashboard');
      // });
  
  //   } catch (err) {
  //       console.error(err)
  //     res.status(400).json(err);
  //   }
  // });
  
  // router.post('/logout', (req, res) => {
  //   if (req.session.logged_in) {
  //     req.session.destroy(() => {
  //       res.status(204).end();
  //     });
  //   } else {
  //     res.status(404).end();
  //   }
  // });
  

module.exports = router;