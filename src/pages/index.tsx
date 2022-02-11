import { Layout } from "@components/Layout";
import { AuthorizeLink } from "@components/AuthorizeLink";
import { useIsBroswer } from "@hooks/useIsBroswer";
import { useSpotifyCode } from "@hooks/useSpotifyCode";
import { useSpotifyAuth } from "@hooks/useSpotifyAuth";
import { SpotifyProfile } from "@components/SpotifyProfile";

export default function Index() {
  const code = useSpotifyCode();
  const isBrowser = useIsBroswer();
  const { authorized, profileData, loading, error } = useSpotifyAuth(code);

  if (!isBrowser) return null;

  return (
    <Layout>
      {!loading && !authorized && <AuthorizeLink />}
      {!loading && profileData && <SpotifyProfile {...profileData} />}
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </Layout>
  );
}
