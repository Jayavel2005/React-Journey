import styles from "./Button.module.css";

function Button() {

  const hello = (e) =>{
    e.target.textContent = "Clicked 😀";
  }

  return (
    <>
      <button className={styles.button} onClick={(e)=>hello(e)}>Click 😀</button>
    </>
  );
}

export default Button;