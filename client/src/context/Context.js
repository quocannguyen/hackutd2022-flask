import { createContext, useState } from "react";

const Context = createContext({
    porfolio: 0,
    invest: 0,
    stock: "",
    timeframe: "",
    setPortfolio: (value) => {},
    setInvest: (value) => {},
    setStock: (value) => {},
    setTimeframe: (value) => {}
})

export function ContextProvider(props) {
    const [porfolioState, setPortfolioState] = useState(0)
    const [investState, setInvestState] = useState(0)
    const [stockState, setStockState] = useState("")
    const [timeframeState, setTimeframeState] = useState("")

    const context = {
        porfolio: porfolioState,
        invest: investState,
        stock: stockState,
        timeframe: timeframeState,
        setPortfolio: setPortfolioState,
        setInvest: setInvestState,
        setStock: setStockState,
        setTimeframe: setTimeframeState
    }
    return <Context.Provider value={context}>
        {props.children}
    </Context.Provider>
}

export default Context