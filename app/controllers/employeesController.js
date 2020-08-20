const Employee= require('../models/employee')

module.exports.list = (req, res) => {
    Employee.find()
        .then((employees) => {
            res.json(employees)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const employee = new Employee(body)   
    console.log(body,'body')
    employee.save()
    console.log(employee,'aftrsave')
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.show = (req,res) =>{
    const id = req.params.id
    Promise.all([ Employee.findById({_id : id}), Project.find({ emp : id })])
    .then((values)=>
    {
        const [ employee, projects ] = values
        const empObj = employee.toObject()
        empObj.projects = projects
        res.json({...empObj})
    })
    .catch((err)=>
    {
        res.send(err)
    })

}

