import { useRouter, withRouter } from "next/router";
import Main from '../components/views/Main'

const Landing = () => {
  const router = useRouter();

  if (router.query.token !== process.env.URL_ACCESS_TOKEN) {
    return ""
  }

  return (
    <Main
      language='ENGLISH'
    />
  )
}

export default withRouter(Landing)