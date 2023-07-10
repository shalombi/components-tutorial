import { useState, useEffect, useRef } from "react"

export const Games = () => {

    // let gGames = [
    //     { _id: 'g_101', name: 'game 1', price: 100 },
    //     { _id: 'g_102', name: 'game 2', price: 200 },
    //     { _id: 'g_103', name: 'game 3', price: 300 }
    // ]

    // useEffect(() => {
    //     sum(1, '2')
    //     sum2(1,'2')
    // }, [])

    // const sum = (a, b) => {
    //     const sum_ = a + b
    //     console.log(sum_)
    //     console.log(typeof (sum_))
    //     return sum_
    // }

    // const sum2 = (a, b) => {
    //     const sum_ = a - b
    //     console.log(sum_)
    //     console.log(typeof (sum_))
    //     return sum_
    // }

    const [selected, setSelected] = useState('')

    // console.log(first)
    const [cart, setCart] = useState([])

    const [games, setGames] = useState([
        { _id: 'g_101', name: 'game 1', price: 100 },
        { _id: 'g_102', name: 'game 2', price: 200 },
        { _id: 'g_103', name: 'game 3', price: 300 }
    ])

    const onRemove = (gameId) => {
        console.log(gameId)
        const filteredGames = games.filter(g => g._id !== gameId)
        setGames(filteredGames)
    }

    const onAddToCart = (g) => {
        setCart([...cart, g])
    }

    const sumTotalPrice = (entities) => {
        const total = entities.reduce((accumulator, entety) => { return accumulator + entety.price }, 0)
        return total
    }
    const onAddGame = () => {
        const price = +prompt('price?')
        const name = prompt('name?')
        const newGame = { _id: generateRandomId(), name, price }
        setGames([...games, newGame])
    }

    const onRemoveFromCart = (gameId) => {
        console.log('gameId:', gameId)
        const newCart = cart.filter(g => g._id !== gameId)
        setCart(newCart)
    }

    const onSelectGame = (gameId) => {
        console.log(gameId)
        const idx = games.findIndex(g => g._id === gameId)
        console.log('idx:', idx)
        setSelected(games[idx])
    }

    const onCloseModal = () => {
        setSelected('')
    }

    // util
    function generateRandomId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';

        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomId += characters[randomIndex];
        }

        return randomId;
    }


    return (
        <section className="games-cmp">
            <h3>Favorite Games</h3>


            <button onClick={() => onAddGame()}>add game</button>

            {games?.map(g => {
                return (
                    <li key={g._id} onClick={() => onSelectGame(g._id)}>
                        <div> {g.name}</div>
                        <div>price:{g.price}</div>
                        <button onClick={() => onRemove(g._id)}>x</button>
                        <button onClick={() => onAddToCart(g)}>add to cart</button>
                    </li>
                )
            })}
            {/* <hr /> */}
            {selected && <section className="details">
                <h1> details:</h1>
                <div>  name : {selected.name}</div>
                <div>  price: {selected.price}</div>

                <button onClick={onCloseModal} >x</button>
            </section>}

            <section>
                <hr />
                <section>
                    cart:
                    {cart.length > 0 && cart.map(g => <li>{g.name} | price: {g.price}₪ |
                        <button onClick={() => onRemoveFromCart(g._id)} >x</button></li>)}
                </section>
                <hr />
                <section>
                    total price:
                    {cart.length > 0 && <div>{sumTotalPrice(cart)}</div>}
                </section>
            </section>
        </section>
    )
}
