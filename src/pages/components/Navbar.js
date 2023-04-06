import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


function Nav() {
    return (
        <nav className={styles.navbar}>
            <h1><Link href="/">NagatoStudio</Link></h1>
            <ul>
                <Link href="/"><li>Home</li></Link>
                <Link href="#services"><li>Our Services</li></Link>
                <Link href="#team"><li>Our Team</li></Link>
                <Link href="#about"><li>About</li></Link>
                <Link href="#contact"><li>Contact</li></Link>
                <Link href="/join"><li>Join Us</li></Link>
            </ul>
        </nav>
    );
}
export default Nav;