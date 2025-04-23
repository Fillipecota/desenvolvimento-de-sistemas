import { PiArrowCircleDown, PiArrowCircleUp, PiCurrencyCircleDollar, PiCurrencyDollar } from 'react-icons/pi'
import styles from './styles.module.css'
import { formatCurrency } from '@/utils/formatCurrency'

export default function Summary() {
    const cards = [{

    }]
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <header>
                    <span>ENTRADA</span>
                    <PiArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>{formatCurrency(24000)}</strong>
            </div>

            <div className={styles.card}>
                <header>
                    <span>SAIDA</span>
                    <PiArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>{formatCurrency(10000)}</strong>
            </div>

            <div className={styles.cardGreen}>
                <header>
                    <span>TOTAL</span>
                    <PiCurrencyDollar size={32} color="#ffffff" />
                </header>
                <strong>{formatCurrency(14000)}</strong>
            </div>
        </div>
    )
}