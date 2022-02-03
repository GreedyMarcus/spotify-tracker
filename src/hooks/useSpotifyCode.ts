import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/**
 * Custom hook that extracts the spotify code from the url.
 */
export const useSpotifyCode = () => {
  const router = useRouter();
  const [spotifyCode, setSpotifyCode] = useState("");

  useEffect(() => {
    const { code } = router.query;

    if (code && !Array.isArray(code)) {
      setSpotifyCode(code);
      router.push("/", undefined, { shallow: true });
    }
  }, [router]);

  return spotifyCode;
};
