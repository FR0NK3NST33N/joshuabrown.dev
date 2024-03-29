import Head from "next/head";
import Script from "next/script";

interface LayoutProps {
  title?: string;
  description?: string;
  children: any;
}

export const Layout = ({
  title = "Josh Brown",
  description = "My site",
  children,
}: LayoutProps) => {
  return (
    <div className="flex min-h-screen min-w-screen p-12 text-white bg-dark">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        type="text/javascript"
        src="js/dynamics.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        type="text/javascript"
        src="js/tinycolor.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        type="text/javascript"
        src="js/mv.js"
        strategy="afterInteractive"
      ></Script>
      {children}
    </div>
  );
};
