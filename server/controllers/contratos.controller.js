const Contrato = require('../models/contratos');

const contratoCtrl = {};


//listar contratos
contratoCtrl.getContratos = async (req, res) => {
    const contratos = await Contrato.find({ state: "true" });
    res.json(contratos);
    // otra forma de hacerlo, para ver el error
    // Contrato.find()
    // .then(contratos =>  res.json( contratos))
    // .catch(err => console.log(err));

};

async function validar_contrato(num_contrato) {
    return await Contrato.find({ ct_number: num_contrato });
}


// crear contrato
contratoCtrl.createContrato = async (req, res) => {
    console.log('guardar');
    console.log(req.body);
    const validacion = await validar_contrato(req.body.ct_number);
    if (validacion == 0) {
        const contrato = new Contrato({
            id_cliente: req.body.id_cliente,
            renewable: req.body.renewable,
            ct_object: req.body.ct_object,
            pass_number: req.body.pass_number,
            car_number: req.body.car_number,
            route: req.body.route,
            return_route: req.body.return_route,
            start: req.body.start,
            end: req.body.end,
            value: req.body.value,
            payment: req.body.payment,
            sign_date: req.body.sign_date,
            ct_number: req.body.ct_number,
            state: true

        });

        await contrato.save();
        res.json({
            status: 'Contrato Guardado Exitosamente', success: 'true'
        });
    } else {
        res.json({ status: 'Este contrato ya existe', success: 'false' });

    }
};

// consultar por un conductor especifico
contratoCtrl.getContrato = async (req, res) => {
    const contrato = await Contrato.findById(req.params.id);
    res.json(contrato);
};


// Eliminar un conductor especifico
contratoCtrl.deleteContrato = async (req, res) => {
    const { id } = req.params;
    const newState = {

        state: req.body.state
    }
    await Contrato.findByIdAndUpdate(id, { $set: newState }, { new: true });
    res.json({ status: 'Contrato Eliminado Exitosamente' });
};



module.exports = contratoCtrl;