class animal {
    fazerSom() {
        console.log("Som generico de animal...");
    }
}

class Cachorro extends animal {
    fazerSom() {
        console.log("AU AU AU AU 🐕");
    }
}

class Gato extends animal {
    fazerSom() {
        console.log("MIAU MIAU MIAU 🐈");
    }
}

class ratopaca extends animal {
    fazerSom() {
        console.log("AIIIIIII 🐀");
    }
}

const meusObjetos = [new Cachorro(), new Gato(), new ratopaca()];

for (let i = 0; i < meusObjetos.length; i++) {
    meusObjetos[i].fazerSom();
}






