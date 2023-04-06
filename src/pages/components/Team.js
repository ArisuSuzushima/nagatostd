import Link from 'next/link'
import styles from '@/styles/Team.module.css'

function Team() {
    return (
        <div id="team" className={styles.team}>
            <h1>Our Team</h1>
            <p>NagatoStudio can&apos;t exist without theses people.</p>
            <div className={styles.team_container}>
                <div className={styles.team_member}>
                    <img src="https://avatars.githubusercontent.com/u/54537867?v=4" alt="Nagato" />
                    <h2>Nagato</h2>
                    <p>Founder/Developer/Designer/Ops</p>
                    <p>Programming Languages: Python, JavaScript, HTML, CSS, PHP, SQL, Bash. Go</p>
                    <p>Pronouns: She/Her</p>
                    <p>Website: <Link href="https://blog.ctri.cc">blog.ctri.cc</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Team;