const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConductorSchema = new Schema({
    name: { type: String, required: true },  // nombre ok
    CC: { type: String, required: true }, //cedula ok
    license: { type: String, required: true }, // num de icencia de conduccion ok
    license_expiration: { type: Date, required: true }, // expiracion de la licencia ok
    health_expiration: { type: Date, required: true }, // fecha en que hace aportes de salud ok 
    drug_expiration: { type: Date, required: true },// fecha de drogas y acoholemia ok
    simit_expiration: { type: Date, required: true }, // fecha de consultas en el simit ok
    health_exam_expiration: { type: Date }, // fecha de los examenes de salud ocupacional ok
    active: { type: Boolean, default: true }, // activo o inactivo ok
    internal: { type: Boolean, default: true }, // interno o externo ok
    driving_exam_expiration: { type: Date }, // fecha de expiracion del examen de conduccion ok
    automotive_law_expiration: { type: Date }, //fecha de normas de transito y transporte terrestre automotor ok
    transit_law_expiration: { type: Date }, // fechas de normas de transito ok
    law_tips_expiration: { type: Date }, // fecha de Tips Normativos ok 
    accident_expiration: { type: Date }, // fecha de accidentalidad de transito ok
    driving_methods_expiration: { type: Date }, // fecha metodos de conduccion ok 
    defensive_expiration: { type: Date }, // fecha manejo defensivo ok
    distractions_expiration: { type: Date }, // fecha de distracciones ok
    first_aid_expiration: { type: Date }, // primeros auxilios ok
    first_answer_expiration: { type: Date }, // fecha de primero respondiente ok
    senses_expiration: { type: Date }, // fecha de los 5 sentidos de la conduccion ok
    // car_security_expiration: {type: Date}, // fehcha de la seguridad activa y pasiva del vehiculo ok
    // road_security_expiration: {type: Date}, // fecha seguridad vial ok

    state: { type: Boolean, default: true }



}, { timestamps: true });

module.exports = mongoose.model('Conductores', ConductorSchema);