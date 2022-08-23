const User = require('../model/userModel')
const userCtrl = {
    home: async (req,res) => {
        try {
            let data = await User.find();
        
        res.render('index.ejs', { users: data });
    } catch (err) {
        console.log(err.message);
    }
},
    new: (req,res) => {
        res.render('create.ejs')

    },
    edit: async (req,res) => {
        try {
            let id = req.params.id;

            let data = await User.findById({_id: id});
        res.render('index.ejs', { user: data });
    } catch (err) {
        console.log(err.message);
    }
},
    pnf: (req,res) => {
        res.render('pnf.ejs')
    },
    create: async (req,res) => {
        try {
            const newUser = await User(req.body);
            console.log(`data = `, newUser);

            let extUser = await User.findOne ({email: req.body.email});
            if(extUser){
                console.log(`User email already exists..`)
            }else {
                newUser.save();
                console.log(`new user created succesfully`);
            }
            res.redirect('/');
        } catch (error){
            console.log(error.message);
        }
        
    },
    update: async (req,res) => {
        try {
            let id = req.params.id;
            const {name, email, mobile, address} = req.body;

            await User.findByIdAndUpdate({_id: id}, {
                name,email,address,mobile
            });

            console.log(`user updated succesfully`);
            res.redirect("/");
        } catch (err) {
            console.log(err.message)
        }
    },
    delete: async (req,res) => {
        try {
            let id = req.params.id;

            await User.findByIdAndDelete({_id: id});
            console.log(`user deleted succesfully`);

            res.redirect("/");
        } catch (err) {
            console.log(err.message);
        }
    },

    pnf: (req,res) => {
        res.render('pnf.ejs')
    }

}; 

module.exports = userCtrl;