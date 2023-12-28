const openShopping = document.querySelector('.carrinho');
const teste = document.querySelector('.endereco');
const enderoco = document.querySelector('.endereco')
const list = document.querySelector('.list');
const listTwo = document.querySelector('.listTwo');
const listThree = document.querySelector('.listThree');
const sectionEspecial = document.querySelector('#especial')
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

let products = [
    {
        id: 1,
        name:'Tropical',
        descricao: 'Kiwi, Banana, Abacaxi, Leite Condesado',
        ml: '700ml',
        images:'tropical.jpg',
        price: 23
    },
    {
        id: 2,
        name: 'Sensação',
        descricao: 'Nutella, Morango, Leite Condesado',
        ml: '700ml',
        images: 'sensação .jpg',
        price: 23
    },
    {
        id: 3,
        name: 'Tradicional',
        descricao: 'Banana, Morango, Granola, Leite em Pó, Leite Condesado',
        ml: '700ml',
        images: 'tradicional .jpg',
        price: 24
    },
    {
        id: 4,
        name: 'Ninhotella',
        descricao: 'Nutella, Creme Ninho, Ovomaltine',
        ml: '700ml',
        images: 'ninhotella.jpg',
        price: 23
    },
    {
        id: 5,
        name: 'Paçokita',
        descricao: 'Creme Ninho, Paçoca, Amendoim Triturado',
        ml: '700ml',
        images: 'paçokita.jpg',
        price: 23
    },
    {
        id: 6,
        name: 'Açai da Sara',
        descricao: 'Nutella, Morango, Ovomaltine, Brigadeiro',
        ml: '700ml',
        images: 'copo da sara.jpg',
        price: 28
    },
]

let listCards = [];
const testeNomes = [];

const initApp = () =>{
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="CoposProntos">
            <img src= "img/${value.images}">
            <div class="title">${value.name} ${value.ml}</div>
            <div class="descricao">${value.descricao}</div>
            <div class="rodape">
                <div class="valor1">700 ML</div>
                <div class="price">$${value.price.toLocaleString()},00</div>
            </div>
            <div class="btn">
                <button onclick="addToCard(${key})"><i class="bi bi-plus-lg"></i></button>
            </div>
        </div>
        `
        list.appendChild(newDiv)
    })
}

initApp()

const addToCard = (key) => {
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1
    }
    reloadCard();
}

const reloadCard = () =>{
    listCard.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("li");

            newDiv.innerHTML = `
                <div><img src="img/${value.images}"></div>
                <div class="cardTitle">${value.name} ${value.ml}</div>
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


const changeQuantity = (key, quantity)=>{
    if(quantity == 0){
        delete listCards[key]
        total.innerText = 'TOTAL: ' + 0 +',00 R$'
        const quantity = document.querySelector('.quantity').innerHTML = 0
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }

    reloadCard()
}

function abrir() {
    enderoco.classList.add('ativo')
}

function Close() {
    enderoco.classList.remove('ativo')
}

list.addEventListener('click', function () {
    enderoco.classList.remove('ativo')
    card.classList.remove('ativo')
})


//mensagem//
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
   Numero da casa ${ Numero}

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

async function vamosla() {
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
    var day = String(data.getDate()).padStart(2,'0')
    var mes = String(data.getMonth()+1).padStart(2,'0')
    var ano = data.getFullYear()
    var dataAtual = `${day}/${mes}/${ano}`

    var horas = data.getHours()
    var minutos = data.getMinutes()
    var horarioAtual = `${horas}:${minutos}`


    
    if(Numero){
        await MensagemWhat(valueTotal, rua, Bairro, Numero, NumeroDeTelefone, valuesect, valueselector, dataAtual, horarioAtual, valores, troco, TotalTroco)
    }
    enderoco.classList.toggle('ativo')
}



