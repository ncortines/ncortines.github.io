console.log('service worker reporting for duty', self);
self.addEventListener('install', event => {
    //self.skipWaiting();
    console.log('service worker installed', event);
});
self.addEventListener('activate', event => {
    console.log('serivce worker activated', event);
});
self.addEventListener('push', event => {
    console.log('push message received', event);
    event.waitUntil(self.registration.showNotification('alarm notification', {
        body: 'The alarm has been triggered!',
        icon: 'images/icon.png',
        tag: 'my-tag'
    }));
});
