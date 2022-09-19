import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DatasetProvider from '../dataset/datasetContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DatasetProvider>
      <Component {...pageProps} />
    </DatasetProvider>
  )
}

export default MyApp
