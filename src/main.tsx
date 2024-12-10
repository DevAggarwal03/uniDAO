import { createRoot } from "react-dom/client";
import WalletProvider from "./utils/walletProvider.tsx";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <WalletProvider>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </WalletProvider>
);
