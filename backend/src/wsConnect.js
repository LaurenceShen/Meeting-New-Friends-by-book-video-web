import {json} from 'express'
import {User,Post,Book} from './model.js'
const {OAuth2Client}=require('google-auth-library')
const CLIENT_ID='325684444932-r6ba80mc6eong2p7dnn62flrqd3266c6.apps.googleusercontent.com'
const webdriver = require('selenium-webdriver'), // 加入虛擬網頁套件
    By = webdriver.By,//想要透過什麼方式來抓取元件，通常使用xpath、css
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
async function search(inputString,page){
	
	//let driver = await new webdriver.Builder().forBrowser("chrome").setChromeOptions(options.addArguments('--headless=new')).build();//options.addArguments('blink-settings=imagesEnabled=false')
	let driver = await new webdriver.Builder().forBrowser("chrome").setChromeOptions(new chrome.Options().windowSize({width:1800,height:1080}).addArguments('--headless=new')) .build();
	console.log(1)
	const web=`https://www.eslite.com/Search?keyword=${inputString}&final_price=0,&publishDate=0&sort=_weight_+desc&display=list&start=${page-1}&categories=[3]` //categories=3 中文出版
	//const web = 'https://www.eslite.com/best-sellers/bookstore';//填寫你想要前往的網站
	console.log(page);
	await driver.get(web)
	console.log("search...")
	await driver.sleep(2000);
	const word=await driver.wait(until.elementsLocated(By.css('.search-match-nums span')));
	const num=Number(await word[2].getText())
	const itemslist=await driver.wait(until.elementLocated(By.css('.search-product-block')));
	const oitems=await itemslist.findElements(By.css('.product-item img'));
	for (let i=0;i<oitems.length;i+=2){
		await driver.executeScript("arguments[0].scrollIntoView()",oitems[i]);
		await driver.sleep(100);
	}
	const nitems=await itemslist.findElements(By.css('.product-item'));
	let result=[];
	for (const item of nitems){
		let book={name:"",author:"",img:"",description:"",src:""};
	try{
		let img=await item.findElement(By.css('img'))
		const imgsrc=await img.getAttribute('src');
		if(imgsrc.includes('jpg')||imgsrc.includes('JPG')){
			book.img=imgsrc;
		}else{
			console.log(imgsrc);
			continue;
		}
	 	let a=await item.findElement(By.css('a'));
		book.src=await a.getAttribute('href');
		book.name=await a.getAttribute('title');
		let authordiv=await item.findElement(By.css('.product-author'));
		book.author=await authordiv.getText();
		let descriptiondiv=await item.findElement(By.css('.product-description'));
		book.description=await descriptiondiv.getText();
		}catch(e){
			console.log(e);
		}
		result.push(book);
	}
	let pagenum=1;
	try{
	let pagination=await driver.wait(until.elementLocated(By.css('.page-number')),2000);
	let pages=await pagination.findElements(By.css('.page-items-group'));
	pagenum=await pages[pages.length-1].getText()
	}catch(e){
		console.log(e);
		pagenum=1;
	}
	driver.quit();
	return {num:num,data:result,pagenum:Number(pagenum)}
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

const savePost = async (id, email, title, content) => {
    try {
	let sender=await User.findOne({'email':email});
    const newPost = new Post({'id':id,'title':title,'content':content,'user':sender });
    console.log("Created post", newPost);
	sender=await User.updateOne(sender,{post:[...sender.post,newPost]})
    return newPost.save();
    } catch (e) { throw new Error("Post creation error: " + e); }
   };

const getPost = async(email) => {
    try{
    let sender= await User.findOne({"email": email});
	sender=await sender.populate('post');
    let postcontent = sender.post.map((i) =>{return {'title':i.title,'content':i.content};})
	console.log(postcontent);
    return postcontent;
    } catch (e) { throw new Error("Post search error: " + e); }
   };

const saveUser = async (name, email) => {
	console.log('uuu');
    const existing = await User.findOne({ email });
    if (existing){ 
	  console.log('exist');
	   return;
	}
    try {
    const newUser = new User({ name, email , about:"About..."});
    console.log("Created user", newUser);
    return newUser.save();
    } catch (e) { throw new Error("User creation error: " + e); }
   };

const saveBook = async (name, author, img, description, src, rank, comment) => {
    const existing = await Book.findOne({ name });
    if (existing) return;
    try {
    const newBook = new Book({ name, author, img, description, src, rank});
    console.log("Created book!!", newBook._id.valueOf());
    let id = newBook._id.valueOf();
    newBook.save();
    return id;
    } catch (e) { throw new Error("Book creation error: " + e); }
   };

const saveUserProfile = async (email, profile) => {
    const existing = await User.findOne({ email });
    if (!existing) return;
    try {
    return User.updateOne(
    {email: email},
    {$set:{'about': profile}},
    {upsert:true}
    );
    } catch (e) { throw new Error("User profile error: " + e); }
   };

const getProfile = async(email) => {
    try{
    let sender= await User.findOne({"email": email});
    let userprofile = sender.about;
	console.log(userprofile);
    return userprofile;
    } catch (e) { throw new Error("Profile search error: " + e); }
   };

const verify=async (token)=>{
	const client = new OAuth2Client(CLIENT_ID)
  //將token和client_Id放入參數一起去做驗證
  const ticket = await client.verifyIdToken({
    idToken:`Bearer ${token}`,
    audience: CLIENT_ID
  })
  
  //拿到的ticket就是換回來的使用者資料
  console.log(ticket)
}
export default{
    onMessage:(wss,ws)=>(
        async(byteString)=>{
            const {data}=byteString ;
            const [task,payload]=JSON.parse(data);
			console.log('ww',payload)
            switch(task){
                case 'init':
                    {
                       // const res=await openCrawlerWeb();
                        //console.log(res)
                        const res=[];
						//console.log(res)
                        broadcastMessage(
                            [ws],['output',res],{
                                type:'success',
                                msg: 'Message sent.',
                            }
                        );
                        break; 
                    }
                case 'post':
                   {
                        console.log("dsfgf:", payload);
                        const [payloads, email] = JSON.parse(payload);
                        console.log("email:", email);
                        savePost("1", email ,payloads.title, payloads.content);
                        console.log('post');
                        break;
                    }

                case 'mypost':
                   {
                        const mypost = await getPost(payload);
                        console.log('getpost', mypost);
						//console.log('gg',mypost[0].content)
                        broadcastMessage(
                            wss.clients, ['mypost', mypost],{
                            }
                        );
                        break;
                    }

                case 'createUser':
                   {
                        console.log("createUser:", payload);
                        const [name, email] = JSON.parse(payload);
                        console.log("createUser:", name);
                        saveUser(name, email);
                        break;
                   }
                
                case 'createBook':
                   {
                        console.log("createBook:", payload);
                        const [name, author, img, description, src] = JSON.parse(payload);
                        console.log("createBook:", name);
                        const id = await saveBook(name, author, img, description, src, '1', "hi");
                        console.log("id", id);
					    broadcastMessage(
                            [ws],['bookid',id],{
                                type:'success',
                                msg: 'Message sent.',
                            }
                        );
                        break;
                   }

				case 'search':{
					const res = await search(payload.keyword,payload.page);
                    console.log(res);
					broadcastMessage(
                            [ws],['search',res],{
                                type:'success',
                                msg: 'Message sent.',
                            }
                    );
					break;
				}
				case 'token':{
					await verify(payload)
					break;
				}

				case 'editUserProfile':{
                    console.log("editbackend:", payload);
                    const [email, profile] = JSON.parse(payload);
                    console.log("editbackend-profile:", profile);
                    await saveUserProfile(email, profile);
					break;
				}

                case 'myprofile':
                   {
                        const myprofile = await getProfile(payload);
                        console.log('myprofile', myprofile);
						//console.log('gg',mypost[0].content)
                        broadcastMessage(
                            wss.clients, ['myprofile', myprofile],{
                            }
                        );
                        break;
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
