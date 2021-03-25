const nomePetshop = "PETSHOP AVANADE";

let pets = [{
        nome: 'Costelinha',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Doug',
        contato: '(11) 98899-4545',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Snoopy',
        tipo: 'cachorro',
        idade: 13,
        raca: 'Beagle',
        peso: 5,
        tutor: 'Charlie Brown',
        contato: '(11) 95656-4545',
        vacinado: true,
        servicos: ['banho']
    },
    {
        nome: 'Satanas',
        tipo: 'gato',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Bruxa do 71',
        contato: '(11) 97171-7171',
        vacinado: true,
        servicos: ['banho', 'corte de unha']
    }
];

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

console.log(pets[0]);
vacinarPet(pets[0]);
console.log(pets[0]);
