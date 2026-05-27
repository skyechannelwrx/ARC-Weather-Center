import { useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import HazardCard from "./HazardCard";
import { ALL_HAZARDS } from "./hazards";
import Meter from "./Meter";

const modules = import.meta.glob(
    "./content/**/*.mdx",
    {eager: true}
);

const posts = Object.values(modules).map(
    (mod: any) => ({
        metadata: mod.metadata,
        Component: mod.default
    })
);

const advisoryColors = {
    proceed: "green",
    mitigate: "yellow",
    monitor: "orange",
    standby: "orange",
    suspend: "red",
    terminate: "red",
} as const;

const severityColors = {
    none: "green",
    low: "yellow",
    moderate: "red",
    high: "pink",
} as const;

console.log(posts);

export default function PostsPage() {
    ScrollToTop();
    const {slug} = useParams();
    console.log(slug);

    function getConfidenceColor(confidence: number) {
        if (confidence >= 80) {
            return "pink"
        }

        if (confidence >= 60) {
            return "red"
        }

        if (confidence >= 40) {
            return "orange"
        }

        if (confidence >= 20) {
            return "yellow"
        }

        return "green"
    }

    function getConfidenceAttribute(confidence: number) {
        if (confidence >= 95) {
            return "Very High"
        }

        if (confidence >= 80) {
            return "High"
        }

        if (confidence >= 60) {
            return "Moderate"
        }

        if (confidence >= 40) {
            return "Slight"
        }

        if (confidence >= 20) {
            return "Low"
        }

        return "Very Low"
    }

    const post = posts.find(
        p => p.metadata.slug === slug
    );

    if (!post) {
        return <div>404 - Post not found</div>
    }

    const mergedHazards = 
        ALL_HAZARDS.map((hazard) => {
            const metadatahazard = 
                post.metadata.hazards.find(
                    (h: any) =>
                        h.hazard.toLowerCase() === hazard.id
                );

            return {
                ...hazard,
                
                status: metadatahazard
                    ? "active"
                    : "inactive",

                impact:
                    metadatahazard?.impact ??
                    "none",

                summary:
                    metadatahazard?.summary ??
                    "No impacts expected from this hazard.",

                color:
                    metadatahazard?.color ??
                    "green",

                fill:
                    metadatahazard?.fill ??
                    0,
            };
        });

    const Content = post.Component;

    return (
        <div className="wrap">
            <div className="container">
                <article className="post">
                    <h1>{post.metadata.title}</h1>
                    <p className="release-date">Released {new Date(post.metadata.date).toLocaleString()}</p>
                    <div className="backing-container">
                        <p className="summaryheader">
                            CONTENT SUMMARY
                        </p>
                        <p>{post.metadata.description}</p>
                    </div>
                    <div className="backing-container">
                        <p className="confidenceheader">
                            FORECAST CONFIDENCE
                        </p>
                        <p className={`probs ${getConfidenceColor(post.metadata.confidence)}`}>
                            {post.metadata.confidence}%, {getConfidenceAttribute(post.metadata.confidence)}
                        </p>
                        <Meter 
                            active={post.metadata.confidence}
                            total={100}
                            color={getConfidenceColor(post.metadata.confidence)}
                        />
                    </div>
                    {post.metadata.type === "event" && (
                        <div className="status-banner">
                            <div className="section section--left">
                                <p>ADVISORY</p>
                                <div className="advisory">
                                    <div className={advisoryColors[post.metadata.advisory.toLowerCase() as keyof typeof advisoryColors]}>
                                        {post.metadata.advisory.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <p>RISK</p>
                                <div className="risk">
                                    <div className={severityColors[post.metadata.risk.toLowerCase() as keyof typeof severityColors]}>
                                        {post.metadata.risk.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {post.metadata.type === "summary" && (
                        <div className="info-banner">
                            <div className="section">
                                <p>PRODUCT FOR</p>
                                <div className="info">
                                    {post.metadata.event.toUpperCase()}
                                </div>
                            </div>
                        </div>
                    )}

                    {post.metadata.type === "event" && (
                        <div className="hazard-container">
                            {mergedHazards.map((hazard) => (
                                <HazardCard 
                                    name={hazard.id}
                                    status={hazard.status}
                                    level={hazard.impact}
                                    sections={hazard.sections}
                                    used={hazard.fill}
                                    color={hazard.color}
                                    summary={hazard.summary}
                                />
                            ))}
                        </div>
                    )}
                    <Content />
                </article>
            </div>
        </div>
    )
}