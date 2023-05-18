import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Router } from '@/common/components';
import { persistor, store } from '@/common/redux';
import { Layout } from '@/common/ui';

function App() {
  return (
    <Layout>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </Layout>
  );
}

export default App;
