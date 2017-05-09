import $ from 'jquery';
import store from './store.js';

const bucketId = 'ec5331fc-5e6d-44f0-990b-577f0d49c5e4';
const baseUrl = 'https://spiffy-todo-api.herokuapp.com/api/';

const Api = {

  refreshData: function() {
    $.ajax({
      url: `${baseUrl}items?bucketId=${bucketId}`
    })
    .done((data) => {
      const action = { type: 'UPDATE_ITEMS', items: data.items };
      store.dispatch(action);
    });
  },

  delete: function(id, cb) {
    $.ajax({
      url: `${baseUrl}item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done(cb);
  },

  createNewItem: function(inputText) {
    $.ajax({
      url: `${baseUrl}item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done(() => {
      const action = { type: 'CLEAR_INPUT' };
      store.dispatch(action);

      this.refreshData();
    });
  }



}

module.exports = Api;
