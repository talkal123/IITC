import CoinDetail from "../components/CoinDetail"
import HistoryChart from "../components/HistoryChart"

function CryptoDetail() {
  return (
    <div className="wrapper-container mt-10">
      <HistoryChart />
      <CoinDetail />
    </div>
  )
}

export default CryptoDetail
