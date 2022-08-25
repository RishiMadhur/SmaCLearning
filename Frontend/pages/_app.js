import { ThemeContext } from 'next-themes'
import '../styles/globals.css'
import Home from '.'

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState("light");
  // const currentTheme = localStorage.getItem("theme");

  // useEffect(() => {
  //   localStorage.setItem("theme",theme)
  //   window.location.reload();
  // }, [theme]);

  // if (currentTheme == "dark") {
  //     import("primereact/resources/themes/arya-blue/theme.css");
  //   }
  //   if (currentTheme == "light") {
  //     import("primereact/resources/themes/saga-blue/theme.css");
  //   }
  return <>
  {/* <ThemeContext.Provider value={[theme, setTheme]}> */}
  {/* <div className=''>
  <Home/>
  
  </div> */}
  <Component {...pageProps} />
  {/* </ThemeContext.Provider> */}
  </>
}

export default MyApp
