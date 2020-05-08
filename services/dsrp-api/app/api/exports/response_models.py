from app.extensions import api
from flask_restplus import fields

STATIC_CONTENT_MODEL = api.model('StaticContentModel', {
    'test': fields.String,
})
