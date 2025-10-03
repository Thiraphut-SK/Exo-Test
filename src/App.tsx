import { Route, Routes } from "react-router-dom";

import CustomerPage from "@/pages/index";

function App() {
  return (
    <Routes>
      <Route element={<CustomerPage />} path="/" />
    </Routes>
  );
}

export default App;
