
export function isAdminClient(req, res, next) {
    const { role } = req.client;

    if (role != "admin") {
        return res.status(403).json({ error: "Il faut être admin pour accéder à cette route !" });
    }

    next();
}