import React from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import simpsons from "./simpsons.json";



const App = () => (
  <Wrapper>
  <Title>The Simpsons
  
    </Title>
  {simpsons.map(simpson => {
      return <FriendCard {...simpson} />;
    })}

  </Wrapper>
);

export default App;
