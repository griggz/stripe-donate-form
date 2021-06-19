import { useRouter, withRouter } from "next/router";
import MainPage from '../../components/views/Main';

const GermanMainPage = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <MainPage
      language='GERMAN'
      currency='EUR'
      currencySymbol='€'
    />
  )
}

export default withRouter(GermanMainPage)
