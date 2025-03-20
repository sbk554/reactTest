// TabButton.jsx

export default function TabButton({ label, onSelect, isSelected , children }) {
     return (
          <li>
               {/* 클릭 이벤트 적용방법 onClick 
               어떤 html element든 적용 가능하다
               함수를 넣을땐 중괄호안에 이름만 넣는다. 
               이름만 넣지않고 ()를 붙이면
               클릭하지 않아도 함수가 실행된다.
               */}
               <button className={isSelected?"active":""} onClick={() => onSelect(label)}>{children}</button>
          </li>
     );
}
