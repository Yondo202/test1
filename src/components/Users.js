// import React,{useEffect, useState} from 'react'
// import styled from 'styled-components'
// import axios from "axios"
// import {VscAccount} from "react-icons/vsc"
// import {RiDeleteBin7Line} from "react-icons/ri"
// import {IoMdAdd} from "react-icons/io"

// const baseUrl = "http://192.168.88.227:8000/api"
// function Users(props) {
//     console.log(props.token, "myToken");
//     const [ users, setUsers ] = useState([]);
//     const [ sectors, setSectors ] = useState([]);
//     const [ userSector, setUserSector ] = useState([]);
//     const [ userId, setUserId ] = useState();
//     const [ Block, setBlock ] = useState(null);
//     const [ Token, setToken ] = useState()
    
//     useEffect(() => {
//         axios.post("http://202.180.220.177:8099/api/token/",{
//             username: "testuser", 
//             password: "testuser"
//             }).then((res)=>{
//                 setToken(res.data.access);
//             }).catch((err)=>{
//                 console.error(err);
//             })
//         axios.get(`${baseUrl}/users/`,{}, { headers:{'Authorization': `Bearer ${Token}` }})
//         .then((res)=>{
//             console.log(res.data, "my data");
//             setUsers(res.data);
//         }).catch((err)=>{  console.error(err, "error");  });

//         axios.get(`${baseUrl}/sectors/`,{}, { headers:{'Authorization': `Bearer ${Token}` }})
//           .then((res)=>{
//               setSectors(res.data);
//           }).catch((err)=>{ console.error(err, "error"); });
//     },[]);
 

//   const userHandle = (e) =>{
//     setUserId(e.target.id);
//     axios.get(`${baseUrl}/users-user-sector/${e.target.id}`,
//       { headers:{'Content-Type': 'application/json'  }
//       }).then((res)=>{
//         console.log(res.data, "myresponse");
//         setUserSector(res.data);
//       })
//   }

//   const SectorsHandle = (event) =>{
//     console.log(event.target.id);
//     axios.delete(`${baseUrl}/users-user-sector/`, {data:{
//         user_id: userId,
//         sector_id: event.target.id
//     }},{ headers:{'Content-Type': 'application/json' }
//       }).then((res)=>{
//         console.log(res.data.success, "myresponse");
//       })
//       axios.get(`${baseUrl}/users-user-sector/${userId}`,
//       { headers:{   'Content-Type': 'application/json' }
//       }).then((res)=>{
//         // console.log(res.data, "myresponse");
//         setUserSector(res.data);
//       })
//   }

//   const addSectorHandle = (event) =>{
//     console.log(event.target.id, "my targetttt");
//     console.log(userId, "userIdddd");
//     axios.post(`${baseUrl}/users-user-sector/`, {
//         user_id: userId,
//         sector_id: event.target.id
//     },{ headers:{ 'Content-Type': 'application/json'}
//       }).then((res)=>{
//         console.log(res.data, "myresponse");
//       })

//     axios.get(`${baseUrl}/users-user-sector/${userId}`,
//         { headers:{ 'Content-Type': 'application/json' }
//         }).then((res)=>{
//         setUserSector(res.data);
//         })

//     axios.get(`${baseUrl}/api/sectors/`,{}, { headers:{'Authorization': `Bearer ${props.token}` }})
//         .then((res)=>{ 
//             console.log(res.data, "sectorData data");
//             setSectors(res.data);
//         })
//   }

//     return (
//         <Components className="container pt-3">
//             <div className="row">
//                 <div className="col-md-1"></div>
//                 <div style={{paddingRight:0}} className="col-md-3">
//                     <div className="usersPar">
//                         <div className="header">Хэрэглэгчид</div>
//                         <div className="scroll">
//                             {users.map((el,i)=>{ if(el.id == userId){
//                                 return (<div className="active" ><VscAccount /> <span onClick={userHandle} id={el.id} cont={el.first_name} className="names">{el.first_name}</span></div>)
//                             }else{
//                               return ( <div className="users" ><VscAccount /> <span onClick={userHandle} id={el.id} cont={el.first_name} className="names">{el.first_name}</span></div>)
//                             }
//                             })}
//                         </div>
//                     </div>
//                 </div>

//                 <div style={{paddingLeft:0}} className="col-md-7">
//                     <div className="compPar">
//                         <div className="header"> Салбарууд</div>
//                         <div className="sectorsParent">
//                             <div className="sec">
//                                 {userSector.map((el,i)=>{
//                                         if(el.id === Block){
//                                             return(
//                                                 <div className="sectors">
//                                                     <span className="title">{el.sector_name}</span>
//                                                     <div className="iconBtns">
//                                                         <div  style={{ transform:`scale(1)`}} className="answer"><span  id={el.sector_id} onClick={SectorsHandle} className="true">Тийм</span><span onClick={()=> setBlock(false)}  className="false">Үгүй</span></div> <RiDeleteBin7Line  onClick={()=> setBlock(el.id)} className="deleteBtn" />
//                                                     </div>
//                                                 </div>
//                                             )
//                                         }else{
//                                             return(
//                                                 <div className="sectors">
//                                                     <span className="title">{el.sector_name}</span>
//                                                     <div className="iconBtns">
//                                                         <div  style={{ transform:`scale(0)`}} className="answer"><span  id={el.sector_id} onClick={SectorsHandle} className="true">Тийм</span><span onClick={()=> setBlock(false)}  className="false">Үгүй</span></div> <RiDeleteBin7Line  onClick={()=> setBlock(el.id)} className="deleteBtn" />
//                                                     </div>
//                                                 </div>
//                                             )
//                                         }
//                                     })}
//                             </div>
//                             <div className="addSector">
//                                 {/* <div className="AddTitle" onClick={showHanlde}>Салбар нэмэх <BsChevronDoubleDown /> </div> */}
//                                     <div>{sectors.filter(array => !userSector.map(el => el.sector_id).includes(array.id)).map((el,i)=>{return( <div className="sectorss"> <span className="title">{el.name}</span><IoMdAdd id={el.id} onClick={addSectorHandle} className="addBtn" /> </div> )})}</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </Components>
//     )
// }

