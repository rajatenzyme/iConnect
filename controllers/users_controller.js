const User = require('../models/user');

module.exports.profile = function(req, res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if(user){
                return res.render('user_profile', {
                    title : 'User Profile',
                    user : user
                })
            }else{
                return res.redirect('/users/sign-in');
            }
        })
    } else{
        return res.redirect('/users/sign-in');
    }



    
}

module.exports.signUp = function(req, res){
    return res.render('users_sign_up',{
        title : "iConnect | Sign Up"
    });
    
}

module.exports.signIn = function(req, res){
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
    //find the user 
    User.findOne({email:req.body.email}, function(err, user){
        if(err){ console.log(err); return;}
        //handle user found 
        if(user){
            //handle password which doesn't match 
            if(user.password!=req.body.password){
                return res.redirect('back');
            }
            //handle session creation
            res.cookie('user_id', user.id);
            
            return res.redirect('/users/profile');
        }
        else{
        //handle user not found
        return res.redirect('back');
        }

    });
}

//Logout
module.exports.logOut = function(req, res) {
    console.log(req.cookies);
    res.cookie("user_id", 0);
    return res.redirect('/users/sign-in')
}