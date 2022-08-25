import React, { useState } from "react";
import PropTypes from "prop-types";
import MaterialSwitch from "@material-ui/core/Switch"; // MaterialSwitch is an alias to Switch
import { FormControl, FormControlLabel } from "@material-ui/core";
import clsx from "clsx";

const Switch = (props) => {
	const { checked, defaultValue, onChange, name, color, label, disabled, containerClassName } = props;
	const [localChecked, setLocalChecked] = useState(false);

	const handleChange = (e) => {
		if (typeof onChange === "function") return onChange(e.target.checked);
		return setLocalChecked(e.target.checked);
	};

	const renderSwitch = () => {
		return (
			<MaterialSwitch
				defaultValue={defaultValue}
				checked={checked || localChecked}
				onChange={handleChange}
				name={name}
				color={color}
			/>
		);
	};

	return (
		<FormControl varaint="outlined" className={containerClassName}>
			<FormControlLabel
				className={clsx("z-0", containerClassName)}
				disabled={disabled}
				control={renderSwitch()}
				label={label}
			/>
		</FormControl>
	);
};

Switch.defaultProps = {
	label: "",
	color: "primary",
	containerClassName: ""
};

Switch.propTypes = {
	defaultValue: PropTypes.bool,
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	name: PropTypes.string,
	color: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool,
	containerClassName: PropTypes.string
};

export default Switch;
