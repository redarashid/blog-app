import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "../../models/category.model";

export const categoryApi = createApi({
  reducerPath: "categoryApi",

  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),

  tagTypes: ["Category"],

  endpoints: (builder) => ({
    getCategories: builder.query<Category[], string>({
      query: (name) => "/categories",
      providesTags: ["Category"],
    }),

    addNewCategory: builder.mutation({
      query: (payload) => ({
        url: "/categories",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation({
      query: (payload) => {
        console.log(payload);
        const { id, ...body } = payload;
        return {
          url: `/categories/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Category"],
    }),

    // Define a mutation to delete a category. It takes an 'id' parameter specifying the category to be deleted.
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

// Destructure and export the query and mutation hooks for the defined endpoints.
export const {
  useGetCategoriesQuery,
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
