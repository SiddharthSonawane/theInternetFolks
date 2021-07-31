import axios from "axios";
import * as ReactSpinner from "react-bootstrap";

import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Input,
  Content,
  Link,
  LoderDiv,
} from "./GetStarted.elements";

const GetStarted = () => {
  const [input, setInput] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [display, setDisplay] = useState(true);
  const [wait, setWait] = useState("");

  async function handleClick() {
    await axios
      .get(`https://api.shrtco.de/v2/shorten?url=${input}`)

      .then((response) => {
        if (response) {
          console.log("After loading data");
          setShortLink(response.data.result.full_short_link);
          setLoading(true);
        }
      })
      .then(() => {
        //setWait("Please Wait while we fetch your short link");
        console.log("wating");
      })
      .catch((error) => {
        console.log(error);
      });
    setDisplay(false);
  }

  const handleChange = (event) => {
    const newText = event.target.value;
    setInput(newText);
  };

  const handleDisplay = () => {
    setDisplay(true);
    shortLink("");
  };

  return (
    <Container>
      {display ? (
        <>
          <Input
            onChange={handleChange}
            placeholder="Shorten a link here!"
            value={input}
            style={{ fontSize: "2rem" }}
          ></Input>
          <Button onClick={handleClick} style={{ fontSize: "2rem" }}>
            Shorten It!
          </Button>
        </>
      ) : (
        <>
          <Content>{wait}</Content>
          <Button onClick={handleDisplay}>Short Again</Button>
        </>
      )}

      <LoderDiv>
        {loading && (
          <>
            <Content>Your Link</Content>
            <Link href={shortLink} target="_blank">
              {shortLink}
            </Link>
          </>
        )}
      </LoderDiv>
    </Container>
  );
};

export default GetStarted;

{
  /* <Link href={shortLink} target="_blank">
            Your Link {shortLink}
          </Link> */
}
