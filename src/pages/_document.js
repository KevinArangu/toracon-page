import GoogleTagBody from "@/components/common/Heads/GoogleTagBody"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <GoogleTagBody />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
