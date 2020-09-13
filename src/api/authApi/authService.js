import React from "react";
import axios from "axios";
const authURL = "/auth";

const postAuth = async (data) => {
    let token = await axios.post(authURL, data);
    return await token;
};

export { postAuth };
