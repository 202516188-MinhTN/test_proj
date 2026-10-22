const Account = require("../Models/Account");

function ArrayToLegitObject(accounts) {
    return accounts.map(account => account.toObject());
} 
function SingleToLegitObject(account) {
    return account.toObject();
}

class RequestControllers {
    async index(req, res) {
        const account = await Account.findOne({name: req.body.find});
        if (!account.requests.includes(req.body.name)) {
            account.requests.push(req.body.name);
            await account.save();
        } 
        return res.status(200).json({ message: "Thành công", account });
    }
    show(req, res) {
        Account.findOne({name: req.params.name})
            .then(account => {
                res.json(account.requests);
            })
    }
    async deleteRequest(req, res) {
        const { friendName } = req.body;
        const account = await Account.findOne({name: req.params.name});
        account.requests = account.requests.filter((requests) => {
            return (requests !== friendName);
        });
        await account.save();
        return res.status(200).json({ message: "Thành công", account });
    }
}
module.exports = new RequestControllers;