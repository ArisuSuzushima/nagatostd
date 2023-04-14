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
                <div className={styles.team_member}>
                    <img src="/0.png" alt="Nagato" />
                    <h2>Nagato&apos;s Laptop</h2>
                    <p>Co-Founder/Developer</p>
                    <p>Programming Languages: Any language that Nagato uses</p>
                    <p>Pronouns: It/Its</p>
                    <p>Website: <Link href="https://lenovo.com">lenovo.com</Link></p>
                </div>
                <div className={styles.team_member}>
                    <img src="/1.png" alt="Nagato" />
                    <h2>Nagato&apos;s Cat #1</h2>
                    <p>Developer</p>
                    <p>Programming Languages: Meow</p>
                    <p>Pronouns: He/His</p>
                    <p>Website: Meow://MeowMeowMeow.Meow/</p>
                </div>
                <div className={styles.team_member}>
                    <img src="/2.png" alt="Nagato" />
                    <h2>Nagato&apos;s Cat #2</h2>
                    <p>Developer</p>
                    <p>Programming Languages: Meow</p>
                    <p>Pronouns: She/Her</p>
                    <p>Website: Meow://MeowMeowMeow.Meow/</p>
                </div>
                <div className={styles.team_member}>
                    <img src="/3.png" alt="Nagato" />
                    <h2>Nagato&apos;s Cat #3</h2>
                    <p>Developer</p>
                    <p>Programming Languages: Meow</p>
                    <p>Pronouns: He but She</p>
                    <p>Website: Meow://MeowMeowMeow.Meow/</p>
                </div>
                <div className={styles.team_member}>
                    <img src="/4.png" alt="Nagato" />
                    <h2>Nagato&apos;s Cat #4</h2>
                    <p>Developer</p>
                    <p>Programming Languages: Meow</p>
                    <p>Pronouns: She/Her</p>
                    <p>Website: Meow://MeowMeowMeow.Meow/</p>
                </div>
                <div className={styles.team_member}>
                    <img src="/5.png" alt="Nagato" />
                    <h2>Nagato&apos;s Cat #5</h2>
                    <p>Developer</p>
                    <p>Programming Languages: Meow</p>
                    <p>Pronouns: She/Her</p>
                    <p>Website: Meow://MeowMeowMeow.Meow/</p>
                </div>
            </div>
        </div>
    );
}

export default Team;