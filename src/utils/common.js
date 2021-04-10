
const jwt  = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

module.exports = {
    createToken : function (user) {
        return jwt.sign({ id: user.id,username: user.username, email: user.email }, jwtSecret);
    }
}