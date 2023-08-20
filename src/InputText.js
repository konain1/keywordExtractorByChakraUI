import React from 'react'
import { useState } from 'react'
import { useToast ,Textarea,Button} from '@chakra-ui/react'

function InputText() {

    const [text,setText] = useState('')
    const toast = useToast()
    const submitText = ()=>{

        if(text == ''){
            toast({
                title:'Text is empty ',
                description:'please enter some text to extract keyword',
                status:'error',
                duration:5000,
                isClosable:false
            })
        }else{
            console.log(Text)
        }
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

    <Button bg='blue.500' color='white' marginTop={4} width='100%' _hover={{bg: 'blue.700'}} onClick={submitText}> Extract keyword </Button>
    </>
  )
}

export default InputText
