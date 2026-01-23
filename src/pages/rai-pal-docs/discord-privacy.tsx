import React from "react";

export default function RaiPalPrivacyPage() {
	return (
		<>
			<h3 id="privacy-policy">
				<strong>Privacy Policy</strong>
				<br />
			</h3>
			<p>
				<strong>1. Data Collection</strong>
				<br />
				The Rai Pal Discord integration collects specific data required to
				function:
			</p>
			<ul>
				<li>
					<strong>Discord User ID:</strong>
					<br /> To authenticate and display your profile within the app &#40;if
					applicable&#41;.
				</li>
				<li>
					<strong>Presence Data:</strong>
					<br /> Information about the game you are currently modding or playing
					may be sent to Discord to display &quot;Rich Presence&quot; status
					&#40;e.g., &quot;Playing Outer Wilds via Rai Pal&quot;&#41;.
				</li>
			</ul>
			<p>
				<strong>2. Data Usage</strong>
				<br />
				We use this data solely to:
			</p>
			<ul>
				<li>
					Provide the core functionality of the Discord integration &#40;Rich
					Presence, authentication&#41;.
				</li>
				<li>
					We do <strong>not</strong>
					<br /> sell, trade, or transfer your personally identifiable
					information to outside parties.
				</li>
			</ul>
			<p>
				<strong>3. Data Storage</strong>
				<br />
				Rai Pal operates primarily locally on your machine. We do not store your
				Discord credentials or personal data on external servers. Authentication
				tokens &#40;if used&#41; are stored locally on your device.
			</p>
			<p>
				<strong>4. Third-Party Services</strong>
				<br />
				The Service interacts with the Discord API. By using the Service, you
				also acknowledge and agree to{" "}
				<a href="https://discord.com/privacy">Discord&#39;s Privacy Policy</a>.
			</p>
			<p>
				<strong>5. Contact</strong>
				<br />
				If you have questions about these terms or privacy practices, please
				open an issue on the{" "}
				<a href="https://github.com/Raicuparta/rai-pal">
					Rai Pal GitHub repository
				</a>
				.
			</p>
		</>
	);
}
