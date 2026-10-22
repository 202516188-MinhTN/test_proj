const Account = require("../Models/Account");

function ArrayToLegitObject(accounts) {
    return accounts.map(account => account.toObject());
} 
function SingleToLegitObject(account) {
    return account.toObject();
}

class CheckControllers {
    check(req, res) {
        let exist = false;
        Account.find({name: req.body.name})
            .then(accounts => {
                if(accounts.length > 0) exist = true;
                res.json({
                    exist,
                })
            })
    }
    login(req, res) {
        let exist = false;
        Account.find({
            name: req.body.name,
            password: req.body.password,
        })
        .then(accounts => {
            if(accounts.length > 0) exist = true;
            let slug = "";
            if(exist) slug = accounts[0].slug;
            res.json({
                exist,
                slug,
            })
        })
    }
}
module.exports = new CheckControllers;