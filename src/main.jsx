import { createRoot } from 'react-dom/client';

import liff from '@line/liff';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LINE_LIFF_ID } from './constant/constant';
import './index.css';

const initilizeApp = async() => {
  try{
    await liff.init({
      liffId: LINE_LIFF_ID,
    });
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error('Root element not found');
    }
  
    const root = createRoot(rootElement);
    root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    );
  }catch(e){
    const rootElement = document.getElementById('root');
    if (!rootElement) {
      throw new Error('Root element not found',e);
    }
    const root = createRoot(rootElement);
    root.render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
    );
  }
}

initilizeApp();
