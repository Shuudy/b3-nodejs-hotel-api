

export function checkApiKey(req, res, next) {

    const apiKey = req.headers['x-api-key'];

    // On regarde si on a bien une api key dans notre header
    if (!apiKey) {
        return res.status(400).json({ error: "La clé API est introuvable." });
    }

    // On regarde si la api key est valide
    if (apiKey != "maCleAPI") {
        return res.status(401).json({ error: "La clé API est invalide."});
    }

    next();
}