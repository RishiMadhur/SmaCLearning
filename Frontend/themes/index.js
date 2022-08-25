// colors: {
//     'blue': '#1fb6ff',
//     'purple': '#7e5bef',
//     'pink': '#ff49db',
//     'orange': '#ff7849',
//     'green': '#13ce66',
//     'yellow': '#ffc82c',
//     'gray-dark': '#273444',
//     'gray': '#8492a6',
//     'gray-light': '#d3dce6',
//     'menu':'#0C1228',
//     'white':'#FFFFFF',
//     'icon': '#273250',
//     'blue-pro':'#E5E5E5',
//     'blue-light':'#1E3359',
//     'blue-light-pro':'#70788D',
//     'blue-field':"#87C5FF",
//     'black':"#000000",
//     'text':'#273250'
//   },

  export const DEFAULT_THEME_NAME = "light";

export const themes = {
	light: {
		// Theme colors
		primary: {
			main: "#507D2A",
			light: "#F1F5EB"
		},
		secondary: "#ECEC5A",
		tertiary: "#8CB649",
		background: "#FFFFFF",
		profile: "#2A2A2A",
		field: "#0D0F12",
		hoverBackground: "#F0F0F0",

		// Text Colors
		primaryText: "#333333",
		secondaryText: "#909090",
		placeholderText: "#A0A0A0",
		tertiaryText: "#777777",
		blackText: "#000000",

		// Border
		border: "#DDDDDD",
		inputBorder: "#56575A",
		cardBorder: "#EEEEEE",

		// Highlight
		highlight: "#F4F5F4",

		warning: {
			main: "#E01E5A",
			light: "#FCE8EE"
		}
	},
	dark: {
		// Theme colors
		primary: "#507D2A",
		secondary: "#ECEC5A",
		tertiary: "#8CB649",
		background: "#181818",
		profile: "#2A2A2A",
		field: "#0D0F12",
		hoverBackground: "#212121",

		// Text Colors
		primaryText: "#FFFFFF",
		secondaryText: "#909090",
		placeholderText: "#A0A0A0",
		tertiaryText: "#777777",
		blackText: "#000000",

		// Border
		border: "#363636",
		inputBorder: "#56575A",
		cardBorder: "#EEEEEE",

		// Highlight
		highlight: "#909090",

		warning: {
			main: "#E01E5A",
			light: "#FCE8EE"
		}
	}
};

export const getThemeByThemeName = (themeName) => {
	// Return theme by theme name, if theme name doesn't exists then return default theme
	return themes[themeName] || themes[DEFAULT_THEME_NAME];
};

export const createPalettes = (colors) => {
	const palettes = {};

	for (let key in colors) {
		if (typeof colors[key] === "object") palettes[key] = colors[key];
		else {
			palettes[key] = {
				main: colors[key]
			};
		}
	}

	return palettes;
};

export const createCSSVariable = (name, prefix = "color") => {
	return `--${prefix}-${name}`;
};

export const getVariableValue = (variants, prefix = "color") => {
	return `var(--${prefix}-${variants})`;
};
