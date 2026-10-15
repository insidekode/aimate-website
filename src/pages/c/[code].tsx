import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ChallengeInvitePage() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (!code) return;
    const c = String(code).trim();
    const appUrl = `aimate://c/${encodeURIComponent(c)}`;
    const storeUrl = `https://play.google.com/store/apps/details?id=club.aimate&referrer=code%3D${encodeURIComponent(c)}`;

    window.location.href = appUrl;
    const t = setTimeout(() => {
      window.location.href = storeUrl;
    }, 900);
    return () => clearTimeout(t);
  }, [code]);

  return (
    <>
      <Head>
        <title>Join AiMate Challenge</title>
        <meta name="description" content="You've been invited to an AiMate challenge" />
      </Head>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: 24, textAlign: 'center', fontFamily: 'system-ui' }}>
        Opening AiMate...
      </div>
    </>
  );
}
