import React from "react";
import "./footer.css";
import FilterLinkBtn from "../containers/FilterLinkBtn";

function Footer() {
  return (
    <footer>
      <FilterLinkBtn filter={"all"}>{"all"}</FilterLinkBtn>
      <FilterLinkBtn filter={"unfinished"}>{"unfinished"}</FilterLinkBtn>
      <FilterLinkBtn filter={"finished"}>{"finished"}</FilterLinkBtn>
    </footer>
  );
}
export default Footer;
