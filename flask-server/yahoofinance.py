import yfinance
import StockData

def getStockDataArray(symbol, period="1mo", interval="1d",
                start=None, end=None, prepost=False, actions=True,
                auto_adjust=True, back_adjust=False, keepna=False,
                proxy=None, rounding=False, timeout=None, **kwargs):
    history = yfinance.Ticker(symbol).history(period="1mo", interval="1d",
                start=None, end=None, prepost=False, actions=True,
                auto_adjust=True, back_adjust=False, keepna=False,
                proxy=None, rounding=False, timeout=None, **kwargs)
    stockDataArray = []
    for i in range(len(history)):
        open = history["Open"][i]
        high = history["High"][i]
        low = history["Low"][i]
        close = history["Close"][i]
        volume = history["Volume"][i]
        dividends = history["Dividends"][i]
        stockSplits = history["Stock Splits"][i]
        stockData = StockData.StockData(symbol, open, high, low, close, volume, dividends, stockSplits)
        stockDataArray.append(stockData)
    return stockDataArray