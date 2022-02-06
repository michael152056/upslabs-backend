const { request, response } = require('express');
const nodemailer = require('nodemailer');

exports.envioCorreo= async(req, res) =>{
 
    let body = req.body;

    let config = nodemailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        secure:false,
        auth:{
            user:'sebramor@gmail.com',
            pass:'jwlqytdjogspwmfz'
        }
    });

    const opciones ={
        from:'Programacion',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje

    }

    config.sendMail(opciones,function(error,result){

        if (error) return res.json({ok:false,msg:error});
            return res.json({
                ok:true,
                msg:result
            });
    });
}
