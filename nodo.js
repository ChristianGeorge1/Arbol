class Nodo {
    constructor(elemento) {
        this._codigo = elemento;
        this._eleme = null;
        this._name = null;
    }

    get codigo() {
        return this._codigo;
    }
    get eleme() {
        return this._eleme;
    }
    get name() {
        return this._name;
    }
    set eleme(n) {
        this._eleme = n;
    }
    set name(n) {
        this._name = n;
    }


}