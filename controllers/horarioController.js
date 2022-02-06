const Horario = require("../models/Horario");

exports.crearHorario = async(req,res) => {
    try {
        let horario;
        //Creación de horario
        horario = new Horario(req.body);
        await horario.save();
        res.send(horario);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerHorarios = async (req,res) => {
    try {
        const horarios = await Horario.find();
        res.json(horarios)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.actualizarHorario = async (req,res) => {
    try {
        const {correo,nombres,reserva,cargo,carrera,nivel,materia,cantidad_estudiantes,fecha,hora,actividades,tipo_reserva,cedula,estado} = req.body;
        let horario = await Horario.findById(req.params.id);
        if (!horario){
            res.status(404).json({msg: "No existe un horario"})
        }
        horario.correo = correo
        horario.nombres = nombres
        horario.reserva = reserva
        horario.cargo = cargo
        horario.carrera = carrera
        horario.nivel = nivel
        horario.materia = materia
        horario.cantidad_estudiantes = cantidad_estudiantes
        horario.fecha = fecha
        horario.hora = hora
        horario.actividades = actividades
        horario.tipo_reserva = tipo_reserva
        horario.cedula = cedula
        horario.estado = estado

        horario = await Horario.findOneAndUpdate({_id: req.params.id},horario, { new: true})
        res.json(horario)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerHorario = async (req,res) => {
    try {
      
        let horario = await Horario.findById(req.params.id);
        if (!horario){
            res.status(404).json({msg: "No existe un horario"})
        }
        res.json(horario)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.eliminarHorario = async (req,res) => {
    try {
      
        let horario = await Horario.findById(req.params.id);
        if (!horario){
            res.status(404).json({msg: "No existe un horario"})
        }
        await Horario.findByIdAndRemove({_id: req.params.id})
        res.json({msg: "Horario eliminado con éxito"})

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}