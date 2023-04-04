import React from 'react'

import styles from './styles.module.scss'

function Button({variant = "ghost",children, ...props}) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>{children}</button>
  )
}

export  {Button}