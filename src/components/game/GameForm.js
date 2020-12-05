import React, { useContext, useState, useEffect } from "react"
import { GameContext } from "./GameProvider.js"

export const GameForm = props =>{
    const { createGame, getCategories, categories } = useContext(GameContext)

    const [currentGame, setCurrentGame] = useState ({
        ageRec: 8,
        numberOfPlayers: 1,
        description: "",
        title: "",
        designer: "",
        playTime: "",
        categoryId: 1,
        gamePic: "",
        rating: 0,
        yearReleased: 2020,
    })

    useEffect(() => {
        getCategories()
    }, [])

    const handleControlledInputChange = (event) => {
        const newGameState = Object.assign({}, currentGame)
        newGameState[event.target.name] = event.target.value 
        setCurrentGame(newGameState)
    }

    return (
        <form className="gameForm">
        <h2 className="gameForm__title">Register New Game</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" required autoFocus className="form-control"
                    defaultValue={currentGame.title}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="designer">Designer: </label>
                <input type="text" name="designer" required autoFocus className="form-control"
                    defaultValue={currentGame.designer}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="numberOfPlayers">Number of Players: </label>
                <input type="text" name="numberOfPlayers" required autoFocus className="form-control"
                    defaultValue={currentGame.numberOfPlayers}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="gamePic">Game Image URL: </label>
                <input type="text" name="gamePic" required autoFocus className="form-control"
                    defaultValue={currentGame.gamePic}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="yearReleased">Year Released: </label>
                <input type="text" name="yearReleased" required autoFocus className="form-control"
                    defaultValue={currentGame.yearReleased}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="playTime">Estimated Time To Play: </label>
                <input type="text" name="playTime" required autoFocus className="form-control"
                    defaultValue={currentGame.playTime}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="ageRec">Age Recommendation: </label>
                <input type="text" name="ageRec" required autoFocus className="form-control"
                    defaultValue={currentGame.ageRec}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" required autoFocus className="form-control"
                    defaultValue={currentGame.description}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
        <div className="form-group">
                <label htmlFor="categoryId">Game Category: </label>
          < select
            onChange={handleControlledInputChange}
            className="browser-default custom-select" 
            name="categoryId" >
            {
              categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)
            }
          </select >
        </div>
      </fieldset>
      <button type="submit"
        onClick={evt => {
            // Prevent form from being submitted
            evt.preventDefault()

            const game = {
                title: currentGame.title,
                description: currentGame.description,
                designer: currentGame.designer,
                yearReleased: parseInt(currentGame.yearReleased),
                numberOfPlayers: parseInt(currentGame.numberOfPlayers),
                timeToPlay: parseInt(currentGame.playTime),
                ageRec: parseInt(currentGame.ageRec),
                categoryId: parseInt(currentGame.categoryId),
                rating: parseInt(currentGame.rating),
                gamePic: currentGame.gamePic
            }

            createGame(game).then(() => props.history.push({ pathname: "/games" }))
        }}
        className="btn btn-2 btn-sep icon-create">Save</button>
    </form>
    )
}
