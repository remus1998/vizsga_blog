import React from 'react'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';


const MyButton = styled(Button)({
  height: 48,
  color: 'red',
  background: 'linear-gradient(45deg, lightblue 30%, gray 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(10, 100, 50, .3)',
  padding: '0 30px',
  letterSpacing: '5px',
  fontSize:'24px' 
});


function ButtonM(props) {
  return (
    <div>
         <MyButton onClick={props.click} disabled={props.dis}>
        {props.text}
      </MyButton>
    </div>
  )
}

export default ButtonM
