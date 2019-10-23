
const User = require('../models/User');

module.exports = {

    async index(req, res){
        
        let response = await User.find({}, function(err, users){
            if(err){
               res.json({message: "error"})
               next();
            }

        })

        res.json(response);
    },

    async show(req, res) {
        const { _id } = req.params;

        let user = await User.findById(_id);

        if(!user){
            res.json({algo: "deu errado"});
        }

        return res.json(user);
        
    },

    async store(req, res) {
        const { email, password } = req.body;
        
        let user = await User.findOne({ email, password });

        if (!user) {

            user = await User.create({ email, password });

        }

        return res.json(user);
    },

    async delete(req, res) {

        const filter = { _id: req.headers._id};

        await User.deleteOne(filter, (err) => {
            if (err) {
                res.json({ message: "algo deu errado" })
            }
        });

        return res.json({ message: "usuario deletado" });

    },

    async update(req, res) {
        const { email, password } = req.body;
        const { _id } = req.params;
        let user = await User.findByIdAndUpdate(_id, { email, password });


        if (!user) {
            return res.json({ message: "algo deu errado" });
        }

        return res.json({
            user: user,
            updated: true
        })

    },
}