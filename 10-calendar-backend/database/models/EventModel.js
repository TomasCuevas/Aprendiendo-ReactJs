const { Schema, model } = require("mongoose");

const EventSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

EventSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();

  return object;
});

const Event = model("events", EventSchema);

module.exports = Event;
