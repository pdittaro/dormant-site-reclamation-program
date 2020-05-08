from app.extensions import api
from flask_restplus import fields

SUBMISSION = api.model('Submission', {
    'submission_id': fields.Integer,
    'json': fields.String,
})
