"""Service for user management."""
from api.models.user import User as UserModel
from api.schemas.user import UserSchema


class UserService:
    """User management service."""

    @classmethod
    def get_user_by_id(cls, _user_id):
        """Get user by id."""
        user_schema = UserSchema()
        db_user = UserModel.find_by_id(_user_id)
        user = user_schema.dump(db_user)
        return user
