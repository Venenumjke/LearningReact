import React from 'react'
import TranslateTest from '../../components/TranslateTest'

import styles from "./styles";

function mainScreen() {
    return (
        <div style={styles.contentWrapper}>
            <header style={styles.header}>
                <h4 style={styles.titleText}>Header</h4>
            </header>
            <TranslateTest/>
        </div>
    );
}

export default mainScreen;
