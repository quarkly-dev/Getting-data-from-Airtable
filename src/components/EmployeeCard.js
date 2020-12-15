import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Text, Link } from "@quarkly/widgets";
const defaultProps = {
	"width": "25%",
	"lg-width": "50%",
	"sm-width": "100%"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background-size": "cover",
			"background-position": "center",
			"background-image": "url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80)"
		}
	},
	"Name": {
		"kind": "Text",
		"props": {
			"color": "--dark",
			"font": "--headline3",
			"children": "Name"
		}
	},
	"Home Address": {
		"kind": "Text",
		"props": {
			"margin": " 0px 0px 8px 0px",
			"children": "Home Address"
		}
	},
	"Start date": {
		"kind": "Text",
		"props": {
			"margin": " 0px 0px 8px 0px",
			"children": "Start date"
		}
	},
	"Status": {
		"kind": "Text",
		"props": {
			"margin": " 0px 0px 8px 0px",
			"children": "Status"
		}
	},
	"DOB": {
		"kind": "Text",
		"props": {
			"margin": " 0px 0px 8px 0px",
			"children": "DOB"
		}
	},
	"Email address": {
		"kind": "Link",
		"props": {
			"margin": " 0px 0px 8px 0px",
			"children": "Email address"
		}
	},
	"Phone": {
		"kind": "Link",
		"props": {
			"margin": " 0px 0px 8px 0px",
			"children": "Phone"
		}
	}
};

const EmployeeCard = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	const {
		employee = {}
	} = rest;
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" />
		<Box {...override("box")} background-image={`url(${employee.Photo[0].url})`} />
		<Text {...override("Status")} children={employee["Status"]} />
		<Text {...override("Title")} children={employee.Title} />
		<Text {...override("Name")} children={employee.Name} />
		<Text {...override("Home Address")} children={`Address: ${employee["Home address"]}`} />
		<Text {...override("Start date")} children={`Start date: ${employee["Start date"]}`} />
		<Text {...override("DOB")} children={`Birthday: ${employee["DOB"]}`} />
		<Link {...override("Email address")} children={employee["Email address"]} href={`mailto:${employee["Email address"]}`} />
		<Link {...override("Phone")} children={employee["Phone"]} href={`tel:${employee["Phone"]}`} />
	</StackItem>;
};

Object.assign(EmployeeCard, { ...StackItem,
	defaultProps,
	overrides
});
export default EmployeeCard;