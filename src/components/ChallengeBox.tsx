import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return (


        <div className={styles.challengeBoxContainer}>

            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button 
                        type="button" 
                        className={styles.challengeFailedButton}
                        onClick={handleChallengeFailed}
                        >
                            
                            Falhei
                        
                        </button>
                        <button type="button" 
                        className={styles.challengeSucceededButton}
                        onClick={handleChallengeSucceeded} 
                        >
                            Completei
                            </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>Complete um ciclo para receber um desafio</strong>
                        <img src="icons/level-up.svg" alt="" />
                        <p>
                           
                             Suba de nível completando os desafios.
                        </p>
                    </div>)}
        </div>
    );
}