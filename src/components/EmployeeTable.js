import React, { useEffect, useState } from "react";
import { useOverrides, Stack } from "@quarkly/components";
import EmployeeCard from "./EmployeeCard";
const defaultProps = {
	"margin-top": "40px"
};
const overrides = {};

const EmployeeTable = props => {
	const {
		rest,
		override
	} = useOverrides(props, overrides, defaultProps);
	const [employees, setEmployees] = useState([]);
	useEffect(() => {
		fetch("https://api.airtable.com/v0/app2MdLITmRTBsrkg/Employee%20directory", {
			headers: {
				"Authorization": "Bearer keyVJ02fVtlkBwYAX"
			}
		}).then(response => response.json()).then(data => setEmployees(data.records.map(({
			fields
		}) => fields)));
	}, []);
	return <Stack {...rest}>
		{employees.map(employee => <EmployeeCard {...override("employeeCard")} employee={employee} />)}
	</Stack>;
};

Object.assign(EmployeeTable, { ...Stack,
	defaultProps,
	overrides
});
export default EmployeeTable;