const list = document.querySelector('.listTwo');
const teste = document.querySelector('.endereco');
const enderoco = document.querySelector('.endereco')
const openShopping = document.querySelector('.carrinho');
const card = document.querySelector('.card')
const listCard = document.querySelector('.listCard');
const total = document.querySelector('.total');
const body = document.querySelector('body');
const quantity = document.querySelector('.quantity');
const close = document.querySelector('.voltar');
const secoesEspecial = document.querySelector('#especial');

openShopping.addEventListener('click', () => {
    card.classList.toggle('ativo')
    enderoco.classList.remove('ativo')
})

let especiais = [
    {
        id: 7,
        name: 'Barca',
        descricao: 'Leite em pó, Leite condensado, +2 Frutra, +1 Chocolate',
        images: 'barca.jpg',
        ml: '1L',
        price: 35
    },
    {
        id: 9,
        name: 'Roleta de açaí',
        descricao: 'Rolata + 5 adicionais a baixo, pode ser fruta ou chocolate',
        images: 'roleta.jpg',
        ml: '1L',
        price: 40
    },
    {
        id: 32,
        name: 'Abacaxi',
        descricao: 'FRUTA',
        images: 'abacaxi.jpg',
        price: 0
    },
    {
        id: 33,
        name: 'Banana',
        descricao: 'FRUTA',
        images: 'banana .jpg',
        price: 0
    },
    {
        id: 34,
        name: 'Manga',
        descricao: 'FRUTA',
        images: 'manga.jpg',
        price: 0
    },
    {
        id: 35,
        name: 'Morango',
        descricao: 'FRUTA',
        images: 'morango.jpg',
        price: 0
    },
    {
        id: 36,
        name: 'Kiwi',
        descricao: 'FRUTA',
        images: 'kiwi.jpg',
        price: 0
    },
    {
        id: 10,
        name: 'Nutella',
        descricao: 'CHOCOLATE',
        images: 'Nutella-original.jpg',
        price: 0
    },
    {
        id: 11,
        name: 'Creme de Avelã',
        descricao: 'CHOCOLATE',
        images: 'creme-de-avela.jpg',
        price: 0
    },
    {
        id: 12,
        name: 'Brigadeiro',
        descricao: 'CHOCOLATE',
        images: 'brigadeiro .jpg',
        price: 0
    },
    {
        id: 13,
        name: 'Kinder Bueno',
        descricao: 'CHOCOLATE',
        images: 'Kinder Bueno .jpg',
        price: 0
    },
    {
        id: 14,
        name: 'Confete',
        descricao: 'CHOCOLATE',
        images: 'M & M .jpg',
        price: 0
    },
    {
        id: 15,
        name: 'Creme de Ninho',
        descricao: 'CHOCOLATE',
        images: 'creme-de-ninho.jpg',
        price: 0
    },
    {
        id: 16,
        name: 'Creme de KIT KAT',
        descricao: 'CHOCOLATE',
        images: 'creme de kitkat.jpg',
        price: 0
    },
    {
        id: 17,
        name: 'Creme de Laka Oreo',
        descricao: 'CHOCOLATE',
        images: 'creme de laka oreo.jpg',
        price: 0
    },
    {
        id: 18,
        name: 'Creme de Diamante Negro',
        descricao: 'CHOCOLATE',
        images: 'creme de diamante negro.jpg',
        price: 0
    },
    {
        id: 19,
        name: 'Creme de Ouro Branco',
        descricao: 'CHOCOLATE',
        images: 'creme de ouro branco.jpg',
        price: 0
    },
    {
        id: 20,
        name: 'Creme de Sonho de Valsa',
        descricao: 'CHOCOLATE',
        images: 'creme de valsa .jpg',
        price: 0
    },
    {
        id: 21,
        name: 'Kit Kat',
        descricao: 'CHOCOLATE',
        images: 'kitkat.jpg',
        price: 0
    },
    {
        id: 22,
        name: 'Diamante Negro',
        descricao: 'CHOCOLATE',
        images: 'diamante negro.jpg',
        price: 0
    },
    {
        id: 23,
        name: 'Laka',
        descricao: 'CHOCOLATE',
        images: 'laka.jpg',
        price: 0
    },
    {
        id: 24,
        name: 'Laka Oreo',
        descricao: 'CHOCOLATE',
        images: 'laka oreo.jpg',
        price: 0
    },
    {
        id: 25,
        name: 'Suflair',
        descricao: 'CHOCOLATE',
        images: 'suflair.jpg',
        price: 0
    },
    {
        id: 26,
        name: 'Bis Branco',
        descricao: 'CHOCOLATE',
        images: 'bis branco.jpg',
        price: 0
    },
    {
        id: 27,
        name: 'Bis Preto',
        descricao: 'CHOCOLATE',
        images: 'bis preto.jpg',
        price: 0
    },
    {
        id: 28,
        name: 'Ouro Branco',
        descricao: 'CHOCOLATE',
        images: 'ouro branco .jpg',
        price: 0
    },
    {
        id: 29,
        name: 'Sonho de Valsa',
        descricao: 'CHOCOLATE',
        images: 'sonho de valsa .jpg',
        price: 0
    },
    {
        id: 30,
        name: 'Doce de Leite',
        descricao: 'CHOCOLATE',
        images: 'creme de leite .jpg',
        price: 0
    },
    {
        id: 31,
        name: 'Sucrilhos',
        descricao: 'CHOCOLATE',
        images: 'sucrilhos.jpg',
        price: 0
    },
    {
        id: 37,
        name: 'iogurte',
        descricao: 'CHOCOLATE',
        images: 'iogurte .jpg',
        price: 0
    },
    {
        id: 38,
        name: 'Granola',
        descricao: 'CHOCOLATE',
        images: 'granola.jpg',
        price: 0
    },
    {
        id: 39,
        name: 'Leite em pó',
        descricao: 'CHOCOLATE',
        images: 'leite em pó .jpg',
        price: 0
    },
    {
        id: 40,
        name: 'Leite Condensado',
        descricao: 'CHOCOLATE',
        images: 'leite condensado .jpg',
        price: 0
    },
    {
        id: 41,
        name: 'Ovomaltine',
        descricao: 'CHOCOLATE',
        images: 'ovomaltine .jpg',
        price: 0
    },
    {
        id: 42,
        name: 'Paçoca',
        descricao: 'CHOCOLATE',
        images: 'paçoca .jpg',
        price: 0
    },
    {
        id: 43,
        name: 'amendoim Triturado',
        descricao: 'CHOCOLATE',
        images: 'Amendoim .jpg',
        price: 0
    },
]

