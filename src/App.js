import "./styles.css";
import React from "react";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";
//ユーザーのデータを作成
const user = {
  name: "マッカート",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234@gmail.com",
  phone: "090-1111-2222",
  company: {
    name: "株式会社macart"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />;
      </UserProvider>
    </RecoilRoot>
  );
}
