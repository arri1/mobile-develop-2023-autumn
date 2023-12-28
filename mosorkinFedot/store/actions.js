import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, auth } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { setPosts } from "./slices/postsSlice";

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData, { getState, rejectWithValue }) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        return rejectWithValue("User not authenticated");
      }

      await db.collection("posts").add({
        ...postData,
        email: currentUser.email,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        return rejectWithValue("User not authenticated");
      }

      const postsQuerySnapshot = await db
        .collection("posts")
        .orderBy("timestamp", "desc")
        .get();

      const userPosts = postsQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().getTime() ?? null,
      }));

      dispatch(setPosts(userPosts));
      return userPosts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
