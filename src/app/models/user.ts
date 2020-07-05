import { Time } from '@angular/common';

export class User {

    constructor(
        private _id?: String,
        private _firstname?: String,
        private _lastname?: String,
        private _phone?: String,
        private _email?: String,
        private _password?: String,
    ) { }

}
export class Moniteur {

    constructor(
        private _id?: String,
        private _firstname?: String,
        private _lastname?: String,
        private _phone?: String,
        private _email?: String,
        private _password?: String,
    ) { }

}

export class Car {

    constructor(
        private _matricule?: String,
        private _marque?: String,
        private _couleur?: String,

    ) { }

}
export class CodeMeet {

    constructor(
        private _date?: String,
        private _temps?: String,
        private _userId?: String,

    ) { }

}
export class ConduiteMeet {

    constructor(
        private _date?: String,
        private _temps?: String,
        private _userId?: String,
        private _monitorId?: String,
        private _carId?: String,

    ) { }

}
