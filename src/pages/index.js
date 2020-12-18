import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Getting data from Airtable API 
			</title>
			<meta name={"description"} content={"This project demonstrates how you can get and use data from Airtable API in Quarkly"} />
			<meta property={"og:title"} content={"Getting data from Airtable API "} />
			<meta property={"og:description"} content={"This project demonstrates how you can get and use data from Airtable API in Quarkly"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
			>
				We are cute
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				The smartest people work every day to provide the best service and to make our clients happy
			</Text>
			<Components.EmployeeTable>
				<Override slot="employeeCard">
					<Override slot="Name" font="500 24px/33.6px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif" color="--primary" margin="4px 0px 16px 0px" />
					<Override slot="Home Address" />
					<Override slot="box" margin="0px 0px 0px 0px" />
					<Override
						slot="Email address"
						text-decoration-line="initial"
						color="--light"
						text-align="center"
						background="--color-grey"
						padding="6px 0px 7px 0px"
						border-radius="12px"
						hover-background="--color-greyD2"
						transition="background --transitionDuration-fastest --transitionTimingFunction-easeInOut 0s"
					/>
					<Override
						slot="Phone"
						text-decoration-line="initial"
						color="--light"
						text-align="center"
						background="--color-grey"
						padding="6px 0px 7px 0px"
						border-radius="12px"
						hover-background="--color-greyD2"
						transition="background --transitionDuration-fastest --transitionTimingFunction-easeInOut 0s"
						margin="0px 0px 16px 0px"
					/>
					<Override
						slot="Title"
						margin="2px 0px 0px 0px"
						font="300 12px/24px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
						text-transform="uppercase"
						letter-spacing="1px"
						color="--grey"
					/>
					<Override
						slot="Status"
						margin="12px 0px 8px 0px"
						background="--color-lightD2"
						padding="4px 8px 6px 8px"
						text-align="center"
						border-radius="20px"
					/>
					<Override slot="DOB" margin="0px 0px 16px 0px" />
				</Override>
			</Components.EmployeeTable>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});