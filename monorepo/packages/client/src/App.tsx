import React, { useEffect, useState } from 'react';

import { apiGateway } from '@monorepo/axios-config';

const App: React.FC = () => {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const { data } = await apiGateway.get('/');
        setMessage(data.message);
      } catch (error) {
        setMessage(error.message);
      }
    };

    fetchMessage();
  }, []);

  return (
    <main>
      <h1>{message}</h1>
    </main>
  );
};

export default App;
