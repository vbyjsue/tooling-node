
export default {
	// setupFiles: ['<rootDir>/test2/setup-jest.js'],
	//roots: ['<rootDir>/test2'],
	setupFilesAfterEnv: ['jest-extended'],
	testEnvironment: 'jest-environment-node',
	injectGlobals: true,
	transform: {},
	reporters: [
		'default',
		[ 'jest-junit', {
			outputDirectory: 'test_reports',
			outputName: 'jest-junit.xml',
		} ]
	]
};
