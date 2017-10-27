import axios from "~/plugins/axios"

export const state = () => ({
  users: [{id: 0, login: "John"}]
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setIds(state, ids) {
    state.ids = ids;
  },
  setItems(state, items) {
    state.items = items;
  }
}
export const actions = {
  async LOAD_ITEMS({commit}, dataUrl) {
    //const responseGH = await axios.get("users");
    const response = await axios.get(dataUrl);
    // const users = response.data;
    const ids = response.data;

    const tenIds = ids.slice(0, 10);

    const itemPromises = tenIds.map(id => axios.get(`item/${id}.json`));
    console.log(itemPromises);
    const itemResponses = await Promise.all(itemPromises);
    const items = itemResponses.map(res => res.data);


    //commit("setUsers", users);
    // commit("setIds", ids)
    commit("setItems", items);
  }
}
