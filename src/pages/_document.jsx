import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument(props) {
    const {emotionStyleTags} = props;
  console.log("emotionStyleTags", emotionStyleTags);
    return (
        <Html>
            <Head>
                <meta name="emotion-insertion-point" content=""/>
                <link rel="shortcut icon" href="/icons/favicon.png"/>
                <link rel="manifest" href="/manifest.json"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

