const User= require("../models/user.js");

module.exports.renderSignupForm=(req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signupUser=async(req,res,next)=>{
    try{
        let{username,email,password}=req.body;
        const newUser=new User({email,username});
        let registeredUser=await User.register(newUser,password);
        console.log(registeredUser);
        req.login(registeredUser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success","Welcome to WanderLust!");
            res.redirect("/listings");
        });
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginform=(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.loginUser=async(req,res)=>{
    req.flash("success","Welcome back to WanderLust!");
    let redirectUrl=res.locals.redirectUrl;
    res.redirect(redirectUrl);
};

module.exports.logoutUser=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","You have logged out successfully!");
        res.redirect("/listings");
    });
};