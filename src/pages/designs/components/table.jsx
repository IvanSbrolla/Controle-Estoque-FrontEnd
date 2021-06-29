import React from 'react'
import './components.css'
import '../../configs.css'

export default (props) => {
    const tableHead = props.tableHead
    const tableContent = props.tableContent

    return (
        <table className='flex flexColumn tableDefault'>
            <tr className='flex'>
                {createThTable(tableHead)}
            </tr>
            {createContentTable(tableContent)}
        </table >
    )
}

/*  Tables Css:
-tableDefault

*/

const createThTable = (arr) => {
    return (
        arr.map((val, i) => {
            return (
                <th className={`flex ${setThIdClass(val)}`}>
                    {val}
                </th>
            )
        })
    )
}

const createContentTable = (arr) => {
    return (
        arr.map((val, i) => {
            return (
                createRowsTable(val)
            )
        })

    )
}

const createRowsTable = (val) => {
    return (
        <tr className='flex'>
            {
                Object.entries(val).map((valArr, i) => {
                    return (
                        createCellsTable(valArr)
                    )
                })
            }
        </tr>
    )
}

const createCellsTable = (valArr) => {

    return (
        <td className={`flex ${setTdIdClass(valArr[0])}`}>
            {
                valArr[1]
            }
        </td>
    )
}

const setThIdClass = (val) => {
    if (val == 'Id') return 'thId'
}
const setTdIdClass = (val) => {
    if (val == 'Id') return 'tdId'
}
