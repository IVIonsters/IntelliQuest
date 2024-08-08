import jwt from "jsonwebtoken";
const JWT_SECRET = import.meta.env.VITE_JWT_SECRET;
const JWT_EXPIRATION = import.meta.env.VITE_JWT_SECRET;

function createToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
};

export { createToken, verifyToken };