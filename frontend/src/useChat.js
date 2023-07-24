import { useState ,useEffect, useContext,createContext} from "react";
let client = new WebSocket('ws://localhost:4000')
const ChatContext=createContext({ 
    books:[],
    status:{},
    post:[],
    result:{},
    sendMessage:()=>{},           
    sendPost:()=>{},
    setPost:()=>{},
    getMyPost:()=>{},
    clearMessages:()=>{}, 
    createUser:()=>{},
	Search:()=>{},
});            
//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行  
const ChatProvider=(props)=>{    
    const [books,setBooks]=useState([]);  
    const [post,setPost]=useState([]);  
    const [status,setStatus]=useState({}); 
	const [result,setResult]=useState({num:0,data:[]});
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
                console.log("yayaya"+payload);
                break;
            }
			case 'search':{
				setResult(payload);
				console.log('yayaya'+payload)
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
        console.log("okok");
        Newsend(["mypost",payload]); 
    }
    
    const createUser=(payload)=>{ 
        console.log("go create!", payload);
        payload = JSON.stringify(payload);
        console.log(payload);
        Newsend(["createUser",payload]); 
    }

    const clearMessages=()=>{
        sendData(['clear']);
    };
    const Search=(payload)=>{
		console.log('s');
		Newsend(['search',payload]);							
    };   
    const waitForConnection = function (callback, interval) {
        if (client.readyState === 1) {
            callback();
        } else {    
            // optional: implement backoff for interval here
            setTimeout(function () {
                waitForConnection(callback, interval);
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
                status, books, post,
                sendMessage, clearMessages, sendPost, getMyPost, createUser,
                Search, result,
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
