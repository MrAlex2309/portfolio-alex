import { messaging, getToken, onMessage } from '../sw';

export const requestForToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: 'YOUR_PUBLIC_VAPID_KEY',
    });
    if (currentToken) {
      console.log('FCM Token:', currentToken);
      // Send token to your server if needed
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });