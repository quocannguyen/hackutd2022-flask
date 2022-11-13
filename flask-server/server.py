from flask import Flask
from flask_cors import CORS
import yahoofinance

app = Flask(__name__)
# CORS(app)


# Members API Route
@app.route("/members")
def members():
    return {
        "members": ["Member1", "Member2", "Member3"],
        "yahoofinance": yahoofinance.GetFacebookInformation.earnings
    }


if __name__ == "__main__":
    data = yahoofinance.getStockDataArray("SPY", period="ytd")
    for datum in data:
        print(datum)
    # app.run(debug=True)
