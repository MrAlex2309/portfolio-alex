import { useEffect } from 'react';
import { requestForToken, onMessageListener } from './requestPermission';

function App() {
  useEffect(() => {
    requestForToken();
    onMessageListener().then(payload => {
      console.log('Message received. ', payload);
      // Display notification or alert
    });
  }, []);

  return <h1>React PWA with Firebase Push</h1>;
}

export default App;