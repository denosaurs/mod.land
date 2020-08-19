import * as React from "react";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>mod.land — Pretty subdomains for you deno project</title>
      </Head>
      <div className="py-16 lg:py-24">
        <div className="flex justify-center">
          <h1 className="text-6xl font-mono">*.mod.land</h1>
        </div>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          📦{" "}
          <span className="italic">Pretty subdomains for you deno project</span>
        </p>
      </div>
    </>
  );
}
