var _ = require('lodash');

module.exports = function(app) {
    _cats = [
        {
            name: 'fluffy',
            color: 'brown',
            type: 'inside cat'
        },
        {
            name: 'Mrs. Norris',
            color: 'dark',
            type: 'castle cat'
        }
    ];

    // Create
    app.post('/cat', function(req, res) {
        _cats.push(req.body);
        res.json({info: 'cat created successfully'})
    });

    // Read
    app.get('/cat', function(req, res) {
        res.send(_cats);
    });

    // Read one
    app.get('/cat/:id', function(req, res) {
        var requestedId = req.params.id;
        res.send(_.find(_cats, {name: requestedId}));
    });

    // Update
    app.put('/cat/:id', function(req, res) {
        var targetId = req.params.id;
        var index = _.findIndex(_cats, {name: targetId});
        _.merge(_cats[index], req.body);
        res.json({info: 'cat updated successfully'});
    });

    // Delete
    app.delete('/cat/:id', function(req, res) {
        _.remove(_cats, function(cat) {
            return cat.name == req.params.id;
        });
        res.json({info: 'cat remove successfully'});
    });
}