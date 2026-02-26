// script.js
const destinos = [
    {
        id: 1,
        titulo: "Veneza, Itália",
        imagem: "https://picsum.photos/id/1015/400/300",
        descricao: "Canais encantadores",
        preco: "A partir de R$ 4.890",
        rating: "4.9"
    },
    {
        id: 2,
        titulo: "Santorini, Grécia",
        imagem: "https://picsum.photos/id/870/400/300",
        descricao: "Pôr do sol inesquecível",
        preco: "A partir de R$ 6.290",
        rating: "5.0"
    },
    {
        id: 3,
        titulo: "Nova York, EUA",
        imagem: "https://picsum.photos/id/201/400/300",
        descricao: "A cidade que nunca dorme",
        preco: "A partir de R$ 5.490",
        rating: "4.8"
    },
    {
        id: 4,
        titulo: "Bali, Indonésia",
        imagem: "https://picsum.photos/id/133/400/300",
        descricao: "Paraíso tropical",
        preco: "A partir de R$ 3.990",
        rating: "4.7"
    }
];

function renderizarDestinos() {
    const container = document.getElementById('destinos-grid');
    container.innerHTML = '';

    destinos.forEach(destino => {
        const card = document.createElement('div');
        card.className = 'destino-card';
        card.innerHTML = `
            <img src="${destino.imagem}" alt="${destino.titulo}">
            <div class="card-info">
                <h3>${destino.titulo}</h3>
                <p>${destino.descricao}</p>
                <div style="display: flex; justify-content: space-between; margin-top: 12px; align-items: center;">
                    <span style="color: var(--primary); font-weight: 600;">${destino.preco}</span>
                    <span class="rating">⭐ ${destino.rating}</span>
                </div>
            </div>
        `;
        card.onclick = () => alert(`Abrindo detalhes de ${destino.titulo}... (aqui você pode abrir modal ou página)`);
        container.appendChild(card);
    });
}

// Busca simples
function buscarViagem() {
    const input = document.getElementById('search-input').value;
    if (input.trim() !== '') {
        alert(`Buscando viagens para: ${input} ✨\n\n(Na versão completa isso faria uma busca real com IA)`);
    } else {
        alert('Digite um destino para começar sua aventura!');
    }
}

// Mobile menu
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
});

// Fechar sidebar ao clicar fora (mobile)
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.getElementById('menu-btn');
    
    if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarDestinos();
    
    // Demo: foco automático no campo de busca
    setTimeout(() => {
        document.getElementById('search-input').focus();
    }, 800);
});