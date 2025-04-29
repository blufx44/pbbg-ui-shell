import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (build) => ({
    getActions: build.query({
      query: (target) => `actions/${target}`,
      providesTags: (result, error, id) => [{ type: 'Actions' }],
    }),
    getInventory: build.query({
      query: () => `inventory`
    }),
    getQuests: build.query({
      query: () => `quests`,
      providesTags: (result, error, id) => [{ type: 'Quests' }],
    }),
    updateLocation: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `move/${id}`,
          method: 'PUT',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Location' }],
    }),
    changeEquipment: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `move/${id}`,
          method: 'PUT',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Actions' }],
    }),
    changeTarget: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `move/${id}`,
          method: 'PUT',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Actions' }],
    }),
    removeQuest: build.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `move/${id}`,
          method: 'PUT',
          body,
        }
      },
      // Invalidates all queries that subscribe to this Post `id` only.
      // In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
      invalidatesTags: (result, error, { id }) => [{ type: 'Actions' }],
    }),
  })
});

export const {
  useGetInventoryQuery,
  useGetActionsQuery,
  useGetQuestsQuery,
  useUpdateLocationMutation,
  useChangeEquipmentMutation,
  useChangeTargetMutation,
  useRemoveQuestMutation } = api;

