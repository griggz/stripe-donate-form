import { useRouter, withRouter } from "next/router";
import MainPage from '../../components/views/Main';

const ChineseMainPage = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <MainPage
      language='CHINESE'
      currency='CNY'
      currencySymbol='CN¥'
    />
  )
}

export default withRouter(ChineseMainPage)
