const express = require("express");
const router = express.Router();
const USERS = [{
    id: "u1",
    name: "Ankush",
    image: "https://i.pravatar.cc/150?img=14",
    places: 3
},
{
    id: "u2",
    name: "John",
    image: "https://i.pravatar.cc/150?img=12",
    places: 2
}
];

router.get("/uid", (req, resp) => {
    const userId = req.params.uid;
    let user = USERS.find(user.id === userId);
    resp.send("HELLO");
});

module.exports = router;