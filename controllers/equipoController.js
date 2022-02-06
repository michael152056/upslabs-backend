const Equipo = require("../models/Equipo");

exports.crearEquipo = async(req,res) => {
    try {
        let equipo;
        //Creación de equipo
        equipo = new Equipo(req.body);
        await equipo.save();
        res.send(equipo);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerEquipos = async (req,res) => {
    try {
        const equipos = await Equipo.find();
        res.json(equipos)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.actualizarEquipo = async (req,res) => {
    try {
        const { codigo,equipo,modelo,marca,serie,ubicacion,estado} = req.body;
        let equipo2 = await Equipo.findById(req.params.id);
        if (!equipo2){
            res.status(404).json({msg: "No existe un equipo"})
        }
        equipo2.codigo = codigo
        equipo2.equipo = equipo
        equipo2.modelo = modelo
        equipo2.marca = marca
        equipo2.serie = serie
        equipo2.ubicacion = ubicacion
        equipo2.estado = estado

        equipo2 = await Equipo.findOneAndUpdate({_id: req.params.id},equipo2, { new: true})
        res.json(equipo2)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerEquipo = async (req,res) => {
    try {
      
        let equipo = await Equipo.findById(req.params.id);
        if (!equipo){
            res.status(404).json({msg: "No existe un equipo"})
        }
        res.json(equipo)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.eliminarEquipo = async (req,res) => {
    try {
      
        let equipo = await Equipo.findById(req.params.id);
        if (!equipo){
            res.status(404).json({msg: "No existe un equipo"})
        }
        await Equipo.findByIdAndRemove({_id: req.params.id})
        res.json({msg: "Equipo eliminado con éxito"})

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}