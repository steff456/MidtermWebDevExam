
const handleError = (res, error) => {
    console.error(error);
    return res.sendStatus(500);
};

const handleResponse = (res, status, body) => {
    console.log({
        Response: {
            Status: status,
            Body: body
        }
    });
    if (body) {
        return res.status(200).json(body);
    }
    return res.sendStatus(status);
};

module.exports = {
    handleError,
    handleResponse
};