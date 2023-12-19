import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
    return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/images/logo.png"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
    );
}

