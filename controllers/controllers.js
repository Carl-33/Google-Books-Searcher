const saySomething = (req, res, next) => {
    res.status(200).json({
        body: "Hello from teh server!"
    });
};

module.exports.saySomething = saySomething;