import React, { useEffect, useState } from "react";
import { IntroPage } from "../components/IntroPage";

export const Home = () => {
  const [screen, setScreen] = useState(window.outerWidth);
  const [large, setLarge] = useState("");

  useEffect(() => {
    const handelResize = () => {
      setScreen(window.outerWidth);
    };
    window.addEventListener("resize", handelResize);
    if (screen > 800) {
      setLarge("true");
    } else if (screen <= 800) {
      setLarge("false");
    }
    console.log(large);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  console.log(large);
  return (
    <IntroPage
      titleone="Hello World"
      titletwo="BRAND ME."
      home={true}
      large={large}
    />
  );
};
