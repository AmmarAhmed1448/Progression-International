import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./PDF/MyDocument";

function App() {
  return (
    <>
      <PDFViewer width="100%" height="800px" >
        <MyDocument />
      </PDFViewer>
    </>
  );
}

export default App;
