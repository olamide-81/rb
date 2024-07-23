import "../styles/globals.css";
import { VisualEditing } from '@sanity/visual-editing/next-pages-router'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import localFont from 'next/font/local'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = dynamic(() => import('components/PreviewProvider'))

export const switzer = localFont({
  src: [
    {
      path: '../font/Switzer-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../font/Switzer-Thin.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../font/Switzer-Regular.otf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../font/Switzer-Bold.otf',
      weight: '600',
      style: 'bold',
    },
  ],
  variable: '--font-switzer',
})

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <main className={`${switzer.variable} font-sans`}>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      {draftMode && <VisualEditing />}
    </main>
  )
}
