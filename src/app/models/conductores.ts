import * as moment from 'moment';

export class Conductores {
    // constructor(id = '', name = '', CC = '', license = '', license_expiration = new Date()) {
    //     this._id = id;
    //     this.name = name;
    //     this.CC = CC;
    //     this.license = license;
    //     this.license_expiration = license_expiration;
    // }

    _id: string;
    name: string;
    CC: string;
    license: string;
    license_expiration: Date;
}
