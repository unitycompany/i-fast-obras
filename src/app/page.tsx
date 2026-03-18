import {
  Header,
  Hero,
  ClientsRange,
  Solution,
  Method,
  Portfolio,
  Steps,
  Contact,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClientsRange />
        <Solution />
        <Method />
        <Portfolio />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
