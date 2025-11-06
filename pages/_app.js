import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo
				title="Your Name — Portfolio"
				description="ポートフォリオサイト（経歴・作品・連絡先）"
				openGraph={{
					type: 'website',
					locale: 'ja_JP',
					url: 'https://Moriumaso.github.io',
					site_name: 'Your Name — Portfolio'
				}}
			/>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp