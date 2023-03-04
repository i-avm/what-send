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
          <title>WhatSend</title>
          <meta name="description" content="Send WhatsApp Messages to numbers without saving into contacts" />
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
