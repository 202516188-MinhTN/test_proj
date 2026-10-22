const Account = require("../Models/Account");

function ArrayToLegitObject(accounts) {
    return accounts.map(account => account.toObject());
} 
function SingleToLegitObject(account) {
    return account.toObject();
}

class SearchControllers {
    account(req, res) {
        Account.findOne({name: req.query.find})
            .then(account => {
                if(account) {
                    res.json({
                        name: account.name,
                        email: account.email,
                    })
                }
            })
    }
}
module.exports = new SearchControllers;