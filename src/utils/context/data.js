import React from 'react'

export const Context = React.createContext()

export const Provider = (props) => {
    let [data, setData] = React.useState()
    let [org, setOrg] = React.useState('T-Mobile')
    let [primary, setPrimary] = React.useState()


    let [activeTab, setActiveTab] = React.useState('contact')


    React.useEffect(() => {
        if (org === 'T-Mobile') {
            return (
                setPrimary('#e20074')
            )
        } if (org === 'Metro') {
            return (
                setPrimary('#46196E')
            )
        }
        return null
    }, [org])
 



    return(
        <Context.Provider
            value={{
                data, setData,
                org, setOrg,
                primary, setPrimary,
                activeTab, setActiveTab,
            }}>
            {props.children}
        </Context.Provider>
    )
}