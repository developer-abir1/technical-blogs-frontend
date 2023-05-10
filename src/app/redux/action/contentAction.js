import {
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
} from '../actionTypes/actionTypes'

export const getContent = (content) => {
  return {
    type: GET_CONTENT,
    payload: content,
  }
}

export const addContent = (content) => {
  return {
    type: ADD_CONTENT,
    payload: content,
  }
}

export const deleteContent = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  }
}
