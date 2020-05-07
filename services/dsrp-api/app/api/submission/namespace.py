from flask_restplus import Namespace

from app.api.submission.resources.submission import SubmissionResource

api = Namespace('submission', description='')

api.add_resource(SubmissionResource, '')
