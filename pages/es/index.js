import { useRouter, withRouter } from "next/router";
import MainPage from '../../components/views/Main'

const SpanishMainPage = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <MainPage
      language='SPANISH'
    />
  )
}

export default withRouter(SpanishMainPage)
