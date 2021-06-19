import { useRouter, withRouter } from "next/router";
import MainPage from '../../components/views/Main'

const ItalianMainPage = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <MainPage
      language='ITALIAN'
      currency='EUR'
      currencySymbol='€'
    />
  )
}

export default withRouter(ItalianMainPage)
