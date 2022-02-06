const Noticia = require("../models/Noticia");

exports.crearNoticia = async(req,res) => {
    try {
        let noticia;
        //Creación de noticia
        noticia = new Noticia(req.body);
        await noticia.save();
        res.send(noticia);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerNoticias = async (req,res) => {
    try {
        const noticias = await Noticia.find();
        res.json(noticias)
    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.actualizarNoticia = async (req,res) => {
    try {
        const {tipo_usuario,foto_noticia,desc_noticia,titulo_noticia} = req.body;
        let noticia = await Noticia.findById(req.params.id);
        if (!noticia){
            res.status(404).json({msg: "No existe un noticia"})
        }
        noticia.tipo_usuario = tipo_usuario
        noticia.foto_noticia = foto_noticia
        noticia.desc_noticia = desc_noticia
        noticia.titulo_noticia = titulo_noticia

        noticia = await Noticia.findOneAndUpdate({_id: req.params.id},noticia, { new: true})
        res.json(noticia)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.obtenerNoticia = async (req,res) => {
    try {
      
        let noticia = await Noticia.findById(req.params.id);
        if (!noticia){
            res.status(404).json({msg: "No existe un noticia"})
        }
        res.json(noticia)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}

exports.eliminarNoticia = async (req,res) => {
    try {
      
        let noticia = await Noticia.findById(req.params.id);
        if (!noticia){
            res.status(404).json({msg: "No existe un noticia"})
        }
        await Noticia.findByIdAndRemove({_id: req.params.id})
        res.json({msg: "Noticia eliminado con éxito"})

    } catch (error) {
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}