import { useRouter, withRouter } from "next/router";
import MainPage from '../../components/views/Main'

const RussianMainPage = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <MainPage
      language='RUSSIAN'
      currency='RUB'
      currencySymbol='₽.'
    />
  )
}

export default withRouter(RussianMainPage)
