const { registrationModel } = require('../models/registration');
const { shopDetailsModel } = require('../models/shop-details')
const { v4 } = require('uuid');

function registrationController(req, res) {
    const { name, phone_number, email, password } = req.body;
    const unique_id = v4();
    const uid = unique_id.slice(0, 8)
    const userData = {
        primary_id: uid,
        owner_name: name,
        phone_number: phone_number,
        email: email,
        password: password

    }

    const shopDetailsData = {
        primary_id: uid,
        shop_name: "",
        shop_discription: "",
        shop_profile_picture: "",
        shop_cover_photo: ""
    }
    const registerNewUser = new registrationModel(userData)
    const shopDetails = new shopDetailsModel(shopDetailsData)

    let user;
    registrationModel.findOne({
        _primary_id: uid
    })
        .then(user => {
            user = user
        })
        .catch(err => {
            res.send('error: ' + err)
        })

    if (!user) {
        registerNewUser.save()
            .then(user => {
                shopDetails.save()
                    .then(() => console.log("shop-created"))
                    .catch((e) => console.error({ message: "cannot create shop!" }))
                res.status(200).json({ token: user["primary_id"] })
            })
            .catch(err => {
                res.status(400).send('bad request can not create user!')
                console.error({ message: `cannot craeta user! ${err.message}` })
            })
    } else {
        res.status(403).json({ error: `user already exists! ${user}` })
        console.error({ error: `shop already exist: ${err.message}` })
    }
}

module.exports = { registrationController }


