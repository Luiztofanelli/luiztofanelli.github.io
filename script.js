// Dados técnicos das competências
const skillsData = {
    instrumentacao: { title: "Instrumentação & Calibração", desc: "Calibração avançada de analisadores de pH, Condutividade, Turbidez e Oxigênio. Domínio em processos de medição de variáveis físicas (Pressão, Nível, Vazão)." },
    sinais: { title: "Malhas de Controle (4-20mA)", desc: "Teste de malha, comissionamento e parametrização de transmissores analógicos e digitais em padrão industrial." },
    automacao: { title: "IHM & Supervisórios", desc: "Configuração e operação de Interfaces Homem-Máquina e integração com sistemas de supervisão de processos." },
    comunicacao: { title: "Protocolos Industriais", desc: "Diagnóstico e manutenção em redes Profibus e arquiteturas de dados via OPC UA para indústria 4.0." },
    analises: { title: "Análise Laboratorial", desc: "Controle químico rigoroso: DQO, pH, Turbidez e Sílica aplicados ao tratamento de água e efluentes industriais." },
    assessoria: { title: "Otimização de Processos", desc: "Consultoria técnica para redução de perdas de insumos e melhoria na eficiência de malhas automatizadas." },
    assistencia: { title: "Assistência Técnica", desc: "Manutenção corretiva em máquinas inkjet e ativos de automação no Triângulo Mineiro." },
    hardware: { title: "Hardware & Programação", desc: "Montagem de painéis, manutenção de hardware industrial e lógica fundamental de firmware." }
};

// Efeito de Revelar ao Rolar a página
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section, .card, .timeline-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.8s ease-out";
    observer.observe(el);
});

// Controle do Painel de Habilidades
const skillItems = document.querySelectorAll('.skill-item');
const skillPanel = document.getElementById('skill-detail-panel');
const skillTitle = document.getElementById('skill-title');
const skillDesc = document.getElementById('skill-desc');
const closeBtn = document.querySelector('.close-panel');

skillItems.forEach(item => {
    item.addEventListener('click', () => {
        const key = item.getAttribute('data-skill');
        skillTitle.innerText = skillsData[key].title;
        skillDesc.innerText = skillsData[key].desc;
        skillPanel.classList.add('active');
    });
});

closeBtn.addEventListener('click', () => skillPanel.classList.remove('active'));

// Fechar ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === skillPanel) skillPanel.classList.remove('active');
});