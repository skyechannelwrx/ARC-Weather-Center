import './App.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
    metadata: any;
}

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

export default function PostCard({ metadata }: Props) {
    const navigate = useNavigate();

    return(
        <div className="head-bar">
            <h1>{metadata.title}</h1>

            <h2>Post created {new Date(metadata.date).toLocaleDateString()}</h2>

            <p>{metadata.description}</p>

            {metadata.type === "event" && (
                <div className="status-banner">
                    <div className="section section--left">
                        <p>ADVISORY</p>
                        <div className="advisory">
                            <div className={advisoryColors[metadata.advisory.toLowerCase() as keyof typeof advisoryColors]}>
                                {metadata.advisory.toUpperCase()}
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <p>RISK</p>
                        <div className="risk">
                            <div className={severityColors[metadata.risk.toLowerCase() as keyof typeof severityColors]}>
                                {metadata.risk.toUpperCase()}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {metadata.type === "summary" && (
                <div className="info-banner">
                    <div className="section">
                        <p>PRODUCT FOR</p>
                        <div className="info">
                            {metadata.event.toUpperCase()}
                        </div>
                    </div>
                </div>
            )}

            <button className="cta-button" onClick={() => navigate(`/post/${metadata.slug}`)}>Read Post</button>
        </div>
    )
}