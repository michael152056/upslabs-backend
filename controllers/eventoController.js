const Evento = require("../models/Evento");

exports.crearEvento = async(req,res) => {
    try {
        let evento;
        //Creación de evento
        evento = new Evento(req.body);
        await evento.save();
        res.send(evento);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerEventos = async (req,res) => {
    try {
        const eventos = await Evento.find();
        res.json(eventos)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.actualizarEvento = async (req,res) => {
    try {
        const { titulo_evento,desc_evento,mes_evento,dia_evento,ano_evento,imagen_evento,tipo_evento,hora,ponente} = req.body;
        let evento = await Evento.findById(req.params.id);
        if (!evento){
            res.status(404).json({msg: "No existe un evento"})
        }
        evento.titulo_evento = titulo_evento
        evento.desc_evento = desc_evento
        evento.mes_evento = mes_evento
        evento.dia_evento = dia_evento
        evento.ano_evento = ano_evento
        evento.imagen_evento = imagen_evento
        evento.tipo_evento = tipo_evento
        evento.hora = hora
        evento.ponente = ponente

        evento = await Evento.findOneAndUpdate({_id: req.params.id},evento, { new: true})
        res.json(evento)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerEvento = async (req,res) => {
    try {
      
        let evento = await Evento.findById(req.params.id);
        if (!evento){
            res.status(404).json({msg: "No existe un evento"})
        }
        res.json(evento)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.eliminarEvento = async (req,res) => {
    try {
      
        let evento = await Evento.findById(req.params.id);
        if (!evento){
            res.status(404).json({msg: "No existe un evento"})
        }
        await Evento.findByIdAndRemove({_id: req.params.id})
        res.json({msg: "Evento eliminado con éxito"})

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}