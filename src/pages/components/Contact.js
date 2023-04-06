import styles from '@/styles/Contact.module.css'

function Contact(){
    return (
        <div id="contact" className={styles.contact}>
            <h1>Contact us</h1>
            <p>
                Email: <a href="mailto:iwaekiri@gmail.com">iwaekiri@gmail.com</a><br/>
                QQ: 1489805848<br/>
                Discord: isNagatoYuki#6898<br/>
                Telegram: @iwaekiri<br/>
            </p>
        </div>
    )
}

export default Contact;