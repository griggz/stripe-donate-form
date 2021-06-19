import { useRouter, withRouter } from "next/router";
import MainPage from '../../components/views/Main'

const FrenchMainPage = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <MainPage
      language='FRENCH'
    />
  )
}

export default withRouter(FrenchMainPage)
