import React, { PureComponent } from 'react';
// import styles from './file.css';
import './index.scss'

import { Document, Page, pdfjs } from "react-pdf";
// const pdf = require("./pdf.mjs")
// import * as PdfJs from 'pdfjs-dist/legacy/build/pdf.js';
// const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.entry');


pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.js`;

interface IProps {
    prfUrl: any
}
interface IState {
    pageNumber: number,
    pageNumberInput: number,
    pageNumberFocus: boolean,
    numPages: number,
    pageWidth: number,
    fullscreen: boolean
}
export default class PdfPreview extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            pageNumber: 1,
            pageNumberInput: 1,
            pageNumberFocus: false,
            numPages: 1,
            pageWidth: 503,
            fullscreen: false
        };
    }
    onDocumentLoadSuccess = ({ numPages = 1 }) => {
        this.setState({ numPages: numPages });
    };
    lastPage = () => {
        if (this.state.pageNumber == 1) {
            return;
        }
        const page = this.state.pageNumber - 1;
        this.setState({ pageNumber: page, pageNumberInput: page });
    };
    nextPage = () => {
        if (this.state.pageNumber == this.state.numPages) {
            return;
        }
        const page = this.state.pageNumber + 1;
        this.setState({ pageNumber: page, pageNumberInput: page });
    };
    onPageNumberFocus = (e) => {
        this.setState({ pageNumberFocus: true });
    };
    onPageNumberBlur = (e) => {
        this.setState({
            pageNumberFocus: false,
            pageNumberInput: this.state.pageNumber,
        });
    };
    onPageNumberChange = (e) => {
        let value = e.target.value;
        value = value <= 0 ? 1 : value;
        value = value >= this.state.numPages ? this.state.numPages : value;
        this.setState({ pageNumberInput: value });
    };
    toPage = (e) => {
        if (e.keyCode === 13) {
            this.setState({ pageNumber: Number(e.target.value) });
        }
    };

    pageZoomOut = () => {
        if (this.state.pageWidth <= 503) {
            return;
        }
        const pageWidth = this.state.pageWidth * 0.8;
        this.setState({ pageWidth: pageWidth });
    };
    pageZoomIn = () => {
        const pageWidth = this.state.pageWidth * 1.2;
        this.setState({ pageWidth: pageWidth });
    };

    pageFullscreen = () => {
        if (this.state.fullscreen) {
            this.setState({ fullscreen: false, pageWidth: 600 });
        } else {
            this.setState({ fullscreen: true, pageWidth: window.screen.width - 40 });
        }
    };

    render() {
        const { prfUrl } = this.props
        const { pageNumber,
            pageNumberInput,
            pageNumberFocus,
            numPages,
            pageWidth,
            fullscreen } = this.state
        return (
            <div className="pdf-view">
                {pdfjs.GlobalWorkerOptions.workerSrc}
                <div className="container">
                    <Document file={prfUrl} onLoadSuccess={this.onDocumentLoadSuccess}>
                        <Page renderTextLayer={false} renderAnnotationLayer={false} renderMode='canvas' pageNumber={pageNumber} width={pageWidth} loading={'加载中...'} />

                    </Document>
                </div>
                <div className="page-tool">
                    <div className="page-tool-item" onClick={this.lastPage}>
                        {" "}
                        上一页
                    </div>
                    <div className="page-tool-item" onClick={this.nextPage}>
                        {" "}
                        下一页
                    </div>
                    <div className="input">
                        <input
                            value={pageNumberFocus ? pageNumberInput : pageNumber}
                            onFocus={this.onPageNumberFocus}
                            onBlur={this.onPageNumberBlur}
                            onChange={this.onPageNumberChange}
                            onKeyDown={this.toPage}
                            type="number"
                        />{" "}
                        / {numPages}
                    </div>
                    <div className="page-tool-item" onClick={this.pageZoomIn}>
                        {" "}
                        放大
                    </div>
                    <div className="page-tool-item" onClick={this.pageZoomOut}>
                        {" "}
                        缩小
                    </div>
                    <div className="page-tool-item" onClick={this.pageFullscreen}>
                        {fullscreen ? "恢复默认" : "适合窗口"}
                    </div>
                </div>

            </div>
        );
    }
}
