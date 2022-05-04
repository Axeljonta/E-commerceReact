import styles from './styles/footer.module.css';

function Footer (){
    return (
       <div className={styles.footer}>
           <h3>Hecho con ❤ por: Axel Jontade, contacto <a target='_blank' href="https://www.linkedin.com/in/axel-jontade/">Linkedin</a></h3>
       </div>
    )
}

export default Footer;