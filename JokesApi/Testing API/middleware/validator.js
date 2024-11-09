
const validateJoke = (req, res, next) => {
    if (
        !req.body.setup ||
         !req.body.punchline
          ) {
        return res.status(400).send({
            message: "Missing Fileds"
        })
    }
    
    next()
}


export { validateJoke }

const validateUser = (req, res, next) => {
    if (
        !req.body.name ||
         !req.body.password
          ) {
        return res.status(400).send({
            message: "Missing Fileds"
        })
    }
    
    next()
}

export { validateUser}