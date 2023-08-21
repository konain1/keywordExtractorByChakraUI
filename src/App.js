import './App.css';
import { useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from './comp/Header';
import InputText from './comp/InputText';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const apiUrl = process.env.REACT_APP_OPENAI_API_URL;

function App() {
  const [keyword, setKeyword] = useState();
  const [isopen, setIsopen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeyword = async (textFromChildComponent) => {
    setLoading(true);
    setIsopen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.apiKey}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt:
          `Extract keywords from this text. Make the first letter of each word uppercase and separate with commas\n\n` +
          textFromChildComponent +
          ' ',
        temperature: 0.5,
        max_tokens: 50,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(process.env.apiUrl, options);
    const json = await response.json();

    const data = json.choices[0].text.trim();
    console.log(data);
    setKeyword(data);
    setLoading(false);
  };

  return (
    <div className="App">
      <Box bg="blue.600" color="white" height="100vh" paddingTop={130}>
        <Container maxW="3xl">
          <Header />
          <InputText extractKeyword={extractKeyword} />
        </Container>
      </Box>
    </div>
  );
}

export default App;
