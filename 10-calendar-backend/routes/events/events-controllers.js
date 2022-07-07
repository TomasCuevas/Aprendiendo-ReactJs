const { request, response } = require("express");

/**
 * @models
 */
const Event = require("../../database/models/EventModel");

const getEvents = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "getEvents",
  });
};

const createEvent = async (req = request, res = response) => {
  try {
    const newEvent = await Event(req.body);
    newEvent.user = req.uid;
    const eventSaved = await newEvent.save();

    res.status(201).json({
      ok: true,
      eventSaved,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "contacte con un administrador.",
    });
  }
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
