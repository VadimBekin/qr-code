import { Navigation } from './components/Navigation/Navigation.jsx';
import { QrCodeGenerator } from './components/Generate/QrCodeGenerator.jsx';
import { Routes, Route} from "react-router-dom";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner.jsx";
import { GenerateHistory } from "./components/GenerateHistory.jsx";
import { ScanHistory } from "./components/ScanHistory.jsx";

const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator/>} />
                <Route path="/scan" element={<QrCodeScanner/>} />
                <Route path="/generateHistory" element={<GenerateHistory/>} />
                <Route path="/scanHistory" element={<ScanHistory/>} />
            </Routes>
        </div>

    )
}

export { Layout };