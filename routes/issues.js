var express = require('express');
var router = express.Router();
var issue = require('../node_modules/issue-manager');

router.get('/issues', async function (req, res, next) {
    var issues = await issue.getIssues();
    res.render('issues', {
        title: 'Issues',
        written: issues
    });
});
router.get('/issues/:issue_id.json', async function (req, res, next) {
    var doc = await issue.getSingleIssue(req.params.issue_id);
    res.render('issue', {
        id: doc._id,
        title: doc.title,
        status: doc.status,
        name: doc.assignee,
        created: doc.created,
        updated: doc.updated,
        details: doc.details
    });
});
router.get('/issues/:issue_id.json/updt', async function (req, res, next) {
    var doc = await issue.getSingleIssue(req.params.issue_id);
    res.render('issueUpdate', {
        id: req.params.issue_id,
        title: doc.title,
        status: doc.status,
        name: doc.assignee,
        details: doc.details
    });
});
router.put('/issues/issues.json', async function (req, res, next) {
    var json_body = req.body;
    issue.makeIssues(json_body);
});
router.post('/issues/:issue_id.json', async function (req, res, next) {
    var json_body = req.body;
    await issue.updtIssues(req.params.issue_id, json_body);
    res.redirect('/issues');
});
router.delete('/issues/:issue_id.json/del', async function (req, res, next) {
    issue.delIssues(req.params.issue_id);
});
module.exports = router;
