import styles from "./Card.module.css";

/**
 * 리액트 스타일 적용
 * 1. 기본적인 인라인 스타일 적용
 *  - 객체의 형태로 style 적용 가능
 *  - css속성의 이름은 카멜케이스로 작성
 *
 * 2. 일반적인 CSS 사용법
 * CSS파일을 분리하여 컴포넌트에 적용
 * import를 해서 가져와야 적용 가능
 * 컴포넌트별로 CSS파일을 분리할수있다
 * 문제점 : 모든 컴포넌트가 같은 CSS파일을 공유
 * 클래스명이 충돌할 가능성이 있음
 *
 * 3. 스타일 모듈화
 * 파일 확장자를 module.css로 하면 css가 컴포넌트단위로
 * 범위가 한정된다.
 *Style을 객체화 하여 사용할 수 있다
 */

export default function Card({ title, content, img, ...divStyle }) {
     return (
          <div className={styles.card} style={{ ...divStyle }}>
               <img src={img} alt="" />
               <h2 className={styles["card-title"]}>{title}</h2>
               <p className={styles["card-content"]}>{content}</p>
          </div>
     );
}
