
export function checkLoginClient(req, res, next) {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json({ error: "Le nom ou le password du client sont manquants." });
    }

    next();
}