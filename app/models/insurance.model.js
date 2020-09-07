module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      name: String,
      deductible: Number,
      stop_loss: Number,
      oop_max: Number
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Insurance = mongoose.model("insurance", schema);
  return Insurance;
};
