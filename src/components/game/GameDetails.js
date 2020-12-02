import React, { useContext, useEffect, useState } from "react"
import { GameContext } from "./GameProvider.js"

export const GameDetails = (props) => {
    const { games, getGameById } = useContext(GameContext)

    const [setGames] = useState()

    useEffect(() => {
        const gameId = parseInt(props.match.params.gameId)
        getGameById(gameId)
        .then(setGames)
    }, [])

    return (

        <section className="game">
            <div className="game__title">Title: {games.title}</div>
            <div className="game__designer">Designer: {games.designer}</div>
            <div className="game__year">Year Released: {games.year_released}</div>
            <div className="game__players">{games.number_of_players}</div>
            <div className="game__time">Estimated Time to Play: {games.play_time}</div>
            <div className="game__age">Age Recommendation: {games.age_rec}</div>
            <div className="game__categories">Categories: </div>
        </section>
    )
}
