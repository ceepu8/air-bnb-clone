import Document, { DocumentContext, DocumentInitialProps } from "next/document";
// import { createGetInitialProps } from "@mantine/next";

// const getInitialProps = createGetInitialProps();
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
}

export default MyDocument;
