import PdfPreview from "../Pdf"
import pdf from "../../assets/java.pdf"

export function Web() {
    // debugger
    console.log(pdf, "aaa");

    return (
        <div className="App">
            <div>lsq</div>
            <PdfPreview prfUrl={pdf} />
        </div>
    )
}

export default Web
