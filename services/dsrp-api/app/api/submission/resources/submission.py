from flask_restplus import Resource, fields
from app.extensions import api
from app.api.utils.access_decorators import (requires_any_of, VIEW_ALL, MINESPACE_PROPONENT)
from app.api.utils.resources_mixins import UserMixin
from app.api.submission.models.submission import Submission
from app.api.submission.response_models import SUBMISSION


class SubmissionResource(Resource, UserMixin):
    @api.doc(description='This endpoint returns a list of all submissions.')
    @requires_any_of([VIEW_ALL, MINESPACE_PROPONENT])
    @api.marshal_with(SUBMISSION, code=200, envelope='records')
    def get(self):
        records = Submission.get_active()
        return records
