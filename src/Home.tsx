import './App.scss';
import ScrollToTop from './ScrollToTop';
import PostCard from './PostCard';

const modules = import.meta.glob(
    "./content/**/*.mdx",
    { eager: true }
  );
  
const posts = Object.values(modules)
    .map((mod: any) => ({
      metadata: mod.metadata
    }))
    .sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
);

function Home() {
    ScrollToTop();

    return (
        <div className="wrap">
        <div className="container">
            <div className="contexthead">
            <h1>What is the ARC Weather Center?</h1>
            <p>The ARC Weather Center is operated by the Weather Committee in the Amateur Radio Club @ UCF.</p>
            <p>This product nor products located within are intended for use outside of the Amateur Radio Club @ UCF.</p>
            <p>To learn more about this product and the incorporated products, please refer to <a href='https://newton.i2lab.ucf.edu/wiki/ARC_WeatherCenter'>this link</a>.</p>
            <p>This page contains every forecast product issued for the Amateur Radio Club @ UCF. This page is in beta, and is subject to change as needed, or as more parts are incorporated into the project.</p>
            <p>These forecasts are for use with the Amateur Radio Club. These are .mdx documents, and this product serves as an alternative to what was used, which was PDFs with text on them. This project focuses on being more visual and more usable for normal members of the club, but each document does include technical details and information regarding why a forecast was issued. Forecasts will typically include a short summary, an advisory status, a risk status, a mitigation message, a non-technical overview, and then a technical overview.</p>
        </div>
        {posts.map((post) => (
            <PostCard
                key={post.metadata.slug}
                metadata={post.metadata}
            />
        ))}
      </div>
    </div>
  )
}

export default Home