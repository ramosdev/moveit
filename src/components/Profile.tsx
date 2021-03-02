import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (

        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/64171423?s=60&v=4" alt="" />
            <div>
                <strong>Matheus Ramos</strong>

                <p>
                    <img src="icons/level.svg" alt="" />
                    Nível {level}
                </p>
            </div>
        </div>
    );
}