import { useState } from "react";
import styled from "styled-components";

const SwitchLanguage: React.FC<any> = () => {
  const [isEn, setIsEn] = useState(true);
  const handleSwitchLanguage: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target.innerText === "中文") {
      setIsEn(false);
    } else {
      setIsEn(true);
    }
  };

  return (
    <SwitchLanguageWrapper onClick={handleSwitchLanguage}>
      <span className={isEn ? "" : "selected"}>中文</span>
      <span className={isEn ? "selected" : ""}>EN</span>
    </SwitchLanguageWrapper>
  );
};

export default SwitchLanguage;

const SwitchLanguageWrapper = styled.div`
  width: 80px;
  background-color: #908d8d;
  border-radius: 5px;
  border: 1px solid #908d8d;
  padding: 2px;
  display: flex;

  span {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 5px;
  }
  span:not(.selected):hover {
    color: #fff;
    transition: all 0.3s;
  }
  span.selected {
    background-color: #fff;
  }
`;
