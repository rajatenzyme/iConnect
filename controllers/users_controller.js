const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title : 'User Profile'
      
    })
}

module.exports.signUp = function(req, res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('users_sign_up',{
        title : "iConnect | Sign Up"
    });
    
}

module.exports.signIn = function(req, res){
    
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('users_sign_in',{
        title : "iConnect | Sign in"
    });
    
}

// get the sign up data 
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }

    User.findOne({email : req.body.email}, function(err, user){
        if(err){ 
        console.log(`Error in signing up : ${err}`); 
        return;
        }
        
        if(!user){
            User.create(req.body, function(err, user){ 
                if(err){ 
                    console.log(`Error in signing up : ${err}`); 
                    return;
                }
                return res.redirect('sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    })
    

}

//sign in and create a session for user 
module.exports.createSession = function(req, res){
    return res.redirect('/users/profile');
}

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}