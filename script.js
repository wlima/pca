const apps = {
    produto: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/a861b496-0d98-4107-b762-bed0b8bb8e9c?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=ecb55c67-bf1a-4f8a-82a7-1fd25394a144&sourcetime=1719347379945&source=portal&HidenavBar=true",
    invetario: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/3a3d43fb-6555-49f9-a1ca-e5bbaea92116?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1721681756802&source=portal&HidenavBar=true",
    saida: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/6a19c088-513f-43f5-b11a-6928b1e368d6?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1722893335789&source=portal&HidenavBar=true",
    entrada: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/8f54e6db-6156-469a-b382-f3371c83164e?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1722957583328&source=portal&HidenavBar=true",
    solicitacao:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/34750d51-15e3-4cb5-9ad7-f5ca8e3e0df2?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1724444000302&source=portal&HidenavBar=true",
    dashboard:"",
    fardamento:"https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/7fe3553c-2be2-4441-928a-18fc8988fc94?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1725470446286&source=portal&HidenavBar=true"
};

function loadApp(app) {
    //const img = document.getElementById('imagem');
    const iframe = document.getElementById('contentFrame');

    //img.hidden=app;
    iframe.src = apps[app];
    
}

const menuToggleButtons = document.querySelectorAll('.menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });
});


