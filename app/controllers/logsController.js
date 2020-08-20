const Log = require('../models/log')

 module.exports.list = ( req,res ) =>{
    Log.find().populate('employee', ['name']).populate('project', ['name'])
    .then((logs)=>
    {
        res.json(logs)
    })
    .catch((err)=>
    {
        res.send(err)
    })
}
module.exports.create = (req,res) =>{
    const body = req.body
    const log = new Log(body)
    log.save()
    .then((log)=>
    {
        res.json(log)
    })
    .catch((err)=>
    {
        res.send(err)
    })
}