import React from 'react';
import { Loader } from 'components/Loader/Loader.js';
import { SinglePost } from './SinglePost/SinglePost.js';
import './PostList.css';

export const PostList = ({ postList, loading }) => {
  return (
    <section className="postlist" aria-label="List of thoughts">
      <ul>
        {!loading && postList.map((thought) => {
          return (
            // eslint-disable-next-line no-underscore-dangle
            <li key={thought._id}>
              <SinglePost thought={thought} />
            </li>
          )
        })}
      </ul>
      {loading && (<Loader />)}
    </section>
  )
}