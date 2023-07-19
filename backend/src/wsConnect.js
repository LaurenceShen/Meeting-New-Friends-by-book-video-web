import {json} from 'express'
import {UserModel} from './model/User.js'
const webdriver = require('selenium-webdriver'), // 加入虛擬網頁套件
    By = webdriver.By,//你想要透過什麼方式來抓取元件，通常使用xpath、css
    until = webdriver.until;//直到抓到元件才進入下一步(可設定等待時間)
const chrome = require('selenium-webdriver/chrome');


const options = new chrome.Options();
options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });//因為FB會有notifications干擾到爬蟲，所以要先把它關閉
// options.addArguments('--headless')//瀏覽器不提供頁面觀看，linux下如果系統是純文字介面不加這條會啓動失敗
// options.addArguments('--log-level=3')//這個option可以讓你跟headless時網頁端的console.log說掰掰
// options.addArguments('blink-settings=imagesEnabled=false')
// //下面參數能提升爬蟲穩定性    
// options.addArguments('--disable-dev-shm-usage')//使用共享內存RAM
// options.addArguments('--disable-gpu')//規避部分chrome gpu bug
// options.addArguments('headless'); // note: without dashes
// options.addArguments('disable-gpu')
options.windowSize({width:1200,height:1080})

async function openCrawlerWeb() {

        // 建立這個browser的類型
        // let driver = await new webdriver.Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().addArguments('--headless')).build();
        let driver = await new webdriver.Builder().forBrowser("chrome").setChromeOptions(options.addArguments('--headless=new')).build();//
        const web = 'https://www.eslite.com/best-sellers/bookstore';//填寫你想要前往的網站
        console.log("start!")
        await driver.get(web)//透國這個driver打開網頁
        // const yo=await driver.wait(until.elementsLocated(By.css(".close-btn"))) 
        // console.log(await yo[0].findElement(By.css('button')))
        // console.log(await yo[0].getAttribute('innerHTMl'));
        // console.log(yo[0])
        // yo[0].click();
        // await driver.sleep(1000);
        // // const product_slides = await driver.wait(until.findElement(By.css('.category-title')),5000);  
         
        // for(let i=0;i<2;i++){
        //     const banana=await apple[i].findElements(By.css('.slides-item'))
        //     for(let j=0;j<3;j++){ 
        //         while(true){
        //             const cat=await banana[j].findElements(By.css('.item-image-wrap img'))
        //             const cat_son=await cat[0].getAttribute('src')
        //             // if(true)
        //             // {
        //             //     console.log(cat_son)
        //             //     // console.log(cat_son[-1])
        //             //     break;
        //             // }
        //             console.log(cat_son)
        //             break;
        //         }

        //     }
        // } 
        let cat_son=[];
        try{
            
            const allimg =await driver.wait(until.elementsLocated(By.css(".item-image-wrap img")),5000)
            console.log(allimg.length)
            for(const img of allimg){
                // const imgsrc=await driver.wait(function(){
                //     const a=img.getAttribute('src');
                //     // console.log(typeof(a)) 
                //     // return a.includes('gif')?null:a
                //     return a
                // },1000)  
                const imgsrc=await img.getAttribute('src'); 
                // console.log(String(imgsrc).includes('gif'));
                // console.log(String(imgsrc).includes('gif'))
                // console.log(imgsrc)
                if(imgsrc){
		    if(imgsrc.includes('jpg')){	    
                   	 cat_son.push(imgsrc);
		    }
                }
                 
            }
		console.log("search...")
		const inputbox = await driver.wait(until.elementLocated(By.css('.header-search-bar input')),3000);
		console.log(inputbox)

        }catch(e){
            console.error(e);
        }
        
        // try{
        //     const apple =await driver.wait(until.elementsLocated(By.css(".product-slides-mobile")))
      
        //     const banana=await apple[0].findElements(By.css('.slides-item'))
        //     const cat=await banana[0].findElements(By.css('.item-image-wrap img'))
        //     const cat_son=await cat[0].getAttribute('src')
        //     console.log(cat_son.includes('jpg')); 
        // }catch(e){
        //     console.error(e);
        // }
        

         
        console.log("hohoho")
        await driver.quit();
	//await search('python');
        // console.log(await yo[0].getAttribute('innerHTML'))
        return cat_son;
    }
async function search(inputString){
	
	//let driver = await new webdriver.Builder().forBrowser("chrome").setChromeOptions(options.addArguments('--headless=new')).build();//
	let driver = await new webdriver.Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().windowSize({width:1200,height:1080})) .build();
	
	//
	const web = 'https://www.eslite.com/best-sellers/bookstore';//填寫你想要前往的網站
	await driver.get(web)
	console.log("search...")
	const inputbox = await driver.wait(until.elementLocated(By.css('.header-search-bar input')));
	const inputboxv=await driver.wait(until.elementIsVisible(inputbox));
	console.log(inputboxv)
	await inputboxv.sendKeys(inputString);
	const searchbutton = await driver.wait(until.elementLocated(By.css('.header-search-bar button')));
	//const searchbuttonv=await driver.wait(until.elementIsVisible(searchbutton));
	await driver.executeScript("arguments[0].click();", searchbutton)
	console.log(await driver.getCurrentUrl());
}
const sendData=(data,ws)=>{
    ws.send(JSON.stringify(data));
}
const sendStatus=(payload ,ws)=>{
    sendData(['status',payload],ws);
}
const broadcastMessage=(clients,data,status)=>{
    clients.forEach((client)=> {
      //  console.log(client);
        sendData(data,client);
        sendStatus(status,client);
    });
}
export default{
    onMessage:(wss,ws)=>(
        
        async(byteString)=>{
            console.log("hhhh")
            const {data}=byteString ;
            const [task,payload]=JSON.parse(data);
         
            switch(task){
                case 'init':
                    {
                        const res=await openCrawlerWeb();
                        console.log(res)
                        broadcastMessage(
                            wss.clients,['output',res],{
                                type:'success',
                                msg: 'Message sent.',
                            }
                        );
                        break; 
                    }
                case 'post':
                {
                        broadcastMessage(
                            wss.clients, ['post', payload],{
                            }
                        );
                    console.log('post');
                    break;
                }

		case 'search':{
			
		}
		default:
                    console.log('fault');
                    break;

            }
        }),
} 
// export default{
//     onMessage:(wss,ws)=>(
//         async(byteString)=>{
//             console.log("jkjk");
//             const {data}=byteString;
//             const [task,payload]=JSON.parse(data);
//             switch(task){ 
//                 case "init":
//                 {
//                     console.log('init')
//                     const res=await openCrawlerWeb()
//                     broadcastMessage(
//                         wss.clients,['output',[res]],{
//                             type:'success',
//                             msg: 'Message sent.',
//                         }
//                     );
//                     break;
//                 }
//             }
//         }
//     )
// }
