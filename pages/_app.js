import '../styles/master.scss'
import "../styles/navbar.scss"
import "../styles/intro.scss"
import "../styles/currency.scss"
import "../styles/atributies.scss"
import "../styles/quick.scss"
import "../styles/questions.scss"
import "../styles/friend.scss"
import "../styles/footer.scss"
import textTheme from '../component/global/color'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis'
import { Navbar } from '../component/navbar/Navbar.jsx';


const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={textTheme}>
        <Component {...pageProps} />
      </ThemeProvider >
     

    </CacheProvider  >

  )
}

export default MyApp
