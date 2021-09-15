import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
/*0-9の値を持った配列を生成。mapでループして、*/
import React from "react";
// import {UserContext} from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `マッカート${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "1234@gmail.com",
    phone: "090-1111-2222",
    company: {
      name: "株式会社macart"
    },
    website: "https://google.com"
  };
});

/** ユーザーのデータを作成*/
// const user = {
//   name: "マッカート",
//   image: "https://source.unsplash.com/NE0XGVKTmcA",
//   email: "1234@gmail.com",
//   phone: "090-1111-2222",
//   company: {
//     name: "株式会社macart"
//   },
//   website: "https://google.com"
// };

export const Users = () => {
  //レンダリング確認
  //  const {userInfo,setUserInfo} = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  /*縦に積んでいきたい*/
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

/*レスポンシブにしたい*/
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
