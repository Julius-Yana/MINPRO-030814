import Book from '@/components/Book/Book';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import Container from '@/components/Container';
import Hero from '@/components/hero/hero';
import Section from '@/components/hero/section';
import Schedule from '@/components/Schedule/schedule';

export default function Home() {
  return (
    <div>
      {/* <Container> */}
      {/* <Navbar /> */}
      <div className="relative">
        <svg
          className="absolute top-0 left-0 right-0 bottom-0 -z-20 w-full h-auto opacity-20"
          width="1502"
          height="1145"
          viewBox="0 0 1502 1145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L181.247 1119.45L329.925 1L496.52 1119.456L653.09 1L835.258 1144L987.988 1L1160.34 1119.45L1289.61 1L1501 111.9"
            fill="#FFF"
            fill-opacity="0.1"
            stroke="#FFF"
            stroke-width="0.5"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_420_4"
              x1="751"
              y1="1"
              x2="751"
              y2="1144"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0.72" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <Hero />
        <Section />
      </div>
      <Section />
      <hr className="w-full mt-16" />
      <Schedule />
      <Book />
      {/* </Container> */}
      <Footer />
    </div>
  );
}
