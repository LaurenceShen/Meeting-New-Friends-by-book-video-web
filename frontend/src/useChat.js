import { useState ,useEffect, useContext,createContext} from "react";
import {useLocation} from 'react-router-dom';
import axios from 'axios';
let client = new WebSocket('ws://localhost:4000')
const ChatContext=createContext({ 
    books:[],
    bookid:"",
    status:{},
    post:[],
    result:{},
	profile:{},
    userprofile:"",
    sendMessage:()=>{},           
    sendPost:()=>{},
    editUserProfile:()=>{},
    setPost:()=>{},
    getMyPost:()=>{},
    clearMessages:()=>{}, 
    createUser:()=>{},
    createBook:()=>{},
	Search:()=>{},
	sendToken:()=>{},
	setProfile:()=>{},
    setBookId:()=>{},
});            
//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行  
const ChatProvider=(props)=>{    
    const [books,setBooks]=useState([]);  
    const [bookid,setBookId]=useState("");  
    const [post,setPost]=useState([]);  
    const [status,setStatus]=useState({}); 
	const [result,setResult]=useState({num:0,data:[]});
	const [profile,setProfile]=useState({});
	const [userprofile,setUserProfile]=useState({});
    client.onmessage=(byteString)=>{  
        const {data}=byteString; 
        const [task,payload]=JSON.parse(data);
        console.log('client task:' + task); 
        switch(task){ 
            case 'output':{  
                setBooks([...books,...[...new Set(payload)]]);
                console.log("yayaya"+payload); 
                break;
            } 
            case 'post':{  
                setPost([...post,payload]);
                console.log("yayaya"+payload);
                break;
            }
            case 'mypost':{  
                setPost(payload);
                console.log("yayaya"+payload[0][0]);
                break;
            }
			case 'search':{
				setResult(payload);
				console.log('search:'+payload)
				break;
			}
            case 'bookid':{
				setBookId(payload);
				console.log('bookid:'+payload)
				break;
            }
            case 'userprofile':{
				setBookId(payload);
				console.log('bookid:'+payload)
				break;
            }
        }
    }
    const sendData = async (data) => { 
        console.log(data);
        let a=await client.send( JSON.stringify(data));
        console.log("dkkkkk"+a); 
    };      
    
    const sendMessage=(payload)=>{ 
        console.log("ok");
        Newsend(["init",payload]); 
    }

    const sendPost=(payload)=>{ 
        console.log("ok");
        payload = JSON.stringify(payload);
        console.log(payload);
        Newsend(["post",payload]); 
    }

    const getMyPost=(payload)=>{ 
        console.log("getmypost",payload);
        Newsend(["mypost",payload]); 
    }
    
    const createUser=(payload)=>{ 
        console.log("go create!", payload);
        payload = JSON.stringify(payload);
        console.log(payload);
        Newsend(["createUser",payload]); 
    }
    const createBook=(payload)=>{                                                                            
        console.log("go create book!", payload);                                                             
        payload = JSON.stringify(payload);                                                                   
        console.log(payload);                                                                                
        Newsend(["createBook",payload]);                                                                     
    }
    const clearMessages=()=>{
        sendData(['clear']);
    };

    const Search= (k,p)=>{
		console.log('s');
		Newsend(['search',{keyword:k,page:p}]);							
    };   
	const sendToken=()=>{
	   const token=localStorage.getItem('token');
		let flag=true;
		if(token){
       axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
              headers: {
                     Authorization: `Bearer ${token}`,
                     Accept: 'application/json'
              }
              })
              .then((res) => {
				console.log('Authenticate Ok');
				setProfile(res.data);
				console.log(res.data);				
              })
              .catch((err) =>{
				 console.log(err)
				 console.log('failed')
					flag=false;	
				});
		}else{
			console.log('no token');
			flag=false;
		}
		return flag;
	}
    
    const editUserProfile=(payload)=>{
        payload = JSON.stringify(payload);                                                                   
        console.log(payload);                                                                                
        Newsend(["editUserProfile",payload]);                                                                     
    }

    const waitForConnection = function (callback, interval) {
        if (client.readyState === 1) {
            callback();
        } else {    
            // optional: implement backoff for interval here
            setTimeout(function () {
                waitForConnection(callback, interval);
				console.log('wait...');
            }, interval);
        }
    };
    const Newsend = function (data) {
        waitForConnection(async function () {
           let a= await client.send(JSON.stringify(data));
           console.log("dkkk"+a);
        }, 1000);
    };
    
    return ( 
        <ChatContext.Provider
            value={{
                status, books, post, bookid, userprofile,
                sendMessage, clearMessages, sendPost, getMyPost, createUser,createBook,
                Search, result,sendToken,profile,setProfile, setBookId, editUserProfile,
            }}
            {...props}   
        />
        
    );
} 
const useChat=()=>useContext(ChatContext)
export {ChatProvider,useChat}

// export default ()=>{ 
//     ws.onopen = () => {
//         console.log('open connection')
//     }  
//     ws.onmessage = event => { 
//         console.log(event)  
//     }  
//     //關閉後執行的動作，指定一個 function 會在連結中斷後執行
//     ws.onclose = () => {
//         console.log('close connection')
//     }
// }   
