import Head from 'next/head'
import ContactForm from './contact-form'
import { Inter } from 'next/font/google'
import NoSSR from 'react-no-ssr';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <NoSSR>

      <>
        <Head>
          <title>WhatsUp</title>
          <meta name="description" content="Send Instant Message to new WhatsApp contacts without saving them!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <ContactForm />
        </main>
      </>
    </NoSSR>

  )
}
