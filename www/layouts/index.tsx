import Head from "next/head";

export default function Page(fm) {
  return ({ children: content }) => {
    return (
      <>
        <Head>
          <title>{fm.title ? fm.title : "mod.land"}</title>
        </Head>
        <main className="container markdown-wrapper">
          <section className="markdown">
            {fm.title && <h1 className="text-center">{fm.title}</h1>}
            {content}
          </section>
        </main>
      </>
    );
  };
}
