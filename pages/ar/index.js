import { useRouter, withRouter } from "next/router"
import MainPage from '../../components/views/Main'

const ArabicMainPage = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <MainPage
      language='ARABIC'
    />
  )
}

export default withRouter(ArabicMainPage)
