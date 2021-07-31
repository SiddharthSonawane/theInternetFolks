import axios from "axios";
import React, { useState } from "react";
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
