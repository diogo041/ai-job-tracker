import { HomeFeatureGrid } from "../components/home/home-feature-grid";
import { HomeFooter } from "../components/home/home-footer";
import { HomeHeader } from "../components/home/home-header";
import { HomeHero } from "../components/home/home-hero";
import { HomeStack } from "../components/home/home-stack";

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <main>
        <HomeHero />
        <HomeFeatureGrid />
        <HomeStack />
      </main>
      <HomeFooter />
    </>
  );
}
