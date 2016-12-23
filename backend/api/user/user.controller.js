import User from './user.model';
import _ from 'lodash';

const accountIsInactive = 'Logowanie nie powiodło się: Konto jest nieaktywne';

export const registerHandler = (request, response) => {
  User.register(
    new User({
      username: request.body.username
    }),

    request.body.password,
    (error) => {
      if (error) {
        return response.json({
          error: error,
          success: false
        })
      }

      response.json({
        success: true
      })
    }
  )
};

export const loginHandler = (request, response) => {
    let { user } = request;
    console.log(user);
    if (user.active) {
      response.json({
        success: true
      })
    } else {
      response.json({
        success: false,
        error: {
          code: 401,
          message: accountIsInactive
        }
      })
    }
};

export const logoutHandler = (request, response) => {
  if (request.isAuthenticated())
    request.session.destroy();

  response.json({
    success: true
  })
};

export const authenticateHandler = (request, response) => {
  let { user } = request;
  let userInfo = _.pick(user, ['role']);

  response.json({
    success: true,
    user: userInfo
  })
};

export const getAllUsersHandler = (request, response) => {
  User.find({}, (error, users) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      });
    }

    response.json({
      success: true,
      users
    });
  });
};

export const deleteUserByIdHandler = (request, response) => {
  let { params } = request;
  let { userId } = params;

  User.remove({ _id: userId }, (error) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      });
    }

    response.json({
      success: true,
      message: 'Usuwanie użytkownika zakończone sukcesem'
    });
  });
};

export const updateUserByIdHandler = (request, response) => {
  let { params } = request;
  let { userId } = params;

  User.findOne({ _id: userId }, (error, user) => {
    if (error) {
      return response.json({
        error: error,
        success: false
      });
    }

    user = _.assign(user, request.body);

    user.save(function(error) {
      if (error) {
        return response.json({
          error: error,
          success: false
        });
      }

      response.json({
        success: true,
        message: 'Edycja użytkownika zakończona sukcesem'
      });
    });
  });
};

export const createUserHandler = (request, response) => {
  let { body } = request;

  let {
    username,
    password,
    name,
    surname,
    email
  } = body;

  User.register(
    new User({
      username,
      name,
      surname,
      email
    }),
    password,
    (error) => {
      if (error) {
        return response.json({
          error: error,
          success: false
        })
      }

      response.json({
        success: true,
        message: 'Dodawanie użytkownika zakończone sukcesem'
      })
    }
  )
};
