import React from 'react';
import { BrowserRouter} from "react-router-dom";

import ControlPage from './page/ControlPage';

function App() {
  return (
      <BrowserRouter>
        <ControlPage  />
      </BrowserRouter>
  );
}

export default App;
