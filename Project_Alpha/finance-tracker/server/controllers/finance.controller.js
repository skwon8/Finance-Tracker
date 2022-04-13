const Finance = require('../models/finance.model');

module.exports.findAllFinances = (req, res) => {
    Finance.find()
        .then(allDaFinances => res.json({ finance: allDaFinances }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.findAllFinancesByCategory = (req, res) => {
    Finance.findOne({category: req.params.category})
        .then(allDaFinances => res.json({ finance: allDaFinances }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findOneSingleFinance = (req, res) => {
    Finance.findOne({ _id: req.params.id })
        .then(oneSingleFinance => res.json({ finance: oneSingleFinance }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createNewFinance = (req, res) => {
    console.log(req.body)
    Finance.create(req.body)
        .then(newlyCreatedFinance => res.json({ finance: newlyCreatedFinance }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingFinance = (req, res) => {
    Finance.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedFinance => res.json({ finance: updatedFinance }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deleteAnExistingFinance = (req, res) => {
    Finance.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
