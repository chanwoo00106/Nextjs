import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quibusdam
        odio obcaecati cum, in molestias dignissimos delectus minima consectetur
        pariatur voluptatibus veniam laboriosam fugiat quidem deserunt ut atque,
        nam ea!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quibusdam
        odio obcaecati cum, in molestias dignissimos delectus minima consectetur
        pariatur voluptatibus veniam laboriosam fugiat quidem deserunt ut atque,
        nam ea!
      </p>
      <Footer />
    </div>
  );
}
