const apiResponse = require("../helpers/apiResponse");
const {google} = require("googleapis");
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2("777570114264-jak1v34qhf71njg02t4kuvbf56q5f8p0.apps.googleusercontent.com", "DQTJZOUB_VS0KDW3Pso-i-C3", "http://localhost:3000/");

/**
 * 
 * @returns {Array}
 */
exports.contactList = [
	async (req, res) => {
		try {
			console.log("got request to get contact list", req.body.accessToken);
			await oauth2Client.setCredentials({
				access_token: req.body.accessToken,
			});
			const service = google.people({version: "v1", auth : oauth2Client});
			let contactList = [];
			const response = await service.people.connections.list({
				resourceName: "people/me",
				pageSize: process.env.GOOGLE_LIMIT,
				personFields: "names,emailAddresses,phoneNumbers,photos",
			});
			if (response && response.data && response.data.connections) contactList = response.data.connections;
			return apiResponse.successResponse(res, contactList);
		} catch (err) {
			//throw error in json response with status 500. 
			return apiResponse.ErrorResponse(res, err);
		}
	}
];
