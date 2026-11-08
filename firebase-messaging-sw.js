self.addEventListener("notificationclick", function(event) {
  event.notification.close();

  const url = event.notification.data?.url ||
    "https://ibodilloyevsunnatjon-hub.github.io/";

  event.waitUntil(clients.openWindow(url));
});

importScripts(
  "https://www.gstatic.com/firebasejs/13.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/13.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyD1hJsCmk_7AfhnFA-jjwK4CA1pFnHA7Ks",
  authDomain: "edulife-a774f.firebaseapp.com",
  projectId: "edulife-a774f",
  storageBucket: "edulife-a774f.firebasestorage.app",
  messagingSenderId: "92661505128",
  appId: "1:92661505128:web:7aeb0cbcb25bed59ceefdd"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  if (payload.notification) return;

  const data = payload.data || {};

  return self.registration.showNotification(
    data.title || "EduLife",
    {
      body: data.body || "Sizga yangi bildirishnoma keldi.",
      data: {
        url: "https://ibodilloyevsunnatjon-hub.github.io/"
      }
    }
  );
});
