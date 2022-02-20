import React from "react";
import * as S from "./styles";

const Main = ({ title = "Boilerplate" }) => {
  return (
    <main>
      <S.Color>
        <h1>{title}</h1>
      </S.Color>
    </main>
  );
};

export default Main;
