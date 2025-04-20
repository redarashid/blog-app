// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../models/post.model";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => "/posts",
      providesTags: ["Post"],
    }),

    addNewPost: builder.mutation({
      query: (payload) => ({
        url: "/posts",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Post"],
    }),

    updatePost: builder.mutation({
      query: (payload) => {
        console.log(payload);
        const { id, ...body } = payload;
        return {
          url: `/posts/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Post"],
    }),

    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
