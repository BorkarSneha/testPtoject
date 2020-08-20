const Project= require('../models/project')

module.exports.list = (req, res) => {
    Project.find()
        .then((projects) => {
            res.json(projects)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const project = new Project(body)
   
    project.save()
        .then((project) => {
            res.json(project)
        })
        .catch((err) => {
            res.send(err)
        })
}



