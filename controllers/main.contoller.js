module.exports.getTest = (req, res, next) => {
    res.send("GET request to the test homepage");
};
module.exports.postTest = (req, res, next) => {
    res.json({message: "POST request to the test homepage"});
};
module.exports.deleteTest = (req, res, next) => {
    res.json({message: "DELETE request to the test homepage"});
};
