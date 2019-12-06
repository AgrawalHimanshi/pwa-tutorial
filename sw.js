//install service worker
self.addEventListener('install', evt=>{
    console.log('service worker has been installed');
});

//activate events
self.addEventListener('activate', evt=>{
    console.log('service is activated');
});