import React from 'react'

const closeApp = () => {
    window.close()
}
const closeAppContent = () => {
    return (
        <label>Tem certeza que deseja sair?</label>
    )
}

export{
    closeApp,
    closeAppContent
}