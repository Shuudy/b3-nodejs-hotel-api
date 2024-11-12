import jwt from "jsonwebtoken";

export function isAuth(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(400).json({ error: "Le bearer est manquant, impossible de continuer." });
    }

    jwt.verify(token, 'mySecretKey', (err, user) => {
        // Si le token n'est pas valide
        if (err) {
            return res.status(401).json({ error: "Le bearer est invalide." });
        }

        req.client = user;
        next();
    });    
}