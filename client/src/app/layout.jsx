import '../styles/normalize.css';
import '../styles/index.css';
import Footer from '../components/Footer/Footer.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'
import { Providers } from "./provider/provider";

export default function RootLayout({ children }) {
  return (
    <html className='html' lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
        <body>
          <Providers>
            <Navigation/>
              {children}
            <Footer/>
          </Providers>
        </body>
    </html>
  );
}
