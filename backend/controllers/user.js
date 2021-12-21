const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwr = require('jsonwebtoken');

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email: req.body.email,
            password : hash
        });
        user.save()
        .then(() => res.status(201).json({ message : 'Utilisateur créer ! '}))
        .catch(error => res.status(500).json( {error }));
    })
    .catch(error => res.status(500).json( { error }))
}

exports.logIn = (req, res, next) => {
    User.findOne({ email : req.body.email })
    .then(user => {
        if (!user) {
            res.status(401).json({ error : 'Utilisateur non trouvé ! '});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                res.status(401).json({ error : 'Mot de passe faux ! '});
            }
            res.status(200).json({ 
                userId : user._id,
                token: jwr.sign(
                    {
                        userId: user._id
                    },
                    'RANDOM_TOKEN_SECRET',
                    {
                        expiresIn : '24h'
                    }
                )
            });
        })
        .catch(error => res.status(500).json({ error }))
    })
    .catch(error => { console.log("error")})
}

exports.getUsers = (req, res, next) => {
    User.find()
    .then(users => {
        res.status(200).json({ users });
    })
    .catch(error => res.status(500).json({ error}))
}
