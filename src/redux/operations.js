import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  tagTypes: ["Contacts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61a9124e33e9df0017ea3ca8.mockapi.io/",
  }),
  endpoints: (builder) => ({
    fetchContact: builder.query({
      query: () => `/contacts`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contacts", id })),
              { type: "Contacts", id: "LIST" },
            ]
          : [{ type: "Contacts", id: "LIST" }],
    }),
    addContacts: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: { ...newContact },
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
    deleteContacts: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contacts", id: "LIST" }],
    }),
  }),
});

export const {
  useFetchContactQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
