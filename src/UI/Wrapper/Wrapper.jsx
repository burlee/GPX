import React from 'react'
import styles from './Wrapper.scss'

export default function Wrapper(props) {
  return (
    <div className={styles.Wrapper}>
      {props.children}
    </div>
  )
}
