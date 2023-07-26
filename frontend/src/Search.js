import {useEffect,useState} from 'react'
import Searchbar from './Searchbar.js';
import Box from '@mui/material/Box';
import Searchlist from './Searchlist.js';
import Typography from '@mui/material/Typography';
import Searchselector from './Searchselector.js';
import styled from 'styled-components';
import {useChat} from './useChat.js';
import './index.css';
import {useParams, useLocation} from 'react-router-dom';

const Rowdiv=styled.div`
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	position:absolute;
	padding-right:50px;
	width:95%;
`;
export default function Search(){
const tmp_result=[
        {
            name:"金庸作品集(新修版/36冊合售)",
            author:"金庸",
			img:"https://s.eslite.dev/b2b/newItem/2023/05/29/20230529112732D9000.jpg",
            description:"全球億萬讀者的共同期待， 世紀武俠文學的經典再造！ 我的金庸和你不一樣！ ◎金庸親筆，世紀新修版，純金質感，經典新封面。 雪>山飛狐、飛狐外傳、連城訣、俠客行、書劍恩仇錄、射鵰英雄傳、碧血劍、神鵰俠侶、倚天屠龍記、天龍八部、笑傲江湖、鹿鼎記。"
        },
        {
            name:"越過人生的刀鋒:金庸筆下的女子",
            author:"六神累累",
			img:"https://s.eslite.dev/upload/product/o/2682321417002/20221229034846858722.jpg",
            description:""
        },
        {
            name:"金庸作品集",
            author:"金庸",
			img:"https://s.eslite.dev/Upload/Product/201107/o/634468638513183750.jpg",
            description:"曹雪芹花了十年修訂《紅樓夢》，金庸也用十年的時間，以「刪」與「改」為原則，大幅修訂原載於報紙與最初印行版本後的作品。此版>本通稱為「舊版」，流通時間最久，發行量最大，也是金迷們最熟悉的版本。"
        },
        {
            name:"董培新話說金庸",
            author:"董哥",
			img:"https://s.eslite.dev/upload/product/o/2681929160006/20201014034349380075.jpg",
            description:"畫說金庸十五部傳奇小說 新增訂版本 收錄從未出版新畫作 l 董先生憑着為金庸小說及其他文學小說繪圖而得名，在業界甚具名氣，他的畫作因為絕不重繪，所以現時大部分作品的真本已被收藏家購入，不予"
        },
        {
            name:"金庸卷",
            author:"金庸",
			img:"https://s.eslite.dev/Upload/Product/201607/o/636051186427470000.jpg",
            description:"一本全面呈現金庸多種寫作題材的文集。本書收入了金庸的武俠小說（節選）、社評、影評、專欄文章、翻譯小說、政論文章及史學研究>論文。從數以千萬言的金庸的多種話語寫作中擷取代表性作品結為一集，並附有對其寫作的導讀、生平及寫作年表。"
        }
    ]
	const [rcount,setRcount]=useState(5);
	const [key,setKey]=useState("");
	const {result,Search}=useChat();
	const {keyword}=useParams();
	const [showresult,setShowresult]=useState([])
	let location = useLocation();
	let flag = false;
    
    useEffect(()=>{
        setShowresult(tmp_result);
        Search(keyword);
        flag = true;
    },[location])

    useEffect(()=>{
		console.log("hihihi")
		setShowresult(result.data);
		setRcount(result.num);
	    flag = true;
    },[result])
	
    useEffect(()=>{
		console.log("key:",keyword)
        if (flag){
		setKey(keyword);
        flag = false;
        }
        flag = true;
	},[keyword])
	
    return (
	<div className = "FrontPage">
		<Searchbar rcount={rcount} keyword={keyword}/>
		 <Box
    		 sx={{
       		 width:"70%",
			padding:5,
			pt:2,
		/*	backgroundColor:"primary.dark",*/
			}}
		 >
  		{/*<Typography variant="subtitle1" sx={{pl:5,}} gutterBottom>
			{`About ${rcount} results`}
		</Typography>*/}
        <Rowdiv>
			<Searchlist result={result.data} keyword={key}/>
			<Searchselector/>
		</Rowdiv>
		</Box>
	</div>
	);
}
