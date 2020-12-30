import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Snowfall from 'react-snowfall'


function NewYear() {
    const [ display, setDisplay ] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setDisplay(true);
        },1000);
    },[]);
    // setTimeout(()=>{
    //     setDisplay(false);
    // },6000);
  

  

    return (
        <Components>
            <div style={{backgroundImage:`url(/h5.jpg)`}} className="ghost">
                <Snowfall snowflakeCount={300} />
            </div>

            
            {display ?
          (  <div className="Parent">
                <img className="gif" src="https://media.giphy.com/media/s2qXK8wAvkHTO/giphy.gif" />
                <img className="gif" src="/tsel.jpg" />
            </div> )
            : null}
        </Components>
    )
}

export default NewYear

const Components = styled.div`
    // background-color:red;
    width:100vw;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    .ghost{
        height:100vh;
        width:100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
    }
    .Parent{
        display:flex;
        flex-direction:column;
        align-items:center;
        .gif{
            width:20vw;
            margin-top:30px;
        }
    }

    @media (max-width:768px){
        .Parent{
            display:flex;
            flex-direction:column;
            align-items:center;
            .gif{
                width:80%;
                margin-top:30px;
            }
        }
    }
   
`
