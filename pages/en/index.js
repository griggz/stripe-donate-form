import { useRouter, withRouter } from "next/router";
import MainPage from '../../components/views/Main'

const EnglishMainPage = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <MainPage
      language='ENGLISH'
    />
  )
}

export default withRouter(EnglishMainPage)
