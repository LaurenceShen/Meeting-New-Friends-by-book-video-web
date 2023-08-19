// const webdriver = require('selenium-webdriver'), // 加入虛擬網頁套件
//     By = webdriver.By,//你想要透過什麼方式來抓取元件，通常使用xpath、css
//     until = webdriver.until;//直到抓到元件才進入下一步(可設定等待時間)
//     const chrome = require('selenium-webdriver/chrome');
//     const options = new chrome.Options();
//     options.setUserPreferences({ 'profile.default_content_setting_values.notifications': 1 });//因為FB會有notifications干擾到爬蟲，所以要先把它關閉
// async function openCrawlerWeb() {

//     // 建立這個browser的類型
//     let driver = await new webdriver.Builder().forBrowser("chrome").build();
//     const web = 'https://www.eslite.com/best-sellers/bookstore';//填寫你想要前往的網站
//     await driver.get(web)//透國這個driver打開網頁
//     await driver.sleep(1000);
//     const apple =await driver.wait(until.elementsLocated(By.css(".product-slides-mobile")))
//     // const product_slides = await driver.wait(until.findElement(By.css('.category-title')),5000);  
    
//     // const banana=await apple[0].wait(until.elementsLocated(By.css('a')));
//     const banana=await apple[0].findElements(By.css('.slides-item'))
//     const cat=await banana[0].findElements(By.css('.item-image-wrap img'))
//     console.log(await cat[0].getAttribute('src'))
//     // // const slides_items0=await product_slides[0].findElement(By.css('.card'));
//     // for (const a of apple){
//     //     // const word=await a.getAttribute("")
//     //     console.log(a)
//     //     // console.log(word);    
//     // }               
//     // console.log("hohoho")
//     // driver.quit();


// }
// openCrawlerWeb()//打開爬蟲網頁



// // import esliteComCrawler from 'eslite-com-crawler'; // Here uses development mode as an example
// // async function run(){
// //     const result = await esliteComCrawler(
// //         'Python', // string. Necessary.
// //                  // If you set it as null, it will get an error.
// //         3, // number. Positive integer. Default: 1.
// //               // Every page only shows maximum 20 results.
// //       )
// //     console.log(result);
// // }

 
// // run()


import express from 'express';
import bodyParser from 'body-parser';
import mongo from './mongo';
//import cors from 'cors';
import mongoose from 'mongoose'
import http from 'http' 
import WebSocket from 'ws'
import dotenv from 'dotenv-defaults'
import User from './model/User.js'
import Book from './model/Book.js'
import wsConnect from './wsConnect';
mongo.connect(); 
const app = express()
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })
const db = mongoose.connection  
dotenv.config();



db.once('open', () => {
    console.log("MongoDB connected!");
    // saveUser(8,'mongo')
    wss.on('connection', (ws) => {
        console.log("Open connected") 
        ws.onmessage=wsConnect.onMessage(wss,ws);
        // const sendNowTime = setInterval(()=>{
        //     let clients=wss.clients
        //     clients.forEach(client=>{
        //         client.send("hoyo")
        //     })
        // },5000)
        // ws.on('message',data=>{
        //     console.log(data);
        // })
        // ws.on('message', data => { 
        //     ws.send(data)
        // })

        ws.on('close', () => {
            console.log('Close connected')
        })

    });
});

const PORT=process.env.PORT || 4000;
server.listen(PORT,()=>
    console.log(`example app listening on port ${PORT}!`),
); 
