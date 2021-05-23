const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth')

exports.registerUser = (req, res) => {
    
  User.exists({ email: req.body.email }, (err, result) => {
      if(err) {
          return res.status(400).json({
              statusCode: 400,
              status: false,
              message: 'You made a bad request',
              err
          })
      }

      if(result) {
          return res.status(400).json({
              statusCode: 400,
              status: false,
              message: 'The email address is already taken'
          })
      }
      
      const salt = bcrypt.genSaltSync(10);
      
      bcrypt.hash(req.body.password, salt, (err, hash) => {

        if(err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message:'Failed when encrypting user password',
                err
            })
        }

        const newUser = new User ({
          firstName:        req.body.firstName,
          lastName:         req.body.lastName,
          order:            req.body.order,
          email:            req.body.email,
          passwordHash:     hash
        })

        newUser.save()
         .then(() => {
             return res.status(201).json({
                 statusCode: 201,
                 status: true,
                 message: 'User was created successfully'
             })
         })
         .catch(err => {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create new user',
                err
            })
         })
      })
  })

}

exports.loginUser = (req, res) => {
  
    User.findOne({ email:  req.body.email })
        .then(user => {
            if(!user) {
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message:  'Incorrect email or password'
                })
            }

         bcrypt.compare( req.body.password, user.passwordHash, (err, result) => {
             if(err) {
                 return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'You mae a bad request',
                    err

                 })
             }


             if(result) {
                 res.status(200).json({
                    statusCode: 200,
                    status: true,
                    message: 'Authentication was successfully',
                    token:auth.generateToken(user),
                    user: user
                 })
             } else {
                 res.status(401).json({
                     statusCode: 401,
                     status: false,
                     message: ' incorrect email ore password'
                 })
             }
        })
    })
}

exports.addOrder = (req, res) => {
      User.exists({ email: req.params.id }, (err, result) => {
        if (err) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: "You made a bad request.",
          });
        }
        if (result) {
    
          User.updateOne(
            { email: req.params.id },
            { $push: { order: req.body } }
          )
            .then(() => {
              console.log('success')
              res.status(200).json({
                statusCode: 200,
                status: true,
                message: "order added successfully.",
              });
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: "Failed to add order.",
              })
            })
        }
      })
    }








