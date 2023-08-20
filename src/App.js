import './App.css';
import {Box , Container} from '@chakra-ui/react'
import Header from './Header';
import InputText from './InputText';

function App() {
  return (
    <div className="App">

    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
    <Container maxW='3xl'>

    <Header/>
    <InputText />
    </Container>
    </Box>
     
    </div>
  );
}

export default App;
