const apps = {
    produto: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/a861b496-0d98-4107-b762-bed0b8bb8e9c?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=ecb55c67-bf1a-4f8a-82a7-1fd25394a144&sourcetime=1719347379945&source=portal&HidenavBar=true",
    invetario: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/3a3d43fb-6555-49f9-a1ca-e5bbaea92116?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1721681756802&source=portal&HidenavBar=true",
    saida: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/6a19c088-513f-43f5-b11a-6928b1e368d6?tenantId=d233d58a-9973-43a7-af69-6763630548a0&sourcetime=1722893335789&source=portal&HidenavBar=true"
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




/*const apps = {
    app1: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/ef4a3788-b112-4c4d-84ba-510b6d3b823d?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=6f3d43b3-ff70-4a27-9ac8-dca7dd127c3b&sourcetime=1718988482577&source=portal&HidenavBar=true",
    app2: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/a861b496-0d98-4107-b762-bed0b8bb8e9c?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=ecb55c67-bf1a-4f8a-82a7-1fd25394a144&sourcetime=1719347379945&source=portal&HidenavBar=true",
    app3: "URL_DE_INCORPORACAO_DO_POWER_APPS_3"
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
*/