let listCards = []; 
const testeNomes = []

const initApp = () => {
    //especiais
    especiais.forEach((value, key) => {
        let NovaDiv = document.createElement('div');
        NovaDiv.classList.add('item');
        NovaDiv.innerHTML = `
        <div class="CoposEspecial">
            <img src= "img/${value.images}">
            <div class="title">${value.name}</div>
            <div class="descricao">${value.descricao}</div>
            <div class="rodape">
                <div class="valor1">1L </div>
                <div class="price">$${value.price.toLocaleString()},00</div>
            </div>
            <div class="btn">
                <button onclick="addToCard(${key})"><i class="bi bi-plus-lg"></i></button>
            </div>
        </div>
        `
        list.appendChild(NovaDiv)
    })

}

initApp()


const addToCard = (key) => {
    if (listCards[key] == null) {
        listCards[key] = JSON.parse(JSON.stringify(especiais[key]));
        listCards[key].quantity = 1
    }
    reloadCard();
}


const reloadCard = () => {
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="img/${value.images}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="quantidade">
                    <div>
                        <button class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class"count">${value.quantity}</div>
                        <button class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>
                    <div class="cardPrice">${value.price.toLocaleString()},00 R$</div>
                </div>
            `
            listCard.appendChild(newDiv)
            
        }
        total.innerText = 'TOTAL: ' + totalPrice.toLocaleString() + ', R$';
        teste.innerHTML = `
        <button class="voltar" onclick="Close()"><i class="bi bi-arrow-right"></i></button>
        <span>Rua</span>
        <input class="rua" type="text">
        <span>Bairro</span>
        <input class="bairro" type="text">
        <span>Numero da casa</span>
        <input class="numero" type="text">
        <span>Numero de telefone</span>
        <input class="NumeroTelefone" type="text" placeholder="Ex: 19 923456789">
        <span>Tipo de pagamento:</span>
        <select name="" id="Select">
            <option value="Cartão">Cartão</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Pix">Pix</option>
        </select>
        <span>Troco para:</span>
        <input class="troco" type="text" placeholder="A caso o metodo de pagamento for dinheiro">
        <span>Retirada no:</span>
        <select name="" id="Seletor">
            <option value="Local">Local</option>
            <option value="Delivery">Delivery</option>
        </select>
        <button onclick="vamosla()">Enviar Pedido</button>
        `
        quantity.innerText = count

    })
}

const changeQuantity = (key, quantity) => {
    if (quantity == 0) {
        delete listCards[key]
        total.innerText = 'TOTAL: ' + 0 + ',00 R$'
        const quantity = document.querySelector('.quantity').innerHTML = 0
    }
    else {
        var teste = listCards[key].quantity = quantity;
        listCards[key].price = quantity * especiais[key].price;
    }

    reloadCard()
}

function abrir() {
    enderoco.classList.add('ativo')
}

function Close(){
    enderoco.classList.remove('ativo')
}

list.addEventListener('click', function(){
    enderoco.classList.remove('ativo')
    card.classList.remove('ativo')
})

async function MensagemWhat(valueTotal, rua, Bairro, Numero, NumeroDeTelefone, valuesect, valueselector, dataAtual, horarioAtual, valores, troco, TotalTroco) {
    const GZAPPY_URL = "https://api.gzappy.com/v1/message/send-message"

    const response = await fetch(GZAPPY_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'user_token_id': 'e606083e-6558-4d3e-9d50-d003f4f7bdbf'
        },
        body: JSON.stringify({
            instance_id: 'G1W4V2N0T77KVSDH312KEQK5',
            instance_token: '91a1a5e3-4d15-47a5-9549-6ffd50069943',
            message: [`
👋 Olá, Tudo bem ?
🗓️ ${dataAtual} ⏰ ${horarioAtual}
Seu pedido está sendo processado


*Tipo de serviço: ${valueselector}*

Produtos: ${valores}

🏠 Rua: ${rua}
   Bairro: ${Bairro}
   Numero da casa ${Numero}

Tipo de pagamento: ${valuesect}
Troco pra: ${troco}
Seu troco: ${TotalTroco} R$

VALOR ${valueTotal}
            
Obrigado pela preferência, se precisar de algo é só chamar! 😉`
                    ],
            phone: NumeroDeTelefone
        })
    })

    const data = await response.json()
    console.log(data)
}

async function vamosla(){
    const values = Object.values(listCards);
    
    for (const value of values) {
        const NomesProdutos = value.name
        const quantidadeProdutos = value.quantity
        const PrecoProduto = value.price
        const juntar = `${quantidadeProdutos}X ${NomesProdutos} - ${PrecoProduto},00 $
        `
        testeNomes.push(juntar)
    }
    var valores = testeNomes

    var valueTotal = total.innerText
    var test = quantity.innerText
    var rua = document.querySelector('.rua').value
    var Bairro = document.querySelector('.bairro').value
    var Numero = document.querySelector('.numero').value
    var NumeroDeTelefone = document.querySelector('.NumeroTelefone').value
    var select = document.querySelector('#Select')
    var valuesect = select.options[select.selectedIndex].value
    var troco = document.querySelector('.troco').value
    var TotalTroco = troco - total.innerText.replace(/\D/gim, '')

    var seletor = document.querySelector('#Seletor')
    var valueselector = seletor.options[seletor.selectedIndex].value

    const data = new Date()
    var day = String(data.getDate()).padStart(2, '0')
    var mes = String(data.getMonth() + 1).padStart(2, '0')
    var ano = data.getFullYear()
    var dataAtual = `${day}/${mes}/${ano}`

    var horas = data.getHours()
    var minutos = data.getMinutes()
    var horarioAtual = `${horas}:${minutos}`



    if (Numero) {
        await MensagemWhat(valueTotal, rua, Bairro, Numero, NumeroDeTelefone, valuesect, valueselector, dataAtual, horarioAtual, valores, troco, TotalTroco)
    }
    enderoco.classList.toggle('ativo')
}


