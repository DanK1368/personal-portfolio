import SEO from "@bradgarropy/next-seo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="DK | Full Stack Developer"
        description="A personal portfolio showing projects I worked on"
        keywords={[
          "website",
          "web developer",
          "developer",
          "portfolio",
          "front-end",
          "full-stack",
          "backend",
          "react",
          "python",
          "django",
          "api",
          "javascript",
          "html",
          "css",
          "tailwind",
        ]}
        icon="/favicon.png"
        facebook={{
          image: "/screenshot.png",
          url: "https://danielkoett.xyz",
          type: "website",
        }}
        twitter={{
          image: "/screenshot.png",
          site: "@danielkoett",
          card: "summary",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
