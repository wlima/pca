const apps = {
    app1: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/ef4a3788-b112-4c4d-84ba-510b6d3b823d?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=6f3d43b3-ff70-4a27-9ac8-dca7dd127c3b&sourcetime=1718988482577&source=portal&HidenavBar=true",
    app2: "https://apps.powerapps.com/play/e/default-d233d58a-9973-43a7-af69-6763630548a0/a/a861b496-0d98-4107-b762-bed0b8bb8e9c?tenantId=d233d58a-9973-43a7-af69-6763630548a0&hint=ecb55c67-bf1a-4f8a-82a7-1fd25394a144&sourcetime=1719347379945&source=portal&HidenavBar=true",
    app3: "URL_DE_INCORPORACAO_DO_POWER_APPS_3"
};

function loadApp(app) {
    const img = document.getElementById('imagem');
    const iframe = document.getElementById('contentFrame');

    img.hidden=app;
    iframe.src = apps[app];
    
}
