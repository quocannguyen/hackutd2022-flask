import {useNavigate} from "react-router-dom"
import Context from "../context/Context";
import {useContext} from "react"

function AnalysisPage() {
  const context = useContext(Context)
  const navigate = useNavigate();
    return(
        <div
        className={`relative font-medium w-[1440px] h-[865px] bg-[rgba(223,223,223,1)] overflow-clip font-['Rubik']`}
      >
        <div
          className="absolute w-[600px] h-[3px] left-[420px] top-[173px] drop-shadow-lg"
        >
          <div
            className="inset-0 rounded-t-2xl absolute bg-black w-[600px]"
           />
        </div>
        <p
          className="absolute text-xl leading-normal text-left text-black inline m-0 w-[219px] left-[760px] top-[131px]"
        >
          Timeframe: {context.timeframe}
        </p>
        <p
          className="absolute text-xl leading-normal text-left text-black inline m-0 w-[472px] left-[484px] top-[131px]"
        >
          Stock Ticker: {context.stock}
        </p>
        <div
          className="h-7 absolute gap-8 text-white text-center w-[539px] left-[450px] top-[63px]"
        >
          <div>
            <div
              className="px-8 py-0 absolute -top-px flex flex-col justify-center items-center w-[119px] h-[31px] left-[139px] drop-shadow-lg bg-[rgba(98,59,180,1)] overflow-clip rounded-[32px]"
            >
              <p className="text-base leading-normal m-0">Market</p>
            </div>
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
    )
}

export default AnalysisPage;