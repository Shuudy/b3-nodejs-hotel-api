import jwt from "jsonwebtoken";

export function isAuthWithRole(role = null) {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) {
            return res.status(400).json({ error: "Le bearer est manquant, impossible de continuer." });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            // Si le token n'est pas valide
            if (err) {
                return res.status(401).json({ error: "Le bearer est invalide." });
            }
    
            req.client = user;

            if (role && req.client.role !== role) {
                return res.status(403).json({ error: `Il faut être ${role} pour accéder à cette route.` });
            }

            next();
        });
    }
}