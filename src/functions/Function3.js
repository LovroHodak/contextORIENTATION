import React, {useState} from 'react'

export default function Function3() {
    const [items, setItems] = useState([
        {name: 'bike', price: 100},
        {name: 'Tv', price: 200},
        {name: 'album', price: 10},
        {name: 'book', price: 5},
        {name: 'phone', price: 500},
        {name: 'computer', price: 1000},
        {name: 'keyboard', price: 25}
    ])
    const [finden, setFinden] = useState({name: 'this-will-be-bike', price: 0})

    const filter100 = () => {
        let filtered = items.filter((item) => {
            return item.price >= 100
        })
        setItems(filtered)
    }

    const findBike = () => {
        let found = items.find((item) => {
            return item.name === 'bike'
        })
        setFinden(found)
    }

    const eachPrice = () => {
        items.forEach((item) => {
            console.log(item.price)
        })
    }

    const reset = () => {
        setItems([
            {name: 'bike', price: 100},
            {name: 'Tv', price: 200},
            {name: 'album', price: 10},
            {name: 'book', price: 5},
            {name: 'phone', price: 500},
            {name: 'computer', price: 1000},
            {name: 'keyboard', price: 25}
        ])

        setFinden({name: 'this-will-be-bike', price: 0})
      }

    return (
        <div style={{ border: "2px solid green", padding: 5 }}>
            <h1>FILTER (and MAP), FIND, forEach</h1>
            {items.map((item, i) => {
                return (<div key={i}>
                    <p>{item.name} - {item.price}€</p>
                </div>)
            })}
            <button onClick={filter100}>FILTER</button>
            <button onClick={findBike} style={{marginLeft: 10}}>FIND bike</button> 
            <button onClick={eachPrice} style={{marginLeft: 10}}>ForEach - check console</button>
            <p>{finden.name}</p>
            <p>{finden.price}€</p>
            <br></br>
            <button onClick={reset} style={{marginTop: 10, color: 'red'}}>RESET</button>
        </div>
    )
}
