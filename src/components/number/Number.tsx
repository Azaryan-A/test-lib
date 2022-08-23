import * as React from 'react'

interface Props {
  number: number
}

export const NumberComponent = ({ number }: Props) => {
  return <div >Example Component 2: {number}</div>
}
