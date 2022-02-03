import { Layout } from "@components/Layout";
import { AuthorizeLink } from "@components/AuthorizeLink";
import { useIsBroswer } from "@hooks/useIsBroswer";
import { useSpotifyCode } from "@hooks/useSpotifyCode";
import { useSpotifyAuth } from "@hooks/useSpotifyAuth";

export default function Index() {
  const code = useSpotifyCode();
  const isBrowser = useIsBroswer();
  const { authorized, loading, error } = useSpotifyAuth(code);

  if (!isBrowser) return null;

  return (
    <Layout>
      {!authorized && !loading && <AuthorizeLink />}
      {authorized && !loading && <h1>Authorized</h1>}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Oops! Something went wrong.</h1>}
    </Layout>
  );
}
