import React from "react";

export default function RaiPalTermsPage() {
	return (
		<>
			<h1 id="terms-of-service-for-rai-pal-discord-integration">
				Terms of Service for Rai Pal Discord Integration
			</h1>
			<p>
				<strong>Last Updated:</strong> January 23, 2026
			</p>
			<p>
				By using the Rai Pal Discord Integration &#40;&quot;the
				Service&quot;&#41;, you agree to the following terms. If you do not
				agree, please discontinue use of the Service.
			</p>
			<h3 id="1-description-of-service">1. Description of Service</h3>
			<p>
				The Service connects the Rai Pal mod manager application with Discord to
				provide features such as Rich Presence &#40;displaying current modding
				activity&#41;, account linking, or community verification. The Service
				is provided &quot;as is&quot; and is subject to change or removal at any
				time.
			</p>
			<h3 id="2-license-and-open-source">2. License and Open Source</h3>
			<p>
				Rai Pal is free software. This Service and the underlying application
				are licensed under the{" "}
				<strong>GNU General Public License v3.0 &#40;GPL-3.0&#41;</strong>. You
				are free to redistribute and/or modify it under the terms of this
				license.
			</p>
			<ul>
				<li>
					Source Code:{" "}
					<a href="https://github.com/Raicuparta/rai-pal">
						https://github.com/Raicuparta/rai-pal
					</a>
				</li>
			</ul>
			<h3 id="3-data-and-privacy">3. Data and Privacy</h3>
			<p>
				We prioritize your privacy. The Service interacts with the Discord API
				to function but minimizes data retention.
			</p>
			<ul>
				<li>
					<strong>Data Accessed:</strong> We may access your Discord User ID,
					Avatar, and Username to display them within the Rai Pal client or to
					verify server membership.
				</li>
				<li>
					<strong>Data Storage:</strong> The Service does not permanently store
					your Discord personal data on external servers. Data usage is limited
					to the local operation of the client and ephemeral API interactions.
				</li>
				<li>
					<strong>No Third-Party Sharing:</strong> We do not sell, trade, or
					transfer your data to outside parties.
				</li>
			</ul>
			<h3 id="4-user-conduct">4. User Conduct</h3>
			<p>You agree not to use the Service to:</p>
			<ul>
				<li>
					Violate Discord’s{" "}
					<a href="https://discord.com/terms">Terms of Service</a> or{" "}
					<a href="https://discord.com/guidelines">Community Guidelines</a>.
				</li>
				<li>Disrupt the Rai Pal application or its associated services.</li>
				<li>Misrepresent your affiliation with Rai Pal or its contributors.</li>
			</ul>
			<h3 id="5-disclaimer-of-warranty">5. Disclaimer of Warranty</h3>
			<p>
				<strong>
					THERE IS NO WARRANTY FOR THE SERVICE, TO THE EXTENT PERMITTED BY
					APPLICABLE LAW.
				</strong>
				The Service is provided without warranty of any kind, either expressed
				or implied, including, but not limited to, the implied warranties of
				merchantability and fitness for a particular purpose. The entire risk as
				to the quality and performance of the Service is with you.
			</p>
			<h3 id="6-limitation-of-liability">6. Limitation of Liability</h3>
			<p>
				In no event unless required by applicable law or agreed to in writing
				will any copyright holder, or any other party who modifies and/or
				conveys the program as permitted above, be liable to you for damages,
				including any general, special, incidental, or consequential damages
				arising out of the use or inability to use the Service.
			</p>
			<h3 id="7-contact">7. Contact</h3>
			<p>
				For questions regarding these Terms, please open an issue on the
				official{" "}
				<a href="https://github.com/Raicuparta/rai-pal">GitHub Repository</a>.
			</p>
		</>
	);
}

export const getConfig = async () => {
	return {
		render: "static",
	} as const;
};
