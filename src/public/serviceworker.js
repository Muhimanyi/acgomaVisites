self.addEventListener('push', function(event){
    const data=event.data.json();

    const title=data.title || "Notification";
    const options ={
        body:data.body,
        icon:data.icon || "/icon.png"
    };

    event.waiUntil(self.registration.showNotification(title, option));
});