import {baseURL} from "./baseUrl";
import axios from "axios";


export const getIdeas = async (type) =>{
  return await (await fetch(`${baseURL}/ideas/${type}`)).json()
}
export const upVote = async (id) =>{
  return await (axios.put(`${baseURL}/ideas/${id}/upvote`))
}