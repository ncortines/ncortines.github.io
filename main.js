if ('serviceWorker' in navigator) {
    console.log('service worker is supported :)');
    navigator.serviceWorker.register('sw.js')
        .then(reg => {
            console.log('service worker successfully registered! ', reg);
            reg.pushManager.subscribe({
                userVisibleOnly: true
            }).then(sub => {
                console.log('endpoint:', sub.endpoint);
                document.getElementsByTagName('input')[0].value = sub.endpoint.split('/').pop();
            });
        })
        .catch(err => {
            console.error('failed to register service worker! ', err);
        });
} else {
    console.error('service workers not suported ;(')
}
