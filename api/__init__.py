from tornado.web import Application
from tornado.options import define

define('port', default=8000, type=int, help='server port')
define('bind', default='127.0.0.1', type=str, help='server bind')


def make_app(router, **settings):
    app = Application(router, **settings)
    return app
