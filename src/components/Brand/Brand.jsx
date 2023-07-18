import React from "react";
import "./brand.css";
import { Google, Atlassian, Slack, Dropbox, Shopify } from "./imports";
const Brand = () => (
	<div className="gpt3__brand section__padding">
		<div>
			<img src={Google} />
		</div>
		<div>
			<img src={Slack} />
		</div>
		<div>
			<img src={Atlassian} />
		</div>

		<div>
			<img src={Dropbox} />
		</div>
		<div>
			<img src={Shopify} />
		</div>
	</div>
);

export default Brand;
