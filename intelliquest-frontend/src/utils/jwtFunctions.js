const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION;

if (!JWT_SECRET || !JWT_EXPIRATION) {
    throw new Error("JWT_SECRET and JWT_EXPIRATION must be defined in the environment variables");
}

function createToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = { createToken, verifyToken };

