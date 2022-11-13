class StockData:
    def __init__(self, symbol, open, high, low, close, volume, dividends, stockSplits) -> None:
        self.symbol = symbol
        self.open = open
        self.high = high
        self.low = low
        self.close = close
        self.volume = volume
        self.dividends = dividends
        self.stockSplits = stockSplits

    def __str__(self) -> str:
        return (self.symbol, self.open, self.high, self.low, self.close, self.volume, self.dividends, self.stockSplits).__str__()