// export default Users

// const Components = styled.div`
//     margin-top:30px;
//     color: rgb(0, 18, 41);
//     font-size:13px;
//     .usersPar{
//         width:100%;
//         border:1px solid rgba(0,0,0,0.3);
//         .header{
//             color:white;
//             background-color:#1a809c;
//             padding:10px 0px;
//             text-align:center;
//             font-size:16px;
//             font-weight:400;
//         }
//         .scroll{
//             height:70vh;
//             overflow-x:scroll;
//             &::-webkit-scrollbar {
//                 width: 6px;
//               }
//             &::-webkit-scrollbar-thumb {
//                 background: rgba(40, 40, 40, 1);
//                 border-radius: 10px;
//               }
//             .users{
//                 padding:10px 25px;
//                 display:flex;
//                 align-items:center;
//                 .names{
//                     cursor:pointer;
//                     &:hover{
//                         opacity:0.8;
//                     }
//                 }
//                 svg{
//                     color:rgba(0,0,0,0.6);
//                     margin-right:15px;
//                     font-size:22px;
//                 }
//             }
            
//             .active{
//                 padding:10px 25px;
//                 display:flex;
//                 align-items:center;
//                 background-color: rgba(0,0,0,0.1);
//                 .names{
//                     cursor:pointer;
//                     &:hover{
//                         opacity:0.8;
//                     }
//                 }
//                 svg{
//                     border-radius:50%;
//                     background-color:black;
//                     color:white;
//                     margin-right:15px;
//                     font-size:22px;
//                 }
//             }
//         }
       
//     }
//     .compPar{
//         border:1px solid rgba(0,0,0,0.2);
//         .header{
//             color:white;
//             background-color:#1a809c;
//             padding:10px 0px;
//             text-align:center;
//             font-size:16px;
//             font-weight:400;
//         }
//         .sectorsParent{
//             display:flex;
//             height:70vh;
//             padding:15px 25px;
//             flex-direction:column;
//             justify-content:space-between;
//             transition:all 0.4s ease;
//             .sectors{
//                 display:flex;
//                 flex-direction:row;
//                 align-items:center;
//                 justify-content:space-between;
//                 padding:15px 20px;
//                 border-bottom:1px solid rgba(0,0,0,0.3);
//                 transition:all 0.4s ease;
//                 .title{
//                     font-weight:500;
//                 }
//                 .iconBtns{
//                     position:relative;
//                     .answer{
//                         background-color:#1a809c;
//                         padding:6px 10px; 
//                         left:-100%;
//                         position:absolute;
//                         top:0%;
//                         border-radius:8px;
//                         color:white;
//                         .true{
//                             border-radius:4px;
//                             padding:2px 8px;
//                             background-color:#201D1C;
//                             cursor:pointer;
//                             &:hover{
//                                 background-color:#695D5C;
//                             }
//                         }
//                         .false{
//                             cursor:pointer;
//                             border-radius:4px;
//                             padding:2px 8px;
//                             margin-left:10px;
//                             background-color:#201D1C;
//                             &:hover{
//                                 background-color:#695D5C;
//                             }
//                         }
//                     }
//                     .deleteBtn{
//                         transition:all 0.4s ease;
//                         cursor:pointer;
//                         cursor:pointer;
//                         font-size:24px;
//                         color:rgba(255,55,44,1);
//                         margin-left:20px;
//                         &:hover{
//                             background-color:rgba(255,55,44,1);
//                             color:white;
//                             border-radius:6px;
//                         }
//                     }
//                 }
//             }
//             .addSector{
//                 overflow:hidden;
//                 height:50%;
//                 transition:all 0.4s ease;
//                 .AddTitle{
//                     cursor:pointer;
//                     margin-bottom:10px;
//                     border-radius:6px;
//                     display:flex;
//                     justify-content:space-between;
//                     align-items:center;
//                     width:100%;
//                     font-weight:500;
//                     padding:6px 25px;
//                     box-shadow:0px 2px 4px -2px;
//                     transition:all 0.4s ease;
//                     svg{
//                         font-size:18px;
//                     }
//                     &:hover{
//                         box-shadow:0px 3px 8px -2px;

//                     }
//                 }
//                 .sectorss{
//                     display:flex;
//                     flex-direction:row;
//                     align-items:center;
//                     justify-content:space-between;
//                     padding:8px 30px;
//                     border-bottom:1px solid rgba(0,0,0,0.3);
//                     transition:all 0.4s ease;
//                     .title{
//                         font-weight:400;
//                     }
//                     .addBtn{
//                         transition:all 0.4s ease;
//                         cursor:pointer;
//                         font-size:24px;
//                         color:green;
//                         &:hover{
//                             background-color:green;
//                             border-radius:50%;
//                             color:white;
//                         }
//                     }
                  
//                 }
//             }
//         }
//     }
// `