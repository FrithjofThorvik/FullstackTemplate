/**
 * Returns url with endpoint connected to either deployed or dev environment
 * @param endpoint endpoint from base url
 * @returns complete url connected to correct environment
 */
export const getBackendUrl = (endpoint: string): string => {
	const url =
		!process.env.NODE_ENV || process.env.NODE_ENV === "development"
			? `${process.env.REACT_APP_API_URL_DEV}${endpoint}`
			: `${process.env.REACT_APP_API_URL_DEPLOYMENT}${endpoint}`;
	return url;
};
