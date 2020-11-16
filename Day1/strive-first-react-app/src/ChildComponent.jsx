import React from 'react'

const ChildComponent = (props) => {
    console.log(props)
    return <p>I'm a child {props.strivers}, my counter is: {props.counter}</p>
}

export default ChildComponent