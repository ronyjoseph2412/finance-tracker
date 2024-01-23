import mongoose from "mongoose";

const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

export const db = {
  User: userModel(),
  UserFinancials: userFinancials(),
};

// mongoose models with schema definitions

function userModel() {
  const schema = new Schema(
    {
      username: { type: String, unique: true, required: true },
      hash: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
    },
    {
      // add createdAt and updatedAt timestamps
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return mongoose.models.User || mongoose.model("User", schema);
}

function userFinancials() {
  const schema = new Schema(
    {
      username: {
        type: String,
        required: true,
      },
      incomeData: {
        type: Array,
        required: false,
        default: [],
      },
      expensesData: {
        type: Array,
        required: false,
        default: [],
      },
      investmentsData: {
        type: Array,
        required: false,
        default: [],
      },
    },
    {
      timestamps: true,
    }
  );

  schema.set("toJSON", {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.hash;
    },
  });

  return (
    mongoose.models.UserFinancials || mongoose.model("UserFinancials", schema)
  );
}
