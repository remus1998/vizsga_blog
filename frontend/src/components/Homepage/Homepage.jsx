import React,{ useState,useEffect } from 'react';
import '../../css/style.css'
import Loader from '../Loader/Loader';
import Post from '../Post/Post';
import { v4 as uuidv4 } from 'uuid';
import ButtonM from '../ButtonM/ButtonM';
import { FormHelperText } from '@material-ui/core';

function Homepage() {
  const [data, setData] = useState([]);
  const [isShow, setIsShow] = useState(true);
  const [email, setEmail] = useState("");
  const [ res, setRes] = useState(false);
  const [formShow, setFormShow] = useState(true);

  useEffect(() => {
    setIsShow(false)

    fetch('./data/data.json')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => setData(null))
    .finally(() => setIsShow(true))
   }, [])

    //Post request
    
      function submit(){
        fetch('./data/data.json',{
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email }) 
        })
          .then(response => setRes(true))
          .catch(err => setRes(false))
          .finally(()=> setTimeout(setFormShow(false), 5000))
       
      }
    
  return (
    <div className="homepage">
      <h1>Ez a címünk</h1>
      {
      !isShow
       ? <Loader />
       : data 
       ? data.map(res =>  <Post key={uuidv4()} res={res} /> ) 
       : <p>Sorry not found</p>
    }
      
      {
        isShow && formShow &&
        <form>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <ButtonM text="Iratkozz Fel"  dis={!(email.includes("@")&& email.includes("."))} click={submit()}/>
      </form>
       
      }
     

    </div>
  )
}

export default Homepage
