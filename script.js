/**Array com liks de acesso das aplicações que serão carregadas*/
const apps = {
    produto: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/a861b496-0d98-4107-b762-bed0b8bb8e9c?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=ecb55c67-bf1a-4f8a-82a7-1fd25394a144&sourcetime=1719347379945&source=portal&HidenavBar=true",
    invetario: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/3a3d43fb-6555-49f9-a1ca-e5bbaea92116?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1721681756802&source=portal&HidenavBar=true",
    saida: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/6a19c088-513f-43f5-b11a-6928b1e368d6?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1722893335789&source=portal&HidenavBar=true",
    entrada: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/8f54e6db-6156-469a-b382-f3371c83164e?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1722957583328&source=portal&HidenavBar=true",
    solicitacao: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/34750d51-15e3-4cb5-9ad7-f5ca8e3e0df2?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1724444000302&source=portal&HidenavBar=true",
    dashboard: "",
    cadastroColaborador:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/1f596464-505c-4ec7-ac50-fab13270a04d?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1726857174175&source=portal&HidenavBar=true",
    cadastrFardamento:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/9f8333e3-1586-4e9b-a363-ac77d61b9406?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1726856091101&source=portal&HidenavBar=true",
    cadastroEquipamento:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/201b1e65-dac7-4676-900d-e183955b07fb?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1726856091097&source=portal&HidenavBar=true",
    fardamento: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/7fe3553c-2be2-4441-928a-18fc8988fc94?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1725470446286&source=portal&HidenavBar=true",
    equipamento:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/25d6e2f8-833e-4017-a5b7-fffd83351d62?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1726000453480&source=portal&HidenavBar=true",
    bodyCam:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/bea4b1e0-849b-42b6-abee-f209edb05e5f?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=76f621b1-816d-4c9e-8196-cf3ee5e4f37b&sourcetime=1758894924172&source=portal&HidenavBar=true",
    consultaEstoque:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/9cece1bd-84e9-49a6-80e9-56fa012ea9d5?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1727724078696&source=portal&HidenavBar=true",
    contratos: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/df3ea50e-d020-4ac8-980f-1721708201b9?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1735566975027&source=portal&HidenavBar=true",
    APS: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/0334c805-3715-4205-8600-0d2abf39ebaf?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1742903459279&source=portal&HidenavBar=true",
    beneficios:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/3b03ceae-7b66-4b95-a533-ba08faf3f6fc?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1742904752324&source=portal&HidenavBar=true",
    cofre:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/6c02f4c4-7782-46fa-aa57-de8b4051f1f5?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1747343194463&source=portal&HidenavBar=true",
    absenteismo:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/c1cc50e3-d8a3-4a5e-a3ad-74b62f6d5ec0?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1747343518202&source=portal&HidenavBar=true",
    getra:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/6cf19c8a-705c-463c-a340-e50751e28215?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1747343518185&source=portal&HidenavBar=true",
    teet:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/d268c00d-3f1d-4856-81fa-8ac7facb7aa0?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=773669c0-87c1-488d-b223-c80eccdd99b5&sourcetime=1758895869812&source=portal&HidenavBar=true",
    restricao:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/fd4e28bd-7351-4ea5-9698-77f65bc96739?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=a85c1994-d144-42fe-bdd2-654c4838c1ee&sourcetime=1758891387448&source=portal&hidenavBar=true",
    medida:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/ea6839ea-34df-449d-92f1-e31384b69514?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1762524643590&source=portal&hidenavBar=true",
    dea:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/415f2a11-7525-4ec4-bbbe-fa98c5406be2?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=dfdd4ee3-f559-4d4a-b2b5-537193d19250&sourcetime=1766064687533&source=portal&hidenavBar=true"
};

/**Função responsável por buscar na array "app", qual aplicação foi selecionada carrega-la no iframe */
function loadApp(app) {
    //const img = document.getElementById('imagem');
    const iframe = document.getElementById('contentFrame');

    //img.hidden=app;
    iframe.src = apps[app];
    sidebarSlide.classList.toggle('hidden-sidebar');

}

/**Bloco responsável pelo comportamento do menu slide do SideBar */
const sidebar = document.getElementById('sidebar-multi-level-sidebar');
const toggleButton = document.querySelector('.menu-toggle'); // Seleciona o botão hambúrguer
const menuItems = document.querySelectorAll('.menu-item'); // Seleciona todas as opções do menu

// Função para alternar a visibilidade do sidebar
function toggleSidebar() {
    sidebar.classList.toggle('hidden-sidebar');
    sidebar.classList.toggle('show-sidebar');
}

// Evento de clique para abrir/fechar o menu
toggleButton.addEventListener('click', toggleSidebar);

// Fecha o sidebar ao clicar em qualquer item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.add('hidden-sidebar');
        sidebar.classList.remove('show-sidebar');
    });
});






