
const router = require("express").Router();
const transactionsData = require("../models/transactions");

///TODOS empiezan con= /transactions

//Index: Get a list (or index) of all transactions.
router.get("/", (req, res) => {
    res.json(transactionsData);
});

//Show: Get an individual view (show one transactions).
router.get("/:id", (req, res) => {

    const transactionsDataLength = transactionsData.length - 1;
    const idOfTransaction = Math.round(Number(req.params.id));

    if (idOfTransaction > transactionsDataLength){
        res.redirect("/*");
        return;
    }
    res.json(transactionsData[idOfTransaction]);
});

//Create: Create a new transaction.

router.post("/", (req, res) => {
    const body = req.body
    const newArrayOfTransactions = transactionsData.push(body);

    res.json(newArrayOfTransactions);
    
})

//Destroy:Delete a transaction.

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const destroy = transactionsData.splice(`${id}`, 1);

    res.json(destroy);
    
})

// Update: Update a transaction
router.put("/:id", (req, res) => {
    const idOfTransaction = Math.round(Number(req.params.id));
    const body = req.body
    const update = transactionsData.splice(idOfTransaction, 1, body);
    res.json(update);
    
    
})






module.exports = router;
