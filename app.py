import os

from api import make_app
from tornado.ioloop import IOLoop
from tornado.options import parse_config_file, parse_command_line, options

from api.entity import MainHandler, LoginHandler

routes = [
    (r'/index', MainHandler),
    (r'/api/user/login', LoginHandler)
]

if __name__ == '__main__':
    # if os.path.exists('/etc/cmdb.conf'):
    #     parse_config_file('/etc/cmdb.conf')
    # if os.path.exists('./application.conf'):
    #     parse_config_file('./application.conf')
    parse_command_line()
    app = make_app(routes, debug=True)
    app.listen(options.port, address=options.bind)
    try:
        IOLoop().current().start()
    except KeyboardInterrupt:
        IOLoop().current().stop()
