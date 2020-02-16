import React from "react";
import styled from "styled-components";
import beat from "../../data/beat";
import BeatCard from "../Beat/BeatCard";

function DiscoverFeed() {
  const arr = [beat, beat, beat, beat, beat, beat, beat];
  return (
    <Container>
      {arr.map((beat, index) => (
        <BeatCard key={index} beat={beat} />
      ))}
    </Container>
  );
}

export default DiscoverFeed;

const Container = styled.div``;
