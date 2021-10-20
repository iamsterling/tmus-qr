import React from 'react'
import { Context, Provider } from '../utils/context/data'


export default function App({ Component, pageProps }) {
  // probably links providers here

  return (
    <Provider>
      <Component {...pageProps}/>
    </Provider>
  )
}
