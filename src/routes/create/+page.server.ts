export const load = async () => {
	const avatarUrl = `https://robohash.org/${crypto.randomUUID()}?set=set4`;

	return {
		avatarUrl
	};
};
