export class Conductores {
    constructor(id='', name='', CC='', license=''){
     this._id=id;
     this.name = name;
     this.CC = CC;
     this.license= license;
    }

    _id: string;
    name: string;
    CC: string;
    license: string;
}
