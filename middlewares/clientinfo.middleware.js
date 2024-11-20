
export function checkBodyClientInfo(req, res, next) {
    
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ error: "Les informations pour créer le client sont manquantes." });
    }

    if (name.length < 3 || name.length > 12) {
        return res.status(400).json({ error: "La taille du nom est incorrect (compris entre 3 et 12 inclus)" });
    }

    if (phone.length != 10) {
        return res.status(400).json({ error: "Le numéro de téléphone doit être un numéro valide." })
    }

    next();
}