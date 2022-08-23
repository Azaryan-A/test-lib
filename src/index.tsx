import * as React from 'react'
import { NumberComponent } from './components/number/Number'
import styles from './styles.module.css'

interface Props {
  text: string
  number: number
}

export const ExampleComponent = ({ text, number }: Props) => {
  return (
    <div>
      <NumberComponent number={number}/>
      <div className={styles.test}>Example Component 1: {text}</div>
    </div>
  )
}
