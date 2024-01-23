import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { headers } from "next/headers";
import { db } from "./db";

const User = db.User;

export const usersRepo = {
  authenticate,
  getAll,
  getById,
  getCurrent,
  create,
  update,
  //   delete: _delete,
};

async function authenticate({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const user = await User.findOne({ username });

  if (!(user && bcrypt.compareSync(password, user.hash))) {
    return { message: "Username or password is incorrect" };
  }

  // create a jwt token that is valid for 7 days
  const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  return {
    user: user.toJSON(),
    token: token,
    message: "Login Successful",
  };
}

async function getAll() {
  return await User.find();
}

async function getById(id: string) {
  try {
    return await User.findById(id);
  } catch {
    throw "User Not Found";
  }
}

async function getCurrent() {
  try {
    const currentUserId = headers().get("userId");
    return await User.findById(currentUserId);
  } catch {
    throw "Current User Not Found";
  }
}

async function create(params: any) {
  // validate
  if (await User.findOne({ username: params.username })) {
    return { message: 'Username is already taken' };
  }

  const user = new User(params);
  const userFinancials = new db.UserFinancials({
    username: params.username,
  });
  if (params.password) {
    user.hash = bcrypt.hashSync(params.password, 10);
  }
  await user.save();
  await userFinancials.save();
  return { message: "User Created Successfully" };
}

async function update(id: string, params: any) {
  const user = await User.findById(id);

  // validate
  if (!user) throw "User not found";
  if (
    user.username !== params.username &&
    (await User.findOne({ username: params.username }))
  ) {
    throw 'Username "' + params.username + '" is already taken';
  }

  // hash password if it was entered
  if (params.password) {
    params.hash = bcrypt.hashSync(params.password, 10);
  }

  // copy params properties to user
  Object.assign(user, params);

  await user.save();
}

// async function _delete(id: string) {
//   await User.findByIdAndRemove(id);
// }
