module.exports = app => {

    const coastersRoutes = require("./coasters.routes")
    app.use("/api/coasters", coastersRoutes)
}