const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Costelinha',
        tipo: 'cachorro',
        idade: 5,
        raca: 'Vira-lata',
        peso: 3,
        tutor: 'Doug',
        contato: '(11) 98899-4545',
        vacinado: true,
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
    for(let i = 0; i < pets.length; i++ ){
        console.log(pets[i].nome);
    }
}

listarPets();







