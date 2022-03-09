import React from "react";
import Container from "./layout/Container";
import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";
import Widgets from "./layout/Widgets";

function App() {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
}

export default App;
