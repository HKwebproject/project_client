import React, {useState} from 'react';
import "../../style/Sidebar.scss";
import { BiCategory } from "react-icons/bi";

function Sidebar() {

  const [menu, setMenu] = useState(false);

  const IconClick = (e) => {
    e.preventDefault();
    setMenu(!menu);
    console.log(menu);
  }

  return (
    <div id = "sidebar">
      <div className = "menu-icon">
        <BiCategory size="30px" onClick = {IconClick}/>
      </div>
      <div className = {menu ? "sectionClick" : "section"}>
        <div className = "menutitle">
          <h1>전체 메뉴</h1>
        </div>
        <ul className="boardlist">
          <li className = "board"><a href = "#">공지사항</a></li>
          <li className = "board"><a href = "#">동아리소개</a></li>
          <li className = "board"><a href = "#">자유게시판</a></li>
          <li className = "board"><a href = "#">HELP</a></li>
          <li className = "board"><a href = "#">STUDY</a></li>
          <li className = "board"><a href = "#">활동사진</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar