import Head from 'next/head.js'
import Link from 'next/link.js'
import Script from 'next/script.js'
import Layout from '../../components/layout.js'
const firstPost = () => {
	return (
		<>
			<Layout>
				<Head>
					<title> First Post</title>
					<Script
						src='https://connect.facebook.net/en_US/sdk.js'
						strategy='lazyOnload'
						onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
					/>
				</Head>
				<h1> First Post</h1>
				<Link href='/'> Back to home!</Link>
			</Layout>
		</>
	)
}

export default firstPost
