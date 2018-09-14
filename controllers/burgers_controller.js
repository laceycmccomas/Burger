var express = require ("express");

var router = express.Router();

var burger = require ("./models/burger.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
        var burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/models/burger", function(req,res) {
    burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        res.json({ id: result.insertId});
    });
});

router.put("/models/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if(result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});



module.exports = burgers_controller.js;