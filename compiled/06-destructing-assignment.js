"use strict";

var state = Object.freeze({
  loading: false,
  error: null,
  data: [{
    id: 'kwdvj2ke1',
    title: 'euid'
  }, {
    id: 'zwecr8kip',
    title: 'react'
  }, {
    id: 'jdw1vkke1',
    title: 'gitbook'
  }]
});
{
  var isGlobal = true;
  var loading = state.loading,
      error = state.error,
      resources = state.data;
  var first = resources[0],
      rest = resources.slice(1);
  console.log(first);
  console.log(rest);
}