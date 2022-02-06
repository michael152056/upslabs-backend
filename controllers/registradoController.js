const Registrado = require("../models/Registrado");

exports.crearRegistrado = async(req,res) => {
    try {
        let registrado;
        //Creación de Registrado
        registrado = new Registrado(req.body);
        await registrado.save();
        res.send(registrado);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerRegistrados = async (req,res) => {
    try {
        const registrados = await Registrado.find();
        res.json(registrados)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.actualizarRegistrado = async (req,res) => {
    try {
        const {nombres, correo,clave, ubicacion , celular,tipo ,cargo,cedula,carrera} = req.body;
        let registrado = await Registrado.find({correo: req.params.correo});
        if (!registrado){
            res.status(404).json({msg: "No existe un Registrado"})
        }
        registrado.nombres = nombres
        registrado.correo = correo
        registrado.clave = clave
        registrado.ubicacion = ubicacion
        registrado.celular = celular
        registrado.tipo = tipo
        registrado.cargo = cargo
        registrado.cedula = cedula
        registrado.carrera = carrera
        registrado = await Registrado.findOneAndUpdate({correo: req.params.correo}, {$set:{nombres: registrado.nombres, correo: registrado.correo,tipo: registrado.tipo, ubicacion:registrado.ubicacion,celular:registrado.celular,clave:registrado.clave,cargo: registrado.cargo,cedula: registrado.cedula, carrera: registrado.carrera}}, { new: true})
        console.log(registrado)
        res.json(registrado)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error_rdasd");
    }
}

 exports.actualizarRegistradoOne = async (req,res) => {
    console.log('holaaa')
    try {
        const {nombres,correo,clave, ubicacion , celular,tipo,cargo,cedula,carrera } = req.body;
       
        let registrado = await Registrado.find({correo: req.params.correo2});
        if (!registrado){
            res.status(404).json({msg: "No existe un Registrado"})
        }
        registrado.nombres = nombres
        registrado.correo = correo
        registrado.clave = clave
        registrado.ubicacion = ubicacion
        registrado.celular = celular
        registrado.tipo = tipo
        registrado.cargo = cargo
        registrado.cedula = cedula
        registrado.carrera = carrera

           registrado = await Registrado.findOneAndUpdate({correo: req.params.correo2}, {$set:{nombres: registrado.nombres, correo: registrado.correo,tipo: registrado.tipo, ubicacion:registrado.ubicacion,celular:registrado.celular,clave:registrado.clave,cargo: registrado.cargo,cedula: registrado.cedula, carrera: registrado.carrera}}, { new: true})
        res.json(registrado)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error_rdasd");
    }
} 


exports.obtenerRegistradosCedula = async (req,res) => {
    try {
        let registrado = await Registrado.find({cedula: req.params.ci});
        if (!registrado){
            res.status(404).json({msg: "No existe un Registrado"})
        }
        res.json(registrado)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}


exports.obtenerRegistrado = async (req,res) => {
    try {
        let registrado = await Registrado.find({correo: req.params.correo});
        if (!registrado){
            res.status(404).json({msg: "No existe un Registrado"})
        }
        res.json(registrado)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerRegistradoOne = async (req,res) => {
    try {
        let registrado = await Registrado.find({correo: req.params.correo2});
        if (!registrado){
            res.status(404).json({msg: "No existe un Registrado"})
        }
        res.json(registrado)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}



exports.eliminarRegistrado = async (req,res) => {
    try {
      
        let registrado = await Registrado.findById(req.params.id);
        if (!registrado){
            res.status(404).json({msg: "No existe un Registrado"})
        }
        await Registrado.findByIdAndRemove({_id: req.params.id})
        res.json({msg: "Registrado eliminado con éxito"})

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}