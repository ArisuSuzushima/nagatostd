import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'


function Nav() {
    return (
        <nav className={styles.navbar}>
            <h1><Link href="/">NagatoStudio</Link></h1>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#services">Our Services</Link></li>
                <li><Link href="#team">Our Team</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#contact">Contact</Link></li>
                <li><Link href="/join">Join Us</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;