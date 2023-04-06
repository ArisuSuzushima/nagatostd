import styles from '@/styles/About.module.css'

function About(){
    return (
        <div id="about" className={styles.about}>
            <h1>About Us</h1>
            <p>
                NagatoStudio is a Developer Studio that was founded in 2020. We are a group of developers who are passionate about creating new things. We are currently working on a few hardware and software projects. We are also looking for new members to join our team. If you are interested, please contact us.
            </p>
        </div>
    )
}

export default About;