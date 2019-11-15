class Ar {
    constructor() {
        this._comienzo = null;
    }

    get comienzo() {
        return this._comienzo;
    }
    set comienzo(valor) {
        this._comienzo = valor;
    }

    añadir(nuevo, v = this._comienzo) {
        if (v) {
            if (nuevo.codigo < v.codigo) {
                if (r.eleme) {
                    this.añadir(nuevo, r.eleme);
                } else {
                    r.eleme = nuevo;
                }
            } else {
                if (v.name) {
                    this.añadir(nuevo, r.name)
                }
            }
        }
    }

    search(codigo, v = this._comienzo) {
        if (v && codigo != undefined) {
            if (codigo < v.codigo) {
                return this.search(codigo, v.eleme);
            } else if (codigo > v.codigo) {
                return this.search(codigo, v.name);
            } else {
                return v;
            }
        } else {
            return null;
        }
    }

    preOrder(v = this._comienzo) {
        console.log(v.codigo);
        if (v.eleme) {
            this.preOrder(v.eleme);
        }
        if (v.name) {
            this.preOrder(v.name);
        }
    }

    inOrder(v = this._comienzo) {
        if (v.eleme) {
            this.inOrder(v.eleme);
        }
        console.log(v.codigo);
        if (v.name) {
            this.inOrder(v.name);
        }
    }

    postOrder(v = this._comienzo) {
        if (v.eleme) {
            this.postOrder(v.eleme);
        }
        if (v.name) {
            this.postOrder(v.name);
        }
        console.log(v.codigo);
    }
}