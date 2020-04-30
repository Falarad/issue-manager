var express = require('express');
var router = express.Router();
var issue = require('../node_modules/issue-manager');

router.get('/issues', function (req, res) {
    res.render('issues', {
        title: 'Issues',
        content: issue.getIssues(res)
    });
});
router.put('/issues/issues.json', function (req, res) {
    issue.makeIssues(req);
});
router.post('/issues/:issue_id.json', function (req, res) {
    issue.getIssues(res);
    issue.delIssues(req.params.issue_id);
    issue.makeIssues(req);
});
router.delete('/issues/:issue_id.json', function (req, res) {
    issue.delIssues(req.params.issue_id);
});

module.exports = router;
