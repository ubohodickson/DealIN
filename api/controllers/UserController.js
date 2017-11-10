/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var admin = require("firebase-admin");

var firebase = require('./helpers/firebase');

module.exports = {
   
    signup: function(req, res){
      
        var me = {};
        me.username = req.param('username');
        me.password = req.param('password');
        me.email = req.param('email');
        var usersRef = admin.database().ref().child('users').key;

        User.create(me).exec(function(err, createdUser){
            if(err){
                return res.negotiate(err);
            }
            return res.json(createdUser);
        });
        
        
    }
    
    
    
	
};

