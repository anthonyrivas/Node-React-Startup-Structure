module.exports = {
    getMain: (req, res) => {
        res.send('Welcome to API v1.');
    },
    getJson: (req, res) => {
      res.json({test: true});
    }
};