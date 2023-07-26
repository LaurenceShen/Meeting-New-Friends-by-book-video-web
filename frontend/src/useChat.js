
import { useState ,useEffect, useContext,createContext} from "react";
let client = new WebSocket('ws://localhost:4000')
const ChatContext=createContext({ 
    books:[],
    status:{}, 
	result:{},
    sendMessage:()=>{},           
    clearMessages:()=>{},  
	Search:()=>{}
});            
//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行  
const ChatProvider=(props)=>{    
    const [books,setBooks]=useState([]);  
    const [status,setStatus]=useState({});   
	const [result,setResult]=useState({num:0,data:[]});
    client.onmessage=(byteString)=>{  
        const {data}=byteString; 
        const [task,payload]=JSON.parse(data);
        console.log('client task:'+task); 
        switch(task){ 
            case 'output':{  
                setBooks([...books,...[...new Set(payload)]]);
                console.log("yayaya"+payload)  
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
                status,books,result,
                sendMessage,clearMessages,Search
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
