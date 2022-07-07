const { request, response } = require("express");

const getEvents = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "getEvents",
  });
};

const createEvent = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "createEvent",
  });
};

const updateEvent = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "updateEvent",
  });
};

const deleteEvent = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "deleteEvent",
  });
};

module.exports = {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
};
