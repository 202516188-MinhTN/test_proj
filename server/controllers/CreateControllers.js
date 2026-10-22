const Account = require("../Models/Account");
const Product = require("../Models/Product");
function ArrayToLegitObject(accounts) {
    return accounts.map(account => account.toObject());
} 
function SingleToLegitObject(account) {
    return account.toObject();
}

class CreateControllers {
    account(req, res) {
        const account = new Account(req.body);
        const savedAccount = account.save();
        res.json({
            data: savedAccount,
        })
    }
    product(req, res) {
        let sale = req.body;
        sale.price = Number(sale.price);
        const product = new Product(sale);
        const savedProduct = product.save();
        res.json({
            data: savedProduct,
        })
    }
}
module.exports = new CreateControllers;