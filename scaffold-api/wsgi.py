# from flask_migrate import Migrate

from scaffold_api import create_app

application = create_app()
# migrate = Migrate(application, db)


if __name__ == "__main__":
    application.run(debug=True, host='0.0.0.0', port=5000)