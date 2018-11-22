const Vehiculo = require('../models/vehiculos');

const vehiculoCtrl = {};

//listar Vehiculos
vehiculoCtrl.getVehiculos = async (req, res) => {
    const vehiculos = await Vehiculo.find({ state: "true" });
    res.json(vehiculos);
};

async function validar_placa(placa) {
    return await Vehiculo.find({ plate: placa, state: 'true' });

}

//crear vehiculo
vehiculoCtrl.createVehiculo = async (req, res) => {
    console.log('guardar');
    console.log(req.body);
    const validacion = await validar_placa(req.body.plate);
    if (validacion == 0) {

        const vehiculo = new Vehiculo({

            plate: req.body.plate,
            model: req.body.model,
            year: req.body.year,
            lateral: req.body.lateral,
            class: req.body.class,
            passengers: req.body.passengers,
            operation_card: req.body.operation_card,
            exp_to: req.body.exp_to,
            exp_soat: req.body.exp_soat,
            exp_tech: req.body.exp_tech,
            exp_prev: req.body.exp_prev,
            GNV: req.body.GNV,
            exp_rcc: req.body.exp_rcc,
            active: req.body.active,
            internal: req.body.internal,
            state: true

        });

        await vehiculo.save();
        res.json({
            status: 'Vehiculo Guardado Exitosamente', success: 'true'
        });
    } else {
        res.json({ status: 'Verificar la placa del vehiculo, la ingresada, ya existe', success: 'false' });

    }
};

// consultar por un vehiculo especifico
vehiculoCtrl.getVehiculo = async (req, res) => {
    const vehiculo = await Vehiculo.findById(req.params.id);
    res.json(vehiculo);
};


// actualizar un vehiculo especifico
vehiculoCtrl.updateVehiculo = async (req, res) => {
    const { id } = req.params;
    const validacion = await validar_placa(req.body.plate);
    if (validacion != 0) {
        validacion.map(async dato => {

            if (id == dato._id) {

                const newVehiculo = {
                    _id: req.body._id,
                    plate: req.body.plate,
                    model: req.body.model,
                    year: req.body.year,
                    lateral: req.body.lateral,
                    class: req.body.class,
                    passengers: req.body.passengers,
                    operation_card: req.body.operation_card,
                    exp_to: req.body.exp_to,
                    exp_soat: req.body.exp_soat,
                    exp_tech: req.body.exp_tech,
                    exp_prev: req.body.exp_prev,
                    GNV: req.body.GNV,
                    exp_rcc: req.body.exp_rcc,
                    active: req.body.active,
                    internal: req.body.internal,
                    state: req.body.state
                }
                await Vehiculo.findByIdAndUpdate(id, { $set: newVehiculo }, { new: true });
                res.json({ status: 'Vehiculo Actualizado Exitosamente' });
            }
            else {
                res.json({ status: 'Verificar la placa del vehiculo, la ingresada, ya existe', success: 'false' });
            }
        });

    }
    else {
        res.json({ status: 'El vehiculo no esta creado', success: 'false' });

    }


};



// Eliminar un vehiculo especifico

vehiculoCtrl.deleteVehiculo = async (req, res) => {
    const { id } = req.params;
    const newState = {

        state: req.body.state
    }
    await Vehiculo.findByIdAndUpdate(id, { $set: newState }, { new: true });
    res.json({ status: 'Vehiculo Eliminado Exitosamente' });
};




module.exports = vehiculoCtrl;
