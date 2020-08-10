const { body } = require("express-validator");
const axios = require("axios");


const apiResponse = require("../helpers/apiResponse");

exports.authenticateUser = [
	body("accessToken"),
	body("tokenObj"),
	async (req, res) => {
		try {
			const response = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.tokenObj.id_token}`);
			if (response.data && response.data.azp) {
				if (response.data.azp === process.env.GOGGLE_SECRET) {
					return apiResponse.successResponse(res,"yes");
				}
			}
			return apiResponse.ErrorResponse(res, "NOT_AUTHORIZED");
		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}
	}];
