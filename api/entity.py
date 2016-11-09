from tornado.web import RequestHandler
import jwt

from api.mixins import RestMixin


class MainHandler(RestMixin, RequestHandler):
    def get(self):
        self.jsonify(code=200, message="Hello, world")


class LoginHandler(RestMixin, RequestHandler):
    def post(self):
        payload = self.get_payload()
        mail = payload["mail"]
        token = jwt.encode({'mail': mail}, 'isfhdiashdfiadgsfogadsifg', 'HS512').decode()
        self.jsonify(code=200, token=token)
