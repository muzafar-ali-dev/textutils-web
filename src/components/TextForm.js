import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";

const TextForm = (props) => {
  const handelUpClick = () => {
    // console.log("Uppercase button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelUplower = () => {
    // console.log("Uppercase button was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelClearText = () => {
    let newText = " ";
    setText(newText);
  };
  const handelOnChange = (event) => {
    // console.log("handelonChange");
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  return (
    <Container>
      <Form>
        <h2>{props.heading}</h2>
        <Form.Group className="mb-10" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            className="mb-2"
            onChange={handelOnChange}
            value={text}
            as="textarea"
            rows={6}
          />
        </Form.Group>
      </Form>
      <div>
        <Button onClick={handelUpClick} className="btn btn-primary mx-2">
          Convert to uppercasae
        </Button>
        <Button onClick={handelUplower} className="btn btn-primary mx-2">
          Convert to lowercase
        </Button>
        <Button onClick={handelClearText} className="btn btn-primary mx-2">
          Clear text
        </Button>
      </div>
      <div className="Container mx-2">
        <h3>Your text Summary:</h3>
        <p>
          {text.split(" ").length} WORDS AND {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} MINUTES READ</p>
        <h5>PREVIEW:</h5>
        <p>{text}</p>
      </div>
    </Container>
  );
};

export default TextForm;
