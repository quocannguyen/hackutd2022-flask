import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([{}])
    useEffect(() => {
        fetch("/members").then(
            result => {
                console.log(result)
                return result.json()
            }
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])
    return (
        <div>
        <section>
            {(typeof data.members === "undefined") ? (
                <p>Loading...</p>
            ) : (
                data.members.map((member, index) => {
                    <p key={index}>{member}</p>;
                })
            )}
        </section><div
            className={`relative font-medium w-[1440px] h-[850px] bg-[rgba(223,223,223,1)] overflow-clip font-['Rubik']`}
        >
                <div
                    className="rounded-b-2xl absolute w-[600px] h-[149.05px] left-[420px] top-[397.95px] drop-shadow-lg bg-[rgba(236,236,236,1)]" />
                <div
                    className="rounded-t-2xl absolute w-[600px] h-[106.95px] left-[420px] top-[291px] bg-[rgba(245,245,245,1)]" />
                <p
                    className="absolute text-xl leading-normal text-left text-black inline m-0 w-[273px] left-[591px] top-[352px]"
                >
                    Portfolio ($): 400,000,000
                </p>
                <p
                    className="absolute text-xl leading-normal text-left text-black inline m-0 w-[273px] left-[608px] top-[382px]"
                >
                    {" Invest (%): 10%"}
                </p>
                <p
                    className="absolute text-xl leading-normal text-left text-black inline m-0 w-[273px] left-[588px] top-[412px]"
                >
                    Stock Ticker: SPY
                </p>
                <p
                    className="absolute text-xl leading-normal text-left text-black inline m-0 w-[246px] left-[602px] top-[442px]"
                >
                    Timeframe: 2 Months
                </p>
                <div
                    className="py-0 h-8 absolute gap-6 inline-flex justify-center items-center text-white text-center w-[119px] pl-[11px] pr-[3px] left-[881px] top-[501px] bg-[rgba(98,59,180,1)] overflow-clip rounded-[32px]"
                >
                    <p className="text-lg leading-normal m-0">NEXT</p>
                    <div className="relative w-[21px] h-[22px]">
                        
                    </div>
                </div>
                <div
                    className="h-7 absolute gap-8 text-white text-center w-[539px] left-[450px] top-[63px]"
                >
                    <div>
                        <button
                            className="px-8 py-0 absolute -top-px flex flex-col justify-center items-center w-[119px] h-[31px] left-[139px] drop-shadow-lg bg-[rgba(98,59,180,1)] overflow-clip rounded-[32px]
                            hover:text-gray-800 hover:bg-gray-500 transition ease-in duration-100"
                        >
                           Market
                        </button>
                    </div>
                    <div>
                        <div
                            className="px-8 py-0 absolute left-0 -top-px flex flex-col justify-center items-center w-[119px] h-[31px] drop-shadow-lg bg-[rgba(98,59,180,1)] overflow-clip rounded-[32px]"
                        >
                            <p className="text-base leading-normal m-0">Home</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="py-0 absolute top-0 flex flex-col justify-center items-center pl-[31px] pr-[31px] w-[119px] h-[31px] left-[278px] drop-shadow-lg bg-[rgba(98,59,180,1)] overflow-clip rounded-[32px]"
                        >
                            <p className="text-base leading-normal m-0">Pricing</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="py-0 absolute -top-px flex flex-col justify-center items-center pl-[21px] pr-[21px] w-[119px] h-[31px] left-[417px] drop-shadow-lg bg-[rgba(98,59,180,1)] overflow-clip rounded-[32px]"
                        >
                            <p className="text-base leading-normal m-0">Account</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default App;
