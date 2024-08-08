import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, LibraryImg, Button } from "./index";
import LIMG from "../../../assets/img/library-1-th.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/adabiyot");
    }, 5000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <Container >
      <LibraryImg
        src={LIMG}
        alt="Library"
      />
      <TypeAnimation
        sequence={[
          "Fanlar",
          400,
          "Fanlar Akademiyasi",
          400,
          "Fanlar Akademiyasi Tarix",
          400,
          "Fanlar Akademiyasi Tarix institutining",
          400,
          "Fanlar Akademiyasi Tarix institutining Kutubxonasi",
          400,
        ]}
        style={{
          // fontSize: "3em",
          position: "absolute",
          color: "white",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "70px",
          zIndex: 999,
          textAlign: "center",
        }}
      />
      {/* <Button
        // onClick={() => navigate("/adabiyot")}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 999,
        }}
      >
        <TypeAnimation
          sequence={[
            "Go",
            100,
            "Go to", // Continuing previous Text
            100,
            "Go to library >",
            100,
          ]}
          style={{ fontSize: "1em" }}
        />
      </Button> */}
    </Container>
  );
}

export default Home;
