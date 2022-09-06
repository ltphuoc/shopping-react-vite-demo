import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './routes';
import GlobalStyles from './theme/GlobalStyles';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyles />

        <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Router />
        </SnackbarProvider>

        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
