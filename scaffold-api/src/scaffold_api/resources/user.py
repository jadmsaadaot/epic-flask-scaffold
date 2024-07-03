# Copyright © 2024 Province of British Columbia
#
# Licensed under the Apache License, Version 2.0 (the 'License');
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an 'AS IS' BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""API endpoints for managing an user resource."""

from http import HTTPStatus

from scaffold_api.services.user_service import UserService
from flask import request
from flask_cors import cross_origin
from flask_restx import Namespace, Resource

from scaffold_api.utils.util import allowedorigins, cors_preflight

API = Namespace('user', description='Endpoints for User Management')
"""Custom exception messages
"""


@cors_preflight('GET')
@API.route('/<user_id>')
class User(Resource):
    """User controller class."""

    @staticmethod
    @cross_origin(origins=allowedorigins())
    def get(user_id):
        """Fetch a user by id."""
        user = UserService.get_user_by_id(user_id)
        return user, HTTPStatus.OK
