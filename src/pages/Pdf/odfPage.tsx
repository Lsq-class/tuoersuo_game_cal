import { Document, Page, pdfjs } from "react-pdf";

interface Iprops {
    
}
const MyPdfDocument = (props: Iprops) => {
    return (
      <Document>
        <Page size={{ width: 708, height: 708 / 0.7 }} style={styles.page}>
          <View>
            <Image src="https://www.example.com/bg.png" />
          </View>
        </Page>
  
        <Page size={{ width: 708, height: 708 / 0.7 }} style={styles.page}>
          <View>
            <Image src="https://www.example.com/bg.png" />
          </View>
        </Page>
      </Document>
    );
  };
  