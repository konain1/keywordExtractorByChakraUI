import React from 'react'
import { useState } from 'react'
import { useToast ,Textarea,Button} from '@chakra-ui/react'

function InputText() {

    const [text,setText] = useState('')

    const submitText = ()=>{
        console.log(text)
    }




  return (
    <>
        <Textarea
        bg='blue.400'
        color='white'
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e)=> setText(e.target.value)}
         />

    <Button bg='blue.500' color='white' marginTop={4} width='100%' _hover={{bg: 'blue.700'}} onClick={submitText}> enter here</Button>
    </>
  )
}

export default InputText
