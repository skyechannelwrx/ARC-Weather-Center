export default function InformationPage() {
    return(
        <div className="information">
            <h1>Information</h1>
            <p>This page contains the information relevant to how to interpret these posts and their meanings, as well as for their intended use.</p>
            <h1>Post Types</h1>
            <h2>Event Post</h2>
            <p>Event posts are used to forecast for an event, and they're the ones which contain the hazard table and threat levels, as well as the operational summary, mitigation information, and discussions.</p>
            <h2>Summary Post</h2>
            <p>Summary posts are used to summarize an event or otherwise post about some feature developing into the near or far future that does not affect any upcoming events or is not meant for any upcoming events. These do not have a hazard table.</p>
            <h1>Hazard Information</h1>
            <p>Advisory risks and Advisory statuses are not unique pairs. Any status can be paired with any risk as it is needed to convey the necessary information. Some Moderate risks do not require a Standby.</p>
            <h2>Advisory Risk</h2>
            <h3 className="green">None</h3>
            <p>No risk means that no risk exists for an event.</p>
            <h3 className="yellow">Low</h3>
            <p>Low risks are indicative of a marginal or a small hazard being present, and a hazard which does not pose significant threat to life, but may pose a threat to property.</p>
            <p>A "Low" risk will be issued when:</p>
            <ul>
                <li>Fog may form</li>
                <li>Condensation may form due to low temperatures and high dewpoints</li>
                <li>Light rainfall/mist is expected</li>
                <li>Gusty winds below 35 mph and at or above 20 mph are expected</li>
                <li>Heat index values at or above 95 are expected</li>
                <li>Wind chill values at or below 32 degrees</li>
            </ul>
            <h3 className="red">Moderate</h3>
            <p>A Moderate risk is indicative of elevated hazards being present, with the hazards potentially posing a threat to life or property if mitigation action is not taken.</p>
            <p>A "Moderate" risk will be issued when:</p>
            <ul>
                <li>Moderate to heavy rainfall is expected</li>
                <li>Gusty winds between 35 to 59 are expected</li>
                <li>Thunderstorms are expected, but will be low in coverage</li>
                <li>Any categorical severe weather risk of Marginal or Slight</li>
                <li>Any tropical disturbance, depression, or storm, or other tropical threat</li>
                <li>Heat index values at or above 102</li>
                <li>Wind chill values at or below 20</li>
            </ul>
            <h3 className="pink">High</h3>
            <p>A High risk is indicative of hazards being present, and there is confidence in their impact, plus the impacts being high, as well as posing the greatest threat to life or property if mitigation action is not taken.</p>
            <p>A "High" risk will be issued when:</p>
            <ul>
                <li>Flooding rainfall is expected, especially with the possibility for flash flood conditions to occur</li>
                <li>Gusty winds 60 mph or greater are expected</li>
                <li>Thunderstorms are expected, and in high coverage/probability</li>
                <li>Any Enhanced, Moderate, or High categorical severe weather threat</li>
                <li>Any upper echelon tropical storms or hurricanes</li>
                <li>Heat index values at or above 110</li>
                <li>Wind chill values at or below 10</li>
            </ul>
            <h2>Advisory Status</h2>
            <p>The advisory status is used to indicate what action should be taken by those who see the advisory as it relates to amateur radio activity.</p>
            <h3 className="green">Proceed</h3>
            <p>Proceed means conditions are clear for operation.</p>
            <h3 className="yellow">Mitigate</h3>
            <p>Mitigate means the operator should prepare to execute mitigation actions as they are listed on the post. Further action will not need to be required.</p>
            <h3 className="yellow">Monitor</h3>
            <p>Monitor means the operator should be aware of weather conditions with heightened awareness, but the overall threat is too low to matter significantly.</p>
            <h3 className="orange">Standby</h3>
            <p>Standby means extra caution should be taken, and operators should be alert for the possibility of weather conditions which may rapidly become unfavorable for outdoor operation, and operators should be standing by in the case conditions deteriorate and become hostile for conducting operations.</p>
            <h3 className="red">Suspend</h3>
            <p>Suspend means that the event/activity should be postponed until a later date. For operations or events which can be postponed, a suspend status will be preferred over a terminate status. A suspend status might be issued due to the chance for high impact to persons or equipment, or both. Operations might also be uncomfortable for operation.</p>
            <h3 className="pink">Terminate</h3>
            <p>Terminate status is the highest status which can be issued. A terminate status will be issued in the place of a suspend in the case of events which cannot be postponed or rearranged, as they are out of the control of the club.</p>
        </div>
    );
}