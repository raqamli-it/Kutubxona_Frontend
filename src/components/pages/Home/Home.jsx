import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, LibraryImg, Button } from "./index";
import LIMG from "../../../assets/img/library-1-th.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const navigate = useNavigate(); // navigate hookini chaqiring

  const handleClick = () => {
    navigate("/books"); // navigate() orqali yo'naltirish
  };

  return (
    <Container>
      <LibraryImg src={LIMG} alt="Library" />{" "}
      <TypeAnimation
        sequence={[
          "Welcome",
          400,
          "Welcome to ",
          400,
          "Welcome to the Library",
          400,
          "Welcome to the",
          400,
          "Welcome",
          400,
          " ",
        ]}
        style={{
          fontSize: "2em",
          position: "absolute",
          color: "white",
          fontSize: "55px",
        }}
        repeat={Infinity}
      />
      <Button onClick={handleClick}>
        <TypeAnimation
          sequence={[
            "Go",
            100,
            "Go to", //  Continuing previous Text
            100,
            "Go to library >",
            100
          ]}
          style={{ fontSize: "1em" }}
        />
      </Button>
    </Container>
  );
}

export default Home;
