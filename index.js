const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";
const bancoDados = require('./bancoDados.json');

let pets = bancoDados.pets;

const listarPets = () => {
    for (let pet of pets) {
        //template string
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}

const campanhaVacina = () => {
    console.log("Campanha de vacina 2020");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;
    for (let pet of pets) {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }
    }
    console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};

const adicionarPet = novoPet => {
    if (typeof novoPet == "object" && validarDados(novoPet)) {
        // adiciona o pet
        novoPet.nome = String(novoPet.nome);
        novoPet.idade = parseInt(novoPet.idade);

        if (!novoPet.servicos) {
            novoPet.servicos = [];
        }

        pets.push(novoPet);
    } else {
        console.log("Ops, insira um argumento valido!");
    }
}

const darBanhoPet = pet => {
    pet.servicos.push({
        'serviço':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push({
        'serviço':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        'serviço':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};


listarPets();

// console.log(pets)