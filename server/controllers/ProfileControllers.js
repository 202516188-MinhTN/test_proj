const Account = require("../Models/Account");
const { account } = require("./CreateControllers");

function ArrayToLegitObject(accounts) {
    return accounts.map(account => account.toObject());
} 
function SingleToLegitObject(account) {
    return account.toObject();
}

class ProfileControllers {
    show(req, res) {
        Account.findOne({slug: req.params.slug})
            .then(account => {
                res.json({
                    account
                })
            })
    }
}
module.exports = new ProfileControllers;