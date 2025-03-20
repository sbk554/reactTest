import "./App.css";
import reactImg from "./assets/react.png";
import image2 from "./assets/images2.png";
import image3 from "./assets/image3.jpg";
import Card from "./components/Card";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { data } from "./data.js";
import { cardData } from "./cardData.js";

function App() {
     let [ menuTitle, setMenuTitle] = useState();

     let cardDataFor = () => {
          const result = [];
          for(let i = 0; cardData.length > i; i++){
               result.push(
                    <Card {...cardData[i]}/>
               )
          }
          return result;
     }

     return (
          <div className="app">
               <h1>React Props 연습</h1>
               <div className="card-container">
                    {/* //Card 컴포넌트 만들기 */}
                    {/* {cardDataFor()} */}
                    {cardData.map((data,index)=> (<Card key={index} {...data}/>))}
               </div>
               <section className="example">
                    <h2>예시</h2>
                    <menu>
                         <TabButton isSelected={menuTitle === "data"} label="data" onSelect={() => {setMenuTitle("data")}}>
                              <span>데이터 전달</span>
                         </TabButton>
                         <TabButton isSelected={menuTitle === "component"} label="component" onSelect={() => {setMenuTitle("component")}}>
                              <span>재사용 컴포넌트</span>
                         </TabButton>
                         <TabButton isSelected={menuTitle === "style"} label="style" onSelect={() => {setMenuTitle("style")}}>
                              <span>동적 스타일링</span>
                         </TabButton>
                    </menu>
                    <h3>{menuTitle}</h3>
                    {menuTitle === undefined?(
                         <p>주제를 선택해주세요</p>
                    ):(
                         <div style={{backgroundColor:data[menuTitle].backgroundColor}}>
                         <h3>{data[menuTitle].title}</h3>
                         <p>{data[menuTitle].content}</p>
                         <pre>
                              <code>{data[menuTitle].code}</code>
                         </pre>
                    </div>
                    )}
               </section>
          </div>
     );
}

export default App;
