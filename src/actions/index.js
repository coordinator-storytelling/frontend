// server.get('/coord/:id/home') //fetches that coordinator's array of their own stories
// server.get('/coord/:id') //fetches that coordinator's profile info
// server.put('/coord/:id') //updates that coordinator's profile info
// server.delete('/coord/:id') //deletes that coordinator's profile
// server.get('/story/:id') //fetches that story by its id
// server.post('/coord/:id') //add a new story by the coordinator's id
// server.put('/story/:id') //updates that story by its id
// server.delete('/story/:id') //deletes that story by its id

// export const name = () => dispatch => {
//   axios
//     .get('https://bountiful-backend.herokuapp.com/')
//     .then(response => {
//       dispatch({
//         type: ,
//         payload:
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

import axios from 'axios';

export const GET_GLOBAL_STORIES = 'GET_GLOBAL_STORIES';
export const GET_COORDINATOR_STORIES = 'GET_COORDINATOR_STORIES';
export const NEW_STORY = 'NEW_STORY';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const DELETE_STORY = 'DELETE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';
export const GET_STORY_BY_ID = 'GET_STORY_BY_ID';

export const getGlobalStories = (options) => dispatch => {
  axios
    .get('https://bountiful-backend.herokuapp.com/donor/home', options)
    .then(response => {
      console.log(response);
      dispatch({
        type: GET_GLOBAL_STORIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Error: ', err);
    });
}

export const getCoordinatorStories = (id, options) => dispatch => {
  axios
    .get(`https://bountiful-backend.herokuapp.com/coord/${id}/home`, options)
    .then(response => {
      console.log(response);
      dispatch({
        type: GET_COORDINATOR_STORIES,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Error: ', err);
    });
}

export const getStoryByID = (id) => dispatch => {
  axios
    .get(`https://bountiful-backend.herokuapp.com/story/${id}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: GET_STORY_BY_ID,
        payload: response.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}

export const newStory = (id, story, options) => dispatch => {
  axios
    .post(`https://bountiful-backend.herokuapp.com/coord/${id}`, story, options)
    .then(response => {
      dispatch({
        type: NEW_STORY,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('New Story error: ', err);
    });
}

export const login = (user) => dispatch => {
  axios
    .post(`https://bountiful-backend.herokuapp.com/login`, user)
    .then(response => {
      localStorage.setItem('jwt', response.data.token);
      localStorage.setItem('user_id', response.data.user_id);
      dispatch({
        type: LOGIN,
        payload: true
      });
    })
    .catch(err => {
      console.log("Login Error: ", err);
    });
}

export const register = (newUser) => dispatch => {
  axios
    .post(`https://bountiful-backend.herokuapp.com/register`, newUser)
    .then(response => {
      dispatch({
        type: REGISTER
      });
    })
    .catch(err => {
      console.log("Registration Error: ", err);
    });
}

export const deleteStory = (storyID) => dispatch => {
  axios
  .delete(`https://bountiful-backend.herokuapp.com/story/${storyID}`)
  .then(response => {
    console.log(response);
    dispatch({
      type: DELETE_STORY,
      payload: response.data
    });
  })
  .catch(err => {
    console.log("Deletion Error: ", err);
  });
}

export const updateStory = (storyID, story) => dispatch => {
  axios
    .put(`https://bountiful-backend.herokuapp.com/story/${storyID}`, story)
    .then(response => {
      dispatch({
        type: UPDATE_STORY,
        payload: response.data
      });
    })
    .catch(err => {
      console.log('Update Error: ', err);
    });
}
